function e(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var t =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {};
function n(e) {
  return e && e.__esModule ? e.default : e;
}
var r = {},
  i = {},
  o = t.parcelRequire3a11;
null == o &&
  (((o = function (e) {
    if (e in r) return r[e].exports;
    if (e in i) {
      var t = i[e];
      delete i[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var o = new Error("Cannot find module '" + e + "'");
    throw ((o.code = "MODULE_NOT_FOUND"), o);
  }).register = function (e, t) {
    i[e] = t;
  }),
  (t.parcelRequire3a11 = o)),
  o.register("16p9U", function (t, n) {
    var r, i;
    e(
      t.exports,
      "register",
      function () {
        return r;
      },
      function (e) {
        return (r = e);
      }
    ),
      e(
        t.exports,
        "resolve",
        function () {
          return i;
        },
        function (e) {
          return (i = e);
        }
      );
    var o = {};
    (r = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) o[t[n]] = e[t[n]];
    }),
      (i = function (e) {
        var t = o[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  o("16p9U").register(
    JSON.parse('{"1Axm8":"index.ddf391b7.js","1HTBT":"icons.c14567a0.svg"}')
  );
var a,
  s,
  c = {},
  u = function (e) {
    return e && e.Math == Math && e;
  };
c =
  u("object" == typeof globalThis && globalThis) ||
  u("object" == typeof window && window) ||
  u("object" == typeof self && self) ||
  u("object" == typeof t && t) ||
  (function () {
    return this;
  })() ||
  Function("return this")();
var l, d;
l = !(d = function (e) {
  try {
    return !!e();
  } catch (e) {
    return !0;
  }
})(function () {
  return (
    7 !=
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var p,
  f = {};
p = !d(function () {
  var e = function () {}.bind();
  return "function" != typeof e || e.hasOwnProperty("prototype");
});
var h,
  v = Function.prototype.call;
f = p
  ? v.bind(v)
  : function () {
      return v.apply(v, arguments);
    };
var g = {}.propertyIsEnumerable,
  m = Object.getOwnPropertyDescriptor,
  y = m && !g.call({ 1: 2 }, 1);
h = y
  ? function (e) {
      var t = m(this, e);
      return !!t && t.enumerable;
    }
  : g;
var b;
b = function (e, t) {
  return {
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t,
  };
};
var _,
  w,
  k = {},
  E = {},
  S = Function.prototype,
  O = S.bind,
  j = S.call,
  x = p && O.bind(j, j),
  F = (E = p
    ? function (e) {
        return e && x(e);
      }
    : function (e) {
        return (
          e &&
          function () {
            return j.apply(e, arguments);
          }
        );
      })({}.toString),
  L = E("".slice);
w = function (e) {
  return L(F(e), 8, -1);
};
var T = Object,
  M = E("".split);
k = d(function () {
  return !T("z").propertyIsEnumerable(0);
})
  ? function (e) {
      return "String" == w(e) ? M(e, "") : T(e);
    }
  : T;
var P, $;
$ = function (e) {
  return null == e;
};
var I = TypeError;
(P = function (e) {
  if ($(e)) throw I("Can't call method on " + e);
  return e;
}),
  (_ = function (e) {
    return k(P(e));
  });
var q,
  H,
  A,
  C = {},
  N = {},
  R = "object" == typeof document && document.all,
  D = (A = { all: R, IS_HTMLDDA: void 0 === R && void 0 !== R }).all;
N = A.IS_HTMLDDA
  ? function (e) {
      return "function" == typeof e || e === D;
    }
  : function (e) {
      return "function" == typeof e;
    };
var U = A.all;
C = A.IS_HTMLDDA
  ? function (e) {
      return "object" == typeof e ? null !== e : N(e) || e === U;
    }
  : function (e) {
      return "object" == typeof e ? null !== e : N(e);
    };
var z,
  W = {},
  B = function (e) {
    return N(e) ? e : void 0;
  };
z = function (e, t) {
  return arguments.length < 2 ? B(c[e]) : c[e] && c[e][t];
};
var G = {};
G = E({}.isPrototypeOf);
var Q,
  J,
  Y,
  V = {};
V = z("navigator", "userAgent") || "";
var X,
  K,
  Z = c.process,
  ee = c.Deno,
  te = (Z && Z.versions) || (ee && ee.version),
  ne = te && te.v8;
ne && (K = (X = ne.split("."))[0] > 0 && X[0] < 4 ? 1 : +(X[0] + X[1])),
  !K &&
    V &&
    (!(X = V.match(/Edge\/(\d+)/)) || X[1] >= 74) &&
    (X = V.match(/Chrome\/(\d+)/)) &&
    (K = +X[1]),
  (Y = K),
  (J =
    !!Object.getOwnPropertySymbols &&
    !d(function () {
      var e = Symbol();
      return (
        !String(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && Y && Y < 41)
      );
    })),
  (Q = J && !Symbol.sham && "symbol" == typeof Symbol.iterator);
var re = Object;
W = Q
  ? function (e) {
      return "symbol" == typeof e;
    }
  : function (e) {
      var t = z("Symbol");
      return N(t) && G(t.prototype, re(e));
    };
var ie,
  oe,
  ae,
  se = String;
ae = function (e) {
  try {
    return se(e);
  } catch (e) {
    return "Object";
  }
};
var ce = TypeError;
(oe = function (e) {
  if (N(e)) return e;
  throw ce(ae(e) + " is not a function");
}),
  (ie = function (e, t) {
    var n = e[t];
    return $(n) ? void 0 : oe(n);
  });
var ue,
  le = TypeError;
ue = function (e, t) {
  var n, r;
  if ("string" === t && N((n = e.toString)) && !C((r = f(n, e)))) return r;
  if (N((n = e.valueOf)) && !C((r = f(n, e)))) return r;
  if ("string" !== t && N((n = e.toString)) && !C((r = f(n, e)))) return r;
  throw le("Can't convert object to primitive value");
};
var de, pe;
var fe,
  he = {},
  ve = Object.defineProperty;
fe = function (e, t) {
  try {
    ve(c, e, { value: t, configurable: !0, writable: !0 });
  } catch (n) {
    c[e] = t;
  }
  return t;
};
var ge = c["__core-js_shared__"] || fe("__core-js_shared__", {});
(he = ge),
  (pe = function (e, t) {
    return he[e] || (he[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: "3.25.2",
    mode: "global",
    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",
    source: "https://github.com/zloirock/core-js",
  });
var me,
  ye = {},
  be = Object;
me = function (e) {
  return be(P(e));
};
var _e = E({}.hasOwnProperty);
ye =
  Object.hasOwn ||
  function (e, t) {
    return _e(me(e), t);
  };
var we,
  ke = 0,
  Ee = Math.random(),
  Se = E((1).toString);
we = function (e) {
  return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Se(++ke + Ee, 36);
};
var Oe = pe("wks"),
  je = c.Symbol,
  xe = je && je.for,
  Fe = Q ? je : (je && je.withoutSetter) || we;
de = function (e) {
  if (!ye(Oe, e) || (!J && "string" != typeof Oe[e])) {
    var t = "Symbol." + e;
    J && ye(je, e) ? (Oe[e] = je[e]) : (Oe[e] = Q && xe ? xe(t) : Fe(t));
  }
  return Oe[e];
};
var Le = TypeError,
  Te = de("toPrimitive");
(H = function (e, t) {
  if (!C(e) || W(e)) return e;
  var n,
    r = ie(e, Te);
  if (r) {
    if ((void 0 === t && (t = "default"), (n = f(r, e, t)), !C(n) || W(n)))
      return n;
    throw Le("Can't convert object to primitive value");
  }
  return void 0 === t && (t = "number"), ue(e, t);
}),
  (q = function (e) {
    var t = H(e, "string");
    return W(t) ? t : t + "";
  });
var Me,
  Pe,
  $e = c.document,
  Ie = C($e) && C($e.createElement);
(Pe = function (e) {
  return Ie ? $e.createElement(e) : {};
}),
  (Me =
    !l &&
    !d(function () {
      return (
        7 !=
        Object.defineProperty(Pe("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var qe,
  He,
  Ae = Object.getOwnPropertyDescriptor,
  Ce = (s = l
    ? Ae
    : function (e, t) {
        if (((e = _(e)), (t = q(t)), Me))
          try {
            return Ae(e, t);
          } catch (e) {}
        if (ye(e, t)) return b(!f(h, e, t), e[t]);
      }),
  Ne = {};
He =
  l &&
  d(function () {
    return (
      42 !=
      Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var Re,
  De = String,
  Ue = TypeError;
Re = function (e) {
  if (C(e)) return e;
  throw Ue(De(e) + " is not an object");
};
var ze = TypeError,
  We = Object.defineProperty,
  Be = Object.getOwnPropertyDescriptor;
(qe = l
  ? He
    ? function (e, t, n) {
        if (
          (Re(e),
          (t = q(t)),
          Re(n),
          "function" == typeof e &&
            "prototype" === t &&
            "value" in n &&
            "writable" in n &&
            !n.writable)
        ) {
          var r = Be(e, t);
          r &&
            r.writable &&
            ((e[t] = n.value),
            (n = {
              configurable:
                "configurable" in n ? n.configurable : r.configurable,
              enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
              writable: !1,
            }));
        }
        return We(e, t, n);
      }
    : We
  : function (e, t, n) {
      if ((Re(e), (t = q(t)), Re(n), Me))
        try {
          return We(e, t, n);
        } catch (e) {}
      if ("get" in n || "set" in n) throw ze("Accessors not supported");
      return "value" in n && (e[t] = n.value), e;
    }),
  (Ne = l
    ? function (e, t, n) {
        return qe(e, t, b(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      });
var Ge,
  Qe,
  Je = Function.prototype,
  Ye = l && Object.getOwnPropertyDescriptor,
  Ve = ye(Je, "name"),
  Xe = {
    EXISTS: Ve,
    PROPER: Ve && "something" === function () {}.name,
    CONFIGURABLE: Ve && (!l || (l && Ye(Je, "name").configurable)),
  }.CONFIGURABLE,
  Ke = {},
  Ze = E(Function.toString);
N(he.inspectSource) ||
  (he.inspectSource = function (e) {
    return Ze(e);
  }),
  (Ke = he.inspectSource);
var et,
  tt,
  nt = c.WeakMap;
tt = N(nt) && /native code/.test(String(nt));
var rt,
  it = pe("keys");
rt = function (e) {
  return it[e] || (it[e] = we(e));
};
var ot = {};
ot = {};
var at,
  st,
  ct,
  ut = c.TypeError,
  lt = c.WeakMap;
if (tt || he.state) {
  var dt = he.state || (he.state = new lt()),
    pt = E(dt.get),
    ft = E(dt.has),
    ht = E(dt.set);
  (at = function (e, t) {
    if (ft(dt, e)) throw ut("Object already initialized");
    return (t.facade = e), ht(dt, e, t), t;
  }),
    (st = function (e) {
      return pt(dt, e) || {};
    }),
    (ct = function (e) {
      return ft(dt, e);
    });
} else {
  var vt = rt("state");
  (ot[vt] = !0),
    (at = function (e, t) {
      if (ye(e, vt)) throw ut("Object already initialized");
      return (t.facade = e), Ne(e, vt, t), t;
    }),
    (st = function (e) {
      return ye(e, vt) ? e[vt] : {};
    }),
    (ct = function (e) {
      return ye(e, vt);
    });
}
var gt = (et = {
    set: at,
    get: st,
    has: ct,
    enforce: function (e) {
      return ct(e) ? st(e) : at(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!C(t) || (n = st(t)).type !== e)
          throw ut("Incompatible receiver, " + e + " required");
        return n;
      };
    },
  }).enforce,
  mt = et.get,
  yt = Object.defineProperty,
  bt =
    l &&
    !d(function () {
      return 8 !== yt(function () {}, "length", { value: 8 }).length;
    }),
  _t = String(String).split("String"),
  wt = (Qe = function (e, t, n) {
    "Symbol(" === String(t).slice(0, 7) &&
      (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
      n && n.getter && (t = "get " + t),
      n && n.setter && (t = "set " + t),
      (!ye(e, "name") || (Xe && e.name !== t)) &&
        (l ? yt(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
      bt &&
        n &&
        ye(n, "arity") &&
        e.length !== n.arity &&
        yt(e, "length", { value: n.arity });
    try {
      n && ye(n, "constructor") && n.constructor
        ? l && yt(e, "prototype", { writable: !1 })
        : e.prototype && (e.prototype = void 0);
    } catch (e) {}
    var r = gt(e);
    return (
      ye(r, "source") || (r.source = _t.join("string" == typeof t ? t : "")), e
    );
  });
(Function.prototype.toString = wt(function () {
  return (N(this) && mt(this).source) || Ke(this);
}, "toString")),
  (Ge = function (e, t, n, r) {
    r || (r = {});
    var i = r.enumerable,
      o = void 0 !== r.name ? r.name : t;
    if ((N(n) && Qe(n, o, r), r.global)) i ? (e[t] = n) : fe(t, n);
    else {
      try {
        r.unsafe ? e[t] && (i = !0) : delete e[t];
      } catch (e) {}
      i
        ? (e[t] = n)
        : qe(e, t, {
            value: n,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          });
    }
    return e;
  });
var kt,
  Et,
  St,
  Ot,
  jt,
  xt,
  Ft = {},
  Lt = {},
  Tt = Math.ceil,
  Mt = Math.floor;
(Lt =
  Math.trunc ||
  function (e) {
    var t = +e;
    return (t > 0 ? Mt : Tt)(t);
  }),
  (xt = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : Lt(t);
  });
var Pt = Math.max,
  $t = Math.min;
jt = function (e, t) {
  var n = xt(e);
  return n < 0 ? Pt(n + t, 0) : $t(n, t);
};
var It,
  qt,
  Ht = Math.min;
(qt = function (e) {
  return e > 0 ? Ht(xt(e), 9007199254740991) : 0;
}),
  (It = function (e) {
    return qt(e.length);
  });
var At = function (e) {
    return function (t, n, r) {
      var i,
        o = _(t),
        a = It(o),
        s = jt(r, a);
      if (e && n != n) {
        for (; a > s; ) if ((i = o[s++]) != i) return !0;
      } else
        for (; a > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  Ct = (Ot = { includes: At(!0), indexOf: At(!1) }).indexOf,
  Nt = E([].push);
St = function (e, t) {
  var n,
    r = _(e),
    i = 0,
    o = [];
  for (n in r) !ye(ot, n) && ye(r, n) && Nt(o, n);
  for (; t.length > i; ) ye(r, (n = t[i++])) && (~Ct(o, n) || Nt(o, n));
  return o;
};
var Rt,
  Dt = {},
  Ut = (Dt = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ]).concat("length", "prototype");
(Et =
  Object.getOwnPropertyNames ||
  function (e) {
    return St(e, Ut);
  }),
  (Rt = Object.getOwnPropertySymbols);
var zt = E([].concat);
(Ft =
  z("Reflect", "ownKeys") ||
  function (e) {
    var t = Et(Re(e));
    return Rt ? zt(t, Rt(e)) : t;
  }),
  (kt = function (e, t, n) {
    for (var r = Ft(t), i = qe, o = s, a = 0; a < r.length; a++) {
      var c = r[a];
      ye(e, c) || (n && ye(n, c)) || i(e, c, o(t, c));
    }
  });
var Wt = {},
  Bt = /#|\.prototype\./,
  Gt = function (e, t) {
    var n = Jt[Qt(e)];
    return n == Vt || (n != Yt && (N(t) ? d(t) : !!t));
  },
  Qt = (Gt.normalize = function (e) {
    return String(e).replace(Bt, ".").toLowerCase();
  }),
  Jt = (Gt.data = {}),
  Yt = (Gt.NATIVE = "N"),
  Vt = (Gt.POLYFILL = "P");
(Wt = Gt),
  (a = function (e, t) {
    var n,
      r,
      i,
      o,
      a,
      s = e.target,
      u = e.global,
      l = e.stat;
    if ((n = u ? c : l ? c[s] || fe(s, {}) : (c[s] || {}).prototype))
      for (r in t) {
        if (
          ((o = t[r]),
          (i = e.dontCallGetSet ? (a = Ce(n, r)) && a.value : n[r]),
          !Wt(u ? r : s + (l ? "." : "#") + r, e.forced) && void 0 !== i)
        ) {
          if (typeof o == typeof i) continue;
          kt(o, i);
        }
        (e.sham || (i && i.sham)) && Ne(o, "sham", !0), Ge(n, r, o, e);
      }
  });
var Xt,
  Kt,
  Zt = Ot.includes,
  en = {},
  tn = {};
(tn =
  Object.keys ||
  function (e) {
    return St(e, Dt);
  }),
  (Kt =
    l && !He
      ? Object.defineProperties
      : function (e, t) {
          Re(e);
          for (var n, r = _(t), i = tn(t), o = i.length, a = 0; o > a; )
            qe(e, (n = i[a++]), r[n]);
          return e;
        });
var nn = {};
nn = z("document", "documentElement");
var rn,
  on = rt("IE_PROTO"),
  an = function () {},
  sn = function (e) {
    return "<script>" + e + "</script>";
  },
  cn = function (e) {
    e.write(sn("")), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  un = function () {
    try {
      rn = new ActiveXObject("htmlfile");
    } catch (e) {}
    var e, t;
    un =
      "undefined" != typeof document
        ? document.domain && rn
          ? cn(rn)
          : (((t = Pe("iframe")).style.display = "none"),
            nn.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(sn("document.F=Object")),
            e.close(),
            e.F)
        : cn(rn);
    for (var n = Dt.length; n--; ) delete un.prototype[Dt[n]];
    return un();
  };
(ot[on] = !0),
  (en =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((an.prototype = Re(e)),
            (n = new an()),
            (an.prototype = null),
            (n[on] = e))
          : (n = un()),
        void 0 === t ? n : Kt(n, t)
      );
    });
var ln = qe,
  dn = de("unscopables"),
  pn = Array.prototype;
null == pn[dn] && ln(pn, dn, { configurable: !0, value: en(null) }),
  (Xt = function (e) {
    pn[dn][e] = !0;
  }),
  a(
    {
      target: "Array",
      proto: !0,
      forced: d(function () {
        return !Array(1).includes();
      }),
    },
    {
      includes: function (e) {
        return Zt(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
  Xt("includes");
var fn,
  hn = {},
  vn = Function.prototype,
  gn = vn.apply,
  mn = vn.call;
hn =
  ("object" == typeof Reflect && Reflect.apply) ||
  (p
    ? mn.bind(gn)
    : function () {
        return mn.apply(gn, arguments);
      });
var yn,
  bn = E(E.bind);
yn = function (e, t) {
  return (
    oe(e),
    void 0 === t
      ? e
      : p
      ? bn(e, t)
      : function () {
          return e.apply(t, arguments);
        }
  );
};
var _n = {};
_n = E([].slice);
var wn,
  kn = TypeError;
wn = function (e, t) {
  if (e < t) throw kn("Not enough arguments");
  return e;
};
var En;
En = /(?:ipad|iphone|ipod).*applewebkit/i.test(V);
var Sn;
Sn = "process" == w(c.process);
var On,
  jn,
  xn,
  Fn,
  Ln = c.setImmediate,
  Tn = c.clearImmediate,
  Mn = c.process,
  Pn = c.Dispatch,
  $n = c.Function,
  In = c.MessageChannel,
  qn = c.String,
  Hn = 0,
  An = {};
try {
  On = c.location;
} catch (e) {}
var Cn = function (e) {
    if (ye(An, e)) {
      var t = An[e];
      delete An[e], t();
    }
  },
  Nn = function (e) {
    return function () {
      Cn(e);
    };
  },
  Rn = function (e) {
    Cn(e.data);
  },
  Dn = function (e) {
    c.postMessage(qn(e), On.protocol + "//" + On.host);
  };
(Ln && Tn) ||
  ((Ln = function (e) {
    wn(arguments.length, 1);
    var t = N(e) ? e : $n(e),
      n = _n(arguments, 1);
    return (
      (An[++Hn] = function () {
        hn(t, void 0, n);
      }),
      jn(Hn),
      Hn
    );
  }),
  (Tn = function (e) {
    delete An[e];
  }),
  Sn
    ? (jn = function (e) {
        Mn.nextTick(Nn(e));
      })
    : Pn && Pn.now
    ? (jn = function (e) {
        Pn.now(Nn(e));
      })
    : In && !En
    ? ((Fn = (xn = new In()).port2),
      (xn.port1.onmessage = Rn),
      (jn = yn(Fn.postMessage, Fn)))
    : c.addEventListener &&
      N(c.postMessage) &&
      !c.importScripts &&
      On &&
      "file:" !== On.protocol &&
      !d(Dn)
    ? ((jn = Dn), c.addEventListener("message", Rn, !1))
    : (jn =
        "onreadystatechange" in Pe("script")
          ? function (e) {
              nn.appendChild(Pe("script")).onreadystatechange = function () {
                nn.removeChild(this), Cn(e);
              };
            }
          : function (e) {
              setTimeout(Nn(e), 0);
            }));
var Un = (fn = { set: Ln, clear: Tn }).clear;
a(
  { global: !0, bind: !0, enumerable: !0, forced: c.clearImmediate !== Un },
  { clearImmediate: Un }
);
var zn = fn.set;
a(
  { global: !0, bind: !0, enumerable: !0, forced: c.setImmediate !== zn },
  { setImmediate: zn }
);
var Wn = (function (e) {
  var t,
    n = Object.prototype,
    r = n.hasOwnProperty,
    i = "function" == typeof Symbol ? Symbol : {},
    o = i.iterator || "@@iterator",
    a = i.asyncIterator || "@@asyncIterator",
    s = i.toStringTag || "@@toStringTag";
  function c(e, t, n) {
    return (
      Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      e[t]
    );
  }
  try {
    c({}, "");
  } catch (e) {
    c = function (e, t, n) {
      return (e[t] = n);
    };
  }
  function u(e, t, n, r) {
    var i = t && t.prototype instanceof g ? t : g,
      o = Object.create(i.prototype),
      a = new F(r || []);
    return (
      (o._invoke = (function (e, t, n) {
        var r = d;
        return function (i, o) {
          if (r === f) throw new Error("Generator is already running");
          if (r === h) {
            if ("throw" === i) throw o;
            return T();
          }
          for (n.method = i, n.arg = o; ; ) {
            var a = n.delegate;
            if (a) {
              var s = O(a, n);
              if (s) {
                if (s === v) continue;
                return s;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (r === d) throw ((r = h), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            r = f;
            var c = l(e, t, n);
            if ("normal" === c.type) {
              if (((r = n.done ? h : p), c.arg === v)) continue;
              return { value: c.arg, done: n.done };
            }
            "throw" === c.type &&
              ((r = h), (n.method = "throw"), (n.arg = c.arg));
          }
        };
      })(e, n, a)),
      o
    );
  }
  function l(e, t, n) {
    try {
      return { type: "normal", arg: e.call(t, n) };
    } catch (e) {
      return { type: "throw", arg: e };
    }
  }
  e.wrap = u;
  var d = "suspendedStart",
    p = "suspendedYield",
    f = "executing",
    h = "completed",
    v = {};
  function g() {}
  function m() {}
  function y() {}
  var b = {};
  c(b, o, function () {
    return this;
  });
  var _ = Object.getPrototypeOf,
    w = _ && _(_(L([])));
  w && w !== n && r.call(w, o) && (b = w);
  var k = (y.prototype = g.prototype = Object.create(b));
  function E(e) {
    ["next", "throw", "return"].forEach(function (t) {
      c(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function S(e, t) {
    function n(i, o, a, s) {
      var c = l(e[i], e, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          d = u.value;
        return d && "object" == typeof d && r.call(d, "__await")
          ? t.resolve(d.__await).then(
              function (e) {
                n("next", e, a, s);
              },
              function (e) {
                n("throw", e, a, s);
              }
            )
          : t.resolve(d).then(
              function (e) {
                (u.value = e), a(u);
              },
              function (e) {
                return n("throw", e, a, s);
              }
            );
      }
      s(c.arg);
    }
    var i;
    this._invoke = function (e, r) {
      function o() {
        return new t(function (t, i) {
          n(e, r, t, i);
        });
      }
      return (i = i ? i.then(o, o) : o());
    };
  }
  function O(e, n) {
    var r = e.iterator[n.method];
    if (r === t) {
      if (((n.delegate = null), "throw" === n.method)) {
        if (
          e.iterator.return &&
          ((n.method = "return"), (n.arg = t), O(e, n), "throw" === n.method)
        )
          return v;
        (n.method = "throw"),
          (n.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          ));
      }
      return v;
    }
    var i = l(r, e.iterator, n.arg);
    if ("throw" === i.type)
      return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
    var o = i.arg;
    return o
      ? o.done
        ? ((n[e.resultName] = o.value),
          (n.next = e.nextLoc),
          "return" !== n.method && ((n.method = "next"), (n.arg = t)),
          (n.delegate = null),
          v)
        : o
      : ((n.method = "throw"),
        (n.arg = new TypeError("iterator result is not an object")),
        (n.delegate = null),
        v);
  }
  function j(e) {
    var t = { tryLoc: e[0] };
    1 in e && (t.catchLoc = e[1]),
      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
      this.tryEntries.push(t);
  }
  function x(e) {
    var t = e.completion || {};
    (t.type = "normal"), delete t.arg, (e.completion = t);
  }
  function F(e) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      e.forEach(j, this),
      this.reset(!0);
  }
  function L(e) {
    if (e) {
      var n = e[o];
      if (n) return n.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var i = -1,
          a = function n() {
            for (; ++i < e.length; )
              if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
            return (n.value = t), (n.done = !0), n;
          };
        return (a.next = a);
      }
    }
    return { next: T };
  }
  function T() {
    return { value: t, done: !0 };
  }
  return (
    (m.prototype = y),
    c(k, "constructor", y),
    c(y, "constructor", m),
    (m.displayName = c(y, s, "GeneratorFunction")),
    (e.isGeneratorFunction = function (e) {
      var t = "function" == typeof e && e.constructor;
      return (
        !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
      );
    }),
    (e.mark = function (e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, y)
          : ((e.__proto__ = y), c(e, s, "GeneratorFunction")),
        (e.prototype = Object.create(k)),
        e
      );
    }),
    (e.awrap = function (e) {
      return { __await: e };
    }),
    E(S.prototype),
    c(S.prototype, a, function () {
      return this;
    }),
    (e.AsyncIterator = S),
    (e.async = function (t, n, r, i, o) {
      void 0 === o && (o = Promise);
      var a = new S(u(t, n, r, i), o);
      return e.isGeneratorFunction(n)
        ? a
        : a.next().then(function (e) {
            return e.done ? e.value : a.next();
          });
    }),
    E(k),
    c(k, s, "Generator"),
    c(k, o, function () {
      return this;
    }),
    c(k, "toString", function () {
      return "[object Generator]";
    }),
    (e.keys = function (e) {
      var t = [];
      for (var n in e) t.push(n);
      return (
        t.reverse(),
        function n() {
          for (; t.length; ) {
            var r = t.pop();
            if (r in e) return (n.value = r), (n.done = !1), n;
          }
          return (n.done = !0), n;
        }
      );
    }),
    (e.values = L),
    (F.prototype = {
      constructor: F,
      reset: function (e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = t),
          this.tryEntries.forEach(x),
          !e)
        )
          for (var n in this)
            "t" === n.charAt(0) &&
              r.call(this, n) &&
              !isNaN(+n.slice(1)) &&
              (this[n] = t);
      },
      stop: function () {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var n = this;
        function i(r, i) {
          return (
            (s.type = "throw"),
            (s.arg = e),
            (n.next = r),
            i && ((n.method = "next"), (n.arg = t)),
            !!i
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var a = this.tryEntries[o],
            s = a.completion;
          if ("root" === a.tryLoc) return i("end");
          if (a.tryLoc <= this.prev) {
            var c = r.call(a, "catchLoc"),
              u = r.call(a, "finallyLoc");
            if (c && u) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else if (c) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (e, t) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n];
          if (
            i.tryLoc <= this.prev &&
            r.call(i, "finallyLoc") &&
            this.prev < i.finallyLoc
          ) {
            var o = i;
            break;
          }
        }
        o &&
          ("break" === e || "continue" === e) &&
          o.tryLoc <= t &&
          t <= o.finallyLoc &&
          (o = null);
        var a = o ? o.completion : {};
        return (
          (a.type = e),
          (a.arg = t),
          o
            ? ((this.method = "next"), (this.next = o.finallyLoc), v)
            : this.complete(a)
        );
      },
      complete: function (e, t) {
        if ("throw" === e.type) throw e.arg;
        return (
          "break" === e.type || "continue" === e.type
            ? (this.next = e.arg)
            : "return" === e.type
            ? ((this.rval = this.arg = e.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === e.type && t && (this.next = t),
          v
        );
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.finallyLoc === e)
            return this.complete(n.completion, n.afterLoc), x(n), v;
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var n = this.tryEntries[t];
          if (n.tryLoc === e) {
            var r = n.completion;
            if ("throw" === r.type) {
              var i = r.arg;
              x(n);
            }
            return i;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (e, n, r) {
        return (
          (this.delegate = { iterator: L(e), resultName: n, nextLoc: r }),
          "next" === this.method && (this.arg = t),
          v
        );
      },
    }),
    e
  );
})({});
try {
  regeneratorRuntime = Wn;
} catch (e) {
  "object" == typeof globalThis
    ? (globalThis.regeneratorRuntime = Wn)
    : Function("r", "regeneratorRuntime = r")(Wn);
}
const Bn = async function (e, t) {
    try {
      const n = t
          ? fetch(e, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            })
          : fetch(e),
        r = await Promise.race([Gn(20), n]),
        i = await r.json();
      if (!r.ok) throw new Error(`${i.message} (${r.status})`);
      return i;
    } catch (e) {
      throw e;
    }
  },
  Gn = function (e) {
    return new Promise(function (t, n) {
      setTimeout(function () {
        n(new Error(`Request took too long! Timeout after ${e} second`));
      }, 1e3 * e);
    });
  },
  Qn = {
    recipe: {},
    search: { query: "", result: [], page: 1 },
    bookmarks: [],
  },
  Jn = function (e) {
    const { recipe: t } = e.data;
    return {
      id: t.id,
      title: t.title,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      image: t.image_url,
      servings: t.servings,
      cookingTime: t.cooking_time,
      ingredients: t.ingredients,
      ...(t.key && { key: "603af4f9-8b8b-43a1-9061-f1e7418f0801" }),
    };
  },
  Yn = function (e = Qn.search.page) {
    Qn.search.page = e;
    const t = 10 * (e - 1),
      n = 10 * e;
    return Qn.search.result.slice(t, n);
  },
  Vn = function () {
    localStorage.setItem("bookmarks", JSON.stringify(Qn.bookmarks));
  },
  Xn = function (e) {
    Qn.bookmarks.push(e),
      e.id === Qn.recipe.id && (Qn.recipe.bookmarked = !0),
      Vn();
  };
!(function () {
  const e = localStorage.getItem("bookmarks");
  e && (Qn.bookmarks = JSON.parse(e));
})();
var Kn, Zn, er, tr;
(Kn = new URL(o("16p9U").resolve("1HTBT"), import.meta.url).toString()),
  (Fraction = function (e, t) {
    if (void 0 !== e && t)
      "number" == typeof e && "number" == typeof t
        ? ((this.numerator = e), (this.denominator = t))
        : "string" == typeof e &&
          "string" == typeof t &&
          ((this.numerator = parseInt(e)), (this.denominator = parseInt(t)));
    else if (void 0 === t)
      if (((num = e), "number" == typeof num))
        (this.numerator = num), (this.denominator = 1);
      else if ("string" == typeof num) {
        var n,
          r,
          i = num.split(" ");
        if (
          (i[0] && (n = i[0]),
          i[1] && (r = i[1]),
          n % 1 == 0 && r && r.match("/"))
        )
          return new Fraction(n).add(new Fraction(r));
        if (!n || r) return;
        if ("string" == typeof n && n.match("/")) {
          var o = n.split("/");
          (this.numerator = o[0]), (this.denominator = o[1]);
        } else {
          if ("string" == typeof n && n.match("."))
            return new Fraction(parseFloat(n));
          (this.numerator = parseInt(n)), (this.denominator = 1);
        }
      }
    this.normalize();
  }),
  (Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  }),
  (Fraction.prototype.toString = function () {
    if ("NaN" === this.denominator) return "NaN";
    var e =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      t = this.numerator % this.denominator,
      n = this.denominator,
      r = [];
    return (
      0 != e && r.push(e),
      0 != t && r.push((0 === e ? t : Math.abs(t)) + "/" + n),
      r.length > 0 ? r.join(" ") : 0
    );
  }),
  (Fraction.prototype.rescale = function (e) {
    return (this.numerator *= e), (this.denominator *= e), this;
  }),
  (Fraction.prototype.add = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator += e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator -= e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.numerator), (t.denominator *= e.denominator);
    else {
      if ("number" != typeof e) return t.multiply(new Fraction(e));
      t.numerator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.divide = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.denominator), (t.denominator *= e.numerator);
    else {
      if ("number" != typeof e) return t.divide(new Fraction(e));
      t.denominator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.equals = function (e) {
    e instanceof Fraction || (e = new Fraction(e));
    var t = this.clone().normalize();
    e = e.clone().normalize();
    return t.numerator === e.numerator && t.denominator === e.denominator;
  }),
  (Fraction.prototype.normalize =
    ((er = function (e) {
      return (
        "number" == typeof e &&
        ((e > 0 && e % 1 > 0 && e % 1 < 1) ||
          (e < 0 && e % -1 < 0 && e % -1 > -1))
      );
    }),
    (tr = function (e, t) {
      if (t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n;
      }
      return Math.round(e);
    }),
    function () {
      if (er(this.denominator)) {
        var e = tr(this.denominator, 9),
          t = Math.pow(10, e.toString().split(".")[1].length);
        (this.denominator = Math.round(this.denominator * t)),
          (this.numerator *= t);
      }
      er(this.numerator) &&
        ((e = tr(this.numerator, 9)),
        (t = Math.pow(10, e.toString().split(".")[1].length)),
        (this.numerator = Math.round(this.numerator * t)),
        (this.denominator *= t));
      var n = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= n),
        (this.denominator /= n),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (e, t) {
    var n = [],
      r = Fraction.primeFactors(e),
      i = Fraction.primeFactors(t);
    return (
      r.forEach(function (e) {
        var t = i.indexOf(e);
        t >= 0 && (n.push(e), i.splice(t, 1));
      }),
      0 === n.length
        ? 1
        : (function () {
            var e,
              t = n[0];
            for (e = 1; e < n.length; e++) t *= n[e];
            return t;
          })()
    );
  }),
  (Fraction.primeFactors = function (e) {
    for (var t = Math.abs(e), n = [], r = 2; r * r <= t; )
      t % r == 0 ? (n.push(r), (t /= r)) : r++;
    return 1 != t && n.push(t), n;
  }),
  (Zn = Fraction);
class nr {
  _data;
  render(e, t = !0) {
    if (!e || (Array.isArray(e) && 0 === e.length)) return this.renderError();
    this._data = e;
    const n = this._generateMarkup();
    if (!t) return n;
    this._clean(), this._parentEl.insertAdjacentHTML("afterbegin", n);
  }
  update(e) {
    this._data = e;
    const t = this._generateMarkup(),
      n = document.createRange().createContextualFragment(t),
      r = Array.from(n.querySelectorAll("*")),
      i = Array.from(this._parentEl.querySelectorAll("*"));
    r.forEach((e, t) => {
      const n = i[t];
      e.isEqualNode(n) ||
        "" === e.firstChild?.nodeValue.trim() ||
        (n.textContent = e.textContent),
        e.isEqualNode(n) ||
          Array.from(e.attributes).forEach((e) => {
            n.setAttribute(e.name, e.value);
          });
    });
  }
  _clean() {
    this._parentEl.innerHTML = "";
  }
  renderSpinner = function () {
    const e = `\n    <div class="spinner" style="text-align: center;grid-column:1/-1">\n      <svg>\n        <use href="${n(
      Kn
    )}#icon-loader"></use>\n      </svg>\n    </div> \n    `;
    this._clean(), this._parentEl.insertAdjacentHTML("afterbegin", e);
  };
  renderError(e = this._errorMessage) {
    const t = `\n    <div class="error">\n      <div>\n        <svg>\n          <use href="${n(
      Kn
    )}#icon-alert-triangle"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>`;
    this._clean(), this._parentEl.insertAdjacentHTML("afterbegin", t);
  }
  succsessMessage(e = this._succsessMessage) {
    const t = `\n    <div class="message" style="text-align: center;grid-column:1/-1">\n      <div>\n        <svg>\n          <use href="${n(
      Kn
    )}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>`;
    this._clean(), this._parentEl.insertAdjacentHTML("afterbegin", t);
  }
}
var rr = new (class extends nr {
  _parentEl = document.querySelector(".recipe");
  _errorMessage = "We could not find your recipe Pleas try again!";
  _succsessMessage = "";
  _generateMarkup() {
    return `\n    <figure class="recipe__fig">\n    <img src=${
      this._data.image
    } alt=${
      this._data.title
    } class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>=${
      this._data.title
    }</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(
      Kn
    )}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${
      this._data.cookingTime
    }</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(
      Kn
    )}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${
      this._data.servings
    }</span>\n      <span class="recipe__info-text">servings</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to="${
      +this._data.servings - 1
    }" >\n          <svg>\n            <use href="${n(
      Kn
    )}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings" data-update-to="${
      +this._data.servings + 1
    }" >\n          <svg>\n            <use href="${n(
      Kn
    )}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated ${
      this._data.key ? "" : "hidden"
    }">\n      <svg>\n        <use href="${n(
      Kn
    )}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${n(
      Kn
    )}#${
      this._data.bookmarked ? "icon-bookmark-fill" : "icon-bookmark"
    }"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    ${this._data.ingredients
      .map((e) => this._generateMarkupIngrident(e))
      .join(
        ""
      )}\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${
      this._data.publisher
    }</span>. Please check out directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href=${
      this._data.sourceUrl
    }\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(
      Kn
    )}#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>`;
  }
  _generateMarkupIngrident(e) {
    return `\n    <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n         <use href="${n(
      Kn
    )}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${
      e.quantity ? new Zn(e.quantity).toString() : ""
    } </div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${
      e.unit
    }</span>\n          ${e.description}\n        </div>\n      </li>`;
  }
  addHandlerRender(e) {
    ["hashchange", "load"].forEach((t) => window.addEventListener(t, e));
  }
  addHandlerServings(e) {
    this._parentEl.addEventListener("click", function (t) {
      const n = t.target.closest(".btn--update-servings");
      if (!n) return;
      const { updateTo: r } = n.dataset;
      r < 1 || e(r);
    });
  }
  addHandlerBookmark(e) {
    this._parentEl.addEventListener("click", function (t) {
      t.target.closest(".btn--bookmark") && e();
    });
  }
})();
var ir = new (class {
  _parentEl = document.querySelector(".search");
  getQuery() {
    const e = this._parentEl.querySelector(".search__field").value;
    return this._clearInput(), e;
  }
  _clearInput() {
    return (this._parentEl.querySelector(".search__field").value = "");
  }
  addHandlerSearch(e) {
    this._parentEl.addEventListener("submit", function (t) {
      t.preventDefault(), e();
    });
  }
})();
var or = new (class extends nr {
  _parentEl = "";
  _generateMarkup() {
    return `       \n    <li class="preview">\n      <a class="preview__link ${
      window.location.hash.slice(1) === this._data.id
        ? "preview__link--active"
        : ""
    }" href="#${
      this._data.id
    }">\n        <figure class="preview__fig">\n          <img src="${
      this._data.image
    }" alt="${
      this._data.title
    }" />\n        </figure>\n        <div class="preview__data">\n          <h4 class="preview__title">${
      this._data.title
    }</h4>\n          <p class="preview__publisher">${
      this._data.publisher
    }</p>          <div class="preview__user-generated ${
      this._data.key ? "" : "hidden"
    }">\n            <svg>\n              <use href="${n(
      Kn
    )}#icon-user"></use>\n            </svg>\n          </div>\n        </div>\n      </a>\n    </li>\n    `;
  }
})();
var ar = new (class extends nr {
  _parentEl = document.querySelector(".results");
  _errorMessage = "We could not find your search Pleas try again!";
  _generateMarkup() {
    return this._data.map((e) => or.render(e, !1)).join("");
  }
})();
var sr = new (class extends nr {
  _parentEl = document.querySelector(".pagination");
  _currentPage;
  _generateMarkup() {
    const e = Math.ceil(this._data.result.length / 10);
    return (
      (this._currentPage = this._data.page),
      1 === this._currentPage && e > 1
        ? this._nextBtn()
        : this._currentPage === e && e > 1
        ? this._prevBtn()
        : this._currentPage < e
        ? this._nextBtn() + this._prevBtn()
        : ""
    );
  }
  _nextBtn() {
    return `\n    <button data-goto ="${
      this._currentPage + 1
    }" class="btn--inline pagination__btn--next">\n      <span>Page ${
      this._currentPage + 1
    }</span>\n      <svg class="search__icon">\n        <use href="${n(
      Kn
    )}#icon-arrow-right"></use>\n      </svg>\n    </button> \n    `;
  }
  _prevBtn() {
    return `\n    <button data-goto ="${
      this._currentPage - 1
    }" class="btn--inline pagination__btn--prev">\n      <span>Page ${
      this._currentPage - 1
    }</span>\n      <svg class="search__icon">\n        <use href="${n(
      Kn
    )}#icon-arrow-left"></use>\n      </svg>\n    </button> \n    `;
  }
  addHandlerPagination(e) {
    this._parentEl.addEventListener("click", function (t) {
      const n = t.target.closest(".btn--inline ");
      if (!n) return;
      const r = +n.dataset.goto;
      e(r);
    });
  }
})();
var cr = new (class extends nr {
  _parentEl = document.querySelector(".bookmarks__list");
  _errorMessage = " No bookmarks yet. Find a nice recipe and bookmark it :)";
  _generateMarkup() {
    return this._data.map((e) => or.render(e, !1)).join("");
  }
  addHandlerRender(e) {
    window.addEventListener("load", e);
  }
})();
var ur = new (class extends nr {
  _parentEl = document.querySelector(".upload");
  _window = document.querySelector(".add-recipe-window ");
  _overlay = document.querySelector(".overlay");
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _succsessMessage = "Recipe was uploaded successfully";
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerCloseWindow();
  }
  _toggleClass() {
    this._window.classList.toggle("hidden"),
      this._overlay.classList.toggle("hidden");
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this._toggleClass.bind(this));
  }
  _addHandlerCloseWindow() {
    [this._btnClose, this._overlay].forEach((e) =>
      e.addEventListener("click", this._toggleClass.bind(this))
    );
  }
  addHandlerUpload(e) {
    this._parentEl.addEventListener("submit", function (t) {
      t.preventDefault();
      const n = [...new FormData(this)],
        r = Object.fromEntries(n);
      e(r);
    });
  }
  _generateMarkup() {
    return '\n   <div class="overlay hidden"></div>\n  <div class="add-recipe-window hidden">\n    <button class="btn--close-modal">&times;</button>\n    <form class="upload">\n      <div class="upload__column">\n        <h3 class="upload__heading">Recipe data</h3>\n        <label>Title</label>\n        <input value="TEST123" required name="title" type="text" />\n        <label>URL</label>\n        <input value="TEST123" required name="sourceUrl" type="text" />\n        <label>Image URL</label>\n        <input value="TEST123" required name="image" type="text" />\n        <label>Publisher</label>\n        <input value="TEST123" required name="publisher" type="text" />\n        <label>Prep time</label>\n        <input value="23" required name="cookingTime" type="number" />\n        <label>Servings</label>\n        <input value="23" required name="servings" type="number" />\n      </div>\n\n      <div class="upload__column">\n        <h3 class="upload__heading">Ingredients</h3>\n        <label>Ingredient 1</label>\n        <input value="0.5,kg,Rice" type="text" required name="ingredient-1"\n          placeholder="Format: \'Quantity,Unit,Description\'" />\n        <label>Ingredient 2</label>\n        <input value="1,,Avocado" type="text" name="ingredient-2" placeholder="Format: \'Quantity,Unit,Description\'" />\n        <label>Ingredient 3</label>\n        <input value=",,salt" type="text" name="ingredient-3" placeholder="Format: \'Quantity,Unit,Description\'" />\n        <label>Ingredient 4</label>\n        <input type="text" name="ingredient-4" placeholder="Format: \'Quantity,Unit,Description\'" />\n        <label>Ingredient 5</label>\n        <input type="text" name="ingredient-5" placeholder="Format: \'Quantity,Unit,Description\'" />\n        <label>Ingredient 6</label>\n        <input type="text" name="ingredient-6" placeholder="Format: \'Quantity,Unit,Description\'" />\n      </div>\n\n      <button class="btn upload__btn">\n        <svg>\n          <use href="src/img/icons.svg#icon-upload-cloud"></use>\n        </svg>\n        <span>Upload</span>\n      </button>\n    </form>\n  </div>\n   ';
  }
})();
const lr = async function () {
    try {
      const e = window.location.hash.slice(1);
      if (!e) return;
      rr.renderSpinner(),
        ar.update(Yn()),
        cr.update(Qn.bookmarks),
        await (async function (e) {
          try {
            const t = await Bn(
              `https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=603af4f9-8b8b-43a1-9061-f1e7418f0801`
            );
            (Qn.recipe = Jn(t)),
              Qn.bookmarks.some((t) => t.id === e)
                ? (Qn.recipe.bookmarked = !0)
                : (Qn.recipe.bookmarked = !1);
          } catch (e) {
            throw e;
          }
        })(e),
        rr.render(Qn.recipe);
    } catch (e) {
      rr.renderError();
    }
  },
  dr = async function () {
    try {
      ar.renderSpinner();
      const e = ir.getQuery();
      if (!e) return;
      await (async function (e) {
        try {
          Qn.search.query = e;
          const { data: t } = await Bn(
            `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=603af4f9-8b8b-43a1-9061-f1e7418f0801`
          );
          (Qn.search.result = t.recipes.map((e) => ({
            id: e.id,
            title: e.title,
            publisher: e.publisher,
            image: e.image_url,
            ...(e.key && { key: "603af4f9-8b8b-43a1-9061-f1e7418f0801" }),
          }))),
            (Qn.search.page = 1);
        } catch (e) {
          throw e;
        }
      })(e),
        ar.render(Yn()),
        sr.render(Qn.search);
    } catch (e) {}
  },
  pr = function (e) {
    ar.render(Yn(e)), sr.render(Qn.search);
  },
  fr = function (e) {
    !(function (e) {
      Qn.recipe.ingredients.forEach(
        (t) => (t.quantity = t.quantity * (e / Qn.recipe.servings))
      ),
        (Qn.recipe.servings = e);
    })(e),
      rr.update(Qn.recipe);
  },
  hr = function () {
    Qn.recipe.bookmarked
      ? (function (e) {
          const t = Qn.bookmarks.findIndex((t) => t.id === e);
          Qn.bookmarks.splice(t, 1),
            e === Qn.recipe.id && (Qn.recipe.bookmarked = !1),
            Vn();
        })(Qn.recipe.id)
      : Xn(Qn.recipe),
      rr.update(Qn.recipe),
      cr.render(Qn.bookmarks);
  },
  vr = function () {
    cr.render(Qn.bookmarks);
  },
  gr = async function (e) {
    try {
      ur.renderSpinner(),
        await (async function (e) {
          try {
            const t = Object.entries(e)
                .filter((e) => e[0].startsWith("ingredient") && "" !== e[1])
                .map((e) => {
                  const t = e[1].split(",").map((e) => e.trim());
                  if (3 !== t.length)
                    throw new Error(
                      "Wrong ingredients format! Please use this format : (quantity,unit,description)"
                    );
                  const [n, r, i] = t;
                  return { quantity: n ? +n : null, unit: r, description: i };
                }),
              n = {
                title: e.title,
                source_url: e.sourceUrl,
                image_url: e.image,
                publisher: e.publisher,
                cooking_time: +e.cookingTime,
                servings: +e.servings,
                ingredients: t,
              },
              r = await Bn(
                "https://forkify-api.herokuapp.com/api/v2/recipes/?key=603af4f9-8b8b-43a1-9061-f1e7418f0801",
                n
              );
            (Qn.recipe = Jn(r)), Xn(Qn.recipe);
          } catch (e) {
            throw e;
          }
        })(e),
        rr.render(Qn.recipe),
        ur.succsessMessage(),
        cr.render(Qn.bookmarks),
        window.history.pushState(null, "", `#${Qn.recipe.id}`),
        setTimeout(function () {
          ur._toggleClass();
        }, 2500);
    } catch (e) {
      ur.renderError(e);
    }
  };
cr.addHandlerRender(vr),
  rr.addHandlerRender(lr),
  rr.addHandlerServings(fr),
  rr.addHandlerBookmark(hr),
  ir.addHandlerSearch(dr),
  sr.addHandlerPagination(pr),
  ur.addHandlerUpload(gr);
//# sourceMappingURL=index.ddf391b7.js.map
