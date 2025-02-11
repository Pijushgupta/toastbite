import { createElementBlock as d, openBlock as l, createStaticVNode as b, reactive as g, Fragment as _, renderList as k, unref as p, createBlock as T, Teleport as x, createElementVNode as o, normalizeClass as w, toDisplayString as u, createVNode as m, createApp as C } from "vue";
const y = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, s] of t)
    n[c] = s;
  return n;
}, M = {};
function B(e, t) {
  return l(), d("div", null, t[0] || (t[0] = [
    b('<div><div class="toast-top-left top-left"></div></div><div><div class="toast-top-center top-center"></div></div><div><div class="toast-top-right top-right"></div></div><div><div class="toast-bottom-left bottom-left"></div></div><div><div class="toast-bottom-center bottom-center"></div></div><div><div class="toast-bottom-right bottom-right"></div></div>', 6)
  ]));
}
const $ = /* @__PURE__ */ y(M, [["render", B]]), r = g([]);
function E({ location: e, title: t, content: n, icon: c, iconColor: s, timeout: i = 2e3 }) {
  var a;
  r.push({
    id: Date.now(),
    iconColor: s || "toast-blue dark:toast-blue",
    location: ["top-left", "top-right", "top-center", "bottom-left", "bottom-right", "bottom-center"].includes(e) ? `.${e}` : ".bottom-right",
    title: t,
    content: n,
    icon: c,
    timeout: i
  }), ((a = r[0]) == null ? void 0 : a.timeout) !== !1 && setTimeout(() => {
    var v;
    f((v = r[0]) == null ? void 0 : v.id);
  }, r[0].timeout);
}
function f(e) {
  const t = r.findIndex((n) => n.id === e);
  t !== -1 && r.splice(t, 1);
}
function H() {
  return { toasts: r, addToast: E, removeToast: f };
}
const L = {
  id: "toast-default",
  class: "toast-card",
  role: "alert"
}, N = ["innerHTML"], V = { class: "toast-title" }, z = { class: "toast-content" }, D = ["onClick"], S = {
  __name: "Toastify",
  setup(e) {
    const { removeToast: t, toasts: n } = H();
    return (c, s) => (l(!0), d(_, null, k(p(n), (i) => (l(), T(x, {
      key: i.id,
      to: i.location
    }, [
      o("div", L, [
        o("div", {
          class: w([i.iconColor, "toast-icon-wrap"]),
          innerHTML: i.icon
        }, null, 10, N),
        o("div", null, [
          o("div", V, u(i.title), 1),
          o("div", z, u(i.content), 1)
        ]),
        o("button", {
          type: "button",
          class: "toast-close",
          onClick: (a) => p(t)(i.id),
          "aria-label": "Close"
        }, s[0] || (s[0] = [
          o("span", { class: "sr-only" }, "Close", -1),
          o("svg", {
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
            o("path", {
              stroke: "none",
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            o("path", { d: "M18 6l-12 12" }),
            o("path", { d: "M6 6l12 12" })
          ], -1)
        ]), 8, D)
      ])
    ], 8, ["to"]))), 128));
  }
}, j = {
  __name: "ToastTemplate",
  setup(e) {
    return (t, n) => (l(), d(_, null, [
      m($),
      m(S)
    ], 64));
  }
}, h = document.createElement("div");
document.body.appendChild(h);
app = C(j);
app.mount(h);
export {
  H as useToast
};
