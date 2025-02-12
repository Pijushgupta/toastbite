import { createElementBlock as d, openBlock as l, createStaticVNode as b, reactive as g, Fragment as m, renderList as k, unref as v, createBlock as T, Teleport as x, createElementVNode as e, normalizeClass as w, toDisplayString as u, createVNode as _, createApp as y } from "vue";
const C = (n, o) => {
  const s = n.__vccOpts || n;
  for (const [c, i] of o)
    s[c] = i;
  return s;
}, M = {};
function N(n, o) {
  return l(), d("div", null, o[0] || (o[0] = [
    b('<div><div class="toast-top-left top-left"></div></div><div><div class="toast-top-center top-center"></div></div><div><div class="toast-top-right top-right"></div></div><div><div class="toast-bottom-left bottom-left"></div></div><div><div class="toast-bottom-center bottom-center"></div></div><div><div class="toast-bottom-right bottom-right"></div></div>', 6)
  ]));
}
const B = /* @__PURE__ */ C(M, [["render", N]]), r = g([]);
function $({ location: n, title: o, content: s, icon: c, iconColor: i, timeout: t = 2e3 }) {
  var a;
  t = t === !0 ? 2e3 : typeof t == "number" && !isNaN(t) ? t : 2e3, r.push({
    id: Date.now(),
    iconColor: i || "toast-blue dark:toast-blue",
    location: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"].includes(n) ? `.${n}` : ".bottom-right",
    title: o,
    content: s,
    icon: c,
    timeout: t
  }), ((a = r[0]) == null ? void 0 : a.timeout) !== !1 && setTimeout(() => {
    var p;
    f((p = r[0]) == null ? void 0 : p.id);
  }, r[0].timeout);
}
function f(n) {
  const o = r.findIndex((s) => s.id === n);
  o !== -1 && r.splice(o, 1);
}
function E() {
  return { toasts: r, addToast: $, removeToast: f };
}
const H = {
  id: "toast-default",
  class: "toast-card",
  role: "alert"
}, L = ["innerHTML"], V = { class: "toast-title" }, z = { class: "toast-content" }, D = ["onClick"], S = {
  __name: "Toastify",
  setup(n) {
    const { removeToast: o, toasts: s } = E();
    return (c, i) => (l(!0), d(m, null, k(v(s), (t) => (l(), T(x, {
      key: t.id,
      to: t.location
    }, [
      e("div", H, [
        e("div", {
          class: w([t.iconColor, "toast-icon-wrap"]),
          innerHTML: t.icon
        }, null, 10, L),
        e("div", null, [
          e("div", V, u(t.title), 1),
          e("div", z, u(t.content), 1)
        ]),
        e("button", {
          type: "button",
          class: "toast-close",
          onClick: (a) => v(o)(t.id),
          "aria-label": "Close"
        }, i[0] || (i[0] = [
          e("span", { class: "sr-only" }, "Close", -1),
          e("svg", {
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
            e("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            e("path", { d: "M18 6l-12 12" }),
            e("path", { d: "M6 6l12 12" })
          ], -1)
        ]), 8, D)
      ])
    ], 8, ["to"]))), 128));
  }
}, j = {
  __name: "ToastTemplate",
  setup(n) {
    return (o, s) => (l(), d(m, null, [
      _(B),
      _(S)
    ], 64));
  }
}, h = document.createElement("div");
document.body.appendChild(h);
app = y(j);
app.mount(h);
export {
  E as useToast
};
