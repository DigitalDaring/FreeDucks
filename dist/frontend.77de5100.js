// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/sample-button.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SampleButton =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(SampleButton, _HTMLElement);

  function SampleButton(freeducks) {
    var _this;

    _classCallCheck(this, SampleButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SampleButton).call(this));
    _this.freeducks = freeducks;
    _this.clickCount = 0;
    _this.shadow = _this.attachShadow({
      mode: 'open'
    });

    _this.render();

    _this.addEventListener('click', _this.incrementCount);

    _this.freeducks.subscribe(function (state) {
      _this.clickCount = state.count;

      _this.render();
    });

    return _this;
  }

  _createClass(SampleButton, [{
    key: "incrementCount",
    value: function incrementCount() {
      this.freeducks.dispatch({
        name: 'increment'
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.shadow.innerHTML = "\n            <style>".concat(this.css, "</style>\n            <a class=\"clickable\">\n                Clicked ").concat(this.clickCount, " times!\n            </a>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n            a.clickable {\n                padding: 10px;\n                border-radius: 10px;\n                background-color: #66C;\n                color: #FFF;\n                cursor: pointer;\n                box-shadow: 1px 2px 3px #ccc;\n            }\n\n            a.clickable:hover {\n                box-shadow: 0px 1px 2px #bbb;\n            }\n        ";
    }
  }], [{
    key: "componentName",
    get: function get() {
      return 'sample-button';
    }
  }]);

  return SampleButton;
}(_wrapNativeSuper(HTMLElement));

exports.SampleButton = SampleButton;
},{}],"freeducks/index.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FreeDucks =
/*#__PURE__*/
function () {
  function FreeDucks(state) {
    _classCallCheck(this, FreeDucks);

    this.state = state;
    this.reducers = [];
    this.subscriptions = [];
  }

  _createClass(FreeDucks, [{
    key: "dispatch",
    value: function dispatch(action) {
      var _this = this;

      this.reducers.forEach(function (reducer) {
        _this.state = reducer.update(action, _this.state);
      });
      var updates = Object.assign({}, this.state);
      this.updateSubscriptions(updates);
    }
  }, {
    key: "updateSubscriptions",
    value: function updateSubscriptions(newState) {
      this.subscriptions.forEach(function (subscription) {
        subscription(newState);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      this.subscriptions.push(callback);
      callback(this.state);
    }
  }, {
    key: "registerReducer",
    value: function registerReducer(reducer) {
      this.reducers.push(reducer);
    }
  }]);

  return FreeDucks;
}();

exports.FreeDucks = FreeDucks;
},{}],"components/state-dump.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var StateDump =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(StateDump, _HTMLElement);

  function StateDump(freeducks) {
    var _this;

    _classCallCheck(this, StateDump);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateDump).call(this));
    _this.freeducks = freeducks;
    _this.shadow = _this.attachShadow({
      mode: 'open'
    });
    freeducks.subscribe(function (state) {
      _this.render(state);
    });
    return _this;
  }

  _createClass(StateDump, [{
    key: "render",
    value: function render(state) {
      var friendlyState = JSON.stringify(state, null, 2);
      this.shadow.innerHTML = "<pre>".concat(friendlyState, "</pre>");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n\n        ";
    }
  }], [{
    key: "componentName",
    get: function get() {
      return 'state-dump';
    }
  }]);

  return StateDump;
}(_wrapNativeSuper(HTMLElement));

exports.StateDump = StateDump;
},{}],"assets/plants/plants_0.png":[function(require,module,exports) {
module.exports = "/plants_0.a9b04166.png";
},{}],"assets/plants/plants_1.png":[function(require,module,exports) {
module.exports = "/plants_1.a322f4c1.png";
},{}],"assets/plants/plants_2.png":[function(require,module,exports) {
module.exports = "/plants_2.d93104bc.png";
},{}],"assets/plants/plants_3.png":[function(require,module,exports) {
module.exports = "/plants_3.b2b281e6.png";
},{}],"assets/plants/plants_4.png":[function(require,module,exports) {
module.exports = "/plants_4.20c5fe94.png";
},{}],"assets/plants/plants_5.png":[function(require,module,exports) {
module.exports = "/plants_5.00ecc715.png";
},{}],"components/potted-plant.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var plants_0_png_1 = __importDefault(require("../assets/plants/plants_0.png"));

var plants_1_png_1 = __importDefault(require("../assets/plants/plants_1.png"));

var plants_2_png_1 = __importDefault(require("../assets/plants/plants_2.png"));

var plants_3_png_1 = __importDefault(require("../assets/plants/plants_3.png"));

