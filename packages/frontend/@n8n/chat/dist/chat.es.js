import { ref as he, computed as W, nextTick as du, markRaw as g, createElementBlock as h, openBlock as d, createElementVNode as s, renderSlot as He, inject as vt, isRef as fc, defineComponent as be, createVNode as me, withCtx as Ae, createTextVNode as k0, toDisplayString as Pe, unref as N, createCommentVNode as ue, createBlock as ee, getCurrentScope as hc, onScopeDispose as pc, readonly as gc, withModifiers as yt, onMounted as Qe, onUnmounted as Et, normalizeStyle as Mt, withDirectives as At, withKeys as bc, vModelText as mc, Fragment as Tu, renderList as Ru, onBeforeUnmount as _c, createStaticVNode as je, useCssModule as Dt, resolveDynamicComponent as w0, normalizeClass as C0, mergeProps as v0, shallowRef as xc, h as kc, toRefs as wc, normalizeProps as X0, guardReactiveProps as Cc, Transition as s0, vShow as vc, watch as yc, createApp as Ec } from "vue";
/*! Package version @n8n/chat@1.0.0 */
const nu = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: !1,
  showPoweredBy: !0,
  initialMessages: ["Hi there! 👋", "My name is Nathan. How can I assist you today?"],
  welcomeMessage: {
    enabled: !1
  },
  i18n: {
    en: {
      title: "Hi there! 👋",
      subtitle: "",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question..",
      closeButtonTooltip: "Close chat",
      elevenLabsButtonTooltip: "Open ElevenLabs Agent"
    }
  },
  theme: {}
}, Mc = "#n8n-chat", Ac = "n8n-chat", J0 = `${Ac}/sessionId`, Bt = "Chat", St = "ChatOptions";
var fe = [];
for (var Yu = 0; Yu < 256; ++Yu)
  fe.push((Yu + 256).toString(16).slice(1));
