import { defineComponent as o, openBlock as r, createElementBlock as l, Fragment as s, createElementVNode as n, toDisplayString as c } from "vue";
const i = /* @__PURE__ */ n("div", { class: "bg-custom-500" }, "Slave Component. Uses the master's tailwindcss config.", -1), u = /* @__PURE__ */ o({
  __name: "SlaveComponent",
  props: {
    greeting: null
  },
  setup(e) {
    return (t, p) => (r(), l(s, null, [
      i,
      n("div", null, "A typed prop (string): " + c(e.greeting), 1)
    ], 64));
  }
});
function a(e, t) {
  return e + t;
}
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sum: a
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as SlaveComponent,
  _ as utils
};
//# sourceMappingURL=vite-vue-starter-slave.mjs.map
