import * as v from "react";
import Xe from "react";
import { onIdTokenChanged as Nt } from "firebase/auth";
import { onChildAdded as Wt, onChildRemoved as qt, onChildChanged as Kt, onChildMoved as Ht, onValue as Gt, off as Qt, get as Yt } from "firebase/database";
import { getApps as Bt, registerVersion as Ge, initializeApp as Jt } from "firebase/app";
import { onSnapshot as zt, queryEqual as Zt } from "firebase/firestore";
import { httpsCallable as Xt } from "firebase/functions";
import { getDownloadURL as en, ref as tn } from "firebase/storage";
import { ensureInitialized as nn, getValue as rn, getString as on, getNumber as un, getBoolean as an, getAll as sn } from "firebase/remote-config";
var pe = function(e, t) {
  return pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var o in r)
      Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
  }, pe(e, t);
};
function T(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  pe(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function cn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ee(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(u) {
      u(i);
    });
  }
  return new (n || (n = Promise))(function(i, u) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (f) {
        u(f);
      }
    }
    function s(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        u(f);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, s);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function et(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, u = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return u.next = a(0), u.throw = a(1), u.return = a(2), typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function a(c) {
    return function(l) {
      return s([c, l]);
    };
  }
  function s(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; u && (u = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < i[1]) {
              n.label = i[1], i = c;
              break;
            }
            if (i && n.label < i[2]) {
              n.label = i[2], n.ops.push(c);
              break;
            }
            i[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = t.call(e, n);
      } catch (l) {
        c = [6, l], o = 0;
      } finally {
        r = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function q(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function M(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), o, i = [], u;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; )
      i.push(o.value);
  } catch (a) {
    u = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (u)
        throw u.error;
    }
  }
  return i;
}
function N(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function W(e) {
  return this instanceof W ? (this.v = e, this) : new W(e);
}
function ln(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), o, i = [];
  return o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", u), o[Symbol.asyncIterator] = function() {
    return this;
  }, o;
  function u(d) {
    return function(m) {
      return Promise.resolve(m).then(d, f);
    };
  }
  function a(d, m) {
    r[d] && (o[d] = function(h) {
      return new Promise(function(C, A) {
        i.push([d, h, C, A]) > 1 || s(d, h);
      });
    }, m && (o[d] = m(o[d])));
  }
  function s(d, m) {
    try {
      c(r[d](m));
    } catch (h) {
      p(i[0][3], h);
    }
  }
  function c(d) {
    d.value instanceof W ? Promise.resolve(d.value.v).then(l, f) : p(i[0][2], d);
  }
  function l(d) {
    s("next", d);
  }
  function f(d) {
    s("throw", d);
  }
  function p(d, m) {
    d(m), i.shift(), i.length && s(i[0][0], i[0][1]);
  }
}
function fn(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof q == "function" ? q(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(i) {
    n[i] = e[i] && function(u) {
      return new Promise(function(a, s) {
        u = e[i](u), o(a, s, u.done, u.value);
      });
    };
  }
  function o(i, u, a, s) {
    Promise.resolve(s).then(function(c) {
      i({ value: c, done: a });
    }, u);
  }
}
function S(e) {
  return typeof e == "function";
}
function Ce(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ce = Ce(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, o) {
      return o + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function te(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Q = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, o, i;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var a = q(u), s = a.next(); !s.done; s = a.next()) {
              var c = s.value;
              c.remove(this);
            }
          } catch (h) {
            t = { error: h };
          } finally {
            try {
              s && !s.done && (n = a.return) && n.call(a);
            } finally {
              if (t)
                throw t.error;
            }
          }
        else
          u.remove(this);
      var l = this.initialTeardown;
      if (S(l))
        try {
          l();
        } catch (h) {
          i = h instanceof ce ? h.errors : [h];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var p = q(f), d = p.next(); !d.done; d = p.next()) {
            var m = d.value;
            try {
              Qe(m);
            } catch (h) {
              i = i ?? [], h instanceof ce ? i = N(N([], M(i)), M(h.errors)) : i.push(h);
            }
          }
        } catch (h) {
          r = { error: h };
        } finally {
          try {
            d && !d.done && (o = p.return) && o.call(p);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (i)
        throw new ce(i);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Qe(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && te(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && te(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), tt = Q.EMPTY;
function nt(e) {
  return e instanceof Q || e && "closed" in e && S(e.remove) && S(e.add) && S(e.unsubscribe);
}
function Qe(e) {
  S(e) ? e() : e.unsubscribe();
}
var rt = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, me = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var o = me.delegate;
    return o != null && o.setTimeout ? o.setTimeout.apply(o, N([e, t], M(n))) : setTimeout.apply(void 0, N([e, t], M(n)));
  },
  clearTimeout: function(e) {
    var t = me.delegate;
    return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function ot(e) {
  me.setTimeout(function() {
    throw e;
  });
}
function be() {
}
function X(e) {
  e();
}
var Oe = function(e) {
  T(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, nt(n) && n.add(r)) : r.destination = pn, r;
  }
  return t.create = function(n, r, o) {
    return new G(n, r, o);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Q), dn = Function.prototype.bind;
function le(e, t) {
  return dn.call(e, t);
}
var vn = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        Z(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Z(r);
      }
    else
      Z(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Z(n);
      }
  }, e;
}(), G = function(e) {
  T(t, e);
  function t(n, r, o) {
    var i = e.call(this) || this, u;
    if (S(n) || !n)
      u = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: o ?? void 0
      };
    else {
      var a;
      i && rt.useDeprecatedNextContext ? (a = Object.create(n), a.unsubscribe = function() {
        return i.unsubscribe();
      }, u = {
        next: n.next && le(n.next, a),
        error: n.error && le(n.error, a),
        complete: n.complete && le(n.complete, a)
      }) : u = n;
    }
    return i.destination = new vn(u), i;
  }
  return t;
}(Oe);
function Z(e) {
  ot(e);
}
function hn(e) {
  throw e;
}
var pn = {
  closed: !0,
  next: be,
  error: hn,
  complete: be
}, xe = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Y(e) {
  return e;
}
function mn(e) {
  return e.length === 0 ? Y : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, o) {
      return o(r);
    }, n);
  };
}
var w = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var o = this, i = yn(t) ? t : new G(t, n, r);
    return X(function() {
      var u = o, a = u.operator, s = u.source;
      i.add(a ? a.call(i, s) : s ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Ye(n), new n(function(o, i) {
      var u = new G({
        next: function(a) {
          try {
            t(a);
          } catch (s) {
            i(s), u.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      r.subscribe(u);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[xe] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return mn(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Ye(t), new t(function(r, o) {
      var i;
      n.subscribe(function(u) {
        return i = u;
      }, function(u) {
        return o(u);
      }, function() {
        return r(i);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ye(e) {
  var t;
  return (t = e ?? rt.Promise) !== null && t !== void 0 ? t : Promise;
}
function bn(e) {
  return e && S(e.next) && S(e.error) && S(e.complete);
}
function yn(e) {
  return e && e instanceof Oe || bn(e) && nt(e);
}
function gn(e) {
  return S(e == null ? void 0 : e.lift);
}
function I(e) {
  return function(t) {
    if (gn(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function x(e, t, n, r, o) {
  return new _n(e, t, n, r, o);
}
var _n = function(e) {
  T(t, e);
  function t(n, r, o, i, u, a) {
    var s = e.call(this, n) || this;
    return s.onFinalize = u, s.shouldUnsubscribe = a, s._next = r ? function(c) {
      try {
        r(c);
      } catch (l) {
        n.error(l);
      }
    } : e.prototype._next, s._error = i ? function(c) {
      try {
        i(c);
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, s._complete = o ? function() {
      try {
        o();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, s;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Oe), Sn = Ce(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ie = function(e) {
  T(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new Be(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Sn();
  }, t.prototype.next = function(n) {
    var r = this;
    X(function() {
      var o, i;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var u = q(r.currentObservers), a = u.next(); !a.done; a = u.next()) {
            var s = a.value;
            s.next(n);
          }
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            a && !a.done && (i = u.return) && i.call(u);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    X(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var o = r.observers; o.length; )
          o.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    X(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, o = this, i = o.hasError, u = o.isStopped, a = o.observers;
    return i || u ? tt : (this.currentObservers = null, a.push(n), new Q(function() {
      r.currentObservers = null, te(a, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, o = r.hasError, i = r.thrownError, u = r.isStopped;
    o ? n.error(i) : u && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new w();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new Be(n, r);
  }, t;
}(w), Be = function(e) {
  T(t, e);
  function t(n, r) {
    var o = e.call(this) || this;
    return o.destination = n, o.source = r, o;
  }
  return t.prototype.next = function(n) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || o === void 0 || o.call(r, n);
  }, t.prototype.error = function(n) {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || o === void 0 || o.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, o;
    return (o = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && o !== void 0 ? o : tt;
  }, t;
}(ie), Ie = {
  now: function() {
    return (Ie.delegate || Date).now();
  },
  delegate: void 0
}, wn = function(e) {
  T(t, e);
  function t(n, r, o) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), o === void 0 && (o = Ie);
    var i = e.call(this) || this;
    return i._bufferSize = n, i._windowTime = r, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = r === 1 / 0, i._bufferSize = Math.max(1, n), i._windowTime = Math.max(1, r), i;
  }
  return t.prototype.next = function(n) {
    var r = this, o = r.isStopped, i = r._buffer, u = r._infiniteTimeWindow, a = r._timestampProvider, s = r._windowTime;
    o || (i.push(n), !u && i.push(a.now() + s)), this._trimBuffer(), e.prototype.next.call(this, n);
  }, t.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), o = this, i = o._infiniteTimeWindow, u = o._buffer, a = u.slice(), s = 0; s < a.length && !n.closed; s += i ? 1 : 2)
      n.next(a[s]);
    return this._checkFinalizedStatuses(n), r;
  }, t.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, o = n._timestampProvider, i = n._buffer, u = n._infiniteTimeWindow, a = (u ? 1 : 2) * r;
    if (r < 1 / 0 && a < i.length && i.splice(0, i.length - a), !u) {
      for (var s = o.now(), c = 0, l = 1; l < i.length && i[l] <= s; l += 2)
        c = l;
      c && i.splice(0, c + 1);
    }
  }, t;
}(ie), En = function(e) {
  T(t, e);
  function t(n, r) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(n, r) {
    return this;
  }, t;
}(Q), ne = {
  setInterval: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var o = ne.delegate;
    return o != null && o.setInterval ? o.setInterval.apply(o, N([e, t], M(n))) : setInterval.apply(void 0, N([e, t], M(n)));
  },
  clearInterval: function(e) {
    var t = ne.delegate;
    return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e);
  },
  delegate: void 0
}, Cn = function(e) {
  T(t, e);
  function t(n, r) {
    var o = e.call(this, n, r) || this;
    return o.scheduler = n, o.work = r, o.pending = !1, o;
  }
  return t.prototype.schedule = function(n, r) {
    var o;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var i = this.id, u = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(u, i, r)), this.pending = !0, this.delay = r, this.id = (o = this.id) !== null && o !== void 0 ? o : this.requestAsyncId(u, this.id, r), this;
  }, t.prototype.requestAsyncId = function(n, r, o) {
    return o === void 0 && (o = 0), ne.setInterval(n.flush.bind(n, this), o);
  }, t.prototype.recycleAsyncId = function(n, r, o) {
    if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
      return r;
    r != null && ne.clearInterval(r);
  }, t.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var o = this._execute(n, r);
    if (o)
      return o;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(n, r) {
    var o = !1, i;
    try {
      this.work(n);
    } catch (u) {
      o = !0, i = u || new Error("Scheduled action threw falsy error");
    }
    if (o)
      return this.unsubscribe(), i;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, o = n.scheduler, i = o.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, te(i, this), r != null && (this.id = this.recycleAsyncId(o, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(En), Je = function() {
  function e(t, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
  }
  return e.prototype.schedule = function(t, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
  }, e.now = Ie.now, e;
}(), On = function(e) {
  T(t, e);
  function t(n, r) {
    r === void 0 && (r = Je.now);
    var o = e.call(this, n, r) || this;
    return o.actions = [], o._active = !1, o;
  }
  return t.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var o;
    this._active = !0;
    do
      if (o = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, o) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw o;
    }
  }, t;
}(Je), it = new On(Cn), xn = it, Ae = new w(function(e) {
  return e.complete();
});
function In(e) {
  return e ? An(e) : Ae;
}
function An(e) {
  return new w(function(t) {
    return e.schedule(function() {
      return t.complete();
    });
  });
}
function ut(e) {
  return e && S(e.schedule);
}
function at(e) {
  return e[e.length - 1];
}
function ke(e) {
  return ut(at(e)) ? e.pop() : void 0;
}
function kn(e, t) {
  return typeof at(e) == "number" ? e.pop() : t;
}
var st = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function ct(e) {
  return S(e == null ? void 0 : e.then);
}
function lt(e) {
  return S(e[xe]);
}
function ft(e) {
  return Symbol.asyncIterator && S(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function dt(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Fn() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var vt = Fn();
function ht(e) {
  return S(e == null ? void 0 : e[vt]);
}
function pt(e) {
  return ln(this, arguments, function() {
    var n, r, o, i;
    return et(this, function(u) {
      switch (u.label) {
        case 0:
          n = e.getReader(), u.label = 1;
        case 1:
          u.trys.push([1, , 9, 10]), u.label = 2;
        case 2:
          return [4, W(n.read())];
        case 3:
          return r = u.sent(), o = r.value, i = r.done, i ? [4, W(void 0)] : [3, 5];
        case 4:
          return [2, u.sent()];
        case 5:
          return [4, W(o)];
        case 6:
          return [4, u.sent()];
        case 7:
          return u.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function mt(e) {
  return S(e == null ? void 0 : e.getReader);
}
function k(e) {
  if (e instanceof w)
    return e;
  if (e != null) {
    if (lt(e))
      return Pn(e);
    if (st(e))
      return $n(e);
    if (ct(e))
      return Tn(e);
    if (ft(e))
      return bt(e);
    if (ht(e))
      return Dn(e);
    if (mt(e))
      return Rn(e);
  }
  throw dt(e);
}
function Pn(e) {
  return new w(function(t) {
    var n = e[xe]();
    if (S(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function $n(e) {
  return new w(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function Tn(e) {
  return new w(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, ot);
  });
}
function Dn(e) {
  return new w(function(t) {
    var n, r;
    try {
      for (var o = q(e), i = o.next(); !i.done; i = o.next()) {
        var u = i.value;
        if (t.next(u), t.closed)
          return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (n)
          throw n.error;
      }
    }
    t.complete();
  });
}
function bt(e) {
  return new w(function(t) {
    jn(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function Rn(e) {
  return bt(pt(e));
}
function jn(e, t) {
  var n, r, o, i;
  return Ee(this, void 0, void 0, function() {
    var u, a;
    return et(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = fn(e), s.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = s.sent(), !!r.done)
            return [3, 4];
          if (u = r.value, t.next(u), t.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = s.sent(), o = { error: a }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), r && !r.done && (i = n.return) ? [4, i.call(n)] : [3, 8];
        case 7:
          s.sent(), s.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (o)
            throw o.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function V(e, t, n, r, o) {
  r === void 0 && (r = 0), o === void 0 && (o = !1);
  var i = t.schedule(function() {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !o)
    return i;
}
function yt(e, t) {
  return t === void 0 && (t = 0), I(function(n, r) {
    n.subscribe(x(r, function(o) {
      return V(r, e, function() {
        return r.next(o);
      }, t);
    }, function() {
      return V(r, e, function() {
        return r.complete();
      }, t);
    }, function(o) {
      return V(r, e, function() {
        return r.error(o);
      }, t);
    }));
  });
}
function gt(e, t) {
  return t === void 0 && (t = 0), I(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function Ln(e, t) {
  return k(e).pipe(gt(t), yt(t));
}
function Vn(e, t) {
  return k(e).pipe(gt(t), yt(t));
}
function Un(e, t) {
  return new w(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Mn(e, t) {
  return new w(function(n) {
    var r;
    return V(n, t, function() {
      r = e[vt](), V(n, t, function() {
        var o, i, u;
        try {
          o = r.next(), i = o.value, u = o.done;
        } catch (a) {
          n.error(a);
          return;
        }
        u ? n.complete() : n.next(i);
      }, 0, !0);
    }), function() {
      return S(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function _t(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new w(function(n) {
    V(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      V(n, t, function() {
        r.next().then(function(o) {
          o.done ? n.complete() : n.next(o.value);
        });
      }, 0, !0);
    });
  });
}
function Nn(e, t) {
  return _t(pt(e), t);
}
function Wn(e, t) {
  if (e != null) {
    if (lt(e))
      return Ln(e, t);
    if (st(e))
      return Un(e, t);
    if (ct(e))
      return Vn(e, t);
    if (ft(e))
      return _t(e, t);
    if (ht(e))
      return Mn(e, t);
    if (mt(e))
      return Nn(e, t);
  }
  throw dt(e);
}
function P(e, t) {
  return t ? Wn(e, t) : k(e);
}
function ye() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ke(e);
  return P(e, n);
}
var St = Ce(function(e) {
  return function() {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function qn(e) {
  return e instanceof Date && !isNaN(e);
}
function $(e, t) {
  return I(function(n, r) {
    var o = 0;
    n.subscribe(x(r, function(i) {
      r.next(e.call(t, i, o++));
    }));
  });
}
function Kn(e, t, n, r, o, i, u, a) {
  var s = [], c = 0, l = 0, f = !1, p = function() {
    f && !s.length && !c && t.complete();
  }, d = function(h) {
    return c < r ? m(h) : s.push(h);
  }, m = function(h) {
    i && t.next(h), c++;
    var C = !1;
    k(n(h, l++)).subscribe(x(t, function(A) {
      o == null || o(A), i ? d(A) : t.next(A);
    }, function() {
      C = !0;
    }, void 0, function() {
      if (C)
        try {
          c--;
          for (var A = function() {
            var L = s.shift();
            u ? V(t, u, function() {
              return m(L);
            }) : m(L);
          }; s.length && c < r; )
            A();
          p();
        } catch (L) {
          t.error(L);
        }
    }));
  };
  return e.subscribe(x(t, d, function() {
    f = !0, p();
  })), function() {
    a == null || a();
  };
}
function Fe(e, t, n) {
  return n === void 0 && (n = 1 / 0), S(t) ? Fe(function(r, o) {
    return $(function(i, u) {
      return t(r, i, o, u);
    })(k(e(r, o)));
  }, n) : (typeof t == "number" && (n = t), I(function(r, o) {
    return Kn(r, o, e, n);
  }));
}
function wt(e) {
  return e === void 0 && (e = 1 / 0), Fe(Y, e);
}
function Hn() {
  return wt(1);
}
function Gn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Hn()(P(e, ke(e)));
}
function Qn(e, t, n) {
  e === void 0 && (e = 0), n === void 0 && (n = xn);
  var r = -1;
  return t != null && (ut(t) ? n = t : r = t), new w(function(o) {
    var i = qn(e) ? +e - n.now() : e;
    i < 0 && (i = 0);
    var u = 0;
    return n.schedule(function() {
      o.closed || (o.next(u++), 0 <= r ? this.schedule(void 0, r) : o.complete());
    }, i);
  });
}
function Yn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ke(e), r = kn(e, 1 / 0), o = e;
  return o.length ? o.length === 1 ? k(o[0]) : wt(r)(P(o, n)) : Ae;
}
function Bn(e, t) {
  return I(function(n, r) {
    var o = 0;
    n.subscribe(x(r, function(i) {
      return e.call(t, i, o++) && r.next(i);
    }));
  });
}
function Et(e) {
  return I(function(t, n) {
    var r = null, o = !1, i;
    r = t.subscribe(x(n, void 0, void 0, function(u) {
      i = k(e(u, Et(e)(t))), r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0;
    })), o && (r.unsubscribe(), r = null, i.subscribe(n));
  });
}
function Jn(e, t, n, r, o) {
  return function(i, u) {
    var a = n, s = t, c = 0;
    i.subscribe(x(u, function(l) {
      var f = c++;
      s = a ? e(s, l, f) : (a = !0, l), r && u.next(s);
    }, o && function() {
      a && u.next(s), u.complete();
    }));
  };
}
function zn(e) {
  return I(function(t, n) {
    var r = !1;
    t.subscribe(x(n, function(o) {
      r = !0, n.next(o);
    }, function() {
      r || n.next(e), n.complete();
    }));
  });
}
function ge(e) {
  return e <= 0 ? function() {
    return Ae;
  } : I(function(t, n) {
    var r = 0;
    t.subscribe(x(n, function(o) {
      ++r <= e && (n.next(o), e <= r && n.complete());
    }));
  });
}
function Zn() {
  return I(function(e, t) {
    e.subscribe(x(t, be));
  });
}
function Xn(e) {
  return $(function() {
    return e;
  });
}
function Ct(e, t) {
  return t ? function(n) {
    return Gn(t.pipe(ge(1), Zn()), n.pipe(Ct(e)));
  } : Fe(function(n, r) {
    return k(e(n, r)).pipe(ge(1), Xn(n));
  });
}
function er(e, t) {
  t === void 0 && (t = it);
  var n = Qn(e, t);
  return Ct(function() {
    return n;
  });
}
function tr(e, t) {
  return t === void 0 && (t = Y), e = e ?? nr, I(function(n, r) {
    var o, i = !0;
    n.subscribe(x(r, function(u) {
      var a = t(u);
      (i || !e(o, a)) && (i = !1, o = a, r.next(u));
    }));
  });
}
function nr(e, t) {
  return e === t;
}
function rr(e) {
  return e === void 0 && (e = or), I(function(t, n) {
    var r = !1;
    t.subscribe(x(n, function(o) {
      r = !0, n.next(o);
    }, function() {
      return r ? n.complete() : n.error(e());
    }));
  });
}
function or() {
  return new St();
}
function Ot(e, t) {
  var n = arguments.length >= 2;
  return function(r) {
    return r.pipe(e ? Bn(function(o, i) {
      return e(o, i, r);
    }) : Y, ge(1), n ? zn(t) : rr(function() {
      return new St();
    }));
  };
}
function ir(e, t) {
  return I(Jn(e, t, arguments.length >= 2, !0));
}
function ur(e) {
  e === void 0 && (e = {});
  var t = e.connector, n = t === void 0 ? function() {
    return new ie();
  } : t, r = e.resetOnError, o = r === void 0 ? !0 : r, i = e.resetOnComplete, u = i === void 0 ? !0 : i, a = e.resetOnRefCountZero, s = a === void 0 ? !0 : a;
  return function(c) {
    var l, f, p, d = 0, m = !1, h = !1, C = function() {
      f == null || f.unsubscribe(), f = void 0;
    }, A = function() {
      C(), l = p = void 0, m = h = !1;
    }, L = function() {
      var y = l;
      A(), y == null || y.unsubscribe();
    };
    return I(function(y, b) {
      d++, !h && !m && C();
      var O = p = p ?? n();
      b.add(function() {
        d--, d === 0 && !h && !m && (f = fe(L, s));
      }), O.subscribe(b), !l && d > 0 && (l = new G({
        next: function(g) {
          return O.next(g);
        },
        error: function(g) {
          h = !0, C(), f = fe(A, o, g), O.error(g);
        },
        complete: function() {
          m = !0, C(), f = fe(A, u), O.complete();
        }
      }), k(y).subscribe(l));
    })(c);
  };
}
function fe(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var o = new G({
      next: function() {
        o.unsubscribe(), e();
      }
    });
    return k(t.apply(void 0, N([], M(n)))).subscribe(o);
  }
}
function ar(e, t, n) {
  var r, o, i, u, a = !1;
  return e && typeof e == "object" ? (r = e.bufferSize, u = r === void 0 ? 1 / 0 : r, o = e.windowTime, t = o === void 0 ? 1 / 0 : o, i = e.refCount, a = i === void 0 ? !1 : i, n = e.scheduler) : u = e ?? 1 / 0, ur({
    connector: function() {
      return new wn(u, t, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: a
  });
}
function xt(e, t) {
  return I(function(n, r) {
    var o = null, i = 0, u = !1, a = function() {
      return u && !o && r.complete();
    };
    n.subscribe(x(r, function(s) {
      o == null || o.unsubscribe();
      var c = 0, l = i++;
      k(e(s, l)).subscribe(o = x(r, function(f) {
        return r.next(t ? t(s, f, l, c++) : f);
      }, function() {
        o = null, a();
      }));
    }, function() {
      u = !0, a();
    }));
  });
}
function sr(e, t, n) {
  var r = S(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? I(function(o, i) {
    var u;
    (u = r.subscribe) === null || u === void 0 || u.call(r);
    var a = !0;
    o.subscribe(x(i, function(s) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, s), i.next(s);
    }, function() {
      var s;
      a = !1, (s = r.complete) === null || s === void 0 || s.call(r), i.complete();
    }, function(s) {
      var c;
      a = !1, (c = r.error) === null || c === void 0 || c.call(r, s), i.error(s);
    }, function() {
      var s, c;
      a && ((s = r.unsubscribe) === null || s === void 0 || s.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : Y;
}
function Pe(e) {
  return new w(function(t) {
    var n = Nt(e, t.next.bind(t), t.error.bind(t), t.complete.bind(t));
    return { unsubscribe: n };
  });
}
const cr = "[DEFAULT]", It = v.createContext(void 0), $e = v.createContext(!1), lr = "4.2.3", fr = (e, t) => e === t || [...Object.keys(e), ...Object.keys(t)].every((n) => e[n] === t[n]);
function Xr(e) {
  const { firebaseConfig: t, appName: n, suspense: r } = e, o = v.useMemo(() => {
    if (e.firebaseApp)
      return e.firebaseApp;
    const i = Bt().find((u) => u.name === (n || cr));
    if (i) {
      if (t && fr(i.options, t))
        return i;
      throw new Error(`Does not match the options already provided to the ${n || "default"} firebase app instance, give this new instance a different appName.`);
    } else {
      if (!t)
        throw new Error("No firebaseConfig provided");
      const u = v.version || "unknown";
      return Ge("react", u), Ge("reactfire", lr), Jt(t, n);
    }
  }, [e.firebaseApp, t, n]);
  return v.createElement(
    It.Provider,
    { value: o },
    v.createElement($e.Provider, Object.assign({ value: r ?? !1 }, e))
  );
}
function eo() {
  const e = v.useContext($e);
  return e ?? !1;
}
function ue(e) {
  const t = v.useContext($e);
  return e !== void 0 ? e : t;
}
function At() {
  const e = v.useContext(It);
  if (!e)
    throw new Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");
  return e;
}
function to(e) {
  return Ee(this, void 0, void 0, function* () {
    const t = yield e();
    return Re(Pe(t), `auth:user:${t.name}`).toPromise();
  });
}
function dr(e) {
  const t = Vt(), n = `auth:user:${t.name}`, r = Pe(t);
  return E(n, r, e);
}
function vr(e, t = !1, n) {
  if (!e)
    throw new Error("you must provide a user");
  const r = `auth:idTokenResult:${e.uid}:forceRefresh=${t}`, o = P(e.getIdTokenResult(t));
  return E(r, o, n);
}
function no(e) {
  if (e != null && e.hasOwnProperty("requiredClaims") && (e != null && e.hasOwnProperty("validateCustomClaims")))
    throw new Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');
  const t = Vt();
  let n = `auth:signInCheck:${t.name}::forceRefresh:${!!(e != null && e.forceRefresh)}`;
  e != null && e.forceRefresh && (n = `${n}:forceRefresh:${e.forceRefresh}`), e != null && e.hasOwnProperty("requiredClaims") ? n = `${n}:requiredClaims:${JSON.stringify(e.requiredClaims)}` : e != null && e.hasOwnProperty("validateCustomClaims") && (n = `${n}:validateCustomClaims:${JSON.stringify(e.validateCustomClaims)}`);
  const r = Pe(t).pipe(xt((o) => {
    var i;
    return o ? e && (e.hasOwnProperty("requiredClaims") || e.hasOwnProperty("validateCustomClaims")) ? P(o.getIdTokenResult((i = e == null ? void 0 : e.forceRefresh) !== null && i !== void 0 ? i : !1)).pipe($((u) => {
      let a;
      e.hasOwnProperty("requiredClaims") ? a = hr(e.requiredClaims) : a = e.validateCustomClaims;
      const { hasRequiredClaims: s, errors: c } = a(u.claims);
      return { signedIn: !0, hasRequiredClaims: s, errors: c, user: o };
    })) : ye({ signedIn: !0, hasRequiredClaims: !0, errors: {}, user: o }) : ye({ signedIn: !1, hasRequiredClaims: !1, errors: {}, user: null });
  }));
  return E(n, r, e);
}
function hr(e) {
  return function(n) {
    const r = {};
    return Object.keys(e).forEach((o) => {
      e[o] !== n[o] && (r[o] = [new He("auth/missing-claim", `Expected "${e[o]}", but user has "${n[o]}" instead`)]);
    }), {
      hasRequiredClaims: Object.keys(r).length === 0,
      errors: r
    };
  };
}
function pr({ user: e, fallback: t, children: n, requiredClaims: r }) {
  const { data: o, status: i, error: u } = vr(e, !1);
  if (i === "loading")
    throw new Error("ClaimsCheck must be run in Suspense mode");
  if (i === "error")
    throw u;
  const { claims: a } = o, s = {};
  return ue() || console.warn("ClaimsCheck is deprecated and only works when ReactFire is in experimental Suspense Mode. Use useSigninCheck or set suspense={true} in FirebaseAppProvider if you want to use this component."), r && Object.keys(r).forEach((l) => {
    var f;
    r[l] !== a[l] && (s[l] = {
      expected: r[l],
      actual: (f = a[l]) === null || f === void 0 ? void 0 : f.toString()
    });
  }), Object.keys(s).length === 0 ? v.createElement(v.Fragment, null, n) : v.createElement(v.Fragment, null, t);
}
function ro({ fallback: e, children: t, requiredClaims: n }) {
  const { data: r } = dr();
  return ue() || console.warn("AuthCheck is deprecated and only works when ReactFire is in experimental Suspense Mode. Use useSigninCheck or set suspense={true} in FirebaseAppProvider if you want to use this component."), r ? n ? v.createElement(pr, { user: r, fallback: e, requiredClaims: n }, t) : v.createElement(v.Fragment, null, t) : v.createElement(v.Fragment, null, e);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U, _;
(function(e) {
  e.added = "child_added", e.removed = "child_removed", e.changed = "child_changed", e.moved = "child_moved", e.value = "value";
})(_ || (_ = {}));
var mr = Object.freeze((U = {}, U[_.added] = Wt, U[_.removed] = qt, U[_.changed] = Kt, U[_.moved] = Ht, U[_.value] = Gt, U));
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Te(e, t) {
  return new w(function(n) {
    var r = mr[t](e, function(o, i) {
      n.next({ snapshot: o, prevKey: i, event: t });
    }, n.error.bind(n));
    return {
      unsubscribe: function() {
        Qt(e, t, r);
      }
    };
  }).pipe(
    // Ensures subscribe on observable is async. This handles
    // a quirk in the SDK where on/once callbacks can happen
    // synchronously.
    er(0)
  );
}
var re = function() {
  return re = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, re.apply(this, arguments);
};
function de(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(e) {
  return (e == null || e.length === 0) && (e = [
    _.added,
    _.removed,
    _.changed,
    _.moved
  ]), e;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yr(e) {
  return Te(e, _.value);
}
function gr(e, t) {
  return t === void 0 && (t = {}), Te(e, _.value).pipe($(function(n) {
    return kt(n, t);
  }));
}
function kt(e, t) {
  var n;
  t === void 0 && (t = {});
  var r = e.snapshot.val();
  return !e.snapshot.exists() || typeof r != "object" ? r : re(re({}, r), t.keyField ? (n = {}, n[t.keyField] = e.snapshot.key, n) : null);
}
function _r(e) {
  return P(Yt(e)).pipe($(function(t) {
    var n = _.value;
    return { snapshot: t, prevKey: null, event: n };
  }));
}
function Ft(e, t) {
  t === void 0 && (t = {});
  var n = br(t.events);
  return _r(e).pipe(xt(function(r) {
    var o = [ye(r)];
    return n.forEach(function(i) {
      o.push(Te(e, i));
    }), Yn.apply(void 0, o).pipe(ir(Er, []));
  }), tr());
}
function Sr(e, t) {
  return t === void 0 && (t = {}), Ft(e).pipe($(function(n) {
    return n.map(function(r) {
      return kt(r, t);
    });
  }));
}
function Pt(e, t) {
  for (var n = e.length, r = 0; r < n; r++)
    if (e[r].snapshot.key === t)
      return r;
  return -1;
}
function wr(e, t) {
  if (t == null)
    return 0;
  var n = Pt(e, t);
  return n === -1 ? e.length : n + 1;
}
function Er(e, t) {
  var n = t.snapshot, r = t.prevKey, o = t.event, i = n.key, u = Pt(e, i), a = wr(e, r || void 0);
  switch (o) {
    case _.value:
      if (t.snapshot && t.snapshot.exists()) {
        var s = null;
        t.snapshot.forEach(function(f) {
          var p = {
            snapshot: f,
            event: _.value,
            prevKey: s
          };
          return s = f.key, e = de(de([], e, !0), [p], !1), !1;
        });
      }
      return e;
    case _.added:
      if (u > -1) {
        var c = e[u - 1];
        (c && c.snapshot.key || null) !== r && (e = e.filter(function(f) {
          return f.snapshot.key !== n.key;
        }), e.splice(a, 0, t));
      } else {
        if (r == null)
          return de([t], e, !0);
        e = e.slice(), e.splice(a, 0, t);
      }
      return e;
    case _.removed:
      return e.filter(function(f) {
        return f.snapshot.key !== n.key;
      });
    case _.changed:
      return e.map(function(f) {
        return f.snapshot.key === i ? t : f;
      });
    case _.moved:
      if (u > -1) {
        var l = e.splice(u, 1)[0];
        return e = e.slice(), e.splice(a, 0, l), e;
      }
      return e;
    default:
      return e;
  }
}
const _e = globalThis._reactFireDatabaseCachedQueries || [];
globalThis._reactFireDatabaseCachedQueries || (globalThis._reactFireDatabaseCachedQueries = _e);
function $t(e) {
  const t = _e.findIndex((n) => n.isEqual(e));
  return t > -1 ? t : _e.push(e) - 1;
}
function oo(e, t) {
  const n = `database:object:${e.toString()}`, r = yr(e);
  return E(n, r, t);
}
function io(e, t) {
  const n = t ? z(t) : "NO_ID_FIELD", r = `database:objectVal:${e.toString()}:idField=${n}`, o = gr(e, { keyField: n });
  return E(r, o, t);
}
function uo(e, t) {
  const n = `database:list:${$t(e)}`, r = Ft(e);
  return E(n, r, t);
}
function ao(e, t) {
  const n = t ? z(t) : "NO_ID_FIELD", r = `database:listVal:${$t(e)}:idField=${n}`, o = Sr(e, { keyField: n });
  return E(r, o, t);
}
var oe = function() {
  return oe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, oe.apply(this, arguments);
};
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Cr = { includeMetadataChanges: !1 };
function De(e, t) {
  return t === void 0 && (t = Cr), new w(function(n) {
    var r = zt(e, t, {
      next: n.next.bind(n),
      error: n.error.bind(n),
      complete: n.complete.bind(n)
    });
    return { unsubscribe: r };
  });
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e) {
  return De(e, { includeMetadataChanges: !0 });
}
function Tt(e, t) {
  return t === void 0 && (t = {}), ae(e).pipe($(function(n) {
    return Dt(n, t);
  }));
}
function Dt(e, t) {
  var n;
  t === void 0 && (t = {});
  var r = e.data(t);
  return !e.exists() || typeof r != "object" || r === null || !t.idField ? r : oe(oe({}, r), (n = {}, n[t.idField] = e.id, n));
}
function Or(e) {
  return De(e, { includeMetadataChanges: !0 }).pipe($(function(t) {
    return t.docs;
  }));
}
function xr(e, t) {
  return t === void 0 && (t = {}), Or(e).pipe($(function(n) {
    return n.map(function(r) {
      return Dt(r, t);
    });
  }));
}
var Se = { exports: {} }, ve = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Ir() {
  if (ze)
    return ve;
  ze = 1;
  var e = Xe;
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, i = e.useLayoutEffect, u = e.useDebugValue;
  function a(f, p) {
    var d = p(), m = r({ inst: { value: d, getSnapshot: p } }), h = m[0].inst, C = m[1];
    return i(function() {
      h.value = d, h.getSnapshot = p, s(h) && C({ inst: h });
    }, [f, d, p]), o(function() {
      return s(h) && C({ inst: h }), f(function() {
        s(h) && C({ inst: h });
      });
    }, [f]), u(d), d;
  }
  function s(f) {
    var p = f.getSnapshot;
    f = f.value;
    try {
      var d = p();
      return !n(f, d);
    } catch {
      return !0;
    }
  }
  function c(f, p) {
    return p();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return ve.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, ve;
}
var he = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Ar() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Xe, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(y) {
      {
        for (var b = arguments.length, O = new Array(b > 1 ? b - 1 : 0), g = 1; g < b; g++)
          O[g - 1] = arguments[g];
        r("error", y, O);
      }
    }
    function r(y, b, O) {
      {
        var g = t.ReactDebugCurrentFrame, K = g.getStackAddendum();
        K !== "" && (b += "%s", O = O.concat([K]));
        var H = O.map(function(F) {
          return String(F);
        });
        H.unshift("Warning: " + b), Function.prototype.apply.call(console[y], console, H);
      }
    }
    function o(y, b) {
      return y === b && (y !== 0 || 1 / y === 1 / b) || y !== y && b !== b;
    }
    var i = typeof Object.is == "function" ? Object.is : o, u = e.useState, a = e.useEffect, s = e.useLayoutEffect, c = e.useDebugValue, l = !1, f = !1;
    function p(y, b, O) {
      l || e.startTransition !== void 0 && (l = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var g = b();
      if (!f) {
        var K = b();
        i(g, K) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var H = u({
        inst: {
          value: g,
          getSnapshot: b
        }
      }), F = H[0].inst, se = H[1];
      return s(function() {
        F.value = g, F.getSnapshot = b, d(F) && se({
          inst: F
        });
      }, [y, g, b]), a(function() {
        d(F) && se({
          inst: F
        });
        var Mt = function() {
          d(F) && se({
            inst: F
          });
        };
        return y(Mt);
      }, [y]), c(g), g;
    }
    function d(y) {
      var b = y.getSnapshot, O = y.value;
      try {
        var g = b();
        return !i(O, g);
      } catch {
        return !0;
      }
    }
    function m(y, b, O) {
      return b();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", C = !h, A = C ? m : p, L = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : A;
    he.useSyncExternalStore = L, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), he;
}
process.env.NODE_ENV === "production" ? Se.exports = Ir() : Se.exports = Ar();
var kr = Se.exports;
class Fr extends ie {
  constructor(t, n, r) {
    super(), this._timeoutWindow = n, this._suspenseEnabled = r, this._hasValue = !1, this._error = void 0, this._isComplete = !1, this._firstEmission = new Promise((o) => this._resolveFirstEmission = o), this._immutableStatus = {
      status: "loading",
      hasEmitted: !1,
      isComplete: !1,
      data: void 0,
      error: void 0,
      firstValuePromise: this._firstEmission
    }, this._innerObservable = t.pipe(sr({
      next: (o) => {
        this._next(o);
      },
      error: (o) => {
        this._error = o, this._resolveFirstEmission(), this._updateImmutableStatus();
      },
      complete: () => {
        this._isComplete = !0, this._updateImmutableStatus();
      }
    }), Et(() => In()), ar(1)), this._warmupSubscription = this._innerObservable.subscribe(), this._suspenseEnabled ? this._timeoutHandler = setTimeout(() => {
    }, this._timeoutWindow) : this._timeoutHandler = setTimeout(this._reset.bind(this), this._timeoutWindow);
  }
  get hasValue() {
    return this._hasValue || !!this._error;
  }
  get value() {
    if (this._error)
      throw this._error;
    if (!this.hasValue)
      throw Error("Can only get value if SuspenseSubject has a value");
    return this._value;
  }
  get firstEmission() {
    return this._firstEmission;
  }
  _updateImmutableStatus() {
    this._immutableStatus = {
      status: this._error ? "error" : this._hasValue ? "success" : "loading",
      hasEmitted: this._hasValue,
      isComplete: this._isComplete,
      data: this._value,
      error: this._error,
      firstValuePromise: this._firstEmission
    };
  }
  _next(t) {
    this._hasValue = !0, this._value = t, this._resolveFirstEmission(), this._updateImmutableStatus();
  }
  _reset() {
    this._warmupSubscription && this._warmupSubscription.unsubscribe(), this._hasValue = !1, this._value = void 0, this._error = void 0, this._firstEmission = new Promise((t) => this._resolveFirstEmission = t), this._updateImmutableStatus();
  }
  _subscribe(t) {
    return this._timeoutHandler && clearTimeout(this._timeoutHandler), this._innerSubscriber = this._innerObservable.subscribe(t), this._innerSubscriber;
  }
  get ourError() {
    return this._error;
  }
  get immutableStatus() {
    return this._immutableStatus;
  }
}
const Pr = 3e4, ee = globalThis._reactFirePreloadedObservables || /* @__PURE__ */ new Map();
globalThis._reactFirePreloadedObservables || (globalThis._reactFirePreloadedObservables = ee);
function Re(e, t, n = !1) {
  if (ee.has(t))
    return ee.get(t);
  {
    const r = new Fr(e, Pr, n);
    return ee.set(t, r), r;
  }
}
function E(e, t, n = {}) {
  var r;
  if (!e)
    throw new Error("cannot call useObservable without an observableId");
  const o = ue(n.suspense), i = Re(t, e, o), u = n.hasOwnProperty("initialData") || n.hasOwnProperty("startWithValue"), a = i.hasValue || u;
  if (o === !0 && !a)
    throw i.firstEmission;
  const s = v.useCallback((f) => {
    const p = i.subscribe({
      next: () => {
        f();
      },
      error: (d) => {
        throw f(), d;
      },
      complete: () => {
        f();
      }
    });
    return () => {
      p.unsubscribe();
    };
  }, [i]), c = v.useCallback(() => i.immutableStatus, [i]), l = kr.useSyncExternalStore(s, c);
  if (!i.hasValue && a && (l.data = (r = n == null ? void 0 : n.initialData) !== null && r !== void 0 ? r : n == null ? void 0 : n.startWithValue, l.status = "success", l.hasEmitted = !0), l.error)
    throw l.error;
  return l;
}
const we = globalThis._reactFireFirestoreQueryCache || [];
globalThis._reactFireFirestoreQueryCache || (globalThis._reactFireFirestoreQueryCache = we);
function Rt(e) {
  const t = we.findIndex((n) => Zt(n, e));
  return t > -1 ? t : we.push(e) - 1;
}
function so(e) {
  return Ee(this, void 0, void 0, function* () {
    const t = yield e();
    return Re(ae(t), jt(t));
  });
}
function jt(e) {
  return `firestore:doc:${e.firestore.app.name}:${e.path}`;
}
function co(e, t) {
  const n = jt(e), r = ae(e);
  return E(n, r, t);
}
function lo(e, t) {
  const n = `firestore:docOnce:${e.firestore.app.name}:${e.path}`, r = ae(e).pipe(Ot());
  return E(n, r, t);
}
function fo(e, t) {
  const n = t ? z(t) : "NO_ID_FIELD", r = `firestore:docData:${e.firestore.app.name}:${e.path}:idField=${n}`, o = Tt(e, { idField: n });
  return E(r, o, t);
}
function vo(e, t) {
  const n = t ? z(t) : "NO_ID_FIELD", r = `firestore:docDataOnce:${e.firestore.app.name}:${e.path}:idField=${n}`, o = Tt(e, { idField: n }).pipe(Ot());
  return E(r, o, t);
}
function ho(e, t) {
  const n = `firestore:collection:${Rt(e)}`, r = De(e);
  return E(n, r, t);
}
function po(e, t) {
  const n = t ? z(t) : "NO_ID_FIELD", r = `firestore:collectionData:${Rt(e)}:idField=${n}`, o = xr(e, { idField: n });
  return E(r, o, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $r(e, t, n) {
  var r = Xt(e, t, n);
  return function(o) {
    return P(r(o)).pipe($(function(i) {
      return i.data;
    }));
  };
}
function mo(e, t) {
  const n = Wr(), r = `functions:callableResponse:${e}:${JSON.stringify(t == null ? void 0 : t.data)}:${JSON.stringify(t == null ? void 0 : t.httpsCallableOptions)}`, i = $r(n, e, t == null ? void 0 : t.httpsCallableOptions)(t == null ? void 0 : t.data);
  return E(r, i, t);
}
function bo({ children: e, traceId: t, fallback: n }) {
  var r;
  const o = ((r = performance == null ? void 0 : performance.getEntriesByName) === null || r === void 0 ? void 0 : r.call(performance, t, "measure")) || [], i = `_${t}Start[${o.length}]`, u = `_${t}End[${o.length}]`, a = () => (v.useLayoutEffect(() => {
    var s;
    return (s = performance == null ? void 0 : performance.mark) === null || s === void 0 || s.call(performance, i), () => {
      var c, l;
      (c = performance == null ? void 0 : performance.mark) === null || c === void 0 || c.call(performance, u), (l = performance == null ? void 0 : performance.measure) === null || l === void 0 || l.call(performance, t, i, u);
    };
  }, []), v.createElement(v.Fragment, null, n));
  return v.createElement(v.Suspense, { fallback: v.createElement(a, null) }, e);
}
function B(e) {
  var t = e.remoteConfig, n = e.key, r = e.getter;
  return new w(function(o) {
    nn(t).then(function() {
      var i = r.bind(t);
      o.next(i(t, n));
    });
  });
}
function Tr(e, t) {
  var n = rn;
  return B({ remoteConfig: e, key: t, getter: n });
}
function Dr(e, t) {
  var n = on;
  return B({ remoteConfig: e, key: t, getter: n });
}
function Rr(e, t) {
  var n = un;
  return B({ remoteConfig: e, key: t, getter: n });
}
function jr(e, t) {
  var n = an;
  return B({ remoteConfig: e, key: t, getter: n });
}
function Lr(e) {
  var t = sn;
  return B({ remoteConfig: e, key: "", getter: t });
}
function J(e, t) {
  const n = Kr(), r = n.app.name, o = t(n, e), i = `remoteConfig:${e}:${t.name}:${r}`;
  return E(i, o);
}
function yo(e) {
  return J(e, Tr);
}
function go(e) {
  return J(e, Dr);
}
function _o(e) {
  return J(e, Rr);
}
function So(e) {
  return J(e, jr);
}
function wo(e) {
  return J(e, Lr);
}
function Vr(e) {
  return new w(function(t) {
    var n = null, r = !1, o = !1, i = null, u = function(c) {
      n = c, s();
    }, a = null, s = function() {
      a || (a = setTimeout(function() {
        a = null, n && t.next(n), r && t.complete(), o && t.error(i);
      }));
    };
    t.add(function() {
      a && clearTimeout(a);
    }), u(e.snapshot), t.add(e.on("state_changed", u)), t.add(P(e).subscribe({
      next: u,
      error: function(c) {
        o = !0, i = c, s();
      },
      complete: function() {
        r = !0, s();
      }
    }));
  });
}
function Ur(e) {
  return P(en(e));
}
function Eo(e, t, n) {
  const r = `storage:task:${t.toString()}`, o = Vr(e);
  return E(r, o, n);
}
function Mr(e, t) {
  const n = `storage:downloadUrl:${e.toString()}`, r = Ur(e);
  return E(n, r, t);
}
function Nr(e) {
  const t = qr();
  return e = Object.assign(Object.assign({}, e), { storage: t }), v.createElement(Lt, Object.assign({}, e));
}
function Lt(e) {
  const { storage: t, storagePath: n, suspense: r, placeHolder: o } = e, i = cn(e, ["storage", "storagePath", "suspense", "placeHolder"]), u = {
    suspense: ue(r)
  };
  if (!t)
    throw new Error("Storage was not passed to component INTERNALStorageImage. This should not be possible");
  const { status: a, data: s } = Mr(tn(t, n), u);
  return a === "success" ? (i.alt || i.alt === "" || console.warn(`No alt prop provided for StorageImage with storagePath "${n}"`, "img elements must have an alt prop, either with meaningful text, or an empty string for decorative images"), v.createElement("img", Object.assign({ src: s, alt: i.alt }, i))) : o ?? v.createElement(v.Fragment, null, "''");
}
function Co(e) {
  const { storage: t } = e;
  return t ? v.createElement(Lt, Object.assign({}, e)) : v.createElement(Nr, Object.assign({}, e));
}
const je = v.createContext(void 0), Le = v.createContext(void 0), Ve = v.createContext(void 0), Ue = v.createContext(void 0), Me = v.createContext(void 0), Ne = v.createContext(void 0), We = v.createContext(void 0), qe = v.createContext(void 0), Ke = v.createContext(void 0);
function D(e) {
  return function(n) {
    var r, o;
    if (!n.sdk)
      throw new Error("no sdk provided");
    const i = At().name;
    if (((o = (r = n == null ? void 0 : n.sdk) === null || r === void 0 ? void 0 : r.app) === null || o === void 0 ? void 0 : o.name) !== i)
      throw new Error("sdk was initialized with a different firebase app");
    return v.createElement(e.Provider, Object.assign({ value: n.sdk }, n));
  };
}
function R(e) {
  const t = v.useContext(e);
  if (!t)
    throw new Error("SDK not found. useSdk must be called from within a provider");
  return t;
}
function j(e, t, n, r) {
  const o = At();
  if (v.useContext(t))
    throw new Error(`Cannot initialize SDK ${e} because it already exists in Context`);
  const i = v.useMemo(() => n(o), [o]);
  return E(`firebase-sdk:${e}:${o.name}`, P(i), r);
}
const Oo = D(je), xo = D(Le), Io = D(Ve), Ao = D(Ue), ko = D(Me), Fo = D(Ne), Po = D(qe), $o = D(We), To = D(Ke), Do = () => R(je), Vt = () => R(Le), Ro = () => R(Ve), jo = () => R(Ue), Lo = () => R(Me), Wr = () => R(Ne), Vo = () => R(qe), qr = () => R(We), Kr = () => R(Ke), Uo = (e, t) => j("appcheck", je, e, t), Mo = (e, t) => j("auth", Le, e, t), No = (e, t) => j("analytics", Ve, e, t), Wo = (e, t) => j("database", Ue, e, t), qo = (e, t) => j("firestore", Me, e, t), Ko = (e, t) => j("functions", Ne, e, t), Ho = (e, t) => j("performance", qe, e, t), Go = (e, t) => j("remoteconfig", Ke, e, t), Qo = (e, t) => j("storage", We, e, t);
class He extends Error {
  constructor(t, n, r) {
    super(n), this.code = t, this.customData = r, this.name = "ReactFireError", Object.setPrototypeOf(this, He.prototype);
  }
}
function Ut(e, t) {
  if (t === "idField" || t === "initialData" || t === "suspense")
    return e ? e[t] : void 0;
  throw new Error(`Field "${t}" is not a valid key in ReactFireOptions`);
}
function Yo(e) {
  return Ut(e, "initialData");
}
function z(e) {
  return Ut(e, "idField");
}
export {
  Io as AnalyticsProvider,
  Ve as AnalyticsSdkContext,
  Oo as AppCheckProvider,
  je as AppCheckSdkContext,
  ro as AuthCheck,
  xo as AuthProvider,
  Le as AuthSdkContext,
  pr as ClaimsCheck,
  Ao as DatabaseProvider,
  Ue as DatabaseSdkContext,
  Xr as FirebaseAppProvider,
  ko as FirestoreProvider,
  Me as FirestoreSdkContext,
  Fo as FunctionsProvider,
  Ne as FunctionsSdkContext,
  Po as PerformanceProvider,
  qe as PerformanceSdkContext,
  He as ReactFireError,
  To as RemoteConfigProvider,
  Ke as RemoteConfigSdkContext,
  Co as StorageImage,
  $o as StorageProvider,
  We as StorageSdkContext,
  bo as SuspenseWithPerf,
  z as checkIdField,
  Ut as checkOptions,
  Yo as checkinitialData,
  so as preloadFirestoreDoc,
  Re as preloadObservable,
  to as preloadUser,
  Ro as useAnalytics,
  Do as useAppCheck,
  Vt as useAuth,
  mo as useCallableFunctionResponse,
  jo as useDatabase,
  uo as useDatabaseList,
  ao as useDatabaseListData,
  oo as useDatabaseObject,
  io as useDatabaseObjectData,
  At as useFirebaseApp,
  Lo as useFirestore,
  ho as useFirestoreCollection,
  po as useFirestoreCollectionData,
  co as useFirestoreDoc,
  fo as useFirestoreDocData,
  vo as useFirestoreDocDataOnce,
  lo as useFirestoreDocOnce,
  Wr as useFunctions,
  vr as useIdTokenResult,
  No as useInitAnalytics,
  Uo as useInitAppCheck,
  Mo as useInitAuth,
  Wo as useInitDatabase,
  qo as useInitFirestore,
  Ko as useInitFunctions,
  Ho as useInitPerformance,
  Go as useInitRemoteConfig,
  Qo as useInitStorage,
  eo as useIsSuspenseEnabled,
  E as useObservable,
  Vo as usePerformance,
  Kr as useRemoteConfig,
  wo as useRemoteConfigAll,
  So as useRemoteConfigBoolean,
  _o as useRemoteConfigNumber,
  go as useRemoteConfigString,
  yo as useRemoteConfigValue,
  no as useSigninCheck,
  qr as useStorage,
  Mr as useStorageDownloadURL,
  Eo as useStorageTask,
  ue as useSuspenseEnabledFromConfigAndContext,
  dr as useUser,
  lr as version
};
//# sourceMappingURL=index.js.map
