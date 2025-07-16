/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function gs(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const Le = {}
  , nr = []
  , $t = () => {}
  , Bm = () => !1
  , go = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , ys = e => e.startsWith("onUpdate:")
  , nt = Object.assign
  , ws = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Hm = Object.prototype.hasOwnProperty
  , Ae = (e, t) => Hm.call(e, t)
  , le = Array.isArray
  , rr = e => ui(e) === "[object Map]"
  , yo = e => ui(e) === "[object Set]"
  , pl = e => ui(e) === "[object Date]"
  , me = e => typeof e == "function"
  , He = e => typeof e == "string"
  , Lt = e => typeof e == "symbol"
  , Fe = e => e !== null && typeof e == "object"
  , du = e => (Fe(e) || me(e)) && me(e.then) && me(e.catch)
  , uu = Object.prototype.toString
  , ui = e => uu.call(e)
  , qm = e => ui(e).slice(8, -1)
  , cu = e => ui(e) === "[object Object]"
  , xs = e => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , Ir = gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , wo = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Wm = /-(\w)/g
  , Dt = wo((e => e.replace(Wm, ( (t, n) => n ? n.toUpperCase() : ""))))
  , Gm = /\B([A-Z])/g
  , Gn = wo((e => e.replace(Gm, "-$1").toLowerCase()))
  , xo = wo((e => e.charAt(0).toUpperCase() + e.slice(1)))
  , Qo = wo((e => e ? `on${xo(e)}` : ""))
  , xn = (e, t) => !Object.is(e, t)
  , ji = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , fu = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Km = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Ym = e => {
    const t = He(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let hl;
const ko = () => hl || (hl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ci(e) {
    if (le(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , i = He(r) ? Qm(r) : ci(r);
            if (i)
                for (const o in i)
                    t[o] = i[o]
        }
        return t
    } else if (He(e) || Fe(e))
        return e
}
const Xm = /;(?![^(]*\))/g
  , Zm = /:([^]+)/
  , Jm = /\/\*[^]*?\*\//g;
function Qm(e) {
    const t = {};
    return e.replace(Jm, "").split(Xm).forEach((n => {
        if (n) {
            const r = n.split(Zm);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    )),
    t
}
function ye(e) {
    let t = "";
    if (He(e))
        t = e;
    else if (le(e))
        for (let n = 0; n < e.length; n++) {
            const r = ye(e[n]);
            r && (t += r + " ")
        }
    else if (Fe(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const ep = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , tp = gs(ep);
function mu(e) {
    return !!e || e === ""
}
function np(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = _o(e[r], t[r]);
    return n
}
function _o(e, t) {
    if (e === t)
        return !0;
    let n = pl(e)
      , r = pl(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Lt(e),
    r = Lt(t),
    n || r)
        return e === t;
    if (n = le(e),
    r = le(t),
    n || r)
        return n && r ? np(e, t) : !1;
    if (n = Fe(e),
    r = Fe(t),
    n || r) {
        if (!n || !r)
            return !1;
        const i = Object.keys(e).length
          , o = Object.keys(t).length;
        if (i !== o)
            return !1;
        for (const a in e) {
            const s = e.hasOwnProperty(a)
              , l = t.hasOwnProperty(a);
            if (s && !l || !s && l || !_o(e[a], t[a]))
                return !1
        }
    }
    return String(e) === String(t)
}
function pu(e, t) {
    return e.findIndex((n => _o(n, t)))
}
const hu = e => !!(e && e.__v_isRef === !0)
  , A = e => He(e) ? e : e == null ? "" : le(e) || Fe(e) && (e.toString === uu || !me(e.toString)) ? hu(e) ? A(e.value) : JSON.stringify(e, bu, 2) : String(e)
  , bu = (e, t) => hu(t) ? bu(e, t.value) : rr(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce(( (n, [r,i], o) => (n[ea(r, o) + " =>"] = i,
    n)), {})
} : yo(t) ? {
    [`Set(${t.size})`]: [...t.values()].map((n => ea(n)))
} : Lt(t) ? ea(t) : Fe(t) && !le(t) && !cu(t) ? String(t) : t
  , ea = (e, t="") => {
    var n;
    return Lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
var rp = {
    NODE_ENV: "production"
};
let St;
class ip {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = St,
        !t && St && (this.index = (St.scopes || (St.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = St;
            try {
                return St = this,
                t()
            } finally {
                St = n
            }
        }
    }
    on() {
        St = this
    }
    off() {
        St = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function op() {
    return St
}
let Ie;
const ta = new WeakSet;
class vu {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        St && St.active && St.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        ta.has(this) && (ta.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yu(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        bl(this),
        wu(this);
        const t = Ie
          , n = Mt;
        Ie = this,
        Mt = !0;
        try {
            return this.fn()
        } finally {
            xu(this),
            Ie = t,
            Mt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Ss(t);
            this.deps = this.depsTail = void 0,
            bl(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ta.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ea(this) && this.run()
    }
    get dirty() {
        return Ea(this)
    }
}
let gu = 0, zr, Rr;
function yu(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = Rr,
        Rr = e;
        return
    }
    e.next = zr,
    zr = e
}
function ks() {
    gu++
}
function _s() {
    if (--gu > 0)
        return;
    if (Rr) {
        let t = Rr;
        for (Rr = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; zr; ) {
        let t = zr;
        for (zr = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function wu(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function xu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const i = r.prevDep;
        r.version === -1 ? (r === n && (n = i),
        Ss(r),
        ap(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = i
    }
    e.deps = t,
    e.depsTail = n
}
function Ea(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (ku(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function ku(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Kr))
        return;
    e.globalVersion = Kr;
    const t = e.dep;
    if (e.flags |= 2,
    t.version > 0 && !e.isSSR && e.deps && !Ea(e)) {
        e.flags &= -3;
        return
    }
    const n = Ie
      , r = Mt;
    Ie = e,
    Mt = !0;
    try {
        wu(e);
        const i = e.fn(e._value);
        (t.version === 0 || xn(i, e._value)) && (e._value = i,
        t.version++)
    } catch (i) {
        throw t.version++,
        i
    } finally {
        Ie = n,
        Mt = r,
        xu(e),
        e.flags &= -3
    }
}
function Ss(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: i} = e;
    if (r && (r.nextSub = i,
    e.prevSub = void 0),
    i && (i.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep)
            Ss(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function ap(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let Mt = !0;
const _u = [];
function an() {
    _u.push(Mt),
    Mt = !1
}
function sn() {
    const e = _u.pop();
    Mt = e === void 0 ? !0 : e
}
function bl(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = Ie;
        Ie = void 0;
        try {
            t()
        } finally {
            Ie = n
        }
    }
}
let Kr = 0;
class sp {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Es {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!Ie || !Mt || Ie === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Ie)
            n = this.activeLink = new sp(Ie,this),
            Ie.deps ? (n.prevDep = Ie.depsTail,
            Ie.depsTail.nextDep = n,
            Ie.depsTail = n) : Ie.deps = Ie.depsTail = n,
            Su(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = Ie.depsTail,
            n.nextDep = void 0,
            Ie.depsTail.nextDep = n,
            Ie.depsTail = n,
            Ie.deps === n && (Ie.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Kr++,
        this.notify(t)
    }
    notify(t) {
        ks();
        try {
            rp.NODE_ENV;
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            _s()
        }
    }
}
function Su(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Su(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Ca = new WeakMap
  , Vn = Symbol("")
  , Ta = Symbol("")
  , Yr = Symbol("");
function st(e, t, n) {
    if (Mt && Ie) {
        let r = Ca.get(e);
        r || Ca.set(e, r = new Map);
        let i = r.get(n);
        i || (r.set(n, i = new Es),
        i.map = r,
        i.key = n),
        i.track()
    }
}
function Zt(e, t, n, r, i, o) {
    const a = Ca.get(e);
    if (!a) {
        Kr++;
        return
    }
    const s = l => {
        l && l.trigger()
    }
    ;
    if (ks(),
    t === "clear")
        a.forEach(s);
    else {
        const l = le(e)
          , d = l && xs(n);
        if (l && n === "length") {
            const u = Number(r);
            a.forEach(( (c, f) => {
                (f === "length" || f === Yr || !Lt(f) && f >= u) && s(c)
            }
            ))
        } else
            switch ((n !== void 0 || a.has(void 0)) && s(a.get(n)),
            d && s(a.get(Yr)),
            t) {
            case "add":
                l ? d && s(a.get("length")) : (s(a.get(Vn)),
                rr(e) && s(a.get(Ta)));
                break;
            case "delete":
                l || (s(a.get(Vn)),
                rr(e) && s(a.get(Ta)));
                break;
            case "set":
                rr(e) && s(a.get(Vn));
                break
            }
    }
    _s()
}
function Kn(e) {
    const t = se(e);
    return t === e ? t : (st(t, "iterate", Yr),
    At(e) ? t : t.map(lt))
}
function So(e) {
    return st(e = se(e), "iterate", Yr),
    e
}
const lp = {
    __proto__: null,
    [Symbol.iterator]() {
        return na(this, Symbol.iterator, lt)
    },
    concat(...e) {
        return Kn(this).concat(...e.map((t => le(t) ? Kn(t) : t)))
    },
    entries() {
        return na(this, "entries", (e => (e[1] = lt(e[1]),
        e)))
    },
    every(e, t) {
        return Kt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Kt(this, "filter", e, t, (n => n.map(lt)), arguments)
    },
    find(e, t) {
        return Kt(this, "find", e, t, lt, arguments)
    },
    findIndex(e, t) {
        return Kt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Kt(this, "findLast", e, t, lt, arguments)
    },
    findLastIndex(e, t) {
        return Kt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Kt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return ra(this, "includes", e)
    },
    indexOf(...e) {
        return ra(this, "indexOf", e)
    },
    join(e) {
        return Kn(this).join(e)
    },
    lastIndexOf(...e) {
        return ra(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Kt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Er(this, "pop")
    },
    push(...e) {
        return Er(this, "push", e)
    },
    reduce(e, ...t) {
        return vl(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return vl(this, "reduceRight", e, t)
    },
    shift() {
        return Er(this, "shift")
    },
    some(e, t) {
        return Kt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Er(this, "splice", e)
    },
    toReversed() {
        return Kn(this).toReversed()
    },
    toSorted(e) {
        return Kn(this).toSorted(e)
    },
    toSpliced(...e) {
        return Kn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Er(this, "unshift", e)
    },
    values() {
        return na(this, "values", lt)
    }
};
function na(e, t, n) {
    const r = So(e)
      , i = r[t]();
    return r !== e && !At(e) && (i._next = i.next,
    i.next = () => {
        const o = i._next();
        return o.value && (o.value = n(o.value)),
        o
    }
    ),
    i
}
const dp = Array.prototype;
function Kt(e, t, n, r, i, o) {
    const a = So(e)
      , s = a !== e && !At(e)
      , l = a[t];
    if (l !== dp[t]) {
        const c = l.apply(e, o);
        return s ? lt(c) : c
    }
    let d = n;
    a !== e && (s ? d = function(c, f) {
        return n.call(this, lt(c), f, e)
    }
    : n.length > 2 && (d = function(c, f) {
        return n.call(this, c, f, e)
    }
    ));
    const u = l.call(a, d, r);
    return s && i ? i(u) : u
}
function vl(e, t, n, r) {
    const i = So(e);
    let o = n;
    return i !== e && (At(e) ? n.length > 3 && (o = function(a, s, l) {
        return n.call(this, a, s, l, e)
    }
    ) : o = function(a, s, l) {
        return n.call(this, a, lt(s), l, e)
    }
    ),
    i[t](o, ...r)
}
function ra(e, t, n) {
    const r = se(e);
    st(r, "iterate", Yr);
    const i = r[t](...n);
    return (i === -1 || i === !1) && Cs(n[0]) ? (n[0] = se(n[0]),
    r[t](...n)) : i
}
function Er(e, t, n=[]) {
    an(),
    ks();
    const r = se(e)[t].apply(e, n);
    return _s(),
    sn(),
    r
}
const up = gs("__proto__,__v_isRef,__isVue")
  , Eu = new Set(Object.getOwnPropertyNames(Symbol).filter((e => e !== "arguments" && e !== "caller")).map((e => Symbol[e])).filter(Lt));
function cp(e) {
    Lt(e) || (e = String(e));
    const t = se(this);
    return st(t, "has", e),
    t.hasOwnProperty(e)
}
class Cu {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const i = this._isReadonly
          , o = this._isShallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return o;
        if (n === "__v_raw")
            return r === (i ? o ? $u : Pu : o ? Du : Au).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const a = le(t);
        if (!i) {
            let l;
            if (a && (l = lp[n]))
                return l;
            if (n === "hasOwnProperty")
                return cp
        }
        const s = Reflect.get(t, n, tt(t) ? t : r);
        return (Lt(n) ? Eu.has(n) : up(n)) || (i || st(t, "get", n),
        o) ? s : tt(s) ? a && xs(n) ? s : s.value : Fe(s) ? i ? Mu(s) : vr(s) : s
    }
}
class Tu extends Cu {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, i) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Hn(o);
            if (!At(r) && !Hn(r) && (o = se(o),
            r = se(r)),
            !le(t) && tt(o) && !tt(r))
                return l ? !1 : (o.value = r,
                !0)
        }
        const a = le(t) && xs(n) ? Number(n) < t.length : Ae(t, n)
          , s = Reflect.set(t, n, r, tt(t) ? t : i);
        return t === se(i) && (a ? xn(r, o) && Zt(t, "set", n, r) : Zt(t, "add", n, r)),
        s
    }
    deleteProperty(t, n) {
        const r = Ae(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && r && Zt(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Lt(n) || !Eu.has(n)) && st(t, "has", n),
        r
    }
    ownKeys(t) {
        return st(t, "iterate", le(t) ? "length" : Vn),
        Reflect.ownKeys(t)
    }
}
class Ou extends Cu {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const fp = new Tu
  , mp = new Ou
  , pp = new Tu(!0)
  , hp = new Ou(!0)
  , Oa = e => e
  , xi = e => Reflect.getPrototypeOf(e);
function bp(e, t, n) {
    return function(...r) {
        const i = this.__v_raw
          , o = se(i)
          , a = rr(o)
          , s = e === "entries" || e === Symbol.iterator && a
          , l = e === "keys" && a
          , d = i[e](...r)
          , u = n ? Oa : t ? Aa : lt;
        return !t && st(o, "iterate", l ? Ta : Vn),
        {
            next() {
                const {value: c, done: f} = d.next();
                return f ? {
                    value: c,
                    done: f
                } : {
                    value: s ? [u(c[0]), u(c[1])] : u(c),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function ki(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function vp(e, t) {
    const n = {
        get(i) {
            const o = this.__v_raw
              , a = se(o)
              , s = se(i);
            e || (xn(i, s) && st(a, "get", i),
            st(a, "get", s));
            const {has: l} = xi(a)
              , d = t ? Oa : e ? Aa : lt;
            if (l.call(a, i))
                return d(o.get(i));
            if (l.call(a, s))
                return d(o.get(s));
            o !== a && o.get(i)
        },
        get size() {
            const i = this.__v_raw;
            return !e && st(se(i), "iterate", Vn),
            Reflect.get(i, "size", i)
        },
        has(i) {
            const o = this.__v_raw
              , a = se(o)
              , s = se(i);
            return e || (xn(i, s) && st(a, "has", i),
            st(a, "has", s)),
            i === s ? o.has(i) : o.has(i) || o.has(s)
        },
        forEach(i, o) {
            const a = this
              , s = a.__v_raw
              , l = se(s)
              , d = t ? Oa : e ? Aa : lt;
            return !e && st(l, "iterate", Vn),
            s.forEach(( (u, c) => i.call(o, d(u), d(c), a)))
        }
    };
    return nt(n, e ? {
        add: ki("add"),
        set: ki("set"),
        delete: ki("delete"),
        clear: ki("clear")
    } : {
        add(i) {
            !t && !At(i) && !Hn(i) && (i = se(i));
            const o = se(this);
            return xi(o).has.call(o, i) || (o.add(i),
            Zt(o, "add", i, i)),
            this
        },
        set(i, o) {
            !t && !At(o) && !Hn(o) && (o = se(o));
            const a = se(this)
              , {has: s, get: l} = xi(a);
            let d = s.call(a, i);
            d || (i = se(i),
            d = s.call(a, i));
            const u = l.call(a, i);
            return a.set(i, o),
            d ? xn(o, u) && Zt(a, "set", i, o) : Zt(a, "add", i, o),
            this
        },
        delete(i) {
            const o = se(this)
              , {has: a, get: s} = xi(o);
            let l = a.call(o, i);
            l || (i = se(i),
            l = a.call(o, i)),
            s && s.call(o, i);
            const d = o.delete(i);
            return l && Zt(o, "delete", i, void 0),
            d
        },
        clear() {
            const i = se(this)
              , o = i.size !== 0
              , a = i.clear();
            return o && Zt(i, "clear", void 0, void 0),
            a
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach((i => {
        n[i] = bp(i, e, t)
    }
    )),
    n
}
function Eo(e, t) {
    const n = vp(e, t);
    return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(Ae(n, i) && i in r ? n : r, i, o)
}
const gp = {
    get: Eo(!1, !1)
}
  , yp = {
    get: Eo(!1, !0)
}
  , wp = {
    get: Eo(!0, !1)
}
  , xp = {
    get: Eo(!0, !0)
}
  , Au = new WeakMap
  , Du = new WeakMap
  , Pu = new WeakMap
  , $u = new WeakMap;
function kp(e) {
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
        return 0
    }
}
function _p(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : kp(qm(e))
}
function vr(e) {
    return Hn(e) ? e : Co(e, !1, fp, gp, Au)
}
function Sp(e) {
    return Co(e, !1, pp, yp, Du)
}
function Mu(e) {
    return Co(e, !0, mp, wp, Pu)
}
function _i(e) {
    return Co(e, !0, hp, xp, $u)
}
function Co(e, t, n, r, i) {
    if (!Fe(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const a = _p(e);
    if (a === 0)
        return e;
    const s = new Proxy(e,a === 2 ? r : n);
    return i.set(e, s),
    s
}
function ir(e) {
    return Hn(e) ? ir(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Hn(e) {
    return !!(e && e.__v_isReadonly)
}
function At(e) {
    return !!(e && e.__v_isShallow)
}
function Cs(e) {
    return e ? !!e.__v_raw : !1
}
function se(e) {
    const t = e && e.__v_raw;
    return t ? se(t) : e
}
function Ep(e) {
    return !Ae(e, "__v_skip") && Object.isExtensible(e) && fu(e, "__v_skip", !0),
    e
}
const lt = e => Fe(e) ? vr(e) : e
  , Aa = e => Fe(e) ? Mu(e) : e;
function tt(e) {
    return e ? e.__v_isRef === !0 : !1
}
function W(e) {
    return Lu(e, !1)
}
function Da(e) {
    return Lu(e, !0)
}
function Lu(e, t) {
    return tt(e) ? e : new Cp(e,t)
}
class Cp {
    constructor(t, n) {
        this.dep = new Es,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : se(t),
        this._value = n ? t : lt(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || At(t) || Hn(t);
        t = r ? t : se(t),
        xn(t, n) && (this._rawValue = t,
        this._value = r ? t : lt(t),
        this.dep.trigger())
    }
}
function Xr(e) {
    return tt(e) ? e.value : e
}
const Tp = {
    get: (e, t, n) => t === "__v_raw" ? e : Xr(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const i = e[t];
        return tt(i) && !tt(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Fu(e) {
    return ir(e) ? e : new Proxy(e,Tp)
}
class Op {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new Es(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Kr - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && Ie !== this)
            return yu(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return ku(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Ap(e, t, n=!1) {
    let r, i;
    return me(e) ? r = e : (r = e.get,
    i = e.set),
    new Op(r,i,n)
}
const Si = {}
  , Yi = new WeakMap;
let Nn;
function Dp(e, t=!1, n=Nn) {
    if (n) {
        let r = Yi.get(n);
        r || Yi.set(n, r = []),
        r.push(e)
    }
}
function Pp(e, t, n=Le) {
    const {immediate: r, deep: i, once: o, scheduler: a, augmentJob: s, call: l} = n
      , d = k => i ? k : At(k) || i === !1 || i === 0 ? Jt(k, 1) : Jt(k);
    let u, c, f, m, b = !1, p = !1;
    if (tt(e) ? (c = () => e.value,
    b = At(e)) : ir(e) ? (c = () => d(e),
    b = !0) : le(e) ? (p = !0,
    b = e.some((k => ir(k) || At(k))),
    c = () => e.map((k => {
        if (tt(k))
            return k.value;
        if (ir(k))
            return d(k);
        if (me(k))
            return l ? l(k, 2) : k()
    }
    ))) : me(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
        if (f) {
            an();
            try {
                f()
            } finally {
                sn()
            }
        }
        const k = Nn;
        Nn = u;
        try {
            return l ? l(e, 3, [m]) : e(m)
        } finally {
            Nn = k
        }
    }
    : c = $t,
    t && i) {
        const k = c
          , O = i === !0 ? 1 / 0 : i;
        c = () => Jt(k(), O)
    }
    const y = op()
      , v = () => {
        u.stop(),
        y && y.active && ws(y.effects, u)
    }
    ;
    if (o && t) {
        const k = t;
        t = (...O) => {
            k(...O),
            v()
        }
    }
    let w = p ? new Array(e.length).fill(Si) : Si;
    const g = k => {
        if (!(!(u.flags & 1) || !u.dirty && !k))
            if (t) {
                const O = u.run();
                if (i || b || (p ? O.some(( (D, R) => xn(D, w[R]))) : xn(O, w))) {
                    f && f();
                    const D = Nn;
                    Nn = u;
                    try {
                        const R = [O, w === Si ? void 0 : p && w[0] === Si ? [] : w, m];
                        l ? l(t, 3, R) : t(...R),
                        w = O
                    } finally {
                        Nn = D
                    }
                }
            } else
                u.run()
    }
    ;
    return s && s(g),
    u = new vu(c),
    u.scheduler = a ? () => a(g, !1) : g,
    m = k => Dp(k, !1, u),
    f = u.onStop = () => {
        const k = Yi.get(u);
        if (k) {
            if (l)
                l(k, 4);
            else
                for (const O of k)
                    O();
            Yi.delete(u)
        }
    }
    ,
    t ? r ? g(!0) : w = u.run() : a ? a(g.bind(null, !0), !0) : u.run(),
    v.pause = u.pause.bind(u),
    v.resume = u.resume.bind(u),
    v.stop = v,
    v
}
function Jt(e, t=1 / 0, n) {
    if (t <= 0 || !Fe(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    tt(e))
        Jt(e.value, t, n);
    else if (le(e))
        for (let r = 0; r < e.length; r++)
            Jt(e[r], t, n);
    else if (yo(e) || rr(e))
        e.forEach((r => {
            Jt(r, t, n)
        }
        ));
    else if (cu(e)) {
        for (const r in e)
            Jt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && Jt(e[r], t, n)
    }
    return e
}
var pn = {
    NODE_ENV: "production"
};
const jr = [];
let ia = !1;
function $p(e, ...t) {
    if (ia)
        return;
    ia = !0,
    an();
    const n = jr.length ? jr[jr.length - 1].component : null
      , r = n && n.appContext.config.warnHandler
      , i = Mp();
    if (r)
        gr(r, n, 11, [e + t.map((o => {
            var a, s;
            return (s = (a = o.toString) == null ? void 0 : a.call(o)) != null ? s : JSON.stringify(o)
        }
        )).join(""), n && n.proxy, i.map(( ({vnode: o}) => `at <${Ec(n, o.type)}>`)).join(`\n`), i]);
    else {
        const o = [`[Vue warn]: ${e}`, ...t];
        i.length && o.push(`\n`, ...Lp(i)),
        console.warn(...o)
    }
    sn(),
    ia = !1
}
function Mp() {
    let e = jr[jr.length - 1];
    if (!e)
        return [];
    const t = [];
    for (; e; ) {
        const n = t[0];
        n && n.vnode === e ? n.recurseCount++ : t.push({
            vnode: e,
            recurseCount: 0
        });
        const r = e.component && e.component.parent;
        e = r && r.vnode
    }
    return t
}
function Lp(e) {
    const t = [];
    return e.forEach(( (n, r) => {
        t.push(...r === 0 ? [] : [`\n`], ...Fp(n))
    }
    )),
    t
}
function Fp({vnode: e, recurseCount: t}) {
    const n = t > 0 ? `... (${t} recursive calls)` : ""
      , r = e.component ? e.component.parent == null : !1
      , i = ` at <${Ec(e.component, e.type, r)}`
      , o = ">" + n;
    return e.props ? [i, ...Np(e.props), o] : [i + o]
}
function Np(e) {
    const t = []
      , n = Object.keys(e);
    return n.slice(0, 3).forEach((r => {
        t.push(...Nu(r, e[r]))
    }
    )),
    n.length > 3 && t.push(" ..."),
    t
}
function Nu(e, t, n) {
    return He(t) ? (t = JSON.stringify(t),
    n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : tt(t) ? (t = Nu(e, se(t.value), !0),
    n ? t : [`${e}=Ref<`, t, ">"]) : me(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = se(t),
    n ? t : [`${e}=`, t])
}
function gr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (i) {
        To(i, t, n)
    }
}
function Ft(e, t, n, r) {
    if (me(e)) {
        const i = gr(e, t, n, r);
        return i && du(i) && i.catch((o => {
            To(o, t, n)
        }
        )),
        i
    }
    if (le(e)) {
        const i = [];
        for (let o = 0; o < e.length; o++)
            i.push(Ft(e[o], t, n, r));
        return i
    }
}
function To(e, t, n, r=!0) {
    const i = t ? t.vnode : null
      , {errorHandler: o, throwUnhandledErrorInProduction: a} = t && t.appContext.config || Le;
    if (t) {
        let s = t.parent;
        const l = t.proxy
          , d = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; s; ) {
            const u = s.ec;
            if (u) {
                for (let c = 0; c < u.length; c++)
                    if (u[c](e, l, d) === !1)
                        return
            }
            s = s.parent
        }
        if (o) {
            an(),
            gr(o, null, 10, [e, l, d]),
            sn();
            return
        }
    }
    Ip(e, n, i, r, a)
}
function Ip(e, t, n, r=!0, i=!1) {
    if (i)
        throw e;
    console.error(e)
}
const pt = [];
let Vt = -1;
const or = [];
let hn = null
  , Jn = 0;
const Iu = Promise.resolve();
let Xi = null;
function tn(e) {
    const t = Xi || Iu;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function zp(e) {
    let t = Vt + 1
      , n = pt.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , i = pt[r]
          , o = Zr(i);
        o < e || o === e && i.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Ts(e) {
    if (!(e.flags & 1)) {
        const t = Zr(e)
          , n = pt[pt.length - 1];
        !n || !(e.flags & 2) && t >= Zr(n) ? pt.push(e) : pt.splice(zp(t), 0, e),
        e.flags |= 1,
        zu()
    }
}
function zu() {
    Xi || (Xi = Iu.then(ju))
}
function Rp(e) {
    le(e) ? or.push(...e) : hn && e.id === -1 ? hn.splice(Jn + 1, 0, e) : e.flags & 1 || (or.push(e),
    e.flags |= 1),
    zu()
}
function gl(e, t, n=Vt + 1) {
    for (; n < pt.length; n++) {
        const r = pt[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            pt.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function Ru(e) {
    if (or.length) {
        const t = [...new Set(or)].sort(( (n, r) => Zr(n) - Zr(r)));
        if (or.length = 0,
        hn) {
            hn.push(...t);
            return
        }
        for (hn = t,
        Jn = 0; Jn < hn.length; Jn++) {
            const n = hn[Jn];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        hn = null,
        Jn = 0
    }
}
const Zr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ju(e) {
    const t = $t;
    try {
        for (Vt = 0; Vt < pt.length; Vt++) {
            const n = pt[Vt];
            n && !(n.flags & 8) && (pn.NODE_ENV !== "production" && t(n),
            n.flags & 4 && (n.flags &= -2),
            gr(n, n.i, n.i ? 15 : 14),
            n.flags & 4 || (n.flags &= -2))
        }
    } finally {
        for (; Vt < pt.length; Vt++) {
            const n = pt[Vt];
            n && (n.flags &= -2)
        }
        Vt = -1,
        pt.length = 0,
        Ru(),
        Xi = null,
        (pt.length || or.length) && ju()
    }
}
let et = null
  , Vu = null;
function Zi(e) {
    const t = et;
    return et = e,
    Vu = e && e.type.__scopeId || null,
    t
}
function te(e, t=et, n) {
    if (!t || e._n)
        return e;
    const r = (...i) => {
        r._d && $l(-1);
        const o = Zi(t);
        let a;
        try {
            a = e(...i)
        } finally {
            Zi(o),
            r._d && $l(1)
        }
        return a
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function jp(e, t) {
    if (et === null)
        return e;
    const n = $o(et)
      , r = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[o,a,s,l=Le] = t[i];
        o && (me(o) && (o = {
            mounted: o,
            updated: o
        }),
        o.deep && Jt(a),
        r.push({
            dir: o,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: s,
            modifiers: l
        }))
    }
    return e
}
function An(e, t, n, r) {
    const i = e.dirs
      , o = t && t.dirs;
    for (let a = 0; a < i.length; a++) {
        const s = i[a];
        o && (s.oldValue = o[a].value);
        let l = s.dir[r];
        l && (an(),
        Ft(l, n, 8, [e.el, s, e, t]),
        sn())
    }
}
const Uu = Symbol("_vte")
  , Bu = e => e.__isTeleport
  , Vr = e => e && (e.disabled || e.disabled === "")
  , yl = e => e && (e.defer || e.defer === "")
  , wl = e => typeof SVGElement < "u" && e instanceof SVGElement
  , xl = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Pa = (e, t) => {
    const n = e && e.to;
    return He(n) ? t ? t(n) : null : n
}
  , Hu = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, i, o, a, s, l, d) {
        const {mc: u, pc: c, pbc: f, o: {insert: m, querySelector: b, createText: p, createComment: y}} = d
          , v = Vr(t.props);
        let {shapeFlag: w, children: g, dynamicChildren: k} = t;
        if (e == null) {
            const O = t.el = p("")
              , D = t.anchor = p("");
            m(O, n, r),
            m(D, n, r);
            const R = (L, Z) => {
                w & 16 && (i && i.isCE && (i.ce._teleportTarget = L),
                u(g, L, Z, i, o, a, s, l))
            }
              , G = () => {
                const L = t.target = Pa(t.props, b)
                  , Z = qu(L, t, p, m);
                L && (a !== "svg" && wl(L) ? a = "svg" : a !== "mathml" && xl(L) && (a = "mathml"),
                v || (R(L, Z),
                Vi(t, !1)))
            }
            ;
            v && (R(n, D),
            Vi(t, !0)),
            yl(t.props) ? mt(( () => {
                G(),
                t.el.__isMounted = !0
            }
            ), o) : G()
        } else {
            if (yl(t.props) && !e.el.__isMounted) {
                mt(( () => {
                    Hu.process(e, t, n, r, i, o, a, s, l, d),
                    delete e.el.__isMounted
                }
                ), o);
                return
            }
            t.el = e.el,
            t.targetStart = e.targetStart;
            const O = t.anchor = e.anchor
              , D = t.target = e.target
              , R = t.targetAnchor = e.targetAnchor
              , G = Vr(e.props)
              , L = G ? n : D
              , Z = G ? O : R;
            if (a === "svg" || wl(D) ? a = "svg" : (a === "mathml" || xl(D)) && (a = "mathml"),
            k ? (f(e.dynamicChildren, k, L, i, o, a, s),
            As(e, t, !0)) : l || c(e, t, L, Z, i, o, a, s, !1),
            v)
                G ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ei(t, n, O, d, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = Pa(t.props, b);
                q && Ei(t, q, null, d, 0)
            } else
                G && Ei(t, D, R, d, 1);
            Vi(t, v)
        }
    },
    remove(e, t, n, {um: r, o: {remove: i}}, o) {
        const {shapeFlag: a, children: s, anchor: l, targetStart: d, targetAnchor: u, target: c, props: f} = e;
        if (c && (i(d),
        i(u)),
        o && i(l),
        a & 16) {
            const m = o || !Vr(f);
            for (let b = 0; b < s.length; b++) {
                const p = s[b];
                r(p, t, n, m, !!p.dynamicChildren)
            }
        }
    },
    move: Ei,
    hydrate: Vp
};
function Ei(e, t, n, {o: {insert: r}, m: i}, o=2) {
    o === 0 && r(e.targetAnchor, t, n);
    const {el: a, anchor: s, shapeFlag: l, children: d, props: u} = e
      , c = o === 2;
    if (c && r(a, t, n),
    (!c || Vr(u)) && l & 16)
        for (let f = 0; f < d.length; f++)
            i(d[f], t, n, 2);
    c && r(s, t, n)
}
function Vp(e, t, n, r, i, o, {o: {nextSibling: a, parentNode: s, querySelector: l, insert: d, createText: u}}, c) {
    const f = t.target = Pa(t.props, l);
    if (f) {
        const m = Vr(t.props)
          , b = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if (m)
                t.anchor = c(a(e), t, s(e), n, r, i, o),
                t.targetStart = b,
                t.targetAnchor = b && a(b);
            else {
                t.anchor = a(e);
                let p = b;
                for (; p; ) {
                    if (p && p.nodeType === 8) {
                        if (p.data === "teleport start anchor")
                            t.targetStart = p;
                        else if (p.data === "teleport anchor") {
                            t.targetAnchor = p,
                            f._lpa = t.targetAnchor && a(t.targetAnchor);
                            break
                        }
                    }
                    p = a(p)
                }
                t.targetAnchor || qu(f, t, u, d),
                c(b && a(b), t, f, n, r, i, o)
            }
        Vi(t, m)
    }
    return t.anchor && a(t.anchor)
}
const Up = Hu;
function Vi(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, i;
        for (t ? (r = e.el,
        i = e.anchor) : (r = e.targetStart,
        i = e.targetAnchor); r && r !== i; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function qu(e, t, n, r) {
    const i = t.targetStart = n("")
      , o = t.targetAnchor = n("");
    return i[Uu] = o,
    e && (r(i, e),
    r(o, e)),
    o
}
const bn = Symbol("_leaveCb")
  , Ci = Symbol("_enterCb");
function Bp() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ue(( () => {
        e.isMounted = !0
    }
    )),
    Qu(( () => {
        e.isUnmounting = !0
    }
    )),
    e
}
const Tt = [Function, Array]
  , Wu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Tt,
    onEnter: Tt,
    onAfterEnter: Tt,
    onEnterCancelled: Tt,
    onBeforeLeave: Tt,
    onLeave: Tt,
    onAfterLeave: Tt,
    onLeaveCancelled: Tt,
    onBeforeAppear: Tt,
    onAppear: Tt,
    onAfterAppear: Tt,
    onAppearCancelled: Tt
}
  , Gu = e => {
    const t = e.subTree;
    return t.component ? Gu(t.component) : t
}
  , Hp = {
    name: "BaseTransition",
    props: Wu,
    setup(e, {slots: t}) {
        const n = $s()
          , r = Bp();
        return () => {
            const i = t.default && Xu(t.default(), !0);
            if (!i || !i.length)
                return;
            const o = Ku(i)
              , a = se(e)
              , {mode: s} = a;
            if (r.isLeaving)
                return oa(o);
            const l = kl(o);
            if (!l)
                return oa(o);
            let d = $a(l, a, r, n, (c => d = c));
            l.type !== bt && Jr(l, d);
            let u = n.subTree && kl(n.subTree);
            if (u && u.type !== bt && !In(l, u) && Gu(n).type !== bt) {
                let c = $a(u, a, r, n);
                if (Jr(u, c),
                s === "out-in" && l.type !== bt)
                    return r.isLeaving = !0,
                    c.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete c.afterLeave,
                        u = void 0
                    }
                    ,
                    oa(o);
                s === "in-out" && l.type !== bt ? c.delayLeave = (f, m, b) => {
                    const p = Yu(r, u);
                    p[String(u.key)] = u,
                    f[bn] = () => {
                        m(),
                        f[bn] = void 0,
                        delete d.delayedLeave,
                        u = void 0
                    }
                    ,
                    d.delayedLeave = () => {
                        b(),
                        delete d.delayedLeave,
                        u = void 0
                    }
                }
                : u = void 0
            } else
                u && (u = void 0);
            return o
        }
    }
};
function Ku(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== bt) {
                t = n;
                break
            }
    }
    return t
}
const qp = Hp;
function Yu(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function $a(e, t, n, r, i) {
    const {appear: o, mode: a, persisted: s=!1, onBeforeEnter: l, onEnter: d, onAfterEnter: u, onEnterCancelled: c, onBeforeLeave: f, onLeave: m, onAfterLeave: b, onLeaveCancelled: p, onBeforeAppear: y, onAppear: v, onAfterAppear: w, onAppearCancelled: g} = t
      , k = String(e.key)
      , O = Yu(n, e)
      , D = (L, Z) => {
        L && Ft(L, r, 9, Z)
    }
      , R = (L, Z) => {
        const q = Z[1];
        D(L, Z),
        le(L) ? L.every(($ => $.length <= 1)) && q() : L.length <= 1 && q()
    }
      , G = {
        mode: a,
        persisted: s,
        beforeEnter(L) {
            let Z = l;
            if (!n.isMounted)
                if (o)
                    Z = y || l;
                else
                    return;
            L[bn] && L[bn](!0);
            const q = O[k];
            q && In(e, q) && q.el[bn] && q.el[bn](),
            D(Z, [L])
        },
        enter(L) {
            let Z = d
              , q = u
              , $ = c;
            if (!n.isMounted)
                if (o)
                    Z = v || d,
                    q = w || u,
                    $ = g || c;
                else
                    return;
            let re = !1;
            const he = L[Ci] = Te => {
                re || (re = !0,
                Te ? D($, [L]) : D(q, [L]),
                G.delayedLeave && G.delayedLeave(),
                L[Ci] = void 0)
            }
            ;
            Z ? R(Z, [L, he]) : he()
        },
        leave(L, Z) {
            const q = String(e.key);
            if (L[Ci] && L[Ci](!0),
            n.isUnmounting)
                return Z();
            D(f, [L]);
            let $ = !1;
            const re = L[bn] = he => {
                $ || ($ = !0,
                Z(),
                he ? D(p, [L]) : D(b, [L]),
                L[bn] = void 0,
                O[q] === e && delete O[q])
            }
            ;
            O[q] = e,
            m ? R(m, [L, re]) : re()
        },
        clone(L) {
            const Z = $a(L, t, n, r, i);
            return i && i(Z),
            Z
        }
    };
    return G
}
function oa(e) {
    if (Oo(e))
        return e = nn(e),
        e.children = null,
        e
}
function kl(e) {
    if (!Oo(e))
        return Bu(e.type) && e.children ? Ku(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && me(n.default))
            return n.default()
    }
}
function Jr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Jr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function Xu(e, t=!1, n) {
    let r = []
      , i = 0;
    for (let o = 0; o < e.length; o++) {
        let a = e[o];
        const s = n == null ? a.key : String(n) + String(a.key != null ? a.key : o);
        a.type === U ? (a.patchFlag & 128 && i++,
        r = r.concat(Xu(a.children, t, s))) : (t || a.type !== bt) && r.push(s != null ? nn(a, {
            key: s
        }) : a)
    }
    if (i > 1)
        for (let o = 0; o < r.length; o++)
            r[o].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function ve(e, t) {
    return me(e) ? nt({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function Wp() {
    const e = $s();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : ""
}
function Zu(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ji(e, t, n, r, i=!1) {
    if (le(e)) {
        e.forEach(( (b, p) => Ji(b, t && (le(t) ? t[p] : t), n, r, i)));
        return
    }
    if (ar(r) && !i) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ji(e, t, n, r.component.subTree);
        return
    }
    const o = r.shapeFlag & 4 ? $o(r.component) : r.el
      , a = i ? null : o
      , {i: s, r: l} = e
      , d = t && t.r
      , u = s.refs === Le ? s.refs = {} : s.refs
      , c = s.setupState
      , f = se(c)
      , m = c === Le ? () => !1 : b => Ae(f, b);
    if (d != null && d !== l && (He(d) ? (u[d] = null,
    m(d) && (c[d] = null)) : tt(d) && (d.value = null)),
    me(l))
        gr(l, s, 12, [a, u]);
    else {
        const b = He(l)
          , p = tt(l);
        if (b || p) {
            const y = () => {
                if (e.f) {
                    const v = b ? m(l) ? c[l] : u[l] : l.value;
                    i ? le(v) && ws(v, o) : le(v) ? v.includes(o) || v.push(o) : b ? (u[l] = [o],
                    m(l) && (c[l] = u[l])) : (l.value = [o],
                    e.k && (u[e.k] = l.value))
                } else
                    b ? (u[l] = a,
                    m(l) && (c[l] = a)) : p && (l.value = a,
                    e.k && (u[e.k] = a))
            }
            ;
            a ? (y.id = -1,
            mt(y, n)) : y()
        }
    }
}
ko().requestIdleCallback;
ko().cancelIdleCallback;
const ar = e => !!e.type.__asyncLoader
  , Oo = e => e.type.__isKeepAlive;
function Gp(e, t) {
    Ju(e, "a", t)
}
function Kp(e, t) {
    Ju(e, "da", t)
}
function Ju(e, t, n=Ze) {
    const r = e.__wdc || (e.__wdc = () => {
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return e()
    }
    );
    if (Ao(t, r, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            Oo(i.parent.vnode) && Yp(r, t, n, i),
            i = i.parent
    }
}
function Yp(e, t, n, r) {
    const i = Ao(t, e, r, !0);
    rt(( () => {
        ws(r[t], i)
    }
    ), n)
}
function Ao(e, t, n=Ze, r=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , o = t.__weh || (t.__weh = (...a) => {
            an();
            const s = fi(n)
              , l = Ft(t, n, e, a);
            return s(),
            sn(),
            l
        }
        );
        return r ? i.unshift(o) : i.push(o),
        o
    }
}
const ln = e => (t, n=Ze) => {
    (!ni || e === "sp") && Ao(e, ( (...r) => t(...r)), n)
}
  , Xp = ln("bm")
  , Ue = ln("m")
  , Zp = ln("bu")
  , Jp = ln("u")
  , Qu = ln("bum")
  , rt = ln("um")
  , Qp = ln("sp")
  , e1 = ln("rtg")
  , t1 = ln("rtc");
function n1(e, t=Ze) {
    Ao("ec", e, t)
}
const ec = "components";
function oe(e, t) {
    return nc(ec, e, !0, t) || e
}
const tc = Symbol.for("v-ndc");
function r1(e) {
    return He(e) ? nc(ec, e, !1) || e : e || tc
}
function nc(e, t, n=!0, r=!1) {
    const i = et || Ze;
    if (i) {
        const o = i.type;
        {
            const s = Sc(o, !1);
            if (s && (s === t || s === Dt(t) || s === xo(Dt(t))))
                return o
        }
        const a = _l(i[e] || o[e], t) || _l(i.appContext[e], t);
        return !a && r ? o : a
    }
}
function _l(e, t) {
    return e && (e[t] || e[Dt(t)] || e[xo(Dt(t))])
}
function yn(e, t, n, r) {
    let i;
    const o = n
      , a = le(e);
    if (a || He(e)) {
        const s = a && ir(e);
        let l = !1;
        s && (l = !At(e),
        e = So(e)),
        i = new Array(e.length);
        for (let d = 0, u = e.length; d < u; d++)
            i[d] = t(l ? lt(e[d]) : e[d], d, void 0, o)
    } else if (typeof e == "number") {
        i = new Array(e);
        for (let s = 0; s < e; s++)
            i[s] = t(s + 1, s, void 0, o)
    } else if (Fe(e))
        if (e[Symbol.iterator])
            i = Array.from(e, ( (s, l) => t(s, l, void 0, o)));
        else {
            const s = Object.keys(e);
            i = new Array(s.length);
            for (let l = 0, d = s.length; l < d; l++) {
                const u = s[l];
                i[l] = t(e[u], u, l, o)
            }
        }
    else
        i = [];
    return i
}
function Qr(e, t, n={}, r, i) {
    if (et.ce || et.parent && ar(et.parent) && et.parent.ce)
        return t !== "default" && (n.name = t),
        S(),
        ke(U, null, [H("slot", n, r && r())], 64);
    let o = e[t];
    o && o._c && (o._d = !1),
    S();
    const a = o && rc(o(n))
      , s = n.key || a && a.key
      , l = ke(U, {
        key: (s && !Lt(s) ? s : `_${t}`) + (!a && r ? "_fb" : "")
    }, a || (r ? r() : []), a && e._ === 1 ? 64 : -2);
    return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    l
}
function rc(e) {
    return e.some((t => ti(t) ? !(t.type === bt || t.type === U && !rc(t.children)) : !0)) ? e : null
}
const Ma = e => e ? kc(e) ? $o(e) : Ma(e.parent) : null
  , Ur = nt(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ma(e.parent),
    $root: e => Ma(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => oc(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Ts(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = tn.bind(e.proxy)),
    $watch: e => S1.bind(e)
})
  , aa = (e, t) => e !== Le && !e.__isScriptSetup && Ae(e, t)
  , i1 = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: i, props: o, accessCache: a, type: s, appContext: l} = e;
        let d;
        if (t[0] !== "$") {
            const m = a[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
                }
            else {
                if (aa(r, t))
                    return a[t] = 1,
                    r[t];
                if (i !== Le && Ae(i, t))
                    return a[t] = 2,
                    i[t];
                if ((d = e.propsOptions[0]) && Ae(d, t))
                    return a[t] = 3,
                    o[t];
                if (n !== Le && Ae(n, t))
                    return a[t] = 4,
                    n[t];
                La && (a[t] = 0)
            }
        }
        const u = Ur[t];
        let c, f;
        if (u)
            return t === "$attrs" && st(e.attrs, "get", ""),
            u(e);
        if ((c = s.__cssModules) && (c = c[t]))
            return c;
        if (n !== Le && Ae(n, t))
            return a[t] = 4,
            n[t];
        if (f = l.config.globalProperties,
        Ae(f, t))
            return f[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: i, ctx: o} = e;
        return aa(i, t) ? (i[t] = n,
        !0) : r !== Le && Ae(r, t) ? (r[t] = n,
        !0) : Ae(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (o[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: o}}, a) {
        let s;
        return !!n[a] || e !== Le && Ae(e, a) || aa(t, a) || (s = o[0]) && Ae(s, a) || Ae(r, a) || Ae(Ur, a) || Ae(i.config.globalProperties, a)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Ae(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Sl(e) {
    return le(e) ? e.reduce(( (t, n) => (t[n] = null,
    t)), {}) : e
}
let La = !0;
function o1(e) {
    const t = oc(e)
      , n = e.proxy
      , r = e.ctx;
    La = !1,
    t.beforeCreate && El(t.beforeCreate, e, "bc");
    const {data: i, computed: o, methods: a, watch: s, provide: l, inject: d, created: u, beforeMount: c, mounted: f, beforeUpdate: m, updated: b, activated: p, deactivated: y, beforeDestroy: v, beforeUnmount: w, destroyed: g, unmounted: k, render: O, renderTracked: D, renderTriggered: R, errorCaptured: G, serverPrefetch: L, expose: Z, inheritAttrs: q, components: $, directives: re, filters: he} = t;
    if (d && a1(d, r, null),
    a)
        for (const K in a) {
            const ue = a[K];
            me(ue) && (r[K] = ue.bind(n))
        }
    if (i) {
        const K = i.call(n, n);
        Fe(K) && (e.data = vr(K))
    }
    if (La = !0,
    o)
        for (const K in o) {
            const ue = o[K]
              , ze = me(ue) ? ue.bind(n, n) : me(ue.get) ? ue.get.bind(n, n) : $t
              , Je = !me(ue) && me(ue.set) ? ue.set.bind(n) : $t
              , ie = P({
                get: ze,
                set: Je
            });
            Object.defineProperty(r, K, {
                enumerable: !0,
                configurable: !0,
                get: () => ie.value,
                set: pe => ie.value = pe
            })
        }
    if (s)
        for (const K in s)
            ic(s[K], r, n, K);
    if (l) {
        const K = me(l) ? l.call(n) : l;
        Reflect.ownKeys(K).forEach((ue => {
            at(ue, K[ue])
        }
        ))
    }
    u && El(u, e, "c");
    function ge(K, ue) {
        le(ue) ? ue.forEach((ze => K(ze.bind(n)))) : ue && K(ue.bind(n))
    }
    if (ge(Xp, c),
    ge(Ue, f),
    ge(Zp, m),
    ge(Jp, b),
    ge(Gp, p),
    ge(Kp, y),
    ge(n1, G),
    ge(t1, D),
    ge(e1, R),
    ge(Qu, w),
    ge(rt, k),
    ge(Qp, L),
    le(Z))
        if (Z.length) {
            const K = e.exposed || (e.exposed = {});
            Z.forEach((ue => {
                Object.defineProperty(K, ue, {
                    get: () => n[ue],
                    set: ze => n[ue] = ze
                })
            }
            ))
        } else
            e.exposed || (e.exposed = {});
    O && e.render === $t && (e.render = O),
    q != null && (e.inheritAttrs = q),
    $ && (e.components = $),
    re && (e.directives = re),
    L && Zu(e)
}
function a1(e, t, n=$t) {
    le(e) && (e = Fa(e));
    for (const r in e) {
        const i = e[r];
        let o;
        Fe(i) ? "default"in i ? o = Be(i.from || r, i.default, !0) : o = Be(i.from || r) : o = Be(i),
        tt(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : t[r] = o
    }
}
function El(e, t, n) {
    Ft(le(e) ? e.map((r => r.bind(t.proxy))) : e.bind(t.proxy), t, n)
}
function ic(e, t, n, r) {
    let i = r.includes(".") ? vc(n, r) : () => n[r];
    if (He(e)) {
        const o = t[e];
        me(o) && dt(i, o)
    } else if (me(e))
        dt(i, e.bind(n));
    else if (Fe(e))
        if (le(e))
            e.forEach((o => ic(o, t, n, r)));
        else {
            const o = me(e.handler) ? e.handler.bind(n) : t[e.handler];
            me(o) && dt(i, o, e)
        }
}
function oc(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: i, optionsCache: o, config: {optionMergeStrategies: a}} = e.appContext
      , s = o.get(t);
    let l;
    return s ? l = s : !i.length && !n && !r ? l = t : (l = {},
    i.length && i.forEach((d => Qi(l, d, a, !0))),
    Qi(l, t, a)),
    Fe(t) && o.set(t, l),
    l
}
function Qi(e, t, n, r=!1) {
    const {mixins: i, extends: o} = t;
    o && Qi(e, o, n, !0),
    i && i.forEach((a => Qi(e, a, n, !0)));
    for (const a in t)
        if (!(r && a === "expose")) {
            const s = s1[a] || n && n[a];
            e[a] = s ? s(e[a], t[a]) : t[a]
        }
    return e
}
const s1 = {
    data: Cl,
    props: Tl,
    emits: Tl,
    methods: Dr,
    computed: Dr,
    beforeCreate: ft,
    created: ft,
    beforeMount: ft,
    mounted: ft,
    beforeUpdate: ft,
    updated: ft,
    beforeDestroy: ft,
    beforeUnmount: ft,
    destroyed: ft,
    unmounted: ft,
    activated: ft,
    deactivated: ft,
    errorCaptured: ft,
    serverPrefetch: ft,
    components: Dr,
    directives: Dr,
    watch: d1,
    provide: Cl,
    inject: l1
};
function Cl(e, t) {
    return t ? e ? function() {
        return nt(me(e) ? e.call(this, this) : e, me(t) ? t.call(this, this) : t)
    }
    : t : e
}
function l1(e, t) {
    return Dr(Fa(e), Fa(t))
}
function Fa(e) {
    if (le(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function ft(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function Dr(e, t) {
    return e ? nt(Object.create(null), e, t) : t
}
function Tl(e, t) {
    return e ? le(e) && le(t) ? [...new Set([...e, ...t])] : nt(Object.create(null), Sl(e), Sl(t ?? {})) : t
}
function d1(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = nt(Object.create(null), e);
    for (const r in t)
        n[r] = ft(e[r], t[r]);
    return n
}
function ac() {
    return {
        app: null,
        config: {
            isNativeTag: Bm,
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
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let u1 = 0;
function c1(e, t) {
    return function(r, i=null) {
        me(r) || (r = nt({}, r)),
        i != null && !Fe(i) && (i = null);
        const o = ac()
          , a = new WeakSet
          , s = [];
        let l = !1;
        const d = o.app = {
            _uid: u1++,
            _component: r,
            _props: i,
            _container: null,
            _context: o,
            _instance: null,
            version: q1,
            get config() {
                return o.config
            },
            set config(u) {},
            use(u, ...c) {
                return a.has(u) || (u && me(u.install) ? (a.add(u),
                u.install(d, ...c)) : me(u) && (a.add(u),
                u(d, ...c))),
                d
            },
            mixin(u) {
                return o.mixins.includes(u) || o.mixins.push(u),
                d
            },
            component(u, c) {
                return c ? (o.components[u] = c,
                d) : o.components[u]
            },
            directive(u, c) {
                return c ? (o.directives[u] = c,
                d) : o.directives[u]
            },
            mount(u, c, f) {
                if (!l) {
                    const m = d._ceVNode || H(r, i);
                    return m.appContext = o,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    e(m, u, f),
                    l = !0,
                    d._container = u,
                    u.__vue_app__ = d,
                    $o(m.component)
                }
            },
            onUnmount(u) {
                s.push(u)
            },
            unmount() {
                l && (Ft(s, d._instance, 16),
                e(null, d._container),
                delete d._container.__vue_app__)
            },
            provide(u, c) {
                return o.provides[u] = c,
                d
            },
            runWithContext(u) {
                const c = sr;
                sr = d;
                try {
                    return u()
                } finally {
                    sr = c
                }
            }
        };
        return d
    }
}
let sr = null;
function at(e, t) {
    if (Ze) {
        let n = Ze.provides;
        const r = Ze.parent && Ze.parent.provides;
        r === n && (n = Ze.provides = Object.create(r)),
        n[e] = t
    }
}
function Be(e, t, n=!1) {
    const r = Ze || et;
    if (r || sr) {
        const i = sr ? sr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && me(t) ? t.call(r && r.proxy) : t
    }
}
const sc = {}
  , lc = () => Object.create(sc)
  , dc = e => Object.getPrototypeOf(e) === sc;
function f1(e, t, n, r=!1) {
    const i = {}
      , o = lc();
    e.propsDefaults = Object.create(null),
    uc(e, t, i, o);
    for (const a in e.propsOptions[0])
        a in i || (i[a] = void 0);
    n ? e.props = r ? i : Sp(i) : e.type.props ? e.props = i : e.props = o,
    e.attrs = o
}
function m1(e, t, n, r) {
    const {props: i, attrs: o, vnode: {patchFlag: a}} = e
      , s = se(i)
      , [l] = e.propsOptions;
    let d = !1;
    if ((r || a > 0) && !(a & 16)) {
        if (a & 8) {
            const u = e.vnode.dynamicProps;
            for (let c = 0; c < u.length; c++) {
                let f = u[c];
                if (Do(e.emitsOptions, f))
                    continue;
                const m = t[f];
                if (l)
                    if (Ae(o, f))
                        m !== o[f] && (o[f] = m,
                        d = !0);
                    else {
                        const b = Dt(f);
                        i[b] = Na(l, s, b, m, e, !1)
                    }
                else
                    m !== o[f] && (o[f] = m,
                    d = !0)
            }
        }
    } else {
        uc(e, t, i, o) && (d = !0);
        let u;
        for (const c in s)
            (!t || !Ae(t, c) && ((u = Gn(c)) === c || !Ae(t, u))) && (l ? n && (n[c] !== void 0 || n[u] !== void 0) && (i[c] = Na(l, s, c, void 0, e, !0)) : delete i[c]);
        if (o !== s)
            for (const c in o)
                (!t || !Ae(t, c)) && (delete o[c],
                d = !0)
    }
    d && Zt(e.attrs, "set", "")
}
function uc(e, t, n, r) {
    const [i,o] = e.propsOptions;
    let a = !1, s;
    if (t)
        for (let l in t) {
            if (Ir(l))
                continue;
            const d = t[l];
            let u;
            i && Ae(i, u = Dt(l)) ? !o || !o.includes(u) ? n[u] = d : (s || (s = {}))[u] = d : Do(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d,
            a = !0)
        }
    if (o) {
        const l = se(n)
          , d = s || Le;
        for (let u = 0; u < o.length; u++) {
            const c = o[u];
            n[c] = Na(i, l, c, d[c], e, !Ae(d, c))
        }
    }
    return a
}
function Na(e, t, n, r, i, o) {
    const a = e[n];
    if (a != null) {
        const s = Ae(a, "default");
        if (s && r === void 0) {
            const l = a.default;
            if (a.type !== Function && !a.skipFactory && me(l)) {
                const {propsDefaults: d} = i;
                if (n in d)
                    r = d[n];
                else {
                    const u = fi(i);
                    r = d[n] = l.call(null, t),
                    u()
                }
            } else
                r = l;
            i.ce && i.ce._setProp(n, r)
        }
        a[0] && (o && !s ? r = !1 : a[1] && (r === "" || r === Gn(n)) && (r = !0))
    }
    return r
}
const p1 = new WeakMap;
function cc(e, t, n=!1) {
    const r = n ? p1 : t.propsCache
      , i = r.get(e);
    if (i)
        return i;
    const o = e.props
      , a = {}
      , s = [];
    let l = !1;
    if (!me(e)) {
        const u = c => {
            l = !0;
            const [f,m] = cc(c, t, !0);
            nt(a, f),
            m && s.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!o && !l)
        return Fe(e) && r.set(e, nr),
        nr;
    if (le(o))
        for (let u = 0; u < o.length; u++) {
            const c = Dt(o[u]);
            Ol(c) && (a[c] = Le)
        }
    else if (o)
        for (const u in o) {
            const c = Dt(u);
            if (Ol(c)) {
                const f = o[u]
                  , m = a[c] = le(f) || me(f) ? {
                    type: f
                } : nt({}, f)
                  , b = m.type;
                let p = !1
                  , y = !0;
                if (le(b))
                    for (let v = 0; v < b.length; ++v) {
                        const w = b[v]
                          , g = me(w) && w.name;
                        if (g === "Boolean") {
                            p = !0;
                            break
                        } else
                            g === "String" && (y = !1)
                    }
                else
                    p = me(b) && b.name === "Boolean";
                m[0] = p,
                m[1] = y,
                (p || Ae(m, "default")) && s.push(c)
            }
        }
    const d = [a, s];
    return Fe(e) && r.set(e, d),
    d
}
function Ol(e) {
    return e[0] !== "$" && !Ir(e)
}
const fc = e => e[0] === "_" || e === "$stable"
  , Os = e => le(e) ? e.map(Ht) : [Ht(e)]
  , h1 = (e, t, n) => {
    if (t._n)
        return t;
    const r = te(( (...i) => (pn.NODE_ENV !== "production" && Ze && (!n || (n.root,
    Ze.root)),
    Os(t(...i)))), n);
    return r._c = !1,
    r
}
  , mc = (e, t, n) => {
    const r = e._ctx;
    for (const i in e) {
        if (fc(i))
            continue;
        const o = e[i];
        if (me(o))
            t[i] = h1(i, o, r);
        else if (o != null) {
            const a = Os(o);
            t[i] = () => a
        }
    }
}
  , pc = (e, t) => {
    const n = Os(t);
    e.slots.default = () => n
}
  , hc = (e, t, n) => {
    for (const r in t)
        (n || r !== "_") && (e[r] = t[r])
}
  , b1 = (e, t, n) => {
    const r = e.slots = lc();
    if (e.vnode.shapeFlag & 32) {
        const i = t._;
        i ? (hc(r, t, n),
        n && fu(r, "_", i, !0)) : mc(t, r)
    } else
        t && pc(e, t)
}
  , v1 = (e, t, n) => {
    const {vnode: r, slots: i} = e;
    let o = !0
      , a = Le;
    if (r.shapeFlag & 32) {
        const s = t._;
        s ? n && s === 1 ? o = !1 : hc(i, t, n) : (o = !t.$stable,
        mc(t, i)),
        a = t
    } else
        t && (pc(e, t),
        a = {
            default: 1
        });
    if (o)
        for (const s in i)
            !fc(s) && a[s] == null && delete i[s]
}
  , mt = P1;
function g1(e) {
    return y1(e)
}
function y1(e, t) {
    const n = ko();
    n.__VUE__ = !0;
    const {insert: r, remove: i, patchProp: o, createElement: a, createText: s, createComment: l, setText: d, setElementText: u, parentNode: c, nextSibling: f, setScopeId: m=$t, insertStaticContent: b} = e
      , p = (h, x, C, I=null, M=null, F=null, Y=void 0, B=null, V=!!x.dynamicChildren) => {
        if (h === x)
            return;
        h && !In(h, x) && (I = be(h),
        pe(h, M, F, !0),
        h = null),
        x.patchFlag === -2 && (V = !1,
        x.dynamicChildren = null);
        const {type: z, ref: de, shapeFlag: X} = x;
        switch (z) {
        case Po:
            y(h, x, C, I);
            break;
        case bt:
            v(h, x, C, I);
            break;
        case la:
            h == null && w(x, C, I, Y);
            break;
        case U:
            $(h, x, C, I, M, F, Y, B, V);
            break;
        default:
            X & 1 ? O(h, x, C, I, M, F, Y, B, V) : X & 6 ? re(h, x, C, I, M, F, Y, B, V) : (X & 64 || X & 128) && z.process(h, x, C, I, M, F, Y, B, V, Ge)
        }
        de != null && M && Ji(de, h && h.ref, F, x || h, !x)
    }
      , y = (h, x, C, I) => {
        if (h == null)
            r(x.el = s(x.children), C, I);
        else {
            const M = x.el = h.el;
            x.children !== h.children && d(M, x.children)
        }
    }
      , v = (h, x, C, I) => {
        h == null ? r(x.el = l(x.children || ""), C, I) : x.el = h.el
    }
      , w = (h, x, C, I) => {
        [h.el,h.anchor] = b(h.children, x, C, I, h.el, h.anchor)
    }
      , g = ({el: h, anchor: x}, C, I) => {
        let M;
        for (; h && h !== x; )
            M = f(h),
            r(h, C, I),
            h = M;
        r(x, C, I)
    }
      , k = ({el: h, anchor: x}) => {
        let C;
        for (; h && h !== x; )
            C = f(h),
            i(h),
            h = C;
        i(x)
    }
      , O = (h, x, C, I, M, F, Y, B, V) => {
        x.type === "svg" ? Y = "svg" : x.type === "math" && (Y = "mathml"),
        h == null ? D(x, C, I, M, F, Y, B, V) : L(h, x, M, F, Y, B, V)
    }
      , D = (h, x, C, I, M, F, Y, B) => {
        let V, z;
        const {props: de, shapeFlag: X, transition: ae, dirs: fe} = h;
        if (V = h.el = a(h.type, F, de && de.is, de),
        X & 8 ? u(V, h.children) : X & 16 && G(h.children, V, null, I, M, sa(h, F), Y, B),
        fe && An(h, null, I, "created"),
        R(V, h, h.scopeId, Y, I),
        de) {
            for (const Ne in de)
                Ne !== "value" && !Ir(Ne) && o(V, Ne, null, de[Ne], F, I);
            "value"in de && o(V, "value", null, de.value, F),
            (z = de.onVnodeBeforeMount) && jt(z, I, h)
        }
        fe && An(h, null, I, "beforeMount");
        const xe = w1(M, ae);
        xe && ae.beforeEnter(V),
        r(V, x, C),
        ((z = de && de.onVnodeMounted) || xe || fe) && mt(( () => {
            z && jt(z, I, h),
            xe && ae.enter(V),
            fe && An(h, null, I, "mounted")
        }
        ), M)
    }
      , R = (h, x, C, I, M) => {
        if (C && m(h, C),
        I)
            for (let F = 0; F < I.length; F++)
                m(h, I[F]);
        if (M) {
            let F = M.subTree;
            if (x === F || yc(F.type) && (F.ssContent === x || F.ssFallback === x)) {
                const Y = M.vnode;
                R(h, Y, Y.scopeId, Y.slotScopeIds, M.parent)
            }
        }
    }
      , G = (h, x, C, I, M, F, Y, B, V=0) => {
        for (let z = V; z < h.length; z++) {
            const de = h[z] = B ? vn(h[z]) : Ht(h[z]);
            p(null, de, x, C, I, M, F, Y, B)
        }
    }
      , L = (h, x, C, I, M, F, Y) => {
        const B = x.el = h.el;
        let {patchFlag: V, dynamicChildren: z, dirs: de} = x;
        V |= h.patchFlag & 16;
        const X = h.props || Le
          , ae = x.props || Le;
        let fe;
        if (C && Dn(C, !1),
        (fe = ae.onVnodeBeforeUpdate) && jt(fe, C, x, h),
        de && An(x, h, C, "beforeUpdate"),
        C && Dn(C, !0),
        (X.innerHTML && ae.innerHTML == null || X.textContent && ae.textContent == null) && u(B, ""),
        z ? Z(h.dynamicChildren, z, B, C, I, sa(x, M), F) : Y || ue(h, x, B, null, C, I, sa(x, M), F, !1),
        V > 0) {
            if (V & 16)
                q(B, X, ae, C, M);
            else if (V & 2 && X.class !== ae.class && o(B, "class", null, ae.class, M),
            V & 4 && o(B, "style", X.style, ae.style, M),
            V & 8) {
                const xe = x.dynamicProps;
                for (let Ne = 0; Ne < xe.length; Ne++) {
                    const Me = xe[Ne]
                      , kt = X[Me]
                      , yt = ae[Me];
                    (yt !== kt || Me === "value") && o(B, Me, kt, yt, M, C)
                }
            }
            V & 1 && h.children !== x.children && u(B, x.children)
        } else
            !Y && z == null && q(B, X, ae, C, M);
        ((fe = ae.onVnodeUpdated) || de) && mt(( () => {
            fe && jt(fe, C, x, h),
            de && An(x, h, C, "updated")
        }
        ), I)
    }
      , Z = (h, x, C, I, M, F, Y) => {
        for (let B = 0; B < x.length; B++) {
            const V = h[B]
              , z = x[B]
              , de = V.el && (V.type === U || !In(V, z) || V.shapeFlag & 70) ? c(V.el) : C;
            p(V, z, de, null, I, M, F, Y, !0)
        }
    }
      , q = (h, x, C, I, M) => {
        if (x !== C) {
            if (x !== Le)
                for (const F in x)
                    !Ir(F) && !(F in C) && o(h, F, x[F], null, M, I);
            for (const F in C) {
                if (Ir(F))
                    continue;
                const Y = C[F]
                  , B = x[F];
                Y !== B && F !== "value" && o(h, F, B, Y, M, I)
            }
            "value"in C && o(h, "value", x.value, C.value, M)
        }
    }
      , $ = (h, x, C, I, M, F, Y, B, V) => {
        const z = x.el = h ? h.el : s("")
          , de = x.anchor = h ? h.anchor : s("");
        let {patchFlag: X, dynamicChildren: ae, slotScopeIds: fe} = x;
        fe && (B = B ? B.concat(fe) : fe),
        h == null ? (r(z, C, I),
        r(de, C, I),
        G(x.children || [], C, de, M, F, Y, B, V)) : X > 0 && X & 64 && ae && h.dynamicChildren ? (Z(h.dynamicChildren, ae, C, M, F, Y, B),
        (x.key != null || M && x === M.subTree) && As(h, x, !0)) : ue(h, x, C, de, M, F, Y, B, V)
    }
      , re = (h, x, C, I, M, F, Y, B, V) => {
        x.slotScopeIds = B,
        h == null ? x.shapeFlag & 512 ? M.ctx.activate(x, C, I, Y, V) : he(x, C, I, M, F, Y, V) : Te(h, x, V)
    }
      , he = (h, x, C, I, M, F, Y) => {
        const B = h.component = I1(h, I, M);
        if (Oo(h) && (B.ctx.renderer = Ge),
        z1(B, !1, Y),
        B.asyncDep) {
            if (M && M.registerDep(B, ge, Y),
            !h.el) {
                const V = B.subTree = H(bt);
                v(null, V, x, C)
            }
        } else
            ge(B, h, x, C, M, F, Y)
    }
      , Te = (h, x, C) => {
        const I = x.component = h.component;
        if (A1(h, x, C))
            if (I.asyncDep && !I.asyncResolved) {
                K(I, x, C);
                return
            } else
                I.next = x,
                I.update();
        else
            x.el = h.el,
            I.vnode = x
    }
      , ge = (h, x, C, I, M, F, Y) => {
        const B = () => {
            if (h.isMounted) {
                let {next: X, bu: ae, u: fe, parent: xe, vnode: Ne} = h;
                {
                    const zt = bc(h);
                    if (zt) {
                        X && (X.el = Ne.el,
                        K(h, X, Y)),
                        zt.asyncDep.then(( () => {
                            h.isUnmounted || B()
                        }
                        ));
                        return
                    }
                }
                let Me = X, kt;
                Dn(h, !1),
                X ? (X.el = Ne.el,
                K(h, X, Y)) : X = Ne,
                ae && ji(ae),
                (kt = X.props && X.props.onVnodeBeforeUpdate) && jt(kt, xe, X, Ne),
                Dn(h, !0);
                const yt = Dl(h)
                  , It = h.subTree;
                h.subTree = yt,
                p(It, yt, c(It.el), be(It), h, M, F),
                X.el = yt.el,
                Me === null && D1(h, yt.el),
                fe && mt(fe, M),
                (kt = X.props && X.props.onVnodeUpdated) && mt(( () => jt(kt, xe, X, Ne)), M)
            } else {
                let X;
                const {el: ae, props: fe} = x
                  , {bm: xe, m: Ne, parent: Me, root: kt, type: yt} = h
                  , It = ar(x);
                Dn(h, !1),
                xe && ji(xe),
                !It && (X = fe && fe.onVnodeBeforeMount) && jt(X, Me, x),
                Dn(h, !0);
                {
                    kt.ce && kt.ce._injectChildStyle(yt);
                    const zt = h.subTree = Dl(h);
                    p(null, zt, C, I, h, M, F),
                    x.el = zt.el
                }
                if (Ne && mt(Ne, M),
                !It && (X = fe && fe.onVnodeMounted)) {
                    const zt = x;
                    mt(( () => jt(X, Me, zt)), M)
                }
                (x.shapeFlag & 256 || Me && ar(Me.vnode) && Me.vnode.shapeFlag & 256) && h.a && mt(h.a, M),
                h.isMounted = !0,
                x = C = I = null
            }
        }
        ;
        h.scope.on();
        const V = h.effect = new vu(B);
        h.scope.off();
        const z = h.update = V.run.bind(V)
          , de = h.job = V.runIfDirty.bind(V);
        de.i = h,
        de.id = h.uid,
        V.scheduler = () => Ts(de),
        Dn(h, !0),
        z()
    }
      , K = (h, x, C) => {
        x.component = h;
        const I = h.vnode.props;
        h.vnode = x,
        h.next = null,
        m1(h, x.props, I, C),
        v1(h, x.children, C),
        an(),
        gl(h),
        sn()
    }
      , ue = (h, x, C, I, M, F, Y, B, V=!1) => {
        const z = h && h.children
          , de = h ? h.shapeFlag : 0
          , X = x.children
          , {patchFlag: ae, shapeFlag: fe} = x;
        if (ae > 0) {
            if (ae & 128) {
                Je(z, X, C, I, M, F, Y, B, V);
                return
            } else if (ae & 256) {
                ze(z, X, C, I, M, F, Y, B, V);
                return
            }
        }
        fe & 8 ? (de & 16 && J(z, M, F),
        X !== z && u(C, X)) : de & 16 ? fe & 16 ? Je(z, X, C, I, M, F, Y, B, V) : J(z, M, F, !0) : (de & 8 && u(C, ""),
        fe & 16 && G(X, C, I, M, F, Y, B, V))
    }
      , ze = (h, x, C, I, M, F, Y, B, V) => {
        h = h || nr,
        x = x || nr;
        const z = h.length
          , de = x.length
          , X = Math.min(z, de);
        let ae;
        for (ae = 0; ae < X; ae++) {
            const fe = x[ae] = V ? vn(x[ae]) : Ht(x[ae]);
            p(h[ae], fe, C, null, M, F, Y, B, V)
        }
        z > de ? J(h, M, F, !0, !1, X) : G(x, C, I, M, F, Y, B, V, X)
    }
      , Je = (h, x, C, I, M, F, Y, B, V) => {
        let z = 0;
        const de = x.length;
        let X = h.length - 1
          , ae = de - 1;
        for (; z <= X && z <= ae; ) {
            const fe = h[z]
              , xe = x[z] = V ? vn(x[z]) : Ht(x[z]);
            if (In(fe, xe))
                p(fe, xe, C, null, M, F, Y, B, V);
            else
                break;
            z++
        }
        for (; z <= X && z <= ae; ) {
            const fe = h[X]
              , xe = x[ae] = V ? vn(x[ae]) : Ht(x[ae]);
            if (In(fe, xe))
                p(fe, xe, C, null, M, F, Y, B, V);
            else
                break;
            X--,
            ae--
        }
        if (z > X) {
            if (z <= ae) {
                const fe = ae + 1
                  , xe = fe < de ? x[fe].el : I;
                for (; z <= ae; )
                    p(null, x[z] = V ? vn(x[z]) : Ht(x[z]), C, xe, M, F, Y, B, V),
                    z++
            }
        } else if (z > ae)
            for (; z <= X; )
                pe(h[z], M, F, !0),
                z++;
        else {
            const fe = z
              , xe = z
              , Ne = new Map;
            for (z = xe; z <= ae; z++) {
                const _t = x[z] = V ? vn(x[z]) : Ht(x[z]);
                _t.key != null && Ne.set(_t.key, z)
            }
            let Me, kt = 0;
            const yt = ae - xe + 1;
            let It = !1
              , zt = 0;
            const Sr = new Array(yt);
            for (z = 0; z < yt; z++)
                Sr[z] = 0;
            for (z = fe; z <= X; z++) {
                const _t = h[z];
                if (kt >= yt) {
                    pe(_t, M, F, !0);
                    continue
                }
                let Rt;
                if (_t.key != null)
                    Rt = Ne.get(_t.key);
                else
                    for (Me = xe; Me <= ae; Me++)
                        if (Sr[Me - xe] === 0 && In(_t, x[Me])) {
                            Rt = Me;
                            break
                        }
                Rt === void 0 ? pe(_t, M, F, !0) : (Sr[Rt - xe] = z + 1,
                Rt >= zt ? zt = Rt : It = !0,
                p(_t, x[Rt], C, null, M, F, Y, B, V),
                kt++)
            }
            const fl = It ? x1(Sr) : nr;
            for (Me = fl.length - 1,
            z = yt - 1; z >= 0; z--) {
                const _t = xe + z
                  , Rt = x[_t]
                  , ml = _t + 1 < de ? x[_t + 1].el : I;
                Sr[z] === 0 ? p(null, Rt, C, ml, M, F, Y, B, V) : It && (Me < 0 || z !== fl[Me] ? ie(Rt, C, ml, 2) : Me--)
            }
        }
    }
      , ie = (h, x, C, I, M=null) => {
        const {el: F, type: Y, transition: B, children: V, shapeFlag: z} = h;
        if (z & 6) {
            ie(h.component.subTree, x, C, I);
            return
        }
        if (z & 128) {
            h.suspense.move(x, C, I);
            return
        }
        if (z & 64) {
            Y.move(h, x, C, Ge);
            return
        }
        if (Y === U) {
            r(F, x, C);
            for (let X = 0; X < V.length; X++)
                ie(V[X], x, C, I);
            r(h.anchor, x, C);
            return
        }
        if (Y === la) {
            g(h, x, C);
            return
        }
        if (I !== 2 && z & 1 && B)
            if (I === 0)
                B.beforeEnter(F),
                r(F, x, C),
                mt(( () => B.enter(F)), M);
            else {
                const {leave: X, delayLeave: ae, afterLeave: fe} = B
                  , xe = () => r(F, x, C)
                  , Ne = () => {
                    X(F, ( () => {
                        xe(),
                        fe && fe()
                    }
                    ))
                }
                ;
                ae ? ae(F, xe, Ne) : Ne()
            }
        else
            r(F, x, C)
    }
      , pe = (h, x, C, I=!1, M=!1) => {
        const {type: F, props: Y, ref: B, children: V, dynamicChildren: z, shapeFlag: de, patchFlag: X, dirs: ae, cacheIndex: fe} = h;
        if (X === -2 && (M = !1),
        B != null && Ji(B, null, C, h, !0),
        fe != null && (x.renderCache[fe] = void 0),
        de & 256) {
            x.ctx.deactivate(h);
            return
        }
        const xe = de & 1 && ae
          , Ne = !ar(h);
        let Me;
        if (Ne && (Me = Y && Y.onVnodeBeforeUnmount) && jt(Me, x, h),
        de & 6)
            it(h.component, C, I);
        else {
            if (de & 128) {
                h.suspense.unmount(C, I);
                return
            }
            xe && An(h, null, x, "beforeUnmount"),
            de & 64 ? h.type.remove(h, x, C, Ge, I) : z && !z.hasOnce && (F !== U || X > 0 && X & 64) ? J(z, x, C, !1, !0) : (F === U && X & 384 || !M && de & 16) && J(V, x, C),
            I && qe(h)
        }
        (Ne && (Me = Y && Y.onVnodeUnmounted) || xe) && mt(( () => {
            Me && jt(Me, x, h),
            xe && An(h, null, x, "unmounted")
        }
        ), C)
    }
      , qe = h => {
        const {type: x, el: C, anchor: I, transition: M} = h;
        if (x === U) {
            Oe(C, I);
            return
        }
        if (x === la) {
            k(h);
            return
        }
        const F = () => {
            i(C),
            M && !M.persisted && M.afterLeave && M.afterLeave()
        }
        ;
        if (h.shapeFlag & 1 && M && !M.persisted) {
            const {leave: Y, delayLeave: B} = M
              , V = () => Y(C, F);
            B ? B(h.el, F, V) : V()
        } else
            F()
    }
      , Oe = (h, x) => {
        let C;
        for (; h !== x; )
            C = f(h),
            i(h),
            h = C;
        i(x)
    }
      , it = (h, x, C) => {
        const {bum: I, scope: M, job: F, subTree: Y, um: B, m: V, a: z} = h;
        Al(V),
        Al(z),
        I && ji(I),
        M.stop(),
        F && (F.flags |= 8,
        pe(Y, h, x, C)),
        B && mt(B, x),
        mt(( () => {
            h.isUnmounted = !0
        }
        ), x),
        x && x.pendingBranch && !x.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === x.pendingId && (x.deps--,
        x.deps === 0 && x.resolve())
    }
      , J = (h, x, C, I=!1, M=!1, F=0) => {
        for (let Y = F; Y < h.length; Y++)
            pe(h[Y], x, C, I, M)
    }
      , be = h => {
        if (h.shapeFlag & 6)
            return be(h.component.subTree);
        if (h.shapeFlag & 128)
            return h.suspense.next();
        const x = f(h.anchor || h.el)
          , C = x && x[Uu];
        return C ? f(C) : x
    }
    ;
    let E = !1;
    const _e = (h, x, C) => {
        h == null ? x._vnode && pe(x._vnode, null, null, !0) : p(x._vnode || null, h, x, null, null, null, C),
        x._vnode = h,
        E || (E = !0,
        gl(),
        Ru(),
        E = !1)
    }
      , Ge = {
        p: p,
        um: pe,
        m: ie,
        r: qe,
        mt: he,
        mc: G,
        pc: ue,
        pbc: Z,
        n: be,
        o: e
    };
    return {
        render: _e,
        hydrate: void 0,
        createApp: c1(_e)
    }
}
function sa({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Dn({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function w1(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function As(e, t, n=!1) {
    const r = e.children
      , i = t.children;
    if (le(r) && le(i))
        for (let o = 0; o < r.length; o++) {
            const a = r[o];
            let s = i[o];
            s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[o] = vn(i[o]),
            s.el = a.el),
            !n && s.patchFlag !== -2 && As(a, s)),
            s.type === Po && (s.el = a.el)
        }
}
function x1(e) {
    const t = e.slice()
      , n = [0];
    let r, i, o, a, s;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const d = e[r];
        if (d !== 0) {
            if (i = n[n.length - 1],
            e[i] < d) {
                t[r] = i,
                n.push(r);
                continue
            }
            for (o = 0,
            a = n.length - 1; o < a; )
                s = o + a >> 1,
                e[n[s]] < d ? o = s + 1 : a = s;
            d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]),
            n[o] = r)
        }
    }
    for (o = n.length,
    a = n[o - 1]; o-- > 0; )
        n[o] = a,
        a = t[a];
    return n
}
function bc(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : bc(t)
}
function Al(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const k1 = Symbol.for("v-scx")
  , _1 = () => Be(k1);
function vt(e, t) {
    return Ds(e, null, t)
}
function dt(e, t, n) {
    return Ds(e, t, n)
}
function Ds(e, t, n=Le) {
    const {immediate: r, deep: i, flush: o, once: a} = n
      , s = nt({}, n)
      , l = t && r || !t && o !== "post";
    let d;
    if (ni) {
        if (o === "sync") {
            const m = _1();
            d = m.__watcherHandles || (m.__watcherHandles = [])
        } else if (!l) {
            const m = () => {}
            ;
            return m.stop = $t,
            m.resume = $t,
            m.pause = $t,
            m
        }
    }
    const u = Ze;
    s.call = (m, b, p) => Ft(m, u, b, p);
    let c = !1;
    o === "post" ? s.scheduler = m => {
        mt(m, u && u.suspense)
    }
    : o !== "sync" && (c = !0,
    s.scheduler = (m, b) => {
        b ? m() : Ts(m)
    }
    ),
    s.augmentJob = m => {
        t && (m.flags |= 4),
        c && (m.flags |= 2,
        u && (m.id = u.uid,
        m.i = u))
    }
    ;
    const f = Pp(e, t, s);
    return ni && (d ? d.push(f) : l && f()),
    f
}
function S1(e, t, n) {
    const r = this.proxy
      , i = He(e) ? e.includes(".") ? vc(r, e) : () => r[e] : e.bind(r, r);
    let o;
    me(t) ? o = t : (o = t.handler,
    n = t);
    const a = fi(this)
      , s = Ds(i, o.bind(r), n);
    return a(),
    s
}
function vc(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let i = 0; i < n.length && r; i++)
            r = r[n[i]];
        return r
    }
}
const E1 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${Gn(t)}Modifiers`];
function C1(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Le;
    let i = n;
    const o = t.startsWith("update:")
      , a = o && E1(r, t.slice(7));
    a && (a.trim && (i = n.map((u => He(u) ? u.trim() : u))),
    a.number && (i = n.map(Km)));
    let s, l = r[s = Qo(t)] || r[s = Qo(Dt(t))];
    !l && o && (l = r[s = Qo(Gn(t))]),
    l && Ft(l, e, 6, i);
    const d = r[s + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[s])
            return;
        e.emitted[s] = !0,
        Ft(d, e, 6, i)
    }
}
function gc(e, t, n=!1) {
    const r = t.emitsCache
      , i = r.get(e);
    if (i !== void 0)
        return i;
    const o = e.emits;
    let a = {}
      , s = !1;
    if (!me(e)) {
        const l = d => {
            const u = gc(d, t, !0);
            u && (s = !0,
            nt(a, u))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !o && !s ? (Fe(e) && r.set(e, null),
    null) : (le(o) ? o.forEach((l => a[l] = null)) : nt(a, o),
    Fe(e) && r.set(e, a),
    a)
}
function Do(e, t) {
    return !e || !go(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Ae(e, t[0].toLowerCase() + t.slice(1)) || Ae(e, Gn(t)) || Ae(e, t))
}
function Dl(e) {
    const {type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [o], slots: a, attrs: s, emit: l, render: d, renderCache: u, props: c, data: f, setupState: m, ctx: b, inheritAttrs: p} = e
      , y = Zi(e);
    let v, w;
    try {
        if (n.shapeFlag & 4) {
            const k = i || r
              , O = pn.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(k,{
                get(D, R, G) {
                    return $p(`Property '${String(R)}' was accessed via 'this'. Avoid using 'this' in templates.`),
                    Reflect.get(D, R, G)
                }
            }) : k;
            v = Ht(d.call(O, k, u, pn.NODE_ENV !== "production" ? _i(c) : c, m, f, b)),
            w = s
        } else {
            const k = t;
            pn.NODE_ENV,
            v = Ht(k.length > 1 ? k(pn.NODE_ENV !== "production" ? _i(c) : c, pn.NODE_ENV !== "production" ? {
                get attrs() {
                    return _i(s)
                },
                slots: a,
                emit: l
            } : {
                attrs: s,
                slots: a,
                emit: l
            }) : k(pn.NODE_ENV !== "production" ? _i(c) : c, null)),
            w = t.props ? s : T1(s)
        }
    } catch (k) {
        Br.length = 0,
        To(k, e, 1),
        v = H(bt)
    }
    let g = v;
    if (w && p !== !1) {
        const k = Object.keys(w)
          , {shapeFlag: O} = g;
        k.length && O & 7 && (o && k.some(ys) && (w = O1(w, o)),
        g = nn(g, w, !1, !0))
    }
    return n.dirs && (g = nn(g, null, !1, !0),
    g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs),
    n.transition && Jr(g, n.transition),
    v = g,
    Zi(y),
    v
}
const T1 = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || go(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , O1 = (e, t) => {
    const n = {};
    for (const r in e)
        (!ys(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function A1(e, t, n) {
    const {props: r, children: i, component: o} = e
      , {props: a, children: s, patchFlag: l} = t
      , d = o.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? Pl(r, a, d) : !!a;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let c = 0; c < u.length; c++) {
                const f = u[c];
                if (a[f] !== r[f] && !Do(d, f))
                    return !0
            }
        }
    } else
        return (i || s) && (!s || !s.$stable) ? !0 : r === a ? !1 : r ? a ? Pl(r, a, d) : !0 : !!a;
    return !1
}
function Pl(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < r.length; i++) {
        const o = r[i];
        if (t[o] !== e[o] && !Do(n, o))
            return !0
    }
    return !1
}
function D1({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const yc = e => e.__isSuspense;
function P1(e, t) {
    t && t.pendingBranch ? le(e) ? t.effects.push(...e) : t.effects.push(e) : Rp(e)
}
const U = Symbol.for("v-fgt")
  , Po = Symbol.for("v-txt")
  , bt = Symbol.for("v-cmt")
  , la = Symbol.for("v-stc")
  , Br = [];
let Et = null;
function S(e=!1) {
    Br.push(Et = e ? null : [])
}
function $1() {
    Br.pop(),
    Et = Br[Br.length - 1] || null
}
let ei = 1;
function $l(e, t=!1) {
    ei += e,
    e < 0 && Et && t && (Et.hasOnce = !0)
}
function wc(e) {
    return e.dynamicChildren = ei > 0 ? Et || nr : null,
    $1(),
    ei > 0 && Et && Et.push(e),
    e
}
function T(e, t, n, r, i, o) {
    return wc(_(e, t, n, r, i, o, !0))
}
function ke(e, t, n, r, i) {
    return wc(H(e, t, n, r, i, !0))
}
function ti(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function In(e, t) {
    return e.type === t.type && e.key === t.key
}
const xc = ({key: e}) => e ?? null
  , Ui = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? He(e) || tt(e) || me(e) ? {
    i: et,
    r: e,
    k: t,
    f: !!n
} : e : null);
function _(e, t=null, n=null, r=0, i=null, o=(e === U ? 0 : 1), a=!1, s=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && xc(t),
        ref: t && Ui(t),
        scopeId: Vu,
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
        patchFlag: r,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: et
    };
    return s ? (Ps(l, n),
    o & 128 && e.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16),
    ei > 0 && !a && Et && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Et.push(l),
    l
}
const H = M1;
function M1(e, t=null, n=null, r=0, i=null, o=!1) {
    if ((!e || e === tc) && (e = bt),
    ti(e)) {
        const s = nn(e, t, !0);
        return n && Ps(s, n),
        ei > 0 && !o && Et && (s.shapeFlag & 6 ? Et[Et.indexOf(e)] = s : Et.push(s)),
        s.patchFlag = -2,
        s
    }
    if (H1(e) && (e = e.__vccOpts),
    t) {
        t = L1(t);
        let {class: s, style: l} = t;
        s && !He(s) && (t.class = ye(s)),
        Fe(l) && (Cs(l) && !le(l) && (l = nt({}, l)),
        t.style = ci(l))
    }
    const a = He(e) ? 1 : yc(e) ? 128 : Bu(e) ? 64 : Fe(e) ? 4 : me(e) ? 2 : 0;
    return _(e, t, n, r, i, a, o, !0)
}
function L1(e) {
    return e ? Cs(e) || dc(e) ? nt({}, e) : e : null
}
function nn(e, t, n=!1, r=!1) {
    const {props: i, ref: o, patchFlag: a, children: s, transition: l} = e
      , d = t ? lr(i || {}, t) : i
      , u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: d,
        key: d && xc(d),
        ref: t && t.ref ? n && o ? le(o) ? o.concat(Ui(t)) : [o, Ui(t)] : Ui(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== U ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && nn(e.ssContent),
        ssFallback: e.ssFallback && nn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Jr(u, l.clone(u)),
    u
}
function ee(e=" ", t=0) {
    return H(Po, null, e, t)
}
function Q(e="", t=!1) {
    return t ? (S(),
    ke(bt, null, e)) : H(bt, null, e)
}
function Ht(e) {
    return e == null || typeof e == "boolean" ? H(bt) : le(e) ? H(U, null, e.slice()) : ti(e) ? vn(e) : H(Po, null, String(e))
}
function vn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : nn(e)
}
function Ps(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (le(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            Ps(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !dc(t) ? t._ctx = et : i === 3 && et && (et.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        me(t) ? (t = {
            default: t,
            _ctx: et
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [ee(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function lr(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const i in r)
            if (i === "class")
                t.class !== r.class && (t.class = ye([t.class, r.class]));
            else if (i === "style")
                t.style = ci([t.style, r.style]);
            else if (go(i)) {
                const o = t[i]
                  , a = r[i];
                a && o !== a && !(le(o) && o.includes(a)) && (t[i] = o ? [].concat(o, a) : a)
            } else
                i !== "" && (t[i] = r[i])
    }
    return t
}
function jt(e, t, n, r=null) {
    Ft(e, t, 7, [n, r])
}
const F1 = ac();
let N1 = 0;
function I1(e, t, n) {
    const r = e.type
      , i = (t ? t.appContext : e.appContext) || F1
      , o = {
        uid: N1++,
        vnode: e,
        type: r,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new ip(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: cc(r, i),
        emitsOptions: gc(r, i),
        emit: null,
        emitted: null,
        propsDefaults: Le,
        inheritAttrs: r.inheritAttrs,
        ctx: Le,
        data: Le,
        props: Le,
        attrs: Le,
        slots: Le,
        refs: Le,
        setupState: Le,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
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
    return o.ctx = {
        _: o
    },
    o.root = t ? t.root : o,
    o.emit = C1.bind(null, o),
    e.ce && e.ce(o),
    o
}
let Ze = null;
const $s = () => Ze || et;
let eo, Ia;
{
    const e = ko()
      , t = (n, r) => {
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(r),
        o => {
            i.length > 1 ? i.forEach((a => a(o))) : i[0](o)
        }
    }
    ;
    eo = t("__VUE_INSTANCE_SETTERS__", (n => Ze = n)),
    Ia = t("__VUE_SSR_SETTERS__", (n => ni = n))
}
const fi = e => {
    const t = Ze;
    return eo(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        eo(t)
    }
}
  , Ml = () => {
    Ze && Ze.scope.off(),
    eo(null)
}
;
function kc(e) {
    return e.vnode.shapeFlag & 4
}
let ni = !1;
function z1(e, t=!1, n=!1) {
    t && Ia(t);
    const {props: r, children: i} = e.vnode
      , o = kc(e);
    f1(e, r, o, t),
    b1(e, i, n);
    const a = o ? R1(e, t) : void 0;
    return t && Ia(!1),
    a
}
function R1(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,i1);
    const {setup: r} = n;
    if (r) {
        an();
        const i = e.setupContext = r.length > 1 ? V1(e) : null
          , o = fi(e)
          , a = gr(r, e, 0, [e.props, i])
          , s = du(a);
        if (sn(),
        o(),
        (s || e.sp) && !ar(e) && Zu(e),
        s) {
            if (a.then(Ml, Ml),
            t)
                return a.then((l => {
                    Ll(e, l)
                }
                )).catch((l => {
                    To(l, e, 0)
                }
                ));
            e.asyncDep = a
        } else
            Ll(e, a)
    } else
        _c(e)
}
function Ll(e, t, n) {
    me(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Fe(t) && (e.setupState = Fu(t)),
    _c(e)
}
function _c(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || $t);
    {
        const i = fi(e);
        an();
        try {
            o1(e)
        } finally {
            sn(),
            i()
        }
    }
}
const j1 = {
    get(e, t) {
        return st(e, "get", ""),
        e[t]
    }
};
function V1(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,j1),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function $o(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fu(Ep(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in Ur)
                return Ur[n](e)
        },
        has(t, n) {
            return n in t || n in Ur
        }
    })) : e.proxy
}
const U1 = /(?:^|[-_])(\w)/g
  , B1 = e => e.replace(U1, (t => t.toUpperCase())).replace(/[-_]/g, "");
function Sc(e, t=!0) {
    return me(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Ec(e, t, n=!1) {
    let r = Sc(t);
    if (!r && t.__file) {
        const i = t.__file.match(/([^/\\]+)\.\w+$/);
        i && (r = i[1])
    }
    if (!r && e && e.parent) {
        const i = o => {
            for (const a in o)
                if (o[a] === t)
                    return a
        }
        ;
        r = i(e.components || e.parent.type.components) || i(e.appContext.components)
    }
    return r ? B1(r) : n ? "App" : "Anonymous"
}
function H1(e) {
    return me(e) && "__vccOpts"in e
}
const P = (e, t) => Ap(e, t, ni);
function je(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Fe(t) && !le(t) ? ti(t) ? H(e, null, [t]) : H(e, t) : H(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ti(n) && (n = [n]),
    H(e, t, n))
}
const q1 = "3.5.13";
let za;
const Fl = typeof window < "u" && window.trustedTypes;
if (Fl)
    try {
        za = Fl.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Cc = za ? e => za.createHTML(e) : e => e
  , W1 = "http://www.w3.org/2000/svg"
  , G1 = "http://www.w3.org/1998/Math/MathML"
  , Xt = typeof document < "u" ? document : null
  , Nl = Xt && Xt.createElement("template")
  , K1 = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const i = t === "svg" ? Xt.createElementNS(W1, e) : t === "mathml" ? Xt.createElementNS(G1, e) : n ? Xt.createElement(e, {
            is: n
        }) : Xt.createElement(e);
        return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple),
        i
    }
    ,
    createText: e => Xt.createTextNode(e),
    createComment: e => Xt.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Xt.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, i, o) {
        const a = n ? n.previousSibling : t.lastChild;
        if (i && (i === o || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling)); )
                ;
        else {
            Nl.innerHTML = Cc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const s = Nl.content;
            if (r === "svg" || r === "mathml") {
                const l = s.firstChild;
                for (; l.firstChild; )
                    s.appendChild(l.firstChild);
                s.removeChild(l)
            }
            t.insertBefore(s, n)
        }
        return [a ? a.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , un = "transition"
  , Cr = "animation"
  , ri = Symbol("_vtc")
  , Tc = {
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
}
  , Y1 = nt({}, Wu, Tc)
  , X1 = e => (e.displayName = "Transition",
e.props = Y1,
e)
  , dr = X1(( (e, {slots: t}) => je(qp, Z1(e), t)))
  , Pn = (e, t=[]) => {
    le(e) ? e.forEach((n => n(...t))) : e && e(...t)
}
  , Il = e => e ? le(e) ? e.some((t => t.length > 1)) : e.length > 1 : !1;
function Z1(e) {
    const t = {};
    for (const $ in e)
        $ in Tc || (t[$] = e[$]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: i, enterFromClass: o=`${n}-enter-from`, enterActiveClass: a=`${n}-enter-active`, enterToClass: s=`${n}-enter-to`, appearFromClass: l=o, appearActiveClass: d=a, appearToClass: u=s, leaveFromClass: c=`${n}-leave-from`, leaveActiveClass: f=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , b = J1(i)
      , p = b && b[0]
      , y = b && b[1]
      , {onBeforeEnter: v, onEnter: w, onEnterCancelled: g, onLeave: k, onLeaveCancelled: O, onBeforeAppear: D=v, onAppear: R=w, onAppearCancelled: G=g} = t
      , L = ($, re, he, Te) => {
        $._enterCancelled = Te,
        $n($, re ? u : s),
        $n($, re ? d : a),
        he && he()
    }
      , Z = ($, re) => {
        $._isLeaving = !1,
        $n($, c),
        $n($, m),
        $n($, f),
        re && re()
    }
      , q = $ => (re, he) => {
        const Te = $ ? R : w
          , ge = () => L(re, $, he);
        Pn(Te, [re, ge]),
        zl(( () => {
            $n(re, $ ? l : o),
            Yt(re, $ ? u : s),
            Il(Te) || Rl(re, r, p, ge)
        }
        ))
    }
    ;
    return nt(t, {
        onBeforeEnter($) {
            Pn(v, [$]),
            Yt($, o),
            Yt($, a)
        },
        onBeforeAppear($) {
            Pn(D, [$]),
            Yt($, l),
            Yt($, d)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave($, re) {
            $._isLeaving = !0;
            const he = () => Z($, re);
            Yt($, c),
            $._enterCancelled ? (Yt($, f),
            Ul()) : (Ul(),
            Yt($, f)),
            zl(( () => {
                $._isLeaving && ($n($, c),
                Yt($, m),
                Il(k) || Rl($, r, y, he))
            }
            )),
            Pn(k, [$, he])
        },
        onEnterCancelled($) {
            L($, !1, void 0, !0),
            Pn(g, [$])
        },
        onAppearCancelled($) {
            L($, !0, void 0, !0),
            Pn(G, [$])
        },
        onLeaveCancelled($) {
            Z($),
            Pn(O, [$])
        }
    })
}
function J1(e) {
    if (e == null)
        return null;
    if (Fe(e))
        return [da(e.enter), da(e.leave)];
    {
        const t = da(e);
        return [t, t]
    }
}
function da(e) {
    return Ym(e)
}
function Yt(e, t) {
    t.split(/\s+/).forEach((n => n && e.classList.add(n))),
    (e[ri] || (e[ri] = new Set)).add(t)
}
function $n(e, t) {
    t.split(/\s+/).forEach((r => r && e.classList.remove(r)));
    const n = e[ri];
    n && (n.delete(t),
    n.size || (e[ri] = void 0))
}
function zl(e) {
    requestAnimationFrame(( () => {
        requestAnimationFrame(e)
    }
    ))
}
let Q1 = 0;
function Rl(e, t, n, r) {
    const i = e._endId = ++Q1
      , o = () => {
        i === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(o, n);
    const {type: a, timeout: s, propCount: l} = eh(e, t);
    if (!a)
        return r();
    const d = a + "end";
    let u = 0;
    const c = () => {
        e.removeEventListener(d, f),
        o()
    }
      , f = m => {
        m.target === e && ++u >= l && c()
    }
    ;
    setTimeout(( () => {
        u < l && c()
    }
    ), s + 1),
    e.addEventListener(d, f)
}
function eh(e, t) {
    const n = window.getComputedStyle(e)
      , r = b => (n[b] || "").split(", ")
      , i = r(`${un}Delay`)
      , o = r(`${un}Duration`)
      , a = jl(i, o)
      , s = r(`${Cr}Delay`)
      , l = r(`${Cr}Duration`)
      , d = jl(s, l);
    let u = null
      , c = 0
      , f = 0;
    t === un ? a > 0 && (u = un,
    c = a,
    f = o.length) : t === Cr ? d > 0 && (u = Cr,
    c = d,
    f = l.length) : (c = Math.max(a, d),
    u = c > 0 ? a > d ? un : Cr : null,
    f = u ? u === un ? o.length : l.length : 0);
    const m = u === un && /\b(transform|all)(,|$)/.test(r(`${un}Property`).toString());
    return {
        type: u,
        timeout: c,
        propCount: f,
        hasTransform: m
    }
}
function jl(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map(( (n, r) => Vl(n) + Vl(e[r]))))
}
function Vl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Ul() {
    return document.body.offsetHeight
}
function th(e, t, n) {
    const r = e[ri];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Bl = Symbol("_vod")
  , nh = Symbol("_vsh")
  , rh = Symbol("")
  , ih = /(^|;)\s*display\s*:/;
function oh(e, t, n) {
    const r = e.style
      , i = He(n);
    let o = !1;
    if (n && !i) {
        if (t)
            if (He(t))
                for (const a of t.split(";")) {
                    const s = a.slice(0, a.indexOf(":")).trim();
                    n[s] == null && Bi(r, s, "")
                }
            else
                for (const a in t)
                    n[a] == null && Bi(r, a, "");
        for (const a in n)
            a === "display" && (o = !0),
            Bi(r, a, n[a])
    } else if (i) {
        if (t !== n) {
            const a = r[rh];
            a && (n += ";" + a),
            r.cssText = n,
            o = ih.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Bl in e && (e[Bl] = o ? r.display : "",
    e[nh] && (r.display = "none"))
}
const Hl = /\s*!important$/;
function Bi(e, t, n) {
    if (le(n))
        n.forEach((r => Bi(e, t, r)));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = ah(e, t);
        Hl.test(n) ? e.setProperty(Gn(r), n.replace(Hl, ""), "important") : e[r] = n
    }
}
const ql = ["Webkit", "Moz", "ms"]
  , ua = {};
function ah(e, t) {
    const n = ua[t];
    if (n)
        return n;
    let r = Dt(t);
    if (r !== "filter" && r in e)
        return ua[t] = r;
    r = xo(r);
    for (let i = 0; i < ql.length; i++) {
        const o = ql[i] + r;
        if (o in e)
            return ua[t] = o
    }
    return t
}
const Wl = "http://www.w3.org/1999/xlink";
function Gl(e, t, n, r, i, o=tp(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wl, t.slice(6, t.length)) : e.setAttributeNS(Wl, t, n) : n == null || o && !mu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Lt(n) ? String(n) : n)
}
function Kl(e, t, n, r, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Cc(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (s !== l || !("_value"in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let a = !1;
    if (n === "" || n == null) {
        const s = typeof e[t];
        s === "boolean" ? n = mu(n) : n == null && s === "string" ? (n = "",
        a = !0) : s === "number" && (n = 0,
        a = !0)
    }
    try {
        e[t] = n
    } catch {}
    a && e.removeAttribute(i || t)
}
function Oc(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function sh(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Yl = Symbol("_vei");
function lh(e, t, n, r, i=null) {
    const o = e[Yl] || (e[Yl] = {})
      , a = o[t];
    if (r && a)
        a.value = r;
    else {
        const [s,l] = dh(t);
        if (r) {
            const d = o[t] = fh(r, i);
            Oc(e, s, d, l)
        } else
            a && (sh(e, s, a, l),
            o[t] = void 0)
    }
}
const Xl = /(?:Once|Passive|Capture)$/;
function dh(e) {
    let t;
    if (Xl.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Xl); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Gn(e.slice(2)), t]
}
let ca = 0;
const uh = Promise.resolve()
  , ch = () => ca || (uh.then(( () => ca = 0)),
ca = Date.now());
function fh(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Ft(mh(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = ch(),
    n
}
function mh(e, t) {
    if (le(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map((r => i => !i._stopped && r && r(i)))
    } else
        return t
}
const Zl = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , ph = (e, t, n, r, i, o) => {
    const a = i === "svg";
    t === "class" ? th(e, r, a) : t === "style" ? oh(e, n, r) : go(t) ? ys(t) || lh(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : hh(e, t, r, a)) ? (Kl(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gl(e, t, r, a, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !He(r)) ? Kl(e, Dt(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Gl(e, t, r, a))
}
;
function hh(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Zl(t) && me(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Zl(t) && He(n) ? !1 : t in e
}
const Jl = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return le(t) ? n => ji(t, n) : t
}
  , fa = Symbol("_assign")
  , bh = {
    deep: !0,
    created(e, t, n) {
        e[fa] = Jl(n),
        Oc(e, "change", ( () => {
            const r = e._modelValue
              , i = vh(e)
              , o = e.checked
              , a = e[fa];
            if (le(r)) {
                const s = pu(r, i)
                  , l = s !== -1;
                if (o && !l)
                    a(r.concat(i));
                else if (!o && l) {
                    const d = [...r];
                    d.splice(s, 1),
                    a(d)
                }
            } else if (yo(r)) {
                const s = new Set(r);
                o ? s.add(i) : s.delete(i),
                a(s)
            } else
                a(Ac(e, o))
        }
        ))
    },
    mounted: Ql,
    beforeUpdate(e, t, n) {
        e[fa] = Jl(n),
        Ql(e, t, n)
    }
};
function Ql(e, {value: t, oldValue: n}, r) {
    e._modelValue = t;
    let i;
    if (le(t))
        i = pu(t, r.props.value) > -1;
    else if (yo(t))
        i = t.has(r.props.value);
    else {
        if (t === n)
            return;
        i = _o(t, Ac(e, !0))
    }
    e.checked !== i && (e.checked = i)
}
function vh(e) {
    return "_value"in e ? e._value : e.value
}
function Ac(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const gh = nt({
    patchProp: ph
}, K1);
let ed;
function yh() {
    return ed || (ed = g1(gh))
}
const wh = (...e) => {
    const t = yh().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const i = kh(r);
        if (!i)
            return;
        const o = t._component;
        !me(o) && !o.render && !o.template && (o.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
        const a = n(i, !1, xh(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        a
    }
    ,
    t
}
;
function xh(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function kh(e) {
    return He(e) ? document.querySelector(e) : e
}
function Dc(e, t, n) {
    let r = W(n == null ? void 0 : n.value)
      , i = P(( () => e.value !== void 0));
    return [P(( () => i.value ? e.value : r.value)), function(o) {
        return i.value || (r.value = o),
        t == null ? void 0 : t(o)
    }
    ]
}
function Ms(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t => setTimeout(( () => {
        throw t
    }
    ))))
}
function mi() {
    let e = []
      , t = {
        addEventListener(n, r, i, o) {
            return n.addEventListener(r, i, o),
            t.add(( () => n.removeEventListener(r, i, o)))
        },
        requestAnimationFrame(...n) {
            let r = requestAnimationFrame(...n);
            t.add(( () => cancelAnimationFrame(r)))
        },
        nextFrame(...n) {
            t.requestAnimationFrame(( () => {
                t.requestAnimationFrame(...n)
            }
            ))
        },
        setTimeout(...n) {
            let r = setTimeout(...n);
            t.add(( () => clearTimeout(r)))
        },
        microTask(...n) {
            let r = {
                current: !0
            };
            return Ms(( () => {
                r.current && n[0]()
            }
            )),
            t.add(( () => {
                r.current = !1
            }
            ))
        },
        style(n, r, i) {
            let o = n.style.getPropertyValue(r);
            return Object.assign(n.style, {
                [r]: i
            }),
            this.add(( () => {
                Object.assign(n.style, {
                    [r]: o
                })
            }
            ))
        },
        group(n) {
            let r = mi();
            return n(r),
            this.add(( () => r.dispose()))
        },
        add(n) {
            return e.push(n),
            () => {
                let r = e.indexOf(n);
                if (r >= 0)
                    for (let i of e.splice(r, 1))
                        i()
            }
        },
        dispose() {
            for (let n of e.splice(0))
                n()
        }
    };
    return t
}
var td;
let _h = Symbol("headlessui.useid")
  , Sh = 0;
const xt = (td = Wp) != null ? td : function() {
    return Be(_h, ( () => `${++Sh}`))()
}
;
function ce(e) {
    var t;
    if (e == null || e.value == null)
        return null;
    let n = (t = e.value.$el) != null ? t : e.value;
    return n instanceof Node ? n : null
}
function Xe(e, t, ...n) {
    if (e in t) {
        let i = t[e];
        return typeof i == "function" ? i(...n) : i
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i => `"${i}"`)).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Xe),
    r
}
var Eh = Object.defineProperty
  , Ch = (e, t, n) => t in e ? Eh(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , nd = (e, t, n) => (Ch(e, typeof t != "symbol" ? t + "" : t, n),
n);
let Th = class {
    constructor() {
        nd(this, "current", this.detect()),
        nd(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.currentId = 0,
        this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
}
  , pi = new Th;
function Gt(e) {
    if (pi.isServer)
        return null;
    if (e instanceof Node)
        return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = ce(e);
        if (t)
            return t.ownerDocument
    }
    return document
}
let Ra = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e => `${e}:not([tabindex='-1'])`)).join(",");
var Ot = (e => (e[e.First = 1] = "First",
e[e.Previous = 2] = "Previous",
e[e.Next = 4] = "Next",
e[e.Last = 8] = "Last",
e[e.WrapAround = 16] = "WrapAround",
e[e.NoScroll = 32] = "NoScroll",
e))(Ot || {})
  , to = (e => (e[e.Error = 0] = "Error",
e[e.Overflow = 1] = "Overflow",
e[e.Success = 2] = "Success",
e[e.Underflow = 3] = "Underflow",
e))(to || {})
  , Oh = (e => (e[e.Previous = -1] = "Previous",
e[e.Next = 1] = "Next",
e))(Oh || {});
function Ah(e=document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Ra)).sort(( (t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER))))
}
var Ls = (e => (e[e.Strict = 0] = "Strict",
e[e.Loose = 1] = "Loose",
e))(Ls || {});
function Pc(e, t=0) {
    var n;
    return e === ((n = Gt(e)) == null ? void 0 : n.body) ? !1 : Xe(t, {
        0() {
            return e.matches(Ra)
        },
        1() {
            let r = e;
            for (; r !== null; ) {
                if (r.matches(Ra))
                    return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
var Dh = (e => (e[e.Keyboard = 0] = "Keyboard",
e[e.Mouse = 1] = "Mouse",
e))(Dh || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}
), !0),
document.addEventListener("click", (e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}
), !0));
function Un(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Ph = ["textarea", "input"].join(",");
function $h(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ph)) != null ? n : !1
}
function Fs(e, t=n => n) {
    return e.slice().sort(( (n, r) => {
        let i = t(n)
          , o = t(r);
        if (i === null || o === null)
            return 0;
        let a = i.compareDocumentPosition(o);
        return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    }
    ))
}
function ur(e, t, {sorted: n=!0, relativeTo: r=null, skipElements: i=[]}={}) {
    var o;
    let a = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document
      , s = Array.isArray(e) ? n ? Fs(e) : e : Ah(e);
    i.length > 0 && s.length > 1 && (s = s.filter((b => !i.includes(b)))),
    r = r ?? a.activeElement;
    let l = ( () => {
        if (t & 5)
            return 1;
        if (t & 10)
            return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), d = ( () => {
        if (t & 1)
            return 0;
        if (t & 2)
            return Math.max(0, s.indexOf(r)) - 1;
        if (t & 4)
            return Math.max(0, s.indexOf(r)) + 1;
        if (t & 8)
            return s.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), u = t & 32 ? {
        preventScroll: !0
    } : {}, c = 0, f = s.length, m;
    do {
        if (c >= f || c + f <= 0)
            return 0;
        let b = d + c;
        if (t & 16)
            b = (b + f) % f;
        else {
            if (b < 0)
                return 3;
            if (b >= f)
                return 1
        }
        m = s[b],
        m == null || m.focus(u),
        c += l
    } while (m !== a.activeElement);
    return t & 6 && $h(m) && m.select(),
    2
}
function $c() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
function Mh() {
    return /Android/gi.test(window.navigator.userAgent)
}
function Lh() {
    return $c() || Mh()
}
function Ti(e, t, n) {
    pi.isServer || vt((r => {
        document.addEventListener(e, t, n),
        r(( () => document.removeEventListener(e, t, n)))
    }
    ))
}
function Mc(e, t, n) {
    pi.isServer || vt((r => {
        window.addEventListener(e, t, n),
        r(( () => window.removeEventListener(e, t, n)))
    }
    ))
}
function Lc(e, t, n=P(( () => !0))) {
    function r(o, a) {
        if (!n.value || o.defaultPrevented)
            return;
        let s = a(o);
        if (s === null || !s.getRootNode().contains(s))
            return;
        let l = function d(u) {
            return typeof u == "function" ? d(u()) : Array.isArray(u) || u instanceof Set ? u : [u]
        }(e);
        for (let d of l) {
            if (d === null)
                continue;
            let u = d instanceof HTMLElement ? d : ce(d);
            if (u != null && u.contains(s) || o.composed && o.composedPath().includes(u))
                return
        }
        return !Pc(s, Ls.Loose) && s.tabIndex !== -1 && o.preventDefault(),
        t(o, s)
    }
    let i = W(null);
    Ti("pointerdown", (o => {
        var a, s;
        n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target)
    }
    ), !0),
    Ti("mousedown", (o => {
        var a, s;
        n.value && (i.value = ((s = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : s[0]) || o.target)
    }
    ), !0),
    Ti("click", (o => {
        Lh() || i.value && (r(o, ( () => i.value)),
        i.value = null)
    }
    ), !0),
    Ti("touchend", (o => r(o, ( () => o.target instanceof HTMLElement ? o.target : null))), !0),
    Mc("blur", (o => r(o, ( () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null))), !0)
}
function rd(e, t) {
    if (e)
        return e;
    let n = t ?? "button";
    if (typeof n == "string" && n.toLowerCase() === "button")
        return "button"
}
function Fc(e, t) {
    let n = W(rd(e.value.type, e.value.as));
    return Ue(( () => {
        n.value = rd(e.value.type, e.value.as)
    }
    )),
    vt(( () => {
        var r;
        n.value || ce(t) && ce(t)instanceof HTMLButtonElement && !((r = ce(t)) != null && r.hasAttribute("type")) && (n.value = "button")
    }
    )),
    n
}
function id(e) {
    return [e.screenX, e.screenY]
}
function Fh() {
    let e = W([-1, -1]);
    return {
        wasMoved(t) {
            let n = id(t);
            return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n,
            !0)
        },
        update(t) {
            e.value = id(t)
        }
    }
}
function Nh({container: e, accept: t, walk: n, enabled: r}) {
    vt(( () => {
        let i = e.value;
        if (!i || r !== void 0 && !r.value)
            return;
        let o = Gt(e);
        if (!o)
            return;
        let a = Object.assign((l => t(l)), {
            acceptNode: t
        })
          , s = o.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, a, !1);
        for (; s.nextNode(); )
            n(s.currentNode)
    }
    ))
}
var Sn = (e => (e[e.None = 0] = "None",
e[e.RenderStrategy = 1] = "RenderStrategy",
e[e.Static = 2] = "Static",
e))(Sn || {})
  , wn = (e => (e[e.Unmount = 0] = "Unmount",
e[e.Hidden = 1] = "Hidden",
e))(wn || {});
function Ke({visible: e=!0, features: t=0, ourProps: n, theirProps: r, ...i}) {
    var o;
    let a = Ic(r, n)
      , s = Object.assign(i, {
        props: a
    });
    if (e || t & 2 && a.static)
        return ma(s);
    if (t & 1) {
        let l = (o = a.unmount) == null || o ? 0 : 1;
        return Xe(l, {
            0() {
                return null
            },
            1() {
                return ma({
                    ...i,
                    props: {
                        ...a,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                })
            }
        })
    }
    return ma(s)
}
function ma({props: e, attrs: t, slots: n, slot: r, name: i}) {
    var o, a;
    let {as: s, ...l} = Mo(e, ["unmount", "static"])
      , d = (o = n.default) == null ? void 0 : o.call(n, r)
      , u = {};
    if (r) {
        let c = !1
          , f = [];
        for (let[m,b] of Object.entries(r))
            typeof b == "boolean" && (c = !0),
            b === !0 && f.push(m);
        c && (u["data-headlessui-state"] = f.join(" "))
    }
    if (s === "template") {
        if (d = Nc(d ?? []),
        Object.keys(l).length > 0 || Object.keys(t).length > 0) {
            let[c,...f] = d ?? [];
            if (!Ih(c) || f.length > 0)
                throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map((p => p.trim())).filter(( (p, y, v) => v.indexOf(p) === y)).sort(( (p, y) => p.localeCompare(y))).map((p => `  - ${p}`)).join(`\n`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p => `  - ${p}`)).join(`\n`)].join(`\n`));
            let m = Ic((a = c.props) != null ? a : {}, l, u)
              , b = nn(c, m, !0);
            for (let p in m)
                p.startsWith("on") && (b.props || (b.props = {}),
                b.props[p] = m[p]);
            return b
        }
        return Array.isArray(d) && d.length === 1 ? d[0] : d
    }
    return je(s, Object.assign({}, l, u), {
        default: () => d
    })
}
function Nc(e) {
    return e.flatMap((t => t.type === U ? Nc(t.children) : [t]))
}
function Ic(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let i in r)
            i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []),
            n[i].push(r[i])) : t[i] = r[i];
    if (t.disabled || t["aria-disabled"])
        return Object.assign(t, Object.fromEntries(Object.keys(n).map((r => [r, void 0]))));
    for (let r in n)
        Object.assign(t, {
            [r](i, ...o) {
                let a = n[r];
                for (let s of a) {
                    if (i instanceof Event && i.defaultPrevented)
                        return;
                    s(i, ...o)
                }
            }
        });
    return t
}
function zc(e) {
    let t = Object.assign({}, e);
    for (let n in t)
        t[n] === void 0 && delete t[n];
    return t
}
function Mo(e, t=[]) {
    let n = Object.assign({}, e);
    for (let r of t)
        r in n && delete n[r];
    return n
}
function Ih(e) {
    return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}
var mr = (e => (e[e.None = 1] = "None",
e[e.Focusable = 2] = "Focusable",
e[e.Hidden = 4] = "Hidden",
e))(mr || {});
let ii = ve({
    name: "Hidden",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return () => {
            var r;
            let {features: i, ...o} = e
              , a = {
                "aria-hidden": (i & 2) === 2 ? !0 : (r = o["aria-hidden"]) != null ? r : void 0,
                hidden: (i & 4) === 4 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(i & 4) === 4 && (i & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return Ke({
                ourProps: a,
                theirProps: o,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden"
            })
        }
    }
})
  , Rc = Symbol("Context");
var Ye = (e => (e[e.Open = 1] = "Open",
e[e.Closed = 2] = "Closed",
e[e.Closing = 4] = "Closing",
e[e.Opening = 8] = "Opening",
e))(Ye || {});
function zh() {
    return hi() !== null
}
function hi() {
    return Be(Rc, null)
}
function Ns(e) {
    at(Rc, e)
}
var De = (e => (e.Space = " ",
e.Enter = "Enter",
e.Escape = "Escape",
e.Backspace = "Backspace",
e.Delete = "Delete",
e.ArrowLeft = "ArrowLeft",
e.ArrowUp = "ArrowUp",
e.ArrowRight = "ArrowRight",
e.ArrowDown = "ArrowDown",
e.Home = "Home",
e.End = "End",
e.PageUp = "PageUp",
e.PageDown = "PageDown",
e.Tab = "Tab",
e))(De || {});
function Rh(e) {
    function t() {
        document.readyState !== "loading" && (e(),
        document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t),
    t())
}
let zn = [];
Rh(( () => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && zn[0] !== t.target && (zn.unshift(t.target),
        zn = zn.filter((n => n != null && n.isConnected)),
        zn.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }),
    window.addEventListener("mousedown", e, {
        capture: !0
    }),
    window.addEventListener("focus", e, {
        capture: !0
    }),
    document.body.addEventListener("click", e, {
        capture: !0
    }),
    document.body.addEventListener("mousedown", e, {
        capture: !0
    }),
    document.body.addEventListener("focus", e, {
        capture: !0
    })
}
));
function jh(e) {
    throw new Error("Unexpected object: " + e)
}
var ht = (e => (e[e.First = 0] = "First",
e[e.Previous = 1] = "Previous",
e[e.Next = 2] = "Next",
e[e.Last = 3] = "Last",
e[e.Specific = 4] = "Specific",
e[e.Nothing = 5] = "Nothing",
e))(ht || {});
function Vh(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0)
        return null;
    let r = t.resolveActiveIndex()
      , i = r ?? -1;
    switch (e.focus) {
    case 0:
        {
            for (let o = 0; o < n.length; ++o)
                if (!t.resolveDisabled(n[o], o, n))
                    return o;
            return r
        }
    case 1:
        {
            i === -1 && (i = n.length);
            for (let o = i - 1; o >= 0; --o)
                if (!t.resolveDisabled(n[o], o, n))
                    return o;
            return r
        }
    case 2:
        {
            for (let o = i + 1; o < n.length; ++o)
                if (!t.resolveDisabled(n[o], o, n))
                    return o;
            return r
        }
    case 3:
        {
            for (let o = n.length - 1; o >= 0; --o)
                if (!t.resolveDisabled(n[o], o, n))
                    return o;
            return r
        }
    case 4:
        {
            for (let o = 0; o < n.length; ++o)
                if (t.resolveId(n[o], o, n) === e.id)
                    return o;
            return r
        }
    case 5:
        return null;
    default:
        jh(e)
    }
}
function Is(e={}, t=null, n=[]) {
    for (let[r,i] of Object.entries(e))
        Vc(n, jc(t, r), i);
    return n
}
function jc(e, t) {
    return e ? e + "[" + t + "]" : t
}
function Vc(e, t, n) {
    if (Array.isArray(n))
        for (let[r,i] of n.entries())
            Vc(e, jc(t, r.toString()), i);
    else
        n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Is(n, t, e)
}
function Uh(e) {
    var t, n;
    let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
    if (r) {
        for (let i of r.elements)
            if (i !== e && (i.tagName === "INPUT" && i.type === "submit" || i.tagName === "BUTTON" && i.type === "submit" || i.nodeName === "INPUT" && i.type === "image")) {
                i.click();
                return
            }
        (n = r.requestSubmit) == null || n.call(r)
    }
}
function Uc(e, t, n, r) {
    pi.isServer || vt((i => {
        e = e ?? window,
        e.addEventListener(t, n, r),
        i(( () => e.removeEventListener(t, n, r)))
    }
    ))
}
var Pr = (e => (e[e.Forwards = 0] = "Forwards",
e[e.Backwards = 1] = "Backwards",
e))(Pr || {});
function Bh() {
    let e = W(0);
    return Mc("keydown", (t => {
        t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }
    )),
    e
}
function Bc(e) {
    if (!e)
        return new Set;
    if (typeof e == "function")
        return new Set(e());
    let t = new Set;
    for (let n of e.value) {
        let r = ce(n);
        r instanceof HTMLElement && t.add(r)
    }
    return t
}
var Hc = (e => (e[e.None = 1] = "None",
e[e.InitialFocus = 2] = "InitialFocus",
e[e.TabLock = 4] = "TabLock",
e[e.FocusLock = 8] = "FocusLock",
e[e.RestoreFocus = 16] = "RestoreFocus",
e[e.All = 30] = "All",
e))(Hc || {});
let Tr = Object.assign(ve({
    name: "FocusTrap",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        initialFocus: {
            type: Object,
            default: null
        },
        features: {
            type: Number,
            default: 30
        },
        containers: {
            type: [Object, Function],
            default: W(new Set)
        }
    },
    inheritAttrs: !1,
    setup(e, {attrs: t, slots: n, expose: r}) {
        let i = W(null);
        r({
            el: i,
            $el: i
        });
        let o = P(( () => Gt(i)))
          , a = W(!1);
        Ue(( () => a.value = !0)),
        rt(( () => a.value = !1)),
        qh({
            ownerDocument: o
        }, P(( () => a.value && !!(e.features & 16))));
        let s = Wh({
            ownerDocument: o,
            container: i,
            initialFocus: P(( () => e.initialFocus))
        }, P(( () => a.value && !!(e.features & 2))));
        Gh({
            ownerDocument: o,
            container: i,
            containers: e.containers,
            previousActiveElement: s
        }, P(( () => a.value && !!(e.features & 8))));
        let l = Bh();
        function d(m) {
            let b = ce(i);
            b && (p => p())(( () => {
                Xe(l.value, {
                    [Pr.Forwards]: () => {
                        ur(b, Ot.First, {
                            skipElements: [m.relatedTarget]
                        })
                    }
                    ,
                    [Pr.Backwards]: () => {
                        ur(b, Ot.Last, {
                            skipElements: [m.relatedTarget]
                        })
                    }
                })
            }
            ))
        }
        let u = W(!1);
        function c(m) {
            m.key === "Tab" && (u.value = !0,
            requestAnimationFrame(( () => {
                u.value = !1
            }
            )))
        }
        function f(m) {
            if (!a.value)
                return;
            let b = Bc(e.containers);
            ce(i)instanceof HTMLElement && b.add(ce(i));
            let p = m.relatedTarget;
            p instanceof HTMLElement && p.dataset.headlessuiFocusGuard !== "true" && (qc(b, p) || (u.value ? ur(ce(i), Xe(l.value, {
                [Pr.Forwards]: () => Ot.Next,
                [Pr.Backwards]: () => Ot.Previous
            }) | Ot.WrapAround, {
                relativeTo: m.target
            }) : m.target instanceof HTMLElement && Un(m.target)))
        }
        return () => {
            let m = {}
              , b = {
                ref: i,
                onKeydown: c,
                onFocusout: f
            }
              , {features: p, initialFocus: y, containers: v, ...w} = e;
            return je(U, [!!(p & 4) && je(ii, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: d,
                features: mr.Focusable
            }), Ke({
                ourProps: b,
                theirProps: {
                    ...t,
                    ...w
                },
                slot: m,
                attrs: t,
                slots: n,
                name: "FocusTrap"
            }), !!(p & 4) && je(ii, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: d,
                features: mr.Focusable
            })])
        }
    }
}), {
    features: Hc
});
function Hh(e) {
    let t = W(zn.slice());
    return dt([e], ( ([n], [r]) => {
        r === !0 && n === !1 ? Ms(( () => {
            t.value.splice(0)
        }
        )) : r === !1 && n === !0 && (t.value = zn.slice())
    }
    ), {
        flush: "post"
    }),
    () => {
        var n;
        return (n = t.value.find((r => r != null && r.isConnected))) != null ? n : null
    }
}
function qh({ownerDocument: e}, t) {
    let n = Hh(t);
    Ue(( () => {
        vt(( () => {
            var r, i;
            t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((i = e.value) == null ? void 0 : i.body) && Un(n())
        }
        ), {
            flush: "post"
        })
    }
    )),
    rt(( () => {
        t.value && Un(n())
    }
    ))
}
function Wh({ownerDocument: e, container: t, initialFocus: n}, r) {
    let i = W(null)
      , o = W(!1);
    return Ue(( () => o.value = !0)),
    rt(( () => o.value = !1)),
    Ue(( () => {
        dt([t, n, r], ( (a, s) => {
            if (a.every(( (d, u) => (s == null ? void 0 : s[u]) === d)) || !r.value)
                return;
            let l = ce(t);
            l && Ms(( () => {
                var d, u;
                if (!o.value)
                    return;
                let c = ce(n)
                  , f = (d = e.value) == null ? void 0 : d.activeElement;
                if (c) {
                    if (c === f) {
                        i.value = f;
                        return
                    }
                } else if (l.contains(f)) {
                    i.value = f;
                    return
                }
                c ? Un(c) : ur(l, Ot.First | Ot.NoScroll) === to.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                i.value = (u = e.value) == null ? void 0 : u.activeElement
            }
            ))
        }
        ), {
            immediate: !0,
            flush: "post"
        })
    }
    )),
    i
}
function Gh({ownerDocument: e, container: t, containers: n, previousActiveElement: r}, i) {
    var o;
    Uc((o = e.value) == null ? void 0 : o.defaultView, "focus", (a => {
        if (!i.value)
            return;
        let s = Bc(n);
        ce(t)instanceof HTMLElement && s.add(ce(t));
        let l = r.value;
        if (!l)
            return;
        let d = a.target;
        d && d instanceof HTMLElement ? qc(s, d) ? (r.value = d,
        Un(d)) : (a.preventDefault(),
        a.stopPropagation(),
        Un(l)) : Un(r.value)
    }
    ), !0)
}
function qc(e, t) {
    for (let n of e)
        if (n.contains(t))
            return !0;
    return !1
}
function Kh(e) {
    let t = Da(e.getSnapshot());
    return rt(e.subscribe(( () => {
        t.value = e.getSnapshot()
    }
    ))),
    t
}
function Yh(e, t) {
    let n = e()
      , r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(i) {
            return r.add(i),
            () => r.delete(i)
        },
        dispatch(i, ...o) {
            let a = t[i].call(n, ...o);
            a && (n = a,
            r.forEach((s => s())))
        }
    }
}
function Xh() {
    let e;
    return {
        before({doc: t}) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({doc: t, d: n}) {
            let r = t.documentElement
              , i = r.clientWidth - r.offsetWidth
              , o = e - i;
            n.style(r, "paddingRight", `${o}px`)
        }
    }
}
function Zh() {
    return $c() ? {
        before({doc: e, d: t, meta: n}) {
            function r(i) {
                return n.containers.flatMap((o => o())).some((o => o.contains(i)))
            }
            t.microTask(( () => {
                var i;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let s = mi();
                    s.style(e.documentElement, "scrollBehavior", "auto"),
                    t.add(( () => t.microTask(( () => s.dispose()))))
                }
                let o = (i = window.scrollY) != null ? i : window.pageYOffset
                  , a = null;
                t.addEventListener(e, "click", (s => {
                    if (s.target instanceof HTMLElement)
                        try {
                            let l = s.target.closest("a");
                            if (!l)
                                return;
                            let {hash: d} = new URL(l.href)
                              , u = e.querySelector(d);
                            u && !r(u) && (a = u)
                        } catch {}
                }
                ), !0),
                t.addEventListener(e, "touchstart", (s => {
                    if (s.target instanceof HTMLElement)
                        if (r(s.target)) {
                            let l = s.target;
                            for (; l.parentElement && r(l.parentElement); )
                                l = l.parentElement;
                            t.style(l, "overscrollBehavior", "contain")
                        } else
                            t.style(s.target, "touchAction", "none")
                }
                )),
                t.addEventListener(e, "touchmove", (s => {
                    if (s.target instanceof HTMLElement) {
                        if (s.target.tagName === "INPUT")
                            return;
                        if (r(s.target)) {
                            let l = s.target;
                            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); )
                                l = l.parentElement;
                            l.dataset.headlessuiPortal === "" && s.preventDefault()
                        } else
                            s.preventDefault()
                    }
                }
                ), {
                    passive: !1
                }),
                t.add(( () => {
                    var s;
                    let l = (s = window.scrollY) != null ? s : window.pageYOffset;
                    o !== l && window.scrollTo(0, o),
                    a && a.isConnected && (a.scrollIntoView({
                        block: "nearest"
                    }),
                    a = null)
                }
                ))
            }
            ))
        }
    } : {}
}
function Jh() {
    return {
        before({doc: e, d: t}) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}
function Qh(e) {
    let t = {};
    for (let n of e)
        Object.assign(t, n(t));
    return t
}
let Rn = Yh(( () => new Map), {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: mi(),
            meta: new Set
        };
        return r.count++,
        r.meta.add(t),
        this.set(e, r),
        this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--,
        n.meta.delete(t)),
        this
    },
    SCROLL_PREVENT({doc: e, d: t, meta: n}) {
        let r = {
            doc: e,
            d: t,
            meta: Qh(n)
        }
          , i = [Zh(), Xh(), Jh()];
        i.forEach(( ({before: o}) => o == null ? void 0 : o(r))),
        i.forEach(( ({after: o}) => o == null ? void 0 : o(r)))
    },
    SCROLL_ALLOW({d: e}) {
        e.dispose()
    },
    TEARDOWN({doc: e}) {
        this.delete(e)
    }
});
Rn.subscribe(( () => {
    let e = Rn.getSnapshot()
      , t = new Map;
    for (let[n] of e)
        t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden"
          , i = n.count !== 0;
        (i && !r || !i && r) && Rn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
        n.count === 0 && Rn.dispatch("TEARDOWN", n)
    }
}
));
function e0(e, t, n) {
    let r = Kh(Rn)
      , i = P(( () => {
        let o = e.value ? r.value.get(e.value) : void 0;
        return o ? o.count > 0 : !1
    }
    ));
    return dt([e, t], ( ([o,a], [s], l) => {
        if (!o || !a)
            return;
        Rn.dispatch("PUSH", o, n);
        let d = !1;
        l(( () => {
            d || (Rn.dispatch("POP", s ?? o, n),
            d = !0)
        }
        ))
    }
    ), {
        immediate: !0
    }),
    i
}
let pa = new Map
  , Or = new Map;
function od(e, t=W(!0)) {
    vt((n => {
        var r;
        if (!t.value)
            return;
        let i = ce(e);
        if (!i)
            return;
        n((function() {
            var a;
            if (!i)
                return;
            let s = (a = Or.get(i)) != null ? a : 1;
            if (s === 1 ? Or.delete(i) : Or.set(i, s - 1),
            s !== 1)
                return;
            let l = pa.get(i);
            l && (l["aria-hidden"] === null ? i.removeAttribute("aria-hidden") : i.setAttribute("aria-hidden", l["aria-hidden"]),
            i.inert = l.inert,
            pa.delete(i))
        }
        ));
        let o = (r = Or.get(i)) != null ? r : 0;
        Or.set(i, o + 1),
        o === 0 && (pa.set(i, {
            "aria-hidden": i.getAttribute("aria-hidden"),
            inert: i.inert
        }),
        i.setAttribute("aria-hidden", "true"),
        i.inert = !0)
    }
    ))
}
function t0({defaultContainers: e=[], portals: t, mainTreeNodeRef: n}={}) {
    let r = W(null)
      , i = Gt(r);
    function o() {
        var a, s, l;
        let d = [];
        for (let u of e)
            u !== null && (u instanceof HTMLElement ? d.push(u) : "value"in u && u.value instanceof HTMLElement && d.push(u.value));
        if (t != null && t.value)
            for (let u of t.value)
                d.push(u);
        for (let u of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : [])
            u !== document.body && u !== document.head && u instanceof HTMLElement && u.id !== "headlessui-portal-root" && (u.contains(ce(r)) || u.contains((l = (s = ce(r)) == null ? void 0 : s.getRootNode()) == null ? void 0 : l.host) || d.some((c => u.contains(c))) || d.push(u));
        return d
    }
    return {
        resolveContainers: o,
        contains(a) {
            return o().some((s => s.contains(a)))
        },
        mainTreeNodeRef: r,
        MainTreeNode() {
            return n != null ? null : je(ii, {
                features: mr.Hidden,
                ref: r
            })
        }
    }
}
let Wc = Symbol("ForcePortalRootContext");
function n0() {
    return Be(Wc, !1)
}
let ad = ve({
    name: "ForcePortalRoot",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        force: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        return at(Wc, e.force),
        () => {
            let {force: r, ...i} = e;
            return Ke({
                theirProps: i,
                ourProps: {},
                slot: {},
                slots: t,
                attrs: n,
                name: "ForcePortalRoot"
            })
        }
    }
})
  , Gc = Symbol("StackContext");
var ja = (e => (e[e.Add = 0] = "Add",
e[e.Remove = 1] = "Remove",
e))(ja || {});
function r0() {
    return Be(Gc, ( () => {}
    ))
}
function i0({type: e, enabled: t, element: n, onUpdate: r}) {
    let i = r0();
    function o(...a) {
        r == null || r(...a),
        i(...a)
    }
    Ue(( () => {
        dt(t, ( (a, s) => {
            a ? o(0, e, n) : s === !0 && o(1, e, n)
        }
        ), {
            immediate: !0,
            flush: "sync"
        })
    }
    )),
    rt(( () => {
        t.value && o(1, e, n)
    }
    )),
    at(Gc, o)
}
let Kc = Symbol("DescriptionContext");
function o0() {
    let e = Be(Kc, null);
    if (e === null)
        throw new Error("Missing parent");
    return e
}
function zs({slot: e=W({}), name: t="Description", props: n={}}={}) {
    let r = W([]);
    function i(o) {
        return r.value.push(o),
        () => {
            let a = r.value.indexOf(o);
            a !== -1 && r.value.splice(a, 1)
        }
    }
    return at(Kc, {
        register: i,
        slot: e,
        name: t,
        props: n
    }),
    P(( () => r.value.length > 0 ? r.value.join(" ") : void 0))
}
let Yc = ve({
    name: "Description",
    props: {
        as: {
            type: [Object, String],
            default: "p"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        var r;
        let i = (r = e.id) != null ? r : `headlessui-description-${xt()}`
          , o = o0();
        return Ue(( () => rt(o.register(i)))),
        () => {
            let {name: a="Description", slot: s=W({}), props: l={}} = o
              , {...d} = e
              , u = {
                ...Object.entries(l).reduce(( (c, [f,m]) => Object.assign(c, {
                    [f]: Xr(m)
                })), {}),
                id: i
            };
            return Ke({
                ourProps: u,
                theirProps: d,
                slot: s.value,
                attrs: t,
                slots: n,
                name: a
            })
        }
    }
});
function a0(e) {
    let t = Gt(e);
    if (!t) {
        if (e === null)
            return null;
        throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n)
        return n;
    let r = t.createElement("div");
    return r.setAttribute("id", "headlessui-portal-root"),
    t.body.appendChild(r)
}
const Va = new WeakMap;
function s0(e) {
    var t;
    return (t = Va.get(e)) != null ? t : 0
}
function sd(e, t) {
    let n = t(s0(e));
    return n <= 0 ? Va.delete(e) : Va.set(e, n),
    n
}
let l0 = ve({
    name: "Portal",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        }
    },
    setup(e, {slots: t, attrs: n}) {
        let r = W(null)
          , i = P(( () => Gt(r)))
          , o = n0()
          , a = Be(Xc, null)
          , s = W(o === !0 || a == null ? a0(r.value) : a.resolveTarget());
        s.value && sd(s.value, (f => f + 1));
        let l = W(!1);
        Ue(( () => {
            l.value = !0
        }
        )),
        vt(( () => {
            o || a != null && (s.value = a.resolveTarget())
        }
        ));
        let d = Be(Ua, null)
          , u = !1
          , c = $s();
        return dt(r, ( () => {
            if (u || !d)
                return;
            let f = ce(r);
            f && (rt(d.register(f), c),
            u = !0)
        }
        )),
        rt(( () => {
            var f, m;
            let b = (f = i.value) == null ? void 0 : f.getElementById("headlessui-portal-root");
            !b || s.value !== b || sd(s.value, (p => p - 1)) || s.value.children.length > 0 || (m = s.value.parentElement) == null || m.removeChild(s.value)
        }
        )),
        () => {
            if (!l.value || s.value === null)
                return null;
            let f = {
                ref: r,
                "data-headlessui-portal": ""
            };
            return je(Up, {
                to: s.value
            }, Ke({
                ourProps: f,
                theirProps: e,
                slot: {},
                attrs: n,
                slots: t,
                name: "Portal"
            }))
        }
    }
})
  , Ua = Symbol("PortalParentContext");
function d0() {
    let e = Be(Ua, null)
      , t = W([]);
    function n(o) {
        return t.value.push(o),
        e && e.register(o),
        () => r(o)
    }
    function r(o) {
        let a = t.value.indexOf(o);
        a !== -1 && t.value.splice(a, 1),
        e && e.unregister(o)
    }
    let i = {
        register: n,
        unregister: r,
        portals: t
    };
    return [t, ve({
        name: "PortalWrapper",
        setup(o, {slots: a}) {
            return at(Ua, i),
            () => {
                var s;
                return (s = a.default) == null ? void 0 : s.call(a)
            }
        }
    })]
}
let Xc = Symbol("PortalGroupContext")
  , u0 = ve({
    name: "PortalGroup",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        target: {
            type: Object,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        let r = vr({
            resolveTarget() {
                return e.target
            }
        });
        return at(Xc, r),
        () => {
            let {target: i, ...o} = e;
            return Ke({
                theirProps: o,
                ourProps: {},
                slot: {},
                attrs: t,
                slots: n,
                name: "PortalGroup"
            })
        }
    }
});
var c0 = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(c0 || {});
let Ba = Symbol("DialogContext");
function Lo(e) {
    let t = Be(Ba, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Lo),
        n
    }
    return t
}
let Oi = "DC8F892D-2EBD-447C-A4C8-A03058436FF4"
  , f0 = ve({
    name: "Dialog",
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        open: {
            type: [Boolean, String],
            default: Oi
        },
        initialFocus: {
            type: Object,
            default: null
        },
        id: {
            type: String,
            default: null
        },
        role: {
            type: String,
            default: "dialog"
        }
    },
    emits: {
        close: e => !0
    },
    setup(e, {emit: t, attrs: n, slots: r, expose: i}) {
        var o, a;
        let s = (o = e.id) != null ? o : `headlessui-dialog-${xt()}`
          , l = W(!1);
        Ue(( () => {
            l.value = !0
        }
        ));
        let d = !1
          , u = P(( () => e.role === "dialog" || e.role === "alertdialog" ? e.role : (d || (d = !0,
        console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),
        "dialog")))
          , c = W(0)
          , f = hi()
          , m = P(( () => e.open === Oi && f !== null ? (f.value & Ye.Open) === Ye.Open : e.open))
          , b = W(null)
          , p = P(( () => Gt(b)));
        if (i({
            el: b,
            $el: b
        }),
        !(e.open !== Oi || f !== null))
            throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
        if (typeof m.value != "boolean")
            throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m.value === Oi ? void 0 : e.open}`);
        let y = P(( () => l.value && m.value ? 0 : 1))
          , v = P(( () => y.value === 0))
          , w = P(( () => c.value > 1))
          , g = Be(Ba, null) !== null
          , [k,O] = d0()
          , {resolveContainers: D, mainTreeNodeRef: R, MainTreeNode: G} = t0({
            portals: k,
            defaultContainers: [P(( () => {
                var ie;
                return (ie = K.panelRef.value) != null ? ie : b.value
            }
            ))]
        })
          , L = P(( () => w.value ? "parent" : "leaf"))
          , Z = P(( () => f !== null ? (f.value & Ye.Closing) === Ye.Closing : !1))
          , q = P(( () => g || Z.value ? !1 : v.value))
          , $ = P(( () => {
            var ie, pe, qe;
            return (qe = Array.from((pe = (ie = p.value) == null ? void 0 : ie.querySelectorAll("body > *")) != null ? pe : []).find((Oe => Oe.id === "headlessui-portal-root" ? !1 : Oe.contains(ce(R)) && Oe instanceof HTMLElement))) != null ? qe : null
        }
        ));
        od($, q);
        let re = P(( () => w.value ? !0 : v.value))
          , he = P(( () => {
            var ie, pe, qe;
            return (qe = Array.from((pe = (ie = p.value) == null ? void 0 : ie.querySelectorAll("[data-headlessui-portal]")) != null ? pe : []).find((Oe => Oe.contains(ce(R)) && Oe instanceof HTMLElement))) != null ? qe : null
        }
        ));
        od(he, re),
        i0({
            type: "Dialog",
            enabled: P(( () => y.value === 0)),
            element: b,
            onUpdate: (ie, pe) => {
                if (pe === "Dialog")
                    return Xe(ie, {
                        [ja.Add]: () => c.value += 1,
                        [ja.Remove]: () => c.value -= 1
                    })
            }
        });
        let Te = zs({
            name: "DialogDescription",
            slot: P(( () => ({
                open: m.value
            })))
        })
          , ge = W(null)
          , K = {
            titleId: ge,
            panelRef: W(null),
            dialogState: y,
            setTitleId(ie) {
                ge.value !== ie && (ge.value = ie)
            },
            close() {
                t("close", !1)
            }
        };
        at(Ba, K);
        let ue = P(( () => !(!v.value || w.value)));
        Lc(D, ( (ie, pe) => {
            ie.preventDefault(),
            K.close(),
            tn(( () => pe == null ? void 0 : pe.focus()))
        }
        ), ue);
        let ze = P(( () => !(w.value || y.value !== 0)));
        Uc((a = p.value) == null ? void 0 : a.defaultView, "keydown", (ie => {
            ze.value && (ie.defaultPrevented || ie.key === De.Escape && (ie.preventDefault(),
            ie.stopPropagation(),
            K.close()))
        }
        ));
        let Je = P(( () => !(Z.value || y.value !== 0 || g)));
        return e0(p, Je, (ie => {
            var pe;
            return {
                containers: [...(pe = ie.containers) != null ? pe : [], D]
            }
        }
        )),
        vt((ie => {
            if (y.value !== 0)
                return;
            let pe = ce(b);
            if (!pe)
                return;
            let qe = new ResizeObserver((Oe => {
                for (let it of Oe) {
                    let J = it.target.getBoundingClientRect();
                    J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && K.close()
                }
            }
            ));
            qe.observe(pe),
            ie(( () => qe.disconnect()))
        }
        )),
        () => {
            let {open: ie, initialFocus: pe, ...qe} = e
              , Oe = {
                ...n,
                ref: b,
                id: s,
                role: u.value,
                "aria-modal": y.value === 0 ? !0 : void 0,
                "aria-labelledby": ge.value,
                "aria-describedby": Te.value
            }
              , it = {
                open: y.value === 0
            };
            return je(ad, {
                force: !0
            }, ( () => [je(l0, ( () => je(u0, {
                target: b.value
            }, ( () => je(ad, {
                force: !1
            }, ( () => je(Tr, {
                initialFocus: pe,
                containers: D,
                features: v.value ? Xe(L.value, {
                    parent: Tr.features.RestoreFocus,
                    leaf: Tr.features.All & ~Tr.features.FocusLock
                }) : Tr.features.None
            }, ( () => je(O, {}, ( () => Ke({
                ourProps: Oe,
                theirProps: {
                    ...qe,
                    ...n
                },
                slot: it,
                attrs: n,
                slots: r,
                visible: y.value === 0,
                features: Sn.RenderStrategy | Sn.Static,
                name: "Dialog"
            }))))))))))), je(G)]))
        }
    }
})
  , m0 = ve({
    name: "DialogOverlay",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        var r;
        let i = (r = e.id) != null ? r : `headlessui-dialog-overlay-${xt()}`
          , o = Lo("DialogOverlay");
        function a(s) {
            s.target === s.currentTarget && (s.preventDefault(),
            s.stopPropagation(),
            o.close())
        }
        return () => {
            let {...s} = e;
            return Ke({
                ourProps: {
                    id: i,
                    "aria-hidden": !0,
                    onClick: a
                },
                theirProps: s,
                slot: {
                    open: o.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogOverlay"
            })
        }
    }
})
  , p0 = ve({
    name: "DialogPanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        var i;
        let o = (i = e.id) != null ? i : `headlessui-dialog-panel-${xt()}`
          , a = Lo("DialogPanel");
        r({
            el: a.panelRef,
            $el: a.panelRef
        });
        function s(l) {
            l.stopPropagation()
        }
        return () => {
            let {...l} = e
              , d = {
                id: o,
                ref: a.panelRef,
                onClick: s
            };
            return Ke({
                ourProps: d,
                theirProps: l,
                slot: {
                    open: a.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogPanel"
            })
        }
    }
})
  , yr = ve({
    name: "DialogTitle",
    props: {
        as: {
            type: [Object, String],
            default: "h2"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n}) {
        var r;
        let i = (r = e.id) != null ? r : `headlessui-dialog-title-${xt()}`
          , o = Lo("DialogTitle");
        return Ue(( () => {
            o.setTitleId(i),
            rt(( () => o.setTitleId(null)))
        }
        )),
        () => {
            let {...a} = e;
            return Ke({
                ourProps: {
                    id: i
                },
                theirProps: a,
                slot: {
                    open: o.dialogState.value === 0
                },
                attrs: t,
                slots: n,
                name: "DialogTitle"
            })
        }
    }
})
  , Zc = Yc;
var h0 = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(h0 || {});
let Jc = Symbol("DisclosureContext");
function Rs(e) {
    let t = Be(Jc, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Rs),
        n
    }
    return t
}
let Qc = Symbol("DisclosurePanelContext");
function b0() {
    return Be(Qc, null)
}
let v0 = ve({
    name: "Disclosure",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        defaultOpen: {
            type: [Boolean],
            default: !1
        }
    },
    setup(e, {slots: t, attrs: n}) {
        let r = W(e.defaultOpen ? 0 : 1)
          , i = W(null)
          , o = W(null)
          , a = {
            buttonId: W(`headlessui-disclosure-button-${xt()}`),
            panelId: W(`headlessui-disclosure-panel-${xt()}`),
            disclosureState: r,
            panel: i,
            button: o,
            toggleDisclosure() {
                r.value = Xe(r.value, {
                    0: 1,
                    1: 0
                })
            },
            closeDisclosure() {
                r.value !== 1 && (r.value = 1)
            },
            close(s) {
                a.closeDisclosure();
                let l = s ? s instanceof HTMLElement ? s : s.value instanceof HTMLElement ? ce(s) : ce(a.button) : ce(a.button);
                l == null || l.focus()
            }
        };
        return at(Jc, a),
        Ns(P(( () => Xe(r.value, {
            0: Ye.Open,
            1: Ye.Closed
        })))),
        () => {
            let {defaultOpen: s, ...l} = e
              , d = {
                open: r.value === 0,
                close: a.close
            };
            return Ke({
                theirProps: l,
                ourProps: {},
                slot: d,
                slots: t,
                attrs: n,
                name: "Disclosure"
            })
        }
    }
})
  , g0 = ve({
    name: "DisclosureButton",
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        let i = Rs("DisclosureButton")
          , o = b0()
          , a = P(( () => o === null ? !1 : o.value === i.panelId.value));
        Ue(( () => {
            a.value || e.id !== null && (i.buttonId.value = e.id)
        }
        )),
        rt(( () => {
            a.value || (i.buttonId.value = null)
        }
        ));
        let s = W(null);
        r({
            el: s,
            $el: s
        }),
        a.value || vt(( () => {
            i.button.value = s.value
        }
        ));
        let l = Fc(P(( () => ({
            as: e.as,
            type: t.type
        }))), s);
        function d() {
            var f;
            e.disabled || (a.value ? (i.toggleDisclosure(),
            (f = ce(i.button)) == null || f.focus()) : i.toggleDisclosure())
        }
        function u(f) {
            var m;
            if (!e.disabled)
                if (a.value)
                    switch (f.key) {
                    case De.Space:
                    case De.Enter:
                        f.preventDefault(),
                        f.stopPropagation(),
                        i.toggleDisclosure(),
                        (m = ce(i.button)) == null || m.focus();
                        break
                    }
                else
                    switch (f.key) {
                    case De.Space:
                    case De.Enter:
                        f.preventDefault(),
                        f.stopPropagation(),
                        i.toggleDisclosure();
                        break
                    }
        }
        function c(f) {
            switch (f.key) {
            case De.Space:
                f.preventDefault();
                break
            }
        }
        return () => {
            var f;
            let m = {
                open: i.disclosureState.value === 0
            }
              , {id: b, ...p} = e
              , y = a.value ? {
                ref: s,
                type: l.value,
                onClick: d,
                onKeydown: u
            } : {
                id: (f = i.buttonId.value) != null ? f : b,
                ref: s,
                type: l.value,
                "aria-expanded": i.disclosureState.value === 0,
                "aria-controls": i.disclosureState.value === 0 || ce(i.panel) ? i.panelId.value : void 0,
                disabled: e.disabled ? !0 : void 0,
                onClick: d,
                onKeydown: u,
                onKeyup: c
            };
            return Ke({
                ourProps: y,
                theirProps: p,
                slot: m,
                attrs: t,
                slots: n,
                name: "DisclosureButton"
            })
        }
    }
})
  , y0 = ve({
    name: "DisclosurePanel",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        let i = Rs("DisclosurePanel");
        Ue(( () => {
            e.id !== null && (i.panelId.value = e.id)
        }
        )),
        rt(( () => {
            i.panelId.value = null
        }
        )),
        r({
            el: i.panel,
            $el: i.panel
        }),
        at(Qc, i.panelId);
        let o = hi()
          , a = P(( () => o !== null ? (o.value & Ye.Open) === Ye.Open : i.disclosureState.value === 0));
        return () => {
            var s;
            let l = {
                open: i.disclosureState.value === 0,
                close: i.close
            }
              , {id: d, ...u} = e
              , c = {
                id: (s = i.panelId.value) != null ? s : d,
                ref: i.panel
            };
            return Ke({
                ourProps: c,
                theirProps: u,
                slot: l,
                attrs: t,
                slots: n,
                features: Sn.RenderStrategy | Sn.Static,
                visible: a.value,
                name: "DisclosurePanel"
            })
        }
    }
})
  , ld = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function dd(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : ""
      , i = e.cloneNode(!0);
    if (!(i instanceof HTMLElement))
        return r;
    let o = !1;
    for (let s of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
        s.remove(),
        o = !0;
    let a = o ? (n = i.innerText) != null ? n : "" : r;
    return ld.test(a) && (a = a.replace(ld, "")),
    a
}
function w0(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string")
        return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let r = n.split(" ").map((i => {
            let o = document.getElementById(i);
            if (o) {
                let a = o.getAttribute("aria-label");
                return typeof a == "string" ? a.trim() : dd(o).trim()
            }
            return null
        }
        )).filter(Boolean);
        if (r.length > 0)
            return r.join(", ")
    }
    return dd(e).trim()
}
function x0(e) {
    let t = W("")
      , n = W("");
    return () => {
        let r = ce(e);
        if (!r)
            return "";
        let i = r.innerText;
        if (t.value === i)
            return n.value;
        let o = w0(r).trim().toLowerCase();
        return t.value = i,
        n.value = o,
        o
    }
}
function k0(e, t) {
    return e === t
}
var _0 = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(_0 || {})
  , S0 = (e => (e[e.Single = 0] = "Single",
e[e.Multi = 1] = "Multi",
e))(S0 || {})
  , E0 = (e => (e[e.Pointer = 0] = "Pointer",
e[e.Other = 1] = "Other",
e))(E0 || {});
function C0(e) {
    requestAnimationFrame(( () => requestAnimationFrame(e)))
}
let ef = Symbol("ListboxContext");
function Fo(e) {
    let t = Be(ef, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Fo),
        n
    }
    return t
}
let tf = ve({
    name: "Listbox",
    emits: {
        "update:modelValue": e => !0
    },
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        by: {
            type: [String, Function],
            default: () => k0
        },
        horizontal: {
            type: [Boolean],
            default: !1
        },
        modelValue: {
            type: [Object, String, Number, Boolean],
            default: void 0
        },
        defaultValue: {
            type: [Object, String, Number, Boolean],
            default: void 0
        },
        form: {
            type: String,
            optional: !0
        },
        name: {
            type: String,
            optional: !0
        },
        multiple: {
            type: [Boolean],
            default: !1
        }
    },
    inheritAttrs: !1,
    setup(e, {slots: t, attrs: n, emit: r}) {
        let i = W(1)
          , o = W(null)
          , a = W(null)
          , s = W(null)
          , l = W([])
          , d = W("")
          , u = W(null)
          , c = W(1);
        function f(g=k => k) {
            let k = u.value !== null ? l.value[u.value] : null
              , O = Fs(g(l.value.slice()), (R => ce(R.dataRef.domRef)))
              , D = k ? O.indexOf(k) : null;
            return D === -1 && (D = null),
            {
                options: O,
                activeOptionIndex: D
            }
        }
        let m = P(( () => e.multiple ? 1 : 0))
          , [b,p] = Dc(P(( () => e.modelValue)), (g => r("update:modelValue", g)), P(( () => e.defaultValue)))
          , y = P(( () => b.value === void 0 ? Xe(m.value, {
            1: [],
            0: void 0
        }) : b.value))
          , v = {
            listboxState: i,
            value: y,
            mode: m,
            compare(g, k) {
                if (typeof e.by == "string") {
                    let O = e.by;
                    return (g == null ? void 0 : g[O]) === (k == null ? void 0 : k[O])
                }
                return e.by(g, k)
            },
            orientation: P(( () => e.horizontal ? "horizontal" : "vertical")),
            labelRef: o,
            buttonRef: a,
            optionsRef: s,
            disabled: P(( () => e.disabled)),
            options: l,
            searchQuery: d,
            activeOptionIndex: u,
            activationTrigger: c,
            closeListbox() {
                e.disabled || i.value !== 1 && (i.value = 1,
                u.value = null)
            },
            openListbox() {
                e.disabled || i.value !== 0 && (i.value = 0)
            },
            goToOption(g, k, O) {
                if (e.disabled || i.value === 1)
                    return;
                let D = f()
                  , R = Vh(g === ht.Specific ? {
                    focus: ht.Specific,
                    id: k
                } : {
                    focus: g
                }, {
                    resolveItems: () => D.options,
                    resolveActiveIndex: () => D.activeOptionIndex,
                    resolveId: G => G.id,
                    resolveDisabled: G => G.dataRef.disabled
                });
                d.value = "",
                u.value = R,
                c.value = O ?? 1,
                l.value = D.options
            },
            search(g) {
                if (e.disabled || i.value === 1)
                    return;
                let k = d.value !== "" ? 0 : 1;
                d.value += g.toLowerCase();
                let O = (u.value !== null ? l.value.slice(u.value + k).concat(l.value.slice(0, u.value + k)) : l.value).find((R => R.dataRef.textValue.startsWith(d.value) && !R.dataRef.disabled))
                  , D = O ? l.value.indexOf(O) : -1;
                D === -1 || D === u.value || (u.value = D,
                c.value = 1)
            },
            clearSearch() {
                e.disabled || i.value !== 1 && d.value !== "" && (d.value = "")
            },
            registerOption(g, k) {
                let O = f((D => [...D, {
                    id: g,
                    dataRef: k
                }]));
                l.value = O.options,
                u.value = O.activeOptionIndex
            },
            unregisterOption(g) {
                let k = f((O => {
                    let D = O.findIndex((R => R.id === g));
                    return D !== -1 && O.splice(D, 1),
                    O
                }
                ));
                l.value = k.options,
                u.value = k.activeOptionIndex,
                c.value = 1
            },
            theirOnChange(g) {
                e.disabled || p(g)
            },
            select(g) {
                e.disabled || p(Xe(m.value, {
                    0: () => g,
                    1: () => {
                        let k = se(v.value.value).slice()
                          , O = se(g)
                          , D = k.findIndex((R => v.compare(O, se(R))));
                        return D === -1 ? k.push(O) : k.splice(D, 1),
                        k
                    }
                }))
            }
        };
        Lc([a, s], ( (g, k) => {
            var O;
            v.closeListbox(),
            Pc(k, Ls.Loose) || (g.preventDefault(),
            (O = ce(a)) == null || O.focus())
        }
        ), P(( () => i.value === 0))),
        at(ef, v),
        Ns(P(( () => Xe(i.value, {
            0: Ye.Open,
            1: Ye.Closed
        }))));
        let w = P(( () => {
            var g;
            return (g = ce(a)) == null ? void 0 : g.closest("form")
        }
        ));
        return Ue(( () => {
            dt([w], ( () => {
                if (!w.value || e.defaultValue === void 0)
                    return;
                function g() {
                    v.theirOnChange(e.defaultValue)
                }
                return w.value.addEventListener("reset", g),
                () => {
                    var k;
                    (k = w.value) == null || k.removeEventListener("reset", g)
                }
            }
            ), {
                immediate: !0
            })
        }
        )),
        () => {
            let {name: g, modelValue: k, disabled: O, form: D, ...R} = e
              , G = {
                open: i.value === 0,
                disabled: O,
                value: y.value
            };
            return je(U, [...g != null && y.value != null ? Is({
                [g]: y.value
            }).map(( ([L,Z]) => je(ii, zc({
                features: mr.Hidden,
                key: L,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: D,
                disabled: O,
                name: L,
                value: Z
            })))) : [], Ke({
                ourProps: {},
                theirProps: {
                    ...n,
                    ...Mo(R, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"])
                },
                slot: G,
                slots: t,
                attrs: n,
                name: "Listbox"
            })])
        }
    }
})
  , nf = ve({
    name: "ListboxButton",
    props: {
        as: {
            type: [Object, String],
            default: "button"
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        var i;
        let o = (i = e.id) != null ? i : `headlessui-listbox-button-${xt()}`
          , a = Fo("ListboxButton");
        r({
            el: a.buttonRef,
            $el: a.buttonRef
        });
        function s(c) {
            switch (c.key) {
            case De.Space:
            case De.Enter:
            case De.ArrowDown:
                c.preventDefault(),
                a.openListbox(),
                tn(( () => {
                    var f;
                    (f = ce(a.optionsRef)) == null || f.focus({
                        preventScroll: !0
                    }),
                    a.value.value || a.goToOption(ht.First)
                }
                ));
                break;
            case De.ArrowUp:
                c.preventDefault(),
                a.openListbox(),
                tn(( () => {
                    var f;
                    (f = ce(a.optionsRef)) == null || f.focus({
                        preventScroll: !0
                    }),
                    a.value.value || a.goToOption(ht.Last)
                }
                ));
                break
            }
        }
        function l(c) {
            switch (c.key) {
            case De.Space:
                c.preventDefault();
                break
            }
        }
        function d(c) {
            a.disabled.value || (a.listboxState.value === 0 ? (a.closeListbox(),
            tn(( () => {
                var f;
                return (f = ce(a.buttonRef)) == null ? void 0 : f.focus({
                    preventScroll: !0
                })
            }
            ))) : (c.preventDefault(),
            a.openListbox(),
            C0(( () => {
                var f;
                return (f = ce(a.optionsRef)) == null ? void 0 : f.focus({
                    preventScroll: !0
                })
            }
            ))))
        }
        let u = Fc(P(( () => ({
            as: e.as,
            type: t.type
        }))), a.buttonRef);
        return () => {
            var c, f;
            let m = {
                open: a.listboxState.value === 0,
                disabled: a.disabled.value,
                value: a.value.value
            }
              , {...b} = e
              , p = {
                ref: a.buttonRef,
                id: o,
                type: u.value,
                "aria-haspopup": "listbox",
                "aria-controls": (c = ce(a.optionsRef)) == null ? void 0 : c.id,
                "aria-expanded": a.listboxState.value === 0,
                "aria-labelledby": a.labelRef.value ? [(f = ce(a.labelRef)) == null ? void 0 : f.id, o].join(" ") : void 0,
                disabled: a.disabled.value === !0 ? !0 : void 0,
                onKeydown: s,
                onKeyup: l,
                onClick: d
            };
            return Ke({
                ourProps: p,
                theirProps: b,
                slot: m,
                attrs: t,
                slots: n,
                name: "ListboxButton"
            })
        }
    }
})
  , rf = ve({
    name: "ListboxOptions",
    props: {
        as: {
            type: [Object, String],
            default: "ul"
        },
        static: {
            type: Boolean,
            default: !1
        },
        unmount: {
            type: Boolean,
            default: !0
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        var i;
        let o = (i = e.id) != null ? i : `headlessui-listbox-options-${xt()}`
          , a = Fo("ListboxOptions")
          , s = W(null);
        r({
            el: a.optionsRef,
            $el: a.optionsRef
        });
        function l(c) {
            switch (s.value && clearTimeout(s.value),
            c.key) {
            case De.Space:
                if (a.searchQuery.value !== "")
                    return c.preventDefault(),
                    c.stopPropagation(),
                    a.search(c.key);
            case De.Enter:
                if (c.preventDefault(),
                c.stopPropagation(),
                a.activeOptionIndex.value !== null) {
                    let f = a.options.value[a.activeOptionIndex.value];
                    a.select(f.dataRef.value)
                }
                a.mode.value === 0 && (a.closeListbox(),
                tn(( () => {
                    var f;
                    return (f = ce(a.buttonRef)) == null ? void 0 : f.focus({
                        preventScroll: !0
                    })
                }
                )));
                break;
            case Xe(a.orientation.value, {
                vertical: De.ArrowDown,
                horizontal: De.ArrowRight
            }):
                return c.preventDefault(),
                c.stopPropagation(),
                a.goToOption(ht.Next);
            case Xe(a.orientation.value, {
                vertical: De.ArrowUp,
                horizontal: De.ArrowLeft
            }):
                return c.preventDefault(),
                c.stopPropagation(),
                a.goToOption(ht.Previous);
            case De.Home:
            case De.PageUp:
                return c.preventDefault(),
                c.stopPropagation(),
                a.goToOption(ht.First);
            case De.End:
            case De.PageDown:
                return c.preventDefault(),
                c.stopPropagation(),
                a.goToOption(ht.Last);
            case De.Escape:
                c.preventDefault(),
                c.stopPropagation(),
                a.closeListbox(),
                tn(( () => {
                    var f;
                    return (f = ce(a.buttonRef)) == null ? void 0 : f.focus({
                        preventScroll: !0
                    })
                }
                ));
                break;
            case De.Tab:
                c.preventDefault(),
                c.stopPropagation();
                break;
            default:
                c.key.length === 1 && (a.search(c.key),
                s.value = setTimeout(( () => a.clearSearch()), 350));
                break
            }
        }
        let d = hi()
          , u = P(( () => d !== null ? (d.value & Ye.Open) === Ye.Open : a.listboxState.value === 0));
        return () => {
            var c, f;
            let m = {
                open: a.listboxState.value === 0
            }
              , {...b} = e
              , p = {
                "aria-activedescendant": a.activeOptionIndex.value === null || (c = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : c.id,
                "aria-multiselectable": a.mode.value === 1 ? !0 : void 0,
                "aria-labelledby": (f = ce(a.buttonRef)) == null ? void 0 : f.id,
                "aria-orientation": a.orientation.value,
                id: o,
                onKeydown: l,
                role: "listbox",
                tabIndex: 0,
                ref: a.optionsRef
            };
            return Ke({
                ourProps: p,
                theirProps: b,
                slot: m,
                attrs: t,
                slots: n,
                features: Sn.RenderStrategy | Sn.Static,
                visible: u.value,
                name: "ListboxOptions"
            })
        }
    }
})
  , of = ve({
    name: "ListboxOption",
    props: {
        as: {
            type: [Object, String],
            default: "li"
        },
        value: {
            type: [Object, String, Number, Boolean]
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {slots: t, attrs: n, expose: r}) {
        var i;
        let o = (i = e.id) != null ? i : `headlessui-listbox-option-${xt()}`
          , a = Fo("ListboxOption")
          , s = W(null);
        r({
            el: s,
            $el: s
        });
        let l = P(( () => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === o : !1))
          , d = P(( () => Xe(a.mode.value, {
            0: () => a.compare(se(a.value.value), se(e.value)),
            1: () => se(a.value.value).some((g => a.compare(se(g), se(e.value))))
        })))
          , u = P(( () => Xe(a.mode.value, {
            1: () => {
                var g;
                let k = se(a.value.value);
                return ((g = a.options.value.find((O => k.some((D => a.compare(se(D), se(O.dataRef.value))))))) == null ? void 0 : g.id) === o
            }
            ,
            0: () => d.value
        })))
          , c = x0(s)
          , f = P(( () => ({
            disabled: e.disabled,
            value: e.value,
            get textValue() {
                return c()
            },
            domRef: s
        })));
        Ue(( () => a.registerOption(o, f))),
        rt(( () => a.unregisterOption(o))),
        Ue(( () => {
            dt([a.listboxState, d], ( () => {
                a.listboxState.value === 0 && d.value && Xe(a.mode.value, {
                    1: () => {
                        u.value && a.goToOption(ht.Specific, o)
                    }
                    ,
                    0: () => {
                        a.goToOption(ht.Specific, o)
                    }
                })
            }
            ), {
                immediate: !0
            })
        }
        )),
        vt(( () => {
            a.listboxState.value === 0 && l.value && a.activationTrigger.value !== 0 && tn(( () => {
                var g, k;
                return (k = (g = ce(s)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : k.call(g, {
                    block: "nearest"
                })
            }
            ))
        }
        ));
        function m(g) {
            if (e.disabled)
                return g.preventDefault();
            a.select(e.value),
            a.mode.value === 0 && (a.closeListbox(),
            tn(( () => {
                var k;
                return (k = ce(a.buttonRef)) == null ? void 0 : k.focus({
                    preventScroll: !0
                })
            }
            )))
        }
        function b() {
            if (e.disabled)
                return a.goToOption(ht.Nothing);
            a.goToOption(ht.Specific, o)
        }
        let p = Fh();
        function y(g) {
            p.update(g)
        }
        function v(g) {
            p.wasMoved(g) && (e.disabled || l.value || a.goToOption(ht.Specific, o, 0))
        }
        function w(g) {
            p.wasMoved(g) && (e.disabled || l.value && a.goToOption(ht.Nothing))
        }
        return () => {
            let {disabled: g} = e
              , k = {
                active: l.value,
                selected: d.value,
                disabled: g
            }
              , {value: O, disabled: D, ...R} = e
              , G = {
                id: o,
                ref: s,
                role: "option",
                tabIndex: g === !0 ? void 0 : -1,
                "aria-disabled": g === !0 ? !0 : void 0,
                "aria-selected": d.value,
                disabled: void 0,
                onClick: m,
                onFocus: b,
                onPointerenter: y,
                onMouseenter: y,
                onPointermove: v,
                onMousemove: v,
                onPointerleave: w,
                onMouseleave: w
            };
            return Ke({
                ourProps: G,
                theirProps: R,
                slot: k,
                attrs: n,
                slots: t,
                name: "ListboxOption"
            })
        }
    }
})
  , af = Symbol("LabelContext");
function sf() {
    let e = Be(af, null);
    if (e === null) {
        let t = new Error("You used a <Label /> component, but it is not inside a parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, sf),
        t
    }
    return e
}
function lf({slot: e={}, name: t="Label", props: n={}}={}) {
    let r = W([]);
    function i(o) {
        return r.value.push(o),
        () => {
            let a = r.value.indexOf(o);
            a !== -1 && r.value.splice(a, 1)
        }
    }
    return at(af, {
        register: i,
        slot: e,
        name: t,
        props: n
    }),
    P(( () => r.value.length > 0 ? r.value.join(" ") : void 0))
}
let T0 = ve({
    name: "Label",
    props: {
        as: {
            type: [Object, String],
            default: "label"
        },
        passive: {
            type: [Boolean],
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {slots: t, attrs: n}) {
        var r;
        let i = (r = e.id) != null ? r : `headlessui-label-${xt()}`
          , o = sf();
        return Ue(( () => rt(o.register(i)))),
        () => {
            let {name: a="Label", slot: s={}, props: l={}} = o
              , {passive: d, ...u} = e
              , c = {
                ...Object.entries(l).reduce(( (f, [m,b]) => Object.assign(f, {
                    [m]: Xr(b)
                })), {}),
                id: i
            };
            return d && (delete c.onClick,
            delete c.htmlFor,
            delete u.onClick),
            Ke({
                ourProps: c,
                theirProps: u,
                slot: s,
                attrs: n,
                slots: t,
                name: a
            })
        }
    }
});
function O0(e, t) {
    return e === t
}
let df = Symbol("RadioGroupContext");
function uf(e) {
    let t = Be(df, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, uf),
        n
    }
    return t
}
let cf = ve({
    name: "RadioGroup",
    emits: {
        "update:modelValue": e => !0
    },
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        disabled: {
            type: [Boolean],
            default: !1
        },
        by: {
            type: [String, Function],
            default: () => O0
        },
        modelValue: {
            type: [Object, String, Number, Boolean],
            default: void 0
        },
        defaultValue: {
            type: [Object, String, Number, Boolean],
            default: void 0
        },
        form: {
            type: String,
            optional: !0
        },
        name: {
            type: String,
            optional: !0
        },
        id: {
            type: String,
            default: null
        }
    },
    inheritAttrs: !1,
    setup(e, {emit: t, attrs: n, slots: r, expose: i}) {
        var o;
        let a = (o = e.id) != null ? o : `headlessui-radiogroup-${xt()}`
          , s = W(null)
          , l = W([])
          , d = lf({
            name: "RadioGroupLabel"
        })
          , u = zs({
            name: "RadioGroupDescription"
        });
        i({
            el: s,
            $el: s
        });
        let[c,f] = Dc(P(( () => e.modelValue)), (y => t("update:modelValue", y)), P(( () => e.defaultValue)))
          , m = {
            options: l,
            value: c,
            disabled: P(( () => e.disabled)),
            firstOption: P(( () => l.value.find((y => !y.propsRef.disabled)))),
            containsCheckedOption: P(( () => l.value.some((y => m.compare(se(y.propsRef.value), se(e.modelValue)))))),
            compare(y, v) {
                if (typeof e.by == "string") {
                    let w = e.by;
                    return (y == null ? void 0 : y[w]) === (v == null ? void 0 : v[w])
                }
                return e.by(y, v)
            },
            change(y) {
                var v;
                if (e.disabled || m.compare(se(c.value), se(y)))
                    return !1;
                let w = (v = l.value.find((g => m.compare(se(g.propsRef.value), se(y))))) == null ? void 0 : v.propsRef;
                return w != null && w.disabled ? !1 : (f(y),
                !0)
            },
            registerOption(y) {
                l.value.push(y),
                l.value = Fs(l.value, (v => v.element))
            },
            unregisterOption(y) {
                let v = l.value.findIndex((w => w.id === y));
                v !== -1 && l.value.splice(v, 1)
            }
        };
        at(df, m),
        Nh({
            container: P(( () => ce(s))),
            accept(y) {
                return y.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            },
            walk(y) {
                y.setAttribute("role", "none")
            }
        });
        function b(y) {
            if (!s.value || !s.value.contains(y.target))
                return;
            let v = l.value.filter((w => w.propsRef.disabled === !1)).map((w => w.element));
            switch (y.key) {
            case De.Enter:
                Uh(y.currentTarget);
                break;
            case De.ArrowLeft:
            case De.ArrowUp:
                if (y.preventDefault(),
                y.stopPropagation(),
                ur(v, Ot.Previous | Ot.WrapAround) === to.Success) {
                    let w = l.value.find((g => {
                        var k;
                        return g.element === ((k = Gt(s)) == null ? void 0 : k.activeElement)
                    }
                    ));
                    w && m.change(w.propsRef.value)
                }
                break;
            case De.ArrowRight:
            case De.ArrowDown:
                if (y.preventDefault(),
                y.stopPropagation(),
                ur(v, Ot.Next | Ot.WrapAround) === to.Success) {
                    let w = l.value.find((g => {
                        var k;
                        return g.element === ((k = Gt(g.element)) == null ? void 0 : k.activeElement)
                    }
                    ));
                    w && m.change(w.propsRef.value)
                }
                break;
            case De.Space:
                {
                    y.preventDefault(),
                    y.stopPropagation();
                    let w = l.value.find((g => {
                        var k;
                        return g.element === ((k = Gt(g.element)) == null ? void 0 : k.activeElement)
                    }
                    ));
                    w && m.change(w.propsRef.value)
                }
                break
            }
        }
        let p = P(( () => {
            var y;
            return (y = ce(s)) == null ? void 0 : y.closest("form")
        }
        ));
        return Ue(( () => {
            dt([p], ( () => {
                if (!p.value || e.defaultValue === void 0)
                    return;
                function y() {
                    m.change(e.defaultValue)
                }
                return p.value.addEventListener("reset", y),
                () => {
                    var v;
                    (v = p.value) == null || v.removeEventListener("reset", y)
                }
            }
            ), {
                immediate: !0
            })
        }
        )),
        () => {
            let {disabled: y, name: v, form: w, ...g} = e
              , k = {
                ref: s,
                id: a,
                role: "radiogroup",
                "aria-labelledby": d.value,
                "aria-describedby": u.value,
                onKeydown: b
            };
            return je(U, [...v != null && c.value != null ? Is({
                [v]: c.value
            }).map(( ([O,D]) => je(ii, zc({
                features: mr.Hidden,
                key: O,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: w,
                disabled: y,
                name: O,
                value: D
            })))) : [], Ke({
                ourProps: k,
                theirProps: {
                    ...n,
                    ...Mo(g, ["modelValue", "defaultValue", "by"])
                },
                slot: {},
                attrs: n,
                slots: r,
                name: "RadioGroup"
            })])
        }
    }
});
var A0 = (e => (e[e.Empty = 1] = "Empty",
e[e.Active = 2] = "Active",
e))(A0 || {});
let ff = ve({
    name: "RadioGroupOption",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        value: {
            type: [Object, String, Number, Boolean]
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        id: {
            type: String,
            default: null
        }
    },
    setup(e, {attrs: t, slots: n, expose: r}) {
        var i;
        let o = (i = e.id) != null ? i : `headlessui-radiogroup-option-${xt()}`
          , a = uf("RadioGroupOption")
          , s = lf({
            name: "RadioGroupLabel"
        })
          , l = zs({
            name: "RadioGroupDescription"
        })
          , d = W(null)
          , u = P(( () => ({
            value: e.value,
            disabled: e.disabled
        })))
          , c = W(1);
        r({
            el: d,
            $el: d
        });
        let f = P(( () => ce(d)));
        Ue(( () => a.registerOption({
            id: o,
            element: f,
            propsRef: u
        }))),
        rt(( () => a.unregisterOption(o)));
        let m = P(( () => {
            var k;
            return ((k = a.firstOption.value) == null ? void 0 : k.id) === o
        }
        ))
          , b = P(( () => a.disabled.value || e.disabled))
          , p = P(( () => a.compare(se(a.value.value), se(e.value))))
          , y = P(( () => b.value ? -1 : p.value || !a.containsCheckedOption.value && m.value ? 0 : -1));
        function v() {
            var k;
            a.change(e.value) && (c.value |= 2,
            (k = ce(d)) == null || k.focus())
        }
        function w() {
            c.value |= 2
        }
        function g() {
            c.value &= -3
        }
        return () => {
            let {value: k, disabled: O, ...D} = e
              , R = {
                checked: p.value,
                disabled: b.value,
                active: !!(c.value & 2)
            }
              , G = {
                id: o,
                ref: d,
                role: "radio",
                "aria-checked": p.value ? "true" : "false",
                "aria-labelledby": s.value,
                "aria-describedby": l.value,
                "aria-disabled": b.value ? !0 : void 0,
                tabIndex: y.value,
                onClick: b.value ? void 0 : v,
                onFocus: b.value ? void 0 : w,
                onBlur: b.value ? void 0 : g
            };
            return Ke({
                ourProps: G,
                theirProps: D,
                slot: R,
                attrs: t,
                slots: n,
                name: "RadioGroupOption"
            })
        }
    }
})
  , mf = T0
  , pf = Yc;
function D0(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called)
            return t.called = !0,
            e(...n)
    }
}
function ha(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}
function Ai(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var Ha = (e => (e.Finished = "finished",
e.Cancelled = "cancelled",
e))(Ha || {});
function P0(e, t) {
    let n = mi();
    if (!e)
        return n.dispose;
    let {transitionDuration: r, transitionDelay: i} = getComputedStyle(e)
      , [o,a] = [r, i].map((s => {
        let[l=0] = s.split(",").filter(Boolean).map((d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3)).sort(( (d, u) => u - d));
        return l
    }
    ));
    return o !== 0 ? n.setTimeout(( () => t("finished")), o + a) : t("finished"),
    n.add(( () => t("cancelled"))),
    n.dispose
}
function ud(e, t, n, r, i, o) {
    let a = mi()
      , s = o !== void 0 ? D0(o) : () => {}
    ;
    return Ai(e, ...i),
    ha(e, ...t, ...n),
    a.nextFrame(( () => {
        Ai(e, ...n),
        ha(e, ...r),
        a.add(P0(e, (l => (Ai(e, ...r, ...t),
        ha(e, ...i),
        s(l)))))
    }
    )),
    a.add(( () => Ai(e, ...t, ...n, ...r, ...i))),
    a.add(( () => s("cancelled"))),
    a.dispose
}
function Mn(e="") {
    return e.split(/\s+/).filter((t => t.length > 1))
}
let js = Symbol("TransitionContext");
var $0 = (e => (e.Visible = "visible",
e.Hidden = "hidden",
e))($0 || {});
function M0() {
    return Be(js, null) !== null
}
function L0() {
    let e = Be(js, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
function F0() {
    let e = Be(Vs, null);
    if (e === null)
        throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
let Vs = Symbol("NestingContext");
function No(e) {
    return "children"in e ? No(e.children) : e.value.filter(( ({state: t}) => t === "visible")).length > 0
}
function hf(e) {
    let t = W([])
      , n = W(!1);
    Ue(( () => n.value = !0)),
    rt(( () => n.value = !1));
    function r(o, a=wn.Hidden) {
        let s = t.value.findIndex(( ({id: l}) => l === o));
        s !== -1 && (Xe(a, {
            [wn.Unmount]() {
                t.value.splice(s, 1)
            },
            [wn.Hidden]() {
                t.value[s].state = "hidden"
            }
        }),
        !No(t) && n.value && (e == null || e()))
    }
    function i(o) {
        let a = t.value.find(( ({id: s}) => s === o));
        return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({
            id: o,
            state: "visible"
        }),
        () => r(o, wn.Unmount)
    }
    return {
        children: t,
        register: i,
        unregister: r
    }
}
let bf = Sn.RenderStrategy
  , vf = ve({
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: r, expose: i}) {
        let o = W(0);
        function a() {
            o.value |= Ye.Opening,
            t("beforeEnter")
        }
        function s() {
            o.value &= ~Ye.Opening,
            t("afterEnter")
        }
        function l() {
            o.value |= Ye.Closing,
            t("beforeLeave")
        }
        function d() {
            o.value &= ~Ye.Closing,
            t("afterLeave")
        }
        if (!M0() && zh())
            return () => je(gf, {
                ...e,
                onBeforeEnter: a,
                onAfterEnter: s,
                onBeforeLeave: l,
                onAfterLeave: d
            }, r);
        let u = W(null)
          , c = P(( () => e.unmount ? wn.Unmount : wn.Hidden));
        i({
            el: u,
            $el: u
        });
        let {show: f, appear: m} = L0()
          , {register: b, unregister: p} = F0()
          , y = W(f.value ? "visible" : "hidden")
          , v = {
            value: !0
        }
          , w = xt()
          , g = {
            value: !1
        }
          , k = hf(( () => {
            !g.value && y.value !== "hidden" && (y.value = "hidden",
            p(w),
            d())
        }
        ));
        Ue(( () => {
            let re = b(w);
            rt(re)
        }
        )),
        vt(( () => {
            if (c.value === wn.Hidden && w) {
                if (f.value && y.value !== "visible") {
                    y.value = "visible";
                    return
                }
                Xe(y.value, {
                    hidden: () => p(w),
                    visible: () => b(w)
                })
            }
        }
        ));
        let O = Mn(e.enter)
          , D = Mn(e.enterFrom)
          , R = Mn(e.enterTo)
          , G = Mn(e.entered)
          , L = Mn(e.leave)
          , Z = Mn(e.leaveFrom)
          , q = Mn(e.leaveTo);
        Ue(( () => {
            vt(( () => {
                if (y.value === "visible") {
                    let re = ce(u);
                    if (re instanceof Comment && re.data === "")
                        throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                }
            }
            ))
        }
        ));
        function $(re) {
            let he = v.value && !m.value
              , Te = ce(u);
            !Te || !(Te instanceof HTMLElement) || he || (g.value = !0,
            f.value && a(),
            f.value || l(),
            re(f.value ? ud(Te, O, D, R, G, (ge => {
                g.value = !1,
                ge === Ha.Finished && s()
            }
            )) : ud(Te, L, Z, q, G, (ge => {
                g.value = !1,
                ge === Ha.Finished && (No(k) || (y.value = "hidden",
                p(w),
                d()))
            }
            ))))
        }
        return Ue(( () => {
            dt([f], ( (re, he, Te) => {
                $(Te),
                v.value = !1
            }
            ), {
                immediate: !0
            })
        }
        )),
        at(Vs, k),
        Ns(P(( () => Xe(y.value, {
            visible: Ye.Open,
            hidden: Ye.Closed
        }) | o.value))),
        () => {
            let {appear: re, show: he, enter: Te, enterFrom: ge, enterTo: K, entered: ue, leave: ze, leaveFrom: Je, leaveTo: ie, ...pe} = e
              , qe = {
                ref: u
            }
              , Oe = {
                ...pe,
                ...m.value && f.value && pi.isServer ? {
                    class: ye([n.class, pe.class, ...O, ...D])
                } : {}
            };
            return Ke({
                theirProps: Oe,
                ourProps: qe,
                slot: {},
                slots: r,
                attrs: n,
                features: bf,
                visible: y.value === "visible",
                name: "TransitionChild"
            })
        }
    }
})
  , N0 = vf
  , gf = ve({
    inheritAttrs: !1,
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        show: {
            type: [Boolean],
            default: null
        },
        unmount: {
            type: [Boolean],
            default: !0
        },
        appear: {
            type: [Boolean],
            default: !1
        },
        enter: {
            type: [String],
            default: ""
        },
        enterFrom: {
            type: [String],
            default: ""
        },
        enterTo: {
            type: [String],
            default: ""
        },
        entered: {
            type: [String],
            default: ""
        },
        leave: {
            type: [String],
            default: ""
        },
        leaveFrom: {
            type: [String],
            default: ""
        },
        leaveTo: {
            type: [String],
            default: ""
        }
    },
    emits: {
        beforeEnter: () => !0,
        afterEnter: () => !0,
        beforeLeave: () => !0,
        afterLeave: () => !0
    },
    setup(e, {emit: t, attrs: n, slots: r}) {
        let i = hi()
          , o = P(( () => e.show === null && i !== null ? (i.value & Ye.Open) === Ye.Open : e.show));
        vt(( () => {
            if (![!0, !1].includes(o.value))
                throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
        }
        ));
        let a = W(o.value ? "visible" : "hidden")
          , s = hf(( () => {
            a.value = "hidden"
        }
        ))
          , l = W(!0)
          , d = {
            show: o,
            appear: P(( () => e.appear || !l.value))
        };
        return Ue(( () => {
            vt(( () => {
                l.value = !1,
                o.value ? a.value = "visible" : No(s) || (a.value = "hidden")
            }
            ))
        }
        )),
        at(Vs, s),
        at(js, d),
        () => {
            let u = Mo(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"])
              , c = {
                unmount: e.unmount
            };
            return Ke({
                ourProps: {
                    ...c,
                    as: "template"
                },
                theirProps: {},
                slot: {},
                slots: {
                    ...r,
                    default: () => [je(N0, {
                        onBeforeEnter: () => t("beforeEnter"),
                        onAfterEnter: () => t("afterEnter"),
                        onBeforeLeave: () => t("beforeLeave"),
                        onAfterLeave: () => t("afterLeave"),
                        ...n,
                        ...c,
                        ...u
                    }, r.default)]
                },
                attrs: {},
                features: bf,
                visible: a.value === "visible",
                name: "Transition"
            })
        }
    }
});
function cd() {
    const {state: e, send: t} = Nt();
    function n() {
        const i = new URLSearchParams(window.location.search)
          , o = {};
        i.forEach(( (s, l) => {
            o[l] = s
        }
        ));
        const a = o.affiliate || o.aff;
        return a && (o.affiliate = a),
        o
    }
    const r = n();
    document.querySelectorAll("[data-sell-store][data-sell-product]").forEach((i => {
        r.affiliate && !i.hasAttribute("data-sell-affiliate") && i.setAttribute("data-sell-affiliate", r.affiliate),
        i.addEventListener("click", ( () => {
            var p, y, v, w, g, k, O, D;
            if (!e.value.matches("closed"))
                return;
            const o = i.attributes["data-sell-store"].value
              , a = i.attributes["data-sell-product"].value
              , s = (p = i.attributes["data-sell-variant"]) == null ? void 0 : p.value
              , l = (y = i.attributes["data-sell-coupon"]) == null ? void 0 : y.value
              , d = (v = i.attributes["data-sell-extra"]) == null ? void 0 : v.value
              , u = (w = i.attributes["data-sell-quantity"]) == null ? void 0 : w.value
              , c = (g = i.attributes["data-sell-email"]) == null ? void 0 : g.value
              , f = ((k = i.attributes["data-sell-darkmode"]) == null ? void 0 : k.value) === "true"
              , m = (O = i.attributes["data-sell-theme"]) == null ? void 0 : O.value
              , b = (D = i.attributes["data-sell-affiliate"]) == null ? void 0 : D.value;
            t({
                type: "OPEN",
                store_id: o,
                product_id: a,
                variant_id: s,
                coupon: l,
                extra: d,
                quantity: u,
                email: c,
                affiliate: b,
                customization: {
                    darkMode: f,
                    theme: m
                }
            })
        }
        ))
    }
    ))
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var j = function() {
    return j = Object.assign || function(t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
        }
        return t
    }
    ,
    j.apply(this, arguments)
};
function Us(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
function we(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , n = t && e[t]
      , r = 0;
    if (n)
        return n.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && r >= e.length && (e = void 0),
                {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function Se(e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n)
        return e;
    var r = n.call(e), i, o = [], a;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; )
            o.push(i.value)
    } catch (s) {
        a = {
            error: s
        }
    } finally {
        try {
            i && !i.done && (n = r.return) && n.call(r)
        } finally {
            if (a)
                throw a.error
        }
    }
    return o
}
function Re(e, t, n) {
    if (arguments.length === 2)
        for (var r = 0, i = t.length, o; r < i; r++)
            (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)),
            o[r] = t[r]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var $e;
(function(e) {
    e.Start = "xstate.start",
    e.Stop = "xstate.stop",
    e.Raise = "xstate.raise",
    e.Send = "xstate.send",
    e.Cancel = "xstate.cancel",
    e.NullEvent = "",
    e.Assign = "xstate.assign",
    e.After = "xstate.after",
    e.DoneState = "done.state",
    e.DoneInvoke = "done.invoke",
    e.Log = "xstate.log",
    e.Init = "xstate.init",
    e.Invoke = "xstate.invoke",
    e.ErrorExecution = "error.execution",
    e.ErrorCommunication = "error.communication",
    e.ErrorPlatform = "error.platform",
    e.ErrorCustom = "xstate.error",
    e.Update = "xstate.update",
    e.Pure = "xstate.pure",
    e.Choose = "xstate.choose"
}
)($e || ($e = {}));
var En;
(function(e) {
    e.Parent = "#_parent",
    e.Internal = "#_internal"
}
)(En || (En = {}));
var no = $e.Start
  , Io = $e.Stop
  , wr = $e.Raise
  , bi = $e.Send
  , Bs = $e.Cancel
  , yf = $e.NullEvent
  , zo = $e.Assign
  , I0 = $e.After
  , z0 = $e.DoneState
  , Ro = $e.Log
  , wf = $e.Init
  , ro = $e.Invoke
  , R0 = $e.ErrorExecution
  , qa = $e.ErrorPlatform
  , Hs = $e.ErrorCustom
  , jo = $e.Update
  , xf = $e.Choose
  , kf = $e.Pure;
const j0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    after: I0,
    assign: zo,
    cancel: Bs,
    choose: xf,
    doneState: z0,
    error: Hs,
    errorExecution: R0,
    errorPlatform: qa,
    init: wf,
    invoke: ro,
    log: Ro,
    nullEvent: yf,
    pure: kf,
    raise: wr,
    send: bi,
    start: no,
    stop: Io,
    update: jo
}, Symbol.toStringTag, {
    value: "Module"
}));
var _f = ".", fd = {}, Wa = "xstate.guard", V0 = "", Di;
function qs(e, t, n) {
    n === void 0 && (n = _f);
    var r = Hr(e, n)
      , i = Hr(t, n);
    return Pe(i) ? Pe(r) ? i === r : !1 : Pe(r) ? r in i : Object.keys(r).every((function(o) {
        return o in i ? qs(r[o], i[o]) : !1
    }
    ))
}
function Sf(e) {
    try {
        return Pe(e) || typeof e == "number" ? "".concat(e) : e.type
    } catch {
        throw new Error("Events must be strings or objects with a string event.type property.")
    }
}
function Ga(e, t) {
    try {
        return xr(e) ? e : e.toString().split(t)
    } catch {
        throw new Error("'".concat(e, "' is not a valid state path."))
    }
}
function U0(e) {
    return typeof e == "object" && "value"in e && "context"in e && "event"in e && "_event"in e
}
function Hr(e, t) {
    if (U0(e))
        return e.value;
    if (xr(e))
        return io(e);
    if (typeof e != "string")
        return e;
    var n = Ga(e, t);
    return io(n)
}
function io(e) {
    if (e.length === 1)
        return e[0];
    for (var t = {}, n = t, r = 0; r < e.length - 1; r++)
        r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {},
        n = n[e[r]]);
    return t
}
function $r(e, t) {
    for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) {
        var o = r[i];
        n[o] = t(e[o], o, e, i)
    }
    return n
}
function md(e, t, n) {
    var r, i, o = {};
    try {
        for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
            var l = s.value
              , d = e[l];
            n(d) && (o[l] = t(d, l, e))
        }
    } catch (u) {
        r = {
            error: u
        }
    } finally {
        try {
            s && !s.done && (i = a.return) && i.call(a)
        } finally {
            if (r)
                throw r.error
        }
    }
    return o
}
var B0 = function(e) {
    return function(t) {
        var n, r, i = t;
        try {
            for (var o = we(e), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                i = i[s]
            }
        } catch (l) {
            n = {
                error: l
            }
        } finally {
            try {
                a && !a.done && (r = o.return) && r.call(o)
            } finally {
                if (n)
                    throw n.error
            }
        }
        return i
    }
};
function H0(e, t) {
    return function(n) {
        var r, i, o = n;
        try {
            for (var a = we(e), s = a.next(); !s.done; s = a.next()) {
                var l = s.value;
                o = o[t][l]
            }
        } catch (d) {
            r = {
                error: d
            }
        } finally {
            try {
                s && !s.done && (i = a.return) && i.call(a)
            } finally {
                if (r)
                    throw r.error
            }
        }
        return o
    }
}
function Hi(e) {
    if (!e)
        return [[]];
    if (Pe(e))
        return [[e]];
    var t = We(Object.keys(e).map((function(n) {
        var r = e[n];
        return typeof r != "string" && (!r || !Object.keys(r).length) ? [[n]] : Hi(e[n]).map((function(i) {
            return [n].concat(i)
        }
        ))
    }
    )));
    return t
}
function We(e) {
    var t;
    return (t = []).concat.apply(t, Re([], Se(e), !1))
}
function Ef(e) {
    return xr(e) ? e : [e]
}
function Pt(e) {
    return e === void 0 ? [] : Ef(e)
}
function oo(e, t, n) {
    var r, i;
    if (Ce(e))
        return e(t, n.data);
    var o = {};
    try {
        for (var a = we(Object.keys(e)), s = a.next(); !s.done; s = a.next()) {
            var l = s.value
              , d = e[l];
            Ce(d) ? o[l] = d(t, n.data) : o[l] = d
        }
    } catch (u) {
        r = {
            error: u
        }
    } finally {
        try {
            s && !s.done && (i = a.return) && i.call(a)
        } finally {
            if (r)
                throw r.error
        }
    }
    return o
}
function q0(e) {
    return /^(done|error)\./.test(e)
}
function pd(e) {
    return !!(e instanceof Promise || e !== null && (Ce(e) || typeof e == "object") && Ce(e.then))
}
function W0(e) {
    return e !== null && typeof e == "object" && "transition"in e && typeof e.transition == "function"
}
function G0(e, t) {
    var n, r, i = Se([[], []], 2), o = i[0], a = i[1];
    try {
        for (var s = we(e), l = s.next(); !l.done; l = s.next()) {
            var d = l.value;
            t(d) ? o.push(d) : a.push(d)
        }
    } catch (u) {
        n = {
            error: u
        }
    } finally {
        try {
            l && !l.done && (r = s.return) && r.call(s)
        } finally {
            if (n)
                throw n.error
        }
    }
    return [o, a]
}
function Cf(e, t) {
    return $r(e.states, (function(n, r) {
        if (n) {
            var i = (Pe(t) ? void 0 : t[r]) || (n ? n.current : void 0);
            if (i)
                return {
                    current: i,
                    states: Cf(n, i)
                }
        }
    }
    ))
}
function K0(e, t) {
    return {
        current: t,
        states: Cf(e, t)
    }
}
function hd(e, t, n, r) {
    var i = e && n.reduce((function(o, a) {
        var s, l, d = a.assignment, u = {
            state: r,
            action: a,
            _event: t
        }, c = {};
        if (Ce(d))
            c = d(o, t.data, u);
        else
            try {
                for (var f = we(Object.keys(d)), m = f.next(); !m.done; m = f.next()) {
                    var b = m.value
                      , p = d[b];
                    c[b] = Ce(p) ? p(o, t.data, u) : p
                }
            } catch (y) {
                s = {
                    error: y
                }
            } finally {
                try {
                    m && !m.done && (l = f.return) && l.call(f)
                } finally {
                    if (s)
                        throw s.error
                }
            }
        return Object.assign({}, o, c)
    }
    ), e);
    return i
}
var Y0 = function() {};
function xr(e) {
    return Array.isArray(e)
}
function Ce(e) {
    return typeof e == "function"
}
function Pe(e) {
    return typeof e == "string"
}
function Tf(e, t) {
    if (e)
        return Pe(e) ? {
            type: Wa,
            name: e,
            predicate: t ? t[e] : void 0
        } : Ce(e) ? {
            type: Wa,
            name: e.name,
            predicate: e
        } : e
}
function X0(e) {
    try {
        return "subscribe"in e && Ce(e.subscribe)
    } catch {
        return !1
    }
}
var gn = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}();
Di = {},
Di[gn] = function() {
    return this
}
,
Di[Symbol.observable] = function() {
    return this
}
;
function pr(e) {
    return !!e && "__xstatenode"in e
}
function Z0(e) {
    return !!e && typeof e.send == "function"
}
function Vo(e, t) {
    return Pe(e) || typeof e == "number" ? j({
        type: e
    }, t) : e
}
function ot(e, t) {
    if (!Pe(e) && "$$type"in e && e.$$type === "scxml")
        return e;
    var n = Vo(e);
    return j({
        name: n.type,
        data: n,
        $$type: "scxml",
        type: "external"
    }, t)
}
function Yn(e, t) {
    var n = Ef(t).map((function(r) {
        return typeof r > "u" || typeof r == "string" || pr(r) ? {
            target: r,
            event: e
        } : j(j({}, r), {
            event: e
        })
    }
    ));
    return n
}
function J0(e) {
    if (!(e === void 0 || e === V0))
        return Pt(e)
}
function Of(e, t, n, r, i) {
    var o = e.options.guards
      , a = {
        state: i,
        cond: t,
        _event: r
    };
    if (t.type === Wa)
        return ((o == null ? void 0 : o[t.name]) || t.predicate)(n, r.data, a);
    var s = o == null ? void 0 : o[t.type];
    if (!s)
        throw new Error("Guard '".concat(t.type, "' is not implemented on machine '").concat(e.id, "'."));
    return s(n, r.data, a)
}
function Af(e) {
    return typeof e == "string" ? {
        type: e
    } : e
}
function qi(e, t, n) {
    var r = function() {}
      , i = typeof e == "object"
      , o = i ? e : null;
    return {
        next: ((i ? e.next : e) || r).bind(o),
        error: ((i ? e.error : t) || r).bind(o),
        complete: ((i ? e.complete : n) || r).bind(o)
    }
}
function Pi(e, t) {
    return "".concat(e, ":invocation[").concat(t, "]")
}
function Ka(e) {
    return (e.type === wr || e.type === bi && e.to === En.Internal) && typeof e.delay != "number"
}
var Bn = ot({
    type: wf
});
function ao(e, t) {
    return t && t[e] || void 0
}
function hr(e, t) {
    var n;
    if (Pe(e) || typeof e == "number") {
        var r = ao(e, t);
        Ce(r) ? n = {
            type: e,
            exec: r
        } : r ? n = r : n = {
            type: e,
            exec: void 0
        }
    } else if (Ce(e))
        n = {
            type: e.name || e.toString(),
            exec: e
        };
    else {
        var r = ao(e.type, t);
        if (Ce(r))
            n = j(j({}, e), {
                exec: r
            });
        else if (r) {
            var i = r.type || e.type;
            n = j(j(j({}, r), e), {
                type: i
            })
        } else
            n = e
    }
    return n
}
var Qt = function(e, t) {
    if (!e)
        return [];
    var n = xr(e) ? e : [e];
    return n.map((function(r) {
        return hr(r, t)
    }
    ))
};
function Uo(e) {
    var t = hr(e);
    return j(j({
        id: Pe(e) ? e : t.id
    }, t), {
        type: t.type
    })
}
function Df(e, t) {
    return {
        type: wr,
        event: typeof e == "function" ? e : Vo(e),
        delay: t ? t.delay : void 0,
        id: t == null ? void 0 : t.id
    }
}
function Pf(e, t, n, r) {
    var i = {
        _event: n
    }, o = ot(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
    if (Pe(e.delay)) {
        var s = r && r[e.delay];
        a = Ce(s) ? s(t, n.data, i) : s
    } else
        a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
    return j(j({}, e), {
        type: wr,
        _event: o,
        delay: a
    })
}
function kr(e, t) {
    return {
        to: t ? t.to : void 0,
        type: bi,
        event: Ce(e) ? e : Vo(e),
        delay: t ? t.delay : void 0,
        id: t && t.id !== void 0 ? t.id : Ce(e) ? e.name : Sf(e)
    }
}
function $f(e, t, n, r) {
    var i = {
        _event: n
    }, o = ot(Ce(e.event) ? e.event(t, n.data, i) : e.event), a;
    if (Pe(e.delay)) {
        var s = r && r[e.delay];
        a = Ce(s) ? s(t, n.data, i) : s
    } else
        a = Ce(e.delay) ? e.delay(t, n.data, i) : e.delay;
    var l = Ce(e.to) ? e.to(t, n.data, i) : e.to;
    return j(j({}, e), {
        to: l,
        _event: o,
        event: o.data,
        delay: a
    })
}
function Ws(e, t) {
    return kr(e, j(j({}, t), {
        to: En.Parent
    }))
}
function Q0(e, t, n) {
    return kr(t, j(j({}, n), {
        to: e
    }))
}
function eb() {
    return Ws(jo)
}
function tb(e, t) {
    return kr(e, j(j({}, t), {
        to: function(n, r, i) {
            var o = i._event;
            return o.origin
        }
    }))
}
var nb = function(e, t) {
    return {
        context: e,
        event: t
    }
};
function rb(e, t) {
    return e === void 0 && (e = nb),
    {
        type: Ro,
        label: t,
        expr: e
    }
}
var Mf = function(e, t, n) {
    return j(j({}, e), {
        value: Pe(e.expr) ? e.expr : e.expr(t, n.data, {
            _event: n
        })
    })
}
  , Lf = function(e) {
    return {
        type: Bs,
        sendId: e
    }
};
function Ff(e) {
    var t = Uo(e);
    return {
        type: $e.Start,
        activity: t,
        exec: void 0
    }
}
function Nf(e) {
    var t = Ce(e) ? e : Uo(e);
    return {
        type: $e.Stop,
        activity: t,
        exec: void 0
    }
}
function If(e, t, n) {
    var r = Ce(e.activity) ? e.activity(t, n.data) : e.activity
      , i = typeof r == "string" ? {
        id: r
    } : r
      , o = {
        type: $e.Stop,
        activity: i
    };
    return o
}
var zf = function(e) {
    return {
        type: zo,
        assignment: e
    }
};
function ib(e) {
    return typeof e == "object" && "type"in e
}
function Rf(e, t) {
    var n = t ? "#".concat(t) : "";
    return "".concat($e.After, "(").concat(e, ")").concat(n)
}
function Mr(e, t) {
    var n = "".concat($e.DoneState, ".").concat(e)
      , r = {
        type: n,
        data: t
    };
    return r.toString = function() {
        return n
    }
    ,
    r
}
function qr(e, t) {
    var n = "".concat($e.DoneInvoke, ".").concat(e)
      , r = {
        type: n,
        data: t
    };
    return r.toString = function() {
        return n
    }
    ,
    r
}
function er(e, t) {
    var n = "".concat($e.ErrorPlatform, ".").concat(e)
      , r = {
        type: n,
        data: t
    };
    return r.toString = function() {
        return n
    }
    ,
    r
}
function ob(e) {
    return {
        type: $e.Pure,
        get: e
    }
}
function ab(e, t) {
    return kr((function(n, r) {
        return r
    }
    ), j(j({}, t), {
        to: e
    }))
}
function sb(e, t) {
    return Ws((function(n, r, i) {
        return {
            type: Hs,
            data: Ce(e) ? e(n, r, i) : e
        }
    }
    ), j(j({}, t), {
        to: En.Parent
    }))
}
function lb(e) {
    return {
        type: $e.Choose,
        conds: e
    }
}
var db = function(e) {
    var t, n, r = [];
    try {
        for (var i = we(e), o = i.next(); !o.done; o = i.next())
            for (var a = o.value, s = 0; s < a.actions.length; ) {
                if (a.actions[s].type === zo) {
                    r.push(a.actions[s]),
                    a.actions.splice(s, 1);
                    continue
                }
                s++
            }
    } catch (l) {
        t = {
            error: l
        }
    } finally {
        try {
            o && !o.done && (n = i.return) && n.call(i)
        } finally {
            if (t)
                throw t.error
        }
    }
    return r
};
function oi(e, t, n, r, i, o, a) {
    a === void 0 && (a = !1);
    var s = a ? [] : db(i)
      , l = s.length ? hd(n, r, s, t) : n
      , d = a ? [n] : void 0
      , u = [];
    function c(b, p) {
        var y;
        switch (p.type) {
        case wr:
            {
                var v = Pf(p, l, r, e.options.delays);
                return o && typeof v.delay == "number" && o(v, l, r),
                v
            }
        case bi:
            var w = $f(p, l, r, e.options.delays);
            return o && w.to !== En.Internal && (b === "entry" ? u.push(w) : o(w, l, r)),
            w;
        case Ro:
            {
                var g = Mf(p, l, r);
                return o == null || o(g, l, r),
                g
            }
        case xf:
            {
                var k = p
                  , O = (y = k.conds.find((function(ge) {
                    var K = Tf(ge.cond, e.options.guards);
                    return !K || Of(e, K, l, r, o ? void 0 : t)
                }
                ))) === null || y === void 0 ? void 0 : y.actions;
                if (!O)
                    return [];
                var D = Se(oi(e, t, l, r, [{
                    type: b,
                    actions: Qt(Pt(O), e.options.actions)
                }], o, a), 2)
                  , R = D[0]
                  , G = D[1];
                return l = G,
                d == null || d.push(l),
                R
            }
        case kf:
            {
                var O = p.get(l, r.data);
                if (!O)
                    return [];
                var L = Se(oi(e, t, l, r, [{
                    type: b,
                    actions: Qt(Pt(O), e.options.actions)
                }], o, a), 2)
                  , Z = L[0]
                  , q = L[1];
                return l = q,
                d == null || d.push(l),
                Z
            }
        case Io:
            {
                var g = If(p, l, r);
                return o == null || o(g, n, r),
                g
            }
        case zo:
            {
                l = hd(l, r, [p], o ? void 0 : t),
                d == null || d.push(l);
                break
            }
        default:
            var $ = hr(p, e.options.actions)
              , re = $.exec;
            if (o)
                o($, l, r);
            else if (re && d) {
                var he = d.length - 1
                  , Te = j(j({}, $), {
                    exec: function(ge) {
                        for (var K = [], ue = 1; ue < arguments.length; ue++)
                            K[ue - 1] = arguments[ue];
                        re.apply(void 0, Re([d[he]], Se(K), !1))
                    }
                });
                $ = Te
            }
            return $
        }
    }
    function f(b) {
        var p, y, v = [];
        try {
            for (var w = we(b.actions), g = w.next(); !g.done; g = w.next()) {
                var k = g.value
                  , O = c(b.type, k);
                O && (v = v.concat(O))
            }
        } catch (D) {
            p = {
                error: D
            }
        } finally {
            try {
                g && !g.done && (y = w.return) && y.call(w)
            } finally {
                if (p)
                    throw p.error
            }
        }
        return u.forEach((function(D) {
            o(D, l, r)
        }
        )),
        u.length = 0,
        v
    }
    var m = We(i.map(f));
    return [m, l]
}
const Bo = Object.freeze(Object.defineProperty({
    __proto__: null,
    actionTypes: j0,
    after: Rf,
    assign: zf,
    cancel: Lf,
    choose: lb,
    done: Mr,
    doneInvoke: qr,
    error: er,
    escalate: sb,
    forwardTo: ab,
    getActionFunction: ao,
    initEvent: Bn,
    isActionObject: ib,
    log: rb,
    pure: ob,
    raise: Df,
    resolveActions: oi,
    resolveLog: Mf,
    resolveRaise: Pf,
    resolveSend: $f,
    resolveStop: If,
    respond: tb,
    send: kr,
    sendParent: Ws,
    sendTo: Q0,
    sendUpdate: eb,
    start: Ff,
    stop: Nf,
    toActionObject: hr,
    toActionObjects: Qt,
    toActivityDefinition: Uo
}, Symbol.toStringTag, {
    value: "Module"
}));
var Qn = function(e, t) {
    var n = t(e);
    return n
};
function jf(e) {
    var t;
    return t = {
        id: e,
        send: function() {},
        subscribe: function() {
            return {
                unsubscribe: function() {}
            }
        },
        getSnapshot: function() {},
        toJSON: function() {
            return {
                id: e
            }
        }
    },
    t[gn] = function() {
        return this
    }
    ,
    t
}
function ub(e, t, n, r) {
    var i, o = Af(e.src), a = (i = t == null ? void 0 : t.options.services) === null || i === void 0 ? void 0 : i[o.type], s = e.data ? oo(e.data, n, r) : void 0, l = a ? Vf(a, e.id, s) : jf(e.id);
    return l.meta = e,
    l
}
function Vf(e, t, n) {
    var r = jf(t);
    if (r.deferred = !0,
    pr(e)) {
        var i = r.state = Qn(void 0, (function() {
            return (n ? e.withContext(n) : e).initialState
        }
        ));
        r.getSnapshot = function() {
            return i
        }
    }
    return r
}
function cb(e) {
    try {
        return typeof e.send == "function"
    } catch {
        return !1
    }
}
function fb(e) {
    return cb(e) && "id"in e
}
function mb(e) {
    var t;
    return j((t = {
        subscribe: function() {
            return {
                unsubscribe: function() {}
            }
        },
        id: "anonymous",
        getSnapshot: function() {}
    },
    t[gn] = function() {
        return this
    }
    ,
    t), e)
}
var so = function(e) {
    return e.type === "atomic" || e.type === "final"
};
function Uf(e) {
    return Object.keys(e.states).map((function(t) {
        return e.states[t]
    }
    ))
}
function ai(e) {
    return Uf(e).filter((function(t) {
        return t.type !== "history"
    }
    ))
}
function Bf(e) {
    var t = [e];
    return so(e) ? t : t.concat(We(ai(e).map(Bf)))
}
function Lr(e, t) {
    var n, r, i, o, a, s, l, d, u = new Set(e), c = Ya(u), f = new Set(t);
    try {
        for (var m = we(f), b = m.next(); !b.done; b = m.next())
            for (var p = b.value, y = p.parent; y && !f.has(y); )
                f.add(y),
                y = y.parent
    } catch (L) {
        n = {
            error: L
        }
    } finally {
        try {
            b && !b.done && (r = m.return) && r.call(m)
        } finally {
            if (n)
                throw n.error
        }
    }
    var v = Ya(f);
    try {
        for (var w = we(f), g = w.next(); !g.done; g = w.next()) {
            var p = g.value;
            if (p.type === "compound" && (!v.get(p) || !v.get(p).length))
                c.get(p) ? c.get(p).forEach((function(Z) {
                    return f.add(Z)
                }
                )) : p.initialStateNodes.forEach((function(Z) {
                    return f.add(Z)
                }
                ));
            else if (p.type === "parallel")
                try {
                    for (var k = (a = void 0,
                    we(ai(p))), O = k.next(); !O.done; O = k.next()) {
                        var D = O.value;
                        f.has(D) || (f.add(D),
                        c.get(D) ? c.get(D).forEach((function(Z) {
                            return f.add(Z)
                        }
                        )) : D.initialStateNodes.forEach((function(Z) {
                            return f.add(Z)
                        }
                        )))
                    }
                } catch (Z) {
                    a = {
                        error: Z
                    }
                } finally {
                    try {
                        O && !O.done && (s = k.return) && s.call(k)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
        }
    } catch (L) {
        i = {
            error: L
        }
    } finally {
        try {
            g && !g.done && (o = w.return) && o.call(w)
        } finally {
            if (i)
                throw i.error
        }
    }
    try {
        for (var R = we(f), G = R.next(); !G.done; G = R.next())
            for (var p = G.value, y = p.parent; y && !f.has(y); )
                f.add(y),
                y = y.parent
    } catch (L) {
        l = {
            error: L
        }
    } finally {
        try {
            G && !G.done && (d = R.return) && d.call(R)
        } finally {
            if (l)
                throw l.error
        }
    }
    return f
}
function Hf(e, t) {
    var n = t.get(e);
    if (!n)
        return {};
    if (e.type === "compound") {
        var r = n[0];
        if (r) {
            if (so(r))
                return r.key
        } else
            return {}
    }
    var i = {};
    return n.forEach((function(o) {
        i[o.key] = Hf(o, t)
    }
    )),
    i
}
function Ya(e) {
    var t, n, r = new Map;
    try {
        for (var i = we(e), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            r.has(a) || r.set(a, []),
            a.parent && (r.has(a.parent) || r.set(a.parent, []),
            r.get(a.parent).push(a))
        }
    } catch (s) {
        t = {
            error: s
        }
    } finally {
        try {
            o && !o.done && (n = i.return) && n.call(i)
        } finally {
            if (t)
                throw t.error
        }
    }
    return r
}
function pb(e, t) {
    var n = Lr([e], t);
    return Hf(e, Ya(n))
}
function Fr(e, t) {
    return Array.isArray(e) ? e.some((function(n) {
        return n === t
    }
    )) : e instanceof Set ? e.has(t) : !1
}
function hb(e) {
    return Re([], Se(new Set(We(Re([], Se(e.map((function(t) {
        return t.ownEvents
    }
    ))), !1)))), !1)
}
function Wi(e, t) {
    return t.type === "compound" ? ai(t).some((function(n) {
        return n.type === "final" && Fr(e, n)
    }
    )) : t.type === "parallel" ? ai(t).every((function(n) {
        return Wi(e, n)
    }
    )) : !1
}
function bb(e) {
    return e === void 0 && (e = []),
    e.reduce((function(t, n) {
        return n.meta !== void 0 && (t[n.id] = n.meta),
        t
    }
    ), {})
}
function bd(e) {
    return new Set(We(e.map((function(t) {
        return t.tags
    }
    ))))
}
function qf(e, t) {
    if (e === t)
        return !0;
    if (e === void 0 || t === void 0)
        return !1;
    if (Pe(e) || Pe(t))
        return e === t;
    var n = Object.keys(e)
      , r = Object.keys(t);
    return n.length === r.length && n.every((function(i) {
        return qf(e[i], t[i])
    }
    ))
}
function vb(e) {
    return typeof e != "object" || e === null ? !1 : "value"in e && "_event"in e
}
function gb(e, t) {
    var n = e.exec
      , r = j(j({}, e), {
        exec: n !== void 0 ? function() {
            return n(t.context, t.event, {
                action: e,
                state: t,
                _event: t._event
            })
        }
        : void 0
    });
    return r
}
var Ut = function() {
    function e(t) {
        var n = this, r;
        this.actions = [],
        this.activities = fd,
        this.meta = {},
        this.events = [],
        this.value = t.value,
        this.context = t.context,
        this._event = t._event,
        this._sessionid = t._sessionid,
        this.event = this._event.data,
        this.historyValue = t.historyValue,
        this.history = t.history,
        this.actions = t.actions || [],
        this.activities = t.activities || fd,
        this.meta = bb(t.configuration),
        this.events = t.events || [],
        this.matches = this.matches.bind(this),
        this.toStrings = this.toStrings.bind(this),
        this.configuration = t.configuration,
        this.transitions = t.transitions,
        this.children = t.children,
        this.done = !!t.done,
        this.tags = (r = Array.isArray(t.tags) ? new Set(t.tags) : t.tags) !== null && r !== void 0 ? r : new Set,
        this.machine = t.machine,
        Object.defineProperty(this, "nextEvents", {
            get: function() {
                return hb(n.configuration)
            }
        })
    }
    return e.from = function(t, n) {
        if (t instanceof e)
            return t.context !== n ? new e({
                value: t.value,
                context: n,
                _event: t._event,
                _sessionid: null,
                historyValue: t.historyValue,
                history: t.history,
                actions: [],
                activities: t.activities,
                events: [],
                configuration: [],
                transitions: [],
                children: {}
            }) : t;
        var r = Bn;
        return new e({
            value: t,
            context: n,
            _event: r,
            _sessionid: null,
            historyValue: void 0,
            history: void 0,
            actions: [],
            activities: void 0,
            events: [],
            configuration: [],
            transitions: [],
            children: {}
        })
    }
    ,
    e.create = function(t) {
        return new e(t)
    }
    ,
    e.inert = function(t, n) {
        if (t instanceof e) {
            if (!t.actions.length)
                return t;
            var r = Bn;
            return new e({
                value: t.value,
                context: n,
                _event: r,
                _sessionid: null,
                historyValue: t.historyValue,
                history: t.history,
                activities: t.activities,
                configuration: t.configuration,
                transitions: [],
                children: {}
            })
        }
        return e.from(t, n)
    }
    ,
    e.prototype.toStrings = function(t, n) {
        var r = this;
        if (t === void 0 && (t = this.value),
        n === void 0 && (n = "."),
        Pe(t))
            return [t];
        var i = Object.keys(t);
        return i.concat.apply(i, Re([], Se(i.map((function(o) {
            return r.toStrings(t[o], n).map((function(a) {
                return o + n + a
            }
            ))
        }
        ))), !1))
    }
    ,
    e.prototype.toJSON = function() {
        var t = this;
        t.configuration,
        t.transitions;
        var n = t.tags;
        t.machine;
        var r = Us(t, ["configuration", "transitions", "tags", "machine"]);
        return j(j({}, r), {
            tags: Array.from(n)
        })
    }
    ,
    e.prototype.matches = function(t) {
        return qs(t, this.value)
    }
    ,
    e.prototype.hasTag = function(t) {
        return this.tags.has(t)
    }
    ,
    e.prototype.can = function(t) {
        var n;
        Y0(!!this.machine);
        var r = (n = this.machine) === null || n === void 0 ? void 0 : n.getTransitionData(this, t);
        return !!(r != null && r.transitions.length) && r.transitions.some((function(i) {
            return i.target !== void 0 || i.actions.length
        }
        ))
    }
    ,
    e
}()
  , yb = {
    deferEvents: !1
}
  , vd = function() {
    function e(t) {
        this.processingEvent = !1,
        this.queue = [],
        this.initialized = !1,
        this.options = j(j({}, yb), t)
    }
    return e.prototype.initialize = function(t) {
        if (this.initialized = !0,
        t) {
            if (!this.options.deferEvents) {
                this.schedule(t);
                return
            }
            this.process(t)
        }
        this.flushEvents()
    }
    ,
    e.prototype.schedule = function(t) {
        if (!this.initialized || this.processingEvent) {
            this.queue.push(t);
            return
        }
        if (this.queue.length !== 0)
            throw new Error("Event queue should be empty when it is not processing events");
        this.process(t),
        this.flushEvents()
    }
    ,
    e.prototype.clear = function() {
        this.queue = []
    }
    ,
    e.prototype.flushEvents = function() {
        for (var t = this.queue.shift(); t; )
            this.process(t),
            t = this.queue.shift()
    }
    ,
    e.prototype.process = function(t) {
        this.processingEvent = !0;
        try {
            t()
        } catch (n) {
            throw this.clear(),
            n
        } finally {
            this.processingEvent = !1
        }
    }
    ,
    e
}()
  , ba = new Map
  , wb = 0
  , Ar = {
    bookId: function() {
        return "x:".concat(wb++)
    },
    register: function(e, t) {
        return ba.set(e, t),
        e
    },
    get: function(e) {
        return ba.get(e)
    },
    free: function(e) {
        ba.delete(e)
    }
};
function Gs() {
    if (typeof globalThis < "u")
        return globalThis;
    if (typeof self < "u")
        return self;
    if (typeof window < "u")
        return window;
    if (typeof global < "u")
        return global
}
function xb() {
    var e = Gs();
    if (e && "__xstate__"in e)
        return e.__xstate__
}
function kb(e) {
    if (Gs()) {
        var t = xb();
        t && t.register(e)
    }
}
function _b(e, t) {
    t === void 0 && (t = {});
    var n = e.initialState
      , r = new Set
      , i = []
      , o = !1
      , a = function() {
        if (!o) {
            for (o = !0; i.length > 0; ) {
                var d = i.shift();
                n = e.transition(n, d, l),
                r.forEach((function(u) {
                    return u.next(n)
                }
                ))
            }
            o = !1
        }
    }
      , s = mb({
        id: t.id,
        send: function(d) {
            i.push(d),
            a()
        },
        getSnapshot: function() {
            return n
        },
        subscribe: function(d, u, c) {
            var f = qi(d, u, c);
            return r.add(f),
            f.next(n),
            {
                unsubscribe: function() {
                    r.delete(f)
                }
            }
        }
    })
      , l = {
        parent: t.parent,
        self: s,
        id: t.id || "anonymous",
        observers: r
    };
    return n = e.start ? e.start(l) : n,
    s
}
var Sb = {
    sync: !1,
    autoForward: !1
}, Qe;
(function(e) {
    e[e.NotStarted = 0] = "NotStarted",
    e[e.Running = 1] = "Running",
    e[e.Stopped = 2] = "Stopped"
}
)(Qe || (Qe = {}));
var Eb = function() {
    function e(t, n) {
        n === void 0 && (n = e.defaultOptions);
        var r = this;
        this.machine = t,
        this.delayedEventsMap = {},
        this.listeners = new Set,
        this.contextListeners = new Set,
        this.stopListeners = new Set,
        this.doneListeners = new Set,
        this.eventListeners = new Set,
        this.sendListeners = new Set,
        this.initialized = !1,
        this.status = Qe.NotStarted,
        this.children = new Map,
        this.forwardTo = new Set,
        this._outgoingQueue = [],
        this.init = this.start,
        this.send = function(u, c) {
            if (xr(u))
                return r.batch(u),
                r.state;
            var f = ot(Vo(u, c));
            if (r.status === Qe.Stopped)
                return r.state;
            if (r.status !== Qe.Running && !r.options.deferEvents)
                throw new Error('Event "'.concat(f.name, '" was sent to uninitialized service "').concat(r.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: `).concat(JSON.stringify(f.data)));
            return r.scheduler.schedule((function() {
                r.forward(f);
                var m = r._nextState(f);
                r.update(m, f)
            }
            )),
            r._state
        }
        ,
        this.sendTo = function(u, c, f) {
            var m = r.parent && (c === En.Parent || r.parent.id === c)
              , b = m ? r.parent : Pe(c) ? c === En.Internal ? r : r.children.get(c) || Ar.get(c) : Z0(c) ? c : void 0;
            if (!b) {
                if (!m)
                    throw new Error("Unable to send event to child '".concat(c, "' from service '").concat(r.id, "'."));
                return
            }
            if ("machine"in b) {
                if (r.status !== Qe.Stopped || r.parent !== b || r.state.done) {
                    var p = j(j({}, u), {
                        name: u.name === Hs ? "".concat(er(r.id)) : u.name,
                        origin: r.sessionId
                    });
                    !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([b, p]) : b.send(p)
                }
            } else
                !f && r.machine.config.predictableActionArguments ? r._outgoingQueue.push([b, u.data]) : b.send(u.data)
        }
        ,
        this._exec = function(u, c, f, m) {
            m === void 0 && (m = r.machine.options.actions);
            var b = u.exec || ao(u.type, m)
              , p = Ce(b) ? b : b ? b.exec : u.exec;
            if (p)
                try {
                    return p(c, f.data, r.machine.config.predictableActionArguments ? {
                        action: u,
                        _event: f
                    } : {
                        action: u,
                        state: r.state,
                        _event: f
                    })
                } catch (he) {
                    throw r.parent && r.parent.send({
                        type: "xstate.error",
                        data: he
                    }),
                    he
                }
            switch (u.type) {
            case wr:
                {
                    var y = u;
                    r.defer(y);
                    break
                }
            case bi:
                var v = u;
                if (typeof v.delay == "number") {
                    r.defer(v);
                    return
                } else
                    v.to ? r.sendTo(v._event, v.to, f === Bn) : r.send(v._event);
                break;
            case Bs:
                r.cancel(u.sendId);
                break;
            case no:
                {
                    if (r.status !== Qe.Running)
                        return;
                    var w = u.activity;
                    if (!r.machine.config.predictableActionArguments && !r.state.activities[w.id || w.type])
                        break;
                    if (w.type === $e.Invoke) {
                        var g = Af(w.src)
                          , k = r.machine.options.services ? r.machine.options.services[g.type] : void 0
                          , O = w.id
                          , D = w.data
                          , R = "autoForward"in w ? w.autoForward : !!w.forward;
                        if (!k)
                            return;
                        var G = D ? oo(D, c, f) : void 0;
                        if (typeof k == "string")
                            return;
                        var L = Ce(k) ? k(c, f.data, {
                            data: G,
                            src: g,
                            meta: w.meta
                        }) : k;
                        if (!L)
                            return;
                        var Z = void 0;
                        pr(L) && (L = G ? L.withContext(G) : L,
                        Z = {
                            autoForward: R
                        }),
                        r.spawn(L, O, Z)
                    } else
                        r.spawnActivity(w);
                    break
                }
            case Io:
                {
                    r.stopChild(u.activity.id);
                    break
                }
            case Ro:
                var q = u
                  , $ = q.label
                  , re = q.value;
                $ ? r.logger($, re) : r.logger(re);
                break
            }
        }
        ;
        var i = j(j({}, e.defaultOptions), n)
          , o = i.clock
          , a = i.logger
          , s = i.parent
          , l = i.id
          , d = l !== void 0 ? l : t.id;
        this.id = d,
        this.logger = a,
        this.clock = o,
        this.parent = s,
        this.options = i,
        this.scheduler = new vd({
            deferEvents: this.options.deferEvents
        }),
        this.sessionId = Ar.bookId()
    }
    return Object.defineProperty(e.prototype, "initialState", {
        get: function() {
            var t = this;
            return this._initialState ? this._initialState : Qn(this, (function() {
                return t._initialState = t.machine.initialState,
                t._initialState
            }
            ))
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "state", {
        get: function() {
            return this._state
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.execute = function(t, n) {
        var r, i;
        try {
            for (var o = we(t.actions), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                this.exec(s, t, n)
            }
        } catch (l) {
            r = {
                error: l
            }
        } finally {
            try {
                a && !a.done && (i = o.return) && i.call(o)
            } finally {
                if (r)
                    throw r.error
            }
        }
    }
    ,
    e.prototype.update = function(t, n) {
        var r, i, o, a, s, l, d, u, c = this;
        if (t._sessionid = this.sessionId,
        this._state = t,
        (!this.machine.config.predictableActionArguments || n === Bn) && this.options.execute)
            this.execute(this.state);
        else
            for (var f = void 0; f = this._outgoingQueue.shift(); )
                f[0].send(f[1]);
        if (this.children.forEach((function(L) {
            c.state.children[L.id] = L
        }
        )),
        this.devTools && this.devTools.send(n.data, t),
        t.event)
            try {
                for (var m = we(this.eventListeners), b = m.next(); !b.done; b = m.next()) {
                    var p = b.value;
                    p(t.event)
                }
            } catch (L) {
                r = {
                    error: L
                }
            } finally {
                try {
                    b && !b.done && (i = m.return) && i.call(m)
                } finally {
                    if (r)
                        throw r.error
                }
            }
        try {
            for (var y = we(this.listeners), v = y.next(); !v.done; v = y.next()) {
                var p = v.value;
                p(t, t.event)
            }
        } catch (L) {
            o = {
                error: L
            }
        } finally {
            try {
                v && !v.done && (a = y.return) && a.call(y)
            } finally {
                if (o)
                    throw o.error
            }
        }
        try {
            for (var w = we(this.contextListeners), g = w.next(); !g.done; g = w.next()) {
                var k = g.value;
                k(this.state.context, this.state.history ? this.state.history.context : void 0)
            }
        } catch (L) {
            s = {
                error: L
            }
        } finally {
            try {
                g && !g.done && (l = w.return) && l.call(w)
            } finally {
                if (s)
                    throw s.error
            }
        }
        if (this.state.done) {
            var O = t.configuration.find((function(L) {
                return L.type === "final" && L.parent === c.machine
            }
            ))
              , D = O && O.doneData ? oo(O.doneData, t.context, n) : void 0;
            this._doneEvent = qr(this.id, D);
            try {
                for (var R = we(this.doneListeners), G = R.next(); !G.done; G = R.next()) {
                    var p = G.value;
                    p(this._doneEvent)
                }
            } catch (L) {
                d = {
                    error: L
                }
            } finally {
                try {
                    G && !G.done && (u = R.return) && u.call(R)
                } finally {
                    if (d)
                        throw d.error
                }
            }
            this._stop(),
            this._stopChildren(),
            Ar.free(this.sessionId)
        }
    }
    ,
    e.prototype.onTransition = function(t) {
        return this.listeners.add(t),
        this.status === Qe.Running && t(this.state, this.state.event),
        this
    }
    ,
    e.prototype.subscribe = function(t, n, r) {
        var i = this
          , o = qi(t, n, r);
        this.listeners.add(o.next),
        this.status !== Qe.NotStarted && o.next(this.state);
        var a = function() {
            i.doneListeners.delete(a),
            i.stopListeners.delete(a),
            o.complete()
        };
        return this.status === Qe.Stopped ? o.complete() : (this.onDone(a),
        this.onStop(a)),
        {
            unsubscribe: function() {
                i.listeners.delete(o.next),
                i.doneListeners.delete(a),
                i.stopListeners.delete(a)
            }
        }
    }
    ,
    e.prototype.onEvent = function(t) {
        return this.eventListeners.add(t),
        this
    }
    ,
    e.prototype.onSend = function(t) {
        return this.sendListeners.add(t),
        this
    }
    ,
    e.prototype.onChange = function(t) {
        return this.contextListeners.add(t),
        this
    }
    ,
    e.prototype.onStop = function(t) {
        return this.stopListeners.add(t),
        this
    }
    ,
    e.prototype.onDone = function(t) {
        return this.status === Qe.Stopped && this._doneEvent ? t(this._doneEvent) : this.doneListeners.add(t),
        this
    }
    ,
    e.prototype.off = function(t) {
        return this.listeners.delete(t),
        this.eventListeners.delete(t),
        this.sendListeners.delete(t),
        this.stopListeners.delete(t),
        this.doneListeners.delete(t),
        this.contextListeners.delete(t),
        this
    }
    ,
    e.prototype.start = function(t) {
        var n = this;
        if (this.status === Qe.Running)
            return this;
        this.machine._init(),
        Ar.register(this.sessionId, this),
        this.initialized = !0,
        this.status = Qe.Running;
        var r = t === void 0 ? this.initialState : Qn(this, (function() {
            return vb(t) ? n.machine.resolveState(t) : n.machine.resolveState(Ut.from(t, n.machine.context))
        }
        ));
        return this.options.devTools && this.attachDev(),
        this.scheduler.initialize((function() {
            n.update(r, Bn)
        }
        )),
        this
    }
    ,
    e.prototype._stopChildren = function() {
        this.children.forEach((function(t) {
            Ce(t.stop) && t.stop()
        }
        )),
        this.children.clear()
    }
    ,
    e.prototype._stop = function() {
        var t, n, r, i, o, a, s, l, d, u;
        try {
            for (var c = we(this.listeners), f = c.next(); !f.done; f = c.next()) {
                var m = f.value;
                this.listeners.delete(m)
            }
        } catch (R) {
            t = {
                error: R
            }
        } finally {
            try {
                f && !f.done && (n = c.return) && n.call(c)
            } finally {
                if (t)
                    throw t.error
            }
        }
        try {
            for (var b = we(this.stopListeners), p = b.next(); !p.done; p = b.next()) {
                var m = p.value;
                m(),
                this.stopListeners.delete(m)
            }
        } catch (R) {
            r = {
                error: R
            }
        } finally {
            try {
                p && !p.done && (i = b.return) && i.call(b)
            } finally {
                if (r)
                    throw r.error
            }
        }
        try {
            for (var y = we(this.contextListeners), v = y.next(); !v.done; v = y.next()) {
                var m = v.value;
                this.contextListeners.delete(m)
            }
        } catch (R) {
            o = {
                error: R
            }
        } finally {
            try {
                v && !v.done && (a = y.return) && a.call(y)
            } finally {
                if (o)
                    throw o.error
            }
        }
        try {
            for (var w = we(this.doneListeners), g = w.next(); !g.done; g = w.next()) {
                var m = g.value;
                this.doneListeners.delete(m)
            }
        } catch (R) {
            s = {
                error: R
            }
        } finally {
            try {
                g && !g.done && (l = w.return) && l.call(w)
            } finally {
                if (s)
                    throw s.error
            }
        }
        if (!this.initialized)
            return this;
        this.initialized = !1,
        this.status = Qe.Stopped,
        this._initialState = void 0;
        try {
            for (var k = we(Object.keys(this.delayedEventsMap)), O = k.next(); !O.done; O = k.next()) {
                var D = O.value;
                this.clock.clearTimeout(this.delayedEventsMap[D])
            }
        } catch (R) {
            d = {
                error: R
            }
        } finally {
            try {
                O && !O.done && (u = k.return) && u.call(k)
            } finally {
                if (d)
                    throw d.error
            }
        }
        this.scheduler.clear(),
        this.scheduler = new vd({
            deferEvents: this.options.deferEvents
        })
    }
    ,
    e.prototype.stop = function() {
        var t = this
          , n = this.scheduler;
        return this._stop(),
        n.schedule((function() {
            var r;
            if (!(!((r = t._state) === null || r === void 0) && r.done)) {
                var i = ot({
                    type: "xstate.stop"
                })
                  , o = Qn(t, (function() {
                    var a = We(Re([], Se(t.state.configuration), !1).sort((function(c, f) {
                        return f.order - c.order
                    }
                    )).map((function(c) {
                        return Qt(c.onExit, t.machine.options.actions)
                    }
                    )))
                      , s = Se(oi(t.machine, t.state, t.state.context, i, [{
                        type: "exit",
                        actions: a
                    }], t.machine.config.predictableActionArguments ? t._exec : void 0, t.machine.config.predictableActionArguments || t.machine.config.preserveActionOrder), 2)
                      , l = s[0]
                      , d = s[1]
                      , u = new Ut({
                        value: t.state.value,
                        context: d,
                        _event: i,
                        _sessionid: t.sessionId,
                        historyValue: void 0,
                        history: t.state,
                        actions: l.filter((function(c) {
                            return !Ka(c)
                        }
                        )),
                        activities: {},
                        events: [],
                        configuration: [],
                        transitions: [],
                        children: {},
                        done: t.state.done,
                        tags: t.state.tags,
                        machine: t.machine
                    });
                    return u.changed = !0,
                    u
                }
                ));
                t.update(o, i),
                t._stopChildren(),
                Ar.free(t.sessionId)
            }
        }
        )),
        this
    }
    ,
    e.prototype.batch = function(t) {
        var n = this;
        if (!(this.status === Qe.NotStarted && this.options.deferEvents)) {
            if (this.status !== Qe.Running)
                throw new Error("".concat(t.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'))
        }
        if (t.length) {
            var r = !!this.machine.config.predictableActionArguments && this._exec;
            this.scheduler.schedule((function() {
                var i, o, a = n.state, s = !1, l = [], d = function(m) {
                    var b = ot(m);
                    n.forward(b),
                    a = Qn(n, (function() {
                        return n.machine.transition(a, b, void 0, r || void 0)
                    }
                    )),
                    l.push.apply(l, Re([], Se(n.machine.config.predictableActionArguments ? a.actions : a.actions.map((function(p) {
                        return gb(p, a)
                    }
                    ))), !1)),
                    s = s || !!a.changed
                };
                try {
                    for (var u = we(t), c = u.next(); !c.done; c = u.next()) {
                        var f = c.value;
                        d(f)
                    }
                } catch (m) {
                    i = {
                        error: m
                    }
                } finally {
                    try {
                        c && !c.done && (o = u.return) && o.call(u)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                a.changed = s,
                a.actions = l,
                n.update(a, ot(t[t.length - 1]))
            }
            ))
        }
    }
    ,
    e.prototype.sender = function(t) {
        return this.send.bind(this, t)
    }
    ,
    e.prototype._nextState = function(t, n) {
        var r = this;
        n === void 0 && (n = !!this.machine.config.predictableActionArguments && this._exec);
        var i = ot(t);
        if (i.name.indexOf(qa) === 0 && !this.state.nextEvents.some((function(a) {
            return a.indexOf(qa) === 0
        }
        )))
            throw i.data.data;
        var o = Qn(this, (function() {
            return r.machine.transition(r.state, i, void 0, n || void 0)
        }
        ));
        return o
    }
    ,
    e.prototype.nextState = function(t) {
        return this._nextState(t, !1)
    }
    ,
    e.prototype.forward = function(t) {
        var n, r;
        try {
            for (var i = we(this.forwardTo), o = i.next(); !o.done; o = i.next()) {
                var a = o.value
                  , s = this.children.get(a);
                if (!s)
                    throw new Error("Unable to forward event '".concat(t, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(a, "'."));
                s.send(t)
            }
        } catch (l) {
            n = {
                error: l
            }
        } finally {
            try {
                o && !o.done && (r = i.return) && r.call(i)
            } finally {
                if (n)
                    throw n.error
            }
        }
    }
    ,
    e.prototype.defer = function(t) {
        var n = this
          , r = this.clock.setTimeout((function() {
            "to"in t && t.to ? n.sendTo(t._event, t.to, !0) : n.send(t._event)
        }
        ), t.delay);
        t.id && (this.delayedEventsMap[t.id] = r)
    }
    ,
    e.prototype.cancel = function(t) {
        this.clock.clearTimeout(this.delayedEventsMap[t]),
        delete this.delayedEventsMap[t]
    }
    ,
    e.prototype.exec = function(t, n, r) {
        r === void 0 && (r = this.machine.options.actions),
        this._exec(t, n.context, n._event, r)
    }
    ,
    e.prototype.removeChild = function(t) {
        var n;
        this.children.delete(t),
        this.forwardTo.delete(t),
        (n = this.state) === null || n === void 0 || delete n.children[t]
    }
    ,
    e.prototype.stopChild = function(t) {
        var n = this.children.get(t);
        n && (this.removeChild(t),
        Ce(n.stop) && n.stop())
    }
    ,
    e.prototype.spawn = function(t, n, r) {
        if (this.status !== Qe.Running)
            return Vf(t, n);
        if (pd(t))
            return this.spawnPromise(Promise.resolve(t), n);
        if (Ce(t))
            return this.spawnCallback(t, n);
        if (fb(t))
            return this.spawnActor(t, n);
        if (X0(t))
            return this.spawnObservable(t, n);
        if (pr(t))
            return this.spawnMachine(t, j(j({}, r), {
                id: n
            }));
        if (W0(t))
            return this.spawnBehavior(t, n);
        throw new Error('Unable to spawn entity "'.concat(n, '" of type "').concat(typeof t, '".'))
    }
    ,
    e.prototype.spawnMachine = function(t, n) {
        var r = this;
        n === void 0 && (n = {});
        var i = new e(t,j(j({}, this.options), {
            parent: this,
            id: n.id || t.id
        }))
          , o = j(j({}, Sb), n);
        o.sync && i.onTransition((function(s) {
            r.send(jo, {
                state: s,
                id: i.id
            })
        }
        ));
        var a = i;
        return this.children.set(i.id, a),
        o.autoForward && this.forwardTo.add(i.id),
        i.onDone((function(s) {
            r.removeChild(i.id),
            r.send(ot(s, {
                origin: i.id
            }))
        }
        )).start(),
        a
    }
    ,
    e.prototype.spawnBehavior = function(t, n) {
        var r = _b(t, {
            id: n,
            parent: this
        });
        return this.children.set(n, r),
        r
    }
    ,
    e.prototype.spawnPromise = function(t, n) {
        var r, i = this, o = !1, a;
        t.then((function(l) {
            o || (a = l,
            i.removeChild(n),
            i.send(ot(qr(n, l), {
                origin: n
            })))
        }
        ), (function(l) {
            if (!o) {
                i.removeChild(n);
                var d = er(n, l);
                try {
                    i.send(ot(d, {
                        origin: n
                    }))
                } catch {
                    i.devTools && i.devTools.send(d, i.state),
                    i.machine.strict && i.stop()
                }
            }
        }
        ));
        var s = (r = {
            id: n,
            send: function() {},
            subscribe: function(l, d, u) {
                var c = qi(l, d, u)
                  , f = !1;
                return t.then((function(m) {
                    f || (c.next(m),
                    !f && c.complete())
                }
                ), (function(m) {
                    f || c.error(m)
                }
                )),
                {
                    unsubscribe: function() {
                        return f = !0
                    }
                }
            },
            stop: function() {
                o = !0
            },
            toJSON: function() {
                return {
                    id: n
                }
            },
            getSnapshot: function() {
                return a
            }
        },
        r[gn] = function() {
            return this
        }
        ,
        r);
        return this.children.set(n, s),
        s
    }
    ,
    e.prototype.spawnCallback = function(t, n) {
        var r, i = this, o = !1, a = new Set, s = new Set, l, d = function(f) {
            l = f,
            s.forEach((function(m) {
                return m(f)
            }
            )),
            !o && i.send(ot(f, {
                origin: n
            }))
        }, u;
        try {
            u = t(d, (function(f) {
                a.add(f)
            }
            ))
        } catch (f) {
            this.send(er(n, f))
        }
        if (pd(u))
            return this.spawnPromise(u, n);
        var c = (r = {
            id: n,
            send: function(f) {
                return a.forEach((function(m) {
                    return m(f)
                }
                ))
            },
            subscribe: function(f) {
                var m = qi(f);
                return s.add(m.next),
                {
                    unsubscribe: function() {
                        s.delete(m.next)
                    }
                }
            },
            stop: function() {
                o = !0,
                Ce(u) && u()
            },
            toJSON: function() {
                return {
                    id: n
                }
            },
            getSnapshot: function() {
                return l
            }
        },
        r[gn] = function() {
            return this
        }
        ,
        r);
        return this.children.set(n, c),
        c
    }
    ,
    e.prototype.spawnObservable = function(t, n) {
        var r, i = this, o, a = t.subscribe((function(l) {
            o = l,
            i.send(ot(l, {
                origin: n
            }))
        }
        ), (function(l) {
            i.removeChild(n),
            i.send(ot(er(n, l), {
                origin: n
            }))
        }
        ), (function() {
            i.removeChild(n),
            i.send(ot(qr(n), {
                origin: n
            }))
        }
        )), s = (r = {
            id: n,
            send: function() {},
            subscribe: function(l, d, u) {
                return t.subscribe(l, d, u)
            },
            stop: function() {
                return a.unsubscribe()
            },
            getSnapshot: function() {
                return o
            },
            toJSON: function() {
                return {
                    id: n
                }
            }
        },
        r[gn] = function() {
            return this
        }
        ,
        r);
        return this.children.set(n, s),
        s
    }
    ,
    e.prototype.spawnActor = function(t, n) {
        return this.children.set(n, t),
        t
    }
    ,
    e.prototype.spawnActivity = function(t) {
        var n = this.machine.options && this.machine.options.activities ? this.machine.options.activities[t.type] : void 0;
        if (n) {
            var r = n(this.state.context, t);
            this.spawnEffect(t.id, r)
        }
    }
    ,
    e.prototype.spawnEffect = function(t, n) {
        var r;
        this.children.set(t, (r = {
            id: t,
            send: function() {},
            subscribe: function() {
                return {
                    unsubscribe: function() {}
                }
            },
            stop: n || void 0,
            getSnapshot: function() {},
            toJSON: function() {
                return {
                    id: t
                }
            }
        },
        r[gn] = function() {
            return this
        }
        ,
        r))
    }
    ,
    e.prototype.attachDev = function() {
        var t = Gs();
        if (this.options.devTools && t) {
            if (t.__REDUX_DEVTOOLS_EXTENSION__) {
                var n = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
                this.devTools = t.__REDUX_DEVTOOLS_EXTENSION__.connect(j(j({
                    name: this.id,
                    autoPause: !0,
                    stateSanitizer: function(r) {
                        return {
                            value: r.value,
                            context: r.context,
                            actions: r.actions
                        }
                    }
                }, n), {
                    features: j({
                        jump: !1,
                        skip: !1
                    }, n ? n.features : void 0)
                }), this.machine),
                this.devTools.init(this.state)
            }
            kb(this)
        }
    }
    ,
    e.prototype.toJSON = function() {
        return {
            id: this.id
        }
    }
    ,
    e.prototype[gn] = function() {
        return this
    }
    ,
    e.prototype.getSnapshot = function() {
        return this.status === Qe.NotStarted ? this.initialState : this._state
    }
    ,
    e.defaultOptions = {
        execute: !0,
        deferEvents: !0,
        clock: {
            setTimeout: function(t, n) {
                return setTimeout(t, n)
            },
            clearTimeout: function(t) {
                return clearTimeout(t)
            }
        },
        logger: console.log.bind(console),
        devTools: !1
    },
    e.interpret = Wf,
    e
}();
function Wf(e, t) {
    var n = new Eb(e,t);
    return n
}
function Cb(e) {
    if (typeof e == "string") {
        var t = {
            type: e
        };
        return t.toString = function() {
            return e
        }
        ,
        t
    }
    return e
}
function $i(e) {
    return j(j({
        type: ro
    }, e), {
        toJSON: function() {
            e.onDone,
            e.onError;
            var t = Us(e, ["onDone", "onError"]);
            return j(j({}, t), {
                type: ro,
                src: Cb(e.src)
            })
        }
    })
}
var Mi = ""
  , Xa = "#"
  , va = "*"
  , Xn = {}
  , Zn = function(e) {
    return e[0] === Xa
}
  , Tb = function() {
    return {
        actions: {},
        guards: {},
        services: {},
        activities: {},
        delays: {}
    }
}
  , Ob = function() {
    function e(t, n, r, i) {
        r === void 0 && (r = "context"in t ? t.context : void 0);
        var o = this, a;
        this.config = t,
        this._context = r,
        this.order = -1,
        this.__xstatenode = !0,
        this.__cache = {
            events: void 0,
            relativeValue: new Map,
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0
        },
        this.idMap = {},
        this.tags = [],
        this.options = Object.assign(Tb(), n),
        this.parent = i == null ? void 0 : i.parent,
        this.key = this.config.key || (i == null ? void 0 : i.key) || this.config.id || "(machine)",
        this.machine = this.parent ? this.parent.machine : this,
        this.path = this.parent ? this.parent.path.concat(this.key) : [],
        this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : _f),
        this.id = this.config.id || Re([this.machine.key], Se(this.path), !1).join(this.delimiter),
        this.version = this.parent ? this.parent.version : this.config.version,
        this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"),
        this.schema = this.parent ? this.machine.schema : (a = this.config.schema) !== null && a !== void 0 ? a : {},
        this.description = this.config.description,
        this.initial = this.config.initial,
        this.states = this.config.states ? $r(this.config.states, (function(d, u) {
            var c, f = new e(d,{},void 0,{
                parent: o,
                key: u
            });
            return Object.assign(o.idMap, j((c = {},
            c[f.id] = f,
            c), f.idMap)),
            f
        }
        )) : Xn;
        var s = 0;
        function l(d) {
            var u, c;
            d.order = s++;
            try {
                for (var f = we(Uf(d)), m = f.next(); !m.done; m = f.next()) {
                    var b = m.value;
                    l(b)
                }
            } catch (p) {
                u = {
                    error: p
                }
            } finally {
                try {
                    m && !m.done && (c = f.return) && c.call(f)
                } finally {
                    if (u)
                        throw u.error
                }
            }
        }
        l(this),
        this.history = this.config.history === !0 ? "shallow" : this.config.history || !1,
        this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some((function(d) {
            var u = d.event;
            return u === Mi
        }
        )) : Mi in this.config.on : !1),
        this.strict = !!this.config.strict,
        this.onEntry = Pt(this.config.entry || this.config.onEntry).map((function(d) {
            return hr(d)
        }
        )),
        this.onExit = Pt(this.config.exit || this.config.onExit).map((function(d) {
            return hr(d)
        }
        )),
        this.meta = this.config.meta,
        this.doneData = this.type === "final" ? this.config.data : void 0,
        this.invoke = Pt(this.config.invoke).map((function(d, u) {
            var c, f;
            if (pr(d)) {
                var m = Pi(o.id, u);
                return o.machine.options.services = j((c = {},
                c[m] = d,
                c), o.machine.options.services),
                $i({
                    src: m,
                    id: m
                })
            } else if (Pe(d.src)) {
                var m = d.id || Pi(o.id, u);
                return $i(j(j({}, d), {
                    id: m,
                    src: d.src
                }))
            } else if (pr(d.src) || Ce(d.src)) {
                var m = d.id || Pi(o.id, u);
                return o.machine.options.services = j((f = {},
                f[m] = d.src,
                f), o.machine.options.services),
                $i(j(j({
                    id: m
                }, d), {
                    src: m
                }))
            } else {
                var b = d.src;
                return $i(j(j({
                    id: Pi(o.id, u)
                }, d), {
                    src: b
                }))
            }
        }
        )),
        this.activities = Pt(this.config.activities).concat(this.invoke).map((function(d) {
            return Uo(d)
        }
        )),
        this.transition = this.transition.bind(this),
        this.tags = Pt(this.config.tags)
    }
    return e.prototype._init = function() {
        this.__cache.transitions || Bf(this).forEach((function(t) {
            return t.on
        }
        ))
    }
    ,
    e.prototype.withConfig = function(t, n) {
        var r = this.options
          , i = r.actions
          , o = r.activities
          , a = r.guards
          , s = r.services
          , l = r.delays;
        return new e(this.config,{
            actions: j(j({}, i), t.actions),
            activities: j(j({}, o), t.activities),
            guards: j(j({}, a), t.guards),
            services: j(j({}, s), t.services),
            delays: j(j({}, l), t.delays)
        },n ?? this.context)
    }
    ,
    e.prototype.withContext = function(t) {
        return new e(this.config,this.options,t)
    }
    ,
    Object.defineProperty(e.prototype, "context", {
        get: function() {
            return Ce(this._context) ? this._context() : this._context
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "definition", {
        get: function() {
            return {
                id: this.id,
                key: this.key,
                version: this.version,
                context: this.context,
                type: this.type,
                initial: this.initial,
                history: this.history,
                states: $r(this.states, (function(t) {
                    return t.definition
                }
                )),
                on: this.on,
                transitions: this.transitions,
                entry: this.onEntry,
                exit: this.onExit,
                activities: this.activities || [],
                meta: this.meta,
                order: this.order || -1,
                data: this.doneData,
                invoke: this.invoke,
                description: this.description,
                tags: this.tags
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.toJSON = function() {
        return this.definition
    }
    ,
    Object.defineProperty(e.prototype, "on", {
        get: function() {
            if (this.__cache.on)
                return this.__cache.on;
            var t = this.transitions;
            return this.__cache.on = t.reduce((function(n, r) {
                return n[r.eventType] = n[r.eventType] || [],
                n[r.eventType].push(r),
                n
            }
            ), {})
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "after", {
        get: function() {
            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(),
            this.__cache.delayedTransitions)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "transitions", {
        get: function() {
            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(),
            this.__cache.transitions)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.getCandidates = function(t) {
        if (this.__cache.candidates[t])
            return this.__cache.candidates[t];
        var n = t === Mi
          , r = this.transitions.filter((function(i) {
            var o = i.eventType === t;
            return n ? o : o || i.eventType === va
        }
        ));
        return this.__cache.candidates[t] = r,
        r
    }
    ,
    e.prototype.getDelayedTransitions = function() {
        var t = this
          , n = this.config.after;
        if (!n)
            return [];
        var r = function(o, a) {
            var s = Ce(o) ? "".concat(t.id, ":delay[").concat(a, "]") : o
              , l = Rf(s, t.id);
            return t.onEntry.push(kr(l, {
                delay: o
            })),
            t.onExit.push(Lf(l)),
            l
        }
          , i = xr(n) ? n.map((function(o, a) {
            var s = r(o.delay, a);
            return j(j({}, o), {
                event: s
            })
        }
        )) : We(Object.keys(n).map((function(o, a) {
            var s = n[o]
              , l = Pe(s) ? {
                target: s
            } : s
              , d = isNaN(+o) ? o : +o
              , u = r(d, a);
            return Pt(l).map((function(c) {
                return j(j({}, c), {
                    event: u,
                    delay: d
                })
            }
            ))
        }
        )));
        return i.map((function(o) {
            var a = o.delay;
            return j(j({}, t.formatTransition(o)), {
                delay: a
            })
        }
        ))
    }
    ,
    e.prototype.getStateNodes = function(t) {
        var n, r = this;
        if (!t)
            return [];
        var i = t instanceof Ut ? t.value : Hr(t, this.delimiter);
        if (Pe(i)) {
            var o = this.getStateNode(i).initial;
            return o !== void 0 ? this.getStateNodes((n = {},
            n[i] = o,
            n)) : [this, this.states[i]]
        }
        var a = Object.keys(i)
          , s = [this];
        return s.push.apply(s, Re([], Se(We(a.map((function(l) {
            return r.getStateNode(l).getStateNodes(i[l])
        }
        )))), !1)),
        s
    }
    ,
    e.prototype.handles = function(t) {
        var n = Sf(t);
        return this.events.includes(n)
    }
    ,
    e.prototype.resolveState = function(t) {
        var n = t instanceof Ut ? t : Ut.create(t)
          , r = Array.from(Lr([], this.getStateNodes(n.value)));
        return new Ut(j(j({}, n), {
            value: this.resolve(n.value),
            configuration: r,
            done: Wi(r, this),
            tags: bd(r),
            machine: this.machine
        }))
    }
    ,
    e.prototype.transitionLeafNode = function(t, n, r) {
        var i = this.getStateNode(t)
          , o = i.next(n, r);
        return !o || !o.transitions.length ? this.next(n, r) : o
    }
    ,
    e.prototype.transitionCompoundNode = function(t, n, r) {
        var i = Object.keys(t)
          , o = this.getStateNode(i[0])
          , a = o._transition(t[i[0]], n, r);
        return !a || !a.transitions.length ? this.next(n, r) : a
    }
    ,
    e.prototype.transitionParallelNode = function(t, n, r) {
        var i, o, a = {};
        try {
            for (var s = we(Object.keys(t)), l = s.next(); !l.done; l = s.next()) {
                var d = l.value
                  , u = t[d];
                if (u) {
                    var c = this.getStateNode(d)
                      , f = c._transition(u, n, r);
                    f && (a[d] = f)
                }
            }
        } catch (v) {
            i = {
                error: v
            }
        } finally {
            try {
                l && !l.done && (o = s.return) && o.call(s)
            } finally {
                if (i)
                    throw i.error
            }
        }
        var m = Object.keys(a).map((function(v) {
            return a[v]
        }
        ))
          , b = We(m.map((function(v) {
            return v.transitions
        }
        )))
          , p = m.some((function(v) {
            return v.transitions.length > 0
        }
        ));
        if (!p)
            return this.next(n, r);
        var y = We(Object.keys(a).map((function(v) {
            return a[v].configuration
        }
        )));
        return {
            transitions: b,
            exitSet: We(m.map((function(v) {
                return v.exitSet
            }
            ))),
            configuration: y,
            source: n,
            actions: We(Object.keys(a).map((function(v) {
                return a[v].actions
            }
            )))
        }
    }
    ,
    e.prototype._transition = function(t, n, r) {
        return Pe(t) ? this.transitionLeafNode(t, n, r) : Object.keys(t).length === 1 ? this.transitionCompoundNode(t, n, r) : this.transitionParallelNode(t, n, r)
    }
    ,
    e.prototype.getTransitionData = function(t, n) {
        return this._transition(t.value, t, ot(n))
    }
    ,
    e.prototype.next = function(t, n) {
        var r, i, o = this, a = n.name, s = [], l = [], d;
        try {
            for (var u = we(this.getCandidates(a)), c = u.next(); !c.done; c = u.next()) {
                var f = c.value
                  , m = f.cond
                  , b = f.in
                  , p = t.context
                  , y = b ? Pe(b) && Zn(b) ? t.matches(Hr(this.getStateNodeById(b).path, this.delimiter)) : qs(Hr(b, this.delimiter), B0(this.path.slice(0, -2))(t.value)) : !0
                  , v = !1;
                try {
                    v = !m || Of(this.machine, m, p, n, t)
                } catch (k) {
                    throw new Error("Unable to evaluate guard '".concat(m.name || m.type, "' in transition for event '").concat(a, "' in state node '").concat(this.id, `':\n`).concat(k.message))
                }
                if (v && y) {
                    f.target !== void 0 && (l = f.target),
                    s.push.apply(s, Re([], Se(f.actions), !1)),
                    d = f;
                    break
                }
            }
        } catch (k) {
            r = {
                error: k
            }
        } finally {
            try {
                c && !c.done && (i = u.return) && i.call(u)
            } finally {
                if (r)
                    throw r.error
            }
        }
        if (d) {
            if (!l.length)
                return {
                    transitions: [d],
                    exitSet: [],
                    configuration: t.value ? [this] : [],
                    source: t,
                    actions: s
                };
            var w = We(l.map((function(k) {
                return o.getRelativeStateNodes(k, t.historyValue)
            }
            )))
              , g = !!d.internal;
            return {
                transitions: [d],
                exitSet: g ? [] : We(l.map((function(k) {
                    return o.getPotentiallyReenteringNodes(k)
                }
                ))),
                configuration: w,
                source: t,
                actions: s
            }
        }
    }
    ,
    e.prototype.getPotentiallyReenteringNodes = function(t) {
        if (this.order < t.order)
            return [this];
        for (var n = [], r = this, i = t; r && r !== i; )
            n.push(r),
            r = r.parent;
        return r !== i ? [] : (n.push(i),
        n)
    }
    ,
    e.prototype.getActions = function(t, n, r, i, o, a, s) {
        var l, d, u, c, f = this, m = a ? Lr([], this.getStateNodes(a.value)) : [], b = new Set;
        try {
            for (var p = we(Array.from(t).sort((function(q, $) {
                return q.order - $.order
            }
            ))), y = p.next(); !y.done; y = p.next()) {
                var v = y.value;
                (!Fr(m, v) || Fr(r.exitSet, v) || v.parent && b.has(v.parent)) && b.add(v)
            }
        } catch (q) {
            l = {
                error: q
            }
        } finally {
            try {
                y && !y.done && (d = p.return) && d.call(p)
            } finally {
                if (l)
                    throw l.error
            }
        }
        try {
            for (var w = we(m), g = w.next(); !g.done; g = w.next()) {
                var v = g.value;
                (!Fr(t, v) || Fr(r.exitSet, v.parent)) && r.exitSet.push(v)
            }
        } catch (q) {
            u = {
                error: q
            }
        } finally {
            try {
                g && !g.done && (c = w.return) && c.call(w)
            } finally {
                if (u)
                    throw u.error
            }
        }
        r.exitSet.sort((function(q, $) {
            return $.order - q.order
        }
        ));
        var k = Array.from(b).sort((function(q, $) {
            return q.order - $.order
        }
        ))
          , O = new Set(r.exitSet)
          , D = We(k.map((function(q) {
            var $ = [];
            if (q.type !== "final")
                return $;
            var re = q.parent;
            if (!re.parent)
                return $;
            $.push(Mr(q.id, q.doneData), Mr(re.id, q.doneData ? oo(q.doneData, i, o) : void 0));
            var he = re.parent;
            return he.type === "parallel" && ai(he).every((function(Te) {
                return Wi(r.configuration, Te)
            }
            )) && $.push(Mr(he.id)),
            $
        }
        )))
          , R = k.map((function(q) {
            var $ = q.onEntry
              , re = q.activities.map((function(he) {
                return Ff(he)
            }
            ));
            return {
                type: "entry",
                actions: Qt(s ? Re(Re([], Se($), !1), Se(re), !1) : Re(Re([], Se(re), !1), Se($), !1), f.machine.options.actions)
            }
        }
        )).concat({
            type: "state_done",
            actions: D.map((function(q) {
                return Df(q)
            }
            ))
        })
          , G = Array.from(O).map((function(q) {
            return {
                type: "exit",
                actions: Qt(Re(Re([], Se(q.onExit), !1), Se(q.activities.map((function($) {
                    return Nf($)
                }
                ))), !1), f.machine.options.actions)
            }
        }
        ))
          , L = G.concat({
            type: "transition",
            actions: Qt(r.actions, this.machine.options.actions)
        }).concat(R);
        if (n) {
            var Z = Qt(We(Re([], Se(t), !1).sort((function(q, $) {
                return $.order - q.order
            }
            )).map((function(q) {
                return q.onExit
            }
            ))), this.machine.options.actions).filter((function(q) {
                return !Ka(q)
            }
            ));
            return L.concat({
                type: "stop",
                actions: Z
            })
        }
        return L
    }
    ,
    e.prototype.transition = function(t, n, r, i) {
        t === void 0 && (t = this.initialState);
        var o = ot(n), a;
        if (t instanceof Ut)
            a = r === void 0 ? t : this.resolveState(Ut.from(t, r));
        else {
            var s = Pe(t) ? this.resolve(io(this.getResolvedPath(t))) : this.resolve(t)
              , l = r ?? this.machine.context;
            a = this.resolveState(Ut.from(s, l))
        }
        if (this.strict && !this.events.includes(o.name) && !q0(o.name))
            throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(o.name, "'"));
        var d = this._transition(a.value, a, o) || {
            transitions: [],
            configuration: [],
            exitSet: [],
            source: a,
            actions: []
        }
          , u = Lr([], this.getStateNodes(a.value))
          , c = d.configuration.length ? Lr(u, d.configuration) : u;
        return d.configuration = Re([], Se(c), !1),
        this.resolveTransition(d, a, a.context, i, o)
    }
    ,
    e.prototype.resolveRaisedTransition = function(t, n, r, i) {
        var o, a = t.actions;
        return t = this.transition(t, n, void 0, i),
        t._event = r,
        t.event = r.data,
        (o = t.actions).unshift.apply(o, Re([], Se(a), !1)),
        t
    }
    ,
    e.prototype.resolveTransition = function(t, n, r, i, o) {
        var a, s, l, d, u = this;
        o === void 0 && (o = Bn);
        var c = t.configuration
          , f = !n || t.transitions.length > 0
          , m = f ? t.configuration : n ? n.configuration : []
          , b = Wi(m, this)
          , p = f ? pb(this.machine, c) : void 0
          , y = n ? n.historyValue ? n.historyValue : t.source ? this.machine.historyValue(n.value) : void 0 : void 0
          , v = this.getActions(new Set(m), b, t, r, o, n, i)
          , w = n ? j({}, n.activities) : {};
        try {
            for (var g = we(v), k = g.next(); !k.done; k = g.next()) {
                var O = k.value;
                try {
                    for (var D = (l = void 0,
                    we(O.actions)), R = D.next(); !R.done; R = D.next()) {
                        var G = R.value;
                        G.type === no ? w[G.activity.id || G.activity.type] = G : G.type === Io && (w[G.activity.id || G.activity.type] = !1)
                    }
                } catch (Oe) {
                    l = {
                        error: Oe
                    }
                } finally {
                    try {
                        R && !R.done && (d = D.return) && d.call(D)
                    } finally {
                        if (l)
                            throw l.error
                    }
                }
            }
        } catch (Oe) {
            a = {
                error: Oe
            }
        } finally {
            try {
                k && !k.done && (s = g.return) && s.call(g)
            } finally {
                if (a)
                    throw a.error
            }
        }
        var L = Se(oi(this, n, r, o, v, i, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2)
          , Z = L[0]
          , q = L[1]
          , $ = Se(G0(Z, Ka), 2)
          , re = $[0]
          , he = $[1]
          , Te = Z.filter((function(Oe) {
            var it;
            return Oe.type === no && ((it = Oe.activity) === null || it === void 0 ? void 0 : it.type) === ro
        }
        ))
          , ge = Te.reduce((function(Oe, it) {
            return Oe[it.activity.id] = ub(it.activity, u.machine, q, o),
            Oe
        }
        ), n ? j({}, n.children) : {})
          , K = new Ut({
            value: p || n.value,
            context: q,
            _event: o,
            _sessionid: n ? n._sessionid : null,
            historyValue: p ? y ? K0(y, p) : void 0 : n ? n.historyValue : void 0,
            history: !p || t.source ? n : void 0,
            actions: p ? he : [],
            activities: p ? w : n ? n.activities : {},
            events: [],
            configuration: m,
            transitions: t.transitions,
            children: ge,
            done: b,
            tags: bd(m),
            machine: this
        })
          , ue = r !== q;
        K.changed = o.name === jo || ue;
        var ze = K.history;
        ze && delete ze.history;
        var Je = !b && (this._transient || c.some((function(Oe) {
            return Oe._transient
        }
        )));
        if (!f && (!Je || o.name === Mi))
            return K;
        var ie = K;
        if (!b)
            for (Je && (ie = this.resolveRaisedTransition(ie, {
                type: yf
            }, o, i)); re.length; ) {
                var pe = re.shift();
                ie = this.resolveRaisedTransition(ie, pe._event, o, i)
            }
        var qe = ie.changed || (ze ? !!ie.actions.length || ue || typeof ze.value != typeof ie.value || !qf(ie.value, ze.value) : void 0);
        return ie.changed = qe,
        ie.history = ze,
        ie
    }
    ,
    e.prototype.getStateNode = function(t) {
        if (Zn(t))
            return this.machine.getStateNodeById(t);
        if (!this.states)
            throw new Error("Unable to retrieve child state '".concat(t, "' from '").concat(this.id, "'; no child states exist."));
        var n = this.states[t];
        if (!n)
            throw new Error("Child state '".concat(t, "' does not exist on '").concat(this.id, "'"));
        return n
    }
    ,
    e.prototype.getStateNodeById = function(t) {
        var n = Zn(t) ? t.slice(Xa.length) : t;
        if (n === this.id)
            return this;
        var r = this.machine.idMap[n];
        if (!r)
            throw new Error("Child state node '#".concat(n, "' does not exist on machine '").concat(this.id, "'"));
        return r
    }
    ,
    e.prototype.getStateNodeByPath = function(t) {
        if (typeof t == "string" && Zn(t))
            try {
                return this.getStateNodeById(t.slice(1))
            } catch {}
        for (var n = Ga(t, this.delimiter).slice(), r = this; n.length; ) {
            var i = n.shift();
            if (!i.length)
                break;
            r = r.getStateNode(i)
        }
        return r
    }
    ,
    e.prototype.resolve = function(t) {
        var n, r = this;
        if (!t)
            return this.initialStateValue || Xn;
        switch (this.type) {
        case "parallel":
            return $r(this.initialStateValue, (function(o, a) {
                return o ? r.getStateNode(a).resolve(t[a] || o) : Xn
            }
            ));
        case "compound":
            if (Pe(t)) {
                var i = this.getStateNode(t);
                return i.type === "parallel" || i.type === "compound" ? (n = {},
                n[t] = i.initialStateValue,
                n) : t
            }
            return Object.keys(t).length ? $r(t, (function(o, a) {
                return o ? r.getStateNode(a).resolve(o) : Xn
            }
            )) : this.initialStateValue || {};
        default:
            return t || Xn
        }
    }
    ,
    e.prototype.getResolvedPath = function(t) {
        if (Zn(t)) {
            var n = this.machine.idMap[t.slice(Xa.length)];
            if (!n)
                throw new Error("Unable to find state node '".concat(t, "'"));
            return n.path
        }
        return Ga(t, this.delimiter)
    }
    ,
    Object.defineProperty(e.prototype, "initialStateValue", {
        get: function() {
            var t;
            if (this.__cache.initialStateValue)
                return this.__cache.initialStateValue;
            var n;
            if (this.type === "parallel")
                n = md(this.states, (function(r) {
                    return r.initialStateValue || Xn
                }
                ), (function(r) {
                    return r.type !== "history"
                }
                ));
            else if (this.initial !== void 0) {
                if (!this.states[this.initial])
                    throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
                n = so(this.states[this.initial]) ? this.initial : (t = {},
                t[this.initial] = this.states[this.initial].initialStateValue,
                t)
            } else
                n = {};
            return this.__cache.initialStateValue = n,
            this.__cache.initialStateValue
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.getInitialState = function(t, n) {
        this._init();
        var r = this.getStateNodes(t);
        return this.resolveTransition({
            configuration: r,
            exitSet: [],
            transitions: [],
            source: void 0,
            actions: []
        }, void 0, n ?? this.machine.context, void 0)
    }
    ,
    Object.defineProperty(e.prototype, "initialState", {
        get: function() {
            var t = this.initialStateValue;
            if (!t)
                throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            return this.getInitialState(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "target", {
        get: function() {
            var t;
            if (this.type === "history") {
                var n = this.config;
                Pe(n.target) ? t = Zn(n.target) ? io(this.machine.getStateNodeById(n.target).path.slice(this.path.length - 1)) : n.target : t = n.target
            }
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.getRelativeStateNodes = function(t, n, r) {
        return r === void 0 && (r = !0),
        r ? t.type === "history" ? t.resolveHistory(n) : t.initialStateNodes : [t]
    }
    ,
    Object.defineProperty(e.prototype, "initialStateNodes", {
        get: function() {
            var t = this;
            if (so(this))
                return [this];
            if (this.type === "compound" && !this.initial)
                return [this];
            var n = Hi(this.initialStateValue);
            return We(n.map((function(r) {
                return t.getFromRelativePath(r)
            }
            )))
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.getFromRelativePath = function(t) {
        if (!t.length)
            return [this];
        var n = Se(t)
          , r = n[0]
          , i = n.slice(1);
        if (!this.states)
            throw new Error("Cannot retrieve subPath '".concat(r, "' from node with no states"));
        var o = this.getStateNode(r);
        if (o.type === "history")
            return o.resolveHistory();
        if (!this.states[r])
            throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
        return this.states[r].getFromRelativePath(i)
    }
    ,
    e.prototype.historyValue = function(t) {
        if (Object.keys(this.states).length)
            return {
                current: t || this.initialStateValue,
                states: md(this.states, (function(n, r) {
                    if (!t)
                        return n.historyValue();
                    var i = Pe(t) ? void 0 : t[r];
                    return n.historyValue(i || n.initialStateValue)
                }
                ), (function(n) {
                    return !n.history
                }
                ))
            }
    }
    ,
    e.prototype.resolveHistory = function(t) {
        var n = this;
        if (this.type !== "history")
            return [this];
        var r = this.parent;
        if (!t) {
            var i = this.target;
            return i ? We(Hi(i).map((function(a) {
                return r.getFromRelativePath(a)
            }
            ))) : r.initialStateNodes
        }
        var o = H0(r.path, "states")(t).current;
        return Pe(o) ? [r.getStateNode(o)] : We(Hi(o).map((function(a) {
            return n.history === "deep" ? r.getFromRelativePath(a) : [r.states[a[0]]]
        }
        )))
    }
    ,
    Object.defineProperty(e.prototype, "stateIds", {
        get: function() {
            var t = this
              , n = We(Object.keys(this.states).map((function(r) {
                return t.states[r].stateIds
            }
            )));
            return [this.id].concat(n)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "events", {
        get: function() {
            var t, n, r, i;
            if (this.__cache.events)
                return this.__cache.events;
            var o = this.states
              , a = new Set(this.ownEvents);
            if (o)
                try {
                    for (var s = we(Object.keys(o)), l = s.next(); !l.done; l = s.next()) {
                        var d = l.value
                          , u = o[d];
                        if (u.states)
                            try {
                                for (var c = (r = void 0,
                                we(u.events)), f = c.next(); !f.done; f = c.next()) {
                                    var m = f.value;
                                    a.add("".concat(m))
                                }
                            } catch (b) {
                                r = {
                                    error: b
                                }
                            } finally {
                                try {
                                    f && !f.done && (i = c.return) && i.call(c)
                                } finally {
                                    if (r)
                                        throw r.error
                                }
                            }
                    }
                } catch (b) {
                    t = {
                        error: b
                    }
                } finally {
                    try {
                        l && !l.done && (n = s.return) && n.call(s)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            return this.__cache.events = Array.from(a)
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e.prototype, "ownEvents", {
        get: function() {
            var t = new Set(this.transitions.filter((function(n) {
                return !(!n.target && !n.actions.length && n.internal)
            }
            )).map((function(n) {
                return n.eventType
            }
            )));
            return Array.from(t)
        },
        enumerable: !1,
        configurable: !0
    }),
    e.prototype.resolveTarget = function(t) {
        var n = this;
        if (t !== void 0)
            return t.map((function(r) {
                if (!Pe(r))
                    return r;
                var i = r[0] === n.delimiter;
                if (i && !n.parent)
                    return n.getStateNodeByPath(r.slice(1));
                var o = i ? n.key + r : r;
                if (n.parent)
                    try {
                        var a = n.parent.getStateNodeByPath(o);
                        return a
                    } catch (s) {
                        throw new Error("Invalid transition definition for state node '".concat(n.id, `':\n`).concat(s.message))
                    }
                else
                    return n.getStateNodeByPath(o)
            }
            ))
    }
    ,
    e.prototype.formatTransition = function(t) {
        var n = this
          , r = J0(t.target)
          , i = "internal"in t ? t.internal : r ? r.some((function(l) {
            return Pe(l) && l[0] === n.delimiter
        }
        )) : !0
          , o = this.machine.options.guards
          , a = this.resolveTarget(r)
          , s = j(j({}, t), {
            actions: Qt(Pt(t.actions)),
            cond: Tf(t.cond, o),
            target: a,
            source: this,
            internal: i,
            eventType: t.event,
            toJSON: function() {
                return j(j({}, s), {
                    target: s.target ? s.target.map((function(l) {
                        return "#".concat(l.id)
                    }
                    )) : void 0,
                    source: "#".concat(n.id)
                })
            }
        });
        return s
    }
    ,
    e.prototype.formatTransitions = function() {
        var t, n, r = this, i;
        if (!this.config.on)
            i = [];
        else if (Array.isArray(this.config.on))
            i = this.config.on;
        else {
            var o = this.config.on
              , a = va
              , s = o[a]
              , l = s === void 0 ? [] : s
              , d = Us(o, [typeof a == "symbol" ? a : a + ""]);
            i = We(Object.keys(d).map((function(w) {
                var g = Yn(w, d[w]);
                return g
            }
            )).concat(Yn(va, l)))
        }
        var u = this.config.always ? Yn("", this.config.always) : []
          , c = this.config.onDone ? Yn(String(Mr(this.id)), this.config.onDone) : []
          , f = We(this.invoke.map((function(w) {
            var g = [];
            return w.onDone && g.push.apply(g, Re([], Se(Yn(String(qr(w.id)), w.onDone)), !1)),
            w.onError && g.push.apply(g, Re([], Se(Yn(String(er(w.id)), w.onError)), !1)),
            g
        }
        )))
          , m = this.after
          , b = We(Re(Re(Re(Re([], Se(c), !1), Se(f), !1), Se(i), !1), Se(u), !1).map((function(w) {
            return Pt(w).map((function(g) {
                return r.formatTransition(g)
            }
            ))
        }
        )));
        try {
            for (var p = we(m), y = p.next(); !y.done; y = p.next()) {
                var v = y.value;
                b.push(v)
            }
        } catch (w) {
            t = {
                error: w
            }
        } finally {
            try {
                y && !y.done && (n = p.return) && n.call(p)
            } finally {
                if (t)
                    throw t.error
            }
        }
        return b
    }
    ,
    e
}();
function Ab(e, t) {
    return new Ob(e,t)
}
var lo = zf;
function Db(e) {
    return "state"in e
}
var gd = function() {};
function Pb(e) {
    return "getSnapshot"in e ? e.getSnapshot() : Db(e) ? e.state : void 0
}
function $b(e, t) {
    t === void 0 && (t = Pb);
    var n = tt(e) ? e : Da(e)
      , r = Da(t(n.value))
      , i = function(o) {
        n.value.send(o)
    };
    return dt(n, (function(o, a, s) {
        r.value = t(o);
        var l = o.subscribe({
            next: function(d) {
                return r.value = d
            },
            error: gd,
            complete: gd
        }).unsubscribe;
        s((function() {
            return l()
        }
        ))
    }
    ), {
        immediate: !0
    }),
    {
        state: r,
        send: i
    }
}
const Mb = {
    CLOSE: "closed",
    ERROR: "error",
    UPDATE_CONTEXT: {
        actions: lo(( (e, t) => {
            const {...n} = t;
            return n
        }
        ))
    }
}
  , Gf = {
    store_id: null,
    product_id: null,
    variant_id: null,
    coupon: null,
    extra: null,
    quantity: null,
    product: null,
    variant: null,
    error: null,
    discord_data: null
}
  , Lb = {
    entry: lo(Gf),
    on: {
        OPEN: {
            target: "checkout",
            actions: lo(( (e, t) => ({
                store_id: t.store_id,
                product_id: t.product_id,
                variant_id: t.variant_id,
                coupon: t.coupon,
                extra: t.extra,
                quantity: t.quantity,
                email: t.email,
                customization: t.customization,
                affiliate: t.affiliate
            })))
        }
    }
}
  , Fb = {
    on: {
        FETCH: "checkout"
    }
}
  , Nb = {
    on: {
        VARIANT_SELECTION: "variant_selection",
        VARIANT_OVERVIEW: "overview"
    },
    invoke: {
        id: "openingCheckout",
        src: e => t => {
            if (!e.store_id || !e.product_id)
                throw {
                    message: "This checkout button is not properly configured.",
                    errors: {
                        ...e.store_id ? {
                            product_id: []
                        } : {
                            store_id: []
                        }
                    }
                };
            t(e.variant_id ? "VARIANT_OVERVIEW" : "VARIANT_SELECTION")
        }
    }
}
  , vi = "https://sell.app/api/v2/fast-checkout";
function Ho(e, t) {
    for (const [n,r] of Object.entries(t))
        e = e.replace(`{${n}}`, r);
    return e
}
function cr(e) {
    return e === null ? !0 : typeof e == "string" ? e.trim() === "" : typeof e == "number" || typeof e == "boolean" ? !1 : Array.isArray(e) ? e.length === 0 : typeof e == "object" ? Object.entries(e).length === 0 : !e
}
function yd(e) {
    return !cr(e)
}
function wd(e, t) {
    return Object.fromEntries(Object.entries(e).filter((n => {
        const [r,i] = n;
        return t(i, r)
    }
    )))
}
const qo = {
    async get(e, t) {
        const n = new URL(e);
        return t && (n.search = new URLSearchParams(wd(t, yd)).toString()),
        await xd(n.toString(), {
            headers: {
                Accept: "application/json"
            }
        })
    },
    async post(e, t) {
        return await xd(e, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(wd(t, yd))
        })
    }
}
  , Ib = 422
  , zb = 403;
async function xd(e, t) {
    const n = await fetch(e, t);
    if (!n.ok && n.status !== Ib && n.status !== zb)
        throw new Error("Oops... Something went wrong while processing your request.");
    const r = await n.json();
    if (!n.ok)
        throw {
            code: n.status,
            message: r.message ?? "",
            errors: r.errors ?? {}
        };
    return r
}
const Rb = `${vi}/{store_id}/{product_id}/{variant_id}`;
async function jb(e, t, n, r) {
    const i = Ho(Rb, {
        store_id: e,
        product_id: t,
        variant_id: n
    });
    return await qo.post(i, r)
}
const Vb = `${vi}/{store_id}/{product_id}`;
async function Kf(e, t, n={}) {
    const r = Ho(Vb, {
        store_id: e,
        product_id: t
    });
    return await qo.get(r, n)
}
const Ub = `${vi}/{store_id}/{product_id}/{variant_id}`;
async function Bb(e, t, n, r={}) {
    const i = Ho(Ub, {
        store_id: e,
        product_id: t,
        variant_id: n
    });
    return await qo.get(i, r)
}
const {assign: Hb, pure: qb, send: Wb} = Bo
  , si = qb(( (e, t) => {
    const n = typeof t.data == "object" && "errors"in t.data;
    let r = !n;
    const i = n ? t.data : {
        message: t.data,
        errors: {}
    };
    if (!n || "store_id"in i.errors || "product_id"in i.errors || "variant_id"in i.errors || i.code === 403) {
        const a = " Please contact the seller to let them know.";
        i.code !== 403 ? "store_id"in i.errors ? i.message = "This store could not be found." + a : "product_id"in i.errors ? i.message = "This product could not  be found." + a : "variant_id"in i.errors ? i.message = "This variant could not be found." + a : i.message = "It looks like something went wrong." : i.message === "You have been blacklisted" ? i.message = "You have either been blacklisted by the store owner, or you are using a VPN/Proxy. If you are using a proxy, please disable it." : i.message === "Action not allowed. This store is on hold." ? i.message = "This store is on hold: Creator has not paid their invoice yet" + a : i.message = "It looks like something went wrong." + a,
        i.errors = {},
        r = !0
    }
    const o = [Hb(( () => ({
        error: i
    })))];
    return r && o.push(Wb("ERROR")),
    o
}
))
  , {assign: kd, send: Gb} = Bo
  , Kb = {
    on: {
        NEXT: {
            target: "overview",
            actions: kd(( (e, t) => ({
                variant_id: t.variant_id
            })))
        }
    },
    meta: {
        component: "VariantSelection"
    },
    initial: "fetchProductVariantList",
    states: {
        fetchProductVariantList: {
            tags: ["loading"],
            on: {
                FINISH_FETCH: "selectProductVariant"
            },
            invoke: {
                id: "fetchVariantList",
                src: async e => {
                    var t;
                    return ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Kf(e.store_id, e.product_id)
                }
                ,
                onDone: {
                    actions: [kd(( (e, t) => ({
                        product: t.data,
                        error: null
                    }))), Gb(( (e, t) => t.data.variants.length === 1 ? {
                        type: "NEXT",
                        variant_id: t.data.variants[0].id.toString()
                    } : {
                        type: "FINISH_FETCH"
                    }))]
                },
                onError: {
                    target: "#embed.error",
                    actions: si
                }
            }
        },
        selectProductVariant: {}
    }
}
  , {assign: Yb, send: ga} = Bo
  , Xb = {
    on: {
        PREVIOUS: "variant_selection",
        CONNECT_DISCORD: "connect_discord",
        FINAL_STEP: "final_step",
        FETCH: {
            internal: !0,
            target: [".fetchStates.fetching"]
        },
        FINISH_FETCH: {
            internal: !0,
            target: [".fetchStates.idle", ".overviewStates.idle"]
        }
    },
    meta: {
        component: "Overview"
    },
    type: "parallel",
    states: {
        fetchStates: {
            initial: "fetching",
            states: {
                fetching: {
                    tags: ["fetching"],
                    invoke: {
                        id: "fetchProductVariant",
                        src: async e => {
                            var t;
                            return {
                                product: ((t = e.product) == null ? void 0 : t.id.toString()) === e.product_id ? e.product : await Kf(e.store_id, e.product_id, {
                                    withoutVariants: !0
                                }),
                                variant: await Bb(e.store_id, e.product_id, e.variant_id, {
                                    coupon: e.coupon,
                                    quantity: e.quantity,
                                    extra: e.extra
                                })
                            }
                        }
                        ,
                        onDone: {
                            actions: [Yb(( (e, t) => ({
                                product: t.data.product,
                                variant: t.data.variant,
                                quantity: e.quantity ?? t.data.variant.minimum_purchase_quantity,
                                error: null
                            }))), ga("FINISH_FETCH")]
                        },
                        onError: [{
                            target: "#embed.error",
                            cond: (e, t) => {
                                var n, r, i;
                                return (i = (r = (n = t.data) == null ? void 0 : n.errors) == null ? void 0 : r.quantity) == null ? void 0 : i.includes("This product has insufficient stock to fulfill the purchase.")
                            }
                            ,
                            actions: [si, ga("FINISH_FETCH")]
                        }, {
                            actions: [si, ga("FINISH_FETCH")]
                        }]
                    }
                },
                idle: {}
            }
        },
        overviewStates: {
            initial: "loading",
            states: {
                loading: {
                    tags: ["loading"]
                },
                idle: {}
            }
        }
    }
}
  , Zb = `${vi}/{store_id}/connect-discord`;
async function Jb(e, t) {
    const n = Ho(Zb, {
        store_id: e
    });
    return await qo.get(n, t)
}
const {assign: Qb, send: _d} = Bo
  , e2 = {
    on: {
        PREVIOUS: "overview",
        NEXT: "final_step",
        FETCH: {
            internal: !0,
            target: [".fetchStates.fetching"]
        },
        FINISH_FETCH: {
            internal: !0,
            target: [".fetchStates.idle", ".overviewStates.idle"]
        }
    },
    meta: {
        component: "ConnectDiscord"
    },
    type: "parallel",
    states: {
        fetchStates: {
            initial: "fetching",
            states: {
                fetching: {
                    tags: ["fetching"],
                    invoke: {
                        id: "fetchingDiscordData",
                        src: async e => {
                            var t;
                            return await Jb(e.store_id, {
                                discord_token: ((t = e.discord_data) == null ? void 0 : t.discord_token) ?? sessionStorage.getItem("discord_token"),
                                origin: window.location.href
                            })
                        }
                        ,
                        onDone: {
                            actions: [Qb(( (e, t) => ({
                                discord_data: t.data,
                                error: null
                            }))), _d("FINISH_FETCH")]
                        },
                        onError: {
                            actions: [si, _d("FINISH_FETCH")]
                        }
                    }
                },
                idle: {}
            }
        },
        overviewStates: {
            initial: "loading",
            states: {
                loading: {
                    tags: ["loading"]
                },
                idle: {}
            }
        }
    }
}
  , t2 = {
    on: {
        PREVIOUS: "overview",
        CONNECT_DISCORD: "connect_discord"
    },
    meta: {
        component: "FinalStep"
    },
    initial: "checkFinalStep",
    states: {
        checkFinalStep: {
            on: {
                CHECKOUT: "checkout_product"
            }
        },
        checkout_product: {
            invoke: {
                id: "checkout_product",
                src: async e => await jb(e.store_id, e.product_id, e.variant_id, {
                    coupon: e.coupon,
                    quantity: e.quantity,
                    extra: e.extra,
                    customer_email: Ee.customer_email,
                    payment_method: Ee.payment_method,
                    additional_information: Ee.additional_information,
                    vat_id: Ee.vat_id,
                    country: Ee.country,
                    discord_token: Ee.discord_token,
                    affiliate: e.affiliate
                }),
                onDone: {
                    target: "#embed.invoice_processed",
                    actions: [lo(( (e, t) => ({
                        order: t.data.payment_url,
                        error: null
                    }))), (e, t) => {
                        window.open(t.data.payment_url, "_blank")
                    }
                    ]
                },
                onError: {
                    target: "#embed.checkout.overview",
                    actions: si
                }
            }
        }
    }
}
  , n2 = {
    initial: "entry",
    states: {
        entry: Nb,
        variant_selection: Kb,
        overview: Xb,
        connect_discord: e2,
        final_step: t2
    }
}
  , r2 = {}
  , i2 = {
    closed: Lb,
    error: Fb,
    checkout: n2,
    invoice_processed: r2
}
  , o2 = {
    id: "embed",
    initial: "closed",
    context: Gf,
    predictableActionArguments: !0,
    on: Mb,
    states: i2
}
  , a2 = Ab(o2)
  , s2 = Wf(a2).start();
function Nt() {
    const {state: e, send: t} = $b(s2);
    return {
        context: P(( () => e.value.context)),
        send: t,
        state: e
    }
}
const Ee = vr({
    customer_email: "",
    payment_method: null,
    additional_information: {},
    vat_id: "",
    country: "",
    discord_token: ""
});
function Yf(e, t) {
    return S(),
    T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [_("path", {
        "fill-rule": "evenodd",
        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
        "clip-rule": "evenodd"
    })])
}
function l2(e, t) {
    return S(),
    T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [_("path", {
        "fill-rule": "evenodd",
        d: "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",
        "clip-rule": "evenodd"
    })])
}
function d2(e, t) {
    return S(),
    T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [_("path", {
        "fill-rule": "evenodd",
        d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
        "clip-rule": "evenodd"
    })])
}
function Xf(e, t) {
    return S(),
    T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [_("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })])
}
function u2(e, t) {
    return S(),
    T("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [_("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    })])
}
const c2 = ve({
    name: "MyButton",
    props: {
        loading: {
            type: Boolean,
            required: !1,
            default: !1
        },
        disabled: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    setup(e) {
        const t = W(!1)
          , n = W(!1);
        let r = null;
        return dt(( () => e.loading), (i => {
            i ? (r && clearTimeout(r),
            r = setTimeout(( () => {
                t.value = !0,
                n.value = !0
            }
            ), 2e3)) : (r && clearTimeout(r),
            t.value = !1,
            n.value = !1)
        }
        )),
        {
            showLoading: t,
            showDisabled: n
        }
    }
})
  , gt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r,i] of t)
        n[r] = i;
    return n
}
  , f2 = ["disabled"];
function m2(e, t, n, r, i, o) {
    return S(),
    T("button", {
        class: ye(["embed:inline-flex embed:items-center embed:justify-center embed:sm:text-sm embed:px-4 embed:py-2 embed:focus:ring-0 embed:focus:outline-hidden embed:disabled:opacity-75 embed:disabled:cursor-not-allowed embed:transition embed:duration-200 embed:ease-in-out", {
            "embed:font-bold embed:rounded-lg embed:shadow-inner embed:hover:shadow-emerald-500 embed:focus:shadow-emerald-200 embed:[background:linear-gradient(theme(colors.emerald.400),_theme(colors.emerald.400))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-white embed:dark:text-white embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:border-2 embed:border-transparent embed:hover:border-emerald-500 embed:dark:hover:border-emerald-300": typeof e.$attrs.primary < "u",
            "embed:rounded-full embed:bg-zinc-100 embed:dark:bg-zinc-950 embed:text-zinc-800 embed:shadow embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:text-zinc-300 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:font-medium": typeof e.$attrs.outline < "u",
            "embed:bg-red-600 embed:hover:bg-red-700 embed:text-white embed:focus:ring-offset-2 embed:ring-offset-transparent embed:focus:ring-red-500": typeof e.$attrs.danger < "u"
        }]),
        disabled: e.disabled || e.showDisabled
    }, [_("span", {
        class: ye({
            "embed:animate-pulse embed:opacity-50": e.showLoading
        })
    }, [Qr(e.$slots, "default")], 2)], 10, f2)
}
const Wo = gt(c2, [["render", m2]])
  , p2 = ve({
    name: "VariantSelection",
    components: {
        RadioGroup: cf,
        RadioGroupDescription: pf,
        RadioGroupLabel: mf,
        RadioGroupOption: ff,
        DialogTitle: yr,
        MyButton: Wo
    },
    setup() {
        const {context: e, send: t, state: n} = Nt()
          , r = P(( () => e.value.product))
          , i = W(null);
        function o(a) {
            a && (i.value = a),
            !cr(i.value) && t({
                type: "NEXT",
                variant_id: i.value
            })
        }
        return {
            state: n,
            product: r,
            selected_variant: i,
            selectVariant: o,
            context: e
        }
    }
})
  , h2 = {
    class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6"
}
  , b2 = {
    class: "embed:space-y-4"
}
  , v2 = ["onClick"]
  , g2 = {
    class: "embed:flex embed:items-center embed:grow-0"
}
  , y2 = {
    class: "embed:text-sm"
}
  , w2 = {
    class: "embed:flex embed:flex-col embed:sm:flex-row embed:sm:justify-between embed:text-left embed:mt-2"
}
  , x2 = {
    class: "embed:flex embed:text-sm embed:sm:mt-0 embed:sm:block embed:sm:mr-4 embed:sm:text-right embed:w-auto embed:shrink-0"
};
function k2(e, t, n, r, i, o) {
    const a = oe("DialogTitle")
      , s = oe("RadioGroupLabel")
      , l = oe("RadioGroupDescription")
      , d = oe("RadioGroupOption")
      , u = oe("RadioGroup");
    return S(),
    T("div", null, [_("div", h2, [H(a, {
        as: "h2",
        class: "embed:mb-1 embed:font-bold embed:text-center embed:text-black embed:dark:text-white embed:text-xl"
    }, {
        default: te(( () => [ee(A(e.product.title), 1)])),
        _: 1
    }), t[3] || (t[3] = _("p", {
        class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs"
    }, "Select the product you'd like to purchase", -1)), H(u, {
        modelValue: e.selected_variant,
        "onUpdate:modelValue": t[0] || (t[0] = c => e.selected_variant = c)
    }, {
        default: te(( () => [H(s, {
            class: "embed:sr-only"
        }, {
            default: te(( () => t[1] || (t[1] = [ee("Select the product variant")]))),
            _: 1
        }), _("div", b2, [(S(!0),
        T(U, null, yn(e.product.variants, (c => (S(),
        ke(d, {
            key: c.id,
            as: "template",
            value: c.id,
            disabled: c.stock === 0
        }, {
            default: te(( ({checked: f}) => [_("div", {
                class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner", [c.stock === 0 ? "embed:opacity-50 embed:cursor-not-allowed" : "embed:cursor-pointer", f ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950", "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"]]),
                onClick: m => (Number(c.stock) > 0 || c.stock === "∞") && e.selectVariant(c.id.toString())
            }, [_("div", g2, [_("div", y2, [H(s, {
                as: "p",
                class: "embed:font-bold embed:text-black embed:dark:text-white",
                style: {
                    "text-transform": "embed:capitalize"
                }
            }, {
                default: te(( () => [ee(A(c.title), 1)])),
                _: 2
            }, 1024)])]), H(l, {
                as: "div",
                class: "embed:flex embed:text-xs embed:text-left"
            }, {
                default: te(( () => [_("div", {
                    class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                }, A(c.description), 3)])),
                _: 2
            }, 1024), _("div", w2, [_("div", x2, [_("div", {
                class: ye([f ? "embed:text-black embed:dark:text-zinc-200 embed:font-bold" : "embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-medium"])
            }, A(c.price), 3)]), H(l, {
                as: "div",
                class: "embed:flex embed:text-xs embed:text-left"
            }, {
                default: te(( () => [_("div", {
                    class: ye(["embed:flex embed:text-xs embed:text-left", [f ? "embed:text-black embed:dark:text-zinc-200" : "embed:text-zinc-500 embed:dark:text-zinc-400"]])
                }, A(c.stock) + " in stock", 3)])),
                _: 2
            }, 1024)]), t[2] || (t[2] = _("div", {
                class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                "aria-hidden": "true"
            }, null, -1))], 10, v2)])),
            _: 2
        }, 1032, ["value", "disabled"])))), 128))])])),
        _: 1
    }, 8, ["modelValue"])])])
}
const _2 = gt(p2, [["render", k2]])
  , kn = (e, t, n) => {
    const r = document.createElement(e)
      , [i,o] = Array.isArray(t) ? [void 0, t] : [t, n];
    return i && Object.assign(r, i),
    o == null || o.forEach((a => r.appendChild(a))),
    r
}
  , S2 = (e, t) => {
    var n;
    return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft
}
  , E2 = e => e.offsetWidth > 0 && e.offsetHeight > 0
  , C2 = (e, t) => {
    customElements.get(e) !== t && customElements.define(e, t)
}
;
function T2(e, t, {reverse: n=!1}={}) {
    const r = e.length;
    for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
        t(e[i], i)
}
const O2 = String.raw
  , A2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)")
  , D2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)")
  , Sd = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null
  , uo = "--_number-flow-d-opacity"
  , Ks = "--_number-flow-d-width"
  , co = "--_number-flow-dx"
  , Ys = "--_number-flow-d"
  , P2 = ( () => {
    try {
        return CSS.registerProperty({
            name: uo,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }),
        CSS.registerProperty({
            name: co,
            syntax: "<length>",
            inherits: !0,
            initialValue: "0px"
        }),
        CSS.registerProperty({
            name: Ks,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }),
        CSS.registerProperty({
            name: Ys,
            syntax: "<number>",
            inherits: !0,
            initialValue: "0"
        }),
        !0
    } catch {
        return !1
    }
}
)()
  , $2 = "var(--number-flow-char-height, 1em)"
  , fn = "var(--number-flow-mask-height, 0.25em)"
  , Ed = `calc(${fn} / 2)`
  , Za = "var(--number-flow-mask-width, 0.5em)"
  , Ln = `calc(${Za} / var(--scale-x))`
  , Li = "#000 0, transparent 71%"
  , Cd = O2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${$2} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Ks}) / var(--width));transform:translateX(var(${co})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Za});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Ln},#000 calc(100% - ${Ln}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${fn},#000 calc(100% - ${fn}),transparent 100% ),radial-gradient(at bottom right,${Li}),radial-gradient(at bottom left,${Li}),radial-gradient(at top left,${Li}),radial-gradient(at top right,${Li});-webkit-mask-size:100% calc(100% - ${fn} * 2),calc(100% - ${Ln} * 2) 100%,${Ln} ${fn},${Ln} ${fn},${Ln} ${fn},${Ln} ${fn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Ed} ${Za};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${co})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${Ys})}.digit__num,.number .section::after{padding:${Ed} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${uo}))}`
  , M2 = HTMLElement
  , L2 = D2 && A2 && P2;
let Fi, Bt = class extends M2 {
    constructor() {
        super(),
        this.created = !1,
        this.manual = !1;
        const {animated: t, ...n} = this.constructor.defaultProps;
        this._animated = this.computedAnimated = t,
        Object.assign(this, n)
    }
    get animated() {
        return this._animated
    }
    set animated(t) {
        var n;
        this.animated !== t && (this._animated = t,
        (n = this.shadowRoot) == null || n.getAnimations().forEach((r => r.finish())))
    }
    set data(t) {
        var n;
        if (t == null)
            return;
        const {pre: r, integer: i, fraction: o, post: a, value: s} = t;
        if (this.created) {
            const l = this._data;
            this._data = t,
            this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend,
            this.computedAnimated = L2 && this._animated && (!this.respectMotionPreference || !(Sd != null && Sd.matches)) && E2(this),
            (n = this.plugins) == null || n.forEach((d => {
                var u;
                return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this)
            }
            )),
            this.manual || this.willUpdate(),
            this._pre.update(r),
            this._num.update({
                integer: i,
                fraction: o
            }),
            this._post.update(a),
            this.manual || this.didUpdate()
        } else {
            if (this._data = t,
            this.attachShadow({
                mode: "open"
            }),
            typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
                Fi || (Fi = new CSSStyleSheet,
                Fi.replaceSync(Cd)),
                this.shadowRoot.adoptedStyleSheets = [Fi];
            else {
                const l = document.createElement("style");
                l.textContent = Cd,
                this.shadowRoot.appendChild(l)
            }
            this._pre = new Od(this,r,{
                justify: "right",
                part: "left"
            }),
            this.shadowRoot.appendChild(this._pre.el),
            this._num = new F2(this,i,o),
            this.shadowRoot.appendChild(this._num.el),
            this._post = new Od(this,a,{
                justify: "left",
                part: "right"
            }),
            this.shadowRoot.appendChild(this._post.el)
        }
        this.created = !0
    }
    willUpdate() {
        this._pre.willUpdate(),
        this._num.willUpdate(),
        this._post.willUpdate()
    }
    didUpdate() {
        if (!this.computedAnimated)
            return;
        this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")),
        this._pre.didUpdate(),
        this._num.didUpdate(),
        this._post.didUpdate();
        const t = new AbortController;
        Promise.all(this.shadowRoot.getAnimations().map((n => n.finished))).then(( () => {
            t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")),
            this._abortAnimationsFinish = void 0)
        }
        )),
        this._abortAnimationsFinish = t
    }
}
;
Bt.defaultProps = {
    transformTiming: {
        duration: 900,
        easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
    },
    spinTiming: void 0,
    opacityTiming: {
        duration: 450,
        easing: "ease-out"
    },
    animated: !0,
    trend: (e, t) => Math.sign(t - e),
    respectMotionPreference: !0,
    plugins: void 0,
    digits: void 0
};
class F2 {
    constructor(t, n, r, {className: i, ...o}={}) {
        this.flow = t,
        this._integer = new Td(t,n,{
            justify: "right",
            part: "integer"
        }),
        this._fraction = new Td(t,r,{
            justify: "left",
            part: "fraction"
        }),
        this._inner = kn("span", {
            className: "number__inner"
        }, [this._integer.el, this._fraction.el]),
        this.el = kn("span", {
            ...o,
            part: "number",
            className: `number ${i ?? ""}`
        }, [this._inner])
    }
    willUpdate() {
        this._prevWidth = this.el.offsetWidth,
        this._prevLeft = this.el.getBoundingClientRect().left,
        this._integer.willUpdate(),
        this._fraction.willUpdate()
    }
    update({integer: t, fraction: n}) {
        this._integer.update(t),
        this._fraction.update(n)
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this._integer.didUpdate(),
        this._fraction.didUpdate();
        const n = this._prevLeft - t.left
          , r = this.el.offsetWidth
          , i = this._prevWidth - r;
        this.el.style.setProperty("--width", String(r)),
        this.el.animate({
            [co]: [`${n}px`, "0px"],
            [Ks]: [i, 0]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
let Zf = class {
    constructor(t, n, {justify: r, className: i, ...o}, a) {
        this.flow = t,
        this.children = new Map,
        this.onCharRemove = l => () => {
            this.children.delete(l)
        }
        ,
        this.justify = r;
        const s = n.map((l => this.addChar(l).el));
        this.el = kn("span", {
            ...o,
            className: `section section--justify-${r} ${i ?? ""}`
        }, a ? a(s) : s)
    }
    addChar(t, {startDigitsAtZero: n=!1, ...r}={}) {
        const i = t.type === "integer" || t.type === "fraction" ? new Qf(this,t.type,n ? 0 : t.value,t.pos,{
            ...r,
            onRemove: this.onCharRemove(t.key)
        }) : new N2(this,t.type,t.value,{
            ...r,
            onRemove: this.onCharRemove(t.key)
        });
        return this.children.set(t.key, i),
        i
    }
    unpop(t) {
        t.el.removeAttribute("inert"),
        t.el.style.top = "",
        t.el.style[this.justify] = ""
    }
    pop(t) {
        t.forEach((n => {
            n.el.style.top = `${n.el.offsetTop}px`,
            n.el.style[this.justify] = `${S2(n.el, this.justify)}px`
        }
        )),
        t.forEach((n => {
            n.el.setAttribute("inert", ""),
            n.present = !1
        }
        ))
    }
    addNewAndUpdateExisting(t) {
        const n = new Map
          , r = new Map
          , i = this.justify === "left"
          , o = i ? "prepend" : "append";
        if (T2(t, (a => {
            let s;
            this.children.has(a.key) ? (s = this.children.get(a.key),
            r.set(a, s),
            this.unpop(s),
            s.present = !0) : (s = this.addChar(a, {
                startDigitsAtZero: !0,
                animateIn: !0
            }),
            n.set(a, s)),
            this.el[o](s.el)
        }
        ), {
            reverse: i
        }),
        this.flow.computedAnimated) {
            const a = this.el.getBoundingClientRect();
            n.forEach((s => {
                s.willUpdate(a)
            }
            ))
        }
        n.forEach(( (a, s) => {
            a.update(s.value)
        }
        )),
        r.forEach(( (a, s) => {
            a.update(s.value)
        }
        ))
    }
    willUpdate() {
        const t = this.el.getBoundingClientRect();
        this._prevOffset = t[this.justify],
        this.children.forEach((n => n.willUpdate(t)))
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this.children.forEach((i => i.didUpdate(t)));
        const n = t[this.justify]
          , r = this._prevOffset - n;
        r && this.children.size && this.el.animate({
            transform: [`translateX(${r}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
;
class Td extends Zf {
    update(t) {
        const n = new Map;
        this.children.forEach(( (r, i) => {
            t.find((o => o.key === i)) || n.set(i, r),
            this.unpop(r)
        }
        )),
        this.addNewAndUpdateExisting(t),
        n.forEach((r => {
            r instanceof Qf && r.update(0)
        }
        )),
        this.pop(n)
    }
}
class Od extends Zf {
    update(t) {
        const n = new Map;
        this.children.forEach(( (r, i) => {
            t.find((o => o.key === i)) || n.set(i, r)
        }
        )),
        this.pop(n),
        this.addNewAndUpdateExisting(t)
    }
}
let Ja = class {
    constructor(t, n, {onRemove: r, animateIn: i=!1}={}) {
        this.flow = t,
        this.el = n,
        this._present = !0,
        this._remove = () => {
            var o;
            this.el.remove(),
            (o = this._onRemove) == null || o.call(this)
        }
        ,
        this.el.classList.add("animate-presence"),
        this.flow.computedAnimated && i && this.el.animate({
            [uo]: [-.9999, 0]
        }, {
            ...this.flow.opacityTiming,
            composite: "accumulate"
        }),
        this._onRemove = r
    }
    get present() {
        return this._present
    }
    set present(t) {
        if (this._present !== t) {
            if (this._present = t,
            t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""),
            !this.flow.computedAnimated) {
                t || this._remove();
                return
            }
            this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"),
            this.el.animate({
                [uo]: t ? [-.9999, 0] : [.999, 0]
            }, {
                ...this.flow.opacityTiming,
                composite: "accumulate"
            }),
            t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
                once: !0
            })
        }
    }
}
  , Jf = class extends Ja {
    constructor(t, n, r, i) {
        super(t.flow, r, i),
        this.section = t,
        this.value = n,
        this.el = r
    }
}
  , Qf = class extends Jf {
    constructor(t, n, r, i, o) {
        var a, s;
        const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1
          , d = Array.from({
            length: l
        }).map(( (c, f) => {
            const m = kn("span", {
                className: "digit__num"
            }, [document.createTextNode(String(f))]);
            return f !== r && m.setAttribute("inert", ""),
            m.style.setProperty("--n", String(f)),
            m
        }
        ))
          , u = kn("span", {
            part: `digit ${n}-digit`,
            className: "digit"
        }, d);
        u.style.setProperty("--current", String(r)),
        u.style.setProperty("--length", String(l)),
        super(t, r, u, o),
        this.pos = i,
        this._onAnimationsFinish = () => {
            this.el.classList.remove("is-spinning")
        }
        ,
        this._numbers = d,
        this.length = l
    }
    willUpdate(t) {
        const n = this.el.getBoundingClientRect();
        this._prevValue = this.value;
        const r = n[this.section.justify] - t[this.section.justify]
          , i = n.width / 2;
        this._prevCenter = this.section.justify === "left" ? r + i : r - i
    }
    update(t) {
        this.el.style.setProperty("--current", String(t)),
        this._numbers.forEach(( (n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", ""))),
        this.value = t
    }
    didUpdate(t) {
        const n = this.el.getBoundingClientRect()
          , r = n[this.section.justify] - t[this.section.justify]
          , i = n.width / 2
          , o = this.section.justify === "left" ? r + i : r - i
          , a = this._prevCenter - o;
        a && this.el.animate({
            transform: [`translateX(${a}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
        const s = this.getDelta();
        s && (this.el.classList.add("is-spinning"),
        this.el.animate({
            [Ys]: [-s, 0]
        }, {
            ...this.flow.spinTiming ?? this.flow.transformTiming,
            composite: "accumulate"
        }),
        this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
            once: !0
        }))
    }
    getDelta() {
        var t;
        if (this.flow.plugins)
            for (const i of this.flow.plugins) {
                const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
                if (o != null)
                    return o
            }
        const n = this.value - this._prevValue
          , r = this.flow.computedTrend || Math.sign(n);
        return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n
    }
}
;
class N2 extends Jf {
    constructor(t, n, r, i) {
        const o = kn("span", {
            className: "symbol__value",
            textContent: r
        });
        super(t, r, kn("span", {
            part: `symbol ${n}`,
            className: "symbol"
        }, [o]), i),
        this.type = n,
        this._children = new Map,
        this._onChildRemove = a => () => {
            this._children.delete(a)
        }
        ,
        this._children.set(r, new Ja(this.flow,o,{
            onRemove: this._onChildRemove(r)
        }))
    }
    willUpdate(t) {
        if (this.type === "decimal")
            return;
        const n = this.el.getBoundingClientRect();
        this._prevOffset = n[this.section.justify] - t[this.section.justify]
    }
    update(t) {
        if (this.value !== t) {
            const n = this._children.get(this.value);
            if (n.present = !1,
            this._children.has(t)) {
                const r = this._children.get(t);
                r.present = !0
            } else {
                const r = kn("span", {
                    className: "symbol__value",
                    textContent: t
                });
                this.el.appendChild(r),
                this._children.set(t, new Ja(this.flow,r,{
                    animateIn: !0,
                    onRemove: this._onChildRemove(t)
                }))
            }
        }
        this.value = t
    }
    didUpdate(t) {
        if (this.type === "decimal")
            return;
        const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify]
          , r = this._prevOffset - n;
        r && this.el.animate({
            transform: [`translateX(${r}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
function I2(e, t, n, r) {
    const i = t.formatToParts(e);
    n && i.unshift({
        type: "prefix",
        value: n
    }),
    r && i.push({
        type: "suffix",
        value: r
    });
    const o = []
      , a = []
      , s = []
      , l = []
      , d = {}
      , u = p => `${p}:${d[p] = (d[p] ?? -1) + 1}`;
    let c = ""
      , f = !1
      , m = !1;
    for (const p of i) {
        c += p.value;
        const y = p.type === "minusSign" || p.type === "plusSign" ? "sign" : p.type;
        y === "integer" ? (f = !0,
        a.push(...p.value.split("").map((v => ({
            type: y,
            value: parseInt(v)
        }))))) : y === "group" ? a.push({
            type: y,
            value: p.value
        }) : y === "decimal" ? (m = !0,
        s.push({
            type: y,
            value: p.value,
            key: u(y)
        })) : y === "fraction" ? s.push(...p.value.split("").map((v => ({
            type: y,
            value: parseInt(v),
            key: u(y),
            pos: -1 - d[y]
        })))) : (f || m ? l : o).push({
            type: y,
            value: p.value,
            key: u(y)
        })
    }
    const b = [];
    for (let p = a.length - 1; p >= 0; p--) {
        const y = a[p];
        b.unshift(y.type === "integer" ? {
            ...y,
            key: u(y.type),
            pos: d[y.type]
        } : {
            ...y,
            key: u(y.type)
        })
    }
    return {
        pre: o,
        integer: b,
        fraction: s,
        post: l,
        valueAsString: c,
        value: typeof e == "string" ? parseFloat(e) : e
    }
}
const z2 = Symbol()
  , _n = (e, t, n) => {
    const r = document.createElement(e)
      , [i,o] = Array.isArray(t) ? [void 0, t] : [t, n];
    return i && Object.assign(r, i),
    o == null || o.forEach((a => r.appendChild(a))),
    r
}
  , R2 = (e, t) => {
    var n;
    return t === "left" ? e.offsetLeft : (((n = e.offsetParent instanceof HTMLElement ? e.offsetParent : null) == null ? void 0 : n.offsetWidth) ?? 0) - e.offsetWidth - e.offsetLeft
}
  , j2 = e => e.offsetWidth > 0 && e.offsetHeight > 0;
function V2(e, t, {reverse: n=!1}={}) {
    const r = e.length;
    for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
        t(e[i], i)
}
const U2 = String.raw
  , B2 = typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)")
  , H2 = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)")
  , Ad = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null
  , fo = "--_number-flow-d-opacity"
  , Xs = "--_number-flow-d-width"
  , mo = "--_number-flow-dx"
  , Zs = "--_number-flow-d"
  , q2 = ( () => {
    try {
        return CSS.registerProperty({
            name: fo,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }),
        CSS.registerProperty({
            name: mo,
            syntax: "<length>",
            inherits: !0,
            initialValue: "0px"
        }),
        CSS.registerProperty({
            name: Xs,
            syntax: "<number>",
            inherits: !1,
            initialValue: "0"
        }),
        CSS.registerProperty({
            name: Zs,
            syntax: "<number>",
            inherits: !0,
            initialValue: "0"
        }),
        !0
    } catch {
        return !1
    }
}
)()
  , W2 = "var(--number-flow-char-height, 1em)"
  , mn = "var(--number-flow-mask-height, 0.25em)"
  , Dd = `calc(${mn} / 2)`
  , Qa = "var(--number-flow-mask-width, 0.5em)"
  , Fn = `calc(${Qa} / var(--scale-x))`
  , Ni = "#000 0, transparent 71%"
  , Pd = U2`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${W2} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Xs}) / var(--width));transform:translateX(var(${mo})) scaleX(var(--scale-x));margin:0 calc(-1 * ${Qa});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${Fn},#000 calc(100% - ${Fn}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${mn},#000 calc(100% - ${mn}),transparent 100% ),radial-gradient(at bottom right,${Ni}),radial-gradient(at bottom left,${Ni}),radial-gradient(at top left,${Ni}),radial-gradient(at top right,${Ni});-webkit-mask-size:100% calc(100% - ${mn} * 2),calc(100% - ${Fn} * 2) 100%,${Fn} ${mn},${Fn} ${mn},${Fn} ${mn},${Fn} ${mn};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${Dd} ${Qa};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${mo})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${Zs})}.digit__num,.number .section::after{padding:${Dd} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${fo}))}`
  , G2 = HTMLElement
  , K2 = H2 && B2 && q2;
let Ii;
class Y2 extends G2 {
    constructor() {
        super(),
        this.created = !1,
        this.manual = !1;
        const {animated: t, ...n} = this.constructor.defaultProps;
        this._animated = this.computedAnimated = t,
        Object.assign(this, n)
    }
    get animated() {
        return this._animated
    }
    set animated(t) {
        var n;
        this.animated !== t && (this._animated = t,
        (n = this.shadowRoot) == null || n.getAnimations().forEach((r => r.finish())))
    }
    set data(t) {
        var n;
        if (t == null)
            return;
        const {pre: r, integer: i, fraction: o, post: a, value: s} = t;
        if (this.created) {
            const l = this._data;
            this._data = t,
            this.computedTrend = typeof this.trend == "function" ? this.trend(l.value, s) : this.trend,
            this.computedAnimated = K2 && this._animated && (!this.respectMotionPreference || !(Ad != null && Ad.matches)) && j2(this),
            (n = this.plugins) == null || n.forEach((d => {
                var u;
                return (u = d.onUpdate) == null ? void 0 : u.call(d, t, l, this)
            }
            )),
            this.manual || this.willUpdate(),
            this._pre.update(r),
            this._num.update({
                integer: i,
                fraction: o
            }),
            this._post.update(a),
            this.manual || this.didUpdate()
        } else {
            if (this._data = t,
            this.attachShadow({
                mode: "open"
            }),
            typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
                Ii || (Ii = new CSSStyleSheet,
                Ii.replaceSync(Pd)),
                this.shadowRoot.adoptedStyleSheets = [Ii];
            else {
                const l = document.createElement("style");
                l.textContent = Pd,
                this.shadowRoot.appendChild(l)
            }
            this._pre = new Md(this,r,{
                justify: "right",
                part: "left"
            }),
            this.shadowRoot.appendChild(this._pre.el),
            this._num = new X2(this,i,o),
            this.shadowRoot.appendChild(this._num.el),
            this._post = new Md(this,a,{
                justify: "left",
                part: "right"
            }),
            this.shadowRoot.appendChild(this._post.el)
        }
        this.created = !0
    }
    willUpdate() {
        this._pre.willUpdate(),
        this._num.willUpdate(),
        this._post.willUpdate()
    }
    didUpdate() {
        if (!this.computedAnimated)
            return;
        this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")),
        this._pre.didUpdate(),
        this._num.didUpdate(),
        this._post.didUpdate();
        const t = new AbortController;
        Promise.all(this.shadowRoot.getAnimations().map((n => n.finished))).then(( () => {
            t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")),
            this._abortAnimationsFinish = void 0)
        }
        )),
        this._abortAnimationsFinish = t
    }
}
Y2.defaultProps = {
    transformTiming: {
        duration: 900,
        easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
    },
    spinTiming: void 0,
    opacityTiming: {
        duration: 450,
        easing: "ease-out"
    },
    animated: !0,
    trend: (e, t) => Math.sign(t - e),
    respectMotionPreference: !0,
    plugins: void 0,
    digits: void 0
};
class X2 {
    constructor(t, n, r, {className: i, ...o}={}) {
        this.flow = t,
        this._integer = new $d(t,n,{
            justify: "right",
            part: "integer"
        }),
        this._fraction = new $d(t,r,{
            justify: "left",
            part: "fraction"
        }),
        this._inner = _n("span", {
            className: "number__inner"
        }, [this._integer.el, this._fraction.el]),
        this.el = _n("span", {
            ...o,
            part: "number",
            className: `number ${i ?? ""}`
        }, [this._inner])
    }
    willUpdate() {
        this._prevWidth = this.el.offsetWidth,
        this._prevLeft = this.el.getBoundingClientRect().left,
        this._integer.willUpdate(),
        this._fraction.willUpdate()
    }
    update({integer: t, fraction: n}) {
        this._integer.update(t),
        this._fraction.update(n)
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this._integer.didUpdate(),
        this._fraction.didUpdate();
        const n = this._prevLeft - t.left
          , r = this.el.offsetWidth
          , i = this._prevWidth - r;
        this.el.style.setProperty("--width", String(r)),
        this.el.animate({
            [mo]: [`${n}px`, "0px"],
            [Xs]: [i, 0]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
class em {
    constructor(t, n, {justify: r, className: i, ...o}, a) {
        this.flow = t,
        this.children = new Map,
        this.onCharRemove = l => () => {
            this.children.delete(l)
        }
        ,
        this.justify = r;
        const s = n.map((l => this.addChar(l).el));
        this.el = _n("span", {
            ...o,
            className: `section section--justify-${r} ${i ?? ""}`
        }, a ? a(s) : s)
    }
    addChar(t, {startDigitsAtZero: n=!1, ...r}={}) {
        const i = t.type === "integer" || t.type === "fraction" ? new nm(this,t.type,n ? 0 : t.value,t.pos,{
            ...r,
            onRemove: this.onCharRemove(t.key)
        }) : new Z2(this,t.type,t.value,{
            ...r,
            onRemove: this.onCharRemove(t.key)
        });
        return this.children.set(t.key, i),
        i
    }
    unpop(t) {
        t.el.removeAttribute("inert"),
        t.el.style.top = "",
        t.el.style[this.justify] = ""
    }
    pop(t) {
        t.forEach((n => {
            n.el.style.top = `${n.el.offsetTop}px`,
            n.el.style[this.justify] = `${R2(n.el, this.justify)}px`
        }
        )),
        t.forEach((n => {
            n.el.setAttribute("inert", ""),
            n.present = !1
        }
        ))
    }
    addNewAndUpdateExisting(t) {
        const n = new Map
          , r = new Map
          , i = this.justify === "left"
          , o = i ? "prepend" : "append";
        if (V2(t, (a => {
            let s;
            this.children.has(a.key) ? (s = this.children.get(a.key),
            r.set(a, s),
            this.unpop(s),
            s.present = !0) : (s = this.addChar(a, {
                startDigitsAtZero: !0,
                animateIn: !0
            }),
            n.set(a, s)),
            this.el[o](s.el)
        }
        ), {
            reverse: i
        }),
        this.flow.computedAnimated) {
            const a = this.el.getBoundingClientRect();
            n.forEach((s => {
                s.willUpdate(a)
            }
            ))
        }
        n.forEach(( (a, s) => {
            a.update(s.value)
        }
        )),
        r.forEach(( (a, s) => {
            a.update(s.value)
        }
        ))
    }
    willUpdate() {
        const t = this.el.getBoundingClientRect();
        this._prevOffset = t[this.justify],
        this.children.forEach((n => n.willUpdate(t)))
    }
    didUpdate() {
        const t = this.el.getBoundingClientRect();
        this.children.forEach((i => i.didUpdate(t)));
        const n = t[this.justify]
          , r = this._prevOffset - n;
        r && this.children.size && this.el.animate({
            transform: [`translateX(${r}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
class $d extends em {
    update(t) {
        const n = new Map;
        this.children.forEach(( (r, i) => {
            t.find((o => o.key === i)) || n.set(i, r),
            this.unpop(r)
        }
        )),
        this.addNewAndUpdateExisting(t),
        n.forEach((r => {
            r instanceof nm && r.update(0)
        }
        )),
        this.pop(n)
    }
}
class Md extends em {
    update(t) {
        const n = new Map;
        this.children.forEach(( (r, i) => {
            t.find((o => o.key === i)) || n.set(i, r)
        }
        )),
        this.pop(n),
        this.addNewAndUpdateExisting(t)
    }
}
let es = class {
    constructor(t, n, {onRemove: r, animateIn: i=!1}={}) {
        this.flow = t,
        this.el = n,
        this._present = !0,
        this._remove = () => {
            var o;
            this.el.remove(),
            (o = this._onRemove) == null || o.call(this)
        }
        ,
        this.el.classList.add("animate-presence"),
        this.flow.computedAnimated && i && this.el.animate({
            [fo]: [-.9999, 0]
        }, {
            ...this.flow.opacityTiming,
            composite: "accumulate"
        }),
        this._onRemove = r
    }
    get present() {
        return this._present
    }
    set present(t) {
        if (this._present !== t) {
            if (this._present = t,
            t ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""),
            !this.flow.computedAnimated) {
                t || this._remove();
                return
            }
            this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"),
            this.el.animate({
                [fo]: t ? [-.9999, 0] : [.999, 0]
            }, {
                ...this.flow.opacityTiming,
                composite: "accumulate"
            }),
            t ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, {
                once: !0
            })
        }
    }
}
;
class tm extends es {
    constructor(t, n, r, i) {
        super(t.flow, r, i),
        this.section = t,
        this.value = n,
        this.el = r
    }
}
class nm extends tm {
    constructor(t, n, r, i, o) {
        var a, s;
        const l = (((s = (a = t.flow.digits) == null ? void 0 : a[i]) == null ? void 0 : s.max) ?? 9) + 1
          , d = Array.from({
            length: l
        }).map(( (c, f) => {
            const m = _n("span", {
                className: "digit__num"
            }, [document.createTextNode(String(f))]);
            return f !== r && m.setAttribute("inert", ""),
            m.style.setProperty("--n", String(f)),
            m
        }
        ))
          , u = _n("span", {
            part: `digit ${n}-digit`,
            className: "digit"
        }, d);
        u.style.setProperty("--current", String(r)),
        u.style.setProperty("--length", String(l)),
        super(t, r, u, o),
        this.pos = i,
        this._onAnimationsFinish = () => {
            this.el.classList.remove("is-spinning")
        }
        ,
        this._numbers = d,
        this.length = l
    }
    willUpdate(t) {
        const n = this.el.getBoundingClientRect();
        this._prevValue = this.value;
        const r = n[this.section.justify] - t[this.section.justify]
          , i = n.width / 2;
        this._prevCenter = this.section.justify === "left" ? r + i : r - i
    }
    update(t) {
        this.el.style.setProperty("--current", String(t)),
        this._numbers.forEach(( (n, r) => r === t ? n.removeAttribute("inert") : n.setAttribute("inert", ""))),
        this.value = t
    }
    didUpdate(t) {
        const n = this.el.getBoundingClientRect()
          , r = n[this.section.justify] - t[this.section.justify]
          , i = n.width / 2
          , o = this.section.justify === "left" ? r + i : r - i
          , a = this._prevCenter - o;
        a && this.el.animate({
            transform: [`translateX(${a}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        });
        const s = this.getDelta();
        s && (this.el.classList.add("is-spinning"),
        this.el.animate({
            [Zs]: [-s, 0]
        }, {
            ...this.flow.spinTiming ?? this.flow.transformTiming,
            composite: "accumulate"
        }),
        this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, {
            once: !0
        }))
    }
    getDelta() {
        var t;
        if (this.flow.plugins)
            for (const i of this.flow.plugins) {
                const o = (t = i.getDelta) == null ? void 0 : t.call(i, this.value, this._prevValue, this);
                if (o != null)
                    return o
            }
        const n = this.value - this._prevValue
          , r = this.flow.computedTrend || Math.sign(n);
        return r < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : r > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : n
    }
}
class Z2 extends tm {
    constructor(t, n, r, i) {
        const o = _n("span", {
            className: "symbol__value",
            textContent: r
        });
        super(t, r, _n("span", {
            part: `symbol ${n}`,
            className: "symbol"
        }, [o]), i),
        this.type = n,
        this._children = new Map,
        this._onChildRemove = a => () => {
            this._children.delete(a)
        }
        ,
        this._children.set(r, new es(this.flow,o,{
            onRemove: this._onChildRemove(r)
        }))
    }
    willUpdate(t) {
        if (this.type === "decimal")
            return;
        const n = this.el.getBoundingClientRect();
        this._prevOffset = n[this.section.justify] - t[this.section.justify]
    }
    update(t) {
        if (this.value !== t) {
            const n = this._children.get(this.value);
            if (n.present = !1,
            this._children.has(t)) {
                const r = this._children.get(t);
                r.present = !0
            } else {
                const r = _n("span", {
                    className: "symbol__value",
                    textContent: t
                });
                this.el.appendChild(r),
                this._children.set(t, new es(this.flow,r,{
                    animateIn: !0,
                    onRemove: this._onChildRemove(t)
                }))
            }
        }
        this.value = t
    }
    didUpdate(t) {
        if (this.type === "decimal")
            return;
        const n = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify]
          , r = this._prevOffset - n;
        r && this.el.animate({
            transform: [`translateX(${r}px)`, "none"]
        }, {
            ...this.flow.transformTiming,
            composite: "accumulate"
        })
    }
}
const J2 = ["aria-label", "manual", "trend", "plugins", "animated", "transformTiming", "spinTiming", "opacityTiming", "respectMotionPreference", "data-will-change", "digits", "innerHTML", "data"]
  , rm = ve({
    inheritAttrs: !1,
    __name: "index",
    props: {
        transformTiming: {
            default: () => Bt.defaultProps.transformTiming
        },
        spinTiming: {
            default: () => Bt.defaultProps.spinTiming
        },
        opacityTiming: {
            default: () => Bt.defaultProps.opacityTiming
        },
        animated: {
            type: Boolean,
            default: () => Bt.defaultProps.animated
        },
        respectMotionPreference: {
            type: Boolean,
            default: () => Bt.defaultProps.respectMotionPreference
        },
        trend: {
            type: [Number, Function],
            default: () => Bt.defaultProps.trend
        },
        plugins: {
            default: () => Bt.defaultProps.plugins
        },
        digits: {
            default: () => Bt.defaultProps.digits
        },
        locales: {},
        format: {},
        value: {},
        prefix: {},
        suffix: {},
        willChange: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["animationsstart", "animationsfinish"],
    setup(e, {expose: t, emit: n}) {
        const r = W();
        t({
            el: r
        });
        const i = n
          , o = P(( () => new Intl.NumberFormat(e.locales,e.format)))
          , a = P(( () => I2(e.value, o.value, e.prefix, e.suffix)))
          , s = void 0
          , l = Be(z2, void 0);
        return l == null || l(r, a),
        (d, u) => (S(),
        T("number-flow-vue", lr({
            ref_key: "el",
            ref: r,
            "aria-label": a.value.valueAsString
        }, d.$attrs, {
            role: "img",
            manual: !!Xr(l),
            trend: d.trend,
            plugins: d.plugins,
            animated: d.animated,
            transformTiming: d.transformTiming,
            spinTiming: d.spinTiming,
            opacityTiming: d.opacityTiming,
            respectMotionPreference: d.respectMotionPreference,
            "data-will-change": d.willChange ? "" : void 0,
            digits: d.digits,
            innerHTML: Xr(s),
            "data-allow-mismatch": "",
            onAnimationsstart: u[0] || (u[0] = c => i("animationsstart")),
            onAnimationsfinish: u[1] || (u[1] = c => i("animationsfinish")),
            data: a.value
        }), null, 16, J2))
    }
});
C2("number-flow-vue", Bt);
const Q2 = ve({
    name: "NumberInput",
    components: {
        MinusIcon: l2,
        PlusIcon: d2,
        NumberFlow: rm
    },
    inheritAttrs: !1,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        }
    },
    emits: ["update:modelValue"],
    setup(e, {emit: t}) {
        const {context: n} = Nt()
          , r = n.value.variant.quantity_increments ?? 1
          , i = W(!0)
          , o = W(!0)
          , a = W(null);
        function s(m) {
            if (m = parseInt(m.toString()),
            i.value = !0,
            isNaN(m) && (m = 0),
            r > 1) {
                const b = (m - (e.min ?? 1)) % r;
                b !== 0 && (m = m - b)
            }
            m < (e.min ?? 1) ? m = e.min : e.max !== null && m > e.max && (m = e.max),
            t("update:modelValue", m)
        }
        const l = P(( () => e.min !== e.max && r > 0))
          , d = P(( () => l.value && (e.max ? e.modelValue + r <= e.max : !0)));
        function u() {
            d.value && (i.value = !0,
            s(e.modelValue + r))
        }
        const c = P(( () => l.value && e.modelValue - r >= (e.min ?? 1)));
        function f() {
            c.value && (i.value = !0,
            s(e.modelValue - r))
        }
        return {
            emitUpdate: s,
            canModify: l,
            canIncrement: d,
            increment: u,
            canDecrement: c,
            decrement: f,
            isAnimated: i,
            showCaret: o,
            input: a
        }
    }
})
  , ev = {
    class: "embed:group embed:flex embed:items-stretch embed:rounded-md embed:font-semibold embed:border embed:border-emerald-400 embed:dark:border-emerald-700 embed:ring-1 embed:dark:ring-1 embed:ring-emerald-300 embed:dark:ring-emerald-800 embed:dark:bg-zinc-950 embed:transition-[box-shadow] embed:focus-within:ring-2 embed:dark:focus-within:ring-2"
}
  , tv = ["disabled"]
  , nv = {
    class: "embed:relative embed:grid embed:items-center embed:justify-items-center embed:text-center embed:text-lg embed:[grid-template-areas:'overlap'] embed:*:[grid-area:overlap]"
}
  , rv = ["min", "max", "value", "disabled"]
  , iv = ["disabled"];
function ov(e, t, n, r, i, o) {
    const a = oe("MinusIcon")
      , s = oe("NumberFlow")
      , l = oe("PlusIcon");
    return S(),
    T("div", ev, [_("button", {
        "aria-hidden": "",
        tabindex: "-1",
        class: "embed:flex embed:items-center embed:pl-[.5em] embed:pr-[.325em]",
        disabled: !e.canDecrement,
        onClick: t[0] || (t[0] = (...d) => e.decrement && e.decrement(...d))
    }, [H(a, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        absoluteStrokeWidth: "",
        strokeWidth: "3.5"
    })], 8, tv), _("div", nv, [H(s, {
        value: e.modelValue,
        format: {
            useGrouping: !1
        },
        "aria-hidden": "",
        animated: e.isAnimated,
        onAnimationsstart: t[1] || (t[1] = d => e.showCaret = !1),
        onAnimationsfinish: t[2] || (t[2] = d => e.showCaret = !0),
        class: "embed:dark:text-white",
        disabled: !e.canModify,
        willChange: ""
    }, null, 8, ["value", "animated", "disabled"]), _("input", lr(e.$attrs, {
        ref: "input",
        class: [e.showCaret ? "embed:caret-primary" : "embed:caret-transparent", "embed-spin-hide embed:w-[2rem] embed:bg-transparent embed:py-2 embed:text-center embed:text-lg embed:font-[inherit] embed:text-transparent embed:outline-hidden embed:focus:outline-hidden embed:focus:ring-0 embed:border-none embed:z-10", e.canModify ? "" : "embed:pointer-events-none"],
        style: {
            fontKerning: "none"
        },
        type: "text",
        min: e.min,
        step: "1",
        autocomplete: "off",
        inputmode: "numeric",
        max: e.max,
        value: e.modelValue,
        disabled: !e.canModify,
        onInput: t[3] || (t[3] = d => e.canModify ? e.emitUpdate(d.target.value) : null)
    }), null, 16, rv)]), _("button", {
        "aria-hidden": "",
        tabindex: "-1",
        class: "embed:flex embed:items-center embed:pl-[.325em] embed:pr-[.5em]",
        disabled: !e.canIncrement,
        onClick: t[4] || (t[4] = (...d) => e.increment && e.increment(...d))
    }, [H(l, {
        class: "embed:w-4 embed:h-4 embed:dark:text-white",
        absoluteStrokeWidth: "",
        strokeWidth: "3.5"
    })], 8, iv)])
}
const av = gt(Q2, [["render", ov]])
  , sv = ve({
    name: "MyNavigator",
    components: {
        MyButton: Wo
    },
    props: {
        back: {
            type: Object,
            required: !1,
            default: () => ({
                type: "PREVIOUS"
            })
        },
        next: {
            type: Object,
            required: !1,
            default: () => ({
                type: "NEXT"
            })
        },
        text: {
            type: String,
            required: !1,
            default: () => "Continue"
        }
    },
    setup() {
        const {state: e, send: t} = Nt();
        return {
            send: t,
            state: e
        }
    }
})
  , lv = {
    class: "embed:mt-6 embed:w-full embed:justify-between embed:flex embed:items-center embed:col-span-2 embed:space-x-2"
};
function dv(e, t, n, r, i, o) {
    const a = oe("MyButton");
    return S(),
    T("div", lv, [H(a, {
        outline: "",
        class: "embed:w-1/2",
        disabled: e.state.hasTag("loading"),
        onClick: t[0] || (t[0] = s => e.send(e.back))
    }, {
        default: te(( () => t[2] || (t[2] = [ee("Back")]))),
        _: 1
    }, 8, ["disabled"]), H(a, {
        loading: e.state.hasTag("loading"),
        class: "embed:w-1/2",
        style: ci({
            "background-color": e.state.context.customization.theme
        }),
        primary: "",
        onClick: t[1] || (t[1] = s => e.send(e.next))
    }, {
        default: te(( () => [ee(A(e.text), 1)])),
        _: 1
    }, 8, ["loading", "style"])])
}
const Go = gt(sv, [["render", dv]]);
var uv = {
    NODE_ENV: "production"
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function cv(e, t, n) {
    return (t = mv(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Ld(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ld(Object(n), !0).forEach((function(r) {
            cv(e, r, n[r])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ld(Object(n)).forEach((function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        }
        ))
    }
    return e
}
function fv(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function mv(e) {
    var t = fv(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
const Fd = () => {}
;
let Js = {}
  , im = {}
  , om = null
  , am = {
    mark: Fd,
    measure: Fd
};
try {
    typeof window < "u" && (Js = window),
    typeof document < "u" && (im = document),
    typeof MutationObserver < "u" && (om = MutationObserver),
    typeof performance < "u" && (am = performance)
} catch {}
const {userAgent: Nd=""} = Js.navigator || {}
  , Cn = Js
  , Ve = im
  , Id = om
  , zi = am;
Cn.document;
const dn = !!Ve.documentElement && !!Ve.head && typeof Ve.addEventListener == "function" && typeof Ve.createElement == "function"
  , sm = ~Nd.indexOf("MSIE") || ~Nd.indexOf("Trident/");
var pv = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/
  , hv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i
  , lm = {
    classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
    },
    duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
    },
    sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
    },
    "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
    }
}
  , bv = {
    GROUP: "duotone-group",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , dm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , ut = "classic"
  , Ko = "duotone"
  , vv = "sharp"
  , gv = "sharp-duotone"
  , um = [ut, Ko, vv, gv]
  , yv = {
    classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
    },
    sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
    },
    "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , wv = {
    "Font Awesome 6 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 6 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
    },
    "Font Awesome 6 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 6 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
    },
    "Font Awesome 6 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
    },
    "Font Awesome 6 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
    }
}
  , xv = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
}]])
  , kv = {
    classic: {
        solid: "fas",
        regular: "far",
        light: "fal",
        thin: "fat",
        brands: "fab"
    },
    duotone: {
        solid: "fad",
        regular: "fadr",
        light: "fadl",
        thin: "fadt"
    },
    sharp: {
        solid: "fass",
        regular: "fasr",
        light: "fasl",
        thin: "fast"
    },
    "sharp-duotone": {
        solid: "fasds",
        regular: "fasdr",
        light: "fasdl",
        thin: "fasdt"
    }
}
  , _v = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , zd = {
    kit: {
        fak: "kit",
        "fa-kit": "kit"
    },
    "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
    }
}
  , Sv = ["kit"]
  , Ev = {
    kit: {
        "fa-kit": "fak"
    }
}
  , Cv = ["fak", "fakd"]
  , Tv = {
    kit: {
        fak: "fa-kit"
    }
}
  , Rd = {
    kit: {
        kit: "fak"
    },
    "kit-duotone": {
        "kit-duotone": "fakd"
    }
}
  , Ri = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
}
  , Ov = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"]
  , Av = ["fak", "fa-kit", "fakd", "fa-kit-duotone"]
  , Dv = {
    "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
    },
    "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
    }
}
  , Pv = {
    classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
    },
    duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
    },
    sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
    },
    "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
    }
}
  , $v = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}
  , ts = {
    classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
    },
    duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
    },
    sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
    },
    "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
    }
}
  , Mv = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"]
  , ns = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Ov, ...Mv]
  , Lv = ["solid", "regular", "light", "thin", "duotone", "brands"]
  , cm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  , Fv = cm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  , Nv = [...Object.keys($v), ...Lv, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ri.GROUP, Ri.SWAP_OPACITY, Ri.PRIMARY, Ri.SECONDARY].concat(cm.map((e => "".concat(e, "x")))).concat(Fv.map((e => "w-".concat(e))))
  , Iv = {
    "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
    },
    "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
    },
    "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
    },
    "Font Awesome 5 Duotone": {
        900: "fad"
    }
};
const rn = "___FONT_AWESOME___"
  , rs = 16
  , fm = "fa"
  , mm = "svg-inline--fa"
  , qn = "data-fa-i2svg"
  , is = "data-fa-pseudo-element"
  , zv = "data-fa-pseudo-element-pending"
  , Qs = "data-prefix"
  , el = "data-icon"
  , jd = "fontawesome-i2svg"
  , Rv = "async"
  , jv = ["HTML", "HEAD", "STYLE", "SCRIPT"]
  , pm = ( () => {
    try {
        return uv.NODE_ENV === "production"
    } catch {
        return !1
    }
}
)();
function gi(e) {
    return new Proxy(e,{
        get(t, n) {
            return n in t ? t[n] : t[ut]
        }
    })
}
const hm = N({}, lm);
hm[ut] = N(N(N(N({}, {
    "fa-duotone": "duotone"
}), lm[ut]), zd.kit), zd["kit-duotone"]);
const Vv = gi(hm)
  , os = N({}, kv);
os[ut] = N(N(N(N({}, {
    duotone: "fad"
}), os[ut]), Rd.kit), Rd["kit-duotone"]);
const Vd = gi(os)
  , as = N({}, ts);
as[ut] = N(N({}, as[ut]), Tv.kit);
const tl = gi(as)
  , ss = N({}, Pv);
ss[ut] = N(N({}, ss[ut]), Ev.kit);
gi(ss);
const Uv = pv
  , bm = "fa-layers-text"
  , Bv = hv
  , Hv = N({}, yv);
gi(Hv);
const qv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"]
  , ya = bv
  , Wv = [...Sv, ...Nv]
  , Wr = Cn.FontAwesomeConfig || {};
function Gv(e) {
    var t = Ve.querySelector("script[" + e + "]");
    if (t)
        return t.getAttribute(e)
}
function Kv(e) {
    return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e
}
Ve && typeof Ve.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t => {
    let[n,r] = t;
    const i = Kv(Gv(n));
    i != null && (Wr[r] = i)
}
));
const vm = {
    styleDefault: "solid",
    familyDefault: ut,
    cssPrefix: fm,
    replacementClass: mm,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
};
Wr.familyPrefix && (Wr.cssPrefix = Wr.familyPrefix);
const br = N(N({}, vm), Wr);
br.autoReplaceSvg || (br.observeMutations = !1);
const ne = {};
Object.keys(vm).forEach((e => {
    Object.defineProperty(ne, e, {
        enumerable: !0,
        set: function(t) {
            br[e] = t,
            Gr.forEach((n => n(ne)))
        },
        get: function() {
            return br[e]
        }
    })
}
));
Object.defineProperty(ne, "familyPrefix", {
    enumerable: !0,
    set: function(e) {
        br.cssPrefix = e,
        Gr.forEach((t => t(ne)))
    },
    get: function() {
        return br.cssPrefix
    }
});
Cn.FontAwesomeConfig = ne;
const Gr = [];
function Yv(e) {
    return Gr.push(e),
    () => {
        Gr.splice(Gr.indexOf(e), 1)
    }
}
const cn = rs
  , qt = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
};
function Xv(e) {
    if (!e || !dn)
        return;
    const t = Ve.createElement("style");
    t.setAttribute("type", "text/css"),
    t.innerHTML = e;
    const n = Ve.head.childNodes;
    let r = null;
    for (let i = n.length - 1; i > -1; i--) {
        const o = n[i]
          , a = (o.tagName || "").toUpperCase();
        ["STYLE", "LINK"].indexOf(a) > -1 && (r = o)
    }
    return Ve.head.insertBefore(t, r),
    e
}
const Zv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function li() {
    let e = 12
      , t = "";
    for (; e-- > 0; )
        t += Zv[Math.random() * 62 | 0];
    return t
}
function _r(e) {
    const t = [];
    for (let n = (e || []).length >>> 0; n--; )
        t[n] = e[n];
    return t
}
function nl(e) {
    return e.classList ? _r(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t => t))
}
function gm(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
function Jv(e) {
    return Object.keys(e || {}).reduce(( (t, n) => t + "".concat(n, '="').concat(gm(e[n]), '" ')), "").trim()
}
function Yo(e) {
    return Object.keys(e || {}).reduce(( (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";")), "")
}
function rl(e) {
    return e.size !== qt.size || e.x !== qt.x || e.y !== qt.y || e.rotate !== qt.rotate || e.flipX || e.flipY
}
function Qv(e) {
    let {transform: t, containerWidth: n, iconWidth: r} = e;
    const i = {
        transform: "translate(".concat(n / 2, " 256)")
    }
      , o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") ")
      , a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") ")
      , s = "rotate(".concat(t.rotate, " 0 0)")
      , l = {
        transform: "".concat(o, " ").concat(a, " ").concat(s)
    }
      , d = {
        transform: "translate(".concat(r / 2 * -1, " -256)")
    };
    return {
        outer: i,
        inner: l,
        path: d
    }
}
function eg(e) {
    let {transform: t, width: n=rs, height: r=rs, startCentered: i=!1} = e
      , o = "";
    return i && sm ? o += "translate(".concat(t.x / cn - n / 2, "em, ").concat(t.y / cn - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / cn, "em), calc(-50% + ").concat(t.y / cn, "em)) ") : o += "translate(".concat(t.x / cn, "em, ").concat(t.y / cn, "em) "),
    o += "scale(".concat(t.size / cn * (t.flipX ? -1 : 1), ", ").concat(t.size / cn * (t.flipY ? -1 : 1), ") "),
    o += "rotate(".concat(t.rotate, "deg) "),
    o
}
var tg = `:root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}`;
function ym() {
    const e = fm
      , t = mm
      , n = ne.cssPrefix
      , r = ne.replacementClass;
    let i = tg;
    if (n !== e || r !== t) {
        const o = new RegExp("\\.".concat(e, "\\-"),"g")
          , a = new RegExp("\\--".concat(e, "\\-"),"g")
          , s = new RegExp("\\.".concat(t),"g");
        i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r))
    }
    return i
}
let Ud = !1;
function wa() {
    ne.autoAddCss && !Ud && (Xv(ym()),
    Ud = !0)
}
var ng = {
    mixout() {
        return {
            dom: {
                css: ym,
                insertCss: wa
            }
        }
    },
    hooks() {
        return {
            beforeDOMElementCreation() {
                wa()
            },
            beforeI2svg() {
                wa()
            }
        }
    }
};
const on = Cn || {};
on[rn] || (on[rn] = {});
on[rn].styles || (on[rn].styles = {});
on[rn].hooks || (on[rn].hooks = {});
on[rn].shims || (on[rn].shims = []);
var Wt = on[rn];
const wm = []
  , xm = function() {
    Ve.removeEventListener("DOMContentLoaded", xm),
    po = 1,
    wm.map((e => e()))
};
let po = !1;
dn && (po = (Ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Ve.readyState),
po || Ve.addEventListener("DOMContentLoaded", xm));
function rg(e) {
    dn && (po ? setTimeout(e, 0) : wm.push(e))
}
function yi(e) {
    const {tag: t, attributes: n={}, children: r=[]} = e;
    return typeof e == "string" ? gm(e) : "<".concat(t, " ").concat(Jv(n), ">").concat(r.map(yi).join(""), "</").concat(t, ">")
}
function Bd(e, t, n) {
    if (e && e[t] && e[t][n])
        return {
            prefix: t,
            iconName: n,
            icon: e[t][n]
        }
}
var xa = function(t, n, r, i) {
    var o = Object.keys(t), a = o.length, s = n, l, d, u;
    for (r === void 0 ? (l = 1,
    u = t[o[0]]) : (l = 0,
    u = r); l < a; l++)
        d = o[l],
        u = s(u, t[d], d, t);
    return u
};
function ig(e) {
    const t = [];
    let n = 0;
    const r = e.length;
    for (; n < r; ) {
        const i = e.charCodeAt(n++);
        if (i >= 55296 && i <= 56319 && n < r) {
            const o = e.charCodeAt(n++);
            (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i),
            n--)
        } else
            t.push(i)
    }
    return t
}
function ls(e) {
    const t = ig(e);
    return t.length === 1 ? t[0].toString(16) : null
}
function og(e, t) {
    const n = e.length;
    let r = e.charCodeAt(t), i;
    return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1),
    i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r
}
function Hd(e) {
    return Object.keys(e).reduce(( (t, n) => {
        const r = e[n];
        return !!r.icon ? t[r.iconName] = r.icon : t[n] = r,
        t
    }
    ), {})
}
function ds(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const {skipHooks: r=!1} = n
      , i = Hd(t);
    typeof Wt.hooks.addPack == "function" && !r ? Wt.hooks.addPack(e, Hd(t)) : Wt.styles[e] = N(N({}, Wt.styles[e] || {}), i),
    e === "fas" && ds("fa", t)
}
const {styles: di, shims: ag} = Wt
  , km = Object.keys(tl)
  , sg = km.reduce(( (e, t) => (e[t] = Object.keys(tl[t]),
e)), {});
let il = null
  , _m = {}
  , Sm = {}
  , Em = {}
  , Cm = {}
  , Tm = {};
function lg(e) {
    return ~Wv.indexOf(e)
}
function dg(e, t) {
    const n = t.split("-")
      , r = n[0]
      , i = n.slice(1).join("-");
    return r === e && i !== "" && !lg(i) ? i : null
}
const Om = () => {
    const e = r => xa(di, ( (i, o, a) => (i[a] = xa(o, r, {}),
    i)), {});
    _m = e(( (r, i, o) => (i[3] && (r[i[3]] = o),
    i[2] && i[2].filter((s => typeof s == "number")).forEach((s => {
        r[s.toString(16)] = o
    }
    )),
    r))),
    Sm = e(( (r, i, o) => (r[o] = o,
    i[2] && i[2].filter((s => typeof s == "string")).forEach((s => {
        r[s] = o
    }
    )),
    r))),
    Tm = e(( (r, i, o) => {
        const a = i[2];
        return r[o] = o,
        a.forEach((s => {
            r[s] = o
        }
        )),
        r
    }
    ));
    const t = "far"in di || ne.autoFetchSvg
      , n = xa(ag, ( (r, i) => {
        const o = i[0];
        let a = i[1];
        const s = i[2];
        return a === "far" && !t && (a = "fas"),
        typeof o == "string" && (r.names[o] = {
            prefix: a,
            iconName: s
        }),
        typeof o == "number" && (r.unicodes[o.toString(16)] = {
            prefix: a,
            iconName: s
        }),
        r
    }
    ), {
        names: {},
        unicodes: {}
    });
    Em = n.names,
    Cm = n.unicodes,
    il = Xo(ne.styleDefault, {
        family: ne.familyDefault
    })
}
;
Yv((e => {
    il = Xo(e.styleDefault, {
        family: ne.familyDefault
    })
}
));
Om();
function ol(e, t) {
    return (_m[e] || {})[t]
}
function ug(e, t) {
    return (Sm[e] || {})[t]
}
function jn(e, t) {
    return (Tm[e] || {})[t]
}
function Am(e) {
    return Em[e] || {
        prefix: null,
        iconName: null
    }
}
function cg(e) {
    const t = Cm[e]
      , n = ol("fas", e);
    return t || (n ? {
        prefix: "fas",
        iconName: n
    } : null) || {
        prefix: null,
        iconName: null
    }
}
function Tn() {
    return il
}
const Dm = () => ({
    prefix: null,
    iconName: null,
    rest: []
});
function fg(e) {
    let t = ut;
    const n = km.reduce(( (r, i) => (r[i] = "".concat(ne.cssPrefix, "-").concat(i),
    r)), {});
    return um.forEach((r => {
        (e.includes(n[r]) || e.some((i => sg[r].includes(i)))) && (t = r)
    }
    )),
    t
}
function Xo(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {family: n=ut} = t
      , r = Vv[n][e];
    if (n === Ko && !e)
        return "fad";
    const i = Vd[n][e] || Vd[n][r]
      , o = e in Wt.styles ? e : null;
    return i || o || null
}
function mg(e) {
    let t = []
      , n = null;
    return e.forEach((r => {
        const i = dg(ne.cssPrefix, r);
        i ? n = i : r && t.push(r)
    }
    )),
    {
        iconName: n,
        rest: t
    }
}
function qd(e) {
    return e.sort().filter(( (t, n, r) => r.indexOf(t) === n))
}
function Zo(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {skipLookups: n=!1} = t;
    let r = null;
    const i = ns.concat(Av)
      , o = qd(e.filter((c => i.includes(c))))
      , a = qd(e.filter((c => !ns.includes(c))))
      , s = o.filter((c => (r = c,
    !dm.includes(c))))
      , [l=null] = s
      , d = fg(o)
      , u = N(N({}, mg(a)), {}, {
        prefix: Xo(l, {
            family: d
        })
    });
    return N(N(N({}, u), vg({
        values: e,
        family: d,
        styles: di,
        config: ne,
        canonical: u,
        givenPrefix: r
    })), pg(n, r, u))
}
function pg(e, t, n) {
    let {prefix: r, iconName: i} = n;
    if (e || !r || !i)
        return {
            prefix: r,
            iconName: i
        };
    const o = t === "fa" ? Am(i) : {}
      , a = jn(r, i);
    return i = o.iconName || a || i,
    r = o.prefix || r,
    r === "far" && !di.far && di.fas && !ne.autoFetchSvg && (r = "fas"),
    {
        prefix: r,
        iconName: i
    }
}
const hg = um.filter((e => e !== ut || e !== Ko))
  , bg = Object.keys(ts).filter((e => e !== ut)).map((e => Object.keys(ts[e]))).flat();
function vg(e) {
    const {values: t, family: n, canonical: r, givenPrefix: i="", styles: o={}, config: a={}} = e
      , s = n === Ko
      , l = t.includes("fa-duotone") || t.includes("fad")
      , d = a.familyDefault === "duotone"
      , u = r.prefix === "fad" || r.prefix === "fa-duotone";
    if (!s && (l || d || u) && (r.prefix = "fad"),
    (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"),
    !r.prefix && hg.includes(n) && (Object.keys(o).find((f => bg.includes(f))) || a.autoFetchSvg)) {
        const f = xv.get(n).defaultShortPrefixId;
        r.prefix = f,
        r.iconName = jn(r.prefix, r.iconName) || r.iconName
    }
    return (r.prefix === "fa" || i === "fa") && (r.prefix = Tn() || "fas"),
    r
}
class gg {
    constructor() {
        this.definitions = {}
    }
    add() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        const i = n.reduce(this._pullDefinitions, {});
        Object.keys(i).forEach((o => {
            this.definitions[o] = N(N({}, this.definitions[o] || {}), i[o]),
            ds(o, i[o]);
            const a = tl[ut][o];
            a && ds(a, i[o]),
            Om()
        }
        ))
    }
    reset() {
        this.definitions = {}
    }
    _pullDefinitions(t, n) {
        const r = n.prefix && n.iconName && n.icon ? {
            0: n
        } : n;
        return Object.keys(r).map((i => {
            const {prefix: o, iconName: a, icon: s} = r[i]
              , l = s[2];
            t[o] || (t[o] = {}),
            l.length > 0 && l.forEach((d => {
                typeof d == "string" && (t[o][d] = s)
            }
            )),
            t[o][a] = s
        }
        )),
        t
    }
}
let Wd = []
  , tr = {};
const fr = {}
  , yg = Object.keys(fr);
function wg(e, t) {
    let {mixoutsTo: n} = t;
    return Wd = e,
    tr = {},
    Object.keys(fr).forEach((r => {
        yg.indexOf(r) === -1 && delete fr[r]
    }
    )),
    Wd.forEach((r => {
        const i = r.mixout ? r.mixout() : {};
        if (Object.keys(i).forEach((o => {
            typeof i[o] == "function" && (n[o] = i[o]),
            typeof i[o] == "object" && Object.keys(i[o]).forEach((a => {
                n[o] || (n[o] = {}),
                n[o][a] = i[o][a]
            }
            ))
        }
        )),
        r.hooks) {
            const o = r.hooks();
            Object.keys(o).forEach((a => {
                tr[a] || (tr[a] = []),
                tr[a].push(o[a])
            }
            ))
        }
        r.provides && r.provides(fr)
    }
    )),
    n
}
function us(e, t) {
    for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
        r[i - 2] = arguments[i];
    return (tr[e] || []).forEach((a => {
        t = a.apply(null, [t, ...r])
    }
    )),
    t
}
function Wn(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    (tr[e] || []).forEach((o => {
        o.apply(null, n)
    }
    ))
}
function On() {
    const e = arguments[0]
      , t = Array.prototype.slice.call(arguments, 1);
    return fr[e] ? fr[e].apply(null, t) : void 0
}
function cs(e) {
    e.prefix === "fa" && (e.prefix = "fas");
    let {iconName: t} = e;
    const n = e.prefix || Tn();
    if (t)
        return t = jn(n, t) || t,
        Bd(Pm.definitions, n, t) || Bd(Wt.styles, n, t)
}
const Pm = new gg
  , xg = () => {
    ne.autoReplaceSvg = !1,
    ne.observeMutations = !1,
    Wn("noAuto")
}
  , kg = {
    i2svg: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return dn ? (Wn("beforeI2svg", e),
        On("pseudoElements2svg", e),
        On("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."))
    },
    watch: function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const {autoReplaceSvgRoot: t} = e;
        ne.autoReplaceSvg === !1 && (ne.autoReplaceSvg = !0),
        ne.observeMutations = !0,
        rg(( () => {
            Sg({
                autoReplaceSvgRoot: t
            }),
            Wn("watch", e)
        }
        ))
    }
}
  , _g = {
    icon: e => {
        if (e === null)
            return null;
        if (typeof e == "object" && e.prefix && e.iconName)
            return {
                prefix: e.prefix,
                iconName: jn(e.prefix, e.iconName) || e.iconName
            };
        if (Array.isArray(e) && e.length === 2) {
            const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1]
              , n = Xo(e[0]);
            return {
                prefix: n,
                iconName: jn(n, t) || t
            }
        }
        if (typeof e == "string" && (e.indexOf("".concat(ne.cssPrefix, "-")) > -1 || e.match(Uv))) {
            const t = Zo(e.split(" "), {
                skipLookups: !0
            });
            return {
                prefix: t.prefix || Tn(),
                iconName: jn(t.prefix, t.iconName) || t.iconName
            }
        }
        if (typeof e == "string") {
            const t = Tn();
            return {
                prefix: t,
                iconName: jn(t, e) || e
            }
        }
    }
}
  , Ct = {
    noAuto: xg,
    config: ne,
    dom: kg,
    parse: _g,
    library: Pm,
    findIconDefinition: cs,
    toHtml: yi
}
  , Sg = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {autoReplaceSvgRoot: t=Ve} = e;
    (Object.keys(Wt.styles).length > 0 || ne.autoFetchSvg) && dn && ne.autoReplaceSvg && Ct.dom.i2svg({
        node: t
    })
};
function Jo(e, t) {
    return Object.defineProperty(e, "abstract", {
        get: t
    }),
    Object.defineProperty(e, "html", {
        get: function() {
            return e.abstract.map((n => yi(n)))
        }
    }),
    Object.defineProperty(e, "node", {
        get: function() {
            if (!dn)
                return;
            const n = Ve.createElement("div");
            return n.innerHTML = e.html,
            n.children
        }
    }),
    e
}
function Eg(e) {
    let {children: t, main: n, mask: r, attributes: i, styles: o, transform: a} = e;
    if (rl(a) && n.found && !r.found) {
        const {width: s, height: l} = n
          , d = {
            x: s / l / 2,
            y: .5
        };
        i.style = Yo(N(N({}, o), {}, {
            "transform-origin": "".concat(d.x + a.x / 16, "em ").concat(d.y + a.y / 16, "em")
        }))
    }
    return [{
        tag: "svg",
        attributes: i,
        children: t
    }]
}
function Cg(e) {
    let {prefix: t, iconName: n, children: r, attributes: i, symbol: o} = e;
    const a = o === !0 ? "".concat(t, "-").concat(ne.cssPrefix, "-").concat(n) : o;
    return [{
        tag: "svg",
        attributes: {
            style: "display: none;"
        },
        children: [{
            tag: "symbol",
            attributes: N(N({}, i), {}, {
                id: a
            }),
            children: r
        }]
    }]
}
function al(e) {
    const {icons: {main: t, mask: n}, prefix: r, iconName: i, transform: o, symbol: a, title: s, maskId: l, titleId: d, extra: u, watchable: c=!1} = e
      , {width: f, height: m} = n.found ? n : t
      , b = Cv.includes(r)
      , p = [ne.replacementClass, i ? "".concat(ne.cssPrefix, "-").concat(i) : ""].filter((O => u.classes.indexOf(O) === -1)).filter((O => O !== "" || !!O)).concat(u.classes).join(" ");
    let y = {
        children: [],
        attributes: N(N({}, u.attributes), {}, {
            "data-prefix": r,
            "data-icon": i,
            class: p,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(f, " ").concat(m)
        })
    };
    const v = b && !~u.classes.indexOf("fa-fw") ? {
        width: "".concat(f / m * 16 * .0625, "em")
    } : {};
    c && (y.attributes[qn] = ""),
    s && (y.children.push({
        tag: "title",
        attributes: {
            id: y.attributes["aria-labelledby"] || "title-".concat(d || li())
        },
        children: [s]
    }),
    delete y.attributes.title);
    const w = N(N({}, y), {}, {
        prefix: r,
        iconName: i,
        main: t,
        mask: n,
        maskId: l,
        transform: o,
        symbol: a,
        styles: N(N({}, v), u.styles)
    })
      , {children: g, attributes: k} = n.found && t.found ? On("generateAbstractMask", w) || {
        children: [],
        attributes: {}
    } : On("generateAbstractIcon", w) || {
        children: [],
        attributes: {}
    };
    return w.children = g,
    w.attributes = k,
    a ? Cg(w) : Eg(w)
}
function Gd(e) {
    const {content: t, width: n, height: r, transform: i, title: o, extra: a, watchable: s=!1} = e
      , l = N(N(N({}, a.attributes), o ? {
        title: o
    } : {}), {}, {
        class: a.classes.join(" ")
    });
    s && (l[qn] = "");
    const d = N({}, a.styles);
    rl(i) && (d.transform = eg({
        transform: i,
        startCentered: !0,
        width: n,
        height: r
    }),
    d["-webkit-transform"] = d.transform);
    const u = Yo(d);
    u.length > 0 && (l.style = u);
    const c = [];
    return c.push({
        tag: "span",
        attributes: l,
        children: [t]
    }),
    o && c.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [o]
    }),
    c
}
function Tg(e) {
    const {content: t, title: n, extra: r} = e
      , i = N(N(N({}, r.attributes), n ? {
        title: n
    } : {}), {}, {
        class: r.classes.join(" ")
    })
      , o = Yo(r.styles);
    o.length > 0 && (i.style = o);
    const a = [];
    return a.push({
        tag: "span",
        attributes: i,
        children: [t]
    }),
    n && a.push({
        tag: "span",
        attributes: {
            class: "sr-only"
        },
        children: [n]
    }),
    a
}
const {styles: ka} = Wt;
function fs(e) {
    const t = e[0]
      , n = e[1]
      , [r] = e.slice(4);
    let i = null;
    return Array.isArray(r) ? i = {
        tag: "g",
        attributes: {
            class: "".concat(ne.cssPrefix, "-").concat(ya.GROUP)
        },
        children: [{
            tag: "path",
            attributes: {
                class: "".concat(ne.cssPrefix, "-").concat(ya.SECONDARY),
                fill: "currentColor",
                d: r[0]
            }
        }, {
            tag: "path",
            attributes: {
                class: "".concat(ne.cssPrefix, "-").concat(ya.PRIMARY),
                fill: "currentColor",
                d: r[1]
            }
        }]
    } : i = {
        tag: "path",
        attributes: {
            fill: "currentColor",
            d: r
        }
    },
    {
        found: !0,
        width: t,
        height: n,
        icon: i
    }
}
const Og = {
    found: !1,
    width: 512,
    height: 512
};
function Ag(e, t) {
    !pm && !ne.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'))
}
function ms(e, t) {
    let n = t;
    return t === "fa" && ne.styleDefault !== null && (t = Tn()),
    new Promise(( (r, i) => {
        if (n === "fa") {
            const o = Am(e) || {};
            e = o.iconName || e,
            t = o.prefix || t
        }
        if (e && t && ka[t] && ka[t][e]) {
            const o = ka[t][e];
            return r(fs(o))
        }
        Ag(e, t),
        r(N(N({}, Og), {}, {
            icon: ne.showMissingIcons && e ? On("missingIconAbstract") || {} : {}
        }))
    }
    ))
}
const Kd = () => {}
  , ps = ne.measurePerformance && zi && zi.mark && zi.measure ? zi : {
    mark: Kd,
    measure: Kd
}
  , Nr = 'FA "6.7.2"'
  , Dg = e => (ps.mark("".concat(Nr, " ").concat(e, " begins")),
() => $m(e))
  , $m = e => {
    ps.mark("".concat(Nr, " ").concat(e, " ends")),
    ps.measure("".concat(Nr, " ").concat(e), "".concat(Nr, " ").concat(e, " begins"), "".concat(Nr, " ").concat(e, " ends"))
}
;
var sl = {
    begin: Dg,
    end: $m
};
const Gi = () => {}
;
function Yd(e) {
    return typeof (e.getAttribute ? e.getAttribute(qn) : null) == "string"
}
function Pg(e) {
    const t = e.getAttribute ? e.getAttribute(Qs) : null
      , n = e.getAttribute ? e.getAttribute(el) : null;
    return t && n
}
function $g(e) {
    return e && e.classList && e.classList.contains && e.classList.contains(ne.replacementClass)
}
function Mg() {
    return ne.autoReplaceSvg === !0 ? Ki.replace : Ki[ne.autoReplaceSvg] || Ki.replace
}
function Lg(e) {
    return Ve.createElementNS("http://www.w3.org/2000/svg", e)
}
function Fg(e) {
    return Ve.createElement(e)
}
function Mm(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {ceFn: n=(e.tag === "svg" ? Lg : Fg)} = t;
    if (typeof e == "string")
        return Ve.createTextNode(e);
    const r = n(e.tag);
    return Object.keys(e.attributes || []).forEach((function(o) {
        r.setAttribute(o, e.attributes[o])
    }
    )),
    (e.children || []).forEach((function(o) {
        r.appendChild(Mm(o, {
            ceFn: n
        }))
    }
    )),
    r
}
function Ng(e) {
    let t = " ".concat(e.outerHTML, " ");
    return t = "".concat(t, "Font Awesome fontawesome.com "),
    t
}
const Ki = {
    replace: function(e) {
        const t = e[0];
        if (t.parentNode)
            if (e[1].forEach((n => {
                t.parentNode.insertBefore(Mm(n), t)
            }
            )),
            t.getAttribute(qn) === null && ne.keepOriginalSource) {
                let n = Ve.createComment(Ng(t));
                t.parentNode.replaceChild(n, t)
            } else
                t.remove()
    },
    nest: function(e) {
        const t = e[0]
          , n = e[1];
        if (~nl(t).indexOf(ne.replacementClass))
            return Ki.replace(e);
        const r = new RegExp("".concat(ne.cssPrefix, "-.*"));
        if (delete n[0].attributes.id,
        n[0].attributes.class) {
            const o = n[0].attributes.class.split(" ").reduce(( (a, s) => (s === ne.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s),
            a)), {
                toNode: [],
                toSvg: []
            });
            n[0].attributes.class = o.toSvg.join(" "),
            o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "))
        }
        const i = n.map((o => yi(o))).join(`\n`);
        t.setAttribute(qn, ""),
        t.innerHTML = i
    }
};
function Xd(e) {
    e()
}
function Lm(e, t) {
    const n = typeof t == "function" ? t : Gi;
    if (e.length === 0)
        n();
    else {
        let r = Xd;
        ne.mutateApproach === Rv && (r = Cn.requestAnimationFrame || Xd),
        r(( () => {
            const i = Mg()
              , o = sl.begin("mutate");
            e.map(i),
            o(),
            n()
        }
        ))
    }
}
let ll = !1;
function Fm() {
    ll = !0
}
function hs() {
    ll = !1
}
let ho = null;
function Zd(e) {
    if (!Id || !ne.observeMutations)
        return;
    const {treeCallback: t=Gi, nodeCallback: n=Gi, pseudoElementsCallback: r=Gi, observeMutationsRoot: i=Ve} = e;
    ho = new Id((o => {
        if (ll)
            return;
        const a = Tn();
        _r(o).forEach((s => {
            if (s.type === "childList" && s.addedNodes.length > 0 && !Yd(s.addedNodes[0]) && (ne.searchPseudoElements && r(s.target),
            t(s.target)),
            s.type === "attributes" && s.target.parentNode && ne.searchPseudoElements && r(s.target.parentNode),
            s.type === "attributes" && Yd(s.target) && ~qv.indexOf(s.attributeName))
                if (s.attributeName === "class" && Pg(s.target)) {
                    const {prefix: l, iconName: d} = Zo(nl(s.target));
                    s.target.setAttribute(Qs, l || a),
                    d && s.target.setAttribute(el, d)
                } else
                    $g(s.target) && n(s.target)
        }
        ))
    }
    )),
    dn && ho.observe(i, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0
    })
}
function Ig() {
    ho && ho.disconnect()
}
function zg(e) {
    const t = e.getAttribute("style");
    let n = [];
    return t && (n = t.split(";").reduce(( (r, i) => {
        const o = i.split(":")
          , a = o[0]
          , s = o.slice(1);
        return a && s.length > 0 && (r[a] = s.join(":").trim()),
        r
    }
    ), {})),
    n
}
function Rg(e) {
    const t = e.getAttribute("data-prefix")
      , n = e.getAttribute("data-icon")
      , r = e.innerText !== void 0 ? e.innerText.trim() : "";
    let i = Zo(nl(e));
    return i.prefix || (i.prefix = Tn()),
    t && n && (i.prefix = t,
    i.iconName = n),
    i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = ug(i.prefix, e.innerText) || ol(i.prefix, ls(e.innerText))),
    !i.iconName && ne.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)),
    i
}
function jg(e) {
    const t = _r(e.attributes).reduce(( (i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value),
    i)), {})
      , n = e.getAttribute("title")
      , r = e.getAttribute("data-fa-title-id");
    return ne.autoA11y && (n ? t["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(r || li()) : (t["aria-hidden"] = "true",
    t.focusable = "false")),
    t
}
function Vg() {
    return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: qt,
        symbol: !1,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        extra: {
            classes: [],
            styles: {},
            attributes: {}
        }
    }
}
function Jd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        styleParser: !0
    };
    const {iconName: n, prefix: r, rest: i} = Rg(e)
      , o = jg(e)
      , a = us("parseNodeAttributes", {}, e);
    let s = t.styleParser ? zg(e) : [];
    return N({
        iconName: n,
        title: e.getAttribute("title"),
        titleId: e.getAttribute("data-fa-title-id"),
        prefix: r,
        transform: qt,
        mask: {
            iconName: null,
            prefix: null,
            rest: []
        },
        maskId: null,
        symbol: !1,
        extra: {
            classes: i,
            styles: s,
            attributes: o
        }
    }, a)
}
const {styles: Ug} = Wt;
function Nm(e) {
    const t = ne.autoReplaceSvg === "nest" ? Jd(e, {
        styleParser: !1
    }) : Jd(e);
    return ~t.extra.classes.indexOf(bm) ? On("generateLayersText", e, t) : On("generateSvgReplacementMutation", e, t)
}
function Bg() {
    return [..._v, ...ns]
}
function Qd(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!dn)
        return Promise.resolve();
    const n = Ve.documentElement.classList
      , r = u => n.add("".concat(jd, "-").concat(u))
      , i = u => n.remove("".concat(jd, "-").concat(u))
      , o = ne.autoFetchSvg ? Bg() : dm.concat(Object.keys(Ug));
    o.includes("fa") || o.push("fa");
    const a = [".".concat(bm, ":not([").concat(qn, "])")].concat(o.map((u => ".".concat(u, ":not([").concat(qn, "])")))).join(", ");
    if (a.length === 0)
        return Promise.resolve();
    let s = [];
    try {
        s = _r(e.querySelectorAll(a))
    } catch {}
    if (s.length > 0)
        r("pending"),
        i("complete");
    else
        return Promise.resolve();
    const l = sl.begin("onTree")
      , d = s.reduce(( (u, c) => {
        try {
            const f = Nm(c);
            f && u.push(f)
        } catch (f) {
            pm || f.name === "MissingIcon" && console.error(f)
        }
        return u
    }
    ), []);
    return new Promise(( (u, c) => {
        Promise.all(d).then((f => {
            Lm(f, ( () => {
                r("active"),
                r("complete"),
                i("pending"),
                typeof t == "function" && t(),
                l(),
                u()
            }
            ))
        }
        )).catch((f => {
            l(),
            c(f)
        }
        ))
    }
    ))
}
function Hg(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    Nm(e).then((n => {
        n && Lm([n], t)
    }
    ))
}
function qg(e) {
    return function(t) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const r = (t || {}).icon ? t : cs(t || {});
        let {mask: i} = n;
        return i && (i = (i || {}).icon ? i : cs(i || {})),
        e(r, N(N({}, n), {}, {
            mask: i
        }))
    }
}
const Wg = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const {transform: n=qt, symbol: r=!1, mask: i=null, maskId: o=null, title: a=null, titleId: s=null, classes: l=[], attributes: d={}, styles: u={}} = t;
    if (!e)
        return;
    const {prefix: c, iconName: f, icon: m} = e;
    return Jo(N({
        type: "icon"
    }, e), ( () => (Wn("beforeDOMElementCreation", {
        iconDefinition: e,
        params: t
    }),
    ne.autoA11y && (a ? d["aria-labelledby"] = "".concat(ne.replacementClass, "-title-").concat(s || li()) : (d["aria-hidden"] = "true",
    d.focusable = "false")),
    al({
        icons: {
            main: fs(m),
            mask: i ? fs(i.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
            }
        },
        prefix: c,
        iconName: f,
        transform: N(N({}, qt), n),
        symbol: r,
        title: a,
        maskId: o,
        titleId: s,
        extra: {
            attributes: d,
            styles: u,
            classes: l
        }
    }))))
};
var Gg = {
    mixout() {
        return {
            icon: qg(Wg)
        }
    },
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.treeCallback = Qd,
                e.nodeCallback = Hg,
                e
            }
        }
    },
    provides(e) {
        e.i2svg = function(t) {
            const {node: n=Ve, callback: r= () => {}
            } = t;
            return Qd(n, r)
        }
        ,
        e.generateSvgReplacementMutation = function(t, n) {
            const {iconName: r, title: i, titleId: o, prefix: a, transform: s, symbol: l, mask: d, maskId: u, extra: c} = n;
            return new Promise(( (f, m) => {
                Promise.all([ms(r, a), d.iconName ? ms(d.iconName, d.prefix) : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {}
                })]).then((b => {
                    let[p,y] = b;
                    f([t, al({
                        icons: {
                            main: p,
                            mask: y
                        },
                        prefix: a,
                        iconName: r,
                        transform: s,
                        symbol: l,
                        maskId: u,
                        title: i,
                        titleId: o,
                        extra: c,
                        watchable: !0
                    })])
                }
                )).catch(m)
            }
            ))
        }
        ,
        e.generateAbstractIcon = function(t) {
            let {children: n, attributes: r, main: i, transform: o, styles: a} = t;
            const s = Yo(a);
            s.length > 0 && (r.style = s);
            let l;
            return rl(o) && (l = On("generateAbstractTransformGrouping", {
                main: i,
                transform: o,
                containerWidth: i.width,
                iconWidth: i.width
            })),
            n.push(l || i.icon),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , Kg = {
    mixout() {
        return {
            layer(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {classes: n=[]} = t;
                return Jo({
                    type: "layer"
                }, ( () => {
                    Wn("beforeDOMElementCreation", {
                        assembler: e,
                        params: t
                    });
                    let r = [];
                    return e((i => {
                        Array.isArray(i) ? i.map((o => {
                            r = r.concat(o.abstract)
                        }
                        )) : r = r.concat(i.abstract)
                    }
                    )),
                    [{
                        tag: "span",
                        attributes: {
                            class: ["".concat(ne.cssPrefix, "-layers"), ...n].join(" ")
                        },
                        children: r
                    }]
                }
                ))
            }
        }
    }
}
  , Yg = {
    mixout() {
        return {
            counter(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {title: n=null, classes: r=[], attributes: i={}, styles: o={}} = t;
                return Jo({
                    type: "counter",
                    content: e
                }, ( () => (Wn("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                Tg({
                    content: e.toString(),
                    title: n,
                    extra: {
                        attributes: i,
                        styles: o,
                        classes: ["".concat(ne.cssPrefix, "-layers-counter"), ...r]
                    }
                }))))
            }
        }
    }
}
  , Xg = {
    mixout() {
        return {
            text(e) {
                let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                const {transform: n=qt, title: r=null, classes: i=[], attributes: o={}, styles: a={}} = t;
                return Jo({
                    type: "text",
                    content: e
                }, ( () => (Wn("beforeDOMElementCreation", {
                    content: e,
                    params: t
                }),
                Gd({
                    content: e,
                    transform: N(N({}, qt), n),
                    title: r,
                    extra: {
                        attributes: o,
                        styles: a,
                        classes: ["".concat(ne.cssPrefix, "-layers-text"), ...i]
                    }
                }))))
            }
        }
    },
    provides(e) {
        e.generateLayersText = function(t, n) {
            const {title: r, transform: i, extra: o} = n;
            let a = null
              , s = null;
            if (sm) {
                const l = parseInt(getComputedStyle(t).fontSize, 10)
                  , d = t.getBoundingClientRect();
                a = d.width / l,
                s = d.height / l
            }
            return ne.autoA11y && !r && (o.attributes["aria-hidden"] = "true"),
            Promise.resolve([t, Gd({
                content: t.innerHTML,
                width: a,
                height: s,
                transform: i,
                title: r,
                extra: o,
                watchable: !0
            })])
        }
    }
};
const Zg = new RegExp('"',"ug")
  , eu = [1105920, 1112319]
  , tu = N(N(N(N({}, {
    FontAwesome: {
        normal: "fas",
        400: "fas"
    }
}), wv), Iv), Dv)
  , bs = Object.keys(tu).reduce(( (e, t) => (e[t.toLowerCase()] = tu[t],
e)), {})
  , Jg = Object.keys(bs).reduce(( (e, t) => {
    const n = bs[t];
    return e[t] = n[900] || [...Object.entries(n)][0][1],
    e
}
), {});
function Qg(e) {
    const t = e.replace(Zg, "")
      , n = og(t, 0)
      , r = n >= eu[0] && n <= eu[1]
      , i = t.length === 2 ? t[0] === t[1] : !1;
    return {
        value: ls(i ? t[0] : t),
        isSecondary: r || i
    }
}
function ey(e, t) {
    const n = e.replace(/^['"]|['"]$/g, "").toLowerCase()
      , r = parseInt(t)
      , i = isNaN(r) ? "normal" : r;
    return (bs[n] || {})[i] || Jg[n]
}
function nu(e, t) {
    const n = "".concat(zv).concat(t.replace(":", "-"));
    return new Promise(( (r, i) => {
        if (e.getAttribute(n) !== null)
            return r();
        const a = _r(e.children).filter((f => f.getAttribute(is) === t))[0]
          , s = Cn.getComputedStyle(e, t)
          , l = s.getPropertyValue("font-family")
          , d = l.match(Bv)
          , u = s.getPropertyValue("font-weight")
          , c = s.getPropertyValue("content");
        if (a && !d)
            return e.removeChild(a),
            r();
        if (d && c !== "none" && c !== "") {
            const f = s.getPropertyValue("content");
            let m = ey(l, u);
            const {value: b, isSecondary: p} = Qg(f)
              , y = d[0].startsWith("FontAwesome");
            let v = ol(m, b)
              , w = v;
            if (y) {
                const g = cg(b);
                g.iconName && g.prefix && (v = g.iconName,
                m = g.prefix)
            }
            if (v && !p && (!a || a.getAttribute(Qs) !== m || a.getAttribute(el) !== w)) {
                e.setAttribute(n, w),
                a && e.removeChild(a);
                const g = Vg()
                  , {extra: k} = g;
                k.attributes[is] = t,
                ms(v, m).then((O => {
                    const D = al(N(N({}, g), {}, {
                        icons: {
                            main: O,
                            mask: Dm()
                        },
                        prefix: m,
                        iconName: w,
                        extra: k,
                        watchable: !0
                    }))
                      , R = Ve.createElementNS("http://www.w3.org/2000/svg", "svg");
                    t === "::before" ? e.insertBefore(R, e.firstChild) : e.appendChild(R),
                    R.outerHTML = D.map((G => yi(G))).join(`\n`),
                    e.removeAttribute(n),
                    r()
                }
                )).catch(i)
            } else
                r()
        } else
            r()
    }
    ))
}
function ty(e) {
    return Promise.all([nu(e, "::before"), nu(e, "::after")])
}
function ny(e) {
    return e.parentNode !== document.head && !~jv.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(is) && (!e.parentNode || e.parentNode.tagName !== "svg")
}
function ru(e) {
    if (dn)
        return new Promise(( (t, n) => {
            const r = _r(e.querySelectorAll("*")).filter(ny).map(ty)
              , i = sl.begin("searchPseudoElements");
            Fm(),
            Promise.all(r).then(( () => {
                i(),
                hs(),
                t()
            }
            )).catch(( () => {
                i(),
                hs(),
                n()
            }
            ))
        }
        ))
}
var ry = {
    hooks() {
        return {
            mutationObserverCallbacks(e) {
                return e.pseudoElementsCallback = ru,
                e
            }
        }
    },
    provides(e) {
        e.pseudoElements2svg = function(t) {
            const {node: n=Ve} = t;
            ne.searchPseudoElements && ru(n)
        }
    }
};
let iu = !1;
var iy = {
    mixout() {
        return {
            dom: {
                unwatch() {
                    Fm(),
                    iu = !0
                }
            }
        }
    },
    hooks() {
        return {
            bootstrap() {
                Zd(us("mutationObserverCallbacks", {}))
            },
            noAuto() {
                Ig()
            },
            watch(e) {
                const {observeMutationsRoot: t} = e;
                iu ? hs() : Zd(us("mutationObserverCallbacks", {
                    observeMutationsRoot: t
                }))
            }
        }
    }
};
const ou = e => {
    let t = {
        size: 16,
        x: 0,
        y: 0,
        flipX: !1,
        flipY: !1,
        rotate: 0
    };
    return e.toLowerCase().split(" ").reduce(( (n, r) => {
        const i = r.toLowerCase().split("-")
          , o = i[0];
        let a = i.slice(1).join("-");
        if (o && a === "h")
            return n.flipX = !0,
            n;
        if (o && a === "v")
            return n.flipY = !0,
            n;
        if (a = parseFloat(a),
        isNaN(a))
            return n;
        switch (o) {
        case "grow":
            n.size = n.size + a;
            break;
        case "shrink":
            n.size = n.size - a;
            break;
        case "left":
            n.x = n.x - a;
            break;
        case "right":
            n.x = n.x + a;
            break;
        case "up":
            n.y = n.y - a;
            break;
        case "down":
            n.y = n.y + a;
            break;
        case "rotate":
            n.rotate = n.rotate + a;
            break
        }
        return n
    }
    ), t)
}
;
var oy = {
    mixout() {
        return {
            parse: {
                transform: e => ou(e)
            }
        }
    },
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-transform");
                return n && (e.transform = ou(n)),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractTransformGrouping = function(t) {
            let {main: n, transform: r, containerWidth: i, iconWidth: o} = t;
            const a = {
                transform: "translate(".concat(i / 2, " 256)")
            }
              , s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") ")
              , l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") ")
              , d = "rotate(".concat(r.rotate, " 0 0)")
              , u = {
                transform: "".concat(s, " ").concat(l, " ").concat(d)
            }
              , c = {
                transform: "translate(".concat(o / 2 * -1, " -256)")
            }
              , f = {
                outer: a,
                inner: u,
                path: c
            };
            return {
                tag: "g",
                attributes: N({}, f.outer),
                children: [{
                    tag: "g",
                    attributes: N({}, f.inner),
                    children: [{
                        tag: n.icon.tag,
                        children: n.icon.children,
                        attributes: N(N({}, n.icon.attributes), f.path)
                    }]
                }]
            }
        }
    }
};
const _a = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
};
function au(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"),
    e
}
function ay(e) {
    return e.tag === "g" ? e.children : [e]
}
var sy = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-mask")
                  , r = n ? Zo(n.split(" ").map((i => i.trim()))) : Dm();
                return r.prefix || (r.prefix = Tn()),
                e.mask = r,
                e.maskId = t.getAttribute("data-fa-mask-id"),
                e
            }
        }
    },
    provides(e) {
        e.generateAbstractMask = function(t) {
            let {children: n, attributes: r, main: i, mask: o, maskId: a, transform: s} = t;
            const {width: l, icon: d} = i
              , {width: u, icon: c} = o
              , f = Qv({
                transform: s,
                containerWidth: u,
                iconWidth: l
            })
              , m = {
                tag: "rect",
                attributes: N(N({}, _a), {}, {
                    fill: "white"
                })
            }
              , b = d.children ? {
                children: d.children.map(au)
            } : {}
              , p = {
                tag: "g",
                attributes: N({}, f.inner),
                children: [au(N({
                    tag: d.tag,
                    attributes: N(N({}, d.attributes), f.path)
                }, b))]
            }
              , y = {
                tag: "g",
                attributes: N({}, f.outer),
                children: [p]
            }
              , v = "mask-".concat(a || li())
              , w = "clip-".concat(a || li())
              , g = {
                tag: "mask",
                attributes: N(N({}, _a), {}, {
                    id: v,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse"
                }),
                children: [m, y]
            }
              , k = {
                tag: "defs",
                children: [{
                    tag: "clipPath",
                    attributes: {
                        id: w
                    },
                    children: ay(c)
                }, g]
            };
            return n.push(k, {
                tag: "rect",
                attributes: N({
                    fill: "currentColor",
                    "clip-path": "url(#".concat(w, ")"),
                    mask: "url(#".concat(v, ")")
                }, _a)
            }),
            {
                children: n,
                attributes: r
            }
        }
    }
}
  , ly = {
    provides(e) {
        let t = !1;
        Cn.matchMedia && (t = Cn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        e.missingIconAbstract = function() {
            const n = []
              , r = {
                fill: "currentColor"
            }
              , i = {
                attributeType: "XML",
                repeatCount: "indefinite",
                dur: "2s"
            };
            n.push({
                tag: "path",
                attributes: N(N({}, r), {}, {
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
                })
            });
            const o = N(N({}, i), {}, {
                attributeName: "opacity"
            })
              , a = {
                tag: "circle",
                attributes: N(N({}, r), {}, {
                    cx: "256",
                    cy: "364",
                    r: "28"
                }),
                children: []
            };
            return t || a.children.push({
                tag: "animate",
                attributes: N(N({}, i), {}, {
                    attributeName: "r",
                    values: "28;14;28;28;14;28;"
                })
            }, {
                tag: "animate",
                attributes: N(N({}, o), {}, {
                    values: "1;0;1;1;0;1;"
                })
            }),
            n.push(a),
            n.push({
                tag: "path",
                attributes: N(N({}, r), {}, {
                    opacity: "1",
                    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
                }),
                children: t ? [] : [{
                    tag: "animate",
                    attributes: N(N({}, o), {}, {
                        values: "1;0;0;0;0;1;"
                    })
                }]
            }),
            t || n.push({
                tag: "path",
                attributes: N(N({}, r), {}, {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
                }),
                children: [{
                    tag: "animate",
                    attributes: N(N({}, o), {}, {
                        values: "0;0;1;1;0;0;"
                    })
                }]
            }),
            {
                tag: "g",
                attributes: {
                    class: "missing"
                },
                children: n
            }
        }
    }
}
  , dy = {
    hooks() {
        return {
            parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol")
                  , r = n === null ? !1 : n === "" ? !0 : n;
                return e.symbol = r,
                e
            }
        }
    }
}
  , uy = [ng, Gg, Kg, Yg, Xg, ry, iy, oy, sy, ly, dy];
wg(uy, {
    mixoutsTo: Ct
});
Ct.noAuto;
Ct.config;
const Im = Ct.library;
Ct.dom;
const vs = Ct.parse;
Ct.findIconDefinition;
Ct.toHtml;
const cy = Ct.icon;
Ct.layer;
Ct.text;
Ct.counter;
var fy = {
    NODE_ENV: "production"
};
function su(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        }
        ))),
        n.push.apply(n, r)
    }
    return n
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? su(Object(n), !0).forEach((function(r) {
            wt(e, r, n[r])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : su(Object(n)).forEach((function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        }
        ))
    }
    return e
}
function my(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function py(e) {
    var t = my(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function bo(e) {
    "@babel/helpers - typeof";
    return bo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    bo(e)
}
function wt(e, t, n) {
    return t = py(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function hy(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function by(e, t) {
    if (e == null)
        return {};
    var n = hy(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
var vy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , zm = {
    exports: {}
};
(function(e) {
    (function(t) {
        var n = function(v, w, g) {
            if (!d(w) || c(w) || f(w) || m(w) || l(w))
                return w;
            var k, O = 0, D = 0;
            if (u(w))
                for (k = [],
                D = w.length; O < D; O++)
                    k.push(n(v, w[O], g));
            else {
                k = {};
                for (var R in w)
                    Object.prototype.hasOwnProperty.call(w, R) && (k[v(R, g)] = n(v, w[R], g))
            }
            return k
        }
          , r = function(v, w) {
            w = w || {};
            var g = w.separator || "_"
              , k = w.split || /(?=[A-Z])/;
            return v.split(k).join(g)
        }
          , i = function(v) {
            return b(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, (function(w, g) {
                return g ? g.toUpperCase() : ""
            }
            )),
            v.substr(0, 1).toLowerCase() + v.substr(1))
        }
          , o = function(v) {
            var w = i(v);
            return w.substr(0, 1).toUpperCase() + w.substr(1)
        }
          , a = function(v, w) {
            return r(v, w).toLowerCase()
        }
          , s = Object.prototype.toString
          , l = function(v) {
            return typeof v == "function"
        }
          , d = function(v) {
            return v === Object(v)
        }
          , u = function(v) {
            return s.call(v) == "[object Array]"
        }
          , c = function(v) {
            return s.call(v) == "[object Date]"
        }
          , f = function(v) {
            return s.call(v) == "[object RegExp]"
        }
          , m = function(v) {
            return s.call(v) == "[object Boolean]"
        }
          , b = function(v) {
            return v = v - 0,
            v === v
        }
          , p = function(v, w) {
            var g = w && "process"in w ? w.process : w;
            return typeof g != "function" ? v : function(k, O) {
                return g(k, v, O)
            }
        }
          , y = {
            camelize: i,
            decamelize: a,
            pascalize: o,
            depascalize: a,
            camelizeKeys: function(v, w) {
                return n(p(i, w), v)
            },
            decamelizeKeys: function(v, w) {
                return n(p(a, w), v, w)
            },
            pascalizeKeys: function(v, w) {
                return n(p(o, w), v)
            },
            depascalizeKeys: function() {
                return this.decamelizeKeys.apply(this, arguments)
            }
        };
        e.exports ? e.exports = y : t.humps = y
    }
    )(vy)
}
)(zm);
var gy = zm.exports
  , yy = ["class", "style"];
function wy(e) {
    return e.split(";").map((function(t) {
        return t.trim()
    }
    )).filter((function(t) {
        return t
    }
    )).reduce((function(t, n) {
        var r = n.indexOf(":")
          , i = gy.camelize(n.slice(0, r))
          , o = n.slice(r + 1).trim();
        return t[i] = o,
        t
    }
    ), {})
}
function xy(e) {
    return e.split(/\s+/).reduce((function(t, n) {
        return t[n] = !0,
        t
    }
    ), {})
}
function Rm(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof e == "string")
        return e;
    var r = (e.children || []).map((function(l) {
        return Rm(l)
    }
    ))
      , i = Object.keys(e.attributes || {}).reduce((function(l, d) {
        var u = e.attributes[d];
        switch (d) {
        case "class":
            l.class = xy(u);
            break;
        case "style":
            l.style = wy(u);
            break;
        default:
            l.attrs[d] = u
        }
        return l
    }
    ), {
        attrs: {},
        class: {},
        style: {}
    });
    n.class;
    var o = n.style
      , a = o === void 0 ? {} : o
      , s = by(n, yy);
    return je(e.tag, en(en(en({}, t), {}, {
        class: i.class,
        style: en(en({}, i.style), a)
    }, i.attrs), s), r)
}
var jm = !1;
try {
    jm = fy.NODE_ENV === "production"
} catch {}
function ky() {
    if (!jm && console && typeof console.error == "function") {
        var e;
        (e = console).error.apply(e, arguments)
    }
}
function Sa(e, t) {
    return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? wt({}, e, t) : {}
}
function _y(e) {
    var t, n = (t = {
        "fa-spin": e.spin,
        "fa-pulse": e.pulse,
        "fa-fw": e.fixedWidth,
        "fa-border": e.border,
        "fa-li": e.listItem,
        "fa-inverse": e.inverse,
        "fa-flip": e.flip === !0,
        "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
        "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
    },
    wt(wt(wt(wt(wt(wt(wt(wt(wt(wt(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash),
    wt(wt(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
    return Object.keys(n).map((function(r) {
        return n[r] ? r : null
    }
    )).filter((function(r) {
        return r
    }
    ))
}
function lu(e) {
    if (e && bo(e) === "object" && e.prefix && e.iconName && e.icon)
        return e;
    if (vs.icon)
        return vs.icon(e);
    if (e === null)
        return null;
    if (bo(e) === "object" && e.prefix && e.iconName)
        return e;
    if (Array.isArray(e) && e.length === 2)
        return {
            prefix: e[0],
            iconName: e[1]
        };
    if (typeof e == "string")
        return {
            prefix: "fas",
            iconName: e
        }
}
var vo = ve({
    name: "FontAwesomeIcon",
    props: {
        border: {
            type: Boolean,
            default: !1
        },
        fixedWidth: {
            type: Boolean,
            default: !1
        },
        flip: {
            type: [Boolean, String],
            default: !1,
            validator: function(t) {
                return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1
            }
        },
        icon: {
            type: [Object, Array, String],
            required: !0
        },
        mask: {
            type: [Object, Array, String],
            default: null
        },
        maskId: {
            type: String,
            default: null
        },
        listItem: {
            type: Boolean,
            default: !1
        },
        pull: {
            type: String,
            default: null,
            validator: function(t) {
                return ["right", "left"].indexOf(t) > -1
            }
        },
        pulse: {
            type: Boolean,
            default: !1
        },
        rotation: {
            type: [String, Number],
            default: null,
            validator: function(t) {
                return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1
            }
        },
        swapOpacity: {
            type: Boolean,
            default: !1
        },
        size: {
            type: String,
            default: null,
            validator: function(t) {
                return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1
            }
        },
        spin: {
            type: Boolean,
            default: !1
        },
        transform: {
            type: [String, Object],
            default: null
        },
        symbol: {
            type: [Boolean, String],
            default: !1
        },
        title: {
            type: String,
            default: null
        },
        titleId: {
            type: String,
            default: null
        },
        inverse: {
            type: Boolean,
            default: !1
        },
        bounce: {
            type: Boolean,
            default: !1
        },
        shake: {
            type: Boolean,
            default: !1
        },
        beat: {
            type: Boolean,
            default: !1
        },
        fade: {
            type: Boolean,
            default: !1
        },
        beatFade: {
            type: Boolean,
            default: !1
        },
        flash: {
            type: Boolean,
            default: !1
        },
        spinPulse: {
            type: Boolean,
            default: !1
        },
        spinReverse: {
            type: Boolean,
            default: !1
        }
    },
    setup: function(t, n) {
        var r = n.attrs
          , i = P((function() {
            return lu(t.icon)
        }
        ))
          , o = P((function() {
            return Sa("classes", _y(t))
        }
        ))
          , a = P((function() {
            return Sa("transform", typeof t.transform == "string" ? vs.transform(t.transform) : t.transform)
        }
        ))
          , s = P((function() {
            return Sa("mask", lu(t.mask))
        }
        ))
          , l = P((function() {
            return cy(i.value, en(en(en(en({}, o.value), a.value), s.value), {}, {
                symbol: t.symbol,
                title: t.title,
                titleId: t.titleId,
                maskId: t.maskId
            }))
        }
        ));
        dt(l, (function(u) {
            if (!u)
                return ky("Could not find one or more icon(s)", i.value, s.value)
        }
        ), {
            immediate: !0
        });
        var d = P((function() {
            return l.value ? Rm(l.value.abstract[0], {}, r) : null
        }
        ));
        return function() {
            return d.value
        }
    }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Sy = {
    prefix: "fab",
    iconName: "monero",
    icon: [496, 512, [], "f3d0", "M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z"]
}
  , Ey = {
    prefix: "fab",
    iconName: "cc-stripe",
    icon: [576, 512, [], "f1f5", "M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]
}
  , Cy = {
    prefix: "fab",
    iconName: "bitcoin",
    icon: [512, 512, [], "f379", "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"]
}
  , Ty = {
    prefix: "fab",
    iconName: "paypal",
    icon: [384, 512, [], "f1ed", "M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"]
}
  , Oy = {
    prefix: "fab",
    iconName: "ethereum",
    icon: [320, 512, [], "f42e", "M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Ay = {
    prefix: "fas",
    iconName: "v",
    icon: [384, 512, [118], "56", "M19.7 34.5c16.3-6.8 35 .9 41.8 17.2L192 364.8 322.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7L2.5 76.3c-6.8-16.3 .9-35 17.2-41.8z"]
}
  , Dy = {
    prefix: "fas",
    iconName: "money-bill-wave",
    icon: [576, 512, [], "f53a", "M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"]
}
  , Py = {
    prefix: "fas",
    iconName: "bitcoin-sign",
    icon: [320, 512, [], "e0b4", "M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32l0 32 32 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-6.3 0C18.7 448 0 429.3 0 406.3L0 288l0-22.3L0 224 0 101.6C0 80.8 16.8 64 37.6 64L48 64l0-32zM64 224l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 128l0 96zm112 64L64 288l0 96 144 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-32 0z"]
}
  , $y = {
    prefix: "fas",
    iconName: "wallet",
    icon: [512, 512, [], "f555", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}
  , My = {
    prefix: "fas",
    iconName: "litecoin-sign",
    icon: [384, 512, [], "e1d3", "M128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 149.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6s22.6 26.8 39.6 22L64 280.1 64 448c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-224 0 0-154.1 136.8-39.1c17-4.9 26.8-22.6 22-39.6s-22.6-26.8-39.6-22L128 195.3 128 64z"]
}
  , Ly = {
    prefix: "fas",
    iconName: "coins",
    icon: [512, 512, [], "f51e", "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"]
}
  , Fy = {
    prefix: "fas",
    iconName: "credit-card",
    icon: [576, 512, [128179, 62083, "credit-card-alt"], "f09d", "M64 32C28.7 32 0 60.7 0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32zM576 224L0 224 0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192zM112 352l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]
}
  , Vm = {
    prefix: "fas",
    iconName: "chevron-down",
    icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}
  , Ny = {
    prefix: "fas",
    iconName: "dollar-sign",
    icon: [320, 512, [128178, 61781, "dollar", "usd"], "24", "M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z"]
}
  , Iy = {
    name: "Cryptoicon",
    props: {
        symbol: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: null
        },
        size: {
            type: [String, Number],
            default: "24"
        },
        generic: {
            type: Boolean,
            default: !1
        }
    },
    data() {
        return {
            lookupSymbol: new Map([["BCHSV", "BSV"], ["BCHABC", "BAB"]])
        }
    },
    computed: {
        lSymbol() {
            return this.symbol && this.symbol.toLowerCase()
        },
        uSymbol() {
            return this.symbol && this.symbol.toUpperCase()
        },
        icon() {
            const e = this.lookupSymbol.has(this.uSymbol) ? this.lookupSymbol.get(this.uSymbol) : this.symbol;
            let t = this.$options.lib.find((n => n.symbol === e.toLowerCase()));
            if (t)
                return this.color ? t.plainIcon(this.color) : t.colorIcon();
            if (this.generic) {
                let n = this.$options.lib.find((r => r.symbol == "generic"));
                if (n)
                    return this.color ? n.plainIcon(this.color) : n.colorIcon()
            } else {
                console.error(`Symbol of the icon is not correct: ${this.symbol}`);
                return
            }
        }
    },
    lib: [],
    add(e) {
        Array.isArray(e) ? this.lib = e : this.lib.push(e)
    }
}
  , zy = ["width", "height", "innerHTML"];
function Ry(e, t, n, r, i, o) {
    return S(),
    T("svg", {
        width: n.size,
        height: n.size,
        class: ye(`cryptoicon--${n.symbol}`),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        onClick: t[0] || (t[0] = a => e.$emit("click")),
        innerHTML: o.icon
    }, null, 10, zy)
}
const dl = gt(Iy, [["render", Ry]])
  , jy = {
    symbol: "bnb",
    color: "#000",
    colorIcon() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><circle cx="16" cy="16" r="16" fill="#F3BA2F"/><path fill="#FFF" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></g>'
    },
    plainIcon: e => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596l-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"/>`
}
  , Vy = {
    symbol: "btc",
    color: "#000",
    colorIcon() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"/><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></g>'
    },
    plainIcon: e => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/>`
}
  , Uy = {
    symbol: "dai",
    color: "#000",
    colorIcon() {
        return '<g fill="none" fill-rule="evenodd"><circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/><path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 8H9.277v5.194H7v1.861h2.277v1.953H7v1.86h2.277V24h6.552c3.94 0 6.938-2.095 8.091-5.131H26v-1.86h-1.624c.04-.33.06-.668.06-1.01v-.046c0-.304-.016-.604-.047-.898H26v-1.86h-2.041C22.835 10.114 19.814 8 15.829 8zm6.084 10.869c-1.007 2.075-3.171 3.462-6.084 3.462h-4.72v-3.462zm.564-3.814c.042.307.064.622.064.944v.045c0 .329-.023.65-.067.964H11.108v-1.953h11.37zM15.83 9.666c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z"/>`
}
  , By = {
    symbol: "eth",
    color: "#000",
    colorIcon() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>'
    },
    plainIcon: e => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill-rule="evenodd"><path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"/><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"/><path fill-opacity=".801" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".298" d="M9 16.22l7.498 4.353v-7.701z"/></g></g>`
}
  , Hy = {
    symbol: "ltc",
    color: "#000",
    colorIcon() {
        return '<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#BFBBBB"/><path fill="#FFF" d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z"/></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.573-12.786L9.252 24h12.875L23 20.429h-7.722l.848-3.483 1.427-.571.68-2.75-1.41.571L18.342 8h-5.129l-2.081 8.429-1.444.58L9 19.768l1.427-.554z"/>`
}
  , qy = {
    symbol: "matic",
    color: "#000",
    colorIcon() {
        return '<g fill="none"><circle fill="#6F41D8" cx="16" cy="16" r="16"/><path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-5.13 7.662l-4.243 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409c-.37-.215-.85-.215-1.255 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0z"/>`
}
  , Wy = {
    symbol: "trx",
    color: "#000",
    colorIcon() {
        return '<g fill="none"><circle fill="#EF0027" cx="16" cy="16" r="16"/><path d="M21.932 9.913L7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562zm-.232 1.17l2.208 2.099-6.038 1.093 3.83-3.192zm-5.142 2.973l-6.364-5.278 10.402 1.914-4.038 3.364zm-.453.934l-1.038 8.58L9.472 9.487l6.633 5.502zm.96.455l6.687-1.21-7.67 9.343.983-8.133z" fill="#FFF"/></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM7.5 7.257l7.595 19.112 10.583-12.894-3.746-3.562L7.5 7.257zm16.252 6.977l-7.67 9.344.983-8.133 6.687-1.21zM9.472 9.488l6.633 5.502-1.038 8.58L9.472 9.487zM21.7 11.083l2.208 2.099-6.038 1.093 3.83-3.192zM10.194 8.778l10.402 1.914-4.038 3.364-6.364-5.278z"/>`
}
  , Gy = {
    symbol: "uni",
    color: "#000",
    colorIcon() {
        return '<g fill="none" fill-rule="evenodd"><circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/><path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/><path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/><path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/></g></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16A15.97 15.97 0 016.199 3.353l.093.114.25.306c3.544 4.34 5.376 6.593 5.496 6.758.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28a1.453 1.453 0 01-.134-.167l-.086-.119c-.27-.384-.78-1.16-1.633-2.482a188.53 188.53 0 00-1.712-2.633l-.012-.01c-.002 0-.001.004.004.016l.032.064c.103.198.469.852 1.594 2.866 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206-.02-.024c-.332-.38-2.427-2.691-6.284-6.932l-.102-.111A15.93 15.93 0 0116 0zm.048 20.72c-.454-.116-1.271-.148-1.762-.068-1.139.185-2.388.787-3.393 1.635l-.299.253.263.04c1.371.215 1.74.405 2.692 1.385.547.564.732.69 1.186.805.667.17 1.325-.142 1.55-.737.101-.266.088-.707-.028-.928-.275-.526-1.076-.696-1.463-.31-.323.32-.229.804.172.888.092.019.09.015-.023-.036-.176-.08-.252-.19-.253-.365-.002-.41.468-.641.905-.444.32.144.448.333.448.664a.83.83 0 01-.939.831 1.38 1.38 0 01-.777-.406c-.445-.504-.272-1.298.35-1.603.473-.232 1.102-.175 1.59.145.56.367.799.702 1.282 1.803.157.359.36.762.45.897.456.685 1.004 1.02 1.664 1.02.364 0 .638-.066.983-.238.256-.128.618-.37.592-.397a1.005 1.005 0 00-.236.073c-.72.281-1.453.262-1.878-.05-.268-.195-.484-.586-.595-1.074a23.05 23.05 0 01-.141-.83c-.148-.942-.29-1.366-.621-1.852-.34-.497-.99-.915-1.719-1.101zm4.842-4.955c-.02 0-.054.061-.075.135-.197.697-.115 1.443.245 2.216l.065.135c.166.333.382.676 1.03 1.647.631.947.944 1.507 1.097 1.966.25.75.213 1.424-.118 2.116-.079.164-.131.297-.117.297.014 0 .143-.064.288-.143.984-.534 1.675-1.45 1.972-2.616.094-.37.131-1.253.068-1.62-.112-.648-.344-1.18-.72-1.647-.428-.533-1.058-1-2.163-1.602-.885-.482-1.217-.67-1.383-.782a.73.73 0 00-.189-.102zM7.152 19.103c0-.198.355-.27.583-.118.242.16.319.49.174.746-.138.245-.403.326-.59.18-.115-.091-.123-.225-.022-.377.1-.15.09-.223-.037-.288-.075-.039-.108-.083-.108-.143zm12.468-3.97l.069.207a4.8 4.8 0 01.13.572c.217 1.29-.46 2.333-1.778 2.737-.14.043-.689.15-1.22.239-1.078.18-1.558.306-2.041.539-.343.165-.757.412-.733.437a.488.488 0 00.174-.042c.609-.214 1.287-.324 2.316-.378.409-.021.874-.055 1.033-.075.918-.116 1.553-.394 2.048-.898.275-.28.439-.54.57-.908.085-.234.096-.32.097-.734 0-.421-.01-.498-.1-.757-.12-.34-.26-.595-.437-.794l-.128-.144zm-1.543-3.732c-.01 0-.018.192-.018.427 0 1.596.954 2.542 3.66 3.632 1.803.725 2.54 1.1 3.09 1.572.482.415.77.969.797 1.537.005.107.025.184.045.178.074-.024.35-.643.441-.987.115-.435.156-1.26.086-1.7-.244-1.514-1.266-2.626-2.918-3.174-.52-.172-1.084-.29-2.085-.437-1.701-.248-2.316-.436-2.865-.876a2.057 2.057 0 00-.233-.172zm-3.804 1.235c-.202-.103-.631-.144-.839-.08-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98zm-1.033.454c0-.351.562-.54.933-.312.195.119.246.295.13.458-.078.112-.323.22-.502.22-.268 0-.561-.192-.561-.366zm.142-7.279c-.419-.1-1.027-.153-1.284-.114-.134.02-.122.026.163.07 1.04.162 1.851.574 2.678 1.36.363.345.729.774 1.32 1.55 1.332 1.747 1.897 2.234 3.018 2.6.658.214 1.323.314 2.497.376 1.3.069 1.79.173 2.255.48.257.17.458.382.658.692l.117.18-.025-.198c-.093-.76-.636-1.83-1.328-2.613l-.126-.143-.064.287c-.16.723-.506 1.242-.828 1.243a.416.416 0 01-.372-.236c-.071-.17-.065-.232.04-.43.195-.365.243-.853.147-1.49-.027-.184-.068-.357-.09-.383-.07-.085-.632-.412-.988-.576-1.293-.598-2.84-.792-4.36-.547l-.36.058-.252-.281c-.95-1.057-1.839-1.652-2.816-1.885zm9.399.287c-.008 0-.061.102-.117.226-.142.313-.212.656-.242 1.176-.019.335-.038.45-.077.464-.059.023-.138-.001-.62-.186-.323-.125-1.127-.36-1.15-.336-.006.006.162.088.374.182s.556.272.764.396c.825.488.965.772.966 1.956 0 .59-.007.667-.08.845-.098.239-.08.284.027.073.2-.39.284-.782.296-1.39.007-.39.019-.473.074-.528.06-.06.075-.06.172-.01.145.074.8.596 1.086.863l.233.219-.233-.306c-.128-.169-.482-.56-.787-.872-.648-.663-.7-.751-.79-1.365-.07-.484-.054-.9.05-1.203a.773.773 0 00.054-.204zm-10.802.21l-.024.283c-.077.914.281 2.137.86 2.934.45.618 1.145 1.098 1.66 1.145.336.03.437-.075.285-.297-.212-.309-.472-.784-.54-.988a10.64 10.64 0 01-.207-.83c-.241-1.125-.479-1.564-1.027-1.897a3.31 3.31 0 00-.875-.326l-.132-.024z"/>`
}
  , Ky = {
    symbol: "usdc",
    color: "#000",
    colorIcon() {
        return '<g fill="none"><circle fill="#3E73C4" cx="16" cy="16" r="16"/><g fill="#FFF"><path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975a.416.416 0 00.427-.425v-.06a3.04 3.04 0 00-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 00-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z"/><path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z"/></g></g>'
    },
    plainIcon: e => `<path fill-rule="evenodd" fill="${e || (void 0).color}" d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 00.355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 00.36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 007.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 00-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 00-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 00-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 00.427.303h.975l.079-.006a.413.413 0 00.348-.419v-.06l-.037-.173a3.04 3.04 0 00-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"/>`
}
  , Yy = {
    symbol: "usdt",
    color: "#000",
    colorIcon() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g>'
    },
    plainIcon: e => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657z"/>`
}
  , Xy = {
    symbol: "xmr",
    color: "#000",
    colorIcon() {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F60"/><path fill="#FFF" fill-rule="nonzero" d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 01-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"/></g>'
    },
    plainIcon: e => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill-rule="evenodd" fill="${e || (void 0).color}" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-.03-26.765A10.816 10.816 0 005.148 16.059c0 1.202.205 2.346.557 3.432h3.227v-9.094l7.04 7.04 7.04-7.04v9.094h3.226a11.07 11.07 0 00.558-3.432c0-5.984-4.84-10.824-10.824-10.824zM14.358 19.02l-3.08-3.08v5.72H6.731c1.906 3.11 5.338 5.192 9.24 5.192 3.901 0 7.362-2.082 9.24-5.192h-4.547v-5.72l-3.05 3.08L16 20.635l-1.643-1.614z"/>`
};
Im.add(Vm);
const Zy = ve({
    name: "InputGroup",
    components: {
        ExclamationCircleIcon: Yf,
        FontAwesomeIcon: vo,
        Listbox: tf,
        ListboxButton: nf,
        ListboxOptions: rf,
        ListboxOption: of
    },
    inheritAttrs: !1,
    props: {
        type: {
            type: String,
            required: !0
        },
        errorKey: {
            type: String,
            required: !1,
            default: null
        },
        modelValue: {
            type: null,
            required: !1,
            default: null
        },
        label: {
            type: String,
            required: !1,
            default: null
        },
        fieldKey: {
            type: String,
            required: !1,
            default: null
        },
        options: {
            type: Array,
            required: !1,
            default: () => []
        },
        required: {
            type: Boolean,
            required: !1,
            default: !1
        }
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {context: r} = Nt();
        function i(l) {
            n("update:modelValue", l)
        }
        const o = P(( () => {
            var d;
            const l = (d = e.options) == null ? void 0 : d.find((u => (u.value || u) === e.modelValue));
            return l ? l.label || l : "Select an option"
        }
        ))
          , a = l => !!t[l]
          , s = P(( () => {
            var l, d, u;
            return (u = (d = (l = r.value.error) == null ? void 0 : l.errors) == null ? void 0 : d[e.errorKey]) == null ? void 0 : u[0]
        }
        ));
        return {
            hasSlot: a,
            emitUpdate: i,
            error: s,
            selectedLabel: o
        }
    }
})
  , Jy = ["for"]
  , Qy = {
    key: 0,
    class: "embed:text-red-500"
}
  , e3 = {
    key: 0,
    class: "embed:absolute embed:inset-y-0 embed:left-0 embed:pl-3 embed:pt-1 embed:flex embed:items-center embed:pointer-events-none"
}
  , t3 = ["type", "value"]
  , n3 = ["id", "checked", "type", "value"]
  , r3 = {
    class: "embed:relative"
}
  , i3 = {
    class: "embed:block embed:truncate embed:dark:text-white"
}
  , o3 = {
    class: "embed:pointer-events-none embed:absolute embed:inset-y-0 embed:right-0 embed:flex embed:items-center embed:pr-2"
}
  , a3 = ["value"]
  , s3 = ["textContent"];
function l3(e, t, n, r, i, o) {
    const a = oe("font-awesome-icon")
      , s = oe("ListboxButton")
      , l = oe("ListboxOption")
      , d = oe("ListboxOptions")
      , u = oe("Listbox")
      , c = oe("ExclamationCircleIcon");
    return S(),
    T(U, null, [_("div", {
        class: ye({
            "embed:justify-between embed:flex embed:items-center embed:h-5": e.type === "checkbox"
        })
    }, [e.label ? (S(),
    T("label", {
        key: 0,
        for: e.fieldKey,
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
    }, [ee(A(e.label) + " ", 1), e.required ? (S(),
    T("span", Qy, "*")) : Q("", !0)], 8, Jy)) : Q("", !0), _("div", {
        class: ye(["embed:relative embed:rounded-md", {
            "embed:mt-1": e.type !== "checkbox" && !!e.label
        }])
    }, [e.type !== "checkbox" && e.type !== "textarea" ? (S(),
    T("div", e3, [Qr(e.$slots, "icon")])) : Q("", !0), e.type !== "textarea" && e.type !== "checkbox" && e.type !== "select" ? (S(),
    T("input", lr({
        key: 1,
        type: e.type,
        class: {
            "embed:w-full embed:rounded-md embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:focus:outline-none": e.type !== "checkbox",
            "embed:pl-10": e.hasSlot("icon"),
            "embed:placeholder-red-300 embed:dark:placeholder-red-600 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error,
            "embed:pr-10": !!e.error && e.type !== "number"
        },
        value: e.modelValue
    }, e.$attrs, {
        onInput: t[0] || (t[0] = f => e.emitUpdate(f.target.value))
    }), null, 16, t3)) : e.type === "checkbox" ? (S(),
    T("input", lr({
        key: 2,
        id: e.fieldKey,
        checked: e.modelValue,
        type: e.type,
        class: "embed:appearance-none embed:rounded embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:ring-offset-0 embed:dark:focus:text-black embed:bg-white embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out embed:disabled:bg-zinc-100 embed:dark:disabled:bg-zinc-900 embed:disabled:opacity-70 embed:border embed:border-transparent embed:checked:bg-zinc-950",
        value: e.modelValue
    }, e.$attrs, {
        onInput: t[1] || (t[1] = f => e.emitUpdate(f.target.checked))
    }), null, 16, n3)) : e.type === "select" ? (S(),
    ke(u, {
        key: 3,
        "model-value": e.modelValue,
        "onUpdate:modelValue": e.emitUpdate,
        as: "div",
        class: "embed:relative"
    }, {
        default: te(( () => [_("div", r3, [H(s, {
            class: "embed:relative embed:w-full embed:cursor-default embed:rounded-md embed:bg-white embed:dark:bg-zinc-950 embed:py-2 embed:pl-3 embed:pr-10 embed:text-left embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:transition embed:duration-200 embed:ease-in-out"
        }, {
            default: te(( () => [_("span", i3, A(e.selectedLabel), 1), _("span", o3, [H(a, {
                icon: "chevron-down",
                class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
            })])])),
            _: 1
        }), H(dr, {
            "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
            "leave-from-class": "embed:opacity-100",
            "leave-to-class": "embed:opacity-0"
        }, {
            default: te(( () => [H(d, {
                class: "embed:fixed embed:z-51 embed:max-w-[31rem] embed:mt-1 embed:max-h-60 embed:w-[calc(100%-2rem)] embed:overflow-auto embed:rounded-md embed:bg-white embed:dark:bg-zinc-900 embed:py-1 embed:text-base embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:ring-1 embed:ring-black/5 embed:focus:outline-hidden embed:sm:text-sm"
            }, {
                default: te(( () => [(S(!0),
                T(U, null, yn(e.options, (f => (S(),
                ke(l, {
                    key: f.value || f,
                    value: f.value || f,
                    as: "template"
                }, {
                    default: te(( ({active: m, selected: b}) => [_("li", {
                        class: ye([m ? "embed:bg-zinc-100 embed:text-black embed:dark:bg-zinc-950 embed:dark:text-white" : "embed:text-zinc-800 embed:dark:text-white", "embed:relative embed:cursor-default embed:select-none embed:py-2 embed:pl-3 embed:pr-9"])
                    }, [_("span", {
                        class: ye([b ? "embed:font-semibold" : "embed:font-normal", "embed:block embed:truncate"])
                    }, A(f.label || f), 3)], 2)])),
                    _: 2
                }, 1032, ["value"])))), 128))])),
                _: 1
            })])),
            _: 1
        })])])),
        _: 1
    }, 8, ["model-value", "onUpdate:modelValue"])) : (S(),
    T("textarea", lr({
        key: 4,
        class: ["embed:w-full embed:bg-white embed:focus:bg-zinc-50 embed:text-black embed:dark:text-zinc-100 embed:border embed:border-transparent embed:rounded-md embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:focus:outline-hidden embed:shadow-sm embed:shadow-zinc-300 embed:hover:shadow-zinc-400 embed:focus:shadow-emerald-200 embed:dark:shadow-zinc-950 embed:dark:hover:shadow-black embed:dark:focus:shadow-black embed:border-2 embed:border-zinc-100 embed:focus:border-emerald-400 embed:dark:border-zinc-900 embed:dark:focus:border-emerald-900 embed:focus:ring-2 embed:ring-emerald-200 embed:dark:ring-green-800 embed:focus:border-transparent embed:transition embed:duration-200 embed:ease-in-out", {
            "embed:placeholder-red-300 embed:text-red-900 embed:border-red-300 embed:focus:ring-red-500 embed:focus:border-red-500": !!e.error
        }],
        value: e.modelValue
    }, e.$attrs, {
        onInput: t[2] || (t[2] = f => e.emitUpdate(f.target.value))
    }), null, 16, a3)), e.error && (e.type === "text" || e.type === "email") ? (S(),
    T("div", {
        key: 5,
        class: ye(["embed:absolute embed:inset-y-0 embed:right-0 embed:pr-3 embed:flex embed:items-center embed:pointer-events-none", {
            "embed:mr-6": e.type === "number"
        }])
    }, [H(c, {
        class: "embed:h-5 embed:w-5 embed:text-red-500 embed:dark:text-red-900",
        "aria-hidden": "true"
    })], 2)) : Q("", !0)], 2)], 2), e.error ? (S(),
    T("p", {
        key: 0,
        class: "embed:mt-1 embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full embed:grow",
        textContent: A(e.error)
    }, null, 8, s3)) : Q("", !0)], 64)
}
const ul = gt(Zy, [["render", l3]])
  , d3 = ve({
    name: "AdditionalInformation",
    components: {
        InputGroup: ul
    },
    setup() {
        const {context: e} = Nt()
          , t = Be("hasAttemptedSubmit", {
            value: !1
        })
          , n = P(( () => e.value.variant.additional_information))
          , r = i => {
            if (!i.required || !t.value)
                return "";
            const o = Ee.additional_information[i.key];
            if (i.type === "CHECKBOX") {
                if (o !== !0)
                    return "This checkbox must be checked"
            } else if (!o)
                return "This field is required";
            return ""
        }
        ;
        return e.value.variant.additional_information.length > 0 && (Ee.additional_information ?? (Ee.additional_information = {}),
        n.value.forEach((i => {
            var o, a;
            if ((Ee.additional_information[i.key] ?? null) === null) {
                let s;
                i.type === "CHECKBOX" ? s = !1 : i.type === "NUMBER" ? s = 0 : s = "",
                (o = Ee.additional_information)[a = i.key] ?? (o[a] = s)
            }
        }
        ))),
        {
            checkout_information: Ee,
            context: e,
            required_fields: n,
            getErrorMessage: r
        }
    }
});
function u3(e, t, n, r, i, o) {
    const a = oe("InputGroup");
    return S(!0),
    T(U, null, yn(e.required_fields, (s => (S(),
    T(U, {
        key: s
    }, [s.type === "TEXTAREA" ? (S(),
    ke(a, {
        key: 0,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": l => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        required: s.required,
        label: s.label,
        class: "embed:dark:bg-zinc-950",
        "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "NUMBER" ? (S(),
    ke(a, {
        key: 1,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": l => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        required: s.required,
        label: s.label,
        min: "1",
        class: "embed:w-full embed:dark:bg-zinc-950",
        "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "TEXT" ? (S(),
    ke(a, {
        key: 2,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": l => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        required: s.required,
        label: s.label,
        class: "embed:dark:bg-zinc-950",
        "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "error-message"])) : s.type === "SELECT" ? (S(),
    ke(a, {
        key: 3,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": l => e.checkout_information.additional_information[s.key] = l,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        required: s.required,
        label: s.label,
        options: s.options,
        class: "embed:dark:bg-zinc-950",
        "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "error-key", "placeholder", "required", "label", "options", "error-message"])) : (S(),
    ke(a, {
        key: 4,
        modelValue: e.checkout_information.additional_information[s.key],
        "onUpdate:modelValue": l => e.checkout_information.additional_information[s.key] = l,
        "field-key": `additional_information.${s.key}`,
        type: s.type.toLowerCase(),
        "error-key": `additional_information.${s.key}`,
        placeholder: s.label,
        required: s.required,
        label: s.label,
        class: "embed:dark:bg-zinc-950",
        "error-message": e.getErrorMessage(s)
    }, null, 8, ["modelValue", "onUpdate:modelValue", "field-key", "type", "error-key", "placeholder", "required", "label", "error-message"]))], 64)))), 128)
}
const c3 = gt(d3, [["render", u3]])
  , f3 = ve({
    name: "Drawer",
    props: {
        modelValue: {
            type: Boolean,
            required: !0
        },
        title: {
            type: String,
            required: !0
        },
        description: {
            type: String,
            required: !1
        }
    },
    emits: ["update:modelValue"]
})
  , m3 = {
    key: 0,
    class: "embed:absolute embed:bottom-0 embed:inset-x-0 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:rounded-t-2xl embed:z-20 embed:min-h-[20vh] embed:max-h-[50vh] embed:shadow-xl"
}
  , p3 = {
    class: "embed:flex embed:flex-col embed:justify-between embed:items-center embed:mb-4 embed:p-4"
}
  , h3 = {
    class: "embed:text-lg embed:font-semibold embed:dark:text-white embed:text-center embed:w-full"
}
  , b3 = {
    class: "embed:text-xs embed:text-zinc-400 embed:dark:text-zinc-800 embed:text-center embed:w-full"
}
  , v3 = {
    class: "embed:relative embed:pb-4"
}
  , g3 = {
    class: "embed:px-4 embed:text-sm embed:text-zinc-800 embed:dark:text-zinc-200 embed:overflow-x-auto embed:overscroll-contain embed:min-h-[8rem] embed:max-h-[calc(50vh-8rem)] embed:break-words embed:whitespace-pre-wrap embed:prose embed:dark:prose-invert embed:prose-sm embed:max-w-none embed:[&>p]:mb-4 embed:[scrollbar-width:thin] embed:[&::-webkit-scrollbar]:w-2 embed:[&::-webkit-scrollbar-track]:bg-transparent embed:[&::-webkit-scrollbar-thumb]:bg-zinc-300 embed:dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 embed:[&::-webkit-scrollbar-thumb]:rounded-full embed:[&_code]:whitespace-pre-wrap embed:[&_code]:break-words"
};
function y3(e, t, n, r, i, o) {
    return S(),
    ke(dr, {
        "enter-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
        "enter-from-class": "embed:translate-y-full",
        "enter-to-class": "embed:translate-y-0",
        "leave-active-class": "embed:transition-all embed:duration-300 embed:ease-in-out",
        "leave-from-class": "embed:translate-y-0",
        "leave-to-class": "embed:translate-y-full"
    }, {
        default: te(( () => [e.modelValue ? (S(),
        T("div", m3, [_("div", p3, [_("h3", h3, A(e.title), 1), _("h3", b3, A(e.description), 1), _("button", {
            onClick: t[0] || (t[0] = a => e.$emit("update:modelValue", !1)),
            class: "embed:absolute embed:right-2 embed:text-zinc-500 embed:hover:text-zinc-700 embed:dark:hover:text-zinc-300"
        }, t[1] || (t[1] = [_("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "embed:h-6 embed:w-6",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
        }, [_("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M6 18L18 6M6 6l12 12"
        })], -1)]))]), _("div", v3, [_("div", g3, [Qr(e.$slots, "default")])])])) : Q("", !0)])),
        _: 3
    })
}
const w3 = gt(f3, [["render", y3]]);
dl.add([Vy, Hy, Xy, By, jy, Wy, qy, Yy, Ky, Gy, Uy]);
Im.add(Ty, Py, Cy, Ey, Dy, Fy, Vm, Ay, Sy, Oy, My, $y, Ly, Ny);
const x3 = ve({
    props: {
        config: {
            type: [Object, String],
            required: !0
        },
        extraClasses: {
            type: Array,
            default: () => []
        }
    },
    setup(e) {
        return () => {
            try {
                if (typeof e.config == "string")
                    return e.config.includes("fa-") ? je(vo, {
                        icon: e.config,
                        class: e.extraClasses.join(" ")
                    }) : je(dl, {
                        symbol: e.config,
                        class: e.extraClasses.join(" ")
                    });
                if (e.config.type === "fa")
                    return je(vo, {
                        icon: e.config.value,
                        class: [...e.config.classes || [], ...e.extraClasses].join(" ")
                    });
                if (e.config.type === "svg")
                    return je("div", {
                        innerHTML: e.config.value,
                        class: [...e.config.classes || [], ...e.extraClasses].join(" ")
                    })
            } catch (t) {
                return console.error("Error rendering icon:", t),
                null
            }
        }
    }
})
  , k3 = ve({
    name: "ProductOverview",
    components: {
        MyButton: Wo,
        DialogTitle: yr,
        DialogDescription: Zc,
        NumberInput: av,
        CryptoIcon: dl,
        Navigator: Go,
        RadioGroup: cf,
        RadioGroupDescription: pf,
        RadioGroupLabel: mf,
        RadioGroupOption: ff,
        FontAwesomeIcon: vo,
        Disclosure: v0,
        DisclosureButton: g0,
        DisclosurePanel: y0,
        RenderIcon: x3,
        NumberFlow: rm,
        InputGroup: ul,
        AdditionalInformation: c3,
        EnvelopeIcon: u2,
        Drawer: w3
    },
    setup() {
        const {context: e, state: t, send: n} = Nt()
          , r = W(null)
          , i = W(null)
          , o = W(!1)
          , a = W(!1)
          , s = {
            PAYPAL: {
                description: "Checkout with your PayPal account",
                name: "PayPal",
                icon: {
                    type: "fa",
                    value: "fa-brands fa-paypal",
                    classes: ["embed:text-[#003087] embed:h-8 embed:w-6"]
                }
            },
            PAYSTACK: {
                description: "Pay with credit and debit card",
                name: "PayStack",
                icon: {
                    type: "fa",
                    value: "fa-solid fa-money-bill-wave",
                    classes: ["embed:text-[#00457C]"]
                }
            },
            STRIPE: {
                description: "Debit and credit card, Apple/Google Pay, and more",
                name: "Card",
                icon: {
                    type: "fa",
                    value: "fa-brands fa-cc-stripe",
                    classes: ["embed:text-[#5433FF] embed:h-8 embed:w-6"]
                }
            },
            CASHAPP: {
                description: "Checkout with your Cash App account",
                name: "Cash App",
                icon: {
                    type: "svg",
                    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g fill-rule="nonzero" fill="#FFF"><path d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 0 1 8.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 0 1-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 0 1-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 0 1 8.1-8.1C12.7 0 15.9 0 22.3 0h19.4z" fill="#00D632"/><path d="M42.47 23.8c.5.5 1.33.5 1.8-.0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 0 0-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 0 0-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 0 0-1.84-.0l-2.7 2.7a1.36 1.36 0 0 0 .0 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 0 0 1.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z" fill="#FFF"/></g></svg>',
                    classes: ["embed:fill-current embed:h-8 embed:w-6"]
                }
            },
            SQUARE: {
                description: "Debit and credit card, Apple/Google Pay, and more",
                name: "Square",
                icon: {
                    type: "svg",
                    value: '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Square_Payment_1_"><path d="M33,10c0-1.7-1.3-3-3-3H11c-1.7,0-3,1.3-3,3v19c0,1.7,1.3,3,3,3h19c1.7,0,3-1.3,3-3V10z" fill="currentColor"/><path d="M29,13c0-1.1-0.9-2-2-2H14c-1.1,0-2,0.9-2,2v13c0,1.1,0.9,2,2,2h13c1.1,0,2-0.9,2-2V13z" fill="#ECF0F1"/><path d="M25,16c0-0.6-0.4-1-1-1h-7c-0.6,0-1,0.4-1,1v7c0,0.6,0.4,1,1,1h7c0.6,0,1-0.4,1-1V16z" fill="currentColor"/></g></svg>',
                    classes: ["embed:text-[#2C3E50] embed:h-8 embed:w-6"]
                }
            },
            VENMO: {
                description: "Pay directly with your Venmo account",
                name: "Venmo",
                icon: {
                    type: "svg",
                    value: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611.9 117.8"><path d="M100.8 1.5c4.2 7 5.7 14 5.7 22.4 0 28-23.8 65.9-43.4 91.1H18.2L0 7.2l40.6-2.8 9.8 77.1c8.4-14 19.7-37.9 19.7-53.2 0-8.4-1.4-14-4.2-19.7zm51.8 47.7c7 0 25.2-2.8 25.2-14 0-5.7-2.8-7-7-7-8.3 0-18.2 8.4-18.2 21zm-1.3 21c0 12.7 7 18.2 16.8 18.2s19.7-2.8 32.2-8.4l-5.7 30.8c-8.4 4.2-22.4 7-36.4 7-33.5 0-46.2-21-46.2-46.2 0-33.5 19.7-68.6 60.2-68.6 22.4 0 35 12.7 35 30.8 1.5 26.6-35 36.4-55.9 36.4zM322.1 26.7c0 4.2 0 9.8-1.4 14l-11.2 74.2h-37.8l11.2-68.6c0-1.4 1.4-5.7 1.4-7 0-5.7-2.8-5.7-7-5.7-5.7 0-9.8 2.8-12.7 4.2l-14 77.1h-37.9l16.8-112.1h33.5v8.4c8.4-5.7 18.2-11.2 32.2-11.2 19.9 3 26.9 12.7 26.9 26.7zm113.4-12.5c11.2-8.4 21-12.7 35-12.7 19.7 0 26.7 9.8 26.7 25.2 0 4.2 0 9.8-1.4 14L484.7 115h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7s-9.8 1.4-12.7 4.2L425.7 114.9h-37.9l11.2-70v-5.7c0-5.7-2.8-7-7-7-5.7 0-9.8 2.8-12.7 4.2L366.7 114.7h-37.9l16.9-112h32.2l1.4 9.8c7-5.7 18.2-11.2 32.2-11.2 11.4 1.7 19.7 5.9 24 12.9zM572.7 47.8c0-9.8-2.8-15.4-9.8-15.4-15.4 0-18.2 26.7-18.2 40.6 0 9.8 2.8 16.8 9.8 16.8 15.5-1.4 18.2-29.4 18.2-42zm-65.8 22.4c0-35 18.2-68.6 61.6-68.6 32.2 0 43.4 19.7 43.4 44.9 0 35-18.2 70-61.6 70-32.2 1.3-43.4-19.7-43.4-46.3z" fill="currentColor"/></svg>',
                    classes: ["embed:text-[#3d95ce] embed:h-8 embed:w-12"]
                }
            },
            PADDLE: {
                description: "Debit and credit card, Apple/Google Pay, and more",
                name: "Paddle",
                icon: {
                    type: "svg",
                    value: '<svg viewBox="0 0 110 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9213 7.48787C52.468 7.48787 54.724 8.7676 56.1418 10.7844V0H59.0423V24.0002H56.1418V21.2156C54.724 23.2363 52.468 24.5121 49.9213 24.5121C45.1514 24.5121 41.123 20.7682 41.123 16.0005C41.123 11.2328 45.1514 7.48787 49.9213 7.48787ZM49.9213 21.9517C53.692 21.9517 56.1418 19.424 56.1418 16.0005C56.1418 12.577 53.692 10.0483 49.9213 10.0483C46.5702 10.0483 44.0234 12.448 44.0234 16.0005C44.0234 19.5529 46.5702 21.9517 49.9213 21.9517ZM36.2891 10.7843C34.8713 8.76752 32.6153 7.48779 30.0695 7.48779C25.2987 7.48779 21.2703 11.2327 21.2703 16.0004C21.2703 20.7681 25.2987 24.5121 30.0695 24.5121C32.5833 24.5121 34.8355 23.2362 36.2891 21.2156V24.0002H39.1896V7.99969H36.2891V10.7843ZM36.2891 16.0004C36.2891 19.3922 33.8073 21.9516 30.0695 21.9516C26.7175 21.9516 24.1707 19.5529 24.1707 16.0004C24.1707 12.448 26.7175 10.0482 30.0695 10.0482C33.8402 10.0482 36.2891 12.5759 36.2891 16.0004ZM0 15.5818V16.4478C0.529481 16.4479 1.05375 16.5517 1.54282 16.7531C2.0319 16.9545 2.47621 17.2497 2.85034 17.6217C3.22446 17.9937 3.52108 18.4353 3.72324 18.9212C3.92539 19.4071 4.02911 19.9277 4.02848 20.4535H4.83475C4.83501 19.3927 5.25952 18.3755 6.01495 17.6254C6.77038 16.8753 7.79489 16.4538 8.86323 16.4536V15.5876C8.33375 15.5875 7.80948 15.4837 7.3204 15.2823C6.83133 15.0809 6.38702 14.7858 6.01289 14.4137C5.63876 14.0417 5.34214 13.6002 5.13999 13.1143C4.93784 12.6284 4.83412 12.1077 4.83475 11.582H4.02848C4.02822 12.6427 3.60371 13.6599 2.84828 14.41C2.09285 15.1601 1.06834 15.5816 0 15.5818ZM10.9574 10.08H4.02848V7.51953H10.9574C15.8241 7.51953 19.6598 11.3289 19.6598 16.0004C19.6598 20.6719 15.8241 24.4803 10.9574 24.4803H6.92894V31.9999H4.02848V21.9199H10.9574C14.3424 21.9199 16.7593 19.5211 16.7593 16.0004C16.7593 12.4797 14.3415 10.08 10.9574 10.08ZM76.3185 10.7844C74.8998 8.7676 72.6437 7.48787 70.098 7.48787C65.3281 7.48787 61.2997 11.2328 61.2997 16.0005C61.2997 20.7682 65.3281 24.5121 70.098 24.5121C72.6437 24.5121 74.8998 23.2363 76.3185 21.2156V24.0002H79.219V0H76.3185V10.7844ZM76.3185 16.0005C76.3185 19.424 73.8687 21.9517 70.098 21.9517C66.7459 21.9517 64.2001 19.5529 64.2001 16.0005C64.2001 12.448 66.7459 10.0483 70.098 10.0483C73.8687 10.0483 76.3185 12.577 76.3185 16.0005ZM82.116 24.0002V0H85.0175V24.0002H82.116ZM104.001 17.1214C104.001 11.8408 101.326 7.52051 95.7513 7.52051C90.8846 7.52051 87.1139 11.3943 87.1139 16.0014C87.1139 20.6084 90.8846 24.4813 95.7513 24.4813C99.6189 24.4813 102.486 22.0488 103.582 19.5846H100.456C99.2962 21.3445 97.7496 22.2413 95.7513 22.2413C92.8508 22.2413 90.5299 20.2245 90.0793 17.1214H104.001ZM95.7513 9.76052C98.8446 9.76052 101.101 12.2565 101.101 14.8814H90.0793C90.5299 11.7811 92.8508 9.76052 95.7513 9.76052Z" fill="currentColor"/></svg>',
                    classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
                }
            },
            AUTHNET: {
                description: "Pay with credit or debit card",
                name: "Credit Card",
                icon: {
                    type: "svg",
                    value: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="embed:fill-[#ffc300] embed:text-black"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>',
                    classes: ["embed:fill-current embed:w-8 embed:h-8 embed:items-center"]
                }
            },
            BTC: {
                description: "Pay with Bitcoin",
                name: "Bitcoin",
                icon: "Btc"
            },
            LTC: {
                description: "Pay with Litecoin",
                name: "Litecoin",
                icon: "Ltc"
            },
            ETH: {
                description: "Pay with Ethereum",
                name: "Ethereum",
                icon: "Eth"
            },
            XMR: {
                description: "Pay with Monero",
                name: "Monero",
                icon: "Xmr"
            },
            BNB: {
                description: "Pay with BNB",
                name: "BNB",
                icon: "Bnb"
            },
            TRX: {
                description: "Pay with Tron",
                name: "Tron",
                icon: "Trx"
            },
            MATIC: {
                description: "Pay with Polygon",
                name: "Polygon",
                icon: "Matic"
            },
            ETH_USDT: {
                description: "Pay with USDT",
                name: "USDT",
                icon: "Usdt"
            },
            ETH_USDC: {
                description: "Pay with USDC",
                name: "USDC",
                icon: "Usdc"
            },
            ETH_UNI: {
                description: "Pay with UNI",
                name: "Uniswap",
                icon: "Uni"
            },
            ETH_SHIB: {
                description: "Pay with SHIB",
                name: "Shiba Inu",
                icon: "Eth"
            },
            ETH_DAI: {
                description: "Pay with DAI",
                name: "Dai",
                icon: "Dai"
            }
        }
          , l = e.value.variant.additional_information.map((J => J.key));
        Ee.additional_information = l.filter((J => J in Ee.additional_information)).reduce(( (J, be) => (J[be] = Ee.additional_information[be],
        J)), {}),
        cr(Ee.country) && (Ee.country = e.value.variant.current_country),
        cr(e.value.email) || (Ee.customer_email = e.value.email);
        const d = () => {
            a.value = !0,
            qe.value && n({
                type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
            })
        }
          , u = J => {
            var be, E;
            return J = J.toLowerCase(),
            ((E = (be = e.value.variant) == null ? void 0 : be.payment_discounts) == null ? void 0 : E[J]) || null
        }
          , c = J => {
            const be = u(J);
            return be ? be.percentage > 0 || be.fixed > 0 : !1
        }
          , f = {
            type: e.value.variant.discord_request ? "CONNECT_DISCORD" : "FINAL_STEP"
        }
          , m = P(( () => !cr(e.value.variant.crypto_options)))
          , b = vr({
            coupon: e.value.coupon ?? "",
            quantity: e.value.quantity ?? 0,
            extra: e.value.extra ?? "0.00"
        })
          , p = W(e.value.extra !== void 0 && e.value.extra !== "0.00")
          , y = W(e.value.coupon == "");
        function v(J, be) {
            n([{
                type: "UPDATE_CONTEXT",
                [J]: be ?? b[J]
            }, "FETCH"])
        }
        const w = W(!1);
        let g = null;
        const k = (J, be) => {
            w.value = !0,
            g && clearTimeout(g),
            g = setTimeout(( () => {
                n([{
                    type: "UPDATE_CONTEXT",
                    [J]: be ?? b[J]
                }, "FETCH"]),
                w.value = !1,
                g = null
            }
            ), 500)
        }
        ;
        dt(( () => b.quantity), (J => {
            g && clearTimeout(g),
            g = setTimeout(( () => {
                v("quantity", J)
            }
            ), 500)
        }
        ));
        const O = P(( () => e.value.product))
          , D = P(( () => e.value.variant))
          , R = P(( () => {
            const J = D.value.price
              , be = J.match(/([A-Z]{3})\u00a0(.*)/);
            if (be)
                return parseFloat(be[2].replace(/,/g, ""));
            const E = J.match(/[A-Z]{2}\u00a5(.*)/);
            return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""))
        }
        ))
          , G = P(( () => {
            const J = D.value.total
              , be = J.match(/([A-Z]{3})\u00a0(.*)/);
            if (be)
                return parseFloat(be[2].replace(/,/g, ""));
            const E = J.match(/[A-Z]{2}\u00a5(.*)/);
            return parseFloat(E ? E[1].replace(/,/g, "") : J.replace(/[^\d.]/g, ""))
        }
        ))
          , L = P(( () => {
            const J = D.value.total
              , be = J.match(/([A-Z]{3})\u00a0/);
            if (be)
                return be[1];
            const E = J.match(/([A-Z]{2})\u00a5/);
            if (E && E[1] === "CN")
                return "CNY";
            const _e = J.replace(/[\d,.\s]/g, "");
            switch (_e) {
            case "¥":
                return "JPY";
            case "€":
                return "EUR";
            case "£":
                return "GBP";
            case "₹":
                return "INR";
            case "₪":
                return "ILS";
            case "₽":
                return "RUB";
            case "₱":
                return "PHP";
            case "฿":
                return "THB"
            }
            return {
                $: "USD",
                A$: "AUD",
                CA$: "CAD",
                HK$: "HKD",
                MX$: "MXN",
                NT$: "TWD",
                NZ$: "NZD",
                S$: "SGD",
                "¥": "JPY",
                "円": "JPY",
                "元": "CNY",
                "€": "EUR",
                "£": "GBP",
                DKK: "DKK",
                NOK: "NOK",
                SEK: "SEK",
                "₹": "INR",
                "₪": "ILS",
                "₽": "RUB",
                "₱": "PHP",
                "฿": "THB",
                "₫": "VND",
                R$: "BRL",
                "Kč": "CZK",
                "₵": "GHS",
                Ft: "HUF",
                RM: "MYR",
                "₦": "NGN",
                "zł": "PLN",
                Fr: "CHF",
                R: "ZAR"
            }[_e] || "USD"
        }
        ))
          , Z = P(( () => D.value.stock === !1))
          , q = P(( () => t.value.hasTag("fetching")))
          , $ = W("fiat")
          , re = ["BTC", "ETH", "LTC", "XMR", "BNB", "TRX", "MATIC", "ETH_USDT", "ETH_USDC", "ETH_UNI", "ETH_SHIB", "ETH_DAI"]
          , he = ["STRIPE", "PAYPAL", "CASHAPP", "VENMO", "SQUARE", "PADDLE", "PAYSTACK", "AUTHNET"]
          , Te = J => re.filter((be => J.includes(be)))
          , ge = J => he.filter((be => J.includes(be)))
          , K = J => Te(J).slice(0, 2)
          , ue = J => ge(J).slice(0, 2)
          , ze = J => ie(J)[0]
          , Je = J => pe(J)[0]
          , ie = J => Te(J).slice(2)
          , pe = J => ge(J).slice(2)
          , qe = P(( () => {
            const J = Ee.customer_email && Ee.payment_method && Ee.customer_email.includes("@")
              , be = e.value.variant.additional_information.filter((E => E.required)).every((E => {
                const _e = Ee.additional_information[E.key];
                return E.type === "CHECKBOX" ? _e === !0 : _e != null && _e !== ""
            }
            ));
            return J && be
        }
        ))
          , Oe = P(( () => K(e.value.variant.crypto_options)))
          , it = P(( () => ue(e.value.variant.payment_processors)));
        return at("hasAttemptedSubmit", a),
        {
            product: O,
            variant: D,
            send: n,
            data: b,
            context: e,
            orMore: p,
            applyCoupon: y,
            apply: v,
            debouncedApply: k,
            isApplying: w,
            isSoldOut: Z,
            isLoading: q,
            checkout_information: Ee,
            paymentMethods: s,
            getDiscount: u,
            isPositiveDiscount: c,
            next: f,
            showCrypto: m,
            paymentType: $,
            selectedDropdownMethod: r,
            selectedFiatMethod: i,
            defaultCryptoOptions: Oe,
            getFirstTwoOptions: K,
            getThirdOption: ze,
            getRemainingOptions: ie,
            defaultFiatOptions: it,
            getFirstTwoFiatOptions: ue,
            getThirdFiatOption: Je,
            getRemainingFiatOptions: pe,
            formattedPrice: R,
            formattedTotal: G,
            currencyCode: L,
            isDescriptionOpen: o,
            isValidInput: qe,
            hasAttemptedSubmit: a,
            handleClick: d
        }
    }
})
  , _3 = {
    class: "embed:relative"
}
  , S3 = {
    class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6 embed:space-y-3"
}
  , E3 = {
    class: "embed:space-y-3"
}
  , C3 = {
    class: "embed:flex embed:items-stretch embed:min-h-24"
}
  , T3 = {
    key: 0,
    class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:overflow-hidden embed:bg-inherit embed:mr-4"
}
  , O3 = ["src", "alt"]
  , A3 = {
    class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between"
}
  , D3 = {
    class: "embed:space-y-px"
}
  , P3 = ["innerHTML"]
  , $3 = {
    class: "embed:flex embed:flex-row embed:gap-2 embed:items-center"
}
  , M3 = {
    key: 0,
    class: "embed:text-md embed:font-normal embed:text-black embed:dark:text-white embed:line-through"
}
  , L3 = {
    class: "embed:text-md embed:text-black embed:dark:text-white embed:font-bold"
}
  , F3 = {
    key: 0,
    class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2"
}
  , N3 = {
    class: "embed:flex embed:space-x-2"
}
  , I3 = ["textContent"]
  , z3 = {
    class: "embed:inline-block embed:text-left embed:text-xs embed:text-black embed:dark:text-white embed:space-x-1"
}
  , R3 = {
    key: 0,
    class: "embed:text-lg"
}
  , j3 = {
    key: 1
}
  , V3 = ["textContent"]
  , U3 = {
    class: "embed:text-left"
}
  , B3 = {
    key: 0,
    class: "embed:flex embed:flex-row embed:gap-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:p-1 embed:rounded-md"
}
  , H3 = {
    class: "embed:flex embed:flex-row embed:justify-center embed:gap-4"
}
  , q3 = {
    class: "embed:flex embed:items-center"
}
  , W3 = {
    class: "embed:text-sm embed:w-full"
}
  , G3 = {
    class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full"
}
  , K3 = {
    key: 0,
    class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}
  , Y3 = {
    class: "embed:flex embed:items-center"
}
  , X3 = {
    class: "embed:text-sm embed:w-full"
}
  , Z3 = {
    class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full"
}
  , J3 = {
    key: 0,
    class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}
  , Q3 = {
    class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8"
}
  , e4 = {
    class: "embed:flex embed:flex-col"
}
  , t4 = {
    class: "embed:flex embed:items-center"
}
  , n4 = {
    class: "embed:block embed:truncate embed:text-sm"
}
  , r4 = {
    key: 0,
    class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}
  , i4 = {
    class: "embed:flex embed:items-center"
}
  , o4 = {
    class: "embed:text-sm embed:w-full"
}
  , a4 = {
    class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full"
}
  , s4 = {
    key: 0,
    class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}
  , l4 = {
    class: "embed:flex embed:items-center"
}
  , d4 = {
    class: "embed:text-sm embed:w-full"
}
  , u4 = {
    class: "embed:flex embed:justify-center embed:flex-row embed:gap-2 embed:items-center embed:w-full"
}
  , c4 = {
    key: 0,
    class: "embed:text-[0.65rem] embed:text-zinc-500 embed:dark:text-zinc-400 embed:font-normal"
}
  , f4 = {
    class: "embed:flex embed:flex-col embed:items-center embed:justify-center embed:h-full embed:w-8"
}
  , m4 = {
    class: "embed:flex embed:items-center"
}
  , p4 = {
    class: "embed:block embed:truncate embed:text-sm"
}
  , h4 = {
    key: 0,
    class: "embed:text-xs embed:text-zinc-500 embed:dark:text-zinc-400 embed:text-left"
}
  , b4 = {
    key: 0,
    class: "embed:text-left embed:space-y-2"
}
  , v4 = {
    key: 1,
    class: "embed:pt-3 embed:text-left embed:flex embed:flex-col embed:gap-3"
}
  , g4 = {
    key: 0
}
  , y4 = {
    class: "embed:flex embed:flex-row embed:items-center embed:justify-center embed:gap-2"
}
  , w4 = {
    class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:shadow-sm embed:shrink-0 embed:pt-4"
}
  , x4 = {
    class: "embed:relative"
}
  , k4 = {
    class: "embed:flex embed:rounded-md"
}
  , _4 = {
    class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10"
}
  , S4 = ["textContent"]
  , E4 = {
    key: 3,
    class: "embed:mt-3 embed:w-full embed:mx-auto embed:text-center embed:p-2 embed:bg-emerald-600 embed:dark:bg-emerald-900 embed:text-white embed:text-xs embed:rounded-full"
}
  , C4 = {
    key: 2,
    class: "embed:flex embed:flex-col embed:gap-1"
}
  , T4 = {
    class: "embed:flex embed:flex-col embed:space-y-2"
}
  , O4 = {
    key: 0,
    class: "embed:p-2 embed:bg-zinc-50 embed:text-xs embed:dark:bg-zinc-950 embed:rounded-lg embed:text-red-600 embed:dark:text-red-400 embed:text-center"
}
  , A4 = {
    key: 0
}
  , D4 = {
    key: 1
}
  , P4 = {
    key: 2
}
  , $4 = ["innerHTML"]
  , M4 = {
    class: "embed:flex embed:flex-col embed:gap-1 embed:rounded-md embed:pt-4"
}
  , L4 = {
    class: "embed:relative embed:mx-auto embed:items-center embed:w-1/2"
}
  , F4 = {
    class: "embed:flex embed:rounded-md embed:w-full"
}
  , N4 = {
    class: "embed:relative embed:flex embed:items-stretch embed:grow embed:focus-within:z-10"
}
  , I4 = ["textContent"]
  , z4 = {
    class: "embed:dark:bg-zinc-950 embed:bg-zinc-50 embed:rounded-t-2xl embed:py-4 embed:flex embed:flex-row embed:justify-center embed:items-center embed:gap-2"
}
  , R4 = {
    key: 1
};
function j4(e, t, n, r, i, o) {
    var G, L, Z, q, $, re, he, Te, ge;
    const a = oe("DialogTitle")
      , s = oe("NumberFlow")
      , l = oe("NumberInput")
      , d = oe("EnvelopeIcon")
      , u = oe("InputGroup")
      , c = oe("CryptoIcon")
      , f = oe("RadioGroupLabel")
      , m = oe("RadioGroupOption")
      , b = oe("font-awesome-icon")
      , p = oe("ListboxButton")
      , y = oe("RenderIcon")
      , v = oe("ListboxOption")
      , w = oe("ListboxOptions")
      , g = oe("Listbox")
      , k = oe("RadioGroup")
      , O = oe("AdditionalInformation")
      , D = oe("MyButton")
      , R = oe("Drawer");
    return S(),
    T("div", _3, [_("div", S3, [H(k, {
        modelValue: e.checkout_information.payment_method,
        "onUpdate:modelValue": t[8] || (t[8] = K => e.checkout_information.payment_method = K)
    }, {
        default: te(( () => {
            var K, ue, ze, Je, ie, pe, qe, Oe, it, J, be;
            return [_("div", E3, [_("div", C3, [((K = e.variant.images) == null ? void 0 : K.length) > 0 ? (S(),
            T("div", T3, [_("img", {
                class: "embed:object-contain embed:h-full embed:w-full",
                src: e.variant.images[0],
                alt: e.variant.title
            }, null, 8, O3)])) : Q("", !0), _("div", A3, [_("div", D3, [H(a, {
                as: "h1",
                class: "embed:font-bold embed:text-black embed:dark:text-white embed:text-xl"
            }, {
                default: te(( () => [ee(A(e.product.title), 1)])),
                _: 1
            }), e.variant.description !== "Default Variant" && e.variant.description !== "default variant" ? (S(),
            T("p", {
                key: 0,
                class: "embed:dark:text-zinc-400 embed:text-xs",
                innerHTML: e.variant.description
            }, null, 8, P3)) : Q("", !0), _("div", $3, [e.variant.price !== e.variant.total ? (S(),
            T("div", M3, [H(s, {
                value: e.formattedPrice,
                format: {
                    style: "currency",
                    currency: e.currencyCode,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                },
                class: "embed:pointer-events-none embed:line-through",
                animated: !0
            }, null, 8, ["value", "format"])])) : Q("", !0), _("div", L3, [H(s, {
                value: e.formattedTotal,
                format: {
                    style: "currency",
                    currency: e.currencyCode,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                },
                class: "embed:pointer-events-none",
                animated: !0
            }, null, 8, ["value", "format"])])])]), e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(),
            T("div", F3, [_("div", N3, [H(l, {
                modelValue: e.data.quantity,
                "onUpdate:modelValue": t[0] || (t[0] = E => e.data.quantity = E),
                min: e.variant.minimum_purchase_quantity,
                max: e.variant.maximum_purchase_quantity,
                class: "embed:text-xs"
            }, null, 8, ["modelValue", "min", "max"]), (Je = (ze = (ue = e.context.error) == null ? void 0 : ue.errors) == null ? void 0 : ze.quantity) != null && Je[0] ? (S(),
            T("p", {
                key: 0,
                class: "embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                textContent: A((pe = (ie = e.context.error) == null ? void 0 : ie.errors) == null ? void 0 : pe.quantity[0])
            }, null, 8, I3)) : Q("", !0)]), _("p", z3, [e.variant.stock ? (S(),
            T("span", j3, A(e.variant.stock), 1)) : (S(),
            T("span", R3, "0")), t[22] || (t[22] = _("span", null, "available ", -1))]), (it = (Oe = (qe = e.context.error) == null ? void 0 : qe.errors) == null ? void 0 : Oe.quantity) != null && it[0] ? (S(),
            T("p", {
                key: 0,
                class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                textContent: A((be = (J = e.context.error) == null ? void 0 : J.errors) == null ? void 0 : be.quantity[0])
            }, null, 8, V3)) : Q("", !0)])) : Q("", !0)])]), _("div", U3, [H(u, {
                modelValue: e.checkout_information.customer_email,
                "onUpdate:modelValue": t[1] || (t[1] = E => e.checkout_information.customer_email = E),
                "error-key": "customer_email",
                type: "email",
                label: "Email",
                placeholder: "example@example.com",
                class: "embed:dark:bg-zinc-950"
            }, {
                icon: te(( () => [H(d, {
                    class: "embed:h-5 embed:w-5 embed:text-zinc-500",
                    "aria-hidden": "true"
                })])),
                _: 1
            }, 8, ["modelValue"])]), e.showCrypto && e.context.variant.payment_processors.length > 0 ? (S(),
            T("div", B3, [_("button", {
                onClick: t[2] || (t[2] = E => e.paymentType = "fiat"),
                class: ye([{
                    "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "fiat",
                    "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "fiat"
                }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"])
            }, " Pay with Fiat ", 2), _("button", {
                onClick: t[3] || (t[3] = E => e.paymentType = "crypto"),
                class: ye([{
                    "embed:dark:bg-transparent embed:shadow-sm embed:shadow-emerald-200 embed:dark:shadow-emerald-900 embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.200)_25%,_theme(colors.green.200)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:text-black embed:dark:text-white": e.paymentType === "crypto",
                    "embed:text-zinc-500 embed:hover:text-zinc-900 embed:dark:hover:text-zinc-100": e.paymentType !== "crypto"
                }, "embed:py-2 embed:px-4 embed:focus:outline-hidden embed:p-2 embed:rounded-sm embed:w-full embed:transition embed:duration-200 embed:ease-in-out embed:border embed:border-transparent embed:font-medium embed:text-sm"])
            }, " Pay with Crypto ", 2)])) : Q("", !0), _("div", H3, [e.showCrypto && e.context.variant.payment_processors.length === 0 || e.paymentType === "crypto" ? (S(),
            T(U, {
                key: 0
            }, [(S(!0),
            T(U, null, yn(e.getFirstTwoOptions(e.context.variant.crypto_options), (E => (S(),
            ke(m, {
                key: E,
                as: "template",
                value: E
            }, {
                default: te(( ({checked: _e}) => [_("div", {
                    class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [_e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950", "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"]])
                }, [_("div", q3, [_("div", W3, [H(f, {
                    as: "p",
                    class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                }, {
                    default: te(( () => {
                        var Ge, ct;
                        return [_("span", G3, [H(c, {
                            symbol: (Ge = e.paymentMethods) == null ? void 0 : Ge[E].icon,
                            size: "24",
                            class: ye(["embed:w-8 embed:h-8", [_e ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-600 embed:dark:text-zinc-300"]])
                        }, null, 8, ["symbol", "class"])]), _("span", {
                            class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                        }, [ee(A((ct = e.paymentMethods) == null ? void 0 : ct[E].name) + " ", 1), e.getDiscount(E) ? (S(),
                        T("div", K3, [e.isPositiveDiscount(E) ? (S(),
                        T(U, {
                            key: 0
                        }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                        T(U, {
                            key: 1
                        }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)], 2)]
                    }
                    )),
                    _: 2
                }, 1024)])]), t[23] || (t[23] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                }, null, -1))], 2)])),
                _: 2
            }, 1032, ["value"])))), 128)), e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options) ? (S(),
            ke(m, {
                key: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options),
                value: e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)
            }, {
                default: te(( ({checked: E}) => [_("div", {
                    class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950", "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"]])
                }, [_("div", Y3, [_("div", X3, [H(f, {
                    as: "p",
                    class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                }, {
                    default: te(( () => {
                        var _e, Ge;
                        return [_("span", Z3, [H(c, {
                            symbol: (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].icon,
                            size: "24",
                            class: "embed:w-8 embed:h-8"
                        }, null, 8, ["symbol"])]), _("span", {
                            class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                        }, [ee(A((Ge = e.paymentMethods) == null ? void 0 : Ge[e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)].name) + " ", 1), e.getThirdOption(e.context.variant.crypto_options) && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(),
                        T("div", J3, [e.isPositiveDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)) ? (S(),
                        T(U, {
                            key: 0
                        }, [e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off ", 1)], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% off ", 1)], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                        T(U, {
                            key: 1
                        }, [e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage && e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee ", 1)], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedDropdownMethod || e.getThirdOption(e.context.variant.crypto_options)).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)], 2)]
                    }
                    )),
                    _: 2
                }, 1024)])]), t[24] || (t[24] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                }, null, -1))], 2)])),
                _: 1
            }, 8, ["value"])) : Q("", !0), e.getRemainingOptions(e.context.variant.crypto_options).length > 1 ? (S(),
            ke(g, {
                key: 1,
                modelValue: e.selectedDropdownMethod,
                "onUpdate:modelValue": [t[4] || (t[4] = E => e.selectedDropdownMethod = E), t[5] || (t[5] = E => e.checkout_information.payment_method = E)],
                as: "div",
                class: "embed:relative"
            }, {
                default: te(( () => [H(p, {
                    class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto"
                }, {
                    default: te(( () => {
                        var E, _e;
                        return [_("span", Q3, [e.getRemainingOptions(e.context.variant.crypto_options).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedDropdownMethod || (e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.getRemainingOptions(e.context.variant.crypto_options)[0])]) != null && _e.icon) ? (S(),
                        ke(c, {
                            key: 0,
                            symbol: e.paymentMethods[e.selectedDropdownMethod === e.getThirdOption(e.context.variant.crypto_options) ? e.getRemainingOptions(e.context.variant.crypto_options)[1] : e.selectedDropdownMethod ? e.getRemainingOptions(e.context.variant.crypto_options)[0] : e.getRemainingOptions(e.context.variant.crypto_options)[1]].icon,
                            size: "24",
                            class: "embed:w-5 embed:h-5"
                        }, null, 8, ["symbol"])) : Q("", !0), H(b, {
                            icon: "chevron-down",
                            class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                        })])]
                    }
                    )),
                    _: 1
                }), H(dr, {
                    "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                    "leave-from-class": "embed:opacity-100",
                    "leave-to-class": "embed:opacity-0"
                }, {
                    default: te(( () => [H(w, {
                        class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2"
                    }, {
                        default: te(( () => [(S(!0),
                        T(U, null, yn(e.getRemainingOptions(e.context.variant.crypto_options), (E => (S(),
                        ke(v, {
                            key: E,
                            value: E,
                            as: "template"
                        }, {
                            default: te(( ({active: _e, selected: Ge}) => {
                                var ct, h, x;
                                return [_("li", {
                                    class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", Ge ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                }, [_("div", e4, [_("div", t4, [(h = (ct = e.paymentMethods) == null ? void 0 : ct[E]) != null && h.icon ? (S(),
                                ke(y, {
                                    key: 0,
                                    config: e.paymentMethods[E].icon,
                                    "extra-classes": ["embed:w-6 embed:h-6 embed:mr-3 embed:flex embed:items-center"]
                                }, null, 8, ["config"])) : Q("", !0), _("span", n4, [ee(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1), e.getDiscount(E) ? (S(),
                                T("div", r4, [e.isPositiveDiscount(E) ? (S(),
                                T(U, {
                                    key: 0
                                }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 0
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                                T(U, {
                                    key: 1
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 2
                                }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                                T(U, {
                                    key: 1
                                }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 0
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                                T(U, {
                                    key: 1
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 2
                                }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)])])])], 2)]
                            }
                            )),
                            _: 2
                        }, 1032, ["value"])))), 128))])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }, 8, ["modelValue"])) : Q("", !0)], 64)) : (S(),
            T(U, {
                key: 1
            }, [(S(!0),
            T(U, null, yn(e.getFirstTwoFiatOptions(e.context.variant.payment_processors), (E => (S(),
            ke(m, {
                key: E,
                as: "template",
                value: E
            }, {
                default: te(( ({checked: _e}) => [_("div", {
                    class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [_e ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950", "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"]])
                }, [_("div", i4, [_("div", o4, [H(f, {
                    as: "p",
                    class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                }, {
                    default: te(( () => {
                        var Ge, ct, h;
                        return [_("span", a4, [(ct = (Ge = e.paymentMethods) == null ? void 0 : Ge[E]) != null && ct.icon ? (S(),
                        ke(y, {
                            key: 0,
                            config: e.paymentMethods[E].icon,
                            "extra-classes": ["embed:flex embed:items-center"]
                        }, null, 8, ["config"])) : Q("", !0)]), _("span", {
                            class: ye(["embed:capitalize embed:text-xs", [_e ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                        }, [ee(A((h = e.paymentMethods) == null ? void 0 : h[E].name) + " ", 1), e.getDiscount(E) ? (S(),
                        T("div", s4, [e.isPositiveDiscount(E) ? (S(),
                        T(U, {
                            key: 0
                        }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                        T(U, {
                            key: 1
                        }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)], 2)]
                    }
                    )),
                    _: 2
                }, 1024)])]), t[25] || (t[25] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                }, null, -1))], 2)])),
                _: 2
            }, 1032, ["value"])))), 128)), e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors) ? (S(),
            ke(m, {
                key: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors),
                value: e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)
            }, {
                default: te(( ({checked: E}) => [_("div", {
                    class: ye(["embed:flex embed:flex-col embed:border-2 embed:border-transparent embed:shadow-inner embed:w-28 embed:min-h-[6rem]", [E ? "embed:[background:linear-gradient(theme(colors.white),_theme(colors.white))_padding-box,_conic-gradient(theme(colors.emerald.500),_theme(colors.green.300)_25%,_theme(colors.green.300)_75%,_theme(colors.emerald.500)_100%)_border-box] embed:dark:[background:linear-gradient(theme(colors.black),_theme(colors.black))_padding-box,_conic-gradient(theme(colors.emerald.300),_theme(colors.green.950)_25%,_theme(colors.green.950)_75%,_theme(colors.emerald.300)_100%)_border-box] embed:shadow-emerald-200 embed:dark:shadow-emerald-900" : "embed:hover:border-emerald-200 embed:dark:hover:border-emerald-950 embed:shadow-emerald-100 embed:hover:shadow-emerald-200 embed:focus:shadow-emerald-200 embed:dark:shadow-emerald-950 embed:dark:hover:shadow-emerald-900 embed:dark:focus:shadow-emerald-900 embed:bg-white embed:dark:bg-zinc-950", "embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:sm:flex embed:sm:justify-between embed:focus:outline-hidden"]])
                }, [_("div", l4, [_("div", d4, [H(f, {
                    as: "p",
                    class: "embed:flex embed:flex-col embed:items-center embed:font-medium embed:text-black embed:dark:text-white embed:gap-1 embed:py-0.5"
                }, {
                    default: te(( () => {
                        var _e, Ge, ct;
                        return [_("span", u4, [(Ge = (_e = e.paymentMethods) == null ? void 0 : _e[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)]) != null && Ge.icon ? (S(),
                        ke(y, {
                            key: 0,
                            config: e.paymentMethods[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].icon,
                            "extra-classes": ["embed:flex embed:items-center"]
                        }, null, 8, ["config"])) : Q("", !0)]), _("span", {
                            class: ye(["embed:capitalize embed:text-xs", [E ? "embed:text-black embed:dark:text-white embed:font-bold" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                        }, [ee(A((ct = e.paymentMethods) == null ? void 0 : ct[e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)].name) + " ", 1), e.getThirdFiatOption(e.context.variant.payment_processors) && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(),
                        T("div", c4, [e.isPositiveDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)) ? (S(),
                        T(U, {
                            key: 0
                        }, [e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off ", 1)], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% off ", 1)], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                        T(U, {
                            key: 1
                        }, [e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage && e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(),
                        T(U, {
                            key: 0
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee ", 1)], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage ? (S(),
                        T(U, {
                            key: 1
                        }, [ee(A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed ? (S(),
                        T(U, {
                            key: 2
                        }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(e.selectedFiatMethod || e.getThirdFiatOption(e.context.variant.payment_processors)).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)], 2)]
                    }
                    )),
                    _: 2
                }, 1024)])]), t[26] || (t[26] = _("div", {
                    class: "embed:absolute embed:-inset-px embed:rounded-lg embed:pointer-events-none",
                    "aria-hidden": "true"
                }, null, -1))], 2)])),
                _: 1
            }, 8, ["value"])) : Q("", !0), e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 ? (S(),
            ke(g, {
                key: 1,
                modelValue: e.selectedFiatMethod,
                "onUpdate:modelValue": [t[6] || (t[6] = E => e.selectedFiatMethod = E), t[7] || (t[7] = E => e.checkout_information.payment_method = E)],
                as: "div",
                class: "embed:relative"
            }, {
                default: te(( () => [H(p, {
                    class: "embed:h-full embed:flex embed:flex-col embed:dark:border embed:dark:border-transparent embed:shadow-inner embed:bg-white embed:dark:bg-zinc-950 embed:transition embed:duration-300 embed:ease-in-out embed:relative embed:rounded-lg embed:px-3 embed:py-2 embed:cursor-pointer embed:focus:outline-hidden embed:ml-auto"
                }, {
                    default: te(( () => {
                        var E, _e;
                        return [_("span", f4, [e.getRemainingFiatOptions(e.context.variant.payment_processors).length > 1 && ((_e = (E = e.paymentMethods) == null ? void 0 : E[e.selectedFiatMethod || (e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[0])]) != null && _e.icon) ? (S(),
                        ke(y, {
                            key: 0,
                            config: e.paymentMethods[e.selectedFiatMethod === e.getThirdFiatOption(e.context.variant.payment_processors) ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[1] : e.selectedFiatMethod ? e.getRemainingFiatOptions(e.context.variant.payment_processors)[0] : e.getRemainingFiatOptions(e.context.variant.payment_processors)[1]].icon,
                            "extra-classes": ["embed:flex embed:items-center"]
                        }, null, 8, ["config"])) : Q("", !0), H(b, {
                            icon: "chevron-down",
                            class: "embed:w-4 embed:h-4 embed:text-zinc-600 embed:dark:text-zinc-300"
                        })])]
                    }
                    )),
                    _: 1
                }), H(dr, {
                    "leave-active-class": "embed:transition embed:duration-100 embed:ease-in",
                    "leave-from-class": "embed:opacity-100",
                    "leave-to-class": "embed:opacity-0"
                }, {
                    default: te(( () => [H(w, {
                        class: "embed:absolute embed:z-10 embed:mt-1 embed:w-48 embed:bg-white embed:dark:bg-zinc-900 embed:rounded-md embed:shadow-zinc-400 embed:dark:shadow-black embed:border embed:border-zinc-300 embed:dark:border-zinc-950 embed:shadow-lg embed:max-h-60 embed:overflow-auto embed:[scrollbar-width:none] embed:[-ms-overflow-style:none] embed:[&::-webkit-scrollbar]:hidden embed:py-1 embed:right-1 embed:mr-2"
                    }, {
                        default: te(( () => [(S(!0),
                        T(U, null, yn(e.getRemainingFiatOptions(e.context.variant.payment_processors), (E => (S(),
                        ke(v, {
                            key: E,
                            value: E,
                            as: "template"
                        }, {
                            default: te(( ({active: _e, selected: Ge}) => {
                                var ct, h, x;
                                return [_("li", {
                                    class: ye(["embed:cursor-pointer embed:select-none embed:relative embed:py-2 embed:px-4", [_e ? "embed:bg-zinc-100 embed:dark:bg-zinc-800" : "", Ge ? "embed:text-black embed:dark:text-white" : "embed:text-zinc-700 embed:dark:text-zinc-300"]])
                                }, [_("div", m4, [(h = (ct = e.paymentMethods) == null ? void 0 : ct[E]) != null && h.icon ? (S(),
                                ke(y, {
                                    key: 0,
                                    config: e.paymentMethods[E].icon,
                                    "extra-classes": ["embed:mr-3 embed:flex embed:items-center"]
                                }, null, 8, ["config"])) : Q("", !0), _("span", p4, [ee(A((x = e.paymentMethods) == null ? void 0 : x[E].name) + " ", 1), e.getDiscount(E) ? (S(),
                                T("div", h4, [e.isPositiveDiscount(E) ? (S(),
                                T(U, {
                                    key: 0
                                }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 0
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                                T(U, {
                                    key: 1
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% off ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 2
                                }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " off ", 1)], 64)) : Q("", !0)], 64)) : (S(),
                                T(U, {
                                    key: 1
                                }, [e.getDiscount(E).percentage && e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 0
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : e.getDiscount(E).percentage ? (S(),
                                T(U, {
                                    key: 1
                                }, [ee(A(Math.abs(e.getDiscount(E).percentage)) + "% fee ", 1)], 64)) : e.getDiscount(E).fixed ? (S(),
                                T(U, {
                                    key: 2
                                }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.getDiscount(E).fixed)) + " fee ", 1)], 64)) : Q("", !0)], 64))])) : Q("", !0)])])], 2)]
                            }
                            )),
                            _: 2
                        }, 1032, ["value"])))), 128))])),
                        _: 1
                    })])),
                    _: 1
                })])),
                _: 1
            }, 8, ["modelValue"])) : Q("", !0)], 64))])])]
        }
        )),
        _: 1
    }, 8, ["modelValue"]), e.context.variant.additional_information.length > 0 ? (S(),
    T("div", b4, [H(O)])) : Q("", !0), e.context.variant.vat_enabled ? (S(),
    T("div", v4, [H(u, {
        modelValue: e.checkout_information.country,
        "onUpdate:modelValue": t[9] || (t[9] = K => e.checkout_information.country = K),
        type: "select",
        label: "Country",
        name: "country",
        options: Object.entries(e.context.variant.available_vat_countries).map(( ([K,ue]) => ({
            value: K,
            label: ue.name
        }))),
        class: "embed:dark:bg-zinc-950"
    }, null, 8, ["modelValue", "options"]), e.context.variant.vat_enabled && ((G = e.context.variant.available_vat_countries[e.checkout_information.country]) == null ? void 0 : G.vat) > 0 ? (S(),
    T("div", g4, [H(u, {
        id: "vat_id",
        modelValue: e.checkout_information.vat_id,
        "onUpdate:modelValue": t[10] || (t[10] = K => e.checkout_information.vat_id = K),
        "error-key": "vat_id",
        type: "text",
        label: "VAT ID",
        placeholder: "DE123456789",
        name: "vat_id",
        class: "embed:dark:bg-zinc-950"
    }, null, 8, ["modelValue"])])) : Q("", !0)])) : Q("", !0), _("div", y4, [_("div", null, [e.applyCoupon ? (S(),
    ke(dr, {
        key: 0,
        appear: "",
        "enter-from-class": "embed:opacity-0 embed:scale-0",
        "enter-to-class": "opacity-1 embed:scale-100",
        "enter-active-class": "embed:transition embed:transform origin",
        "leave-from-class": "opacity-1 embed:scale-100",
        "leave-to-class": "embed:opacity-0 embed:scale-0",
        "leave-active-class": "embed:transition embed:transform"
    }, {
        default: te(( () => [_("div", w4, [_("div", x4, [_("button", {
            class: "embed:absolute embed:right-1 embed:-top-5 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-xs embed:transition embed:duration-100 embed:ease-in-out",
            onClick: t[11] || (t[11] = K => e.applyCoupon = !1)
        }, " Cancel "), _("div", k4, [_("div", _4, [H(u, {
            modelValue: e.data.coupon,
            "onUpdate:modelValue": t[12] || (t[12] = K => e.data.coupon = K),
            type: "text",
            name: "coupon-code",
            placeholder: "Enter coupon code",
            class: "embed:dark:bg-zinc-950 embed:rounded-r-none"
        }, null, 8, ["modelValue"])]), H(D, {
            primary: "",
            loading: e.isApplying || e.isLoading,
            disabled: e.isApplying || e.isLoading,
            type: "button",
            class: "embed:relative embed:inline-flex embed:items-center embed:space-x-2 embed:rounded-l-none",
            onClick: t[13] || (t[13] = K => e.debouncedApply("coupon"))
        }, {
            default: te(( () => [_("span", null, A(e.isApplying || e.isLoading ? "Applying..." : "Apply"), 1)])),
            _: 1
        }, 8, ["loading", "disabled"])])])])])),
        _: 1
    })) : (S(),
    T("button", {
        key: 1,
        class: "embed:py-2 embed:text-zinc-500 embed:hover:text-zinc-800 embed:dark:hover:text-zinc-200 embed:text-sm embed:mx-auto embed:transition embed:duration-100 embed:ease-in-out",
        onClick: t[14] || (t[14] = K => e.applyCoupon = !0)
    }, " Add coupon ")), (q = (Z = (L = e.context.error) == null ? void 0 : L.errors) == null ? void 0 : Z.coupon) != null && q[0] ? (S(),
    T("p", {
        key: 2,
        class: "embed:mt-1 embed:ml-1.5 embed:text-left embed:text-xs embed:text-red-600 embed:dark:text-red embed:w-full",
        textContent: A((re = ($ = e.context.error) == null ? void 0 : $.errors) == null ? void 0 : re.coupon[0])
    }, null, 8, S4)) : Q("", !0), e.variant.coupon && ((ge = (Te = (he = e.context.error) == null ? void 0 : he.errors) == null ? void 0 : Te.coupon) == null ? void 0 : ge[0]) === void 0 ? (S(),
    T("p", E4, " A " + A(e.variant.coupon) + " coupon has successfully been applied!", 1)) : Q("", !0)])]), e.variant.visibility == "PUBLIC" || e.variant.visibility == "HIDDEN" ? (S(),
    T("div", C4, [_("div", T4, [H(D, {
        loading: e.isLoading,
        disabled: e.isSoldOut,
        style: ci({
            "background-color": e.context.customization.theme
        }),
        class: "embed:w-full embed:disabled:bg-red-600 embed:disabled:focus:ring-zinc-500",
        primary: "",
        onClick: e.handleClick
    }, {
        default: te(( () => [ee(A(e.isSoldOut ? "Sold out" : "Buy now"), 1)])),
        _: 1
    }, 8, ["loading", "disabled", "style", "onClick"]), !e.isSoldOut && !e.isValidInput && e.hasAttemptedSubmit ? (S(),
    T("div", O4, [e.checkout_information.payment_method ? Q("", !0) : (S(),
    T("p", A4, "Please select a payment method")), !e.checkout_information.customer_email || !e.checkout_information.customer_email.includes("@") ? (S(),
    T("p", D4, " Please enter a valid email address ")) : Q("", !0), e.context.variant.additional_information.some((K => K.required && !e.checkout_information.additional_information[K.key])) ? (S(),
    T("p", P4, " Please fill in all required checkout information ")) : Q("", !0)])) : Q("", !0)])])) : Q("", !0)]), H(R, {
        modelValue: e.isDescriptionOpen,
        "onUpdate:modelValue": t[15] || (t[15] = K => e.isDescriptionOpen = K),
        title: "Product Description"
    }, {
        default: te(( () => [_("div", {
            innerHTML: e.product.description
        }, null, 8, $4)])),
        _: 1
    }, 8, ["modelValue"]), H(R, {
        modelValue: e.orMore,
        "onUpdate:modelValue": t[18] || (t[18] = K => e.orMore = K),
        title: "Add Extra Amount",
        description: "Optionally add an extra amount to this purchase"
    }, {
        default: te(( () => {
            var K, ue, ze, Je, ie;
            return [_("div", M4, [_("div", L4, [_("div", F4, [_("div", N4, [H(u, {
                modelValue: e.data.extra,
                "onUpdate:modelValue": t[16] || (t[16] = pe => e.data.extra = pe),
                type: "number",
                name: "extra",
                id: "extra",
                placeholder: "0.00",
                class: "embed:dark:bg-zinc-950 embed:rounded-r-none embed:w-full"
            }, null, 8, ["modelValue"])]), H(D, {
                primary: "",
                class: "embed:rounded-l-none",
                onClick: t[17] || (t[17] = pe => e.apply("extra"))
            }, {
                default: te(( () => t[27] || (t[27] = [_("span", null, "Add", -1)]))),
                _: 1
            })]), (ze = (ue = (K = e.context.error) == null ? void 0 : K.errors) == null ? void 0 : ue.extra) != null && ze[0] ? (S(),
            T("p", {
                key: 0,
                class: "embed:ml-1.5 embed:text-left embed:text-sm embed:text-red-600 embed:dark:text-red embed:w-full",
                textContent: A((ie = (Je = e.context.error) == null ? void 0 : Je.errors) == null ? void 0 : ie.extra[0])
            }, null, 8, I4)) : Q("", !0)])])]
        }
        )),
        _: 1
    }, 8, ["modelValue"]), _("div", z4, [_("button", {
        onClick: t[19] || (t[19] = K => e.isDescriptionOpen = !0),
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors"
    }, " Description "), e.product.variants.length > 1 ? (S(),
    T("button", {
        key: 0,
        onClick: t[20] || (t[20] = K => e.send({
            type: "PREVIOUS"
        })),
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors"
    }, " Variants ")) : Q("", !0), e.variant.humble ? (S(),
    T("div", R4, [_("button", {
        class: "embed:flex embed:items-center embed:text-zinc-600 embed:dark:text-white embed:bg-zinc-200/60 embed:dark:bg-black embed:px-2 embed:py-1 embed:rounded-lg embed:text-sm embed:font-medium embed:hover:text-black embed:dark:hover:text-zinc-300 embed:transition-colors",
        onClick: t[21] || (t[21] = K => e.orMore = !0)
    }, "Add more")])) : Q("", !0)])])
}
const V4 = gt(k3, [["render", j4]])
  , U4 = ve({
    name: "ConnectDiscord",
    components: {
        Navigator: Go,
        DialogTitle: yr,
        InputGroup: ul,
        MyButton: Wo
    },
    setup() {
        const {context: e} = Nt();
        let t = W(e.value.discord_data.discord_username);
        Ee.discord_token = e.value.discord_data.discord_token;
        const n = W(!0)
          , r = () => {
            const o = window.open(e.value.discord_data.connect_url, "_blank", "width=400, height=600");
            (!o || o.closed || typeof o.closed > "u") && (n.value = !1)
        }
          , i = o => {
            var u;
            const a = o.data
              , s = /^((http[s]?|ftp):\/)?\/?([^:/\s]+)((\/\w+)*\/)([\w\-.]+[^#?\s]+)(.*)?(#[\w-]+)?$/
              , l = vi.match(s)
              , d = l[2] + "://" + l[3];
            o.origin === d && !cr(a) && (u = e.value.discord_data) != null && u.connect_url && (sessionStorage.setItem("discord_token", a.discord_token),
            e.value.discord_data = {
                discord_id: a.discord_id,
                discord_token: a.discord_token,
                discord_username: a.discord_username,
                connect_url: e.value.discord_data.connect_url
            },
            Ee.discord_token = a.discord_token,
            t.value = e.value.discord_data.discord_username)
        }
        ;
        return window.addEventListener("message", i),
        {
            checkout_information: Ee,
            context: e,
            linkDiscord: r,
            receiveData: i,
            popUpsEnabled: n,
            discordUsername: t
        }
    }
})
  , B4 = {
    class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6"
}
  , H4 = ["textContent"]
  , q4 = {
    class: "embed:mt-4"
}
  , W4 = {
    key: 0,
    class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}
  , G4 = {
    key: 1,
    class: "embed:text-center embed:mt-2 embed:bg-white embed:dark:bg-black embed:rounded-2xl embed:px-4 embed:py-2"
}
  , K4 = {
    key: 1,
    class: "embed:mt-5 embed:text-red-500"
}
  , Y4 = {
    key: 2
};
function X4(e, t, n, r, i, o) {
    const a = oe("DialogTitle")
      , s = oe("InputGroup")
      , l = oe("MyButton")
      , d = oe("Navigator");
    return S(),
    T("div", B4, [H(a, {
        as: "h1",
        class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
        default: te(( () => t[0] || (t[0] = [ee("Connect discord")]))),
        _: 1
    }), e.discordUsername ? (S(),
    ke(s, {
        key: 0,
        class: "embed:text-center",
        type: "text",
        label: "",
        value: e.discordUsername,
        disabled: ""
    }, null, 8, ["value"])) : Q("", !0), H(l, {
        class: "embed:w-full embed:bg-[#5865F2] embed:text-white embed:mt-4",
        onClick: e.linkDiscord
    }, {
        default: te(( () => [_("span", {
            textContent: A(e.checkout_information.discord_id ? "Change discord account" : "Connect discord")
        }, null, 8, H4)])),
        _: 1
    }, 8, ["onClick"]), _("div", q4, [e.context.variant.discord_required ? (S(),
    T("div", W4, t[1] || (t[1] = [_("span", {
        class: "embed:font-medium embed:text-black embed:dark:text-white"
    }, "To continue your purchase, you'll want to connect your Discord account.", -1)]))) : e.context.variant.discord_request ? (S(),
    T("div", G4, t[2] || (t[2] = [_("span", {
        class: "embed:font-medium embed:text-black embed:dark:text-white"
    }, "Optionally connect your Discord to get exclusive accesss with your purchase.", -1)]))) : Q("", !0)]), e.popUpsEnabled ? Q("", !0) : (S(),
    T("div", K4, t[3] || (t[3] = [_("p", null, "Please, enable pop ups to proceed.", -1)]))), e.context.variant.discord_required && e.checkout_information.discord_token || !e.context.variant.discord_required ? (S(),
    T("div", Y4, [H(d)])) : Q("", !0)])
}
const Z4 = gt(U4, [["render", X4]])
  , J4 = ve({
    name: "FinalStep",
    components: {
        Navigator: Go,
        DialogTitle: yr,
        DialogDescription: Zc
    },
    setup() {
        var s;
        const {context: e} = Nt()
          , t = W(!1)
          , n = P(( () => e.value.variant))
          , r = P(( () => e.value.product))
          , i = P(( () => !e.value.variant.payment_discounts || !Ee.payment_method ? null : e.value.variant.payment_discounts[Ee.payment_method.toLowerCase()]))
          , o = P(( () => i.value ? i.value.percentage < 0 || i.value.fixed < 0 : !1));
        let a = parseFloat(e.value.variant.total.replace(/[^\d.-]/g, "")) || 0;
        if (i.value) {
            if (i.value.percentage) {
                const l = parseFloat(i.value.percentage) / 100 * a;
                a -= l
            }
            i.value.fixed && (a -= parseFloat(i.value.fixed))
        }
        if (e.value.variant.available_vat_countries && Ee.country) {
            const l = (s = e.value.variant.available_vat_countries[Ee.country]) == null ? void 0 : s.vat;
            if (l !== null && !isNaN(l)) {
                const d = parseFloat(l) / 100;
                a += a * d
            }
        }
        return {
            checkout_information: Ee,
            context: e,
            variant: n,
            product: r,
            terms_of_service: t,
            paymentDetails: i,
            hasNegativePayment: o,
            price: a
        }
    },
    methods: {
        capitalized(e) {
            const t = e[0].toUpperCase()
              , n = e.slice(1);
            return t + n
        }
    }
})
  , Q4 = {
    class: "embed:flex embed:flex-col embed:px-4 embed:pt-5 embed:pb-4 embed:sm:p-6"
}
  , e6 = {
    class: "embed:p-3 embed:text-left embed:flex embed:flex-row embed:justify-between"
}
  , t6 = {
    class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
}
  , n6 = ["textContent"]
  , r6 = {
    class: "embed:space-y-2 embed:mx-2 embed:bg-zinc-50 embed:dark:bg-zinc-950 embed:py-3 embed:px-3 embed:rounded-2xl embed:shadow-inner embed:dark:shadow-black embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
}
  , i6 = {
    class: "embed:text-left embed:flex embed:flex-row embed:justify-between"
}
  , o6 = ["textContent"]
  , a6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , s6 = {
    class: "embed:inline-flex embed:items-center embed:space-x-2 embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , l6 = {
    class: "embed:flex embed:rounded-lg embed:bg-zinc-100 embed:px-2 embed:text-sm embed:font-medium embed:dark:bg-black"
}
  , d6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , u6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , c6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , f6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , m6 = {
    class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
}
  , p6 = {
    class: "embed:p-3 embed:flex embed:flex-row embed:justify-between"
}
  , h6 = {
    class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2"
}
  , b6 = {
    class: "embed:px-3 embed:mt-4 embed:relative embed:flex embed:items-center"
}
  , v6 = {
    class: "embed:ml-3 embed:flex embed:items-center embed:h-5"
}
  , g6 = ["checked"];
function y6(e, t, n, r, i, o) {
    var d, u, c, f;
    const a = oe("DialogTitle")
      , s = oe("DialogDescription")
      , l = oe("Navigator");
    return S(),
    T("div", Q4, [H(a, {
        as: "h1",
        class: "embed:font-bold embed:text-center embed:text-xl embed:text-black embed:dark:text-white"
    }, {
        default: te(( () => t[1] || (t[1] = [ee("Order Overview")]))),
        _: 1
    }), H(s, {
        as: "p",
        class: "embed:mb-4 embed:font-normal embed:text-center embed:text-zinc-800 embed:dark:text-zinc-400 embed:text-xs"
    }, {
        default: te(( () => t[2] || (t[2] = [ee("Finally, review your order details before checking out")]))),
        _: 1
    }), _("div", e6, [_("p", t6, A(e.context.quantity) + "x " + A(e.product.title), 1), _("p", {
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white embed:pr-2",
        textContent: A(e.variant.price)
    }, null, 8, n6)]), _("div", r6, [_("div", i6, [t[3] || (t[3] = _("p", {
        class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
    }, "Subtotal", -1)), _("p", {
        class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white",
        textContent: A(e.variant.price)
    }, null, 8, o6)]), _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.variant.bulk_discount == null ? "embed:hidden" : ""])
    }, [t[4] || (t[4] = _("p", {
        class: "embed:block embed:text-sm embed:font-normal embed:text-black embed:dark:text-white"
    }, "Bulk discount", -1)), _("p", a6, "-" + A(e.context.variant.bulk_discount), 1)], 2), _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", e.context.coupon == null ? "embed:hidden" : ""])
    }, [_("p", s6, [t[5] || (t[5] = _("span", null, "Coupon", -1)), _("span", l6, A(e.context.coupon), 1)]), _("p", d6, "-" + A(e.context.variant.coupon), 1)], 2), _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.context.variant.payment_discounts || e.context.variant.payment_discounts[e.checkout_information.payment_method.toLowerCase()] == null ? "embed:hidden" : ""])
    }, [_("p", u6, "Payment " + A(e.hasNegativePayment ? "fee" : "discount"), 1), _("p", c6, [(d = e.paymentDetails) != null && d.percentage && ((u = e.paymentDetails) != null && u.fixed) ? (S(),
    T(U, {
        key: 0
    }, [ee(A(Math.abs(e.paymentDetails.percentage)) + "% + " + A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)], 64)) : (c = e.paymentDetails) != null && c.percentage ? (S(),
    T(U, {
        key: 1
    }, [ee(A(Math.abs(e.paymentDetails.percentage)) + "% ", 1)], 64)) : (f = e.paymentDetails) != null && f.fixed ? (S(),
    T(U, {
        key: 2
    }, [ee(A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(Math.abs(e.paymentDetails.fixed)), 1)], 64)) : Q("", !0)])], 2), _("div", {
        class: ye(["embed:text-left embed:flex embed:flex-row embed:justify-between", !e.checkout_information.country || e.context.variant.available_vat_countries[e.checkout_information.country].vat == 0 ? "embed:hidden" : ""])
    }, [_("p", f6, "VAT (" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].name) + ")", 1), _("p", m6, "+" + A(e.checkout_information.country && e.context.variant.available_vat_countries[e.checkout_information.country].vat) + "%", 1)], 2)]), _("div", p6, [t[6] || (t[6] = _("p", {
        class: "embed:block embed:text-sm embed:font-medium embed:text-black embed:dark:text-white"
    }, "Total", -1)), _("p", h6, A(e.context.variant.total.replace(/[^\D]+.*/, "")) + A(!isNaN(e.price) && isFinite(e.price) ? e.price.toFixed(2) : e.context.variant.total.replace(/[^\d]+.*/, "")), 1)]), _("div", b6, [t[7] || (t[7] = _("div", {
        class: "embed:min-w-0 embed:flex-1 embed:text-left embed:text-sm"
    }, [_("label", {
        for: "terms_of_service",
        class: "embed:select-none embed:mb-0 embed:font-semibold embed:text-sm embed:text-zinc-800 embed:dark:text-neutral-300"
    }, "By making this purchase, you agree to the terms of service")], -1)), _("div", v6, [jp(_("input", {
        id: "terms_of_service",
        "onUpdate:modelValue": t[0] || (t[0] = m => e.terms_of_service = m),
        checked: e.terms_of_service == !0,
        required: "",
        name: "terms_of_service",
        type: "checkbox",
        class: "embed:p-2 embed:appearance-none embed:rounded embed:focus:ring-offset-0 embed:bg-white embed:checked:bg-black embed:dark:bg-zinc-800 embed:dark:focus:bg-zinc-950 embed:text-black embed:dark:text-white embed:placeholder-neutral-500 embed:focus:placeholder-neutral-800 embed:dark:placeholder-neutral-500 embed:dark:focus:placeholder-neutral-400 embed:border embed:border-zinc-100 embed:hover:border-zinc-200 embed:focus:border-zinc-400 embed:dark:border-zinc-800 embed:dark:hover:border-zinc-950 embed:dark:focus:border-zinc-800 embed:focus:ring-0 embed:shadow-inner embed:shadow-zinc-400 embed:hover:shadow-zinc-500 embed:focus:shadow-zinc-200 embed:dark:shadow-neutral-800 embed:dark:hover:shadow-neutral-900 embed:dark:focus:shadow-neutral-800 embed:transition embed:duration-200 embed:ease-in-out"
    }, null, 8, g6), [[bh, e.terms_of_service]])])]), H(l, {
        next: {
            type: "CHECKOUT"
        },
        text: "Pay Now",
        "loading-state": "checkout.step.final_step.checkout_product",
        class: ye(e.terms_of_service == !1 ? "embed:hidden" : "")
    }, null, 8, ["class"])])
}
const w6 = gt(J4, [["render", y6]])
  , x6 = ve({
    name: "DialogMessage",
    components: {
        DialogTitle: yr
    },
    props: {
        title: {
            type: String,
            required: !1,
            default: null
        },
        message: {
            type: String,
            required: !1,
            default: null
        }
    }
})
  , k6 = {
    class: "embed:flex embed:flex-col embed:items-center embed:justify-evenly embed:h-4/6 embed:w-full embed:p-6"
}
  , _6 = {
    class: "embed:flex embed:flex-col embed:items-center"
}
  , S6 = {
    class: "embed:bg-zinc-100 embed:p-4 embed:rounded-lg embed:w-11/12 embed:mt-4 embed:dark:bg-zinc-800 embed:text-black embed:dark:text-white embed:shadow-inner embed:dark:shadow-black"
};
function E6(e, t, n, r, i, o) {
    const a = oe("DialogTitle");
    return S(),
    T("div", k6, [_("div", _6, [Qr(e.$slots, "default"), H(a, {
        as: "h2",
        class: "embed:mb-0 embed:mt-3 embed:font-bold embed:text-2xl embed:text-black embed:dark:text-white"
    }, {
        default: te(( () => [ee(A(e.title), 1)])),
        _: 1
    })]), _("div", S6, [Qr(e.$slots, "action", {}, ( () => [_("p", null, A(e.message), 1)]))])])
}
const cl = gt(x6, [["render", E6]])
  , C6 = ve({
    name: "SuccessDialog",
    components: {
        DialogMessage: cl,
        CheckCircleIcon: Xf
    },
    setup: function() {
        const {context: e} = Nt();
        return {
            context: e
        }
    }
})
  , T6 = ["href"];
function O6(e, t, n, r, i, o) {
    const a = oe("CheckCircleIcon")
      , s = oe("DialogMessage");
    return S(),
    ke(s, {
        class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
        title: "Order Created"
    }, {
        action: te(( () => [_("p", null, [t[0] || (t[0] = ee(" Your order has been created! If the payment gateway did not open by itself, ")), _("a", {
            href: e.context.order,
            class: "embed:font-bold embed:underline embed:decoration-zinc-800 embed:dark:decoration-zinc-50 embed:hover:decoration-wavy",
            target: "_blank"
        }, "click here to open it.", 8, T6)])])),
        default: te(( () => [H(a, {
            class: "embed:h-24 embed:w-24 embed:text-green-600"
        })])),
        _: 1
    })
}
const A6 = gt(C6, [["render", O6]])
  , D6 = ve({
    name: "HeadsUpDialog",
    components: {
        DialogMessage: cl
    }
});
function P6(e, t, n, r, i, o) {
    const a = oe("DialogMessage");
    return S(),
    ke(a, {
        class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-2xl embed:shadow-xl",
        title: "What's Next?"
    }, {
        action: te(( () => t[0] || (t[0] = [_("p", {
            class: "embed:mb-4"
        }, "Once paid, the order will instantly be sent to your entered email. That's it!", -1), _("p", {
            class: "embed:text-xs"
        }, "Note: If you paid with PayPal, we will send the product to your PayPal email for security reasons.", -1)]))),
        _: 1
    })
}
const $6 = gt(D6, [["render", P6]]);
function M6(e) {
    return Object.keys(e).reduce(( (t, n) => {
        const r = e[n];
        return Object.assign(t, r),
        t
    }
    ), {})
}
const L6 = ve({
    name: "EmbedCheckout",
    components: {
        MyDialog: f0,
        DialogPanel: p0,
        DialogOverlay: m0,
        DialogTitle: yr,
        TransitionChild: vf,
        TransitionRoot: gf,
        ExclamationCircleIcon: Yf,
        VariantSelection: _2,
        Overview: V4,
        ConnectDiscord: Z4,
        FinalStep: w6,
        Navigator: Go,
        DialogMessage: cl,
        CheckCircleIcon: Xf,
        SuccessDialog: A6,
        HeadsUpDialog: $6
    },
    setup: function() {
        const {context: e, state: t, send: n} = Nt()
          , r = P(( () => {
            var a, s, l, d;
            return (d = (l = (s = (a = t.value.context) == null ? void 0 : a.error) == null ? void 0 : s.errors) == null ? void 0 : l.quantity) == null ? void 0 : d.some((u => u === "This product has insufficient stock to fulfill the purchase."))
        }
        ))
          , i = P(( () => {
            var a, s;
            return r.value ? "This product is currently out of stock." : ((s = (a = t.value.context) == null ? void 0 : a.error) == null ? void 0 : s.message) || "An unexpected error occurred"
        }
        ));
        return cd(),
        window.setupCheckoutButtons = cd,
        {
            stepComponent: P(( () => t.value.matches("checkout") ? M6(t.value.meta).component : null)),
            context: e,
            state: t,
            send: n,
            isOutOfStock: r,
            errorMessage: i
        }
    }
})
  , F6 = {
    id: "embed-modal",
    class: "embed:fixed embed:z-10 embed:inset-0 embed:overflow-auto"
}
  , N6 = {
    class: "embed:relative embed:z-50 embed:max-w-xl embed:w-full embed:inline-block embed:align-middle embed:px-4"
}
  , I6 = {
    key: 0,
    class: "embed:bg-white embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border embed:p-6"
}
  , z6 = {
    class: "embed:space-y-12"
}
  , R6 = {
    class: "embed:space-y-8"
}
  , j6 = {
    class: "embed:space-y-2"
}
  , V6 = {
    class: "embed:flex embed:flex-wrap embed:gap-3 embed:justify-center"
}
  , U6 = {
    key: 1,
    class: "embed:space-y-4"
}
  , B6 = {
    key: 1,
    class: "embed:space-y-6"
};
function H6(e, t, n, r, i, o) {
    const a = oe("DialogOverlay")
      , s = oe("TransitionChild")
      , l = oe("SuccessDialog")
      , d = oe("HeadsUpDialog")
      , u = oe("ExclamationCircleIcon")
      , c = oe("DialogMessage")
      , f = oe("DialogPanel")
      , m = oe("MyDialog")
      , b = oe("TransitionRoot");
    return S(),
    ke(b, {
        as: "template",
        show: !e.state.matches("closed")
    }, {
        default: te(( () => [H(m, {
            as: "div",
            onClose: t[0] || (t[0] = p => e.send("CLOSE"))
        }, {
            default: te(( () => [H(f, {
                class: "embed:outline-hidden",
                tabindex: "0"
            }, {
                default: te(( () => [_("div", F6, [_("div", {
                    class: ye(["embed:flex embed:items-center embed:justify-center embed:min-h-screen embed:text-center", {
                        dark: e.context.customization.darkMode
                    }])
                }, [H(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0",
                    "enter-to": "embed:opacity-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100",
                    "leave-to": "embed:opacity-0"
                }, {
                    default: te(( () => [H(a, {
                        class: "embed:fixed embed:inset-0 embed:bg-white/90 embed:dark:bg-black/50 embed:transition-opacity"
                    })])),
                    _: 1
                }), t[8] || (t[8] = _("span", {
                    class: "embed:hidden embed:sm:inline-block embed:sm:align-middle embed:sm:h-screen",
                    "aria-hidden": "true"
                }, "​", -1)), H(s, {
                    as: "template",
                    enter: "embed:ease-out embed:duration-300",
                    "enter-from": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95",
                    "enter-to": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    leave: "embed:ease-in embed:duration-200",
                    "leave-from": "embed:opacity-100 embed:translate-y-0 embed:sm:scale-100",
                    "leave-to": "embed:opacity-0 embed:translate-y-4 embed:sm:translate-y-0 embed:sm:scale-95"
                }, {
                    default: te(( () => [_("div", N6, [e.state.hasTag("loading") ? (S(),
                    T("div", I6, [_("div", z6, [t[6] || (t[6] = _("div", {
                        class: "embed:h-10 embed:w-3/4 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mb-8"
                    }, null, -1)), _("div", R6, [t[3] || (t[3] = _("div", {
                        class: "embed:flex embed:items-stretch embed:min-h-24"
                    }, [_("div", {
                        class: "embed:h-24 embed:w-28 embed:min-h-[6rem] embed:shrink-0 embed:rounded-lg embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:animate-pulse embed:mr-4"
                    }), _("div", {
                        class: "embed:flex embed:flex-col embed:text-left embed:w-full embed:justify-between"
                    }, [_("div", {
                        class: "embed:space-y-2"
                    }, [_("div", {
                        class: "embed:h-6 embed:w-3/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }), _("div", {
                        class: "embed:h-4 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }), _("div", {
                        class: "embed:h-5 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    })]), _("div", {
                        class: "embed:flex embed:flex-row embed:items-center embed:justify-between embed:mt-2"
                    }, [_("div", {
                        class: "embed:h-8 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }), _("div", {
                        class: "embed:h-4 embed:w-24 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    })])])], -1)), t[4] || (t[4] = _("div", {
                        class: "embed:space-y-2"
                    }, [_("div", {
                        class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }), _("div", {
                        class: "embed:h-8 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    })], -1)), _("div", j6, [t[2] || (t[2] = _("div", {
                        class: "embed:h-6 embed:w-1/4 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }, null, -1)), _("div", V6, [(S(),
                    T(U, null, yn(3, (p => _("div", {
                        key: p,
                        class: "embed:flex embed:flex-col embed:border-2 embed:border-zinc-200 embed:dark:border-zinc-800 embed:w-28 embed:min-h-[6rem] embed:rounded-lg embed:px-3 embed:py-2 embed:animate-pulse"
                    }, t[1] || (t[1] = [_("div", {
                        class: "embed:flex embed:flex-col embed:items-center embed:gap-2"
                    }, [_("div", {
                        class: "embed:h-8 embed:w-8 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-full"
                    }), _("div", {
                        class: "embed:h-4 embed:w-16 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded"
                    }), _("div", {
                        class: "embed:h-3 embed:w-20 embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded"
                    })], -1)])))), 64))])]), t[5] || (t[5] = _("div", {
                        class: "embed:h-4 embed:w-2/6 embed:mx-auto embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded embed:animate-pulse"
                    }, null, -1))]), t[7] || (t[7] = _("div", {
                        class: "embed:h-10 embed:w-full embed:bg-zinc-200 embed:dark:bg-zinc-800 embed:rounded-md embed:animate-pulse embed:mt-6"
                    }, null, -1))])])) : (S(),
                    T("div", U6, [e.stepComponent ? (S(),
                    ke(dr, {
                        key: 0,
                        "enter-active-class": "embed:duration-500 embed:ease-out",
                        "enter-from-class": "embed:opacity-0 embed:-translate-x-full embed:md:translate-x-full",
                        "enter-to-class": "embed:opacity-100 embed:translate-x-0",
                        "leave-active-class": "embed:duration-500 embed:ease-out",
                        "leave-from-class": "embed:opacity-100 embed:translate-x-0",
                        "leave-to-class": "embed:opacity-0 embed:-translate-x-full",
                        mode: "out-in"
                    }, {
                        default: te(( () => [(S(),
                        ke(r1(e.stepComponent), {
                            class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border"
                        }))])),
                        _: 1
                    })) : e.state.matches("invoice_processed") ? (S(),
                    T("div", B6, [H(l), H(d)])) : e.state.matches("error") ? (S(),
                    ke(c, {
                        key: 2,
                        class: "embed:bg-white embed:text-center embed:dark:bg-zinc-900 embed:rounded-lg embed:shadow-zinc-400 embed:shadow-md embed:dark:shadow-black embed:overflow-hidden embed:border-zinc-300 embed:dark:border-black embed:border",
                        title: e.isOutOfStock ? "Out of Stock" : "Whoops",
                        message: e.errorMessage
                    }, {
                        default: te(( () => [H(u, {
                            class: "embed:h-24 embed:w-24 embed:text-zinc-600"
                        })])),
                        _: 1
                    }, 8, ["title", "message"])) : Q("", !0)]))])])),
                    _: 1
                })], 2)])])),
                _: 1
            })])),
            _: 1
        })])),
        _: 1
    }, 8, ["show"])
}
const q6 = gt(L6, [["render", H6]])
  , wi = wh(q6);
wi.component("Listbox", tf);
wi.component("ListboxButton", nf);
wi.component("ListboxOptions", rf);
wi.component("ListboxOption", of);
const Um = document.createElement("div");
document.body.append(Um);
wi.mount(Um);
