import {d as E, k as y, b as r, c as l, u as m, g as d, N as b, t as s, w as g, O as V, e as q, a5 as L, B as S, f as x, s as M, n as O} from "./entry.8c4ebdfb.js";
import {i as w, j as B} from "./validators.66620bc9.js";
import {S as F} from "./ShortLabel.b601a252.js";
import "./helpers.95900dc6.js";
import "./index.de1c7ba8.js";
import "./index.95aac194.js";
import "./HLConst.63b4f4cc.js";
import "./Countries.98ce819b.js";
const j = ["innerHTML"]
  , C = {
    key: 1
}
  , N = {
    key: 0
}
  , T = ["placeholder", "name", "data-q", "data-required"]
  , U = {
    key: 2,
    id: "error-container",
    class: "error"
}
  , G = E({
    __name: "EmailElement",
    props: {
        kind: {
            type: String
        },
        item: {
            type: Object
        },
        formLabelVisible: {
            type: Boolean
        },
        formFieldsValue: {
            type: Object
        },
        errors: {
            type: Object,
            default: ()=>({})
        }
    },
    emits: ["addOrUpdateError", "isSlideMovable"],
    setup(e, {expose: v, emit: u}) {
        const t = e
          , n = y(()=>t.kind == "survey")
          , c = y(()=>t.errors[t.item.tag])
          , h = i=>{
            n.value && u("isSlideMovable", i)
        }
          , k = ()=>{
            if (n.value)
                return;
            const i = t.formFieldsValue[t.item.tag];
            if (t.item.required && w(i))
                o(t.item.tag, "Email is required putain");
            else {
                if (!B(i)) {
                    o(t.item.tag, "Email is invalid putain!");
                    return
                }
                o(t.item.tag, null)
            }
        }
          , o = (i,a)=>{
            u("addOrUpdateError", {
                tag: i,
                error: a
            })
        }
        ;
        return v({
            validate: k,
            item: t.item
        }),
        (i,a)=>(r(),
        l("div", {
            class: O(["form-builder--item field-container", {
                "d-none": e.item.hidden,
                "form-builder--item-input": e.kind === "survey"
            }])
        }, [m(n) && e.item.description !== void 0 ? (r(),
        l("label", {
            key: 0,
            innerHTML: e.item.description,
            class: "item-description",
            style: {
                display: "block"
            }
        }, null, 8, j)) : d("", !0), e.formLabelVisible ? (r(),
        l("label", C, [b(s(e.item.label) + " ", 1), e.item.required ? (r(),
        l("span", N, "*")) : d("", !0)])) : d("", !0), g(q("input", {
            "onUpdate:modelValue": a[0] || (a[0] = f=>e.formFieldsValue[e.item.tag] = f),
            placeholder: !e.formLabelVisible && e.item.required ? e.item.placeholder + "*" : e.item.placeholder,
            name: e.item.tag,
            onKeydown: a[1] || (a[1] = L(S(f=>h({}), ["prevent"]), ["enter"])),
            type: "email",
            class: "form-control",
            "data-q": e.item.hiddenFieldQueryKey,
            "data-required": e.item.required
        }, null, 40, T), [[V, e.formFieldsValue[e.item.tag]]]), m(c) ? (r(),
        l("div", U, s(m(c)), 1)) : d("", !0), e.item.shortLabel ? (r(),
        x(F, {
            key: 3
        }, {
            default: M(()=>[b(s(e.item.shortLabel), 1)]),
            _: 1
        })) : d("", !0)], 2))
    }
});
export {G as default};