var plants_4_png_1 = __importDefault(require("../assets/plants/plants_4.png"));

var plants_5_png_1 = __importDefault(require("../assets/plants/plants_5.png"));

var PottedPlant =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(PottedPlant, _HTMLElement);

  function PottedPlant(freeducks) {
    var _this;

    _classCallCheck(this, PottedPlant);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PottedPlant).call(this));
    _this.freeducks = freeducks;
    _this.shadow = _this.attachShadow({
      mode: 'open'
    }); //'<canvas id="plant-canvas" width="48px" height="72px"></canvas';
    // this.canvas = this.shadow.querySelector('#plant-canvas') as HTMLCanvasElement;
    // this.canvasContext = this.canvas.getContext('2d');
    // this.canvasContext.fillStyle = 'rgba(0,0,0,1)';
    // this.canvasContext.fillRect(0, 0, 20, 20);

    _this.freeducks.subscribe(function (state) {
      _this.render(state);
    });

    return _this;
  }

  _createClass(PottedPlant, [{
    key: "render",
    value: function render(state) {
      var plantProgress;
      var berriesProgress;

      if (state.count > 1) {
        plantProgress = plants_1_png_1.default;
      }

      if (state.count > 10) {
        plantProgress = plants_2_png_1.default;
      }

      if (state.count > 20) {
        plantProgress = plants_3_png_1.default;
      }

      if (state.count > 30) {
        plantProgress = plants_4_png_1.default;
      }

      if (state.count > 40) {
        berriesProgress = plants_5_png_1.default;
      }

      var plantImage = "<img class=\"plant\" src=\"".concat(plantProgress, "\">");
      var berriesImage = "<img class=\"berries\" src=\"".concat(berriesProgress, "\">");
      this.shadow.innerHTML = "\n            <style>\n                ".concat(this.css, "\n            </style>\n            <div class=\"shelf\">\n                <img class=\"pot\" src=\"").concat(plants_0_png_1.default, "\">\n                ").concat(berriesProgress ? berriesImage : '', "\n                ").concat(plantProgress ? plantImage : '', "\n            </div>\n        ");
    }
  }, {
    key: "css",
    get: function get() {
      return "\n            .shelf {\n                position: relative;\n                width: 48px;\n                height: 72px;\n            }\n\n            img {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 48px;\n                height: 72px;\n            }\n\n            img.pot {\n                z-index: 100;\n            }\n\n            img.plant {\n                z-index: 200;\n            }\n\n            img.berries {\n                z-index: 300;\n            }\n        ";
    }
  }], [{
    key: "componentName",
    get: function get() {
      return 'potted-plant';
    }
  }]);

  return PottedPlant;
}(_wrapNativeSuper(HTMLElement));

exports.PottedPlant = PottedPlant;
},{"../assets/plants/plants_0.png":"assets/plants/plants_0.png","../assets/plants/plants_1.png":"assets/plants/plants_1.png","../assets/plants/plants_2.png":"assets/plants/plants_2.png","../assets/plants/plants_3.png":"assets/plants/plants_3.png","../assets/plants/plants_4.png":"assets/plants/plants_4.png","../assets/plants/plants_5.png":"assets/plants/plants_5.png"}],"components/game-window.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameWindow =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(GameWindow, _HTMLElement);

  function GameWindow(freeducks) {
    var _this;

    _classCallCheck(this, GameWindow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameWindow).call(this));
    _this.freeducks = freeducks;
    _this.shadow = _this.attachShadow({
      mode: 'open'
    });
    _this.shadow.innerHTML = '<canvas id="plant-canvas" width="48px" height="72px"></canvas>';
    _this.canvas = _this.shadow.querySelector('#plant-canvas');
    _this.canvasContext = _this.canvas.getContext('2d');

    _this.freeducks.subscribe(function (state) {
      _this.render(state);
    });

    window.setInterval(function () {
      _this.freeducks.dispatch({
        name: 'increment'
      });
    }, 2000);
    return _this;
  }

  _createClass(GameWindow, [{
    key: "render",
    value: function render(state) {
      var _this2 = this;

      this.canvas.width = state.tileSizeX * state.scene.width;
      this.canvas.height = state.tileSizeY * state.scene.height;
      this.canvasContext.fillStyle = '#FFF';
      this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
      state.scene.layers.forEach(function (layer) {
        layer.tileMap.forEach(function (row, yIdx) {
          var y = yIdx * state.tileSizeY;
          row.forEach(function (cell, xIdx) {
            var x = xIdx * state.tileSizeX;

            _this2.canvasContext.drawImage(state.tileSet[cell], x, y);
          });
        });
      });
    }
  }], [{
    key: "componentName",
    get: function get() {
      return 'game-window';
    }
  }]);

  return GameWindow;
}(_wrapNativeSuper(HTMLElement));

