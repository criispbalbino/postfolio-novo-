/* @ds-bundle: {"format":4,"namespace":"CreateBuildDesignSystem_395b8b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a798847a7b84","components/brand/Logo.jsx":"aef5699e2b37","components/content/Badge.jsx":"944fa8de88fa","components/content/ServiceCard.jsx":"1689a363bded","ui_kits/applications/Applications.jsx":"f764b51f26ae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CreateBuildDesignSystem_395b8b = window.CreateBuildDesignSystem_395b8b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Create & Build — Button
 * Editorial, mostly-square actions. Solid black default + outline variant.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  disabled = false,
  as = 'button',
  icon = null,
  iconRight = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 18px',
      fontSize: '0.6875rem'
    },
    md: {
      padding: '13px 28px',
      fontSize: '0.75rem'
    },
    lg: {
      padding: '17px 40px',
      fontSize: '0.8125rem'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    lineHeight: 1,
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1.5px solid var(--cb-black)',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), opacity var(--dur-fast)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.4 : 1,
    ...sizes[size]
  };
  const variants = {
    solid: {
      background: 'var(--cb-black)',
      color: 'var(--cb-off-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--cb-black)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--cb-black)',
      border: '1.5px solid transparent'
    },
    inverse: {
      background: 'var(--cb-off-white)',
      color: 'var(--cb-black)',
      border: '1.5px solid var(--cb-off-white)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'solid') e.currentTarget.style.opacity = '0.82';
      if (variant === 'outline') {
        e.currentTarget.style.background = 'var(--cb-black)';
        e.currentTarget.style.color = 'var(--cb-off-white)';
      }
      if (variant === 'ghost') e.currentTarget.style.opacity = '0.6';
      if (variant === 'inverse') e.currentTarget.style.opacity = '0.85';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? '0.4' : '1';
      if (variant === 'outline') {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = 'var(--cb-black)';
      }
    }
  }, rest), icon && !iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, children, icon && iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Create & Build — Logo
 * Renders the official CB lockup image when `src` is provided, otherwise a
 * typographic fallback (wordmark). Use the image asset for real applications.
 *   assets/logo-cb-black.png  (positive — dark mark on light)
 *   assets/logo-cb-white.png  (negative — light mark on dark)
 */
function Logo({
  src,
  variant = 'positive',
  width = 160,
  wordmarkOnly = false,
  style = {},
  ...rest
}) {
  const color = variant === 'negative' ? 'var(--cb-off-white)' : 'var(--cb-black)';
  if (src && !wordmarkOnly) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: "Create & Build",
      style: {
        width,
        height: 'auto',
        display: 'block',
        ...style
      }
    }, rest));
  }

  // Typographic fallback lockup
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: `${width * 0.4}px`,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color
    }
  }, "CB"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: `${width * 0.09}px`,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color
    }
  }, "Create\xA0&\xA0Build"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Create & Build — Badge
 * Small editorial label. Use for media type tags ("VÍDEO", "REELS", "EVENTO").
 */
function Badge({
  children,
  variant = 'solid',
  icon = null,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.625rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    lineHeight: 1,
    padding: '6px 11px',
    borderRadius: 'var(--radius-none)'
  };
  const variants = {
    solid: {
      background: 'var(--cb-black)',
      color: 'var(--cb-off-white)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--cb-black)',
      border: '1.5px solid var(--cb-black)'
    },
    light: {
      background: 'var(--cb-off-white)',
      color: 'var(--cb-black)'
    },
    muted: {
      background: 'var(--cb-gray-light)',
      color: 'var(--cb-gray-mid)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Create & Build — ServiceCard
 * Editorial service / portfolio card. Optional media area (image + badge),
 * eyebrow, title and description. Minimal border, soft hover lift.
 */
function ServiceCard({
  title,
  eyebrow,
  description,
  image,
  badge,
  index,
  footer,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--cb-white)',
      border: '1px solid var(--cb-gray-light)',
      borderRadius: 'var(--radius-none)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transform: hover && onClick ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: hover && onClick ? 'var(--shadow-md)' : 'var(--shadow-none)',
      transition: 'transform var(--dur-normal) var(--ease-out), box-shadow var(--dur-normal) var(--ease-out)',
      ...style
    }
  }, rest), image !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--cb-gray-light)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(100%)',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : null, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '14px',
      left: '14px'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '24px'
    }
  }, (eyebrow || index) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontFamily: 'var(--font-body)',
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--cb-gray-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, eyebrow), index ? /*#__PURE__*/React.createElement("span", null, index) : null), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: '1.375rem',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      color: 'var(--cb-black)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      color: 'var(--cb-gray-mid)'
    }
  }, description), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '6px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/applications/Applications.jsx
