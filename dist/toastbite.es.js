import { createBlock as u, openBlock as c, Teleport as p, createElementVNode as t, reactive as m, createElementBlock as _, Fragment as h, renderList as b, unref as a, normalizeClass as g, toDisplayString as d } from "vue";
const T = (o, e) => {
  const s = o.__vccOpts || o;
  for (const [r, i] of e)
    s[r] = i;
  return s;
}, k = {};
function x(o, e) {
  return c(), u(p, { to: "body" }, [
    e[0] || (e[0] = t("div", null, [
      t("div", null, [
        t("div", { class: "toast-top-left top-left" })
      ]),
      t("div", null, [
        t("div", { class: "toast-top-center top-center" })
      ]),
      t("div", null, [
        t("div", { class: "toast-top-right top-right" })
      ]),
      t("div", null, [
        t("div", { class: "toast-bottom-left bottom-left" })
      ]),
      t("div", null, [
        t("div", { class: "toast-bottom-center bottom-center" })
      ]),
      t("div", null, [
        t("div", { class: "toast-bottom-right bottom-right" })
      ])
    ], -1))
  ]);
}
const w = /* @__PURE__ */ T(k, [["render", x]]), l = m([]);
function y({ type: o, location: e, content: s, icon: r, iconSr: i }) {
  l.push({
    id: Date.now(),
    type: o,
    location: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"].includes(e) ? `.${e}` : ".bottom-right",
    content: s,
    icon: r,
    iconSr: i
  }), setTimeout(() => {
    var n;
    v((n = l[0]) == null ? void 0 : n.id);
  }, 5e3);
}
function v(o) {
  const e = l.findIndex((s) => s.id === o);
  e !== -1 && l.splice(e, 1);
}
function f() {
  return { toasts: l, addToast: y, removeToast: v };
}
const C = {
  id: "toast-default",
  class: "toast-card",
  role: "alert"
}, M = ["innerHTML"], B = { class: "toast-title" }, $ = { class: "toast-content" }, H = ["onClick"], L = {
  __name: "Toastify",
  setup(o) {
    const { removeToast: e, toasts: s } = f();
    return (r, i) => (c(!0), _(h, null, b(a(s), (n) => (c(), u(p, {
      key: n.id,
      to: n.location
    }, [
      t("div", C, [
        t("div", {
          class: g([n.iconColor, "toast-icon-wrap"]),
          innerHTML: n.icon
        }, null, 10, M),
        t("div", null, [
          t("div", B, d(n.title), 1),
          t("div", $, d(n.content), 1)
        ]),
        t("button", {
          type: "button",
          class: "toast-close",
          onClick: (z) => a(e)(n.id),
          "aria-label": "Close"
        }, i[0] || (i[0] = [
          t("span", { class: "sr-only" }, "Close", -1),
          t("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "icon icon-tabler icons-tabler-outline icon-tabler-x"
          }, [
            t("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            t("path", { d: "M18 6l-12 12" }),
            t("path", { d: "M6 6l12 12" })
          ], -1)
        ]), 8, H)
      ])
    ], 8, ["to"]))), 128));
  }
}, E = {
  install(o) {
    o.component("Toast", w), o.component("Toastify", L), o.config.globalProperties.$toast = f();
  }
};
export {
  w as Toast,
  L as Toastify,
  E as default,
  f as useToast
};