exports.GameWindow = GameWindow;
},{}],"state/layer.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Layer = function Layer() {
  _classCallCheck(this, Layer);
};

exports.Layer = Layer;
},{}],"state/scene.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scene = function Scene() {
  _classCallCheck(this, Scene);
};

exports.Scene = Scene;
},{}],"assets/building/wall_02.png":[function(require,module,exports) {
module.exports = "/wall_02.bd96b3b6.png";
},{}],"assets/building/wall_01.png":[function(require,module,exports) {
module.exports = "/wall_01.d4eda60b.png";
},{}],"assets/building/wall_00.png":[function(require,module,exports) {
module.exports = "/wall_00.378e5fbb.png";
},{}],"assets/building/wall_03.png":[function(require,module,exports) {
module.exports = "/wall_03.4dc81adf.png";
},{}],"assets/building/wall_05.png":[function(require,module,exports) {
module.exports = "/wall_05.0881826f.png";
},{}],"assets/building/wall_04.png":[function(require,module,exports) {
module.exports = "/wall_04.b0b865de.png";
},{}],"assets/building/wall_06.png":[function(require,module,exports) {
module.exports = "/wall_06.a6d186dc.png";
},{}],"index.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sample_button_1 = require("./components/sample-button");

var index_1 = require("./freeducks/index");

var state_dump_1 = require("./components/state-dump");

var potted_plant_1 = require("./components/potted-plant");

var game_window_1 = require("./components/game-window");

var layer_1 = require("./state/layer");

var scene_1 = require("./state/scene");

var plants_0_png_1 = __importDefault(require("./assets/plants/plants_0.png"));

var plants_1_png_1 = __importDefault(require("./assets/plants/plants_1.png"));

var plants_2_png_1 = __importDefault(require("./assets/plants/plants_2.png"));

var plants_3_png_1 = __importDefault(require("./assets/plants/plants_3.png"));

var plants_4_png_1 = __importDefault(require("./assets/plants/plants_4.png"));

var plants_5_png_1 = __importDefault(require("./assets/plants/plants_5.png"));

var wall_02_png_1 = __importDefault(require("./assets/building/wall_02.png"));

var wall_01_png_1 = __importDefault(require("./assets/building/wall_01.png"));

var wall_00_png_1 = __importDefault(require("./assets/building/wall_00.png"));

var wall_03_png_1 = __importDefault(require("./assets/building/wall_03.png"));

var wall_05_png_1 = __importDefault(require("./assets/building/wall_05.png"));

var wall_04_png_1 = __importDefault(require("./assets/building/wall_04.png"));

var wall_06_png_1 = __importDefault(require("./assets/building/wall_06.png"));

var blankScene = new scene_1.Scene();
blankScene.width = 10;
blankScene.height = 4;
blankScene.layers = [];
var wallImage = new Image(64, 96);
wallImage.src = wall_02_png_1.default;
var leftWindowImage = new Image(64, 96);
leftWindowImage.src = wall_01_png_1.default;
var rightWindowImage = new Image(64, 96);
rightWindowImage.src = wall_00_png_1.default;
var topLeftWindowImage = new Image(64, 96);
topLeftWindowImage.src = wall_03_png_1.default;
var topWindowImage = new Image(64, 96);
topWindowImage.src = wall_05_png_1.default;
var topRightWindowImage = new Image(64, 96);
topRightWindowImage.src = wall_04_png_1.default;
var windowPaneImage = new Image(64, 96);
windowPaneImage.src = wall_06_png_1.default;
var plantPotImage = new Image(64, 96);
plantPotImage.src = plants_0_png_1.default;
var seedImage = new Image(64, 96);
seedImage.src = plants_1_png_1.default;
var seedlingImage = new Image(64, 96);
seedlingImage.src = plants_2_png_1.default;
var youngImage = new Image(64, 96);
youngImage.src = plants_3_png_1.default;
var grownImage = new Image(64, 96);
grownImage.src = plants_4_png_1.default;
var berriesImage = new Image(64, 96);
berriesImage.src = plants_5_png_1.default;
var wallLayer = new layer_1.Layer();
wallLayer.width = 10;
wallLayer.height = 3;
wallLayer.x = 0;
wallLayer.y = 0;
wallLayer.z = 0;
wallLayer.tileMap = new Array();
var backgroundMapString = "# { = = } { = } # #\n # [ W W ] [ W ] # #\n # # # # # # # # # #";
var rows = backgroundMapString.split('\n');
wallLayer.tileMap = rows.map(function (row) {
  return row.trim().split(' ');
});
var freeducks = new index_1.FreeDucks({
  count: 0,
  scene: blankScene,
  tileSet: {},
  tileSizeX: 64,
  tileSizeY: 96
});
var countReducer = {
  update: function update(action, state) {
    var newState = Object.assign({}, state);

    if (action.name === 'increment') {
      newState.count = state.count + 1;
    }

    return newState;
  }
};
var tileSetReducer = {
  update: function update(action, state) {
    var newState = Object.assign({}, state);

    if (action.name === 'setTile') {
      newState.tileSet[action.data.id] = action.data.tile;
    }

    return newState;
  }
};
var layerReducer = {
  update: function update(action, state) {
    var newState = Object.assign({}, state);

    if (action.name === 'addLayer') {
      newState.scene.layers = [].concat(_toConsumableArray(newState.scene.layers), [action.data]);
    }

    return newState;
  }
};
freeducks.registerReducer(countReducer);
freeducks.registerReducer(tileSetReducer);
freeducks.registerReducer(layerReducer);

