/*! Package version @n8n/chat@1.0.2 */
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function L0(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {}, Rn = [], Rt = () => {
}, Si = () => !1, dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), B0 = (e) => e.startsWith("onUpdate:"), qe = Object.assign, I0 = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, t1 = Object.prototype.hasOwnProperty, ke = (e, t) => t1.call(e, t), Q = Array.isArray, Nn = (e) => fr(e) === "[object Map]", Di = (e) => fr(e) === "[object Set]", se = (e) => typeof e == "function", Ie = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", Li = (e) => (Le(e) || se(e)) && se(e.then) && se(e.catch), Bi = Object.prototype.toString, fr = (e) => Bi.call(e), n1 = (e) => fr(e).slice(8, -1), Ii = (e) => fr(e) === "[object Object]", F0 = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, uu = /* @__PURE__ */ L0(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, u1 = /-\w/g, wt = hr(
  (e) => e.replace(u1, (t) => t.slice(1).toUpperCase())
), r1 = /\B([A-Z])/g, gn = hr(
  (e) => e.replace(r1, "-$1").toLowerCase()
), pr = hr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pr = hr(
  (e) => e ? `on${pr(e)}` : ""
), dn = (e, t) => !Object.is(e, t), Hu = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fi = (e, t, n, u = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: n
  });
}, s0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, o1 = (e) => {
  const t = Ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xo;
const gr = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wn(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const u = e[n], r = Ie(u) ? l1(u) : Wn(u);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (Ie(e) || Le(e))
    return e;
}
const i1 = /;(?![^(]*\))/g, s1 = /:([^]+)/, c1 = /\/\*[^]*?\*\//g;
function l1(e) {
  const t = {};
  return e.replace(c1, "").split(i1).forEach((n) => {
    if (n) {
      const u = n.split(s1);
      u.length > 1 && (t[u[0].trim()] = u[1].trim());
    }
  }), t;
}
function An(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const u = An(e[n]);
      u && (t += u + " ");
    }
  else if (Le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ko(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ie(t) && (e.class = An(t)), n && (e.style = Wn(n)), e;
}
const a1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", d1 = /* @__PURE__ */ L0(a1);
function Ti(e) {
  return !!e || e === "";
}
const $i = (e) => !!(e && e.__v_isRef === !0), Nt = (e) => Ie(e) ? e : e == null ? "" : Q(e) || Le(e) && (e.toString === Bi || !se(e.toString)) ? $i(e) ? Nt(e.value) : JSON.stringify(e, Ri, 2) : String(e), Ri = (e, t) => $i(t) ? Ri(e, t.value) : Nn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [u, r], o) => (n[Hr(u, o) + " =>"] = r, n),
    {}
  )
} : Di(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Hr(n))
} : Xt(t) ? Hr(t) : Le(t) && !Q(t) && !Ii(t) ? String(t) : t, Hr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tt;
class f1 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = tt, !t && tt && (this.index = (tt.scopes || (tt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = tt;
      try {
        return tt = this, t();
      } finally {
        tt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = tt, tt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (tt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, u;
      for (n = 0, u = this.effects.length; n < u; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, u = this.cleanups.length; n < u; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, u = this.scopes.length; n < u; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ni() {
  return tt;
}
function h1(e, t = !1) {
  tt && tt.cleanups.push(e);
}
let Se;
const zr = /* @__PURE__ */ new WeakSet();
class Oi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, tt && tt.active && tt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zr.has(this) && (zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wo(this), zi(this);
    const t = Se, n = yt;
    Se = this, yt = !0;
    try {
      return this.fn();
    } finally {
      ji(this), Se = t, yt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        R0(t);
      this.deps = this.depsTail = void 0, wo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    c0(this) && this.run();
  }
  get dirty() {
    return c0(this);
  }
}
let Pi = 0, ru, ou;
function Hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ou, ou = e;
    return;
  }
  e.next = ru, ru = e;
}
function T0() {
  Pi++;
}
function $0() {
  if (--Pi > 0)
    return;
  if (ou) {
    let t = ou;
    for (ou = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ru; ) {
    let t = ru;
    for (ru = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (u) {
          e || (e = u);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ji(e) {
  let t, n = e.depsTail, u = n;
  for (; u; ) {
    const r = u.prevDep;
    u.version === -1 ? (u === n && (n = r), R0(u), p1(u)) : t = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = r;
  }
  e.deps = t, e.depsTail = n;
}
function c0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ui(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ui(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === lu) || (e.globalVersion = lu, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !c0(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Se, u = yt;
  Se = e, yt = !0;
  try {
    zi(e);
    const r = e.fn(e._value);
    (t.version === 0 || dn(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Se = n, yt = u, ji(e), e.flags &= -3;
  }
}
function R0(e, t = !1) {
  const { dep: n, prevSub: u, nextSub: r } = e;
  if (u && (u.nextSub = r, e.prevSub = void 0), r && (r.prevSub = u, e.nextSub = void 0), n.subs === e && (n.subs = u, !u && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      R0(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function p1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let yt = !0;
const Vi = [];
function Kt() {
  Vi.push(yt), yt = !1;
}
function Jt() {
  const e = Vi.pop();
  yt = e === void 0 ? !0 : e;
}
function wo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Se;
    Se = void 0;
    try {
      t();
    } finally {
      Se = n;
    }
  }
}
let lu = 0;
class g1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class N0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Se || !yt || Se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Se)
      n = this.activeLink = new g1(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, qi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const u = n.nextDep;
      u.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = u), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = u);
    }
    return n;
  }
  trigger(t) {
    this.version++, lu++, this.notify(t);
  }
  notify(t) {
    T0();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      $0();
    }
  }
}
function qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let u = t.deps; u; u = u.nextDep)
        qi(u);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ju = /* @__PURE__ */ new WeakMap(), En = Symbol(
  ""
), l0 = Symbol(
  ""
), au = Symbol(
  ""
);
function nt(e, t, n) {
  if (yt && Se) {
    let u = Ju.get(e);
    u || Ju.set(e, u = /* @__PURE__ */ new Map());
    let r = u.get(n);
    r || (u.set(n, r = new N0()), r.map = u, r.key = n), r.track();
  }
}
function Zt(e, t, n, u, r, o) {
  const i = Ju.get(e);
  if (!i) {
    lu++;
    return;
  }
  const s = (c) => {
    c && c.trigger();
  };
  if (T0(), t === "clear")
    i.forEach(s);
  else {
    const c = Q(e), l = c && F0(n);
    if (c && n === "length") {
      const d = Number(u);
      i.forEach((f, g) => {
        (g === "length" || g === au || !Xt(g) && g >= d) && s(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && s(i.get(n)), l && s(i.get(au)), t) {
        case "add":
          c ? l && s(i.get("length")) : (s(i.get(En)), Nn(e) && s(i.get(l0)));
          break;
        case "delete":
          c || (s(i.get(En)), Nn(e) && s(i.get(l0)));
          break;
        case "set":
          Nn(e) && s(i.get(En));
          break;
      }
  }
  $0();
}
function b1(e, t) {
  const n = Ju.get(e);
  return n && n.get(t);
}
function Bn(e) {
  const t = _e(e);
  return t === e ? t : (nt(t, "iterate", au), xt(e) ? t : t.map(Ge));
}
function br(e) {
  return nt(e = _e(e), "iterate", au), e;
}
const m1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return jr(this, Symbol.iterator, Ge);
  },
  concat(...e) {
    return Bn(this).concat(
      ...e.map((t) => Q(t) ? Bn(t) : t)
    );
  },
  entries() {
    return jr(this, "entries", (e) => (e[1] = Ge(e[1]), e));
  },
  every(e, t) {
    return zt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zt(this, "filter", e, t, (n) => n.map(Ge), arguments);
  },
  find(e, t) {
    return zt(this, "find", e, t, Ge, arguments);
  },
  findIndex(e, t) {
    return zt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zt(this, "findLast", e, t, Ge, arguments);
  },
  findLastIndex(e, t) {
    return zt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ur(this, "includes", e);
  },
  indexOf(...e) {
    return Ur(this, "indexOf", e);
  },
  join(e) {
    return Bn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ur(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Yn(this, "pop");
  },
  push(...e) {
    return Yn(this, "push", e);
  },
  reduce(e, ...t) {
    return vo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vo(this, "reduceRight", e, t);
  },
  shift() {
    return Yn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Yn(this, "splice", e);
  },
  toReversed() {
    return Bn(this).toReversed();
  },
  toSorted(e) {
    return Bn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Bn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Yn(this, "unshift", e);
  },
  values() {
    return jr(this, "values", Ge);
  }
};
function jr(e, t, n) {
  const u = br(e), r = u[t]();
  return u !== e && !xt(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const _1 = Array.prototype;
function zt(e, t, n, u, r, o) {
  const i = br(e), s = i !== e && !xt(e), c = i[t];
  if (c !== _1[t]) {
    const f = c.apply(e, o);
    return s ? Ge(f) : f;
  }
  let l = n;
  i !== e && (s ? l = function(f, g) {
    return n.call(this, Ge(f), g, e);
  } : n.length > 2 && (l = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const d = c.call(i, l, u);
  return s && r ? r(d) : d;
}
function vo(e, t, n, u) {
  const r = br(e);
  let o = n;
  return r !== e && (xt(e) ? n.length > 3 && (o = function(i, s, c) {
    return n.call(this, i, s, c, e);
  }) : o = function(i, s, c) {
    return n.call(this, i, Ge(s), c, e);
  }), r[t](o, ...u);
}
function Ur(e, t, n) {
  const u = _e(e);
  nt(u, "iterate", au);
  const r = u[t](...n);
  return (r === -1 || r === !1) && j0(n[0]) ? (n[0] = _e(n[0]), u[t](...n)) : r;
}
function Yn(e, t, n = []) {
  Kt(), T0();
  const u = _e(e)[t].apply(e, n);
  return $0(), Jt(), u;
}
const x1 = /* @__PURE__ */ L0("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
);
function k1(e) {
  Xt(e) || (e = String(e));
  const t = _e(this);
  return nt(t, "has", e), t.hasOwnProperty(e);
}
class Wi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, u) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return u === (r ? o ? L1 : Xi : o ? Ji : Ki).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(u) ? t : void 0;
    const i = Q(t);
    if (!r) {
      let c;
      if (i && (c = m1[n]))
        return c;
      if (n === "hasOwnProperty")
        return k1;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ve(t) ? t : u
    );
    return (Xt(n) ? Zi.has(n) : x1(n)) || (r || nt(t, "get", n), o) ? s : Ve(s) ? i && F0(n) ? s : s.value : Le(s) ? r ? H0(s) : P0(s) : s;
  }
}
class Gi extends Wi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, u, r) {
    let o = t[n];
    if (!this._isShallow) {
      const c = fn(o);
      if (!xt(u) && !fn(u) && (o = _e(o), u = _e(u)), !Q(t) && Ve(o) && !Ve(u))
        return c || (o.value = u), !0;
    }
    const i = Q(t) && F0(n) ? Number(n) < t.length : ke(t, n), s = Reflect.set(
      t,
      n,
      u,
      Ve(t) ? t : r
    );
    return t === _e(r) && (i ? dn(u, o) && Zt(t, "set", n, u) : Zt(t, "add", n, u)), s;
  }
  deleteProperty(t, n) {
    const u = ke(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && u && Zt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const u = Reflect.has(t, n);
    return (!Xt(n) || !Zi.has(n)) && nt(t, "has", n), u;
  }
  ownKeys(t) {
    return nt(
      t,
      "iterate",
      Q(t) ? "length" : En
    ), Reflect.ownKeys(t);
  }
}
class w1 extends Wi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const v1 = /* @__PURE__ */ new Gi(), C1 = /* @__PURE__ */ new w1(), y1 = /* @__PURE__ */ new Gi(!0);
const a0 = (e) => e, Fu = (e) => Reflect.getPrototypeOf(e);
function E1(e, t, n) {
  return function(...u) {
    const r = this.__v_raw, o = _e(r), i = Nn(o), s = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, l = r[e](...u), d = n ? a0 : t ? Xu : Ge;
    return !t && nt(
      o,
      "iterate",
      c ? l0 : En
    ), {
      // iterator protocol
      next() {
        const { value: f, done: g } = l.next();
        return g ? { value: f, done: g } : {
          value: s ? [d(f[0]), d(f[1])] : d(f),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Tu(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function A1(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = _e(o), s = _e(r);
      e || (dn(r, s) && nt(i, "get", r), nt(i, "get", s));
      const { has: c } = Fu(i), l = t ? a0 : e ? Xu : Ge;
      if (c.call(i, r))
        return l(o.get(r));
      if (c.call(i, s))
        return l(o.get(s));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && nt(_e(r), "iterate", En), r.size;
    },
    has(r) {
      const o = this.__v_raw, i = _e(o), s = _e(r);
      return e || (dn(r, s) && nt(i, "has", r), nt(i, "has", s)), r === s ? o.has(r) : o.has(r) || o.has(s);
    },
    forEach(r, o) {
      const i = this, s = i.__v_raw, c = _e(s), l = t ? a0 : e ? Xu : Ge;
      return !e && nt(c, "iterate", En), s.forEach((d, f) => r.call(o, l(d), l(f), i));
    }
  };
  return qe(
    n,
    e ? {
      add: Tu("add"),
      set: Tu("set"),
      delete: Tu("delete"),
      clear: Tu("clear")
    } : {
      add(r) {
        !t && !xt(r) && !fn(r) && (r = _e(r));
        const o = _e(this);
        return Fu(o).has.call(o, r) || (o.add(r), Zt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !xt(o) && !fn(o) && (o = _e(o));
        const i = _e(this), { has: s, get: c } = Fu(i);
        let l = s.call(i, r);
        l || (r = _e(r), l = s.call(i, r));
        const d = c.call(i, r);
        return i.set(r, o), l ? dn(o, d) && Zt(i, "set", r, o) : Zt(i, "add", r, o), this;
      },
      delete(r) {
        const o = _e(this), { has: i, get: s } = Fu(o);
        let c = i.call(o, r);
        c || (r = _e(r), c = i.call(o, r)), s && s.call(o, r);
        const l = o.delete(r);
        return c && Zt(o, "delete", r, void 0), l;
      },
      clear() {
        const r = _e(this), o = r.size !== 0, i = r.clear();
        return o && Zt(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = E1(r, e, t);
  }), n;
}
function O0(e, t) {
  const n = A1(e, t);
  return (u, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? u : Reflect.get(
    ke(n, r) && r in u ? n : u,
    r,
    o
  );
}
const M1 = {
  get: /* @__PURE__ */ O0(!1, !1)
}, S1 = {
  get: /* @__PURE__ */ O0(!1, !0)
}, D1 = {
  get: /* @__PURE__ */ O0(!0, !1)
};
const Ki = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Xi = /* @__PURE__ */ new WeakMap(), L1 = /* @__PURE__ */ new WeakMap();
function B1(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function I1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : B1(n1(e));
}
function P0(e) {
  return fn(e) ? e : z0(
    e,
    !1,
    v1,
    M1,
    Ki
  );
}
function F1(e) {
  return z0(
    e,
    !1,
    y1,
    S1,
    Ji
  );
}
function H0(e) {
  return z0(
    e,
    !0,
    C1,
    D1,
    Xi
  );
}
function z0(e, t, n, u, r) {
  if (!Le(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = I1(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const s = new Proxy(
    e,
    o === 2 ? u : n
  );
  return r.set(e, s), s;
}
function On(e) {
  return fn(e) ? On(e.__v_raw) : !!(e && e.__v_isReactive);
}
function fn(e) {
  return !!(e && e.__v_isReadonly);
}
function xt(e) {
  return !!(e && e.__v_isShallow);
}
function j0(e) {
  return e ? !!e.__v_raw : !1;
}
function _e(e) {
  const t = e && e.__v_raw;
  return t ? _e(t) : e;
}
function w(e) {
  return !ke(e, "__v_skip") && Object.isExtensible(e) && Fi(e, "__v_skip", !0), e;
}
const Ge = (e) => Le(e) ? P0(e) : e, Xu = (e) => Le(e) ? H0(e) : e;
function Ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Je(e) {
  return Yi(e, !1);
}
function T1(e) {
  return Yi(e, !0);
}
function Yi(e, t) {
  return Ve(e) ? e : new $1(e, t);
}
class $1 {
  constructor(t, n) {
    this.dep = new N0(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : _e(t), this._value = n ? t : Ge(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, u = this.__v_isShallow || xt(t) || fn(t);
    t = u ? t : _e(t), dn(t, n) && (this._rawValue = t, this._value = u ? t : Ge(t), this.dep.trigger());
  }
}
function te(e) {
  return Ve(e) ? e.value : e;
}
const R1 = {
  get: (e, t, n) => t === "__v_raw" ? e : te(Reflect.get(e, t, n)),
  set: (e, t, n, u) => {
    const r = e[t];
    return Ve(r) && !Ve(n) ? (r.value = n, !0) : Reflect.set(e, t, n, u);
  }
};
function Qi(e) {
  return On(e) ? e : new Proxy(e, R1);
}
function N1(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = P1(e, n);
  return t;
}
class O1 {
  constructor(t, n, u) {
    this._object = t, this._key = n, this._defaultValue = u, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return b1(_e(this._object), this._key);
  }
}
function P1(e, t, n) {
  const u = e[t];
  return Ve(u) ? u : new O1(e, t, n);
}
class H1 {
  constructor(t, n, u) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new N0(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = lu - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Se !== this)
      return Hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ui(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function z1(e, t, n = !1) {
  let u, r;
  return se(e) ? u = e : (u = e.get, r = e.set), new H1(u, r, n);
}
const $u = {}, Yu = /* @__PURE__ */ new WeakMap();
let Cn;
function j1(e, t = !1, n = Cn) {
  if (n) {
    let u = Yu.get(n);
    u || Yu.set(n, u = []), u.push(e);
  }
}
function U1(e, t, n = we) {
  const { immediate: u, deep: r, once: o, scheduler: i, augmentJob: s, call: c } = n, l = (E) => r ? E : xt(E) || r === !1 || r === 0 ? Wt(E, 1) : Wt(E);
  let d, f, g, x, _ = !1, C = !1;
  if (Ve(e) ? (f = () => e.value, _ = xt(e)) : On(e) ? (f = () => l(e), _ = !0) : Q(e) ? (C = !0, _ = e.some((E) => On(E) || xt(E)), f = () => e.map((E) => {
    if (Ve(E))
      return E.value;
    if (On(E))
      return l(E);
    if (se(E))
      return c ? c(E, 2) : E();
  })) : se(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
    if (g) {
      Kt();
      try {
        g();
      } finally {
        Jt();
      }
    }
    const E = Cn;
    Cn = d;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      Cn = E;
    }
  } : f = Rt, t && r) {
    const E = f, T = r === !0 ? 1 / 0 : r;
    f = () => Wt(E(), T);
  }
  const N = Ni(), F = () => {
    d.stop(), N && N.active && I0(N.effects, d);
  };
  if (o && t) {
    const E = t;
    t = (...T) => {
      E(...T), F();
    };
  }
  let S = C ? new Array(e.length).fill($u) : $u;
  const B = (E) => {
    if (!(!(d.flags & 1) || !d.dirty && !E))
      if (t) {
        const T = d.run();
        if (r || _ || (C ? T.some((j, ue) => dn(j, S[ue])) : dn(T, S))) {
          g && g();
          const j = Cn;
          Cn = d;
          try {
            const ue = [
              T,
              // pass undefined as the old value when it's changed for the first time
              S === $u ? void 0 : C && S[0] === $u ? [] : S,
              x
            ];
            S = T, c ? c(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            Cn = j;
          }
        }
      } else
        d.run();
  };
  return s && s(B), d = new Oi(f), d.scheduler = i ? () => i(B, !1) : B, x = (E) => j1(E, !1, d), g = d.onStop = () => {
    const E = Yu.get(d);
    if (E) {
      if (c)
        c(E, 4);
      else
        for (const T of E) T();
      Yu.delete(d);
    }
  }, t ? u ? B(!0) : S = d.run() : i ? i(B.bind(null, !0), !0) : d.run(), F.pause = d.pause.bind(d), F.resume = d.resume.bind(d), F.stop = F, F;
}
function Wt(e, t = 1 / 0, n) {
  if (t <= 0 || !Le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Ve(e))
    Wt(e.value, t, n);
  else if (Q(e))
    for (let u = 0; u < e.length; u++)
      Wt(e[u], t, n);
  else if (Di(e) || Nn(e))
    e.forEach((u) => {
      Wt(u, t, n);
    });
  else if (Ii(e)) {
    for (const u in e)
      Wt(e[u], t, n);
    for (const u of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, u) && Wt(e[u], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wu(e, t, n, u) {
  try {
    return u ? e(...u) : e();
  } catch (r) {
    mr(r, t, n);
  }
}
function Et(e, t, n, u) {
  if (se(e)) {
    const r = wu(e, t, n, u);
    return r && Li(r) && r.catch((o) => {
      mr(o, t, n);
    }), r;
  }
  if (Q(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Et(e[o], t, n, u));
    return r;
  }
}
function mr(e, t, n, u = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || we;
  if (t) {
    let s = t.parent;
    const c = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const d = s.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, c, l) === !1)
            return;
      }
      s = s.parent;
    }
    if (o) {
      Kt(), wu(o, null, 10, [
        e,
        c,
        l
      ]), Jt();
      return;
    }
  }
  V1(e, n, r, u, i);
}
function V1(e, t, n, u = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const lt = [];
let It = -1;
const Pn = [];
let on = null, Tn = 0;
const es = /* @__PURE__ */ Promise.resolve();
let Qu = null;
function Vn(e) {
  const t = Qu || es;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function q1(e) {
  let t = It + 1, n = lt.length;
  for (; t < n; ) {
    const u = t + n >>> 1, r = lt[u], o = du(r);
    o < e || o === e && r.flags & 2 ? t = u + 1 : n = u;
  }
  return t;
}
function U0(e) {
  if (!(e.flags & 1)) {
    const t = du(e), n = lt[lt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= du(n) ? lt.push(e) : lt.splice(q1(t), 0, e), e.flags |= 1, ts();
  }
}
function ts() {
  Qu || (Qu = es.then(us));
}
function Z1(e) {
  Q(e) ? Pn.push(...e) : on && e.id === -1 ? on.splice(Tn + 1, 0, e) : e.flags & 1 || (Pn.push(e), e.flags |= 1), ts();
}
function Co(e, t, n = It + 1) {
  for (; n < lt.length; n++) {
    const u = lt[n];
    if (u && u.flags & 2) {
      if (e && u.id !== e.uid)
        continue;
      lt.splice(n, 1), n--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function ns(e) {
  if (Pn.length) {
    const t = [...new Set(Pn)].sort(
      (n, u) => du(n) - du(u)
    );
    if (Pn.length = 0, on) {
      on.push(...t);
      return;
    }
    for (on = t, Tn = 0; Tn < on.length; Tn++) {
      const n = on[Tn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    on = null, Tn = 0;
  }
}
const du = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function us(e) {
  try {
    for (It = 0; It < lt.length; It++) {
      const t = lt[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), wu(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < lt.length; It++) {
      const t = lt[It];
      t && (t.flags &= -2);
    }
    It = -1, lt.length = 0, ns(), Qu = null, (lt.length || Pn.length) && us();
  }
}
let Xe = null, rs = null;
function er(e) {
  const t = Xe;
  return Xe = e, rs = e && e.type.__scopeId || null, t;
}
function kt(e, t = Xe, n) {
  if (!t || e._n)
    return e;
  const u = (...r) => {
    u._d && rr(-1);
    const o = er(t);
    let i;
    try {
      i = e(...r);
    } finally {
      er(o), u._d && rr(1);
    }
    return i;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function os(e, t) {
  if (Xe === null)
    return e;
  const n = Er(Xe), u = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, s, c = we] = t[r];
    o && (se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Wt(i), u.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: s,
      modifiers: c
    }));
  }
  return e;
}
function xn(e, t, n, u) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    o && (s.oldValue = o[i].value);
    let c = s.dir[u];
    c && (Kt(), Et(c, n, 8, [
      e.el,
      s,
      e,
      t
    ]), Jt());
  }
}
const W1 = Symbol("_vte"), is = (e) => e.__isTeleport, qt = Symbol("_leaveCb"), Ru = Symbol("_enterCb");
function G1() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qt(() => {
    e.isMounted = !0;
  }), V0(() => {
    e.isUnmounting = !0;
  }), e;
}
const _t = [Function, Array], ss = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: _t,
  onEnter: _t,
  onAfterEnter: _t,
  onEnterCancelled: _t,
  // leave
  onBeforeLeave: _t,
  onLeave: _t,
  onAfterLeave: _t,
  onLeaveCancelled: _t,
  // appear
  onBeforeAppear: _t,
  onAppear: _t,
  onAfterAppear: _t,
  onAppearCancelled: _t
}, cs = (e) => {
  const t = e.subTree;
  return t.component ? cs(t.component) : t;
}, K1 = {
  name: "BaseTransition",
  props: ss,
  setup(e, { slots: t }) {
    const n = K0(), u = G1();
    return () => {
      const r = t.default && ds(t.default(), !0);
      if (!r || !r.length)
        return;
      const o = ls(r), i = _e(e), { mode: s } = i;
      if (u.isLeaving)
        return Vr(o);
      const c = yo(o);
      if (!c)
        return Vr(o);
      let l = d0(
        c,
        i,
        u,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (f) => l = f
      );
      c.type !== rt && fu(c, l);
      let d = n.subTree && yo(n.subTree);
      if (d && d.type !== rt && !yn(d, c) && cs(n).type !== rt) {
        let f = d0(
          d,
          i,
          u,
          n
        );
        if (fu(d, f), s === "out-in" && c.type !== rt)
          return u.isLeaving = !0, f.afterLeave = () => {
            u.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, d = void 0;
          }, Vr(o);
        s === "in-out" && c.type !== rt ? f.delayLeave = (g, x, _) => {
          const C = as(
            u,
            d
          );
          C[String(d.key)] = d, g[qt] = () => {
            x(), g[qt] = void 0, delete l.delayedLeave, d = void 0;
          }, l.delayedLeave = () => {
            _(), delete l.delayedLeave, d = void 0;
          };
        } : d = void 0;
      } else d && (d = void 0);
      return o;
    };
  }
};
function ls(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== rt) {
        t = n;
        break;
      }
  }
  return t;
}
const J1 = K1;
function as(e, t) {
  const { leavingVNodes: n } = e;
  let u = n.get(t.type);
  return u || (u = /* @__PURE__ */ Object.create(null), n.set(t.type, u)), u;
}
function d0(e, t, n, u, r) {
  const {
    appear: o,
    mode: i,
    persisted: s = !1,
    onBeforeEnter: c,
    onEnter: l,
    onAfterEnter: d,
    onEnterCancelled: f,
    onBeforeLeave: g,
    onLeave: x,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: N,
    onAppear: F,
    onAfterAppear: S,
    onAppearCancelled: B
  } = t, E = String(e.key), T = as(n, e), j = (J, ce) => {
    J && Et(
      J,
      u,
      9,
      ce
    );
  }, ue = (J, ce) => {
    const he = ce[1];
    j(J, ce), Q(J) ? J.every((U) => U.length <= 1) && he() : J.length <= 1 && he();
  }, de = {
    mode: i,
    persisted: s,
    beforeEnter(J) {
      let ce = c;
      if (!n.isMounted)
        if (o)
          ce = N || c;
        else
          return;
      J[qt] && J[qt](
        !0
        /* cancelled */
      );
      const he = T[E];
      he && yn(e, he) && he.el[qt] && he.el[qt](), j(ce, [J]);
    },
    enter(J) {
      let ce = l, he = d, U = f;
      if (!n.isMounted)
        if (o)
          ce = F || l, he = S || d, U = B || f;
        else
          return;
      let be = !1;
      const pe = J[Ru] = (Z) => {
        be || (be = !0, Z ? j(U, [J]) : j(he, [J]), de.delayedLeave && de.delayedLeave(), J[Ru] = void 0);
      };
      ce ? ue(ce, [J, pe]) : pe();
    },
    leave(J, ce) {
      const he = String(e.key);
      if (J[Ru] && J[Ru](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ce();
      j(g, [J]);
      let U = !1;
      const be = J[qt] = (pe) => {
        U || (U = !0, ce(), pe ? j(C, [J]) : j(_, [J]), J[qt] = void 0, T[he] === e && delete T[he]);
      };
      T[he] = e, x ? ue(x, [J, be]) : be();
    },
    clone(J) {
      const ce = d0(
        J,
        t,
        n,
        u,
        r
      );
      return r && r(ce), ce;
    }
  };
  return de;
}
function Vr(e) {
  if (_r(e))
    return e = hn(e), e.children = null, e;
}
function yo(e) {
  if (!_r(e))
    return is(e.type) && e.children ? ls(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function fu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ds(e, t = !1, n) {
  let u = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const s = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ke ? (i.patchFlag & 128 && r++, u = u.concat(
      ds(i.children, t, s)
    )) : (t || i.type !== rt) && u.push(s != null ? hn(i, { key: s }) : i);
  }
  if (r > 1)
    for (let o = 0; o < u.length; o++)
      u[o].patchFlag = -2;
  return u;
}
// @__NO_SIDE_EFFECTS__
function it(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    qe({ name: e.name }, t, { setup: e })
  ) : e;
}
function fs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const tr = /* @__PURE__ */ new WeakMap();
function iu(e, t, n, u, r = !1) {
  if (Q(e)) {
    e.forEach(
      (_, C) => iu(
        _,
        t && (Q(t) ? t[C] : t),
        n,
        u,
        r
      )
    );
    return;
  }
  if (Hn(u) && !r) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && iu(e, t, n, u.component.subTree);
    return;
  }
  const o = u.shapeFlag & 4 ? Er(u.component) : u.el, i = r ? null : o, { i: s, r: c } = e, l = t && t.r, d = s.refs === we ? s.refs = {} : s.refs, f = s.setupState, g = _e(f), x = f === we ? Si : (_) => ke(g, _);
  if (l != null && l !== c) {
    if (Eo(t), Ie(l))
      d[l] = null, x(l) && (f[l] = null);
    else if (Ve(l)) {
      l.value = null;
      const _ = t;
      _.k && (d[_.k] = null);
    }
  }
  if (se(c))
    wu(c, s, 12, [i, d]);
  else {
    const _ = Ie(c), C = Ve(c);
    if (_ || C) {
      const N = () => {
        if (e.f) {
          const F = _ ? x(c) ? f[c] : d[c] : c.value;
          if (r)
            Q(F) && I0(F, o);
          else if (Q(F))
            F.includes(o) || F.push(o);
          else if (_)
            d[c] = [o], x(c) && (f[c] = d[c]);
          else {
            const S = [o];
            c.value = S, e.k && (d[e.k] = S);
          }
        } else _ ? (d[c] = i, x(c) && (f[c] = i)) : C && (c.value = i, e.k && (d[e.k] = i));
      };
      if (i) {
        const F = () => {
          N(), tr.delete(e);
        };
        F.id = -1, tr.set(e, F), ft(F, n);
      } else
        Eo(e), N();
    }
  }
}
function Eo(e) {
  const t = tr.get(e);
  t && (t.flags |= 8, tr.delete(e));
}
gr().requestIdleCallback;
gr().cancelIdleCallback;
const Hn = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function X1(e, t) {
  hs(e, "a", t);
}
function Y1(e, t) {
  hs(e, "da", t);
}
function hs(e, t, n = ot) {
  const u = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (xr(t, u, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      _r(r.parent.vnode) && Q1(u, t, n, r), r = r.parent;
  }
}
function Q1(e, t, n, u) {
  const r = xr(
    t,
    e,
    u,
    !0
    /* prepend */
  );
  kr(() => {
    I0(u[t], r);
  }, n);
}
function xr(e, t, n = ot, u = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Kt();
      const s = vu(n), c = Et(t, n, e, i);
      return s(), Jt(), c;
    });
    return u ? r.unshift(o) : r.push(o), o;
  }
}
const Yt = (e) => (t, n = ot) => {
  (!gu || e === "sp") && xr(e, (...u) => t(...u), n);
}, ed = Yt("bm"), Qt = Yt("m"), td = Yt(
  "bu"
), nd = Yt("u"), V0 = Yt(
  "bum"
), kr = Yt("um"), ud = Yt(
  "sp"
), rd = Yt("rtg"), od = Yt("rtc");
function id(e, t = ot) {
  xr("ec", e, t);
}
const sd = "components", ps = Symbol.for("v-ndc");
function q0(e) {
  return Ie(e) ? cd(sd, e, !1) || e : e || ps;
}
function cd(e, t, n = !0, u = !1) {
  const r = Xe || ot;
  if (r) {
    const o = r.type;
    {
      const s = Gd(
        o,
        !1
      );
      if (s && (s === t || s === wt(t) || s === pr(wt(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ao(r[e] || o[e], t) || // global registration
      Ao(r.appContext[e], t)
    );
    return !i && u ? o : i;
  }
}
function Ao(e, t) {
  return e && (e[t] || e[wt(t)] || e[pr(wt(t))]);
}
function nr(e, t, n, u) {
  let r;
  const o = n, i = Q(e);
  if (i || Ie(e)) {
    const s = i && On(e);
    let c = !1, l = !1;
    s && (c = !xt(e), l = fn(e), e = br(e)), r = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      r[d] = t(
        c ? l ? Xu(Ge(e[d])) : Ge(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let s = 0; s < e; s++)
      r[s] = t(s + 1, s, void 0, o);
  } else if (Le(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (s, c) => t(s, c, void 0, o)
      );
    else {
      const s = Object.keys(e);
      r = new Array(s.length);
      for (let c = 0, l = s.length; c < l; c++) {
        const d = s[c];
        r[c] = t(e[d], d, c, o);
      }
    }
  else
    r = [];
  return r;
}
function Gt(e, t, n = {}, u, r) {
  if (Xe.ce || Xe.parent && Hn(Xe.parent) && Xe.parent.ce)
    return t !== "default" && (n.name = t), h(), Be(
      Ke,
      null,
      [Ee("slot", n, u && u())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), h();
  const i = o && gs(o(n)), s = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, c = Be(
    Ke,
    {
      key: (s && !Xt(s) ? s : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && u ? "_fb" : "")
    },
    i || (u ? u() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c;
}
function gs(e) {
  return e.some((t) => pu(t) ? !(t.type === rt || t.type === Ke && !gs(t.children)) : !0) ? e : null;
}
const f0 = (e) => e ? Rs(e) ? Er(e) : f0(e.parent) : null, su = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => f0(e.parent),
    $root: (e) => f0(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ms(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      U0(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vn.bind(e.proxy)),
    $watch: (e) => Ld.bind(e)
  })
), qr = (e, t) => e !== we && !e.__isScriptSetup && ke(e, t), ld = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: u, data: r, props: o, accessCache: i, type: s, appContext: c } = e;
    let l;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return u[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (qr(u, t))
          return i[t] = 1, u[t];
        if (r !== we && ke(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && ke(l, t)
        )
          return i[t] = 3, o[t];
        if (n !== we && ke(n, t))
          return i[t] = 4, n[t];
        h0 && (i[t] = 0);
      }
    }
    const d = su[t];
    let f, g;
    if (d)
      return t === "$attrs" && nt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (f = s.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== we && ke(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = c.config.globalProperties, ke(g, t)
    )
      return g[t];
  },
  set({ _: e }, t, n) {
    const { data: u, setupState: r, ctx: o } = e;
    return qr(r, t) ? (r[t] = n, !0) : u !== we && ke(u, t) ? (u[t] = n, !0) : ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: u, appContext: r, propsOptions: o, type: i }
  }, s) {
    let c, l;
    return !!(n[s] || e !== we && s[0] !== "$" && ke(e, s) || qr(t, s) || (c = o[0]) && ke(c, s) || ke(u, s) || ke(su, s) || ke(r.config.globalProperties, s) || (l = i.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Mo(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let h0 = !0;
function ad(e) {
  const t = ms(e), n = e.proxy, u = e.ctx;
  h0 = !1, t.beforeCreate && So(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: s,
    provide: c,
    inject: l,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: g,
    beforeUpdate: x,
    updated: _,
    activated: C,
    deactivated: N,
    beforeDestroy: F,
    beforeUnmount: S,
    destroyed: B,
    unmounted: E,
    render: T,
    renderTracked: j,
    renderTriggered: ue,
    errorCaptured: de,
    serverPrefetch: J,
    // public API
    expose: ce,
    inheritAttrs: he,
    // assets
    components: U,
    directives: be,
    filters: pe
  } = t;
  if (l && dd(l, u, null), i)
    for (const oe in i) {
      const q = i[oe];
      se(q) && (u[oe] = q.bind(n));
    }
  if (r) {
    const oe = r.call(n, n);
    Le(oe) && (e.data = P0(oe));
  }
  if (h0 = !0, o)
    for (const oe in o) {
      const q = o[oe], Ce = se(q) ? q.bind(n, n) : se(q.get) ? q.get.bind(n, n) : Rt, He = !se(q) && se(q.set) ? q.set.bind(n) : Rt, Oe = ye({
        get: Ce,
        set: He
      });
      Object.defineProperty(u, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Re) => Oe.value = Re
      });
    }
  if (s)
    for (const oe in s)
      bs(s[oe], u, n, oe);
  if (c) {
    const oe = se(c) ? c.call(n) : c;
    Reflect.ownKeys(oe).forEach((q) => {
      md(q, oe[q]);
    });
  }
  d && So(d, e, "c");
  function re(oe, q) {
    Q(q) ? q.forEach((Ce) => oe(Ce.bind(n))) : q && oe(q.bind(n));
  }
  if (re(ed, f), re(Qt, g), re(td, x), re(nd, _), re(X1, C), re(Y1, N), re(id, de), re(od, j), re(rd, ue), re(V0, S), re(kr, E), re(ud, J), Q(ce))
    if (ce.length) {
      const oe = e.exposed || (e.exposed = {});
      ce.forEach((q) => {
        Object.defineProperty(oe, q, {
          get: () => n[q],
          set: (Ce) => n[q] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Rt && (e.render = T), he != null && (e.inheritAttrs = he), U && (e.components = U), be && (e.directives = be), J && fs(e);
}
function dd(e, t, n = Rt) {
  Q(e) && (e = p0(e));
  for (const u in e) {
    const r = e[u];
    let o;
    Le(r) ? "default" in r ? o = jn(
      r.from || u,
      r.default,
      !0
    ) : o = jn(r.from || u) : o = jn(r), Ve(o) ? Object.defineProperty(t, u, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[u] = o;
  }
}
function So(e, t, n) {
  Et(
    Q(e) ? e.map((u) => u.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function bs(e, t, n, u) {
  let r = u.includes(".") ? Ls(n, u) : () => n[u];
  if (Ie(e)) {
    const o = t[e];
    se(o) && zu(r, o);
  } else if (se(e))
    zu(r, e.bind(n));
  else if (Le(e))
    if (Q(e))
      e.forEach((o) => bs(o, t, n, u));
    else {
      const o = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(o) && zu(r, o, e);
    }
}
function ms(e) {
  const t = e.type, { mixins: n, extends: u } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, s = o.get(t);
  let c;
  return s ? c = s : !r.length && !n && !u ? c = t : (c = {}, r.length && r.forEach(
    (l) => ur(c, l, i, !0)
  ), ur(c, t, i)), Le(t) && o.set(t, c), c;
}
function ur(e, t, n, u = !1) {
  const { mixins: r, extends: o } = t;
  o && ur(e, o, n, !0), r && r.forEach(
    (i) => ur(e, i, n, !0)
  );
  for (const i in t)
    if (!(u && i === "expose")) {
      const s = fd[i] || n && n[i];
      e[i] = s ? s(e[i], t[i]) : t[i];
    }
  return e;
}
const fd = {
  data: Do,
  props: Lo,
  emits: Lo,
  // objects
  methods: nu,
  computed: nu,
  // lifecycle
  beforeCreate: ct,
  created: ct,
  beforeMount: ct,
  mounted: ct,
  beforeUpdate: ct,
  updated: ct,
  beforeDestroy: ct,
  beforeUnmount: ct,
  destroyed: ct,
  unmounted: ct,
  activated: ct,
  deactivated: ct,
  errorCaptured: ct,
  serverPrefetch: ct,
  // assets
  components: nu,
  directives: nu,
  // watch
  watch: pd,
  // provide / inject
  provide: Do,
  inject: hd
};
function Do(e, t) {
  return t ? e ? function() {
    return qe(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hd(e, t) {
  return nu(p0(e), p0(t));
}
function p0(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function nu(e, t) {
  return e ? qe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lo(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : qe(
    /* @__PURE__ */ Object.create(null),
    Mo(e),
    Mo(t ?? {})
  ) : t;
}
function pd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = qe(/* @__PURE__ */ Object.create(null), e);
  for (const u in t)
    n[u] = ct(e[u], t[u]);
  return n;
}
function _s() {
  return {
    app: null,
    config: {
      isNativeTag: Si,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let gd = 0;
function bd(e, t) {
  return function(u, r = null) {
    se(u) || (u = qe({}, u)), r != null && !Le(r) && (r = null);
    const o = _s(), i = /* @__PURE__ */ new WeakSet(), s = [];
    let c = !1;
    const l = o.app = {
      _uid: gd++,
      _component: u,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Jd,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...f) {
        return i.has(d) || (d && se(d.install) ? (i.add(d), d.install(l, ...f)) : se(d) && (i.add(d), d(l, ...f))), l;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), l;
      },
      component(d, f) {
        return f ? (o.components[d] = f, l) : o.components[d];
      },
      directive(d, f) {
        return f ? (o.directives[d] = f, l) : o.directives[d];
      },
      mount(d, f, g) {
        if (!c) {
          const x = l._ceVNode || Ee(u, r);
          return x.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(x, d, g), c = !0, l._container = d, d.__vue_app__ = l, Er(x.component);
        }
      },
      onUnmount(d) {
        s.push(d);
      },
      unmount() {
        c && (Et(
          s,
          l._instance,
          16
        ), e(null, l._container), delete l._container.__vue_app__);
      },
      provide(d, f) {
        return o.provides[d] = f, l;
      },
      runWithContext(d) {
        const f = zn;
        zn = l;
        try {
          return d();
        } finally {
          zn = f;
        }
      }
    };
    return l;
  };
}
let zn = null;
function md(e, t) {
  if (ot) {
    let n = ot.provides;
    const u = ot.parent && ot.parent.provides;
    u === n && (n = ot.provides = Object.create(u)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const u = K0();
  if (u || zn) {
    let r = zn ? zn._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(u && u.proxy) : t;
  }
}
const xs = {}, ks = () => Object.create(xs), ws = (e) => Object.getPrototypeOf(e) === xs;
function _d(e, t, n, u = !1) {
  const r = {}, o = ks();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vs(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = u ? r : F1(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function xd(e, t, n, u) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, s = _e(r), [c] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        if (wr(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (c)
          if (ke(o, g))
            x !== o[g] && (o[g] = x, l = !0);
          else {
            const _ = wt(g);
            r[_] = g0(
              c,
              s,
              _,
              x,
              e,
              !1
            );
          }
        else
          x !== o[g] && (o[g] = x, l = !0);
      }
    }
  } else {
    vs(e, t, r, o) && (l = !0);
    let d;
    for (const f in s)
      (!t || // for camelCase
      !ke(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = gn(f)) === f || !ke(t, d))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[f] = g0(
        c,
        s,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (o !== s)
      for (const f in o)
        (!t || !ke(t, f)) && (delete o[f], l = !0);
  }
  l && Zt(e.attrs, "set", "");
}
function vs(e, t, n, u) {
  const [r, o] = e.propsOptions;
  let i = !1, s;
  if (t)
    for (let c in t) {
      if (uu(c))
        continue;
      const l = t[c];
      let d;
      r && ke(r, d = wt(c)) ? !o || !o.includes(d) ? n[d] = l : (s || (s = {}))[d] = l : wr(e.emitsOptions, c) || (!(c in u) || l !== u[c]) && (u[c] = l, i = !0);
    }
  if (o) {
    const c = _e(n), l = s || we;
    for (let d = 0; d < o.length; d++) {
      const f = o[d];
      n[f] = g0(
        r,
        c,
        f,
        l[f],
        e,
        !ke(l, f)
      );
    }
  }
  return i;
}
function g0(e, t, n, u, r, o) {
  const i = e[n];
  if (i != null) {
    const s = ke(i, "default");
    if (s && u === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && se(c)) {
        const { propsDefaults: l } = r;
        if (n in l)
          u = l[n];
        else {
          const d = vu(r);
          u = l[n] = c.call(
            null,
            t
          ), d();
        }
      } else
        u = c;
      r.ce && r.ce._setProp(n, u);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !s ? u = !1 : i[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === gn(n)) && (u = !0));
  }
  return u;
}
const kd = /* @__PURE__ */ new WeakMap();
function Cs(e, t, n = !1) {
  const u = n ? kd : t.propsCache, r = u.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, s = [];
  let c = !1;
  if (!se(e)) {
    const d = (f) => {
      c = !0;
      const [g, x] = Cs(f, t, !0);
      qe(i, g), x && s.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !c)
    return Le(e) && u.set(e, Rn), Rn;
  if (Q(o))
    for (let d = 0; d < o.length; d++) {
      const f = wt(o[d]);
      Bo(f) && (i[f] = we);
    }
  else if (o)
    for (const d in o) {
      const f = wt(d);
      if (Bo(f)) {
        const g = o[d], x = i[f] = Q(g) || se(g) ? { type: g } : qe({}, g), _ = x.type;
        let C = !1, N = !0;
        if (Q(_))
          for (let F = 0; F < _.length; ++F) {
            const S = _[F], B = se(S) && S.name;
            if (B === "Boolean") {
              C = !0;
              break;
            } else B === "String" && (N = !1);
          }
        else
          C = se(_) && _.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = C, x[
          1
          /* shouldCastTrue */
        ] = N, (C || ke(x, "default")) && s.push(f);
      }
    }
  const l = [i, s];
  return Le(e) && u.set(e, l), l;
}
function Bo(e) {
  return e[0] !== "$" && !uu(e);
}
const Z0 = (e) => e === "_" || e === "_ctx" || e === "$stable", W0 = (e) => Q(e) ? e.map(Ft) : [Ft(e)], wd = (e, t, n) => {
  if (t._n)
    return t;
  const u = kt((...r) => W0(t(...r)), n);
  return u._c = !1, u;
}, ys = (e, t, n) => {
  const u = e._ctx;
  for (const r in e) {
    if (Z0(r)) continue;
    const o = e[r];
    if (se(o))
      t[r] = wd(r, o, u);
    else if (o != null) {
      const i = W0(o);
      t[r] = () => i;
    }
  }
}, Es = (e, t) => {
  const n = W0(t);
  e.slots.default = () => n;
}, As = (e, t, n) => {
  for (const u in t)
    (n || !Z0(u)) && (e[u] = t[u]);
}, vd = (e, t, n) => {
  const u = e.slots = ks();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (As(u, t, n), n && Fi(u, "_", r, !0)) : ys(t, u);
  } else t && Es(e, t);
}, Cd = (e, t, n) => {
  const { vnode: u, slots: r } = e;
  let o = !0, i = we;
  if (u.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? o = !1 : As(r, t, n) : (o = !t.$stable, ys(t, r)), i = t;
  } else t && (Es(e, t), i = { default: 1 });
  if (o)
    for (const s in r)
      !Z0(s) && i[s] == null && delete r[s];
}, ft = Od;
function yd(e) {
  return Ed(e);
}
function Ed(e, t) {
  const n = gr();
  n.__VUE__ = !0;
  const {
    insert: u,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: s,
    createComment: c,
    setText: l,
    setElementText: d,
    parentNode: f,
    nextSibling: g,
    setScopeId: x = Rt,
    insertStaticContent: _
  } = e, C = (p, k, v, D = null, A = null, M = null, P = void 0, R = null, $ = !!k.dynamicChildren) => {
    if (p === k)
      return;
    p && !yn(p, k) && (D = Sn(p), Re(p, A, M, !0), p = null), k.patchFlag === -2 && ($ = !1, k.dynamicChildren = null);
    const { type: L, ref: Y, shapeFlag: z } = k;
    switch (L) {
      case vr:
        N(p, k, v, D);
        break;
      case rt:
        F(p, k, v, D);
        break;
      case ju:
        p == null && S(k, v, D, P);
        break;
      case Ke:
        U(
          p,
          k,
          v,
          D,
          A,
          M,
          P,
          R,
          $
        );
        break;
      default:
        z & 1 ? T(
          p,
          k,
          v,
          D,
          A,
          M,
          P,
          R,
          $
        ) : z & 6 ? be(
          p,
          k,
          v,
          D,
          A,
          M,
          P,
          R,
          $
        ) : (z & 64 || z & 128) && L.process(
          p,
          k,
          v,
          D,
          A,
          M,
          P,
          R,
          $,
          St
        );
    }
    Y != null && A ? iu(Y, p && p.ref, M, k || p, !k) : Y == null && p && p.ref != null && iu(p.ref, null, M, p, !0);
  }, N = (p, k, v, D) => {
    if (p == null)
      u(
        k.el = s(k.children),
        v,
        D
      );
    else {
      const A = k.el = p.el;
      k.children !== p.children && l(A, k.children);
    }
  }, F = (p, k, v, D) => {
    p == null ? u(
      k.el = c(k.children || ""),
      v,
      D
    ) : k.el = p.el;
  }, S = (p, k, v, D) => {
    [p.el, p.anchor] = _(
      p.children,
      k,
      v,
      D,
      p.el,
      p.anchor
    );
  }, B = ({ el: p, anchor: k }, v, D) => {
    let A;
    for (; p && p !== k; )
      A = g(p), u(p, v, D), p = A;
    u(k, v, D);
  }, E = ({ el: p, anchor: k }) => {
    let v;
    for (; p && p !== k; )
      v = g(p), r(p), p = v;
    r(k);
  }, T = (p, k, v, D, A, M, P, R, $) => {
    k.type === "svg" ? P = "svg" : k.type === "math" && (P = "mathml"), p == null ? j(
      k,
      v,
      D,
      A,
      M,
      P,
      R,
      $
    ) : J(
      p,
      k,
      A,
      M,
      P,
      R,
      $
    );
  }, j = (p, k, v, D, A, M, P, R) => {
    let $, L;
    const { props: Y, shapeFlag: z, transition: W, dirs: ee } = p;
    if ($ = p.el = i(
      p.type,
      M,
      Y && Y.is,
      Y
    ), z & 8 ? d($, p.children) : z & 16 && de(
      p.children,
      $,
      null,
      D,
      A,
      Zr(p, M),
      P,
      R
    ), ee && xn(p, null, D, "created"), ue($, p, p.scopeId, P, D), Y) {
      for (const xe in Y)
        xe !== "value" && !uu(xe) && o($, xe, null, Y[xe], M, D);
      "value" in Y && o($, "value", null, Y.value, M), (L = Y.onVnodeBeforeMount) && Bt(L, D, p);
    }
    ee && xn(p, null, D, "beforeMount");
    const ae = Ad(A, W);
    ae && W.beforeEnter($), u($, k, v), ((L = Y && Y.onVnodeMounted) || ae || ee) && ft(() => {
      L && Bt(L, D, p), ae && W.enter($), ee && xn(p, null, D, "mounted");
    }, A);
  }, ue = (p, k, v, D, A) => {
    if (v && x(p, v), D)
      for (let M = 0; M < D.length; M++)
        x(p, D[M]);
    if (A) {
      let M = A.subTree;
      if (k === M || Is(M.type) && (M.ssContent === k || M.ssFallback === k)) {
        const P = A.vnode;
        ue(
          p,
          P,
          P.scopeId,
          P.slotScopeIds,
          A.parent
        );
      }
    }
  }, de = (p, k, v, D, A, M, P, R, $ = 0) => {
    for (let L = $; L < p.length; L++) {
      const Y = p[L] = R ? sn(p[L]) : Ft(p[L]);
      C(
        null,
        Y,
        k,
        v,
        D,
        A,
        M,
        P,
        R
      );
    }
  }, J = (p, k, v, D, A, M, P) => {
    const R = k.el = p.el;
    let { patchFlag: $, dynamicChildren: L, dirs: Y } = k;
    $ |= p.patchFlag & 16;
    const z = p.props || we, W = k.props || we;
    let ee;
    if (v && kn(v, !1), (ee = W.onVnodeBeforeUpdate) && Bt(ee, v, k, p), Y && xn(k, p, v, "beforeUpdate"), v && kn(v, !0), (z.innerHTML && W.innerHTML == null || z.textContent && W.textContent == null) && d(R, ""), L ? ce(
      p.dynamicChildren,
      L,
      R,
      v,
      D,
      Zr(k, A),
      M
    ) : P || q(
      p,
      k,
      R,
      null,
      v,
      D,
      Zr(k, A),
      M,
      !1
    ), $ > 0) {
      if ($ & 16)
        he(R, z, W, v, A);
      else if ($ & 2 && z.class !== W.class && o(R, "class", null, W.class, A), $ & 4 && o(R, "style", z.style, W.style, A), $ & 8) {
        const ae = k.dynamicProps;
        for (let xe = 0; xe < ae.length; xe++) {
          const me = ae[xe], Ye = z[me], Qe = W[me];
          (Qe !== Ye || me === "value") && o(R, me, Ye, Qe, A, v);
        }
      }
      $ & 1 && p.children !== k.children && d(R, k.children);
    } else !P && L == null && he(R, z, W, v, A);
    ((ee = W.onVnodeUpdated) || Y) && ft(() => {
      ee && Bt(ee, v, k, p), Y && xn(k, p, v, "updated");
    }, D);
  }, ce = (p, k, v, D, A, M, P) => {
    for (let R = 0; R < k.length; R++) {
      const $ = p[R], L = k[R], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yn($, L) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? f($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      C(
        $,
        L,
        Y,
        null,
        D,
        A,
        M,
        P,
        !0
      );
    }
  }, he = (p, k, v, D, A) => {
    if (k !== v) {
      if (k !== we)
        for (const M in k)
          !uu(M) && !(M in v) && o(
            p,
            M,
            k[M],
            null,
            A,
            D
          );
      for (const M in v) {
        if (uu(M)) continue;
        const P = v[M], R = k[M];
        P !== R && M !== "value" && o(p, M, R, P, A, D);
      }
      "value" in v && o(p, "value", k.value, v.value, A);
    }
  }, U = (p, k, v, D, A, M, P, R, $) => {
    const L = k.el = p ? p.el : s(""), Y = k.anchor = p ? p.anchor : s("");
    let { patchFlag: z, dynamicChildren: W, slotScopeIds: ee } = k;
    ee && (R = R ? R.concat(ee) : ee), p == null ? (u(L, v, D), u(Y, v, D), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      k.children || [],
      v,
      Y,
      A,
      M,
      P,
      R,
      $
    )) : z > 0 && z & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (ce(
      p.dynamicChildren,
      W,
      v,
      A,
      M,
      P,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (k.key != null || A && k === A.subTree) && Ms(
      p,
      k,
      !0
      /* shallow */
    )) : q(
      p,
      k,
      v,
      Y,
      A,
      M,
      P,
      R,
      $
    );
  }, be = (p, k, v, D, A, M, P, R, $) => {
    k.slotScopeIds = R, p == null ? k.shapeFlag & 512 ? A.ctx.activate(
      k,
      v,
      D,
      P,
      $
    ) : pe(
      k,
      v,
      D,
      A,
      M,
      P,
      $
    ) : Z(p, k, $);
  }, pe = (p, k, v, D, A, M, P) => {
    const R = p.component = Ud(
      p,
      D,
      A
    );
    if (_r(p) && (R.ctx.renderer = St), Vd(R, !1, P), R.asyncDep) {
      if (A && A.registerDep(R, re, P), !p.el) {
        const $ = R.subTree = Ee(rt);
        F(null, $, k, v), p.placeholder = $.el;
      }
    } else
      re(
        R,
        p,
        k,
        v,
        A,
        M,
        P
      );
  }, Z = (p, k, v) => {
    const D = k.component = p.component;
    if (Rd(p, k, v))
      if (D.asyncDep && !D.asyncResolved) {
        oe(D, k, v);
        return;
      } else
        D.next = k, D.update();
    else
      k.el = p.el, D.vnode = k;
  }, re = (p, k, v, D, A, M, P) => {
    const R = () => {
      if (p.isMounted) {
        let { next: z, bu: W, u: ee, parent: ae, vnode: xe } = p;
        {
          const bt = Ss(p);
          if (bt) {
            z && (z.el = xe.el, oe(p, z, P)), bt.asyncDep.then(() => {
              p.isUnmounted || R();
            });
            return;
          }
        }
        let me = z, Ye;
        kn(p, !1), z ? (z.el = xe.el, oe(p, z, P)) : z = xe, W && Hu(W), (Ye = z.props && z.props.onVnodeBeforeUpdate) && Bt(Ye, ae, z, xe), kn(p, !0);
        const Qe = Fo(p), gt = p.subTree;
        p.subTree = Qe, C(
          gt,
          Qe,
          // parent may have changed if it's in a teleport
          f(gt.el),
          // anchor may have changed if it's in a fragment
          Sn(gt),
          p,
          A,
          M
        ), z.el = Qe.el, me === null && Nd(p, Qe.el), ee && ft(ee, A), (Ye = z.props && z.props.onVnodeUpdated) && ft(
          () => Bt(Ye, ae, z, xe),
          A
        );
      } else {
        let z;
        const { el: W, props: ee } = k, { bm: ae, m: xe, parent: me, root: Ye, type: Qe } = p, gt = Hn(k);
        kn(p, !1), ae && Hu(ae), !gt && (z = ee && ee.onVnodeBeforeMount) && Bt(z, me, k), kn(p, !0);
        {
          Ye.ce && // @ts-expect-error _def is private
          Ye.ce._def.shadowRoot !== !1 && Ye.ce._injectChildStyle(Qe);
          const bt = p.subTree = Fo(p);
          C(
            null,
            bt,
            v,
            D,
            p,
            A,
            M
          ), k.el = bt.el;
        }
        if (xe && ft(xe, A), !gt && (z = ee && ee.onVnodeMounted)) {
          const bt = k;
          ft(
            () => Bt(z, me, bt),
            A
          );
        }
        (k.shapeFlag & 256 || me && Hn(me.vnode) && me.vnode.shapeFlag & 256) && p.a && ft(p.a, A), p.isMounted = !0, k = v = D = null;
      }
    };
    p.scope.on();
    const $ = p.effect = new Oi(R);
    p.scope.off();
    const L = p.update = $.run.bind($), Y = p.job = $.runIfDirty.bind($);
    Y.i = p, Y.id = p.uid, $.scheduler = () => U0(Y), kn(p, !0), L();
  }, oe = (p, k, v) => {
    k.component = p;
    const D = p.vnode.props;
    p.vnode = k, p.next = null, xd(p, k.props, D, v), Cd(p, k.children, v), Kt(), Co(p), Jt();
  }, q = (p, k, v, D, A, M, P, R, $ = !1) => {
    const L = p && p.children, Y = p ? p.shapeFlag : 0, z = k.children, { patchFlag: W, shapeFlag: ee } = k;
    if (W > 0) {
      if (W & 128) {
        He(
          L,
          z,
          v,
          D,
          A,
          M,
          P,
          R,
          $
        );
        return;
      } else if (W & 256) {
        Ce(
          L,
          z,
          v,
          D,
          A,
          M,
          P,
          R,
          $
        );
        return;
      }
    }
    ee & 8 ? (Y & 16 && bn(L, A, M), z !== L && d(v, z)) : Y & 16 ? ee & 16 ? He(
      L,
      z,
      v,
      D,
      A,
      M,
      P,
      R,
      $
    ) : bn(L, A, M, !0) : (Y & 8 && d(v, ""), ee & 16 && de(
      z,
      v,
      D,
      A,
      M,
      P,
      R,
      $
    ));
  }, Ce = (p, k, v, D, A, M, P, R, $) => {
    p = p || Rn, k = k || Rn;
    const L = p.length, Y = k.length, z = Math.min(L, Y);
    let W;
    for (W = 0; W < z; W++) {
      const ee = k[W] = $ ? sn(k[W]) : Ft(k[W]);
      C(
        p[W],
        ee,
        v,
        null,
        A,
        M,
        P,
        R,
        $
      );
    }
    L > Y ? bn(
      p,
      A,
      M,
      !0,
      !1,
      z
    ) : de(
      k,
      v,
      D,
      A,
      M,
      P,
      R,
      $,
      z
    );
  }, He = (p, k, v, D, A, M, P, R, $) => {
    let L = 0;
    const Y = k.length;
    let z = p.length - 1, W = Y - 1;
    for (; L <= z && L <= W; ) {
      const ee = p[L], ae = k[L] = $ ? sn(k[L]) : Ft(k[L]);
      if (yn(ee, ae))
        C(
          ee,
          ae,
          v,
          null,
          A,
          M,
          P,
          R,
          $
        );
      else
        break;
      L++;
    }
    for (; L <= z && L <= W; ) {
      const ee = p[z], ae = k[W] = $ ? sn(k[W]) : Ft(k[W]);
      if (yn(ee, ae))
        C(
          ee,
          ae,
          v,
          null,
          A,
          M,
          P,
          R,
          $
        );
      else
        break;
      z--, W--;
    }
    if (L > z) {
      if (L <= W) {
        const ee = W + 1, ae = ee < Y ? k[ee].el : D;
        for (; L <= W; )
          C(
            null,
            k[L] = $ ? sn(k[L]) : Ft(k[L]),
            v,
            ae,
            A,
            M,
            P,
            R,
            $
          ), L++;
      }
    } else if (L > W)
      for (; L <= z; )
        Re(p[L], A, M, !0), L++;
    else {
      const ee = L, ae = L, xe = /* @__PURE__ */ new Map();
      for (L = ae; L <= W; L++) {
        const st = k[L] = $ ? sn(k[L]) : Ft(k[L]);
        st.key != null && xe.set(st.key, L);
      }
      let me, Ye = 0;
      const Qe = W - ae + 1;
      let gt = !1, bt = 0;
      const mn = new Array(Qe);
      for (L = 0; L < Qe; L++) mn[L] = 0;
      for (L = ee; L <= z; L++) {
        const st = p[L];
        if (Ye >= Qe) {
          Re(st, A, M, !0);
          continue;
        }
        let mt;
        if (st.key != null)
          mt = xe.get(st.key);
        else
          for (me = ae; me <= W; me++)
            if (mn[me - ae] === 0 && yn(st, k[me])) {
              mt = me;
              break;
            }
        mt === void 0 ? Re(st, A, M, !0) : (mn[mt - ae] = L + 1, mt >= bt ? bt = mt : gt = !0, C(
          st,
          k[mt],
          v,
          null,
          A,
          M,
          P,
          R,
          $
        ), Ye++);
      }
      const Jn = gt ? Md(mn) : Rn;
      for (me = Jn.length - 1, L = Qe - 1; L >= 0; L--) {
        const st = ae + L, mt = k[st], Mu = k[st + 1], Dn = st + 1 < Y ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mu.el || Mu.placeholder
        ) : D;
        mn[L] === 0 ? C(
          null,
          mt,
          v,
          Dn,
          A,
          M,
          P,
          R,
          $
        ) : gt && (me < 0 || L !== Jn[me] ? Oe(mt, v, Dn, 2) : me--);
      }
    }
  }, Oe = (p, k, v, D, A = null) => {
    const { el: M, type: P, transition: R, children: $, shapeFlag: L } = p;
    if (L & 6) {
      Oe(p.component.subTree, k, v, D);
      return;
    }
    if (L & 128) {
      p.suspense.move(k, v, D);
      return;
    }
    if (L & 64) {
      P.move(p, k, v, St);
      return;
    }
    if (P === Ke) {
      u(M, k, v);
      for (let z = 0; z < $.length; z++)
        Oe($[z], k, v, D);
      u(p.anchor, k, v);
      return;
    }
    if (P === ju) {
      B(p, k, v);
      return;
    }
    if (D !== 2 && L & 1 && R)
      if (D === 0)
        R.beforeEnter(M), u(M, k, v), ft(() => R.enter(M), A);
      else {
        const { leave: z, delayLeave: W, afterLeave: ee } = R, ae = () => {
          p.ctx.isUnmounted ? r(M) : u(M, k, v);
        }, xe = () => {
          M._isLeaving && M[qt](
            !0
            /* cancelled */
          ), z(M, () => {
            ae(), ee && ee();
          });
        };
        W ? W(M, ae, xe) : xe();
      }
    else
      u(M, k, v);
  }, Re = (p, k, v, D = !1, A = !1) => {
    const {
      type: M,
      props: P,
      ref: R,
      children: $,
      dynamicChildren: L,
      shapeFlag: Y,
      patchFlag: z,
      dirs: W,
      cacheIndex: ee
    } = p;
    if (z === -2 && (A = !1), R != null && (Kt(), iu(R, null, v, p, !0), Jt()), ee != null && (k.renderCache[ee] = void 0), Y & 256) {
      k.ctx.deactivate(p);
      return;
    }
    const ae = Y & 1 && W, xe = !Hn(p);
    let me;
    if (xe && (me = P && P.onVnodeBeforeUnmount) && Bt(me, k, p), Y & 6)
      Br(p.component, v, D);
    else {
      if (Y & 128) {
        p.suspense.unmount(v, D);
        return;
      }
      ae && xn(p, null, k, "beforeUnmount"), Y & 64 ? p.type.remove(
        p,
        k,
        v,
        St,
        D
      ) : L && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !L.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== Ke || z > 0 && z & 64) ? bn(
        L,
        k,
        v,
        !1,
        !0
      ) : (M === Ke && z & 384 || !A && Y & 16) && bn($, k, v), D && Mt(p);
    }
    (xe && (me = P && P.onVnodeUnmounted) || ae) && ft(() => {
      me && Bt(me, k, p), ae && xn(p, null, k, "unmounted");
    }, v);
  }, Mt = (p) => {
    const { type: k, el: v, anchor: D, transition: A } = p;
    if (k === Ke) {
      Lr(v, D);
      return;
    }
    if (k === ju) {
      E(p);
      return;
    }
    const M = () => {
      r(v), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (p.shapeFlag & 1 && A && !A.persisted) {
      const { leave: P, delayLeave: R } = A, $ = () => P(v, M);
      R ? R(p.el, M, $) : $();
    } else
      M();
  }, Lr = (p, k) => {
    let v;
    for (; p !== k; )
      v = g(p), r(p), p = v;
    r(k);
  }, Br = (p, k, v) => {
    const { bum: D, scope: A, job: M, subTree: P, um: R, m: $, a: L } = p;
    Io($), Io(L), D && Hu(D), A.stop(), M && (M.flags |= 8, Re(P, p, k, v)), R && ft(R, k), ft(() => {
      p.isUnmounted = !0;
    }, k);
  }, bn = (p, k, v, D = !1, A = !1, M = 0) => {
    for (let P = M; P < p.length; P++)
      Re(p[P], k, v, D, A);
  }, Sn = (p) => {
    if (p.shapeFlag & 6)
      return Sn(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const k = g(p.anchor || p.el), v = k && k[W1];
    return v ? g(v) : k;
  };
  let Kn = !1;
  const Ir = (p, k, v) => {
    p == null ? k._vnode && Re(k._vnode, null, null, !0) : C(
      k._vnode || null,
      p,
      k,
      null,
      null,
      null,
      v
    ), k._vnode = p, Kn || (Kn = !0, Co(), ns(), Kn = !1);
  }, St = {
    p: C,
    um: Re,
    m: Oe,
    r: Mt,
    mt: pe,
    mc: de,
    pc: q,
    pbc: ce,
    n: Sn,
    o: e
  };
  return {
    render: Ir,
    hydrate: void 0,
    createApp: bd(Ir)
  };
}
function Zr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function kn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ad(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ms(e, t, n = !1) {
  const u = e.children, r = t.children;
  if (Q(u) && Q(r))
    for (let o = 0; o < u.length; o++) {
      const i = u[o];
      let s = r[o];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = r[o] = sn(r[o]), s.el = i.el), !n && s.patchFlag !== -2 && Ms(i, s)), s.type === vr && // avoid cached text nodes retaining detached dom nodes
      s.patchFlag !== -1 && (s.el = i.el), s.type === rt && !s.el && (s.el = i.el);
    }
}
function Md(e) {
  const t = e.slice(), n = [0];
  let u, r, o, i, s;
  const c = e.length;
  for (u = 0; u < c; u++) {
    const l = e[u];
    if (l !== 0) {
      if (r = n[n.length - 1], e[r] < l) {
        t[u] = r, n.push(u);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        s = o + i >> 1, e[n[s]] < l ? o = s + 1 : i = s;
      l < e[n[o]] && (o > 0 && (t[u] = n[o - 1]), n[o] = u);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Ss(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ss(t);
}
function Io(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Sd = Symbol.for("v-scx"), Dd = () => jn(Sd);
function zu(e, t, n) {
  return Ds(e, t, n);
}
function Ds(e, t, n = we) {
  const { immediate: u, deep: r, flush: o, once: i } = n, s = qe({}, n), c = t && u || !t && o !== "post";
  let l;
  if (gu) {
    if (o === "sync") {
      const x = Dd();
      l = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = Rt, x.resume = Rt, x.pause = Rt, x;
    }
  }
  const d = ot;
  s.call = (x, _, C) => Et(x, d, _, C);
  let f = !1;
  o === "post" ? s.scheduler = (x) => {
    ft(x, d && d.suspense);
  } : o !== "sync" && (f = !0, s.scheduler = (x, _) => {
    _ ? x() : U0(x);
  }), s.augmentJob = (x) => {
    t && (x.flags |= 4), f && (x.flags |= 2, d && (x.id = d.uid, x.i = d));
  };
  const g = U1(e, t, s);
  return gu && (l ? l.push(g) : c && g()), g;
}
function Ld(e, t, n) {
  const u = this.proxy, r = Ie(e) ? e.includes(".") ? Ls(u, e) : () => u[e] : e.bind(u, u);
  let o;
  se(t) ? o = t : (o = t.handler, n = t);
  const i = vu(this), s = Ds(r, o.bind(u), n);
  return i(), s;
}
function Ls(e, t) {
  const n = t.split(".");
  return () => {
    let u = e;
    for (let r = 0; r < n.length && u; r++)
      u = u[n[r]];
    return u;
  };
}
const Bd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${gn(t)}Modifiers`];
function Id(e, t, ...n) {
  if (e.isUnmounted) return;
  const u = e.vnode.props || we;
  let r = n;
  const o = t.startsWith("update:"), i = o && Bd(u, t.slice(7));
  i && (i.trim && (r = n.map((d) => Ie(d) ? d.trim() : d)), i.number && (r = n.map(s0)));
  let s, c = u[s = Pr(t)] || // also try camelCase event handler (#2249)
  u[s = Pr(wt(t))];
  !c && o && (c = u[s = Pr(gn(t))]), c && Et(
    c,
    e,
    6,
    r
  );
  const l = u[s + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Et(
      l,
      e,
      6,
      r
    );
  }
}
const Fd = /* @__PURE__ */ new WeakMap();
function Bs(e, t, n = !1) {
  const u = n ? Fd : t.emitsCache, r = u.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, s = !1;
  if (!se(e)) {
    const c = (l) => {
      const d = Bs(l, t, !0);
      d && (s = !0, qe(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !o && !s ? (Le(e) && u.set(e, null), null) : (Q(o) ? o.forEach((c) => i[c] = null) : qe(i, o), Le(e) && u.set(e, i), i);
}
function wr(e, t) {
  return !e || !dr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ke(e, t[0].toLowerCase() + t.slice(1)) || ke(e, gn(t)) || ke(e, t));
}
function Fo(e) {
  const {
    type: t,
    vnode: n,
    proxy: u,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: s,
    emit: c,
    render: l,
    renderCache: d,
    props: f,
    data: g,
    setupState: x,
    ctx: _,
    inheritAttrs: C
  } = e, N = er(e);
  let F, S;
  try {
    if (n.shapeFlag & 4) {
      const E = r || u, T = E;
      F = Ft(
        l.call(
          T,
          E,
          d,
          f,
          x,
          g,
          _
        )
      ), S = s;
    } else {
      const E = t;
      F = Ft(
        E.length > 1 ? E(
          f,
          { attrs: s, slots: i, emit: c }
        ) : E(
          f,
          null
        )
      ), S = t.props ? s : Td(s);
    }
  } catch (E) {
    cu.length = 0, mr(E, e, 1), F = Ee(rt);
  }
  let B = F;
  if (S && C !== !1) {
    const E = Object.keys(S), { shapeFlag: T } = B;
    E.length && T & 7 && (o && E.some(B0) && (S = $d(
      S,
      o
    )), B = hn(B, S, !1, !0));
  }
  return n.dirs && (B = hn(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && fu(B, n.transition), F = B, er(N), F;
}
const Td = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || dr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, $d = (e, t) => {
  const n = {};
  for (const u in e)
    (!B0(u) || !(u.slice(9) in t)) && (n[u] = e[u]);
  return n;
};
function Rd(e, t, n) {
  const { props: u, children: r, component: o } = e, { props: i, children: s, patchFlag: c } = t, l = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return u ? To(u, i, l) : !!i;
    if (c & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        if (i[g] !== u[g] && !wr(l, g))
          return !0;
      }
    }
  } else
    return (r || s) && (!s || !s.$stable) ? !0 : u === i ? !1 : u ? i ? To(u, i, l) : !0 : !!i;
  return !1;
}
function To(e, t, n) {
  const u = Object.keys(t);
  if (u.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < u.length; r++) {
    const o = u[r];
    if (t[o] !== e[o] && !wr(n, o))
      return !0;
  }
  return !1;
}
function Nd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const u = t.subTree;
    if (u.suspense && u.suspense.activeBranch === e && (u.el = e.el), u === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Is = (e) => e.__isSuspense;
function Od(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Z1(e);
}
const Ke = Symbol.for("v-fgt"), vr = Symbol.for("v-txt"), rt = Symbol.for("v-cmt"), ju = Symbol.for("v-stc"), cu = [];
let ht = null;
function h(e = !1) {
  cu.push(ht = e ? null : []);
}
function Pd() {
  cu.pop(), ht = cu[cu.length - 1] || null;
}
let hu = 1;
function rr(e, t = !1) {
  hu += e, e < 0 && ht && t && (ht.hasOnce = !0);
}
function Fs(e) {
  return e.dynamicChildren = hu > 0 ? ht || Rn : null, Pd(), hu > 0 && ht && ht.push(e), e;
}
function m(e, t, n, u, r, o) {
  return Fs(
    a(
      e,
      t,
      n,
      u,
      r,
      o,
      !0
    )
  );
}
function Be(e, t, n, u, r) {
  return Fs(
    Ee(
      e,
      t,
      n,
      u,
      r,
      !0
    )
  );
}
function pu(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ts = ({ key: e }) => e ?? null, Uu = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || Ve(e) || se(e) ? { i: Xe, r: e, k: t, f: !!n } : e : null);
function a(e, t = null, n = null, u = 0, r = null, o = e === Ke ? 0 : 1, i = !1, s = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ts(t),
    ref: t && Uu(t),
    scopeId: rs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: u,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Xe
  };
  return s ? (G0(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ie(n) ? 8 : 16), hu > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ht && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ht.push(c), c;
}
const Ee = Hd;
function Hd(e, t = null, n = null, u = 0, r = null, o = !1) {
  if ((!e || e === ps) && (e = rt), pu(e)) {
    const s = hn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && G0(s, n), hu > 0 && !o && ht && (s.shapeFlag & 6 ? ht[ht.indexOf(e)] = s : ht.push(s)), s.patchFlag = -2, s;
  }
  if (Kd(e) && (e = e.__vccOpts), t) {
    t = $s(t);
    let { class: s, style: c } = t;
    s && !Ie(s) && (t.class = An(s)), Le(c) && (j0(c) && !Q(c) && (c = qe({}, c)), t.style = Wn(c));
  }
  const i = Ie(e) ? 1 : Is(e) ? 128 : is(e) ? 64 : Le(e) ? 4 : se(e) ? 2 : 0;
  return a(
    e,
    t,
    n,
    u,
    r,
    i,
    o,
    !0
  );
}
function $s(e) {
  return e ? j0(e) || ws(e) ? qe({}, e) : e : null;
}
function hn(e, t, n = !1, u = !1) {
  const { props: r, ref: o, patchFlag: i, children: s, transition: c } = e, l = t ? yr(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ts(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Q(o) ? o.concat(Uu(t)) : [o, Uu(t)] : Uu(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ke ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && hn(e.ssContent),
    ssFallback: e.ssFallback && hn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && u && fu(
    d,
    c.clone(d)
  ), d;
}
function Cr(e = " ", t = 0) {
  return Ee(vr, null, e, t);
}
function en(e, t) {
  const n = Ee(ju, null, e);
  return n.staticCount = t, n;
}
function $e(e = "", t = !1) {
  return t ? (h(), Be(rt, null, e)) : Ee(rt, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? Ee(rt) : Q(e) ? Ee(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pu(e) ? sn(e) : Ee(vr, null, String(e));
}
function sn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : hn(e);
}
function G0(e, t) {
  let n = 0;
  const { shapeFlag: u } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (u & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), G0(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !ws(t) ? t._ctx = Xe : r === 3 && Xe && (Xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else se(t) ? (t = { default: t, _ctx: Xe }, n = 32) : (t = String(t), u & 64 ? (n = 16, t = [Cr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const u = e[n];
    for (const r in u)
      if (r === "class")
        t.class !== u.class && (t.class = An([t.class, u.class]));
      else if (r === "style")
        t.style = Wn([t.style, u.style]);
      else if (dr(r)) {
        const o = t[r], i = u[r];
        i && o !== i && !(Q(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = u[r]);
  }
  return t;
}
function Bt(e, t, n, u = null) {
  Et(e, t, 7, [
    n,
    u
  ]);
}
const zd = _s();
let jd = 0;
function Ud(e, t, n) {
  const u = e.type, r = (t ? t.appContext : e.appContext) || zd, o = {
    uid: jd++,
    vnode: e,
    type: u,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new f1(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cs(u, r),
    emitsOptions: Bs(u, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Id.bind(null, o), e.ce && e.ce(o), o;
}
let ot = null;
const K0 = () => ot || Xe;
let or, b0;
{
  const e = gr(), t = (n, u) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(u), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  or = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ot = n
  ), b0 = t(
    "__VUE_SSR_SETTERS__",
    (n) => gu = n
  );
}
const vu = (e) => {
  const t = ot;
  return or(e), e.scope.on(), () => {
    e.scope.off(), or(t);
  };
}, $o = () => {
  ot && ot.scope.off(), or(null);
};
function Rs(e) {
  return e.vnode.shapeFlag & 4;
}
let gu = !1;
function Vd(e, t = !1, n = !1) {
  t && b0(t);
  const { props: u, children: r } = e.vnode, o = Rs(e);
  _d(e, u, o, t), vd(e, r, n || t);
  const i = o ? qd(e, t) : void 0;
  return t && b0(!1), i;
}
function qd(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ld);
  const { setup: u } = n;
  if (u) {
    Kt();
    const r = e.setupContext = u.length > 1 ? Wd(e) : null, o = vu(e), i = wu(
      u,
      e,
      0,
      [
        e.props,
        r
      ]
    ), s = Li(i);
    if (Jt(), o(), (s || e.sp) && !Hn(e) && fs(e), s) {
      if (i.then($o, $o), t)
        return i.then((c) => {
          Ro(e, c);
        }).catch((c) => {
          mr(c, e, 0);
        });
      e.asyncDep = i;
    } else
      Ro(e, i);
  } else
    Ns(e);
}
function Ro(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Le(t) && (e.setupState = Qi(t)), Ns(e);
}
function Ns(e, t, n) {
  const u = e.type;
  e.render || (e.render = u.render || Rt);
  {
    const r = vu(e);
    Kt();
    try {
      ad(e);
    } finally {
      Jt(), r();
    }
  }
}
const Zd = {
  get(e, t) {
    return nt(e, "get", ""), e[t];
  }
};
function Wd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Er(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qi(w(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in su)
        return su[n](e);
    },
    has(t, n) {
      return n in t || n in su;
    }
  })) : e.proxy;
}
function Gd(e, t = !0) {
  return se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kd(e) {
  return se(e) && "__vccOpts" in e;
}
const ye = (e, t) => z1(e, t, gu);
function Os(e, t, n) {
  const u = (o, i, s) => {
    rr(-1);
    try {
      return Ee(o, i, s);
    } finally {
      rr(1);
    }
  }, r = arguments.length;
  return r === 2 ? Le(t) && !Q(t) ? pu(t) ? u(e, null, [t]) : u(e, t) : u(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && pu(n) && (n = [n]), u(e, t, n));
}
const Jd = "3.5.21";
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let m0;
const No = typeof window < "u" && window.trustedTypes;
if (No)
  try {
    m0 = /* @__PURE__ */ No.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ps = m0 ? (e) => m0.createHTML(e) : (e) => e, Xd = "http://www.w3.org/2000/svg", Yd = "http://www.w3.org/1998/Math/MathML", Ut = typeof document < "u" ? document : null, Oo = Ut && /* @__PURE__ */ Ut.createElement("template"), Qd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, u) => {
    const r = t === "svg" ? Ut.createElementNS(Xd, e) : t === "mathml" ? Ut.createElementNS(Yd, e) : n ? Ut.createElement(e, { is: n }) : Ut.createElement(e);
    return e === "select" && u && u.multiple != null && r.setAttribute("multiple", u.multiple), r;
  },
  createText: (e) => Ut.createTextNode(e),
  createComment: (e) => Ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ut.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, u, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      Oo.innerHTML = Ps(
        u === "svg" ? `<svg>${e}</svg>` : u === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Oo.content;
      if (u === "svg" || u === "mathml") {
        const c = s.firstChild;
        for (; c.firstChild; )
          s.appendChild(c.firstChild);
        s.removeChild(c);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, rn = "transition", Qn = "animation", bu = Symbol("_vtc"), Hs = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, ef = /* @__PURE__ */ qe(
  {},
  ss,
  Hs
), tf = (e) => (e.displayName = "Transition", e.props = ef, e), _0 = /* @__PURE__ */ tf(
  (e, { slots: t }) => Os(J1, nf(e), t)
), wn = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Po = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nf(e) {
  const t = {};
  for (const U in e)
    U in Hs || (t[U] = e[U]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: u,
    duration: r,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: c = o,
    appearActiveClass: l = i,
    appearToClass: d = s,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, _ = uf(r), C = _ && _[0], N = _ && _[1], {
    onBeforeEnter: F,
    onEnter: S,
    onEnterCancelled: B,
    onLeave: E,
    onLeaveCancelled: T,
    onBeforeAppear: j = F,
    onAppear: ue = S,
    onAppearCancelled: de = B
  } = t, J = (U, be, pe, Z) => {
    U._enterCancelled = Z, vn(U, be ? d : s), vn(U, be ? l : i), pe && pe();
  }, ce = (U, be) => {
    U._isLeaving = !1, vn(U, f), vn(U, x), vn(U, g), be && be();
  }, he = (U) => (be, pe) => {
    const Z = U ? ue : S, re = () => J(be, U, pe);
    wn(Z, [be, re]), Ho(() => {
      vn(be, U ? c : o), jt(be, U ? d : s), Po(Z) || zo(be, u, C, re);
    });
  };
  return qe(t, {
    onBeforeEnter(U) {
      wn(F, [U]), jt(U, o), jt(U, i);
    },
    onBeforeAppear(U) {
      wn(j, [U]), jt(U, c), jt(U, l);
    },
    onEnter: he(!1),
    onAppear: he(!0),
    onLeave(U, be) {
      U._isLeaving = !0;
      const pe = () => ce(U, be);
      jt(U, f), U._enterCancelled ? (jt(U, g), Vo()) : (Vo(), jt(U, g)), Ho(() => {
        U._isLeaving && (vn(U, f), jt(U, x), Po(E) || zo(U, u, N, pe));
      }), wn(E, [U, pe]);
    },
    onEnterCancelled(U) {
      J(U, !1, void 0, !0), wn(B, [U]);
    },
    onAppearCancelled(U) {
      J(U, !0, void 0, !0), wn(de, [U]);
    },
    onLeaveCancelled(U) {
      ce(U), wn(T, [U]);
    }
  });
}
function uf(e) {
  if (e == null)
    return null;
  if (Le(e))
    return [Wr(e.enter), Wr(e.leave)];
  {
    const t = Wr(e);
    return [t, t];
  }
}
function Wr(e) {
  return o1(e);
}
function jt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[bu] || (e[bu] = /* @__PURE__ */ new Set())).add(t);
}
function vn(e, t) {
  t.split(/\s+/).forEach((u) => u && e.classList.remove(u));
  const n = e[bu];
  n && (n.delete(t), n.size || (e[bu] = void 0));
}
function Ho(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rf = 0;
function zo(e, t, n, u) {
  const r = e._endId = ++rf, o = () => {
    r === e._endId && u();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: s, propCount: c } = of(e, t);
  if (!i)
    return u();
  const l = i + "end";
  let d = 0;
  const f = () => {
    e.removeEventListener(l, g), o();
  }, g = (x) => {
    x.target === e && ++d >= c && f();
  };
  setTimeout(() => {
    d < c && f();
  }, s + 1), e.addEventListener(l, g);
}
function of(e, t) {
  const n = window.getComputedStyle(e), u = (_) => (n[_] || "").split(", "), r = u(`${rn}Delay`), o = u(`${rn}Duration`), i = jo(r, o), s = u(`${Qn}Delay`), c = u(`${Qn}Duration`), l = jo(s, c);
  let d = null, f = 0, g = 0;
  t === rn ? i > 0 && (d = rn, f = i, g = o.length) : t === Qn ? l > 0 && (d = Qn, f = l, g = c.length) : (f = Math.max(i, l), d = f > 0 ? i > l ? rn : Qn : null, g = d ? d === rn ? o.length : c.length : 0);
  const x = d === rn && /\b(?:transform|all)(?:,|$)/.test(
    u(`${rn}Property`).toString()
  );
  return {
    type: d,
    timeout: f,
    propCount: g,
    hasTransform: x
  };
}
function jo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, u) => Uo(n) + Uo(e[u])));
}
function Uo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Vo() {
  return document.body.offsetHeight;
}
function sf(e, t, n) {
  const u = e[bu];
  u && (t = (t ? [t, ...u] : [...u]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ir = Symbol("_vod"), zs = Symbol("_vsh"), cf = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ir] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : eu(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: u }) {
    !t != !n && (u ? t ? (u.beforeEnter(e), eu(e, !0), u.enter(e)) : u.leave(e, () => {
      eu(e, !1);
    }) : eu(e, t));
  },
  beforeUnmount(e, { value: t }) {
    eu(e, t);
  }
};
function eu(e, t) {
  e.style.display = t ? e[ir] : "none", e[zs] = !t;
}
const lf = Symbol(""), af = /(?:^|;)\s*display\s*:/;
function df(e, t, n) {
  const u = e.style, r = Ie(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (Ie(t))
        for (const i of t.split(";")) {
          const s = i.slice(0, i.indexOf(":")).trim();
          n[s] == null && Vu(u, s, "");
        }
      else
        for (const i in t)
          n[i] == null && Vu(u, i, "");
    for (const i in n)
      i === "display" && (o = !0), Vu(u, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = u[lf];
      i && (n += ";" + i), u.cssText = n, o = af.test(n);
    }
  } else t && e.removeAttribute("style");
  ir in e && (e[ir] = o ? u.display : "", e[zs] && (u.display = "none"));
}
const qo = /\s*!important$/;
function Vu(e, t, n) {
  if (Q(n))
    n.forEach((u) => Vu(e, t, u));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const u = ff(e, t);
    qo.test(n) ? e.setProperty(
      gn(u),
      n.replace(qo, ""),
      "important"
    ) : e[u] = n;
  }
}
const Zo = ["Webkit", "Moz", "ms"], Gr = {};
function ff(e, t) {
  const n = Gr[t];
  if (n)
    return n;
  let u = wt(t);
  if (u !== "filter" && u in e)
    return Gr[t] = u;
  u = pr(u);
  for (let r = 0; r < Zo.length; r++) {
    const o = Zo[r] + u;
    if (o in e)
      return Gr[t] = o;
  }
  return t;
}
const Wo = "http://www.w3.org/1999/xlink";
function Go(e, t, n, u, r, o = d1(t)) {
  u && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wo, t.slice(6, t.length)) : e.setAttributeNS(Wo, t, n) : n == null || o && !Ti(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Xt(n) ? String(n) : n
  );
}
function Ko(e, t, n, u, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ps(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = Ti(n) : n == null && s === "string" ? (n = "", i = !0) : s === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(r || t);
}
function $n(e, t, n, u) {
  e.addEventListener(t, n, u);
}
function hf(e, t, n, u) {
  e.removeEventListener(t, n, u);
}
const Jo = Symbol("_vei");
function pf(e, t, n, u, r = null) {
  const o = e[Jo] || (e[Jo] = {}), i = o[t];
  if (u && i)
    i.value = u;
  else {
    const [s, c] = gf(t);
    if (u) {
      const l = o[t] = _f(
        u,
        r
      );
      $n(e, s, l, c);
    } else i && (hf(e, s, i, c), o[t] = void 0);
  }
}
const Xo = /(?:Once|Passive|Capture)$/;
function gf(e) {
  let t;
  if (Xo.test(e)) {
    t = {};
    let u;
    for (; u = e.match(Xo); )
      e = e.slice(0, e.length - u[0].length), t[u[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : gn(e.slice(2)), t];
}
let Kr = 0;
const bf = /* @__PURE__ */ Promise.resolve(), mf = () => Kr || (bf.then(() => Kr = 0), Kr = Date.now());
function _f(e, t) {
  const n = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= n.attached)
      return;
    Et(
      xf(u, n.value),
      t,
      5,
      [u]
    );
  };
  return n.value = e, n.attached = mf(), n;
}
function xf(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (u) => (r) => !r._stopped && u && u(r)
    );
  } else
    return t;
}
const Yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, kf = (e, t, n, u, r, o) => {
  const i = r === "svg";
  t === "class" ? sf(e, u, i) : t === "style" ? df(e, n, u) : dr(t) ? B0(t) || pf(e, t, n, u, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wf(e, t, u, i)) ? (Ko(e, t, u), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Go(e, t, u, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ie(u)) ? Ko(e, wt(t), u, o, t) : (t === "true-value" ? e._trueValue = u : t === "false-value" && (e._falseValue = u), Go(e, t, u, i));
};
function wf(e, t, n, u) {
  if (u)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Yo(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Yo(t) && Ie(n) ? !1 : t in e;
}
function js(e = "$style") {
  {
    const t = K0();
    if (!t)
      return we;
    const n = t.type.__cssModules;
    if (!n)
      return we;
    const u = n[e];
    return u || we;
  }
}
const Qo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Hu(t, n) : t;
};
function vf(e) {
  e.target.composing = !0;
}
function ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Jr = Symbol("_assign"), Cf = {
  created(e, { modifiers: { lazy: t, trim: n, number: u } }, r) {
    e[Jr] = Qo(r);
    const o = u || r.props && r.props.type === "number";
    $n(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let s = e.value;
      n && (s = s.trim()), o && (s = s0(s)), e[Jr](s);
    }), n && $n(e, "change", () => {
      e.value = e.value.trim();
    }), t || ($n(e, "compositionstart", vf), $n(e, "compositionend", ei), $n(e, "change", ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: u, trim: r, number: o } }, i) {
    if (e[Jr] = Qo(i), e.composing) return;
    const s = (o || e.type === "number") && !/^0\d/.test(e.value) ? s0(e.value) : e.value, c = t ?? "";
    s !== c && (document.activeElement === e && e.type !== "range" && (u && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, yf = ["ctrl", "shift", "alt", "meta"], Ef = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => yf.some((n) => e[`${n}Key`] && !t.includes(n))
}, Us = (e, t) => {
  const n = e._withMods || (e._withMods = {}), u = t.join(".");
  return n[u] || (n[u] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const s = Ef[t[i]];
      if (s && s(r, t)) return;
    }
    return e(r, ...o);
  });
}, Af = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Mf = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), u = t.join(".");
  return n[u] || (n[u] = (r) => {
    if (!("key" in r))
      return;
    const o = gn(r.key);
    if (t.some(
      (i) => i === o || Af[i] === o
    ))
      return e(r);
  });
}, Sf = /* @__PURE__ */ qe({ patchProp: kf }, Qd);
let ti;
function Df() {
  return ti || (ti = yd(Sf));
}
const Lf = (...e) => {
  const t = Df().createApp(...e), { mount: n } = t;
  return t.mount = (u) => {
    const r = If(u);
    if (!r) return;
    const o = t._component;
    !se(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Bf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Bf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function If(e) {
  return Ie(e) ? document.querySelector(e) : e;
}
const In = {
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
}, Ff = "#n8n-chat", Tf = "n8n-chat", ni = `${Tf}/sessionId`, Vs = "Chat", qs = "ChatOptions";
var We = [];
for (var Xr = 0; Xr < 256; ++Xr)
  We.push((Xr + 256).toString(16).slice(1));
function $f(e, t = 0) {
  return (We[e[t + 0]] + We[e[t + 1]] + We[e[t + 2]] + We[e[t + 3]] + "-" + We[e[t + 4]] + We[e[t + 5]] + "-" + We[e[t + 6]] + We[e[t + 7]] + "-" + We[e[t + 8]] + We[e[t + 9]] + "-" + We[e[t + 10]] + We[e[t + 11]] + We[e[t + 12]] + We[e[t + 13]] + We[e[t + 14]] + We[e[t + 15]]).toLowerCase();
}
var Nu, Rf = new Uint8Array(16);
function Nf() {
  if (!Nu && (Nu = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nu))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Nu(Rf);
}
var Of = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const ui = {
  randomUUID: Of
};
function tu(e, t, n) {
  if (ui.randomUUID && !e)
    return ui.randomUUID();
  e = e || {};
  var u = e.random || (e.rng || Nf)();
  return u[6] = u[6] & 15 | 64, u[8] = u[8] & 63 | 128, $f(u);
}
async function Pf() {
  return "";
}
async function J0(...e) {
  var o, i;
  const t = await Pf(), n = (o = e[1]) == null ? void 0 : o.body, u = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(i = e[1]) == null ? void 0 : i.headers
  };
  return n instanceof FormData ? delete u["Content-Type"] : u["Content-Type"] = "application/json", await (await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: u
  })).json();
}
async function Zs(e, t = {}, n = {}) {
  let u = e;
  return Object.keys(t).length > 0 && (u = `${u}?${new URLSearchParams(
    t
  ).toString()}`), await J0(u, { ...n, method: "GET" });
}
async function Ws(e, t = {}, n = {}) {
  return await J0(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function Hf(e, t = {}, n = [], u = {}) {
  const r = new FormData();
  for (const o in t)
    r.append(o, t[o]);
  for (const o of n)
    r.append("files", o);
  return await J0(e, {
    ...u,
    method: "POST",
    body: r
  });
}
async function zf(e, t) {
  var u, r;
  return await (((u = t.webhookConfig) == null ? void 0 : u.method) === "POST" ? Ws : Zs)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (r = t.webhookConfig) == null ? void 0 : r.headers
    }
  );
}
async function jf(e, t, n, u) {
  var o, i, s;
  return t.length > 0 ? await Hf(
    `${u.webhookUrl}`,
    {
      action: "sendMessage",
      [u.chatSessionKey]: n,
      [u.chatInputKey]: e,
      ...u.metadata ? { metadata: u.metadata } : {}
    },
    t,
    {
      headers: (o = u.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = u.webhookConfig) == null ? void 0 : i.method) === "POST" ? Ws : Zs)(
    `${u.webhookUrl}`,
    {
      action: "sendMessage",
      [u.chatSessionKey]: n,
      [u.chatInputKey]: e,
      ...u.metadata ? { metadata: u.metadata } : {}
    },
    {
      headers: (s = u.webhookConfig) == null ? void 0 : s.headers
    }
  );
}
function Uf() {
  const e = /* @__PURE__ */ new Map();
  function t(r, o) {
    const i = e.get(r);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(r, o) {
    let i = e.get(r);
    return i ? i.push(o) : i = [o], e.set(r, i), () => t(r, o);
  }
  function u(r, o) {
    const i = e.get(r);
    i && i.slice().forEach(async (s) => {
      await s(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: u
  };
}
function Vf(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
function qf(e) {
  if (!e) return;
  const t = Zf(e);
  t && Wf(t), e.customCSS && Gf(e.customCSS);
}
function Zf(e) {
  const t = {};
  return e.primaryColor && (t["--chat--color-primary"] = e.primaryColor), e.primaryColorShade50 && (t["--chat--color-primary-shade-50"] = e.primaryColorShade50), e.primaryColorShade100 && (t["--chat--color-primary-shade-100"] = e.primaryColorShade100), e.secondaryColor && (t["--chat--color-secondary"] = e.secondaryColor), e.secondaryColorShade50 && (t["--chat--color-secondary-shade-50"] = e.secondaryColorShade50), e.whiteColor && (t["--chat--color-white"] = e.whiteColor), e.lightColor && (t["--chat--color-light"] = e.lightColor), e.lightColorShade50 && (t["--chat--color-light-shade-50"] = e.lightColorShade50), e.lightColorShade100 && (t["--chat--color-light-shade-100"] = e.lightColorShade100), e.mediumColor && (t["--chat--color-medium"] = e.mediumColor), e.darkColor && (t["--chat--color-dark"] = e.darkColor), e.disabledColor && (t["--chat--color-disabled"] = e.disabledColor), e.typingColor && (t["--chat--color-typing"] = e.typingColor), e.spacing && (t["--chat--spacing"] = e.spacing), e.borderRadius && (t["--chat--border-radius"] = e.borderRadius), e.transitionDuration && (t["--chat--transition-duration"] = e.transitionDuration), e.fontFamily && (t["--chat--font-family"] = e.fontFamily), e.windowWidth && (t["--chat--window--width"] = e.windowWidth), e.windowHeight && (t["--chat--window--height"] = e.windowHeight), e.windowBottom && (t["--chat--window--bottom"] = e.windowBottom), e.windowRight && (t["--chat--window--right"] = e.windowRight), e.windowZIndex && (t["--chat--window--z-index"] = e.windowZIndex), e.windowBorder && (t["--chat--window--border"] = e.windowBorder), e.windowBorderRadius && (t["--chat--window--border-radius"] = e.windowBorderRadius), e.windowMarginBottom && (t["--chat--window--margin-bottom"] = e.windowMarginBottom), e.headerHeight && (t["--chat--header-height"] = e.headerHeight), e.headerPadding && (t["--chat--header--padding"] = e.headerPadding), e.headerBackground && (t["--chat--header--background"] = e.headerBackground), e.headerColor && (t["--chat--header--color"] = e.headerColor), e.headerBorderTop && (t["--chat--header--border-top"] = e.headerBorderTop), e.headerBorderBottom && (t["--chat--header--border-bottom"] = e.headerBorderBottom), e.headerBorderLeft && (t["--chat--header--border-left"] = e.headerBorderLeft), e.headerBorderRight && (t["--chat--header--border-right"] = e.headerBorderRight), e.headingFontSize && (t["--chat--heading--font-size"] = e.headingFontSize), e.subtitleFontSize && (t["--chat--subtitle--font-size"] = e.subtitleFontSize), e.subtitleLineHeight && (t["--chat--subtitle--line-height"] = e.subtitleLineHeight), e.messageFontSize && (t["--chat--message--font-size"] = e.messageFontSize), e.messagePadding && (t["--chat--message--padding"] = e.messagePadding), e.messageBorderRadius && (t["--chat--message--border-radius"] = e.messageBorderRadius), e.messageLineHeight && (t["--chat--message-line-height"] = e.messageLineHeight), e.messageMarginBottom && (t["--chat--message--margin-bottom"] = e.messageMarginBottom), e.botMessageBackground && (t["--chat--message--bot--background"] = e.botMessageBackground), e.botMessageColor && (t["--chat--message--bot--color"] = e.botMessageColor), e.botMessageBorder && (t["--chat--message--bot--border"] = e.botMessageBorder), e.userMessageBackground && (t["--chat--message--user--background"] = e.userMessageBackground), e.userMessageColor && (t["--chat--message--user--color"] = e.userMessageColor), e.userMessageBorder && (t["--chat--message--user--border"] = e.userMessageBorder), e.messagePreBackground && (t["--chat--message--pre--background"] = e.messagePreBackground), e.messagesListPadding && (t["--chat--messages-list--padding"] = e.messagesListPadding), e.toggleSize && (t["--chat--toggle--size"] = e.toggleSize), e.toggleWidth && (t["--chat--toggle--width"] = e.toggleWidth), e.toggleHeight && (t["--chat--toggle--height"] = e.toggleHeight), e.toggleBorderRadius && (t["--chat--toggle--border-radius"] = e.toggleBorderRadius), e.toggleBackground && (t["--chat--toggle--background"] = e.toggleBackground), e.toggleHoverBackground && (t["--chat--toggle--hover--background"] = e.toggleHoverBackground), e.toggleActiveBackground && (t["--chat--toggle--active--background"] = e.toggleActiveBackground), e.toggleColor && (t["--chat--toggle--color"] = e.toggleColor), e.textareaHeight && (t["--chat--textarea--height"] = e.textareaHeight), e.textareaMaxHeight && (t["--chat--textarea--max-height"] = e.textareaMaxHeight), e.inputFontSize && (t["--chat--input--font-size"] = e.inputFontSize), e.inputBorder && (t["--chat--input--border"] = e.inputBorder), e.inputBorderRadius && (t["--chat--input--border-radius"] = e.inputBorderRadius), e.inputPadding && (t["--chat--input--padding"] = e.inputPadding), e.inputBackground && (t["--chat--input--background"] = e.inputBackground), e.inputTextColor && (t["--chat--input--text-color"] = e.inputTextColor), e.inputLineHeight && (t["--chat--input--line-height"] = e.inputLineHeight), e.inputPlaceholderFontSize && (t["--chat--input--placeholder--font-size"] = e.inputPlaceholderFontSize), e.inputBorderActive && (t["--chat--input--border-active"] = e.inputBorderActive), e.inputLeftPanelWidth && (t["--chat--input--left--panel--width"] = e.inputLeftPanelWidth), e.buttonColor && (t["--chat--button--color"] = e.buttonColor), e.buttonBackground && (t["--chat--button--background"] = e.buttonBackground), e.buttonPadding && (t["--chat--button--padding"] = e.buttonPadding), e.buttonBorderRadius && (t["--chat--button--border-radius"] = e.buttonBorderRadius), e.buttonHoverColor && (t["--chat--button--hover--color"] = e.buttonHoverColor), e.buttonHoverBackground && (t["--chat--button--hover--background"] = e.buttonHoverBackground), e.closeButtonSize && (t["--chat--close--button--size"] = e.closeButtonSize), e.closeButtonColor && (t["--chat--close--button--color"] = e.closeButtonColor), e.closeButtonBackground && (t["--chat--close--button--background"] = e.closeButtonBackground), e.closeButtonColorHover && (t["--chat--close--button--color-hover"] = e.closeButtonColorHover), e.closeButtonBackgroundHover && (t["--chat--close--button--background-hover"] = e.closeButtonBackgroundHover), e.closeButtonBorderRadius && (t["--chat--close--button--border-radius"] = e.closeButtonBorderRadius), e.closeButtonPadding && (t["--chat--close--button--padding"] = e.closeButtonPadding), e.closeButtonIconSize && (t["--chat--close--button--icon-size"] = e.closeButtonIconSize), e.closeButtonPosition && (t["--chat--close--button--position"] = e.closeButtonPosition), e.closeButtonTop && (t["--chat--close--button--top"] = e.closeButtonTop), e.closeButtonRight && (t["--chat--close--button--right"] = e.closeButtonRight), e.closeButtonBottom && (t["--chat--close--button--bottom"] = e.closeButtonBottom), e.closeButtonLeft && (t["--chat--close--button--left"] = e.closeButtonLeft), e.closeButtonZIndex && (t["--chat--close--button--z-index"] = e.closeButtonZIndex), e.sendButtonBackground && (t["--chat--input--send--button--background"] = e.sendButtonBackground), e.sendButtonColor && (t["--chat--input--send--button--color"] = e.sendButtonColor), e.sendButtonBackgroundHover && (t["--chat--input--send--button--background-hover"] = e.sendButtonBackgroundHover), e.sendButtonColorHover && (t["--chat--input--send--button--color-hover"] = e.sendButtonColorHover), e.fileButtonBackground && (t["--chat--input--file--button--background"] = e.fileButtonBackground), e.fileButtonColor && (t["--chat--input--file--button--color"] = e.fileButtonColor), e.fileButtonBackgroundHover && (t["--chat--input--file--button--background-hover"] = e.fileButtonBackgroundHover), e.fileButtonColorHover && (t["--chat--input--file--button--color-hover"] = e.fileButtonColorHover), e.filesSpacing && (t["--chat--files-spacing"] = e.filesSpacing), e.elevenLabsButtonBackground && (t["--chat--input--elevenlabs--button--background"] = e.elevenLabsButtonBackground), e.elevenLabsButtonColor && (t["--chat--input--elevenlabs--button--color"] = e.elevenLabsButtonColor), e.elevenLabsButtonBackgroundHover && (t["--chat--input--elevenlabs--button--background-hover"] = e.elevenLabsButtonBackgroundHover), e.elevenLabsButtonColorHover && (t["--chat--input--elevenlabs--button--color-hover"] = e.elevenLabsButtonColorHover), e.elevenLabsButtonBackgroundDisabled && (t["--chat--input--elevenlabs--button--background-disabled"] = e.elevenLabsButtonBackgroundDisabled), e.elevenLabsButtonColorDisabled && (t["--chat--input--elevenlabs--button--color-disabled"] = e.elevenLabsButtonColorDisabled), e.elevenLabsButtonBorderRadius && (t["--chat--input--elevenlabs--button--border-radius"] = e.elevenLabsButtonBorderRadius), e.elevenLabsButtonFocusColor && (t["--chat--input--elevenlabs--button--focus-color"] = e.elevenLabsButtonFocusColor), e.bodyBackground && (t["--chat--body--background"] = e.bodyBackground), e.footerBackground && (t["--chat--footer--background"] = e.footerBackground), e.footerColor && (t["--chat--footer--color"] = e.footerColor), e.welcomeMessageBackground && (t["--chat--welcome-message--background"] = e.welcomeMessageBackground), e.welcomeMessageColor && (t["--chat--welcome-message--color"] = e.welcomeMessageColor), e.welcomeMessageBorder && (t["--chat--welcome-message--border"] = e.welcomeMessageBorder), e.welcomeMessageBorderRadius && (t["--chat--welcome-message--border-radius"] = e.welcomeMessageBorderRadius), e.welcomeMessagePadding && (t["--chat--welcome-message--padding"] = e.welcomeMessagePadding), e.welcomeMessageFontSize && (t["--chat--welcome-message--font-size"] = e.welcomeMessageFontSize), e.welcomeMessageFontFamily && (t["--chat--welcome-message--font-family"] = e.welcomeMessageFontFamily), e.welcomeMessageFontWeight && (t["--chat--welcome-message--font-weight"] = e.welcomeMessageFontWeight), e.welcomeMessageLineHeight && (t["--chat--welcome-message--line-height"] = e.welcomeMessageLineHeight), e.welcomeMessageMaxWidth && (t["--chat--welcome-message--max-width"] = e.welcomeMessageMaxWidth), e.welcomeMessageMinWidth && (t["--chat--welcome-message--min-width"] = e.welcomeMessageMinWidth), e.welcomeMessageBoxShadow && (t["--chat--welcome-message--box-shadow"] = e.welcomeMessageBoxShadow), e.welcomeMessageBoxShadowHover && (t["--chat--welcome-message--box-shadow-hover"] = e.welcomeMessageBoxShadowHover), e.welcomeMessageBorderHover && (t["--chat--welcome-message--border-hover"] = e.welcomeMessageBorderHover), e.welcomeMessageTransformHover && (t["--chat--welcome-message--transform-hover"] = e.welcomeMessageTransformHover), e.welcomeMessageTransition && (t["--chat--welcome-message--transition"] = e.welcomeMessageTransition), e.welcomeMessageZIndex && (t["--chat--welcome-message--z-index"] = e.welcomeMessageZIndex), e.welcomeMessagePosition && (t["--chat--welcome-message--position"] = e.welcomeMessagePosition), e.welcomeMessageBottom && (t["--chat--welcome-message--bottom"] = e.welcomeMessageBottom), e.welcomeMessageRight && (t["--chat--welcome-message--right"] = e.welcomeMessageRight), e.welcomeMessageTop && (t["--chat--welcome-message--top"] = e.welcomeMessageTop), e.welcomeMessageLeft && (t["--chat--welcome-message--left"] = e.welcomeMessageLeft), e.welcomeMessageAlignItems && (t["--chat--welcome-message--align-items"] = e.welcomeMessageAlignItems), e.welcomeMessageJustifyContent && (t["--chat--welcome-message--justify-content"] = e.welcomeMessageJustifyContent), e.welcomeMessageTextAlign && (t["--chat--welcome-message--text-align"] = e.welcomeMessageTextAlign), e.welcomeMessageIconSize && (t["--chat--welcome-message--icon--size"] = e.welcomeMessageIconSize), e.welcomeMessageIconGap && (t["--chat--welcome-message--icon--gap"] = e.welcomeMessageIconGap), e.welcomeMessageIconEmojiSize && (t["--chat--welcome-message--icon--emoji-size"] = e.welcomeMessageIconEmojiSize), e.welcomeMessageIconBorderRadius && (t["--chat--welcome-message--icon--border-radius"] = e.welcomeMessageIconBorderRadius), e.welcomeMessageIconBackground && (t["--chat--welcome-message--icon--background"] = e.welcomeMessageIconBackground), e.welcomeMessageIconPadding && (t["--chat--welcome-message--icon--padding"] = e.welcomeMessageIconPadding), e.welcomeMessageCloseSize && (t["--chat--welcome-message--close--size"] = e.welcomeMessageCloseSize), e.welcomeMessageCloseFontSize && (t["--chat--welcome-message--close--font-size"] = e.welcomeMessageCloseFontSize), e.welcomeMessageCloseColor && (t["--chat--welcome-message--close--color"] = e.welcomeMessageCloseColor), e.welcomeMessageCloseBackground && (t["--chat--welcome-message--close--background"] = e.welcomeMessageCloseBackground), e.welcomeMessageCloseBackgroundHover && (t["--chat--welcome-message--close--background-hover"] = e.welcomeMessageCloseBackgroundHover), e.welcomeMessageCloseColorHover && (t["--chat--welcome-message--close--color-hover"] = e.welcomeMessageCloseColorHover), e.welcomeMessageCloseBorderRadius && (t["--chat--welcome-message--close--border-radius"] = e.welcomeMessageCloseBorderRadius), e.welcomeMessageCloseTransition && (t["--chat--welcome-message--close--transition"] = e.welcomeMessageCloseTransition), e.welcomeMessageCloseFocusShadow && (t["--chat--welcome-message--close--focus-shadow"] = e.welcomeMessageCloseFocusShadow), e.welcomeMessageMobileMaxWidth && (t["--chat--welcome-message--mobile--max-width"] = e.welcomeMessageMobileMaxWidth), e.welcomeMessageMobileIconSize && (t["--chat--welcome-message--mobile--icon-size"] = e.welcomeMessageMobileIconSize), e.welcomeMessageMobileIconEmojiSize && (t["--chat--welcome-message--mobile--icon-emoji-size"] = e.welcomeMessageMobileIconEmojiSize), e.welcomeMessageMobileFontSize && (t["--chat--welcome-message--mobile--font-size"] = e.welcomeMessageMobileFontSize), e.welcomeMessageMobileGap && (t["--chat--welcome-message--mobile--gap"] = e.welcomeMessageMobileGap), e.welcomeMessageArrowRightOffset && (t["--chat--welcome-message--arrow--right-offset"] = e.welcomeMessageArrowRightOffset), e.headerIconSize && (t["--chat--header--icon--size"] = e.headerIconSize), e.headerIconMarginRight && (t["--chat--header--icon--margin-right"] = e.headerIconMarginRight), e.headerIconEmojiSize && (t["--chat--header--icon--emoji-size"] = e.headerIconEmojiSize), e.headerIconBorderRadius && (t["--chat--header--icon--border-radius"] = e.headerIconBorderRadius), e.headerIconBackground && (t["--chat--header--icon--background"] = e.headerIconBackground), e.headerIconPadding && (t["--chat--header--icon--padding"] = e.headerIconPadding), t;
}
function Wf(e) {
  const t = document.documentElement;
  Object.entries(e).forEach(([n, u]) => {
    t.style.setProperty(n, u);
  });
}
function Gf(e) {
  const t = "n8n-chat-theme", n = document.getElementById(t);
  n && n.remove();
  const u = document.createElement("style");
  u.id = t, u.textContent = e, document.head.appendChild(u);
}
function Kf(e) {
  if (!e.fontFamily) return;
  let t = "";
  if (e.fontFamily && (t += `
			.n8n-chat,
			.n8n-chat .chat-message,
			.n8n-chat .chat-input,
			.n8n-chat textarea,
			.n8n-chat button {
				font-family: ${e.fontFamily} !important;
			}
		`), t) {
    const n = "n8n-chat-fonts", u = document.getElementById(n);
    u && u.remove();
    const r = document.createElement("style");
    r.id = n, r.textContent = t, document.head.appendChild(r);
  }
}
const ut = Uf(), Jf = {
  install(e, t) {
    e.provide(qs, t);
    const n = Je([]), u = Je(null), r = Je(!1), o = ye(
      () => (t.initialMessages ?? []).map((d) => ({
        id: tu(),
        text: d,
        sender: "bot"
      }))
    );
    async function i(d, f = []) {
      const g = {
        id: tu(),
        text: d,
        sender: "user",
        files: f
      };
      n.value.push(g), r.value = !0, Vn(() => {
        ut.emit("scrollToBottom");
      });
      const x = await jf(
        d,
        f,
        u.value,
        t
      );
      let _ = x.output ?? x.text ?? "";
      if (_ === "" && Object.keys(x).length > 0)
        try {
          _ = JSON.stringify(x, null, 2);
        } catch {
        }
      const C = {
        id: tu(),
        text: _,
        sender: "bot"
      };
      n.value.push(C), r.value = !1, Vn(() => {
        ut.emit("scrollToBottom");
      });
    }
    async function s() {
      if (!t.loadPreviousSession)
        return;
      const d = localStorage.getItem(ni) ?? tu(), f = await zf(d, t);
      return n.value = ((f == null ? void 0 : f.data) || []).map((g, x) => ({
        id: `${x}`,
        text: g.kwargs.content,
        sender: g.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (u.value = d), d;
    }
    async function c() {
      u.value = tu(), localStorage.setItem(ni, u.value);
    }
    const l = {
      initialMessages: o,
      messages: n,
      currentSessionId: u,
      waitingForResponse: r,
      loadPreviousSession: s,
      startNewSession: c,
      sendMessage: i
    };
    e.provide(Vs, l), e.config.globalProperties.$chat = l;
  }
};
function Gs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr, ri;
function Xf() {
  if (ri) return Yr;
  ri = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((y) => {
      const O = b[y], ie = typeof O;
      (ie === "object" || ie === "function") && !Object.isFrozen(O) && e(O);
    }), b;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(y) {
      y.data === void 0 && (y.data = {}), this.data = y.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function u(b, ...y) {
    const O = /* @__PURE__ */ Object.create(null);
    for (const ie in b)
      O[ie] = b[ie];
    return y.forEach(function(ie) {
      for (const Fe in ie)
        O[Fe] = ie[Fe];
    }), /** @type {T} */
    O;
  }
  const r = "</span>", o = (b) => !!b.scope, i = (b, { prefix: y }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const O = b.split(".");
      return [
        `${y}${O.shift()}`,
        ...O.map((ie, Fe) => `${ie}${"_".repeat(Fe + 1)}`)
      ].join(" ");
    }
    return `${y}${b}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(y, O) {
      this.buffer = "", this.classPrefix = O.classPrefix, y.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(y) {
      this.buffer += n(y);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(y) {
      if (!o(y)) return;
      const O = i(
        y.scope,
        { prefix: this.classPrefix }
      );
      this.span(O);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(y) {
      o(y) && (this.buffer += r);
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
    span(y) {
      this.buffer += `<span class="${y}">`;
    }
  }
  const c = (b = {}) => {
    const y = { children: [] };
    return Object.assign(y, b), y;
  };
  class l {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(y) {
      this.top.children.push(y);
    }
    /** @param {string} scope */
    openNode(y) {
      const O = c({ scope: y });
      this.add(O), this.stack.push(O);
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
    walk(y) {
      return this.constructor._walk(y, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(y, O) {
      return typeof O == "string" ? y.addText(O) : O.children && (y.openNode(O), O.children.forEach((ie) => this._walk(y, ie)), y.closeNode(O)), y;
    }
    /**
     * @param {Node} node
     */
    static _collapse(y) {
      typeof y != "string" && y.children && (y.children.every((O) => typeof O == "string") ? y.children = [y.children.join("")] : y.children.forEach((O) => {
        l._collapse(O);
      }));
    }
  }
  class d extends l {
    /**
     * @param {*} options
     */
    constructor(y) {
      super(), this.options = y;
    }
    /**
     * @param {string} text
     */
    addText(y) {
      y !== "" && this.add(y);
    }
    /** @param {string} scope */
    startScope(y) {
      this.openNode(y);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(y, O) {
      const ie = y.root;
      O && (ie.scope = `language:${O}`), this.add(ie);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(b) {
    return b ? typeof b == "string" ? b : b.source : null;
  }
  function g(b) {
    return C("(?=", b, ")");
  }
  function x(b) {
    return C("(?:", b, ")*");
  }
  function _(b) {
    return C("(?:", b, ")?");
  }
  function C(...b) {
    return b.map((O) => f(O)).join("");
  }
  function N(b) {
    const y = b[b.length - 1];
    return typeof y == "object" && y.constructor === Object ? (b.splice(b.length - 1, 1), y) : {};
  }
  function F(...b) {
    return "(" + (N(b).capture ? "" : "?:") + b.map((ie) => f(ie)).join("|") + ")";
  }
  function S(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function B(b, y) {
    const O = b && b.exec(y);
    return O && O.index === 0;
  }
  const E = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function T(b, { joinWith: y }) {
    let O = 0;
    return b.map((ie) => {
      O += 1;
      const Fe = O;
      let Te = f(ie), G = "";
      for (; Te.length > 0; ) {
        const V = E.exec(Te);
        if (!V) {
          G += Te;
          break;
        }
        G += Te.substring(0, V.index), Te = Te.substring(V.index + V[0].length), V[0][0] === "\\" && V[1] ? G += "\\" + String(Number(V[1]) + Fe) : (G += V[0], V[0] === "(" && O++);
      }
      return G;
    }).map((ie) => `(${ie})`).join(y);
  }
  const j = /\b\B/, ue = "[a-zA-Z]\\w*", de = "[a-zA-Z_]\\w*", J = "\\b\\d+(\\.\\d+)?", ce = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", he = "\\b(0b[01]+)", U = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", be = (b = {}) => {
    const y = /^#![ ]*\//;
    return b.binary && (b.begin = C(
      y,
      /.*\b/,
      b.binary,
      /\b.*/
    )), u({
      scope: "meta",
      begin: y,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (O, ie) => {
        O.index !== 0 && ie.ignoreMatch();
      }
    }, b);
  }, pe = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, Z = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [pe]
  }, re = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [pe]
  }, oe = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, q = function(b, y, O = {}) {
    const ie = u(
      {
        scope: "comment",
        begin: b,
        end: y,
        contains: []
      },
      O
    );
    ie.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Fe = F(
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
    return ie.contains.push(
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
          Fe,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ie;
  }, Ce = q("//", "$"), He = q("/\\*", "\\*/"), Oe = q("#", "$"), Re = {
    scope: "number",
    begin: J,
    relevance: 0
  }, Mt = {
    scope: "number",
    begin: ce,
    relevance: 0
  }, Lr = {
    scope: "number",
    begin: he,
    relevance: 0
  }, Br = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      pe,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [pe]
      }
    ]
  }, bn = {
    scope: "title",
    begin: ue,
    relevance: 0
  }, Sn = {
    scope: "title",
    begin: de,
    relevance: 0
  }, Kn = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + de,
    relevance: 0
  };
  var St = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: Z,
    BACKSLASH_ESCAPE: pe,
    BINARY_NUMBER_MODE: Lr,
    BINARY_NUMBER_RE: he,
    COMMENT: q,
    C_BLOCK_COMMENT_MODE: He,
    C_LINE_COMMENT_MODE: Ce,
    C_NUMBER_MODE: Mt,
    C_NUMBER_RE: ce,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (y, O) => {
            O.data._beginMatch = y[1];
          },
          /** @type {ModeCallback} */
          "on:end": (y, O) => {
            O.data._beginMatch !== y[1] && O.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Oe,
    IDENT_RE: ue,
    MATCH_NOTHING_RE: j,
    METHOD_GUARD: Kn,
    NUMBER_MODE: Re,
    NUMBER_RE: J,
    PHRASAL_WORDS_MODE: oe,
    QUOTE_STRING_MODE: re,
    REGEXP_MODE: Br,
    RE_STARTERS_RE: U,
    SHEBANG: be,
    TITLE_MODE: bn,
    UNDERSCORE_IDENT_RE: de,
    UNDERSCORE_TITLE_MODE: Sn
  });
  function io(b, y) {
    b.input[b.index - 1] === "." && y.ignoreMatch();
  }
  function p(b, y) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function k(b, y) {
    y && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = io, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function v(b, y) {
    Array.isArray(b.illegal) && (b.illegal = F(...b.illegal));
  }
  function D(b, y) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function A(b, y) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const M = (b, y) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const O = Object.assign({}, b);
    Object.keys(b).forEach((ie) => {
      delete b[ie];
    }), b.keywords = O.keywords, b.begin = C(O.beforeMatch, g(O.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(O, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete O.beforeMatch;
  }, P = [
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
  ], R = "keyword";
  function $(b, y, O = R) {
    const ie = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? Fe(O, b.split(" ")) : Array.isArray(b) ? Fe(O, b) : Object.keys(b).forEach(function(Te) {
      Object.assign(
        ie,
        $(b[Te], y, Te)
      );
    }), ie;
    function Fe(Te, G) {
      y && (G = G.map((V) => V.toLowerCase())), G.forEach(function(V) {
        const ne = V.split("|");
        ie[ne[0]] = [Te, L(ne[0], ne[1])];
      });
    }
  }
  function L(b, y) {
    return y ? Number(y) : Y(b) ? 0 : 1;
  }
  function Y(b) {
    return P.includes(b.toLowerCase());
  }
  const z = {}, W = (b) => {
    console.error(b);
  }, ee = (b, ...y) => {
    console.log(`WARN: ${b}`, ...y);
  }, ae = (b, y) => {
    z[`${b}/${y}`] || (console.log(`Deprecated as of ${b}. ${y}`), z[`${b}/${y}`] = !0);
  }, xe = new Error();
  function me(b, y, { key: O }) {
    let ie = 0;
    const Fe = b[O], Te = {}, G = {};
    for (let V = 1; V <= y.length; V++)
      G[V + ie] = Fe[V], Te[V + ie] = !0, ie += S(y[V - 1]);
    b[O] = G, b[O]._emit = Te, b[O]._multi = !0;
  }
  function Ye(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), xe;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw W("beginScope must be object"), xe;
      me(b, b.begin, { key: "beginScope" }), b.begin = T(b.begin, { joinWith: "" });
    }
  }
  function Qe(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"), xe;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw W("endScope must be object"), xe;
      me(b, b.end, { key: "endScope" }), b.end = T(b.end, { joinWith: "" });
    }
  }
  function gt(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function bt(b) {
    gt(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Ye(b), Qe(b);
  }
  function mn(b) {
    function y(G, V) {
      return new RegExp(
        f(G),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (V ? "g" : "")
      );
    }
    class O {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(V, ne) {
        ne.position = this.position++, this.matchIndexes[this.matchAt] = ne, this.regexes.push([ne, V]), this.matchAt += S(V) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const V = this.regexes.map((ne) => ne[1]);
        this.matcherRe = y(T(V, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(V) {
        this.matcherRe.lastIndex = this.lastIndex;
        const ne = this.matcherRe.exec(V);
        if (!ne)
          return null;
        const ze = ne.findIndex((Xn, Fr) => Fr > 0 && Xn !== void 0), Ne = this.matchIndexes[ze];
        return ne.splice(0, ze), Object.assign(ne, Ne);
      }
    }
    class ie {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(V) {
        if (this.multiRegexes[V]) return this.multiRegexes[V];
        const ne = new O();
        return this.rules.slice(V).forEach(([ze, Ne]) => ne.addRule(ze, Ne)), ne.compile(), this.multiRegexes[V] = ne, ne;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(V, ne) {
        this.rules.push([V, ne]), ne.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(V) {
        const ne = this.getMatcher(this.regexIndex);
        ne.lastIndex = this.lastIndex;
        let ze = ne.exec(V);
        if (this.resumingScanAtSamePosition() && !(ze && ze.index === this.lastIndex)) {
          const Ne = this.getMatcher(0);
          Ne.lastIndex = this.lastIndex + 1, ze = Ne.exec(V);
        }
        return ze && (this.regexIndex += ze.position + 1, this.regexIndex === this.count && this.considerAll()), ze;
      }
    }
    function Fe(G) {
      const V = new ie();
      return G.contains.forEach((ne) => V.addRule(ne.begin, { rule: ne, type: "begin" })), G.terminatorEnd && V.addRule(G.terminatorEnd, { type: "end" }), G.illegal && V.addRule(G.illegal, { type: "illegal" }), V;
    }
    function Te(G, V) {
      const ne = (
        /** @type CompiledMode */
        G
      );
      if (G.isCompiled) return ne;
      [
        p,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        D,
        bt,
        M
      ].forEach((Ne) => Ne(G, V)), b.compilerExtensions.forEach((Ne) => Ne(G, V)), G.__beforeBegin = null, [
        k,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        v,
        // default to 1 relevance if not specified
        A
      ].forEach((Ne) => Ne(G, V)), G.isCompiled = !0;
      let ze = null;
      return typeof G.keywords == "object" && G.keywords.$pattern && (G.keywords = Object.assign({}, G.keywords), ze = G.keywords.$pattern, delete G.keywords.$pattern), ze = ze || /\w+/, G.keywords && (G.keywords = $(G.keywords, b.case_insensitive)), ne.keywordPatternRe = y(ze, !0), V && (G.begin || (G.begin = /\B|\b/), ne.beginRe = y(ne.begin), !G.end && !G.endsWithParent && (G.end = /\B|\b/), G.end && (ne.endRe = y(ne.end)), ne.terminatorEnd = f(ne.end) || "", G.endsWithParent && V.terminatorEnd && (ne.terminatorEnd += (G.end ? "|" : "") + V.terminatorEnd)), G.illegal && (ne.illegalRe = y(
        /** @type {RegExp | string} */
        G.illegal
      )), G.contains || (G.contains = []), G.contains = [].concat(...G.contains.map(function(Ne) {
        return st(Ne === "self" ? G : Ne);
      })), G.contains.forEach(function(Ne) {
        Te(
          /** @type Mode */
          Ne,
          ne
        );
      }), G.starts && Te(G.starts, V), ne.matcher = Fe(ne), ne;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = u(b.classNameAliases || {}), Te(
      /** @type Mode */
      b
    );
  }
  function Jn(b) {
    return b ? b.endsWithParent || Jn(b.starts) : !1;
  }
  function st(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(y) {
      return u(b, { variants: null }, y);
    })), b.cachedVariants ? b.cachedVariants : Jn(b) ? u(b, { starts: b.starts ? u(b.starts) : null }) : Object.isFrozen(b) ? u(b) : b;
  }
  var mt = "11.11.1";
  class Mu extends Error {
    constructor(y, O) {
      super(y), this.name = "HTMLInjectionError", this.html = O;
    }
  }
  const Dn = n, so = u, co = Symbol("nomatch"), R2 = 7, lo = function(b) {
    const y = /* @__PURE__ */ Object.create(null), O = /* @__PURE__ */ Object.create(null), ie = [];
    let Fe = !0;
    const Te = "Could not find the language '{}', did you forget to load/include a language module?", G = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let V = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function ne(I) {
      return V.noHighlightRe.test(I);
    }
    function ze(I) {
      let X = I.className + " ";
      X += I.parentNode ? I.parentNode.className : "";
      const ge = V.languageDetectRe.exec(X);
      if (ge) {
        const Ae = nn(ge[1]);
        return Ae || (ee(Te.replace("{}", ge[1])), ee("Falling back to no-highlight mode for this block.", I)), Ae ? ge[1] : "no-highlight";
      }
      return X.split(/\s+/).find((Ae) => ne(Ae) || nn(Ae));
    }
    function Ne(I, X, ge) {
      let Ae = "", Pe = "";
      typeof X == "object" ? (Ae = I, ge = X.ignoreIllegals, Pe = X.language) : (ae("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ae("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Pe = I, Ae = X), ge === void 0 && (ge = !0);
      const Ct = {
        code: Ae,
        language: Pe
      };
      Du("before:highlight", Ct);
      const un = Ct.result ? Ct.result : Xn(Ct.language, Ct.code, ge);
      return un.code = Ct.code, Du("after:highlight", un), un;
    }
    function Xn(I, X, ge, Ae) {
      const Pe = /* @__PURE__ */ Object.create(null);
      function Ct(H, K) {
        return H.keywords[K];
      }
      function un() {
        if (!le.keywords) {
          Ze.addText(Me);
          return;
        }
        let H = 0;
        le.keywordPatternRe.lastIndex = 0;
        let K = le.keywordPatternRe.exec(Me), fe = "";
        for (; K; ) {
          fe += Me.substring(H, K.index);
          const ve = Lt.case_insensitive ? K[0].toLowerCase() : K[0], et = Ct(le, ve);
          if (et) {
            const [Ht, Q2] = et;
            if (Ze.addText(fe), fe = "", Pe[ve] = (Pe[ve] || 0) + 1, Pe[ve] <= R2 && (Iu += Q2), Ht.startsWith("_"))
              fe += K[0];
            else {
              const e1 = Lt.classNameAliases[Ht] || Ht;
              Dt(K[0], e1);
            }
          } else
            fe += K[0];
          H = le.keywordPatternRe.lastIndex, K = le.keywordPatternRe.exec(Me);
        }
        fe += Me.substring(H), Ze.addText(fe);
      }
      function Lu() {
        if (Me === "") return;
        let H = null;
        if (typeof le.subLanguage == "string") {
          if (!y[le.subLanguage]) {
            Ze.addText(Me);
            return;
          }
          H = Xn(le.subLanguage, Me, !0, _o[le.subLanguage]), _o[le.subLanguage] = /** @type {CompiledMode} */
          H._top;
        } else
          H = Tr(Me, le.subLanguage.length ? le.subLanguage : null);
        le.relevance > 0 && (Iu += H.relevance), Ze.__addSublanguage(H._emitter, H.language);
      }
      function dt() {
        le.subLanguage != null ? Lu() : un(), Me = "";
      }
      function Dt(H, K) {
        H !== "" && (Ze.startScope(K), Ze.addText(H), Ze.endScope());
      }
      function po(H, K) {
        let fe = 1;
        const ve = K.length - 1;
        for (; fe <= ve; ) {
          if (!H._emit[fe]) {
            fe++;
            continue;
          }
          const et = Lt.classNameAliases[H[fe]] || H[fe], Ht = K[fe];
          et ? Dt(Ht, et) : (Me = Ht, un(), Me = ""), fe++;
        }
      }
      function go(H, K) {
        return H.scope && typeof H.scope == "string" && Ze.openNode(Lt.classNameAliases[H.scope] || H.scope), H.beginScope && (H.beginScope._wrap ? (Dt(Me, Lt.classNameAliases[H.beginScope._wrap] || H.beginScope._wrap), Me = "") : H.beginScope._multi && (po(H.beginScope, K), Me = "")), le = Object.create(H, { parent: { value: le } }), le;
      }
      function bo(H, K, fe) {
        let ve = B(H.endRe, fe);
        if (ve) {
          if (H["on:end"]) {
            const et = new t(H);
            H["on:end"](K, et), et.isMatchIgnored && (ve = !1);
          }
          if (ve) {
            for (; H.endsParent && H.parent; )
              H = H.parent;
            return H;
          }
        }
        if (H.endsWithParent)
          return bo(H.parent, K, fe);
      }
      function G2(H) {
        return le.matcher.regexIndex === 0 ? (Me += H[0], 1) : (Or = !0, 0);
      }
      function K2(H) {
        const K = H[0], fe = H.rule, ve = new t(fe), et = [fe.__beforeBegin, fe["on:begin"]];
        for (const Ht of et)
          if (Ht && (Ht(H, ve), ve.isMatchIgnored))
            return G2(K);
        return fe.skip ? Me += K : (fe.excludeBegin && (Me += K), dt(), !fe.returnBegin && !fe.excludeBegin && (Me = K)), go(fe, H), fe.returnBegin ? 0 : K.length;
      }
      function J2(H) {
        const K = H[0], fe = X.substring(H.index), ve = bo(le, H, fe);
        if (!ve)
          return co;
        const et = le;
        le.endScope && le.endScope._wrap ? (dt(), Dt(K, le.endScope._wrap)) : le.endScope && le.endScope._multi ? (dt(), po(le.endScope, H)) : et.skip ? Me += K : (et.returnEnd || et.excludeEnd || (Me += K), dt(), et.excludeEnd && (Me = K));
        do
          le.scope && Ze.closeNode(), !le.skip && !le.subLanguage && (Iu += le.relevance), le = le.parent;
        while (le !== ve.parent);
        return ve.starts && go(ve.starts, H), et.returnEnd ? 0 : K.length;
      }
      function X2() {
        const H = [];
        for (let K = le; K !== Lt; K = K.parent)
          K.scope && H.unshift(K.scope);
        H.forEach((K) => Ze.openNode(K));
      }
      let Bu = {};
      function mo(H, K) {
        const fe = K && K[0];
        if (Me += H, fe == null)
          return dt(), 0;
        if (Bu.type === "begin" && K.type === "end" && Bu.index === K.index && fe === "") {
          if (Me += X.slice(K.index, K.index + 1), !Fe) {
            const ve = new Error(`0 width match regex (${I})`);
            throw ve.languageName = I, ve.badRule = Bu.rule, ve;
          }
          return 1;
        }
        if (Bu = K, K.type === "begin")
          return K2(K);
        if (K.type === "illegal" && !ge) {
          const ve = new Error('Illegal lexeme "' + fe + '" for mode "' + (le.scope || "<unnamed>") + '"');
          throw ve.mode = le, ve;
        } else if (K.type === "end") {
          const ve = J2(K);
          if (ve !== co)
            return ve;
        }
        if (K.type === "illegal" && fe === "")
          return Me += `
`, 1;
        if (Nr > 1e5 && Nr > K.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Me += fe, fe.length;
      }
      const Lt = nn(I);
      if (!Lt)
        throw W(Te.replace("{}", I)), new Error('Unknown language: "' + I + '"');
      const Y2 = mn(Lt);
      let Rr = "", le = Ae || Y2;
      const _o = {}, Ze = new V.__emitter(V);
      X2();
      let Me = "", Iu = 0, _n = 0, Nr = 0, Or = !1;
      try {
        if (Lt.__emitTokens)
          Lt.__emitTokens(X, Ze);
        else {
          for (le.matcher.considerAll(); ; ) {
            Nr++, Or ? Or = !1 : le.matcher.considerAll(), le.matcher.lastIndex = _n;
            const H = le.matcher.exec(X);
            if (!H) break;
            const K = X.substring(_n, H.index), fe = mo(K, H);
            _n = H.index + fe;
          }
          mo(X.substring(_n));
        }
        return Ze.finalize(), Rr = Ze.toHTML(), {
          language: I,
          value: Rr,
          relevance: Iu,
          illegal: !1,
          _emitter: Ze,
          _top: le
        };
      } catch (H) {
        if (H.message && H.message.includes("Illegal"))
          return {
            language: I,
            value: Dn(X),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: H.message,
              index: _n,
              context: X.slice(_n - 100, _n + 100),
              mode: H.mode,
              resultSoFar: Rr
            },
            _emitter: Ze
          };
        if (Fe)
          return {
            language: I,
            value: Dn(X),
            illegal: !1,
            relevance: 0,
            errorRaised: H,
            _emitter: Ze,
            _top: le
          };
        throw H;
      }
    }
    function Fr(I) {
      const X = {
        value: Dn(I),
        illegal: !1,
        relevance: 0,
        _top: G,
        _emitter: new V.__emitter(V)
      };
      return X._emitter.addText(I), X;
    }
    function Tr(I, X) {
      X = X || V.languages || Object.keys(y);
      const ge = Fr(I), Ae = X.filter(nn).filter(ho).map(
        (dt) => Xn(dt, I, !1)
      );
      Ae.unshift(ge);
      const Pe = Ae.sort((dt, Dt) => {
        if (dt.relevance !== Dt.relevance) return Dt.relevance - dt.relevance;
        if (dt.language && Dt.language) {
          if (nn(dt.language).supersetOf === Dt.language)
            return 1;
          if (nn(Dt.language).supersetOf === dt.language)
            return -1;
        }
        return 0;
      }), [Ct, un] = Pe, Lu = Ct;
      return Lu.secondBest = un, Lu;
    }
    function N2(I, X, ge) {
      const Ae = X && O[X] || ge;
      I.classList.add("hljs"), I.classList.add(`language-${Ae}`);
    }
    function $r(I) {
      let X = null;
      const ge = ze(I);
      if (ne(ge)) return;
      if (Du(
        "before:highlightElement",
        { el: I, language: ge }
      ), I.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", I);
        return;
      }
      if (I.children.length > 0 && (V.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(I)), V.throwUnescapedHTML))
        throw new Mu(
          "One of your code blocks includes unescaped HTML.",
          I.innerHTML
        );
      X = I;
      const Ae = X.textContent, Pe = ge ? Ne(Ae, { language: ge, ignoreIllegals: !0 }) : Tr(Ae);
      I.innerHTML = Pe.value, I.dataset.highlighted = "yes", N2(I, ge, Pe.language), I.result = {
        language: Pe.language,
        // TODO: remove with version 11.0
        re: Pe.relevance,
        relevance: Pe.relevance
      }, Pe.secondBest && (I.secondBest = {
        language: Pe.secondBest.language,
        relevance: Pe.secondBest.relevance
      }), Du("after:highlightElement", { el: I, result: Pe, text: Ae });
    }
    function O2(I) {
      V = so(V, I);
    }
    const P2 = () => {
      Su(), ae("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function H2() {
      Su(), ae("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ao = !1;
    function Su() {
      function I() {
        Su();
      }
      if (document.readyState === "loading") {
        ao || window.addEventListener("DOMContentLoaded", I, !1), ao = !0;
        return;
      }
      document.querySelectorAll(V.cssSelector).forEach($r);
    }
    function z2(I, X) {
      let ge = null;
      try {
        ge = X(b);
      } catch (Ae) {
        if (W("Language definition for '{}' could not be registered.".replace("{}", I)), Fe)
          W(Ae);
        else
          throw Ae;
        ge = G;
      }
      ge.name || (ge.name = I), y[I] = ge, ge.rawDefinition = X.bind(null, b), ge.aliases && fo(ge.aliases, { languageName: I });
    }
    function j2(I) {
      delete y[I];
      for (const X of Object.keys(O))
        O[X] === I && delete O[X];
    }
    function U2() {
      return Object.keys(y);
    }
    function nn(I) {
      return I = (I || "").toLowerCase(), y[I] || y[O[I]];
    }
    function fo(I, { languageName: X }) {
      typeof I == "string" && (I = [I]), I.forEach((ge) => {
        O[ge.toLowerCase()] = X;
      });
    }
    function ho(I) {
      const X = nn(I);
      return X && !X.disableAutodetect;
    }
    function V2(I) {
      I["before:highlightBlock"] && !I["before:highlightElement"] && (I["before:highlightElement"] = (X) => {
        I["before:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      }), I["after:highlightBlock"] && !I["after:highlightElement"] && (I["after:highlightElement"] = (X) => {
        I["after:highlightBlock"](
          Object.assign({ block: X.el }, X)
        );
      });
    }
    function q2(I) {
      V2(I), ie.push(I);
    }
    function Z2(I) {
      const X = ie.indexOf(I);
      X !== -1 && ie.splice(X, 1);
    }
    function Du(I, X) {
      const ge = I;
      ie.forEach(function(Ae) {
        Ae[ge] && Ae[ge](X);
      });
    }
    function W2(I) {
      return ae("10.7.0", "highlightBlock will be removed entirely in v12.0"), ae("10.7.0", "Please use highlightElement now."), $r(I);
    }
    Object.assign(b, {
      highlight: Ne,
      highlightAuto: Tr,
      highlightAll: Su,
      highlightElement: $r,
      // TODO: Remove with v12 API
      highlightBlock: W2,
      configure: O2,
      initHighlighting: P2,
      initHighlightingOnLoad: H2,
      registerLanguage: z2,
      unregisterLanguage: j2,
      listLanguages: U2,
      getLanguage: nn,
      registerAliases: fo,
      autoDetection: ho,
      inherit: so,
      addPlugin: q2,
      removePlugin: Z2
    }), b.debugMode = function() {
      Fe = !1;
    }, b.safeMode = function() {
      Fe = !0;
    }, b.versionString = mt, b.regex = {
      concat: C,
      lookahead: g,
      either: F,
      optional: _,
      anyNumberOfTimes: x
    };
    for (const I in St)
      typeof St[I] == "object" && e(St[I]);
    return Object.assign(b, St), b;
  }, Ln = lo({});
  return Ln.newInstance = () => lo({}), Yr = Ln, Ln.HighlightJS = Ln, Ln.default = Ln, Yr;
}
var Yf = /* @__PURE__ */ Xf();
const Vt = /* @__PURE__ */ Gs(Yf), oi = "[A-Za-z$_][0-9A-Za-z$_]*", Qf = [
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
], eh = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Ks = [
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
], Js = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Xs = [
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
], th = [
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
], nh = [].concat(
  Xs,
  Ks,
  Js
);
function Ys(e) {
  const t = e.regex, n = (q, { after: Ce }) => {
    const He = "</" + q[0].slice(1);
    return q.input.indexOf(He, Ce) !== -1;
  }, u = oi, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, Ce) => {
      const He = q[0].length + q.index, Oe = q.input[He];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Oe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Oe === ","
      ) {
        Ce.ignoreMatch();
        return;
      }
      Oe === ">" && (n(q, { after: He }) || Ce.ignoreMatch());
      let Re;
      const Mt = q.input.substring(He);
      if (Re = Mt.match(/^\s*=/)) {
        Ce.ignoreMatch();
        return;
      }
      if ((Re = Mt.match(/^\s+extends\s+/)) && Re.index === 0) {
        Ce.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: oi,
    keyword: Qf,
    literal: eh,
    built_in: nh,
    "variable.language": th
  }, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
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
  }, g = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
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
        g
      ],
      subLanguage: "xml"
    }
  }, _ = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        g
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
        g
      ],
      subLanguage: "graphql"
    }
  }, N = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      g
    ]
  }, S = {
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
                  begin: u + "(?=\\s*(-)|$)",
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
  }, B = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    x,
    _,
    C,
    N,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  g.contains = B.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(B)
  });
  const E = [].concat(S, g.contains), T = E.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(E)
    }
  ]), j = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: T
  }, ue = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          u,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(u, "(", t.concat(/\./, u), ")*")
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
          u
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, de = {
    relevance: 0,
    match: t.either(
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
        ...Ks,
        ...Js
      ]
    }
  }, J = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ce = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          u,
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
    contains: [j],
    illegal: /%/
  }, he = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function U(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const be = {
    match: t.concat(
      /\b/,
      U([
        ...Xs,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, pe = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Z = {
    match: [
      /get|set/,
      /\s+/,
      u,
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
      j
    ]
  }, re = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", oe = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(re)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      j
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: T, CLASS_REFERENCE: de },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      J,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      x,
      _,
      C,
      N,
      S,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      de,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      oe,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          S,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: re,
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
                    keywords: s,
                    contains: T
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
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      ce,
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
          j,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      pe,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + u,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [j]
      },
      be,
      he,
      ue,
      Z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Qs(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), u = /[\p{L}0-9._:-]+/u, r = {
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
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), l = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: u,
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
          c,
          s,
          i,
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
                  i,
                  c,
                  s
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
              c
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
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: l
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
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
const uh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rh(e, t) {
  return h(), m("svg", uh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ])]);
}
const oh = w({ name: "mdi-close", render: rh }), Mn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [u, r] of t)
    n[u] = r;
  return n;
}, ih = {}, sh = { class: "chat-button" };
function ch(e, t) {
  return h(), m("button", sh, [
    Gt(e.$slots, "default")
  ]);
}
const lh = /* @__PURE__ */ Mn(ih, [["render", ch]]);
function X0() {
  return jn(Vs);
}
function tn() {
  return {
    options: jn(qs)
  };
}
function Cu() {
  const { options: e } = tn(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(r) {
    var i, s;
    const o = (s = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : s[r];
    return Ve(o) ? o.value : o ?? r;
  }
  function u(r) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[r]);
  }
  return { t: n, te: u };
}
const ah = { class: "chat-get-started" }, dh = /* @__PURE__ */ it({
  __name: "GetStarted",
  setup(e) {
    const { t } = Cu();
    return (n, u) => (h(), m("div", ah, [
      Ee(lh, {
        onClick: u[0] || (u[0] = (r) => n.$emit("click:button"))
      }, {
        default: kt(() => [
          Cr(Nt(te(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), fh = {}, hh = { class: "chat-powered-by" };
function ph(e, t) {
  return h(), m("div", hh, [...t[0] || (t[0] = [
    Cr(" Powered by ", -1),
    a("a", { href: "https://pragmatiqai.com" }, "PragmatiqAi", -1)
  ])]);
}
const gh = /* @__PURE__ */ Mn(fh, [["render", ph]]), bh = { class: "chat-get-started-footer" }, mh = { key: 0 }, _h = /* @__PURE__ */ it({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = Cu(), { options: u } = tn();
    return (r, o) => (h(), m("div", bh, [
      te(n)("footer") ? (h(), m("div", mh, Nt(te(t)("footer")), 1)) : $e("", !0),
      te(u).showPoweredBy ? (h(), Be(gh, { key: 1 })) : $e("", !0)
    ]));
  }
});
function xh(e) {
  return Ni() ? (h1(e), !0) : !1;
}
function kh() {
  const e = /* @__PURE__ */ new Set(), t = (r) => {
    e.delete(r);
  };
  return {
    on: (r) => {
      e.add(r);
      const o = () => t(r);
      return xh(o), {
        off: o
      };
    },
    off: t,
    trigger: (...r) => Promise.all(Array.from(e).map((o) => o(...r)))
  };
}
const wh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const vh = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Ch = wh ? window.document : void 0, yh = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Eh(e = {}) {
  const {
    document: t = Ch
  } = e, n = Je(null), { on: u, trigger: r } = kh();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (c) => {
    const l = c.target;
    n.value = l.files, r(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", r(null));
  }, s = (c) => {
    if (!o)
      return;
    const l = {
      ...yh,
      ...e,
      ...c
    };
    o.multiple = l.multiple, o.accept = l.accept, o.webkitdirectory = l.directory, vh(l, "capture") && (o.capture = l.capture), l.reset && i(), o.click();
  };
  return {
    files: H0(n),
    open: s,
    reset: i,
    onChange: u
  };
}
const Ah = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Mh(e, t) {
  return h(), m("svg", Ah, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ])]);
}
const Sh = w({ name: "mdi-paperclip", render: Mh }), Dh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Lh(e, t) {
  return h(), m("svg", Dh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ])]);
}
const Bh = w({ name: "mdi-send", render: Lh }), Ih = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Fh(e, t) {
  return h(), m("svg", Ih, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ])]);
}
const Th = w({ name: "mdi-closeThick", render: Fh }), $h = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rh(e, t) {
  return h(), m("svg", $h, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ])]);
}
const Nh = w({ name: "mdi-fileImage", render: Rh }), Oh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ph(e, t) {
  return h(), m("svg", Oh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ])]);
}
const Hh = w({ name: "mdi-fileMusic", render: Ph }), zh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jh(e, t) {
  return h(), m("svg", zh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ])]);
}
const ii = w({ name: "mdi-fileText", render: jh }), Uh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vh(e, t) {
  return h(), m("svg", Uh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ])]);
}
const qh = w({ name: "mdi-fileVideo", render: Vh }), Zh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Wh(e, t) {
  return h(), m("svg", Zh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ])]);
}
const Gh = w({ name: "mdi-openInNew", render: Wh }), Kh = { class: "chat-file-name" }, Jh = /* @__PURE__ */ it({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, u = t, r = {
      document: ii,
      audio: Hh,
      image: Nh,
      video: qh
    }, o = ye(() => {
      var l;
      const c = (l = n.file) == null ? void 0 : l.type.split("/")[0];
      return r[c] || ii;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function s() {
      u("remove", n.file);
    }
    return (c, l) => (h(), m("div", {
      class: "chat-file",
      onClick: i
    }, [
      Ee(te(o)),
      a("p", Kh, Nt(c.file.name), 1),
      c.isRemovable ? (h(), m("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: Us(s, ["stop"])
      }, [
        Ee(te(Th))
      ])) : c.isPreviewable ? (h(), Be(te(Gh), {
        key: 1,
        class: "chat-file-preview"
      })) : $e("", !0)
    ]));
  }
}), ec = /* @__PURE__ */ Mn(Jh, [["__scopeId", "data-v-094335ce"]]), Xh = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Yh(e, t) {
  return h(), m("svg", Xh, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z"
    }, null, -1)
  ])]);
}
const Qh = w({ name: "mdi-microphone", render: Yh }), e3 = ["disabled", "title"], t3 = /* @__PURE__ */ it({
  __name: "ElevenLabsButton",
  props: {
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const { t } = Cu(), { options: n } = tn(), u = ye(() => n.showElevenLabsButton === !0 && n.elevenLabsAgentUrl);
    function r() {
      if (!n.elevenLabsAgentUrl) {
        console.warn("ElevenLabs agent URL not configured");
        return;
      }
      window.open(n.elevenLabsAgentUrl, "_blank", "noopener,noreferrer");
    }
    return (o, i) => u.value ? (h(), m("button", {
      key: 0,
      disabled: o.disabled,
      class: "chat-input-elevenlabs-button",
      title: te(t)("elevenLabsButtonTooltip"),
      "data-test-id": "chat-elevenlabs-button",
      onClick: r
    }, [
      Ee(te(Qh), {
        height: "24",
        width: "24"
      })
    ], 8, e3)) : $e("", !0);
  }
}), n3 = /* @__PURE__ */ Mn(t3, [["__scopeId", "data-v-fc67886f"]]), u3 = { class: "chat-inputs" }, r3 = {
  key: 0,
  class: "chat-input-left-panel"
}, o3 = ["disabled", "placeholder"], i3 = { class: "chat-inputs-controls" }, s3 = ["disabled"], c3 = ["disabled"], l3 = {
  key: 0,
  class: "chat-files"
}, a3 = /* @__PURE__ */ it({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: u } = Cu(), r = t, { options: o } = tn(), i = X0(), { waitingForResponse: s } = i, c = Je(null), l = Je(null), d = Je(""), f = Je(!1), g = Je(null), x = ye(() => {
      var Z;
      return d.value === "" || te(s) || ((Z = o.disabled) == null ? void 0 : Z.value) === !0;
    }), _ = ye(() => {
      var Z;
      return ((Z = o.disabled) == null ? void 0 : Z.value) === !0;
    }), C = ye(
      () => {
        var Z;
        return N.value && te(s) && !((Z = o.disabled) != null && Z.value);
      }
    ), N = ye(() => te(o.allowFileUploads) === !0), F = ye(() => te(o.allowedFilesMimeTypes)), S = ye(() => ({
      "--controls-count": N.value ? 2 : 1
    })), {
      open: B,
      reset: E,
      onChange: T
    } = Eh({
      multiple: !0,
      reset: !1
    });
    T((Z) => {
      if (!Z) return;
      const re = new DataTransfer();
      if (c.value)
        for (let oe = 0; oe < c.value.length; oe++)
          re.items.add(c.value[oe]);
      for (let oe = 0; oe < Z.length; oe++)
        re.items.add(Z[oe]);
      c.value = re.files;
    }), Qt(() => {
      ut.on("focusInput", ue), ut.on("blurInput", j), ut.on("setInputValue", de), l.value && (g.value = new ResizeObserver((Z) => {
        for (const re of Z)
          re.target === l.value && pe();
      }), g.value.observe(l.value));
    }), kr(() => {
      ut.off("focusInput", ue), ut.off("blurInput", j), ut.off("setInputValue", de), g.value && (g.value.disconnect(), g.value = null);
    });
    function j() {
      l.value && l.value.blur();
    }
    function ue() {
      l.value && l.value.focus();
    }
    function de(Z) {
      d.value = Z, ue();
    }
    async function J(Z) {
      if (Z.preventDefault(), x.value)
        return;
      const re = d.value;
      d.value = "", f.value = !0, await i.sendMessage(re, Array.from(c.value ?? [])), f.value = !1, E(), c.value = null;
    }
    async function ce(Z) {
      Z.shiftKey || (await J(Z), pe());
    }
    function he(Z) {
      if (!c.value) return;
      const re = new DataTransfer();
      for (let oe = 0; oe < c.value.length; oe++) {
        const q = c.value[oe];
        Z.name !== q.name && re.items.add(q);
      }
      E(), c.value = re.files;
    }
    function U(Z) {
      (Z.key === "ArrowUp" || Z.key === "ArrowDown") && (Z.preventDefault(), r("arrowKeyDown", {
        key: Z.key,
        currentInputValue: d.value
      }));
    }
    function be() {
      C.value || B({ accept: te(F) });
    }
    function pe() {
      const Z = l.value;
      if (!Z) return;
      Z.style.height = "var(--chat--textarea--height)";
      const re = Math.min(Z.scrollHeight, 480);
      Z.style.height = `${re}px`;
    }
    return (Z, re) => {
      var oe, q;
      return h(), m("div", {
        class: "chat-input",
        style: Wn(S.value),
        onKeydown: Us(U, ["stop"])
      }, [
        a("div", u3, [
          Z.$slots.leftPanel ? (h(), m("div", r3, [
            Gt(Z.$slots, "leftPanel", {}, void 0, !0)
          ])) : $e("", !0),
          os(a("textarea", {
            ref_key: "chatTextArea",
            ref: l,
            "onUpdate:modelValue": re[0] || (re[0] = (Ce) => d.value = Ce),
            "data-test-id": "chat-input",
            disabled: _.value,
            placeholder: te(u)(n.placeholder),
            onKeydown: Mf(ce, ["enter"]),
            onInput: pe,
            onMousedown: pe,
            onFocus: pe
          }, null, 40, o3), [
            [Cf, d.value]
          ]),
          a("div", i3, [
            N.value ? (h(), m("button", {
              key: 0,
              disabled: C.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: be
            }, [
              Ee(te(Sh), {
                height: "24",
                width: "24"
              })
            ], 8, s3)) : $e("", !0),
            Ee(n3, {
              disabled: te(te(s)) || ((oe = te(o).disabled) == null ? void 0 : oe.value) === !0
            }, null, 8, ["disabled"]),
            a("button", {
              disabled: x.value,
              class: "chat-input-send-button",
              onClick: J
            }, [
              Ee(te(Bh), {
                height: "24",
                width: "24"
              })
            ], 8, c3)
          ])
        ]),
        (q = c.value) != null && q.length && !f.value ? (h(), m("div", l3, [
          (h(!0), m(Ke, null, nr(c.value, (Ce) => (h(), Be(ec, {
            key: Ce.name,
            file: Ce,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: he
          }, null, 8, ["file"]))), 128))
        ])) : $e("", !0)
      ], 36);
    };
  }
}), d3 = /* @__PURE__ */ Mn(a3, [["__scopeId", "data-v-b58b63af"]]), f3 = { class: "chat-layout" }, h3 = {
  key: 0,
  class: "chat-header"
}, p3 = {
  key: 2,
  class: "chat-footer"
}, g3 = /* @__PURE__ */ it({
  __name: "Layout",
  setup(e) {
    const t = Je(null);
    function n() {
      const u = t.value;
      u && (u.scrollTop = u.scrollHeight);
    }
    return Qt(() => {
      ut.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), V0(() => {
      ut.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (u, r) => (h(), m("main", f3, [
      u.$slots.header ? (h(), m("div", h3, [
        Gt(u.$slots, "header")
      ])) : $e("", !0),
      u.$slots.default ? (h(), m("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        Gt(u.$slots, "default")
      ], 512)) : $e("", !0),
      u.$slots.footer ? (h(), m("div", p3, [
        Gt(u.$slots, "footer")
      ])) : $e("", !0)
    ]));
  }
}), tc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", nc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", uc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M10.3019%200C10.542%200%2010.7678%200.0476193%2010.9791%200.142858C11.1905%200.238096%2011.373%200.371429%2011.5267%200.542858C11.6805%200.714286%2011.8005%200.92381%2011.887%201.17143C11.9735%201.40952%2012.0167%201.67619%2012.0167%201.97143L12.0023%203.38571C12.0023%203.50952%2012.0023%203.61429%2012.0023%203.7C12.0119%203.78571%2012.0263%203.87143%2012.0455%203.95714C12.0647%204.04286%2012.0936%204.13333%2012.132%204.22857C12.18%204.31429%2012.2425%204.42857%2012.3193%204.57143L12.8237%205.24286C12.9198%205.4619%2012.9774%205.66667%2012.9966%205.85714C13.0158%206.0381%2012.9534%206.25238%2012.8093%206.5L12.3337%207.11429C12.2569%207.26667%2012.1944%207.39524%2012.1464%207.5C12.108%207.60476%2012.0791%207.70476%2012.0599%207.8C12.0407%207.89524%2012.0263%207.99524%2012.0167%208.1C12.0167%208.20476%2012.0167%208.33333%2012.0167%208.48571V9.7C12.0167%2010.0048%2011.9783%2010.2952%2011.9014%2010.5714C11.8342%2010.8381%2011.7333%2011.0714%2011.5988%2011.2714C11.4739%2011.4714%2011.3154%2011.6286%2011.1233%2011.7429C10.9311%2011.8571%2010.7198%2011.9143%2010.4892%2011.9143L9.49487%2012C9.48526%2012%209.42282%2012%209.30753%2012C9.19225%2012%209.05775%2011.9905%208.90404%2011.9714C8.75993%2011.9619%208.61103%2011.9381%208.45731%2011.9C8.31321%2011.8714%208.20273%2011.819%208.12587%2011.7429C8.06823%2011.6952%208.0202%2011.619%207.98177%2011.5143C7.95295%2011.4095%207.93854%2011.3095%207.93854%2011.2143C7.93854%2011.0238%208.00579%2010.8762%208.14028%2010.7714C8.27478%2010.6667%208.42369%2010.6%208.58701%2010.5714C8.75993%2010.5333%208.92806%2010.5143%209.09137%2010.5143H9.71102C10.0953%2010.5143%2010.2826%2010.1857%2010.273%209.52857L10.2586%208.22857C10.2586%207.94286%2010.2682%207.72381%2010.2874%207.57143C10.3163%207.40952%2010.3595%207.27619%2010.4171%207.17143C10.4844%207.06667%2010.566%206.9619%2010.6621%206.85714C10.7582%206.75238%2010.8735%206.60476%2011.008%206.41429C11.0944%206.29048%2011.1665%206.19048%2011.2241%206.11429C11.2818%206.02857%2011.3154%205.94762%2011.325%205.87143C11.3346%205.79524%2011.3154%205.70952%2011.2674%205.61429C11.2289%205.51905%2011.1569%205.39048%2011.0512%205.22857C10.8975%205%2010.7678%204.81905%2010.6621%204.68571C10.566%204.55238%2010.4844%204.42857%2010.4171%204.31429C10.3595%204.2%2010.3163%204.08095%2010.2874%203.95714C10.2682%203.83333%2010.2586%203.66191%2010.2586%203.44286V2.41429C10.2586%202.29048%2010.2538%202.17143%2010.2442%202.05714C10.2442%201.94286%2010.225%201.84286%2010.1866%201.75714C10.1481%201.67143%2010.0857%201.60476%209.99923%201.55714C9.92238%201.50952%209.8119%201.48571%209.66779%201.48571H9.01932C9.00972%201.48571%208.97129%201.48571%208.90404%201.48571C8.83679%201.48571%208.75513%201.48095%208.65906%201.47143C8.56299%201.45238%208.46212%201.42857%208.35644%201.4C8.25076%201.36191%208.1595%201.30476%208.08264%201.22857C8.025%201.18095%207.97697%201.10476%207.93854%201C7.90972%200.895238%207.89531%200.795238%207.89531%200.7C7.89531%200.509524%207.96256%200.361905%208.09705%200.257143C8.23155%200.152381%208.38526%200.0857146%208.55819%200.057143C8.73111%200.0190477%208.89924%200%209.06255%200H10.3019Z%20M3.93745%200C4.10077%200%204.26889%200.0190477%204.44181%200.057143C4.61474%200.0857146%204.76845%200.152381%204.90295%200.257143C5.03745%200.361905%205.10469%200.509524%205.10469%200.7C5.10469%200.795238%205.08548%200.895238%205.04705%201C5.01823%201.10476%204.975%201.18095%204.91736%201.22857C4.8405%201.30476%204.74924%201.36191%204.64356%201.4C4.53788%201.42857%204.43701%201.45238%204.34094%201.47143C4.24487%201.48095%204.16321%201.48571%204.09596%201.48571C4.02871%201.48571%203.99029%201.48571%203.98068%201.48571H3.33221C3.1881%201.48571%203.07282%201.50952%202.98636%201.55714C2.9095%201.60476%202.85186%201.67143%202.81343%201.75714C2.775%201.84286%202.75099%201.94286%202.74138%202.05714C2.74138%202.17143%202.74138%202.29048%202.74138%202.41429V3.44286C2.74138%203.66191%202.72697%203.83333%202.69815%203.95714C2.67893%204.08095%202.6357%204.2%202.56845%204.31429C2.51081%204.42857%202.42915%204.55238%202.32348%204.68571C2.22741%204.81905%202.10251%205%201.9488%205.22857C1.84313%205.39048%201.76627%205.51905%201.71824%205.61429C1.67981%205.70952%201.6654%205.79524%201.675%205.87143C1.68461%205.94762%201.71824%206.02857%201.77588%206.11429C1.83352%206.19048%201.90557%206.29048%201.99203%206.41429C2.12653%206.60476%202.24182%206.75238%202.33789%206.85714C2.43396%206.9619%202.51081%207.06667%202.56845%207.17143C2.6357%207.27619%202.67893%207.40952%202.69815%207.57143C2.72697%207.72381%202.74138%207.94286%202.74138%208.22857L2.72697%209.52857C2.71736%2010.1857%202.9047%2010.5143%203.28898%2010.5143H3.90863C4.07194%2010.5143%204.23526%2010.5333%204.39858%2010.5714C4.57151%2010.6%204.72522%2010.6667%204.85972%2010.7714C4.99421%2010.8762%205.06146%2011.0238%205.06146%2011.2143C5.06146%2011.3095%205.04225%2011.4095%205.00382%2011.5143C4.975%2011.619%204.93177%2011.6952%204.87413%2011.7429C4.79727%2011.819%204.68199%2011.8714%204.52828%2011.9C4.38417%2011.9381%204.23526%2011.9619%204.08155%2011.9714C3.93745%2011.9905%203.80775%2012%203.69247%2012C3.57719%2012%203.51474%2012%203.50513%2012L2.51081%2011.9143C2.28024%2011.9143%202.06889%2011.8571%201.87675%2011.7429C1.68461%2011.6286%201.52129%2011.4714%201.3868%2011.2714C1.2619%2011.0714%201.16103%2010.8381%201.08418%2010.5714C1.01693%2010.2952%200.983302%2010.0048%200.983302%209.7V8.48571C0.983302%208.33333%200.978499%208.20476%200.968892%208.1C0.968892%207.99524%200.959285%207.89524%200.940071%207.8C0.920857%207.70476%200.887232%207.60476%200.839198%207.5C0.80077%207.39524%200.743128%207.26667%200.666272%207.11429L0.190727%206.5C0.0466221%206.25238%20-0.0158233%206.0381%200.00339071%205.85714C0.0226046%205.66667%200.0802464%205.4619%200.176316%205.24286L0.680682%204.57143C0.757538%204.42857%200.81518%204.31429%200.853608%204.22857C0.901643%204.13333%200.935267%204.04286%200.954481%203.95714C0.973695%203.87143%200.983302%203.78571%200.983302%203.7C0.992909%203.61429%200.997712%203.50952%200.997712%203.38571L0.983302%201.97143C0.983302%201.67619%201.02653%201.40952%201.113%201.17143C1.19946%200.92381%201.31955%200.714286%201.47326%200.542858C1.62697%200.371429%201.8095%200.238096%202.02086%200.142858C2.23221%200.0476193%202.45797%200%202.69815%200H3.93745Z'%20/%3e%3c/svg%3e", rc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", oc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", ic = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", sc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", cc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", lc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", ac = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", dc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", fc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", hc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", pc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", gc = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", bc = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", mc = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", b3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m3(e, t) {
  return h(), m("svg", b3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ])]);
}
const _c = w({ name: "lucide-align-right", render: m3 }), _3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x3(e, t) {
  return h(), m("svg", _3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      a("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ])]);
}
const xc = w({ name: "lucide-archive", render: x3 }), k3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w3(e, t) {
  return h(), m("svg", k3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ])]);
}
const kc = w({ name: "lucide-arrow-down", render: w3 }), v3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C3(e, t) {
  return h(), m("svg", v3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ])]);
}
const x0 = w({ name: "lucide-arrow-left", render: C3 }), y3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E3(e, t) {
  return h(), m("svg", y3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ])]);
}
const wc = w({ name: "lucide-arrow-left-right", render: E3 }), A3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M3(e, t) {
  return h(), m("svg", A3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ])]);
}
const vc = w({ name: "lucide-arrow-right", render: M3 }), S3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D3(e, t) {
  return h(), m("svg", S3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ])]);
}
const Cc = w({ name: "lucide-arrow-up", render: D3 }), L3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B3(e, t) {
  return h(), m("svg", L3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      a("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ])]);
}
const yc = w({ name: "lucide-at-sign", render: B3 }), I3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F3(e, t) {
  return h(), m("svg", I3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M4.929 4.929L19.07 19.071" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Ec = w({ name: "lucide-ban", render: F3 }), T3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $3(e, t) {
  return h(), m("svg", T3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ])]);
}
const Ac = w({ name: "lucide-bell", render: $3 }), R3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N3(e, t) {
  return h(), m("svg", R3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ])]);
}
const Mc = w({ name: "lucide-book", render: N3 }), O3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P3(e, t) {
  return h(), m("svg", O3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 8V4H8" }),
      a("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      a("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ])]);
}
const Sc = w({ name: "lucide-bot", render: P3 }), H3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z3(e, t) {
  return h(), m("svg", H3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      a("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ])]);
}
const Dc = w({ name: "lucide-box", render: z3 }), j3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U3(e, t) {
  return h(), m("svg", j3, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></g>', 1)
  ])]);
}
const Lc = w({ name: "lucide-brain", render: U3 }), V3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q3(e, t) {
  return h(), m("svg", V3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 20v-9m2-4a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4zm.12-3.12L16 2" }),
      a("path", { d: "M21 21a4 4 0 0 0-3.81-4M21 5a4 4 0 0 1-3.55 3.97M22 13h-4M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88M9 7.13V6a3 3 0 1 1 6 0v1.13" })
    ], -1)
  ])]);
}
const Bc = w({ name: "lucide-bug", render: q3 }), Z3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W3(e, t) {
  return h(), m("svg", Z3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      a("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ])]);
}
const Ic = w({ name: "lucide-calculator", render: W3 }), G3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K3(e, t) {
  return h(), m("svg", G3, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M8 2v4m8-4v4" }),
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      a("path", { d: "M3 10h18" })
    ], -1)
  ])]);
}
const Fc = w({ name: "lucide-calendar", render: K3 }), J3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X3(e, t) {
  return h(), m("svg", J3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16m-7.696-3h6.392"
    }, null, -1)
  ])]);
}
const Tc = w({ name: "lucide-case-upper", render: X3 }), Y3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q3(e, t) {
  return h(), m("svg", Y3, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ])]);
}
const $c = w({ name: "lucide-chart-column-decreasing", render: Q3 }), ep = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tp(e, t) {
  return h(), m("svg", ep, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ])]);
}
const Rc = w({ name: "lucide-check", render: tp }), np = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function up(e, t) {
  return h(), m("svg", np, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ])]);
}
const Nc = w({ name: "lucide-check-check", render: up }), rp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function op(e, t) {
  return h(), m("svg", rp, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ])]);
}
const qu = w({ name: "lucide-chevron-down", render: op }), ip = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sp(e, t) {
  return h(), m("svg", ip, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ])]);
}
const Zu = w({ name: "lucide-chevron-left", render: sp }), cp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lp(e, t) {
  return h(), m("svg", cp, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ])]);
}
const Wu = w({ name: "lucide-chevron-right", render: lp }), ap = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dp(e, t) {
  return h(), m("svg", ap, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ])]);
}
const Gu = w({ name: "lucide-chevron-up", render: dp }), fp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hp(e, t) {
  return h(), m("svg", fp, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ])]);
}
const Oc = w({ name: "lucide-chevrons-left", render: hp }), pp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gp(e, t) {
  return h(), m("svg", pp, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ])]);
}
const bp = w({ name: "lucide-chevrons-up-down", render: gp }), mp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _p(e, t) {
  return h(), m("svg", mp, [...t[0] || (t[0] = [
    a("circle", {
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
const Pc = w({ name: "lucide-circle", render: _p }), xp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kp(e, t) {
  return h(), m("svg", xp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ])]);
}
const Hc = w({ name: "lucide-circle-alert", render: kp }), wp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vp(e, t) {
  return h(), m("svg", wp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ])]);
}
const zc = w({ name: "lucide-circle-check", render: vp }), Cp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yp(e, t) {
  return h(), m("svg", Cp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ])]);
}
const jc = w({ name: "lucide-circle-dot", render: yp }), Ep = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ap(e, t) {
  return h(), m("svg", Ep, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ])]);
}
const k0 = w({ name: "lucide-circle-help", render: Ap }), Mp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Sp(e, t) {
  return h(), m("svg", Mp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M8 12h8" })
    ], -1)
  ])]);
}
const Uc = w({ name: "lucide-circle-minus", render: Sp }), Dp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Lp(e, t) {
  return h(), m("svg", Dp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ])]);
}
const Vc = w({ name: "lucide-circle-pause", render: Lp }), Bp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ip(e, t) {
  return h(), m("svg", Bp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const qc = w({ name: "lucide-circle-play", render: Ip }), Fp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tp(e, t) {
  return h(), m("svg", Fp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ])]);
}
const Zc = w({ name: "lucide-circle-plus", render: Tp }), $p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rp(e, t) {
  return h(), m("svg", $p, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      a("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Wc = w({ name: "lucide-circle-user-round", render: Rp }), Np = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Op(e, t) {
  return h(), m("svg", Np, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ])]);
}
const Gc = w({ name: "lucide-circle-x", render: Op }), Pp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Hp(e, t) {
  return h(), m("svg", Pp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      a("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ])]);
}
const Kc = w({ name: "lucide-clipboard-list", render: Hp }), zp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jp(e, t) {
  return h(), m("svg", zp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 6v6l4 2" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const Jc = w({ name: "lucide-clock", render: jp }), Up = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vp(e, t) {
  return h(), m("svg", Up, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ])]);
}
const Xc = w({ name: "lucide-cloud", render: Vp }), qp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Zp(e, t) {
  return h(), m("svg", qp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      a("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ])]);
}
const Yc = w({ name: "lucide-cloud-download", render: Zp }), Wp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gp(e, t) {
  return h(), m("svg", Wp, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ])]);
}
const Qc = w({ name: "lucide-code", render: Gp }), Kp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Jp(e, t) {
  return h(), m("svg", Kp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M11 10.27L7 3.34m4 10.39l-4 6.93M12 22v-2m0-18v2m2 8h8m-5 8.66l-1-1.73m1-15.59l-1 1.73M2 12h2m16.66 5l-1.73-1m1.73-9l-1.73 1M3.34 17l1.73-1M3.34 7l1.73 1" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "2"
      }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "8"
      })
    ], -1)
  ])]);
}
const w0 = w({ name: "lucide-cog", render: Jp }), Xp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Yp(e, t) {
  return h(), m("svg", Xp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ])]);
}
const el = w({ name: "lucide-contrast", render: Yp }), Qp = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e4(e, t) {
  return h(), m("svg", Qp, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      a("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ])]);
}
const tl = w({ name: "lucide-copy", render: e4 }), t4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n4(e, t) {
  return h(), m("svg", t4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      a("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      a("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ])]);
}
const nl = w({ name: "lucide-database", render: n4 }), u4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r4(e, t) {
  return h(), m("svg", u4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ])]);
}
const ul = w({ name: "lucide-earth", render: r4 }), o4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i4(e, t) {
  return h(), m("svg", o4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      a("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      a("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ])]);
}
const rl = w({ name: "lucide-ellipsis", render: i4 }), s4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c4(e, t) {
  return h(), m("svg", s4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      a("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      a("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ])]);
}
const ol = w({ name: "lucide-ellipsis-vertical", render: c4 }), l4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a4(e, t) {
  return h(), m("svg", l4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ])]);
}
const il = w({ name: "lucide-equal", render: a4 }), d4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f4(e, t) {
  return h(), m("svg", d4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ])]);
}
const sl = w({ name: "lucide-external-link", render: f4 }), h4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p4(e, t) {
  return h(), m("svg", h4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      a("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ])]);
}
const cl = w({ name: "lucide-eye", render: p4 }), g4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b4(e, t) {
  return h(), m("svg", g4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      a("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ])]);
}
const ll = w({ name: "lucide-eye-off", render: b4 }), m4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _4(e, t) {
  return h(), m("svg", m4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ])]);
}
const al = w({ name: "lucide-file", render: _4 }), x4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k4(e, t) {
  return h(), m("svg", x4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      a("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      a("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ])]);
}
const dl = w({ name: "lucide-file-archive", render: k4 }), w4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v4(e, t) {
  return h(), m("svg", w4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ])]);
}
const fl = w({ name: "lucide-file-code", render: v4 }), C4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y4(e, t) {
  return h(), m("svg", C4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ])]);
}
const hl = w({ name: "lucide-file-down", render: y4 }), E4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A4(e, t) {
  return h(), m("svg", E4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ])]);
}
const pl = w({ name: "lucide-file-input", render: A4 }), M4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S4(e, t) {
  return h(), m("svg", M4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      a("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      a("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ])]);
}
const gl = w({ name: "lucide-file-output", render: S4 }), D4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L4(e, t) {
  return h(), m("svg", D4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      a("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ])]);
}
const v0 = w({ name: "lucide-file-text", render: L4 }), B4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I4(e, t) {
  return h(), m("svg", B4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }),
      a("path", { d: "M15 2v4a2 2 0 0 0 2 2h4M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" })
    ], -1)
  ])]);
}
const bl = w({ name: "lucide-files", render: I4 }), F4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T4(e, t) {
  return h(), m("svg", F4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      a("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ])]);
}
const ml = w({ name: "lucide-fingerprint", render: T4 }), $4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R4(e, t) {
  return h(), m("svg", $4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ])]);
}
const _l = w({ name: "lucide-flask-conical", render: R4 }), N4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O4(e, t) {
  return h(), m("svg", N4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ])]);
}
const xl = w({ name: "lucide-folder", render: O4 }), P4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H4(e, t) {
  return h(), m("svg", P4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ])]);
}
const kl = w({ name: "lucide-folder-open", render: H4 }), z4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j4(e, t) {
  return h(), m("svg", z4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ])]);
}
const wl = w({ name: "lucide-folder-plus", render: j4 }), U4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V4(e, t) {
  return h(), m("svg", U4, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ])]);
}
const vl = w({ name: "lucide-funnel", render: V4 }), q4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z4(e, t) {
  return h(), m("svg", q4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M10.5 3L8 9l4 13l4-13l-2.5-6" }),
      a("path", { d: "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20" })
    ], -1)
  ])]);
}
const Cl = w({ name: "lucide-gem", render: Z4 }), W4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G4(e, t) {
  return h(), m("svg", W4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      a("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ])]);
}
const yl = w({ name: "lucide-gift", render: G4 }), K4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J4(e, t) {
  return h(), m("svg", K4, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ])]);
}
const El = w({ name: "lucide-git-branch", render: J4 }), X4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y4(e, t) {
  return h(), m("svg", X4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ])]);
}
const Al = w({ name: "lucide-globe", render: Y4 }), Q4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e6(e, t) {
  return h(), m("svg", Q4, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      a("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ])]);
}
const Ml = w({ name: "lucide-graduation-cap", render: e6 }), t6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n6(e, t) {
  return h(), m("svg", t6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 3v18m-9-9h18" }),
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ])]);
}
const Sl = w({ name: "lucide-grid-2x2", render: n6 }), u6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r6(e, t) {
  return h(), m("svg", u6, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ])]);
}
const Dl = w({ name: "lucide-grip-vertical", render: r6 }), o6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i6(e, t) {
  return h(), m("svg", o6, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ])]);
}
const Ll = w({ name: "lucide-hand-coins", render: i6 }), s6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c6(e, t) {
  return h(), m("svg", s6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      a("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      a("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ])]);
}
const Bl = w({ name: "lucide-handshake", render: c6 }), l6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a6(e, t) {
  return h(), m("svg", l6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ])]);
}
const Il = w({ name: "lucide-hard-drive", render: a6 }), d6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f6(e, t) {
  return h(), m("svg", d6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      a("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      a("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ])]);
}
const Fl = w({ name: "lucide-hard-drive-download", render: f6 }), h6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function p6(e, t) {
  return h(), m("svg", h6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ])]);
}
const Tl = w({ name: "lucide-hash", render: p6 }), g6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b6(e, t) {
  return h(), m("svg", g6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      a("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ])]);
}
const $l = w({ name: "lucide-history", render: b6 }), m6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _6(e, t) {
  return h(), m("svg", m6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ])]);
}
const Rl = w({ name: "lucide-hourglass", render: _6 }), x6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k6(e, t) {
  return h(), m("svg", x6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      a("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ])]);
}
const Nl = w({ name: "lucide-house", render: k6 }), w6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v6(e, t) {
  return h(), m("svg", w6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      a("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      a("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ])]);
}
const Ol = w({ name: "lucide-image", render: v6 }), C6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y6(e, t) {
  return h(), m("svg", C6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      a("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ])]);
}
const Pl = w({ name: "lucide-inbox", render: y6 }), E6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A6(e, t) {
  return h(), m("svg", E6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ])]);
}
const C0 = w({ name: "lucide-info", render: A6 }), M6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S6(e, t) {
  return h(), m("svg", M6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      a("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ])]);
}
const Hl = w({ name: "lucide-key-round", render: S6 }), D6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L6(e, t) {
  return h(), m("svg", D6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ])]);
}
const zl = w({ name: "lucide-languages", render: L6 }), B6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I6(e, t) {
  return h(), m("svg", B6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      a("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      a("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ])]);
}
const jl = w({ name: "lucide-layers", render: I6 }), F6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T6(e, t) {
  return h(), m("svg", F6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ])]);
}
const Ul = w({ name: "lucide-lightbulb", render: T6 }), $6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R6(e, t) {
  return h(), m("svg", $6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      a("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ])]);
}
const Vl = w({ name: "lucide-link", render: R6 }), N6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O6(e, t) {
  return h(), m("svg", N6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"
    }, null, -1)
  ])]);
}
const ql = w({ name: "lucide-list", render: O6 }), P6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H6(e, t) {
  return h(), m("svg", P6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4"
    }, null, -1)
  ])]);
}
const Zl = w({ name: "lucide-list-checks", render: H6 }), z6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j6(e, t) {
  return h(), m("svg", z6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      a("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ])]);
}
const Wl = w({ name: "lucide-lock", render: j6 }), U6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V6(e, t) {
  return h(), m("svg", U6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ])]);
}
const Gl = w({ name: "lucide-log-in", render: V6 }), q6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z6(e, t) {
  return h(), m("svg", q6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ])]);
}
const Kl = w({ name: "lucide-log-out", render: Z6 }), W6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G6(e, t) {
  return h(), m("svg", W6, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      a("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ])]);
}
const Jl = w({ name: "lucide-mail", render: G6 }), K6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J6(e, t) {
  return h(), m("svg", K6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ])]);
}
const Xl = w({ name: "lucide-maximize", render: J6 }), X6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y6(e, t) {
  return h(), m("svg", X6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ])]);
}
const Yl = w({ name: "lucide-maximize-2", render: Y6 }), Q6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eg(e, t) {
  return h(), m("svg", Q6, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 5h16M4 12h16M4 19h16"
    }, null, -1)
  ])]);
}
const Ql = w({ name: "lucide-menu", render: eg }), tg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ng(e, t) {
  return h(), m("svg", tg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
    }, null, -1)
  ])]);
}
const ea = w({ name: "lucide-message-circle", render: ng }), ug = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rg(e, t) {
  return h(), m("svg", ug, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zm4-1a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ])]);
}
const ta = w({ name: "lucide-messages-square", render: rg }), og = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ig(e, t) {
  return h(), m("svg", og, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ])]);
}
const na = w({ name: "lucide-milestone", render: ig }), sg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cg(e, t) {
  return h(), m("svg", sg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ])]);
}
const lg = w({ name: "lucide-minimize-2", render: cg }), ag = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dg(e, t) {
  return h(), m("svg", ag, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ])]);
}
const ua = w({ name: "lucide-mouse-pointer", render: dg }), fg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hg(e, t) {
  return h(), m("svg", fg, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ])]);
}
const ra = w({ name: "lucide-network", render: hg }), pg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gg(e, t) {
  return h(), m("svg", pg, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      a("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      a("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ])]);
}
const oa = w({ name: "lucide-package-open", render: gg }), bg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mg(e, t) {
  return h(), m("svg", bg, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ])]);
}
const ia = w({ name: "lucide-palette", render: mg }), _g = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xg(e, t) {
  return h(), m("svg", _g, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "5",
        height: "18",
        x: "14",
        y: "3",
        rx: "1"
      }),
      a("rect", {
        width: "5",
        height: "18",
        x: "5",
        y: "3",
        rx: "1"
      })
    ], -1)
  ])]);
}
const sa = w({ name: "lucide-pause", render: xg }), kg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wg(e, t) {
  return h(), m("svg", kg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ])]);
}
const ca = w({ name: "lucide-pen", render: wg }), vg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Cg(e, t) {
  return h(), m("svg", vg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ])]);
}
const la = w({ name: "lucide-pencil", render: Cg }), yg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Eg(e, t) {
  return h(), m("svg", yg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ])]);
}
const aa = w({ name: "lucide-pin", render: Eg }), Ag = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Mg(e, t) {
  return h(), m("svg", Ag, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
    }, null, -1)
  ])]);
}
const da = w({ name: "lucide-play", render: Mg }), Sg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Dg(e, t) {
  return h(), m("svg", Sg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ])]);
}
const fa = w({ name: "lucide-plug", render: Dg }), Lg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Bg(e, t) {
  return h(), m("svg", Lg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ])]);
}
const ha = w({ name: "lucide-plus", render: Bg }), Ig = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Fg(e, t) {
  return h(), m("svg", Ig, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      a("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ])]);
}
const pa = w({ name: "lucide-pocket-knife", render: Fg }), Tg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $g(e, t) {
  return h(), m("svg", Tg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ])]);
}
const ga = w({ name: "lucide-power", render: $g }), Rg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ng(e, t) {
  return h(), m("svg", Rg, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m15 14l5-5l-5-5" }),
      a("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ])]);
}
const ba = w({ name: "lucide-redo-2", render: Ng }), Og = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Pg(e, t) {
  return h(), m("svg", Og, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      a("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      a("path", { d: "M8 16H3v5" })
    ], -1)
  ])]);
}
const Ku = w({ name: "lucide-refresh-cw", render: Pg }), Hg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zg(e, t) {
  return h(), m("svg", Hg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ])]);
}
const ma = w({ name: "lucide-remove-formatting", render: zg }), jg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Ug(e, t) {
  return h(), m("svg", jg, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      a("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ])]);
}
const _a = w({ name: "lucide-rss", render: Ug }), Vg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qg(e, t) {
  return h(), m("svg", Vg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ])]);
}
const xa = w({ name: "lucide-satellite-dish", render: qg }), Zg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Wg(e, t) {
  return h(), m("svg", Zg, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      a("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ])]);
}
const ka = w({ name: "lucide-save", render: Wg }), Gg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Kg(e, t) {
  return h(), m("svg", Gg, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ])]);
}
const wa = w({ name: "lucide-scale", render: Kg }), Jg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Xg(e, t) {
  return h(), m("svg", Jg, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ])]);
}
const y0 = w({ name: "lucide-scissors", render: Xg }), Yg = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Qg(e, t) {
  return h(), m("svg", Yg, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m21 21l-4.34-4.34" }),
      a("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ])]);
}
const va = w({ name: "lucide-search", render: Qg }), e8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t8(e, t) {
  return h(), m("svg", e8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ])]);
}
const Ca = w({ name: "lucide-send", render: t8 }), n8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u8(e, t) {
  return h(), m("svg", n8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      a("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      a("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ])]);
}
const ya = w({ name: "lucide-server", render: u8 }), r8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o8(e, t) {
  return h(), m("svg", r8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ])]);
}
const Ea = w({ name: "lucide-share", render: o8 }), i8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s8(e, t) {
  return h(), m("svg", i8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3"
    }, null, -1)
  ])]);
}
const Aa = w({ name: "lucide-sliders-horizontal", render: s8 }), c8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l8(e, t) {
  return h(), m("svg", c8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      a("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ])]);
}
const Ma = w({ name: "lucide-smile", render: l8 }), a8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d8(e, t) {
  return h(), m("svg", a8, [...t[0] || (t[0] = [
    a("rect", {
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
const Sa = w({ name: "lucide-square", render: d8 }), f8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h8(e, t) {
  return h(), m("svg", f8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      a("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ])]);
}
const Da = w({ name: "lucide-square-check", render: h8 }), p8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g8(e, t) {
  return h(), m("svg", p8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      a("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ])]);
}
const La = w({ name: "lucide-square-pen", render: g8 }), b8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m8(e, t) {
  return h(), m("svg", b8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      a("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ])]);
}
const Ba = w({ name: "lucide-square-plus", render: m8 }), _8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x8(e, t) {
  return h(), m("svg", _8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      a("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ])]);
}
const Ia = w({ name: "lucide-sticky-note", render: x8 }), k8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w8(e, t) {
  return h(), m("svg", k8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      a("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ])]);
}
const Fa = w({ name: "lucide-sun", render: w8 }), v8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C8(e, t) {
  return h(), m("svg", v8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M12 3v18" }),
      a("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      a("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ])]);
}
const Ta = w({ name: "lucide-table", render: C8 }), y8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E8(e, t) {
  return h(), m("svg", y8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }),
      a("circle", {
        cx: "10.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ])]);
}
const $a = w({ name: "lucide-tags", render: E8 }), A8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M8(e, t) {
  return h(), m("svg", A8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ])]);
}
const Ra = w({ name: "lucide-terminal", render: M8 }), S8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D8(e, t) {
  return h(), m("svg", S8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ])]);
}
const Na = w({ name: "lucide-thumbs-down", render: D8 }), L8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B8(e, t) {
  return h(), m("svg", L8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ])]);
}
const Oa = w({ name: "lucide-thumbs-up", render: B8 }), I8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F8(e, t) {
  return h(), m("svg", I8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    }, null, -1)
  ])]);
}
const Pa = w({ name: "lucide-trash-2", render: F8 }), T8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $8(e, t) {
  return h(), m("svg", T8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ])]);
}
const Ha = w({ name: "lucide-tree-pine", render: $8 }), R8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N8(e, t) {
  return h(), m("svg", R8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ])]);
}
const za = w({ name: "lucide-triangle-alert", render: N8 }), O8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P8(e, t) {
  return h(), m("svg", O8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M9 14L4 9l5-5" }),
      a("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ])]);
}
const ja = w({ name: "lucide-undo-2", render: P8 }), H8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z8(e, t) {
  return h(), m("svg", H8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ])]);
}
const Ua = w({ name: "lucide-unlink", render: z8 }), j8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U8(e, t) {
  return h(), m("svg", j8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      a("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const Va = w({ name: "lucide-user", render: U8 }), V8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q8(e, t) {
  return h(), m("svg", V8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      a("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const qa = w({ name: "lucide-user-check", render: q8 }), Z8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W8(e, t) {
  return h(), m("svg", Z8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      a("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      a("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ])]);
}
const Za = w({ name: "lucide-user-lock", render: W8 }), G8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K8(e, t) {
  return h(), m("svg", G8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      a("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ])]);
}
const Wa = w({ name: "lucide-user-round", render: K8 }), J8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X8(e, t) {
  return h(), m("svg", J8, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      a("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ])]);
}
const Ga = w({ name: "lucide-users", render: X8 }), Y8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q8(e, t) {
  return h(), m("svg", Y8, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ])]);
}
const Ka = w({ name: "lucide-variable", render: Q8 }), e5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t5(e, t) {
  return h(), m("svg", e5, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ])]);
}
const Ja = w({ name: "lucide-vault", render: t5 }), n5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u5(e, t) {
  return h(), m("svg", n5, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      a("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ])]);
}
const Xa = w({ name: "lucide-video", render: u5 }), r5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o5(e, t) {
  return h(), m("svg", r5, [...t[0] || (t[0] = [
    en('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ])]);
}
const Ya = w({ name: "lucide-waypoints", render: o5 }), i5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s5(e, t) {
  return h(), m("svg", i5, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
    }, null, -1)
  ])]);
}
const Qa = w({ name: "lucide-wrench", render: s5 }), c5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l5(e, t) {
  return h(), m("svg", c5, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ])]);
}
const E0 = w({ name: "lucide-x", render: l5 }), a5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d5(e, t) {
  return h(), m("svg", a5, [...t[0] || (t[0] = [
    a("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ])]);
}
const e2 = w({ name: "lucide-zap", render: d5 }), f5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h5(e, t) {
  return h(), m("svg", f5, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      a("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ])]);
}
const t2 = w({ name: "lucide-zoom-in", render: h5 }), p5 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function g5(e, t) {
  return h(), m("svg", p5, [...t[0] || (t[0] = [
    a("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      a("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      a("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ])]);
}
const n2 = w({ name: "lucide-zoom-out", render: g5 }), si = {
  // customIcons
  variable: Ka,
  "pop-out": rc,
  triangle: bc,
  "status-completed": cc,
  "status-waiting": fc,
  "status-error": lc,
  "status-canceled": sc,
  "status-new": ac,
  "status-unknown": dc,
  "status-warning": hc,
  "vector-square": mc,
  schema: oc,
  json: uc,
  binary: tc,
  text: pc,
  toolbox: gc,
  spinner: ic,
  xmark: E0,
  // fontAwesomeIcons
  "caret-up": Gu,
  "caret-down": qu,
  "caret-right": Wu,
  "caret-left": Zu,
  "folder-plus": wl,
  share: Ea,
  "user-check": qa,
  "check-double": Nc,
  "exclamation-circle": Hc,
  circle: Pc,
  "eye-slash": ll,
  folder: xl,
  "minus-circle": Uc,
  adjust: el,
  refresh: Ku,
  vault: Ja,
  "angle-double-left": Oc,
  "angle-down": qu,
  "angle-left": Zu,
  "angle-right": Wu,
  "angle-up": Gu,
  archive: xc,
  "arrow-left": x0,
  "arrow-right": vc,
  "arrow-up": Cc,
  "arrow-down": kc,
  at: yc,
  ban: Ec,
  "balance-scale-left": wa,
  bars: Ql,
  bolt: e2,
  book: Mc,
  "box-open": oa,
  bug: Bc,
  brain: Lc,
  calculator: Ic,
  calendar: Fc,
  "chart-bar": $c,
  check: Rc,
  "check-circle": zc,
  "check-square": Da,
  "chevron-left": Zu,
  "chevron-right": Wu,
  "chevron-down": qu,
  "chevron-up": Gu,
  code: Qc,
  "code-branch": El,
  cog: w0,
  cogs: w0,
  comment: ea,
  comments: ta,
  "clipboard-list": Kc,
  clock: Jc,
  clone: tl,
  cloud: Xc,
  "cloud-download-alt": Yc,
  compress: bp,
  copy: bl,
  cube: Dc,
  cut: y0,
  database: nl,
  "dot-circle": jc,
  "grip-lines-vertical": nc,
  "grip-vertical": Dl,
  edit: La,
  "ellipsis-h": rl,
  "ellipsis-v": ol,
  envelope: Jl,
  equals: il,
  eye: cl,
  "exclamation-triangle": za,
  expand: Xl,
  "expand-alt": Yl,
  "external-link-alt": sl,
  "exchange-alt": wc,
  file: al,
  "file-alt": v0,
  "file-archive": dl,
  "file-code": fl,
  "file-download": hl,
  "file-export": gl,
  "file-import": pl,
  "file-pdf": v0,
  filter: vl,
  fingerprint: ml,
  flask: _l,
  "folder-open": kl,
  font: Tc,
  gift: yl,
  globe: Al,
  "globe-americas": ul,
  "graduation-cap": Ml,
  "hand-holding-usd": Ll,
  "hand-scissors": y0,
  handshake: Bl,
  "hand-point-left": x0,
  hashtag: Tl,
  hdd: Il,
  history: $l,
  home: Nl,
  hourglass: Rl,
  image: Ol,
  inbox: Pl,
  info: C0,
  "info-circle": C0,
  key: Hl,
  language: zl,
  "layer-group": jl,
  link: Vl,
  list: ql,
  lightbulb: Ul,
  lock: Wl,
  "map-signs": na,
  "mouse-pointer": ua,
  "network-wired": ra,
  palette: ia,
  pause: sa,
  "pause-circle": Vc,
  pen: ca,
  "pencil-alt": la,
  play: da,
  "play-circle": qc,
  plug: fa,
  plus: ha,
  "plus-circle": Zc,
  "plus-square": Ba,
  "project-diagram": Ya,
  question: k0,
  "question-circle": k0,
  redo: ba,
  "remove-format": ma,
  robot: Sc,
  rss: _a,
  save: ka,
  "satellite-dish": xa,
  search: va,
  "search-minus": n2,
  "search-plus": t2,
  server: ya,
  screwdriver: pa,
  smile: Ma,
  "sign-in-alt": Gl,
  "sign-out-alt": Kl,
  "sliders-h": Aa,
  "sticky-note": Ia,
  stop: Sa,
  stream: _c,
  sun: Fa,
  sync: Ku,
  "sync-alt": Ku,
  table: Ta,
  tags: $a,
  tasks: Zl,
  terminal: Ra,
  "th-large": Sl,
  thumbtack: aa,
  "thumbs-down": Na,
  "thumbs-up": Oa,
  times: E0,
  "times-circle": Gc,
  tools: Qa,
  trash: Pa,
  undo: ja,
  unlink: Ua,
  user: Va,
  "user-circle": Wc,
  "user-friends": Wa,
  users: Ga,
  video: Xa,
  tree: Ha,
  "user-lock": Za,
  gem: Cl,
  download: Fl,
  "power-off": ga,
  "paper-plane": Ca,
  bell: Ac
}, ci = {
  // custom icons
  "grip-lines-vertical": nc,
  variable: Ka,
  "pop-out": rc,
  triangle: bc,
  "status-completed": cc,
  "status-waiting": fc,
  "status-error": lc,
  "status-canceled": sc,
  "status-new": ac,
  "status-unknown": dc,
  "status-warning": hc,
  "vector-square": mc,
  schema: oc,
  json: uc,
  binary: tc,
  text: pc,
  toolbox: gc,
  spinner: ic,
  // lucide
  "align-right": _c,
  archive: xc,
  "arrow-down": kc,
  "arrow-left": x0,
  "arrow-left-right": wc,
  "arrow-right": vc,
  "arrow-up": Cc,
  "at-sign": yc,
  ban: Ec,
  bell: Ac,
  book: Mc,
  bot: Sc,
  box: Dc,
  brain: Lc,
  bug: Bc,
  calculator: Ic,
  calendar: Fc,
  "case-upper": Tc,
  "chart-column-decreasing": $c,
  check: Rc,
  "check-check": Nc,
  "chevron-down": qu,
  "chevron-left": Zu,
  "chevron-right": Wu,
  "chevron-up": Gu,
  "chevrons-left": Oc,
  circle: Pc,
  "circle-alert": Hc,
  "circle-check": zc,
  "circle-dot": jc,
  "circle-help": k0,
  "circle-minus": Uc,
  "circle-pause": Vc,
  "circle-play": qc,
  "circle-plus": Zc,
  "circle-user-round": Wc,
  "circle-x": Gc,
  "clipboard-list": Kc,
  clock: Jc,
  cloud: Xc,
  "cloud-download": Yc,
  code: Qc,
  cog: w0,
  contrast: el,
  copy: tl,
  database: nl,
  earth: ul,
  ellipsis: rl,
  "ellipsis-vertical": ol,
  equal: il,
  "external-link": sl,
  eye: cl,
  "eye-off": ll,
  file: al,
  "file-archive": dl,
  "file-code": fl,
  "file-down": hl,
  "file-input": pl,
  "file-output": gl,
  "file-text": v0,
  files: bl,
  fingerprint: ml,
  "flask-conical": _l,
  folder: xl,
  "folder-open": kl,
  "folder-plus": wl,
  funnel: vl,
  gem: Cl,
  gift: yl,
  "git-branch": El,
  globe: Al,
  "graduation-cap": Ml,
  "grid-2x2": Sl,
  "grip-vertical": Dl,
  "hand-coins": Ll,
  handshake: Bl,
  "hard-drive": Il,
  "hard-drive-download": Fl,
  hash: Tl,
  history: $l,
  hourglass: Rl,
  house: Nl,
  image: Ol,
  inbox: Pl,
  info: C0,
  "key-round": Hl,
  languages: zl,
  layers: jl,
  lightbulb: Ul,
  link: Vl,
  list: ql,
  "list-checks": Zl,
  lock: Wl,
  "log-in": Gl,
  "log-out": Kl,
  mail: Jl,
  "minimize-2": lg,
  maximize: Xl,
  "maximize-2": Yl,
  menu: Ql,
  "message-circle": ea,
  "messages-square": ta,
  milestone: na,
  "mouse-pointer": ua,
  network: ra,
  "package-open": oa,
  palette: ia,
  pause: sa,
  pen: ca,
  pencil: la,
  pin: aa,
  play: da,
  plug: fa,
  plus: ha,
  "pocket-knife": pa,
  power: ga,
  "redo-2": ba,
  "refresh-cw": Ku,
  "remove-formatting": ma,
  rss: _a,
  "satellite-dish": xa,
  save: ka,
  scale: wa,
  scissors: y0,
  search: va,
  send: Ca,
  server: ya,
  share: Ea,
  "sliders-horizontal": Aa,
  smile: Ma,
  square: Sa,
  "square-check": Da,
  "square-pen": La,
  "square-plus": Ba,
  "sticky-note": Ia,
  sun: Fa,
  table: Ta,
  tags: $a,
  terminal: Ra,
  "thumbs-down": Na,
  "thumbs-up": Oa,
  "trash-2": Pa,
  "tree-pine": Ha,
  "triangle-alert": za,
  "undo-2": ja,
  unlink: Ua,
  user: Va,
  "user-check": qa,
  "user-lock": Za,
  "user-round": Wa,
  users: Ga,
  vault: Ja,
  video: Xa,
  waypoints: Ya,
  wrench: Qa,
  x: E0,
  zap: e2,
  "zoom-in": t2,
  "zoom-out": n2
}, b5 = /* @__PURE__ */ it({
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
    const t = e, n = js(), u = ye(() => {
      const s = [];
      return t.spin && s.push("spin"), t.strokeWidth && s.push("strokeWidth"), ["n8n-icon", ...s.map((c) => n[c])];
    }), r = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = ye(() => {
      let s = "1em";
      return t.size && (s = `${typeof t.size == "number" ? t.size : r[t.size]}px`), {
        height: s,
        width: s
      };
    }), i = ye(() => {
      const s = {};
      return t.color && (s.color = `var(--color-${t.color})`), t.strokeWidth && (s["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), s;
    });
    return (s, c) => te(ci)[s.icon] ?? te(si)[s.icon] ? (h(), Be(q0(
      te(ci)[s.icon] ?? te(si)[s.icon]
    ), {
      key: 0,
      class: An(u.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: Wn(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : $e("", !0);
  }
}), m5 = "_strokeWidth_19m7s_1", _5 = "_spin_19m7s_5", x5 = {
  strokeWidth: m5,
  spin: _5
}, k5 = {
  $style: x5
}, w5 = /* @__PURE__ */ Mn(b5, [["__cssModules", k5]]), v5 = /* @__PURE__ */ it({
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
    const t = e, n = js(), u = ye(() => {
      const r = [];
      return t.align && r.push(`align-${t.align}`), t.color && r.push(t.color), t.compact && r.push("compact"), r.push(`size-${t.size}`), r.push(t.bold ? "bold" : "regular"), r.map((o) => n[o]);
    });
    return (r, o) => (h(), Be(q0(r.tag), yr({
      class: ["n8n-text", ...u.value]
    }, r.$attrs), {
      default: kt(() => [
        Gt(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), C5 = "_bold_ushv1_1", y5 = "_regular_ushv1_5", E5 = "_compact_ushv1_34", A5 = "_primary_ushv1_38", M5 = "_secondary_ushv1_42", S5 = "_danger_ushv1_62", D5 = "_success_ushv1_66", L5 = "_warning_ushv1_70", B5 = {
  bold: C5,
  regular: y5,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: E5,
  primary: A5,
  secondary: M5,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: S5,
  success: D5,
  warning: L5,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, I5 = {
  $style: B5
}, F5 = /* @__PURE__ */ Mn(v5, [["__cssModules", I5]]);
function T5(e) {
  const t = e.regex, n = {}, u = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      u
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
  ), i = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, s = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      r
    ]
  };
  r.contains.push(s);
  const c = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, d = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, g = [
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
    binary: `(${g.join("|")})`,
    relevance: 10
  }), _ = {
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
  ], N = [
    "true",
    "false"
  ], F = { match: /(\/[a-z._-]+)+/ }, S = [
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
  ], B = [
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
  ], E = [
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
  ], T = [
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
      literal: N,
      built_in: [
        ...S,
        ...B,
        // Shell modifiers
        "set",
        "shopt",
        ...E,
        ...T
      ]
    },
    contains: [
      x,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      _,
      f,
      o,
      i,
      F,
      s,
      c,
      l,
      d,
      n
    ]
  };
}
function $5(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), u = [
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
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: u,
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
  }, c = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, l = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, f = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
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
          d,
          l
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          l
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, g = "[0-9](_?[0-9])*", x = `(\\b(${g}))?\\.(${g})|\\b(${g})\\.`, _ = `\\b|${u.join("|")}`, C = {
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
        begin: `(\\b(${g})|(${x}))[eE][+-]?(${g})[jJ]?(?=${_})`
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
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${_})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${_})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${_})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${_})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${g})[jJ](?=${_})`
      }
    ]
  }, N = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: s,
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
  }, F = {
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
        keywords: s,
        contains: [
          "self",
          c,
          C,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return l.contains = [
    f,
    C,
    c
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      c,
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
      f,
      N,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [F]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
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
          F,
          f
        ]
      }
    ]
  };
}
const sr = "[A-Za-z$_][0-9A-Za-z$_]*", u2 = [
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
], r2 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], o2 = [
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
], i2 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], s2 = [
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
], c2 = [
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
], l2 = [].concat(
  s2,
  o2,
  i2
);
function R5(e) {
  const t = e.regex, n = (q, { after: Ce }) => {
    const He = "</" + q[0].slice(1);
    return q.input.indexOf(He, Ce) !== -1;
  }, u = sr, r = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, Ce) => {
      const He = q[0].length + q.index, Oe = q.input[He];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Oe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Oe === ","
      ) {
        Ce.ignoreMatch();
        return;
      }
      Oe === ">" && (n(q, { after: He }) || Ce.ignoreMatch());
      let Re;
      const Mt = q.input.substring(He);
      if (Re = Mt.match(/^\s*=/)) {
        Ce.ignoreMatch();
        return;
      }
      if ((Re = Mt.match(/^\s+extends\s+/)) && Re.index === 0) {
        Ce.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: sr,
    keyword: u2,
    literal: r2,
    built_in: l2,
    "variable.language": c2
  }, c = "[0-9](_?[0-9])*", l = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${l})|\\.)?|(${l}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${l})\\b|\\.)?|(${l})\\b` },
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
  }, g = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
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
        g
      ],
      subLanguage: "xml"
    }
  }, _ = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        g
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
        g
      ],
      subLanguage: "graphql"
    }
  }, N = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      g
    ]
  }, S = {
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
                  begin: u + "(?=\\s*(-)|$)",
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
  }, B = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    x,
    _,
    C,
    N,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  g.contains = B.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(B)
  });
  const E = [].concat(S, g.contains), T = E.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(E)
    }
  ]), j = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: T
  }, ue = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          u,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(u, "(", t.concat(/\./, u), ")*")
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
          u
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, de = {
    relevance: 0,
    match: t.either(
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
        ...o2,
        ...i2
      ]
    }
  }, J = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ce = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          u,
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
    contains: [j],
    illegal: /%/
  }, he = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function U(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const be = {
    match: t.concat(
      /\b/,
      U([
        ...s2,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, pe = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Z = {
    match: [
      /get|set/,
      /\s+/,
      u,
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
      j
    ]
  }, re = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", oe = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(re)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      j
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: T, CLASS_REFERENCE: de },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      J,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      x,
      _,
      C,
      N,
      S,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      de,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      oe,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          S,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: re,
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
                    keywords: s,
                    contains: T
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
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      ce,
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
          j,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      pe,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + u,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [j]
      },
      be,
      he,
      ue,
      Z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function N5(e) {
  const t = e.regex, n = R5(e), u = sr, r = [
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
  }, i = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, c = [
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
    $pattern: sr,
    keyword: u2.concat(c),
    literal: r2,
    built_in: l2.concat(r),
    "variable.language": c2
  }, d = {
    className: "meta",
    begin: "@" + u
  }, f = (C, N, F) => {
    const S = C.contains.findIndex((B) => B.label === N);
    if (S === -1)
      throw new Error("can not find mode to replace");
    C.contains.splice(S, 1, F);
  };
  Object.assign(n.keywords, l), n.exports.PARAMS_CONTAINS.push(d);
  const g = n.contains.find((C) => C.scope === "attr"), x = Object.assign(
    {},
    g,
    { match: t.concat(u, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    g,
    // highlight the params key
    x
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    d,
    o,
    i,
    x
    // Added for optional property assignment highlighting
  ]), f(n, "shebang", e.SHEBANG()), f(n, "use_strict", s);
  const _ = n.contains.find((C) => C.label === "func.def");
  return _.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
var Qr, li;
function O5() {
  if (li) return Qr;
  li = 1;
  function e(u, r) {
    var o, i, s = u.attrs[u.attrIndex("href")][1];
    for (o = 0; o < r.length; ++o) {
      if (i = r[o], typeof i.matcher == "function") {
        if (i.matcher(s, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(u, r, o) {
    Object.keys(o).forEach(function(i) {
      var s, c = o[i];
      i === "className" && (i = "class"), s = r[u].attrIndex(i), s < 0 ? r[u].attrPush([i, c]) : r[u].attrs[s][1] = c;
    });
  }
  function n(u, r) {
    r ? r = Array.isArray(r) ? r : [r] : r = [], Object.freeze(r);
    var o = u.renderer.rules.link_open || this.defaultRender;
    u.renderer.rules.link_open = function(i, s, c, l, d) {
      var f = e(i[s], r), g = f && f.attrs;
      return g && t(s, i, g), o(i, s, c, l, d);
    };
  }
  return n.defaultRender = function(u, r, o, i, s) {
    return s.renderToken(u, r, o);
  }, Qr = n, Qr;
}
var P5 = O5();
const H5 = /* @__PURE__ */ Gs(P5), ai = {};
function z5(e) {
  let t = ai[e];
  if (t)
    return t;
  t = ai[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    t.push(u);
  }
  for (let n = 0; n < e.length; n++) {
    const u = e.charCodeAt(n);
    t[u] = "%" + ("0" + u.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function qn(e, t) {
  typeof t != "string" && (t = qn.defaultChars);
  const n = z5(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(u) {
    let r = "";
    for (let o = 0, i = u.length; o < i; o += 3) {
      const s = parseInt(u.slice(o + 1, o + 3), 16);
      if (s < 128) {
        r += n[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i) {
        const c = parseInt(u.slice(o + 4, o + 6), 16);
        if ((c & 192) === 128) {
          const l = s << 6 & 1984 | c & 63;
          l < 128 ? r += "��" : r += String.fromCharCode(l), o += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && o + 6 < i) {
        const c = parseInt(u.slice(o + 4, o + 6), 16), l = parseInt(u.slice(o + 7, o + 9), 16);
        if ((c & 192) === 128 && (l & 192) === 128) {
          const d = s << 12 & 61440 | c << 6 & 4032 | l & 63;
          d < 2048 || d >= 55296 && d <= 57343 ? r += "���" : r += String.fromCharCode(d), o += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && o + 9 < i) {
        const c = parseInt(u.slice(o + 4, o + 6), 16), l = parseInt(u.slice(o + 7, o + 9), 16), d = parseInt(u.slice(o + 10, o + 12), 16);
        if ((c & 192) === 128 && (l & 192) === 128 && (d & 192) === 128) {
          let f = s << 18 & 1835008 | c << 12 & 258048 | l << 6 & 4032 | d & 63;
          f < 65536 || f > 1114111 ? r += "����" : (f -= 65536, r += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), o += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
qn.defaultChars = ";/?:@&=+$,#";
qn.componentChars = "";
const di = {};
function j5(e) {
  let t = di[e];
  if (t)
    return t;
  t = di[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(u) ? t.push(u) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function yu(e, t, n) {
  typeof t != "string" && (n = t, t = yu.defaultChars), typeof n > "u" && (n = !0);
  const u = j5(t);
  let r = "";
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e.charCodeAt(o);
    if (n && s === 37 && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) {
      r += e.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      r += u[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < i) {
        const c = e.charCodeAt(o + 1);
        if (c >= 56320 && c <= 57343) {
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
yu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
yu.componentChars = "-_.!~*'()";
function Y0(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function cr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const U5 = /^([a-z0-9.+-]+:)/i, V5 = /:[0-9]*$/, q5 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Z5 = ["<", ">", '"', "`", " ", "\r", `
`, "	"], W5 = ["{", "}", "|", "\\", "^", "`"].concat(Z5), G5 = ["'"].concat(W5), fi = ["%", "/", "?", ";", "#"].concat(G5), hi = ["/", "?", "#"], K5 = 255, pi = /^[+a-z0-9A-Z_-]{0,63}$/, J5 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, gi = {
  javascript: !0,
  "javascript:": !0
}, bi = {
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
function Q0(e, t) {
  if (e && e instanceof cr) return e;
  const n = new cr();
  return n.parse(e, t), n;
}
cr.prototype.parse = function(e, t) {
  let n, u, r, o = e;
  if (o = o.trim(), !t && e.split("#").length === 1) {
    const l = q5.exec(o);
    if (l)
      return this.pathname = l[1], l[2] && (this.search = l[2]), this;
  }
  let i = U5.exec(o);
  if (i && (i = i[0], n = i.toLowerCase(), this.protocol = i, o = o.substr(i.length)), (t || i || o.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = o.substr(0, 2) === "//", r && !(i && gi[i]) && (o = o.substr(2), this.slashes = !0)), !gi[i] && (r || i && !bi[i])) {
    let l = -1;
    for (let _ = 0; _ < hi.length; _++)
      u = o.indexOf(hi[_]), u !== -1 && (l === -1 || u < l) && (l = u);
    let d, f;
    l === -1 ? f = o.lastIndexOf("@") : f = o.lastIndexOf("@", l), f !== -1 && (d = o.slice(0, f), o = o.slice(f + 1), this.auth = d), l = -1;
    for (let _ = 0; _ < fi.length; _++)
      u = o.indexOf(fi[_]), u !== -1 && (l === -1 || u < l) && (l = u);
    l === -1 && (l = o.length), o[l - 1] === ":" && l--;
    const g = o.slice(0, l);
    o = o.slice(l), this.parseHost(g), this.hostname = this.hostname || "";
    const x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!x) {
      const _ = this.hostname.split(/\./);
      for (let C = 0, N = _.length; C < N; C++) {
        const F = _[C];
        if (F && !F.match(pi)) {
          let S = "";
          for (let B = 0, E = F.length; B < E; B++)
            F.charCodeAt(B) > 127 ? S += "x" : S += F[B];
          if (!S.match(pi)) {
            const B = _.slice(0, C), E = _.slice(C + 1), T = F.match(J5);
            T && (B.push(T[1]), E.unshift(T[2])), E.length && (o = E.join(".") + o), this.hostname = B.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > K5 && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = o.indexOf("#");
  s !== -1 && (this.hash = o.substr(s), o = o.slice(0, s));
  const c = o.indexOf("?");
  return c !== -1 && (this.search = o.substr(c), o = o.slice(0, c)), o && (this.pathname = o), bi[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
cr.prototype.parseHost = function(e) {
  let t = V5.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const X5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: qn,
  encode: yu,
  format: Y0,
  parse: Q0
}, Symbol.toStringTag, { value: "Module" })), a2 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, d2 = /[\0-\x1F\x7F-\x9F]/, Y5 = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, eo = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, f2 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, h2 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Q5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: a2,
  Cc: d2,
  Cf: Y5,
  P: eo,
  S: f2,
  Z: h2
}, Symbol.toStringTag, { value: "Module" })), eb = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), tb = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var e0;
const nb = /* @__PURE__ */ new Map([
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
]), ub = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (e0 = String.fromCodePoint) !== null && e0 !== void 0 ? e0 : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function rb(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = nb.get(e)) !== null && t !== void 0 ? t : e;
}
var Ue;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Ue || (Ue = {}));
const ob = 32;
var an;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(an || (an = {}));
function A0(e) {
  return e >= Ue.ZERO && e <= Ue.NINE;
}
function ib(e) {
  return e >= Ue.UPPER_A && e <= Ue.UPPER_F || e >= Ue.LOWER_A && e <= Ue.LOWER_F;
}
function sb(e) {
  return e >= Ue.UPPER_A && e <= Ue.UPPER_Z || e >= Ue.LOWER_A && e <= Ue.LOWER_Z || A0(e);
}
function cb(e) {
  return e === Ue.EQUALS || sb(e);
}
var je;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(je || (je = {}));
var ln;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(ln || (ln = {}));
class lb {
  constructor(t, n, u) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = u, this.state = je.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ln.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = je.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
  write(t, n) {
    switch (this.state) {
      case je.EntityStart:
        return t.charCodeAt(n) === Ue.NUM ? (this.state = je.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = je.NamedEntity, this.stateNamedEntity(t, n));
      case je.NumericStart:
        return this.stateNumericStart(t, n);
      case je.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case je.NumericHex:
        return this.stateNumericHex(t, n);
      case je.NamedEntity:
        return this.stateNamedEntity(t, n);
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
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | ob) === Ue.LOWER_X ? (this.state = je.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = je.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, u, r) {
    if (n !== u) {
      const o = u - n;
      this.result = this.result * Math.pow(r, o) + parseInt(t.substr(n, o), r), this.consumed += o;
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
  stateNumericHex(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (A0(r) || ib(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(t, u, n, 16), -1;
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
  stateNumericDecimal(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (A0(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(t, u, n, 10), -1;
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
  emitNumericEntity(t, n) {
    var u;
    if (this.consumed <= n)
      return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === Ue.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === ln.Strict)
      return 0;
    return this.emitCodePoint(rb(this.result), this.consumed), this.errors && (t !== Ue.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
  stateNamedEntity(t, n) {
    const { decodeTree: u } = this;
    let r = u[this.treeIndex], o = (r & an.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const i = t.charCodeAt(n);
      if (this.treeIndex = ab(u, r, this.treeIndex + Math.max(1, o), i), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === ln.Attribute && // We shouldn't have consumed any characters after the entity,
        (o === 0 || // And there should be no invalid characters.
        cb(i)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = u[this.treeIndex], o = (r & an.VALUE_LENGTH) >> 14, o !== 0) {
        if (i === Ue.SEMI)
          return this.emitNamedEntityData(this.treeIndex, o, this.consumed + this.excess);
        this.decodeMode !== ln.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    var t;
    const { result: n, decodeTree: u } = this, r = (u[n] & an.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, r, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
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
  emitNamedEntityData(t, n, u) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(n === 1 ? r[t] & ~an.VALUE_LENGTH : r[t + 1], u), n === 3 && this.emitCodePoint(r[t + 2], u), u;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case je.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== ln.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case je.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case je.NumericHex:
        return this.emitNumericEntity(0, 3);
      case je.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case je.EntityStart:
        return 0;
    }
  }
}
function p2(e) {
  let t = "";
  const n = new lb(e, (u) => t += ub(u));
  return function(r, o) {
    let i = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      t += r.slice(i, s), n.startEntity(o);
      const l = n.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (l < 0) {
        i = s + n.end();
        break;
      }
      i = s + l, s = l === 0 ? i + 1 : i;
    }
    const c = t + r.slice(i);
    return t = "", c;
  };
}
function ab(e, t, n, u) {
  const r = (t & an.BRANCH_LENGTH) >> 7, o = t & an.JUMP_TABLE;
  if (r === 0)
    return o !== 0 && u === o ? n : -1;
  if (o) {
    const c = u - o;
    return c < 0 || c >= r ? -1 : e[n + c] - 1;
  }
  let i = n, s = i + r - 1;
  for (; i <= s; ) {
    const c = i + s >>> 1, l = e[c];
    if (l < u)
      i = c + 1;
    else if (l > u)
      s = c - 1;
    else
      return e[c + r];
  }
  return -1;
}
const db = p2(eb);
p2(tb);
function g2(e, t = ln.Legacy) {
  return db(e, t);
}
function fb(e) {
  return Object.prototype.toString.call(e);
}
function to(e) {
  return fb(e) === "[object String]";
}
const hb = Object.prototype.hasOwnProperty;
function pb(e, t) {
  return hb.call(e, t);
}
function Ar(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be object");
      Object.keys(n).forEach(function(u) {
        e[u] = n[u];
      });
    }
  }), e;
}
function b2(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function no(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function lr(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
const m2 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, gb = /&([a-z#][a-z0-9]{1,31});/gi, bb = new RegExp(m2.source + "|" + gb.source, "gi"), mb = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function _b(e, t) {
  if (t.charCodeAt(0) === 35 && mb.test(t)) {
    const u = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return no(u) ? lr(u) : e;
  }
  const n = g2(e);
  return n !== e ? n : e;
}
function xb(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(m2, "$1");
}
function Zn(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(bb, function(t, n, u) {
    return n || _b(t, u);
  });
}
const kb = /[&<>"]/, wb = /[&<>"]/g, vb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Cb(e) {
  return vb[e];
}
function pn(e) {
  return kb.test(e) ? e.replace(wb, Cb) : e;
}
const yb = /[.?*+^$[\]\\(){}|-]/g;
function Eb(e) {
  return e.replace(yb, "\\$&");
}
function De(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function mu(e) {
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
function _u(e) {
  return eo.test(e) || f2.test(e);
}
function xu(e) {
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
function Mr(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Ab = { mdurl: X5, ucmicro: Q5 }, Mb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: b2,
  assign: Ar,
  escapeHtml: pn,
  escapeRE: Eb,
  fromCodePoint: lr,
  has: pb,
  isMdAsciiPunct: xu,
  isPunctChar: _u,
  isSpace: De,
  isString: to,
  isValidEntityCode: no,
  isWhiteSpace: mu,
  lib: Ab,
  normalizeReference: Mr,
  unescapeAll: Zn,
  unescapeMd: xb
}, Symbol.toStringTag, { value: "Module" }));
function Sb(e, t, n) {
  let u, r, o, i;
  const s = e.posMax, c = e.pos;
  for (e.pos = t + 1, u = 1; e.pos < s; ) {
    if (o = e.src.charCodeAt(e.pos), o === 93 && (u--, u === 0)) {
      r = !0;
      break;
    }
    if (i = e.pos, e.md.inline.skipToken(e), o === 91) {
      if (i === e.pos - 1)
        u++;
      else if (n)
        return e.pos = c, -1;
    }
  }
  let l = -1;
  return r && (l = e.pos), e.pos = c, l;
}
function Db(e, t, n) {
  let u, r = t;
  const o = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < n; ) {
      if (u = e.charCodeAt(r), u === 10 || u === 60)
        return o;
      if (u === 62)
        return o.pos = r + 1, o.str = Zn(e.slice(t + 1, r)), o.ok = !0, o;
      if (u === 92 && r + 1 < n) {
        r += 2;
        continue;
      }
      r++;
    }
    return o;
  }
  let i = 0;
  for (; r < n && (u = e.charCodeAt(r), !(u === 32 || u < 32 || u === 127)); ) {
    if (u === 92 && r + 1 < n) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (u === 40 && (i++, i > 32))
      return o;
    if (u === 41) {
      if (i === 0)
        break;
      i--;
    }
    r++;
  }
  return t === r || i !== 0 || (o.str = Zn(e.slice(t, r)), o.pos = r, o.ok = !0), o;
}
function Lb(e, t, n, u) {
  let r, o = t;
  const i = {
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
  if (u)
    i.str = u.str, i.marker = u.marker;
  else {
    if (o >= n)
      return i;
    let s = e.charCodeAt(o);
    if (s !== 34 && s !== 39 && s !== 40)
      return i;
    t++, o++, s === 40 && (s = 41), i.marker = s;
  }
  for (; o < n; ) {
    if (r = e.charCodeAt(o), r === i.marker)
      return i.pos = o + 1, i.str += Zn(e.slice(t, o)), i.ok = !0, i;
    if (r === 40 && i.marker === 41)
      return i;
    r === 92 && o + 1 < n && o++, o++;
  }
  return i.can_continue = !0, i.str += Zn(e.slice(t, o)), i;
}
const Bb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Db,
  parseLinkLabel: Sb,
  parseLinkTitle: Lb
}, Symbol.toStringTag, { value: "Module" })), Ot = {};
Ot.code_inline = function(e, t, n, u, r) {
  const o = e[t];
  return "<code" + r.renderAttrs(o) + ">" + pn(o.content) + "</code>";
};
Ot.code_block = function(e, t, n, u, r) {
  const o = e[t];
  return "<pre" + r.renderAttrs(o) + "><code>" + pn(e[t].content) + `</code></pre>
`;
};
Ot.fence = function(e, t, n, u, r) {
  const o = e[t], i = o.info ? Zn(o.info).trim() : "";
  let s = "", c = "";
  if (i) {
    const d = i.split(/(\s+)/g);
    s = d[0], c = d.slice(2).join("");
  }
  let l;
  if (n.highlight ? l = n.highlight(o.content, s, c) || pn(o.content) : l = pn(o.content), l.indexOf("<pre") === 0)
    return l + `
`;
  if (i) {
    const d = o.attrIndex("class"), f = o.attrs ? o.attrs.slice() : [];
    d < 0 ? f.push(["class", n.langPrefix + s]) : (f[d] = f[d].slice(), f[d][1] += " " + n.langPrefix + s);
    const g = {
      attrs: f
    };
    return `<pre><code${r.renderAttrs(g)}>${l}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(o)}>${l}</code></pre>
`;
};
Ot.image = function(e, t, n, u, r) {
  const o = e[t];
  return o.attrs[o.attrIndex("alt")][1] = r.renderInlineAsText(o.children, n, u), r.renderToken(e, t, n);
};
Ot.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
Ot.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Ot.text = function(e, t) {
  return pn(e[t].content);
};
Ot.html_block = function(e, t) {
  return e[t].content;
};
Ot.html_inline = function(e, t) {
  return e[t].content;
};
function Gn() {
  this.rules = Ar({}, Ot);
}
Gn.prototype.renderAttrs = function(t) {
  let n, u, r;
  if (!t.attrs)
    return "";
  for (r = "", n = 0, u = t.attrs.length; n < u; n++)
    r += " " + pn(t.attrs[n][0]) + '="' + pn(t.attrs[n][1]) + '"';
  return r;
};
Gn.prototype.renderToken = function(t, n, u) {
  const r = t[n];
  let o = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && n && t[n - 1].hidden && (o += `
`), o += (r.nesting === -1 ? "</" : "<") + r.tag, o += this.renderAttrs(r), r.nesting === 0 && u.xhtmlOut && (o += " /");
  let i = !1;
  if (r.block && (i = !0, r.nesting === 1 && n + 1 < t.length)) {
    const s = t[n + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (i = !1);
  }
  return o += i ? `>
` : ">", o;
};
Gn.prototype.renderInline = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    typeof r[s] < "u" ? u += r[s](e, o, t, n, this) : u += this.renderToken(e, o, t);
  }
  return u;
};
Gn.prototype.renderInlineAsText = function(e, t, n) {
  let u = "";
  for (let r = 0, o = e.length; r < o; r++)
    switch (e[r].type) {
      case "text":
        u += e[r].content;
        break;
      case "image":
        u += this.renderInlineAsText(e[r].children, t, n);
        break;
      case "html_inline":
      case "html_block":
        u += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        u += `
`;
        break;
    }
  return u;
};
Gn.prototype.render = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let o = 0, i = e.length; o < i; o++) {
    const s = e[o].type;
    s === "inline" ? u += this.renderInline(e[o].children, t, n) : typeof r[s] < "u" ? u += r[s](e, o, t, n, this) : u += this.renderToken(e, o, t, n);
  }
  return u;
};
function at() {
  this.__rules__ = [], this.__cache__ = null;
}
at.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
at.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(u) {
      t.indexOf(u) < 0 && t.push(u);
    });
  }), e.__cache__ = {}, t.forEach(function(n) {
    e.__cache__[n] = [], e.__rules__.forEach(function(u) {
      u.enabled && (n && u.alt.indexOf(n) < 0 || e.__cache__[n].push(u.fn));
    });
  });
};
at.prototype.at = function(e, t, n) {
  const u = this.__find__(e), r = n || {};
  if (u === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[u].fn = t, this.__rules__[u].alt = r.alt || [], this.__cache__ = null;
};
at.prototype.before = function(e, t, n, u) {
  const r = this.__find__(e), o = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
at.prototype.after = function(e, t, n, u) {
  const r = this.__find__(e), o = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
at.prototype.push = function(e, t, n) {
  const u = n || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: u.alt || []
  }), this.__cache__ = null;
};
at.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !0, n.push(u);
  }, this), this.__cache__ = null, n;
};
at.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(e, t);
};
at.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !1, n.push(u);
  }, this), this.__cache__ = null, n;
};
at.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function At(e, t, n) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
At.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let u = 0, r = n.length; u < r; u++)
    if (n[u][0] === t)
      return u;
  return -1;
};
At.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
At.prototype.attrSet = function(t, n) {
  const u = this.attrIndex(t), r = [t, n];
  u < 0 ? this.attrPush(r) : this.attrs[u] = r;
};
At.prototype.attrGet = function(t) {
  const n = this.attrIndex(t);
  let u = null;
  return n >= 0 && (u = this.attrs[n][1]), u;
};
At.prototype.attrJoin = function(t, n) {
  const u = this.attrIndex(t);
  u < 0 ? this.attrPush([t, n]) : this.attrs[u][1] = this.attrs[u][1] + " " + n;
};
function _2(e, t, n) {
  this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
}
_2.prototype.Token = At;
const Ib = /\r\n?|\n/g, Fb = /\0/g;
function Tb(e) {
  let t;
  t = e.src.replace(Ib, `
`), t = t.replace(Fb, "�"), e.src = t;
}
function $b(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Rb(e) {
  const t = e.tokens;
  for (let n = 0, u = t.length; n < u; n++) {
    const r = t[n];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Nb(e) {
  return /^<a[>\s]/i.test(e);
}
function Ob(e) {
  return /^<\/a\s*>/i.test(e);
}
function Pb(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, u = t.length; n < u; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.pretest(t[n].content))
        continue;
      let r = t[n].children, o = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        const s = r[i];
        if (s.type === "link_close") {
          for (i--; r[i].level !== s.level && r[i].type !== "link_open"; )
            i--;
          continue;
        }
        if (s.type === "html_inline" && (Nb(s.content) && o > 0 && o--, Ob(s.content) && o++), !(o > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const c = s.content;
          let l = e.md.linkify.match(c);
          const d = [];
          let f = s.level, g = 0;
          l.length > 0 && l[0].index === 0 && i > 0 && r[i - 1].type === "text_special" && (l = l.slice(1));
          for (let x = 0; x < l.length; x++) {
            const _ = l[x].url, C = e.md.normalizeLink(_);
            if (!e.md.validateLink(C))
              continue;
            let N = l[x].text;
            l[x].schema ? l[x].schema === "mailto:" && !/^mailto:/i.test(N) ? N = e.md.normalizeLinkText("mailto:" + N).replace(/^mailto:/, "") : N = e.md.normalizeLinkText(N) : N = e.md.normalizeLinkText("http://" + N).replace(/^http:\/\//, "");
            const F = l[x].index;
            if (F > g) {
              const T = new e.Token("text", "", 0);
              T.content = c.slice(g, F), T.level = f, d.push(T);
            }
            const S = new e.Token("link_open", "a", 1);
            S.attrs = [["href", C]], S.level = f++, S.markup = "linkify", S.info = "auto", d.push(S);
            const B = new e.Token("text", "", 0);
            B.content = N, B.level = f, d.push(B);
            const E = new e.Token("link_close", "a", -1);
            E.level = --f, E.markup = "linkify", E.info = "auto", d.push(E), g = l[x].lastIndex;
          }
          if (g < c.length) {
            const x = new e.Token("text", "", 0);
            x.content = c.slice(g), x.level = f, d.push(x);
          }
          t[n].children = r = b2(r, i, d);
        }
      }
    }
}
const x2 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Hb = /\((c|tm|r)\)/i, zb = /\((c|tm|r)\)/ig, jb = {
  c: "©",
  r: "®",
  tm: "™"
};
function Ub(e, t) {
  return jb[t.toLowerCase()];
}
function Vb(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && (u.content = u.content.replace(zb, Ub)), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function qb(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && x2.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function Zb(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Hb.test(e.tokens[t].content) && Vb(e.tokens[t].children), x2.test(e.tokens[t].content) && qb(e.tokens[t].children));
}
const Wb = /['"]/, mi = /['"]/g, _i = "’";
function Ou(e, t, n) {
  return e.slice(0, t) + n + e.slice(t + 1);
}
function Gb(e, t) {
  let n;
  const u = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r], i = e[r].level;
    for (n = u.length - 1; n >= 0 && !(u[n].level <= i); n--)
      ;
    if (u.length = n + 1, o.type !== "text")
      continue;
    let s = o.content, c = 0, l = s.length;
    e:
      for (; c < l; ) {
        mi.lastIndex = c;
        const d = mi.exec(s);
        if (!d)
          break;
        let f = !0, g = !0;
        c = d.index + 1;
        const x = d[0] === "'";
        let _ = 32;
        if (d.index - 1 >= 0)
          _ = s.charCodeAt(d.index - 1);
        else
          for (n = r - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
            if (e[n].content) {
              _ = e[n].content.charCodeAt(e[n].content.length - 1);
              break;
            }
        let C = 32;
        if (c < l)
          C = s.charCodeAt(c);
        else
          for (n = r + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
            if (e[n].content) {
              C = e[n].content.charCodeAt(0);
              break;
            }
        const N = xu(_) || _u(String.fromCharCode(_)), F = xu(C) || _u(String.fromCharCode(C)), S = mu(_), B = mu(C);
        if (B ? f = !1 : F && (S || N || (f = !1)), S ? g = !1 : N && (B || F || (g = !1)), C === 34 && d[0] === '"' && _ >= 48 && _ <= 57 && (g = f = !1), f && g && (f = N, g = F), !f && !g) {
          x && (o.content = Ou(o.content, d.index, _i));
          continue;
        }
        if (g)
          for (n = u.length - 1; n >= 0; n--) {
            let E = u[n];
            if (u[n].level < i)
              break;
            if (E.single === x && u[n].level === i) {
              E = u[n];
              let T, j;
              x ? (T = t.md.options.quotes[2], j = t.md.options.quotes[3]) : (T = t.md.options.quotes[0], j = t.md.options.quotes[1]), o.content = Ou(o.content, d.index, j), e[E.token].content = Ou(
                e[E.token].content,
                E.pos,
                T
              ), c += j.length - 1, E.token === r && (c += T.length - 1), s = o.content, l = s.length, u.length = n;
              continue e;
            }
          }
        f ? u.push({
          token: r,
          pos: d.index,
          single: x,
          level: i
        }) : g && x && (o.content = Ou(o.content, d.index, _i));
      }
  }
}
function Kb(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Wb.test(e.tokens[t].content) || Gb(e.tokens[t].children, e);
}
function Jb(e) {
  let t, n;
  const u = e.tokens, r = u.length;
  for (let o = 0; o < r; o++) {
    if (u[o].type !== "inline") continue;
    const i = u[o].children, s = i.length;
    for (t = 0; t < s; t++)
      i[t].type === "text_special" && (i[t].type = "text");
    for (t = n = 0; t < s; t++)
      i[t].type === "text" && t + 1 < s && i[t + 1].type === "text" ? i[t + 1].content = i[t].content + i[t + 1].content : (t !== n && (i[n] = i[t]), n++);
    t !== n && (i.length = n);
  }
}
const t0 = [
  ["normalize", Tb],
  ["block", $b],
  ["inline", Rb],
  ["linkify", Pb],
  ["replacements", Zb],
  ["smartquotes", Kb],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Jb]
];
function uo() {
  this.ruler = new at();
  for (let e = 0; e < t0.length; e++)
    this.ruler.push(t0[e][0], t0[e][1]);
}
uo.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let n = 0, u = t.length; n < u; n++)
    t[n](e);
};
uo.prototype.State = _2;
function Pt(e, t, n, u) {
  this.src = e, this.md = t, this.env = n, this.tokens = u, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let o = 0, i = 0, s = 0, c = 0, l = r.length, d = !1; i < l; i++) {
    const f = r.charCodeAt(i);
    if (!d)
      if (De(f)) {
        s++, f === 9 ? c += 4 - c % 4 : c++;
        continue;
      } else
        d = !0;
    (f === 10 || i === l - 1) && (f !== 10 && i++, this.bMarks.push(o), this.eMarks.push(i), this.tShift.push(s), this.sCount.push(c), this.bsCount.push(0), d = !1, s = 0, c = 0, o = i + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Pt.prototype.push = function(e, t, n) {
  const u = new At(e, t, n);
  return u.block = !0, n < 0 && this.level--, u.level = this.level, n > 0 && this.level++, this.tokens.push(u), u;
};
Pt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
Pt.prototype.skipEmptyLines = function(t) {
  for (let n = this.lineMax; t < n && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
Pt.prototype.skipSpaces = function(t) {
  for (let n = this.src.length; t < n; t++) {
    const u = this.src.charCodeAt(t);
    if (!De(u))
      break;
  }
  return t;
};
Pt.prototype.skipSpacesBack = function(t, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (!De(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
Pt.prototype.skipChars = function(t, n) {
  for (let u = this.src.length; t < u && this.src.charCodeAt(t) === n; t++)
    ;
  return t;
};
Pt.prototype.skipCharsBack = function(t, n, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (n !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
Pt.prototype.getLines = function(t, n, u, r) {
  if (t >= n)
    return "";
  const o = new Array(n - t);
  for (let i = 0, s = t; s < n; s++, i++) {
    let c = 0;
    const l = this.bMarks[s];
    let d = l, f;
    for (s + 1 < n || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; d < f && c < u; ) {
      const g = this.src.charCodeAt(d);
      if (De(g))
        g === 9 ? c += 4 - (c + this.bsCount[s]) % 4 : c++;
      else if (d - l < this.tShift[s])
        c++;
      else
        break;
      d++;
    }
    c > u ? o[i] = new Array(c - u + 1).join(" ") + this.src.slice(d, f) : o[i] = this.src.slice(d, f);
  }
  return o.join("");
};
Pt.prototype.Token = At;
const Xb = 65536;
function n0(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  return e.src.slice(n, u);
}
function xi(e) {
  const t = [], n = e.length;
  let u = 0, r = e.charCodeAt(u), o = !1, i = 0, s = "";
  for (; u < n; )
    r === 124 && (o ? (s += e.substring(i, u - 1), i = u) : (t.push(s + e.substring(i, u)), s = "", i = u + 1)), o = r === 92, u++, r = e.charCodeAt(u);
  return t.push(s + e.substring(i)), t;
}
function Yb(e, t, n, u) {
  if (t + 2 > n)
    return !1;
  let r = t + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[r] + e.tShift[r];
  if (o >= e.eMarks[r])
    return !1;
  const i = e.src.charCodeAt(o++);
  if (i !== 124 && i !== 45 && i !== 58 || o >= e.eMarks[r])
    return !1;
  const s = e.src.charCodeAt(o++);
  if (s !== 124 && s !== 45 && s !== 58 && !De(s) || i === 45 && De(s))
    return !1;
  for (; o < e.eMarks[r]; ) {
    const E = e.src.charCodeAt(o);
    if (E !== 124 && E !== 45 && E !== 58 && !De(E))
      return !1;
    o++;
  }
  let c = n0(e, t + 1), l = c.split("|");
  const d = [];
  for (let E = 0; E < l.length; E++) {
    const T = l[E].trim();
    if (!T) {
      if (E === 0 || E === l.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(T))
      return !1;
    T.charCodeAt(T.length - 1) === 58 ? d.push(T.charCodeAt(0) === 58 ? "center" : "right") : T.charCodeAt(0) === 58 ? d.push("left") : d.push("");
  }
  if (c = n0(e, t).trim(), c.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  l = xi(c), l.length && l[0] === "" && l.shift(), l.length && l[l.length - 1] === "" && l.pop();
  const f = l.length;
  if (f === 0 || f !== d.length)
    return !1;
  if (u)
    return !0;
  const g = e.parentType;
  e.parentType = "table";
  const x = e.md.block.ruler.getRules("blockquote"), _ = e.push("table_open", "table", 1), C = [t, 0];
  _.map = C;
  const N = e.push("thead_open", "thead", 1);
  N.map = [t, t + 1];
  const F = e.push("tr_open", "tr", 1);
  F.map = [t, t + 1];
  for (let E = 0; E < l.length; E++) {
    const T = e.push("th_open", "th", 1);
    d[E] && (T.attrs = [["style", "text-align:" + d[E]]]);
    const j = e.push("inline", "", 0);
    j.content = l[E].trim(), j.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let S, B = 0;
  for (r = t + 2; r < n && !(e.sCount[r] < e.blkIndent); r++) {
    let E = !1;
    for (let j = 0, ue = x.length; j < ue; j++)
      if (x[j](e, r, n, !0)) {
        E = !0;
        break;
      }
    if (E || (c = n0(e, r).trim(), !c) || e.sCount[r] - e.blkIndent >= 4 || (l = xi(c), l.length && l[0] === "" && l.shift(), l.length && l[l.length - 1] === "" && l.pop(), B += f - l.length, B > Xb))
      break;
    if (r === t + 2) {
      const j = e.push("tbody_open", "tbody", 1);
      j.map = S = [t + 2, 0];
    }
    const T = e.push("tr_open", "tr", 1);
    T.map = [r, r + 1];
    for (let j = 0; j < f; j++) {
      const ue = e.push("td_open", "td", 1);
      d[j] && (ue.attrs = [["style", "text-align:" + d[j]]]);
      const de = e.push("inline", "", 0);
      de.content = l[j] ? l[j].trim() : "", de.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return S && (e.push("tbody_close", "tbody", -1), S[1] = r), e.push("table_close", "table", -1), C[1] = r, e.parentType = g, e.line = r, !0;
}
function Qb(e, t, n) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let u = t + 1, r = u;
  for (; u < n; ) {
    if (e.isEmpty(u)) {
      u++;
      continue;
    }
    if (e.sCount[u] - e.blkIndent >= 4) {
      u++, r = u;
      continue;
    }
    break;
  }
  e.line = r;
  const o = e.push("code_block", "code", 0);
  return o.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, o.map = [t, e.line], !0;
}
function em(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || r + 3 > o)
    return !1;
  const i = e.src.charCodeAt(r);
  if (i !== 126 && i !== 96)
    return !1;
  let s = r;
  r = e.skipChars(r, i);
  let c = r - s;
  if (c < 3)
    return !1;
  const l = e.src.slice(s, r), d = e.src.slice(r, o);
  if (i === 96 && d.indexOf(String.fromCharCode(i)) >= 0)
    return !1;
  if (u)
    return !0;
  let f = t, g = !1;
  for (; f++, !(f >= n || (r = s = e.bMarks[f] + e.tShift[f], o = e.eMarks[f], r < o && e.sCount[f] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === i && !(e.sCount[f] - e.blkIndent >= 4) && (r = e.skipChars(r, i), !(r - s < c) && (r = e.skipSpaces(r), !(r < o)))) {
      g = !0;
      break;
    }
  c = e.sCount[t], e.line = f + (g ? 1 : 0);
  const x = e.push("fence", "code", 0);
  return x.info = d, x.content = e.getLines(t + 1, f, c, !0), x.markup = l, x.map = [t, e.line], !0;
}
function tm(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  const i = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (u)
    return !0;
  const s = [], c = [], l = [], d = [], f = e.md.block.ruler.getRules("blockquote"), g = e.parentType;
  e.parentType = "blockquote";
  let x = !1, _;
  for (_ = t; _ < n; _++) {
    const B = e.sCount[_] < e.blkIndent;
    if (r = e.bMarks[_] + e.tShift[_], o = e.eMarks[_], r >= o)
      break;
    if (e.src.charCodeAt(r++) === 62 && !B) {
      let T = e.sCount[_] + 1, j, ue;
      e.src.charCodeAt(r) === 32 ? (r++, T++, ue = !1, j = !0) : e.src.charCodeAt(r) === 9 ? (j = !0, (e.bsCount[_] + T) % 4 === 3 ? (r++, T++, ue = !1) : ue = !0) : j = !1;
      let de = T;
      for (s.push(e.bMarks[_]), e.bMarks[_] = r; r < o; ) {
        const J = e.src.charCodeAt(r);
        if (De(J))
          J === 9 ? de += 4 - (de + e.bsCount[_] + (ue ? 1 : 0)) % 4 : de++;
        else
          break;
        r++;
      }
      x = r >= o, c.push(e.bsCount[_]), e.bsCount[_] = e.sCount[_] + 1 + (j ? 1 : 0), l.push(e.sCount[_]), e.sCount[_] = de - T, d.push(e.tShift[_]), e.tShift[_] = r - e.bMarks[_];
      continue;
    }
    if (x)
      break;
    let E = !1;
    for (let T = 0, j = f.length; T < j; T++)
      if (f[T](e, _, n, !0)) {
        E = !0;
        break;
      }
    if (E) {
      e.lineMax = _, e.blkIndent !== 0 && (s.push(e.bMarks[_]), c.push(e.bsCount[_]), d.push(e.tShift[_]), l.push(e.sCount[_]), e.sCount[_] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[_]), c.push(e.bsCount[_]), d.push(e.tShift[_]), l.push(e.sCount[_]), e.sCount[_] = -1;
  }
  const C = e.blkIndent;
  e.blkIndent = 0;
  const N = e.push("blockquote_open", "blockquote", 1);
  N.markup = ">";
  const F = [t, 0];
  N.map = F, e.md.block.tokenize(e, t, _);
  const S = e.push("blockquote_close", "blockquote", -1);
  S.markup = ">", e.lineMax = i, e.parentType = g, F[1] = e.line;
  for (let B = 0; B < d.length; B++)
    e.bMarks[B + t] = s[B], e.tShift[B + t] = d[B], e.sCount[B + t] = l[B], e.bsCount[B + t] = c[B];
  return e.blkIndent = C, !0;
}
function nm(e, t, n, u) {
  const r = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.bMarks[t] + e.tShift[t];
  const i = e.src.charCodeAt(o++);
  if (i !== 42 && i !== 45 && i !== 95)
    return !1;
  let s = 1;
  for (; o < r; ) {
    const l = e.src.charCodeAt(o++);
    if (l !== i && !De(l))
      return !1;
    l === i && s++;
  }
  if (s < 3)
    return !1;
  if (u)
    return !0;
  e.line = t + 1;
  const c = e.push("hr", "hr", 0);
  return c.map = [t, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i)), !0;
}
function ki(e, t) {
  const n = e.eMarks[t];
  let u = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(u++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (u < n) {
    const o = e.src.charCodeAt(u);
    if (!De(o))
      return -1;
  }
  return u;
}
function wi(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  let r = n;
  if (r + 1 >= u)
    return -1;
  let o = e.src.charCodeAt(r++);
  if (o < 48 || o > 57)
    return -1;
  for (; ; ) {
    if (r >= u)
      return -1;
    if (o = e.src.charCodeAt(r++), o >= 48 && o <= 57) {
      if (r - n >= 10)
        return -1;
      continue;
    }
    if (o === 41 || o === 46)
      break;
    return -1;
  }
  return r < u && (o = e.src.charCodeAt(r), !De(o)) ? -1 : r;
}
function um(e, t) {
  const n = e.level + 2;
  for (let u = t + 2, r = e.tokens.length - 2; u < r; u++)
    e.tokens[u].level === n && e.tokens[u].type === "paragraph_open" && (e.tokens[u + 2].hidden = !0, e.tokens[u].hidden = !0, u += 2);
}
function rm(e, t, n, u) {
  let r, o, i, s, c = t, l = !0;
  if (e.sCount[c] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[c] - e.listIndent >= 4 && e.sCount[c] < e.blkIndent)
    return !1;
  let d = !1;
  u && e.parentType === "paragraph" && e.sCount[c] >= e.blkIndent && (d = !0);
  let f, g, x;
  if ((x = wi(e, c)) >= 0) {
    if (f = !0, i = e.bMarks[c] + e.tShift[c], g = Number(e.src.slice(i, x - 1)), d && g !== 1) return !1;
  } else if ((x = ki(e, c)) >= 0)
    f = !1;
  else
    return !1;
  if (d && e.skipSpaces(x) >= e.eMarks[c])
    return !1;
  if (u)
    return !0;
  const _ = e.src.charCodeAt(x - 1), C = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), g !== 1 && (s.attrs = [["start", g]])) : s = e.push("bullet_list_open", "ul", 1);
  const N = [c, 0];
  s.map = N, s.markup = String.fromCharCode(_);
  let F = !1;
  const S = e.md.block.ruler.getRules("list"), B = e.parentType;
  for (e.parentType = "list"; c < n; ) {
    o = x, r = e.eMarks[c];
    const E = e.sCount[c] + x - (e.bMarks[c] + e.tShift[c]);
    let T = E;
    for (; o < r; ) {
      const Z = e.src.charCodeAt(o);
      if (Z === 9)
        T += 4 - (T + e.bsCount[c]) % 4;
      else if (Z === 32)
        T++;
      else
        break;
      o++;
    }
    const j = o;
    let ue;
    j >= r ? ue = 1 : ue = T - E, ue > 4 && (ue = 1);
    const de = E + ue;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(_);
    const J = [c, 0];
    s.map = J, f && (s.info = e.src.slice(i, x - 1));
    const ce = e.tight, he = e.tShift[c], U = e.sCount[c], be = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = de, e.tight = !0, e.tShift[c] = j - e.bMarks[c], e.sCount[c] = T, j >= r && e.isEmpty(c + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, c, n, !0), (!e.tight || F) && (l = !1), F = e.line - c > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = be, e.tShift[c] = he, e.sCount[c] = U, e.tight = ce, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(_), c = e.line, J[1] = c, c >= n || e.sCount[c] < e.blkIndent || e.sCount[c] - e.blkIndent >= 4)
      break;
    let pe = !1;
    for (let Z = 0, re = S.length; Z < re; Z++)
      if (S[Z](e, c, n, !0)) {
        pe = !0;
        break;
      }
    if (pe)
      break;
    if (f) {
      if (x = wi(e, c), x < 0)
        break;
      i = e.bMarks[c] + e.tShift[c];
    } else if (x = ki(e, c), x < 0)
      break;
    if (_ !== e.src.charCodeAt(x - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(_), N[1] = c, e.line = c, e.parentType = B, l && um(e, C), !0;
}
function om(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t], i = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(S) {
    const B = e.lineMax;
    if (S >= B || e.isEmpty(S))
      return null;
    let E = !1;
    if (e.sCount[S] - e.blkIndent > 3 && (E = !0), e.sCount[S] < 0 && (E = !0), !E) {
      const ue = e.md.block.ruler.getRules("reference"), de = e.parentType;
      e.parentType = "reference";
      let J = !1;
      for (let ce = 0, he = ue.length; ce < he; ce++)
        if (ue[ce](e, S, B, !0)) {
          J = !0;
          break;
        }
      if (e.parentType = de, J)
        return null;
    }
    const T = e.bMarks[S] + e.tShift[S], j = e.eMarks[S];
    return e.src.slice(T, j + 1);
  }
  let c = e.src.slice(r, o + 1);
  o = c.length;
  let l = -1;
  for (r = 1; r < o; r++) {
    const S = c.charCodeAt(r);
    if (S === 91)
      return !1;
    if (S === 93) {
      l = r;
      break;
    } else if (S === 10) {
      const B = s(i);
      B !== null && (c += B, o = c.length, i++);
    } else if (S === 92 && (r++, r < o && c.charCodeAt(r) === 10)) {
      const B = s(i);
      B !== null && (c += B, o = c.length, i++);
    }
  }
  if (l < 0 || c.charCodeAt(l + 1) !== 58)
    return !1;
  for (r = l + 2; r < o; r++) {
    const S = c.charCodeAt(r);
    if (S === 10) {
      const B = s(i);
      B !== null && (c += B, o = c.length, i++);
    } else if (!De(S)) break;
  }
  const d = e.md.helpers.parseLinkDestination(c, r, o);
  if (!d.ok)
    return !1;
  const f = e.md.normalizeLink(d.str);
  if (!e.md.validateLink(f))
    return !1;
  r = d.pos;
  const g = r, x = i, _ = r;
  for (; r < o; r++) {
    const S = c.charCodeAt(r);
    if (S === 10) {
      const B = s(i);
      B !== null && (c += B, o = c.length, i++);
    } else if (!De(S)) break;
  }
  let C = e.md.helpers.parseLinkTitle(c, r, o);
  for (; C.can_continue; ) {
    const S = s(i);
    if (S === null) break;
    c += S, r = o, o = c.length, i++, C = e.md.helpers.parseLinkTitle(c, r, o, C);
  }
  let N;
  for (r < o && _ !== r && C.ok ? (N = C.str, r = C.pos) : (N = "", r = g, i = x); r < o; ) {
    const S = c.charCodeAt(r);
    if (!De(S))
      break;
    r++;
  }
  if (r < o && c.charCodeAt(r) !== 10 && N)
    for (N = "", r = g, i = x; r < o; ) {
      const S = c.charCodeAt(r);
      if (!De(S))
        break;
      r++;
    }
  if (r < o && c.charCodeAt(r) !== 10)
    return !1;
  const F = Mr(c.slice(1, l));
  return F ? (u || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[F] > "u" && (e.env.references[F] = { title: N, href: f }), e.line = i), !0) : !1;
}
const im = [
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
], sm = "[a-zA-Z_:][a-zA-Z0-9:._-]*", cm = "[^\"'=<>`\\x00-\\x20]+", lm = "'[^']*'", am = '"[^"]*"', dm = "(?:" + cm + "|" + lm + "|" + am + ")", fm = "(?:\\s+" + sm + "(?:\\s*=\\s*" + dm + ")?)", k2 = "<[A-Za-z][A-Za-z0-9\\-]*" + fm + "*\\s*\\/?>", w2 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", hm = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", pm = "<[?][\\s\\S]*?[?]>", gm = "<![A-Za-z][^>]*>", bm = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", mm = new RegExp("^(?:" + k2 + "|" + w2 + "|" + hm + "|" + pm + "|" + gm + "|" + bm + ")"), _m = new RegExp("^(?:" + k2 + "|" + w2 + ")"), Fn = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + im.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(_m.source + "\\s*$"), /^$/, !1]
];
function xm(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let i = e.src.slice(r, o), s = 0;
  for (; s < Fn.length && !Fn[s][0].test(i); s++)
    ;
  if (s === Fn.length)
    return !1;
  if (u)
    return Fn[s][2];
  let c = t + 1;
  if (!Fn[s][1].test(i)) {
    for (; c < n && !(e.sCount[c] < e.blkIndent); c++)
      if (r = e.bMarks[c] + e.tShift[c], o = e.eMarks[c], i = e.src.slice(r, o), Fn[s][1].test(i)) {
        i.length !== 0 && c++;
        break;
      }
  }
  e.line = c;
  const l = e.push("html_block", "", 0);
  return l.map = [t, c], l.content = e.getLines(t, c, e.blkIndent, !0), !0;
}
function km(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], o = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.src.charCodeAt(r);
  if (i !== 35 || r >= o)
    return !1;
  let s = 1;
  for (i = e.src.charCodeAt(++r); i === 35 && r < o && s <= 6; )
    s++, i = e.src.charCodeAt(++r);
  if (s > 6 || r < o && !De(i))
    return !1;
  if (u)
    return !0;
  o = e.skipSpacesBack(o, r);
  const c = e.skipCharsBack(o, 35, r);
  c > r && De(e.src.charCodeAt(c - 1)) && (o = c), e.line = t + 1;
  const l = e.push("heading_open", "h" + String(s), 1);
  l.markup = "########".slice(0, s), l.map = [t, e.line];
  const d = e.push("inline", "", 0);
  d.content = e.src.slice(r, o).trim(), d.map = [t, e.line], d.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function wm(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let o = 0, i, s = t + 1;
  for (; s < n && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let x = e.bMarks[s] + e.tShift[s];
      const _ = e.eMarks[s];
      if (x < _ && (i = e.src.charCodeAt(x), (i === 45 || i === 61) && (x = e.skipChars(x, i), x = e.skipSpaces(x), x >= _))) {
        o = i === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let g = !1;
    for (let x = 0, _ = u.length; x < _; x++)
      if (u[x](e, s, n, !0)) {
        g = !0;
        break;
      }
    if (g)
      break;
  }
  if (!o)
    return !1;
  const c = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const l = e.push("heading_open", "h" + String(o), 1);
  l.markup = String.fromCharCode(i), l.map = [t, e.line];
  const d = e.push("inline", "", 0);
  d.content = c, d.map = [t, e.line - 1], d.children = [];
  const f = e.push("heading_close", "h" + String(o), -1);
  return f.markup = String.fromCharCode(i), e.parentType = r, !0;
}
function vm(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let o = t + 1;
  for (e.parentType = "paragraph"; o < n && !e.isEmpty(o); o++) {
    if (e.sCount[o] - e.blkIndent > 3 || e.sCount[o] < 0)
      continue;
    let l = !1;
    for (let d = 0, f = u.length; d < f; d++)
      if (u[d](e, o, n, !0)) {
        l = !0;
        break;
      }
    if (l)
      break;
  }
  const i = e.getLines(t, o, e.blkIndent, !1).trim();
  e.line = o;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [t, e.line];
  const c = e.push("inline", "", 0);
  return c.content = i, c.map = [t, e.line], c.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const Pu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Yb, ["paragraph", "reference"]],
  ["code", Qb],
  ["fence", em, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", tm, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", nm, ["paragraph", "reference", "blockquote", "list"]],
  ["list", rm, ["paragraph", "reference", "blockquote"]],
  ["reference", om],
  ["html_block", xm, ["paragraph", "reference", "blockquote"]],
  ["heading", km, ["paragraph", "reference", "blockquote"]],
  ["lheading", wm],
  ["paragraph", vm]
];
function Sr() {
  this.ruler = new at();
  for (let e = 0; e < Pu.length; e++)
    this.ruler.push(Pu[e][0], Pu[e][1], { alt: (Pu[e][2] || []).slice() });
}
Sr.prototype.tokenize = function(e, t, n) {
  const u = this.ruler.getRules(""), r = u.length, o = e.md.options.maxNesting;
  let i = t, s = !1;
  for (; i < n && (e.line = i = e.skipEmptyLines(i), !(i >= n || e.sCount[i] < e.blkIndent)); ) {
    if (e.level >= o) {
      e.line = n;
      break;
    }
    const c = e.line;
    let l = !1;
    for (let d = 0; d < r; d++)
      if (l = u[d](e, i, n, !1), l) {
        if (c >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!l) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), i = e.line, i < n && e.isEmpty(i) && (s = !0, i++, e.line = i);
  }
};
Sr.prototype.parse = function(e, t, n, u) {
  if (!e)
    return;
  const r = new this.State(e, t, n, u);
  this.tokenize(r, r.line, r.lineMax);
};
Sr.prototype.State = Pt;
function Eu(e, t, n, u) {
  this.src = e, this.env = n, this.md = t, this.tokens = u, this.tokens_meta = Array(u.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Eu.prototype.pushPending = function() {
  const e = new At("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Eu.prototype.push = function(e, t, n) {
  this.pending && this.pushPending();
  const u = new At(e, t, n);
  let r = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), u.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(u), this.tokens_meta.push(r), u;
};
Eu.prototype.scanDelims = function(e, t) {
  const n = this.posMax, u = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let o = e;
  for (; o < n && this.src.charCodeAt(o) === u; )
    o++;
  const i = o - e, s = o < n ? this.src.charCodeAt(o) : 32, c = xu(r) || _u(String.fromCharCode(r)), l = xu(s) || _u(String.fromCharCode(s)), d = mu(r), f = mu(s), g = !f && (!l || d || c), x = !d && (!c || f || l);
  return { can_open: g && (t || !x || c), can_close: x && (t || !g || l), length: i };
};
Eu.prototype.Token = At;
function Cm(e) {
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
function ym(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !Cm(e.src.charCodeAt(n)); )
    n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
const Em = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Am(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, u = e.posMax;
  if (n + 3 > u || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const r = e.pending.match(Em);
  if (!r) return !1;
  const o = r[1], i = e.md.linkify.matchAtStart(e.src.slice(n - o.length));
  if (!i) return !1;
  let s = i.url;
  if (s.length <= o.length) return !1;
  s = s.replace(/\*+$/, "");
  const c = e.md.normalizeLink(s);
  if (!e.md.validateLink(c)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -o.length);
    const l = e.push("link_open", "a", 1);
    l.attrs = [["href", c]], l.markup = "linkify", l.info = "auto";
    const d = e.push("text", "", 0);
    d.content = e.md.normalizeLinkText(s);
    const f = e.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return e.pos += s.length - o.length, !0;
}
function Mm(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 10)
    return !1;
  const u = e.pending.length - 1, r = e.posMax;
  if (!t)
    if (u >= 0 && e.pending.charCodeAt(u) === 32)
      if (u >= 1 && e.pending.charCodeAt(u - 1) === 32) {
        let o = u - 1;
        for (; o >= 1 && e.pending.charCodeAt(o - 1) === 32; ) o--;
        e.pending = e.pending.slice(0, o), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (n++; n < r && De(e.src.charCodeAt(n)); )
    n++;
  return e.pos = n, !0;
}
const ro = [];
for (let e = 0; e < 256; e++)
  ro.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  ro[e.charCodeAt(0)] = 1;
});
function Sm(e, t) {
  let n = e.pos;
  const u = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= u)) return !1;
  let r = e.src.charCodeAt(n);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < u && (r = e.src.charCodeAt(n), !!De(r)); )
      n++;
    return e.pos = n, !0;
  }
  let o = e.src[n];
  if (r >= 55296 && r <= 56319 && n + 1 < u) {
    const s = e.src.charCodeAt(n + 1);
    s >= 56320 && s <= 57343 && (o += e.src[n + 1], n++);
  }
  const i = "\\" + o;
  if (!t) {
    const s = e.push("text_special", "", 0);
    r < 256 && ro[r] !== 0 ? s.content = o : s.content = i, s.markup = i, s.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function Dm(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 96)
    return !1;
  const r = n;
  n++;
  const o = e.posMax;
  for (; n < o && e.src.charCodeAt(n) === 96; )
    n++;
  const i = e.src.slice(r, n), s = i.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return t || (e.pending += i), e.pos += s, !0;
  let c = n, l;
  for (; (l = e.src.indexOf("`", c)) !== -1; ) {
    for (c = l + 1; c < o && e.src.charCodeAt(c) === 96; )
      c++;
    const d = c - l;
    if (d === s) {
      if (!t) {
        const f = e.push("code_inline", "code", 0);
        f.markup = i, f.content = e.src.slice(n, l).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = c, !0;
    }
    e.backticks[d] = l;
  }
  return e.backticksScanned = !0, t || (e.pending += i), e.pos += s, !0;
}
function Lm(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let o = r.length;
  const i = String.fromCharCode(u);
  if (o < 2)
    return !1;
  let s;
  o % 2 && (s = e.push("text", "", 0), s.content = i, o--);
  for (let c = 0; c < o; c += 2)
    s = e.push("text", "", 0), s.content = i + i, e.delimiters.push({
      marker: u,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function vi(e, t) {
  let n;
  const u = [], r = t.length;
  for (let o = 0; o < r; o++) {
    const i = t[o];
    if (i.marker !== 126 || i.end === -1)
      continue;
    const s = t[i.end];
    n = e.tokens[i.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[s.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && u.push(s.token - 1);
  }
  for (; u.length; ) {
    const o = u.pop();
    let i = o + 1;
    for (; i < e.tokens.length && e.tokens[i].type === "s_close"; )
      i++;
    i--, o !== i && (n = e.tokens[i], e.tokens[i] = e.tokens[o], e.tokens[o] = n);
  }
}
function Bm(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  vi(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && vi(e, t[u].delimiters);
}
const v2 = {
  tokenize: Lm,
  postProcess: Bm
};
function Im(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 95 && u !== 42)
    return !1;
  const r = e.scanDelims(e.pos, u === 42);
  for (let o = 0; o < r.length; o++) {
    const i = e.push("text", "", 0);
    i.content = String.fromCharCode(u), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: u,
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
function Ci(e, t) {
  const n = t.length;
  for (let u = n - 1; u >= 0; u--) {
    const r = t[u];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const o = t[r.end], i = u > 0 && t[u - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[u - 1].marker === r.marker && t[u - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === o.token + 1, s = String.fromCharCode(r.marker), c = e.tokens[r.token];
    c.type = i ? "strong_open" : "em_open", c.tag = i ? "strong" : "em", c.nesting = 1, c.markup = i ? s + s : s, c.content = "";
    const l = e.tokens[o.token];
    l.type = i ? "strong_close" : "em_close", l.tag = i ? "strong" : "em", l.nesting = -1, l.markup = i ? s + s : s, l.content = "", i && (e.tokens[t[u - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", u--);
  }
}
function Fm(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  Ci(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && Ci(e, t[u].delimiters);
}
const C2 = {
  tokenize: Im,
  postProcess: Fm
};
function Tm(e, t) {
  let n, u, r, o, i = "", s = "", c = e.pos, l = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const d = e.pos, f = e.posMax, g = e.pos + 1, x = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (x < 0)
    return !1;
  let _ = x + 1;
  if (_ < f && e.src.charCodeAt(_) === 40) {
    for (l = !1, _++; _ < f && (n = e.src.charCodeAt(_), !(!De(n) && n !== 10)); _++)
      ;
    if (_ >= f)
      return !1;
    if (c = _, r = e.md.helpers.parseLinkDestination(e.src, _, e.posMax), r.ok) {
      for (i = e.md.normalizeLink(r.str), e.md.validateLink(i) ? _ = r.pos : i = "", c = _; _ < f && (n = e.src.charCodeAt(_), !(!De(n) && n !== 10)); _++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, _, e.posMax), _ < f && c !== _ && r.ok)
        for (s = r.str, _ = r.pos; _ < f && (n = e.src.charCodeAt(_), !(!De(n) && n !== 10)); _++)
          ;
    }
    (_ >= f || e.src.charCodeAt(_) !== 41) && (l = !0), _++;
  }
  if (l) {
    if (typeof e.env.references > "u")
      return !1;
    if (_ < f && e.src.charCodeAt(_) === 91 ? (c = _ + 1, _ = e.md.helpers.parseLinkLabel(e, _), _ >= 0 ? u = e.src.slice(c, _++) : _ = x + 1) : _ = x + 1, u || (u = e.src.slice(g, x)), o = e.env.references[Mr(u)], !o)
      return e.pos = d, !1;
    i = o.href, s = o.title;
  }
  if (!t) {
    e.pos = g, e.posMax = x;
    const C = e.push("link_open", "a", 1), N = [["href", i]];
    C.attrs = N, s && N.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = _, e.posMax = f, !0;
}
function $m(e, t) {
  let n, u, r, o, i, s, c, l, d = "";
  const f = e.pos, g = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const x = e.pos + 2, _ = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (_ < 0)
    return !1;
  if (o = _ + 1, o < g && e.src.charCodeAt(o) === 40) {
    for (o++; o < g && (n = e.src.charCodeAt(o), !(!De(n) && n !== 10)); o++)
      ;
    if (o >= g)
      return !1;
    for (l = o, s = e.md.helpers.parseLinkDestination(e.src, o, e.posMax), s.ok && (d = e.md.normalizeLink(s.str), e.md.validateLink(d) ? o = s.pos : d = ""), l = o; o < g && (n = e.src.charCodeAt(o), !(!De(n) && n !== 10)); o++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, o, e.posMax), o < g && l !== o && s.ok)
      for (c = s.str, o = s.pos; o < g && (n = e.src.charCodeAt(o), !(!De(n) && n !== 10)); o++)
        ;
    else
      c = "";
    if (o >= g || e.src.charCodeAt(o) !== 41)
      return e.pos = f, !1;
    o++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (o < g && e.src.charCodeAt(o) === 91 ? (l = o + 1, o = e.md.helpers.parseLinkLabel(e, o), o >= 0 ? r = e.src.slice(l, o++) : o = _ + 1) : o = _ + 1, r || (r = e.src.slice(x, _)), i = e.env.references[Mr(r)], !i)
      return e.pos = f, !1;
    d = i.href, c = i.title;
  }
  if (!t) {
    u = e.src.slice(x, _);
    const C = [];
    e.md.inline.parse(
      u,
      e.md,
      e.env,
      C
    );
    const N = e.push("image", "img", 0), F = [["src", d], ["alt", ""]];
    N.attrs = F, N.children = C, N.content = u, c && F.push(["title", c]);
  }
  return e.pos = o, e.posMax = g, !0;
}
const Rm = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Nm = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Om(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 60)
    return !1;
  const u = e.pos, r = e.posMax;
  for (; ; ) {
    if (++n >= r) return !1;
    const i = e.src.charCodeAt(n);
    if (i === 60) return !1;
    if (i === 62) break;
  }
  const o = e.src.slice(u + 1, n);
  if (Nm.test(o)) {
    const i = e.md.normalizeLink(o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const l = e.push("link_close", "a", -1);
      l.markup = "autolink", l.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  if (Rm.test(o)) {
    const i = e.md.normalizeLink("mailto:" + o);
    if (!e.md.validateLink(i))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", i]], s.markup = "autolink", s.info = "auto";
      const c = e.push("text", "", 0);
      c.content = e.md.normalizeLinkText(o);
      const l = e.push("link_close", "a", -1);
      l.markup = "autolink", l.info = "auto";
    }
    return e.pos += o.length + 2, !0;
  }
  return !1;
}
function Pm(e) {
  return /^<a[>\s]/i.test(e);
}
function Hm(e) {
  return /^<\/a\s*>/i.test(e);
}
function zm(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function jm(e, t) {
  if (!e.md.options.html)
    return !1;
  const n = e.posMax, u = e.pos;
  if (e.src.charCodeAt(u) !== 60 || u + 2 >= n)
    return !1;
  const r = e.src.charCodeAt(u + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !zm(r))
    return !1;
  const o = e.src.slice(u).match(mm);
  if (!o)
    return !1;
  if (!t) {
    const i = e.push("html_inline", "", 0);
    i.content = o[0], Pm(i.content) && e.linkLevel++, Hm(i.content) && e.linkLevel--;
  }
  return e.pos += o[0].length, !0;
}
const Um = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, Vm = /^&([a-z][a-z0-9]{1,31});/i;
function qm(e, t) {
  const n = e.pos, u = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= u) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const o = e.src.slice(n).match(Um);
    if (o) {
      if (!t) {
        const i = o[1][0].toLowerCase() === "x" ? parseInt(o[1].slice(1), 16) : parseInt(o[1], 10), s = e.push("text_special", "", 0);
        s.content = no(i) ? lr(i) : lr(65533), s.markup = o[0], s.info = "entity";
      }
      return e.pos += o[0].length, !0;
    }
  } else {
    const o = e.src.slice(n).match(Vm);
    if (o) {
      const i = g2(o[0]);
      if (i !== o[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = i, s.markup = o[0], s.info = "entity";
        }
        return e.pos += o[0].length, !0;
      }
    }
  }
  return !1;
}
function yi(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let u = 0, r = -2;
  const o = [];
  for (let i = 0; i < n; i++) {
    const s = e[i];
    if (o.push(0), (e[u].marker !== s.marker || r !== s.token - 1) && (u = i), r = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const c = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let l = u - o[u] - 1, d = l;
    for (; l > c; l -= o[l] + 1) {
      const f = e[l];
      if (f.marker === s.marker && f.open && f.end < 0) {
        let g = !1;
        if ((f.close || s.open) && (f.length + s.length) % 3 === 0 && (f.length % 3 !== 0 || s.length % 3 !== 0) && (g = !0), !g) {
          const x = l > 0 && !e[l - 1].open ? o[l - 1] + 1 : 0;
          o[i] = i - l + x, o[l] = x, s.open = !1, f.end = i, f.close = !1, d = -1, r = -2;
          break;
        }
      }
    }
    d !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = d);
  }
}
function Zm(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  yi(e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && yi(t[u].delimiters);
}
function Wm(e) {
  let t, n, u = 0;
  const r = e.tokens, o = e.tokens.length;
  for (t = n = 0; t < o; t++)
    r[t].nesting < 0 && u--, r[t].level = u, r[t].nesting > 0 && u++, r[t].type === "text" && t + 1 < o && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== n && (r[n] = r[t]), n++);
  t !== n && (r.length = n);
}
const u0 = [
  ["text", ym],
  ["linkify", Am],
  ["newline", Mm],
  ["escape", Sm],
  ["backticks", Dm],
  ["strikethrough", v2.tokenize],
  ["emphasis", C2.tokenize],
  ["link", Tm],
  ["image", $m],
  ["autolink", Om],
  ["html_inline", jm],
  ["entity", qm]
], r0 = [
  ["balance_pairs", Zm],
  ["strikethrough", v2.postProcess],
  ["emphasis", C2.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", Wm]
];
function Au() {
  this.ruler = new at();
  for (let e = 0; e < u0.length; e++)
    this.ruler.push(u0[e][0], u0[e][1]);
  this.ruler2 = new at();
  for (let e = 0; e < r0.length; e++)
    this.ruler2.push(r0[e][0], r0[e][1]);
}
Au.prototype.skipToken = function(e) {
  const t = e.pos, n = this.ruler.getRules(""), u = n.length, r = e.md.options.maxNesting, o = e.cache;
  if (typeof o[t] < "u") {
    e.pos = o[t];
    return;
  }
  let i = !1;
  if (e.level < r) {
    for (let s = 0; s < u; s++)
      if (e.level++, i = n[s](e, !0), e.level--, i) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  i || e.pos++, o[t] = e.pos;
};
Au.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), n = t.length, u = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < u; ) {
    const o = e.pos;
    let i = !1;
    if (e.level < r) {
      for (let s = 0; s < n; s++)
        if (i = t[s](e, !1), i) {
          if (o >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (i) {
      if (e.pos >= u)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
Au.prototype.parse = function(e, t, n, u) {
  const r = new this.State(e, t, n, u);
  this.tokenize(r);
  const o = this.ruler2.getRules(""), i = o.length;
  for (let s = 0; s < i; s++)
    o[s](r);
};
Au.prototype.State = Eu;
function Gm(e) {
  const t = {};
  e = e || {}, t.src_Any = a2.source, t.src_Cc = d2.source, t.src_Z = h2.source, t.src_P = eo.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const n = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function M0(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(u) {
      e[u] = n[u];
    });
  }), e;
}
function Dr(e) {
  return Object.prototype.toString.call(e);
}
function Km(e) {
  return Dr(e) === "[object String]";
}
function Jm(e) {
  return Dr(e) === "[object Object]";
}
function Xm(e) {
  return Dr(e) === "[object RegExp]";
}
function Ei(e) {
  return Dr(e) === "[object Function]";
}
function Ym(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const y2 = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Qm(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t || y2.hasOwnProperty(n);
  }, !1);
}
const e9 = {
  "http:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(u) ? u.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(u) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : u.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(u) ? u.match(n.re.mailto)[0].length : 0;
    }
  }
}, t9 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", n9 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function u9(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function r9(e) {
  return function(t, n) {
    const u = t.slice(n);
    return e.test(u) ? u.match(e)[0].length : 0;
  };
}
function Ai() {
  return function(e, t) {
    t.normalize(e);
  };
}
function ar(e) {
  const t = e.re = Gm(e.__opts__), n = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || n.push(t9), n.push(t.src_xn), t.src_tlds = n.join("|");
  function u(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(u(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(u(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(u(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(u(t.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function o(s, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + c);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const c = e.__schemas__[s];
    if (c === null)
      return;
    const l = { validate: null, link: null };
    if (e.__compiled__[s] = l, Jm(c)) {
      Xm(c.validate) ? l.validate = r9(c.validate) : Ei(c.validate) ? l.validate = c.validate : o(s, c), Ei(c.normalize) ? l.normalize = c.normalize : c.normalize ? o(s, c) : l.normalize = Ai();
      return;
    }
    if (Km(c)) {
      r.push(s);
      return;
    }
    o(s, c);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: Ai() };
  const i = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(Ym).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + i + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), u9(e);
}
function o9(e, t) {
  const n = e.__index__, u = e.__last_index__, r = e.__text_cache__.slice(n, u);
  this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = u + t, this.raw = r, this.text = r, this.url = r;
}
function S0(e, t) {
  const n = new o9(e, t);
  return e.__compiled__[n.schema].normalize(n, e), n;
}
function pt(e, t) {
  if (!(this instanceof pt))
    return new pt(e, t);
  t || Qm(e) && (t = e, e = {}), this.__opts__ = M0({}, y2, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = M0({}, e9, e), this.__compiled__ = {}, this.__tlds__ = n9, this.__tlds_replaced__ = !1, this.re = {}, ar(this);
}
pt.prototype.add = function(t, n) {
  return this.__schemas__[t] = n, ar(this), this;
};
pt.prototype.set = function(t) {
  return this.__opts__ = M0(this.__opts__, t), this;
};
pt.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let n, u, r, o, i, s, c, l, d;
  if (this.re.schema_test.test(t)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (n = c.exec(t)) !== null; )
      if (o = this.testSchemaAt(t, n[2], c.lastIndex), o) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + o;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = t.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (u = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = u.index + u[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = u.index + u[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (d = t.indexOf("@"), d >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (i = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = s))), this.__index__ >= 0;
};
pt.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
pt.prototype.testSchemaAt = function(t, n, u) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, u, this) : 0;
};
pt.prototype.match = function(t) {
  const n = [];
  let u = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (n.push(S0(this, u)), u = this.__last_index__);
  let r = u ? t.slice(u) : t;
  for (; this.test(r); )
    n.push(S0(this, u)), r = r.slice(this.__last_index__), u += this.__last_index__;
  return n.length ? n : null;
};
pt.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const n = this.re.schema_at_start.exec(t);
  if (!n) return null;
  const u = this.testSchemaAt(t, n[2], n[0].length);
  return u ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + u, S0(this, 0)) : null;
};
pt.prototype.tlds = function(t, n) {
  return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(u, r, o) {
    return u !== o[r - 1];
  }).reverse(), ar(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, ar(this), this);
};
pt.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
pt.prototype.onCompile = function() {
};
const Un = 2147483647, Tt = 36, oo = 1, ku = 26, i9 = 38, s9 = 700, E2 = 72, A2 = 128, M2 = "-", c9 = /^xn--/, l9 = /[^\0-\x7F]/, a9 = /[\x2E\u3002\uFF0E\uFF61]/g, d9 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, o0 = Tt - oo, $t = Math.floor, i0 = String.fromCharCode;
function cn(e) {
  throw new RangeError(d9[e]);
}
function f9(e, t) {
  const n = [];
  let u = e.length;
  for (; u--; )
    n[u] = t(e[u]);
  return n;
}
function S2(e, t) {
  const n = e.split("@");
  let u = "";
  n.length > 1 && (u = n[0] + "@", e = n[1]), e = e.replace(a9, ".");
  const r = e.split("."), o = f9(r, t).join(".");
  return u + o;
}
function D2(e) {
  const t = [];
  let n = 0;
  const u = e.length;
  for (; n < u; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < u) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((r & 1023) << 10) + (o & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
const h9 = (e) => String.fromCodePoint(...e), p9 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Tt;
}, Mi = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, L2 = function(e, t, n) {
  let u = 0;
  for (e = n ? $t(e / s9) : e >> 1, e += $t(e / t); e > o0 * ku >> 1; u += Tt)
    e = $t(e / o0);
  return $t(u + (o0 + 1) * e / (e + i9));
}, B2 = function(e) {
  const t = [], n = e.length;
  let u = 0, r = A2, o = E2, i = e.lastIndexOf(M2);
  i < 0 && (i = 0);
  for (let s = 0; s < i; ++s)
    e.charCodeAt(s) >= 128 && cn("not-basic"), t.push(e.charCodeAt(s));
  for (let s = i > 0 ? i + 1 : 0; s < n; ) {
    const c = u;
    for (let d = 1, f = Tt; ; f += Tt) {
      s >= n && cn("invalid-input");
      const g = p9(e.charCodeAt(s++));
      g >= Tt && cn("invalid-input"), g > $t((Un - u) / d) && cn("overflow"), u += g * d;
      const x = f <= o ? oo : f >= o + ku ? ku : f - o;
      if (g < x)
        break;
      const _ = Tt - x;
      d > $t(Un / _) && cn("overflow"), d *= _;
    }
    const l = t.length + 1;
    o = L2(u - c, l, c == 0), $t(u / l) > Un - r && cn("overflow"), r += $t(u / l), u %= l, t.splice(u++, 0, r);
  }
  return String.fromCodePoint(...t);
}, I2 = function(e) {
  const t = [];
  e = D2(e);
  const n = e.length;
  let u = A2, r = 0, o = E2;
  for (const c of e)
    c < 128 && t.push(i0(c));
  const i = t.length;
  let s = i;
  for (i && t.push(M2); s < n; ) {
    let c = Un;
    for (const d of e)
      d >= u && d < c && (c = d);
    const l = s + 1;
    c - u > $t((Un - r) / l) && cn("overflow"), r += (c - u) * l, u = c;
    for (const d of e)
      if (d < u && ++r > Un && cn("overflow"), d === u) {
        let f = r;
        for (let g = Tt; ; g += Tt) {
          const x = g <= o ? oo : g >= o + ku ? ku : g - o;
          if (f < x)
            break;
          const _ = f - x, C = Tt - x;
          t.push(
            i0(Mi(x + _ % C, 0))
          ), f = $t(_ / C);
        }
        t.push(i0(Mi(f, 0))), o = L2(r, l, s === i), r = 0, ++s;
      }
    ++r, ++u;
  }
  return t.join("");
}, g9 = function(e) {
  return S2(e, function(t) {
    return c9.test(t) ? B2(t.slice(4).toLowerCase()) : t;
  });
}, b9 = function(e) {
  return S2(e, function(t) {
    return l9.test(t) ? "xn--" + I2(t) : t;
  });
}, F2 = {
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
    decode: D2,
    encode: h9
  },
  decode: B2,
  encode: I2,
  toASCII: b9,
  toUnicode: g9
}, m9 = {
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
}, _9 = {
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
}, x9 = {
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
}, k9 = {
  default: m9,
  zero: _9,
  commonmark: x9
}, w9 = /^(vbscript|javascript|file|data):/, v9 = /^data:image\/(gif|png|jpeg|webp);/;
function C9(e) {
  const t = e.trim().toLowerCase();
  return w9.test(t) ? v9.test(t) : !0;
}
const T2 = ["http:", "https:", "mailto:"];
function y9(e) {
  const t = Q0(e, !0);
  if (t.hostname && (!t.protocol || T2.indexOf(t.protocol) >= 0))
    try {
      t.hostname = F2.toASCII(t.hostname);
    } catch {
    }
  return yu(Y0(t));
}
function E9(e) {
  const t = Q0(e, !0);
  if (t.hostname && (!t.protocol || T2.indexOf(t.protocol) >= 0))
    try {
      t.hostname = F2.toUnicode(t.hostname);
    } catch {
    }
  return qn(Y0(t), qn.defaultChars + "%");
}
function vt(e, t) {
  if (!(this instanceof vt))
    return new vt(e, t);
  t || to(e) || (t = e || {}, e = "default"), this.inline = new Au(), this.block = new Sr(), this.core = new uo(), this.renderer = new Gn(), this.linkify = new pt(), this.validateLink = C9, this.normalizeLink = y9, this.normalizeLinkText = E9, this.utils = Mb, this.helpers = Ar({}, Bb), this.options = {}, this.configure(e), t && this.set(t);
}
vt.prototype.set = function(e) {
  return Ar(this.options, e), this;
};
vt.prototype.configure = function(e) {
  const t = this;
  if (to(e)) {
    const n = e;
    if (e = k9[n], !e)
      throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(n) {
    e.components[n].rules && t[n].ruler.enableOnly(e.components[n].rules), e.components[n].rules2 && t[n].ruler2.enableOnly(e.components[n].rules2);
  }), this;
};
vt.prototype.enable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.enable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + u);
  return this;
};
vt.prototype.disable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.disable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + u);
  return this;
};
vt.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
vt.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const n = new this.core.State(e, this, t);
  return this.core.process(n), n.tokens;
};
vt.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
vt.prototype.parseInline = function(e, t) {
  const n = new this.core.State(e, this, t);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
vt.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
const A9 = /* @__PURE__ */ it((e) => {
  const t = T1(new vt(e.options ?? {}));
  for (const u of e.plugins ?? [])
    t.value.use(u);
  const n = ye(() => t.value.render(e.source));
  return () => Os("div", { innerHTML: n.value });
}, {
  props: ["source", "options", "plugins"]
}), M9 = {
  key: 0,
  class: "chat-message-actions"
}, S9 = {
  key: 2,
  class: "chat-message-files"
}, D0 = /* @__PURE__ */ it({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    Vt.registerLanguage("javascript", Ys), Vt.registerLanguage("typescript", N5), Vt.registerLanguage("python", $5), Vt.registerLanguage("xml", Qs), Vt.registerLanguage("bash", T5);
    const { message: u } = N1(n), { options: r } = tn(), o = Je(null), i = Je({}), s = ye(() => u.value.text || "&lt;Empty response&gt;"), c = ye(() => ({
      "chat-message-from-user": u.value.sender === "user",
      "chat-message-from-bot": u.value.sender === "bot",
      "chat-message-transparent": u.value.transparent === !0
    })), l = (_) => {
      _.use(H5, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, d = () => {
      var _;
      (_ = o.value) != null && _.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, f = {
      highlight(_, C) {
        if (C && Vt.getLanguage(C))
          try {
            return Vt.highlight(_, { language: C }).value;
          } catch {
          }
        return "";
      }
    }, g = { ...(r == null ? void 0 : r.messageComponents) ?? {} };
    t({ scrollToView: d });
    const x = async (_) => await new Promise((C, N) => {
      const F = new FileReader();
      F.onload = () => C(F.result), F.onerror = N, F.readAsDataURL(_);
    });
    return Qt(async () => {
      if (u.value.files)
        for (const _ of u.value.files)
          try {
            const C = await x(_);
            i.value[_.name] = C;
          } catch (C) {
            console.error("Error reading file:", C);
          }
    }), (_, C) => (h(), m("div", {
      ref_key: "messageContainer",
      ref: o,
      class: An(["chat-message", c.value])
    }, [
      _.$slots.beforeMessage ? (h(), m("div", M9, [
        Gt(_.$slots, "beforeMessage", ko($s({ message: te(u) })))
      ])) : $e("", !0),
      Gt(_.$slots, "default", {}, () => [
        te(u).type === "component" && g[te(u).key] ? (h(), Be(q0(g[te(u).key]), ko(yr({ key: 0 }, te(u).arguments)), null, 16)) : (h(), Be(te(A9), {
          key: 1,
          class: "chat-message-markdown",
          source: s.value,
          options: f,
          plugins: [l]
        }, null, 8, ["source", "plugins"])),
        (te(u).files ?? []).length > 0 ? (h(), m("div", S9, [
          (h(!0), m(Ke, null, nr(te(u).files ?? [], (N) => (h(), m("div", {
            key: N.name,
            class: "chat-message-file"
          }, [
            Ee(ec, {
              file: N,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : $e("", !0)
      ])
    ], 2));
  }
}), D9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L9(e, t) {
  return h(), m("svg", D9, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ])]);
}
const B9 = w({ name: "mdi-chat", render: L9 }), I9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F9(e, t) {
  return h(), m("svg", I9, [...t[0] || (t[0] = [
    a("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ])]);
}
const T9 = w({ name: "mdi-chevron-down", render: F9 }), $9 = {
  key: 0,
  class: "welcome-message"
}, R9 = {
  key: 0,
  class: "welcome-message-icon"
}, N9 = ["src"], O9 = {
  key: 1,
  class: "welcome-message-icon-emoji"
}, P9 = {
  key: 1,
  class: "welcome-message-text"
}, H9 = {
  key: 0,
  class: "welcome-message-arrow"
}, z9 = /* @__PURE__ */ it({
  __name: "WelcomeMessage",
  props: {
    show: { type: Boolean }
  },
  emits: ["close", "click"],
  setup(e, { emit: t }) {
    const n = t, { options: u } = tn(), r = ye(() => {
      var f;
      return (f = u.welcomeMessage) == null ? void 0 : f.text;
    }), o = ye(() => {
      var f;
      return (f = u.welcomeMessage) == null ? void 0 : f.icon;
    }), i = ye(() => {
      var f;
      return (f = u.welcomeMessage) == null ? void 0 : f.showArrow;
    }), s = ye(() => {
      const f = o.value;
      return typeof f == "string" && (f.startsWith("http://") || f.startsWith("https://") || f.startsWith("data:image/") || f.startsWith("/") || f.includes(".") && (f.includes(".png") || f.includes(".jpg") || f.includes(".jpeg") || f.includes(".gif") || f.includes(".svg") || f.includes(".webp")));
    });
    function c() {
      n("click"), n("close");
    }
    function l() {
      n("close");
    }
    function d(f) {
      const g = f, x = getComputedStyle(g);
      g.style.width = x.width, g.style.minWidth = x.width, g.style.maxWidth = x.width;
    }
    return (f, g) => (h(), Be(_0, {
      name: "welcome-message-transition",
      onBeforeLeave: d
    }, {
      default: kt(() => [
        f.show && r.value ? (h(), m("div", $9, [
          a("button", {
            class: "welcome-message-close",
            onClick: l
          }, "×"),
          a("div", {
            class: "welcome-message-content",
            onClick: c
          }, [
            o.value ? (h(), m("div", R9, [
              s.value ? (h(), m("img", {
                key: 0,
                src: o.value,
                alt: "Welcome icon",
                class: "welcome-message-icon-image"
              }, null, 8, N9)) : (h(), m("span", O9, Nt(o.value), 1))
            ])) : $e("", !0),
            r.value ? (h(), m("div", P9, Nt(r.value), 1)) : $e("", !0)
          ]),
          i.value ? (h(), m("div", H9)) : $e("", !0)
        ])) : $e("", !0)
      ]),
      _: 1
    }));
  }
}), j9 = { class: "chat-window-wrapper" }, U9 = { class: "chat-window" }, V9 = /* @__PURE__ */ it({
  __name: "ChatWindow",
  setup(e) {
    const { options: t } = tn(), n = Je(!1), u = Je(!1), r = Je(!1), o = ye(() => {
      var d, f;
      return ((d = t.welcomeMessage) == null ? void 0 : d.enabled) !== !1 && ((f = t.welcomeMessage) == null ? void 0 : f.text);
    });
    function i() {
      n.value = !n.value, r.value = !0, n.value && (u.value = !1, Vn(() => {
        ut.emit("scrollToBottom");
      }));
    }
    function s() {
      n.value = !1;
    }
    function c() {
      u.value = !1, r.value = !0;
    }
    function l() {
      i();
    }
    return Qt(() => {
      ut.on("close", s), o.value && setTimeout(() => {
        !r.value && !n.value && (u.value = !0);
      }, 1e3);
    }), kr(() => {
      ut.off("close", s);
    }), (d, f) => (h(), m("div", j9, [
      Ee(_0, { name: "chat-window-transition" }, {
        default: kt(() => [
          os(a("div", U9, [
            Ee($2)
          ], 512), [
            [cf, n.value]
          ])
        ]),
        _: 1
      }),
      Ee(z9, {
        show: u.value && !n.value && !r.value,
        onClose: c,
        onClick: l
      }, null, 8, ["show"]),
      a("div", {
        class: "chat-window-toggle",
        onClick: i
      }, [
        Ee(_0, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: kt(() => [
            n.value ? (h(), Be(te(T9), {
              key: 1,
              height: "32",
              width: "32"
            })) : (h(), Be(te(B9), {
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
}), q9 = /* @__PURE__ */ it({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, u = Je(), r = ye(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return Qt(() => {
      var o;
      (o = u.value) == null || o.scrollToView();
    }), (o, i) => (h(), Be(te(D0), {
      ref_key: "messageContainer",
      ref: u,
      class: An(r.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: kt(() => [...i[0] || (i[0] = [
        a("div", { class: "chat-message-typing-body" }, [
          a("span", { class: "chat-message-typing-circle" }),
          a("span", { class: "chat-message-typing-circle" }),
          a("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])]),
      _: 1
    }, 8, ["class"]));
  }
}), Z9 = {
  key: 0,
  class: "empty-container"
}, W9 = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, G9 = {
  key: 1,
  class: "chat-messages-list"
}, K9 = /* @__PURE__ */ it({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = X0(), n = Je([]), { initialMessages: u, waitingForResponse: r } = t;
    return zu(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && te(u).length === 0 && o.messages.length === 0 ? (h(), m("div", Z9, [
      a("div", W9, [
        Ee(w5, {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        Ee(F5, {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: kt(() => [
            Cr(Nt(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (h(), m("div", G9, [
      (h(!0), m(Ke, null, nr(te(u), (s) => (h(), Be(D0, {
        key: s.id,
        message: s
      }, null, 8, ["message"]))), 128)),
      (h(!0), m(Ke, null, nr(o.messages, (s) => (h(), Be(D0, {
        key: s.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: s
      }, {
        beforeMessage: kt(({ message: c }) => [
          Gt(o.$slots, "beforeMessage", yr({ ref_for: !0 }, { message: c }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      te(r) ? (h(), Be(q9, { key: 0 })) : $e("", !0)
    ]));
  }
}), J9 = { class: "chat-heading" }, X9 = { class: "chat-title-with-icon" }, Y9 = {
  key: 0,
  class: "chat-header-icon"
}, Q9 = ["src"], e7 = {
  key: 1,
  class: "chat-header-icon-emoji"
}, t7 = ["title"], n7 = { key: 0 }, $2 = /* @__PURE__ */ it({
  __name: "Chat",
  setup(e) {
    const { t } = Cu(), n = X0(), { messages: u, currentSessionId: r } = n, { options: o } = tn(), i = ye(() => o.mode === "window" && o.showWindowCloseButton), s = ye(() => o.headerIcon), c = ye(() => {
      const g = s.value;
      return typeof g == "string" && (g.startsWith("http://") || g.startsWith("https://") || g.startsWith("data:image/") || g.startsWith("/") || g.includes(".") && (g.includes(".png") || g.includes(".jpg") || g.includes(".jpeg") || g.includes(".gif") || g.includes(".svg") || g.includes(".webp")));
    });
    async function l() {
      n.startNewSession && (n.startNewSession(), Vn(() => {
        ut.emit("scrollToBottom");
      }));
    }
    async function d() {
      n.loadPreviousSession && (await n.loadPreviousSession(), Vn(() => {
        ut.emit("scrollToBottom");
      }));
    }
    function f() {
      ut.emit("close");
    }
    return Qt(async () => {
      await d(), !o.showWelcomeScreen && !r.value && await l();
    }), (g, x) => (h(), Be(g3, { class: "chat-wrapper" }, {
      header: kt(() => [
        a("div", J9, [
          a("div", X9, [
            s.value ? (h(), m("div", Y9, [
              c.value ? (h(), m("img", {
                key: 0,
                src: s.value,
                alt: "Header icon",
                class: "chat-header-icon-image"
              }, null, 8, Q9)) : (h(), m("span", e7, Nt(s.value), 1))
            ])) : $e("", !0),
            a("h1", null, Nt(te(t)("title")), 1)
          ]),
          i.value ? (h(), m("button", {
            key: 0,
            class: "chat-close-button",
            title: te(t)("closeButtonTooltip"),
            onClick: f
          }, [
            Ee(te(oh), {
              height: "18",
              width: "18"
            })
          ], 8, t7)) : $e("", !0)
        ]),
        te(t)("subtitle") ? (h(), m("p", n7, Nt(te(t)("subtitle")), 1)) : $e("", !0)
      ]),
      footer: kt(() => [
        te(r) ? (h(), Be(d3, { key: 0 })) : (h(), Be(_h, { key: 1 }))
      ]),
      default: kt(() => [
        !te(r) && te(o).showWelcomeScreen ? (h(), Be(dh, {
          key: 0,
          "onClick:button": l
        })) : (h(), Be(K9, {
          key: 1,
          messages: te(u)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), u7 = /* @__PURE__ */ it({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = tn(), n = ye(() => t.mode === "fullscreen");
    return Qt(() => {
      Vt.registerLanguage("xml", Qs), Vt.registerLanguage("javascript", Ys);
    }), (u, r) => n.value ? (h(), Be($2, {
      key: 0,
      class: "n8n-chat"
    })) : (h(), Be(V9, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function r7(e) {
  var r, o;
  const t = {
    ...In,
    ...e,
    webhookConfig: {
      ...In.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...In.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(r = In.i18n) == null ? void 0 : r.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...In.theme,
      ...e == null ? void 0 : e.theme
    },
    welcomeMessage: {
      ...In.welcomeMessage,
      ...e == null ? void 0 : e.welcomeMessage
    }
  }, n = t.target ?? Ff;
  typeof n == "string" && Vf(n), t.theme && (qf(t.theme), Kf(t.theme));
  const u = Lf(u7);
  return u.use(Jf, t), u.mount(n), u;
}
export {
  r7 as createChat
};