try { (() => {
/* Create & Build — Applications UI kit components. Composes DS primitives. */
const CBNS = window.CreateBuildDesignSystem_395b8b;
const IconPlay = () => /*#__PURE__*/React.createElement("svg", {
  width: "11",
  height: "11",
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 5v14l11-7z"
}));
const IconGrid = ({
  s = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "3",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "14",
  width: "7",
  height: "7"
}));

/* ---------- Instagram feed post (1080x1080 → shown at 460) ---------- */
function InstagramPost() {
  const {
    Logo,
    Badge
  } = CBNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 460,
      height: 460,
      background: 'var(--cb-off-white)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: 'var(--cb-grad-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 22px, transparent 22px 44px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      left: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "light",
    icon: /*#__PURE__*/React.createElement(IconPlay, null)
  }, "V\xEDdeo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 26,
      bottom: 26,
      right: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--cb-gray-soft)',
      marginBottom: 10
    }
  }, "Social Media \xB7 Reels"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.02,
      letterSpacing: '-.02em',
      color: 'var(--cb-off-white)'
    }
  }, "Sua marca", /*#__PURE__*/React.createElement("br", null), "merece mais", /*#__PURE__*/React.createElement("br", null), "que um feed", /*#__PURE__*/React.createElement("br", null), "bonito."))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 62,
      background: 'var(--cb-black)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-cb-white.png",
    variant: "negative",
    width: 104
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'var(--cb-gray-soft)'
    }
  }, "@createandbuild")));
}

/* ---------- Story / highlight (1080x1920 → shown at 260x462) ---------- */
function StoryHighlight() {
  const {
    Badge,
    Button
  } = CBNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      height: 462,
      background: 'var(--cb-black)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      color: 'var(--cb-off-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--cb-grad-dark)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 16,
      right: 16,
      display: 'flex',
      gap: 4
    }
  }, [1, 0.35, 0].map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 2,
      background: `rgba(242,242,240,${0.25 + o * 0.75})`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 30,
      left: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      border: '1px solid var(--cb-off-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12
    }
  }, "CB"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.1em'
    }
  }, "create & build")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 96,
      left: 22,
      right: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    style: {
      color: 'var(--cb-off-white)',
      borderColor: 'var(--cb-off-white)'
    }
  }, "Bastidores")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      top: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      lineHeight: 1.05,
      letterSpacing: '-.02em'
    }
  }, "Do roteiro ao corte final."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--cb-gray-soft)'
    }
  }, "A hist\xF3ria \xE9 sua. A execu\xE7\xE3o \xE9 nossa.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    fullWidth: true
  }, "Ver portf\xF3lio")));
}

/* ---------- Business card (front + back, 85x55mm → px) ---------- */
function BusinessCard() {
  const {
    Logo
  } = CBNS;
  const W = 340,
    H = 220;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      background: 'var(--cb-off-white)',
      boxShadow: 'var(--shadow-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-cb-black.png",
    width: 172
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      background: 'var(--cb-black)',
      color: 'var(--cb-off-white)',
      boxShadow: 'var(--shadow-md)',
      padding: 26,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-cb-white.png",
    variant: "negative",
    width: 92
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 17
    }
  }, "Est\xFAdio de conte\xFAdo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--cb-gray-soft)',
      marginTop: 4
    }
  }, "Social \xB7 V\xEDdeo \xB7 Eventos")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      lineHeight: 1.7,
      color: 'var(--cb-gray-light)'
    }
  }, "@createandbuild", /*#__PURE__*/React.createElement("br", null), "contato@createandbuild.com.br", /*#__PURE__*/React.createElement("br", null), "Ingleses \xB7 Florian\xF3polis \u2014 SC")));
}

/* ---------- Email signature ---------- */
function EmailSignature() {
  const {
    Logo
  } = CBNS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff',
      padding: 28,
      boxShadow: 'var(--shadow-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: 22,
      borderRight: '1px solid var(--cb-gray-light)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo-cb-black.png",
    width: 120
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cb-black)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 17
    }
  }, "Ana Martins"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--cb-gray-soft)',
      margin: '3px 0 10px'
    }
  }, "Diretora Criativa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.7,
      color: 'var(--cb-gray-mid)'
    }
  }, "contato@createandbuild.com.br \xB7 (48) 99999-0000", /*#__PURE__*/React.createElement("br", null), "Ingleses, Florian\xF3polis \u2014 SC \xB7 @createandbuild")));
}
Object.assign(window, {
  InstagramPost,
  StoryHighlight,
  BusinessCard,
  EmailSignature
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/applications/Applications.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