var DefineWithState = function DefineWithState(ComponentClass) {
  var InjectedComponent =
  /*#__PURE__*/
  function (_ComponentClass) {
    _inherits(InjectedComponent, _ComponentClass);

    function InjectedComponent() {
      _classCallCheck(this, InjectedComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(InjectedComponent).call(this, freeducks));
    }

    return InjectedComponent;
  }(ComponentClass);

  window.customElements.define(ComponentClass.componentName, InjectedComponent);
};

DefineWithState(sample_button_1.SampleButton);
DefineWithState(state_dump_1.StateDump);
DefineWithState(potted_plant_1.PottedPlant);
DefineWithState(game_window_1.GameWindow);

wallImage.onload = function () {
  /*import leftWindow from './assets/building/wall_01.png';
  import rightWindow from './assets/building/wall_00.png';
  import topLeftWindow from './assets/building/wall_03.png';
  import topWindow from './assets/building/wall_05.png';
  import topRightWindow from './assets/building/wall_04.png';
  import windowPane from './assets/building/wall_06.png';
  */
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: '#',
      tile: wallImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: '[',
      tile: leftWindowImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: ']',
      tile: rightWindowImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: '{',
      tile: topLeftWindowImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: '}',
      tile: topRightWindowImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: '=',
      tile: topWindowImage
    }
  });
  freeducks.dispatch({
    name: 'setTile',
    data: {
      id: 'W',
      tile: windowPaneImage
    }
  }); //freeducks.dispatch({name: 'addLayer', data: backgroundLayer});

  freeducks.dispatch({
    name: 'addLayer',
    data: wallLayer
  });
}; // class InjectedSampleButton extends SampleButton{
//     constructor() {
//         super(freeducks);
//     }
// }
// class InjectedStateDump extends StateDump{
//     constructor() {
//         super(freeducks);
//     }
// }
// class InjectedPottedPlant extends PottedPlant {
//     constructor() {
//         super(freeducks);
//     }
// }
// window.customElements.define(SampleButton.componentName, InjectedSampleButton);
// window.customElements.define(StateDump.componentName, InjectedStateDump);
// window.customElements.define(PottedPlant.componentName, InjectedPottedPlant);
},{"./components/sample-button":"components/sample-button.ts","./freeducks/index":"freeducks/index.ts","./components/state-dump":"components/state-dump.ts","./components/potted-plant":"components/potted-plant.ts","./components/game-window":"components/game-window.ts","./state/layer":"state/layer.ts","./state/scene":"state/scene.ts","./assets/plants/plants_0.png":"assets/plants/plants_0.png","./assets/plants/plants_1.png":"assets/plants/plants_1.png","./assets/plants/plants_2.png":"assets/plants/plants_2.png","./assets/plants/plants_3.png":"assets/plants/plants_3.png","./assets/plants/plants_4.png":"assets/plants/plants_4.png","./assets/plants/plants_5.png":"assets/plants/plants_5.png","./assets/building/wall_02.png":"assets/building/wall_02.png","./assets/building/wall_01.png":"assets/building/wall_01.png","./assets/building/wall_00.png":"assets/building/wall_00.png","./assets/building/wall_03.png":"assets/building/wall_03.png","./assets/building/wall_05.png":"assets/building/wall_05.png","./assets/building/wall_04.png":"assets/building/wall_04.png","./assets/building/wall_06.png":"assets/building/wall_06.png"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55309" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/frontend.77de5100.js.map