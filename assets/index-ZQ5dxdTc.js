var e = (e, t) => () => (
  t ||
    (e(
      (t = {
        exports: {},
      }).exports,
      t
    ),
    (e = null)),
  t.exports
);
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });

  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
          ? `omit`
          : `same-origin`),
      t
    );
  }

  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var t = e((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;

    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};

    function v(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      });

    function y() {}
    y.prototype = v.prototype;

    function b(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || h);
    }
    var x = (b.prototype = new y());
    (x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0);
    var S = Array.isArray;

    function C() {}
    var w = {
        H: null,
        A: null,
        T: null,
        S: null,
      },
      T = Object.prototype.hasOwnProperty;

    function E(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }

    function D(e, t) {
      return E(e.type, t, e.props);
    }

    function O(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }

    function k(e) {
      var t = {
        "=": `=0`,
        ":": `=2`,
      };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g;

    function j(e, t) {
      return typeof e == `object` && e && e.key != null
        ? k(`` + e.key)
        : t.toString(36);
    }

    function M(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  }
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }

    function N(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return (c = e._init), N(c(e._payload), r, i, a, o);
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + j(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(A, `$&/`) + `/`),
              N(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (O(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(A, `$&/`) + `/`) +
                    c
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          (a = e[u]), (s = l + j(a, u)), (c += N(a, r, i, s, o));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done; )
          (a = a.value), (s = l + j(a, u++)), (c += N(a, r, i, s, o));
      else if (s === `object`) {
        if (typeof e.then == `function`) return N(M(e), r, i, a, o);
        throw (
          ((r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`
          ))
        );
      }
      return c;
    }

    function P(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        N(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }

    function ee(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = t));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var F =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      I = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`
            );
          return e;
        },
      };
    (e.Activity = f),
      (e.Children = I),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`
          );
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return E(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = {
            $$typeof: o,
            _context: e,
          }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return {
          current: null,
        };
      }),
      (e.forwardRef = function (e) {
        return {
          $$typeof: c,
          render: e,
        };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: d,
          _payload: {
            _status: -1,
            _result: e,
          },
          _init: ee,
        };
      }),
      (e.memo = function (e, t) {
        return {
          $$typeof: u,
          type: e,
          compare: t === void 0 ? null : t,
        };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(C, F);
        } catch (e) {
          F(e);
        } finally {
          t !== null && n.types !== null && (t.types = n.types), (w.T = t);
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.8`);
  }),
  n = e((e, n) => {
    n.exports = t();
  }),
  r = e((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) (e[r] = t), (e[n] = a), (n = r);
        else break a;
      }
    }

    function n(e) {
      return e.length === 0 ? null : e[0];
    }

    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) (e[r] = u), (e[l] = n), (r = l);
          else break a;
        }
      }
      return t;
    }

    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;

    function b(e) {
      for (var i = n(l); i !== null; ) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          r(l), (i.sortIndex = i.expirationTime), t(c, i);
        else break;
        i = n(l);
      }
    }

    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) (m = !0), S || ((S = !0), O());
        else {
          var t = n(l);
          t !== null && j(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;

    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }

    function D() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            (m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0);
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && E());

                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    (d.callback = null), (f = d.priorityLevel);
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      (d.callback = s), b(t), (i = !0);
                      break b;
                    }
                    d === n(c) && r(c), b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  u !== null && j(x, u.startTime - t), (i = !1);
                }
              }
              break a;
            } finally {
              (d = null), (f = a), (p = !1);
            }
          }
        } finally {
          i ? O() : (S = !1);
        }
      }
    }
    var O;
    if (typeof y == `function`)
      O = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var k = new MessageChannel(),
        A = k.port2;
      (k.port1.onmessage = D),
        (O = function () {
          A.postMessage(null);
        });
    } else
      O = function () {
        _(D, 0);
      };

    function j(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(C), (C = -1)) : (h = !0), j(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), S || ((S = !0), O()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      });
  }),
  i = e((e, t) => {
    t.exports = r();
  }),
  a = e((e) => {
    var t = n();

    function r(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }

    function i() {}
    var a = {
        d: {
          f: i,
          r: function () {
            throw Error(r(522));
          },
          D: i,
          C: i,
          L: i,
          m: i,
          X: i,
          S: i,
          M: i,
        },
        p: 0,
        findDOMNode: null,
      },
      o = Symbol.for(`react.portal`);

    function s(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: o,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function l(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    (e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
      (e.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(r(299));
        return s(e, t, null, n);
      }),
      (e.flushSync = function (e) {
        var t = c.T,
          n = a.p;
        try {
          if (((c.T = null), (a.p = 2), e)) return e();
        } finally {
          (c.T = t), (a.p = n), a.d.f();
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          a.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && a.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = l(n, t.crossOrigin),
            i = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? a.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                {
                  crossOrigin: r,
                  integrity: i,
                  fetchPriority: o,
                }
              )
            : n === `script` &&
              a.d.X(e, {
                crossOrigin: r,
                integrity: i,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = l(t.as, t.crossOrigin);
              a.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? a.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = l(n, t.crossOrigin);
          a.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = l(t.as, t.crossOrigin);
            a.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else a.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        a.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return c.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.8`);
  }),
  o = e((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = a());
  }),
  s = e((e) => {
    var t = i(),
      r = n(),
      a = o();

    function s(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }

    function c(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }

    function l(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? n : null;
    }

    function u(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }

    function d(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }

    function f(e) {
      if (l(e) !== e) throw Error(s(188));
    }

    function p(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = l(e)), t === null)) throw Error(s(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var a = i.alternate;
        if (a === null) {
          if (((r = i.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (i.child === a.child) {
          for (a = i.child; a; ) {
            if (a === n) return f(i), e;
            if (a === r) return f(i), t;
            a = a.sibling;
          }
          throw Error(s(188));
        }
        if (n.return !== r.return) (n = i), (r = a);
        else {
          for (var o = !1, c = i.child; c; ) {
            if (c === n) {
              (o = !0), (n = i), (r = a);
              break;
            }
            if (c === r) {
              (o = !0), (r = i), (n = a);
              break;
            }
            c = c.sibling;
          }
          if (!o) {
            for (c = a.child; c; ) {
              if (c === n) {
                (o = !0), (n = a), (r = i);
                break;
              }
              if (c === r) {
                (o = !0), (r = a), (n = i);
                break;
              }
              c = c.sibling;
            }
            if (!o) throw Error(s(189));
          }
        }
        if (n.alternate !== r) throw Error(s(190));
      }
      if (n.tag !== 3) throw Error(s(188));
      return n.stateNode.current === n ? e : t;
    }

    function m(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = m(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var h = Object.assign,
      g = Symbol.for(`react.element`),
      _ = Symbol.for(`react.transitional.element`),
      v = Symbol.for(`react.portal`),
      y = Symbol.for(`react.fragment`),
      b = Symbol.for(`react.strict_mode`),
      x = Symbol.for(`react.profiler`),
      S = Symbol.for(`react.consumer`),
      C = Symbol.for(`react.context`),
      w = Symbol.for(`react.forward_ref`),
      T = Symbol.for(`react.suspense`),
      E = Symbol.for(`react.suspense_list`),
      D = Symbol.for(`react.memo`),
      O = Symbol.for(`react.lazy`),
      k = Symbol.for(`react.activity`),
      A = Symbol.for(`react.memo_cache_sentinel`),
      j = Symbol.iterator;

    function M(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (j && e[j]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var N = Symbol.for(`react.client.reference`);

    function P(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === N ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case y:
          return `Fragment`;
        case x:
          return `Profiler`;
        case b:
          return `StrictMode`;
        case T:
          return `Suspense`;
        case E:
          return `SuspenseList`;
        case k:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case v:
            return `Portal`;
          case C:
            return e.displayName || `Context`;
          case S:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case w:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case D:
            return (
              (t = e.displayName || null), t === null ? P(e.type) || `Memo` : t
            );
          case O:
            (t = e._payload), (e = e._init);
            try {
              return P(e(t));
            } catch {}
        }
      return null;
    }
    var ee = Array.isArray,
      F = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      I = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      te = {
        pending: !1,
        data: null,
        method: null,
        action: null,
      },
      ne = [],
      re = -1;

    function ie(e) {
      return {
        current: e,
      };
    }

    function ae(e) {
      0 > re || ((e.current = ne[re]), (ne[re] = null), re--);
    }

    function L(e, t) {
      re++, (ne[re] = e.current), (e.current = t);
    }
    var oe = ie(null),
      se = ie(null),
      ce = ie(null),
      R = ie(null);

    function le(e, t) {
      switch ((L(ce, t), L(se, e), L(oe, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = Vd(t)), (e = Hd(t, e));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      ae(oe), L(oe, e);
    }

    function ue() {
      ae(oe), ae(se), ae(ce);
    }

    function z(e) {
      e.memoizedState !== null && L(R, e);
      var t = oe.current,
        n = Hd(t, e.type);
      t !== n && (L(se, e), L(oe, n));
    }

    function de(e) {
      se.current === e && (ae(oe), ae(se)),
        R.current === e && (ae(R), (Qf._currentValue = te));
    }
    var fe, pe;

    function me(e) {
      if (fe === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          (fe = (t && t[1]) || ``),
            (pe =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                ? `@unknown:0:0`
                : ``);
        }
      return (
        `
` +
        fe +
        e +
        pe
      );
    }
    var he = !1;

    function ge(e, t) {
      if (!e || he) return ``;
      he = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);

          )
            r++;
          for (
            ;
            i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);

          )
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];

            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        (he = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : ``) ? me(n) : ``;
    }

    function _e(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return me(e.type);
        case 16:
          return me(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? me(`Suspense Fallback`)
            : me(`Suspense`);
        case 19:
          return me(`SuspenseList`);
        case 0:
        case 15:
          return ge(e.type, !1);
        case 11:
          return ge(e.type.render, !1);
        case 1:
          return ge(e.type, !0);
        case 31:
          return me(`Activity`);
        default:
          return ``;
      }
    }

    function ve(e) {
      try {
        var t = ``,
          n = null;
        do (t += _e(e, n)), (n = e), (e = e.return);
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var ye = Object.prototype.hasOwnProperty,
      B = t.unstable_scheduleCallback,
      be = t.unstable_cancelCallback,
      xe = t.unstable_shouldYield,
      Se = t.unstable_requestPaint,
      Ce = t.unstable_now,
      we = t.unstable_getCurrentPriorityLevel,
      Te = t.unstable_ImmediatePriority,
      Ee = t.unstable_UserBlockingPriority,
      De = t.unstable_NormalPriority,
      Oe = t.unstable_LowPriority,
      ke = t.unstable_IdlePriority,
      Ae = t.log,
      je = t.unstable_setDisableYieldValue,
      V = null,
      Me = null;

    function Ne(e) {
      if (
        (typeof Ae == `function` && je(e),
        Me && typeof Me.setStrictMode == `function`)
      )
        try {
          Me.setStrictMode(V, e);
        } catch {}
    }
    var Pe = Math.clz32 ? Math.clz32 : Le,
      Fe = Math.log,
      Ie = Math.LN2;

    function Le(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((Fe(e) / Ie) | 0)) | 0;
    }
    var Re = 256,
      ze = 262144,
      Be = 4194304;

    function Ve(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }

    function He(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Ve(n)))
                : (i = Ve(o))
              : (i = Ve(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = Ve(n)))
                  : (i = Ve(o)))
              : (i = Ve(r))),
        i === 0
          ? 0
          : t !== 0 &&
            t !== i &&
            (t & a) === 0 &&
            ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
          ? t
          : i
      );
    }

    function Ue(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }

    function We(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }

    function Ge() {
      var e = Be;
      return (Be <<= 1), !(Be & 62914560) && (Be = 4194304), e;
    }

    function Ke(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }

    function qe(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }

    function Je(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      (e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0);
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n; ) {
        var u = 31 - Pe(n),
          d = 1 << u;
        (s[u] = 0), (c[u] = -1);
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      r !== 0 && Ye(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t));
    }

    function Ye(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - Pe(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930));
    }

    function Xe(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Pe(n),
          i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
      }
    }

    function Ze(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : Qe(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }

    function Qe(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }

    function $e(e) {
      return (
        (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }

    function et() {
      var e = I.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : mp(e.type)) : e;
    }

    function tt(e, t) {
      var n = I.p;
      try {
        return (I.p = e), t();
      } finally {
        I.p = n;
      }
    }
    var nt = Math.random().toString(36).slice(2),
      rt = `__reactFiber$` + nt,
      it = `__reactProps$` + nt,
      at = `__reactContainer$` + nt,
      ot = `__reactEvents$` + nt,
      st = `__reactListeners$` + nt,
      ct = `__reactHandles$` + nt,
      lt = `__reactResources$` + nt,
      ut = `__reactMarker$` + nt;

    function dt(e) {
      delete e[rt], delete e[it], delete e[ot], delete e[st], delete e[ct];
    }

    function ft(e) {
      var t = e[rt];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[at] || n[rt])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = df(e); e !== null; ) {
              if ((n = e[rt])) return n;
              e = df(e);
            }
          return t;
        }
        (e = n), (n = e.parentNode);
      }
      return null;
    }

    function pt(e) {
      if ((e = e[rt] || e[at])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }

    function mt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(s(33));
    }

    function ht(e) {
      var t = e[lt];
      return (
        (t ||= e[lt] =
          {
            hoistableStyles: new Map(),
            hoistableScripts: new Map(),
          }),
        t
      );
    }

    function gt(e) {
      e[ut] = !0;
    }
    var _t = new Set(),
      vt = {};

    function yt(e, t) {
      bt(e, t), bt(e + `Capture`, t);
    }

    function bt(e, t) {
      for (vt[e] = t, e = 0; e < t.length; e++) _t.add(t[e]);
    }
    var xt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`
      ),
      St = {},
      Ct = {};

    function wt(e) {
      return ye.call(Ct, e)
        ? !0
        : ye.call(St, e)
        ? !1
        : xt.test(e)
        ? (Ct[e] = !0)
        : ((St[e] = !0), !1);
    }

    function Tt(e, t, n) {
      if (wt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }

    function Et(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }

    function Dt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }

    function Ot(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }

    function kt(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }

    function At(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              (n = `` + e), a.call(this, e);
            },
          }),
          Object.defineProperty(e, t, {
            enumerable: r.enumerable,
          }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }

    function jt(e) {
      if (!e._valueTracker) {
        var t = kt(e) ? `checked` : `value`;
        e._valueTracker = At(e, t, `` + e[t]);
      }
    }

    function Mt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = kt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }

    function Nt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Pt = /[\n"\\]/g;

    function Ft(e) {
      return e.replace(Pt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }

    function It(e, t, n, r, i, a, o, s) {
      (e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
          ? ((t === 0 && e.value === ``) || e.value != t) &&
            (e.value = `` + Ot(t))
          : e.value !== `` + Ot(t) && (e.value = `` + Ot(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Rt(e, o, Ot(n))
          : Rt(e, o, Ot(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + Ot(s))
          : e.removeAttribute(`name`);
    }

    function Lt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          jt(e);
          return;
        }
        (n = n == null ? `` : `` + Ot(n)),
          (t = t == null ? n : `` + Ot(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        jt(e);
    }

    function Rt(e, t, n) {
      (t === `number` && Nt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }

    function zt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = `` + Ot(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            (e[i].selected = !0), r && (e[i].defaultSelected = !0);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }

    function Bt(e, t, n) {
      if (
        t != null &&
        ((t = `` + Ot(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Ot(n);
    }

    function Vt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(s(92));
          if (ee(r)) {
            if (1 < r.length) throw Error(s(93));
            r = r[0];
          }
          n = r;
        }
        (n ??= ``), (t = n);
      }
      (n = Ot(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        jt(e);
    }

    function Ht(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Ut = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `
      )
    );

    function Wt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
          ? (e.cssFloat = ``)
          : (e[t] = ``)
        : r
        ? e.setProperty(t, n)
        : typeof n != `number` || n === 0 || Ut.has(t)
        ? t === `float`
          ? (e.cssFloat = n)
          : (e[t] = (`` + n).trim())
        : (e[t] = n + `px`);
    }

    function Gt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(s(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
              ? (e.cssFloat = ``)
              : (e[r] = ``));
        for (var i in t)
          (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && Wt(e, i, r);
      } else for (var a in t) t.hasOwnProperty(a) && Wt(e, a, t[a]);
    }

    function Kt(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var qt = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Jt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Yt(e) {
      return Jt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }

    function Xt() {}
    var Zt = null;

    function Qt(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var $t = null,
      en = null;

    function tn(e) {
      var t = pt(e);
      if (t && (e = t.stateNode)) {
        var n = e[it] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (It(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + Ft(`` + t) + `"][type="radio"]`
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = r[it] || null;
                  if (!i) throw Error(s(90));
                  It(
                    r,
                    i.value,
                    i.defaultValue,
                    i.defaultValue,
                    i.checked,
                    i.defaultChecked,
                    i.type,
                    i.name
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                (r = n[t]), r.form === e.form && Mt(r);
            }
            break a;
          case `textarea`:
            Bt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            (t = n.value), t != null && zt(e, !!n.multiple, t, !1);
        }
      }
    }
    var nn = !1;

    function rn(e, t, n) {
      if (nn) return e(t, n);
      nn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((nn = !1),
          ($t !== null || en !== null) &&
            (vu(), $t && ((t = $t), (e = en), (en = $t = null), tn(t), e)))
        )
          for (t = 0; t < e.length; t++) tn(e[t]);
      }
    }

    function an(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[it] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r);
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(s(231, t, typeof n));
      return n;
    }
    var on = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      sn = !1;
    if (on)
      try {
        var cn = {};
        Object.defineProperty(cn, "passive", {
          get: function () {
            sn = !0;
          },
        }),
          window.addEventListener(`test`, cn, cn),
          window.removeEventListener(`test`, cn, cn);
      } catch {
        sn = !1;
      }
    var ln = null,
      un = null,
      dn = null;

    function fn() {
      if (dn) return dn;
      var e,
        t = un,
        n = t.length,
        r,
        i = `value` in ln ? ln.value : ln.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (dn = i.slice(e, 1 < r ? 1 - r : void 0));
    }

    function pn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }

    function mn() {
      return !0;
    }

    function hn() {
      return !1;
    }

    function gn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? mn
            : hn),
          (this.isPropagationStopped = hn),
          this
        );
      }
      return (
        h(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = mn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = mn));
          },
          persist: function () {},
          isPersistent: mn,
        }),
        t
      );
    }
    var _n = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      vn = gn(_n),
      yn = h({}, _n, {
        view: 0,
        detail: 0,
      }),
      bn = gn(yn),
      xn,
      Sn,
      Cn,
      wn = h({}, yn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Cn &&
                (Cn && e.type === `mousemove`
                  ? ((xn = e.screenX - Cn.screenX),
                    (Sn = e.screenY - Cn.screenY))
                  : (Sn = xn = 0),
                (Cn = e)),
              xn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Sn;
        },
      }),
      Tn = gn(wn),
      En = gn(
        h({}, wn, {
          dataTransfer: 0,
        })
      ),
      Dn = gn(
        h({}, yn, {
          relatedTarget: 0,
        })
      ),
      On = gn(
        h({}, _n, {
          animationName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        })
      ),
      kn = gn(
        h({}, _n, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      An = gn(
        h({}, _n, {
          data: 0,
        })
      ),
      jn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Mn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Nn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };

    function Pn(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = Nn[e])
        ? !!t[e]
        : !1;
    }

    function Fn() {
      return Pn;
    }
    var In = gn(
        h({}, yn, {
          key: function (e) {
            if (e.key) {
              var t = jn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = pn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
              ? Mn[e.keyCode] || `Unidentified`
              : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Fn,
          charCode: function (e) {
            return e.type === `keypress` ? pn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? pn(e)
              : e.type === `keydown` || e.type === `keyup`
              ? e.keyCode
              : 0;
          },
        })
      ),
      Ln = gn(
        h({}, wn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      Rn = gn(
        h({}, yn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Fn,
        })
      ),
      zn = gn(
        h({}, _n, {
          propertyName: 0,
          elapsedTime: 0,
          pseudoElement: 0,
        })
      ),
      Bn = gn(
        h({}, wn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
              ? -e.wheelDeltaY
              : `wheelDelta` in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      Vn = gn(
        h({}, _n, {
          newState: 0,
          oldState: 0,
        })
      ),
      Hn = [9, 13, 27, 32],
      Un = on && `CompositionEvent` in window,
      Wn = null;
    on && `documentMode` in document && (Wn = document.documentMode);
    var Gn = on && `TextEvent` in window && !Wn,
      Kn = on && (!Un || (Wn && 8 < Wn && 11 >= Wn)),
      qn = ` `,
      Jn = !1;

    function Yn(e, t) {
      switch (e) {
        case `keyup`:
          return Hn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }

    function Xn(e) {
      return (
        (e = e.detail), typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Zn = !1;

    function Qn(e, t) {
      switch (e) {
        case `compositionend`:
          return Xn(t);
        case `keypress`:
          return t.which === 32 ? ((Jn = !0), qn) : null;
        case `textInput`:
          return (e = t.data), e === qn && Jn ? null : e;
        default:
          return null;
      }
    }

    function $n(e, t) {
      if (Zn)
        return e === `compositionend` || (!Un && Yn(e, t))
          ? ((e = fn()), (dn = un = ln = null), (Zn = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Kn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var er = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };

    function tr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!er[e.type] : t === `textarea`;
    }

    function nr(e, t, n, r) {
      $t ? (en ? en.push(r) : (en = [r])) : ($t = r),
        (t = Td(t, `onChange`)),
        0 < t.length &&
          ((n = new vn(`onChange`, `change`, null, n, r)),
          e.push({
            event: n,
            listeners: t,
          }));
    }
    var rr = null,
      ir = null;

    function ar(e) {
      vd(e, 0);
    }

    function or(e) {
      if (Mt(mt(e))) return e;
    }

    function sr(e, t) {
      if (e === `change`) return t;
    }
    var cr = !1;
    if (on) {
      var lr;
      if (on) {
        var ur = `oninput` in document;
        if (!ur) {
          var dr = document.createElement(`div`);
          dr.setAttribute(`oninput`, `return;`),
            (ur = typeof dr.oninput == `function`);
        }
        lr = ur;
      } else lr = !1;
      cr = lr && (!document.documentMode || 9 < document.documentMode);
    }

    function fr() {
      rr && (rr.detachEvent(`onpropertychange`, pr), (ir = rr = null));
    }

    function pr(e) {
      if (e.propertyName === `value` && or(ir)) {
        var t = [];
        nr(t, ir, e, Qt(e)), rn(ar, t);
      }
    }

    function H(e, t, n) {
      e === `focusin`
        ? (fr(), (rr = t), (ir = n), rr.attachEvent(`onpropertychange`, pr))
        : e === `focusout` && fr();
    }

    function mr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return or(ir);
    }

    function hr(e, t) {
      if (e === `click`) return or(t);
    }

    function gr(e, t) {
      if (e === `input` || e === `change`) return or(t);
    }

    function _r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var vr = typeof Object.is == `function` ? Object.is : _r;

    function yr(e, t) {
      if (vr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ye.call(t, i) || !vr(e[i], t[i])) return !1;
      }
      return !0;
    }

    function br(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }

    function xr(e, t) {
      var n = br(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return {
              node: n,
              offset: t - e,
            };
          e = r;
        }
        a: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = br(n);
      }
    }

    function Sr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? Sr(e, t.parentNode)
          : `contains` in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }

    function Cr(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Nt(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Nt(e.document);
      }
      return t;
    }

    function wr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Tr = on && `documentMode` in document && 11 >= document.documentMode,
      Er = null,
      Dr = null,
      Or = null,
      kr = !1;

    function Ar(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      kr ||
        Er == null ||
        Er !== Nt(r) ||
        ((r = Er),
        `selectionStart` in r && wr(r)
          ? (r = {
              start: r.selectionStart,
              end: r.selectionEnd,
            })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Or && yr(Or, r)) ||
          ((Or = r),
          (r = Td(Dr, `onSelect`)),
          0 < r.length &&
            ((t = new vn(`onSelect`, `select`, null, t, n)),
            e.push({
              event: t,
              listeners: r,
            }),
            (t.target = Er))));
    }

    function jr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Mr = {
        animationend: jr(`Animation`, `AnimationEnd`),
        animationiteration: jr(`Animation`, `AnimationIteration`),
        animationstart: jr(`Animation`, `AnimationStart`),
        transitionrun: jr(`Transition`, `TransitionRun`),
        transitionstart: jr(`Transition`, `TransitionStart`),
        transitioncancel: jr(`Transition`, `TransitionCancel`),
        transitionend: jr(`Transition`, `TransitionEnd`),
      },
      Nr = {},
      Pr = {};
    on &&
      ((Pr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Mr.animationend.animation,
        delete Mr.animationiteration.animation,
        delete Mr.animationstart.animation),
      `TransitionEvent` in window || delete Mr.transitionend.transition);

    function Fr(e) {
      if (Nr[e]) return Nr[e];
      if (!Mr[e]) return e;
      var t = Mr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Pr) return (Nr[e] = t[n]);
      return e;
    }
    var Ir = Fr(`animationend`),
      Lr = Fr(`animationiteration`),
      Rr = Fr(`animationstart`),
      zr = Fr(`transitionrun`),
      Br = Fr(`transitionstart`),
      Vr = Fr(`transitioncancel`),
      Hr = Fr(`transitionend`),
      Ur = new Map(),
      Wr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `
        );
    Wr.push(`scrollEnd`);

    function Gr(e, t) {
      Ur.set(e, t), yt(t, [e]);
    }
    var Kr =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      qr = [],
      Jr = 0,
      Yr = 0;

    function Xr() {
      for (var e = Jr, t = (Yr = Jr = 0); t < e; ) {
        var n = qr[t];
        qr[t++] = null;
        var r = qr[t];
        qr[t++] = null;
        var i = qr[t];
        qr[t++] = null;
        var a = qr[t];
        if (((qr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i);
        }
        a !== 0 && ei(n, i, a);
      }
    }

    function Zr(e, t, n, r) {
      (qr[Jr++] = e),
        (qr[Jr++] = t),
        (qr[Jr++] = n),
        (qr[Jr++] = r),
        (Yr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r);
    }

    function Qr(e, t, n, r) {
      return Zr(e, t, n, r), ti(e);
    }

    function $r(e, t) {
      return Zr(e, null, null, t), ti(e);
    }

    function ei(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null; )
        (a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return);
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Pe(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }

    function ti(e) {
      if (50 < lu) throw ((lu = 0), (uu = null), Error(s(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var ni = {};

    function ri(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }

    function ii(e, t, n, r) {
      return new ri(e, t, n, r);
    }

    function ai(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }

    function oi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = ii(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null
            ? null
            : {
                lanes: t.lanes,
                firstContext: t.firstContext,
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }

    function si(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : {
                    lanes: t.lanes,
                    firstContext: t.firstContext,
                  })),
        e
      );
    }

    function ci(e, t, n, r, i, a) {
      var o = 0;
      if (((r = e), typeof e == `function`)) ai(e) && (o = 1);
      else if (typeof e == `string`)
        o = Uf(e, n, oe.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
          ? 27
          : 5;
      else
        a: switch (e) {
          case k:
            return (e = ii(31, n, t, i)), (e.elementType = k), (e.lanes = a), e;
          case y:
            return li(n.children, i, a, t);
          case b:
            (o = 8), (i |= 24);
            break;
          case x:
            return (
              (e = ii(12, n, t, i | 2)), (e.elementType = x), (e.lanes = a), e
            );
          case T:
            return (e = ii(13, n, t, i)), (e.elementType = T), (e.lanes = a), e;
          case E:
            return (e = ii(19, n, t, i)), (e.elementType = E), (e.lanes = a), e;
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case C:
                  o = 10;
                  break a;
                case S:
                  o = 9;
                  break a;
                case w:
                  o = 11;
                  break a;
                case D:
                  o = 14;
                  break a;
                case O:
                  (o = 16), (r = null);
                  break a;
              }
            (o = 29),
              (n = Error(s(130, e === null ? `null` : typeof e, ``))),
              (r = null);
        }
      return (
        (t = ii(o, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = a),
        t
      );
    }

    function li(e, t, n, r) {
      return (e = ii(7, e, r, t)), (e.lanes = n), e;
    }

    function ui(e, t, n) {
      return (e = ii(6, e, null, t)), (e.lanes = n), e;
    }

    function di(e) {
      var t = ii(18, null, null, 0);
      return (t.stateNode = e), t;
    }

    function fi(e, t, n) {
      return (
        (t = ii(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var pi = new WeakMap();

    function mi(e, t) {
      if (typeof e == `object` && e) {
        var n = pi.get(e);
        return n === void 0
          ? ((t = {
              value: e,
              source: t,
              stack: ve(t),
            }),
            pi.set(e, t),
            t)
          : n;
      }
      return {
        value: e,
        source: t,
        stack: ve(t),
      };
    }
    var hi = [],
      gi = 0,
      _i = null,
      vi = 0,
      yi = [],
      bi = 0,
      xi = null,
      Si = 1,
      Ci = ``;

    function wi(e, t) {
      (hi[gi++] = vi), (hi[gi++] = _i), (_i = e), (vi = t);
    }

    function Ti(e, t, n) {
      (yi[bi++] = Si), (yi[bi++] = Ci), (yi[bi++] = xi), (xi = e);
      var r = Si;
      e = Ci;
      var i = 32 - Pe(r) - 1;
      (r &= ~(1 << i)), (n += 1);
      var a = 32 - Pe(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Si = (1 << (32 - Pe(t) + i)) | (n << i) | r),
          (Ci = a + e);
      } else (Si = (1 << a) | (n << i) | r), (Ci = e);
    }

    function Ei(e) {
      e.return !== null && (wi(e, 1), Ti(e, 1, 0));
    }

    function Di(e) {
      for (; e === _i; )
        (_i = hi[--gi]), (hi[gi] = null), (vi = hi[--gi]), (hi[gi] = null);
      for (; e === xi; )
        (xi = yi[--bi]),
          (yi[bi] = null),
          (Ci = yi[--bi]),
          (yi[bi] = null),
          (Si = yi[--bi]),
          (yi[bi] = null);
    }

    function Oi(e, t) {
      (yi[bi++] = Si),
        (yi[bi++] = Ci),
        (yi[bi++] = xi),
        (Si = t.id),
        (Ci = t.overflow),
        (xi = e);
    }
    var ki = null,
      Ai = null,
      U = !1,
      ji = null,
      Mi = !1,
      Ni = Error(s(519));

    function Pi(e) {
      throw (
        (Bi(
          mi(
            Error(
              s(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``
              )
            ),
            e
          )
        ),
        Ni)
      );
    }

    function Fi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[rt] = e), (t[it] = r), n)) {
        case `dialog`:
          $(`cancel`, t), $(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          $(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < gd.length; n++) $(gd[n], t);
          break;
        case `source`:
          $(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          $(`error`, t), $(`load`, t);
          break;
        case `details`:
          $(`toggle`, t);
          break;
        case `input`:
          $(`invalid`, t),
            Lt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0
            );
          break;
        case `select`:
          $(`invalid`, t);
          break;
        case `textarea`:
          $(`invalid`, t), Vt(t, r.value, r.defaultValue, r.children);
      }
      (n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        jd(t.textContent, n)
          ? (r.popover != null && ($(`beforetoggle`, t), $(`toggle`, t)),
            r.onScroll != null && $(`scroll`, t),
            r.onScrollEnd != null && $(`scrollend`, t),
            r.onClick != null && (t.onclick = Xt),
            (t = !0))
          : (t = !1),
        t || Pi(e, !0);
    }

    function Ii(e) {
      for (ki = e.return; ki; )
        switch (ki.tag) {
          case 5:
          case 31:
          case 13:
            Mi = !1;
            return;
          case 27:
          case 3:
            Mi = !0;
            return;
          default:
            ki = ki.return;
        }
    }

    function Li(e) {
      if (e !== ki) return !1;
      if (!U) return Ii(e), (U = !0), !1;
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || Ud(e.type, e.memoizedProps))),
          (n = !n)),
        n && Ai && Pi(e),
        Ii(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(s(317));
        Ai = uf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(s(317));
        Ai = uf(e);
      } else
        t === 27
          ? ((t = Ai),
            Zd(e.type) ? ((e = lf), (lf = null), (Ai = e)) : (Ai = t))
          : (Ai = ki ? cf(e.stateNode.nextSibling) : null);
      return !0;
    }

    function Ri() {
      (Ai = ki = null), (U = !1);
    }

    function zi() {
      var e = ji;
      return (
        e !== null &&
          (Yl === null ? (Yl = e) : Yl.push.apply(Yl, e), (ji = null)),
        e
      );
    }

    function Bi(e) {
      ji === null ? (ji = [e]) : ji.push(e);
    }
    var Vi = ie(null),
      Hi = null,
      Ui = null;

    function Wi(e, t, n) {
      L(Vi, t._currentValue), (t._currentValue = n);
    }

    function Gi(e) {
      (e._currentValue = Vi.current), ae(Vi);
    }

    function Ki(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }

    function qi(e, t, n, r) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var a = i.dependencies;
        if (a !== null) {
          var o = i.child;
          a = a.firstContext;
          a: for (; a !== null; ) {
            var c = a;
            a = i;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                (a.lanes |= n),
                  (c = a.alternate),
                  c !== null && (c.lanes |= n),
                  Ki(a.return, n, e),
                  r || (o = null);
                break a;
              }
            a = c.next;
          }
        } else if (i.tag === 18) {
          if (((o = i.return), o === null)) throw Error(s(341));
          (o.lanes |= n),
            (a = o.alternate),
            a !== null && (a.lanes |= n),
            Ki(o, n, e),
            (o = null);
        } else o = i.child;
        if (o !== null) o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (((i = o.sibling), i !== null)) {
              (i.return = o.return), (o = i);
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }

    function Ji(e, t, n, r) {
      e = null;
      for (var i = t, a = !1; i !== null; ) {
        if (!a) {
          if (i.flags & 524288) a = !0;
          else if (i.flags & 262144) break;
        }
        if (i.tag === 10) {
          var o = i.alternate;
          if (o === null) throw Error(s(387));
          if (((o = o.memoizedProps), o !== null)) {
            var c = i.type;
            vr(i.pendingProps.value, o.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (i === R.current) {
          if (((o = i.alternate), o === null)) throw Error(s(387));
          o.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
            (e === null ? (e = [Qf]) : e.push(Qf));
        }
        i = i.return;
      }
      e !== null && qi(t, e, n, r), (t.flags |= 262144);
    }

    function Yi(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!vr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }

    function Xi(e) {
      (Hi = e),
        (Ui = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }

    function Zi(e) {
      return $i(Hi, e);
    }

    function Qi(e, t) {
      return Hi === null && Xi(e), $i(e, t);
    }

    function $i(e, t) {
      var n = t._currentValue;
      if (
        ((t = {
          context: t,
          memoizedValue: n,
          next: null,
        }),
        Ui === null)
      ) {
        if (e === null) throw Error(s(308));
        (Ui = t),
          (e.dependencies = {
            lanes: 0,
            firstContext: t,
          }),
          (e.flags |= 524288);
      } else Ui = Ui.next = t;
      return n;
    }
    var ea =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      ta = t.unstable_scheduleCallback,
      na = t.unstable_NormalPriority,
      ra = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };

    function ia() {
      return {
        controller: new ea(),
        data: new Map(),
        refCount: 0,
      };
    }

    function aa(e) {
      e.refCount--,
        e.refCount === 0 &&
          ta(na, function () {
            e.controller.abort();
          });
    }
    var oa = null,
      sa = 0,
      ca = 0,
      la = null;

    function ua(e, t) {
      if (oa === null) {
        var n = (oa = []);
        (sa = 0),
          (ca = ud()),
          (la = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          });
      }
      return sa++, t.then(da, da), t;
    }

    function da() {
      if (--sa === 0 && oa !== null) {
        la !== null && (la.status = `fulfilled`);
        var e = oa;
        (oa = null), (ca = 0), (la = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }

    function fa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            (r.status = `fulfilled`), (r.value = t);
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          }
        ),
        r
      );
    }
    var pa = F.S;
    F.S = function (e, t) {
      (Ql = Ce()),
        typeof t == `object` && t && typeof t.then == `function` && ua(e, t),
        pa !== null && pa(e, t);
    };
    var ma = ie(null);

    function ha() {
      var e = ma.current;
      return e === null ? Pl.pooledCache : e;
    }

    function ga(e, t) {
      t === null ? L(ma, ma.current) : L(ma, t.pool);
    }

    function _a() {
      var e = ha();
      return e === null
        ? null
        : {
            parent: ra._currentValue,
            pool: e,
          };
    }
    var va = Error(s(460)),
      ya = Error(s(474)),
      ba = Error(s(542)),
      xa = {
        then: function () {},
      };

    function Sa(e) {
      return (e = e.status), e === `fulfilled` || e === `rejected`;
    }

    function Ca(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(Xt, Xt), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Da(e), e);
        default:
          if (typeof t.status == `string`) t.then(Xt, Xt);
          else {
            if (((e = Pl), e !== null && 100 < e.shellSuspendCounter))
              throw Error(s(482));
            (e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `fulfilled`), (n.value = e);
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    (n.status = `rejected`), (n.reason = e);
                  }
                }
              );
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Da(e), e);
          }
          throw ((Ta = t), va);
      }
    }

    function wa(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((Ta = e), va)
          : e;
      }
    }
    var Ta = null;

    function Ea() {
      if (Ta === null) throw Error(s(459));
      var e = Ta;
      return (Ta = null), e;
    }

    function Da(e) {
      if (e === va || e === ba) throw Error(s(483));
    }
    var Oa = null,
      ka = 0;

    function Aa(e) {
      var t = ka;
      return (ka += 1), Oa === null && (Oa = []), Ca(Oa, e, t);
    }

    function ja(e, t) {
      (t = t.props.ref), (e.ref = t === void 0 ? null : t);
    }

    function Ma(e, t) {
      throw t.$$typeof === g
        ? Error(s(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            s(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e
            )
          ));
    }

    function Na(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }

      function n(n, r) {
        if (!e) return null;
        for (; r !== null; ) t(n, r), (r = r.sibling);
        return null;
      }

      function r(e) {
        for (var t = new Map(); e !== null; )
          e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling);
        return t;
      }

      function i(e, t) {
        return (e = oi(e, t)), (e.index = 0), (e.sibling = null), e;
      }

      function a(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }

      function o(t) {
        return e && t.alternate === null && (t.flags |= 67108866), t;
      }

      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = ui(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }

      function l(e, t, n, r) {
        var a = n.type;
        return a === y
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
            (t.elementType === a ||
              (typeof a == `object` &&
                a &&
                a.$$typeof === O &&
                wa(a) === t.type))
          ? ((t = i(t, n.props)), ja(t, n), (t.return = e), t)
          : ((t = ci(n.type, n.key, n.props, null, e.mode, r)),
            ja(t, n),
            (t.return = e),
            t);
      }

      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = fi(n, e.mode, r)), (t.return = e), t)
          : ((t = i(t, n.children || [])), (t.return = e), t);
      }

      function d(e, t, n, r, a) {
        return t === null || t.tag !== 7
          ? ((t = li(n, e.mode, r, a)), (t.return = e), t)
          : ((t = i(t, n)), (t.return = e), t);
      }

      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return (t = ui(`` + t, e.mode, n)), (t.return = e), t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case _:
              return (
                (n = ci(t.type, t.key, t.props, null, e.mode, n)),
                ja(n, t),
                (n.return = e),
                n
              );
            case v:
              return (t = fi(t, e.mode, n)), (t.return = e), t;
            case O:
              return (t = wa(t)), f(e, t, n);
          }
          if (ee(t) || M(t))
            return (t = li(t, e.mode, n, null)), (t.return = e), t;
          if (typeof t.then == `function`) return f(e, Aa(t), n);
          if (t.$$typeof === C) return f(e, Qi(e, t), n);
          Ma(e, t);
        }
        return null;
      }

      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case _:
              return n.key === i ? l(e, t, n, r) : null;
            case v:
              return n.key === i ? u(e, t, n, r) : null;
            case O:
              return (n = wa(n)), p(e, t, n, r);
          }
          if (ee(n) || M(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Aa(n), r);
          if (n.$$typeof === C) return p(e, t, Qi(e, n), r);
          Ma(e, n);
        }
        return null;
      }

      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return (e = e.get(n) || null), c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case _:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i)
              );
            case v:
              return (
                (e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i)
              );
            case O:
              return (r = wa(r)), m(e, t, n, r, i);
          }
          if (ee(r) || M(r)) return (e = e.get(n) || null), d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, Aa(r), i);
          if (r.$$typeof === C) return m(e, t, n, Qi(t, r), i);
          Ma(t, r);
        }
        return null;
      }

      function h(i, o, s, c) {
        for (
          var l = null, u = null, d = o, h = (o = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d),
            (o = a(_, o, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g);
        }
        if (h === s.length) return n(i, d), U && wi(i, h), l;
        if (d === null) {
          for (; h < s.length; h++)
            (d = f(i, s[h], c)),
              d !== null &&
                ((o = a(d, o, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d));
          return U && wi(i, h), l;
        }
        for (d = r(d); h < s.length; h++)
          (g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (o = a(g, o, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          U && wi(i, h),
          l
        );
      }

      function g(i, o, c, l) {
        if (c == null) throw Error(s(151));
        for (
          var u = null, d = null, h = o, g = (o = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(i, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(i, h),
            (o = a(y, o, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _);
        }
        if (v.done) return n(i, h), U && wi(i, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            (v = f(i, v.value, l)),
              v !== null &&
                ((o = a(v, o, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v));
          return U && wi(i, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next())
          (v = m(h, i, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (o = a(v, o, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v));
        return (
          e &&
            h.forEach(function (e) {
              return t(i, e);
            }),
          U && wi(i, g),
          u
        );
      }

      function b(e, r, a, c) {
        if (
          (typeof a == `object` &&
            a &&
            a.type === y &&
            a.key === null &&
            (a = a.props.children),
          typeof a == `object` && a)
        ) {
          switch (a.$$typeof) {
            case _:
              a: {
                for (var l = a.key; r !== null; ) {
                  if (r.key === l) {
                    if (((l = a.type), l === y)) {
                      if (r.tag === 7) {
                        n(e, r.sibling),
                          (c = i(r, a.props.children)),
                          (c.return = e),
                          (e = c);
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === O &&
                        wa(l) === r.type)
                    ) {
                      n(e, r.sibling),
                        (c = i(r, a.props)),
                        ja(c, a),
                        (c.return = e),
                        (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                a.type === y
                  ? ((c = li(a.props.children, e.mode, c, a.key)),
                    (c.return = e),
                    (e = c))
                  : ((c = ci(a.type, a.key, a.props, null, e.mode, c)),
                    ja(c, a),
                    (c.return = e),
                    (e = c));
              }
              return o(e);
            case v:
              a: {
                for (l = a.key; r !== null; ) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === a.containerInfo &&
                      r.stateNode.implementation === a.implementation
                    ) {
                      n(e, r.sibling),
                        (c = i(r, a.children || [])),
                        (c.return = e),
                        (e = c);
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                (c = fi(a, e.mode, c)), (c.return = e), (e = c);
              }
              return o(e);
            case O:
              return (a = wa(a)), b(e, r, a, c);
          }
          if (ee(a)) return h(e, r, a, c);
          if (M(a)) {
            if (((l = M(a)), typeof l != `function`)) throw Error(s(150));
            return (a = l.call(a)), g(e, r, a, c);
          }
          if (typeof a.then == `function`) return b(e, r, Aa(a), c);
          if (a.$$typeof === C) return b(e, r, Qi(e, a), c);
          Ma(e, a);
        }
        return (typeof a == `string` && a !== ``) ||
          typeof a == `number` ||
          typeof a == `bigint`
          ? ((a = `` + a),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = i(r, a)), (c.return = e), (e = c))
              : (n(e, r), (c = ui(a, e.mode, c)), (c.return = e), (e = c)),
            o(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          ka = 0;
          var i = b(e, t, n, r);
          return (Oa = null), i;
        } catch (t) {
          if (t === va || t === ba) throw t;
          var a = ii(29, t, null, e.mode);
          return (a.lanes = r), (a.return = e), a;
        }
      };
    }
    var Pa = Na(!0),
      Fa = Na(!1),
      Ia = !1;

    function La(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null,
        },
        callbacks: null,
      };
    }

    function Ra(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }

    function za(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }

    function Ba(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), Nl & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ti(e)),
          ei(e, null, n),
          t
        );
      }
      return Zr(e, r, t, n), ti(e);
    }

    function Va(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xe(e, n);
      }
    }

    function Ha(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n);
        return;
      }
      (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var Ua = !1;

    function Wa() {
      if (Ua) {
        var e = la;
        if (e !== null) throw e;
      }
    }

    function Ga(e, t, n, r) {
      Ua = !1;
      var i = e.updateQueue;
      Ia = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        (c.next = null), o === null ? (a = l) : (o.next = l), (o = c);
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        (o = 0), (u = l = c = null), (s = a);
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Fl & f) === f : (r & f) === f) {
            f !== 0 && f === ca && (Ua = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  });
            a: {
              var m = e,
                g = s;
              f = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((m = g.payload), typeof m == `function`)) {
                    d = m.call(_, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = g.payload),
                    (f = typeof m == `function` ? m.call(_, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = h({}, d, f);
                  break a;
                case 2:
                  Ia = !0;
              }
            }
            (f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f));
          } else
            (p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f);
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            (p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null);
          }
        } while (1);
        u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (Ul |= o),
          (e.lanes = o),
          (e.memoizedState = d);
      }
    }

    function Ka(e, t) {
      if (typeof e != `function`) throw Error(s(191, e));
      e.call(t);
    }

    function qa(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) Ka(n[e], t);
    }
    var Ja = ie(null),
      Ya = ie(0);

    function Xa(e, t) {
      (e = Vl), L(Ya, e), L(Ja, t), (Vl = e | t.baseLanes);
    }

    function Za() {
      L(Ya, Vl), L(Ja, Ja.current);
    }

    function Qa() {
      (Vl = Ya.current), ae(Ja), ae(Ya);
    }
    var $a = ie(null),
      eo = null;

    function to(e) {
      var t = e.alternate;
      L(ao, ao.current & 1),
        L($a, e),
        eo === null &&
          (t === null || Ja.current !== null || t.memoizedState !== null) &&
          (eo = e);
    }

    function W(e) {
      L(ao, ao.current), L($a, e), eo === null && (eo = e);
    }

    function no(e) {
      e.tag === 22
        ? (L(ao, ao.current), L($a, e), eo === null && (eo = e))
        : ro(e);
    }

    function ro() {
      L(ao, ao.current), L($a, $a.current);
    }

    function io(e) {
      ae($a), eo === e && (eo = null), ae(ao);
    }
    var ao = ie(0);

    function oo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || af(n) || of(n)))
            return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var so = 0,
      G = null,
      K = null,
      co = null,
      lo = !1,
      uo = !1,
      fo = !1,
      po = 0,
      mo = 0,
      ho = null,
      go = 0;

    function _o() {
      throw Error(s(321));
    }

    function vo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!vr(e[n], t[n])) return !1;
      return !0;
    }

    function yo(e, t, n, r, i, a) {
      return (
        (so = a),
        (G = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (F.H = e === null || e.memoizedState === null ? Ns : Ps),
        (fo = !1),
        (a = n(r, i)),
        (fo = !1),
        uo && (a = xo(t, n, r, i)),
        bo(e),
        a
      );
    }

    function bo(e) {
      F.H = Ms;
      var t = K !== null && K.next !== null;
      if (((so = 0), (co = K = G = null), (lo = !1), (mo = 0), (ho = null), t))
        throw Error(s(300));
      e === null ||
        Zs ||
        ((e = e.dependencies), e !== null && Yi(e) && (Zs = !0));
    }

    function xo(e, t, n, r) {
      G = e;
      var i = 0;
      do {
        if ((uo && (ho = null), (mo = 0), (uo = !1), 25 <= i))
          throw Error(s(301));
        if (((i += 1), (co = K = null), e.updateQueue != null)) {
          var a = e.updateQueue;
          (a.lastEffect = null),
            (a.events = null),
            (a.stores = null),
            a.memoCache != null && (a.memoCache.index = 0);
        }
        (F.H = Fs), (a = t(n, r));
      } while (uo);
      return a;
    }

    function So() {
      var e = F.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Eo(t) : t),
        (e = e.useState()[0]),
        (K === null ? null : K.memoizedState) !== e && (G.flags |= 1024),
        t
      );
    }

    function Co() {
      var e = po !== 0;
      return (po = 0), e;
    }

    function q(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }

    function wo(e) {
      if (lo) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        lo = !1;
      }
      (so = 0), (co = K = G = null), (uo = !1), (mo = po = 0), (ho = null);
    }

    function J() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return co === null ? (G.memoizedState = co = e) : (co = co.next = e), co;
    }

    function Y() {
      if (K === null) {
        var e = G.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = K.next;
      var t = co === null ? G.memoizedState : co.next;
      if (t !== null) (co = t), (K = e);
      else {
        if (e === null)
          throw G.alternate === null ? Error(s(467)) : Error(s(310));
        (K = e),
          (e = {
            memoizedState: K.memoizedState,
            baseState: K.baseState,
            baseQueue: K.baseQueue,
            queue: K.queue,
            next: null,
          }),
          co === null ? (G.memoizedState = co = e) : (co = co.next = e);
      }
      return co;
    }

    function To() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null,
      };
    }

    function Eo(e) {
      var t = mo;
      return (
        (mo += 1),
        ho === null && (ho = []),
        (e = Ca(ho, e, t)),
        (t = G),
        (co === null ? t.memoizedState : co.next) === null &&
          ((t = t.alternate),
          (F.H = t === null || t.memoizedState === null ? Ns : Ps)),
        e
      );
    }

    function Do(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Eo(e);
        if (e.$$typeof === C) return Zi(e);
      }
      throw Error(s(438, String(e)));
    }

    function Oo(e) {
      var t = null,
        n = G.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = G.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= {
          data: [],
          index: 0,
        }),
        n === null && ((n = To()), (G.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
      return t.index++, n;
    }

    function ko(e, t) {
      return typeof t == `function` ? t(e) : t;
    }

    function Ao(e) {
      return jo(Y(), K, e);
    }

    function jo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(s(311));
      r.lastRenderedReducer = n;
      var i = e.baseQueue,
        a = r.pending;
      if (a !== null) {
        if (i !== null) {
          var o = i.next;
          (i.next = a.next), (a.next = o);
        }
        (t.baseQueue = i = a), (r.pending = null);
      }
      if (((a = e.baseState), i === null)) e.memoizedState = a;
      else {
        t = i.next;
        var c = (o = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (so & f) === f : (Fl & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === ca && (d = !0);
            else if ((so & p) === p) {
              (u = u.next), p === ca && (d = !0);
              continue;
            } else
              (f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (o = a)) : (l = l.next = f),
                (G.lanes |= p),
                (Ul |= p);
            (f = u.action),
              fo && n(a, f),
              (a = u.hasEagerState ? u.eagerState : n(a, f));
          } else
            (p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (o = a)) : (l = l.next = p),
              (G.lanes |= f),
              (Ul |= f);
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (o = a) : (l.next = c),
          !vr(a, e.memoizedState) && ((Zs = !0), d && ((n = la), n !== null)))
        )
          throw n;
        (e.memoizedState = a),
          (e.baseState = o),
          (e.baseQueue = l),
          (r.lastRenderedState = a);
      }
      return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }

    function Mo(e) {
      var t = Y(),
        n = t.queue;
      if (n === null) throw Error(s(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        i = n.pending,
        a = t.memoizedState;
      if (i !== null) {
        n.pending = null;
        var o = (i = i.next);
        do (a = e(a, o.action)), (o = o.next);
        while (o !== i);
        vr(a, t.memoizedState) || (Zs = !0),
          (t.memoizedState = a),
          t.baseQueue === null && (t.baseState = a),
          (n.lastRenderedState = a);
      }
      return [a, r];
    }

    function No(e, t, n) {
      var r = G,
        i = Y(),
        a = U;
      if (a) {
        if (n === void 0) throw Error(s(407));
        n = n();
      } else n = t();
      var o = !vr((K || i).memoizedState, n);
      if (
        (o && ((i.memoizedState = n), (Zs = !0)),
        (i = i.queue),
        is(Io.bind(null, r, i, e), [e]),
        i.getSnapshot !== t || o || (co !== null && co.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          $o(
            9,
            {
              destroy: void 0,
            },
            Fo.bind(null, r, i, n, t),
            null
          ),
          Pl === null)
        )
          throw Error(s(349));
        a || so & 127 || Po(r, t, n);
      }
      return n;
    }

    function Po(e, t, n) {
      (e.flags |= 16384),
        (e = {
          getSnapshot: t,
          value: n,
        }),
        (t = G.updateQueue),
        t === null
          ? ((t = To()), (G.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
    }

    function Fo(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Lo(t) && Ro(e);
    }

    function Io(e, t, n) {
      return n(function () {
        Lo(t) && Ro(e);
      });
    }

    function Lo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !vr(e, n);
      } catch {
        return !0;
      }
    }

    function Ro(e) {
      var t = $r(e, 2);
      t !== null && pu(t, e, 2);
    }

    function zo(e) {
      var t = J();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), fo)) {
          Ne(!0);
          try {
            n();
          } finally {
            Ne(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ko,
          lastRenderedState: e,
        }),
        t
      );
    }

    function Bo(e, t, n, r) {
      return (e.baseState = n), jo(e, K, typeof r == `function` ? r : ko);
    }

    function Vo(e, t, n, r, i) {
      if (ks(e)) throw Error(s(485));
      if (((e = t.action), e !== null)) {
        var a = {
          payload: i,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            a.listeners.push(e);
          },
        };
        F.T === null ? (a.isTransition = !1) : n(!0),
          r(a),
          (n = t.pending),
          n === null
            ? ((a.next = t.pending = a), Ho(t, a))
            : ((a.next = n.next), (t.pending = n.next = a));
      }
    }

    function Ho(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = F.T,
          o = {};
        F.T = o;
        try {
          var s = n(i, r),
            c = F.S;
          c !== null && c(o, s), Uo(e, t, s);
        } catch (n) {
          Go(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types), (F.T = a);
        }
      } else
        try {
          (a = n(i, r)), Uo(e, t, a);
        } catch (n) {
          Go(e, t, n);
        }
    }

    function Uo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Wo(e, t, n);
            },
            function (n) {
              return Go(e, t, n);
            }
          )
        : Wo(e, t, n);
    }

    function Wo(e, t, n) {
      (t.status = `fulfilled`),
        (t.value = n),
        Ko(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), Ho(e, n)));
    }

    function Go(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do (t.status = `rejected`), (t.reason = n), Ko(t), (t = t.next);
        while (t !== r);
      }
      e.action = null;
    }

    function Ko(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }

    function qo(e, t) {
      return t;
    }

    function Jo(e, t) {
      if (U) {
        var n = Pl.formState;
        if (n !== null) {
          a: {
            var r = G;
            if (U) {
              if (Ai) {
                b: {
                  for (var i = Ai, a = Mi; i.nodeType !== 8; ) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = cf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  (a = i.data), (i = a === `F!` || a === `F` ? i : null);
                }
                if (i) {
                  (Ai = cf(i.nextSibling)), (r = i.data === `F!`);
                  break a;
                }
              }
              Pi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = J()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: qo,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Es.bind(null, G, r)),
        (r.dispatch = n),
        (r = zo(!1)),
        (a = Os.bind(null, G, !1, r.queue)),
        (r = J()),
        (i = {
          state: t,
          dispatch: null,
          action: e,
          pending: null,
        }),
        (r.queue = i),
        (n = Vo.bind(null, G, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }

    function Yo(e) {
      return Xo(Y(), K, e);
    }

    function Xo(e, t, n) {
      if (
        ((t = jo(e, t, qo)[0]),
        (e = Ao(ko)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Eo(t);
        } catch (e) {
          throw e === va ? ba : e;
        }
      else r = t;
      t = Y();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((G.flags |= 2048),
          $o(
            9,
            {
              destroy: void 0,
            },
            Zo.bind(null, i, n),
            null
          )),
        [r, a, e]
      );
    }

    function Zo(e, t) {
      e.action = t;
    }

    function Qo(e) {
      var t = Y(),
        n = K;
      if (n !== null) return Xo(t, n, e);
      Y(), (t = t.memoizedState), (n = Y());
      var r = n.queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }

    function $o(e, t, n, r) {
      return (
        (e = {
          tag: e,
          create: n,
          deps: r,
          inst: t,
          next: null,
        }),
        (t = G.updateQueue),
        t === null && ((t = To()), (G.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }

    function es() {
      return Y().memoizedState;
    }

    function ts(e, t, n, r) {
      var i = J();
      (G.flags |= e),
        (i.memoizedState = $o(
          1 | t,
          {
            destroy: void 0,
          },
          n,
          r === void 0 ? null : r
        ));
    }

    function ns(e, t, n, r) {
      var i = Y();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      K !== null && r !== null && vo(r, K.memoizedState.deps)
        ? (i.memoizedState = $o(t, a, n, r))
        : ((G.flags |= e), (i.memoizedState = $o(1 | t, a, n, r)));
    }

    function rs(e, t) {
      ts(8390656, 8, e, t);
    }

    function is(e, t) {
      ns(2048, 8, e, t);
    }

    function as(e) {
      G.flags |= 4;
      var t = G.updateQueue;
      if (t === null) (t = To()), (G.updateQueue = t), (t.events = [e]);
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }

    function os(e) {
      var t = Y().memoizedState;
      return (
        as({
          ref: t,
          nextImpl: e,
        }),
        function () {
          if (Nl & 2) throw Error(s(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }

    function ss(e, t) {
      return ns(4, 2, e, t);
    }

    function cs(e, t) {
      return ns(4, 4, e, t);
    }

    function ls(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }

    function us(e, t, n) {
      (n = n == null ? null : n.concat([e])), ns(4, 4, ls.bind(null, t, e), n);
    }

    function ds() {}

    function fs(e, t) {
      var n = Y();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && vo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }

    function ps(e, t) {
      var n = Y();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && vo(t, r[1])) return r[0];
      if (((r = e()), fo)) {
        Ne(!0);
        try {
          e();
        } finally {
          Ne(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }

    function ms(e, t, n) {
      return n === void 0 || (so & 1073741824 && !(Fl & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = fu()), (G.lanes |= e), (Ul |= e), n);
    }

    function hs(e, t, n, r) {
      return vr(n, t)
        ? n
        : Ja.current === null
        ? !(so & 42) || (so & 1073741824 && !(Fl & 261930))
          ? ((Zs = !0), (e.memoizedState = n))
          : ((e = fu()), (G.lanes |= e), (Ul |= e), t)
        : ((e = ms(e, n, r)), vr(e, t) || (Zs = !0), e);
    }

    function gs(e, t, n, r, i) {
      var a = I.p;
      I.p = a !== 0 && 8 > a ? a : 8;
      var o = F.T,
        s = {};
      (F.T = s), Os(e, !1, t, n);
      try {
        var c = i(),
          l = F.S;
        l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ds(e, t, fa(c, r), du(e))
            : Ds(e, t, r, du(e));
      } catch (n) {
        Ds(
          e,
          t,
          {
            then: function () {},
            status: `rejected`,
            reason: n,
          },
          du()
        );
      } finally {
        (I.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (F.T = o);
      }
    }

    function _s() {}

    function vs(e, t, n, r) {
      if (e.tag !== 5) throw Error(s(476));
      var i = ys(e).queue;
      gs(
        e,
        i,
        t,
        te,
        n === null
          ? _s
          : function () {
              return bs(e), n(r);
            }
      );
    }

    function ys(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: te,
        baseState: te,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ko,
          lastRenderedState: te,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ko,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }

    function bs(e) {
      var t = ys(e);
      t.next === null && (t = e.alternate.memoizedState),
        Ds(e, t.next.queue, {}, du());
    }

    function xs() {
      return Zi(Qf);
    }

    function Ss() {
      return Y().memoizedState;
    }

    function Cs() {
      return Y().memoizedState;
    }

    function ws(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = du();
            e = za(n);
            var r = Ba(t, e, n);
            r !== null && (pu(r, t, n), Va(r, t, n)),
              (t = {
                cache: ia(),
              }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }

    function Ts(e, t, n) {
      var r = du();
      (n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        ks(e)
          ? As(t, n)
          : ((n = Qr(e, t, n, r)), n !== null && (pu(n, e, r), js(n, t, r)));
    }

    function Es(e, t, n) {
      Ds(e, t, n, du());
    }

    function Ds(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (ks(e)) As(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), vr(s, o)))
              return Zr(e, t, i, 0), Pl === null && Xr(), !1;
          } catch {}
        if (((n = Qr(e, t, i, r)), n !== null))
          return pu(n, e, r), js(n, t, r), !0;
      }
      return !1;
    }

    function Os(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: ud(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        ks(e))
      ) {
        if (t) throw Error(s(479));
      } else (t = Qr(e, n, r, 2)), t !== null && pu(t, e, 2);
    }

    function ks(e) {
      var t = e.alternate;
      return e === G || (t !== null && t === G);
    }

    function As(e, t) {
      uo = lo = !0;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }

    function js(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Xe(e, n);
      }
    }
    var Ms = {
      readContext: Zi,
      use: Do,
      useCallback: _o,
      useContext: _o,
      useEffect: _o,
      useImperativeHandle: _o,
      useLayoutEffect: _o,
      useInsertionEffect: _o,
      useMemo: _o,
      useReducer: _o,
      useRef: _o,
      useState: _o,
      useDebugValue: _o,
      useDeferredValue: _o,
      useTransition: _o,
      useSyncExternalStore: _o,
      useId: _o,
      useHostTransitionStatus: _o,
      useFormState: _o,
      useActionState: _o,
      useOptimistic: _o,
      useMemoCache: _o,
      useCacheRefresh: _o,
    };
    Ms.useEffectEvent = _o;
    var Ns = {
        readContext: Zi,
        use: Do,
        useCallback: function (e, t) {
          return (J().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Zi,
        useEffect: rs,
        useImperativeHandle: function (e, t, n) {
          (n = n == null ? null : n.concat([e])),
            ts(4194308, 4, ls.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return ts(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ts(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = J();
          t = t === void 0 ? null : t;
          var r = e();
          if (fo) {
            Ne(!0);
            try {
              e();
            } finally {
              Ne(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = J();
          if (n !== void 0) {
            var i = n(t);
            if (fo) {
              Ne(!0);
              try {
                n(t);
              } finally {
                Ne(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ts.bind(null, G, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = J();
          return (
            (e = {
              current: e,
            }),
            (t.memoizedState = e)
          );
        },
        useState: function (e) {
          e = zo(e);
          var t = e.queue,
            n = Es.bind(null, G, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: ds,
        useDeferredValue: function (e, t) {
          return ms(J(), e, t);
        },
        useTransition: function () {
          var e = zo(!1);
          return (
            (e = gs.bind(null, G, e.queue, !0, !1)),
            (J().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = G,
            i = J();
          if (U) {
            if (n === void 0) throw Error(s(407));
            n = n();
          } else {
            if (((n = t()), Pl === null)) throw Error(s(349));
            Fl & 127 || Po(r, t, n);
          }
          i.memoizedState = n;
          var a = {
            value: n,
            getSnapshot: t,
          };
          return (
            (i.queue = a),
            rs(Io.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            $o(
              9,
              {
                destroy: void 0,
              },
              Fo.bind(null, r, a, n, t),
              null
            ),
            n
          );
        },
        useId: function () {
          var e = J(),
            t = Pl.identifierPrefix;
          if (U) {
            var n = Ci,
              r = Si;
            (n = (r & ~(1 << (32 - Pe(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = po++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`);
          } else (n = go++), (t = `_` + t + `r_` + n.toString(32) + `_`);
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: xs,
        useFormState: Jo,
        useActionState: Jo,
        useOptimistic: function (e) {
          var t = J();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = Os.bind(null, G, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Oo,
        useCacheRefresh: function () {
          return (J().memoizedState = ws.bind(null, G));
        },
        useEffectEvent: function (e) {
          var t = J(),
            n = {
              impl: e,
            };
          return (
            (t.memoizedState = n),
            function () {
              if (Nl & 2) throw Error(s(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ps = {
        readContext: Zi,
        use: Do,
        useCallback: fs,
        useContext: Zi,
        useEffect: is,
        useImperativeHandle: us,
        useInsertionEffect: ss,
        useLayoutEffect: cs,
        useMemo: ps,
        useReducer: Ao,
        useRef: es,
        useState: function () {
          return Ao(ko);
        },
        useDebugValue: ds,
        useDeferredValue: function (e, t) {
          return hs(Y(), K.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Ao(ko)[0],
            t = Y().memoizedState;
          return [typeof e == `boolean` ? e : Eo(e), t];
        },
        useSyncExternalStore: No,
        useId: Ss,
        useHostTransitionStatus: xs,
        useFormState: Yo,
        useActionState: Yo,
        useOptimistic: function (e, t) {
          return Bo(Y(), K, e, t);
        },
        useMemoCache: Oo,
        useCacheRefresh: Cs,
      };
    Ps.useEffectEvent = os;
    var Fs = {
      readContext: Zi,
      use: Do,
      useCallback: fs,
      useContext: Zi,
      useEffect: is,
      useImperativeHandle: us,
      useInsertionEffect: ss,
      useLayoutEffect: cs,
      useMemo: ps,
      useReducer: Mo,
      useRef: es,
      useState: function () {
        return Mo(ko);
      },
      useDebugValue: ds,
      useDeferredValue: function (e, t) {
        var n = Y();
        return K === null ? ms(n, e, t) : hs(n, K.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Mo(ko)[0],
          t = Y().memoizedState;
        return [typeof e == `boolean` ? e : Eo(e), t];
      },
      useSyncExternalStore: No,
      useId: Ss,
      useHostTransitionStatus: xs,
      useFormState: Qo,
      useActionState: Qo,
      useOptimistic: function (e, t) {
        var n = Y();
        return K === null
          ? ((n.baseState = e), [e, n.queue.dispatch])
          : Bo(n, K, e, t);
      },
      useMemoCache: Oo,
      useCacheRefresh: Cs,
    };
    Fs.useEffectEvent = os;

    function Is(e, t, n, r) {
      (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : h({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Ls = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = du(),
          i = za(r);
        (i.payload = t),
          n != null && (i.callback = n),
          (t = Ba(e, i, r)),
          t !== null && (pu(t, e, r), Va(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = du(),
          i = za(r);
        (i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ba(e, i, r)),
          t !== null && (pu(t, e, r), Va(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = du(),
          r = za(n);
        (r.tag = 2),
          t != null && (r.callback = t),
          (t = Ba(e, r, n)),
          t !== null && (pu(t, e, n), Va(t, e, n));
      },
    };

    function Rs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
          ? !yr(n, r) || !yr(i, a)
          : !0
      );
    }

    function zs(e, t, n, r) {
      (e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ls.enqueueReplaceState(t, t.state, null);
    }

    function Bs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = h({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }

    function Vs(e) {
      Kr(e);
    }

    function Hs(e) {
      console.error(e);
    }

    function Us(e) {
      Kr(e);
    }

    function Ws(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, {
          componentStack: t.stack,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    function Gs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }

    function Ks(e, t, n) {
      return (
        (n = za(n)),
        (n.tag = 3),
        (n.payload = {
          element: null,
        }),
        (n.callback = function () {
          Ws(e, t);
        }),
        n
      );
    }

    function qs(e) {
      return (e = za(e)), (e.tag = 3), e;
    }

    function Js(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        (e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Gs(t, n, r);
          });
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          Gs(t, n, r),
            typeof i != `function` &&
              (tu === null ? (tu = new Set([this])) : tu.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }

    function Ys(e, t, n, r, i) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Ji(t, n, i, !0),
          (n = $a.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                eo === null
                  ? Tu()
                  : n.alternate === null && Hl === 0 && (Hl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = i),
                r === xa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Wu(e, r, i)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === xa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Wu(e, r, i)),
                !1
              );
          }
          throw Error(s(435, n.tag));
        }
        return Wu(e, r, i), Tu(), !1;
      }
      if (U)
        return (
          (t = $a.current),
          t === null
            ? (r !== Ni &&
                ((t = Error(s(423), {
                  cause: r,
                })),
                Bi(mi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (i &= -i),
              (e.lanes |= i),
              (r = mi(r, n)),
              (i = Ks(e.stateNode, r, i)),
              Ha(e, i),
              Hl !== 4 && (Hl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = i),
              r !== Ni &&
                ((e = Error(s(422), {
                  cause: r,
                })),
                Bi(mi(e, n)))),
          !1
        );
      var a = Error(s(520), {
        cause: r,
      });
      if (
        ((a = mi(a, n)),
        Jl === null ? (Jl = [a]) : Jl.push(a),
        Hl !== 4 && (Hl = 2),
        t === null)
      )
        return !0;
      (r = mi(r, n)), (n = t);
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = i & -i),
              (n.lanes |= e),
              (e = Ks(n.stateNode, r, e)),
              Ha(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (a = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (a !== null &&
                    typeof a.componentDidCatch == `function` &&
                    (tu === null || !tu.has(a)))))
            )
              return (
                (n.flags |= 65536),
                (i &= -i),
                (n.lanes |= i),
                (i = qs(i)),
                Js(i, e, n, r),
                Ha(n, i),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Xs = Error(s(461)),
      Zs = !1;

    function Qs(e, t, n, r) {
      t.child = e === null ? Fa(t, null, n, r) : Pa(t, e.child, n, r);
    }

    function $s(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Xi(t),
        (r = yo(e, t, n, o, a, i)),
        (s = Co()),
        e !== null && !Zs
          ? (q(e, t, i), Sc(e, t, i))
          : (U && s && Ei(t), (t.flags |= 1), Qs(e, t, r, i), t.child)
      );
    }

    function ec(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !ai(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), tc(e, t, a, r, i))
          : ((e = ci(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Cc(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? yr : n),
          n(o, r) && e.ref === t.ref)
        )
          return Sc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = oi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }

    function tc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (yr(a, r) && e.ref === t.ref) {
          if (((Zs = !1), (t.pendingProps = r = a), Cc(e, i)))
            e.flags & 131072 && (Zs = !0);
          else return (t.lanes = e.lanes), Sc(e, t, i);
        }
      }
      return X(e, t, n, r, i);
    }

    function nc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null; )
              (i = i | r.lanes | r.childLanes), (r = r.sibling);
            r = i & ~a;
          } else (r = 0), (t.child = null);
          return ic(e, t, a, n, r);
        }
        if (n & 536870912)
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
          }),
            e !== null && ga(t, a === null ? null : a.cachePool),
            a === null ? Za() : Xa(t, a),
            no(t);
        else
          return (
            (r = t.lanes = 536870912),
            ic(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && ga(t, null), Za(), ro(t))
          : (ga(t, a.cachePool), Xa(t, a), ro(t), (t.memoizedState = null));
      return Qs(e, t, i, n), t.child;
    }

    function rc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }

    function ic(e, t, n, r, i) {
      var a = ha();
      return (
        (a =
          a === null
            ? null
            : {
                parent: ra._currentValue,
                pool: a,
              }),
        (t.memoizedState = {
          baseLanes: n,
          cachePool: a,
        }),
        e !== null && ga(t, null),
        Za(),
        no(t),
        e !== null && Ji(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }

    function ac(e, t) {
      return (
        (t = _c(
          {
            mode: t.mode,
            children: t.children,
          },
          e.mode
        )),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }

    function oc(e, t, n) {
      return (
        Pa(t, e.child, null, n),
        (e = ac(t, t.pendingProps)),
        (e.flags |= 2),
        io(t),
        (t.memoizedState = null),
        e
      );
    }

    function sc(e, t, n) {
      var r = t.pendingProps,
        i = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (U) {
          if (r.mode === `hidden`)
            return (e = ac(t, r)), (t.lanes = 536870912), rc(null, e);
          if (
            (W(t),
            (e = Ai)
              ? ((e = rf(e, Mi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext:
                      xi === null
                        ? null
                        : {
                            id: Si,
                            overflow: Ci,
                          },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = di(e)),
                  (n.return = t),
                  (t.child = n),
                  (ki = t),
                  (Ai = null)))
              : (e = null),
            e === null)
          )
            throw Pi(t);
          return (t.lanes = 536870912), null;
        }
        return ac(t, r);
      }
      var a = e.memoizedState;
      if (a !== null) {
        var o = a.dehydrated;
        if ((W(t), i)) {
          if (t.flags & 256) (t.flags &= -257), (t = oc(e, t, n));
          else if (t.memoizedState !== null)
            (t.child = e.child), (t.flags |= 128), (t = null);
          else throw Error(s(558));
        } else if (
          (Zs || Ji(e, t, n, !1), (i = (n & e.childLanes) !== 0), Zs || i)
        ) {
          if (
            ((r = Pl),
            r !== null && ((o = Ze(r, n)), o !== 0 && o !== a.retryLane))
          )
            throw ((a.retryLane = o), $r(e, o), pu(r, e, o), Xs);
          Tu(), (t = oc(e, t, n));
        } else
          (e = a.treeContext),
            (Ai = cf(o.nextSibling)),
            (ki = t),
            (U = !0),
            (ji = null),
            (Mi = !1),
            e !== null && Oi(t, e),
            (t = ac(t, r)),
            (t.flags |= 4096);
        return t;
      }
      return (
        (e = oi(e.child, {
          mode: r.mode,
          children: r.children,
        })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }

    function cc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(s(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }

    function X(e, t, n, r, i) {
      return (
        Xi(t),
        (n = yo(e, t, n, r, void 0, i)),
        (r = Co()),
        e !== null && !Zs
          ? (q(e, t, i), Sc(e, t, i))
          : (U && r && Ei(t), (t.flags |= 1), Qs(e, t, n, i), t.child)
      );
    }

    function lc(e, t, n, r, i, a) {
      return (
        Xi(t),
        (t.updateQueue = null),
        (n = xo(t, r, n, i)),
        bo(e),
        (r = Co()),
        e !== null && !Zs
          ? (q(e, t, a), Sc(e, t, a))
          : (U && r && Ei(t), (t.flags |= 1), Qs(e, t, n, a), t.child)
      );
    }

    function uc(e, t, n, r, i) {
      if ((Xi(t), t.stateNode === null)) {
        var a = ni,
          o = n.contextType;
        typeof o == `object` && o && (a = Zi(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ls),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          La(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Zi(o) : ni),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (Is(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Ls.enqueueReplaceState(a, a.state, null),
            Ga(t, r, a, i),
            Wa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0);
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Bs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        (o = ni), typeof u == `object` && u && (o = Zi(u));
        var d = n.getDerivedStateFromProps;
        (u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && zs(t, a, r, o)),
          (Ia = !1);
        var f = t.memoizedState;
        (a.state = f),
          Ga(t, r, a, i),
          Wa(),
          (l = t.memoizedState),
          s || f !== l || Ia
            ? (typeof d == `function` &&
                (Is(t, n, d, r), (l = t.memoizedState)),
              (c = Ia || Rs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1));
      } else {
        (a = t.stateNode),
          Ra(e, t),
          (o = t.memoizedProps),
          (u = Bs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ni),
          typeof l == `object` && l && (c = Zi(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && zs(t, a, r, c)),
          (Ia = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ga(t, r, a, i),
          Wa();
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        Ia ||
        (e !== null && e.dependencies !== null && Yi(e.dependencies))
          ? (typeof s == `function` && (Is(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ia ||
              Rs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Yi(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        cc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Pa(t, e.child, null, i)),
                (t.child = Pa(t, null, n, i)))
              : Qs(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Sc(e, t, i)),
        e
      );
    }

    function dc(e, t, n, r) {
      return Ri(), (t.flags |= 256), Qs(e, t, n, r), t.child;
    }
    var fc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };

    function pc(e) {
      return {
        baseLanes: e,
        cachePool: _a(),
      };
    }

    function mc(e, t, n) {
      return (e = e === null ? 0 : e.childLanes & ~n), t && (e |= Kl), e;
    }

    function hc(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) ||
          (o =
            e !== null && e.memoizedState === null ? !1 : !!(ao.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (U) {
          if (
            (i ? to(t) : ro(t),
            (e = Ai)
              ? ((e = rf(e, Mi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext:
                      xi === null
                        ? null
                        : {
                            id: Si,
                            overflow: Ci,
                          },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = di(e)),
                  (n.return = t),
                  (t.child = n),
                  (ki = t),
                  (Ai = null)))
              : (e = null),
            e === null)
          )
            throw Pi(t);
          return of(e) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        }
        var c = r.children;
        return (
          (r = r.fallback),
          i
            ? (ro(t),
              (i = t.mode),
              (c = _c(
                {
                  mode: `hidden`,
                  children: c,
                },
                i
              )),
              (r = li(r, i, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = pc(n)),
              (r.childLanes = mc(e, o, n)),
              (t.memoizedState = fc),
              rc(null, r))
            : (to(t), gc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (a)
          t.flags & 256
            ? (to(t), (t.flags &= -257), (t = vc(e, t, n)))
            : t.memoizedState === null
            ? (ro(t),
              (c = r.fallback),
              (i = t.mode),
              (r = _c(
                {
                  mode: `visible`,
                  children: r.children,
                },
                i
              )),
              (c = li(c, i, n, null)),
              (c.flags |= 2),
              (r.return = t),
              (c.return = t),
              (r.sibling = c),
              (t.child = r),
              Pa(t, e.child, null, n),
              (r = t.child),
              (r.memoizedState = pc(n)),
              (r.childLanes = mc(e, o, n)),
              (t.memoizedState = fc),
              (t = rc(null, r)))
            : (ro(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((to(t), of(c))) {
          if (((o = c.nextSibling && c.nextSibling.dataset), o)) var u = o.dgst;
          (o = u),
            (r = Error(s(419))),
            (r.stack = ``),
            (r.digest = o),
            Bi({
              value: r,
              source: null,
              stack: null,
            }),
            (t = vc(e, t, n));
        } else if (
          (Zs || Ji(e, t, n, !1), (o = (n & e.childLanes) !== 0), Zs || o)
        ) {
          if (
            ((o = Pl),
            o !== null && ((r = Ze(o, n)), r !== 0 && r !== l.retryLane))
          )
            throw ((l.retryLane = r), $r(e, r), pu(o, e, r), Xs);
          af(c) || Tu(), (t = vc(e, t, n));
        } else
          af(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Ai = cf(c.nextSibling)),
              (ki = t),
              (U = !0),
              (ji = null),
              (Mi = !1),
              e !== null && Oi(t, e),
              (t = gc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return i
        ? (ro(t),
          (c = r.fallback),
          (i = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = oi(l, {
            mode: `hidden`,
            children: r.children,
          })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null
            ? ((c = li(c, i, n, null)), (c.flags |= 2))
            : (c = oi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          rc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = pc(n))
            : ((i = c.cachePool),
              i === null
                ? (i = _a())
                : ((l = ra._currentValue),
                  (i =
                    i.parent === l
                      ? i
                      : {
                          parent: l,
                          pool: l,
                        })),
              (c = {
                baseLanes: c.baseLanes | n,
                cachePool: i,
              })),
          (r.memoizedState = c),
          (r.childLanes = mc(e, o, n)),
          (t.memoizedState = fc),
          rc(e.child, r))
        : (to(t),
          (n = e.child),
          (e = n.sibling),
          (n = oi(n, {
            mode: `visible`,
            children: r.children,
          })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions),
            o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }

    function gc(e, t) {
      return (
        (t = _c(
          {
            mode: `visible`,
            children: t,
          },
          e.mode
        )),
        (t.return = e),
        (e.child = t)
      );
    }

    function _c(e, t) {
      return (e = ii(22, e, null, t)), (e.lanes = 0), e;
    }

    function vc(e, t, n) {
      return (
        Pa(t, e.child, null, n),
        (e = gc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }

    function yc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t), Ki(e.return, t, n);
    }

    function bc(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }

    function xc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = ao.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        L(ao, o),
        Qs(e, t, r, n),
        (r = U ? vi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && yc(e, n, t);
          else if (e.tag === 19) yc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && oo(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            bc(t, !1, i, n, a, r);
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && oo(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          bc(t, !0, n, null, a, r);
          break;
        case `together`:
          bc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }

    function Sc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ul |= t.lanes),
        (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((Ji(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(s(153));
      if (t.child !== null) {
        for (
          e = t.child, n = oi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (n = n.sibling = oi(e, e.pendingProps)),
            (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }

    function Cc(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Yi(e)))
      );
    }

    function wc(e, t, n) {
      switch (t.tag) {
        case 3:
          le(t, t.stateNode.containerInfo),
            Wi(t, ra, e.memoizedState.cache),
            Ri();
          break;
        case 27:
        case 5:
          z(t);
          break;
        case 4:
          le(t, t.stateNode.containerInfo);
          break;
        case 10:
          Wi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return (t.flags |= 128), W(t), null;
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (to(t), (e = Sc(e, t, n)), e === null ? null : e.sibling)
                : hc(e, t, n)
              : (to(t), (t.flags |= 128), null);
          to(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0),
            (r ||= (Ji(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return xc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            L(ao, ao.current),
            r)
          )
            break;
          return null;
        case 22:
          return (t.lanes = 0), nc(e, t, n, t.pendingProps);
        case 24:
          Wi(t, ra, e.memoizedState.cache);
      }
      return Sc(e, t, n);
    }

    function Tc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) Zs = !0;
        else {
          if (!Cc(e, n) && !(t.flags & 128)) return (Zs = !1), wc(e, t, n);
          Zs = !!(e.flags & 131072);
        }
      } else (Zs = !1), U && t.flags & 1048576 && Ti(t, vi, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = wa(t.elementType)), (t.type = e), typeof e == `function`))
              ai(e)
                ? ((r = Bs(e, r)), (t.tag = 1), (t = uc(null, t, e, r, n)))
                : ((t.tag = 0), (t = X(null, t, e, r, n)));
            else {
              if (e != null) {
                var i = e.$$typeof;
                if (i === w) {
                  (t.tag = 11), (t = $s(null, t, e, r, n));
                  break a;
                }
                if (i === D) {
                  (t.tag = 14), (t = ec(null, t, e, r, n));
                  break a;
                }
              }
              throw ((t = P(e) || e), Error(s(306, t, ``)));
            }
          }
          return t;
        case 0:
          return X(e, t, t.type, t.pendingProps, n);
        case 1:
          return (r = t.type), (i = Bs(r, t.pendingProps)), uc(e, t, r, i, n);
        case 3:
          a: {
            if ((le(t, t.stateNode.containerInfo), e === null))
              throw Error(s(387));
            r = t.pendingProps;
            var a = t.memoizedState;
            (i = a.element), Ra(e, t), Ga(t, r, null, n);
            var o = t.memoizedState;
            if (
              ((r = o.cache),
              Wi(t, ra, r),
              r !== a.cache && qi(t, [ra], n, !0),
              Wa(),
              (r = o.element),
              a.isDehydrated)
            ) {
              if (
                ((a = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                t.flags & 256)
              ) {
                t = dc(e, t, r, n);
                break a;
              }
              if (r !== i) {
                (i = mi(Error(s(424)), t)), Bi(i), (t = dc(e, t, r, n));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                Ai = cf(e.firstChild),
                  ki = t,
                  U = !0,
                  ji = null,
                  Mi = !0,
                  n = Fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            } else {
              if ((Ri(), r === i)) {
                t = Sc(e, t, n);
                break a;
              }
              Qs(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            cc(e, t),
            e === null
              ? (n = kf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : U ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Bd(ce.current).createElement(n)),
                  (r[rt] = t),
                  (r[it] = e),
                  Pd(r, n, e),
                  gt(r),
                  (t.stateNode = r))
              : (t.memoizedState = kf(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState
                )),
            null
          );
        case 27:
          return (
            z(t),
            e === null &&
              U &&
              ((r = t.stateNode = ff(t.type, t.pendingProps, ce.current)),
              (ki = t),
              (Mi = !0),
              (i = Ai),
              Zd(t.type) ? ((lf = i), (Ai = cf(r.firstChild))) : (Ai = i)),
            Qs(e, t, t.pendingProps.children, n),
            cc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              U &&
              ((i = r = Ai) &&
                ((r = tf(r, t.type, t.pendingProps, Mi)),
                r === null
                  ? (i = !1)
                  : ((t.stateNode = r),
                    (ki = t),
                    (Ai = cf(r.firstChild)),
                    (Mi = !1),
                    (i = !0))),
              i || Pi(t)),
            z(t),
            (i = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (r = a.children),
            Ud(i, a) ? (r = null) : o !== null && Ud(i, o) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((i = yo(e, t, So, null, null, n)), (Qf._currentValue = i)),
            cc(e, t),
            Qs(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              U &&
              ((e = n = Ai) &&
                ((n = nf(n, t.pendingProps, Mi)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (ki = t), (Ai = null), (e = !0))),
              e || Pi(t)),
            null
          );
        case 13:
          return hc(e, t, n);
        case 4:
          return (
            le(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Pa(t, null, r, n)) : Qs(e, t, r, n),
            t.child
          );
        case 11:
          return $s(e, t, t.type, t.pendingProps, n);
        case 7:
          return Qs(e, t, t.pendingProps, n), t.child;
        case 8:
          return Qs(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return Qs(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (r = t.pendingProps),
            Wi(t, t.type, r.value),
            Qs(e, t, r.children, n),
            t.child
          );
        case 9:
          return (
            (i = t.type._context),
            (r = t.pendingProps.children),
            Xi(t),
            (i = Zi(i)),
            (r = r(i)),
            (t.flags |= 1),
            Qs(e, t, r, n),
            t.child
          );
        case 14:
          return ec(e, t, t.type, t.pendingProps, n);
        case 15:
          return tc(e, t, t.type, t.pendingProps, n);
        case 19:
          return xc(e, t, n);
        case 31:
          return sc(e, t, n);
        case 22:
          return nc(e, t, n, t.pendingProps);
        case 24:
          return (
            Xi(t),
            (r = Zi(ra)),
            e === null
              ? ((i = ha()),
                i === null &&
                  ((i = Pl),
                  (a = ia()),
                  (i.pooledCache = a),
                  a.refCount++,
                  a !== null && (i.pooledCacheLanes |= n),
                  (i = a)),
                (t.memoizedState = {
                  parent: r,
                  cache: i,
                }),
                La(t),
                Wi(t, ra, i))
              : ((e.lanes & n) !== 0 && (Ra(e, t), Ga(t, null, null, n), Wa()),
                (i = e.memoizedState),
                (a = t.memoizedState),
                i.parent === r
                  ? ((r = a.cache),
                    Wi(t, ra, r),
                    r !== i.cache && qi(t, [ra], n, !0))
                  : ((i = {
                      parent: r,
                      cache: r,
                    }),
                    (t.memoizedState = i),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = i),
                    Wi(t, ra, r))),
            Qs(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(s(156, t.tag));
    }

    function Ec(e) {
      e.flags |= 4;
    }

    function Dc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Su()) e.flags |= 8192;
          else throw ((Ta = xa), ya);
        }
      } else e.flags &= -16777217;
    }

    function Oc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Wf(t))) {
        if (Su()) e.flags |= 8192;
        else throw ((Ta = xa), ya);
      }
    }

    function kc(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : Ge()), (e.lanes |= t), (ql |= t));
    }

    function Ac(e, t) {
      if (!U)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null; )
              t.alternate !== null && (n = t), (t = t.sibling);
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null; )
              n.alternate !== null && (r = n), (n = n.sibling);
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }

    function jc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling);
      else
        for (i = e.child; i !== null; )
          (n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }

    function Mc(e, t, n) {
      var r = t.pendingProps;
      switch ((Di(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return jc(t), null;
        case 1:
          return jc(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Gi(ra),
            ue(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Li(t)
                ? Ec(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), zi())),
            jc(t),
            null
          );
        case 26:
          var i = t.type,
            a = t.memoizedState;
          return (
            e === null
              ? (Ec(t),
                a === null ? (jc(t), Dc(t, i, null, r, n)) : (jc(t), Oc(t, a)))
              : a
              ? a === e.memoizedState
                ? (jc(t), (t.flags &= -16777217))
                : (Ec(t), jc(t), Oc(t, a))
              : ((e = e.memoizedProps),
                e !== r && Ec(t),
                jc(t),
                Dc(t, i, e, r, n)),
            null
          );
        case 27:
          if (
            (de(t),
            (n = ce.current),
            (i = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && Ec(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(s(166));
              return jc(t), null;
            }
            (e = oe.current),
              Li(t) ? Fi(t, e) : ((e = ff(i, r, n)), (t.stateNode = e), Ec(t));
          }
          return jc(t), null;
        case 5:
          if ((de(t), (i = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Ec(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(s(166));
              return jc(t), null;
            }
            if (((a = oe.current), Li(t))) Fi(t, a);
            else {
              var o = Bd(ce.current);
              switch (a) {
                case 1:
                  a = o.createElementNS(`http://www.w3.org/2000/svg`, i);
                  break;
                case 2:
                  a = o.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    i
                  );
                  break;
                default:
                  switch (i) {
                    case `svg`:
                      a = o.createElementNS(`http://www.w3.org/2000/svg`, i);
                      break;
                    case `math`:
                      a = o.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        i
                      );
                      break;
                    case `script`:
                      (a = o.createElement(`div`)),
                        (a.innerHTML = `<script><\/script>`),
                        (a = a.removeChild(a.firstChild));
                      break;
                    case `select`:
                      (a =
                        typeof r.is == `string`
                          ? o.createElement(`select`, {
                              is: r.is,
                            })
                          : o.createElement(`select`)),
                        r.multiple
                          ? (a.multiple = !0)
                          : r.size && (a.size = r.size);
                      break;
                    default:
                      a =
                        typeof r.is == `string`
                          ? o.createElement(i, {
                              is: r.is,
                            })
                          : o.createElement(i);
                  }
              }
              (a[rt] = t), (a[it] = r);
              a: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  (o.child.return = o), (o = o.child);
                  continue;
                }
                if (o === t) break a;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t) break a;
                  o = o.return;
                }
                (o.sibling.return = o.return), (o = o.sibling);
              }
              t.stateNode = a;
              a: switch ((Pd(a, i, r), i)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Ec(t);
            }
          }
          return (
            jc(t),
            Dc(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Ec(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(s(166));
            if (((e = ce.current), Li(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (i = ki),
                i !== null)
              )
                switch (i.tag) {
                  case 27:
                  case 5:
                    r = i.memoizedProps;
                }
              (e[rt] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  jd(e.nodeValue, n)
                )),
                e || Pi(t, !0);
            } else
              (e = Bd(e).createTextNode(r)), (e[rt] = t), (t.stateNode = e);
          }
          return jc(t), null;
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Li(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(s(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(s(557));
                e[rt] = t;
              } else
                Ri(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              jc(t), (e = !1);
            } else
              (n = zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0);
            if (!e) return t.flags & 256 ? (io(t), t) : (io(t), null);
            if (t.flags & 128) throw Error(s(558));
          }
          return jc(t), null;
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((i = Li(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(s(318));
                if (
                  ((i = t.memoizedState),
                  (i = i === null ? null : i.dehydrated),
                  !i)
                )
                  throw Error(s(317));
                i[rt] = t;
              } else
                Ri(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              jc(t), (i = !1);
            } else
              (i = zi()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = i),
                (i = !0);
            if (!i) return t.flags & 256 ? (io(t), t) : (io(t), null);
          }
          return (
            io(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (i = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (i = r.alternate.memoizedState.cachePool.pool),
                  (a = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (a = r.memoizedState.cachePool.pool),
                  a !== i && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                kc(t, t.updateQueue),
                jc(t),
                null)
          );
        case 4:
          return ue(), e === null && xd(t.stateNode.containerInfo), jc(t), null;
        case 10:
          return Gi(t.type), jc(t), null;
        case 19:
          if ((ae(ao), (r = t.memoizedState), r === null)) return jc(t), null;
          if (((i = !!(t.flags & 128)), (a = r.rendering), a === null)) {
            if (i) Ac(r, !1);
            else {
              if (Hl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((a = oo(e)), a !== null)) {
                    for (
                      t.flags |= 128,
                        Ac(r, !1),
                        e = a.updateQueue,
                        t.updateQueue = e,
                        kc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;

                    )
                      si(n, e), (n = n.sibling);
                    return (
                      L(ao, (ao.current & 1) | 2),
                      U && wi(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ce() > $l &&
                ((t.flags |= 128), (i = !0), Ac(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!i) {
              if (((e = oo(a)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (i = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  kc(t, e),
                  Ac(r, !0),
                  r.tail === null &&
                    r.tailMode === `hidden` &&
                    !a.alternate &&
                    !U)
                )
                  return jc(t), null;
              } else
                2 * Ce() - r.renderingStartTime > $l &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (i = !0), Ac(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : ((e = r.last),
                e === null ? (t.child = a) : (e.sibling = a),
                (r.last = a));
          }
          return r.tail === null
            ? (jc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ce()),
              (e.sibling = null),
              (n = ao.current),
              L(ao, i ? (n & 1) | 2 : n & 1),
              U && wi(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            io(t),
            Qa(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (jc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : jc(t),
            (n = t.updateQueue),
            n !== null && kc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && ae(ma),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Gi(ra),
            jc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(s(156, t.tag));
    }

    function Nc(e, t) {
      switch ((Di(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Gi(ra),
            ue(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return de(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if ((io(t), t.alternate === null)) throw Error(s(340));
            Ri();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (io(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(s(340));
            Ri();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return ae(ao), null;
        case 4:
          return ue(), null;
        case 10:
          return Gi(t.type), null;
        case 22:
        case 23:
          return (
            io(t),
            Qa(),
            e !== null && ae(ma),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return Gi(ra), null;
        case 25:
          return null;
        default:
          return null;
      }
    }

    function Pc(e, t) {
      switch ((Di(t), t.tag)) {
        case 3:
          Gi(ra), ue();
          break;
        case 26:
        case 27:
        case 5:
          de(t);
          break;
        case 4:
          ue();
          break;
        case 31:
          t.memoizedState !== null && io(t);
          break;
        case 13:
          io(t);
          break;
        case 19:
          ae(ao);
          break;
        case 10:
          Gi(t.type);
          break;
        case 22:
        case 23:
          io(t), Qa(), e !== null && ae(ma);
          break;
        case 24:
          Gi(ra);
      }
    }

    function Fc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              (r = a()), (o.destroy = r);
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Uu(t, t.return, e);
      }
    }

    function Ic(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                (o.destroy = void 0), (i = t);
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Uu(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Uu(t, t.return, e);
      }
    }

    function Lc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          qa(t, n);
        } catch (t) {
          Uu(e, e.return, t);
        }
      }
    }

    function Rc(e, t, n) {
      (n.props = Bs(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (n) {
        Uu(e, t, n);
      }
    }

    function zc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Uu(e, t, n);
      }
    }

    function Bc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Uu(e, t, n);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Uu(e, t, n);
          }
        else n.current = null;
      }
    }

    function Vc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Uu(e, e.return, t);
      }
    }

    function Hc(e, t, n) {
      try {
        var r = e.stateNode;
        Fd(r, e.type, n, t), (r[it] = t);
      } catch (t) {
        Uu(e, e.return, t);
      }
    }

    function Uc(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Zd(e.type)) ||
        e.tag === 4
      );
    }

    function Wc(e) {
      a: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || Uc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && Zd(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }

    function Gc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                ? n.ownerDocument.body
                : n
              ).insertBefore(e, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Xt));
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && ((n = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (Gc(e, t, n), e = e.sibling; e !== null; )
          Gc(e, t, n), (e = e.sibling);
    }

    function Kc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        r !== 4 &&
        (r === 27 && Zd(e.type) && (n = e.stateNode), (e = e.child), e !== null)
      )
        for (Kc(e, t, n), e = e.sibling; e !== null; )
          Kc(e, t, n), (e = e.sibling);
    }

    function qc(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length; )
          t.removeAttributeNode(i[0]);
        Pd(t, r, n), (t[rt] = e), (t[it] = n);
      } catch (t) {
        Uu(e, e.return, t);
      }
    }
    var Jc = !1,
      Yc = !1,
      Z = !1,
      Xc = typeof WeakSet == `function` ? WeakSet : Set,
      Zc = null;

    function Qc(e, t) {
      if (((e = e.containerInfo), (Rd = sp), (e = Cr(e)), wr(e))) {
        if (`selectionStart` in e)
          var n = {
            start: e.selectionStart,
            end: e.selectionEnd,
          };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var i = r.anchorOffset,
                a = r.focusNode;
              r = r.focusOffset;
              try {
                n.nodeType, a.nodeType;
              } catch {
                n = null;
                break a;
              }
              var o = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (i !== 0 && f.nodeType !== 3) || (c = o + i),
                    f !== a || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                    f.nodeType === 3 && (o += f.nodeValue.length),
                    (m = f.firstChild) !== null;

                )
                  (p = f), (f = m);
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === i && (c = o),
                    p === a && ++d === r && (l = o),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  (f = p), (p = f.parentNode);
                }
                f = m;
              }
              n =
                c === -1 || l === -1
                  ? null
                  : {
                      start: c,
                      end: l,
                    };
            } else n = null;
          }
        n ||= {
          start: 0,
          end: 0,
        };
      } else n = null;
      for (
        zd = {
          focusedElem: e,
          selectionRange: n,
        },
          sp = !1,
          Zc = t;
        Zc !== null;

      )
        if (((t = Zc), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          (e.return = t), (Zc = e);
        else
          for (; Zc !== null; ) {
            switch (((t = Zc), (a = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (
                  e & 4 &&
                  ((e = t.updateQueue),
                  (e = e === null ? null : e.events),
                  e !== null)
                )
                  for (n = 0; n < e.length; n++)
                    (i = e[n]), (i.ref.impl = i.nextImpl);
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && a !== null) {
                  (e = void 0),
                    (n = t),
                    (i = a.memoizedProps),
                    (a = a.memoizedState),
                    (r = n.stateNode);
                  try {
                    var h = Bs(n.type, i);
                    (e = r.getSnapshotBeforeUpdate(h, a)),
                      (r.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (e) {
                    Uu(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (
                    ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                  )
                    ef(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ef(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(s(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (Zc = e);
              break;
            }
            Zc = t.return;
          }
    }

    function $c(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ml(e, n), r & 4 && Fc(5, n);
          break;
        case 1:
          if ((ml(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Uu(n, n.return, e);
              }
            else {
              var i = Bs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate
                );
              } catch (e) {
                Uu(n, n.return, e);
              }
            }
          }
          r & 64 && Lc(n), r & 512 && zc(n, n.return);
          break;
        case 3:
          if ((ml(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              qa(e, t);
            } catch (e) {
              Uu(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && qc(n);
        case 26:
        case 5:
          ml(e, n), t === null && r & 4 && Vc(n), r & 512 && zc(n, n.return);
          break;
        case 12:
          ml(e, n);
          break;
        case 31:
          ml(e, n), r & 4 && al(e, n);
          break;
        case 13:
          ml(e, n),
            r & 4 && ol(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = qu.bind(null, n)), sf(e, n))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || Jc), !r)) {
            (t = (t !== null && t.memoizedState !== null) || Yc), (i = Jc);
            var a = Yc;
            (Jc = r),
              (Yc = t) && !a ? gl(e, n, !!(n.subtreeFlags & 8772)) : ml(e, n),
              (Jc = i),
              (Yc = a);
          }
          break;
        case 30:
          break;
        default:
          ml(e, n);
      }
    }

    function el(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), el(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && dt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var tl = null,
      nl = !1;

    function rl(e, t, n) {
      for (n = n.child; n !== null; ) il(e, t, n), (n = n.sibling);
    }

    function il(e, t, n) {
      if (Me && typeof Me.onCommitFiberUnmount == `function`)
        try {
          Me.onCommitFiberUnmount(V, n);
        } catch {}
      switch (n.tag) {
        case 26:
          Yc || Bc(n, t),
            rl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
          break;
        case 27:
          Yc || Bc(n, t);
          var r = tl,
            i = nl;
          Zd(n.type) && ((tl = n.stateNode), (nl = !1)),
            rl(e, t, n),
            pf(n.stateNode),
            (tl = r),
            (nl = i);
          break;
        case 5:
          Yc || Bc(n, t);
        case 6:
          if (
            ((r = tl),
            (i = nl),
            (tl = null),
            rl(e, t, n),
            (tl = r),
            (nl = i),
            tl !== null)
          ) {
            if (nl)
              try {
                (tl.nodeType === 9
                  ? tl.body
                  : tl.nodeName === `HTML`
                  ? tl.ownerDocument.body
                  : tl
                ).removeChild(n.stateNode);
              } catch (e) {
                Uu(n, t, e);
              }
            else
              try {
                tl.removeChild(n.stateNode);
              } catch (e) {
                Uu(n, t, e);
              }
          }
          break;
        case 18:
          tl !== null &&
            (nl
              ? ((e = tl),
                Qd(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e,
                  n.stateNode
                ),
                Np(e))
              : Qd(tl, n.stateNode));
          break;
        case 4:
          (r = tl),
            (i = nl),
            (tl = n.stateNode.containerInfo),
            (nl = !0),
            rl(e, t, n),
            (tl = r),
            (nl = i);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ic(2, n, t), Yc || Ic(4, n, t), rl(e, t, n);
          break;
        case 1:
          Yc ||
            (Bc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Rc(n, t, r)),
            rl(e, t, n);
          break;
        case 21:
          rl(e, t, n);
          break;
        case 22:
          (Yc = (r = Yc) || n.memoizedState !== null), rl(e, t, n), (Yc = r);
          break;
        default:
          rl(e, t, n);
      }
    }

    function al(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Np(e);
        } catch (e) {
          Uu(t, t.return, e);
        }
      }
    }

    function ol(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Np(e);
        } catch (e) {
          Uu(t, t.return, e);
        }
    }

    function sl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Xc()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new Xc()),
            t
          );
        default:
          throw Error(s(435, e.tag));
      }
    }

    function cl(e, t) {
      var n = sl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Ju.bind(null, e, t);
          t.then(r, r);
        }
      });
    }

    function ll(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = e,
            o = t,
            c = o;
          a: for (; c !== null; ) {
            switch (c.tag) {
              case 27:
                if (Zd(c.type)) {
                  (tl = c.stateNode), (nl = !1);
                  break a;
                }
                break;
              case 5:
                (tl = c.stateNode), (nl = !1);
                break a;
              case 3:
              case 4:
                (tl = c.stateNode.containerInfo), (nl = !0);
                break a;
            }
            c = c.return;
          }
          if (tl === null) throw Error(s(160));
          il(a, o, i),
            (tl = null),
            (nl = !1),
            (a = i.alternate),
            a !== null && (a.return = null),
            (i.return = null);
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; ) dl(t, e), (t = t.sibling);
    }
    var ul = null;

    function dl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ll(t, e),
            fl(e),
            r & 4 && (Ic(3, e, e.return), Fc(3, e), Ic(5, e, e.return));
          break;
        case 1:
          ll(t, e),
            fl(e),
            r & 512 && (Yc || n === null || Bc(n, n.return)),
            r & 64 &&
              Jc &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r)))));
          break;
        case 26:
          var i = ul;
          if (
            (ll(t, e),
            fl(e),
            r & 512 && (Yc || n === null || Bc(n, n.return)),
            r & 4)
          ) {
            var a = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    (r = e.type),
                      (n = e.memoizedProps),
                      (i = i.ownerDocument || i);
                    b: switch (r) {
                      case `title`:
                        (a = i.getElementsByTagName(`title`)[0]),
                          (!a ||
                            a[ut] ||
                            a[rt] ||
                            a.namespaceURI === `http://www.w3.org/2000/svg` ||
                            a.hasAttribute(`itemprop`)) &&
                            ((a = i.createElement(r)),
                            i.head.insertBefore(
                              a,
                              i.querySelector(`head > title`)
                            )),
                          Pd(a, r, n),
                          (a[rt] = e),
                          gt(a),
                          (r = a);
                        break a;
                      case `link`:
                        var o = Vf(`link`, `href`, i).get(r + (n.href || ``));
                        if (o) {
                          for (var c = 0; c < o.length; c++)
                            if (
                              ((a = o[c]),
                              a.getAttribute(`href`) ===
                                (n.href == null || n.href === ``
                                  ? null
                                  : n.href) &&
                                a.getAttribute(`rel`) ===
                                  (n.rel == null ? null : n.rel) &&
                                a.getAttribute(`title`) ===
                                  (n.title == null ? null : n.title) &&
                                a.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null
                                    ? null
                                    : n.crossOrigin))
                            ) {
                              o.splice(c, 1);
                              break b;
                            }
                        }
                        (a = i.createElement(r)),
                          Pd(a, r, n),
                          i.head.appendChild(a);
                        break;
                      case `meta`:
                        if (
                          (o = Vf(`meta`, `content`, i).get(
                            r + (n.content || ``)
                          ))
                        ) {
                          for (c = 0; c < o.length; c++)
                            if (
                              ((a = o[c]),
                              a.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                a.getAttribute(`name`) ===
                                  (n.name == null ? null : n.name) &&
                                a.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                a.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                a.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              o.splice(c, 1);
                              break b;
                            }
                        }
                        (a = i.createElement(r)),
                          Pd(a, r, n),
                          i.head.appendChild(a);
                        break;
                      default:
                        throw Error(s(468, r));
                    }
                    (a[rt] = e), gt(a), (r = a);
                  }
                  e.stateNode = r;
                } else Hf(i, e.type, e.stateNode);
              } else e.stateNode = If(i, r, e.memoizedProps);
            } else
              a === r
                ? r === null &&
                  e.stateNode !== null &&
                  Hc(e, e.memoizedProps, n.memoizedProps)
                : (a === null
                    ? n.stateNode !== null &&
                      ((n = n.stateNode), n.parentNode.removeChild(n))
                    : a.count--,
                  r === null
                    ? Hf(i, e.type, e.stateNode)
                    : If(i, r, e.memoizedProps));
          }
          break;
        case 27:
          ll(t, e),
            fl(e),
            r & 512 && (Yc || n === null || Bc(n, n.return)),
            n !== null && r & 4 && Hc(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (ll(t, e),
            fl(e),
            r & 512 && (Yc || n === null || Bc(n, n.return)),
            e.flags & 32)
          ) {
            i = e.stateNode;
            try {
              Ht(i, ``);
            } catch (t) {
              Uu(e, e.return, t);
            }
          }
          r & 4 &&
            e.stateNode != null &&
            ((i = e.memoizedProps), Hc(e, i, n === null ? i : n.memoizedProps)),
            r & 1024 && (Z = !0);
          break;
        case 6:
          if ((ll(t, e), fl(e), r & 4)) {
            if (e.stateNode === null) throw Error(s(162));
            (r = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = r;
            } catch (t) {
              Uu(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Bf = null),
            (i = ul),
            (ul = gf(t.containerInfo)),
            ll(t, e),
            (ul = i),
            fl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Np(t.containerInfo);
            } catch (t) {
              Uu(e, e.return, t);
            }
          Z && ((Z = !1), pl(e));
          break;
        case 4:
          (r = ul),
            (ul = gf(e.stateNode.containerInfo)),
            ll(t, e),
            fl(e),
            (ul = r);
          break;
        case 12:
          ll(t, e), fl(e);
          break;
        case 31:
          ll(t, e),
            fl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), cl(e, r)));
          break;
        case 13:
          ll(t, e),
            fl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (n !== null && n.memoizedState !== null) &&
              (Zl = Ce()),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), cl(e, r)));
          break;
        case 22:
          i = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = Jc,
            d = Yc;
          if (
            ((Jc = u || i),
            (Yc = d || l),
            ll(t, e),
            (Yc = d),
            (Jc = u),
            fl(e),
            r & 8192)
          )
            a: for (
              t = e.stateNode,
                t._visibility = i ? t._visibility & -2 : t._visibility | 1,
                i && (n === null || l || Jc || Yc || hl(e)),
                n = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((a = l.stateNode), i))
                      (o = a.style),
                        typeof o.setProperty == `function`
                          ? o.setProperty(`display`, `none`, `important`)
                          : (o.display = `none`);
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p =
                          f != null && f.hasOwnProperty(`display`)
                            ? f.display
                            : null;
                      c.style.display =
                        p == null || typeof p == `boolean`
                          ? ``
                          : (`` + p).trim();
                    }
                  } catch (e) {
                    Uu(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = i ? `` : l.memoizedProps;
                  } catch (e) {
                    Uu(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    i ? $d(m, !0) : $d(l.stateNode, !1);
                  } catch (e) {
                    Uu(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break a;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null &&
              ((n = r.retryQueue),
              n !== null && ((r.retryQueue = null), cl(e, n))));
          break;
        case 19:
          ll(t, e),
            fl(e),
            r & 4 &&
              ((r = e.updateQueue),
              r !== null && ((e.updateQueue = null), cl(e, r)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ll(t, e), fl(e);
      }
    }

    function fl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null; ) {
            if (Uc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(s(160));
          switch (n.tag) {
            case 27:
              var i = n.stateNode;
              Kc(e, Wc(e), i);
              break;
            case 5:
              var a = n.stateNode;
              n.flags & 32 && (Ht(a, ``), (n.flags &= -33)), Kc(e, Wc(e), a);
              break;
            case 3:
            case 4:
              var o = n.stateNode.containerInfo;
              Gc(e, Wc(e), o);
              break;
            default:
              throw Error(s(161));
          }
        } catch (t) {
          Uu(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }

    function pl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          pl(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }

    function ml(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) $c(e, t.alternate, t), (t = t.sibling);
    }

    function hl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ic(4, t, t.return), hl(t);
            break;
          case 1:
            Bc(t, t.return);
            var n = t.stateNode;
            typeof n.componentWillUnmount == `function` && Rc(t, t.return, n),
              hl(t);
            break;
          case 27:
            pf(t.stateNode);
          case 26:
          case 5:
            Bc(t, t.return), hl(t);
            break;
          case 22:
            t.memoizedState === null && hl(t);
            break;
          case 30:
            hl(t);
            break;
          default:
            hl(t);
        }
        e = e.sibling;
      }
    }

    function gl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null; ) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            gl(i, a, n), Fc(4, a);
            break;
          case 1:
            if (
              (gl(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Uu(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < c.length;
                    i++
                  )
                    Ka(c[i], s);
              } catch (e) {
                Uu(r, r.return, e);
              }
            }
            n && o & 64 && Lc(a), zc(a, a.return);
            break;
          case 27:
            qc(a);
          case 26:
          case 5:
            gl(i, a, n), n && r === null && o & 4 && Vc(a), zc(a, a.return);
            break;
          case 12:
            gl(i, a, n);
            break;
          case 31:
            gl(i, a, n), n && o & 4 && al(i, a);
            break;
          case 13:
            gl(i, a, n), n && o & 4 && ol(i, a);
            break;
          case 22:
            a.memoizedState === null && gl(i, a, n), zc(a, a.return);
            break;
          case 30:
            break;
          default:
            gl(i, a, n);
        }
        t = t.sibling;
      }
    }

    function _l(e, t) {
      var n = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && aa(n));
    }

    function vl(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && aa(e));
    }

    function yl(e, t, n, r) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) bl(e, t, n, r), (t = t.sibling);
    }

    function bl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          yl(e, t, n, r), i & 2048 && Fc(9, t);
          break;
        case 1:
          yl(e, t, n, r);
          break;
        case 3:
          yl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && aa(e)));
          break;
        case 12:
          if (i & 2048) {
            yl(e, t, n, r), (e = t.stateNode);
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(
                  o,
                  t.alternate === null ? `mount` : `update`,
                  e.passiveEffectDuration,
                  -0
                );
            } catch (e) {
              Uu(t, t.return, e);
            }
          } else yl(e, t, n, r);
          break;
        case 31:
          yl(e, t, n, r);
          break;
        case 13:
          yl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? yl(e, t, n, r)
                : ((a._visibility |= 2),
                  xl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
              ? yl(e, t, n, r)
              : Sl(e, t),
            i & 2048 && _l(o, t);
          break;
        case 24:
          yl(e, t, n, r), i & 2048 && vl(t.alternate, t);
          break;
        default:
          yl(e, t, n, r);
      }
    }

    function xl(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null; ) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            xl(a, o, s, c, i), Fc(8, o);
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            o.memoizedState === null
              ? ((u._visibility |= 2), xl(a, o, s, c, i))
              : u._visibility & 2
              ? xl(a, o, s, c, i)
              : Sl(a, o),
              i && l & 2048 && _l(o.alternate, o);
            break;
          case 24:
            xl(a, o, s, c, i), i && l & 2048 && vl(o.alternate, o);
            break;
          default:
            xl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }

    function Sl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              Sl(n, r), i & 2048 && _l(r.alternate, r);
              break;
            case 24:
              Sl(n, r), i & 2048 && vl(r.alternate, r);
              break;
            default:
              Sl(n, r);
          }
          t = t.sibling;
        }
    }
    var Cl = 8192;

    function wl(e, t, n) {
      if (e.subtreeFlags & Cl)
        for (e = e.child; e !== null; ) Tl(e, t, n), (e = e.sibling);
    }

    function Tl(e, t, n) {
      switch (e.tag) {
        case 26:
          wl(e, t, n),
            e.flags & Cl &&
              e.memoizedState !== null &&
              Gf(n, ul, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          wl(e, t, n);
          break;
        case 3:
        case 4:
          var r = ul;
          (ul = gf(e.stateNode.containerInfo)), wl(e, t, n), (ul = r);
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Cl), (Cl = 16777216), wl(e, t, n), (Cl = r))
              : wl(e, t, n));
          break;
        default:
          wl(e, t, n);
      }
    }

    function El(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }

    function Dl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (Zc = r), Al(r, e);
          }
        El(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) Ol(e), (e = e.sibling);
    }

    function Ol(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Dl(e), e.flags & 2048 && Ic(9, e, e.return);
          break;
        case 3:
          Dl(e);
          break;
        case 12:
          Dl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), kl(e))
            : Dl(e);
          break;
        default:
          Dl(e);
      }
    }

    function kl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (Zc = r), Al(r, e);
          }
        El(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Ic(8, t, t.return), kl(t);
            break;
          case 22:
            (n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), kl(t));
            break;
          default:
            kl(t);
        }
        e = e.sibling;
      }
    }

    function Al(e, t) {
      for (; Zc !== null; ) {
        var n = Zc;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Ic(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            aa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) (r.return = n), (Zc = r);
        else
          a: for (n = e; Zc !== null; ) {
            r = Zc;
            var i = r.sibling,
              a = r.return;
            if ((el(r), r === n)) {
              Zc = null;
              break a;
            }
            if (i !== null) {
              (i.return = a), (Zc = i);
              break a;
            }
            Zc = a;
          }
      }
    }
    var jl = {
        getCacheForType: function (e) {
          var t = Zi(ra),
            n = t.data.get(e);
          return n === void 0 && ((n = e()), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return Zi(ra).controller.signal;
        },
      },
      Ml = typeof WeakMap == `function` ? WeakMap : Map,
      Nl = 0,
      Pl = null,
      Q = null,
      Fl = 0,
      Il = 0,
      Ll = null,
      Rl = !1,
      zl = !1,
      Bl = !1,
      Vl = 0,
      Hl = 0,
      Ul = 0,
      Wl = 0,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = null,
      Yl = null,
      Xl = !1,
      Zl = 0,
      Ql = 0,
      $l = 1 / 0,
      eu = null,
      tu = null,
      nu = 0,
      ru = null,
      iu = null,
      au = 0,
      ou = 0,
      su = null,
      cu = null,
      lu = 0,
      uu = null;

    function du() {
      return Nl & 2 && Fl !== 0 ? Fl & -Fl : F.T === null ? et() : ud();
    }

    function fu() {
      if (Kl === 0) {
        if (!(Fl & 536870912) || U) {
          var e = ze;
          (ze <<= 1), !(ze & 3932160) && (ze = 262144), (Kl = e);
        } else Kl = 536870912;
      }
      return (e = $a.current), e !== null && (e.flags |= 32), Kl;
    }

    function pu(e, t, n) {
      ((e === Pl && (Il === 2 || Il === 9)) ||
        e.cancelPendingCommit !== null) &&
        (bu(e, 0), _u(e, Fl, Kl, !1)),
        qe(e, n),
        (!(Nl & 2) || e !== Pl) &&
          (e === Pl && (!(Nl & 2) && (Wl |= n), Hl === 4 && _u(e, Fl, Kl, !1)),
          nd(e));
    }

    function mu(e, t, n) {
      if (Nl & 6) throw Error(s(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Ue(e, t),
        i = r ? Ou(e, t) : Eu(e, t, !0),
        a = r;
      do {
        if (i === 0) {
          zl && !r && _u(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), a && !gu(n))) {
          (i = Eu(e, t, !1)), (a = !1);
          continue;
        }
        if (i === 2) {
          if (((a = t), e.errorRecoveryDisabledLanes & a)) var o = 0;
          else
            (o = e.pendingLanes & -536870913),
              (o = o === 0 ? (o & 536870912 ? 536870912 : 0) : o);
          if (o !== 0) {
            t = o;
            a: {
              var c = e;
              i = Jl;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (bu(c, o).flags |= 256), (o = Eu(c, o, !1)), o !== 2)) {
                if (Bl && !l) {
                  (c.errorRecoveryDisabledLanes |= a), (Wl |= a), (i = 4);
                  break a;
                }
                (a = Yl),
                  (Yl = i),
                  a !== null && (Yl === null ? (Yl = a) : Yl.push.apply(Yl, a));
              }
              i = o;
            }
            if (((a = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          bu(e, 0), _u(e, t, 0, !0);
          break;
        }
        a: {
          switch (((r = e), (a = i), a)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              _u(r, t, Kl, !Rl);
              break a;
            case 2:
              Yl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((i = Zl + 300 - Ce()), 10 < i)) {
            if ((_u(r, t, Kl, !Rl), He(r, 0, !0) !== 0)) break a;
            (au = t),
              (r.timeoutHandle = Kd(
                hu.bind(
                  null,
                  r,
                  n,
                  Yl,
                  eu,
                  Xl,
                  t,
                  Kl,
                  Wl,
                  ql,
                  Rl,
                  a,
                  `Throttled`,
                  -0,
                  0
                ),
                i
              ));
            break a;
          }
          hu(r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, a, null, -0, 0);
        }
        break;
      } while (1);
      nd(e);
    }

    function hu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (
        ((e.timeoutHandle = -1),
        (d = t.subtreeFlags),
        d & 8192 || (d & 16785408) == 16785408)
      ) {
        (d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Xt,
        }),
          Tl(t, a, d);
        var m =
          (a & 62914560) === a
            ? Zl - Ce()
            : (a & 4194048) === a
            ? Ql - Ce()
            : 0;
        if (((m = qf(d, m)), m !== null)) {
          (au = a),
            (e.cancelPendingCommit = m(
              Fu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)
            )),
            _u(e, a, o, !l);
          return;
        }
      }
      Fu(e, t, a, n, r, i, o, s, c);
    }

    function gu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!vr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }

    function _u(e, t, n, r) {
      (t &= ~Gl),
        (t &= ~Wl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var i = t; 0 < i; ) {
        var a = 31 - Pe(i),
          o = 1 << a;
        (r[a] = -1), (i &= ~o);
      }
      n !== 0 && Ye(e, n, t);
    }

    function vu() {
      return Nl & 6 ? !0 : (rd(0, !1), !1);
    }

    function yu() {
      if (Q !== null) {
        if (Il === 0) var e = Q.return;
        else (e = Q), (Ui = Hi = null), wo(e), (Oa = null), (ka = 0), (e = Q);
        for (; e !== null; ) Pc(e.alternate, e), (e = e.return);
        Q = null;
      }
    }

    function bu(e, t) {
      var n = e.timeoutHandle;
      n !== -1 && ((e.timeoutHandle = -1), qd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (au = 0),
        yu(),
        (Pl = e),
        (Q = n = oi(e.current, null)),
        (Fl = t),
        (Il = 0),
        (Ll = null),
        (Rl = !1),
        (zl = Ue(e, t)),
        (Bl = !1),
        (ql = Kl = Gl = Wl = Ul = Hl = 0),
        (Yl = Jl = null),
        (Xl = !1),
        t & 8 && (t |= t & 32);
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var i = 31 - Pe(r),
            a = 1 << i;
          (t |= e[i]), (r &= ~a);
        }
      return (Vl = t), Xr(), n;
    }

    function xu(e, t) {
      (G = null),
        (F.H = Ms),
        t === va || t === ba
          ? ((t = Ea()), (Il = 3))
          : t === ya
          ? ((t = Ea()), (Il = 4))
          : (Il =
              t === Xs
                ? 8
                : typeof t == `object` && t && typeof t.then == `function`
                ? 6
                : 1),
        (Ll = t),
        Q === null && ((Hl = 1), Ws(e, mi(t, e.current)));
    }

    function Su() {
      var e = $a.current;
      return e === null
        ? !0
        : (Fl & 4194048) === Fl
        ? eo === null
        : (Fl & 62914560) === Fl || Fl & 536870912
        ? e === eo
        : !1;
    }

    function Cu() {
      var e = F.H;
      return (F.H = Ms), e === null ? Ms : e;
    }

    function wu() {
      var e = F.A;
      return (F.A = jl), e;
    }

    function Tu() {
      (Hl = 4),
        Rl || ((Fl & 4194048) !== Fl && $a.current !== null) || (zl = !0),
        (!(Ul & 134217727) && !(Wl & 134217727)) ||
          Pl === null ||
          _u(Pl, Fl, Kl, !1);
    }

    function Eu(e, t, n) {
      var r = Nl;
      Nl |= 2;
      var i = Cu(),
        a = wu();
      (Pl !== e || Fl !== t) && ((eu = null), bu(e, t)), (t = !1);
      var o = Hl;
      a: do
        try {
          if (Il !== 0 && Q !== null) {
            var s = Q,
              c = Ll;
            switch (Il) {
              case 8:
                yu(), (o = 6);
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                $a.current === null && (t = !0);
                var l = Il;
                if (((Il = 0), (Ll = null), Mu(e, s, c, l), n && zl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                (l = Il), (Il = 0), (Ll = null), Mu(e, s, c, l);
            }
          }
          Du(), (o = Hl);
          break;
        } catch (t) {
          xu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Ui = Hi = null),
        (Nl = r),
        (F.H = i),
        (F.A = a),
        Q === null && ((Pl = null), (Fl = 0), Xr()),
        o
      );
    }

    function Du() {
      for (; Q !== null; ) Au(Q);
    }

    function Ou(e, t) {
      var n = Nl;
      Nl |= 2;
      var r = Cu(),
        i = wu();
      Pl !== e || Fl !== t
        ? ((eu = null), ($l = Ce() + 500), bu(e, t))
        : (zl = Ue(e, t));
      a: do
        try {
          if (Il !== 0 && Q !== null) {
            t = Q;
            var a = Ll;
            b: switch (Il) {
              case 1:
                (Il = 0), (Ll = null), Mu(e, t, a, 1);
                break;
              case 2:
              case 9:
                if (Sa(a)) {
                  (Il = 0), (Ll = null), ju(t);
                  break;
                }
                (t = function () {
                  (Il !== 2 && Il !== 9) || Pl !== e || (Il = 7), nd(e);
                }),
                  a.then(t, t);
                break a;
              case 3:
                Il = 7;
                break a;
              case 4:
                Il = 5;
                break a;
              case 7:
                Sa(a)
                  ? ((Il = 0), (Ll = null), ju(t))
                  : ((Il = 0), (Ll = null), Mu(e, t, a, 7));
                break;
              case 5:
                var o = null;
                switch (Q.tag) {
                  case 26:
                    o = Q.memoizedState;
                  case 5:
                  case 27:
                    var c = Q;
                    if (o ? Wf(o) : c.stateNode.complete) {
                      (Il = 0), (Ll = null);
                      var l = c.sibling;
                      if (l !== null) Q = l;
                      else {
                        var u = c.return;
                        u === null ? (Q = null) : ((Q = u), Nu(u));
                      }
                      break b;
                    }
                }
                (Il = 0), (Ll = null), Mu(e, t, a, 5);
                break;
              case 6:
                (Il = 0), (Ll = null), Mu(e, t, a, 6);
                break;
              case 8:
                yu(), (Hl = 6);
                break a;
              default:
                throw Error(s(462));
            }
          }
          ku();
          break;
        } catch (t) {
          xu(e, t);
        }
      while (1);
      return (
        (Ui = Hi = null),
        (F.H = r),
        (F.A = i),
        (Nl = n),
        Q === null ? ((Pl = null), (Fl = 0), Xr(), Hl) : 0
      );
    }

    function ku() {
      for (; Q !== null && !xe(); ) Au(Q);
    }

    function Au(e) {
      var t = Tc(e.alternate, e, Vl);
      (e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (Q = t);
    }

    function ju(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = lc(n, t, t.pendingProps, t.type, void 0, Fl);
          break;
        case 11:
          t = lc(n, t, t.pendingProps, t.type.render, t.ref, Fl);
          break;
        case 5:
          wo(t);
        default:
          Pc(n, t), (t = Q = si(t, Vl)), (t = Tc(n, t, Vl));
      }
      (e.memoizedProps = e.pendingProps), t === null ? Nu(e) : (Q = t);
    }

    function Mu(e, t, n, r) {
      (Ui = Hi = null), wo(t), (Oa = null), (ka = 0);
      var i = t.return;
      try {
        if (Ys(e, i, t, n, Fl)) {
          (Hl = 1), Ws(e, mi(n, e.current)), (Q = null);
          return;
        }
      } catch (t) {
        if (i !== null) throw ((Q = i), t);
        (Hl = 1), Ws(e, mi(n, e.current)), (Q = null);
        return;
      }
      t.flags & 32768
        ? (U || r === 1
            ? (e = !0)
            : zl || Fl & 536870912
            ? (e = !1)
            : ((Rl = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = $a.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
          Pu(t, e))
        : Nu(t);
    }

    function Nu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Pu(t, Rl);
          return;
        }
        e = t.return;
        var n = Mc(t.alternate, t, Vl);
        if (n !== null) {
          Q = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Q = t;
          return;
        }
        Q = t = e;
      } while (t !== null);
      Hl === 0 && (Hl = 5);
    }

    function Pu(e, t) {
      do {
        var n = Nc(e.alternate, e);
        if (n !== null) {
          (n.flags &= 32767), (Q = n);
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          Q = e;
          return;
        }
        Q = e = n;
      } while (e !== null);
      (Hl = 6), (Q = null);
    }

    function Fu(e, t, n, r, i, a, o, c, l) {
      e.cancelPendingCommit = null;
      do Bu();
      while (nu !== 0);
      if (Nl & 6) throw Error(s(327));
      if (t !== null) {
        if (t === e.current) throw Error(s(177));
        if (
          ((a = t.lanes | t.childLanes),
          (a |= Yr),
          Je(e, n, a, o, c, l),
          e === Pl && ((Q = Pl = null), (Fl = 0)),
          (iu = t),
          (ru = e),
          (au = n),
          (ou = a),
          (su = i),
          (cu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              Yu(De, function () {
                return Vu(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          (r = F.T), (F.T = null), (i = I.p), (I.p = 2), (o = Nl), (Nl |= 4);
          try {
            Qc(e, t, n);
          } finally {
            (Nl = o), (I.p = i), (F.T = r);
          }
        }
        (nu = 1), Iu(), Lu(), Ru();
      }
    }

    function Iu() {
      if (nu === 1) {
        nu = 0;
        var e = ru,
          t = iu,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          (n = F.T), (F.T = null);
          var r = I.p;
          I.p = 2;
          var i = Nl;
          Nl |= 4;
          try {
            dl(t, e);
            var a = zd,
              o = Cr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Sr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && wr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  (s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = xr(s, h),
                      v = xr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode); )
                p.nodeType === 1 &&
                  d.push({
                    element: p,
                    left: p.scrollLeft,
                    top: p.scrollTop,
                  });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                (b.element.scrollLeft = b.left), (b.element.scrollTop = b.top);
              }
            }
            (sp = !!Rd), (zd = Rd = null);
          } finally {
            (Nl = i), (I.p = r), (F.T = n);
          }
        }
        (e.current = t), (nu = 2);
      }
    }

    function Lu() {
      if (nu === 2) {
        nu = 0;
        var e = ru,
          t = iu,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          (n = F.T), (F.T = null);
          var r = I.p;
          I.p = 2;
          var i = Nl;
          Nl |= 4;
          try {
            $c(e, t.alternate, t);
          } finally {
            (Nl = i), (I.p = r), (F.T = n);
          }
        }
        nu = 3;
      }
    }

    function Ru() {
      if (nu === 4 || nu === 3) {
        (nu = 0), Se();
        var e = ru,
          t = iu,
          n = au,
          r = cu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (nu = 5)
          : ((nu = 0), (iu = ru = null), zu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (tu = null),
          $e(n),
          (t = t.stateNode),
          Me && typeof Me.onCommitFiberRoot == `function`)
        )
          try {
            Me.onCommitFiberRoot(V, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          (t = F.T), (i = I.p), (I.p = 2), (F.T = null);
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, {
                componentStack: s.stack,
              });
            }
          } finally {
            (F.T = t), (I.p = i);
          }
        }
        au & 3 && Bu(),
          nd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42
            ? e === uu
              ? lu++
              : ((lu = 0), (uu = e))
            : (lu = 0),
          rd(0, !1);
      }
    }

    function zu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), aa(t)));
    }

    function Bu() {
      return Iu(), Lu(), Ru(), Vu();
    }

    function Vu() {
      if (nu !== 5) return !1;
      var e = ru,
        t = ou;
      ou = 0;
      var n = $e(au),
        r = F.T,
        i = I.p;
      try {
        (I.p = 32 > n ? 32 : n), (F.T = null), (n = su), (su = null);
        var a = ru,
          o = au;
        if (((nu = 0), (iu = ru = null), (au = 0), Nl & 6)) throw Error(s(331));
        var c = Nl;
        if (
          ((Nl |= 4),
          Ol(a.current),
          bl(a, a.current, o, n),
          (Nl = c),
          rd(0, !1),
          Me && typeof Me.onPostCommitFiberRoot == `function`)
        )
          try {
            Me.onPostCommitFiberRoot(V, a);
          } catch {}
        return !0;
      } finally {
        (I.p = i), (F.T = r), zu(e, t);
      }
    }

    function Hu(e, t, n) {
      (t = mi(n, t)),
        (t = Ks(e.stateNode, t, 2)),
        (e = Ba(e, t, 2)),
        e !== null && (qe(e, 2), nd(e));
    }

    function Uu(e, t, n) {
      if (e.tag === 3) Hu(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Hu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (tu === null || !tu.has(r)))
            ) {
              (e = mi(n, e)),
                (n = qs(2)),
                (r = Ba(t, n, 2)),
                r !== null && (Js(n, r, t, e), qe(r, 2), nd(r));
              break;
            }
          }
          t = t.return;
        }
    }

    function Wu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Ml();
        var i = new Set();
        r.set(t, i);
      } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
      i.has(n) ||
        ((Bl = !0), i.add(n), (e = Gu.bind(null, e, t, n)), t.then(e, e));
    }

    function Gu(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        Pl === e &&
          (Fl & n) === n &&
          (Hl === 4 || (Hl === 3 && (Fl & 62914560) === Fl && 300 > Ce() - Zl)
            ? !(Nl & 2) && bu(e, 0)
            : (Gl |= n),
          ql === Fl && (ql = 0)),
        nd(e);
    }

    function Ku(e, t) {
      t === 0 && (t = Ge()), (e = $r(e, t)), e !== null && (qe(e, t), nd(e));
    }

    function qu(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane), Ku(e, n);
    }

    function Ju(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            i = e.memoizedState;
          i !== null && (n = i.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      r !== null && r.delete(t), Ku(e, n);
    }

    function Yu(e, t) {
      return B(e, t);
    }
    var Xu = null,
      Zu = null,
      Qu = !1,
      $u = !1,
      ed = !1,
      td = 0;

    function nd(e) {
      e !== Zu &&
        e.next === null &&
        (Zu === null ? (Xu = Zu = e) : (Zu = Zu.next = e)),
        ($u = !0),
        Qu || ((Qu = !0), ld());
    }

    function rd(e, t) {
      if (!ed && $u) {
        ed = !0;
        do
          for (var n = !1, r = Xu; r !== null; ) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  (a = (1 << (31 - Pe(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0);
                }
                a !== 0 && ((n = !0), cd(r, a));
              } else
                (a = Fl),
                  (a = He(
                    r,
                    r === Pl ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1
                  )),
                  !(a & 3) || Ue(r, a) || ((n = !0), cd(r, a));
            }
            r = r.next;
          }
        while (n);
        ed = !1;
      }
    }

    function id() {
      ad();
    }

    function ad() {
      $u = Qu = !1;
      var e = 0;
      td !== 0 && Gd() && (e = td);
      for (var t = Ce(), n = null, r = Xu; r !== null; ) {
        var i = r.next,
          a = od(r, t);
        a === 0
          ? ((r.next = null),
            n === null ? (Xu = i) : (n.next = i),
            i === null && (Zu = n))
          : ((n = r), (e !== 0 || a & 3) && ($u = !0)),
          (r = i);
      }
      (nu !== 0 && nu !== 5) || rd(e, !1), td !== 0 && (td = 0);
    }

    function od(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;

      ) {
        var o = 31 - Pe(a),
          s = 1 << o,
          c = i[o];
        c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = We(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s);
      }
      if (
        ((t = Pl),
        (n = Fl),
        (n = He(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (Il === 2 || Il === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && be(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || Ue(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && be(r), $e(n))) {
          case 2:
          case 8:
            n = Ee;
            break;
          case 32:
            n = De;
            break;
          case 268435456:
            n = ke;
            break;
          default:
            n = De;
        }
        return (
          (r = sd.bind(null, e)),
          (n = B(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && be(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }

    function sd(e, t) {
      if (nu !== 0 && nu !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (Bu() && e.callbackNode !== n) return null;
      var r = Fl;
      return (
        (r = He(
          e,
          e === Pl ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1
        )),
        r === 0
          ? null
          : (mu(e, r, t),
            od(e, Ce()),
            e.callbackNode != null && e.callbackNode === n
              ? sd.bind(null, e)
              : null)
      );
    }

    function cd(e, t) {
      if (Bu()) return null;
      mu(e, t, !0);
    }

    function ld() {
      Yd(function () {
        Nl & 6 ? B(Te, id) : ad();
      });
    }

    function ud() {
      if (td === 0) {
        var e = ca;
        e === 0 && ((e = Re), (Re <<= 1), !(Re & 261888) && (Re = 256)),
          (td = e);
      }
      return td;
    }

    function dd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
        ? e
        : Yt(`` + e);
    }

    function fd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }

    function pd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = dd((i[it] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[it] || null)
            ? dd(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new vn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (td !== 0) {
                    var e = o ? fd(i, o) : new FormData(i);
                    vs(
                      n,
                      {
                        pending: !0,
                        data: e,
                        method: i.method,
                        action: a,
                      },
                      null,
                      e
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? fd(i, o) : new FormData(i)),
                    vs(
                      n,
                      {
                        pending: !0,
                        data: e,
                        method: i.method,
                        action: a,
                      },
                      a,
                      e
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var md = 0; md < Wr.length; md++) {
      var hd = Wr[md];
      Gr(hd.toLowerCase(), `on` + (hd[0].toUpperCase() + hd.slice(1)));
    }
    Gr(Ir, `onAnimationEnd`),
      Gr(Lr, `onAnimationIteration`),
      Gr(Rr, `onAnimationStart`),
      Gr(`dblclick`, `onDoubleClick`),
      Gr(`focusin`, `onFocus`),
      Gr(`focusout`, `onBlur`),
      Gr(zr, `onTransitionRun`),
      Gr(Br, `onTransitionStart`),
      Gr(Vr, `onTransitionCancel`),
      Gr(Hr, `onTransitionEnd`),
      bt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      bt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      bt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      bt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      yt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `
        )
      ),
      yt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `
        )
      ),
      yt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      yt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `)
      ),
      yt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `)
      ),
      yt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)
      );
    var gd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `
        ),
      _d = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(gd)
      );

    function vd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                Kr(e);
              }
              (i.currentTarget = null), (a = c);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (a = s), (i.currentTarget = l);
              try {
                a(i);
              } catch (e) {
                Kr(e);
              }
              (i.currentTarget = null), (a = c);
            }
        }
      }
    }

    function $(e, t) {
      var n = t[ot];
      n === void 0 && (n = t[ot] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Sd(t, e, 2, !1), n.add(r));
    }

    function yd(e, t, n) {
      var r = 0;
      t && (r |= 4), Sd(n, e, r, t);
    }
    var bd = `_reactListening` + Math.random().toString(36).slice(2);

    function xd(e) {
      if (!e[bd]) {
        (e[bd] = !0),
          _t.forEach(function (t) {
            t !== `selectionchange` &&
              (_d.has(t) || yd(t, !1, e), yd(t, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bd] || ((t[bd] = !0), yd(`selectionchange`, !1, t));
      }
    }

    function Sd(e, t, n, r) {
      switch (mp(t)) {
        case 2:
          var i = cp;
          break;
        case 8:
          i = lp;
          break;
        default:
          i = up;
      }
      (n = i.bind(null, t, n, e)),
        (i = void 0),
        !sn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, {
                capture: !0,
                passive: i,
              })
          : i === void 0
          ? e.addEventListener(t, n, !1)
          : e.addEventListener(t, n, {
              passive: i,
            });
    }

    function Cd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var c = o.tag;
                if ((c === 3 || c === 4) && o.stateNode.containerInfo === i)
                  return;
                o = o.return;
              }
            for (; s !== null; ) {
              if (((o = ft(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      rn(function () {
        var r = a,
          i = Qt(n),
          o = [];
        a: {
          var s = Ur.get(e);
          if (s !== void 0) {
            var c = vn,
              u = e;
            switch (e) {
              case `keypress`:
                if (pn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = In;
                break;
              case `focusin`:
                (u = `focus`), (c = Dn);
                break;
              case `focusout`:
                (u = `blur`), (c = Dn);
                break;
              case `beforeblur`:
              case `afterblur`:
                c = Dn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Tn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = En;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = Rn;
                break;
              case Ir:
              case Lr:
              case Rr:
                c = On;
                break;
              case Hr:
                c = zn;
                break;
              case `scroll`:
              case `scrollend`:
                c = bn;
                break;
              case `wheel`:
                c = Bn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = kn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = Ln;
                break;
              case `toggle`:
              case `beforetoggle`:
                c = Vn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (s === null ? null : s + `Capture`) : s;
            d = [];
            for (var m = r, h; m !== null; ) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = an(m, p)), g != null && d.push(wd(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((s = new c(s, u, null, n, i)),
              o.push({
                event: s,
                listeners: d,
              }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s &&
                n !== Zt &&
                (u = n.relatedTarget || n.fromElement) &&
                (ft(u) || u[at]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                  ? s.defaultView || s.parentWindow
                  : window),
              c
                ? ((u = n.relatedTarget || n.toElement),
                  (c = r),
                  (u = u ? ft(u) : null),
                  u !== null &&
                    ((f = l(u)),
                    (d = u.tag),
                    u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((c = null), (u = r)),
              c !== u)
            ) {
              if (
                ((d = Tn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Ln),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = c == null ? s : mt(c)),
                (h = u == null ? s : mt(u)),
                (s = new d(g, m + `leave`, c, n, i)),
                (s.target = f),
                (s.relatedTarget = h),
                (g = null),
                ft(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                c && u)
              )
                b: {
                  for (d = Ed, p = c, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g; ) (p = d(p)), h--;
                  for (; 0 < g - h; ) (m = d(m)), g--;
                  for (; h--; ) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    (p = d(p)), (m = d(m));
                  }
                  d = null;
                }
              else d = null;
              c !== null && Dd(o, s, c, d, !1),
                u !== null && f !== null && Dd(o, f, u, d, !0);
            }
          }
          a: {
            if (
              ((s = r ? mt(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var v = sr;
            else if (tr(s)) {
              if (cr) v = gr;
              else {
                v = mr;
                var y = H;
              }
            } else
              (c = s.nodeName),
                !c ||
                c.toLowerCase() !== `input` ||
                (s.type !== `checkbox` && s.type !== `radio`)
                  ? r && Kt(r.elementType) && (v = sr)
                  : (v = hr);
            if ((v &&= v(e, r))) {
              nr(o, v, n, i);
              break a;
            }
            y && y(e, s, r),
              e === `focusout` &&
                r &&
                s.type === `number` &&
                r.memoizedProps.value != null &&
                Rt(s, `number`, s.value);
          }
          switch (((y = r ? mt(r) : window), e)) {
            case `focusin`:
              (tr(y) || y.contentEditable === `true`) &&
                ((Er = y), (Dr = r), (Or = null));
              break;
            case `focusout`:
              Or = Dr = Er = null;
              break;
            case `mousedown`:
              kr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              (kr = !1), Ar(o, n, i);
              break;
            case `selectionchange`:
              if (Tr) break;
            case `keydown`:
            case `keyup`:
              Ar(o, n, i);
          }
          var b;
          if (Un)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            Zn
              ? Yn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (x = `onCompositionStart`);
          x &&
            (Kn &&
              n.locale !== `ko` &&
              (Zn || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && Zn && (b = fn())
                : ((ln = i),
                  (un = `value` in ln ? ln.value : ln.textContent),
                  (Zn = !0))),
            (y = Td(r, x)),
            0 < y.length &&
              ((x = new An(x, e, null, n, i)),
              o.push({
                event: x,
                listeners: y,
              }),
              b ? (x.data = b) : ((b = Xn(n)), b !== null && (x.data = b)))),
            (b = Gn ? Qn(e, n) : $n(e, n)) &&
              ((x = Td(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new An(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({
                  event: y,
                  listeners: x,
                }),
                (y.data = b))),
            pd(o, e, r, n, i);
        }
        vd(o, t);
      });
    }

    function wd(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n,
      };
    }

    function Td(e, t) {
      for (var n = t + `Capture`, r = []; e !== null; ) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = an(e, n)),
            i != null && r.unshift(wd(e, i, a)),
            (i = an(e, t)),
            i != null && r.push(wd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }

    function Ed(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }

    function Dd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        (s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = an(n, a)), l != null && o.unshift(wd(n, l, c)))
            : i || ((l = an(n, a)), l != null && o.push(wd(n, l, c)))),
          (n = n.return);
      }
      o.length !== 0 &&
        e.push({
          event: t,
          listeners: o,
        });
    }
    var Od = /\r\n?/g,
      kd = /\u0000|\uFFFD/g;

    function Ad(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Od,
          `
`
        )
        .replace(kd, ``);
    }

    function jd(e, t) {
      return (t = Ad(t)), Ad(e) === t;
    }

    function Md(e, t, n, r, i, a) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Ht(e, r)
            : (typeof r == `number` || typeof r == `bigint`) &&
              t !== `body` &&
              Ht(e, `` + r);
          break;
        case `className`:
          Et(e, `class`, r);
          break;
        case `tabIndex`:
          Et(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Et(e, n, r);
          break;
        case `style`:
          Gt(e, r, a);
          break;
        case `data`:
          if (t !== `object`) {
            Et(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = Yt(`` + r)), e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`
            );
            break;
          }
          if (
            (typeof a == `function` &&
              (n === `formAction`
                ? (t !== `input` && Md(e, t, `name`, i.name, i, null),
                  Md(e, t, `formEncType`, i.formEncType, i, null),
                  Md(e, t, `formMethod`, i.formMethod, i, null),
                  Md(e, t, `formTarget`, i.formTarget, i, null))
                : (Md(e, t, `encType`, i.encType, i, null),
                  Md(e, t, `method`, i.method, i, null),
                  Md(e, t, `target`, i.target, i, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          (r = Yt(`` + r)), e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = Xt);
          break;
        case `onScroll`:
          r != null && $(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && $(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(s(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(s(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          (n = Yt(`` + r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
              r != null &&
              typeof r != `function` &&
              typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          $(`beforetoggle`, e), $(`toggle`, e), Tt(e, `popover`, r);
          break;
        case `xlinkActuate`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Dt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Dt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Dt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Dt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Tt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = qt.get(n) || n), Tt(e, n, r));
      }
    }

    function Nd(e, t, n, r, i, a) {
      switch (n) {
        case `style`:
          Gt(e, r, a);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(s(61));
            if (((n = r.__html), n != null)) {
              if (i.children != null) throw Error(s(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string`
            ? Ht(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Ht(e, `` + r);
          break;
        case `onScroll`:
          r != null && $(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && $(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = Xt);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!vt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((i = n.endsWith(`Capture`)),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                (a = e[it] || null),
                (a = a == null ? null : a[n]),
                typeof a == `function` && e.removeEventListener(t, a, i),
                typeof r == `function`)
              ) {
                typeof a != `function` &&
                  a !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, i);
                break a;
              }
              n in e
                ? (e[n] = r)
                : !0 === r
                ? e.setAttribute(n, ``)
                : Tt(e, n, r);
            }
      }
    }

    function Pd(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          $(`error`, e), $(`load`, e);
          var r = !1,
            i = !1,
            a;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var o = n[a];
              if (o != null)
                switch (a) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    i = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(s(137, t));
                  default:
                    Md(e, t, a, o, n, null);
                }
            }
          i && Md(e, t, `srcSet`, n.srcSet, n, null),
            r && Md(e, t, `src`, n.src, n, null);
          return;
        case `input`:
          $(`invalid`, e);
          var c = (a = o = i = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    i = d;
                    break;
                  case `type`:
                    o = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    a = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(s(137, t));
                    break;
                  default:
                    Md(e, t, r, d, n, null);
                }
            }
          Lt(e, a, c, l, u, o, i, !1);
          return;
        case `select`:
          for (i in ($(`invalid`, e), (r = o = a = null), n))
            if (n.hasOwnProperty(i) && ((c = n[i]), c != null))
              switch (i) {
                case `value`:
                  a = c;
                  break;
                case `defaultValue`:
                  o = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  Md(e, t, i, c, n, null);
              }
          (t = a),
            (n = o),
            (e.multiple = !!r),
            t == null ? n != null && zt(e, !!r, n, !0) : zt(e, !!r, t, !1);
          return;
        case `textarea`:
          for (o in ($(`invalid`, e), (a = i = r = null), n))
            if (n.hasOwnProperty(o) && ((c = n[o]), c != null))
              switch (o) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  i = c;
                  break;
                case `children`:
                  a = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(s(91));
                  break;
                default:
                  Md(e, t, o, c, n, null);
              }
          Vt(e, r, i, a);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Md(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          $(`beforetoggle`, e), $(`toggle`, e), $(`cancel`, e), $(`close`, e);
          break;
        case `iframe`:
        case `object`:
          $(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < gd.length; r++) $(gd[r], e);
          break;
        case `image`:
          $(`error`, e), $(`load`, e);
          break;
        case `details`:
          $(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          $(`error`, e), $(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(s(137, t));
                default:
                  Md(e, t, u, r, n, null);
              }
          return;
        default:
          if (Kt(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && Nd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && Md(e, t, c, r, n, null));
    }

    function Fd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var i = null,
            a = null,
            o = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || Md(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  a = m;
                  break;
                case `name`:
                  i = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  o = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(s(137, t));
                  break;
                default:
                  m !== f && Md(e, t, p, m, r, f);
              }
          }
          It(e, o, c, l, u, d, a, i);
          return;
        case `select`:
          for (a in ((m = o = c = p = null), n))
            if (((l = n[a]), n.hasOwnProperty(a) && l != null))
              switch (a) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(a) || Md(e, t, a, null, r, l);
              }
          for (i in r)
            if (
              ((a = r[i]),
              (l = n[i]),
              r.hasOwnProperty(i) && (a != null || l != null))
            )
              switch (i) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  c = a;
                  break;
                case `multiple`:
                  o = a;
                default:
                  a !== l && Md(e, t, i, a, r, l);
              }
          (t = c),
            (n = o),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? zt(e, !!n, n ? [] : ``, !1) : zt(e, !!n, t, !0))
              : zt(e, !!n, p, !1);
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((i = n[c]),
              n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  Md(e, t, c, null, r, i);
              }
          for (o in r)
            if (
              ((i = r[o]),
              (a = n[o]),
              r.hasOwnProperty(o) && (i != null || a != null))
            )
              switch (o) {
                case `value`:
                  p = i;
                  break;
                case `defaultValue`:
                  m = i;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (i != null) throw Error(s(91));
                  break;
                default:
                  i !== a && Md(e, t, o, i, r, a);
              }
          Bt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Md(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected =
                    p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Md(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            (p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                Md(e, t, g, null, r, p);
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(s(137, t));
                  break;
                default:
                  Md(e, t, u, p, r, m);
              }
          return;
        default:
          if (Kt(t)) {
            for (var _ in n)
              (p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Nd(e, t, _, void 0, r, p);
            for (d in r)
              (p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Nd(e, t, d, p, r, m);
            return;
          }
      }
      for (var v in n)
        (p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            Md(e, t, v, null, r, p);
      for (f in r)
        (p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            Md(e, t, f, p, r, m);
    }

    function Id(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }

    function Ld() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && Id(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                Id(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Rd = null,
      zd = null;

    function Bd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }

    function Vd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }

    function Hd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }

    function Ud(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Wd = null;

    function Gd() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== Wd && ((Wd = e), !0)
        : ((Wd = null), !1);
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0,
      qd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Jd = typeof Promise == `function` ? Promise : void 0,
      Yd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Jd === void 0
          ? Kd
          : function (e) {
              return Jd.resolve(null).then(e).catch(Xd);
            };

    function Xd(e) {
      setTimeout(function () {
        throw e;
      });
    }

    function Zd(e) {
      return e === `head`;
    }

    function Qd(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              e.removeChild(i), Np(t);
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) pf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            (n = e.ownerDocument.head), pf(n);
            for (var a = n.firstChild; a; ) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[ut] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o);
            }
          } else n === `body` && pf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Np(t);
    }

    function $d(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }

    function ef(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            ef(n), dt(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }

    function tf(e, t, n, r) {
      for (; e.nodeType === 1; ) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[ut])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = cf(e.nextSibling)), e === null)) break;
      }
      return null;
    }

    function nf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }

    function rf(e, t) {
      for (; e.nodeType !== 8; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = cf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }

    function af(e) {
      return e.data === `$?` || e.data === `$~`;
    }

    function of(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }

    function sf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          t(), n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r);
      }
    }

    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var lf = null;

    function uf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return cf(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }

    function df(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }

    function ff(e, t, n) {
      switch (((t = Bd(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(s(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(s(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(s(454));
          return e;
        default:
          throw Error(s(451));
      }
    }

    function pf(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      dt(e);
    }
    var mf = new Map(),
      hf = new Set();

    function gf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
        ? e
        : e.ownerDocument;
    }
    var _f = I.d;
    I.d = {
      f: vf,
      r: yf,
      D: Sf,
      C: Cf,
      L: wf,
      m: Tf,
      X: Df,
      S: Ef,
      M: Of,
    };

    function vf() {
      var e = _f.f(),
        t = vu();
      return e || t;
    }

    function yf(e) {
      var t = pt(e);
      t !== null && t.tag === 5 && t.type === `form` ? bs(t) : _f.r(e);
    }
    var bf = typeof document > `u` ? null : document;

    function xf(e, t, n) {
      var r = bf;
      if (r && typeof t == `string` && t) {
        var i = Ft(t);
        (i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          hf.has(i) ||
            (hf.add(i),
            (e = {
              rel: e,
              crossOrigin: n,
              href: t,
            }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              Pd(t, `link`, e),
              gt(t),
              r.head.appendChild(t)));
      }
    }

    function Sf(e) {
      _f.D(e), xf(`dns-prefetch`, e, null);
    }

    function Cf(e, t) {
      _f.C(e, t), xf(`preconnect`, e, t);
    }

    function wf(e, t, n) {
      _f.L(e, t, n);
      var r = bf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Ft(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Ft(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + Ft(n.imageSizes) + `"]`))
          : (i += `[href="` + Ft(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Af(e);
            break;
          case `script`:
            a = Pf(e);
        }
        mf.has(a) ||
          ((e = h(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n
          )),
          mf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(jf(a))) ||
            (t === `script` && r.querySelector(Ff(a))) ||
            ((t = r.createElement(`link`)),
            Pd(t, `link`, e),
            gt(t),
            r.head.appendChild(t)));
      }
    }

    function Tf(e, t) {
      _f.m(e, t);
      var n = bf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            Ft(r) +
            `"][href="` +
            Ft(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Pf(e);
        }
        if (
          !mf.has(a) &&
          ((e = h(
            {
              rel: `modulepreload`,
              href: e,
            },
            t
          )),
          mf.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Ff(a))) return;
          }
          (r = n.createElement(`link`)),
            Pd(r, `link`, e),
            gt(r),
            n.head.appendChild(r);
        }
      }
    }

    function Ef(e, t, n) {
      _f.S(e, t, n);
      var r = bf;
      if (r && e) {
        var i = ht(r).hoistableStyles,
          a = Af(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = {
            loading: 0,
            preload: null,
          };
          if ((o = r.querySelector(jf(a)))) s.loading = 5;
          else {
            (e = h(
              {
                rel: `stylesheet`,
                href: e,
                "data-precedence": t,
              },
              n
            )),
              (n = mf.get(a)) && Rf(e, n);
            var c = (o = r.createElement(`link`));
            gt(c),
              Pd(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                (c.onload = e), (c.onerror = t);
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Lf(o, t, r);
          }
          (o = {
            type: `stylesheet`,
            instance: o,
            count: 1,
            state: s,
          }),
            i.set(a, o);
        }
      }
    }

    function Df(e, t) {
      _f.X(e, t);
      var n = bf;
      if (n && e) {
        var r = ht(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h(
              {
                src: e,
                async: !0,
              },
              t
            )),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            gt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = {
            type: `script`,
            instance: a,
            count: 1,
            state: null,
          }),
          r.set(i, a));
      }
    }

    function Of(e, t) {
      _f.M(e, t);
      var n = bf;
      if (n && e) {
        var r = ht(n).hoistableScripts,
          i = Pf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Ff(i))),
          a ||
            ((e = h(
              {
                src: e,
                async: !0,
                type: `module`,
              },
              t
            )),
            (t = mf.get(i)) && zf(e, t),
            (a = n.createElement(`script`)),
            gt(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
          (a = {
            type: `script`,
            instance: a,
            count: 1,
            state: null,
          }),
          r.set(i, a));
      }
    }

    function kf(e, t, n, r) {
      var i = (i = ce.current) ? gf(i) : null;
      if (!i) throw Error(s(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Af(n.href)),
              (n = ht(i).hoistableStyles),
              (r = n.get(t)),
              r ||
                ((r = {
                  type: `style`,
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, r)),
              r)
            : {
                type: `void`,
                instance: null,
                count: 0,
                state: null,
              };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Af(n.href);
            var a = ht(i).hoistableStyles,
              o = a.get(e);
            if (
              (o ||
                ((i = i.ownerDocument || i),
                (o = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: {
                    loading: 0,
                    preload: null,
                  },
                }),
                a.set(e, o),
                (a = i.querySelector(jf(e))) &&
                  !a._p &&
                  ((o.instance = a), (o.state.loading = 5)),
                mf.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  mf.set(e, n),
                  a || Nf(i, e, n, o.state))),
              t && r === null)
            )
              throw Error(s(528, ``));
            return o;
          }
          if (t && r !== null) throw Error(s(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((t = Pf(n)),
                (n = ht(i).hoistableScripts),
                (r = n.get(t)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, r)),
                r)
              : {
                  type: `void`,
                  instance: null,
                  count: 0,
                  state: null,
                }
          );
        default:
          throw Error(s(444, e));
      }
    }

    function Af(e) {
      return `href="` + Ft(e) + `"`;
    }

    function jf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }

    function Mf(e) {
      return h({}, e, {
        "data-precedence": e.precedence,
        precedence: null,
      });
    }

    function Nf(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Pd(t, `link`, n),
          gt(t),
          e.head.appendChild(t));
    }

    function Pf(e) {
      return `[src="` + Ft(e) + `"]`;
    }

    function Ff(e) {
      return `script[async]` + e;
    }

    function If(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Ft(n.href) + `"]`);
            if (r) return (t.instance = r), gt(r), r;
            var i = h({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              gt(r),
              Pd(r, `style`, i),
              Lf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            i = Af(n.href);
            var a = e.querySelector(jf(i));
            if (a) return (t.state.loading |= 4), (t.instance = a), gt(a), a;
            (r = Mf(n)),
              (i = mf.get(i)) && Rf(r, i),
              (a = (e.ownerDocument || e).createElement(`link`)),
              gt(a);
            var o = a;
            return (
              (o._p = new Promise(function (e, t) {
                (o.onload = e), (o.onerror = t);
              })),
              Pd(a, `link`, r),
              (t.state.loading |= 4),
              Lf(a, n.precedence, e),
              (t.instance = a)
            );
          case `script`:
            return (
              (a = Pf(n.src)),
              (i = e.querySelector(Ff(a)))
                ? ((t.instance = i), gt(i), i)
                : ((r = n),
                  (i = mf.get(a)) && ((r = h({}, n)), zf(r, i)),
                  (e = e.ownerDocument || e),
                  (i = e.createElement(`script`)),
                  gt(i),
                  Pd(i, `link`, r),
                  e.head.appendChild(i),
                  (t.instance = i))
            );
          case `void`:
            return null;
          default:
            throw Error(s(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Lf(r, n.precedence, e));
      return t.instance;
    }

    function Lf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }

    function Rf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title);
    }

    function zf(e, t) {
      (e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity);
    }
    var Bf = null;

    function Vf(e, t, n) {
      if (Bf === null) {
        var r = new Map(),
          i = (Bf = new Map());
        i.set(n, r);
      } else (i = Bf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[ut] ||
            a[rt] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }

    function Hf(e, t, n) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null
        );
    }

    function Uf(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled), typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }

    function Wf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }

    function Gf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Af(r.href),
            a = t.querySelector(jf(i));
          if (a) {
            (t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Jf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              gt(a);
            return;
          }
          (a = t.ownerDocument || t),
            (r = Mf(r)),
            (i = mf.get(i)) && Rf(r, i),
            (a = a.createElement(`link`)),
            gt(a);
          var o = a;
          (o._p = new Promise(function (e, t) {
            (o.onload = e), (o.onerror = t);
          })),
            Pd(a, `link`, r),
            (n.instance = a);
        }
        e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Jf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n));
      }
    }
    var Kf = 0;

    function qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, 6e4 + t);
              0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
              var i = setTimeout(function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend))
                ) {
                  var t = e.unsuspend;
                  (e.unsuspend = null), t();
                }
              }, (e.imgBytes > Kf ? 50 : 800) + t);
              return (
                (e.unsuspend = n),
                function () {
                  (e.unsuspend = null), clearTimeout(r), clearTimeout(i);
                }
              );
            }
          : null
      );
    }

    function Jf() {
      if (
        (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
      ) {
        if (this.stylesheets) Xf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Yf = null;

    function Xf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Yf = new Map()),
          t.forEach(Zf, e),
          (Yf = null),
          Jf.call(e));
    }

    function Zf(e, t) {
      if (!(t.state.loading & 4)) {
        var n = Yf.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), Yf.set(e, n);
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        (i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = Jf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var Qf = {
      $$typeof: C,
      Provider: null,
      Consumer: null,
      _currentValue: te,
      _currentValue2: te,
      _threadCount: 0,
    };

    function $f(e, t, n, r, i, a, o, s, c) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ke(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ke(0)),
        (this.hiddenUpdates = Ke(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map());
    }

    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new $f(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = ii(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = ia()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: t,
        }),
        La(a),
        e
      );
    }

    function tp(e) {
      return e ? ((e = ni), e) : ni;
    }

    function np(e, t, n, r, i, a) {
      (i = tp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = za(t)),
        (r.payload = {
          element: n,
        }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ba(e, r, t)),
        n !== null && (pu(n, e, t), Va(n, e, t));
    }

    function rp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }

    function ip(e, t) {
      rp(e, t), (e = e.alternate) && rp(e, t);
    }

    function ap(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = $r(e, 67108864);
        t !== null && pu(t, e, 67108864), ip(e, 67108864);
      }
    }

    function op(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = du();
        t = Qe(t);
        var n = $r(e, t);
        n !== null && pu(n, e, t), ip(e, t);
      }
    }
    var sp = !0;

    function cp(e, t, n, r) {
      var i = F.T;
      F.T = null;
      var a = I.p;
      try {
        (I.p = 2), up(e, t, n, r);
      } finally {
        (I.p = a), (F.T = i);
      }
    }

    function lp(e, t, n, r) {
      var i = F.T;
      F.T = null;
      var a = I.p;
      try {
        (I.p = 8), up(e, t, n, r);
      } finally {
        (I.p = a), (F.T = i);
      }
    }

    function up(e, t, n, r) {
      if (sp) {
        var i = dp(r);
        if (i === null) Cd(e, t, r, fp, n), Cp(e, r);
        else if (Tp(i, e, t, n, r)) r.stopPropagation();
        else if ((Cp(e, r), t & 4 && -1 < Sp.indexOf(e))) {
          for (; i !== null; ) {
            var a = pt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = Ve(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o; ) {
                        var c = 1 << (31 - Pe(o));
                        (s.entanglements[1] |= c), (o &= ~c);
                      }
                      nd(a), !(Nl & 6) && (($l = Ce() + 500), rd(0, !1));
                    }
                  }
                  break;
                case 31:
                case 13:
                  (s = $r(a, 2)), s !== null && pu(s, a, 2), vu(), ip(a, 2);
              }
            if (((a = dp(r)), a === null && Cd(e, t, r, fp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Cd(e, t, r, null, n);
      }
    }

    function dp(e) {
      return (e = Qt(e)), pp(e);
    }
    var fp = null;

    function pp(e) {
      if (((fp = null), (e = ft(e)), e !== null)) {
        var t = l(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = u(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = d(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (fp = e), null;
    }

    function mp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (we()) {
            case Te:
              return 2;
            case Ee:
              return 8;
            case De:
            case Oe:
              return 32;
            case ke:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hp = !1,
      gp = null,
      _p = null,
      vp = null,
      yp = new Map(),
      bp = new Map(),
      xp = [],
      Sp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `
        );

    function Cp(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          gp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          _p = null;
          break;
        case `mouseover`:
        case `mouseout`:
          vp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          yp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          bp.delete(t.pointerId);
      }
    }

    function wp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = pt(t)), t !== null && ap(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }

    function Tp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return (gp = wp(gp, e, t, n, r, i)), !0;
        case `dragenter`:
          return (_p = wp(_p, e, t, n, r, i)), !0;
        case `mouseover`:
          return (vp = wp(vp, e, t, n, r, i)), !0;
        case `pointerover`:
          var a = i.pointerId;
          return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }

    function Ep(e) {
      var t = ft(e.target);
      if (t !== null) {
        var n = l(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = u(n)), t !== null)) {
              (e.blockedOn = t),
                tt(e.priority, function () {
                  op(n);
                });
              return;
            }
          } else if (t === 31) {
            if (((t = d(n)), t !== null)) {
              (e.blockedOn = t),
                tt(e.priority, function () {
                  op(n);
                });
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }

    function Dp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = dp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (Zt = r), n.target.dispatchEvent(r), (Zt = null);
        } else return (t = pt(n)), t !== null && ap(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }

    function Op(e, t, n) {
      Dp(e) && n.delete(t);
    }

    function kp() {
      (hp = !1),
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op);
    }

    function Ap(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        hp ||
          ((hp = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
    }
    var jp = null;

    function Mp(e) {
      jp !== e &&
        ((jp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          jp === e && (jp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (pp(r || n) === null) continue;
              break;
            }
            var a = pt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              vs(
                a,
                {
                  pending: !0,
                  data: i,
                  method: n.method,
                  action: r,
                },
                r,
                i
              ));
          }
        }));
    }

    function Np(e) {
      function t(t) {
        return Ap(t, e);
      }
      gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t);
      for (var n = 0; n < xp.length; n++) {
        var r = xp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < xp.length && ((n = xp[0]), n.blockedOn === null); )
        Ep(n), n.blockedOn === null && xp.shift();
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[it] || null;
          if (typeof a == `function`) o || Mp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[it] || null))) s = o.formAction;
              else if (pp(i) !== null) continue;
            } else s = o.action;
            typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Mp(n);
          }
        }
    }

    function Pp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }

      function t() {
        i !== null && (i(), (i = null)), r || setTimeout(n, 20);
      }

      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            (r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null));
          }
        );
      }
    }

    function Fp(e) {
      this._internalRoot = e;
    }
    (Ip.prototype.render = Fp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var n = t.current;
        np(n, du(), e, t, null, null);
      }),
      (Ip.prototype.unmount = Fp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            np(e.current, 2, null, e, null, null), vu(), (t[at] = null);
          }
        });

    function Ip(e) {
      this._internalRoot = e;
    }
    Ip.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = et();
        e = {
          blockedOn: null,
          target: e,
          priority: t,
        };
        for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
        xp.splice(n, 0, e), n === 0 && Ep(e);
      }
    };
    var Lp = r.version;
    if (Lp !== `19.2.8`) throw Error(s(527, Lp, `19.2.8`));
    I.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(s(188))
          : ((e = Object.keys(e).join(`,`)), Error(s(268, e)));
      return (
        (e = p(t)),
        (e = e === null ? null : m(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var Rp = {
      bundleType: 0,
      version: `19.2.8`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: F,
      reconcilerVersion: `19.2.8`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!zp.isDisabled && zp.supportsFiber)
        try {
          (V = zp.inject(Rp)), (Me = zp);
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!c(e)) throw Error(s(299));
      var n = !1,
        r = ``,
        i = Vs,
        a = Hs,
        o = Us;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (a = t.onCaughtError),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = ep(e, 1, !1, null, null, n, r, null, i, a, o, Pp)),
        (e[at] = t.current),
        xd(e),
        new Fp(t)
      );
    };
  }),
  c = e((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    n(), (t.exports = s());
  }),
  l = n(),
  u = c(),
  d = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  f = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  p = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase()
    ),
  m = (e) => {
    let t = p(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  h = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  g = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  _ = (0, l.createContext)({}),
  v = () => (0, l.useContext)(_),
  y = (0, l.forwardRef)(
    (
      {
        color: e,
        size: t,
        strokeWidth: n,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c
    ) => {
      let {
          size: u = 24,
          strokeWidth: f = 2,
          absoluteStrokeWidth: p = !1,
          color: m = `currentColor`,
          className: _ = ``,
        } = v() ?? {},
        y = r ?? p ? (Number(n ?? f) * 24) / Number(t ?? u) : n ?? f;
      return (0, l.createElement)(
        `svg`,
        {
          ref: c,
          ...h,
          width: t ?? u ?? h.width,
          height: t ?? u ?? h.height,
          stroke: e ?? m,
          strokeWidth: y,
          className: d(`lucide`, _, i),
          ...(!a &&
            !g(s) && {
              "aria-hidden": `true`,
            }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, l.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      );
    }
  ),
  b = (e, t) => {
    let n = (0, l.forwardRef)(({ className: n, ...r }, i) =>
      (0, l.createElement)(y, {
        ref: i,
        iconNode: t,
        className: d(`lucide-${f(m(e))}`, `lucide-${e}`, n),
        ...r,
      })
    );
    return (n.displayName = m(e)), n;
  },
  x = b(`arrow-up-right`, [
    [
      `path`,
      {
        d: `M7 7h10v10`,
        key: `1tivn9`,
      },
    ],
    [
      `path`,
      {
        d: `M7 17 17 7`,
        key: `1vkiza`,
      },
    ],
  ]),
  S = b(`badge-check`, [
    [
      `path`,
      {
        d: `M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,
        key: `3c2336`,
      },
    ],
    [
      `path`,
      {
        d: `m9 12 2 2 4-4`,
        key: `dzmm74`,
      },
    ],
  ]),
  C = b(`bookmark`, [
    [
      `path`,
      {
        d: `M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,
        key: `oz39mx`,
      },
    ],
  ]),
  w = b(`check`, [
    [
      `path`,
      {
        d: `M20 6 9 17l-5-5`,
        key: `1gmf2c`,
      },
    ],
  ]),
  T = b(`copy`, [
    [
      `rect`,
      {
        width: `14`,
        height: `14`,
        x: `8`,
        y: `8`,
        rx: `2`,
        ry: `2`,
        key: `17jyea`,
      },
    ],
    [
      `path`,
      {
        d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
        key: `zix9uf`,
      },
    ],
  ]),
  E = b(`heart`, [
    [
      `path`,
      {
        d: `M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,
        key: `mvr1a0`,
      },
    ],
  ]),
  D = b(`message-circle`, [
    [
      `path`,
      {
        d: `M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,
        key: `1sd12s`,
      },
    ],
  ]),
  O = b(`refresh-cw`, [
    [
      `path`,
      {
        d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
        key: `v9h5vc`,
      },
    ],
    [
      `path`,
      {
        d: `M21 3v5h-5`,
        key: `1q7to0`,
      },
    ],
    [
      `path`,
      {
        d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
        key: `3uifl3`,
      },
    ],
    [
      `path`,
      {
        d: `M8 16H3v5`,
        key: `1cv678`,
      },
    ],
  ]),
  k = b(`repeat-2`, [
    [
      `path`,
      {
        d: `m2 9 3-3 3 3`,
        key: `1ltn5i`,
      },
    ],
    [
      `path`,
      {
        d: `M13 18H7a2 2 0 0 1-2-2V6`,
        key: `1r6tfw`,
      },
    ],
    [
      `path`,
      {
        d: `m22 15-3 3-3-3`,
        key: `4rnwn2`,
      },
    ],
    [
      `path`,
      {
        d: `M11 6h6a2 2 0 0 1 2 2v10`,
        key: `2f72bc`,
      },
    ],
  ]),
  A = b(`send`, [
    [
      `path`,
      {
        d: `M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,
        key: `1ffxy3`,
      },
    ],
    [
      `path`,
      {
        d: `m21.854 2.147-10.94 10.939`,
        key: `12cjpa`,
      },
    ],
  ]),
  j = b(`trending-up`, [
    [
      `path`,
      {
        d: `M16 7h6v6`,
        key: `box55l`,
      },
    ],
    [
      `path`,
      {
        d: `m22 7-8.5 8.5-5-5L2 17`,
        key: `1t1m79`,
      },
    ],
  ]),
  M = e((e) => {
    var t = Symbol.for(`react.transitional.element`);

    function n(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        {
          $$typeof: t,
          type: e,
          key: i,
          ref: n === void 0 ? null : n,
          props: r,
        }
      );
    }
    (e.jsx = n), (e.jsxs = n);
  }),
  N = e((e, t) => {
    t.exports = M();
  })();

function P(e) {
  let t = (0, l.useRef)(null);
  return (
    (0, l.useEffect)(() => {
      let n = t.current;
      if (!n) return;
      if (!(`IntersectionObserver` in window)) {
        e();
        return;
      }
      let r = new IntersectionObserver(
        (t) => {
          t.forEach((t) => {
            t.isIntersecting && (e(), r.unobserve(t.target));
          });
        },
        {
          threshold: 0.3,
        }
      );
      return r.observe(n), () => r.disconnect();
    }, []),
    t
  );
}

function ee({ text: e, className: t = ``, delay: n = 0 }) {
  let r =
      typeof window < `u` &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    [i, a] = (0, l.useState)(r),
    o = P(() => a(!0));
  return (0, N.jsx)(`span`, {
    className: `inline-block overflow-hidden align-bottom`,
    children: (0, N.jsx)(`span`, {
      ref: o,
      className: `inline-block will-change-transform ` + t,
      style: {
        transform: i ? `none` : `translateY(115%)`,
        transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${n}ms`,
      },
      children: e,
    }),
  });
}

function F({
  text: e,
  className: t = ``,
  speed: n = 50,
  startDelay: r = 200,
  loop: i = !1,
}) {
  let a =
      typeof window < `u` &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    [o, s] = (0, l.useState)(a ? e.length : 0),
    c = (0, l.useRef)(!1),
    u = P(() => {
      c.current ||
        ((c.current = !0),
        setTimeout(() => {
          s(0);
          let t = 0,
            r = window.setInterval(() => {
              t++,
                s(t),
                t >= e.length &&
                  (window.clearInterval(r),
                  i &&
                    setTimeout(() => {
                      s(0), (t = 0);
                      let r = window.setInterval(() => {
                        t++, s(t), t >= e.length && window.clearInterval(r);
                      }, n);
                    }, 1800));
            }, n);
        }, r));
    });
  return (0, N.jsxs)(`span`, {
    ref: u,
    className: t,
    children: [
      e.slice(0, o),
      (0, N.jsx)(`span`, {
        className: `caret`,
        "aria-hidden": `true`,
        children: `_`,
      }),
    ],
  });
}
var I = `!<>-_\\/[]{}—=+*^?#________`;

function te({ text: e, className: t = `` }) {
  let n = (0, l.useRef)(null),
    r =
      typeof window < `u` &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
    i = (t) => {
      let i = n.current;
      if (!i) return;
      if (r) {
        (i.textContent = e), t && t();
        return;
      }
      let a = e.split(``),
        o = a.map((e, t) => ({
          from: t,
          to: t,
        })),
        s = 0,
        c = 0,
        l = () => {
          let n = ``,
            r = 0;
          for (let e = 0; e < a.length; e++) {
            let t = o[e];
            e < t.from || e >= t.to
              ? ((n += a[e]), r++)
              : (n += I[Math.floor(Math.random() * 26)]);
          }
          if (((i.textContent = n), r === a.length)) {
            (i.textContent = e), t && t();
            return;
          }
          if (s < 34)
            for (let e = 0; e < a.length; e++) {
              let t = o[e];
              Math.random() < 0.05 &&
                (t.from = t.from > 0 ? t.from - 1 : t.from),
                Math.random() < 0.05 &&
                  (t.to = t.to < a.length ? t.to + 1 : t.to);
            }
          s++, (c = requestAnimationFrame(l));
        };
      return (c = requestAnimationFrame(l)), () => cancelAnimationFrame(c);
    };
  return (
    (0, l.useEffect)(() => {
      if (r) {
        n.current && (n.current.textContent = e);
        return;
      }
      let t = n.current;
      if (!t) return;
      let a;
      if (!(`IntersectionObserver` in window)) {
        a = i();
        return;
      }
      let o = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting && ((a = i()), o.unobserve(e.target));
          });
        },
        {
          threshold: 0.3,
        }
      );
      o.observe(t);
      let s = () => i();
      return (
        window.matchMedia(`(pointer: fine)`).matches &&
          t.addEventListener(`mouseenter`, s),
        () => {
          o.disconnect(), t.removeEventListener(`mouseenter`, s), a && a();
        }
      );
    }, [e]),
    (0, N.jsx)(`span`, {
      ref: n,
      className: t,
      "aria-label": e,
      children: e,
    })
  );
}
var ne = [`Manifesto`, `Live`, `Race plan`, `FAQ`],
  re = `0x454368e3c47295e0542174e243a480419c0de3c4`;

function ie() {
  let [e, t] = (0, l.useState)(!1);
  return (0, N.jsxs)(`button`, {
    type: `button`,
    onClick: () => {
      navigator.clipboard
        ?.writeText(re)
        .then(() => {
          t(!0), setTimeout(() => t(!1), 1600);
        })
        .catch(() => {});
    },
    "aria-label": `Copy contract address`,
    "data-reveal": !0,
    className: `group inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-paper/15 bg-[#12121c]/85 px-3.5 py-2 backdrop-blur-sm transition hover:border-accent/60 sm:gap-2.5 sm:px-5 sm:py-3`,
    children: [
      (0, N.jsx)(`span`, {
        className: `mono min-w-0 break-all text-[9.5px] tracking-[0.06em] text-paper/70 sm:text-[13px] sm:tracking-[0.08em]`,
        children: re,
      }),
      e
        ? (0, N.jsx)(w, {
            className: `h-3.5 w-3.5 shrink-0 text-accent`,
            strokeWidth: 2.5,
          })
        : (0, N.jsx)(T, {
            className: `h-3.5 w-3.5 shrink-0 text-paper/60 transition group-hover:text-accent`,
            strokeWidth: 2,
          }),
      (0, N.jsx)(`span`, {
        className: `mono hidden text-[10px] uppercase tracking-widest text-accent sm:inline`,
        children: e ? `Copied` : `Copy`,
      }),
    ],
  });
}

function ae() {
  return (0, N.jsxs)(`section`, {
    id: `top`,
    className: `relative h-[100dvh] min-h-[520px] overflow-hidden bg-bg`,
    children: [
      (0, N.jsxs)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        playsInline: !0,
        preload: `auto`,
        disablePictureInPicture: !0,
        "aria-label": `ARCAT hero animation`,
        poster: `/arcat-first-poster.jpg`,
        className: `absolute inset-0 h-full w-full object-cover`,
        children: [
          (0, N.jsx)(`source`, {
            src: `/arcat-first-mobile.mp4`,
            type: `video/mp4`,
            media: `(max-width: 900px)`,
          }),
          (0, N.jsx)(`source`, {
            src: `/arcat-first.webm`,
            type: `video/webm`,
          }),
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `absolute inset-0 bg-gradient-to-b from-[#0b0b0d]/80 via-[#0b0b0d]/20 to-[#0b0b0d]/90`,
        "aria-hidden": `true`,
      }),
      (0, N.jsx)(`div`, {
        className: `pointer-events-none absolute left-1/2 top-[32%] h-[46vh] w-[min(62rem,92%)] -translate-x-1/2`,
        style: {
          background: `radial-gradient(60% 70% at 50% 45%, rgba(18,18,28,0.55), transparent 70%)`,
        },
        "aria-hidden": `true`,
      }),
      (0, N.jsxs)(`div`, {
        className: `absolute inset-0 z-10 mx-auto flex max-w-[1200px] flex-col px-6 sm:px-8`,
        children: [
          (0, N.jsxs)(`header`, {
            className: `flex items-center justify-between gap-4 py-5`,
            style: {
              paddingTop: `max(1.25rem, env(safe-area-inset-top))`,
            },
            children: [
              (0, N.jsx)(`a`, {
                href: `#top`,
                className: `display text-lg font-bold tracking-wide`,
                children: `ARCAT`,
              }),
              (0, N.jsx)(`nav`, {
                className: `hidden md:block`,
                "aria-label": `Primary`,
                children: (0, N.jsx)(`div`, {
                  className: `flex items-center gap-8`,
                  children: ne.map((e) =>
                    (0, N.jsx)(
                      `a`,
                      {
                        href: `#` + e.toLowerCase().replace(` `, `-`),
                        className: `mono text-[12px] uppercase tracking-[0.18em] text-paper/70 transition hover:text-paper`,
                        children: e,
                      },
                      e
                    )
                  ),
                }),
              }),
              (0, N.jsx)(`a`, {
                href: `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`,
                className: `btn btn-primary !min-h-[40px] !px-5 text-[13px]`,
                children: `Buy $ARCAT`,
              }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `relative flex flex-1 flex-col justify-center`,
            children: [
              (0, N.jsxs)(`h1`, {
                className: `max-w-[900px] text-[clamp(3rem,12vw,8.5rem)] leading-[0.92]`,
                "data-reveal": !0,
                children: [
                  (0, N.jsx)(te, {
                    text: `ARCAT`,
                    className: `accent`,
                  }),
                  (0, N.jsx)(`p`, {
                    className: `hero-label-highlight mt-7 mb-2`,
                    "data-reveal": !0,
                    children: `First memecoin on Arc Chain`,
                  }),
                  (0, N.jsx)(ee, {
                    text: `The cat that runs the chain`,
                    className: `block text-[clamp(1.3rem,4vw,2.6rem)] font-normal tracking-[0.01em] text-paper/80`,
                    delay: 350,
                  }),
                ],
              }),
              (0, N.jsx)(ie, {}),
              (0, N.jsx)(`p`, {
                className: `mt-6 max-w-[46ch] text-[15px] leading-relaxed text-paper/70`,
                "data-reveal": !0,
                children: `Fairly launched via DYOR Swap V2. No presale, no team bags. Lace up, we run at block speed.`,
              }),
              (0, N.jsxs)(`div`, {
                className: `mt-8 flex flex-wrap items-center gap-3`,
                "data-reveal": !0,
                children: [
                  (0, N.jsx)(`a`, {
                    href: `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`,
                    className: `btn btn-primary`,
                    children: `Buy $ARCAT`,
                  }),
                  (0, N.jsx)(`a`, {
                    href: `#live`,
                    className: `btn btn-ghost`,
                    children: `Live stats`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var L = `/arcat-second.webm`,
  oe = `/arcat-second-mobile.mp4`,
  se = `First memecoin on Arc Chain. Fairly launched via DYOR Swap V2. No presale, no taxes, no limits. Just a cat, a chain, and a community that refuses to walk.`;

function ce() {
  return (0, N.jsxs)(`section`, {
    id: `manifesto`,
    className: `relative overflow-hidden py-28 md:py-40`,
    children: [
      (0, N.jsxs)(`div`, {
        className: `relative z-[1] mx-auto max-w-[1200px] px-6 sm:px-8`,
        children: [
          (0, N.jsx)(`p`, {
            className: `section-label`,
            "data-reveal": !0,
            children: `01 / Manifesto`,
          }),
          (0, N.jsxs)(`div`, {
            className: `mt-6 grid items-start gap-10 md:grid-cols-2 md:gap-16`,
            children: [
              (0, N.jsxs)(`h2`, {
                className: `text-[clamp(2.4rem,6vw,4.5rem)]`,
                "data-reveal": !0,
                children: [
                  `The cat`,
                  (0, N.jsx)(`br`, {}),
                  `that runs `,
                  (0, N.jsx)(`span`, {
                    className: `accent`,
                    children: `the chain`,
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `md:pt-2`,
                children: [
                  (0, N.jsx)(`p`, {
                    className: `max-w-[46ch] text-[15px] leading-relaxed text-paper/70`,
                    "data-reveal": !0,
                    children: se,
                  }),
                  (0, N.jsx)(`p`, {
                    className: `mono mt-8 text-[12px] uppercase tracking-[0.18em] text-paper/50`,
                    "data-reveal": !0,
                    children: `Born block-one on Arc Chain`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: `relative mt-16 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]`,
        "data-reveal": !0,
        children: [
          (0, N.jsxs)(`video`, {
            "data-lazy": !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            preload: `none`,
            "aria-hidden": `true`,
            poster: `/arcat-second-poster.jpg`,
            className: `absolute inset-0 h-full w-full object-cover`,
            children: [
              (0, N.jsx)(`source`, {
                src: oe,
                type: `video/mp4`,
                media: `(max-width: 900px)`,
              }),
              (0, N.jsx)(`source`, {
                src: L,
                type: `video/webm`,
              }),
            ],
          }),
          (0, N.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-[#0b0b0d]/70 to-transparent`,
            "aria-hidden": `true`,
          }),
        ],
      }),
    ],
  });
}

function R({ className: e }) {
  return (0, N.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    className: e,
    "aria-hidden": `true`,
    children: (0, N.jsx)(`path`, {
      d: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
    }),
  });
}
var le = [
    {
      n: `Post 01`,
      quote: `About to witness peak cinema 🔥 just 2 weeks away…`,
      href: `https://x.com/arcat_meme/status/2095165511151898687`,
      static: !1,
      image: void 0,
      date: void 0,
      parent: void 0,
      conversation: `none`,
      liker: {
        name: `Peter Schroeder`,
        handle: `@peterschroederr`,
        href: `https://x.com/peterschroederr`,
        bio: `Leading global marketing for @Circle (@USDC)`,
        avatar: `/posts/peter.jpg`,
      },
    },
    {
      n: `Post 02`,
      quote: `@KashRazzaghi @ChelseaFC Have you ever thought of having a pet cat?`,
      href: `https://x.com/arcat_meme/status/2094796623994126738`,
      static: !1,
      image: void 0,
      date: void 0,
      parent: {
        quote: `My new @ChelseaFC family is having way too much fun with this. But I'm def higher than an 89.`,
        href: `https://x.com/KashRazzaghi/status/2094773977780473916`,
      },
      liker: {
        name: `Kash Razzaghi`,
        handle: `@kashRazzaghi`,
        href: `https://x.com/KashRazzaghi`,
        bio: `Chief Commercial Officer @Circle · $USDC`,
        avatar: `/posts/kash.png`,
      },
    },
  ],
  ue = [
    {
      file: `drive-01.mp4`,
      type: `video`,
    },
    {
      file: `drive-03.png`,
      type: `image`,
    },
    {
      file: `drive-02.mp4`,
      type: `video`,
    },
    {
      file: `drive-05.jpg`,
      type: `image`,
    },
    {
      file: `drive-04.mov`,
      type: `video`,
    },
    {
      file: `drive-06.jpg`,
      type: `image`,
    },
    {
      file: `drive-08-new-compressed.mp4`,
      type: `video`,
    },
    {
      file: `drive-07.png`,
      type: `image`,
    },
    {
      file: `drive-10-new-compressed.mp4`,
      type: `video`,
    },
    {
      file: `drive-09.png`,
      type: `image`,
    },
    {
      file: `drive-13.mp4`,
      type: `video`,
    },
    {
      file: `drive-11.jpg`,
      type: `image`,
    },
    {
      file: `drive-12.jpg`,
      type: `image`,
    },
  ];

function z() {
  return (
    (0, l.useEffect)(() => {
      let e = document.getElementById(`posts`) ?? void 0,
        t = () => window.twttr?.widgets.load(e),
        n = document.querySelector(
          `script[src="https://platform.twitter.com/widgets.js"]`
        );
      if (window.twttr) {
        t();
        return;
      }
      let r = n ?? document.createElement(`script`);
      (r.src = `https://platform.twitter.com/widgets.js`),
        (r.async = !0),
        (r.charset = `utf-8`),
        (r.onload = t),
        n || document.body.appendChild(r);
    }, []),
    (0, N.jsx)(`section`, {
      id: `posts`,
      className: `relative overflow-hidden py-28 md:py-40`,
      children: (0, N.jsxs)(`div`, {
        className: `relative z-[1] mx-auto max-w-[1000px] px-6 sm:px-8`,
        children: [
          (0, N.jsx)(`p`, {
            className: `section-label`,
            "data-reveal": !0,
            children: `02 / Posts & memes`,
          }),
          (0, N.jsxs)(`h2`, {
            className: `mt-6 text-[clamp(2.4rem,6vw,4.5rem)]`,
            "data-reveal": !0,
            children: [
              `On the `,
              (0, N.jsx)(`span`, {
                className: `accent`,
                children: `record`,
              }),
            ],
          }),
          (0, N.jsx)(`p`, {
            className: `mt-4 max-w-[52ch] text-[15px] leading-relaxed text-paper/70`,
            "data-reveal": !0,
            children: `Real posts from the timeline, with the people who noticed them.`,
          }),
          (0, N.jsx)(`p`, {
            className: `mt-3 max-w-[58ch] text-[15px] font-medium leading-relaxed text-paper/85`,
            "data-reveal": !0,
            children: `ARCAT is not a random cat. The signal has been visible for a while, and the right eyes have already taken notice.`,
          }),
          (0, N.jsx)(`div`, {
            className: `mt-12 flex flex-col gap-6`,
            children: le.map((e) =>
              (0, N.jsx)(
                `article`,
                {
                  className: `divider border border-paper/10 bg-panel/40`,
                  "data-reveal": !0,
                  children: (0, N.jsxs)(`div`, {
                    className: `p-6 sm:p-8`,
                    children: [
                      (0, N.jsx)(`p`, {
                        className: `mono text-[10px] uppercase tracking-[0.22em] text-accent`,
                        children: e.n,
                      }),
                      (0, N.jsxs)(`p`, {
                        className: `mt-3 max-w-[52ch] text-[15px] leading-relaxed text-paper/70`,
                        children: [
                          `A real post from `,
                          (0, N.jsx)(`span`, {
                            className: `text-paper`,
                            children: `@arcatlive`,
                          }),
                          `, rendered directly by X.`,
                        ],
                      }),
                      e.static
                        ? (0, N.jsxs)(`div`, {
                            className: `arcat-static-tweet mt-6`,
                            children: [
                              (0, N.jsxs)(`div`, {
                                className: `flex items-center gap-3`,
                                children: [
                                  (0, N.jsx)(`img`, {
                                    src: `/arcat.png`,
                                    alt: `ARCAT`,
                                    className: `h-11 w-11 rounded-full object-cover`,
                                  }),
                                  (0, N.jsxs)(`div`, {
                                    className: `min-w-0`,
                                    children: [
                                      (0, N.jsxs)(`p`, {
                                        className: `flex items-center gap-1 text-[15px] font-bold text-[#e7e9ea]`,
                                        children: [
                                          `ARCAT `,
                                          (0, N.jsx)(S, {
                                            className: `h-[17px] w-[17px] fill-[#1d9bf0] text-[#15202b]`,
                                          }),
                                        ],
                                      }),
                                      (0, N.jsx)(`p`, {
                                        className: `mono text-[11px] text-[#8899a6]`,
                                        children: `@arcatlive · Follow`,
                                      }),
                                    ],
                                  }),
                                  (0, N.jsx)(`a`, {
                                    href: e.href,
                                    target: `_blank`,
                                    rel: `noopener`,
                                    className: `ml-auto text-[#8899a6] hover:text-white`,
                                    children: (0, N.jsx)(R, {
                                      className: `h-5 w-5`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, N.jsx)(`p`, {
                                className: `mt-4 text-[17px] leading-relaxed text-[#e7e9ea]`,
                                children: e.quote,
                              }),
                              (0, N.jsx)(`a`, {
                                href: e.href,
                                target: `_blank`,
                                rel: `noopener`,
                                className: `mt-4 block overflow-hidden rounded-xl border border-[#38444d]`,
                                children: (0, N.jsx)(`img`, {
                                  src: e.image,
                                  alt: `ARCAT tweet media`,
                                  className: `block h-auto w-full`,
                                }),
                              }),
                              (0, N.jsx)(`p`, {
                                className: `mt-3 border-b border-[#38444d] pb-3 text-[13px] text-[#8899a6]`,
                                children: e.date,
                              }),
                              (0, N.jsxs)(`div`, {
                                className: `mt-3 flex items-center justify-between text-[#8899a6]`,
                                children: [
                                  (0, N.jsx)(D, {
                                    className: `h-[18px] w-[18px]`,
                                  }),
                                  (0, N.jsx)(k, {
                                    className: `h-[18px] w-[18px]`,
                                  }),
                                  (0, N.jsx)(E, {
                                    className: `h-[18px] w-[18px] fill-[#f91880] text-[#f91880]`,
                                  }),
                                  (0, N.jsx)(C, {
                                    className: `h-[18px] w-[18px]`,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, N.jsxs)(`div`, {
                            className: `arcat-tweet-list mt-6`,
                            children: [
                              e.parent &&
                                (0, N.jsxs)(`blockquote`, {
                                  className: `twitter-tweet`,
                                  "data-theme": `dark`,
                                  "data-dnt": `true`,
                                  "data-conversation": `none`,
                                  "data-width": `550`,
                                  children: [
                                    (0, N.jsx)(`p`, {
                                      lang: `en`,
                                      dir: `ltr`,
                                      children: e.parent.quote,
                                    }),
                                    (0, N.jsx)(`a`, {
                                      href: e.parent.href,
                                      children: `Kash Razzaghi on X`,
                                    }),
                                  ],
                                }),
                              (0, N.jsxs)(`blockquote`, {
                                className: `twitter-tweet`,
                                "data-theme": `dark`,
                                "data-dnt": `true`,
                                "data-conversation": `none`,
                                "data-width": `550`,
                                children: [
                                  (0, N.jsx)(`p`, {
                                    lang: `en`,
                                    dir: `ltr`,
                                    children: e.quote,
                                  }),
                                  (0, N.jsx)(`a`, {
                                    href: e.href,
                                    children: `ARCAT on X`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      (0, N.jsxs)(`a`, {
                        href: e.liker.href,
                        target: `_blank`,
                        rel: `noopener`,
                        className: `mt-6 flex items-center gap-4 border-t border-paper/10 pt-5 transition-opacity hover:opacity-80`,
                        children: [
                          (0, N.jsx)(`img`, {
                            src: e.liker.avatar,
                            alt: e.liker.name,
                            loading: `lazy`,
                            className: `h-12 w-12 flex-none rounded-full border border-paper/15`,
                          }),
                          (0, N.jsxs)(`div`, {
                            className: `min-w-0`,
                            children: [
                              (0, N.jsx)(`p`, {
                                className: `display truncate text-[15px]`,
                                children: e.liker.name,
                              }),
                              (0, N.jsx)(`p`, {
                                className: `mono truncate text-[10px] uppercase tracking-widest text-paper/50`,
                                children: e.liker.handle,
                              }),
                              (0, N.jsx)(`p`, {
                                className: `mt-1 line-clamp-1 text-[12px] text-paper/60`,
                                children: e.liker.bio,
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`span`, {
                            className: `ml-auto flex flex-none items-center gap-1.5 rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1.5`,
                            children: [
                              (0, N.jsx)(E, {
                                className: `h-3.5 w-3.5 fill-red-400 text-red-400`,
                                strokeWidth: 0,
                              }),
                              (0, N.jsx)(`span`, {
                                className: `mono text-[9.5px] uppercase tracking-widest text-red-400`,
                                children: `Liked`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                e.n
              )
            ),
          }),
          (0, N.jsxs)(`div`, {
            className: `mt-16`,
            children: [
              (0, N.jsx)(`h3`, {
                className: `display text-[clamp(1.5rem,3vw,2.4rem)] font-bold uppercase tracking-[0.08em] text-paper`,
                "data-reveal": !0,
                children: `Meme Gallery`,
              }),
              (0, N.jsx)(`div`, {
                className: `meme-conveyor mt-6`,
                "data-reveal": !0,
                children: (0, N.jsx)(`div`, {
                  className: `meme-track`,
                  children: [...ue, ...ue].map((e, t) =>
                    (0, N.jsxs)(
                      `figure`,
                      {
                        className: `meme-card`,
                        children: [
                          e.type === `video`
                            ? (0, N.jsx)(`video`, {
                                src: `/drive-memes/${e.file}`,
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                preload: `metadata`,
                              })
                            : (0, N.jsx)(`img`, {
                                src: `/drive-memes/${e.file}`,
                                alt: `ARCAT gallery ${(t % ue.length) + 1}`,
                                loading: `lazy`,
                              }),
                          (0, N.jsxs)(`figcaption`, {
                            children: [
                              (0, N.jsxs)(`span`, {
                                children: [
                                  `Archive `,
                                  String((t % ue.length) + 1).padStart(2, `0`),
                                ],
                              }),
                              (0, N.jsx)(`span`, {
                                children: `$ARCAT`,
                              }),
                            ],
                          }),
                        ],
                      },
                      `${e.file}-${t}`
                    )
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var de = [
  {
    img: `/bots/maestro.jpg`,
    name: `Maestro`,
    href: `https://t.me/maestro`,
  },
  {
    img: `/bots/basedbot.jpg`,
    name: `Based`,
    href: `https://t.me/based_eth_bot`,
  },
  {
    img: `/bots/sigmabot.jpg`,
    name: `Sigma`,
    href: `https://t.me/Sigma_buyBot`,
  },
];

function fe() {
  return (0, N.jsx)(`section`, {
    id: `trade`,
    className: `relative overflow-hidden py-28 md:py-40`,
    children: (0, N.jsxs)(`div`, {
      className: `relative z-[1] mx-auto max-w-[1000px] px-6 sm:px-8`,
      children: [
        (0, N.jsx)(`p`, {
          className: `section-label`,
          "data-reveal": !0,
          children: `03 / Trade ARCAT`,
        }),
        (0, N.jsx)(`h2`, {
          className: `gta mt-4 text-[clamp(2.4rem,9vw,5.5rem)]`,
          "data-reveal": !0,
          children: `Trade ARCAT`,
        }),
        (0, N.jsx)(`p`, {
          className: `mt-4 max-w-[52ch] text-[15px] leading-relaxed text-paper/70`,
          "data-reveal": !0,
          children: `Use these bots to trade ARCAT until official mainnet.`,
        }),
        (0, N.jsx)(`div`, {
          className: `mt-12 grid gap-4 sm:grid-cols-3`,
          "data-reveal": !0,
          children: de.map((e) =>
            (0, N.jsxs)(
              `a`,
              {
                href: e.href,
                target: `_blank`,
                rel: `noopener`,
                "aria-label": `Trade on ` + e.name + ` bot`,
                className: `bot-card flex flex-col items-center gap-5 p-7 text-center`,
                children: [
                  (0, N.jsx)(`span`, {
                    className: `bot-logo grid h-20 w-20 place-items-center`,
                    children: (0, N.jsx)(`img`, {
                      src: e.img,
                      alt: e.name + ` bot logo`,
                      className: `h-16 w-16 object-contain`,
                    }),
                  }),
                  (0, N.jsxs)(`span`, {
                    className: `display text-[16px] text-paper`,
                    children: [`Trade on `, e.name, ` Bot`],
                  }),
                ],
              },
              e.name
            )
          ),
        }),
      ],
    }),
  });
}
var pe = 7,
  me = Array.from(
    {
      length: pe,
    },
    (e, t) => (2 * Math.PI * t) / pe
  );

function he() {
  let e = (0, l.useRef)(null),
    t = (0, l.useRef)(null),
    n = (0, l.useRef)([]),
    r = (0, l.useRef)({
      rx: 200,
      ry: 120,
      baseW: 240,
    }),
    i = (0, l.useRef)(0),
    a = (0, l.useCallback)(() => {
      let { rx: e, ry: t, baseW: a } = r.current;
      for (let r = 0; r < pe; r++) {
        let o = n.current[r];
        if (!o) continue;
        let s = me[r] + i.current,
          c = Math.sin(s),
          l = (c + 1) / 2,
          u = 0.42 + 0.58 * l,
          d = Math.cos(s) * e,
          f = Math.sin(s) * t;
        (o.style.transform = `translate(-50%,-50%) translate(${d}px, ${f}px) scale(${u})`),
          (o.style.zIndex = String(Math.round(c * 1e3))),
          (o.style.opacity = String(0.35 + 0.65 * l)),
          (o.style.filter = `blur(${(1 - l) * 3}px)`),
          (o.style.width = a * u + `px`);
      }
    }, []),
    o = (0, l.useCallback)(() => {
      let e = t.current;
      if (!e) return;
      let n = e.clientWidth,
        i = e.clientHeight,
        o = n < 640;
      (r.current = {
        rx: o ? Math.min(n * 0.34, 150) : Math.min(n * 0.3, 340),
        ry: o ? Math.min(i * 0.28, 125) : Math.min(i * 0.22, 160),
        baseW: o ? Math.min(n * 0.44, 150) : Math.min(n * 0.26, 300),
      }),
        a();
    }, [a]);
  return (
    (0, l.useEffect)(() => {
      o();
      let t = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        n = e.current;
      if (t || !n) return;
      let r = () => {
        let e = n.getBoundingClientRect(),
          t = e.height - window.innerHeight,
          r = t > 0 ? Math.min(1, Math.max(0, -e.top / t)) : 0;
        (i.current = r * Math.PI * 2 * 1.5), a();
      };
      return (
        window.addEventListener(`scroll`, r, {
          passive: !0,
        }),
        window.addEventListener(`resize`, o),
        r(),
        () => {
          window.removeEventListener(`scroll`, r),
            window.removeEventListener(`resize`, o);
        }
      );
    }, [o, a]),
    (0, l.useEffect)(() => {
      for (let e = 1; e <= pe; e++) {
        let t = new Image();
        t.src = `/figurines/cat` + e + `.png`;
      }
    }, []),
    (0, N.jsx)(`section`, {
      ref: e,
      className: `relative h-[300vh]`,
      id: `circle`,
      children: (0, N.jsxs)(`div`, {
        className: `sticky top-0 flex h-[100dvh] flex-col overflow-hidden`,
        children: [
          (0, N.jsx)(`div`, {
            className: `pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`,
            style: {
              width: `min(120vw, 56rem)`,
              aspectRatio: `1`,
              borderRadius: `50%`,
              background: `radial-gradient(circle, rgba(139,92,255,0.18), transparent 62%)`,
            },
            "aria-hidden": `true`,
          }),
          (0, N.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 top-[16%] flex select-none justify-center`,
            style: {
              fontFamily: `'Anton', sans-serif`,
            },
            "aria-hidden": `true`,
            children: (0, N.jsx)(`span`, {
              style: {
                fontSize: `clamp(64px, 20vw, 260px)`,
                color: `rgba(246,245,241,0.09)`,
                lineHeight: 1,
                textTransform: `uppercase`,
                letterSpacing: `-0.02em`,
                whiteSpace: `nowrap`,
              },
              children: `ARCAT`,
            }),
          }),
          (0, N.jsx)(`div`, {
            className: `absolute left-4 top-6 z-[60] sm:left-8`,
            style: {
              fontFamily: `'JetBrains Mono', monospace`,
            },
            children: (0, N.jsx)(`span`, {
              className: `text-xs font-semibold uppercase`,
              style: {
                color: `#f6f5f1`,
                opacity: 0.9,
                letterSpacing: `0.18em`,
              },
              children: `ARCAT 3D`,
            }),
          }),
          (0, N.jsx)(`div`, {
            ref: t,
            className: `absolute inset-0 z-[3]`,
            children: me.map((e, t) =>
              (0, N.jsx)(
                `img`,
                {
                  ref: (e) => {
                    n.current[t] = e;
                  },
                  src: `/figurines/cat` + (t + 1) + `.png`,
                  alt: ``,
                  draggable: !1,
                  className: `pointer-events-none absolute left-1/2 top-1/2 select-none`,
                  style: {
                    objectFit: `contain`,
                  },
                },
                t
              )
            ),
          }),
          (0, N.jsx)(`div`, {
            className: `hero-foot absolute inset-x-0 bottom-4 z-[60] flex justify-center`,
            children: (0, N.jsx)(F, {
              text: `Scroll to spin the circle`,
              className: `mono text-[10px] uppercase tracking-[0.24em] text-paper/60`,
              speed: 40,
              startDelay: 400,
              loop: !0,
            }),
          }),
        ],
      }),
    })
  );
}
var ge = `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`,
  _e = (e) =>
    e >= 1
      ? `$` +
        e.toLocaleString(`en-US`, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : `$` +
        e.toLocaleString(`en-US`, {
          maximumSignificantDigits: 6,
        }),
  ve = (e) =>
    `$` +
    e.toLocaleString(`en-US`, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }),
  ye = (e) =>
    `$` +
    Intl.NumberFormat(`en-US`, {
      notation: `compact`,
      maximumFractionDigits: 1,
    }).format(e),
  B = (e) => {
    let t = Math.floor(e / 86400);
    return t < 1 ? `<1d` : t >= 30 ? Math.floor(t / 30) + `mo` : t + `d`;
  };
async function be(e, t = 3) {
  let n;
  for (let r = 0; r < t; r++)
    try {
      let t = new AbortController(),
        n = window.setTimeout(() => t.abort(), 12e3),
        r = await fetch(e, {
          signal: t.signal,
        });
      if ((window.clearTimeout(n), !r.ok)) throw Error(`HTTP ` + r.status);
      return await r.json();
    } catch (e) {
      (n = e), await new Promise((e) => setTimeout(e, 700 * (r + 1)));
    }
  throw n;
}
var xe = [
  {
    key: `price`,
    x: `48%`,
    y: `38%`,
    size: `4.2cqw`,
    color: `#ffffff`,
  },
  {
    key: `liquidity`,
    x: `81.5%`,
    y: `39%`,
    size: `4.4cqw`,
    color: `#f0a6ff`,
  },
  {
    key: `mcap`,
    x: `48.5%`,
    y: `64.5%`,
    size: `3.9cqw`,
    color: `#c4b5fd`,
  },
  {
    key: `volume`,
    x: `81%`,
    y: `65%`,
    size: `4.4cqw`,
    color: `#7dff6b`,
  },
];

function Se() {
  let [e, t] = (0, l.useState)(null),
    [n, r] = (0, l.useState)(null),
    [i, a] = (0, l.useState)(!1),
    o = (0, l.useRef)(!0),
    s = async (e = !1) => {
      try {
        let e = await be(
          `/radar/token/0x454368e3c47295e0542174e243a480419c0de3c4`
        );
        if (!o.current) return;
        e && typeof e.price == `number` && (t(e), r(Date.now()));
      } catch {
      } finally {
        e || a(!1);
      }
    };
  (0, l.useEffect)(() => {
    (o.current = !0), s(!0);
    let e = window.setInterval(() => s(!0), 5e3),
      t = () => s(!0);
    return (
      window.addEventListener(`focus`, t),
      () => {
        (o.current = !1),
          window.clearInterval(e),
          window.removeEventListener(`focus`, t);
      }
    );
  }, []);
  let c = n ? Math.max(0, Math.round((Date.now() - n) / 1e3)) : null,
    u = (0, l.useRef)(null);
  (0, l.useEffect)(() => {
    if (e) {
      if (u.current !== null && e.price !== u.current) {
        let e = document.getElementById(`priceTick`);
        e &&
          (e.classList.remove(`tick`), e.offsetWidth, e.classList.add(`tick`));
      }
      u.current = e.price;
    }
  }, [e]);
  let d = {
      price: e ? _e(e.price) : `…`,
      liquidity: e ? ve(e.liquidityUsdc) : `…`,
      mcap: e
        ? Math.round(e.mcap) === Math.round(e.fdv)
          ? ye(e.mcap)
          : ye(e.mcap) + ` / ` + ye(e.fdv)
        : `…`,
      volume: e ? ve(e.volume24) : `…`,
    },
    f = [
      [`24h txns`, e ? String(e.txns24 ?? 0) : `…`],
      [`Traders 24h`, e ? String(e.traders24 ?? 0) : `…`],
      [`Age`, e ? B(e.ageSec) : `…`],
      [`Volume 6h`, e ? ve(e.volume6h ?? 0) : `…`],
    ];
  return (0, N.jsxs)(`div`, {
    children: [
      (0, N.jsxs)(`div`, {
        className: `stat-card-img`,
        "aria-label": `ARCAT token stats card with live values`,
        children: [
          (0, N.jsx)(`video`, {
            src: `/arcatupdated-loop.webm`,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            preload: `auto`,
            "aria-hidden": `true`,
            className: `stat-card-bg`,
          }),
          xe.map((e) =>
            (0, N.jsx)(
              `span`,
              {
                id: e.key === `price` ? `priceTick` : void 0,
                className: `stat-value`,
                style: {
                  left: e.x,
                  top: e.y,
                  fontSize: `clamp(.8rem,` + e.size + `,3.2rem)`,
                  color: e.color,
                  textShadow:
                    `0 0 18px ` +
                    e.color +
                    `88, 0 0 40px ` +
                    e.color +
                    `44, 0 2px 10px rgba(0,0,0,.95)`,
                },
                children: d[e.key],
              },
              e.key
            )
          ),
        ],
      }),
      (0, N.jsxs)(`div`, {
        className: `mt-3 flex flex-wrap items-center justify-between gap-2`,
        children: [
          (0, N.jsxs)(`span`, {
            className: `inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent`,
            children: [
              (0, N.jsx)(`span`, {
                className: `w-2 h-2 rounded-full bg-accent animate-pulse`,
                "aria-hidden": `true`,
              }),
              `live via RadarDEX`,
              c !== null &&
                (0, N.jsxs)(`span`, {
                  className: `text-paper/50`,
                  children: [`· updated `, c, `s ago`],
                }),
            ],
          }),
          (0, N.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [
              (0, N.jsx)(`a`, {
                href: ge,
                target: `_blank`,
                rel: `noopener`,
                className: `inline-flex min-h-[44px] items-center px-4 rounded-lg border border-paper/15 font-mono text-[11px] uppercase tracking-widest text-paper/60 hover:text-paper transition`,
                children: `Open ↗`,
              }),
              (0, N.jsx)(`button`, {
                type: `button`,
                onClick: async () => {
                  a(!0), await s(!1);
                },
                "aria-label": `Refresh stats`,
                className: `w-[44px] h-[44px] rounded-lg border border-paper/15 text-paper/60 hover:text-paper flex items-center justify-center transition`,
                children: (0, N.jsx)(O, {
                  className: `w-5 h-5` + (i ? ` animate-spin` : ``),
                  strokeWidth: 1.8,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, N.jsx)(`div`, {
        className: `mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-paper/10 bg-paper/10 sm:grid-cols-4`,
        children: f.map(([e, t]) =>
          (0, N.jsxs)(
            `div`,
            {
              className: `bg-[#0b0b0d] px-4 py-3`,
              children: [
                (0, N.jsx)(`div`, {
                  className: `text-[9px] uppercase tracking-widest text-paper/50`,
                  children: e,
                }),
                (0, N.jsx)(`div`, {
                  className: `mt-1 font-mono text-[14px] font-semibold text-paper`,
                  children: t,
                }),
              ],
            },
            e
          )
        ),
      }),
    ],
  });
}
var Ce = `0x454368e3c47295e0542174e243a480419c0de3c4`,
  we = `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`;

function Te() {
  return (0, N.jsx)(`section`, {
    id: `live`,
    className: `relative overflow-hidden py-28 md:py-40`,
    children: (0, N.jsxs)(`div`, {
      className: `relative z-[1] mx-auto max-w-[1200px] px-6 sm:px-8`,
      children: [
        (0, N.jsx)(`p`, {
          className: `section-label`,
          "data-reveal": !0,
          children: `04 / Live`,
        }),
        (0, N.jsxs)(`h2`, {
          className: `mt-6 text-[clamp(2.4rem,6vw,4.5rem)]`,
          "data-reveal": !0,
          children: [
            `Live on `,
            (0, N.jsx)(`span`, {
              className: `accent`,
              children: `chain`,
            }),
          ],
        }),
        (0, N.jsx)(`p`, {
          className: `mt-4 max-w-[50ch] text-[15px] leading-relaxed text-paper/70`,
          "data-reveal": !0,
          children: `Price, liquidity, market cap and volume, refreshing every five seconds from the RadarDEX API.`,
        }),
        (0, N.jsx)(`div`, {
          className: `mt-12`,
          "data-reveal": !0,
          children: (0, N.jsx)(Se, {}),
        }),
        (0, N.jsxs)(`div`, {
          className: `mt-6 flex flex-wrap items-center justify-between gap-4`,
          "data-reveal": !0,
          children: [
            (0, N.jsx)(`code`, {
              className: `mono break-all text-[12px] text-paper/70`,
              children: Ce,
            }),
            (0, N.jsxs)(`div`, {
              className: `flex items-center gap-3`,
              children: [
                (0, N.jsx)(`a`, {
                  href: "https://dexscreener.com/arc/0x454368e3c47295e0542174e243a480419c0de3c4",
                  target: `_blank`,
                  rel: `noopener`,
                  className: `btn btn-ghost !min-h-[40px] !px-5 text-[13px]`,
                  children: `Dexscreener`,
                }),
                (0, N.jsx)(`a`, {
                  href: `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`,
                  className: `btn btn-primary !min-h-[40px] !px-5 text-[13px]`,
                  children: `Buy $ARCAT`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var Ee = `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4`;

function De() {
  return (0, N.jsxs)(`section`, {
    id: `cta`,
    className: `relative overflow-hidden bg-bg`,
    children: [
      (0, N.jsx)(`video`, {
        "data-lazy": !0,
        src: Ee,
        loop: !0,
        muted: !0,
        playsInline: !0,
        preload: `none`,
        "aria-hidden": `true`,
        className: `w-full h-auto block`,
      }),
      (0, N.jsx)(`div`, {
        className: `absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/85 via-[#0b0b0d]/40 to-transparent`,
        "aria-hidden": `true`,
      }),
      (0, N.jsx)(`div`, {
        className: `absolute inset-0 flex translate-y-[5%] items-center`,
        children: (0, N.jsx)(`div`, {
          className: `mx-auto w-full max-w-[1200px] px-6 sm:px-8`,
          children: (0, N.jsxs)(`div`, {
            className: `max-w-[560px]`,
            children: [
              (0, N.jsxs)(`h2`, {
                className: `text-[clamp(1.56rem,3.7vw,2.92rem)]`,
                "data-reveal": !0,
                children: [
                  (0, N.jsx)(te, {
                    text: `BUY $ARCAT.`,
                    className: `accent`,
                  }),
                  (0, N.jsx)(`span`, {
                    className: `mt-4 block`,
                    children: `Live on Arc Chain.`,
                  }),
                  (0, N.jsx)(F, {
                    text: `Follow the pack.`,
                    className: `block`,
                    speed: 70,
                    startDelay: 400,
                    loop: !0,
                  }),
                ],
              }),
              (0, N.jsxs)(`div`, {
                className: `mt-8 flex flex-wrap items-center gap-3`,
                "data-reveal": !0,
                children: [
                  (0, N.jsx)(`a`, {
                    href: `https://app.uniswap.org/swap?outputCurrency=0x454368e3c47295e0542174e243a480419c0de3c4&chain=arc`,
                    className: `btn btn-primary !min-h-[37px] !px-[15px] text-[11.5px]`,
                    children: `Buy $ARCAT`,
                  }),
                  (0, N.jsx)(`a`, {
                    href: `#live`,
                    className: `btn btn-ghost !min-h-[37px] !px-[15px] text-[11.5px]`,
                    children: `Live stats`,
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var Oe = `0x454368e3c47295e0542174e243a480419c0de3c4`,
  ke = [
    {
      Icon: R,
      label: `X / Twitter`,
      sub: `@arcatlive`,
      href: `https://x.com/arcatlive`,
    },
    {
      Icon: j,
      label: `Dexscreener`,
      sub: `Live chart and trades`,
      href: `https://dexscreener.com/arc/0x454368e3c47295e0542174e243a480419c0de3c4`,
    },
  ],
  Ae = [
    [
      `What is $ARCAT?`,
      `The first memecoin on Arc Chain, fairly launched via DYOR Swap V2. No presale, no team allocation.`,
    ],
    [
      `Was the launch really fair?`,
      `Yes. 100% of supply hit the open market, liquidity is burned and the contract is renounced.`,
    ],
    [
      `Which chain is $ARCAT on?`,
      `Arc Chain. Add the network to any EVM wallet, hold a little $ARC for gas, and swap on DYOR Swap V2.`,
    ],
    [
      `What are the taxes?`,
      `0% buy and 0% sell. What you swap is what you get.`,
    ],
    [
      `Who controls the liquidity?`,
      `No one. The LP is burned and ownership is renounced. Always verify on RadarDEX before you ape.`,
    ],
    [
      `Is this financial advice?`,
      `No. $ARCAT is a memecoin with no intrinsic value or expectation of profit. Never run with money you cannot afford to lose.`,
    ],
  ];

function je() {
  return (0, N.jsx)(`section`, {
    id: `faq`,
    className: `relative overflow-hidden py-28 md:py-40`,
    children: (0, N.jsxs)(`div`, {
      className: `relative z-[1] mx-auto max-w-[1000px] px-6 sm:px-8`,
      children: [
        (0, N.jsx)(`p`, {
          className: `section-label`,
          "data-reveal": !0,
          children: `05 / Community`,
        }),
        (0, N.jsxs)(`h2`, {
          className: `mt-6 text-[clamp(2.4rem,6vw,4.5rem)]`,
          "data-reveal": !0,
          children: [
            `Join the `,
            (0, N.jsx)(`span`, {
              className: `accent`,
              children: `pack`,
            }),
          ],
        }),
        (0, N.jsx)(`div`, {
          className: `mt-12 grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-2`,
          "data-reveal": !0,
          children: ke.map(({ Icon: e, label: t, sub: n, href: r }) =>
            (0, N.jsxs)(
              `a`,
              {
                href: r,
                target: `_blank`,
                rel: `noopener`,
                className: `group flex items-center justify-between gap-4 bg-[#0b0b0d] p-6 transition hover:bg-panel`,
                children: [
                  (0, N.jsxs)(`span`, {
                    className: `flex items-center gap-4`,
                    children: [
                      (0, N.jsx)(e, {
                        className: `h-6 w-6 flex-none text-accent`,
                        strokeWidth: 1.5,
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          (0, N.jsx)(`span`, {
                            className: `display block text-[15px]`,
                            children: t,
                          }),
                          (0, N.jsx)(`span`, {
                            className: `mono text-[11px] uppercase tracking-widest text-paper/50`,
                            children: n,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(x, {
                    className: `h-5 w-5 text-paper/40 transition group-hover:text-accent`,
                    strokeWidth: 1.5,
                  }),
                ],
              },
              t
            )
          ),
        }),
        (0, N.jsxs)(`div`, {
          className: `mt-24`,
          children: [
            (0, N.jsx)(`p`, {
              className: `section-label`,
              "data-reveal": !0,
              children: `06 / FAQ`,
            }),
            (0, N.jsxs)(`h2`, {
              className: `mt-6 text-[clamp(2.4rem,6vw,4.5rem)]`,
              "data-reveal": !0,
              children: [
                `Curious `,
                (0, N.jsx)(`span`, {
                  className: `accent`,
                  children: `cat`,
                }),
              ],
            }),
            (0, N.jsx)(`div`, {
              className: `mt-10`,
              "data-reveal": !0,
              children: Ae.map(([e, t]) =>
                (0, N.jsxs)(
                  `details`,
                  {
                    className: `divider group py-5`,
                    children: [
                      (0, N.jsxs)(`summary`, {
                        className: `flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-paper`,
                        children: [
                          e,
                          (0, N.jsx)(`span`, {
                            className: `flex-none text-2xl font-light text-accent transition-transform group-open:rotate-45`,
                            "aria-hidden": `true`,
                            children: `+`,
                          }),
                        ],
                      }),
                      (0, N.jsx)(`p`, {
                        className: `mt-3 max-w-[56ch] text-[14px] leading-relaxed text-paper/65`,
                        children: t,
                      }),
                    ],
                  },
                  e
                )
              ),
            }),
          ],
        }),
        (0, N.jsxs)(`footer`, {
          className: `divider mt-24 pt-10`,
          children: [
            (0, N.jsxs)(`div`, {
              className: `flex flex-col items-center justify-between gap-6 md:flex-row`,
              children: [
                (0, N.jsx)(`a`, {
                  href: `#top`,
                  className: `display text-xl font-bold`,
                  children: `ARCAT`,
                }),
                (0, N.jsxs)(`p`, {
                  className: `mono break-all text-center text-[11px] text-paper/50 md:text-right`,
                  children: [`CA: `, Oe],
                }),
              ],
            }),
            (0, N.jsxs)(`div`, {
              className: `mt-8 flex flex-col items-center justify-between gap-4 pt-6 md:flex-row`,
              children: [
                (0, N.jsx)(`p`, {
                  className: `max-w-[52ch] text-center text-[11px] leading-relaxed text-paper/50 md:text-left`,
                  children: `$ARCAT is a memecoin with no intrinsic value or expectation of financial return. Nothing on this page is financial advice. Do your own research.`,
                }),
                (0, N.jsx)(`p`, {
                  className: `mono text-[10px] uppercase tracking-widest text-paper/60`,
                  children: `First memecoin on Arc Chain, 2026`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}

function V(e) {
  if (e === void 0)
    throw ReferenceError(
      `this hasn't been initialised - super() hasn't been called`
    );
  return e;
}

function Me(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Ne = {
    autoSleep: 120,
    force3D: `auto`,
    nullTargetWarn: 1,
    units: {
      lineHeight: ``,
    },
  },
  Pe = {
    duration: 0.5,
    overwrite: !1,
    delay: 0,
  },
  Fe,
  Ie,
  Le,
  Re = 1e8,
  ze = 1 / Re,
  Be = Math.PI * 2,
  Ve = Be / 4,
  He = 0,
  Ue = Math.sqrt,
  We = Math.cos,
  Ge = Math.sin,
  Ke = function (e) {
    return typeof e == `string`;
  },
  qe = function (e) {
    return typeof e == `function`;
  },
  Je = function (e) {
    return typeof e == `number`;
  },
  Ye = function (e) {
    return e === void 0;
  },
  Xe = function (e) {
    return typeof e == `object`;
  },
  Ze = function (e) {
    return e !== !1;
  },
  Qe = function () {
    return typeof window < `u`;
  },
  $e = function (e) {
    return qe(e) || Ke(e);
  },
  et =
    (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  tt = Array.isArray,
  nt = /random\([^)]+\)/g,
  rt = /,\s*/g,
  it = /(?:-?\.?\d|\.)+/gi,
  at = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ot = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  st = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ct = /[+-]=-?[.\d]+/,
  lt = /[^,'"\[\]\s]+/gi,
  ut = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  dt,
  ft,
  pt,
  mt,
  ht = {},
  gt = {},
  _t,
  vt = function (e) {
    return (gt = Xt(e, ht)) && hi;
  },
  yt = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`
    );
  },
  bt = function (e, t) {
    return !t && console.warn(e);
  },
  xt = function (e, t) {
    return (e && (ht[e] = t) && gt && (gt[e] = t)) || ht;
  },
  St = function () {
    return 0;
  },
  Ct = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1,
  },
  wt = {
    suppressEvents: !0,
    kill: !1,
  },
  Tt = {
    suppressEvents: !0,
  },
  Et = {},
  Dt = [],
  Ot = {},
  kt,
  At = {},
  jt = {},
  Mt = 30,
  Nt = [],
  Pt = ``,
  Ft = function (e) {
    var t = e[0],
      n,
      r;
    if ((Xe(t) || qe(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Nt.length; r-- && !Nt[r].targetTest(t); );
      n = Nt[r];
    }
    for (r = e.length; r--; )
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Tr(e[r], n)))) ||
        e.splice(r, 1);
    return e;
  },
  It = function (e) {
    return e._gsap || Ft(Pn(e))[0]._gsap;
  },
  Lt = function (e, t, n) {
    return (n = e[t]) && qe(n)
      ? e[t]()
      : (Ye(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Rt = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  zt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Bt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Vt = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r
    );
  },
  Ht = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n; );
    return r < n;
  },
  Ut = function () {
    var e = Dt.length,
      t = Dt.slice(0),
      n,
      r;
    for (Ot = {}, Dt.length = 0, n = 0; n < e; n++)
      (r = t[n]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Wt = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  Gt = function (e, t, n, r) {
    Dt.length && !Ie && Ut(),
      e.render(t, n, r || !!(Ie && t < 0 && Wt(e))),
      Dt.length && !Ie && Ut();
  },
  Kt = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(lt).length < 2
      ? t
      : Ke(e)
      ? e.trim()
      : e;
  },
  qt = function (e) {
    return e;
  },
  Jt = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Yt = function (e) {
    return function (t, n) {
      for (var r in n)
        r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  Xt = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Zt = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = Xe(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  Qt = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  $t = function (e) {
    var t = e.parent || dt,
      n = e.keyframes ? Yt(tt(e.keyframes)) : Jt;
    if (Ze(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  en = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n]; );
    return n < 0;
  },
  tn = function (e, t, n, r, i) {
    n === void 0 && (n = `_first`), r === void 0 && (r = `_last`);
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  nn = function (e, t, n, r) {
    n === void 0 && (n = `_first`), r === void 0 && (r = `_last`);
    var i = t._prev,
      a = t._next;
    i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null);
  },
  rn = function (e, t) {
    e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  an = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  on = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  sn = function (e, t, n, r) {
    return (
      e._startAt &&
      (Ie
        ? e._startAt.revert(wt)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, r))
    );
  },
  cn = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  ln = function (e) {
    return e._repeat ? un(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  un = function (e, t) {
    var n = Math.floor((e = Bt(e / t)));
    return e && n === e ? n - 1 : n;
  },
  dn = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  fn = function (e) {
    return (e._end = Bt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || ze) || 0)
    ));
  },
  pn = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = Bt(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        fn(e),
        n._dirty || an(n, e)),
      e
    );
  },
  mn = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = dn(e.rawTime(), t)),
        (!t._dur || On(0, t.totalDuration(), n) - t._tTime > ze) &&
          t.render(n, !0)),
      an(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -ze;
    }
  },
  hn = function (e, t, n, r) {
    return (
      t.parent && rn(t),
      (t._start = Bt(
        (Je(n) ? n : n || e !== dt ? Tn(e, n, t) : e._time) + t._delay
      )),
      (t._end = Bt(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      tn(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      yn(t) || (e._recent = t),
      r || mn(e, t),
      e._ts < 0 && pn(e, e._tTime),
      e
    );
  },
  gn = function (e, t) {
    return (
      (ht.ScrollTrigger || yt(`scrollTrigger`, t)) &&
      ht.ScrollTrigger.create(t, e)
    );
  },
  _n = function (e, t, n, r, i) {
    if ((Pr(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Ie &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      kt !== fr.frame
    )
      return Dt.push(e), (e._lazy = [i, r]), 1;
  },
  vn = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  yn = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  bn = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && vn(e) && !(!e._initted && yn(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !yn(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      l,
      u;
    if (
      (o &&
        e._repeat &&
        ((s = On(0, e._tDur, t)),
        (l = un(s, o)),
        e._yoyo && l & 1 && (a = 1 - a),
        l !== un(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== i || Ie || r || e._zTime === ze || (!t && e._zTime))
    ) {
      if (!e._initted && _n(e, t, r, n, s)) return;
      for (
        u = e._zTime,
          e._zTime = t || (n ? ze : 0),
          n ||= t && !u,
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = s,
          c = e._pt;
        c;

      )
        c.r(a, c.d), (c = c._next);
      t < 0 && sn(e, t, n, !0),
        e._onUpdate && !n && Zn(e, `onUpdate`),
        s && e._repeat && !n && e.parent && Zn(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && rn(e, 1),
          !n &&
            !Ie &&
            (Zn(e, a ? `onComplete` : `onReverseComplete`, !0),
            e._prom && e._prom()));
    } else e._zTime ||= t;
  },
  xn = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n; ) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n; ) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  Sn = function (e, t, n, r) {
    var i = e._repeat,
      a = Bt(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : Bt(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && pn(e, (e._tTime = e._tDur * o)),
      e.parent && fn(e),
      n || an(e.parent, e),
      e
    );
  },
  Cn = function (e) {
    return e instanceof Dr ? an(e) : Sn(e, e._dur);
  },
  wn = {
    _start: 0,
    endTime: St,
    totalDuration: St,
  },
  Tn = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || wn,
      o = t.duration() >= Re ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return Ke(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
          ? (n in i || (i[n] = o), i[n])
          : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
            l && r && (c = (c / 100) * (tt(r) ? r[0] : r).totalDuration()),
            s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
      ? o
      : +n;
  },
  En = function (e, t, n) {
    var r = Je(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o); )
        (o = s.vars.defaults || {}), (s = Ze(s.vars.inherit) && s.parent);
      (a.immediateRender = Ze(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]);
    }
    return new Vr(t[0], a, t[i + 1]);
  },
  Dn = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  On = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  kn = function (e, t) {
    return !Ke(e) || !(t = ut.exec(e)) ? `` : t[1];
  },
  An = function (e, t, n) {
    return Dn(n, function (n) {
      return On(e, t, n);
    });
  },
  jn = [].slice,
  Mn = function (e, t) {
    return (
      e &&
      Xe(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && Xe(e[0]))) &&
      !e.nodeType &&
      e !== ft
    );
  },
  Nn = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (Ke(e) && !t) || Mn(e, 1)
          ? (r = n).push.apply(r, Pn(e))
          : n.push(e);
      }) || n
    );
  },
  Pn = function (e, t, n) {
    return Le && !t && Le.selector
      ? Le.selector(e)
      : Ke(e) && !n && (pt || !pr())
      ? jn.call((t || mt).querySelectorAll(e), 0)
      : tt(e)
      ? Nn(e, n)
      : Mn(e)
      ? jn.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Fn = function (e) {
    return (
      (e = Pn(e)[0] || bt(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Pn(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? bt(`Invalid scope`) || mt.createElement(`div`)
            : e
        );
      }
    );
  },
  In = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ln = function (e) {
    if (qe(e)) return e;
    var t = Xe(e)
        ? e
        : {
            each: e,
          },
      n = br(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      Ke(r)
        ? (l = u =
            {
              center: 0.5,
              edges: 0.5,
              end: 1,
            }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, d) {
        var f = (d || t).length,
          p = a[f],
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S;
        if (!p) {
          if (((S = t.grid === `auto` ? 0 : (t.grid || [1, Re])[1]), !S)) {
            for (
              b = -Re;
              b < (b = d[S++].getBoundingClientRect().left) && S < f;

            );
            S < f && S--;
          }
          for (
            p = a[f] = [],
              m = s ? Math.min(S, f) * l - 0.5 : r % S,
              h = S === Re ? 0 : s ? (f * u) / S - 0.5 : (r / S) | 0,
              b = 0,
              x = Re,
              y = 0;
            y < f;
            y++
          )
            (g = (y % S) - m),
              (_ = h - ((y / S) | 0)),
              (p[y] = v = c ? Math.abs(c === `y` ? _ : g) : Ue(g * g + _ * _)),
              v > b && (b = v),
              v < x && (x = v);
          r === `random` && In(p),
            (p.max = b - x),
            (p.min = x),
            (p.v = f =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (S > f
                    ? f - 1
                    : c
                    ? c === `y`
                      ? f / S
                      : S
                    : Math.max(S, f / S)) ||
                0) * (r === `edges` ? -1 : 1)),
            (p.b = f < 0 ? i - f : i),
            (p.u = kn(t.amount || t.each) || 0),
            (n = n && f < 0 ? yr(n) : n);
        }
        return (
          (f = (p[e] - p.min) / p.max || 0),
          Bt(p.b + (n ? n(f) : f) * p.v) + p.u
        );
      }
    );
  },
  Rn = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = Bt(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (Je(n) ? 0 : kn(n));
    };
  },
  zn = function (e, t) {
    var n = tt(e),
      r,
      i;
    return (
      !n &&
        Xe(e) &&
        ((r = n = e.radius || Re),
        e.values
          ? ((e = Pn(e.values)), (i = !Je(e[0])) && (r *= r))
          : (e = Rn(e.increment))),
      Dn(
        t,
        n
          ? qe(e)
            ? function (t) {
                return (i = e(t)), Math.abs(i - t) <= r ? i : t;
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = Re,
                    s = 0,
                    c = e.length,
                    l,
                    u;
                  c--;

                )
                  i
                    ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                    : (l = Math.abs(e[c] - n)),
                    l < o && ((o = l), (s = c));
                return (
                  (s = !r || o <= r ? e[s] : t),
                  i || s === t || Je(t) ? s : s + kn(t)
                );
              }
          : Rn(e)
      )
    );
  },
  Bn = function (e, t, n, r) {
    return Dn(tt(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return tt(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                r
            ) / r;
    });
  },
  Vn = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  Hn = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || kn(n));
    };
  },
  Un = function (e, t, n) {
    return Jn(e, t, 0, 1, n);
  },
  Wn = function (e, t, n) {
    return Dn(n, function (n) {
      return e[~~t(n)];
    });
  },
  Gn = function e(t, n, r) {
    var i = n - t;
    return tt(t)
      ? Wn(t, e(0, t.length), n)
      : Dn(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  Kn = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return tt(t)
      ? Wn(t, e(0, t.length - 1), n)
      : Dn(r, function (e) {
          return (e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e);
        });
  },
  qn = function (e) {
    return e.replace(nt, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(rt);
      return Bn(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  Jn = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return Dn(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  Yn = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = Ke(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o))
        (t = {
          p: t,
        }),
          (n = {
            p: n,
          });
      else if (tt(t) && !tt(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++)
          u.push(e(t[l - 1], t[l]));
        d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n);
      } else i || (t = Xt(tt(t) ? [] : {}, t));
      if (!u) {
        for (c in n) kr.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return Xr(e, s) || (o ? t.p : t);
        };
      }
    }
    return Dn(r, a);
  },
  Xn = function (e, t, n) {
    var r = e.labels,
      i = Re,
      a,
      o,
      s;
    for (a in r)
      (o = r[a] - t),
        o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o));
    return s;
  },
  Zn = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = Le,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && Dt.length && Ut(),
        o && (Le = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (Le = a),
        l
      );
  },
  Qn = function (e) {
    return (
      rn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Ie),
      e.progress() < 1 && Zn(e, `onInterrupt`),
      e
    );
  },
  $n,
  er = [],
  tr = function (e) {
    if (e) {
      if (((e = (!e.name && e.default) || e), Qe() || e.headless)) {
        var t = e.name,
          n = qe(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = {
            init: St,
            render: Xr,
            add: kr,
            kill: Qr,
            modifier: Zr,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Kr,
            aliases: {},
            register: 0,
          };
        if ((pr(), e !== r)) {
          if (At[t]) return;
          Jt(r, Jt(Qt(e, i), a)),
            Xt(r.prototype, Xt(i, Qt(e, a))),
            (At[(r.prop = t)] = r),
            e.targetTest && (Nt.push(r), (Et[t] = 1)),
            (t =
              (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) +
              `Plugin`);
        }
        xt(t, r), e.register && e.register(hi, r, ti);
      } else er.push(e);
    }
  },
  nr = 255,
  rr = {
    aqua: [0, nr, nr],
    lime: [0, nr, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, nr],
    navy: [0, 0, 128],
    white: [nr, nr, nr],
    olive: [128, 128, 0],
    yellow: [nr, nr, 0],
    orange: [nr, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [nr, 0, 0],
    pink: [nr, 192, 203],
    cyan: [0, nr, nr],
    transparent: [nr, nr, nr, 0],
  },
  ir = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        nr +
        0.5) |
        0
    );
  },
  ar = function (e, t, n) {
    var r = e ? (Je(e) ? [e >> 16, (e >> 8) & nr, e & nr] : 0) : rr.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), rr[e]))
        r = rr[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              `#` +
              i +
              i +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & nr, r & nr, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & nr, e & nr]);
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(it)), !t))
          (s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = ir(s + 1 / 3, i, a)),
            (r[1] = ir(s, i, a)),
            (r[2] = ir(s - 1 / 3, i, a));
        else if (~e.indexOf(`=`))
          return (r = e.match(at)), n && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(it) || rr.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / nr),
        (a = r[1] / nr),
        (o = r[2] / nr),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                ? (o - i) / f + 2
                : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  or = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(cr).forEach(function (e) {
        var i = e.match(ot) || [];
        t.push.apply(t, i), n.push((r += i.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  sr = function (e, t, n) {
    var r = ``,
      i = (e + r).match(cr),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = ar(e, t, 1)) &&
          a +
            (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) +
            `)`
        );
      })),
      n && ((l = or(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(cr, `1`).split(ot), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o)
            ? i.shift() || a + `0,0,0,0)`
            : (l.length ? l : i.length ? i : n).shift());
    if (!c)
      for (c = e.split(cr), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  cr = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in rr) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  lr = /hsl[a]?\(/,
  ur = function (e) {
    var t = e.join(` `),
      n;
    if (((cr.lastIndex = 0), cr.test(t)))
      return (
        (n = lr.test(t)),
        (e[1] = sr(e[1], n)),
        (e[0] = sr(e[0], n, or(e[1]))),
        !0
      );
  },
  dr,
  fr = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          _t &&
            (!pt &&
              Qe() &&
              ((ft = pt = window),
              (mt = ft.document || {}),
              (ht.gsap = hi),
              (ft.gsapVersions || (ft.gsapVersions = [])).push(hi.version),
              vt(gt || ft.GreenSockGlobals || (!ft.gsap && ft) || {}),
              er.forEach(tr)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            (dr = 1),
            m(2));
        },
        sleep: function () {
          (u ? cancelAnimationFrame : clearTimeout)(c), (dr = 0), (l = St);
        },
        lagSmoothing: function (e, r) {
          (t = e || 1 / 0), (n = Math.min(r || 33, t));
        },
        fps: function (e) {
          (a = 1e3 / (e || 240)), (o = d.time * 1e3 + a);
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                e(t, n, i, a), d.remove(r);
              }
            : e;
          return d.remove(e), s[n ? `unshift` : `push`](r), pr(), r;
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  pr = function () {
    return !dr && fr.wake();
  },
  H = {},
  mr = /^[\d.\-M][\d.\-,\s]/,
  hr = /["']/g,
  gr = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(`:`),
        r = n[0],
        i = 1,
        a = n.length,
        o,
        s,
        c;
      i < a;
      i++
    )
      (s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(hr, ``).trim() : +c),
        (r = s.substr(o + 1).trim());
    return t;
  },
  _r = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  vr = function (e) {
    var t = (e + ``).split(`(`),
      n = H[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf(`{`) ? [gr(t[1])] : _r(e).split(`,`).map(Kt)
        )
      : H._CE && mr.test(e)
      ? H._CE(``, e)
      : n;
  },
  yr = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  br = function (e, t) {
    return (e && (qe(e) ? e : H[e] || vr(e))) || t;
  },
  xr = function (e, t, n, r) {
    n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        });
    var i = {
        easeIn: t,
        easeOut: n,
        easeInOut: r,
      },
      a;
    return (
      Rt(e, function (e) {
        for (var t in ((H[e] = ht[e] = i), (H[(a = e.toLowerCase())] = n), i))
          H[
            a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)
          ] = H[e + `.` + t] = i[t];
      }),
      i
    );
  },
  Sr = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Cr = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / Be) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * Ge((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
          ? function (e) {
              return 1 - s(1 - e);
            }
          : Sr(s);
    return (
      (a = Be / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  wr = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
          ? function (e) {
              return 1 - r(1 - e);
            }
          : Sr(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
Rt(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  xr(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    }
  );
}),
  (H.Linear.easeNone = H.none = H.Linear.easeIn),
  xr(`Elastic`, Cr(`in`), Cr(`out`), Cr()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
          ? e * (a - 1.5 / t) ** 2 + 0.75
          : a < i
          ? e * (a -= 2.25 / t) * a + 0.9375
          : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    xr(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a
    );
  })(7.5625, 2.75),
  xr(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  xr(`Circ`, function (e) {
    return -(Ue(1 - e * e) - 1);
  }),
  xr(`Sine`, function (e) {
    return e === 1 ? 1 : -We(e * Ve) + 1;
  }),
  xr(`Back`, wr(`in`), wr(`out`), wr()),
  (H.SteppedEase =
    H.steps =
    ht.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - ze;
          return function (e) {
            return (((r * On(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (Pe.ease = H[`quad.out`]),
  Rt(
    `onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,
    function (e) {
      return (Pt += e + `,` + e + `Params,`);
    }
  );
var Tr = function (e, t) {
    (this.id = He++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Lt),
      (this.set = t ? t.getSetter : Kr);
  },
  Er = (function () {
    function e(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Sn(this, +e.duration, 1, 1),
        (this.data = e.data),
        Le && ((this._ctx = Le), Le.data.push(this)),
        dr || fr.wake();
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            Sn(
              this,
              this._repeat < 0
                ? e
                : (e - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((pr(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (pn(this, e), !n._dp || n.parent || mn(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) ||
              (this._ts < 0 && e > 0) ||
              (!this._tDur && !e)) &&
            hn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === ze) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), Gt(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + ln(this)) %
                (this._dur + this._rDelay) || (e ? this._dur : 0),
              t
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                ln(this),
              t
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
          ? un(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -ze ? 0 : this._rts;
        if (this._rts === e) return this;
        var n =
          this.parent && this._ts ? dn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -ze ? 0 : this._rts),
          this.totalTime(
            On(-Math.abs(this._delay), this.totalDuration(), n),
            t !== !1
          ),
          fn(this),
          on(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (pr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== ze &&
                      (this._tTime -= ze)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = Bt(e);
          var t = this.parent || this._dp;
          return (
            t &&
              (t._sort || !this.parent) &&
              hn(t, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start +
          (Ze(e) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? dn(t.rawTime(e), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = Tt);
        var t = Ie;
        return (
          (Ie = e),
          Wt(this) &&
            (this.timeline && this.timeline.revert(e),
            this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (Ie = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
          (n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp);
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), Cn(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return (this._rDelay = e), Cn(this), t ? this.time(t) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(Tn(this, e), Ze(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, Ze(t)),
          this._dur || (this._zTime = -ze),
          this
        );
      }),
      (t.play = function (e, t) {
        return e != null && this.seek(e, t), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (e, t) {
        return (
          e != null && this.seek(e || this.totalDuration(), t),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (e, t) {
        return e != null && this.seek(e, t), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() &&
              this.timeScale(-this._rts || (e ? -ze : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ze), this;
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - ze)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t),
                n && (r[e + `Params`] = n),
                e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = qe(e) ? e : qt,
            a = function () {
              var e = t.then;
              (t.then = null),
                n && n(),
                qe(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e);
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) ||
          (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        Qn(this);
      }),
      e
    );
  })();
Jt(Er.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ze,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Dr = (function (e) {
  Me(t, e);

  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = Ze(t.sortChildren)),
      dt && hn(t.parent || dt, V(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && gn(V(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return En(0, arguments, this), this;
    }),
    (n.from = function (e, t, n) {
      return En(1, arguments, this), this;
    }),
    (n.fromTo = function (e, t, n, r) {
      return En(2, arguments, this), this;
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        $t(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new Vr(e, t, Tn(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return hn(this, Vr.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new Vr(e, n, Tn(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        ($t(n).immediateRender = Ze(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        ($t(r).immediateRender = Ze(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : Bt(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y;
      if (
        (this !== dt && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)
      ) {
        if (
          (r !== this._time &&
            a &&
            ((o += this._time - r), (e += this._time - r)),
          (c = o),
          (g = this._start),
          (h = this._ts),
          (p = !h),
          s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (
            ((v = this._yoyo),
            (f = a + this._rDelay),
            this._repeat < -1 && e < 0)
          )
            return this.totalTime(f * 100 + e, t, n);
          if (
            ((c = Bt(o % f)),
            o === i
              ? ((d = this._repeat), (c = a))
              : ((_ = Bt(o / f)),
                (d = ~~_),
                d && d === _ && ((c = a), d--),
                c > a && (c = a)),
            (_ = un(this._tTime, f)),
            !r &&
              this._tTime &&
              _ !== d &&
              this._tTime - _ * f - this._dur <= 0 &&
              (_ = d),
            v && d & 1 && ((c = a - c), (y = 1)),
            d !== _ && !this._lock)
          ) {
            var b = v && _ & 1,
              x = b === (v && d & 1);
            if (
              (d < _ && (b = !b),
              (r = b ? 0 : o % a ? a : o),
              (this._lock = 1),
              (this.render(r || (y ? 0 : Bt(d * f)), t, !a)._lock = 0),
              (this._tTime = o),
              !t && this.parent && Zn(this, `onRepeat`),
              this.vars.repeatRefresh &&
                !y &&
                ((this.invalidate()._lock = 1), (_ = d)),
              (r && r !== this._time) ||
                p !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                (i = this._tDur),
                x &&
                  ((this._lock = 2),
                  (r = b ? a : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !y && this.invalidate()),
                (this._lock = 0),
                !this._ts && !p))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = xn(this, Bt(r), Bt(c))), m && (o -= c - (c = m._start))),
          (this._tTime = o),
          (this._time = c),
          (this._act = !!h),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && o && a && !t && !_ && (Zn(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (l = this._first; l; ) {
            if (
              ((u = l._next), (l._act || c >= l._start) && l._ts && m !== l)
            ) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (c - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (c - l._start) * l._ts,
                  t,
                  n
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                (m = 0), u && (o += this._zTime = -ze);
                break;
              }
            }
            l = u;
          }
        else {
          l = this._last;
          for (var S = e < 0 ? e : c; l; ) {
            if (((u = l._prev), (l._act || S <= l._end) && l._ts && m !== l)) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (S - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) +
                        (S - l._start) * l._ts,
                  t,
                  n || (Ie && Wt(l))
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                (m = 0), u && (o += this._zTime = S ? -ze : ze);
                break;
              }
            }
            l = u;
          }
        }
        if (
          m &&
          !t &&
          (this.pause(),
          (m.render(c >= r ? 0 : -ze)._zTime = c >= r ? 1 : -1),
          this._ts)
        )
          return (this._start = g), fn(this), this.render(e, t, n);
        this._onUpdate && !t && Zn(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
            (g === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !a) &&
                ((o === i && this._ts > 0) || (!o && this._ts < 0)) &&
                rn(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (o || r || !i) &&
                (Zn(
                  this,
                  o === i && e >= 0 ? `onComplete` : `onReverseComplete`,
                  !0
                ),
                this._prom &&
                  !(o < i && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((Je(t) || (t = Tn(this, t, e)), !(e instanceof Er))) {
        if (tt(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (Ke(e)) return this.addLabel(e, t);
        if (qe(e)) e = Vr.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : hn(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -Re);
      for (var i = [], a = this._first; a; )
        a._start >= r &&
          (a instanceof Vr
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next);
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return Ke(e)
        ? this.removeLabel(e)
        : qe(e)
        ? this.killTweensOf(e)
        : (e.parent === this && nn(this, e),
          e === this._recent && (this._recent = this._last),
          an(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Bt(
              fr.time -
                (this._ts > 0
                  ? t / this._ts
                  : (this.totalDuration() - t) / -this._ts)
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return (this.labels[e] = Tn(this, t)), this;
    }),
    (n.removeLabel = function (e) {
      return delete this.labels[e], this;
    }),
    (n.addPause = function (e, t, n) {
      var r = Vr.delayedCall(0, t || St, n);
      return (
        (r.data = `isPause`), (this._hasPause = 1), hn(this, r, Tn(this, e))
      );
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = Tn(this, e); t; )
        t._start === e && t.data === `isPause` && rn(t), (t = t._next);
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--; )
        Mr !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = Pn(e), i = this._first, a = Je(t), o; i; )
        i instanceof Vr
          ? Ht(i._targets, r) &&
            (a
              ? (!Mr || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next);
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = Tn(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = Vr.to(
          n,
          Jt(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs(
                  (r - (a && `time` in a ? a.time : n._time)) / n.timeScale()
                ) ||
                ze,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs(
                      (r - (a && `time` in a ? a.time : n._time)) /
                        n.timeScale()
                    );
                  u._dur !== e && Sn(u, e, 0, 1).render(u._time, !0, !0),
                    (l = 1);
                }
                o && o.apply(u, s || []);
              },
            },
            t
          )
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(
        t,
        Jt(
          {
            startAt: {
              time: Tn(this, e),
            },
          },
          n
        )
      );
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return e === void 0 && (e = this._time), Xn(this, Tn(this, e));
    }),
    (n.previousLabel = function (e) {
      return e === void 0 && (e = this._time), Xn(this, Tn(this, e), 1);
    }),
    (n.currentLabel = function (e) {
      return arguments.length
        ? this.seek(e, !0)
        : this.previousLabel(this._time + ze);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = Bt(e); r; )
        r._start >= n && ((r._start += e), (r._end += e)), (r = r._next);
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return an(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(t), (n = n._next);
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t; ) (n = t._next), this.remove(t), (t = n);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        an(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = Re,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) /
            (n.reversed() ? -e : e)
        );
      if (n._dirty) {
        for (s = n.parent; r; )
          (a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (hn(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                ((n._start += Bt(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a);
        Sn(n, n === dt && n._time > t ? n._time : t, 1, 1), (n._dirty = 0);
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((dt._ts && (Gt(dt, dn(e, dt)), (kt = fr.frame)), fr.frame >= Mt)) {
        Mt += Ne.autoSleep || 120;
        var t = dt._first;
        if ((!t || !t._ts) && Ne.autoSleep && fr._listeners.length < 2) {
          for (; t && !t._ts; ) t = t._next;
          t || fr.sleep();
        }
      }
    }),
    t
  );
})(Er);
Jt(Dr.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0,
});
var Or = function (e, t, n, r, i, a, o) {
    var s = new ti(this._pt, e, t, 0, 1, Yr, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = qn(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(st) || [];
      (u = st.exec(r));

    )
      (p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? Vt(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = st.lastIndex));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (ct.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  kr = function (e, t, n, r, i, a, o, s, c, l) {
    qe(r) && (r = r(i || 0, e, a));
    var u = e[t],
      d =
        n === `get`
          ? qe(u)
            ? c
              ? e[
                  t.indexOf(`set`) || !qe(e[`get` + t.substr(3)])
                    ? t
                    : `get` + t.substr(3)
                ](c)
              : e[t]()
            : u
          : n,
      f = qe(u) ? (c ? Wr : Ur) : Hr,
      p;
    if (
      (Ke(r) &&
        (~r.indexOf(`random(`) && (r = qn(r)),
        r.charAt(1) === `=` &&
          ((p = Vt(d, r) + (kn(d) || 0)), (p || p === 0) && (r = p))),
      !l || d !== r || Nr)
    )
      return !isNaN(d * r) && r !== ``
        ? ((p = new ti(
            this._pt,
            e,
            t,
            +d || 0,
            r - (d || 0),
            typeof u == `boolean` ? Jr : qr,
            0,
            f
          )),
          c && (p.fp = c),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!u && !(t in e) && yt(t, r),
          Or.call(this, e, t, d, r, f, s || Ne.stringFilter, c));
  },
  Ar = function (e, t, n, r, i) {
    if (
      (qe(e) && (e = Rr(e, i, t, n, r)),
      !Xe(e) || (e.style && e.nodeType) || tt(e) || et(e))
    )
      return Ke(e) ? Rr(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = Rr(e[o], i, t, n, r);
    return a;
  },
  jr = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      At[e] &&
      (o = new At[e]()).init(
        i,
        o.rawVars ? t[e] : Ar(t[e], r, i, a, n),
        n,
        r,
        a
      ) !== !1 &&
      ((n._pt = s = new ti(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)),
      n !== $n)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--; )
        c[o._props[l]] = s;
    return o;
  },
  Mr,
  Nr,
  Pr = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      s = i.immediateRender,
      c = i.lazy,
      l = i.onUpdate,
      u = i.runBackwards,
      d = i.yoyoEase,
      f = i.keyframes,
      p = i.autoRevert,
      m = t._dur,
      h = t._startAt,
      g = t._targets,
      _ = t.parent,
      v = _ && _.data === `nested` ? _.vars.targets : g,
      y = t._overwrite === `auto` && !Fe,
      b = t.timeline,
      x = i.easeReverse || d,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P;
    if (
      (b && (!f || !a) && (a = `none`),
      (t._ease = br(a, Pe.ease)),
      (t._rEase = x && (br(x) || t._ease)),
      (t._from = !b && !!i.runBackwards),
      t._from && (t.ratio = 1),
      !b || (f && !i.stagger))
    ) {
      if (
        ((k = g[0] ? It(g[0]).harness : 0),
        (N = k && i[k.prop]),
        (S = Qt(i, Et)),
        h &&
          (h._zTime < 0 && h.progress(1),
          n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? wt : Ct),
          (h._lazy = 0)),
        o)
      ) {
        if (
          (rn(
            (t._startAt = Vr.set(
              g,
              Jt(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !h && Ze(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return Zn(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (Ie || (!s && !p)) && t._startAt.revert(wt),
          s && m && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (u && m && !h) {
        if (
          (n && (s = !1),
          (w = Jt(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: s && !h && Ze(c),
              immediateRender: s,
              stagger: 0,
              parent: _,
            },
            S
          )),
          N && (w[k.prop] = N),
          rn((t._startAt = Vr.set(g, w))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (Ie ? t._startAt.revert(wt) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !s)
        )
          e(t._startAt, ze, ze);
        else if (!n) return;
      }
      for (
        t._pt = t._ptCache = 0, c = (m && Ze(c)) || (c && !m), C = 0;
        C < g.length;
        C++
      ) {
        if (
          ((E = g[C]),
          (O = E._gsap || Ft(g)[C]._gsap),
          (t._ptLookup[C] = j = {}),
          Ot[O.id] && Dt.length && Ut(),
          (M = v === g ? C : v.indexOf(E)),
          k &&
            (A = new k()).init(E, N || S, t, M, v) !== !1 &&
            ((t._pt = T =
              new ti(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority)),
            A._props.forEach(function (e) {
              j[e] = T;
            }),
            A.priority && (D = 1)),
          !k || N)
        )
          for (w in S)
            At[w] && (A = jr(w, S, t, M, E, v))
              ? A.priority && (D = 1)
              : (j[w] = T =
                  kr.call(t, E, w, `get`, S[w], M, v, 0, i.stringFilter));
        t._op && t._op[C] && t.kill(E, t._op[C]),
          y &&
            t._pt &&
            ((Mr = t),
            dt.killTweensOf(E, j, t.globalTime(n)),
            (P = !t.parent),
            (Mr = 0)),
          t._pt && c && (Ot[O.id] = 1);
      }
      D && ei(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !P),
      f && n <= 0 && b.render(Re, !0, !0);
  },
  Fr = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
        if (!l)
          return (
            (Nr = 1),
            (e.vars[t] = `+=0`),
            Pr(e, o),
            (Nr = 0),
            s
              ? bt(
                  t +
                    ` not eligible for reset. Try splitting into individual properties`
                )
              : 1
          );
        c.push(l);
      }
    for (f = c.length; f--; )
      (u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        u.e && (u.e = zt(n) + kn(u.e)),
        u.b && (u.b = l.s + kn(u.b));
  },
  Ir = function (e, t) {
    var n = e[0] ? It(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = Xt({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--; ) i[s[o]] = i[a];
    return i;
  },
  Lr = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (tt(t))
      (o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({
            t: (n / (t.length - 1)) * 100,
            v: e,
            e: i,
          });
        });
    else
      for (a in t)
        (o = n[a] || (n[a] = [])),
          a === `ease` ||
            o.push({
              t: parseFloat(e),
              v: t[a],
              e: i,
            });
  },
  Rr = function (e, t, n, r, i) {
    return qe(e)
      ? e.call(t, n, r, i)
      : Ke(e) && ~e.indexOf(`random(`)
      ? qn(e)
      : e;
  },
  zr =
    Pt +
    `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  Br = {};
Rt(zr + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (Br[e] = 1);
});
var Vr = (function (e) {
  Me(t, e);

  function t(t, n, r, i) {
    var a;
    typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (a = e.call(this, i ? n : $t(n)) || this);
    var o = a.vars,
      s = o.duration,
      c = o.delay,
      l = o.immediateRender,
      u = o.stagger,
      d = o.overwrite,
      f = o.keyframes,
      p = o.defaults,
      m = o.scrollTrigger,
      h = n.parent || dt,
      g = (tt(t) || et(t) ? Je(t[0]) : `length` in n) ? [t] : Pn(t),
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    if (
      ((a._targets = g.length
        ? Ft(g)
        : bt(
            `GSAP target ` + t + ` not found. https://gsap.com`,
            !Ne.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      f || u || $e(s) || $e(c))
    ) {
      n = a.vars;
      var T = n.easeReverse || n.yoyoEase;
      if (
        ((_ = a.timeline =
          new Dr({
            data: `nested`,
            defaults: p || {},
            targets: h && h.data === `nested` ? h.vars.targets : g,
          })),
        _.kill(),
        (_.parent = _._dp = V(a)),
        (_._start = 0),
        u || $e(s) || $e(c))
      ) {
        if (((b = g.length), (C = u && Ln(u)), Xe(u)))
          for (x in u) ~zr.indexOf(x) && ((w ||= {}), (w[x] = u[x]));
        for (v = 0; v < b; v++)
          (y = Qt(n, Br)),
            (y.stagger = 0),
            T && (y.easeReverse = T),
            w && Xt(y, w),
            (S = g[v]),
            (y.duration = +Rr(s, V(a), v, S, g)),
            (y.delay = (+Rr(c, V(a), v, S, g) || 0) - a._delay),
            !u &&
              b === 1 &&
              y.delay &&
              ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
            _.to(S, y, C ? C(v, S, g) : 0),
            (_._ease = H.none);
        _.duration() ? (s = c = 0) : (a.timeline = 0);
      } else if (f) {
        $t(
          Jt(_.vars.defaults, {
            ease: `none`,
          })
        ),
          (_._ease = br(f.ease || n.ease || `none`));
        var E = 0,
          D,
          O,
          k;
        if (tt(f))
          f.forEach(function (e) {
            return _.to(g, e, `>`);
          }),
            _.duration();
        else {
          for (x in ((y = {}), f))
            x === `ease` || x === `easeEach` || Lr(x, f[x], y, f.easeEach);
          for (x in y)
            for (
              D = y[x].sort(function (e, t) {
                return e.t - t.t;
              }),
                E = 0,
                v = 0;
              v < D.length;
              v++
            )
              (O = D[v]),
                (k = {
                  ease: O.e,
                  duration: ((O.t - (v ? D[v - 1].t : 0)) / 100) * s,
                }),
                (k[x] = O.v),
                _.to(g, k, E),
                (E += k.duration);
          _.duration() < s &&
            _.to(
              {},
              {
                duration: s - _.duration(),
              }
            );
        }
      }
      s || a.duration((s = _.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Fe && ((Mr = V(a)), dt.killTweensOf(g), (Mr = 0)),
      hn(h, V(a), r),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (l ||
        (!s &&
          !f &&
          a._start === Bt(h._time) &&
          Ze(l) &&
          cn(V(a)) &&
          h.data !== `nested`)) &&
        ((a._tTime = -ze), a.render(Math.max(0, -c) || 0)),
      m && gn(V(a), m),
      a
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - ze && !o ? i : e < ze ? 0 : e,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h;
      if (!a) bn(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (h = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = Bt(s % d)),
            s === i
              ? ((u = this._repeat), (c = a))
              : ((f = Bt(s / d)),
                (u = ~~f),
                u && u === f ? ((c = a), u--) : c > a && (c = a)),
            (p = this._yoyo && u & 1),
            p && (c = a - c),
            (f = un(this._tTime, d)),
            c === r && !n && this._initted && u === f)
          )
            return (this._tTime = s), this;
          u !== f &&
            this.vars.repeatRefresh &&
            !p &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1),
            (this.render(Bt(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (_n(this, o ? e : c, n, t, s)) return (this._tTime = 0), this;
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f))
            return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var g = c < r;
          if (g !== this._inv) {
            var _ = g ? r : a - r;
            (this._inv = g),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = _ ? (g ? -1 : 1) / _ : 0),
              (this._invScale = g ? -this.ratio : 1 - this.ratio),
              (this._invEase = g ? this._rEase : this._ease);
          }
          this.ratio = m =
            this._invRatio +
            this._invScale *
              this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(c / a);
        if (
          (this._from && (this.ratio = m = 1 - m),
          (this._tTime = s),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !f && (Zn(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l; ) l.r(m, l.d), (l = l._next);
        (h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate &&
            !t &&
            (o && sn(this, e, t, n), Zn(this, `onUpdate`)),
          this._repeat &&
            u !== f &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            Zn(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && sn(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              rn(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || p) &&
              (Zn(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      dr || fr.wake(), this._ts || this.play();
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || Pr(this, a),
        (o = this._ease(a / this._dur)),
        Fr(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (pn(this, 0),
            this.parent ||
              tn(
                this._dp,
                this,
                `_first`,
                `_last`,
                this._dp._sort ? `_start` : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Qn(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Ie),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, Mr && Mr.vars.overwrite !== !0)
            ._first || Qn(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            Sn(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? Pn(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      if ((!t || t === `all`) && en(r, i))
        return t === `all` && (this._pt = 0), Qn(this);
      for (
        s = this._op = this._op || [],
          t !== `all` &&
            (Ke(t) &&
              ((d = {}),
              Rt(t, function (e) {
                return (d[e] = 1);
              }),
              (t = d)),
            (t = Ir(r, t))),
          p = r.length;
        p--;

      )
        if (~i.indexOf(r[p]))
          for (d in ((c = a[p]),
          t === `all`
            ? ((s[p] = t), (u = c), (l = {}))
            : ((l = s[p] = s[p] || {}), (u = t)),
          u))
            (f = c && c[d]),
              f &&
                ((!(`kill` in f.d) || f.d.kill(d) === !0) && nn(this, f, `_pt`),
                delete c[d]),
              l !== `all` && (l[d] = 1);
      return this._initted && !this._pt && o && Qn(this), this;
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return En(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return En(2, arguments);
    }),
    (t.set = function (e, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n);
    }),
    (t.killTweensOf = function (e, t, n) {
      return dt.killTweensOf(e, t, n);
    }),
    t
  );
})(Er);
Jt(Vr.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0,
}),
  Rt(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    Vr[e] = function () {
      var t = new Dr(),
        n = jn.call(arguments, 0);
      return n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n);
    };
  });
var Hr = function (e, t, n) {
    return (e[t] = n);
  },
  Ur = function (e, t, n) {
    return e[t](n);
  },
  Wr = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  Gr = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Kr = function (e, t) {
    return qe(e[t]) ? Ur : Ye(e[t]) && e.setAttribute ? Gr : Hr;
  },
  qr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  Jr = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Yr = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n; )
        (r =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          r),
          (n = n._next);
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  Xr = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  Zr = function (e, t, n, r) {
    for (var i = this._pt, a; i; )
      (a = i._next), i.p === r && i.modifier(e, t, n), (i = a);
  },
  Qr = function (e) {
    for (var t = this._pt, n, r; t; )
      (r = t._next),
        (t.p === e && !t.op) || t.op === e
          ? nn(this, t, `_pt`)
          : t.dep || (n = 1),
        (t = r);
    return !n;
  },
  $r = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  ei = function (e) {
    for (var t = e._pt, n, r, i, a; t; ) {
      for (n = t._next, r = i; r && r.pr > t.pr; ) r = r._next;
      (t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n);
    }
    e._pt = i;
  },
  ti = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      (this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || qr),
        (this.d = o || this),
        (this.set = s || Hr),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = $r),
          (this.m = e),
          (this.mt = n),
          (this.tween = t);
      }),
      e
    );
  })();
Rt(
  Pt +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (Et[e] = 1);
  }
),
  (ht.TweenMax = ht.TweenLite = Vr),
  (ht.TimelineLite = ht.TimelineMax = Dr),
  (dt = new Dr({
    sortChildren: !1,
    defaults: Pe,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (Ne.stringFilter = ur);
var ni = [],
  ri = {},
  ii = [],
  ai = 0,
  oi = 0,
  si = function (e) {
    return (ri[e] || ii).map(function (e) {
      return e();
    });
  },
  ci = function () {
    var e = Date.now(),
      t = [];
    e - ai > 2 &&
      (si(`matchMediaInit`),
      ni.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          (i = ft.matchMedia(n[a]).matches),
            i && (o = 1),
            i !== r[a] && ((r[a] = i), (s = 1));
        s && (e.revert(), o && t.push(e));
      }),
      si(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (ai = e),
      si(`matchMedia`));
  },
  li = (function () {
    function e(e, t) {
      (this.selector = t && Fn(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = oi++),
        e && this.add(e);
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        qe(e) && ((n = t), (t = e), (e = qe));
        var r = this,
          i = function () {
            var e = Le,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = Fn(n)),
              (Le = r),
              (a = t.apply(r, arguments)),
              qe(a) && r._r.push(a),
              (Le = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === qe
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
            ? (r[e] = i)
            : i
        );
      }),
      (t.ignore = function (e) {
        var t = Le;
        (Le = null), e(this), (Le = t);
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof Vr &&
                  !(n.parent && n.parent.data === `nested`) &&
                  t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--; )
                  (i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      }));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur ||
                          e._delay ||
                          (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;

                )
                  (i = n.data[r]),
                    i instanceof Dr
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof Vr) && i.revert && i.revert(e);
                n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = ni.length; r--; )
            ni[r].id === this.id && ni.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  ui = (function () {
    function e(e) {
      (this.contexts = []), (this.scope = e), Le && Le.data.push(this);
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        Xe(e) ||
          (e = {
            matches: e,
          });
        var r = new li(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (Le && !r.selector && (r.selector = Le.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          o === `all`
            ? (s = 1)
            : ((a = ft.matchMedia(e[o])),
              a &&
                (ni.indexOf(r) < 0 && ni.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener
                  ? a.addListener(ci)
                  : a.addEventListener(`change`, ci)));
        return (
          s &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  di = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return tr(e);
      });
    },
    timeline: function (e) {
      return new Dr(e);
    },
    getTweensOf: function (e, t) {
      return dt.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      Ke(e) && (e = Pn(e)[0]);
      var i = It(e || {}).get,
        a = n ? qt : Kt;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((At[t] && At[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((At[t] && At[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Pn(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return hi.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--; ) r[t](e);
        };
      }
      e = e[0] || {};
      var a = At[t],
        o = It(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ($n._pt = 0),
                r.init(e, n ? t + n : t, $n, 0, [e]),
                r.render(1, r),
                $n._pt && Xr(1, $n);
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = hi.to(
          e,
          Jt(
            ((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r),
            n || {}
          )
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return (a.tween = i), a;
    },
    isTweening: function (e) {
      return dt.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = br(e.ease, Pe.ease)), Zt(Pe, e || {});
    },
    config: function (e) {
      return Zt(Ne, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      (r || ``).split(`,`).forEach(function (e) {
        return (
          e && !At[e] && !ht[e] && bt(t + ` effect requires ` + e + ` plugin.`)
        );
      }),
        (jt[t] = function (e, t, r) {
          return n(Pn(e), Jt(t || {}, i), r);
        }),
        a &&
          (Dr.prototype[t] = function (e, n, r) {
            return this.add(jt[t](e, Xe(n) ? n : (r = n) && {}, this), r);
          });
    },
    registerEase: function (e, t) {
      H[e] = br(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? br(e, t) : H;
    },
    getById: function (e) {
      return dt.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Dr(e),
        r,
        i;
      for (
        n.smoothChildTiming = Ze(e.smoothChildTiming),
          dt.remove(n),
          n._dp = 0,
          n._time = n._tTime = dt._time,
          r = dt._first;
        r;

      )
        (i = r._next),
          (t ||
            !(
              !r._dur &&
              r instanceof Vr &&
              r.vars.onComplete === r._targets[0]
            )) &&
            hn(n, r, r._start - r._delay),
          (r = i);
      return hn(dt, n, 0), n;
    },
    context: function (e, t) {
      return e ? new li(e, t) : Le;
    },
    matchMedia: function (e) {
      return new ui(e);
    },
    matchMediaRefresh: function () {
      return (
        ni.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || ci()
      );
    },
    addEventListener: function (e, t) {
      var n = ri[e] || (ri[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = ri[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: Gn,
      wrapYoyo: Kn,
      distribute: Ln,
      random: Bn,
      snap: zn,
      normalize: Un,
      getUnit: kn,
      clamp: An,
      splitColor: ar,
      toArray: Pn,
      selector: Fn,
      mapRange: Jn,
      pipe: Vn,
      unitize: Hn,
      interpolate: Yn,
      shuffle: In,
    },
    install: vt,
    effects: jt,
    ticker: fr,
    updateRoot: Dr.updateRoot,
    plugins: At,
    globalTimeline: dt,
    core: {
      PropTween: ti,
      globals: xt,
      Tween: Vr,
      Timeline: Dr,
      Animation: Er,
      getCache: It,
      _removeLinkedListItem: nn,
      reverting: function () {
        return Ie;
      },
      context: function (e) {
        return e && Le && (Le.data.push(e), (e._ctx = Le)), Le;
      },
      suppressOverwrites: function (e) {
        return (Fe = e);
      },
    },
  };
Rt(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (di[e] = Vr[e]);
}),
  fr.add(Dr.updateRoot),
  ($n = di.to(
    {},
    {
      duration: 0,
    }
  ));
var fi = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  pi = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--; )
        (a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = fi(a, r)),
            a && a.modifier && a.modifier(t[r], e, n[i], r));
  },
  mi = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (Ke(n) &&
              ((r = {}),
              Rt(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          pi(e, n);
        };
      },
    };
  },
  hi =
    di.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            (s = e.getAttribute(a) || ``),
              (o = this.add(
                e,
                `setAttribute`,
                (s || 0) + ``,
                t[a],
                r,
                i,
                0,
                0,
                a
              )),
              (o.op = a),
              (o.b = s),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Ie ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      mi(`roundProps`, Rn),
      mi(`modifiers`),
      mi(`snap`, zn)
    ) || di;
(Vr.version = Dr.version = hi.version = `3.15.0`),
  (_t = 1),
  Qe() && pr(),
  H.Power0,
  H.Power1,
  H.Power2,
  H.Power3,
  H.Power4,
  H.Linear,
  H.Quad,
  H.Cubic,
  H.Quart,
  H.Quint,
  H.Strong,
  H.Elastic,
  H.Back,
  H.SteppedEase,
  H.Bounce,
  H.Sine,
  H.Expo,
  H.Circ;
var gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci = function () {
    return typeof window < `u`;
  },
  wi = {},
  Ti = 180 / Math.PI,
  Ei = Math.PI / 180,
  Di = Math.atan2,
  Oi = 1e8,
  ki = /([A-Z])/g,
  Ai = /(left|right|width|margin|padding|x)/i,
  U = /[\s,\(]\S/,
  ji = {
    autoAlpha: `opacity,visibility`,
    scale: `scaleX,scaleY`,
    alpha: `opacity`,
  },
  Mi = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Ni = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  Pi = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Fi = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Ii = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Li = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Ri = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  zi = function (e, t, n) {
    return (e.style[t] = n);
  },
  Bi = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  Vi = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  Hi = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  Ui = function (e, t, n, r, i) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = n), a.renderTransform(i, a);
  },
  Wi = function (e, t, n, r, i) {
    var a = e._gsap;
    (a[t] = n), a.renderTransform(i, a);
  },
  Gi = `transform`,
  Ki = Gi + `Origin`,
  qi = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in wi && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        (t = ji[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = fa(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : fa(i, t)),
          t === Ki && (this.tfm.zOrigin = o.zOrigin);
      else
        return ji.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(Gi) >= 0) return;
      o.svg &&
        ((this.svgo = i.getAttribute(`data-svg-origin`)),
        this.props.push(Ki, n, ``)),
        (t = Gi);
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  Ji = function (e) {
    e.translate &&
      (e.removeProperty(`translate`),
      e.removeProperty(`scale`),
      e.removeProperty(`rotate`));
  },
  Yi = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
        ? (n[e[i]] = e[i + 2])
        : n.removeProperty(
            e[i].substr(0, 2) === `--`
              ? e[i]
              : e[i].replace(ki, `-$1`).toLowerCase()
          );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      r.svg &&
        (r.renderTransform(),
        t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = Si()),
        (!i || !i.isStart) &&
          !n[Gi] &&
          (Ji(n),
          r.zOrigin &&
            n[Ki] &&
            ((n[Ki] += ` ` + r.zOrigin + `px`),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Xi = function (e, t) {
    var n = {
      target: e,
      props: [],
      revert: Yi,
      save: qi,
    };
    return (
      e._gsap || hi.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  Zi,
  Qi = function (e, t) {
    var n = _i.createElementNS
      ? _i.createElementNS(
          (t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`),
          e
        )
      : _i.createElement(e);
    return n && n.style ? n : _i.createElement(e);
  },
  $i = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(ki, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, ta(n) || n, 1)) ||
      ``
    );
  },
  ea = `O,Moz,ms,Ms,Webkit`.split(`,`),
  ta = function (e, t, n) {
    var r = (t || bi).style,
      i = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      i-- && !(ea[i] + e in r);

    );
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? ea[i] : ``) + e;
  },
  na = function () {
    Ci() &&
      window.document &&
      ((gi = window),
      (_i = gi.document),
      (vi = _i.documentElement),
      (bi = Qi(`div`) || {
        style: {},
      }),
      Qi(`div`),
      (Gi = ta(Gi)),
      (Ki = Gi + `Origin`),
      (bi.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (Zi = !!ta(`perspective`)),
      (Si = hi.core.reverting),
      (yi = 1));
  },
  ra = function (e) {
    var t = e.ownerSVGElement,
      n = Qi(
        `svg`,
        (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`
      ),
      r = e.cloneNode(!0),
      i;
    (r.style.display = `block`), n.appendChild(r), vi.appendChild(n);
    try {
      i = r.getBBox();
    } catch {}
    return n.removeChild(r), vi.removeChild(n), i;
  },
  ia = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  aa = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      (t = ra(e)), (n = 1);
    }
    return (
      (t && (t.width || t.height)) || n || (t = ra(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +ia(e, [`x`, `cx`, `x1`]) || 0,
            y: +ia(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  oa = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && aa(e));
  },
  sa = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      t in wi && t !== Ki && (t = Gi),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(
              r === `--` ? t : t.replace(ki, `-$1`).toLowerCase()
            ))
          : n.removeAttribute(t);
    }
  },
  ca = function (e, t, n, r, i, a) {
    var o = new ti(e._pt, t, n, 0, 1, a ? Ri : Li);
    return (e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o;
  },
  la = {
    deg: 1,
    rad: 1,
    turn: 1,
  },
  ua = {
    grid: 1,
    flex: 1,
  },
  da = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = bi.style,
      c = Ai.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || la[i] || la[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && oa(t)),
      (p || o === `%`) && (wi[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        zt(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) ||
        (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === _i || !h.appendChild) && (h = _i.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === fr.time && !g.uncache)
    )
      return zt((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      (t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : sa(t, n);
    } else
      (p || o === `%`) &&
        !ua[$i(h, `display`)] &&
        (s.position = $i(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(bi),
        (m = bi[u]),
        h.removeChild(bi),
        (s.position = `absolute`);
    return (
      c && p && ((g = It(h)), (g.time = fr.time), (g.width = h[u])),
      zt(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  fa = function (e, t, n, r) {
    var i;
    return (
      yi || na(),
      t in ji &&
        t !== `transform` &&
        ((t = ji[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      wi[t] && t !== `transform`
        ? ((i = wa(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : Ta($i(e, Ki)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i =
              (_a[t] && _a[t](e, t, n)) ||
              $i(e, t) ||
              Lt(e, t) ||
              +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? da(e, t, i, n) + n : i
    );
  },
  pa = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = ta(t, e, 1),
        a = i && $i(e, i, 1);
      a && a !== n
        ? ((t = i), (n = a))
        : t === `borderColor` && (n = $i(e, `borderTopColor`));
    }
    var o = new ti(this._pt, e.style, t, 0, 1, Yr),
      s = 0,
      c = 0,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b;
    if (
      ((o.b = n),
      (o.e = r),
      (n += ``),
      (r += ``),
      r.substring(0, 6) === `var(--` &&
        (r = $i(e, r.substring(4, r.indexOf(`)`)))),
      r === `auto` &&
        ((m = e.style[t]),
        (e.style[t] = r),
        (r = $i(e, t) || r),
        m ? (e.style[t] = m) : sa(e, t)),
      (l = [n, r]),
      ur(l),
      (n = l[0]),
      (r = l[1]),
      (d = n.match(ot) || []),
      (b = r.match(ot) || []),
      b.length)
    ) {
      for (; (u = ot.exec(r)); )
        (h = u[0]),
          (_ = r.substring(s, u.index)),
          p
            ? (p = (p + 1) % 5)
            : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
          h !== (m = d[c++] || ``) &&
            ((f = parseFloat(m) || 0),
            (y = m.substr((f + ``).length)),
            h.charAt(1) === `=` && (h = Vt(f, h) + y),
            (g = parseFloat(h)),
            (v = h.substr((g + ``).length)),
            (s = ot.lastIndex - v.length),
            v ||
              ((v = v || Ne.units[t] || y),
              s === r.length && ((r += v), (o.e += v))),
            y !== v && (f = da(e, t, m, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: _ || c === 1 ? _ : `,`,
              s: f,
              c: g - f,
              m: (p && p < 4) || t === `zIndex` ? Math.round : 0,
            }));
      o.c = s < r.length ? r.substring(s, r.length) : ``;
    } else o.r = t === `display` && r === `none` ? Ri : Li;
    return ct.test(r) && (o.e = 0), (this._pt = o), o;
  },
  ma = {
    top: `0%`,
    bottom: `100%`,
    left: `0%`,
    right: `100%`,
    center: `50%`,
  },
  ha = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = ma[n] || n),
      (t[1] = ma[r] || r),
      t.join(` `)
    );
  },
  ga = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) (r.cssText = ``), (s = 1);
      else
        for (i = i.split(`,`), c = i.length; --c > -1; )
          (o = i[c]),
            wi[o] && ((s = 1), (o = o === `transformOrigin` ? Ki : Gi)),
            sa(n, o);
      s &&
        (sa(n, Gi),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          wa(n, 1),
          (a.uncache = 1),
          Ji(r)));
    }
  },
  _a = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new ti(e._pt, t, n, 0, 0, ga));
        return (a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1;
      }
    },
  },
  va = [1, 0, 0, 1, 0, 0],
  ya = {},
  ba = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  xa = function (e) {
    var t = $i(e, Gi);
    return ba(t) ? va : t.substr(7).match(at).map(zt);
  },
  Sa = function (e, t) {
    var n = e._gsap || It(e),
      r = e.style,
      i = xa(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? va : i)
      : (i === va &&
          !e.offsetParent &&
          e !== vi &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), vi.appendChild(e)),
          (i = xa(e)),
          s ? (r.display = s) : sa(e, `display`),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
              ? a.appendChild(e)
              : vi.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  Ca = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || Sa(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    n
      ? s !== va &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = aa(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[Ki] = `0px 0px`),
      a &&
        (ca(a, o, `xOrigin`, c, y),
        ca(a, o, `yOrigin`, l, b),
        ca(a, o, `xOffset`, u, o.xOffset),
        ca(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b);
  },
  wa = function (e, t) {
    var n = e._gsap || new Tr(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      o = `deg`,
      s = getComputedStyle(e),
      c = $i(e, Ki) || `0`,
      l = (u = d = m = h = g = _ = v = y = 0),
      u,
      d,
      f = (p = 1),
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      N,
      P,
      ee,
      F,
      I,
      te,
      ne,
      re;
    return (
      (n.svg = !!(e.getCTM && oa(e))),
      s.translate &&
        ((s.translate !== `none` ||
          s.scale !== `none` ||
          s.rotate !== `none`) &&
          (r[Gi] =
            (s.translate === `none`
              ? ``
              : `translate3d(` +
                (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) +
                `) `) +
            (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) +
            (s.scale === `none`
              ? ``
              : `scale(` + s.scale.split(` `).join(`,`) + `) `) +
            (s[Gi] === `none` ? `` : s[Gi])),
        (r.scale = r.rotate = r.translate = `none`)),
      (S = Sa(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((N = e.getBBox()),
            (c = n.xOrigin - N.x + `px ` + (n.yOrigin - N.y) + `px`),
            (M = ``))
          : (M = !t && e.getAttribute(`data-svg-origin`)),
        Ca(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
      (b = n.xOrigin || 0),
      (x = n.yOrigin || 0),
      S !== va &&
        ((E = S[0]),
        (D = S[1]),
        (O = S[2]),
        (k = S[3]),
        (l = A = S[4]),
        (u = j = S[5]),
        S.length === 6
          ? ((f = Math.sqrt(E * E + D * D)),
            (p = Math.sqrt(k * k + O * O)),
            (m = E || D ? Di(D, E) * Ti : 0),
            (_ = O || k ? Di(O, k) * Ti + m : 0),
            _ && (p *= Math.abs(Math.cos(_ * Ei))),
            n.svg && ((l -= b - (b * E + x * O)), (u -= x - (b * D + x * k))))
          : ((re = S[6]),
            (te = S[7]),
            (ee = S[8]),
            (F = S[9]),
            (I = S[10]),
            (ne = S[11]),
            (l = S[12]),
            (u = S[13]),
            (d = S[14]),
            (C = Di(re, I)),
            (h = C * Ti),
            C &&
              ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = A * w + ee * T),
              (N = j * w + F * T),
              (P = re * w + I * T),
              (ee = A * -T + ee * w),
              (F = j * -T + F * w),
              (I = re * -T + I * w),
              (ne = te * -T + ne * w),
              (A = M),
              (j = N),
              (re = P)),
            (C = Di(-O, I)),
            (g = C * Ti),
            C &&
              ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = E * w - ee * T),
              (N = D * w - F * T),
              (P = O * w - I * T),
              (ne = k * T + ne * w),
              (E = M),
              (D = N),
              (O = P)),
            (C = Di(D, E)),
            (m = C * Ti),
            C &&
              ((w = Math.cos(C)),
              (T = Math.sin(C)),
              (M = E * w + D * T),
              (N = A * w + j * T),
              (D = D * w - E * T),
              (j = j * w - A * T),
              (E = M),
              (A = N)),
            h &&
              Math.abs(h) + Math.abs(m) > 359.9 &&
              ((h = m = 0), (g = 180 - g)),
            (f = zt(Math.sqrt(E * E + D * D + O * O))),
            (p = zt(Math.sqrt(j * j + re * re))),
            (C = Di(A, j)),
            (_ = Math.abs(C) > 2e-4 ? C * Ti : 0),
            (y = ne ? 1 / (ne < 0 ? -ne : ne) : 0)),
        n.svg &&
          ((M = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !ba($i(e, Gi))),
          M && e.setAttribute(`transform`, M))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (i
          ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        l -
        ((n.xPercent =
          l &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = d + a),
      (n.scaleX = zt(f)),
      (n.scaleY = zt(p)),
      (n.rotation = zt(m) + o),
      (n.rotationX = zt(h) + o),
      (n.rotationY = zt(g) + o),
      (n.skewX = _ + o),
      (n.skewY = v + o),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(` `)[2]) || (!t && n.zOrigin) || 0) &&
        (r[Ki] = Ta(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = Ne.force3D),
      (n.renderTransform = n.svg ? Ma : Zi ? ja : Da),
      (n.uncache = 0),
      n
    );
  },
  Ta = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  Ea = function (e, t, n) {
    var r = kn(t);
    return zt(parseFloat(t) + parseFloat(da(e, `x`, n + `px`, r))) + r;
  },
  Da = function (e, t) {
    (t.z = `0px`),
      (t.rotationY = t.rotationX = `0deg`),
      (t.force3D = 0),
      ja(e, t);
  },
  Oa = `0deg`,
  ka = `0px`,
  Aa = `) `,
  ja = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== Oa || l !== Oa)) {
      var x = parseFloat(l) * Ei,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      (x = parseFloat(u) * Ei),
        (w = Math.cos(x)),
        (a = Ea(_, a, S * w * -v)),
        (o = Ea(_, o, -Math.sin(x) * -v)),
        (s = Ea(_, s, C * w * -v + v));
    }
    h !== ka && (y += `perspective(` + h + Aa),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== ka || o !== ka || s !== ka) &&
        (y +=
          s !== ka || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + Aa),
      c !== Oa && (y += `rotate(` + c + Aa),
      l !== Oa && (y += `rotateY(` + l + Aa),
      u !== Oa && (y += `rotateX(` + u + Aa),
      (d !== Oa || f !== Oa) && (y += `skew(` + d + `, ` + f + Aa),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Aa),
      (_.style[Gi] = y || `translate(0, 0)`);
  },
  Ma = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    (s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= Ei),
          (c *= Ei),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= Ei),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l &&
              ((w = Math.tan(l)),
              (w = Math.sqrt(1 + w * w)),
              (b *= w),
              (x *= w))),
          (b = zt(b)),
          (x = zt(x)),
          (S = zt(S)),
          (C = zt(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = da(f, `x`, a, `px`)), (y = da(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = zt(v + p - (p * b + m * S) + h)),
        (y = zt(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()),
        (v = zt(v + (r / 100) * w.width)),
        (y = zt(y + (i / 100) * w.height))),
      (w =
        `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[Gi] = w);
  },
  Na = function (e, t, n, r, i) {
    var a = 360,
      o = Ke(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Ti : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * Oi) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * Oi) % a) - ~~(s / a) * a)),
      (e._pt = u = new ti(e._pt, t, n, r, s, Ni)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  Pa = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Fa = function (e, t, n) {
    var r = Pa({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[Gi] = t),
        (o = wa(n, 1)),
        sa(n, Gi),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[Gi]),
        (a[Gi] = t),
        (o = wa(n, 1)),
        (a[Gi] = c)),
    wi))
      (c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = kn(c)),
          (p = kn(l)),
          (u = f === p ? parseFloat(c) : da(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new ti(e._pt, o, s, u, d - u, Mi)),
          (e._pt.u = p || 0),
          e._props.push(s));
    Pa(o, r);
  };
Rt(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  _a[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return fa(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    (a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i);
  };
});
var Ia = {
  name: `css`,
  register: na,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      o = e.style,
      s = n.vars.startAt,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    for (m in (yi || na(),
    (this.styles = this.styles || Xi(e)),
    (C = this.styles.props),
    (this.tween = n),
    t))
      if (m !== `autoRound` && ((l = t[m]), !(At[m] && jr(m, t, n, r, e, i)))) {
        if (
          ((f = typeof l),
          (p = _a[m]),
          f === `function` && ((l = l.call(n, r, e, i)), (f = typeof l)),
          f === `string` && ~l.indexOf(`random(`) && (l = qn(l)),
          p)
        )
          p(this, e, m, l, n) && (S = 1);
        else if (m.substr(0, 2) === `--`)
          (c = (getComputedStyle(e).getPropertyValue(m) + ``).trim()),
            (l += ``),
            (cr.lastIndex = 0),
            cr.test(c) ||
              ((h = kn(c)),
              (g = kn(l)),
              g ? h !== g && (c = da(e, m, c, g) + g) : h && (l += h)),
            this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
            a.push(m),
            C.push(m, 0, o[m]);
        else if (f !== `undefined`) {
          if (
            (s && m in s
              ? ((c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m]),
                Ke(c) && ~c.indexOf(`random(`) && (c = qn(c)),
                kn(c + ``) ||
                  c === `auto` ||
                  (c += Ne.units[m] || kn(fa(e, m)) || ``),
                (c + ``).charAt(1) === `=` && (c = fa(e, m)))
              : (c = fa(e, m)),
            (d = parseFloat(c)),
            (_ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2)),
            _ && (l = l.substr(2)),
            (u = parseFloat(l)),
            m in ji &&
              (m === `autoAlpha` &&
                (d === 1 && fa(e, `visibility`) === `hidden` && u && (d = 0),
                C.push(`visibility`, 0, o.visibility),
                ca(
                  this,
                  o,
                  `visibility`,
                  d ? `inherit` : `hidden`,
                  u ? `inherit` : `hidden`,
                  !u
                )),
              m !== `scale` &&
                m !== `transform` &&
                ((m = ji[m]), ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
            (v = m in wi),
            v)
          ) {
            if (
              (this.styles.save(m),
              (w = l),
              f === `string` && l.substring(0, 6) === `var(--`)
            ) {
              if (
                ((l = $i(e, l.substring(4, l.indexOf(`)`)))),
                l.substring(0, 5) === `calc(`)
              ) {
                var T = e.style.perspective;
                (e.style.perspective = l),
                  (l = $i(e, `perspective`)),
                  T ? (e.style.perspective = T) : sa(e, `perspective`);
              }
              u = parseFloat(l);
            }
            if (
              (y ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  wa(e, t.parseTransform),
                (x = t.smoothOrigin !== !1 && b.smooth),
                (y = this._pt =
                  new ti(this._pt, o, Gi, 0, 1, b.renderTransform, b, 0, -1)),
                (y.dep = 1)),
              m === `scale`)
            )
              (this._pt = new ti(
                this._pt,
                b,
                `scaleY`,
                b.scaleY,
                (_ ? Vt(b.scaleY, _ + u) : u) - b.scaleY || 0,
                Mi
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, m),
                (m += `X`);
            else if (m === `transformOrigin`) {
              C.push(Ki, 0, o[Ki]),
                (l = ha(l)),
                b.svg
                  ? Ca(e, l, 0, x, 0, this)
                  : ((g = parseFloat(l.split(` `)[2]) || 0),
                    g !== b.zOrigin && ca(this, b, `zOrigin`, b.zOrigin, g),
                    ca(this, o, m, Ta(c), Ta(l)));
              continue;
            } else if (m === `svgOrigin`) {
              Ca(e, l, 1, x, 0, this);
              continue;
            } else if (m in ya) {
              Na(this, b, m, d, _ ? Vt(d, _ + l) : l);
              continue;
            } else if (m === `smoothOrigin`) {
              ca(this, b, `smooth`, b.smooth, l);
              continue;
            } else if (m === `force3D`) {
              b[m] = l;
              continue;
            } else if (m === `transform`) {
              Fa(this, l, e);
              continue;
            }
          } else m in o || (m = ta(m) || m);
          if (v || ((u || u === 0) && (d || d === 0) && !U.test(l) && m in o))
            (h = (c + ``).substr((d + ``).length)),
              (u ||= 0),
              (g = kn(l) || (m in Ne.units ? Ne.units[m] : h)),
              h !== g && (d = da(e, m, c, g)),
              (this._pt = new ti(
                this._pt,
                v ? b : o,
                m,
                d,
                (_ ? Vt(d, _ + u) : u) - d,
                !v && (g === `px` || m === `zIndex`) && t.autoRound !== !1
                  ? Ii
                  : Mi
              )),
              (this._pt.u = g || 0),
              v && w !== l
                ? ((this._pt.b = c), (this._pt.e = w), (this._pt.r = Fi))
                : h !== g && g !== `%` && ((this._pt.b = c), (this._pt.r = Pi));
          else if (m in o) pa.call(this, e, m, c, _ ? _ + l : l);
          else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
          else if (m !== `parseTransform`) {
            yt(m, l);
            continue;
          }
          v ||
            (m in o
              ? C.push(m, 0, o[m])
              : typeof e[m] == `function`
              ? C.push(m, 2, e[m]())
              : C.push(m, 1, c || e[m])),
            a.push(m);
        }
      }
    S && ei(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Si())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: fa,
  aliases: ji,
  getSetter: function (e, t, n) {
    var r = ji[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in wi && t !== Ki && (e._gsap.x || fa(e, `x`))
        ? n && xi === n
          ? t === `scale`
            ? Hi
            : Vi
          : (xi = n || {}) && (t === `scale` ? Ui : Wi)
        : e.style && !Ye(e.style[t])
        ? zi
        : ~t.indexOf(`-`)
        ? Bi
        : Kr(e, t)
    );
  },
  core: {
    _removeProperty: sa,
    _getMatrix: Sa,
  },
};
(hi.utils.checkPrefix = ta),
  (hi.core.getStyleSaver = Xi),
  (function (e, t, n, r) {
    var i = Rt(e + `,` + t + `,` + n, function (e) {
      wi[e] = 1;
    });
    Rt(t, function (e) {
      (Ne.units[e] = `deg`), (ya[e] = 1);
    }),
      (ji[i[13]] = e + `,` + t),
      Rt(r, function (e) {
        var t = e.split(`:`);
        ji[t[1]] = i[t[0]];
      });
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`
  ),
  Rt(
    `x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,
    function (e) {
      Ne.units[e] = `px`;
    }
  ),
  hi.registerPlugin(Ia);
var La = hi.registerPlugin(Ia) || hi;
La.core.Tween;

function Ra(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}

function za(e, t, n) {
  return t && Ra(e.prototype, t), n && Ra(e, n), e;
}
var Ba,
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a = function () {
    return (
      Ba ||
      (typeof window < `u` && (Ba = window.gsap) && Ba.registerPlugin && Ba)
    );
  },
  eo = 1,
  to = [],
  W = [],
  no = [],
  ro = Date.now,
  io = function (e, t) {
    return t;
  },
  ao = function () {
    var e = Ja.core,
      t = e.bridge || {},
      n = e._scrollers,
      r = e._proxies;
    n.push.apply(n, W),
      r.push.apply(r, no),
      (W = n),
      (no = r),
      (io = function (e, n) {
        return t[e](n);
      });
  },
  oo = function (e, t) {
    return ~no.indexOf(e) && no[no.indexOf(e) + 1][t];
  },
  so = function (e) {
    return !!~Ya.indexOf(e);
  },
  G = function (e, t, n, r, i) {
    return e.addEventListener(t, n, {
      passive: r !== !1,
      capture: !!i,
    });
  },
  K = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  co = `scrollLeft`,
  lo = `scrollTop`,
  uo = function () {
    return (Xa && Xa.isPressed) || W.cache++;
  },
  fo = function (e, t) {
    var n = function n(r) {
      if (r || r === 0) {
        eo && (Ha.history.scrollRestoration = `manual`);
        var i = Xa && Xa.isPressed;
        (r = n.v = Math.round(r) || (Xa && Xa.iOS ? 1 : 0)),
          e(r),
          (n.cacheID = W.cache),
          i && io(`ss`, r);
      } else
        (t || W.cache !== n.cacheID || io(`ref`)) &&
          ((n.cacheID = W.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (n.offset = 0), e && n;
  },
  po = {
    s: co,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: fo(function (e) {
      return arguments.length
        ? Ha.scrollTo(e, mo.sc())
        : Ha.pageXOffset || Ua[co] || Wa[co] || Ga[co] || 0;
    }),
  },
  mo = {
    s: lo,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: po,
    sc: fo(function (e) {
      return arguments.length
        ? Ha.scrollTo(po.sc(), e)
        : Ha.pageYOffset || Ua[lo] || Wa[lo] || Ga[lo] || 0;
    }),
  },
  ho = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Ba.utils.toArray)(e)[0] ||
      (typeof e == `string` && Ba.config().nullTargetWarn !== !1
        ? console.warn(`Element not found:`, e)
        : null)
    );
  },
  go = function (e, t) {
    for (var n = t.length; n--; ) if (t[n] === e || t[n].contains(e)) return !0;
    return !1;
  },
  _o = function (e, t) {
    var n = t.s,
      r = t.sc;
    so(e) && (e = Ua.scrollingElement || Wa);
    var i = W.indexOf(e),
      a = r === mo.sc ? 1 : 2;
    !~i && (i = W.push(e) - 1), W[i + a] || G(e, `scroll`, uo);
    var o = W[i + a],
      s =
        o ||
        (W[i + a] =
          fo(oo(e, n), !0) ||
          (so(e)
            ? r
            : fo(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })));
    return (
      (s.target = e),
      o || (s.smooth = Ba.getProperty(e, `scrollBehavior`) === `smooth`),
      s
    );
  },
  vo = function (e, t, n) {
    var r = e,
      i = e,
      a = ro(),
      o = a,
      s = t || 50,
      c = Math.max(500, s * 3),
      l = function (e, t) {
        var c = ro();
        t || c - a > s
          ? ((i = r), (r = e), (o = a), (a = c))
          : n
          ? (r += e)
          : (r = i + ((e - i) / (c - o)) * (a - o));
      };
    return {
      update: l,
      reset: function () {
        (i = r = n ? 0 : r), (o = a = 0);
      },
      getVelocity: function (e) {
        var t = o,
          s = i,
          u = ro();
        return (
          (e || e === 0) && e !== r && l(e),
          a === o || u - o > c
            ? 0
            : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
        );
      },
    };
  },
  yo = function (e, t) {
    return (
      t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  bo = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  xo = function () {
    (Ja = Ba.core.globals().ScrollTrigger), Ja && Ja.core && ao();
  },
  So = function (e) {
    return (
      (Ba = e || $a()),
      !Va &&
        Ba &&
        typeof document < `u` &&
        document.body &&
        ((Ha = window),
        (Ua = document),
        (Wa = Ua.documentElement),
        (Ga = Ua.body),
        (Ya = [Ha, Ua, Wa, Ga]),
        Ba.utils.clamp,
        (Qa = Ba.core.context || function () {}),
        (qa = `onpointerenter` in Ga ? `pointer` : `mouse`),
        (Ka = Co.isTouch =
          Ha.matchMedia &&
          Ha.matchMedia(`(hover: none), (pointer: coarse)`).matches
            ? 1
            : `ontouchstart` in Ha ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Za = Co.eventTypes =
          (
            `ontouchstart` in Wa
              ? `touchstart,touchmove,touchcancel,touchend`
              : `onpointerdown` in Wa
              ? `pointerdown,pointermove,pointercancel,pointerup`
              : `mousedown,mousemove,mouseup,mouseup`
          ).split(`,`)),
        setTimeout(function () {
          return (eo = 0);
        }, 500),
        (Va = 1)),
      Ja || xo(),
      Va
    );
  };
(po.op = mo), (W.cache = 0);
var Co = (function () {
  function e(e) {
    this.init(e);
  }
  var t = e.prototype;
  return (
    (t.init = function (e) {
      Va || So(Ba) || console.warn(`Please gsap.registerPlugin(Observer)`),
        Ja || xo();
      var t = e.tolerance,
        n = e.dragMinimum,
        r = e.type,
        i = e.target,
        a = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        c = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        d = e.wheelSpeed,
        f = e.event,
        p = e.onDragStart,
        m = e.onDragEnd,
        h = e.onDrag,
        g = e.onPress,
        _ = e.onRelease,
        v = e.onRight,
        y = e.onLeft,
        b = e.onUp,
        x = e.onDown,
        S = e.onChangeX,
        C = e.onChangeY,
        w = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        O = e.onHoverEnd,
        k = e.onMove,
        A = e.ignoreCheck,
        j = e.isNormalizer,
        M = e.onGestureStart,
        N = e.onGestureEnd,
        P = e.onWheel,
        ee = e.onEnable,
        F = e.onDisable,
        I = e.onClick,
        te = e.scrollSpeed,
        ne = e.capture,
        re = e.allowClicks,
        ie = e.lockAxis,
        ae = e.onLockAxis;
      (this.target = i = ho(i) || Wa),
        (this.vars = e),
        (u &&= Ba.utils.toArray(u)),
        (t ||= 1e-9),
        (n ||= 0),
        (d ||= 1),
        (te ||= 1),
        (r ||= `wheel,touch,pointer`),
        (o = o !== !1),
        (a ||= parseFloat(Ha.getComputedStyle(Ga).lineHeight) || 22);
      var L,
        oe,
        se,
        ce,
        R,
        le,
        ue,
        z = this,
        de = 0,
        fe = 0,
        pe = e.passive || (!s && e.passive !== !1),
        me = _o(i, po),
        he = _o(i, mo),
        ge = me(),
        _e = he(),
        ve =
          ~r.indexOf(`touch`) &&
          !~r.indexOf(`pointer`) &&
          Za[0] === `pointerdown`,
        ye = so(i),
        B = i.ownerDocument || Ua,
        be = [0, 0, 0],
        xe = [0, 0, 0],
        Se = 0,
        Ce = function () {
          return (Se = ro());
        },
        we = function (e, t) {
          return (
            ((z.event = e) && u && go(e.target, u)) ||
            (t && ve && e.pointerType !== `touch`) ||
            (A && A(e, t))
          );
        },
        Te = function () {
          z._vx.reset(), z._vy.reset(), oe.pause(), c && c(z);
        },
        Ee = function () {
          var e = (z.deltaX = bo(be)),
            n = (z.deltaY = bo(xe)),
            r = Math.abs(e) >= t,
            i = Math.abs(n) >= t;
          w && (r || i) && w(z, e, n, be, xe),
            r &&
              (v && z.deltaX > 0 && v(z),
              y && z.deltaX < 0 && y(z),
              S && S(z),
              T && z.deltaX < 0 != de < 0 && T(z),
              (de = z.deltaX),
              (be[0] = be[1] = be[2] = 0)),
            i &&
              (x && z.deltaY > 0 && x(z),
              b && z.deltaY < 0 && b(z),
              C && C(z),
              E && z.deltaY < 0 != fe < 0 && E(z),
              (fe = z.deltaY),
              (xe[0] = xe[1] = xe[2] = 0)),
            (ce || se) &&
              (k && k(z),
              (se &&= (p && se === 1 && p(z), h && h(z), 0)),
              (ce = !1)),
            le && !(le = !1) && ae && ae(z),
            (R &&= (P(z), !1)),
            (L = 0);
        },
        De = function (e, t, n) {
          (be[n] += e),
            (xe[n] += t),
            z._vx.update(e),
            z._vy.update(t),
            o ? (L ||= requestAnimationFrame(Ee)) : Ee();
        },
        Oe = function (e, t) {
          ie &&
            !ue &&
            ((z.axis = ue = Math.abs(e) > Math.abs(t) ? `x` : `y`), (le = !0)),
            ue !== `y` && ((be[2] += e), z._vx.update(e, !0)),
            ue !== `x` && ((xe[2] += t), z._vy.update(t, !0)),
            o ? (L ||= requestAnimationFrame(Ee)) : Ee();
        },
        ke = function (e) {
          if (!we(e, 1)) {
            e = yo(e, s);
            var t = e.clientX,
              r = e.clientY,
              i = t - z.x,
              a = r - z.y,
              o = z.isDragging;
            (z.x = t),
              (z.y = r),
              (o ||
                ((i || a) &&
                  (Math.abs(z.startX - t) >= n ||
                    Math.abs(z.startY - r) >= n))) &&
                ((se ||= o ? 2 : 1), o || (z.isDragging = !0), Oe(i, a));
          }
        },
        Ae = (z.onPress = function (e) {
          we(e, 1) ||
            (e && e.button) ||
            ((z.axis = ue = null),
            oe.pause(),
            (z.isPressed = !0),
            (e = yo(e)),
            (de = fe = 0),
            (z.startX = z.x = e.clientX),
            (z.startY = z.y = e.clientY),
            z._vx.reset(),
            z._vy.reset(),
            G(j ? i : B, Za[1], ke, pe, !0),
            (z.deltaX = z.deltaY = 0),
            g && g(z));
        }),
        je = (z.onRelease = function (e) {
          if (!we(e, 1)) {
            K(j ? i : B, Za[1], ke, !0);
            var t = !isNaN(z.y - z.startY),
              n = z.isDragging,
              r =
                n &&
                (Math.abs(z.x - z.startX) > 3 || Math.abs(z.y - z.startY) > 3),
              a = yo(e);
            !r &&
              t &&
              (z._vx.reset(),
              z._vy.reset(),
              s &&
                re &&
                Ba.delayedCall(0.08, function () {
                  if (ro() - Se > 300 && !e.defaultPrevented) {
                    if (e.target.click) e.target.click();
                    else if (B.createEvent) {
                      var t = B.createEvent(`MouseEvents`);
                      t.initMouseEvent(
                        `click`,
                        !0,
                        !0,
                        Ha,
                        1,
                        a.screenX,
                        a.screenY,
                        a.clientX,
                        a.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        e.target.dispatchEvent(t);
                    }
                  }
                })),
              (z.isDragging = z.isGesturing = z.isPressed = !1),
              c && n && !j && oe.restart(!0),
              se && Ee(),
              m && n && m(z),
              _ && _(z, r);
          }
        }),
        V = function (e) {
          return (
            e.touches &&
            e.touches.length > 1 &&
            (z.isGesturing = !0) &&
            M(e, z.isDragging)
          );
        },
        Me = function () {
          return (z.isGesturing = !1) || N(z);
        },
        Ne = function (e) {
          if (!we(e)) {
            var t = me(),
              n = he();
            De((t - ge) * te, (n - _e) * te, 1),
              (ge = t),
              (_e = n),
              c && oe.restart(!0);
          }
        },
        Pe = function (e) {
          if (!we(e)) {
            (e = yo(e, s)), P && (R = !0);
            var t =
              (e.deltaMode === 1 ? a : e.deltaMode === 2 ? Ha.innerHeight : 1) *
              d;
            De(e.deltaX * t, e.deltaY * t, 0), c && !j && oe.restart(!0);
          }
        },
        Fe = function (e) {
          if (!we(e)) {
            var t = e.clientX,
              n = e.clientY,
              r = t - z.x,
              i = n - z.y;
            (z.x = t),
              (z.y = n),
              (ce = !0),
              c && oe.restart(!0),
              (r || i) && Oe(r, i);
          }
        },
        Ie = function (e) {
          (z.event = e), D(z);
        },
        Le = function (e) {
          (z.event = e), O(z);
        },
        Re = function (e) {
          return we(e) || (yo(e, s) && I(z));
        };
      (oe = z._dc = Ba.delayedCall(l || 0.25, Te).pause()),
        (z.deltaX = z.deltaY = 0),
        (z._vx = vo(0, 50, !0)),
        (z._vy = vo(0, 50, !0)),
        (z.scrollX = me),
        (z.scrollY = he),
        (z.isDragging = z.isGesturing = z.isPressed = !1),
        Qa(this),
        (z.enable = function (e) {
          return (
            z.isEnabled ||
              (G(ye ? B : i, `scroll`, uo),
              r.indexOf(`scroll`) >= 0 && G(ye ? B : i, `scroll`, Ne, pe, ne),
              r.indexOf(`wheel`) >= 0 && G(i, `wheel`, Pe, pe, ne),
              ((r.indexOf(`touch`) >= 0 && Ka) || r.indexOf(`pointer`) >= 0) &&
                (G(i, Za[0], Ae, pe, ne),
                G(B, Za[2], je),
                G(B, Za[3], je),
                re && G(i, `click`, Ce, !0, !0),
                I && G(i, `click`, Re),
                M && G(B, `gesturestart`, V),
                N && G(B, `gestureend`, Me),
                D && G(i, qa + `enter`, Ie),
                O && G(i, qa + `leave`, Le),
                k && G(i, qa + `move`, Fe)),
              (z.isEnabled = !0),
              (z.isDragging = z.isGesturing = z.isPressed = ce = se = !1),
              z._vx.reset(),
              z._vy.reset(),
              (ge = me()),
              (_e = he()),
              e && e.type && Ae(e),
              ee && ee(z)),
            z
          );
        }),
        (z.disable = function () {
          z.isEnabled &&
            (to.filter(function (e) {
              return e !== z && so(e.target);
            }).length || K(ye ? B : i, `scroll`, uo),
            z.isPressed &&
              (z._vx.reset(), z._vy.reset(), K(j ? i : B, Za[1], ke, !0)),
            K(ye ? B : i, `scroll`, Ne, ne),
            K(i, `wheel`, Pe, ne),
            K(i, Za[0], Ae, ne),
            K(B, Za[2], je),
            K(B, Za[3], je),
            K(i, `click`, Ce, !0),
            K(i, `click`, Re),
            K(B, `gesturestart`, V),
            K(B, `gestureend`, Me),
            K(i, qa + `enter`, Ie),
            K(i, qa + `leave`, Le),
            K(i, qa + `move`, Fe),
            (z.isEnabled = z.isPressed = z.isDragging = !1),
            F && F(z));
        }),
        (z.kill = z.revert =
          function () {
            z.disable();
            var e = to.indexOf(z);
            e >= 0 && to.splice(e, 1), Xa === z && (Xa = 0);
          }),
        to.push(z),
        j && so(i) && (Xa = z),
        z.enable(f);
    }),
    za(e, [
      {
        key: `velocityX`,
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: `velocityY`,
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
(Co.version = `3.15.0`),
  (Co.create = function (e) {
    return new Co(e);
  }),
  (Co.register = So),
  (Co.getAll = function () {
    return to.slice();
  }),
  (Co.getById = function (e) {
    return to.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }),
  $a() && Ba.registerPlugin(Co);
var q,
  wo,
  J,
  Y,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = 1,
  ns = Date.now,
  rs = ns(),
  is = 0,
  as = 0,
  os = function (e, t, n) {
    var r = Ss(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return (n[`_` + t + `Clamp`] = r), r ? e.substr(6, e.length - 7) : e;
  },
  ss = function (e, t) {
    return t && (!Ss(e) || e.substr(0, 6) !== `clamp(`)
      ? `clamp(` + e + `)`
      : e;
  },
  cs = function e() {
    return as && requestAnimationFrame(e);
  },
  ls = function () {
    return (Po = 1);
  },
  us = function () {
    return (Po = 0);
  },
  ds = function (e) {
    return e;
  },
  fs = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ps = function () {
    return typeof window < `u`;
  },
  ms = function () {
    return q || (ps() && (q = window.gsap) && q.registerPlugin && q);
  },
  hs = function (e) {
    return !!~Do.indexOf(e);
  },
  gs = function (e) {
    return (
      (e === `Height` ? Zo : J[`inner` + e]) ||
      To[`client` + e] ||
      Eo[`client` + e]
    );
  },
  _s = function (e) {
    return (
      oo(e, `getBoundingClientRect`) ||
      (hs(e)
        ? function () {
            return (Uc.width = J.innerWidth), (Uc.height = Zo), Uc;
          }
        : function () {
            return qs(e);
          })
    );
  },
  vs = function (e, t, n) {
    var r = n.d,
      i = n.d2,
      a = n.a;
    return (a = oo(e, `getBoundingClientRect`))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? gs(i) : e[`client` + i]) || 0;
        };
  },
  ys = function (e, t) {
    return !t || ~no.indexOf(e)
      ? _s(e)
      : function () {
          return Uc;
        };
  },
  bs = function (e, t) {
    var n = t.s,
      r = t.d2,
      i = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = `scroll` + r) && (a = oo(e, n))
        ? a() - _s(e)()[i]
        : hs(e)
        ? (To[n] || Eo[n]) - gs(r)
        : e[n] - e[`offset` + r]
    );
  },
  xs = function (e, t) {
    for (var n = 0; n < zo.length; n += 3)
      (!t || ~t.indexOf(zo[n + 1])) && e(zo[n], zo[n + 1], zo[n + 2]);
  },
  Ss = function (e) {
    return typeof e == `string`;
  },
  Cs = function (e) {
    return typeof e == `function`;
  },
  ws = function (e) {
    return typeof e == `number`;
  },
  Ts = function (e) {
    return typeof e == `object`;
  },
  Es = function (e, t, n) {
    return e && e.progress(+!t) && n && e.pause();
  },
  Ds = function (e, t, n) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e, n);
          })
        : t(e, n);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Os = Math.abs,
  ks = `left`,
  As = `top`,
  js = `right`,
  Ms = `bottom`,
  Ns = `width`,
  Ps = `height`,
  Fs = `Right`,
  Is = `Left`,
  Ls = `Top`,
  Rs = `Bottom`,
  zs = `padding`,
  Bs = `margin`,
  Vs = `Width`,
  Hs = `Height`,
  Us = `px`,
  Ws = function (e) {
    return J.getComputedStyle(
      e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e
    );
  },
  Gs = function (e) {
    var t = Ws(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
  },
  Ks = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  qs = function (e, t) {
    var n =
        t &&
        Ws(e)[Fo] !== `matrix(1, 0, 0, 1, 0, 0)` &&
        q
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : e.scrollingElement.getBoundingClientRect();
    return n && n.progress(0).kill(), r;
  },
  Js = function (e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0;
  },
  Ys = function (e) {
    var t = [],
      n = e.labels,
      r = e.duration(),
      i;
    for (i in n) t.push(n[i] / r);
    return t;
  },
  Xs = function (e) {
    return function (t) {
      return q.utils.snap(Ys(e), t);
    };
  },
  Zs = function (e) {
    var t = q.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return n
      ? function (e, r, i) {
          i === void 0 && (i = 0.001);
          var a;
          if (!r) return t(e);
          if (r > 0) {
            for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
            return n[a - 1];
          }
          for (a = n.length, e += i; a--; ) if (n[a] <= e) return n[a];
          return n[0];
        }
      : function (n, r, i) {
          i === void 0 && (i = 0.001);
          var a = t(n);
          return !r || Math.abs(a - n) < i || a - n < 0 == r < 0
            ? a
            : t(r < 0 ? n - e : n + e);
        };
  },
  Qs = function (e) {
    return function (t, n) {
      return Zs(Ys(e))(t, n.direction);
    };
  },
  $s = function (e, t, n, r) {
    return n.split(`,`).forEach(function (n) {
      return e(t, n, r);
    });
  },
  ec = function (e, t, n, r, i) {
    return e.addEventListener(t, n, {
      passive: !r,
      capture: !!i,
    });
  },
  tc = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  nc = function (e, t, n) {
    (n &&= n.wheelHandler), n && (e(t, `wheel`, n), e(t, `touchmove`, n));
  },
  rc = {
    startColor: `green`,
    endColor: `red`,
    indent: 0,
    fontSize: `16px`,
    fontWeight: `normal`,
  },
  ic = {
    toggleActions: `play`,
    anticipatePin: 0,
  },
  ac = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1,
  },
  oc = function (e, t) {
    if (Ss(e)) {
      var n = e.indexOf(`=`),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      ~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in ac
            ? ac[e] * t
            : ~e.indexOf(`%`)
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  sc = function (e, t, n, r, i, a, o, s) {
    var c = i.startColor,
      l = i.endColor,
      u = i.fontSize,
      d = i.indent,
      f = i.fontWeight,
      p = Y.createElement(`div`),
      m = hs(n) || oo(n, `pinType`) === `fixed`,
      h = e.indexOf(`scroller`) !== -1,
      g = m ? Eo : n.tagName === `IFRAME` ? n.contentDocument.body : n,
      _ = e.indexOf(`start`) !== -1,
      v = _ ? c : l,
      y =
        `border-color:` +
        v +
        `;font-size:` +
        u +
        `;color:` +
        v +
        `;font-weight:` +
        f +
        `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return (
      (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
      (h || s || !m) &&
        (y += (r === mo ? js : Ms) + `:` + (a + parseFloat(d)) + `px;`),
      o &&
        (y +=
          `box-sizing:border-box;text-align:left;width:` +
          o.offsetWidth +
          `px;`),
      (p._isStart = _),
      p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
      (p.style.cssText = y),
      (p.innerText = t || t === 0 ? e + `-` + t : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p[`offset` + r.op.d2]),
      cc(p, 0, r, _),
      p
    );
  },
  cc = function (e, t, n, r) {
    var i = {
        display: `block`,
      },
      a = n[r ? `os2` : `p2`],
      o = n[r ? `p2` : `os2`];
    (e._isFlipped = r),
      (i[n.a + `Percent`] = r ? -100 : 0),
      (i[n.a] = r ? `1px` : 0),
      (i[`border` + a + Vs] = 1),
      (i[`border` + o + Vs] = 0),
      (i[n.p] = t + `px`),
      q.set(e, i);
  },
  X = [],
  lc = {},
  uc,
  dc = function () {
    return ns() - is > 34 && (uc ||= requestAnimationFrame(Pc));
  },
  fc = function () {
    (!Uo || !Uo.isPressed || Uo.startX > Eo.clientWidth) &&
      (W.cache++,
      Uo ? (uc ||= requestAnimationFrame(Pc)) : Pc(),
      is || vc(`scrollStart`),
      (is = ns()));
  },
  pc = function () {
    (Ko = J.innerWidth), (Go = J.innerHeight);
  },
  mc = function (e) {
    W.cache++,
      (e === !0 ||
        (!No &&
          !Ho &&
          !Y.fullscreenElement &&
          !Y.webkitFullscreenElement &&
          (!Wo ||
            Ko !== J.innerWidth ||
            Math.abs(J.innerHeight - Go) > J.innerHeight * 0.25))) &&
        Oo.restart(!0);
  },
  hc = {},
  gc = [],
  _c = function e() {
    return tc(Z, `scrollEnd`, e) || Ac(!0);
  },
  vc = function (e) {
    return (
      (hc[e] &&
        hc[e].map(function (e) {
          return e();
        })) ||
      gc
    );
  },
  yc = [],
  bc = function (e) {
    for (var t = 0; t < yc.length; t += 5)
      (!e || (yc[t + 4] && yc[t + 4].query === e)) &&
        ((yc[t].style.cssText = yc[t + 1]),
        yc[t].getBBox && yc[t].setAttribute(`transform`, yc[t + 2] || ``),
        (yc[t + 3].uncache = 1));
  },
  xc = function () {
    return W.forEach(function (e) {
      return Cs(e) && ++e.cacheID && (e.rec = e());
    });
  },
  Sc = function (e, t) {
    var n;
    for (Io = 0; Io < X.length; Io++)
      (n = X[Io]),
        n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0));
    (Qo = !0), t && bc(t), t || vc(`revert`);
  },
  Cc = function (e, t) {
    W.cache++,
      (t || !wc) &&
        W.forEach(function (e) {
          return Cs(e) && e.cacheID++ && (e.rec = 0);
        }),
      Ss(e) && (J.history.scrollRestoration = Yo = e);
  },
  wc,
  Tc = 0,
  Ec,
  Dc = function () {
    if (Ec !== Tc) {
      var e = (Ec = Tc);
      requestAnimationFrame(function () {
        return e === Tc && Ac(!0);
      });
    }
  },
  Oc = function () {
    Eo.appendChild(Xo),
      (Zo = (!Uo && Xo.offsetHeight) || J.innerHeight),
      Eo.removeChild(Xo);
  },
  kc = function (e) {
    return ko(
      `.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`
    ).forEach(function (t) {
      return (t.style.display = e ? `none` : `block`);
    });
  },
  Ac = function (e, t) {
    if (
      ((To = Y.documentElement),
      (Eo = Y.body),
      (Do = [J, Y, To, Eo]),
      is && !e && !Qo)
    ) {
      ec(Z, `scrollEnd`, _c);
      return;
    }
    Oc(), (wc = Z.isRefreshing = !0), Qo || xc();
    var n = vc(`refreshInit`);
    Bo && Z.sort(),
      t || Sc(),
      W.forEach(function (e) {
        Cs(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
      }),
      X.slice(0).forEach(function (e) {
        return e.refresh();
      }),
      (Qo = !1),
      X.forEach(function (e) {
        if (e._subPinOffset && e.pin) {
          var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
            n = e.pin[t];
          e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh();
        }
      }),
      ($o = 1),
      kc(!0),
      X.forEach(function (e) {
        var t = bs(e.scroller, e._dir),
          n = e.vars.end === `max` || (e._endClamp && e.end > t),
          r = e._startClamp && e.start >= t;
        (n || r) &&
          e.setPositions(
            r ? t - 1 : e.start,
            n ? Math.max(r ? t : e.start + 1, t) : e.end,
            !0
          );
      }),
      kc(!1),
      ($o = 0),
      n.forEach(function (e) {
        return e && e.render && e.render(-1);
      }),
      W.forEach(function (e) {
        Cs(e) &&
          (e.smooth &&
            requestAnimationFrame(function () {
              return (e.target.style.scrollBehavior = `smooth`);
            }),
          e.rec && e(e.rec));
      }),
      Cc(Yo, 1),
      Oo.pause(),
      Tc++,
      (wc = 2),
      Pc(2),
      X.forEach(function (e) {
        return Cs(e.vars.onRefresh) && e.vars.onRefresh(e);
      }),
      (wc = Z.isRefreshing = !1),
      vc(`refresh`);
  },
  jc = 0,
  Mc = 1,
  Nc,
  Pc = function (e) {
    if (e === 2 || (!wc && !Qo)) {
      (Z.isUpdating = !0), Nc && Nc.update(0);
      var t = X.length,
        n = ns(),
        r = n - rs >= 50,
        i = t && X[0].scroll();
      if (
        ((Mc = jc > i ? -1 : 1),
        wc || (jc = i),
        r &&
          (is && !Po && n - is > 200 && ((is = 0), vc(`scrollEnd`)),
          (jo = rs),
          (rs = n)),
        Mc < 0)
      ) {
        for (Io = t; Io-- > 0; ) X[Io] && X[Io].update(0, r);
        Mc = 1;
      } else for (Io = 0; Io < t; Io++) X[Io] && X[Io].update(0, r);
      Z.isUpdating = !1;
    }
    uc = 0;
  },
  Fc = [
    ks,
    As,
    Ms,
    js,
    Bs + Rs,
    Bs + Fs,
    Bs + Ls,
    Bs + Is,
    `display`,
    `flexShrink`,
    `float`,
    `zIndex`,
    `gridColumnStart`,
    `gridColumnEnd`,
    `gridRowStart`,
    `gridRowEnd`,
    `gridArea`,
    `justifySelf`,
    `alignSelf`,
    `placeSelf`,
    `order`,
  ],
  Ic = Fc.concat([
    Ns,
    Ps,
    `boxSizing`,
    `max` + Vs,
    `max` + Hs,
    `position`,
    Bs,
    zs,
    zs + Ls,
    zs + Fs,
    zs + Rs,
    zs + Is,
  ]),
  Lc = function (e, t, n) {
    Bc(n);
    var r = e._gsap;
    if (r.spacerIsNative) Bc(r.spacerState);
    else if (e._gsap.swappedIn) {
      var i = t.parentNode;
      i && (i.insertBefore(e, t), i.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  Rc = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var i = Fc.length, a = t.style, o = e.style, s; i--; )
        (s = Fc[i]), (a[s] = n[s]);
      (a.position = n.position === `absolute` ? `absolute` : `relative`),
        n.display === `inline` && (a.display = `inline-block`),
        (o[Ms] = o[js] = `auto`),
        (a.flexBasis = n.flexBasis || `auto`),
        (a.overflow = `visible`),
        (a.boxSizing = `border-box`),
        (a[Ns] = Js(e, po) + Us),
        (a[Ps] = Js(e, mo) + Us),
        (a[zs] = o[Bs] = o[As] = o[ks] = `0`),
        Bc(r),
        (o[Ns] = o[`max` + Vs] = n[Ns]),
        (o[Ps] = o[`max` + Hs] = n[Ps]),
        (o[zs] = n[zs]),
        e.parentNode !== t &&
          (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  zc = /([A-Z])/g,
  Bc = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        r = 0,
        i,
        a;
      for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; r < n; r += 2)
        (a = e[r + 1]),
          (i = e[r]),
          a
            ? (t[i] = a)
            : t[i] && t.removeProperty(i.replace(zc, `-$1`).toLowerCase());
    }
  },
  Vc = function (e) {
    for (var t = Ic.length, n = e.style, r = [], i = 0; i < t; i++)
      r.push(Ic[i], n[Ic[i]]);
    return (r.t = e), r;
  },
  Hc = function (e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
      (o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]);
    return (r.t = e.t), r;
  },
  Uc = {
    left: 0,
    top: 0,
  },
  Wc = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    Cs(e) && (e = e(s)),
      Ss(e) &&
        e.substr(0, 3) === `max` &&
        (e = d + (e.charAt(4) === `=` ? oc(`0` + e.substr(3), n) : 0));
    var m = f ? f.time() : 0,
      h,
      g,
      _;
    if ((f && f.seek(0), isNaN(e) || (e = +e), ws(e)))
      f &&
        (e = q.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          d,
          e
        )),
        o && cc(o, n, r, !0);
    else {
      Cs(t) && (t = t(s));
      var v = (e || `0`).split(` `),
        y,
        b,
        x,
        S;
      (_ = ho(t, s) || Eo),
        (y = qs(_) || {}),
        (!y || (!y.left && !y.top)) &&
          Ws(_).display === `none` &&
          ((S = _.style.display),
          (_.style.display = `block`),
          (y = qs(_)),
          S ? (_.style.display = S) : _.style.removeProperty(`display`)),
        (b = oc(v[0], y[r.d])),
        (x = oc(v[1] || `0`, n)),
        (e = y[r.p] - c[r.p] - l + b + i - x),
        o && cc(o, x, r, n - x < 20 || (o._isStart && x > 20)),
        (n -= n - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), a)) {
      var C = e + n,
        w = a._isStart;
      (h = `scroll` + r.d2),
        cc(
          a,
          C,
          r,
          (w && C > 20) ||
            (!w && (u ? Math.max(Eo[h], To[h]) : a.parentNode[h]) <= C + 1)
        ),
        u &&
          ((c = qs(o)),
          u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + Us));
    }
    return (
      f &&
        _ &&
        ((h = qs(_)),
        f.seek(d),
        (g = qs(_)),
        (f._caScrollDist = h[r.p] - g[r.p]),
        (e = (e / f._caScrollDist) * d)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  Gc = /(webkit|moz|length|cssText|inset)/i,
  Kc = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var i = e.style,
        a,
        o;
      if (t === Eo) {
        for (a in ((e._stOrig = i.cssText), (o = Ws(e)), o))
          !+a &&
            !Gc.test(a) &&
            o[a] &&
            typeof i[a] == `string` &&
            a !== `0` &&
            (i[a] = o[a]);
        (i.top = n), (i.left = r);
      } else i.cssText = e._stOrig;
      (q.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  qc = function (e, t, n) {
    var r = t,
      i = r;
    return function (t) {
      var a = Math.round(e());
      return (
        a !== r &&
          a !== i &&
          Math.abs(a - r) > 3 &&
          Math.abs(a - i) > 3 &&
          ((t = a), n && n()),
        (i = r),
        (r = Math.round(t)),
        r
      );
    };
  },
  Jc = function (e, t, n) {
    var r = {};
    (r[t.p] = `+=` + n), q.set(e, r);
  },
  Yc = function (e, t) {
    var n = _o(e, t),
      r = `_scroll` + t.p2,
      i = function t(i, a, o, s, c) {
        var l = t.tween,
          u = a.onComplete,
          d = {};
        o ||= n();
        var f = qc(n, o, function () {
          l.kill(), (t.tween = 0);
        });
        return (
          (c = (s && c) || 0),
          (s ||= i - o),
          l && l.kill(),
          (a[r] = i),
          (a.inherit = !1),
          (a.modifiers = d),
          (d[r] = function () {
            return f(o + s * l.ratio + c * l.ratio * l.ratio);
          }),
          (a.onUpdate = function () {
            W.cache++, t.tween && Pc();
          }),
          (a.onComplete = function () {
            (t.tween = 0), u && u.call(l);
          }),
          (l = t.tween = q.to(e, a)),
          l
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }),
      ec(e, `wheel`, n.wheelHandler),
      Z.isTouch && ec(e, `touchmove`, n.wheelHandler),
      i
    );
  },
  Z = (function () {
    function e(t, n) {
      wo ||
        e.register(q) ||
        console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        Jo(this),
        this.init(t, n);
    }
    var t = e.prototype;
    return (
      (t.init = function (t, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !as)
        ) {
          this.update = this.refresh = this.kill = ds;
          return;
        }
        t = Ks(
          Ss(t) || ws(t) || t.nodeType
            ? {
                trigger: t,
              }
            : t,
          ic
        );
        var r = t,
          i = r.onUpdate,
          a = r.toggleClass,
          o = r.id,
          s = r.onToggle,
          c = r.onRefresh,
          l = r.scrub,
          u = r.trigger,
          d = r.pin,
          f = r.pinSpacing,
          p = r.invalidateOnRefresh,
          m = r.anticipatePin,
          h = r.onScrubComplete,
          g = r.onSnapComplete,
          _ = r.once,
          v = r.snap,
          y = r.pinReparent,
          b = r.pinSpacer,
          x = r.containerAnimation,
          S = r.fastScrollEnd,
          C = r.preventOverlaps,
          w =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? po
              : mo,
          T = !l && l !== 0,
          E = ho(t.scroller || J),
          D = q.core.getCache(E),
          O = hs(E),
          k =
            (`pinType` in t
              ? t.pinType
              : oo(E, `pinType`) || (O && `fixed`)) === `fixed`,
          A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          j = T && t.toggleActions.split(` `),
          M = `markers` in t ? t.markers : ic.markers,
          N = O ? 0 : parseFloat(Ws(E)[`border` + w.p2 + Vs]) || 0,
          P = this,
          ee =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(P);
            },
          F = vs(E, O, w),
          I = ys(E, O),
          te = 0,
          ne = 0,
          re = 0,
          ie = _o(E, w),
          ae,
          L,
          oe,
          se,
          ce,
          R,
          le,
          ue,
          z,
          de,
          fe,
          pe,
          me,
          he,
          ge,
          _e,
          ve,
          ye,
          B,
          be,
          xe,
          Se,
          Ce,
          we,
          Te,
          Ee,
          De,
          Oe,
          ke,
          Ae,
          je,
          V,
          Me,
          Ne,
          Pe,
          Fe,
          Ie,
          Le,
          Re;
        if (
          ((P._startClamp = P._endClamp = !1),
          (P._dir = w),
          (m *= 45),
          (P.scroller = E),
          (P.scroll = x ? x.time.bind(x) : ie),
          (se = ie()),
          (P.vars = t),
          (n ||= t.animation),
          `refreshPriority` in t &&
            ((Bo = 1), t.refreshPriority === -9999 && (Nc = P)),
          (D.tweenScroll = D.tweenScroll || {
            top: Yc(E, mo),
            left: Yc(E, po),
          }),
          (P.tweenTo = ae = D.tweenScroll[w.p]),
          (P.scrubDuration = function (e) {
            (Me = ws(e) && e),
              Me
                ? V
                  ? V.duration(e)
                  : (V = q.to(n, {
                      ease: `expo`,
                      totalProgress: `+=0`,
                      inherit: !1,
                      duration: Me,
                      paused: !0,
                      onComplete: function () {
                        return h && h(P);
                      },
                    }))
                : (V && V.progress(1).kill(), (V = 0));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !P.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (P.animation = n.pause()),
            (n.scrollTrigger = P),
            P.scrubDuration(l),
            (Ae = 0),
            (o ||= n.vars.id)),
          v &&
            ((!Ts(v) || v.push) &&
              (v = {
                snapTo: v,
              }),
            `scrollBehavior` in Eo.style &&
              q.set(O ? [Eo, To] : E, {
                scrollBehavior: `auto`,
              }),
            W.forEach(function (e) {
              return (
                Cs(e) &&
                e.target === (O ? Y.scrollingElement || To : E) &&
                (e.smooth = !1)
              );
            }),
            (oe = Cs(v.snapTo)
              ? v.snapTo
              : v.snapTo === `labels`
              ? Xs(n)
              : v.snapTo === `labelsDirectional`
              ? Qs(n)
              : v.directional === !1
              ? q.utils.snap(v.snapTo)
              : function (e, t) {
                  return Zs(v.snapTo)(e, ns() - ne < 500 ? 0 : t.direction);
                }),
            (Ne = v.duration || {
              min: 0.1,
              max: 2,
            }),
            (Ne = Ts(Ne) ? Ao(Ne.min, Ne.max) : Ao(Ne, Ne)),
            (Pe = q
              .delayedCall(v.delay || Me / 2 || 0.1, function () {
                var e = ie(),
                  t = ns() - ne < 500,
                  r = ae.tween;
                if (
                  (t || Math.abs(P.getVelocity()) < 10) &&
                  !r &&
                  !Po &&
                  te !== e
                ) {
                  var i = (e - R) / he,
                    a = n && !T ? n.totalProgress() : i,
                    o = t ? 0 : ((a - je) / (ns() - jo)) * 1e3 || 0,
                    s = q.utils.clamp(-i, 1 - i, (Os(o / 2) * o) / 0.185),
                    c = i + (v.inertia === !1 ? 0 : s),
                    l,
                    u,
                    d = v,
                    f = d.onStart,
                    p = d.onInterrupt,
                    m = d.onComplete;
                  if (
                    ((l = oe(c, P)),
                    ws(l) || (l = c),
                    (u = Math.max(0, Math.round(R + l * he))),
                    e <= le && e >= R && u !== e)
                  ) {
                    if (r && !r._initted && r.data <= Os(u - e)) return;
                    v.inertia === !1 && (s = l - i),
                      ae(
                        u,
                        {
                          duration: Ne(
                            Os(
                              (Math.max(Os(c - a), Os(l - a)) * 0.185) /
                                o /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || `power3`,
                          data: Os(u - e),
                          onInterrupt: function () {
                            return Pe.restart(!0) && p && Ds(P, p);
                          },
                          onComplete: function () {
                            P.update(),
                              (te = ie()),
                              n &&
                                !T &&
                                (V
                                  ? V.resetTo(
                                      `totalProgress`,
                                      l,
                                      n._tTime / n._tDur
                                    )
                                  : n.progress(l)),
                              (Ae = je =
                                n && !T ? n.totalProgress() : P.progress),
                              g && g(P),
                              m && Ds(P, m);
                          },
                        },
                        e,
                        s * he,
                        u - e - s * he
                      ),
                      f && Ds(P, f, ae.tween);
                  }
                } else P.isActive && te !== e && Pe.restart(!0);
              })
              .pause())),
          o && (lc[o] = P),
          (u = P.trigger = ho(u || (d !== !0 && d))),
          (Re = u && u._gsap && u._gsap.stRevert),
          (Re &&= Re(P)),
          (d = d === !0 ? u : ho(d)),
          Ss(a) &&
            (a = {
              targets: u,
              className: a,
            }),
          d &&
            (f === !1 ||
              f === Bs ||
              (f =
                !f &&
                d.parentNode &&
                d.parentNode.style &&
                Ws(d.parentNode).display === `flex`
                  ? !1
                  : zs),
            (P.pin = d),
            (L = q.core.getCache(d)),
            L.spacer
              ? (ge = L.pinState)
              : (b &&
                  ((b = ho(b)),
                  b && !b.nodeType && (b = b.current || b.nativeElement),
                  (L.spacerIsNative = !!b),
                  b && (L.spacerState = Vc(b))),
                (L.spacer = ye = b || Y.createElement(`div`)),
                ye.classList.add(`pin-spacer`),
                o && ye.classList.add(`pin-spacer-` + o),
                (L.pinState = ge = Vc(d))),
            t.force3D !== !1 &&
              q.set(d, {
                force3D: !0,
              }),
            (P.spacer = ye = L.spacer),
            (ke = Ws(d)),
            (we = ke[f + w.os2]),
            (be = q.getProperty(d)),
            (xe = q.quickSetter(d, w.a, Us)),
            Rc(d, ye, ke),
            (ve = Vc(d))),
          M)
        ) {
          (pe = Ts(M) ? Ks(M, rc) : rc),
            (de = sc(`scroller-start`, o, E, w, pe, 0)),
            (fe = sc(`scroller-end`, o, E, w, pe, 0, de)),
            (B = de[`offset` + w.op.d2]);
          var ze = ho(oo(E, `content`) || E);
          (ue = this.markerStart = sc(`start`, o, ze, w, pe, B, 0, x)),
            (z = this.markerEnd = sc(`end`, o, ze, w, pe, B, 0, x)),
            x && (Le = q.quickSetter([ue, z], w.a, Us)),
            !k &&
              !(no.length && oo(E, `fixedMarkers`) === !0) &&
              (Gs(O ? Eo : E),
              q.set([de, fe], {
                force3D: !0,
              }),
              (Ee = q.quickSetter(de, w.a, Us)),
              (Oe = q.quickSetter(fe, w.a, Us)));
        }
        if (x) {
          var Be = x.vars.onUpdate,
            Ve = x.vars.onUpdateParams;
          x.eventCallback(`onUpdate`, function () {
            P.update(0, 0, 1), Be && Be.apply(x, Ve || []);
          });
        }
        if (
          ((P.previous = function () {
            return X[X.indexOf(P) - 1];
          }),
          (P.next = function () {
            return X[X.indexOf(P) + 1];
          }),
          (P.revert = function (e, t) {
            if (!t) return P.kill(!0);
            var r = e !== !1 || !P.enabled,
              i = No;
            r !== P.isReverted &&
              (r &&
                ((Fe = Math.max(ie(), P.scroll.rec || 0)),
                (re = P.progress),
                (Ie = n && n.progress())),
              ue &&
                [ue, z, de, fe].forEach(function (e) {
                  return (e.style.display = r ? `none` : `block`);
                }),
              r && ((No = P), P.update(r)),
              d &&
                (!y || !P.isActive) &&
                (r ? Lc(d, ye, ge) : Rc(d, ye, Ws(d), Te)),
              r || P.update(r),
              (No = i),
              (P.isReverted = r));
          }),
          (P.refresh = function (r, i, a, o) {
            if (!((No || !P.enabled) && !i)) {
              if (d && r && is) {
                ec(e, `scrollEnd`, _c);
                return;
              }
              !wc && ee && ee(P),
                (No = P),
                ae.tween && !a && (ae.tween.kill(), (ae.tween = 0)),
                V && V.pause(),
                p &&
                  n &&
                  (n
                    .revert({
                      kill: !1,
                    })
                    .invalidate(),
                  n.getChildren
                    ? n.getChildren(!0, !0, !1).forEach(function (e) {
                        return e.vars.immediateRender && e.render(0, !0, !0);
                      })
                    : n.vars.immediateRender && n.render(0, !0, !0)),
                P.isReverted || P.revert(!0, !0),
                (P._subPinOffset = !1);
              var s = F(),
                l = I(),
                m = x ? x.duration() : bs(E, w),
                h = he <= 0.01 || !he,
                g = 0,
                _ = o || 0,
                v = Ts(a) ? a.end : t.end,
                b = t.endTrigger || u,
                S = Ts(a)
                  ? a.start
                  : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`),
                C = (P.pinnedContainer =
                  t.pinnedContainer && ho(t.pinnedContainer, P)),
                D = (u && Math.max(0, X.indexOf(P))) || 0,
                A = D,
                j,
                L,
                oe,
                pe,
                B,
                xe,
                we,
                Ee,
                Oe,
                ke,
                Ae,
                je,
                Me;
              for (
                M &&
                Ts(a) &&
                ((je = q.getProperty(de, w.p)), (Me = q.getProperty(fe, w.p)));
                A-- > 0;

              )
                (xe = X[A]),
                  xe.end || xe.refresh(0, 1) || (No = P),
                  (we = xe.pin),
                  we &&
                    (we === u || we === d || we === C) &&
                    !xe.isReverted &&
                    ((ke ||= []), ke.unshift(xe), xe.revert(!0, !0)),
                  xe !== X[A] && (D--, A--);
              for (
                Cs(S) && (S = S(P)),
                  S = os(S, `start`, P),
                  R =
                    Wc(
                      S,
                      u,
                      s,
                      w,
                      ie(),
                      ue,
                      de,
                      P,
                      l,
                      N,
                      k,
                      m,
                      x,
                      P._startClamp && `_startClamp`
                    ) || (d ? -0.001 : 0),
                  Cs(v) && (v = v(P)),
                  Ss(v) &&
                    !v.indexOf(`+=`) &&
                    (~v.indexOf(` `)
                      ? (v = (Ss(S) ? S.split(` `)[0] : ``) + v)
                      : ((g = oc(v.substr(2), s)),
                        (v = Ss(S)
                          ? S
                          : (x
                              ? q.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  R
                                )
                              : R) + g),
                        (b = u))),
                  v = os(v, `end`, P),
                  le =
                    Math.max(
                      R,
                      Wc(
                        v || (b ? `100% 0` : m),
                        b,
                        s,
                        w,
                        ie() + g,
                        z,
                        fe,
                        P,
                        l,
                        N,
                        k,
                        m,
                        x,
                        P._endClamp && `_endClamp`
                      )
                    ) || -0.001,
                  g = 0,
                  A = D;
                A--;

              )
                (xe = X[A] || {}),
                  (we = xe.pin),
                  we &&
                    xe.start - xe._pinPush <= R &&
                    !x &&
                    xe.end > 0 &&
                    ((j =
                      xe.end -
                      (P._startClamp ? Math.max(0, xe.start) : xe.start)),
                    ((we === u && xe.start - xe._pinPush < R) || we === C) &&
                      isNaN(S) &&
                      (g += j * (1 - xe.progress)),
                    we === d && (_ += j));
              if (
                ((R += g),
                (le += g),
                P._startClamp && (P._startClamp += g),
                P._endClamp &&
                  !wc &&
                  ((P._endClamp = le || -0.001), (le = Math.min(le, bs(E, w)))),
                (he = le - R || ((R -= 0.01) && 0.001)),
                h && (re = q.utils.clamp(0, 1, q.utils.normalize(R, le, Fe))),
                (P._pinPush = _),
                ue &&
                  g &&
                  ((j = {}),
                  (j[w.a] = `+=` + g),
                  C && (j[w.p] = `-=` + ie()),
                  q.set([ue, z], j)),
                d && !($o && P.end >= bs(E, w)))
              )
                (j = Ws(d)),
                  (pe = w === mo),
                  (oe = ie()),
                  (Se = parseFloat(be(w.a)) + _),
                  !m &&
                    le > 1 &&
                    ((Ae = (O ? Y.scrollingElement || To : E).style),
                    (Ae = {
                      style: Ae,
                      value: Ae[`overflow` + w.a.toUpperCase()],
                    }),
                    O &&
                      Ws(Eo)[`overflow` + w.a.toUpperCase()] !== `scroll` &&
                      (Ae.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                  Rc(d, ye, j),
                  (ve = Vc(d)),
                  (L = qs(d, !0)),
                  (Ee = k && _o(E, pe ? po : mo)()),
                  f
                    ? ((Te = [f + w.os2, he + _ + Us]),
                      (Te.t = ye),
                      (A = f === zs ? Js(d, w) + he + _ : 0),
                      A &&
                        (Te.push(w.d, A + Us),
                        ye.style.flexBasis !== `auto` &&
                          (ye.style.flexBasis = A + Us)),
                      Bc(Te),
                      C &&
                        X.forEach(function (e) {
                          e.pin === C &&
                            e.vars.pinSpacing !== !1 &&
                            (e._subPinOffset = !0);
                        }),
                      k && ie(Fe))
                    : ((A = Js(d, w)),
                      A &&
                        ye.style.flexBasis !== `auto` &&
                        (ye.style.flexBasis = A + Us)),
                  k &&
                    ((B = {
                      top: L.top + (pe ? oe - R : Ee) + Us,
                      left: L.left + (pe ? Ee : oe - R) + Us,
                      boxSizing: `border-box`,
                      position: `fixed`,
                    }),
                    (B[Ns] = B[`max` + Vs] = Math.ceil(L.width) + Us),
                    (B[Ps] = B[`max` + Hs] = Math.ceil(L.height) + Us),
                    (B[Bs] =
                      B[Bs + Ls] =
                      B[Bs + Fs] =
                      B[Bs + Rs] =
                      B[Bs + Is] =
                        `0`),
                    (B[zs] = j[zs]),
                    (B[zs + Ls] = j[zs + Ls]),
                    (B[zs + Fs] = j[zs + Fs]),
                    (B[zs + Rs] = j[zs + Rs]),
                    (B[zs + Is] = j[zs + Is]),
                    (_e = Hc(ge, B, y)),
                    wc && ie(0)),
                  n
                    ? ((Oe = n._initted),
                      Vo(1),
                      n.render(n.duration(), !0, !0),
                      (Ce = be(w.a) - Se + he + _),
                      (De = Math.abs(he - Ce) > 1),
                      k && De && _e.splice(_e.length - 2, 2),
                      n.render(0, !0, !0),
                      Oe || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Vo(0))
                    : (Ce = he),
                  Ae &&
                    (Ae.value
                      ? (Ae.style[`overflow` + w.a.toUpperCase()] = Ae.value)
                      : Ae.style.removeProperty(`overflow-` + w.a));
              else if (u && ie() && !x)
                for (L = u.parentNode; L && L !== Eo; )
                  L._pinOffset && ((R -= L._pinOffset), (le -= L._pinOffset)),
                    (L = L.parentNode);
              ke &&
                ke.forEach(function (e) {
                  return e.revert(!1, !0);
                }),
                (P.start = R),
                (P.end = le),
                (se = ce = wc ? Fe : ie()),
                !x && !wc && (se < Fe && ie(Fe), (P.scroll.rec = 0)),
                P.revert(!1, !0),
                (ne = ns()),
                Pe && ((te = -1), Pe.restart(!0)),
                (No = 0),
                n &&
                  T &&
                  (n._initted || Ie) &&
                  n.progress() !== Ie &&
                  n.progress(Ie || 0, !0).render(n.time(), !0, !0),
                (h || re !== P.progress || x || p || (n && !n._initted)) &&
                  (n &&
                    !T &&
                    (n._initted || re || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      x && R < -0.001 && !re ? q.utils.normalize(R, le, 0) : re,
                      !0
                    ),
                  (P.progress = h || (se - R) / he === re ? 0 : re)),
                d && f && (ye._pinOffset = Math.round(P.progress * Ce)),
                V && V.invalidate(),
                isNaN(je) ||
                  ((je -= q.getProperty(de, w.p)),
                  (Me -= q.getProperty(fe, w.p)),
                  Jc(de, w, je),
                  Jc(ue, w, je - (o || 0)),
                  Jc(fe, w, Me),
                  Jc(z, w, Me - (o || 0))),
                h && !wc && P.update(),
                c && !wc && !me && ((me = !0), c(P), (me = !1));
            }
          }),
          (P.getVelocity = function () {
            return ((ie() - ce) / (ns() - jo)) * 1e3 || 0;
          }),
          (P.endAnimation = function () {
            Es(P.callbackAnimation),
              n &&
                (V
                  ? V.progress(1)
                  : n.paused()
                  ? T || Es(n, P.direction < 0, 1)
                  : Es(n, n.reversed()));
          }),
          (P.labelToScroll = function (e) {
            return (
              (n &&
                n.labels &&
                (R || P.refresh() || R) + (n.labels[e] / n.duration()) * he) ||
              0
            );
          }),
          (P.getTrailing = function (e) {
            var t = X.indexOf(P),
              n = P.direction > 0 ? X.slice(0, t).reverse() : X.slice(t + 1);
            return (
              Ss(e)
                ? n.filter(function (t) {
                    return t.vars.preventOverlaps === e;
                  })
                : n
            ).filter(function (e) {
              return P.direction > 0 ? e.end <= R : e.start >= le;
            });
          }),
          (P.update = function (e, t, r) {
            if (!(x && !r && !e)) {
              var o = wc === !0 ? Fe : P.scroll(),
                c = e ? 0 : (o - R) / he,
                u = c < 0 ? 0 : c > 1 ? 1 : c || 0,
                p = P.progress,
                h,
                g,
                b,
                D,
                O,
                M,
                N,
                ee;
              if (
                (t &&
                  ((ce = se),
                  (se = x ? ie() : o),
                  v && ((je = Ae), (Ae = n && !T ? n.totalProgress() : u))),
                m &&
                  d &&
                  !No &&
                  !ts &&
                  is &&
                  (!u && R < o + ((o - ce) / (ns() - jo)) * m
                    ? (u = 1e-4)
                    : u === 1 &&
                      le > o + ((o - ce) / (ns() - jo)) * m &&
                      (u = 0.9999)),
                u !== p && P.enabled)
              ) {
                if (
                  ((h = P.isActive = !!u && u < 1),
                  (g = !!p && p < 1),
                  (M = h !== g),
                  (O = M || !!u != !!p),
                  (P.direction = u > p ? 1 : -1),
                  (P.progress = u),
                  O &&
                    !No &&
                    ((b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3),
                    T &&
                      ((D = (!M && j[b + 1] !== `none` && j[b + 1]) || j[b]),
                      (ee =
                        n && (D === `complete` || D === `reset` || D in n)))),
                  C &&
                    (M || ee) &&
                    (ee || l || !n) &&
                    (Cs(C)
                      ? C(P)
                      : P.getTrailing(C).forEach(function (e) {
                          return e.endAnimation();
                        })),
                  T ||
                    (V && !No && !ts
                      ? (V._dp._time - V._start !== V._time &&
                          V.render(V._dp._time - V._start),
                        V.resetTo
                          ? V.resetTo(`totalProgress`, u, n._tTime / n._tDur)
                          : ((V.vars.totalProgress = u),
                            V.invalidate().restart()))
                      : n && n.totalProgress(u, !!(No && (ne || e)))),
                  d)
                ) {
                  if ((e && f && (ye.style[f + w.os2] = we), !k))
                    xe(fs(Se + Ce * u));
                  else if (O) {
                    if (
                      ((N = !e && u > p && le + 1 > o && o + 1 >= bs(E, w)), y)
                    ) {
                      if (!e && (h || N)) {
                        var F = qs(d, !0),
                          I = o - R;
                        Kc(
                          d,
                          Eo,
                          F.top + (w === mo ? I : 0) + Us,
                          F.left + (w === mo ? 0 : I) + Us
                        );
                      } else Kc(d, ye);
                    }
                    Bc(h || N ? _e : ve),
                      (De && u < 1 && h) || xe(Se + (u === 1 && !N ? Ce : 0));
                  }
                }
                v && !ae.tween && !No && !ts && Pe.restart(!0),
                  a &&
                    (M || (_ && u && (u < 1 || !es))) &&
                    ko(a.targets).forEach(function (e) {
                      return e.classList[h || _ ? `add` : `remove`](
                        a.className
                      );
                    }),
                  i && !T && !e && i(P),
                  O && !No
                    ? (T &&
                        (ee &&
                          (D === `complete`
                            ? n.pause().totalProgress(1)
                            : D === `reset`
                            ? n.restart(!0).pause()
                            : D === `restart`
                            ? n.restart(!0)
                            : n[D]()),
                        i && i(P)),
                      (M || !es) &&
                        (s && M && Ds(P, s),
                        A[b] && Ds(P, A[b]),
                        _ && (u === 1 ? P.kill(!1, 1) : (A[b] = 0)),
                        M || ((b = u === 1 ? 1 : 3), A[b] && Ds(P, A[b]))),
                      S &&
                        !h &&
                        Math.abs(P.getVelocity()) > (ws(S) ? S : 2500) &&
                        (Es(P.callbackAnimation),
                        V ? V.progress(1) : Es(n, D === `reverse` ? 1 : !u, 1)))
                    : T && i && !No && i(P);
              }
              if (Oe) {
                var te = x ? (o / x.duration()) * (x._caScrollDist || 0) : o;
                Ee(te + +!!de._isFlipped), Oe(te);
              }
              Le && Le((-o / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (P.enable = function (t, n) {
            P.enabled ||
              ((P.enabled = !0),
              ec(E, `resize`, mc),
              O || ec(E, `scroll`, fc),
              ee && ec(e, `refreshInit`, ee),
              t !== !1 && ((P.progress = re = 0), (se = ce = te = ie())),
              n !== !1 && P.refresh());
          }),
          (P.getTween = function (e) {
            return e && ae ? ae.tween : V;
          }),
          (P.setPositions = function (e, t, n, r) {
            if (x) {
              var i = x.scrollTrigger,
                a = x.duration(),
                o = i.end - i.start;
              (e = i.start + (o * e) / a), (t = i.start + (o * t) / a);
            }
            P.refresh(
              !1,
              !1,
              {
                start: ss(e, n && !!P._startClamp),
                end: ss(t, n && !!P._endClamp),
              },
              r
            ),
              P.update();
          }),
          (P.adjustPinSpacing = function (e) {
            if (Te && e) {
              var t = Te.indexOf(w.d) + 1;
              (Te[t] = parseFloat(Te[t]) + e + Us),
                (Te[1] = parseFloat(Te[1]) + e + Us),
                Bc(Te);
            }
          }),
          (P.disable = function (t, n) {
            if (
              (t !== !1 && P.revert(!0, !0),
              P.enabled &&
                ((P.enabled = P.isActive = !1),
                n || (V && V.pause()),
                (Fe = 0),
                L && (L.uncache = 1),
                ee && tc(e, `refreshInit`, ee),
                Pe &&
                  (Pe.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)),
                !O))
            ) {
              for (var r = X.length; r--; )
                if (X[r].scroller === E && X[r] !== P) return;
              tc(E, `resize`, mc), O || tc(E, `scroll`, fc);
            }
          }),
          (P.kill = function (e, r) {
            P.disable(e, r), V && !r && V.kill(), o && delete lc[o];
            var i = X.indexOf(P);
            i >= 0 && X.splice(i, 1),
              i === Io && Mc > 0 && Io--,
              (i = 0),
              X.forEach(function (e) {
                return e.scroller === P.scroller && (i = 1);
              }),
              i || wc || (P.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                e &&
                  n.revert({
                    kill: !1,
                  }),
                r || n.kill()),
              ue &&
                [ue, z, de, fe].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              Nc === P && (Nc = 0),
              d &&
                (L && (L.uncache = 1),
                (i = 0),
                X.forEach(function (e) {
                  return e.pin === d && i++;
                }),
                i || (L.spacer = 0)),
              t.onKill && t.onKill(P);
          }),
          X.push(P),
          P.enable(!1, !1),
          Re && Re(P),
          n && n.add && !he)
        ) {
          var He = P.update;
          (P.update = function () {
            (P.update = He), W.cache++, R || le || P.refresh();
          }),
            q.delayedCall(0.01, P.update),
            (he = 0.01),
            (R = le = 0);
        } else P.refresh();
        d && Dc();
      }),
      (e.register = function (t) {
        return (
          (wo ||= ((q = t || ms()), ps() && window.document && e.enable(), as)),
          wo
        );
      }),
      (e.defaults = function (e) {
        if (e) for (var t in e) ic[t] = e[t];
        return ic;
      }),
      (e.disable = function (e, t) {
        (as = 0),
          X.forEach(function (n) {
            return n[t ? `kill` : `disable`](e);
          }),
          tc(J, `wheel`, fc),
          tc(Y, `scroll`, fc),
          clearInterval(Mo),
          tc(Y, `touchcancel`, ds),
          tc(Eo, `touchstart`, ds),
          $s(tc, Y, `pointerdown,touchstart,mousedown`, ls),
          $s(tc, Y, `pointerup,touchend,mouseup`, us),
          Oo.kill(),
          xs(tc);
        for (var n = 0; n < W.length; n += 3)
          nc(tc, W[n], W[n + 1]), nc(tc, W[n], W[n + 2]);
      }),
      (e.enable = function () {
        if (
          ((J = window),
          (Y = document),
          (To = Y.documentElement),
          (Eo = Y.body),
          q)
        ) {
          if (
            ((ko = q.utils.toArray),
            (Ao = q.utils.clamp),
            (Jo = q.core.context || ds),
            (Vo = q.core.suppressOverwrites || ds),
            (Yo = J.history.scrollRestoration || `auto`),
            (jc = J.pageYOffset || 0),
            q.core.globals(`ScrollTrigger`, e),
            Eo)
          ) {
            (as = 1),
              (Xo = document.createElement(`div`)),
              (Xo.style.height = `100vh`),
              (Xo.style.position = `absolute`),
              Oc(),
              cs(),
              Co.register(q),
              (e.isTouch = Co.isTouch),
              (qo =
                Co.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Wo = Co.isTouch === 1),
              ec(J, `wheel`, fc),
              (Do = [J, Y, To, Eo]),
              q.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t = q.matchMedia(),
                      n;
                    for (n in e) t.add(n, e[n]);
                    return t;
                  }),
                  q.addEventListener(`matchMediaInit`, function () {
                    xc(), Sc();
                  }),
                  q.addEventListener(`matchMediaRevert`, function () {
                    return bc();
                  }),
                  q.addEventListener(`matchMedia`, function () {
                    Ac(0, 1), vc(`matchMedia`);
                  }),
                  q.matchMedia().add(`(orientation: portrait)`, function () {
                    return pc(), pc;
                  }))
                : console.warn(`Requires GSAP 3.11.0 or later`),
              pc(),
              ec(Y, `scroll`, fc);
            var t = Eo.hasAttribute(`style`),
              n = Eo.style,
              r = n.borderTopStyle,
              i = q.core.Animation.prototype,
              a,
              o;
            for (
              i.revert ||
                Object.defineProperty(i, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = `solid`,
                a = qs(Eo),
                mo.m = Math.round(a.top + mo.sc()) || 0,
                po.m = Math.round(a.left + po.sc()) || 0,
                r
                  ? (n.borderTopStyle = r)
                  : n.removeProperty(`border-top-style`),
                t ||
                  (Eo.setAttribute(`style`, ``), Eo.removeAttribute(`style`)),
                Mo = setInterval(dc, 250),
                q.delayedCall(0.5, function () {
                  return (ts = 0);
                }),
                ec(Y, `touchcancel`, ds),
                ec(Eo, `touchstart`, ds),
                $s(ec, Y, `pointerdown,touchstart,mousedown`, ls),
                $s(ec, Y, `pointerup,touchend,mouseup`, us),
                Fo = q.utils.checkPrefix(`transform`),
                Ic.push(Fo),
                wo = ns(),
                Oo = q.delayedCall(0.2, Ac).pause(),
                zo = [
                  Y,
                  `visibilitychange`,
                  function () {
                    var e = J.innerWidth,
                      t = J.innerHeight;
                    Y.hidden
                      ? ((Lo = e), (Ro = t))
                      : (Lo !== e || Ro !== t) && mc();
                  },
                  Y,
                  `DOMContentLoaded`,
                  Ac,
                  J,
                  `load`,
                  Ac,
                  J,
                  `resize`,
                  mc,
                ],
                xs(ec),
                X.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                o = 0;
              o < W.length;
              o += 3
            )
              nc(tc, W[o], W[o + 1]), nc(tc, W[o], W[o + 2]);
          } else
            Y &&
              Y.addEventListener(`DOMContentLoaded`, function t() {
                e.enable(), Y.removeEventListener(`DOMContentLoaded`, t);
              });
        }
      }),
      (e.config = function (t) {
        `limitCallbacks` in t && (es = !!t.limitCallbacks);
        var n = t.syncInterval;
        (n && clearInterval(Mo)) || ((Mo = n) && setInterval(dc, n)),
          `ignoreMobileResize` in t &&
            (Wo = e.isTouch === 1 && t.ignoreMobileResize),
          `autoRefreshEvents` in t &&
            (xs(tc) || xs(ec, t.autoRefreshEvents || `none`),
            (Ho = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1));
      }),
      (e.scrollerProxy = function (e, t) {
        var n = ho(e),
          r = W.indexOf(n),
          i = hs(n);
        ~r && W.splice(r, i ? 6 : 2),
          t && (i ? no.unshift(J, t, Eo, t, To, t) : no.unshift(n, t));
      }),
      (e.clearMatchMedia = function (e) {
        X.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, t, n) {
        var r = (Ss(e) ? ho(e) : e).getBoundingClientRect(),
          i = r[n ? Ns : Ps] * t || 0;
        return n
          ? r.right - i > 0 && r.left + i < J.innerWidth
          : r.bottom - i > 0 && r.top + i < J.innerHeight;
      }),
      (e.positionInViewport = function (e, t, n) {
        Ss(e) && (e = ho(e));
        var r = e.getBoundingClientRect(),
          i = r[n ? Ns : Ps],
          a =
            t == null
              ? i / 2
              : t in ac
              ? ac[t] * i
              : ~t.indexOf(`%`)
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0;
        return n ? (r.left + a) / J.innerWidth : (r.top + a) / J.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (X.slice(0).forEach(function (e) {
            return e.vars.id !== `ScrollSmoother` && e.kill();
          }),
          e !== !0)
        ) {
          var t = hc.killAll || [];
          (hc = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      e
    );
  })();
(Z.version = `3.15.0`),
  (Z.saveStyles = function (e) {
    return e
      ? ko(e).forEach(function (e) {
          if (e && e.style) {
            var t = yc.indexOf(e);
            t >= 0 && yc.splice(t, 5),
              yc.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute(`transform`),
                q.core.getCache(e),
                Jo()
              );
          }
        })
      : yc;
  }),
  (Z.revert = function (e, t) {
    return Sc(!e, t);
  }),
  (Z.create = function (e, t) {
    return new Z(e, t);
  }),
  (Z.refresh = function (e) {
    return e ? mc(!0) : (wo || Z.register()) && Ac(!0);
  }),
  (Z.update = function (e) {
    return ++W.cache && Pc(e === !0 ? 2 : 0);
  }),
  (Z.clearScrollMemory = Cc),
  (Z.maxScroll = function (e, t) {
    return bs(e, t ? po : mo);
  }),
  (Z.getScrollFunc = function (e, t) {
    return _o(ho(e), t ? po : mo);
  }),
  (Z.getById = function (e) {
    return lc[e];
  }),
  (Z.getAll = function () {
    return X.filter(function (e) {
      return e.vars.id !== `ScrollSmoother`;
    });
  }),
  (Z.isScrolling = function () {
    return !!is;
  }),
  (Z.snapDirectional = Zs),
  (Z.addEventListener = function (e, t) {
    var n = hc[e] || (hc[e] = []);
    ~n.indexOf(t) || n.push(t);
  }),
  (Z.removeEventListener = function (e, t) {
    var n = hc[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1);
  }),
  (Z.batch = function (e, t) {
    var n = [],
      r = {},
      i = t.interval || 0.016,
      a = t.batchMax || 1e9,
      o = function (e, t) {
        var n = [],
          r = [],
          o = q
            .delayedCall(i, function () {
              t(n, r), (n = []), (r = []);
            })
            .pause();
        return function (e) {
          n.length || o.restart(!0),
            n.push(e.trigger),
            r.push(e),
            a <= n.length && o.progress(1);
        };
      },
      s;
    for (s in t)
      r[s] =
        s.substr(0, 2) === `on` && Cs(t[s]) && s !== `onRefreshInit`
          ? o(s, t[s])
          : t[s];
    return (
      Cs(a) &&
        ((a = a()),
        ec(Z, `refresh`, function () {
          return (a = t.batchMax());
        })),
      ko(e).forEach(function (e) {
        var t = {};
        for (s in r) t[s] = r[s];
        (t.trigger = e), n.push(Z.create(t));
      }),
      n
    );
  });
var Xc = function (e, t, n, r) {
    return (
      t > r ? e(r) : t < 0 && e(0),
      n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
    );
  },
  Zc = function e(t, n) {
    n === !0
      ? t.style.removeProperty(`touch-action`)
      : (t.style.touchAction =
          n === !0
            ? `auto`
            : n
            ? `pan-` + n + (Co.isTouch ? ` pinch-zoom` : ``)
            : `none`),
      t === To && e(Eo, n);
  },
  Qc = {
    auto: 1,
    scroll: 1,
  },
  $c = function (e) {
    var t = e.event,
      n = e.target,
      r = e.axis,
      i = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = i._gsap || q.core.getCache(i),
      o = ns(),
      s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        i &&
        i !== Eo &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          !(Qc[(s = Ws(i)).overflowY] || Qc[s.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll =
        i &&
        i !== n &&
        !hs(i) &&
        (Qc[(s = Ws(i)).overflowY] || Qc[s.overflowX])),
        (a._isScrollT = o);
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  el = function (e, t, n, r) {
    return Co.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r &&= $c),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && ec(Y, Co.eventTypes[0], rl, !1, !0);
      },
      onDisable: function () {
        return tc(Y, Co.eventTypes[0], rl, !0);
      },
    });
  },
  tl = /(input|label|select|textarea)/i,
  nl,
  rl = function (e) {
    var t = tl.test(e.target.tagName);
    (t || nl) && ((e._gsapAllow = !0), (nl = t));
  },
  il = function (e) {
    Ts(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = `wheel,touch`),
      (e.debounce = !!e.debounce),
      (e.id = e.id || `normalizer`);
    var t = e,
      n = t.normalizeScrollX,
      r = t.momentum,
      i = t.allowNestedScroll,
      a = t.onRelease,
      o,
      s,
      c = ho(e.target) || To,
      l = q.core.globals().ScrollSmoother,
      u = l && l.get(),
      d =
        qo &&
        ((e.content && ho(e.content)) ||
          (u && e.content !== !1 && !u.smooth() && u.content())),
      f = _o(c, mo),
      p = _o(c, po),
      m = 1,
      h =
        (Co.isTouch && J.visualViewport
          ? J.visualViewport.scale * J.visualViewport.width
          : J.outerWidth) / J.innerWidth,
      g = 0,
      _ = Cs(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      v,
      y,
      b = el(c, e.type, !0, i),
      x = function () {
        return (y = !1);
      },
      S = ds,
      C = ds,
      w = function () {
        (s = bs(c, mo)),
          (C = Ao(+!!qo, s)),
          n && (S = Ao(0, bs(c, po))),
          (v = Tc);
      },
      T = function () {
        (d._gsap.y = fs(parseFloat(d._gsap.y) + f.offset) + `px`),
          (d.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
            parseFloat(d._gsap.y) +
            `, 0, 1)`),
          (f.offset = f.cacheID = 0);
      },
      E = function () {
        if (y) {
          requestAnimationFrame(x);
          var e = fs(o.deltaY / 2),
            t = C(f.v - e);
          if (d && t !== f.v + f.offset) {
            f.offset = t - f.v;
            var n = fs((parseFloat(d && d._gsap.y) || 0) - f.offset);
            (d.style.transform =
              `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` +
              n +
              `, 0, 1)`),
              (d._gsap.y = n + `px`),
              (f.cacheID = W.cache),
              Pc();
          }
          return !0;
        }
        f.offset && T(), (y = !0);
      },
      D,
      O,
      k,
      A,
      j = function () {
        w(),
          D.isActive() &&
            D.vars.scrollY > s &&
            (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s));
      };
    return (
      d &&
        q.set(d, {
          y: `+=0`,
        }),
      (e.ignoreCheck = function (e) {
        return (
          (qo && e.type === `touchmove` && E(e)) ||
          (m > 1.05 && e.type !== `touchstart`) ||
          o.isGesturing ||
          (e.touches && e.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var e = m;
        (m = fs(((J.visualViewport && J.visualViewport.scale) || 1) / h)),
          D.pause(),
          e !== m && Zc(c, m > 1.01 || (!n && `x`)),
          (O = p()),
          (k = f()),
          w(),
          (v = Tc);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((f.offset && T(), !t)) A.restart(!0);
          else {
            W.cache++;
            var r = _(),
              i,
              o;
            n &&
              ((i = p()),
              (o = i + (r * 0.05 * -e.velocityX) / 0.227),
              (r *= Xc(p, i, o, bs(c, po))),
              (D.vars.scrollX = S(o))),
              (i = f()),
              (o = i + (r * 0.05 * -e.velocityY) / 0.227),
              (r *= Xc(f, i, o, bs(c, mo))),
              (D.vars.scrollY = C(o)),
              D.invalidate().duration(r).play(0.01),
              ((qo && D.vars.scrollY >= s) || i >= s - 1) &&
                q.to(
                  {},
                  {
                    onUpdate: j,
                    duration: r,
                  }
                );
          }
          a && a(e);
        }),
      (e.onWheel = function () {
        D._ts && D.pause(), ns() - g > 1e3 && ((v = 0), (g = ns()));
      }),
      (e.onChange = function (e, t, r, i, a) {
        if (
          (Tc !== v && w(),
          t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])),
          r)
        ) {
          f.offset && T();
          var o = a[2] === r,
            s = o ? k + e.startY - e.y : f() + r - a[1],
            c = C(s);
          o && s !== c && (k += c - s), f(c);
        }
        (r || t) && Pc();
      }),
      (e.onEnable = function () {
        Zc(c, !n && `x`),
          Z.addEventListener(`refresh`, j),
          ec(J, `resize`, j),
          (f.smooth &&=
            ((f.target.style.scrollBehavior = `auto`), (p.smooth = !1))),
          b.enable();
      }),
      (e.onDisable = function () {
        Zc(c, !0),
          tc(J, `resize`, j),
          Z.removeEventListener(`refresh`, j),
          b.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new Co(e)),
      (o.iOS = qo),
      qo && !f() && f(1),
      qo && q.ticker.add(ds),
      (A = o._dc),
      (D = q.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
          scrollY: qc(f, f(), function () {
            return D.pause();
          }),
        },
        onUpdate: Pc,
        onComplete: A.vars.onComplete,
      })),
      o
    );
  };
(Z.sort = function (e) {
  if (Cs(e)) return X.sort(e);
  var t = J.pageYOffset || 0;
  return (
    Z.getAll().forEach(function (e) {
      return (e._sortY = e.trigger
        ? t + e.trigger.getBoundingClientRect().top
        : e.start + J.innerHeight);
    }),
    X.sort(
      e ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            (e.vars.containerAnimation ? 1e6 : e._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
}),
  (Z.observe = function (e) {
    return new Co(e);
  }),
  (Z.normalizeScroll = function (e) {
    if (e === void 0) return Uo;
    if (e === !0 && Uo) return Uo.enable();
    if (e === !1) {
      Uo && Uo.kill(), (Uo = e);
      return;
    }
    var t = e instanceof Co ? e : il(e);
    return (
      Uo && Uo.target === t.target && Uo.kill(), hs(t.target) && (Uo = t), t
    );
  }),
  (Z.core = {
    _getVelocityProp: vo,
    _inputObserver: el,
    _scrollers: W,
    _proxies: no,
    bridge: {
      ss: function () {
        is || vc(`scrollStart`), (is = ns());
      },
      ref: function () {
        return No;
      },
    },
  }),
  ms() && q.registerPlugin(Z),
  La.registerPlugin(Z);

function al() {
  let e = (0, l.useRef)(null);
  return (
    (0, l.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        r = t.getContext(`2d`);
      if (!r) return;
      let i = (t.width = window.innerWidth),
        a = (t.height = window.innerHeight),
        o = () => {
          (i = t.width = window.innerWidth),
            (a = t.height = window.innerHeight);
        };
      window.addEventListener(`resize`, o);
      let s = [
          {
            x: 0.24,
            y: 0.28,
            r: 0.42,
            c: `96,63,255`,
            a: 0.2,
            s: 0.5,
            p: 0,
          },
          {
            x: 0.76,
            y: 0.22,
            r: 0.36,
            c: `154,120,255`,
            a: 0.16,
            s: 0.55,
            p: 1.4,
          },
          {
            x: 0.55,
            y: 0.72,
            r: 0.5,
            c: `122,170,255`,
            a: 0.13,
            s: 0.4,
            p: 2.7,
          },
          {
            x: 0.14,
            y: 0.74,
            r: 0.38,
            c: `210,140,255`,
            a: 0.11,
            s: 0.45,
            p: 4.1,
          },
        ],
        c = Array.from(
          {
            length: 46,
          },
          () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.7 + 0.6,
            sp: Math.random() * 22e-5 + 6e-5,
            ph: Math.random() * Math.PI * 2,
          })
        ),
        l = (e) => {
          r.clearRect(0, 0, i, a);
          let t = r.createLinearGradient(0, 0, 0, a);
          t.addColorStop(0, `rgba(24,24,42,1)`),
            t.addColorStop(1, `rgba(13,13,26,1)`),
            (r.fillStyle = t),
            r.fillRect(0, 0, i, a);
          for (let t of s) {
            let n = (t.x + Math.sin(e * 16e-5 * t.s + t.p) * 0.1) * i,
              o = (t.y + Math.cos(e * 13e-5 * t.s + t.p) * 0.1) * a,
              s = t.r * Math.max(i, a),
              c = r.createRadialGradient(n, o, 0, n, o, s);
            c.addColorStop(0, `rgba(` + t.c + `,` + t.a + `)`),
              c.addColorStop(1, `rgba(` + t.c + `,0)`),
              (r.fillStyle = c),
              r.fillRect(n - s, o - s, s * 2, s * 2);
          }
          for (let t of c) {
            let n = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(e * 0.001 + t.ph));
            (r.fillStyle = `rgba(210,200,255,` + n * 0.4 + `)`),
              r.beginPath(),
              r.arc(t.x * i, t.y * a, t.r, 0, Math.PI * 2),
              r.fill();
          }
          n || (u = requestAnimationFrame(l));
        },
        u = 0;
      return (
        n ? l(0) : (u = requestAnimationFrame(l)),
        () => {
          cancelAnimationFrame(u), window.removeEventListener(`resize`, o);
        }
      );
    }, []),
    (0, N.jsx)(`canvas`, {
      id: `bg-canvas`,
      ref: e,
      "aria-hidden": `true`,
    })
  );
}

function ol() {
  return (
    (0, l.useEffect)(() => {
      let e = Array.from(document.querySelectorAll(`video[data-lazy]`));
      if (!e.length || !(`IntersectionObserver` in window)) return;
      let t = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            if (e.isIntersecting) {
              let n = e.target;
              (n.preload = `auto`),
                n.load(),
                n.play().catch(() => {}),
                t.unobserve(n);
            }
          });
        },
        {
          rootMargin: `500px 0px`,
        }
      );
      return e.forEach((e) => t.observe(e)), () => t.disconnect();
    }, []),
    null
  );
}

function sl() {
  return (
    (0, l.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let e = La.context(() => {
        La.utils.toArray(`[data-reveal]`).forEach((e) => {
          La.fromTo(
            e,
            {
              opacity: 0,
              y: 42,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: `power3.out`,
              scrollTrigger: {
                trigger: e,
                start: `top 86%`,
              },
            }
          );
        });
      });
      return () => e.revert();
    }, []),
    null
  );
}

function cl() {
  return (0, N.jsxs)(`main`, {
    className: `relative bg-bg text-paper`,
    children: [
      (0, N.jsx)(al, {}),
      (0, N.jsxs)(`div`, {
        className: `relative z-[1]`,
        children: [
          (0, N.jsx)(ae, {}),
          (0, N.jsx)(ce, {}),
          (0, N.jsx)(z, {}),
          (0, N.jsx)(fe, {}),
          (0, N.jsx)(Te, {}),
          (0, N.jsx)(he, {}),
          (0, N.jsx)(De, {}),
          (0, N.jsx)(je, {}),
        ],
      }),
      (0, N.jsx)(sl, {}),
      (0, N.jsx)(ol, {}),
    ],
  });
}
(0, u.createRoot)(document.getElementById(`root`)).render(
  (0, N.jsx)(l.StrictMode, {
    children: (0, N.jsx)(cl, {}),
  })
);
