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
})({"d6sW":[function(require,module,exports) {
var cvshow = document.querySelector('#cvShow');
var cv = document.querySelector('#cv');
var yinyang = document.querySelector('#yinyang');
var str = "\n\u9762\u8BD5\u5B98 \u60A8\u597D\uFF0C\u6211\u662F\u5F20\u946B\u8C6A\n\n\u6BD5\u4E1A\u4E8E\u5357\u5F00\u5927\u5B66\u73B0\u4EE3\u8FDC\u7A0B\u6559\u80B2\u5B66\u9662\uFF0C\u8BA1\u7B97\u673A\u5927\u4E13\u5B66\u5386\u3002\n\n\u4F1Acss3 html5 es6\n\n\u8E29\u5751\u8E29\u5F97\u591A \uFF0C \u7ECF\u9A8C\u8DB3\n\n\u63A5\u4E0B\u6765 \u5C55\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\u3002\n\n\u90A3\u5148\u6765\u4E2A div\n%\n\u753B\u4E00\u4E2A\u592A\u6781\u5427\nemmm...\n\u5148  \u4E00\u751F\u4E8C\n%\n\u7136\u540E\u8BE5\u8BA9\u9634\u9633\u9C7C\u51FA\u6765\u4E86\n%\n\u6700\u540E\u5462\n\n\n\u8F6C\u8D77\u6765  \u5C31\u6709\u610F\u5883\u4E86......\n%\n";
var yinyangCss = ["\n    #yinyang{\n        border-radius:50%;\n        width:400px;\n        height:400px;\n        position: fixed;\n        top: 50px;\n        left: 50%;\n        transform: translateX(-50%);\n        -moz-box-shadow:0 0 3px rgba(0,0,0,0.5); -webkit-box-shadow:0 0 3px rgba(0,0,0,0.5); box-shadow:0 0 3px rgba(0,0,0,0.5);\n    }\n    @media(max-width:450px){\n        #cvShow{\n            height: 50vh;\n            overflow: auto;\n            padding:10px\n        }\n        #yinyang{\n            top: 65vh;\n            bottom: 50px;\n            width: 200px;\n            height: 200px;\n        }\n    }\n", "\n    #yinyang{\n        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n    }\n\n", "\n    #yinyang:before {\n        position: absolute;\n        content: '';\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        display: block;\n        width: 200px;\n        height: 200px;\n        border-radius:50%;\n        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 50%);\n    }\n    #yinyang:after {\n        position: absolute;\n        content: '';\n        top: 0;\n        left: 50%;\n        transform: translateX(-50%);\n        display: block;\n        width: 200px;\n        height: 200px;\n        border-radius:50%;\n        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);    }\n    @media(max-width:450px){\n        #yinyang::before{\n            width: 100px;\n            height: 100px;\n        }\n        #yinyang::after{\n            width: 100px;\n            height: 100px;\n        }\n    }\n", "\n    #yinyang{\n        transform-origin: center;\n        animation: yinyang 2s infinite linear;\n    }\n"];
var i = 0;

function next() {
  var strCache = str.substring(0, i).replace(/\n/g, '<br>');
  var cssLengh = strCache.split("%").length - 1;
  cvshow.innerHTML = strCache.replace(/%/g, '');
  cv.innerHTML = yinyangCss.slice(0, cssLengh).join('');
  cvshow.scrollTo(0, 9999);

  if (i < str.length) {
    setTimeout(function () {
      next();
      i++;
    }, 150);
  } else {
    cvshow.innerHTML = str.replace(/%/g, '').replace(/\n/g, '<br>') + "<br><br><a href=\"mailto:2051525775@qq.com\">\u6211\u7684\u90AE\u7BB1\uFF1A2051525775@qq.com</a><br><a href=\"https://github.com/zhangdaochang\" target=\"_self\">\u6211\u7684github: github.com/zhangdaochang</a>";
    cvshow.scrollTo(0, 9999);
  }
}

next();
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.ade800fb.js.map