/*! For license information please see react-countdown-clock.js.LICENSE.txt */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e(require("react")))
    : "function" == typeof define && define.amd
    ? define(["react"], e)
    : "object" == typeof exports
    ? (exports.ReactCountdownClock = e(require("react")))
    : (t.ReactCountdownClock = e(t.React));
})(this, function (t) {
  return (
    (e = {
      632: (t, e, i) => {
        var s, n, r;
        (n = i(427)),
          (s = i(615)),
          ((r = i(898)({
            _seconds: 0,
            _radius: null,
            _fraction: null,
            _content: null,
            _canvas: null,
            _timeoutIds: [],
            _scale:
              ("undefined" != typeof window && null !== window
                ? window.devicePixelRatio
                : void 0) || 1,
            displayName: "ReactCountdownClock",
            componentDidUpdate: function (t) {
              if (
                (t.seconds !== this.props.seconds &&
                  ((this._seconds = this._startSeconds()),
                  this._stopTimer(),
                  this._setupTimer()),
                t.color !== this.props.color &&
                  (this._drawBackground(), this._updateCanvas()),
                t.paused !== this.props.paused &&
                  (this.props.paused || this._startTimer(), this.props.paused))
              )
                return this._pauseTimer();
            },
            componentDidMount: function () {
              return (this._seconds = this._startSeconds()), this._setupTimer();
            },
            componentWillUnmount: function () {
              return this._cancelTimer();
            },
            _startSeconds: function () {
              return this.props.paused
                ? this.props.seconds
                : this.props.seconds - 0.01;
            },
            _setupTimer: function () {
              if (
                (this._setScale(),
                this._setupCanvases(),
                this._drawBackground(),
                this._drawTimer(),
                !this.props.paused)
              )
                return this._startTimer();
            },
            _updateCanvas: function () {
              return this._clearTimer(), this._drawTimer();
            },
            _setScale: function () {
              return (
                (this._radius = this.props.size / 2),
                (this._fraction = 2 / this._seconds),
                (this._tickPeriod = this._calculateTick()),
                // (this._innerRadius = this.props.weight
                //   ? this._radius - this.props.weight
                //   : this._radius / 1.8)
                (this._innerRadius = this.props.weight
                  ? this._radius - this.props.weight
                  : 0)
                
              );
            },
            _calculateTick: function () {
              var t;
              return (t = 1.8 * this._seconds) > 1e3 ? 1e3 : t;
            },
            _setupCanvases: function () {
              if (!this._background || !this._timer)
                return (
                  (this._background = this.refs.background.getContext("2d")),
                  this._background.scale(this._scale, this._scale),
                  (this._timer = this.refs.timer.getContext("2d")),
                  (this._timer.textAlign = "center"),
                  (this._timer.textBaseline = "middle"),
                  this._timer.scale(this._scale, this._scale),
                  null != this.props.onClick
                    ? this.refs.component.addEventListener(
                        "click",
                        this.props.onClick
                      )
                    : void 0
                );
            },
            _startTimer: function () {
              return this._timeoutIds.push(
                setTimeout(() => this._tick()),
                200
              );
            },
            _pauseTimer: function () {
              return this._stopTimer(), this._updateCanvas();
            },
            _stopTimer: function () {
              var t, e, i, s, n;
              for (s = [], t = 0, e = (i = this._timeoutIds).length; t < e; t++)
                (n = i[t]), s.push(clearTimeout(n));
              return s;
            },
            _cancelTimer: function () {
              if ((this._stopTimer(), null != this.props.onClick))
                return this.refs.component.removeEventListener(
                  "click",
                  this.props.onClick
                );
            },
            _tick: function () {
              var t;
              return (
                (t = Date.now()),
                this._timeoutIds.push(
                  setTimeout(() => {
                    var e;
                    return (
                      (e = (Date.now() - t) / 1e3),
                      (this._seconds -= e),
                      this._seconds <= 0
                        ? ((this._seconds = 0),
                          this._handleComplete(),
                          this._clearTimer())
                        : (this._updateCanvas(), this._tick())
                    );
                  }, this._tickPeriod)
                )
              );
            },
            _handleComplete: function () {
              if (this.props.onComplete) return this.props.onComplete();
            },
            _clearBackground: function () {
              return this._background.clearRect(
                0,
                0,
                this.refs.timer.width,
                this.refs.timer.height
              );
            },
            _clearTimer: function () {
              if (null != this.refs.timer)
                return this._timer.clearRect(
                  0,
                  0,
                  this.refs.timer.width,
                  this.refs.timer.height
                );
            },
            _drawBackground: function () {
              return (
                this._clearBackground(),
                this._background.beginPath(),
                (this._background.globalAlpha = this.props.alpha / 3),//
                (this._background.fillStyle = this.props.color),
                this._background.arc(
                  // this._radius,
                  // this._radius,
                  // this._radius,
                  this.props.size/2,
                  this.props.size/2,
                  this.props.size/2,

                  0,
                  2 * Math.PI,
                  !1
                ),
                this._background.arc(
                  // this._radius,
                  // this._radius,
                  // this._innerRadius,
                  this.props.size/2,
                  this.props.size/2,
                  this.props.size/2,
                  2 * Math.PI,
                  0,
                  !0
                ),
                this._background.closePath(),
                this._background.fill()
              );
            },
            _formattedTime: function () {
              var t, e, i, s, n, r, o, a, c;
              return (
                (t =
                  null !=
                  (r = this._seconds < 10 && this.props.showMilliseconds)
                    ? r
                    : { 1: 0 }),
                "hms" === this.props.timeFormat
                  ? ((i = "" + (e = parseInt(this._seconds / 3600) % 24)),
                    (n = "" + (s = parseInt(this._seconds / 60) % 60)),
                    (a = `${(o = t
                      ? (Math.floor(10 * this._seconds) / 10).toFixed(t)
                      : Math.floor(this._seconds % 60))}`),
                    e < 10 && (i = `0${e}`),
                    s < 10 && e >= 1 && (n = `0${s}`),
                    o < 10 && (s >= 1 || e >= 1) && (a = `0${o}`),
                    (c = []),
                    e > 0 && c.push(i),
                    (s > 0 || e > 0) && c.push(n),
                    c.push(a),
                    c.join(":"))
                  : (Math.floor(10 * this._seconds) / 10).toFixed(t)
              );
            },
            _fontSize: function (t) {
              var e;
              return "auto" === this.props.fontSize
                ? ((e = (function () {
                    switch (t.length) {
                      case 8:
                        return 4;
                      case 5:
                        return 3;
                      default:
                        return 2;
                    }
                  })()),
                  this._radius / e + "px")
                : this.props.fontSize;
            },
            _drawTimer: function () {
              var t, e, i;
              return (
                (e = this._fraction * this._seconds + 1.5),
                // (t = this._formattedTime()),
                (t = ""),
                (i =
                  this.props.paused && null != this.props.pausedText
                    ? this.props.pausedText
                    : t),
                (this._timer.globalAlpha = this.props.alpha),
                (this._timer.fillStyle = this.props.color),
                (this._timer.font = `bold ${this._fontSize(t)} ${
                  this.props.font
                }`),
                this._timer.fillText(i, this._radius, this._radius),
                this._timer.beginPath(),
                this._timer.arc(
                  this._radius,
                  this._radius,
                  this._radius,
                  1.5 * Math.PI,
                  Math.PI * e,
                  !1
                ),
                this._timer.arc(
                  this._radius,
                  this._radius,
                  this._innerRadius,
                  Math.PI * e,
                  1.5 * Math.PI,
                  !0
                ),
                this._timer.closePath(),
                this._timer.fill()
              );
            },
            render: function () {
              var t;
              return (
                (t = {
                  style: {
                    position: "absolute",
                    width: this.props.size,
                    height: this.props.size,
                  },
                  height: this.props.size ,
                  width: this.props.size ,
                }),
                n.createElement(
                  "div",
                  {
                    ref: "component",
                    className: "react-countdown-clock",
                    style: { width: this.props.size, height: this.props.size },
                  },
                  n.createElement(
                    "canvas",
                    Object.assign({ ref: "background" }, t)
                  ),
                  n.createElement("canvas", Object.assign({ ref: "timer" }, t))
                )
              );
            },
          })).propTypes = {
            seconds: s.number,
            size: s.number,
            weight: s.number,
            color: s.string,
            fontSize: s.string,
            font: s.string,
            alpha: s.number,
            timeFormat: s.string,
            onComplete: s.func,
            onClick: s.func,
            showMilliseconds: s.bool,
            paused: s.bool,
            pausedText: s.string,
          }),
          (r.defaultProps = {
            seconds: 60,
            size: 300,
            color: "#000",
            alpha: 1,
            timeFormat: "hms",
            fontSize: "auto",
            font: "Arial",
            showMilliseconds: !0,
            paused: !1,
          }),
          (t.exports = r);
      },
      626: (t, e, i) => {
        "use strict";
        var s = i(525),
          n = {};
        function r(t, e, i, s, n, r, o, a) {
          if (!t) {
            var c;
            if (void 0 === e)
              c = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var p = [i, s, n, r, o, a],
                u = 0;
              (c = new Error(
                e.replace(/%s/g, function () {
                  return p[u++];
                })
              )).name = "Invariant Violation";
            }
            throw ((c.framesToPop = 1), c);
          }
        }
        var o = "mixins";
        t.exports = function (t, e, i) {
          var a = [],
            c = {
              mixins: "DEFINE_MANY",
              statics: "DEFINE_MANY",
              propTypes: "DEFINE_MANY",
              contextTypes: "DEFINE_MANY",
              childContextTypes: "DEFINE_MANY",
              getDefaultProps: "DEFINE_MANY_MERGED",
              getInitialState: "DEFINE_MANY_MERGED",
              getChildContext: "DEFINE_MANY_MERGED",
              render: "DEFINE_ONCE",
              componentWillMount: "DEFINE_MANY",
              componentDidMount: "DEFINE_MANY",
              componentWillReceiveProps: "DEFINE_MANY",
              shouldComponentUpdate: "DEFINE_ONCE",
              componentWillUpdate: "DEFINE_MANY",
              componentDidUpdate: "DEFINE_MANY",
              componentWillUnmount: "DEFINE_MANY",
              UNSAFE_componentWillMount: "DEFINE_MANY",
              UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
              UNSAFE_componentWillUpdate: "DEFINE_MANY",
              updateComponent: "OVERRIDE_BASE",
            },
            p = { getDerivedStateFromProps: "DEFINE_MANY_MERGED" },
            u = {
              displayName: function (t, e) {
                t.displayName = e;
              },
              mixins: function (t, e) {
                if (e) for (var i = 0; i < e.length; i++) l(t, e[i]);
              },
              childContextTypes: function (t, e) {
                t.childContextTypes = s({}, t.childContextTypes, e);
              },
              contextTypes: function (t, e) {
                t.contextTypes = s({}, t.contextTypes, e);
              },
              getDefaultProps: function (t, e) {
                t.getDefaultProps
                  ? (t.getDefaultProps = f(t.getDefaultProps, e))
                  : (t.getDefaultProps = e);
              },
              propTypes: function (t, e) {
                t.propTypes = s({}, t.propTypes, e);
              },
              statics: function (t, e) {
                !(function (t, e) {
                  if (e)
                    for (var i in e) {
                      var s = e[i];
                      if (e.hasOwnProperty(i)) {
                        if (
                          (r(
                            !(i in u),
                            'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
                            i
                          ),
                          i in t)
                        )
                          return (
                            r(
                              "DEFINE_MANY_MERGED" ===
                                (p.hasOwnProperty(i) ? p[i] : null),
                              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                              i
                            ),
                            void (t[i] = f(t[i], s))
                          );
                        t[i] = s;
                      }
                    }
                })(t, e);
              },
              autobind: function () {},
            };
          function h(t, e) {
            var i = c.hasOwnProperty(e) ? c[e] : null;
            E.hasOwnProperty(e) &&
              r(
                "OVERRIDE_BASE" === i,
                "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
                e
              ),
              t &&
                r(
                  "DEFINE_MANY" === i || "DEFINE_MANY_MERGED" === i,
                  "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
                  e
                );
          }
          function l(t, i) {
            if (i) {
              r(
                "function" != typeof i,
                "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
              ),
                r(
                  !e(i),
                  "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
                );
              var s = t.prototype,
                n = s.__reactAutoBindPairs;
              for (var a in (i.hasOwnProperty(o) && u.mixins(t, i.mixins), i))
                if (i.hasOwnProperty(a) && a !== o) {
                  var p = i[a],
                    l = s.hasOwnProperty(a);
                  if ((h(l, a), u.hasOwnProperty(a))) u[a](t, p);
                  else {
                    var d = c.hasOwnProperty(a);
                    if ("function" != typeof p || d || l || !1 === i.autobind)
                      if (l) {
                        var m = c[a];
                        r(
                          d &&
                            ("DEFINE_MANY_MERGED" === m || "DEFINE_MANY" === m),
                          "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                          m,
                          a
                        ),
                          "DEFINE_MANY_MERGED" === m
                            ? (s[a] = f(s[a], p))
                            : "DEFINE_MANY" === m && (s[a] = _(s[a], p));
                      } else s[a] = p;
                    else n.push(a, p), (s[a] = p);
                  }
                }
            }
          }
          function d(t, e) {
            for (var i in (r(
              t && e && "object" == typeof t && "object" == typeof e,
              "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
            ),
            e))
              e.hasOwnProperty(i) &&
                (r(
                  void 0 === t[i],
                  "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
                  i
                ),
                (t[i] = e[i]));
            return t;
          }
          function f(t, e) {
            return function () {
              var i = t.apply(this, arguments),
                s = e.apply(this, arguments);
              if (null == i) return s;
              if (null == s) return i;
              var n = {};
              return d(n, i), d(n, s), n;
            };
          }
          function _(t, e) {
            return function () {
              t.apply(this, arguments), e.apply(this, arguments);
            };
          }
          function m(t, e) {
            return e.bind(t);
          }
          var y = {
              componentDidMount: function () {
                this.__isMounted = !0;
              },
            },
            g = {
              componentWillUnmount: function () {
                this.__isMounted = !1;
              },
            },
            E = {
              replaceState: function (t, e) {
                this.updater.enqueueReplaceState(this, t, e);
              },
              isMounted: function () {
                return !!this.__isMounted;
              },
            },
            b = function () {};
          return (
            s(b.prototype, t.prototype, E),
            function (t) {
              var e = function (t, s, o) {
                this.__reactAutoBindPairs.length &&
                  (function (t) {
                    for (
                      var e = t.__reactAutoBindPairs, i = 0;
                      i < e.length;
                      i += 2
                    ) {
                      var s = e[i],
                        n = e[i + 1];
                      t[s] = m(t, n);
                    }
                  })(this),
                  (this.props = t),
                  (this.context = s),
                  (this.refs = n),
                  (this.updater = o || i),
                  (this.state = null);
                var a = this.getInitialState ? this.getInitialState() : null;
                r(
                  "object" == typeof a && !Array.isArray(a),
                  "%s.getInitialState(): must return an object or null",
                  e.displayName || "ReactCompositeComponent"
                ),
                  (this.state = a);
              };
              for (var s in ((e.prototype = new b()),
              (e.prototype.constructor = e),
              (e.prototype.__reactAutoBindPairs = []),
              a.forEach(l.bind(null, e)),
              l(e, y),
              l(e, t),
              l(e, g),
              e.getDefaultProps && (e.defaultProps = e.getDefaultProps()),
              r(
                e.prototype.render,
                "createClass(...): Class specification must implement a `render` method."
              ),
              c))
                e.prototype[s] || (e.prototype[s] = null);
              return e;
            }
          );
        };
      },
      898: (t, e, i) => {
        "use strict";
        var s = i(427),
          n = i(626);
        if (void 0 === s)
          throw Error(
            "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
          );
        var r = new s.Component().updater;
        t.exports = n(s.Component, s.isValidElement, r);
      },
      525: (t) => {
        "use strict";
        var e = Object.getOwnPropertySymbols,
          i = Object.prototype.hasOwnProperty,
          s = Object.prototype.propertyIsEnumerable;
        function n(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        t.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, i = 0; i < 10; i++)
              e["_" + String.fromCharCode(i)] = i;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var s = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                s[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, s)).join("")
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Object.assign
          : function (t, r) {
              for (var o, a, c = n(t), p = 1; p < arguments.length; p++) {
                for (var u in (o = Object(arguments[p])))
                  i.call(o, u) && (c[u] = o[u]);
                if (e) {
                  a = e(o);
                  for (var h = 0; h < a.length; h++)
                    s.call(o, a[h]) && (c[a[h]] = o[a[h]]);
                }
              }
              return c;
            };
      },
      772: (t, e, i) => {
        "use strict";
        var s = i(331);
        function n() {}
        function r() {}
        (r.resetWarningCache = n),
          (t.exports = function () {
            function t(t, e, i, n, r, o) {
              if (o !== s) {
                var a = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((a.name = "Invariant Violation"), a);
              }
            }
            function e() {
              return t;
            }
            t.isRequired = t;
            var i = {
              array: t,
              bool: t,
              func: t,
              number: t,
              object: t,
              string: t,
              symbol: t,
              any: t,
              arrayOf: e,
              element: t,
              elementType: t,
              instanceOf: e,
              node: t,
              objectOf: e,
              oneOf: e,
              oneOfType: e,
              shape: e,
              exact: e,
              checkPropTypes: r,
              resetWarningCache: n,
            };
            return (i.PropTypes = i), i;
          });
      },
      615: (t, e, i) => {
        t.exports = i(772)();
      },
      331: (t) => {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      427: (e) => {
        "use strict";
        e.exports = t;
      },
    }),
    (i = {}),
    (function t(s) {
      var n = i[s];
      if (void 0 !== n) return n.exports;
      var r = (i[s] = { exports: {} });
      return e[s](r, r.exports, t), r.exports;
    })(632)
  );
  var e, i;
});
//# sourceMappingURL=react-countdown-clock.js.map