function Dc(e, u = 0) {
  return (fe[e[u + 0]] + fe[e[u + 1]] + fe[e[u + 2]] + fe[e[u + 3]] + "-" + fe[e[u + 4]] + fe[e[u + 5]] + "-" + fe[e[u + 6]] + fe[e[u + 7]] + "-" + fe[e[u + 8]] + fe[e[u + 9]] + "-" + fe[e[u + 10]] + fe[e[u + 11]] + fe[e[u + 12]] + fe[e[u + 13]] + fe[e[u + 14]] + fe[e[u + 15]]).toLowerCase();
}
var Au, Bc = new Uint8Array(16);
function Sc() {
  if (!Au && (Au = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Au))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Au(Bc);
}
var Lc = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Y0 = {
  randomUUID: Lc
};
function lu(e, u, t) {
  if (Y0.randomUUID && !e)
    return Y0.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || Sc)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Dc(n);
}
async function Ic() {
  return "";
}
async function y0(...e) {
  var o, c;
  const u = await Ic(), t = (o = e[1]) == null ? void 0 : o.body, n = {
    ...u ? { authorization: `Bearer ${u}` } : {},
    ...(c = e[1]) == null ? void 0 : c.headers
  };
  return t instanceof FormData ? delete n["Content-Type"] : n["Content-Type"] = "application/json", await (await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: n
  })).json();
}
async function Lt(e, u = {}, t = {}) {
  let n = e;
  return Object.keys(u).length > 0 && (n = `${n}?${new URLSearchParams(
    u
  ).toString()}`), await y0(n, { ...t, method: "GET" });
}
async function It(e, u = {}, t = {}) {
  return await y0(e, {
    ...t,
    method: "POST",
    body: JSON.stringify(u)
  });
}
async function Fc(e, u = {}, t = [], n = {}) {
  const r = new FormData();
  for (const o in u)
    r.append(o, u[o]);
  for (const o of t)
    r.append("files", o);
  return await y0(e, {
    ...n,
    method: "POST",
    body: r
  });
}
async function $c(e, u) {
  var n, r;
  return await (((n = u.webhookConfig) == null ? void 0 : n.method) === "POST" ? It : Lt)(
    `${u.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [u.chatSessionKey]: e,
      ...u.metadata ? { metadata: u.metadata } : {}
    },
    {
      headers: (r = u.webhookConfig) == null ? void 0 : r.headers
    }
  );
}
async function Tc(e, u, t, n) {
  var o, c, i;
  return u.length > 0 ? await Fc(
    `${n.webhookUrl}`,
    {
      action: "sendMessage",
      [n.chatSessionKey]: t,
      [n.chatInputKey]: e,
      ...n.metadata ? { metadata: n.metadata } : {}
    },
    u,
    {
      headers: (o = n.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((c = n.webhookConfig) == null ? void 0 : c.method) === "POST" ? It : Lt)(
    `${n.webhookUrl}`,
    {
      action: "sendMessage",
      [n.chatSessionKey]: t,
      [n.chatInputKey]: e,
      ...n.metadata ? { metadata: n.metadata } : {}
    },
    {
      headers: (i = n.webhookConfig) == null ? void 0 : i.headers
    }
  );
}
function Rc() {
  const e = /* @__PURE__ */ new Map();
  function u(r, o) {
    const c = e.get(r);
    c && c.splice(c.indexOf(o) >>> 0, 1);
  }
  function t(r, o) {
    let c = e.get(r);
    return c ? c.push(o) : c = [o], e.set(r, c), () => u(r, o);
  }
  function n(r, o) {
    const c = e.get(r);
    c && c.slice().forEach(async (i) => {
      await i(o);
    });
  }
  return {
    on: t,
    off: u,
    emit: n
  };
}
function Nc(e) {
  if (!document.querySelector(e)) {
    const t = document.createElement("div");
    e.startsWith("#") && (t.id = e.replace("#", "")), e.startsWith(".") && t.classList.add(e.replace(".", "")), document.body.appendChild(t);
  }
}
function Oc(e) {
  if (!e) return;
  const u = zc(e);
  u && Hc(u), e.customCSS && Pc(e.customCSS);
}
function zc(e) {
  const u = {};
  return e.primaryColor && (u["--chat--color-primary"] = e.primaryColor), e.primaryColorShade50 && (u["--chat--color-primary-shade-50"] = e.primaryColorShade50), e.primaryColorShade100 && (u["--chat--color-primary-shade-100"] = e.primaryColorShade100), e.secondaryColor && (u["--chat--color-secondary"] = e.secondaryColor), e.secondaryColorShade50 && (u["--chat--color-secondary-shade-50"] = e.secondaryColorShade50), e.whiteColor && (u["--chat--color-white"] = e.whiteColor), e.lightColor && (u["--chat--color-light"] = e.lightColor), e.lightColorShade50 && (u["--chat--color-light-shade-50"] = e.lightColorShade50), e.lightColorShade100 && (u["--chat--color-light-shade-100"] = e.lightColorShade100), e.mediumColor && (u["--chat--color-medium"] = e.mediumColor), e.darkColor && (u["--chat--color-dark"] = e.darkColor), e.disabledColor && (u["--chat--color-disabled"] = e.disabledColor), e.typingColor && (u["--chat--color-typing"] = e.typingColor), e.spacing && (u["--chat--spacing"] = e.spacing), e.borderRadius && (u["--chat--border-radius"] = e.borderRadius), e.transitionDuration && (u["--chat--transition-duration"] = e.transitionDuration), e.fontFamily && (u["--chat--font-family"] = e.fontFamily), e.windowWidth && (u["--chat--window--width"] = e.windowWidth), e.windowHeight && (u["--chat--window--height"] = e.windowHeight), e.windowBottom && (u["--chat--window--bottom"] = e.windowBottom), e.windowRight && (u["--chat--window--right"] = e.windowRight), e.windowZIndex && (u["--chat--window--z-index"] = e.windowZIndex), e.windowBorder && (u["--chat--window--border"] = e.windowBorder), e.windowBorderRadius && (u["--chat--window--border-radius"] = e.windowBorderRadius), e.windowMarginBottom && (u["--chat--window--margin-bottom"] = e.windowMarginBottom), e.headerHeight && (u["--chat--header-height"] = e.headerHeight), e.headerPadding && (u["--chat--header--padding"] = e.headerPadding), e.headerBackground && (u["--chat--header--background"] = e.headerBackground), e.headerColor && (u["--chat--header--color"] = e.headerColor), e.headerBorderTop && (u["--chat--header--border-top"] = e.headerBorderTop), e.headerBorderBottom && (u["--chat--header--border-bottom"] = e.headerBorderBottom), e.headerBorderLeft && (u["--chat--header--border-left"] = e.headerBorderLeft), e.headerBorderRight && (u["--chat--header--border-right"] = e.headerBorderRight), e.headingFontSize && (u["--chat--heading--font-size"] = e.headingFontSize), e.subtitleFontSize && (u["--chat--subtitle--font-size"] = e.subtitleFontSize), e.subtitleLineHeight && (u["--chat--subtitle--line-height"] = e.subtitleLineHeight), e.messageFontSize && (u["--chat--message--font-size"] = e.messageFontSize), e.messagePadding && (u["--chat--message--padding"] = e.messagePadding), e.messageBorderRadius && (u["--chat--message--border-radius"] = e.messageBorderRadius), e.messageLineHeight && (u["--chat--message-line-height"] = e.messageLineHeight), e.messageMarginBottom && (u["--chat--message--margin-bottom"] = e.messageMarginBottom), e.botMessageBackground && (u["--chat--message--bot--background"] = e.botMessageBackground), e.botMessageColor && (u["--chat--message--bot--color"] = e.botMessageColor), e.botMessageBorder && (u["--chat--message--bot--border"] = e.botMessageBorder), e.userMessageBackground && (u["--chat--message--user--background"] = e.userMessageBackground), e.userMessageColor && (u["--chat--message--user--color"] = e.userMessageColor), e.userMessageBorder && (u["--chat--message--user--border"] = e.userMessageBorder), e.messagePreBackground && (u["--chat--message--pre--background"] = e.messagePreBackground), e.messagesListPadding && (u["--chat--messages-list--padding"] = e.messagesListPadding), e.toggleSize && (u["--chat--toggle--size"] = e.toggleSize), e.toggleWidth && (u["--chat--toggle--width"] = e.toggleWidth), e.toggleHeight && (u["--chat--toggle--height"] = e.toggleHeight), e.toggleBorderRadius && (u["--chat--toggle--border-radius"] = e.toggleBorderRadius), e.toggleBackground && (u["--chat--toggle--background"] = e.toggleBackground), e.toggleHoverBackground && (u["--chat--toggle--hover--background"] = e.toggleHoverBackground), e.toggleActiveBackground && (u["--chat--toggle--active--background"] = e.toggleActiveBackground), e.toggleColor && (u["--chat--toggle--color"] = e.toggleColor), e.textareaHeight && (u["--chat--textarea--height"] = e.textareaHeight), e.textareaMaxHeight && (u["--chat--textarea--max-height"] = e.textareaMaxHeight), e.inputFontSize && (u["--chat--input--font-size"] = e.inputFontSize), e.inputBorder && (u["--chat--input--border"] = e.inputBorder), e.inputBorderRadius && (u["--chat--input--border-radius"] = e.inputBorderRadius), e.inputPadding && (u["--chat--input--padding"] = e.inputPadding), e.inputBackground && (u["--chat--input--background"] = e.inputBackground), e.inputTextColor && (u["--chat--input--text-color"] = e.inputTextColor), e.inputLineHeight && (u["--chat--input--line-height"] = e.inputLineHeight), e.inputPlaceholderFontSize && (u["--chat--input--placeholder--font-size"] = e.inputPlaceholderFontSize), e.inputBorderActive && (u["--chat--input--border-active"] = e.inputBorderActive), e.inputLeftPanelWidth && (u["--chat--input--left--panel--width"] = e.inputLeftPanelWidth), e.buttonColor && (u["--chat--button--color"] = e.buttonColor), e.buttonBackground && (u["--chat--button--background"] = e.buttonBackground), e.buttonPadding && (u["--chat--button--padding"] = e.buttonPadding), e.buttonBorderRadius && (u["--chat--button--border-radius"] = e.buttonBorderRadius), e.buttonHoverColor && (u["--chat--button--hover--color"] = e.buttonHoverColor), e.buttonHoverBackground && (u["--chat--button--hover--background"] = e.buttonHoverBackground), e.closeButtonSize && (u["--chat--close--button--size"] = e.closeButtonSize), e.closeButtonColor && (u["--chat--close--button--color"] = e.closeButtonColor), e.closeButtonBackground && (u["--chat--close--button--background"] = e.closeButtonBackground), e.closeButtonColorHover && (u["--chat--close--button--color-hover"] = e.closeButtonColorHover), e.closeButtonBackgroundHover && (u["--chat--close--button--background-hover"] = e.closeButtonBackgroundHover), e.closeButtonBorderRadius && (u["--chat--close--button--border-radius"] = e.closeButtonBorderRadius), e.closeButtonPadding && (u["--chat--close--button--padding"] = e.closeButtonPadding), e.closeButtonIconSize && (u["--chat--close--button--icon-size"] = e.closeButtonIconSize), e.closeButtonPosition && (u["--chat--close--button--position"] = e.closeButtonPosition), e.closeButtonTop && (u["--chat--close--button--top"] = e.closeButtonTop), e.closeButtonRight && (u["--chat--close--button--right"] = e.closeButtonRight), e.closeButtonBottom && (u["--chat--close--button--bottom"] = e.closeButtonBottom), e.closeButtonLeft && (u["--chat--close--button--left"] = e.closeButtonLeft), e.closeButtonZIndex && (u["--chat--close--button--z-index"] = e.closeButtonZIndex), e.sendButtonBackground && (u["--chat--input--send--button--background"] = e.sendButtonBackground), e.sendButtonColor && (u["--chat--input--send--button--color"] = e.sendButtonColor), e.sendButtonBackgroundHover && (u["--chat--input--send--button--background-hover"] = e.sendButtonBackgroundHover), e.sendButtonColorHover && (u["--chat--input--send--button--color-hover"] = e.sendButtonColorHover), e.fileButtonBackground && (u["--chat--input--file--button--background"] = e.fileButtonBackground), e.fileButtonColor && (u["--chat--input--file--button--color"] = e.fileButtonColor), e.fileButtonBackgroundHover && (u["--chat--input--file--button--background-hover"] = e.fileButtonBackgroundHover), e.fileButtonColorHover && (u["--chat--input--file--button--color-hover"] = e.fileButtonColorHover), e.filesSpacing && (u["--chat--files-spacing"] = e.filesSpacing), e.elevenLabsButtonBackground && (u["--chat--input--elevenlabs--button--background"] = e.elevenLabsButtonBackground), e.elevenLabsButtonColor && (u["--chat--input--elevenlabs--button--color"] = e.elevenLabsButtonColor), e.elevenLabsButtonBackgroundHover && (u["--chat--input--elevenlabs--button--background-hover"] = e.elevenLabsButtonBackgroundHover), e.elevenLabsButtonColorHover && (u["--chat--input--elevenlabs--button--color-hover"] = e.elevenLabsButtonColorHover), e.elevenLabsButtonBackgroundDisabled && (u["--chat--input--elevenlabs--button--background-disabled"] = e.elevenLabsButtonBackgroundDisabled), e.elevenLabsButtonColorDisabled && (u["--chat--input--elevenlabs--button--color-disabled"] = e.elevenLabsButtonColorDisabled), e.elevenLabsButtonBorderRadius && (u["--chat--input--elevenlabs--button--border-radius"] = e.elevenLabsButtonBorderRadius), e.elevenLabsButtonFocusColor && (u["--chat--input--elevenlabs--button--focus-color"] = e.elevenLabsButtonFocusColor), e.bodyBackground && (u["--chat--body--background"] = e.bodyBackground), e.footerBackground && (u["--chat--footer--background"] = e.footerBackground), e.footerColor && (u["--chat--footer--color"] = e.footerColor), e.welcomeMessageBackground && (u["--chat--welcome-message--background"] = e.welcomeMessageBackground), e.welcomeMessageColor && (u["--chat--welcome-message--color"] = e.welcomeMessageColor), e.welcomeMessageBorder && (u["--chat--welcome-message--border"] = e.welcomeMessageBorder), e.welcomeMessageBorderRadius && (u["--chat--welcome-message--border-radius"] = e.welcomeMessageBorderRadius), e.welcomeMessagePadding && (u["--chat--welcome-message--padding"] = e.welcomeMessagePadding), e.welcomeMessageFontSize && (u["--chat--welcome-message--font-size"] = e.welcomeMessageFontSize), e.welcomeMessageFontFamily && (u["--chat--welcome-message--font-family"] = e.welcomeMessageFontFamily), e.welcomeMessageFontWeight && (u["--chat--welcome-message--font-weight"] = e.welcomeMessageFontWeight), e.welcomeMessageLineHeight && (u["--chat--welcome-message--line-height"] = e.welcomeMessageLineHeight), e.welcomeMessageMaxWidth && (u["--chat--welcome-message--max-width"] = e.welcomeMessageMaxWidth), e.welcomeMessageMinWidth && (u["--chat--welcome-message--min-width"] = e.welcomeMessageMinWidth), e.welcomeMessageBoxShadow && (u["--chat--welcome-message--box-shadow"] = e.welcomeMessageBoxShadow), e.welcomeMessageBoxShadowHover && (u["--chat--welcome-message--box-shadow-hover"] = e.welcomeMessageBoxShadowHover), e.welcomeMessageBorderHover && (u["--chat--welcome-message--border-hover"] = e.welcomeMessageBorderHover), e.welcomeMessageTransformHover && (u["--chat--welcome-message--transform-hover"] = e.welcomeMessageTransformHover), e.welcomeMessageTransition && (u["--chat--welcome-message--transition"] = e.welcomeMessageTransition), e.welcomeMessageZIndex && (u["--chat--welcome-message--z-index"] = e.welcomeMessageZIndex), e.welcomeMessagePosition && (u["--chat--welcome-message--position"] = e.welcomeMessagePosition), e.welcomeMessageBottom && (u["--chat--welcome-message--bottom"] = e.welcomeMessageBottom), e.welcomeMessageRight && (u["--chat--welcome-message--right"] = e.welcomeMessageRight), e.welcomeMessageTop && (u["--chat--welcome-message--top"] = e.welcomeMessageTop), e.welcomeMessageLeft && (u["--chat--welcome-message--left"] = e.welcomeMessageLeft), e.welcomeMessageAlignItems && (u["--chat--welcome-message--align-items"] = e.welcomeMessageAlignItems), e.welcomeMessageJustifyContent && (u["--chat--welcome-message--justify-content"] = e.welcomeMessageJustifyContent), e.welcomeMessageTextAlign && (u["--chat--welcome-message--text-align"] = e.welcomeMessageTextAlign), e.welcomeMessageIconSize && (u["--chat--welcome-message--icon--size"] = e.welcomeMessageIconSize), e.welcomeMessageIconGap && (u["--chat--welcome-message--icon--gap"] = e.welcomeMessageIconGap), e.welcomeMessageIconEmojiSize && (u["--chat--welcome-message--icon--emoji-size"] = e.welcomeMessageIconEmojiSize), e.welcomeMessageIconBorderRadius && (u["--chat--welcome-message--icon--border-radius"] = e.welcomeMessageIconBorderRadius), e.welcomeMessageIconBackground && (u["--chat--welcome-message--icon--background"] = e.welcomeMessageIconBackground), e.welcomeMessageIconPadding && (u["--chat--welcome-message--icon--padding"] = e.welcomeMessageIconPadding), e.welcomeMessageCloseSize && (u["--chat--welcome-message--close--size"] = e.welcomeMessageCloseSize), e.welcomeMessageCloseFontSize && (u["--chat--welcome-message--close--font-size"] = e.welcomeMessageCloseFontSize), e.welcomeMessageCloseColor && (u["--chat--welcome-message--close--color"] = e.welcomeMessageCloseColor), e.welcomeMessageCloseBackground && (u["--chat--welcome-message--close--background"] = e.welcomeMessageCloseBackground), e.welcomeMessageCloseBackgroundHover && (u["--chat--welcome-message--close--background-hover"] = e.welcomeMessageCloseBackgroundHover), e.welcomeMessageCloseColorHover && (u["--chat--welcome-message--close--color-hover"] = e.welcomeMessageCloseColorHover), e.welcomeMessageCloseBorderRadius && (u["--chat--welcome-message--close--border-radius"] = e.welcomeMessageCloseBorderRadius), e.welcomeMessageCloseTransition && (u["--chat--welcome-message--close--transition"] = e.welcomeMessageCloseTransition), e.welcomeMessageCloseFocusShadow && (u["--chat--welcome-message--close--focus-shadow"] = e.welcomeMessageCloseFocusShadow), e.welcomeMessageMobileMaxWidth && (u["--chat--welcome-message--mobile--max-width"] = e.welcomeMessageMobileMaxWidth), e.welcomeMessageMobileIconSize && (u["--chat--welcome-message--mobile--icon-size"] = e.welcomeMessageMobileIconSize), e.welcomeMessageMobileIconEmojiSize && (u["--chat--welcome-message--mobile--icon-emoji-size"] = e.welcomeMessageMobileIconEmojiSize), e.welcomeMessageMobileFontSize && (u["--chat--welcome-message--mobile--font-size"] = e.welcomeMessageMobileFontSize), e.welcomeMessageMobileGap && (u["--chat--welcome-message--mobile--gap"] = e.welcomeMessageMobileGap), e.welcomeMessageArrowRightOffset && (u["--chat--welcome-message--arrow--right-offset"] = e.welcomeMessageArrowRightOffset), e.headerIconSize && (u["--chat--header--icon--size"] = e.headerIconSize), e.headerIconMarginRight && (u["--chat--header--icon--margin-right"] = e.headerIconMarginRight), e.headerIconEmojiSize && (u["--chat--header--icon--emoji-size"] = e.headerIconEmojiSize), e.headerIconBorderRadius && (u["--chat--header--icon--border-radius"] = e.headerIconBorderRadius), e.headerIconBackground && (u["--chat--header--icon--background"] = e.headerIconBackground), e.headerIconPadding && (u["--chat--header--icon--padding"] = e.headerIconPadding), u;
}
function Hc(e) {
  const u = document.documentElement;
  Object.entries(e).forEach(([t, n]) => {
    u.style.setProperty(t, n);
  });
}
function Pc(e) {
  const u = "n8n-chat-theme", t = document.getElementById(u);
  t && t.remove();
  const n = document.createElement("style");
  n.id = u, n.textContent = e, document.head.appendChild(n);
}
function jc(e) {
  if (!e.fontFamily) return;
  let u = "";
  if (e.fontFamily && (u += `
			.n8n-chat,
			.n8n-chat .chat-message,
			.n8n-chat .chat-input,
			.n8n-chat textarea,
			.n8n-chat button {
				font-family: ${e.fontFamily} !important;
			}
		`), u) {
    const t = "n8n-chat-fonts", n = document.getElementById(t);
    n && n.remove();
    const r = document.createElement("style");
    r.id = t, r.textContent = u, document.head.appendChild(r);
  }
}
const ge = Rc(), Uc = {
  install(e, u) {
    e.provide(St, u);
    const t = he([]), n = he(null), r = he(!1), o = W(
      () => (u.initialMessages ?? []).map((b) => ({
        id: lu(),
        text: b,
        sender: "bot"
      }))
    );
    async function c(b, p = []) {
      const _ = {
        id: lu(),
        text: b,
        sender: "user",
        files: p
      };
      t.value.push(_), r.value = !0, du(() => {
        ge.emit("scrollToBottom");
      });
      const x = await Tc(
        b,
        p,
        n.value,
        u
      );
      let m = x.output ?? x.text ?? "";
      if (m === "" && Object.keys(x).length > 0)
        try {
          m = JSON.stringify(x, null, 2);
        } catch {
        }
      const C = {
        id: lu(),
        text: m,
        sender: "bot"
      };
      t.value.push(C), r.value = !1, du(() => {
        ge.emit("scrollToBottom");
      });
    }
    async function i() {
      if (!u.loadPreviousSession)
        return;
      const b = localStorage.getItem(J0) ?? lu(), p = await $c(b, u);
      return t.value = ((p == null ? void 0 : p.data) || []).map((_, x) => ({
        id: `${x}`,
        text: _.kwargs.content,
        sender: _.id.includes("HumanMessage") ? "user" : "bot"
      })), t.value.length && (n.value = b), b;
    }
    async function a() {
      n.value = lu(), localStorage.setItem(J0, n.value);
    }
    const l = {
      initialMessages: o,
      messages: t,
      currentSessionId: n,
      waitingForResponse: r,
      loadPreviousSession: i,
      startNewSession: a,
      sendMessage: c
    };
    e.provide(Bt, l), e.config.globalProperties.$chat = l;
  }
};
function Ft(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qu, Q0;
function qc() {
  if (Q0) return Qu;
  Q0 = 1;
  function e(f) {
    return f instanceof Map ? f.clear = f.delete = f.set = function() {
      throw new Error("map is read-only");
    } : f instanceof Set && (f.add = f.clear = f.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(f), Object.getOwnPropertyNames(f).forEach((k) => {
      const v = f[k], z = typeof v;
      (z === "object" || z === "function") && !Object.isFrozen(v) && e(v);
    }), f;
  }
  class u {
    /**
     * @param {CompiledMode} mode
     */
    constructor(k) {
      k.data === void 0 && (k.data = {}), this.data = k.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(f) {
    return f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(f, ...k) {
    const v = /* @__PURE__ */ Object.create(null);
    for (const z in f)
      v[z] = f[z];
    return k.forEach(function(z) {
      for (const Y in z)
        v[Y] = z[Y];
    }), /** @type {T} */
    v;
  }
  const r = "</span>", o = (f) => !!f.scope, c = (f, { prefix: k }) => {
    if (f.startsWith("language:"))
      return f.replace("language:", "language-");
    if (f.includes(".")) {
      const v = f.split(".");
      return [
        `${k}${v.shift()}`,
        ...v.map((z, Y) => `${z}${"_".repeat(Y + 1)}`)
      ].join(" ");
    }
    return `${k}${f}`;
  };
  class i {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(k, v) {
      this.buffer = "", this.classPrefix = v.classPrefix, k.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(k) {
      this.buffer += t(k);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(k) {
      if (!o(k)) return;
      const v = c(
        k.scope,
        { prefix: this.classPrefix }
      );
      this.span(v);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(k) {
      o(k) && (this.buffer += r);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(k) {
      this.buffer += `<span class="${k}">`;
    }
  }
  const a = (f = {}) => {
    const k = { children: [] };
    return Object.assign(k, f), k;
  };
  class l {
    constructor() {
      this.rootNode = a(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(k) {
      this.top.children.push(k);
    }
    /** @param {string} scope */
    openNode(k) {
      const v = a({ scope: k });
      this.add(v), this.stack.push(v);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(k) {
      return this.constructor._walk(k, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(k, v) {
      return typeof v == "string" ? k.addText(v) : v.children && (k.openNode(v), v.children.forEach((z) => this._walk(k, z)), k.closeNode(v)), k;
    }
    /**
     * @param {Node} node
     */
    static _collapse(k) {
      typeof k != "string" && k.children && (k.children.every((v) => typeof v == "string") ? k.children = [k.children.join("")] : k.children.forEach((v) => {
        l._collapse(v);
      }));
    }
  }
  class b extends l {
    /**
     * @param {*} options
     */
    constructor(k) {
      super(), this.options = k;
    }
    /**
     * @param {string} text
     */
    addText(k) {
      k !== "" && this.add(k);
    }
    /** @param {string} scope */
    startScope(k) {
      this.openNode(k);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(k, v) {
      const z = k.root;
      v && (z.scope = `language:${v}`), this.add(z);
    }
    toHTML() {
      return new i(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function p(f) {
    return f ? typeof f == "string" ? f : f.source : null;
  }
  function _(f) {
    return C("(?=", f, ")");
  }
  function x(f) {
    return C("(?:", f, ")*");
  }
  function m(f) {
    return C("(?:", f, ")?");
  }
  function C(...f) {
    return f.map((v) => p(v)).join("");
  }
  function S(f) {
    const k = f[f.length - 1];
    return typeof k == "object" && k.constructor === Object ? (f.splice(f.length - 1, 1), k) : {};
  }
  function R(...f) {
    return "(" + (S(f).capture ? "" : "?:") + f.map((z) => p(z)).join("|") + ")";
  }
  function E(f) {
    return new RegExp(f.toString() + "|").exec("").length - 1;
  }
  function A(f, k) {
    const v = f && f.exec(k);
    return v && v.index === 0;
  }
  const D = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function L(f, { joinWith: k }) {
    let v = 0;
    return f.map((z) => {
      v += 1;
      const Y = v;
      let Q = p(z), B = "";
      for (; Q.length > 0; ) {
        const M = D.exec(Q);
        if (!M) {
          B += Q;
          break;
        }
        B += Q.substring(0, M.index), Q = Q.substring(M.index + M[0].length), M[0][0] === "\\" && M[1] ? B += "\\" + String(Number(M[1]) + Y) : (B += M[0], M[0] === "(" && v++);
      }
      return B;
    }).map((z) => `(${z})`).join(k);
  }
  const $ = /\b\B/, V = "[a-zA-Z]\\w*", J = "[a-zA-Z_]\\w*", ie = "\\b\\d+(\\.\\d+)?", _e = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ve = "\\b(0b[01]+)", Te = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Re = (f = {}) => {
    const k = /^#![ ]*\//;
    return f.binary && (f.begin = C(
      k,
      /.*\b/,
      f.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: k,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (v, z) => {
        v.index !== 0 && z.ignoreMatch();
      }
    }, f);
  }, ce = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, T = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [ce]
  }, X = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [ce]
  }, te = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, j = function(f, k, v = {}) {
    const z = n(
      {
        scope: "comment",
        begin: f,
        end: k,
        contains: []
      },
      v
    );
    z.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Y = R(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return z.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: C(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Y,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), z;
  }, ne = j("//", "$"), ke = j("/\\*", "\\*/"), Ee = j("#", "$"), Ne = {
    scope: "number",
    begin: ie,
    relevance: 0
  }, Xe = {
    scope: "number",
    begin: _e,
    relevance: 0
  }, vi = {
    scope: "number",
    begin: ve,
    relevance: 0
  }, yi = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      ce,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [ce]
      }
    ]
  }, Ei = {
    scope: "title",
    begin: V,
    relevance: 0
  }, Mi = {
    scope: "title",
    begin: J,
    relevance: 0
  }, Ai = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + J,
    relevance: 0
  };
  var ku = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: T,
    BACKSLASH_ESCAPE: ce,
    BINARY_NUMBER_MODE: vi,
    BINARY_NUMBER_RE: ve,
    COMMENT: j,
    C_BLOCK_COMMENT_MODE: ke,
    C_LINE_COMMENT_MODE: ne,
    C_NUMBER_MODE: Xe,
    C_NUMBER_RE: _e,
    END_SAME_AS_BEGIN: function(f) {
      return Object.assign(
        f,
        {
          /** @type {ModeCallback} */
          "on:begin": (k, v) => {
            v.data._beginMatch = k[1];
          },
          /** @type {ModeCallback} */
          "on:end": (k, v) => {
            v.data._beginMatch !== k[1] && v.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Ee,
    IDENT_RE: V,
    MATCH_NOTHING_RE: $,
    METHOD_GUARD: Ai,
    NUMBER_MODE: Ne,
    NUMBER_RE: ie,
    PHRASAL_WORDS_MODE: te,
    QUOTE_STRING_MODE: X,
    REGEXP_MODE: yi,
    RE_STARTERS_RE: Te,
    SHEBANG: Re,
    TITLE_MODE: Ei,
    UNDERSCORE_IDENT_RE: J,
    UNDERSCORE_TITLE_MODE: Mi
  });
  function Di(f, k) {
    f.input[f.index - 1] === "." && k.ignoreMatch();
  }
  function Bi(f, k) {
    f.className !== void 0 && (f.scope = f.className, delete f.className);
  }
  function Si(f, k) {
    k && f.beginKeywords && (f.begin = "\\b(" + f.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", f.__beforeBegin = Di, f.keywords = f.keywords || f.beginKeywords, delete f.beginKeywords, f.relevance === void 0 && (f.relevance = 0));
  }
  function Li(f, k) {
    Array.isArray(f.illegal) && (f.illegal = R(...f.illegal));
  }
  function Ii(f, k) {
    if (f.match) {
      if (f.begin || f.end) throw new Error("begin & end are not supported with match");
      f.begin = f.match, delete f.match;
    }
  }
  function Fi(f, k) {
    f.relevance === void 0 && (f.relevance = 1);
  }
  const $i = (f, k) => {
    if (!f.beforeMatch) return;
    if (f.starts) throw new Error("beforeMatch cannot be used with starts");
    const v = Object.assign({}, f);
    Object.keys(f).forEach((z) => {
      delete f[z];
    }), f.keywords = v.keywords, f.begin = C(v.beforeMatch, _(v.begin)), f.starts = {
      relevance: 0,
      contains: [
        Object.assign(v, { endsParent: !0 })
      ]
    }, f.relevance = 0, delete v.beforeMatch;
  }, Ti = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Ri = "keyword";
  function $0(f, k, v = Ri) {
    const z = /* @__PURE__ */ Object.create(null);
    return typeof f == "string" ? Y(v, f.split(" ")) : Array.isArray(f) ? Y(v, f) : Object.keys(f).forEach(function(Q) {
      Object.assign(
        z,
        $0(f[Q], k, Q)
      );
    }), z;
    function Y(Q, B) {
      k && (B = B.map((M) => M.toLowerCase())), B.forEach(function(M) {
        const O = M.split("|");
        z[O[0]] = [Q, Ni(O[0], O[1])];
      });
    }
  }
  function Ni(f, k) {
    return k ? Number(k) : Oi(f) ? 0 : 1;
  }
  function Oi(f) {
    return Ti.includes(f.toLowerCase());
  }
  const T0 = {}, Je = (f) => {
    console.error(f);
  }, R0 = (f, ...k) => {
    console.log(`WARN: ${f}`, ...k);
  }, uu = (f, k) => {
    T0[`${f}/${k}`] || (console.log(`Deprecated as of ${f}. ${k}`), T0[`${f}/${k}`] = !0);
  }, wu = new Error();
  function N0(f, k, { key: v }) {
    let z = 0;
    const Y = f[v], Q = {}, B = {};
    for (let M = 1; M <= k.length; M++)
      B[M + z] = Y[M], Q[M + z] = !0, z += E(k[M - 1]);
    f[v] = B, f[v]._emit = Q, f[v]._multi = !0;
  }
  function zi(f) {
    if (Array.isArray(f.begin)) {
      if (f.skip || f.excludeBegin || f.returnBegin)
        throw Je("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), wu;
      if (typeof f.beginScope != "object" || f.beginScope === null)
        throw Je("beginScope must be object"), wu;
      N0(f, f.begin, { key: "beginScope" }), f.begin = L(f.begin, { joinWith: "" });
    }
  }
  function Hi(f) {
    if (Array.isArray(f.end)) {
      if (f.skip || f.excludeEnd || f.returnEnd)
        throw Je("skip, excludeEnd, returnEnd not compatible with endScope: {}"), wu;
      if (typeof f.endScope != "object" || f.endScope === null)
        throw Je("endScope must be object"), wu;
      N0(f, f.end, { key: "endScope" }), f.end = L(f.end, { joinWith: "" });
    }
  }
  function Pi(f) {
    f.scope && typeof f.scope == "object" && f.scope !== null && (f.beginScope = f.scope, delete f.scope);
  }
  function ji(f) {
    Pi(f), typeof f.beginScope == "string" && (f.beginScope = { _wrap: f.beginScope }), typeof f.endScope == "string" && (f.endScope = { _wrap: f.endScope }), zi(f), Hi(f);
  }
  function Ui(f) {
    function k(B, M) {
      return new RegExp(
        p(B),
        "m" + (f.case_insensitive ? "i" : "") + (f.unicodeRegex ? "u" : "") + (M ? "g" : "")
      );
    }
    class v {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(M, O) {
        O.position = this.position++, this.matchIndexes[this.matchAt] = O, this.regexes.push([O, M]), this.matchAt += E(M) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const M = this.regexes.map((O) => O[1]);
        this.matcherRe = k(L(M, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(M) {
        this.matcherRe.lastIndex = this.lastIndex;
        const O = this.matcherRe.exec(M);
        if (!O)
          return null;
        const se = O.findIndex((au, Zu) => Zu > 0 && au !== void 0), re = this.matchIndexes[se];
        return O.splice(0, se), Object.assign(O, re);
      }
    }
    class z {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(M) {
        if (this.multiRegexes[M]) return this.multiRegexes[M];
        const O = new v();
        return this.rules.slice(M).forEach(([se, re]) => O.addRule(se, re)), O.compile(), this.multiRegexes[M] = O, O;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(M, O) {
        this.rules.push([M, O]), O.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(M) {
        const O = this.getMatcher(this.regexIndex);
        O.lastIndex = this.lastIndex;
        let se = O.exec(M);
        if (this.resumingScanAtSamePosition() && !(se && se.index === this.lastIndex)) {
          const re = this.getMatcher(0);
          re.lastIndex = this.lastIndex + 1, se = re.exec(M);
        }
        return se && (this.regexIndex += se.position + 1, this.regexIndex === this.count && this.considerAll()), se;
      }
    }
    function Y(B) {
      const M = new z();
      return B.contains.forEach((O) => M.addRule(O.begin, { rule: O, type: "begin" })), B.terminatorEnd && M.addRule(B.terminatorEnd, { type: "end" }), B.illegal && M.addRule(B.illegal, { type: "illegal" }), M;
    }
    function Q(B, M) {
      const O = (
        /** @type CompiledMode */
        B
      );
      if (B.isCompiled) return O;
      [
        Bi,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ii,
        ji,
        $i
      ].forEach((re) => re(B, M)), f.compilerExtensions.forEach((re) => re(B, M)), B.__beforeBegin = null, [
        Si,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Li,
        // default to 1 relevance if not specified
        Fi
      ].forEach((re) => re(B, M)), B.isCompiled = !0;
      let se = null;
      return typeof B.keywords == "object" && B.keywords.$pattern && (B.keywords = Object.assign({}, B.keywords), se = B.keywords.$pattern, delete B.keywords.$pattern), se = se || /\w+/, B.keywords && (B.keywords = $0(B.keywords, f.case_insensitive)), O.keywordPatternRe = k(se, !0), M && (B.begin || (B.begin = /\B|\b/), O.beginRe = k(O.begin), !B.end && !B.endsWithParent && (B.end = /\B|\b/), B.end && (O.endRe = k(O.end)), O.terminatorEnd = p(O.end) || "", B.endsWithParent && M.terminatorEnd && (O.terminatorEnd += (B.end ? "|" : "") + M.terminatorEnd)), B.illegal && (O.illegalRe = k(
        /** @type {RegExp | string} */
        B.illegal
      )), B.contains || (B.contains = []), B.contains = [].concat(...B.contains.map(function(re) {
        return qi(re === "self" ? B : re);
      })), B.contains.forEach(function(re) {
        Q(
          /** @type Mode */
          re,
          O
        );
      }), B.starts && Q(B.starts, M), O.matcher = Y(O), O;
    }
    if (f.compilerExtensions || (f.compilerExtensions = []), f.contains && f.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return f.classNameAliases = n(f.classNameAliases || {}), Q(
      /** @type Mode */
      f
    );
  }
  function O0(f) {
    return f ? f.endsWithParent || O0(f.starts) : !1;
  }
  function qi(f) {
    return f.variants && !f.cachedVariants && (f.cachedVariants = f.variants.map(function(k) {
      return n(f, { variants: null }, k);
    })), f.cachedVariants ? f.cachedVariants : O0(f) ? n(f, { starts: f.starts ? n(f.starts) : null }) : Object.isFrozen(f) ? n(f) : f;
  }
  var Vi = "11.11.1";
  class Zi extends Error {
    constructor(k, v) {
      super(k), this.name = "HTMLInjectionError", this.html = v;
    }
  }
  const Vu = t, z0 = n, H0 = Symbol("nomatch"), Gi = 7, P0 = function(f) {
    const k = /* @__PURE__ */ Object.create(null), v = /* @__PURE__ */ Object.create(null), z = [];
    let Y = !0;
    const Q = "Could not find the language '{}', did you forget to load/include a language module?", B = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let M = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: b
    };
    function O(w) {
      return M.noHighlightRe.test(w);
    }
    function se(w) {
      let F = w.className + " ";
      F += w.parentNode ? w.parentNode.className : "";
      const U = M.languageDetectRe.exec(F);
      if (U) {
        const Z = qe(U[1]);
        return Z || (R0(Q.replace("{}", U[1])), R0("Falling back to no-highlight mode for this block.", w)), Z ? U[1] : "no-highlight";
      }
      return F.split(/\s+/).find((Z) => O(Z) || qe(Z));
    }
    function re(w, F, U) {
      let Z = "", oe = "";
      typeof F == "object" ? (Z = w, U = F.ignoreIllegals, oe = F.language) : (uu("10.7.0", "highlight(lang, code, ...args) has been deprecated."), uu("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), oe = w, Z = F), U === void 0 && (U = !0);
      const Me = {
        code: Z,
        language: oe
      };
      vu("before:highlight", Me);
      const Ve = Me.result ? Me.result : au(Me.language, Me.code, U);
      return Ve.code = Me.code, vu("after:highlight", Ve), Ve;
    }
    function au(w, F, U, Z) {
      const oe = /* @__PURE__ */ Object.create(null);
      function Me(y, I) {
        return y.keywords[I];
      }
      function Ve() {
        if (!H.keywords) {
          de.addText(G);
          return;
        }
        let y = 0;
        H.keywordPatternRe.lastIndex = 0;
        let I = H.keywordPatternRe.exec(G), P = "";
        for (; I; ) {
          P += G.substring(y, I.index);
          const q = Se.case_insensitive ? I[0].toLowerCase() : I[0], pe = Me(H, q);
          if (pe) {
            const [Oe, lc] = pe;
            if (de.addText(P), P = "", oe[q] = (oe[q] || 0) + 1, oe[q] <= Gi && (Mu += lc), Oe.startsWith("_"))
              P += I[0];
            else {
              const dc = Se.classNameAliases[Oe] || Oe;
              Be(I[0], dc);
            }
          } else
            P += I[0];
          y = H.keywordPatternRe.lastIndex, I = H.keywordPatternRe.exec(G);
        }
        P += G.substring(y), de.addText(P);
      }
      function yu() {
        if (G === "") return;
        let y = null;
        if (typeof H.subLanguage == "string") {
          if (!k[H.subLanguage]) {
            de.addText(G);
            return;
          }
          y = au(H.subLanguage, G, !0, K0[H.subLanguage]), K0[H.subLanguage] = /** @type {CompiledMode} */
          y._top;
        } else
          y = Gu(G, H.subLanguage.length ? H.subLanguage : null);
        H.relevance > 0 && (Mu += y.relevance), de.__addSublanguage(y._emitter, y.language);
      }
      function we() {
        H.subLanguage != null ? yu() : Ve(), G = "";
      }
      function Be(y, I) {
        y !== "" && (de.startScope(I), de.addText(y), de.endScope());
      }
      function V0(y, I) {
        let P = 1;
        const q = I.length - 1;
        for (; P <= q; ) {
          if (!y._emit[P]) {
            P++;
            continue;
          }
          const pe = Se.classNameAliases[y[P]] || y[P], Oe = I[P];
          pe ? Be(Oe, pe) : (G = Oe, Ve(), G = ""), P++;
        }
      }
      function Z0(y, I) {
        return y.scope && typeof y.scope == "string" && de.openNode(Se.classNameAliases[y.scope] || y.scope), y.beginScope && (y.beginScope._wrap ? (Be(G, Se.classNameAliases[y.beginScope._wrap] || y.beginScope._wrap), G = "") : y.beginScope._multi && (V0(y.beginScope, I), G = "")), H = Object.create(y, { parent: { value: H } }), H;
      }
      function G0(y, I, P) {
        let q = A(y.endRe, P);
        if (q) {
          if (y["on:end"]) {
            const pe = new u(y);
            y["on:end"](I, pe), pe.isMatchIgnored && (q = !1);
          }
          if (q) {
            for (; y.endsParent && y.parent; )
              y = y.parent;
            return y;
          }
        }
        if (y.endsWithParent)
          return G0(y.parent, I, P);
      }
      function oc(y) {
        return H.matcher.regexIndex === 0 ? (G += y[0], 1) : (Ju = !0, 0);
      }
      function ic(y) {
        const I = y[0], P = y.rule, q = new u(P), pe = [P.__beforeBegin, P["on:begin"]];
        for (const Oe of pe)
          if (Oe && (Oe(y, q), q.isMatchIgnored))
            return oc(I);
        return P.skip ? G += I : (P.excludeBegin && (G += I), we(), !P.returnBegin && !P.excludeBegin && (G = I)), Z0(P, y), P.returnBegin ? 0 : I.length;
      }
      function cc(y) {
        const I = y[0], P = F.substring(y.index), q = G0(H, y, P);
        if (!q)
          return H0;
        const pe = H;
        H.endScope && H.endScope._wrap ? (we(), Be(I, H.endScope._wrap)) : H.endScope && H.endScope._multi ? (we(), V0(H.endScope, y)) : pe.skip ? G += I : (pe.returnEnd || pe.excludeEnd || (G += I), we(), pe.excludeEnd && (G = I));
        do
          H.scope && de.closeNode(), !H.skip && !H.subLanguage && (Mu += H.relevance), H = H.parent;
        while (H !== q.parent);
        return q.starts && Z0(q.starts, y), pe.returnEnd ? 0 : I.length;
      }
      function sc() {
        const y = [];
        for (let I = H; I !== Se; I = I.parent)
          I.scope && y.unshift(I.scope);
        y.forEach((I) => de.openNode(I));
      }
      let Eu = {};
      function W0(y, I) {
        const P = I && I[0];
        if (G += y, P == null)
          return we(), 0;
        if (Eu.type === "begin" && I.type === "end" && Eu.index === I.index && P === "") {
          if (G += F.slice(I.index, I.index + 1), !Y) {
            const q = new Error(`0 width match regex (${w})`);
            throw q.languageName = w, q.badRule = Eu.rule, q;
          }
          return 1;
        }
        if (Eu = I, I.type === "begin")
          return ic(I);
        if (I.type === "illegal" && !U) {
          const q = new Error('Illegal lexeme "' + P + '" for mode "' + (H.scope || "<unnamed>") + '"');
          throw q.mode = H, q;
        } else if (I.type === "end") {
          const q = cc(I);
          if (q !== H0)
            return q;
        }
        if (I.type === "illegal" && P === "")
          return G += `
`, 1;
        if (Xu > 1e5 && Xu > I.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return G += P, P.length;
      }
      const Se = qe(w);
      if (!Se)
        throw Je(Q.replace("{}", w)), new Error('Unknown language: "' + w + '"');
      const ac = Ui(Se);
      let Ku = "", H = Z || ac;
      const K0 = {}, de = new M.__emitter(M);
      sc();
      let G = "", Mu = 0, Ye = 0, Xu = 0, Ju = !1;
      try {
        if (Se.__emitTokens)
          Se.__emitTokens(F, de);
        else {
          for (H.matcher.considerAll(); ; ) {
            Xu++, Ju ? Ju = !1 : H.matcher.considerAll(), H.matcher.lastIndex = Ye;
            const y = H.matcher.exec(F);
            if (!y) break;
            const I = F.substring(Ye, y.index), P = W0(I, y);
            Ye = y.index + P;
          }
          W0(F.substring(Ye));
        }
        return de.finalize(), Ku = de.toHTML(), {
          language: w,
          value: Ku,
          relevance: Mu,
          illegal: !1,
          _emitter: de,
          _top: H
        };
      } catch (y) {
        if (y.message && y.message.includes("Illegal"))
          return {
            language: w,
            value: Vu(F),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: y.message,
              index: Ye,
              context: F.slice(Ye - 100, Ye + 100),
              mode: y.mode,
              resultSoFar: Ku
            },
            _emitter: de
          };
        if (Y)
          return {
            language: w,
            value: Vu(F),
            illegal: !1,
            relevance: 0,
            errorRaised: y,
            _emitter: de,
            _top: H
          };
        throw y;
      }
    }
    function Zu(w) {
      const F = {
        value: Vu(w),
        illegal: !1,
        relevance: 0,
        _top: B,
        _emitter: new M.__emitter(M)
      };
      return F._emitter.addText(w), F;
    }
    function Gu(w, F) {
      F = F || M.languages || Object.keys(k);
      const U = Zu(w), Z = F.filter(qe).filter(q0).map(
        (we) => au(we, w, !1)
      );
      Z.unshift(U);
      const oe = Z.sort((we, Be) => {
        if (we.relevance !== Be.relevance) return Be.relevance - we.relevance;
        if (we.language && Be.language) {
          if (qe(we.language).supersetOf === Be.language)
            return 1;
          if (qe(Be.language).supersetOf === we.language)
            return -1;
        }
        return 0;
      }), [Me, Ve] = oe, yu = Me;
      return yu.secondBest = Ve, yu;
    }
    function Wi(w, F, U) {
      const Z = F && v[F] || U;
      w.classList.add("hljs"), w.classList.add(`language-${Z}`);
    }
    function Wu(w) {
      let F = null;
      const U = se(w);
      if (O(U)) return;
      if (vu(
        "before:highlightElement",
        { el: w, language: U }
      ), w.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", w);
        return;
      }
      if (w.children.length > 0 && (M.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(w)), M.throwUnescapedHTML))
        throw new Zi(
          "One of your code blocks includes unescaped HTML.",
          w.innerHTML
        );
      F = w;
      const Z = F.textContent, oe = U ? re(Z, { language: U, ignoreIllegals: !0 }) : Gu(Z);
      w.innerHTML = oe.value, w.dataset.highlighted = "yes", Wi(w, U, oe.language), w.result = {
        language: oe.language,
        // TODO: remove with version 11.0
        re: oe.relevance,
        relevance: oe.relevance
      }, oe.secondBest && (w.secondBest = {
        language: oe.secondBest.language,
        relevance: oe.secondBest.relevance
      }), vu("after:highlightElement", { el: w, result: oe, text: Z });
    }
    function Ki(w) {
      M = z0(M, w);
    }
    const Xi = () => {
      Cu(), uu("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ji() {
      Cu(), uu("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let j0 = !1;
    function Cu() {
      function w() {
        Cu();
      }
      if (document.readyState === "loading") {
        j0 || window.addEventListener("DOMContentLoaded", w, !1), j0 = !0;
        return;
      }
      document.querySelectorAll(M.cssSelector).forEach(Wu);
    }
    function Yi(w, F) {
      let U = null;
      try {
        U = F(f);
      } catch (Z) {
        if (Je("Language definition for '{}' could not be registered.".replace("{}", w)), Y)
          Je(Z);
        else
          throw Z;
        U = B;
      }
      U.name || (U.name = w), k[w] = U, U.rawDefinition = F.bind(null, f), U.aliases && U0(U.aliases, { languageName: w });
    }
    function Qi(w) {
      delete k[w];
      for (const F of Object.keys(v))
        v[F] === w && delete v[F];
    }
    function ec() {
      return Object.keys(k);
    }
    function qe(w) {
      return w = (w || "").toLowerCase(), k[w] || k[v[w]];
    }
    function U0(w, { languageName: F }) {
      typeof w == "string" && (w = [w]), w.forEach((U) => {
        v[U.toLowerCase()] = F;
      });
    }
    function q0(w) {
      const F = qe(w);
      return F && !F.disableAutodetect;
    }
    function uc(w) {
      w["before:highlightBlock"] && !w["before:highlightElement"] && (w["before:highlightElement"] = (F) => {
        w["before:highlightBlock"](
          Object.assign({ block: F.el }, F)
        );
      }), w["after:highlightBlock"] && !w["after:highlightElement"] && (w["after:highlightElement"] = (F) => {
        w["after:highlightBlock"](
          Object.assign({ block: F.el }, F)
        );
      });
    }
    function tc(w) {
      uc(w), z.push(w);
    }
    function nc(w) {
      const F = z.indexOf(w);
      F !== -1 && z.splice(F, 1);
    }
    function vu(w, F) {
      const U = w;
      z.forEach(function(Z) {
        Z[U] && Z[U](F);
      });
    }
    function rc(w) {
      return uu("10.7.0", "highlightBlock will be removed entirely in v12.0"), uu("10.7.0", "Please use highlightElement now."), Wu(w);
    }
    Object.assign(f, {
      highlight: re,
      highlightAuto: Gu,
      highlightAll: Cu,
      highlightElement: Wu,
      // TODO: Remove with v12 API
      highlightBlock: rc,
      configure: Ki,
      initHighlighting: Xi,
      initHighlightingOnLoad: Ji,
      registerLanguage: Yi,
      unregisterLanguage: Qi,
      listLanguages: ec,
      getLanguage: qe,
      registerAliases: U0,
      autoDetection: q0,
      inherit: z0,
      addPlugin: tc,
      removePlugin: nc
    }), f.debugMode = function() {
      Y = !1;
    }, f.safeMode = function() {
      Y = !0;
    }, f.versionString = Vi, f.regex = {
      concat: C,
      lookahead: _,
      either: R,
      optional: m,
      anyNumberOfTimes: x
    };
    for (const w in ku)
      typeof ku[w] == "object" && e(ku[w]);
    return Object.assign(f, ku), f;
  }, tu = P0({});
  return tu.newInstance = () => P0({}), Qu = tu, tu.HighlightJS = tu, tu.default = tu, Qu;
}
var Vc = /* @__PURE__ */ qc();
const ze = /* @__PURE__ */ Ft(Vc), et = "[A-Za-z$_][0-9A-Za-z$_]*", Zc = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Gc = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], $t = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Tt = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Rt = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Wc = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Kc = [].concat(
  Rt,
  $t,
  Tt
);
function Nt(e) {
  const u = e.regex, t = (j, { after: ne }) => {
    const ke = "</" + j[0].slice(1);
    return j.input.indexOf(ke, ne) !== -1;
  }, n = et, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, c = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (j, ne) => {
      const ke = j[0].length + j.index, Ee = j.input[ke];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ee === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ee === ","
      ) {
        ne.ignoreMatch();
        return;
      }
      Ee === ">" && (t(j, { after: ke }) || ne.ignoreMatch());
      let Ne;
      const Xe = j.input.substring(ke);
      if (Ne = Xe.match(/^\s*=/)) {
        ne.ignoreMatch();
        return;
      }
      if ((Ne = Xe.match(/^\s+extends\s+/)) && Ne.index === 0) {
        ne.ignoreMatch();
        return;
      }
    }
  }, i = {
    $pattern: et,
    keyword: Zc,
    literal: Gc,
    built_in: Kc,
    "variable.language": Wc
  }, a = "[0-9](_?[0-9])*", l = `\\.(${a})`, b = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${b})((${l})|\\.)?|(${l}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${b})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, _ = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: i,
    contains: []
    // defined later
  }, x = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "css"
    }
  }, C = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "graphql"
    }
  }, S = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      _
    ]
  }, E = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: n + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, A = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    x,
    m,
    C,
    S,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    p
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  _.contains = A.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: i,
    contains: [
      "self"
    ].concat(A)
  });
  const D = [].concat(E, _.contains), L = D.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: i,
      contains: ["self"].concat(D)
    }
  ]), $ = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: i,
    contains: L
  }, V = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          u.concat(n, "(", u.concat(/\./, n), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, J = {
    relevance: 0,
    match: u.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...$t,
        ...Tt
      ]
    }
  }, ie = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, _e = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [$],
    illegal: /%/
  }, ve = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Te(j) {
    return u.concat("(?!", j.join("|"), ")");
  }
  const Re = {
    match: u.concat(
      /\b/,
      Te([
        ...Rt,
        "super",
        "import"
      ].map((j) => `${j}\\s*\\(`)),
      n,
      u.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ce = {
    begin: u.concat(/\./, u.lookahead(
      u.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, T = {
    match: [
      /get|set/,
      /\s+/,
      n,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      $
    ]
  }, X = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", te = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      u.lookahead(X)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      $
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: i,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: L, CLASS_REFERENCE: J },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      ie,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      x,
      m,
      C,
      S,
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      p,
      J,
      {
        scope: "attr",
        match: n + u.lookahead(":"),
        relevance: 0
      },
      te,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          E,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: X,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: i,
                    contains: L
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: c.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": c.isTrulyOpeningTag,
                end: c.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: c.begin,
                end: c.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      _e,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          $,
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ce,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [$]
      },
      Re,
      ve,
      V,
      T,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Ot(e) {
  const u = e.regex, t = u.concat(/[\p{L}_]/u, u.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, r = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, c = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), i = e.inherit(e.APOS_STRING_MODE, { className: "string" }), a = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: n,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [r]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [r]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          a,
          i,
          c,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  c,
                  a,
                  i
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      r,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              a
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: u.concat(
          /</,
          u.lookahead(u.concat(
            t,
            // <tag/>
            // <tag>
            // <tag ...
            u.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0,
            starts: l
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: u.concat(
          /<\//,
          u.lookahead(u.concat(
            t,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const Xc = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jc(e, u) {
  return d(), h("svg", Xc, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ])]);
}
const Yc = g({ name: "mdi-close", render: Jc }), eu = (e, u) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of u)
    t[n] = r;
  return t;
}, Qc = {}, e2 = { class: "chat-button" };
function u2(e, u) {
  return d(), h("button", e2, [
    He(e.$slots, "default")
  ]);
}
const t2 = /* @__PURE__ */ eu(Qc, [["render", u2]]);
function E0() {
  return vt(Bt);
}
function Ue() {
  return {
    options: vt(St)
  };
}
function bu() {
  const { options: e } = Ue(), u = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function t(r) {
    var c, i;
    const o = (i = (c = e == null ? void 0 : e.i18n) == null ? void 0 : c[u]) == null ? void 0 : i[r];
    return fc(o) ? o.value : o ?? r;
  }
  function n(r) {
    var o, c;
    return !!((c = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[u]) != null && c[r]);
  }
  return { t, te: n };
}
const n2 = { class: "chat-get-started" }, r2 = /* @__PURE__ */ be({
  __name: "GetStarted",
  setup(e) {
    const { t: u } = bu();
    return (t, n) => (d(), h("div", n2, [
      me(t2, {
        onClick: n[0] || (n[0] = (r) => t.$emit("click:button"))
      }, {
        default: Ae(() => [
          k0(Pe(N(u)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), o2 = {}, i2 = { class: "chat-powered-by" };
function c2(e, u) {
  return d(), h("div", i2, [...u[0] || (u[0] = [
    k0(" Powered by ", -1),
    s("a", { href: "https://pragmatiqai.com" }, "PragmatiqAi", -1)
  ])]);
}
const s2 = /* @__PURE__ */ eu(o2, [["render", c2]]), a2 = { class: "chat-get-started-footer" }, l2 = { key: 0 }, d2 = /* @__PURE__ */ be({
  __name: "GetStartedFooter",
  setup(e) {
    const { t: u, te: t } = bu(), { options: n } = Ue();
    return (r, o) => (d(), h("div", a2, [
      N(t)("footer") ? (d(), h("div", l2, Pe(N(u)("footer")), 1)) : ue("", !0),
      N(n).showPoweredBy ? (d(), ee(s2, { key: 1 })) : ue("", !0)
    ]));
  }
});
function f2(e) {
  return hc() ? (pc(e), !0) : !1;
}
function h2() {
  const e = /* @__PURE__ */ new Set(), u = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const o = () => u(r);
      return f2(o), {
        off: o
      };
    },
    off: u,
    trigger: (...r) => Promise.all(Array.from(e).map((o) => o(...r)))
  };
}
const p2 = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g2 = (e, u) => Object.prototype.hasOwnProperty.call(e, u), b2 = p2 ? window.document : void 0, m2 = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function _2(e = {}) {
  const {
    document: u = b2
  } = e, t = he(null), { on: n, trigger: r } = h2();
  let o;
  u && (o = u.createElement("input"), o.type = "file", o.onchange = (a) => {
    const l = a.target;
    t.value = l.files, r(t.value);
  });
  const c = () => {
    t.value = null, o && o.value && (o.value = "", r(null));
  }, i = (a) => {
    if (!o)
      return;
    const l = {
      ...m2,
      ...e,
      ...a
    };
    o.multiple = l.multiple, o.accept = l.accept, o.webkitdirectory = l.directory, g2(l, "capture") && (o.capture = l.capture), l.reset && c(), o.click();
  };
  return {
    files: gc(t),
    open: i,
    reset: c,
    onChange: n
  };
}
const x2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k2(e, u) {
  return d(), h("svg", x2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ])]);
}
const w2 = g({ name: "mdi-paperclip", render: k2 }), C2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v2(e, u) {
  return d(), h("svg", C2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ])]);
}
const y2 = g({ name: "mdi-send", render: v2 }), E2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M2(e, u) {
  return d(), h("svg", E2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ])]);
}
const A2 = g({ name: "mdi-closeThick", render: M2 }), D2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B2(e, u) {
  return d(), h("svg", D2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ])]);
}
const S2 = g({ name: "mdi-fileImage", render: B2 }), L2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I2(e, u) {
  return d(), h("svg", L2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ])]);
}
const F2 = g({ name: "mdi-fileMusic", render: I2 }), $2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T2(e, u) {
  return d(), h("svg", $2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ])]);
}
const ut = g({ name: "mdi-fileText", render: T2 }), R2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N2(e, u) {
  return d(), h("svg", R2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ])]);
}
const O2 = g({ name: "mdi-fileVideo", render: N2 }), z2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H2(e, u) {
  return d(), h("svg", z2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ])]);
}
const P2 = g({ name: "mdi-openInNew", render: H2 }), j2 = { class: "chat-file-name" }, U2 = /* @__PURE__ */ be({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: u }) {
    const t = e, n = u, r = {
      document: ut,
      audio: F2,
      image: S2,
      video: O2
    }, o = W(() => {
      var l;
      const a = (l = t.file) == null ? void 0 : l.type.split("/")[0];
      return r[a] || ut;
    });
    function c() {
      t.isPreviewable && window.open(URL.createObjectURL(t.file));
    }
    function i() {
      n("remove", t.file);
    }
    return (a, l) => (d(), h("div", {
      class: "chat-file",
      onClick: c
    }, [
      me(N(o)),
      s("p", j2, Pe(a.file.name), 1),
      a.isRemovable ? (d(), h("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: yt(i, ["stop"])
      }, [
        me(N(A2))
      ])) : a.isPreviewable ? (d(), ee(N(P2), {
        key: 1,
        class: "chat-file-preview"
      })) : ue("", !0)
    ]));
  }
}), zt = /* @__PURE__ */ eu(U2, [["__scopeId", "data-v-e0d57af7"]]), q2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V2(e, u) {
  return d(), h("svg", q2, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"
    }, null, -1)
  ])]);
}
const Z2 = g({ name: "mdi-microphone", render: V2 }), G2 = ["disabled", "title"], W2 = /* @__PURE__ */ be({
  __name: "ElevenLabsButton",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const { t: u } = bu(), { options: t } = Ue(), n = W(() => t.showElevenLabsButton === !0 && t.elevenLabsAgentUrl);
    function r() {
      if (!t.elevenLabsAgentUrl) {
        console.warn("ElevenLabs agent URL not configured");
        return;
      }
      window.open(t.elevenLabsAgentUrl, "_blank", "noopener,noreferrer");
    }
    return (o, c) => n.value ? (d(), h("button", {
      key: 0,
      disabled: o.disabled,
      class: "chat-input-elevenlabs-button",
      title: N(u)("elevenLabsButtonTooltip"),
      "data-test-id": "chat-elevenlabs-button",
      onClick: r
    }, [
      me(N(Z2), {
        height: "24",
        width: "24"
      })
    ], 8, G2)) : ue("", !0);
  }
}), K2 = /* @__PURE__ */ eu(W2, [["__scopeId", "data-v-fc67886f"]]), X2 = { class: "chat-inputs" }, J2 = {
  key: 0,
  class: "chat-input-left-panel"
}, Y2 = ["disabled", "placeholder"], Q2 = { class: "chat-inputs-controls" }, es = ["disabled"], us = ["disabled"], ts = {
  key: 0,
  class: "chat-files"
}, ns = /* @__PURE__ */ be({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: u }) {
    const t = e, { t: n } = bu(), r = u, { options: o } = Ue(), c = E0(), { waitingForResponse: i } = c, a = he(null), l = he(null), b = he(""), p = he(!1), _ = he(null), x = W(() => {
      var T;
      return b.value === "" || N(i) || ((T = o.disabled) == null ? void 0 : T.value) === !0;
    }), m = W(() => {
      var T;
      return ((T = o.disabled) == null ? void 0 : T.value) === !0;
    }), C = W(
      () => {
        var T;
        return S.value && N(i) && !((T = o.disabled) != null && T.value);
      }
    ), S = W(() => N(o.allowFileUploads) === !0), R = W(() => N(o.allowedFilesMimeTypes)), E = W(() => ({
      "--controls-count": S.value ? 2 : 1
    })), {
      open: A,
      reset: D,
      onChange: L
    } = _2({
      multiple: !0,
      reset: !1
    });
    L((T) => {
      if (!T) return;
      const X = new DataTransfer();
      if (a.value)
        for (let te = 0; te < a.value.length; te++)
          X.items.add(a.value[te]);
      for (let te = 0; te < T.length; te++)
        X.items.add(T[te]);
      a.value = X.files;
    }), Qe(() => {
      ge.on("focusInput", V), ge.on("blurInput", $), ge.on("setInputValue", J), l.value && (_.value = new ResizeObserver((T) => {
        for (const X of T)
          X.target === l.value && ce();
      }), _.value.observe(l.value));
    }), Et(() => {
      ge.off("focusInput", V), ge.off("blurInput", $), ge.off("setInputValue", J), _.value && (_.value.disconnect(), _.value = null);
    });
    function $() {
      l.value && l.value.blur();
    }
    function V() {
      l.value && l.value.focus();
    }
    function J(T) {
      b.value = T, V();
    }
    async function ie(T) {
      if (T.preventDefault(), x.value)
        return;
      const X = b.value;
      b.value = "", p.value = !0, await c.sendMessage(X, Array.from(a.value ?? [])), p.value = !1, D(), a.value = null;
    }
    async function _e(T) {
      T.shiftKey || (await ie(T), ce());
    }
    function ve(T) {
      if (!a.value) return;
      const X = new DataTransfer();
      for (let te = 0; te < a.value.length; te++) {
        const j = a.value[te];
        T.name !== j.name && X.items.add(j);
      }
      D(), a.value = X.files;
    }
    function Te(T) {
      (T.key === "ArrowUp" || T.key === "ArrowDown") && (T.preventDefault(), r("arrowKeyDown", {
        key: T.key,
        currentInputValue: b.value
      }));
    }
    function Re() {
      C.value || A({ accept: N(R) });
    }
    function ce() {
      const T = l.value;
      if (!T) return;
      T.style.height = "var(--chat--textarea--height)";
      const X = Math.min(T.scrollHeight, 480);
      T.style.height = `${X}px`;
    }
    return (T, X) => {
      var te, j;
      return d(), h("div", {
        class: "chat-input",
        style: Mt(E.value),
        onKeydown: yt(Te, ["stop"])
      }, [
        s("div", X2, [
          T.$slots.leftPanel ? (d(), h("div", J2, [
            He(T.$slots, "leftPanel", {}, void 0, !0)
          ])) : ue("", !0),
          At(s("textarea", {
            ref_key: "chatTextArea",
            ref: l,
            "onUpdate:modelValue": X[0] || (X[0] = (ne) => b.value = ne),
            "data-test-id": "chat-input",
            disabled: m.value,
            placeholder: N(n)(t.placeholder),
            onKeydown: bc(_e, ["enter"]),
            onInput: ce,
            onMousedown: ce,
            onFocus: ce
          }, null, 40, Y2), [
            [mc, b.value]
          ]),
          s("div", Q2, [
            S.value ? (d(), h("button", {
              key: 0,
              disabled: C.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: Re
            }, [
              me(N(w2), {
                height: "24",
                width: "24"
              })
            ], 8, es)) : ue("", !0),
            me(K2, {
              disabled: N(N(i)) || ((te = N(o).disabled) == null ? void 0 : te.value) === !0
            }, null, 8, ["disabled"]),
            s("button", {
              disabled: x.value,
              class: "chat-input-send-button",
              onClick: ie
            }, [
              me(N(y2), {
                height: "24",
                width: "24"
              })
            ], 8, us)
          ])
        ]),
        (j = a.value) != null && j.length && !p.value ? (d(), h("div", ts, [
          (d(!0), h(Tu, null, Ru(a.value, (ne) => (d(), ee(zt, {
            key: ne.name,
            file: ne,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: ve
          }, null, 8, ["file"]))), 128))
        ])) : ue("", !0)
      ], 36);
    };
  }
}), rs = /* @__PURE__ */ eu(ns, [["__scopeId", "data-v-d2d28381"]]), os = { class: "chat-layout" }, is = {
  key: 0,
  class: "chat-header"
}, cs = {
  key: 2,
  class: "chat-footer"
}, ss = /* @__PURE__ */ be({
  __name: "Layout",
  setup(e) {
    const u = he(null);
    function t() {
      const n = u.value;
      n && (n.scrollTop = n.scrollHeight);
    }
    return Qe(() => {
      ge.on("scrollToBottom", t), window.addEventListener("resize", t);
    }), _c(() => {
      ge.off("scrollToBottom", t), window.removeEventListener("resize", t);
    }), (n, r) => (d(), h("main", os, [
      n.$slots.header ? (d(), h("div", is, [
        He(n.$slots, "header")
      ])) : ue("", !0),
      n.$slots.default ? (d(), h("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: u,
        class: "chat-body"
      }, [
        He(n.$slots, "default")
      ], 512)) : ue("", !0),
      n.$slots.footer ? (d(), h("div", cs, [
        He(n.$slots, "footer")
      ])) : ue("", !0)
    ]));
  }
}), Ht = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", Pt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", jt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M10.3019%200C10.542%200%2010.7678%200.0476193%2010.9791%200.142858C11.1905%200.238096%2011.373%200.371429%2011.5267%200.542858C11.6805%200.714286%2011.8005%200.92381%2011.887%201.17143C11.9735%201.40952%2012.0167%201.67619%2012.0167%201.97143L12.0023%203.38571C12.0023%203.50952%2012.0023%203.61429%2012.0023%203.7C12.0119%203.78571%2012.0263%203.87143%2012.0455%203.95714C12.0647%204.04286%2012.0936%204.13333%2012.132%204.22857C12.18%204.31429%2012.2425%204.42857%2012.3193%204.57143L12.8237%205.24286C12.9198%205.4619%2012.9774%205.66667%2012.9966%205.85714C13.0158%206.0381%2012.9534%206.25238%2012.8093%206.5L12.3337%207.11429C12.2569%207.26667%2012.1944%207.39524%2012.1464%207.5C12.108%207.60476%2012.0791%207.70476%2012.0599%207.8C12.0407%207.89524%2012.0263%207.99524%2012.0167%208.1C12.0167%208.20476%2012.0167%208.33333%2012.0167%208.48571V9.7C12.0167%2010.0048%2011.9783%2010.2952%2011.9014%2010.5714C11.8342%2010.8381%2011.7333%2011.0714%2011.5988%2011.2714C11.4739%2011.4714%2011.3154%2011.6286%2011.1233%2011.7429C10.9311%2011.8571%2010.7198%2011.9143%2010.4892%2011.9143L9.49487%2012C9.48526%2012%209.42282%2012%209.30753%2012C9.19225%2012%209.05775%2011.9905%208.90404%2011.9714C8.75993%2011.9619%208.61103%2011.9381%208.45731%2011.9C8.31321%2011.8714%208.20273%2011.819%208.12587%2011.7429C8.06823%2011.6952%208.0202%2011.619%207.98177%2011.5143C7.95295%2011.4095%207.93854%2011.3095%207.93854%2011.2143C7.93854%2011.0238%208.00579%2010.8762%208.14028%2010.7714C8.27478%2010.6667%208.42369%2010.6%208.58701%2010.5714C8.75993%2010.5333%208.92806%2010.5143%209.09137%2010.5143H9.71102C10.0953%2010.5143%2010.2826%2010.1857%2010.273%209.52857L10.2586%208.22857C10.2586%207.94286%2010.2682%207.72381%2010.2874%207.57143C10.3163%207.40952%2010.3595%207.27619%2010.4171%207.17143C10.4844%207.06667%2010.566%206.9619%2010.6621%206.85714C10.7582%206.75238%2010.8735%206.60476%2011.008%206.41429C11.0944%206.29048%2011.1665%206.19048%2011.2241%206.11429C11.2818%206.02857%2011.3154%205.94762%2011.325%205.87143C11.3346%205.79524%2011.3154%205.70952%2011.2674%205.61429C11.2289%205.51905%2011.1569%205.39048%2011.0512%205.22857C10.8975%205%2010.7678%204.81905%2010.6621%204.68571C10.566%204.55238%2010.4844%204.42857%2010.4171%204.31429C10.3595%204.2%2010.3163%204.08095%2010.2874%203.95714C10.2682%203.83333%2010.2586%203.66191%2010.2586%203.44286V2.41429C10.2586%202.29048%2010.2538%202.17143%2010.2442%202.05714C10.2442%201.94286%2010.225%201.84286%2010.1866%201.75714C10.1481%201.67143%2010.0857%201.60476%209.99923%201.55714C9.92238%201.50952%209.8119%201.48571%209.66779%201.48571H9.01932C9.00972%201.48571%208.97129%201.48571%208.90404%201.48571C8.83679%201.48571%208.75513%201.48095%208.65906%201.47143C8.56299%201.45238%208.46212%201.42857%208.35644%201.4C8.25076%201.36191%208.1595%201.30476%208.08264%201.22857C8.025%201.18095%207.97697%201.10476%207.93854%201C7.90972%200.895238%207.89531%200.795238%207.89531%200.7C7.89531%200.509524%207.96256%200.361905%208.09705%200.257143C8.23155%200.152381%208.38526%200.0857146%208.55819%200.057143C8.73111%200.0190477%208.89924%200%209.06255%200H10.3019Z%20M3.93745%200C4.10077%200%204.26889%200.0190477%204.44181%200.057143C4.61474%200.0857146%204.76845%200.152381%204.90295%200.257143C5.03745%200.361905%205.10469%200.509524%205.10469%200.7C5.10469%200.795238%205.08548%200.895238%205.04705%201C5.01823%201.10476%204.975%201.18095%204.91736%201.22857C4.8405%201.30476%204.74924%201.36191%204.64356%201.4C4.53788%201.42857%204.43701%201.45238%204.34094%201.47143C4.24487%201.48095%204.16321%201.48571%204.09596%201.48571C4.02871%201.48571%203.99029%201.48571%203.98068%201.48571H3.33221C3.1881%201.48571%203.07282%201.50952%202.98636%201.55714C2.9095%201.60476%202.85186%201.67143%202.81343%201.75714C2.775%201.84286%202.75099%201.94286%202.74138%202.05714C2.74138%202.17143%202.74138%202.29048%202.74138%202.41429V3.44286C2.74138%203.66191%202.72697%203.83333%202.69815%203.95714C2.67893%204.08095%202.6357%204.2%202.56845%204.31429C2.51081%204.42857%202.42915%204.55238%202.32348%204.68571C2.22741%204.81905%202.10251%205%201.9488%205.22857C1.84313%205.39048%201.76627%205.51905%201.71824%205.61429C1.67981%205.70952%201.6654%205.79524%201.675%205.87143C1.68461%205.94762%201.71824%206.02857%201.77588%206.11429C1.83352%206.19048%201.90557%206.29048%201.99203%206.41429C2.12653%206.60476%202.24182%206.75238%202.33789%206.85714C2.43396%206.9619%202.51081%207.06667%202.56845%207.17143C2.6357%207.27619%202.67893%207.40952%202.69815%207.57143C2.72697%207.72381%202.74138%207.94286%202.74138%208.22857L2.72697%209.52857C2.71736%2010.1857%202.9047%2010.5143%203.28898%2010.5143H3.90863C4.07194%2010.5143%204.23526%2010.5333%204.39858%2010.5714C4.57151%2010.6%204.72522%2010.6667%204.85972%2010.7714C4.99421%2010.8762%205.06146%2011.0238%205.06146%2011.2143C5.06146%2011.3095%205.04225%2011.4095%205.00382%2011.5143C4.975%2011.619%204.93177%2011.6952%204.87413%2011.7429C4.79727%2011.819%204.68199%2011.8714%204.52828%2011.9C4.38417%2011.9381%204.23526%2011.9619%204.08155%2011.9714C3.93745%2011.9905%203.80775%2012%203.69247%2012C3.57719%2012%203.51474%2012%203.50513%2012L2.51081%2011.9143C2.28024%2011.9143%202.06889%2011.8571%201.87675%2011.7429C1.68461%2011.6286%201.52129%2011.4714%201.3868%2011.2714C1.2619%2011.0714%201.16103%2010.8381%201.08418%2010.5714C1.01693%2010.2952%200.983302%2010.0048%200.983302%209.7V8.48571C0.983302%208.33333%200.978499%208.20476%200.968892%208.1C0.968892%207.99524%200.959285%207.89524%200.940071%207.8C0.920857%207.70476%200.887232%207.60476%200.839198%207.5C0.80077%207.39524%200.743128%207.26667%200.666272%207.11429L0.190727%206.5C0.0466221%206.25238%20-0.0158233%206.0381%200.00339071%205.85714C0.0226046%205.66667%200.0802464%205.4619%200.176316%205.24286L0.680682%204.57143C0.757538%204.42857%200.81518%204.31429%200.853608%204.22857C0.901643%204.13333%200.935267%204.04286%200.954481%203.95714C0.973695%203.87143%200.983302%203.78571%200.983302%203.7C0.992909%203.61429%200.997712%203.50952%200.997712%203.38571L0.983302%201.97143C0.983302%201.67619%201.02653%201.40952%201.113%201.17143C1.19946%200.92381%201.31955%200.714286%201.47326%200.542858C1.62697%200.371429%201.8095%200.238096%202.02086%200.142858C2.23221%200.0476193%202.45797%200%202.69815%200H3.93745Z'%20/%3e%3c/svg%3e", Ut = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", qt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", Vt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", Zt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", Gt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", Wt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", Kt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", Xt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", Jt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", Yt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", Qt = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", en = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", un = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", tn = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", as = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ls(e, u) {
  return d(), h("svg", as, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ])]);
}
const nn = g({ name: "lucide-align-right", render: ls }), ds = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fs(e, u) {
  return d(), h("svg", ds, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      s("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ])]);
}
const rn = g({ name: "lucide-archive", render: fs }), hs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ps(e, u) {
  return d(), h("svg", hs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ])]);
}
const on = g({ name: "lucide-arrow-down", render: ps }), gs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bs(e, u) {
  return d(), h("svg", gs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ])]);
}
const a0 = g({ name: "lucide-arrow-left", render: bs }), ms = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _s(e, u) {
  return d(), h("svg", ms, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ])]);
}
const cn = g({ name: "lucide-arrow-left-right", render: _s }), xs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ks(e, u) {
  return d(), h("svg", xs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ])]);
}
const sn = g({ name: "lucide-arrow-right", render: ks }), ws = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Cs(e, u) {
  return d(), h("svg", ws, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ])]);
}
const an = g({ name: "lucide-arrow-up", render: Cs }), vs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ys(e, u) {
  return d(), h("svg", vs, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      s("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ])]);
}
const ln = g({ name: "lucide-at-sign", render: ys }), Es = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ms(e, u) {
  return d(), h("svg", Es, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M4.929 4.929L19.07 19.071" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const dn = g({ name: "lucide-ban", render: Ms }), As = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ds(e, u) {
  return d(), h("svg", As, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ])]);
}
const fn = g({ name: "lucide-bell", render: Ds }), Bs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ss(e, u) {
  return d(), h("svg", Bs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ])]);
}
const hn = g({ name: "lucide-book", render: Ss }), Ls = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Is(e, u) {
  return d(), h("svg", Ls, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 8V4H8" }),
      s("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      s("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ])]);
}
const pn = g({ name: "lucide-bot", render: Is }), Fs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $s(e, u) {
  return d(), h("svg", Fs, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      s("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ])]);
}
const gn = g({ name: "lucide-box", render: $s }), Ts = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rs(e, u) {
  return d(), h("svg", Ts, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></g>', 1)
  ])]);
}
const bn = g({ name: "lucide-brain", render: Rs }), Ns = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Os(e, u) {
  return d(), h("svg", Ns, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2" }),
      s("path", { d: "M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13" })
    ], -1)
  ])]);
}
const mn = g({ name: "lucide-bug", render: Os }), zs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Hs(e, u) {
  return d(), h("svg", zs, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      s("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ])]);
}
const _n = g({ name: "lucide-calculator", render: Hs }), Ps = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function js(e, u) {
  return d(), h("svg", Ps, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M8 2v4m8-4v4" }),
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      s("path", { d: "M3 10h18" })
    ], -1)
  ])]);
}
const xn = g({ name: "lucide-calendar", render: js }), Us = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qs(e, u) {
  return d(), h("svg", Us, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"
    }, null, -1)
  ])]);
}
const kn = g({ name: "lucide-case-upper", render: qs }), Vs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Zs(e, u) {
  return d(), h("svg", Vs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ])]);
}
const wn = g({ name: "lucide-chart-column-decreasing", render: Zs }), Gs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ws(e, u) {
  return d(), h("svg", Gs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ])]);
}
const Cn = g({ name: "lucide-check", render: Ws }), Ks = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Xs(e, u) {
  return d(), h("svg", Ks, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ])]);
}
const vn = g({ name: "lucide-check-check", render: Xs }), Js = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ys(e, u) {
  return d(), h("svg", Js, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ])]);
}
const Su = g({ name: "lucide-chevron-down", render: Ys }), Qs = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e1(e, u) {
  return d(), h("svg", Qs, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ])]);
}
const Lu = g({ name: "lucide-chevron-left", render: e1 }), u1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t1(e, u) {
  return d(), h("svg", u1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ])]);
}
const Iu = g({ name: "lucide-chevron-right", render: t1 }), n1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r1(e, u) {
  return d(), h("svg", n1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ])]);
}
const Fu = g({ name: "lucide-chevron-up", render: r1 }), o1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i1(e, u) {
  return d(), h("svg", o1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ])]);
}
const yn = g({ name: "lucide-chevrons-left", render: i1 }), c1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s1(e, u) {
  return d(), h("svg", c1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ])]);
}
const a1 = g({ name: "lucide-chevrons-up-down", render: s1 }), l1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d1(e, u) {
  return d(), h("svg", l1, [...u[0] || (u[0] = [
    s("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ])]);
}
const En = g({ name: "lucide-circle", render: d1 }), f1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h1(e, u) {
  return d(), h("svg", f1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ])]);
}
const Mn = g({ name: "lucide-circle-alert", render: h1 }), p1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g1(e, u) {
  return d(), h("svg", p1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ])]);
}
const An = g({ name: "lucide-circle-check", render: g1 }), b1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m1(e, u) {
  return d(), h("svg", b1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ])]);
}
const Dn = g({ name: "lucide-circle-dot", render: m1 }), _1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x1(e, u) {
  return d(), h("svg", _1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ])]);
}
const l0 = g({ name: "lucide-circle-help", render: x1 }), k1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w1(e, u) {
  return d(), h("svg", k1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M8 12h8" })
    ], -1)
  ])]);
}
const Bn = g({ name: "lucide-circle-minus", render: w1 }), C1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v1(e, u) {
  return d(), h("svg", C1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ])]);
}
const Sn = g({ name: "lucide-circle-pause", render: v1 }), y1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E1(e, u) {
  return d(), h("svg", y1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Ln = g({ name: "lucide-circle-play", render: E1 }), M1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A1(e, u) {
  return d(), h("svg", M1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ])]);
}
const In = g({ name: "lucide-circle-plus", render: A1 }), D1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B1(e, u) {
  return d(), h("svg", D1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      s("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Fn = g({ name: "lucide-circle-user-round", render: B1 }), S1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L1(e, u) {
  return d(), h("svg", S1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ])]);
}
const $n = g({ name: "lucide-circle-x", render: L1 }), I1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F1(e, u) {
  return d(), h("svg", I1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      s("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ])]);
}
const Tn = g({ name: "lucide-clipboard-list", render: F1 }), $1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T1(e, u) {
  return d(), h("svg", $1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 6v6l4 2" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Rn = g({ name: "lucide-clock", render: T1 }), R1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N1(e, u) {
  return d(), h("svg", R1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ])]);
}
const Nn = g({ name: "lucide-cloud", render: N1 }), O1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z1(e, u) {
  return d(), h("svg", O1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      s("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ])]);
}
const On = g({ name: "lucide-cloud-download", render: z1 }), H1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P1(e, u) {
  return d(), h("svg", H1, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ])]);
}
const zn = g({ name: "lucide-code", render: P1 }), j1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U1(e, u) {
  return d(), h("svg", j1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M11 10.27L7 3.34m4 10.39l-4 6.93M12 22v-2m0-18v2m2 8h8m-5 8.66l-1-1.73m1-15.59l-1 1.73M2 12h2m16.66 5l-1.73-1m1.73-9l-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "8"
      })
    ], -1)
  ])]);
}
const d0 = g({ name: "lucide-cog", render: U1 }), q1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V1(e, u) {
  return d(), h("svg", q1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ])]);
}
const Hn = g({ name: "lucide-contrast", render: V1 }), Z1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G1(e, u) {
  return d(), h("svg", Z1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      s("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ])]);
}
const Pn = g({ name: "lucide-copy", render: G1 }), W1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K1(e, u) {
  return d(), h("svg", W1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      s("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      s("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ])]);
}
const jn = g({ name: "lucide-database", render: K1 }), X1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J1(e, u) {
  return d(), h("svg", X1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Un = g({ name: "lucide-earth", render: J1 }), Y1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q1(e, u) {
  return d(), h("svg", Y1, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      s("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      s("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ])]);
}
const qn = g({ name: "lucide-ellipsis", render: Q1 }), ea = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ua(e, u) {
  return d(), h("svg", ea, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      s("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      s("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ])]);
}
const Vn = g({ name: "lucide-ellipsis-vertical", render: ua }), ta = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function na(e, u) {
  return d(), h("svg", ta, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ])]);
}
const Zn = g({ name: "lucide-equal", render: na }), ra = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oa(e, u) {
  return d(), h("svg", ra, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ])]);
}
const Gn = g({ name: "lucide-external-link", render: oa }), ia = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ca(e, u) {
  return d(), h("svg", ia, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      s("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ])]);
}
const Wn = g({ name: "lucide-eye", render: ca }), sa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aa(e, u) {
  return d(), h("svg", sa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      s("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ])]);
}
const Kn = g({ name: "lucide-eye-off", render: aa }), la = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function da(e, u) {
  return d(), h("svg", la, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      s("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ])]);
}
const Xn = g({ name: "lucide-file", render: da }), fa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ha(e, u) {
  return d(), h("svg", fa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      s("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      s("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ])]);
}
const Jn = g({ name: "lucide-file-archive", render: ha }), pa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ga(e, u) {
  return d(), h("svg", pa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      s("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ])]);
}
const Yn = g({ name: "lucide-file-code", render: ga }), ba = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ma(e, u) {
  return d(), h("svg", ba, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      s("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ])]);
}
const Qn = g({ name: "lucide-file-down", render: ma }), _a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xa(e, u) {
  return d(), h("svg", _a, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      s("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ])]);
}
const er = g({ name: "lucide-file-input", render: xa }), ka = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wa(e, u) {
  return d(), h("svg", ka, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      s("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      s("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ])]);
}
const ur = g({ name: "lucide-file-output", render: wa }), Ca = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function va(e, u) {
  return d(), h("svg", Ca, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      s("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ])]);
}
const f0 = g({ name: "lucide-file-text", render: va }), ya = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ea(e, u) {
  return d(), h("svg", ya, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }),
      s("path", { d: "M15 2v4a2 2 0 0 0 2 2h4M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" })
    ], -1)
  ])]);
}
const tr = g({ name: "lucide-files", render: Ea }), Ma = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Aa(e, u) {
  return d(), h("svg", Ma, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      s("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ])]);
}
const nr = g({ name: "lucide-fingerprint", render: Aa }), Da = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ba(e, u) {
  return d(), h("svg", Da, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ])]);
}
const rr = g({ name: "lucide-flask-conical", render: Ba }), Sa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function La(e, u) {
  return d(), h("svg", Sa, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ])]);
}
const or = g({ name: "lucide-folder", render: La }), Ia = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Fa(e, u) {
  return d(), h("svg", Ia, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ])]);
}
const ir = g({ name: "lucide-folder-open", render: Fa }), $a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ta(e, u) {
  return d(), h("svg", $a, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ])]);
}
const cr = g({ name: "lucide-folder-plus", render: Ta }), Ra = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Na(e, u) {
  return d(), h("svg", Ra, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ])]);
}
const sr = g({ name: "lucide-funnel", render: Na }), Oa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function za(e, u) {
  return d(), h("svg", Oa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M10.5 3L8 9l4 13l4-13l-2.5-6" }),
      s("path", { d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20" })
    ], -1)
  ])]);
}
const ar = g({ name: "lucide-gem", render: za }), Ha = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pa(e, u) {
  return d(), h("svg", Ha, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      s("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ])]);
}
const lr = g({ name: "lucide-gift", render: Pa }), ja = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ua(e, u) {
  return d(), h("svg", ja, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ])]);
}
const dr = g({ name: "lucide-git-branch", render: Ua }), qa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Va(e, u) {
  return d(), h("svg", qa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ])]);
}
const fr = g({ name: "lucide-globe", render: Va }), Za = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ga(e, u) {
  return d(), h("svg", Za, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      s("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ])]);
}
const hr = g({ name: "lucide-graduation-cap", render: Ga }), Wa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ka(e, u) {
  return d(), h("svg", Wa, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 3v18m-9-9h18" }),
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ])]);
}
const pr = g({ name: "lucide-grid-2x2", render: Ka }), Xa = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ja(e, u) {
  return d(), h("svg", Xa, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ])]);
}
const gr = g({ name: "lucide-grip-vertical", render: Ja }), Ya = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Qa(e, u) {
  return d(), h("svg", Ya, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ])]);
}
const br = g({ name: "lucide-hand-coins", render: Qa }), el = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ul(e, u) {
  return d(), h("svg", el, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      s("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      s("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ])]);
}
const mr = g({ name: "lucide-handshake", render: ul }), tl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nl(e, u) {
  return d(), h("svg", tl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ])]);
}
const _r = g({ name: "lucide-hard-drive", render: nl }), rl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ol(e, u) {
  return d(), h("svg", rl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      s("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      s("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ])]);
}
const xr = g({ name: "lucide-hard-drive-download", render: ol }), il = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cl(e, u) {
  return d(), h("svg", il, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ])]);
}
const kr = g({ name: "lucide-hash", render: cl }), sl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function al(e, u) {
  return d(), h("svg", sl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      s("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ])]);
}
const wr = g({ name: "lucide-history", render: al }), ll = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dl(e, u) {
  return d(), h("svg", ll, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ])]);
}
const Cr = g({ name: "lucide-hourglass", render: dl }), fl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hl(e, u) {
  return d(), h("svg", fl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      s("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ])]);
}
const vr = g({ name: "lucide-house", render: hl }), pl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gl(e, u) {
  return d(), h("svg", pl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      s("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      s("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ])]);
}
const yr = g({ name: "lucide-image", render: gl }), bl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ml(e, u) {
  return d(), h("svg", bl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      s("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ])]);
}
const Er = g({ name: "lucide-inbox", render: ml }), _l = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xl(e, u) {
  return d(), h("svg", _l, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ])]);
}
const h0 = g({ name: "lucide-info", render: xl }), kl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wl(e, u) {
  return d(), h("svg", kl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      s("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ])]);
}
const Mr = g({ name: "lucide-key-round", render: wl }), Cl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vl(e, u) {
  return d(), h("svg", Cl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ])]);
}
const Ar = g({ name: "lucide-languages", render: vl }), yl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function El(e, u) {
  return d(), h("svg", yl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      s("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      s("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ])]);
}
const Dr = g({ name: "lucide-layers", render: El }), Ml = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Al(e, u) {
  return d(), h("svg", Ml, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ])]);
}
const Br = g({ name: "lucide-lightbulb", render: Al }), Dl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bl(e, u) {
  return d(), h("svg", Dl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      s("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ])]);
}
const Sr = g({ name: "lucide-link", render: Bl }), Sl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ll(e, u) {
  return d(), h("svg", Sl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"
    }, null, -1)
  ])]);
}
const Lr = g({ name: "lucide-list", render: Ll }), Il = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Fl(e, u) {
  return d(), h("svg", Il, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4"
    }, null, -1)
  ])]);
}
const Ir = g({ name: "lucide-list-checks", render: Fl }), $l = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tl(e, u) {
  return d(), h("svg", $l, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      s("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ])]);
}
const Fr = g({ name: "lucide-lock", render: Tl }), Rl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nl(e, u) {
  return d(), h("svg", Rl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ])]);
}
const $r = g({ name: "lucide-log-in", render: Nl }), Ol = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zl(e, u) {
  return d(), h("svg", Ol, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ])]);
}
const Tr = g({ name: "lucide-log-out", render: zl }), Hl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pl(e, u) {
  return d(), h("svg", Hl, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      s("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ])]);
}
const Rr = g({ name: "lucide-mail", render: Pl }), jl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ul(e, u) {
  return d(), h("svg", jl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ])]);
}
const Nr = g({ name: "lucide-maximize", render: Ul }), ql = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vl(e, u) {
  return d(), h("svg", ql, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ])]);
}
const Or = g({ name: "lucide-maximize-2", render: Vl }), Zl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gl(e, u) {
  return d(), h("svg", Zl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 5h16M4 12h16M4 19h16"
    }, null, -1)
  ])]);
}
const zr = g({ name: "lucide-menu", render: Gl }), Wl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Kl(e, u) {
  return d(), h("svg", Wl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
    }, null, -1)
  ])]);
}
const Hr = g({ name: "lucide-message-circle", render: Kl }), Xl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jl(e, u) {
  return d(), h("svg", Xl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ])]);
}
const Pr = g({ name: "lucide-messages-square", render: Jl }), Yl = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ql(e, u) {
  return d(), h("svg", Yl, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ])]);
}
const jr = g({ name: "lucide-milestone", render: Ql }), ed = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ud(e, u) {
  return d(), h("svg", ed, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ])]);
}
const td = g({ name: "lucide-minimize-2", render: ud }), nd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rd(e, u) {
  return d(), h("svg", nd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ])]);
}
const Ur = g({ name: "lucide-mouse-pointer", render: rd }), od = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function id(e, u) {
  return d(), h("svg", od, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ])]);
}
const qr = g({ name: "lucide-network", render: id }), cd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sd(e, u) {
  return d(), h("svg", cd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      s("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      s("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ])]);
}
const Vr = g({ name: "lucide-package-open", render: sd }), ad = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ld(e, u) {
  return d(), h("svg", ad, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ])]);
}
const Zr = g({ name: "lucide-palette", render: ld }), dd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fd(e, u) {
  return d(), h("svg", dd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "5",
        height: "18",
        x: "14",
        y: "3",
        rx: "1"
      }),
      s("rect", {
        width: "5",
        height: "18",
        x: "5",
        y: "3",
        rx: "1"
      })
    ], -1)
  ])]);
}
const Gr = g({ name: "lucide-pause", render: fd }), hd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pd(e, u) {
  return d(), h("svg", hd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ])]);
}
const Wr = g({ name: "lucide-pen", render: pd }), gd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bd(e, u) {
  return d(), h("svg", gd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ])]);
}
const Kr = g({ name: "lucide-pencil", render: bd }), md = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _d(e, u) {
  return d(), h("svg", md, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ])]);
}
const Xr = g({ name: "lucide-pin", render: _d }), xd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kd(e, u) {
  return d(), h("svg", xd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
    }, null, -1)
  ])]);
}
const Jr = g({ name: "lucide-play", render: kd }), wd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Cd(e, u) {
  return d(), h("svg", wd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ])]);
}
const Yr = g({ name: "lucide-plug", render: Cd }), vd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yd(e, u) {
  return d(), h("svg", vd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ])]);
}
const Qr = g({ name: "lucide-plus", render: yd }), Ed = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Md(e, u) {
  return d(), h("svg", Ed, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      s("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ])]);
}
const eo = g({ name: "lucide-pocket-knife", render: Md }), Ad = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Dd(e, u) {
  return d(), h("svg", Ad, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ])]);
}
const uo = g({ name: "lucide-power", render: Dd }), Bd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Sd(e, u) {
  return d(), h("svg", Bd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m15 14l5-5l-5-5" }),
      s("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ])]);
}
const to = g({ name: "lucide-redo-2", render: Sd }), Ld = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Id(e, u) {
  return d(), h("svg", Ld, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      s("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      s("path", { d: "M8 16H3v5" })
    ], -1)
  ])]);
}
const $u = g({ name: "lucide-refresh-cw", render: Id }), Fd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $d(e, u) {
  return d(), h("svg", Fd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ])]);
}
const no = g({ name: "lucide-remove-formatting", render: $d }), Td = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rd(e, u) {
  return d(), h("svg", Td, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      s("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ])]);
}
const ro = g({ name: "lucide-rss", render: Rd }), Nd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Od(e, u) {
  return d(), h("svg", Nd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ])]);
}
const oo = g({ name: "lucide-satellite-dish", render: Od }), zd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Hd(e, u) {
  return d(), h("svg", zd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      s("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ])]);
}
const io = g({ name: "lucide-save", render: Hd }), Pd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jd(e, u) {
  return d(), h("svg", Pd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ])]);
}
const co = g({ name: "lucide-scale", render: jd }), Ud = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qd(e, u) {
  return d(), h("svg", Ud, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ])]);
}
const p0 = g({ name: "lucide-scissors", render: qd }), Vd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Zd(e, u) {
  return d(), h("svg", Vd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m21 21l-4.34-4.34" }),
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ])]);
}
const so = g({ name: "lucide-search", render: Zd }), Gd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Wd(e, u) {
  return d(), h("svg", Gd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ])]);
}
const ao = g({ name: "lucide-send", render: Wd }), Kd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Xd(e, u) {
  return d(), h("svg", Kd, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      s("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      s("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ])]);
}
const lo = g({ name: "lucide-server", render: Xd }), Jd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Yd(e, u) {
  return d(), h("svg", Jd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ])]);
}
const fo = g({ name: "lucide-share", render: Yd }), Qd = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ef(e, u) {
  return d(), h("svg", Qd, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"
    }, null, -1)
  ])]);
}
const ho = g({ name: "lucide-sliders-horizontal", render: ef }), uf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tf(e, u) {
  return d(), h("svg", uf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      s("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ])]);
}
const po = g({ name: "lucide-smile", render: tf }), nf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rf(e, u) {
  return d(), h("svg", nf, [...u[0] || (u[0] = [
    s("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      rx: "2"
    }, null, -1)
  ])]);
}
const go = g({ name: "lucide-square", render: rf }), of = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cf(e, u) {
  return d(), h("svg", of, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      s("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ])]);
}
const bo = g({ name: "lucide-square-check", render: cf }), sf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function af(e, u) {
  return d(), h("svg", sf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      s("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ])]);
}
const mo = g({ name: "lucide-square-pen", render: af }), lf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function df(e, u) {
  return d(), h("svg", lf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      s("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ])]);
}
const _o = g({ name: "lucide-square-plus", render: df }), ff = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hf(e, u) {
  return d(), h("svg", ff, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      s("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ])]);
}
const xo = g({ name: "lucide-sticky-note", render: hf }), pf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gf(e, u) {
  return d(), h("svg", pf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      s("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ])]);
}
const ko = g({ name: "lucide-sun", render: gf }), bf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mf(e, u) {
  return d(), h("svg", bf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M12 3v18" }),
      s("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      s("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ])]);
}
const wo = g({ name: "lucide-table", render: mf }), _f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xf(e, u) {
  return d(), h("svg", _f, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }),
      s("circle", {
        cx: "10.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ])]);
}
const Co = g({ name: "lucide-tags", render: xf }), kf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wf(e, u) {
  return d(), h("svg", kf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ])]);
}
const vo = g({ name: "lucide-terminal", render: wf }), Cf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vf(e, u) {
  return d(), h("svg", Cf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ])]);
}
const yo = g({ name: "lucide-thumbs-down", render: vf }), yf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ef(e, u) {
  return d(), h("svg", yf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ])]);
}
const Eo = g({ name: "lucide-thumbs-up", render: Ef }), Mf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Af(e, u) {
  return d(), h("svg", Mf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }, null, -1)
  ])]);
}
const Mo = g({ name: "lucide-trash-2", render: Af }), Df = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bf(e, u) {
  return d(), h("svg", Df, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ])]);
}
const Ao = g({ name: "lucide-tree-pine", render: Bf }), Sf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Lf(e, u) {
  return d(), h("svg", Sf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ])]);
}
const Do = g({ name: "lucide-triangle-alert", render: Lf }), If = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ff(e, u) {
  return d(), h("svg", If, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M9 14L4 9l5-5" }),
      s("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ])]);
}
const Bo = g({ name: "lucide-undo-2", render: Ff }), $f = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tf(e, u) {
  return d(), h("svg", $f, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ])]);
}
const So = g({ name: "lucide-unlink", render: Tf }), Rf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nf(e, u) {
  return d(), h("svg", Rf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      s("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const Lo = g({ name: "lucide-user", render: Nf }), Of = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zf(e, u) {
  return d(), h("svg", Of, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      s("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const Io = g({ name: "lucide-user-check", render: zf }), Hf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pf(e, u) {
  return d(), h("svg", Hf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      s("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      s("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ])]);
}
const Fo = g({ name: "lucide-user-lock", render: Pf }), jf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Uf(e, u) {
  return d(), h("svg", jf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      s("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ])]);
}
const $o = g({ name: "lucide-user-round", render: Uf }), qf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vf(e, u) {
  return d(), h("svg", qf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      s("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const To = g({ name: "lucide-users", render: Vf }), Zf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gf(e, u) {
  return d(), h("svg", Zf, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ])]);
}
const Ro = g({ name: "lucide-variable", render: Gf }), Wf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Kf(e, u) {
  return d(), h("svg", Wf, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ])]);
}
const No = g({ name: "lucide-vault", render: Kf }), Xf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jf(e, u) {
  return d(), h("svg", Xf, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      s("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ])]);
}
const Oo = g({ name: "lucide-video", render: Jf }), Yf = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Qf(e, u) {
  return d(), h("svg", Yf, [...u[0] || (u[0] = [
    je('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ])]);
}
const zo = g({ name: "lucide-waypoints", render: Qf }), eh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uh(e, u) {
  return d(), h("svg", eh, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
    }, null, -1)
  ])]);
}
const Ho = g({ name: "lucide-wrench", render: uh }), th = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nh(e, u) {
  return d(), h("svg", th, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ])]);
}
const g0 = g({ name: "lucide-x", render: nh }), rh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oh(e, u) {
  return d(), h("svg", rh, [...u[0] || (u[0] = [
    s("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ])]);
}
const Po = g({ name: "lucide-zap", render: oh }), ih = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ch(e, u) {
  return d(), h("svg", ih, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      s("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ])]);
}
const jo = g({ name: "lucide-zoom-in", render: ch }), sh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ah(e, u) {
  return d(), h("svg", sh, [...u[0] || (u[0] = [
    s("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      s("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      s("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ])]);
}
const Uo = g({ name: "lucide-zoom-out", render: ah }), tt = {
  // customIcons
  variable: Ro,
  "pop-out": Ut,
  triangle: un,
  "status-completed": Gt,
  "status-waiting": Jt,
  "status-error": Wt,
  "status-canceled": Zt,
  "status-new": Kt,
  "status-unknown": Xt,
  "status-warning": Yt,
  "vector-square": tn,
  schema: qt,
  json: jt,
  binary: Ht,
  text: Qt,
  toolbox: en,
  spinner: Vt,
  xmark: g0,
  // fontAwesomeIcons
  "caret-up": Fu,
  "caret-down": Su,
  "caret-right": Iu,
  "caret-left": Lu,
  "folder-plus": cr,
  share: fo,
  "user-check": Io,
  "check-double": vn,
  "exclamation-circle": Mn,
  circle: En,
  "eye-slash": Kn,
  folder: or,
  "minus-circle": Bn,
  adjust: Hn,
  refresh: $u,
  vault: No,
  "angle-double-left": yn,
  "angle-down": Su,
  "angle-left": Lu,
  "angle-right": Iu,
  "angle-up": Fu,
  archive: rn,
  "arrow-left": a0,
  "arrow-right": sn,
  "arrow-up": an,
  "arrow-down": on,
  at: ln,
  ban: dn,
  "balance-scale-left": co,
  bars: zr,
  bolt: Po,
  book: hn,
  "box-open": Vr,
  bug: mn,
  brain: bn,
  calculator: _n,
  calendar: xn,
  "chart-bar": wn,
  check: Cn,
  "check-circle": An,
  "check-square": bo,
  "chevron-left": Lu,
  "chevron-right": Iu,
  "chevron-down": Su,
  "chevron-up": Fu,
  code: zn,
  "code-branch": dr,
  cog: d0,
  cogs: d0,
  comment: Hr,
  comments: Pr,
  "clipboard-list": Tn,
  clock: Rn,
  clone: Pn,
  cloud: Nn,
  "cloud-download-alt": On,
  compress: a1,
  copy: tr,
  cube: gn,
  cut: p0,
  database: jn,
  "dot-circle": Dn,
  "grip-lines-vertical": Pt,
  "grip-vertical": gr,
  edit: mo,
  "ellipsis-h": qn,
  "ellipsis-v": Vn,
  envelope: Rr,
  equals: Zn,
  eye: Wn,
  "exclamation-triangle": Do,
  expand: Nr,
  "expand-alt": Or,
  "external-link-alt": Gn,
  "exchange-alt": cn,
  file: Xn,
  "file-alt": f0,
  "file-archive": Jn,
  "file-code": Yn,
  "file-download": Qn,
  "file-export": ur,
  "file-import": er,
  "file-pdf": f0,
  filter: sr,
  fingerprint: nr,
  flask: rr,
  "folder-open": ir,
  font: kn,
  gift: lr,
  globe: fr,
  "globe-americas": Un,
  "graduation-cap": hr,
  "hand-holding-usd": br,
  "hand-scissors": p0,
  handshake: mr,
  "hand-point-left": a0,
  hashtag: kr,
  hdd: _r,
  history: wr,
  home: vr,
  hourglass: Cr,
  image: yr,
  inbox: Er,
  info: h0,
  "info-circle": h0,
  key: Mr,
  language: Ar,
  "layer-group": Dr,
  link: Sr,
  list: Lr,
  lightbulb: Br,
  lock: Fr,
  "map-signs": jr,
  "mouse-pointer": Ur,
  "network-wired": qr,
  palette: Zr,
  pause: Gr,
  "pause-circle": Sn,
  pen: Wr,
  "pencil-alt": Kr,
  play: Jr,
  "play-circle": Ln,
  plug: Yr,
  plus: Qr,
  "plus-circle": In,
  "plus-square": _o,
  "project-diagram": zo,
  question: l0,
  "question-circle": l0,
  redo: to,
  "remove-format": no,
  robot: pn,
  rss: ro,
  save: io,
  "satellite-dish": oo,
  search: so,
  "search-minus": Uo,
  "search-plus": jo,
  server: lo,
  screwdriver: eo,
  smile: po,
  "sign-in-alt": $r,
  "sign-out-alt": Tr,
  "sliders-h": ho,
  "sticky-note": xo,
  stop: go,
  stream: nn,
  sun: ko,
  sync: $u,
  "sync-alt": $u,
  table: wo,
  tags: Co,
  tasks: Ir,
  terminal: vo,
  "th-large": pr,
  thumbtack: Xr,
  "thumbs-down": yo,
  "thumbs-up": Eo,
  times: g0,
  "times-circle": $n,
  tools: Ho,
  trash: Mo,
  undo: Bo,
  unlink: So,
  user: Lo,
  "user-circle": Fn,
  "user-friends": $o,
  users: To,
  video: Oo,
  tree: Ao,
  "user-lock": Fo,
  gem: ar,
  download: xr,
  "power-off": uo,
  "paper-plane": ao,
  bell: fn
}, nt = {
  // custom icons
  "grip-lines-vertical": Pt,
  variable: Ro,
  "pop-out": Ut,
  triangle: un,
  "status-completed": Gt,
  "status-waiting": Jt,
  "status-error": Wt,
  "status-canceled": Zt,
  "status-new": Kt,
  "status-unknown": Xt,
  "status-warning": Yt,
  "vector-square": tn,
  schema: qt,
  json: jt,
  binary: Ht,
  text: Qt,
  toolbox: en,
  spinner: Vt,
  // lucide
  "align-right": nn,
  archive: rn,
  "arrow-down": on,
  "arrow-left": a0,
  "arrow-left-right": cn,
  "arrow-right": sn,
  "arrow-up": an,
  "at-sign": ln,
  ban: dn,
  bell: fn,
  book: hn,
  bot: pn,
  box: gn,
  brain: bn,
  bug: mn,
  calculator: _n,
  calendar: xn,
  "case-upper": kn,
  "chart-column-decreasing": wn,
  check: Cn,
  "check-check": vn,
  "chevron-down": Su,
  "chevron-left": Lu,
  "chevron-right": Iu,
  "chevron-up": Fu,
  "chevrons-left": yn,
  circle: En,
  "circle-alert": Mn,
  "circle-check": An,
  "circle-dot": Dn,
  "circle-help": l0,
  "circle-minus": Bn,
  "circle-pause": Sn,
  "circle-play": Ln,
  "circle-plus": In,
  "circle-user-round": Fn,
  "circle-x": $n,
  "clipboard-list": Tn,
  clock: Rn,
  cloud: Nn,
  "cloud-download": On,
  code: zn,
  cog: d0,
  contrast: Hn,
  copy: Pn,
  database: jn,
  earth: Un,
  ellipsis: qn,
  "ellipsis-vertical": Vn,
  equal: Zn,
  "external-link": Gn,
  eye: Wn,
  "eye-off": Kn,
  file: Xn,
  "file-archive": Jn,
  "file-code": Yn,
  "file-down": Qn,
  "file-input": er,
  "file-output": ur,
  "file-text": f0,
  files: tr,
  fingerprint: nr,
  "flask-conical": rr,
  folder: or,
  "folder-open": ir,
  "folder-plus": cr,
  funnel: sr,
  gem: ar,
  gift: lr,
  "git-branch": dr,
  globe: fr,
  "graduation-cap": hr,
  "grid-2x2": pr,
  "grip-vertical": gr,
  "hand-coins": br,
  handshake: mr,
  "hard-drive": _r,
  "hard-drive-download": xr,
  hash: kr,
  history: wr,
  hourglass: Cr,
  house: vr,
  image: yr,
  inbox: Er,
  info: h0,
  "key-round": Mr,
  languages: Ar,
  layers: Dr,
  lightbulb: Br,
  link: Sr,
  list: Lr,
  "list-checks": Ir,
  lock: Fr,
  "log-in": $r,
  "log-out": Tr,
  mail: Rr,
  "minimize-2": td,
  maximize: Nr,
  "maximize-2": Or,
  menu: zr,
  "message-circle": Hr,
  "messages-square": Pr,
  milestone: jr,
  "mouse-pointer": Ur,
  network: qr,
  "package-open": Vr,
  palette: Zr,
  pause: Gr,
  pen: Wr,
  pencil: Kr,
  pin: Xr,
  play: Jr,
  plug: Yr,
  plus: Qr,
  "pocket-knife": eo,
  power: uo,
  "redo-2": to,
  "refresh-cw": $u,
  "remove-formatting": no,
  rss: ro,
  "satellite-dish": oo,
  save: io,
  scale: co,
  scissors: p0,
  search: so,
  send: ao,
  server: lo,
  share: fo,
  "sliders-horizontal": ho,
  smile: po,
  square: go,
  "square-check": bo,
  "square-pen": mo,
  "square-plus": _o,
  "sticky-note": xo,
  sun: ko,
  table: wo,
  tags: Co,
  terminal: vo,
  "thumbs-down": yo,
  "thumbs-up": Eo,
  "trash-2": Mo,
  "tree-pine": Ao,
  "triangle-alert": Do,
  "undo-2": Bo,
  unlink: So,
  user: Lo,
  "user-check": Io,
  "user-lock": Fo,
  "user-round": $o,
  users: To,
  vault: No,
  video: Oo,
  waypoints: zo,
  wrench: Ho,
  x: g0,
  zap: Po,
  "zoom-in": jo,
  "zoom-out": Uo
}, lh = /* @__PURE__ */ be({
  name: "N8nIcon",
  __name: "Icon",
  props: {
    icon: {},
    size: { default: void 0 },
    spin: { type: Boolean, default: !1 },
    color: { default: void 0 },
    strokeWidth: {}
  },
  setup(e) {
    const u = e, t = Dt(), n = W(() => {
      const i = [];
      return u.spin && i.push("spin"), u.strokeWidth && i.push("strokeWidth"), ["n8n-icon", ...i.map((a) => t[a])];
    }), r = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = W(() => {
      let i = "1em";
      return u.size && (i = `${typeof u.size == "number" ? u.size : r[u.size]}px`), {
        height: i,
        width: i
      };
    }), c = W(() => {
      const i = {};
      return u.color && (i.color = `var(--color-${u.color})`), u.strokeWidth && (i["--n8n-icon-stroke-width"] = `${u.strokeWidth}px`), i;
    });
    return (i, a) => N(nt)[i.icon] ?? N(tt)[i.icon] ? (d(), ee(w0(
      N(nt)[i.icon] ?? N(tt)[i.icon]
    ), {
      key: 0,
      class: C0(n.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": u.icon,
      style: Mt(c.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : ue("", !0);
  }
}), dh = "_strokeWidth_19m7s_1", fh = "_spin_19m7s_5", hh = {
  strokeWidth: dh,
  spin: fh
}, ph = {
  $style: hh
}, gh = /* @__PURE__ */ eu(lh, [["__cssModules", ph]]), bh = /* @__PURE__ */ be({
  name: "N8nText",
  __name: "Text",
  props: {
    bold: { type: Boolean, default: !1 },
    size: { default: "medium" },
    color: {},
    align: {},
    compact: { type: Boolean, default: !1 },
    tag: { default: "span" }
  },
  setup(e) {
    const u = e, t = Dt(), n = W(() => {
      const r = [];
      return u.align && r.push(`align-${u.align}`), u.color && r.push(u.color), u.compact && r.push("compact"), r.push(`size-${u.size}`), r.push(u.bold ? "bold" : "regular"), r.map((o) => t[o]);
    });
    return (r, o) => (d(), ee(w0(r.tag), v0({
      class: ["n8n-text", ...n.value]
    }, r.$attrs), {
      default: Ae(() => [
        He(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), mh = "_bold_ushv1_1", _h = "_regular_ushv1_5", xh = "_compact_ushv1_34", kh = "_primary_ushv1_38", wh = "_secondary_ushv1_42", Ch = "_danger_ushv1_62", vh = "_success_ushv1_66", yh = "_warning_ushv1_70", Eh = {
  bold: mh,
  regular: _h,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: xh,
  primary: kh,
  secondary: wh,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: Ch,
  success: vh,
  warning: yh,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, Mh = {
  $style: Eh
}, Ah = /* @__PURE__ */ eu(bh, [["__cssModules", Mh]]);
function Dh(e) {
  const u = e.regex, t = {}, n = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [t]
      }
      // default values
    ]
  };
  Object.assign(t, {
    className: "variable",
    variants: [
      { begin: u.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      n
    ]
  });
  const r = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), c = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, i = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      t,
      r
    ]
  };
  r.contains.push(i);
  const a = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, b = {
    match: /\\'/
  }, p = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      t
    ]
  }, _ = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], x = e.SHEBANG({
    binary: `(${_.join("|")})`,
    relevance: 10
  }), m = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, C = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], S = [
    "true",
    "false"
  ], R = { match: /(\/[a-z._-]+)+/ }, E = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], A = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], D = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], L = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: C,
      literal: S,
      built_in: [
        ...E,
        ...A,
        // Shell modifiers
        "set",
        "shopt",
        ...D,
        ...L
      ]
    },
    contains: [
      x,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      m,
      p,
      o,
      c,
      R,
      i,
      a,
      l,
      b,
      t
    ]
  };
}
function Bh(e) {
  const u = e.regex, t = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), n = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], i = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: n,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, a = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, l = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: i,
    illegal: /#/
  }, b = {
    begin: /\{\{/,
    relevance: 0
  }, p = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          b,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          b,
          l
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          b,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          b,
          l
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, _ = "[0-9](_?[0-9])*", x = `(\\b(${_}))?\\.(${_})|\\b(${_})\\.`, m = `\\b|${n.join("|")}`, C = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${_})|(${x}))[eE][+-]?(${_})[jJ]?(?=${m})`
      },
      {
        begin: `(${x})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${_})[jJ](?=${m})`
      }
    ]
  }, S = {
    className: "comment",
    begin: u.lookahead(/# type:/),
    end: /$/,
    keywords: i,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, R = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: i,
        contains: [
          "self",
          a,
          C,
          p,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return l.contains = [
    p,
    C,
    a
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: i,
    illegal: /(<\/|\?)|=>/,
    contains: [
      a,
      C,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      p,
      S,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          t
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [R]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              t,
              /\s*/,
              /\(\s*/,
              t,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              t
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          C,
          R,
          p
        ]
      }
    ]
  };
}
const Nu = "[A-Za-z$_][0-9A-Za-z$_]*", qo = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Vo = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Zo = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Go = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Wo = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Ko = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Xo = [].concat(
  Wo,
  Zo,
  Go
);
function Sh(e) {
  const u = e.regex, t = (j, { after: ne }) => {
    const ke = "</" + j[0].slice(1);
    return j.input.indexOf(ke, ne) !== -1;
  }, n = Nu, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, c = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (j, ne) => {
      const ke = j[0].length + j.index, Ee = j.input[ke];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ee === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ee === ","
      ) {
        ne.ignoreMatch();
        return;
      }
      Ee === ">" && (t(j, { after: ke }) || ne.ignoreMatch());
      let Ne;
      const Xe = j.input.substring(ke);
      if (Ne = Xe.match(/^\s*=/)) {
        ne.ignoreMatch();
        return;
      }
      if ((Ne = Xe.match(/^\s+extends\s+/)) && Ne.index === 0) {
        ne.ignoreMatch();
        return;
      }
    }
  }, i = {
    $pattern: Nu,
    keyword: qo,
    literal: Vo,
    built_in: Xo,
    "variable.language": Ko
  }, a = "[0-9](_?[0-9])*", l = `\\.(${a})`, b = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${b})((${l})|\\.)?|(${l}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${b})\\b((${l})\\b|\\.)?|(${l})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, _ = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: i,
    contains: []
    // defined later
  }, x = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "css"
    }
  }, C = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        _
      ],
      subLanguage: "graphql"
    }
  }, S = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      _
    ]
  }, E = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: n + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, A = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    x,
    m,
    C,
    S,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    p
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  _.contains = A.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: i,
    contains: [
      "self"
    ].concat(A)
  });
  const D = [].concat(E, _.contains), L = D.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: i,
      contains: ["self"].concat(D)
    }
  ]), $ = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: i,
    contains: L
  }, V = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          u.concat(n, "(", u.concat(/\./, n), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, J = {
    relevance: 0,
    match: u.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Zo,
        ...Go
      ]
    }
  }, ie = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, _e = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [$],
    illegal: /%/
  }, ve = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Te(j) {
    return u.concat("(?!", j.join("|"), ")");
  }
  const Re = {
    match: u.concat(
      /\b/,
      Te([
        ...Wo,
        "super",
        "import"
      ].map((j) => `${j}\\s*\\(`)),
      n,
      u.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ce = {
    begin: u.concat(/\./, u.lookahead(
      u.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, T = {
    match: [
      /get|set/,
      /\s+/,
      n,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      $
    ]
  }, X = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", te = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      u.lookahead(X)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      $
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: i,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: L, CLASS_REFERENCE: J },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      ie,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      x,
      m,
      C,
      S,
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      p,
      J,
      {
        scope: "attr",
        match: n + u.lookahead(":"),
        relevance: 0
      },
      te,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          E,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: X,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: i,
                    contains: L
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: o },
              {
                begin: c.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": c.isTrulyOpeningTag,
                end: c.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: c.begin,
                end: c.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      _e,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          $,
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ce,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [$]
      },
      Re,
      ve,
      V,
      T,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Lh(e) {
  const u = e.regex, t = Sh(e), n = Nu, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], o = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, c = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, i = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], l = {
    $pattern: Nu,
    keyword: qo.concat(a),
    literal: Vo,
    built_in: Xo.concat(r),
    "variable.language": Ko
  }, b = {
    className: "meta",
    begin: "@" + n
  }, p = (C, S, R) => {
    const E = C.contains.findIndex((A) => A.label === S);
    if (E === -1)
      throw new Error("can not find mode to replace");
    C.contains.splice(E, 1, R);
  };
  Object.assign(t.keywords, l), t.exports.PARAMS_CONTAINS.push(b);
  const _ = t.contains.find((C) => C.scope === "attr"), x = Object.assign(
    {},
    _,
    { match: u.concat(n, u.lookahead(/\s*\?:/)) }
  );
  t.exports.PARAMS_CONTAINS.push([
    t.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    _,
    // highlight the params key
    x
    // Added for optional property assignment highlighting
  ]), t.contains = t.contains.concat([
    b,
    o,
    c,
    x
    // Added for optional property assignment highlighting
  ]), p(t, "shebang", e.SHEBANG()), p(t, "use_strict", i);
  const m = t.contains.find((C) => C.label === "func.def");
  return m.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
var e0, rt;
function Ih() {
  if (rt) return e0;
  rt = 1;
  function e(n, r) {
    var o, c, i = n.attrs[n.attrIndex("href")][1];
    for (o = 0; o < r.length; ++o) {
      if (c = r[o], typeof c.matcher == "function") {
        if (c.matcher(i, c))
          return c;
        continue;
      }
      return c;
    }
  }
  function u(n, r, o) {
    Object.keys(o).forEach(function(c) {
      var i, a = o[c];
      c === "className" && (c = "class"), i = r[n].attrIndex(c), i < 0 ? r[n].attrPush([c, a]) : r[n].attrs[i][1] = a;
    });
  }
  function t(n, r) {
    r ? r = Array.isArray(r) ? r : [r] : r = [], Object.freeze(r);
    var o = n.renderer.rules.link_open || this.defaultRender;
    n.renderer.rules.link_open = function(c, i, a, l, b) {
      var p = e(c[i], r), _ = p && p.attrs;
      return _ && u(i, c, _), o(c, i, a, l, b);
    };
  }
  return t.defaultRender = function(n, r, o, c, i) {
    return i.renderToken(n, r, o);
  }, e0 = t, e0;
}
var Fh = Ih();
const $h = /* @__PURE__ */ Ft(Fh), ot = {};
function Th(e) {
  let u = ot[e];
  if (u)
    return u;
  u = ot[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    u.push(n);
  }
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    u[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return u;
}
function iu(e, u) {
  typeof u != "string" && (u = iu.defaultChars);
  const t = Th(u);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let o = 0, c = n.length; o < c; o += 3) {
      const i = parseInt(n.slice(o + 1, o + 3), 16);
      if (i < 128) {
        r += t[i];
        continue;
      }
      if ((i & 224) === 192 && o + 3 < c) {
        const a = parseInt(n.slice(o + 4, o + 6), 16);
        if ((a & 192) === 128) {
          const l = i << 6 & 1984 | a & 63;
          l < 128 ? r += "��" : r += String.fromCharCode(l), o += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && o + 6 < c) {
        const a = parseInt(n.slice(o + 4, o + 6), 16), l = parseInt(n.slice(o + 7, o + 9), 16);
        if ((a & 192) === 128 && (l & 192) === 128) {
          const b = i << 12 & 61440 | a << 6 & 4032 | l & 63;
          b < 2048 || b >= 55296 && b <= 57343 ? r += "���" : r += String.fromCharCode(b), o += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && o + 9 < c) {
        const a = parseInt(n.slice(o + 4, o + 6), 16), l = parseInt(n.slice(o + 7, o + 9), 16), b = parseInt(n.slice(o + 10, o + 12), 16);
        if ((a & 192) === 128 && (l & 192) === 128 && (b & 192) === 128) {
          let p = i << 18 & 1835008 | a << 12 & 258048 | l << 6 & 4032 | b & 63;
          p < 65536 || p > 1114111 ? r += "����" : (p -= 65536, r += String.fromCharCode(55296 + (p >> 10), 56320 + (p & 1023))), o += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
iu.defaultChars = ";/?:@&=+$,#";
iu.componentChars = "";
const it = {};
function Rh(e) {
  let u = it[e];
  if (u)
    return u;
  u = it[e] = [];
  for (let t = 0; t < 128; t++) {
    const n = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(n) ? u.push(n) : u.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < e.length; t++)
    u[e.charCodeAt(t)] = e[t];
  return u;
}
function mu(e, u, t) {
  typeof u != "string" && (t = u, u = mu.defaultChars), typeof t > "u" && (t = !0);
  const n = Rh(u);
  let r = "";
  for (let o = 0, c = e.length; o < c; o++) {
    const i = e.charCodeAt(o);
    if (t && i === 37 && o + 2 < c && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      r += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (i < 128) {
      r += n[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && o + 1 < c) {
        const a = e.charCodeAt(o + 1);
        if (a >= 56320 && a <= 57343) {
          r += encodeURIComponent(e[o] + e[o + 1]), o++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[o]);
  }
  return r;
}
mu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
mu.componentChars = "-_.!~*'()";
function M0(e) {
  let u = "";
  return u += e.protocol || "", u += e.slashes ? "//" : "", u += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? u += "[" + e.hostname + "]" : u += e.hostname || "", u += e.port ? ":" + e.port : "", u += e.pathname || "", u += e.search || "", u += e.hash || "", u;
}
function Ou() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Nh = /^([a-z0-9.+-]+:)/i, Oh = /:[0-9]*$/, zh = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Hh = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Ph = ["{", "}", "|", "\\", "^", "`"].concat(Hh), jh = ["'"].concat(Ph), ct = ["%", "/", "?", ";", "#"].concat(jh), st = ["/", "?", "#"], Uh = 255, at = /^[+a-z0-9A-Z_-]{0,63}$/, qh = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, lt = {
  javascript: !0,
  "javascript:": !0
}, dt = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function A0(e, u) {
  if (e && e instanceof Ou) return e;
  const t = new Ou();
  return t.parse(e, u), t;
}
Ou.prototype.parse = function(e, u) {
  let t, n, r, o = e;
  if (o = o.trim(), !u && e.split("#").length === 1) {
    const l = zh.exec(o);
    if (l)
      return this.pathname = l[1], l[2] && (this.search = l[2]), this;
  }
  let c = Nh.exec(o);
  if (c && (c = c[0], t = c.toLowerCase(), this.protocol = c, o = o.substr(c.length)), (u || c || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = o.substr(0, 2) === "//", r && !(c && lt[c]) && (o = o.substr(2), this.slashes = !0)), !lt[c] && (r || c && !dt[c])) {
    let l = -1;
    for (let m = 0; m < st.length; m++)
      n = o.indexOf(st[m]), n !== -1 && (l === -1 || n < l) && (l = n);
    let b, p;
    l === -1 ? p = o.lastIndexOf("@") : p = o.lastIndexOf("@", l), p !== -1 && (b = o.slice(0, p), o = o.slice(p + 1), this.auth = b), l = -1;
    for (let m = 0; m < ct.length; m++)
      n = o.indexOf(ct[m]), n !== -1 && (l === -1 || n < l) && (l = n);
    l === -1 && (l = o.length), o[l - 1] === ":" && l--;
    const _ = o.slice(0, l);
    o = o.slice(l), this.parseHost(_), this.hostname = this.hostname || "";
    const x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!x) {
      const m = this.hostname.split(/\./);
      for (let C = 0, S = m.length; C < S; C++) {
        const R = m[C];
        if (R && !R.match(at)) {
          let E = "";
          for (let A = 0, D = R.length; A < D; A++)
            R.charCodeAt(A) > 127 ? E += "x" : E += R[A];
          if (!E.match(at)) {
            const A = m.slice(0, C), D = m.slice(C + 1), L = R.match(qh);
            L && (A.push(L[1]), D.unshift(L[2])), D.length && (o = D.join(".") + o), this.hostname = A.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Uh && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = o.indexOf("#");
  i !== -1 && (this.hash = o.substr(i), o = o.slice(0, i));
  const a = o.indexOf("?");
  return a !== -1 && (this.search = o.substr(a), o = o.slice(0, a)), o && (this.pathname = o), dt[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Ou.prototype.parseHost = function(e) {
  let u = Oh.exec(e);
  u && (u = u[0], u !== ":" && (this.port = u.substr(1)), e = e.substr(0, e.length - u.length)), e && (this.hostname = e);
};
const Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: iu,
  encode: mu,
  format: M0,
  parse: A0
}, Symbol.toStringTag, { value: "Module" })), Jo = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Yo = /[\0-\x1F\x7F-\x9F]/, Zh = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, D0 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Qo = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, ei = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Gh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Jo,
  Cc: Yo,
  Cf: Zh,
  P: D0,
  S: Qo,
  Z: ei
}, Symbol.toStringTag, { value: "Module" })), Wh = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Kh = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var u0;
const Xh = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Jh = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (u0 = String.fromCodePoint) !== null && u0 !== void 0 ? u0 : function(e) {
    let u = "";
    return e > 65535 && (e -= 65536, u += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), u += String.fromCharCode(e), u;
  }
);
function Yh(e) {
  var u;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (u = Xh.get(e)) !== null && u !== void 0 ? u : e;
}
var le;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(le || (le = {}));
const Qh = 32;
var We;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(We || (We = {}));
function b0(e) {
  return e >= le.ZERO && e <= le.NINE;
}
function e3(e) {
  return e >= le.UPPER_A && e <= le.UPPER_F || e >= le.LOWER_A && e <= le.LOWER_F;
}
function u3(e) {
  return e >= le.UPPER_A && e <= le.UPPER_Z || e >= le.LOWER_A && e <= le.LOWER_Z || b0(e);
}
function t3(e) {
  return e === le.EQUALS || u3(e);
}
var ae;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(ae || (ae = {}));
var Ge;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Ge || (Ge = {}));
class n3 {
  constructor(u, t, n) {
    this.decodeTree = u, this.emitCodePoint = t, this.errors = n, this.state = ae.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Ge.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(u) {
    this.decodeMode = u, this.state = ae.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(u, t) {
    switch (this.state) {
      case ae.EntityStart:
        return u.charCodeAt(t) === le.NUM ? (this.state = ae.NumericStart, this.consumed += 1, this.stateNumericStart(u, t + 1)) : (this.state = ae.NamedEntity, this.stateNamedEntity(u, t));
      case ae.NumericStart:
        return this.stateNumericStart(u, t);
      case ae.NumericDecimal:
        return this.stateNumericDecimal(u, t);
      case ae.NumericHex:
        return this.stateNumericHex(u, t);
      case ae.NamedEntity:
        return this.stateNamedEntity(u, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(u, t) {
    return t >= u.length ? -1 : (u.charCodeAt(t) | Qh) === le.LOWER_X ? (this.state = ae.NumericHex, this.consumed += 1, this.stateNumericHex(u, t + 1)) : (this.state = ae.NumericDecimal, this.stateNumericDecimal(u, t));
  }
  addToNumericResult(u, t, n, r) {
    if (t !== n) {
      const o = n - t;
      this.result = this.result * Math.pow(r, o) + parseInt(u.substr(t, o), r), this.consumed += o;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (b0(r) || e3(r))
        t += 1;
      else
        return this.addToNumericResult(u, n, t, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(u, n, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(u, t) {
    const n = t;
    for (; t < u.length; ) {
      const r = u.charCodeAt(t);
      if (b0(r))
        t += 1;
      else
        return this.addToNumericResult(u, n, t, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(u, n, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(u, t) {
    var n;
    if (this.consumed <= t)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (u === le.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Ge.Strict)
      return 0;
    return this.emitCodePoint(Yh(this.result), this.consumed), this.errors && (u !== le.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(u, t) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], o = (r & We.VALUE_LENGTH) >> 14;
    for (; t < u.length; t++, this.excess++) {
      const c = u.charCodeAt(t);
      if (this.treeIndex = r3(n, r, this.treeIndex + Math.max(1, o), c), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Ge.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        t3(c)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], o = (r & We.VALUE_LENGTH) >> 14, o !== 0) {
        if (c === le.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== Ge.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var u;
    const { result: t, decodeTree: n } = this, r = (n[t] & We.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, r, this.consumed), (u = this.errors) === null || u === void 0 || u.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(u, t, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(t === 1 ? r[u] & ~We.VALUE_LENGTH : r[u + 1], n), t === 3 && this.emitCodePoint(r[u + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var u;
    switch (this.state) {
      case ae.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Ge.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case ae.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case ae.NumericHex:
        return this.emitNumericEntity(0, 3);
      case ae.NumericStart:
        return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case ae.EntityStart:
        return 0;
    }
  }
}
function ui(e) {
  let u = "";
  const t = new n3(e, (n) => u += Jh(n));
  return function(r, o) {
    let c = 0, i = 0;
    for (; (i = r.indexOf("&", i)) >= 0; ) {
      u += r.slice(c, i), t.startEntity(o);
      const l = t.write(
        r,
        // Skip the "&"
        i + 1
      );
      if (l < 0) {
        c = i + t.end();
        break;
      }
      c = i + l, i = l === 0 ? c + 1 : c;
    }
    const a = u + r.slice(c);
    return u = "", a;
  };
}
function r3(e, u, t, n) {
  const r = (u & We.BRANCH_LENGTH) >> 7, o = u & We.JUMP_TABLE;
  if (r === 0)
    return o !== 0 && n === o ? t : -1;
  if (o) {
    const a = n - o;
    return a < 0 || a >= r ? -1 : e[t + a] - 1;
  }
  let c = t, i = c + r - 1;
  for (; c <= i; ) {
    const a = c + i >>> 1, l = e[a];
    if (l < n)
      c = a + 1;
    else if (l > n)
      i = a - 1;
    else
      return e[a + r];
  }
  return -1;
}
const o3 = ui(Wh);
ui(Kh);
function ti(e, u = Ge.Legacy) {
  return o3(e, u);
}
function i3(e) {
  return Object.prototype.toString.call(e);
}
function B0(e) {
  return i3(e) === "[object String]";
}
const c3 = Object.prototype.hasOwnProperty;
function s3(e, u) {
  return c3.call(e, u);
}
function Pu(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(n) {
        e[n] = t[n];
      });
    }
  }), e;
}
function ni(e, u, t) {
  return [].concat(e.slice(0, u), t, e.slice(u + 1));
}
function S0(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function zu(e) {
  if (e > 65535) {
    e -= 65536;
    const u = 55296 + (e >> 10), t = 56320 + (e & 1023);
    return String.fromCharCode(u, t);
  }
  return String.fromCharCode(e);
}
const ri = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, a3 = /&([a-z#][a-z0-9]{1,31});/gi, l3 = new RegExp(ri.source + "|" + a3.source, "gi"), d3 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function f3(e, u) {
  if (u.charCodeAt(0) === 35 && d3.test(u)) {
    const n = u[1].toLowerCase() === "x" ? parseInt(u.slice(2), 16) : parseInt(u.slice(1), 10);
    return S0(n) ? zu(n) : e;
  }
  const t = ti(e);
  return t !== e ? t : e;
}
function h3(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ri, "$1");
}
function cu(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(l3, function(u, t, n) {
    return t || f3(u, n);
  });
}
const p3 = /[&<>"]/, g3 = /[&<>"]/g, b3 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function m3(e) {
  return b3[e];
}
function Ke(e) {
  return p3.test(e) ? e.replace(g3, m3) : e;
}
const _3 = /[.?*+^$[\]\\(){}|-]/g;
function x3(e) {
  return e.replace(_3, "\\$&");
}
function K(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function fu(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function hu(e) {
  return D0.test(e) || Qo.test(e);
}
function pu(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function ju(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const k3 = { mdurl: Vh, ucmicro: Gh }, w3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: ni,
  assign: Pu,
  escapeHtml: Ke,
  escapeRE: x3,
  fromCodePoint: zu,
  has: s3,
  isMdAsciiPunct: pu,
  isPunctChar: hu,
  isSpace: K,
  isString: B0,
  isValidEntityCode: S0,
  isWhiteSpace: fu,
  lib: k3,
  normalizeReference: ju,
  unescapeAll: cu,
  unescapeMd: h3
}, Symbol.toStringTag, { value: "Module" }));
function C3(e, u, t) {
  let n, r, o, c;
  const i = e.posMax, a = e.pos;
  for (e.pos = u + 1, n = 1; e.pos < i; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (n--, n === 0)) {
      r = !0;
      break;
    }
    if (c = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (c === e.pos - 1)
        n++;
      else if (t)
        return e.pos = a, -1;
    }
  }
  let l = -1;
  return r && (l = e.pos), e.pos = a, l;
}
function v3(e, u, t) {
  let n, r = u;
  const o = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < t; ) {
      if (n = e.charCodeAt(r), n === 10 || n === 60)
        return o;
      if (n === 62)
        return o.pos = r + 1, o.str = cu(e.slice(u + 1, r)), o.ok = !0, o;
      if (n === 92 && r + 1 < t) {
        r += 2;
        continue;
      }
      r++;
    }
    return o;
  }
  let c = 0;
  for (; r < t && (n = e.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < t) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (n === 40 && (c++, c > 32))
      return o;
    if (n === 41) {
      if (c === 0)
        break;
      c--;
    }
    r++;
  }
  return u === r || c !== 0 || (o.str = cu(e.slice(u, r)), o.pos = r, o.ok = !0), o;
}
function y3(e, u, t, n) {
  let r, o = u;
  const c = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    c.str = n.str, c.marker = n.marker;
  else {
    if (o >= t)
      return c;
    let i = e.charCodeAt(o);
    if (i !== 34 && i !== 39 && i !== 40)
      return c;
    u++, o++, i === 40 && (i = 41), c.marker = i;
  }
  for (; o < t; ) {
    if (r = e.charCodeAt(o), r === c.marker)
      return c.pos = o + 1, c.str += cu(e.slice(u, o)), c.ok = !0, c;
    if (r === 40 && c.marker === 41)
      return c;
    r === 92 && o + 1 < t && o++, o++;
  }
  return c.can_continue = !0, c.str += cu(e.slice(u, o)), c;
}
const E3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: v3,
  parseLinkLabel: C3,
  parseLinkTitle: y3
}, Symbol.toStringTag, { value: "Module" })), Fe = {};
Fe.code_inline = function(e, u, t, n, r) {
  const o = e[u];
  return "<code" + r.renderAttrs(o) + ">" + Ke(o.content) + "</code>";
};
Fe.code_block = function(e, u, t, n, r) {
  const o = e[u];
  return "<pre" + r.renderAttrs(o) + "><code>" + Ke(e[u].content) + `</code></pre>
`;
};
Fe.fence = function(e, u, t, n, r) {
  const o = e[u], c = o.info ? cu(o.info).trim() : "";
  let i = "", a = "";
  if (c) {
    const b = c.split(/(\s+)/g);
    i = b[0], a = b.slice(2).join("");
  }
  let l;
  if (t.highlight ? l = t.highlight(o.content, i, a) || Ke(o.content) : l = Ke(o.content), l.indexOf("<pre") === 0)
    return l + `
`;
  if (c) {
    const b = o.attrIndex("class"), p = o.attrs ? o.attrs.slice() : [];
    b < 0 ? p.push(["class", t.langPrefix + i]) : (p[b] = p[b].slice(), p[b][1] += " " + t.langPrefix + i);
    const _ = {
      attrs: p
    };
    return `<pre><code${r.renderAttrs(_)}>${l}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(o)}>${l}</code></pre>
`;
};
Fe.image = function(e, u, t, n, r) {
  const o = e[u];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, t, n), r.renderToken(e, u, t);
};
Fe.hardbreak = function(e, u, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
Fe.softbreak = function(e, u, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Fe.text = function(e, u) {
  return Ke(e[u].content);
};
Fe.html_block = function(e, u) {
  return e[u].content;
};
Fe.html_inline = function(e, u) {
  return e[u].content;
};
function su() {
  this.rules = Pu({}, Fe);
}
su.prototype.renderAttrs = function(u) {
  let t, n, r;
  if (!u.attrs)
    return "";
  for (r = "", t = 0, n = u.attrs.length; t < n; t++)
    r += " " + Ke(u.attrs[t][0]) + '="' + Ke(u.attrs[t][1]) + '"';
  return r;
};
su.prototype.renderToken = function(u, t, n) {
  const r = u[t];
  let o = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && t && u[t - 1].hidden && (o += `
`), o += (r.nesting === -1 ? "</" : "<") + r.tag, o += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (o += " /");
  let c = !1;
  if (r.block && (c = !0, r.nesting === 1 && t + 1 < u.length)) {
    const i = u[t + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === r.tag) && (c = !1);
  }
  return o += c ? `>
` : ">", o;
};
su.prototype.renderInline = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let o = 0, c = e.length; o < c; o++) {
    const i = e[o].type;
    typeof r[i] < "u" ? n += r[i](e, o, u, t, this) : n += this.renderToken(e, o, u);
  }
  return n;
};
su.prototype.renderInlineAsText = function(e, u, t) {
  let n = "";
  for (let r = 0, o = e.length; r < o; r++)
    switch (e[r].type) {
      case "text":
        n += e[r].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[r].children, u, t);
        break;
      case "html_inline":
      case "html_block":
        n += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
su.prototype.render = function(e, u, t) {
  let n = "";
  const r = this.rules;
  for (let o = 0, c = e.length; o < c; o++) {
    const i = e[o].type;
    i === "inline" ? n += this.renderInline(e[o].children, u, t) : typeof r[i] < "u" ? n += r[i](e, o, u, t, this) : n += this.renderToken(e, o, u, t);
  }
  return n;
};
function xe() {
  this.__rules__ = [], this.__cache__ = null;
}
xe.prototype.__find__ = function(e) {
  for (let u = 0; u < this.__rules__.length; u++)
    if (this.__rules__[u].name === e)
      return u;
  return -1;
};
xe.prototype.__compile__ = function() {
  const e = this, u = [""];
  e.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(n) {
      u.indexOf(n) < 0 && u.push(n);
    });
  }), e.__cache__ = {}, u.forEach(function(t) {
    e.__cache__[t] = [], e.__rules__.forEach(function(n) {
      n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn));
    });
  });
};
xe.prototype.at = function(e, u, t) {
  const n = this.__find__(e), r = t || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = u, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
xe.prototype.before = function(e, u, t, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
xe.prototype.after = function(e, u, t, n) {
  const r = this.__find__(e), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: u,
    enabled: !0,
    fn: t,
    alt: o.alt || []
  }), this.__cache__ = null;
};
xe.prototype.push = function(e, u, t) {
  const n = t || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: u,
    alt: n.alt || []
  }), this.__cache__ = null;
};
xe.prototype.enable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !0, t.push(n);
  }, this), this.__cache__ = null, t;
};
xe.prototype.enableOnly = function(e, u) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(e, u);
};
xe.prototype.disable = function(e, u) {
  Array.isArray(e) || (e = [e]);
  const t = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (u)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !1, t.push(n);
  }, this), this.__cache__ = null, t;
};
xe.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function De(e, u, t) {
  this.type = e, this.tag = u, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
De.prototype.attrIndex = function(u) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let n = 0, r = t.length; n < r; n++)
    if (t[n][0] === u)
      return n;
  return -1;
};
De.prototype.attrPush = function(u) {
  this.attrs ? this.attrs.push(u) : this.attrs = [u];
};
De.prototype.attrSet = function(u, t) {
  const n = this.attrIndex(u), r = [u, t];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
De.prototype.attrGet = function(u) {
  const t = this.attrIndex(u);
  let n = null;
  return t >= 0 && (n = this.attrs[t][1]), n;
};
De.prototype.attrJoin = function(u, t) {
  const n = this.attrIndex(u);
  n < 0 ? this.attrPush([u, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t;
};
function oi(e, u, t) {
  this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = u;
}
oi.prototype.Token = De;
const M3 = /\r\n?|\n/g, A3 = /\0/g;
function D3(e) {
  let u;
  u = e.src.replace(M3, `
`), u = u.replace(A3, "�"), e.src = u;
}
function B3(e) {
  let u;
  e.inlineMode ? (u = new e.Token("inline", "", 0), u.content = e.src, u.map = [0, 1], u.children = [], e.tokens.push(u)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function S3(e) {
  const u = e.tokens;
  for (let t = 0, n = u.length; t < n; t++) {
    const r = u[t];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function L3(e) {
  return /^<a[>\s]/i.test(e);
}
function I3(e) {
  return /^<\/a\s*>/i.test(e);
}
function F3(e) {
  const u = e.tokens;
  if (e.md.options.linkify)
    for (let t = 0, n = u.length; t < n; t++) {
      if (u[t].type !== "inline" || !e.md.linkify.pretest(u[t].content))
        continue;
      let r = u[t].children, o = 0;
      for (let c = r.length - 1; c >= 0; c--) {
        const i = r[c];
        if (i.type === "link_close") {
          for (c--; r[c].level !== i.level && r[c].type !== "link_open"; )
            c--;
          continue;
        }
        if (i.type === "html_inline" && (L3(i.content) && o > 0 && o--, I3(i.content) && o++), !(o > 0) && i.type === "text" && e.md.linkify.test(i.content)) {
          const a = i.content;
          let l = e.md.linkify.match(a);
          const b = [];
          let p = i.level, _ = 0;
          l.length > 0 && l[0].index === 0 && c > 0 && r[c - 1].type === "text_special" && (l = l.slice(1));
          for (let x = 0; x < l.length; x++) {
            const m = l[x].url, C = e.md.normalizeLink(m);
            if (!e.md.validateLink(C))
              continue;
            let S = l[x].text;
            l[x].schema ? l[x].schema === "mailto:" && !/^mailto:/i.test(S) ? S = e.md.normalizeLinkText("mailto:" + S).replace(/^mailto:/, "") : S = e.md.normalizeLinkText(S) : S = e.md.normalizeLinkText("http://" + S).replace(/^http:\/\//, "");
            const R = l[x].index;
            if (R > _) {
              const L = new e.Token("text", "", 0);
              L.content = a.slice(_, R), L.level = p, b.push(L);
            }
            const E = new e.Token("link_open", "a", 1);
            E.attrs = [["href", C]], E.level = p++, E.markup = "linkify", E.info = "auto", b.push(E);
            const A = new e.Token("text", "", 0);
            A.content = S, A.level = p, b.push(A);
            const D = new e.Token("link_close", "a", -1);
            D.level = --p, D.markup = "linkify", D.info = "auto", b.push(D), _ = l[x].lastIndex;
          }
          if (_ < a.length) {
            const x = new e.Token("text", "", 0);
            x.content = a.slice(_), x.level = p, b.push(x);
          }
          u[t].children = r = ni(r, c, b);
        }
      }
    }
}
const ii = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, $3 = /\((c|tm|r)\)/i, T3 = /\((c|tm|r)\)/ig, R3 = {
  c: "©",
  r: "®",
  tm: "™"
};
function N3(e, u) {
  return R3[u.toLowerCase()];
}
function O3(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && (n.content = n.content.replace(T3, N3)), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function z3(e) {
  let u = 0;
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    n.type === "text" && !u && ii.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && u--, n.type === "link_close" && n.info === "auto" && u++;
  }
}
function H3(e) {
  let u;
  if (e.md.options.typographer)
    for (u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type === "inline" && ($3.test(e.tokens[u].content) && O3(e.tokens[u].children), ii.test(e.tokens[u].content) && z3(e.tokens[u].children));
}
const P3 = /['"]/, ft = /['"]/g, ht = "’";
function Du(e, u, t) {
  return e.slice(0, u) + t + e.slice(u + 1);
}
function j3(e, u) {
  let t;
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], c = e[r].level;
    for (t = n.length - 1; t >= 0 && !(n[t].level <= c); t--)
      ;
    if (n.length = t + 1, o.type !== "text")
      continue;
    let i = o.content, a = 0, l = i.length;
    e:
      for (; a < l; ) {
        ft.lastIndex = a;
        const b = ft.exec(i);
        if (!b)
          break;
        let p = !0, _ = !0;
        a = b.index + 1;
        const x = b[0] === "'";
        let m = 32;
        if (b.index - 1 >= 0)
          m = i.charCodeAt(b.index - 1);
        else
          for (t = r - 1; t >= 0 && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t--)
            if (e[t].content) {
              m = e[t].content.charCodeAt(e[t].content.length - 1);
              break;
            }
        let C = 32;
        if (a < l)
          C = i.charCodeAt(a);
        else
          for (t = r + 1; t < e.length && !(e[t].type === "softbreak" || e[t].type === "hardbreak"); t++)
            if (e[t].content) {
              C = e[t].content.charCodeAt(0);
              break;
            }
        const S = pu(m) || hu(String.fromCharCode(m)), R = pu(C) || hu(String.fromCharCode(C)), E = fu(m), A = fu(C);
        if (A ? p = !1 : R && (E || S || (p = !1)), E ? _ = !1 : S && (A || R || (_ = !1)), C === 34 && b[0] === '"' && m >= 48 && m <= 57 && (_ = p = !1), p && _ && (p = S, _ = R), !p && !_) {
          x && (o.content = Du(o.content, b.index, ht));
          continue;
        }
        if (_)
          for (t = n.length - 1; t >= 0; t--) {
            let D = n[t];
            if (n[t].level < c)
              break;
            if (D.single === x && n[t].level === c) {
              D = n[t];
              let L, $;
              x ? (L = u.md.options.quotes[2], $ = u.md.options.quotes[3]) : (L = u.md.options.quotes[0], $ = u.md.options.quotes[1]), o.content = Du(o.content, b.index, $), e[D.token].content = Du(
                e[D.token].content,
                D.pos,
                L
              ), a += $.length - 1, D.token === r && (a += L.length - 1), i = o.content, l = i.length, n.length = t;
              continue e;
            }
          }
        p ? n.push({
          token: r,
          pos: b.index,
          single: x,
          level: c
        }) : _ && x && (o.content = Du(o.content, b.index, ht));
      }
  }
}
function U3(e) {
  if (e.md.options.typographer)
    for (let u = e.tokens.length - 1; u >= 0; u--)
      e.tokens[u].type !== "inline" || !P3.test(e.tokens[u].content) || j3(e.tokens[u].children, e);
}
function q3(e) {
  let u, t;
  const n = e.tokens, r = n.length;
  for (let o = 0; o < r; o++) {
    if (n[o].type !== "inline") continue;
    const c = n[o].children, i = c.length;
    for (u = 0; u < i; u++)
      c[u].type === "text_special" && (c[u].type = "text");
    for (u = t = 0; u < i; u++)
      c[u].type === "text" && u + 1 < i && c[u + 1].type === "text" ? c[u + 1].content = c[u].content + c[u + 1].content : (u !== t && (c[t] = c[u]), t++);
    u !== t && (c.length = t);
  }
}
const t0 = [
  ["normalize", D3],
  ["block", B3],
  ["inline", S3],
  ["linkify", F3],
  ["replacements", H3],
  ["smartquotes", U3],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", q3]
];
function L0() {
  this.ruler = new xe();
  for (let e = 0; e < t0.length; e++)
    this.ruler.push(t0[e][0], t0[e][1]);
}
L0.prototype.process = function(e) {
  const u = this.ruler.getRules("");
  for (let t = 0, n = u.length; t < n; t++)
    u[t](e);
};
L0.prototype.State = oi;
function $e(e, u, t, n) {
  this.src = e, this.md = u, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let o = 0, c = 0, i = 0, a = 0, l = r.length, b = !1; c < l; c++) {
    const p = r.charCodeAt(c);
    if (!b)
      if (K(p)) {
        i++, p === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        b = !0;
    (p === 10 || c === l - 1) && (p !== 10 && c++, this.bMarks.push(o), this.eMarks.push(c), this.tShift.push(i), this.sCount.push(a), this.bsCount.push(0), b = !1, i = 0, a = 0, o = c + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
$e.prototype.push = function(e, u, t) {
  const n = new De(e, u, t);
  return n.block = !0, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n), n;
};
$e.prototype.isEmpty = function(u) {
  return this.bMarks[u] + this.tShift[u] >= this.eMarks[u];
};
$e.prototype.skipEmptyLines = function(u) {
  for (let t = this.lineMax; u < t && !(this.bMarks[u] + this.tShift[u] < this.eMarks[u]); u++)
    ;
  return u;
};
$e.prototype.skipSpaces = function(u) {
  for (let t = this.src.length; u < t; u++) {
    const n = this.src.charCodeAt(u);
    if (!K(n))
      break;
  }
  return u;
};
$e.prototype.skipSpacesBack = function(u, t) {
  if (u <= t)
    return u;
  for (; u > t; )
    if (!K(this.src.charCodeAt(--u)))
      return u + 1;
  return u;
};
$e.prototype.skipChars = function(u, t) {
  for (let n = this.src.length; u < n && this.src.charCodeAt(u) === t; u++)
    ;
  return u;
};
$e.prototype.skipCharsBack = function(u, t, n) {
  if (u <= n)
    return u;
  for (; u > n; )
    if (t !== this.src.charCodeAt(--u))
      return u + 1;
  return u;
};
$e.prototype.getLines = function(u, t, n, r) {
  if (u >= t)
    return "";
  const o = new Array(t - u);
  for (let c = 0, i = u; i < t; i++, c++) {
    let a = 0;
    const l = this.bMarks[i];
    let b = l, p;
    for (i + 1 < t || r ? p = this.eMarks[i] + 1 : p = this.eMarks[i]; b < p && a < n; ) {
      const _ = this.src.charCodeAt(b);
      if (K(_))
        _ === 9 ? a += 4 - (a + this.bsCount[i]) % 4 : a++;
      else if (b - l < this.tShift[i])
        a++;
      else
        break;
      b++;
    }
    a > n ? o[c] = new Array(a - n + 1).join(" ") + this.src.slice(b, p) : o[c] = this.src.slice(b, p);
  }
  return o.join("");
};
$e.prototype.Token = De;
const V3 = 65536;
function n0(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  return e.src.slice(t, n);
}
function pt(e) {
  const u = [], t = e.length;
  let n = 0, r = e.charCodeAt(n), o = !1, c = 0, i = "";
  for (; n < t; )
    r === 124 && (o ? (i += e.substring(c, n - 1), c = n) : (u.push(i + e.substring(c, n)), i = "", c = n + 1)), o = r === 92, n++, r = e.charCodeAt(n);
  return u.push(i + e.substring(c)), u;
}
function Z3(e, u, t, n) {
  if (u + 2 > t)
    return !1;
  let r = u + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[r] + e.tShift[r];
  if (o >= e.eMarks[r])
    return !1;
  const c = e.src.charCodeAt(o++);
  if (c !== 124 && c !== 45 && c !== 58 || o >= e.eMarks[r])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 && !K(i) || c === 45 && K(i))
    return !1;
  for (; o < e.eMarks[r]; ) {
    const D = e.src.charCodeAt(o);
    if (D !== 124 && D !== 45 && D !== 58 && !K(D))
      return !1;
    o++;
  }
  let a = n0(e, u + 1), l = a.split("|");
  const b = [];
  for (let D = 0; D < l.length; D++) {
    const L = l[D].trim();
    if (!L) {
      if (D === 0 || D === l.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(L))
      return !1;
    L.charCodeAt(L.length - 1) === 58 ? b.push(L.charCodeAt(0) === 58 ? "center" : "right") : L.charCodeAt(0) === 58 ? b.push("left") : b.push("");
  }
  if (a = n0(e, u).trim(), a.indexOf("|") === -1 || e.sCount[u] - e.blkIndent >= 4)
    return !1;
  l = pt(a), l.length && l[0] === "" && l.shift(), l.length && l[l.length - 1] === "" && l.pop();
  const p = l.length;
  if (p === 0 || p !== b.length)
    return !1;
  if (n)
    return !0;
  const _ = e.parentType;
  e.parentType = "table";
  const x = e.md.block.ruler.getRules("blockquote"), m = e.push("table_open", "table", 1), C = [u, 0];
  m.map = C;
  const S = e.push("thead_open", "thead", 1);
  S.map = [u, u + 1];
  const R = e.push("tr_open", "tr", 1);
  R.map = [u, u + 1];
  for (let D = 0; D < l.length; D++) {
    const L = e.push("th_open", "th", 1);
    b[D] && (L.attrs = [["style", "text-align:" + b[D]]]);
    const $ = e.push("inline", "", 0);
    $.content = l[D].trim(), $.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let E, A = 0;
  for (r = u + 2; r < t && !(e.sCount[r] < e.blkIndent); r++) {
    let D = !1;
    for (let $ = 0, V = x.length; $ < V; $++)
      if (x[$](e, r, t, !0)) {
        D = !0;
        break;
      }
    if (D || (a = n0(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (l = pt(a), l.length && l[0] === "" && l.shift(), l.length && l[l.length - 1] === "" && l.pop(), A += p - l.length, A > V3))
      break;
    if (r === u + 2) {
      const $ = e.push("tbody_open", "tbody", 1);
      $.map = E = [u + 2, 0];
    }
    const L = e.push("tr_open", "tr", 1);
    L.map = [r, r + 1];
    for (let $ = 0; $ < p; $++) {
      const V = e.push("td_open", "td", 1);
      b[$] && (V.attrs = [["style", "text-align:" + b[$]]]);
      const J = e.push("inline", "", 0);
      J.content = l[$] ? l[$].trim() : "", J.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return E && (e.push("tbody_close", "tbody", -1), E[1] = r), e.push("table_close", "table", -1), C[1] = r, e.parentType = _, e.line = r, !0;
}
function G3(e, u, t) {
  if (e.sCount[u] - e.blkIndent < 4)
    return !1;
  let n = u + 1, r = n;
  for (; n < t; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  e.line = r;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(u, r, 4 + e.blkIndent, !1) + `
`, o.map = [u, e.line], !0;
}
function W3(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || r + 3 > o)
    return !1;
  const c = e.src.charCodeAt(r);
  if (c !== 126 && c !== 96)
    return !1;
  let i = r;
  r = e.skipChars(r, c);
  let a = r - i;
  if (a < 3)
    return !1;
  const l = e.src.slice(i, r), b = e.src.slice(r, o);
  if (c === 96 && b.indexOf(String.fromCharCode(c)) >= 0)
    return !1;
  if (n)
    return !0;
  let p = u, _ = !1;
  for (; p++, !(p >= t || (r = i = e.bMarks[p] + e.tShift[p], o = e.eMarks[p], r < o && e.sCount[p] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === c && !(e.sCount[p] - e.blkIndent >= 4) && (r = e.skipChars(r, c), !(r - i < a) && (r = e.skipSpaces(r), !(r < o)))) {
      _ = !0;
      break;
    }
  a = e.sCount[u], e.line = p + (_ ? 1 : 0);
  const x = e.push("fence", "code", 0);
  return x.info = b, x.content = e.getLines(u + 1, p, a, !0), x.markup = l, x.map = [u, e.line], !0;
}
function K3(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  const c = e.lineMax;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (n)
    return !0;
  const i = [], a = [], l = [], b = [], p = e.md.block.ruler.getRules("blockquote"), _ = e.parentType;
  e.parentType = "blockquote";
  let x = !1, m;
  for (m = u; m < t; m++) {
    const A = e.sCount[m] < e.blkIndent;
    if (r = e.bMarks[m] + e.tShift[m], o = e.eMarks[m], r >= o)
      break;
    if (e.src.charCodeAt(r++) === 62 && !A) {
      let L = e.sCount[m] + 1, $, V;
      e.src.charCodeAt(r) === 32 ? (r++, L++, V = !1, $ = !0) : e.src.charCodeAt(r) === 9 ? ($ = !0, (e.bsCount[m] + L) % 4 === 3 ? (r++, L++, V = !1) : V = !0) : $ = !1;
      let J = L;
      for (i.push(e.bMarks[m]), e.bMarks[m] = r; r < o; ) {
        const ie = e.src.charCodeAt(r);
        if (K(ie))
          ie === 9 ? J += 4 - (J + e.bsCount[m] + (V ? 1 : 0)) % 4 : J++;
        else
          break;
        r++;
      }
      x = r >= o, a.push(e.bsCount[m]), e.bsCount[m] = e.sCount[m] + 1 + ($ ? 1 : 0), l.push(e.sCount[m]), e.sCount[m] = J - L, b.push(e.tShift[m]), e.tShift[m] = r - e.bMarks[m];
      continue;
    }
    if (x)
      break;
    let D = !1;
    for (let L = 0, $ = p.length; L < $; L++)
      if (p[L](e, m, t, !0)) {
        D = !0;
        break;
      }
    if (D) {
      e.lineMax = m, e.blkIndent !== 0 && (i.push(e.bMarks[m]), a.push(e.bsCount[m]), b.push(e.tShift[m]), l.push(e.sCount[m]), e.sCount[m] -= e.blkIndent);
      break;
    }
    i.push(e.bMarks[m]), a.push(e.bsCount[m]), b.push(e.tShift[m]), l.push(e.sCount[m]), e.sCount[m] = -1;
  }
  const C = e.blkIndent;
  e.blkIndent = 0;
  const S = e.push("blockquote_open", "blockquote", 1);
  S.markup = ">";
  const R = [u, 0];
  S.map = R, e.md.block.tokenize(e, u, m);
  const E = e.push("blockquote_close", "blockquote", -1);
  E.markup = ">", e.lineMax = c, e.parentType = _, R[1] = e.line;
  for (let A = 0; A < b.length; A++)
    e.bMarks[A + u] = i[A], e.tShift[A + u] = b[A], e.sCount[A + u] = l[A], e.bsCount[A + u] = a[A];
  return e.blkIndent = C, !0;
}
function X3(e, u, t, n) {
  const r = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[u] + e.tShift[u];
  const c = e.src.charCodeAt(o++);
  if (c !== 42 && c !== 45 && c !== 95)
    return !1;
  let i = 1;
  for (; o < r; ) {
    const l = e.src.charCodeAt(o++);
    if (l !== c && !K(l))
      return !1;
    l === c && i++;
  }
  if (i < 3)
    return !1;
  if (n)
    return !0;
  e.line = u + 1;
  const a = e.push("hr", "hr", 0);
  return a.map = [u, e.line], a.markup = Array(i + 1).join(String.fromCharCode(c)), !0;
}
function gt(e, u) {
  const t = e.eMarks[u];
  let n = e.bMarks[u] + e.tShift[u];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < t) {
    const o = e.src.charCodeAt(n);
    if (!K(o))
      return -1;
  }
  return n;
}
function bt(e, u) {
  const t = e.bMarks[u] + e.tShift[u], n = e.eMarks[u];
  let r = t;
  if (r + 1 >= n)
    return -1;
  let o = e.src.charCodeAt(r++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (r >= n)
      return -1;
    if (o = e.src.charCodeAt(r++), o >= 48 && o <= 57) {
      if (r - t >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return r < n && (o = e.src.charCodeAt(r), !K(o)) ? -1 : r;
}
function J3(e, u) {
  const t = e.level + 2;
  for (let n = u + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === t && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Y3(e, u, t, n) {
  let r, o, c, i, a = u, l = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let b = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (b = !0);
  let p, _, x;
  if ((x = bt(e, a)) >= 0) {
    if (p = !0, c = e.bMarks[a] + e.tShift[a], _ = Number(e.src.slice(c, x - 1)), b && _ !== 1) return !1;
  } else if ((x = gt(e, a)) >= 0)
    p = !1;
  else
    return !1;
  if (b && e.skipSpaces(x) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const m = e.src.charCodeAt(x - 1), C = e.tokens.length;
  p ? (i = e.push("ordered_list_open", "ol", 1), _ !== 1 && (i.attrs = [["start", _]])) : i = e.push("bullet_list_open", "ul", 1);
  const S = [a, 0];
  i.map = S, i.markup = String.fromCharCode(m);
  let R = !1;
  const E = e.md.block.ruler.getRules("list"), A = e.parentType;
  for (e.parentType = "list"; a < t; ) {
    o = x, r = e.eMarks[a];
    const D = e.sCount[a] + x - (e.bMarks[a] + e.tShift[a]);
    let L = D;
    for (; o < r; ) {
      const T = e.src.charCodeAt(o);
      if (T === 9)
        L += 4 - (L + e.bsCount[a]) % 4;
      else if (T === 32)
        L++;
      else
        break;
      o++;
    }
    const $ = o;
    let V;
    $ >= r ? V = 1 : V = L - D, V > 4 && (V = 1);
    const J = D + V;
    i = e.push("list_item_open", "li", 1), i.markup = String.fromCharCode(m);
    const ie = [a, 0];
    i.map = ie, p && (i.info = e.src.slice(c, x - 1));
    const _e = e.tight, ve = e.tShift[a], Te = e.sCount[a], Re = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = J, e.tight = !0, e.tShift[a] = $ - e.bMarks[a], e.sCount[a] = L, $ >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, a, t, !0), (!e.tight || R) && (l = !1), R = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Re, e.tShift[a] = ve, e.sCount[a] = Te, e.tight = _e, i = e.push("list_item_close", "li", -1), i.markup = String.fromCharCode(m), a = e.line, ie[1] = a, a >= t || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let ce = !1;
    for (let T = 0, X = E.length; T < X; T++)
      if (E[T](e, a, t, !0)) {
        ce = !0;
        break;
      }
    if (ce)
      break;
    if (p) {
      if (x = bt(e, a), x < 0)
        break;
      c = e.bMarks[a] + e.tShift[a];
    } else if (x = gt(e, a), x < 0)
      break;
    if (m !== e.src.charCodeAt(x - 1))
      break;
  }
  return p ? i = e.push("ordered_list_close", "ol", -1) : i = e.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(m), S[1] = a, e.line = a, e.parentType = A, l && J3(e, C), !0;
}
function Q3(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u], c = u + 1;
  if (e.sCount[u] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function i(E) {
    const A = e.lineMax;
    if (E >= A || e.isEmpty(E))
      return null;
    let D = !1;
    if (e.sCount[E] - e.blkIndent > 3 && (D = !0), e.sCount[E] < 0 && (D = !0), !D) {
      const V = e.md.block.ruler.getRules("reference"), J = e.parentType;
      e.parentType = "reference";
      let ie = !1;
      for (let _e = 0, ve = V.length; _e < ve; _e++)
        if (V[_e](e, E, A, !0)) {
          ie = !0;
          break;
        }
      if (e.parentType = J, ie)
        return null;
    }
    const L = e.bMarks[E] + e.tShift[E], $ = e.eMarks[E];
    return e.src.slice(L, $ + 1);
  }
  let a = e.src.slice(r, o + 1);
  o = a.length;
  let l = -1;
  for (r = 1; r < o; r++) {
    const E = a.charCodeAt(r);
    if (E === 91)
      return !1;
    if (E === 93) {
      l = r;
      break;
    } else if (E === 10) {
      const A = i(c);
      A !== null && (a += A, o = a.length, c++);
    } else if (E === 92 && (r++, r < o && a.charCodeAt(r) === 10)) {
      const A = i(c);
      A !== null && (a += A, o = a.length, c++);
    }
  }
  if (l < 0 || a.charCodeAt(l + 1) !== 58)
    return !1;
  for (r = l + 2; r < o; r++) {
    const E = a.charCodeAt(r);
    if (E === 10) {
      const A = i(c);
      A !== null && (a += A, o = a.length, c++);
    } else if (!K(E)) break;
  }
  const b = e.md.helpers.parseLinkDestination(a, r, o);
  if (!b.ok)
    return !1;
  const p = e.md.normalizeLink(b.str);
  if (!e.md.validateLink(p))
    return !1;
  r = b.pos;
  const _ = r, x = c, m = r;
  for (; r < o; r++) {
    const E = a.charCodeAt(r);
    if (E === 10) {
      const A = i(c);
      A !== null && (a += A, o = a.length, c++);
    } else if (!K(E)) break;
  }
  let C = e.md.helpers.parseLinkTitle(a, r, o);
  for (; C.can_continue; ) {
    const E = i(c);
    if (E === null) break;
    a += E, r = o, o = a.length, c++, C = e.md.helpers.parseLinkTitle(a, r, o, C);
  }
  let S;
  for (r < o && m !== r && C.ok ? (S = C.str, r = C.pos) : (S = "", r = _, c = x); r < o; ) {
    const E = a.charCodeAt(r);
    if (!K(E))
      break;
    r++;
  }
  if (r < o && a.charCodeAt(r) !== 10 && S)
    for (S = "", r = _, c = x; r < o; ) {
      const E = a.charCodeAt(r);
      if (!K(E))
        break;
      r++;
    }
  if (r < o && a.charCodeAt(r) !== 10)
    return !1;
  const R = ju(a.slice(1, l));
  return R ? (n || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[R] > "u" && (e.env.references[R] = { title: S, href: p }), e.line = c), !0) : !1;
}
const e4 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], u4 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t4 = "[^\"'=<>`\\x00-\\x20]+", n4 = "'[^']*'", r4 = '"[^"]*"', o4 = "(?:" + t4 + "|" + n4 + "|" + r4 + ")", i4 = "(?:\\s+" + u4 + "(?:\\s*=\\s*" + o4 + ")?)", ci = "<[A-Za-z][A-Za-z0-9\\-]*" + i4 + "*\\s*\\/?>", si = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", c4 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", s4 = "<[?][\\s\\S]*?[?]>", a4 = "<![A-Za-z][^>]*>", l4 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", d4 = new RegExp("^(?:" + ci + "|" + si + "|" + c4 + "|" + s4 + "|" + a4 + "|" + l4 + ")"), f4 = new RegExp("^(?:" + ci + "|" + si + ")"), ru = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + e4.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(f4.source + "\\s*$"), /^$/, !1]
];
function h4(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let c = e.src.slice(r, o), i = 0;
  for (; i < ru.length && !ru[i][0].test(c); i++)
    ;
  if (i === ru.length)
    return !1;
  if (n)
    return ru[i][2];
  let a = u + 1;
  if (!ru[i][1].test(c)) {
    for (; a < t && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], o = e.eMarks[a], c = e.src.slice(r, o), ru[i][1].test(c)) {
        c.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const l = e.push("html_block", "", 0);
  return l.map = [u, a], l.content = e.getLines(u, a, e.blkIndent, !0), !0;
}
function p4(e, u, t, n) {
  let r = e.bMarks[u] + e.tShift[u], o = e.eMarks[u];
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  let c = e.src.charCodeAt(r);
  if (c !== 35 || r >= o)
    return !1;
  let i = 1;
  for (c = e.src.charCodeAt(++r); c === 35 && r < o && i <= 6; )
    i++, c = e.src.charCodeAt(++r);
  if (i > 6 || r < o && !K(c))
    return !1;
  if (n)
    return !0;
  o = e.skipSpacesBack(o, r);
  const a = e.skipCharsBack(o, 35, r);
  a > r && K(e.src.charCodeAt(a - 1)) && (o = a), e.line = u + 1;
  const l = e.push("heading_open", "h" + String(i), 1);
  l.markup = "########".slice(0, i), l.map = [u, e.line];
  const b = e.push("inline", "", 0);
  b.content = e.src.slice(r, o).trim(), b.map = [u, e.line], b.children = [];
  const p = e.push("heading_close", "h" + String(i), -1);
  return p.markup = "########".slice(0, i), !0;
}
function g4(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[u] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let o = 0, c, i = u + 1;
  for (; i < t && !e.isEmpty(i); i++) {
    if (e.sCount[i] - e.blkIndent > 3)
      continue;
    if (e.sCount[i] >= e.blkIndent) {
      let x = e.bMarks[i] + e.tShift[i];
      const m = e.eMarks[i];
      if (x < m && (c = e.src.charCodeAt(x), (c === 45 || c === 61) && (x = e.skipChars(x, c), x = e.skipSpaces(x), x >= m))) {
        o = c === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[i] < 0)
      continue;
    let _ = !1;
    for (let x = 0, m = n.length; x < m; x++)
      if (n[x](e, i, t, !0)) {
        _ = !0;
        break;
      }
    if (_)
      break;
  }
  if (!o)
    return !1;
  const a = e.getLines(u, i, e.blkIndent, !1).trim();
  e.line = i + 1;
  const l = e.push("heading_open", "h" + String(o), 1);
  l.markup = String.fromCharCode(c), l.map = [u, e.line];
  const b = e.push("inline", "", 0);
  b.content = a, b.map = [u, e.line - 1], b.children = [];
  const p = e.push("heading_close", "h" + String(o), -1);
  return p.markup = String.fromCharCode(c), e.parentType = r, !0;
}
function b4(e, u, t) {
  const n = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let o = u + 1;
  for (e.parentType = "paragraph"; o < t && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let l = !1;
    for (let b = 0, p = n.length; b < p; b++)
      if (n[b](e, o, t, !0)) {
        l = !0;
        break;
      }
    if (l)
      break;
  }
  const c = e.getLines(u, o, e.blkIndent, !1).trim();
  e.line = o;
  const i = e.push("paragraph_open", "p", 1);
  i.map = [u, e.line];
  const a = e.push("inline", "", 0);
  return a.content = c, a.map = [u, e.line], a.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const Bu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Z3, ["paragraph", "reference"]],
  ["code", G3],
  ["fence", W3, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", K3, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", X3, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Y3, ["paragraph", "reference", "blockquote"]],
  ["reference", Q3],
  ["html_block", h4, ["paragraph", "reference", "blockquote"]],
  ["heading", p4, ["paragraph", "reference", "blockquote"]],
  ["lheading", g4],
  ["paragraph", b4]
];
function Uu() {
  this.ruler = new xe();
  for (let e = 0; e < Bu.length; e++)
    this.ruler.push(Bu[e][0], Bu[e][1], { alt: (Bu[e][2] || []).slice() });
}
Uu.prototype.tokenize = function(e, u, t) {
  const n = this.ruler.getRules(""), r = n.length, o = e.md.options.maxNesting;
  let c = u, i = !1;
  for (; c < t && (e.line = c = e.skipEmptyLines(c), !(c >= t || e.sCount[c] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = t;
      break;
    }
    const a = e.line;
    let l = !1;
    for (let b = 0; b < r; b++)
      if (l = n[b](e, c, t, !1), l) {
        if (a >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!l) throw new Error("none of the block rules matched");
    e.tight = !i, e.isEmpty(e.line - 1) && (i = !0), c = e.line, c < t && e.isEmpty(c) && (i = !0, c++, e.line = c);
  }
};
Uu.prototype.parse = function(e, u, t, n) {
  if (!e)
    return;
  const r = new this.State(e, u, t, n);
  this.tokenize(r, r.line, r.lineMax);
};
Uu.prototype.State = $e;
function _u(e, u, t, n) {
  this.src = e, this.env = t, this.md = u, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
_u.prototype.pushPending = function() {
  const e = new De("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
_u.prototype.push = function(e, u, t) {
  this.pending && this.pushPending();
  const n = new De(e, u, t);
  let r = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
_u.prototype.scanDelims = function(e, u) {
  const t = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let o = e;
  for (; o < t && this.src.charCodeAt(o) === n; )
    o++;
  const c = o - e, i = o < t ? this.src.charCodeAt(o) : 32, a = pu(r) || hu(String.fromCharCode(r)), l = pu(i) || hu(String.fromCharCode(i)), b = fu(r), p = fu(i), _ = !p && (!l || b || a), x = !b && (!a || p || l);
  return { can_open: _ && (u || !x || a), can_close: x && (u || !_ || l), length: c };
};
_u.prototype.Token = De;
function m4(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function _4(e, u) {
  let t = e.pos;
  for (; t < e.posMax && !m4(e.src.charCodeAt(t)); )
    t++;
  return t === e.pos ? !1 : (u || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0);
}
const x4 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function k4(e, u) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const t = e.pos, n = e.posMax;
  if (t + 3 > n || e.src.charCodeAt(t) !== 58 || e.src.charCodeAt(t + 1) !== 47 || e.src.charCodeAt(t + 2) !== 47) return !1;
  const r = e.pending.match(x4);
  if (!r) return !1;
  const o = r[1], c = e.md.linkify.matchAtStart(e.src.slice(t - o.length));
  if (!c) return !1;
  let i = c.url;
  if (i.length <= o.length) return !1;
  i = i.replace(/\*+$/, "");
  const a = e.md.normalizeLink(i);
  if (!e.md.validateLink(a)) return !1;
  if (!u) {
    e.pending = e.pending.slice(0, -o.length);
    const l = e.push("link_open", "a", 1);
    l.attrs = [["href", a]], l.markup = "linkify", l.info = "auto";
    const b = e.push("text", "", 0);
    b.content = e.md.normalizeLinkText(i);
    const p = e.push("link_close", "a", -1);
    p.markup = "linkify", p.info = "auto";
  }
  return e.pos += i.length - o.length, !0;
}
function w4(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 10)
    return !1;
  const n = e.pending.length - 1, r = e.posMax;
  if (!u)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let o = n - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (t++; t < r && K(e.src.charCodeAt(t)); )
    t++;
  return e.pos = t, !0;
}
const I0 = [];
for (let e = 0; e < 256; e++)
  I0.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  I0[e.charCodeAt(0)] = 1;
});
function C4(e, u) {
  let t = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(t) !== 92 || (t++, t >= n)) return !1;
  let r = e.src.charCodeAt(t);
  if (r === 10) {
    for (u || e.push("hardbreak", "br", 0), t++; t < n && (r = e.src.charCodeAt(t), !!K(r)); )
      t++;
    return e.pos = t, !0;
  }
  let o = e.src[t];
  if (r >= 55296 && r <= 56319 && t + 1 < n) {
    const i = e.src.charCodeAt(t + 1);
    i >= 56320 && i <= 57343 && (o += e.src[t + 1], t++);
  }
  const c = "\\" + o;
  if (!u) {
    const i = e.push("text_special", "", 0);
    r < 256 && I0[r] !== 0 ? i.content = o : i.content = c, i.markup = c, i.info = "escape";
  }
  return e.pos = t + 1, !0;
}
function v4(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 96)
    return !1;
  const r = t;
  t++;
  const o = e.posMax;
  for (; t < o && e.src.charCodeAt(t) === 96; )
    t++;
  const c = e.src.slice(r, t), i = c.length;
  if (e.backticksScanned && (e.backticks[i] || 0) <= r)
    return u || (e.pending += c), e.pos += i, !0;
  let a = t, l;
  for (; (l = e.src.indexOf("`", a)) !== -1; ) {
    for (a = l + 1; a < o && e.src.charCodeAt(a) === 96; )
      a++;
    const b = a - l;
    if (b === i) {
      if (!u) {
        const p = e.push("code_inline", "code", 0);
        p.markup = c, p.content = e.src.slice(t, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = a, !0;
    }
    e.backticks[b] = l;
  }
  return e.backticksScanned = !0, u || (e.pending += c), e.pos += i, !0;
}
function y4(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let o = r.length;
  const c = String.fromCharCode(n);
  if (o < 2)
    return !1;
  let i;
  o % 2 && (i = e.push("text", "", 0), i.content = c, o--);
  for (let a = 0; a < o; a += 2)
    i = e.push("text", "", 0), i.content = c + c, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function mt(e, u) {
  let t;
  const n = [], r = u.length;
  for (let o = 0; o < r; o++) {
    const c = u[o];
    if (c.marker !== 126 || c.end === -1)
      continue;
    const i = u[c.end];
    t = e.tokens[c.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = e.tokens[i.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", e.tokens[i.token - 1].type === "text" && e.tokens[i.token - 1].content === "~" && n.push(i.token - 1);
  }
  for (; n.length; ) {
    const o = n.pop();
    let c = o + 1;
    for (; c < e.tokens.length && e.tokens[c].type === "s_close"; )
      c++;
    c--, o !== c && (t = e.tokens[c], e.tokens[c] = e.tokens[o], e.tokens[o] = t);
  }
}
function E4(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  mt(e, e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && mt(e, u[n].delimiters);
}
const ai = {
  tokenize: y4,
  postProcess: E4
};
function M4(e, u) {
  const t = e.pos, n = e.src.charCodeAt(t);
  if (u || n !== 95 && n !== 42)
    return !1;
  const r = e.scanDelims(e.pos, n === 42);
  for (let o = 0; o < r.length; o++) {
    const c = e.push("text", "", 0);
    c.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  }
  return e.pos += r.length, !0;
}
function _t(e, u) {
  const t = u.length;
  for (let n = t - 1; n >= 0; n--) {
    const r = u[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const o = u[r.end], c = n > 0 && u[n - 1].end === r.end + 1 && // check that first two markers match and adjacent
    u[n - 1].marker === r.marker && u[n - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    u[r.end + 1].token === o.token + 1, i = String.fromCharCode(r.marker), a = e.tokens[r.token];
    a.type = c ? "strong_open" : "em_open", a.tag = c ? "strong" : "em", a.nesting = 1, a.markup = c ? i + i : i, a.content = "";
    const l = e.tokens[o.token];
    l.type = c ? "strong_close" : "em_close", l.tag = c ? "strong" : "em", l.nesting = -1, l.markup = c ? i + i : i, l.content = "", c && (e.tokens[u[n - 1].token].content = "", e.tokens[u[r.end + 1].token].content = "", n--);
  }
}
function A4(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  _t(e, e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && _t(e, u[n].delimiters);
}
const li = {
  tokenize: M4,
  postProcess: A4
};
function D4(e, u) {
  let t, n, r, o, c = "", i = "", a = e.pos, l = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const b = e.pos, p = e.posMax, _ = e.pos + 1, x = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (x < 0)
    return !1;
  let m = x + 1;
  if (m < p && e.src.charCodeAt(m) === 40) {
    for (l = !1, m++; m < p && (t = e.src.charCodeAt(m), !(!K(t) && t !== 10)); m++)
      ;
    if (m >= p)
      return !1;
    if (a = m, r = e.md.helpers.parseLinkDestination(e.src, m, e.posMax), r.ok) {
      for (c = e.md.normalizeLink(r.str), e.md.validateLink(c) ? m = r.pos : c = "", a = m; m < p && (t = e.src.charCodeAt(m), !(!K(t) && t !== 10)); m++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, m, e.posMax), m < p && a !== m && r.ok)
        for (i = r.str, m = r.pos; m < p && (t = e.src.charCodeAt(m), !(!K(t) && t !== 10)); m++)
          ;
    }
    (m >= p || e.src.charCodeAt(m) !== 41) && (l = !0), m++;
  }
  if (l) {
    if (typeof e.env.references > "u")
      return !1;
    if (m < p && e.src.charCodeAt(m) === 91 ? (a = m + 1, m = e.md.helpers.parseLinkLabel(e, m), m >= 0 ? n = e.src.slice(a, m++) : m = x + 1) : m = x + 1, n || (n = e.src.slice(_, x)), o = e.env.references[ju(n)], !o)
      return e.pos = b, !1;
    c = o.href, i = o.title;
  }
  if (!u) {
    e.pos = _, e.posMax = x;
    const C = e.push("link_open", "a", 1), S = [["href", c]];
    C.attrs = S, i && S.push(["title", i]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = m, e.posMax = p, !0;
}
function B4(e, u) {
  let t, n, r, o, c, i, a, l, b = "";
  const p = e.pos, _ = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const x = e.pos + 2, m = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (m < 0)
    return !1;
  if (o = m + 1, o < _ && e.src.charCodeAt(o) === 40) {
    for (o++; o < _ && (t = e.src.charCodeAt(o), !(!K(t) && t !== 10)); o++)
      ;
    if (o >= _)
      return !1;
    for (l = o, i = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), i.ok && (b = e.md.normalizeLink(i.str), e.md.validateLink(b) ? o = i.pos : b = ""), l = o; o < _ && (t = e.src.charCodeAt(o), !(!K(t) && t !== 10)); o++)
      ;
    if (i = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < _ && l !== o && i.ok)
      for (a = i.str, o = i.pos; o < _ && (t = e.src.charCodeAt(o), !(!K(t) && t !== 10)); o++)
        ;
    else
      a = "";
    if (o >= _ || e.src.charCodeAt(o) !== 41)
      return e.pos = p, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < _ && e.src.charCodeAt(o) === 91 ? (l = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? r = e.src.slice(l, o++) : o = m + 1) : o = m + 1, r || (r = e.src.slice(x, m)), c = e.env.references[ju(r)], !c)
      return e.pos = p, !1;
    b = c.href, a = c.title;
  }
  if (!u) {
    n = e.src.slice(x, m);
    const C = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      C
    );
    const S = e.push("image", "img", 0), R = [["src", b], ["alt", ""]];
    S.attrs = R, S.children = C, S.content = n, a && R.push(["title", a]);
  }
  return e.pos = o, e.posMax = _, !0;
}
const S4 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, L4 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function I4(e, u) {
  let t = e.pos;
  if (e.src.charCodeAt(t) !== 60)
    return !1;
  const n = e.pos, r = e.posMax;
  for (; ; ) {
    if (++t >= r) return !1;
    const c = e.src.charCodeAt(t);
    if (c === 60) return !1;
    if (c === 62) break;
  }
  const o = e.src.slice(n + 1, t);
  if (L4.test(o)) {
    const c = e.md.normalizeLink(o);
    if (!e.md.validateLink(c))
      return !1;
    if (!u) {
      const i = e.push("link_open", "a", 1);
      i.attrs = [["href", c]], i.markup = "autolink", i.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(o);
      const l = e.push("link_close", "a", -1);
      l.markup = "autolink", l.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (S4.test(o)) {
    const c = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(c))
      return !1;
    if (!u) {
      const i = e.push("link_open", "a", 1);
      i.attrs = [["href", c]], i.markup = "autolink", i.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(o);
      const l = e.push("link_close", "a", -1);
      l.markup = "autolink", l.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function F4(e) {
  return /^<a[>\s]/i.test(e);
}
function $4(e) {
  return /^<\/a\s*>/i.test(e);
}
function T4(e) {
  const u = e | 32;
  return u >= 97 && u <= 122;
}
function R4(e, u) {
  if (!e.md.options.html)
    return !1;
  const t = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= t)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !T4(r))
    return !1;
  const o = e.src.slice(n).match(d4);
  if (!o)
    return !1;
  if (!u) {
    const c = e.push("html_inline", "", 0);
    c.content = o[0], F4(c.content) && e.linkLevel++, $4(c.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const N4 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, O4 = /^&([a-z][a-z0-9]{1,31});/i;
function z4(e, u) {
  const t = e.pos, n = e.posMax;
  if (e.src.charCodeAt(t) !== 38 || t + 1 >= n) return !1;
  if (e.src.charCodeAt(t + 1) === 35) {
    const o = e.src.slice(t).match(N4);
    if (o) {
      if (!u) {
        const c = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), i = e.push("text_special", "", 0);
        i.content = S0(c) ? zu(c) : zu(65533), i.markup = o[0], i.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(t).match(O4);
    if (o) {
      const c = ti(o[0]);
      if (c !== o[0]) {
        if (!u) {
          const i = e.push("text_special", "", 0);
          i.content = c, i.markup = o[0], i.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function xt(e) {
  const u = {}, t = e.length;
  if (!t) return;
  let n = 0, r = -2;
  const o = [];
  for (let c = 0; c < t; c++) {
    const i = e[c];
    if (o.push(0), (e[n].marker !== i.marker || r !== i.token - 1) && (n = c), r = i.token, i.length = i.length || 0, !i.close) continue;
    u.hasOwnProperty(i.marker) || (u[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = u[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let l = n - o[n] - 1, b = l;
    for (; l > a; l -= o[l] + 1) {
      const p = e[l];
      if (p.marker === i.marker && p.open && p.end < 0) {
        let _ = !1;
        if ((p.close || i.open) && (p.length + i.length) % 3 === 0 && (p.length % 3 !== 0 || i.length % 3 !== 0) && (_ = !0), !_) {
          const x = l > 0 && !e[l - 1].open ? o[l - 1] + 1 : 0;
          o[c] = c - l + x, o[l] = x, i.open = !1, p.end = c, p.close = !1, b = -1, r = -2;
          break;
        }
      }
    }
    b !== -1 && (u[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = b);
  }
}
function H4(e) {
  const u = e.tokens_meta, t = e.tokens_meta.length;
  xt(e.delimiters);
  for (let n = 0; n < t; n++)
    u[n] && u[n].delimiters && xt(u[n].delimiters);
}
function P4(e) {
  let u, t, n = 0;
  const r = e.tokens, o = e.tokens.length;
  for (u = t = 0; u < o; u++)
    r[u].nesting < 0 && n--, r[u].level = n, r[u].nesting > 0 && n++, r[u].type === "text" && u + 1 < o && r[u + 1].type === "text" ? r[u + 1].content = r[u].content + r[u + 1].content : (u !== t && (r[t] = r[u]), t++);
  u !== t && (r.length = t);
}
const r0 = [
  ["text", _4],
  ["linkify", k4],
  ["newline", w4],
  ["escape", C4],
  ["backticks", v4],
  ["strikethrough", ai.tokenize],
  ["emphasis", li.tokenize],
  ["link", D4],
  ["image", B4],
  ["autolink", I4],
  ["html_inline", R4],
  ["entity", z4]
], o0 = [
  ["balance_pairs", H4],
  ["strikethrough", ai.postProcess],
  ["emphasis", li.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", P4]
];
function xu() {
  this.ruler = new xe();
  for (let e = 0; e < r0.length; e++)
    this.ruler.push(r0[e][0], r0[e][1]);
  this.ruler2 = new xe();
  for (let e = 0; e < o0.length; e++)
    this.ruler2.push(o0[e][0], o0[e][1]);
}
xu.prototype.skipToken = function(e) {
  const u = e.pos, t = this.ruler.getRules(""), n = t.length, r = e.md.options.maxNesting, o = e.cache;
  if (typeof o[u] < "u") {
    e.pos = o[u];
    return;
  }
  let c = !1;
  if (e.level < r) {
    for (let i = 0; i < n; i++)
      if (e.level++, c = t[i](e, !0), e.level--, c) {
        if (u >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  c || e.pos++, o[u] = e.pos;
};
xu.prototype.tokenize = function(e) {
  const u = this.ruler.getRules(""), t = u.length, n = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const o = e.pos;
    let c = !1;
    if (e.level < r) {
      for (let i = 0; i < t; i++)
        if (c = u[i](e, !1), c) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (c) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
xu.prototype.parse = function(e, u, t, n) {
  const r = new this.State(e, u, t, n);
  this.tokenize(r);
  const o = this.ruler2.getRules(""), c = o.length;
  for (let i = 0; i < c; i++)
    o[i](r);
};
xu.prototype.State = _u;
function j4(e) {
  const u = {};
  e = e || {}, u.src_Any = Jo.source, u.src_Cc = Yo.source, u.src_Z = ei.source, u.src_P = D0.source, u.src_ZPCc = [u.src_Z, u.src_P, u.src_Cc].join("|"), u.src_ZCc = [u.src_Z, u.src_Cc].join("|");
  const t = "[><｜]";
  return u.src_pseudo_letter = "(?:(?!" + t + "|" + u.src_ZPCc + ")" + u.src_Any + ")", u.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", u.src_auth = "(?:(?:(?!" + u.src_ZCc + "|[@/\\[\\]()]).)+@)?", u.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", u.src_host_terminator = "(?=$|" + t + "|" + u.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + u.src_ZPCc + "))", u.src_path = "(?:[/?#](?:(?!" + u.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + u.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + u.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + u.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + u.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + u.src_ZCc + "|[']).)+\\'|\\'(?=" + u.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + u.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + u.src_ZCc + "|$)|;(?!" + u.src_ZCc + "|$)|\\!+(?!" + u.src_ZCc + "|[!]|$)|\\?(?!" + u.src_ZCc + "|[?]|$))+|\\/)?", u.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', u.src_xn = "xn--[a-z0-9\\-]{1,59}", u.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + u.src_xn + "|" + u.src_pseudo_letter + "{1,63})", u.src_domain = "(?:" + u.src_xn + "|(?:" + u.src_pseudo_letter + ")|(?:" + u.src_pseudo_letter + "(?:-|" + u.src_pseudo_letter + "){0,61}" + u.src_pseudo_letter + "))", u.src_host = "(?:(?:(?:(?:" + u.src_domain + ")\\.)*" + u.src_domain + "))", u.tpl_host_fuzzy = "(?:" + u.src_ip4 + "|(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%)))", u.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + u.src_domain + ")\\.)+(?:%TLDS%))", u.src_host_strict = u.src_host + u.src_host_terminator, u.tpl_host_fuzzy_strict = u.tpl_host_fuzzy + u.src_host_terminator, u.src_host_port_strict = u.src_host + u.src_port + u.src_host_terminator, u.tpl_host_port_fuzzy_strict = u.tpl_host_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_port_no_ip_fuzzy_strict = u.tpl_host_no_ip_fuzzy + u.src_port + u.src_host_terminator, u.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + u.src_ZPCc + "|>|$))", u.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + u.src_ZCc + ")(" + u.src_email_name + "@" + u.tpl_host_fuzzy_strict + ")", u.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_fuzzy_strict + u.src_path + ")", u.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + u.src_ZPCc + "))((?![$+<=>^`|｜])" + u.tpl_host_port_no_ip_fuzzy_strict + u.src_path + ")", u;
}
function m0(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(n) {
      e[n] = t[n];
    });
  }), e;
}
function qu(e) {
  return Object.prototype.toString.call(e);
}
function U4(e) {
  return qu(e) === "[object String]";
}
function q4(e) {
  return qu(e) === "[object Object]";
}
function V4(e) {
  return qu(e) === "[object RegExp]";
}
function kt(e) {
  return qu(e) === "[object Function]";
}
function Z4(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const di = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function G4(e) {
  return Object.keys(e || {}).reduce(function(u, t) {
    return u || di.hasOwnProperty(t);
  }, !1);
}
const W4 = {
  "http:": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(n) ? u >= 3 && e[u - 3] === ":" || u >= 3 && e[u - 3] === "/" ? 0 : n.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, u, t) {
      const n = e.slice(u);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0;
    }
  }
}, K4 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", X4 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function J4(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Y4(e) {
  return function(u, t) {
    const n = u.slice(t);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function wt() {
  return function(e, u) {
    u.normalize(e);
  };
}
function Hu(e) {
  const u = e.re = j4(e.__opts__), t = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || t.push(K4), t.push(u.src_xn), u.src_tlds = t.join("|");
  function n(i) {
    return i.replace("%TLDS%", u.src_tlds);
  }
  u.email_fuzzy = RegExp(n(u.tpl_email_fuzzy), "i"), u.link_fuzzy = RegExp(n(u.tpl_link_fuzzy), "i"), u.link_no_ip_fuzzy = RegExp(n(u.tpl_link_no_ip_fuzzy), "i"), u.host_fuzzy_test = RegExp(n(u.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function o(i, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + a);
  }
  Object.keys(e.__schemas__).forEach(function(i) {
    const a = e.__schemas__[i];
    if (a === null)
      return;
    const l = { validate: null, link: null };
    if (e.__compiled__[i] = l, q4(a)) {
      V4(a.validate) ? l.validate = Y4(a.validate) : kt(a.validate) ? l.validate = a.validate : o(i, a), kt(a.normalize) ? l.normalize = a.normalize : a.normalize ? o(i, a) : l.normalize = wt();
      return;
    }
    if (U4(a)) {
      r.push(i);
      return;
    }
    o(i, a);
  }), r.forEach(function(i) {
    e.__compiled__[e.__schemas__[i]] && (e.__compiled__[i].validate = e.__compiled__[e.__schemas__[i]].validate, e.__compiled__[i].normalize = e.__compiled__[e.__schemas__[i]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: wt() };
  const c = Object.keys(e.__compiled__).filter(function(i) {
    return i.length > 0 && e.__compiled__[i];
  }).map(Z4).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + c + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + u.src_ZPCc + "))(" + c + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), J4(e);
}
function Q4(e, u) {
  const t = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(t, n);
  this.schema = e.__schema__.toLowerCase(), this.index = t + u, this.lastIndex = n + u, this.raw = r, this.text = r, this.url = r;
}
function _0(e, u) {
  const t = new Q4(e, u);
  return e.__compiled__[t.schema].normalize(t, e), t;
}
function Ce(e, u) {
  if (!(this instanceof Ce))
    return new Ce(e, u);
  u || G4(e) && (u = e, e = {}), this.__opts__ = m0({}, di, u), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = m0({}, W4, e), this.__compiled__ = {}, this.__tlds__ = X4, this.__tlds_replaced__ = !1, this.re = {}, Hu(this);
}
Ce.prototype.add = function(u, t) {
  return this.__schemas__[u] = t, Hu(this), this;
};
Ce.prototype.set = function(u) {
  return this.__opts__ = m0(this.__opts__, u), this;
};
Ce.prototype.test = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length)
    return !1;
  let t, n, r, o, c, i, a, l, b;
  if (this.re.schema_test.test(u)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (t = a.exec(u)) !== null; )
      if (o = this.testSchemaAt(u, t[2], a.lastIndex), o) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = u.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (n = u.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (c = n.index + n[1].length, (this.__index__ < 0 || c < this.__index__) && (this.__schema__ = "", this.__index__ = c, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (b = u.indexOf("@"), b >= 0 && (r = u.match(this.re.email_fuzzy)) !== null && (c = r.index + r[1].length, i = r.index + r[0].length, (this.__index__ < 0 || c < this.__index__ || c === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = c, this.__last_index__ = i))), this.__index__ >= 0;
};
Ce.prototype.pretest = function(u) {
  return this.re.pretest.test(u);
};
Ce.prototype.testSchemaAt = function(u, t, n) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(u, n, this) : 0;
};
Ce.prototype.match = function(u) {
  const t = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === u && (t.push(_0(this, n)), n = this.__last_index__);
  let r = n ? u.slice(n) : u;
  for (; this.test(r); )
    t.push(_0(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return t.length ? t : null;
};
Ce.prototype.matchAtStart = function(u) {
  if (this.__text_cache__ = u, this.__index__ = -1, !u.length) return null;
  const t = this.re.schema_at_start.exec(u);
  if (!t) return null;
  const n = this.testSchemaAt(u, t[2], t[0].length);
  return n ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + n, _0(this, 0)) : null;
};
Ce.prototype.tlds = function(u, t) {
  return u = Array.isArray(u) ? u : [u], t ? (this.__tlds__ = this.__tlds__.concat(u).sort().filter(function(n, r, o) {
    return n !== o[r - 1];
  }).reverse(), Hu(this), this) : (this.__tlds__ = u.slice(), this.__tlds_replaced__ = !0, Hu(this), this);
};
Ce.prototype.normalize = function(u) {
  u.schema || (u.url = "http://" + u.url), u.schema === "mailto:" && !/^mailto:/i.test(u.url) && (u.url = "mailto:" + u.url);
};
Ce.prototype.onCompile = function() {
};
const ou = 2147483647, Le = 36, F0 = 1, gu = 26, e6 = 38, u6 = 700, fi = 72, hi = 128, pi = "-", t6 = /^xn--/, n6 = /[^\0-\x7F]/, r6 = /[\x2E\u3002\uFF0E\uFF61]/g, o6 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, i0 = Le - F0, Ie = Math.floor, c0 = String.fromCharCode;
function Ze(e) {
  throw new RangeError(o6[e]);
}
function i6(e, u) {
  const t = [];
  let n = e.length;
  for (; n--; )
    t[n] = u(e[n]);
  return t;
}
function gi(e, u) {
  const t = e.split("@");
  let n = "";
  t.length > 1 && (n = t[0] + "@", e = t[1]), e = e.replace(r6, ".");
  const r = e.split("."), o = i6(r, u).join(".");
  return n + o;
}
function bi(e) {
  const u = [];
  let t = 0;
  const n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < n) {
      const o = e.charCodeAt(t++);
      (o & 64512) == 56320 ? u.push(((r & 1023) << 10) + (o & 1023) + 65536) : (u.push(r), t--);
    } else
      u.push(r);
  }
  return u;
}
const c6 = (e) => String.fromCodePoint(...e), s6 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Le;
}, Ct = function(e, u) {
  return e + 22 + 75 * (e < 26) - ((u != 0) << 5);
}, mi = function(e, u, t) {
  let n = 0;
  for (e = t ? Ie(e / u6) : e >> 1, e += Ie(e / u); e > i0 * gu >> 1; n += Le)
    e = Ie(e / i0);
  return Ie(n + (i0 + 1) * e / (e + e6));
}, _i = function(e) {
  const u = [], t = e.length;
  let n = 0, r = hi, o = fi, c = e.lastIndexOf(pi);
  c < 0 && (c = 0);
  for (let i = 0; i < c; ++i)
    e.charCodeAt(i) >= 128 && Ze("not-basic"), u.push(e.charCodeAt(i));
  for (let i = c > 0 ? c + 1 : 0; i < t; ) {
    const a = n;
    for (let b = 1, p = Le; ; p += Le) {
      i >= t && Ze("invalid-input");
      const _ = s6(e.charCodeAt(i++));
      _ >= Le && Ze("invalid-input"), _ > Ie((ou - n) / b) && Ze("overflow"), n += _ * b;
      const x = p <= o ? F0 : p >= o + gu ? gu : p - o;
      if (_ < x)
        break;
      const m = Le - x;
      b > Ie(ou / m) && Ze("overflow"), b *= m;
    }
    const l = u.length + 1;
    o = mi(n - a, l, a == 0), Ie(n / l) > ou - r && Ze("overflow"), r += Ie(n / l), n %= l, u.splice(n++, 0, r);
  }
  return String.fromCodePoint(...u);
}, xi = function(e) {
  const u = [];
  e = bi(e);
  const t = e.length;
  let n = hi, r = 0, o = fi;
  for (const a of e)
    a < 128 && u.push(c0(a));
  const c = u.length;
  let i = c;
  for (c && u.push(pi); i < t; ) {
    let a = ou;
    for (const b of e)
      b >= n && b < a && (a = b);
    const l = i + 1;
    a - n > Ie((ou - r) / l) && Ze("overflow"), r += (a - n) * l, n = a;
    for (const b of e)
      if (b < n && ++r > ou && Ze("overflow"), b === n) {
        let p = r;
        for (let _ = Le; ; _ += Le) {
          const x = _ <= o ? F0 : _ >= o + gu ? gu : _ - o;
          if (p < x)
            break;
          const m = p - x, C = Le - x;
          u.push(
            c0(Ct(x + m % C, 0))
          ), p = Ie(m / C);
        }
        u.push(c0(Ct(p, 0))), o = mi(r, l, i === c), r = 0, ++i;
      }
    ++r, ++n;
  }
  return u.join("");
}, a6 = function(e) {
  return gi(e, function(u) {
    return t6.test(u) ? _i(u.slice(4).toLowerCase()) : u;
  });
}, l6 = function(e) {
  return gi(e, function(u) {
    return n6.test(u) ? "xn--" + xi(u) : u;
  });
}, ki = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: bi,
    encode: c6
  },
  decode: _i,
  encode: xi,
  toASCII: l6,
  toUnicode: a6
}, d6 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, f6 = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, h6 = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, p6 = {
  default: d6,
  zero: f6,
  commonmark: h6
}, g6 = /^(vbscript|javascript|file|data):/, b6 = /^data:image\/(gif|png|jpeg|webp);/;
function m6(e) {
  const u = e.trim().toLowerCase();
  return g6.test(u) ? b6.test(u) : !0;
}
const wi = ["http:", "https:", "mailto:"];
function _6(e) {
  const u = A0(e, !0);
  if (u.hostname && (!u.protocol || wi.indexOf(u.protocol) >= 0))
    try {
      u.hostname = ki.toASCII(u.hostname);
    } catch {
    }
  return mu(M0(u));
}
function x6(e) {
  const u = A0(e, !0);
  if (u.hostname && (!u.protocol || wi.indexOf(u.protocol) >= 0))
    try {
      u.hostname = ki.toUnicode(u.hostname);
    } catch {
    }
  return iu(M0(u), iu.defaultChars + "%");
}
function ye(e, u) {
  if (!(this instanceof ye))
    return new ye(e, u);
  u || B0(e) || (u = e || {}, e = "default"), this.inline = new xu(), this.block = new Uu(), this.core = new L0(), this.renderer = new su(), this.linkify = new Ce(), this.validateLink = m6, this.normalizeLink = _6, this.normalizeLinkText = x6, this.utils = w3, this.helpers = Pu({}, E3), this.options = {}, this.configure(e), u && this.set(u);
}
ye.prototype.set = function(e) {
  return Pu(this.options, e), this;
};
ye.prototype.configure = function(e) {
  const u = this;
  if (B0(e)) {
    const t = e;
    if (e = p6[t], !e)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && u.set(e.options), e.components && Object.keys(e.components).forEach(function(t) {
    e.components[t].rules && u[t].ruler.enableOnly(e.components[t].rules), e.components[t].rules2 && u[t].ruler2.enableOnly(e.components[t].rules2);
  }), this;
};
ye.prototype.enable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.enable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
ye.prototype.disable = function(e, u) {
  let t = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    t = t.concat(this[r].ruler.disable(e, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(r) {
    return t.indexOf(r) < 0;
  });
  if (n.length && !u)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
ye.prototype.use = function(e) {
  const u = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, u), this;
};
ye.prototype.parse = function(e, u) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(e, this, u);
  return this.core.process(t), t.tokens;
};
ye.prototype.render = function(e, u) {
  return u = u || {}, this.renderer.render(this.parse(e, u), this.options, u);
};
ye.prototype.parseInline = function(e, u) {
  const t = new this.core.State(e, this, u);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
ye.prototype.renderInline = function(e, u) {
  return u = u || {}, this.renderer.render(this.parseInline(e, u), this.options, u);
};
const k6 = be((e) => {
  const u = xc(new ye(e.options ?? {}));
  for (const n of e.plugins ?? [])
    u.value.use(n);
  const t = W(() => u.value.render(e.source));
  return () => kc("div", { innerHTML: t.value });
}, {
  props: ["source", "options", "plugins"]
}), w6 = {
  key: 0,
  class: "chat-message-actions"
}, C6 = {
  key: 2,
  class: "chat-message-files"
}, x0 = /* @__PURE__ */ be({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: u }) {
    const t = e;
    ze.registerLanguage("javascript", Nt), ze.registerLanguage("typescript", Lh), ze.registerLanguage("python", Bh), ze.registerLanguage("xml", Ot), ze.registerLanguage("bash", Dh);
    const { message: n } = wc(t), { options: r } = Ue(), o = he(null), c = he({}), i = W(() => n.value.text || "&lt;Empty response&gt;"), a = W(() => ({
      "chat-message-from-user": n.value.sender === "user",
      "chat-message-from-bot": n.value.sender === "bot",
      "chat-message-transparent": n.value.transparent === !0
    })), l = (m) => {
      m.use($h, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, b = () => {
      var m;
      (m = o.value) != null && m.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, p = {
      highlight(m, C) {
        if (C && ze.getLanguage(C))
          try {
            return ze.highlight(m, { language: C }).value;
          } catch {
          }
        return "";
      }
    }, _ = { ...(r == null ? void 0 : r.messageComponents) ?? {} };
    u({ scrollToView: b });
    const x = async (m) => await new Promise((C, S) => {
      const R = new FileReader();
      R.onload = () => C(R.result), R.onerror = S, R.readAsDataURL(m);
    });
    return Qe(async () => {
      if (n.value.files)
        for (const m of n.value.files)
          try {
            const C = await x(m);
            c.value[m.name] = C;
          } catch (C) {
            console.error("Error reading file:", C);
          }
    }), (m, C) => (d(), h("div", {
      ref_key: "messageContainer",
      ref: o,
      class: C0(["chat-message", a.value])
    }, [
      m.$slots.beforeMessage ? (d(), h("div", w6, [
        He(m.$slots, "beforeMessage", X0(Cc({ message: N(n) })))
      ])) : ue("", !0),
      He(m.$slots, "default", {}, () => [
        N(n).type === "component" && _[N(n).key] ? (d(), ee(w0(_[N(n).key]), X0(v0({ key: 0 }, N(n).arguments)), null, 16)) : (d(), ee(N(k6), {
          key: 1,
          class: "chat-message-markdown",
          source: i.value,
          options: p,
          plugins: [l]
        }, null, 8, ["source", "plugins"])),
        (N(n).files ?? []).length > 0 ? (d(), h("div", C6, [
          (d(!0), h(Tu, null, Ru(N(n).files ?? [], (S) => (d(), h("div", {
            key: S.name,
            class: "chat-message-file"
          }, [
            me(zt, {
              file: S,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : ue("", !0)
      ])
    ], 2));
  }
}), v6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y6(e, u) {
  return d(), h("svg", v6, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ])]);
}
const E6 = g({ name: "mdi-chat", render: y6 }), M6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A6(e, u) {
  return d(), h("svg", M6, [...u[0] || (u[0] = [
    s("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ])]);
}
const D6 = g({ name: "mdi-chevron-down", render: A6 }), B6 = {
  key: 0,
  class: "welcome-message"
}, S6 = {
  key: 0,
  class: "welcome-message-icon"
}, L6 = ["src"], I6 = {
  key: 1,
  class: "welcome-message-icon-emoji"
}, F6 = {
  key: 1,
  class: "welcome-message-text"
}, $6 = {
  key: 0,
  class: "welcome-message-arrow"
}, T6 = /* @__PURE__ */ be({
  __name: "WelcomeMessage",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "click"],
  setup(e, { emit: u }) {
    const t = u, { options: n } = Ue(), r = W(() => {
      var p;
      return (p = n.welcomeMessage) == null ? void 0 : p.text;
    }), o = W(() => {
      var p;
      return (p = n.welcomeMessage) == null ? void 0 : p.icon;
    }), c = W(() => {
      var p;
      return (p = n.welcomeMessage) == null ? void 0 : p.showArrow;
    }), i = W(() => {
      const p = o.value;
      return typeof p == "string" && (p.startsWith("http://") || p.startsWith("https://") || p.startsWith("data:image/") || p.startsWith("/") || p.includes(".") && (p.includes(".png") || p.includes(".jpg") || p.includes(".jpeg") || p.includes(".gif") || p.includes(".svg") || p.includes(".webp")));
    });
    function a() {
      t("click"), t("close");
    }
    function l() {
      t("close");
    }
    function b(p) {
      const _ = p, x = getComputedStyle(_);
      _.style.width = x.width, _.style.minWidth = x.width, _.style.maxWidth = x.width;
    }
    return (p, _) => (d(), ee(s0, {
      name: "welcome-message-transition",
      onBeforeLeave: b
    }, {
      default: Ae(() => [
        p.show && r.value ? (d(), h("div", B6, [
          s("button", {
            class: "welcome-message-close",
            onClick: l
          }, "×"),
          s("div", {
            class: "welcome-message-content",
            onClick: a
          }, [
            o.value ? (d(), h("div", S6, [
              i.value ? (d(), h("img", {
                key: 0,
                src: o.value,
                alt: "Welcome icon",
                class: "welcome-message-icon-image"
              }, null, 8, L6)) : (d(), h("span", I6, Pe(o.value), 1))
            ])) : ue("", !0),
            r.value ? (d(), h("div", F6, Pe(r.value), 1)) : ue("", !0)
          ]),
          c.value ? (d(), h("div", $6)) : ue("", !0)
        ])) : ue("", !0)
      ]),
      _: 1
    }));
  }
}), R6 = { class: "chat-window-wrapper" }, N6 = { class: "chat-window" }, O6 = /* @__PURE__ */ be({
  __name: "ChatWindow",
  setup(e) {
    const { options: u } = Ue(), t = he(!1), n = he(!1), r = he(!1), o = W(() => {
      var b, p;
      return ((b = u.welcomeMessage) == null ? void 0 : b.enabled) !== !1 && ((p = u.welcomeMessage) == null ? void 0 : p.text);
    });
    function c() {
      t.value = !t.value, r.value = !0, t.value && (n.value = !1, du(() => {
        ge.emit("scrollToBottom");
      }));
    }
    function i() {
      t.value = !1;
    }
    function a() {
      n.value = !1, r.value = !0;
    }
    function l() {
      c();
    }
    return Qe(() => {
      ge.on("close", i), o.value && setTimeout(() => {
        !r.value && !t.value && (n.value = !0);
      }, 1e3);
    }), Et(() => {
      ge.off("close", i);
    }), (b, p) => (d(), h("div", R6, [
      me(s0, { name: "chat-window-transition" }, {
        default: Ae(() => [
          At(s("div", N6, [
            me(Ci)
          ], 512), [
            [vc, t.value]
          ])
        ]),
        _: 1
      }),
      me(T6, {
        show: n.value && !t.value && !r.value,
        onClose: a,
        onClick: l
      }, null, 8, ["show"]),
      s("div", {
        class: "chat-window-toggle",
        onClick: c
      }, [
        me(s0, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: Ae(() => [
            t.value ? (d(), ee(N(D6), {
              key: 1,
              height: "32",
              width: "32"
            })) : (d(), ee(N(E6), {
              key: 0,
              height: "32",
              width: "32"
            }))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), z6 = /* @__PURE__ */ be({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const u = e, t = {
      id: "typing",
      text: "",
      sender: "bot"
    }, n = he(), r = W(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${u.animation}`]: !0
    }));
    return Qe(() => {
      var o;
      (o = n.value) == null || o.scrollToView();
    }), (o, c) => (d(), ee(N(x0), {
      ref_key: "messageContainer",
      ref: n,
      class: C0(r.value),
      message: t,
      "data-test-id": "chat-message-typing"
    }, {
      default: Ae(() => [...c[0] || (c[0] = [
        s("div", { class: "chat-message-typing-body" }, [
          s("span", { class: "chat-message-typing-circle" }),
          s("span", { class: "chat-message-typing-circle" }),
          s("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])]),
      _: 1
    }, 8, ["class"]));
  }
}), H6 = {
  key: 0,
  class: "empty-container"
}, P6 = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, j6 = {
  key: 1,
  class: "chat-messages-list"
}, U6 = /* @__PURE__ */ be({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const u = E0(), t = he([]), { initialMessages: n, waitingForResponse: r } = u;
    return yc(
      () => t.value.length,
      () => {
        const o = t.value[t.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, c) => o.emptyText && N(n).length === 0 && o.messages.length === 0 ? (d(), h("div", H6, [
      s("div", P6, [
        me(gh, {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        me(Ah, {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: Ae(() => [
            k0(Pe(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (d(), h("div", j6, [
      (d(!0), h(Tu, null, Ru(N(n), (i) => (d(), ee(x0, {
        key: i.id,
        message: i
      }, null, 8, ["message"]))), 128)),
      (d(!0), h(Tu, null, Ru(o.messages, (i) => (d(), ee(x0, {
        key: i.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: t,
        message: i
      }, {
        beforeMessage: Ae(({ message: a }) => [
          He(o.$slots, "beforeMessage", v0({ ref_for: !0 }, { message: a }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      N(r) ? (d(), ee(z6, { key: 0 })) : ue("", !0)
    ]));
  }
}), q6 = { class: "chat-heading" }, V6 = { class: "chat-title-with-icon" }, Z6 = {
  key: 0,
  class: "chat-header-icon"
}, G6 = ["src"], W6 = {
  key: 1,
  class: "chat-header-icon-emoji"
}, K6 = ["title"], X6 = { key: 0 }, Ci = /* @__PURE__ */ be({
  __name: "Chat",
  setup(e) {
    const { t: u } = bu(), t = E0(), { messages: n, currentSessionId: r } = t, { options: o } = Ue(), c = W(() => o.mode === "window" && o.showWindowCloseButton), i = W(() => o.headerIcon), a = W(() => {
      const _ = i.value;
      return typeof _ == "string" && (_.startsWith("http://") || _.startsWith("https://") || _.startsWith("data:image/") || _.startsWith("/") || _.includes(".") && (_.includes(".png") || _.includes(".jpg") || _.includes(".jpeg") || _.includes(".gif") || _.includes(".svg") || _.includes(".webp")));
    });
    async function l() {
      t.startNewSession && (t.startNewSession(), du(() => {
        ge.emit("scrollToBottom");
      }));
    }
    async function b() {
      t.loadPreviousSession && (await t.loadPreviousSession(), du(() => {
        ge.emit("scrollToBottom");
      }));
    }
    function p() {
      ge.emit("close");
    }
    return Qe(async () => {
      await b(), !o.showWelcomeScreen && !r.value && await l();
    }), (_, x) => (d(), ee(ss, { class: "chat-wrapper" }, {
      header: Ae(() => [
        s("div", q6, [
          s("div", V6, [
            i.value ? (d(), h("div", Z6, [
              a.value ? (d(), h("img", {
                key: 0,
                src: i.value,
                alt: "Header icon",
                class: "chat-header-icon-image"
              }, null, 8, G6)) : (d(), h("span", W6, Pe(i.value), 1))
            ])) : ue("", !0),
            s("h1", null, Pe(N(u)("title")), 1)
          ]),
          c.value ? (d(), h("button", {
            key: 0,
            class: "chat-close-button",
            title: N(u)("closeButtonTooltip"),
            onClick: p
          }, [
            me(N(Yc), {
              height: "18",
              width: "18"
            })
          ], 8, K6)) : ue("", !0)
        ]),
        N(u)("subtitle") ? (d(), h("p", X6, Pe(N(u)("subtitle")), 1)) : ue("", !0)
      ]),
      footer: Ae(() => [
        N(r) ? (d(), ee(rs, { key: 0 })) : (d(), ee(d2, { key: 1 }))
      ]),
      default: Ae(() => [
        !N(r) && N(o).showWelcomeScreen ? (d(), ee(r2, {
          key: 0,
          "onClick:button": l
        })) : (d(), ee(U6, {
          key: 1,
          messages: N(n)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), J6 = /* @__PURE__ */ be({
  __name: "App",
  props: {},
  setup(e) {
    const { options: u } = Ue(), t = W(() => u.mode === "fullscreen");
    return Qe(() => {
      ze.registerLanguage("xml", Ot), ze.registerLanguage("javascript", Nt);
    }), (n, r) => t.value ? (d(), ee(Ci, {
      key: 0,
      class: "n8n-chat"
    })) : (d(), ee(O6, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function e8(e) {
  var r, o;
  const u = {
    ...nu,
    ...e,
    webhookConfig: {
      ...nu.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...nu.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(r = nu.i18n) == null ? void 0 : r.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...nu.theme,
      ...e == null ? void 0 : e.theme
    },
    welcomeMessage: {
      ...nu.welcomeMessage,
      ...e == null ? void 0 : e.welcomeMessage
    }
  }, t = u.target ?? Mc;
  typeof t == "string" && Nc(t), u.theme && (Oc(u.theme), jc(u.theme));
  const n = Ec(J6);
  return n.use(Uc, u), n.mount(t), n;
}
export {
  e8 as createChat
};
