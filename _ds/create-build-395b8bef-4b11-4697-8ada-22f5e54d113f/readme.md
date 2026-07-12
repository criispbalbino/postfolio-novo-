# Create & Build — Design System

Complete brand & UI design system for **Create & Build**, a social-media, video, story-maker, design and event-coverage studio based in **Ingleses, Florianópolis — SC (Brazil)**.

The overall aesthetic is **minimalist, editorial, sophisticated**: generous whitespace, a clean grid, a strictly monochrome palette (black → off-white through a calibrated gray ramp) and confident, letter-spaced typography.

## Sources
- `uploads/CB - posts (1).png` — the original CB monogram logo (serif "CB" with "CREATE & BUILD" in spaced caps). Cropped and split into positive/negative variants in `assets/`.
- Written brief supplied by the client (palette hex values, font names, tone-of-voice direction, required applications). All values below come from that brief.

No codebase or Figma file was provided — the system is authored from the brief and the single logo asset.

---

## Index / manifest

- `styles.css` — entry point; `@import`s the four token files. Consumers link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `logo-cb-black.png` (positive), `logo-cb-white.png` (negative), `_src-logo.png` (original upload).
- `components/` — reusable primitives (see below).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/applications/` — brand applications (Instagram post, story, business card, e-mail signature).
- `SKILL.md` — Agent-Skills-compatible entry for downloading/using this system.

### Components
- **Logo** (`components/brand/`) — official CB lockup image with positive/negative variants and a typographic fallback.
- **Button** (`components/actions/`) — editorial CTA: `solid` / `outline` / `ghost` / `inverse`, three sizes.
- **Badge** (`components/content/`) — small uppercase media/category label (e.g. "Vídeo").
- **ServiceCard** (`components/content/`) — service / portfolio card with grayscale media, eyebrow, badge and hover lift.

### UI kits
- **Applications** (`ui_kits/applications/index.html`) — Instagram feed post, Story/highlight, business card (front+back), e-mail signature.

---

## CONTENT FUNDAMENTALS

**Language:** Brazilian Portuguese. Voice is **direct, human, contemporary — no generic clichés**.

- **Person:** speaks *with* the client, not down to them. Mixes an inclusive "a gente / nós" (we, the studio) with a direct "você / sua marca" (you). Warm but professional.
- **Casing:** headlines in sentence case or short declaratives; **labels, categories and the wordmark in UPPERCASE with wide letter-spacing** (the brand's typographic signature). Never ALL-CAPS body copy.
- **Punctuation:** confident short sentences and fragments. The em dash (—) is a signature connector ("Do roteiro ao corte final —"). Periods used for rhythm ("Crie. Construa.").
- **Emoji:** not used. The brand's warmth comes from copy and craft, not emoji.
- **Vibe:** editorial, self-assured, a little poetic but always concrete. Sells outcomes (presença, história, execução), not features.

**Example phrases (brand voice):**
- "A gente não posta por postar. A gente constrói presença."
- "Sua marca merece mais que um feed bonito."
- "Do roteiro ao corte final — a história é sua, a execução é nossa."
- "Conteúdo que parece você. Só que melhor produzido."
- "Ingleses, Floripa e onde o seu evento acontecer."

---

## VISUAL FOUNDATIONS

**Palette.** Strictly monochrome. Principal black `#1a1a1a`, off-white `#f2f2f0`, light gray `#e8e8e5`, mid gray `#4a4a4a`, soft gray `#9a9a9a`, plus a derived neutral ramp (900→000) for UI depth. No accent hue — contrast and typography carry the design. Subtle black→graphite and off-white→gray **gradients** are reserved for motion, dynamic backgrounds and transitions, never for flat UI fills.

**Typography.** Display = **Berlin Sans FB** (headlines, brand name) — self-hosted. Body = **Aileron** (running text, captions) — self-hosted. Both brand fonts are licensed and shipped in `assets/fonts/`. Hierarchy: título (48px) / subtítulo (32/22px) / corpo (16px) / legenda (13px). Wide tracking (`0.12–0.28em`) on uppercase labels is the brand signature.

**Spacing & grid.** 8px base grid, generous whitespace, clean columns. Container max 1200px. Layouts breathe — lots of negative space, editorial margins, hairline dividers over heavy boxes.

**Backgrounds.** Mostly flat off-white or black. Imagery is **full-bleed and grayscale** (grayscale filter applied to all photos for consistency). Subtle diagonal line textures and the black→graphite gradient are used for motion/story backgrounds. No busy patterns, no drop-shadow-heavy cards.

**Imagery vibe.** Black & white / desaturated, editorial, high-craft. Warm content, cool treatment — everything converges to the monochrome system via `filter: grayscale(100%)`.

**Corners & borders.** Predominantly **square** (radius 0); at most 2–4px on interactive chrome. Borders are hairline (1px) `--cb-gray-light`, or a heavy 1.5–2px black rule for editorial emphasis (section dividers, buttons).

**Cards.** White surface, 1px light-gray border, **no radius**, no default shadow. On hover (interactive cards) they lift 4px with a soft `--shadow-md` and the image gently zooms — restrained, editorial motion.

**Shadows.** Soft and rare: `sm` (subtle), `md` (hover lift), `lg` (overlays). Elevation is understated; the system prefers borders and whitespace to shadows.

**Motion.** Fades and gentle lifts, no bounce. `--ease-out` (cubic-bezier(.16,1,.3,1)) for entrances, `--ease-standard` for state changes. Durations 160/260/480ms. Gradients animate for story/motion backgrounds.

**Hover / press states.** Solid buttons drop to ~82% opacity on hover; outline buttons invert to solid black; ghost fades. No color shifts beyond the monochrome ramp. Press states rely on the same opacity/invert logic — no scale-shrink by default.

**Transparency & blur.** Used sparingly — protection gradients over imagery (`--cb-grad-fade`) so white text stays legible on photos. No frosted-glass motifs.

**Layout rules.** Fixed wordmark lockups keep their clear space (= height of the "C"). Minimum size: 24px tall (digital) / 15mm (print). Never distort, recolor, rotate, or place the logo on low-contrast backgrounds.

---

## ICONOGRAPHY

The brand ships **no proprietary icon set**. Iconography is minimal and functional, used only where it aids scanning (a play triangle on a video badge, a camera on reels, a directional arrow on a button).

- **Approach:** thin, monochrome, geometric line/solid icons matching the editorial tone. Stroke ~2px, `currentColor` so they inherit text color.
- **In this system:** small inline SVGs are used inside cards and the Applications kit (play, camera, grid, arrow). For real products, use a **CDN line-icon set with a matching stroke weight — Lucide** (`https://unpkg.com/lucide`) is the recommended substitute; it matches the thin-geometric look. This is a **substitution** (no brand icon set was provided) — flag & replace if the studio adopts a specific set.
- **Emoji:** never used in brand communication.
- **Unicode:** the "✕" mark is used only in guideline "don't" examples, not in product UI.

---

## CAVEATS

- **Fonts self-hosted.** Berlin Sans FB (`BerlinSansFB-Regular/Bold.ttf`) and Aileron (`Aileron-*.otf`) are the real licensed brand fonts, shipped in `assets/fonts/` and declared via `@font-face` in `tokens/fonts.css`.
- **Icon set substituted.** No brand icon library was provided — Lucide is recommended as the closest match.
- **Imagery is placeholder.** Application mockups use gradient/texture placeholders in place of real photography (apply grayscale to real photos).
- **Logo fallback** in the `Logo` component is typographic and does **not** reproduce the real serif monogram — always use the PNG asset for real work.
