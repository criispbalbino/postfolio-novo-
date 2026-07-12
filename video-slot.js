/**
 * <video-slot> — user-fillable video placeholder for Create & Build.
 * Drag a video file (or click) to fill; persists locally via IndexedDB.
 * Attributes: id (persist key, required), placeholder, ratio ("16/9" default | "9/16").
 * Monochrome editorial styling to match the CB design system.
 */
(function () {
  const DB_NAME = 'cb-video-slots';
  const STORE = 'videos';

  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(STORE);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  async function idbGet(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const req = tx.objectStore(STORE).get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }
  async function idbSet(key, val) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).put(val, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
  async function idbDel(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  class VideoSlot extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._objectUrl = null;
    }

    connectedCallback() {
      this._render();
      this._load();
    }

    get _key() { return 'video-slot:' + (this.getAttribute('id') || 'default'); }
    get _posKey() { return this._key + ':pos'; }

    _render() {
      const placeholder = this.getAttribute('placeholder') || 'Arraste um vídeo aqui';
      const ratio = this.getAttribute('ratio') || '16/9';
      this.shadowRoot.innerHTML = `
        <style>
          :host { display:block; width:100%; }
          .frame {
            position:relative; width:100%; aspect-ratio:${ratio};
            background:#1a1a1a; overflow:hidden;
          }
          .empty {
            position:absolute; inset:0; display:flex; flex-direction:column;
            align-items:center; justify-content:center; gap:14px;
            border:1px dashed #9a9a9a; cursor:pointer;
            color:#9a9a9a; text-align:center; padding:16px; box-sizing:border-box;
            transition:background .26s, border-color .26s;
          }
          .empty:hover, .empty.drag { background:#262626; border-color:#f2f2f0; color:#e8e8e5; }
          .empty svg { width:36px; height:36px; stroke:currentColor; fill:none; stroke-width:1.5; }
          .empty .txt {
            font-family:'Aileron', sans-serif; font-size:11px; font-weight:600;
            letter-spacing:.18em; text-transform:uppercase; line-height:1.6;
          }
          video { position:absolute; inset:0; width:100%; height:100%; object-fit:contain; background:#1a1a1a; }
          .clear {
            position:absolute; top:10px; right:10px; z-index:2;
            font-family:'Aileron', sans-serif; font-size:10px; font-weight:600;
            letter-spacing:.16em; text-transform:uppercase;
            background:rgba(26,26,26,.8); color:#f2f2f0; border:1px solid #4a4a4a;
            padding:6px 12px; cursor:pointer; opacity:0; transition:opacity .26s;
          }
          .frame:hover .clear { opacity:1; }
          input[type=file] { display:none; }
        </style>
        <div class="frame">
          <div class="empty" part="empty">
            <svg viewBox="0 0 24 24"><polygon points="10 8 16 12 10 16 10 8"></polygon><rect x="2" y="4" width="20" height="16"></rect></svg>
            <span class="txt">${placeholder}<br>ou clique para escolher</span>
          </div>
          <button class="clear" style="display:none">Substituir</button>
          <input type="file" accept="video/*">
        </div>
      `;
      const frame = this.shadowRoot.querySelector('.frame');
      const empty = this.shadowRoot.querySelector('.empty');
      const input = this.shadowRoot.querySelector('input');
      const clear = this.shadowRoot.querySelector('.clear');

      empty.addEventListener('click', () => input.click());
      clear.addEventListener('click', async (e) => {
        e.stopPropagation();
        await idbDel(this._key);
        localStorage.removeItem(this._posKey);
        this._showEmpty();
        input.value = '';
        input.click();
      });
      input.addEventListener('change', () => {
        if (input.files && input.files[0]) this._setFile(input.files[0]);
      });
      frame.addEventListener('dragover', (e) => { e.preventDefault(); empty.classList.add('drag'); });
      frame.addEventListener('dragleave', () => empty.classList.remove('drag'));
      frame.addEventListener('drop', (e) => {
        e.preventDefault();
        empty.classList.remove('drag');
        const f = e.dataTransfer.files && e.dataTransfer.files[0];
        if (f && f.type.startsWith('video/')) this._setFile(f);
      });
    }

    async _load() {
      try {
        const blob = await idbGet(this._key);
        if (blob) { this._showVideo(blob); return; }
      } catch (e) { /* idb unavailable */ }
      let src = this.getAttribute('src');
      if (src && window.__cbResolve) src = window.__cbResolve(src);
      if (src) this._showVideoSrc(src);
    }

    _showVideoSrc(src) {
      this.shadowRoot.querySelector('.empty').style.display = 'none';
      this.shadowRoot.querySelector('.clear').style.display = 'block';
      let v = this._ensureVideo();
      // Lazy: don't fetch until the slot is near the viewport, so a page
      // with many videos doesn't try to load them all at once.
      v.preload = 'none';
      if ('IntersectionObserver' in window) {
        this._pendingSrc = src;
        if (!this._lazyIO) {
          this._lazyIO = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting && this._pendingSrc) {
                // Load enough to paint the first frame (poster), otherwise
                // metadata-only preload leaves the element black.
                v.preload = 'auto';
                v.src = this._pendingSrc;
                v.load();
                // Nudge to the first frame so a still shows even if the
                // browser won't auto-render on load.
                const paint = () => {
                  try { if (v.currentTime < 0.05) v.currentTime = 0.05; } catch (err) {}
                  v.removeEventListener('loadeddata', paint);
                };
                v.addEventListener('loadeddata', paint);
                this._pendingSrc = null;
                this._lazyIO.disconnect();
              }
            });
          }, { rootMargin: '400px 0px' });
        }
        this._lazyIO.observe(this);
      } else {
        v.src = src;
      }
    }

    _ensureVideo() {
      let v = this.shadowRoot.querySelector('video');
      if (!v) {
        v = document.createElement('video');
        v.controls = true;
        v.preload = 'none';
        v.playsInline = true;
        this.shadowRoot.querySelector('.frame').appendChild(v);
        const rot = parseInt(this.getAttribute('rotate') || '0', 10);
        if (rot === 90 || rot === 270) {
          // Video recorded sideways: rotate to upright and fill the frame.
          v.style.position = 'absolute';
          v.style.top = '50%';
          v.style.left = '50%';
          v.style.width = '177.78%';   /* swapped: fills rotated box */
          v.style.height = '56.25%';
          v.style.objectFit = 'cover';
          v.style.transformOrigin = 'center';
          v.style.transform = 'translate(-50%, -50%) rotate(' + rot + 'deg)';
        }
        // Hover preview: silently loop while hovered, then pause.
        this.addEventListener('mouseenter', () => {
          if (this._pendingSrc) { v.preload = 'metadata'; v.src = this._pendingSrc; this._pendingSrc = null; }
          if (v.paused) {
            this._prevMuted = v.muted;
            v.muted = true;
            v.loop = true;
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
            this._hoverPlaying = true;
          }
        });
        this.addEventListener('mouseleave', () => {
          if (this._hoverPlaying) {
            v.pause();
            v.loop = false;
            v.muted = this._prevMuted || false;
            this._hoverPlaying = false;
          }
        });
        v.addEventListener('timeupdate', () => {
          if (!v.seeking) localStorage.setItem(this._posKey, String(v.currentTime));
        });
        v.addEventListener('loadedmetadata', () => {
          const pos = parseFloat(localStorage.getItem(this._posKey) || '0');
          if (pos > 0 && pos < v.duration - 1) {
            v.currentTime = pos;
          } else {
            // Nudge to the first frame so it shows a thumbnail instead of black.
            try { v.currentTime = Math.min(0.1, (v.duration || 1) / 2); } catch (e) {}
          }
        });
      }
      return v;
    }

    async _setFile(file) {
      try { await idbSet(this._key, file); } catch (e) { /* store best-effort */ }
      localStorage.removeItem(this._posKey);
      this._showVideo(file);
    }

    _showEmpty() {
      const v = this.shadowRoot.querySelector('video');
      if (v) v.remove();
      if (this._objectUrl) { URL.revokeObjectURL(this._objectUrl); this._objectUrl = null; }
      this.shadowRoot.querySelector('.empty').style.display = 'flex';
      this.shadowRoot.querySelector('.clear').style.display = 'none';
    }

    _showVideo(blob) {
      if (this._objectUrl) URL.revokeObjectURL(this._objectUrl);
      this._objectUrl = URL.createObjectURL(blob);
      this.shadowRoot.querySelector('.empty').style.display = 'none';
      this.shadowRoot.querySelector('.clear').style.display = 'block';
      let v = this._ensureVideo();
      v.src = this._objectUrl;
    }
  }

  if (!customElements.get('video-slot')) customElements.define('video-slot', VideoSlot);
})();
