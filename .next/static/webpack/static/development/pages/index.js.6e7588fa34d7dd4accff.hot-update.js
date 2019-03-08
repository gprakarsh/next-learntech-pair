webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var index = function index(props) {
  var mapper = props.shows.map(function (_ref) {
    var show = _ref.show;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      as: "/p/".concat(show.id),
      href: "/post?id=".concat(show.id)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: "".concat(show.image.medium)
    })));
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1612931993"
  }, "Next.js Home Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-1612931993"
  }, mapper), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-1612931993"
  }, props.joke), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1612931993"
  }, "ul.jsx-1612931993{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;}h3.jsx-1612931993{text-align:right;position:relative;bottom:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJha2Fyc2ggR3VwdGFcXERlc2t0b3BcXGRldm10blxcd2VlazlcXHBhaXItcHJvZ3JhbW1pbmctbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHdUIsQUFLSSxpQkFDQyxrQkFDTixZQUNmLDJCQVBrQix5REFDQyxnQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxQcmFrYXJzaCBHdXB0YVxcRGVza3RvcFxcZGV2bXRuXFx3ZWVrOVxccGFpci1wcm9ncmFtbWluZy1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuLy4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IG1hcHBlciA9IHByb3BzLnNob3dzLm1hcCgoeyBzaG93IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XHJcbiAgICAgICAgPGxpPjxpbWcgc3JjPXtgJHtzaG93LmltYWdlLm1lZGl1bX1gfS8+PC9saT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPGgxPk5leHQuanMgSG9tZSBQYWdlPC9oMT5cclxuICAgICAgPHVsPnttYXBwZXJ9PC91bD5cclxuICAgICAgPGgzPntwcm9wcy5qb2tlfTwvaDM+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgdWx7XHJcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTsgIFxyXG4gICAgICB9XHJcbiAgICAgIGgze1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgYm90dG9tOjIwdmg7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dlZWstam9rZXMuc2FtZWVya3VtYXIud2Vic2l0ZS9hcGlcIik7XHJcbiAgY29uc3QgZGF0YTEgPSBhd2FpdCByZXMxLmpzb24oKTtcclxuXHJcbiAgY29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW5cIik7XHJcbiAgY29uc3QgZGF0YTIgPSBhd2FpdCByZXMyLmpzb24oKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJkYXRhIGZldGNoZWQ6IFwiLCBkYXRhMSwgZGF0YTIubGVuZ3RoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGpva2U6IGRhdGExLFxyXG4gICAgc2hvd3M6IGRhdGEyXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Prakarsh Gupta\\Desktop\\devmtn\\week9\\pair-programming-next\\pages\\index.js */"));
};

index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var res1, data1, res2, data2;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://geek-jokes.sameerkumar.website/api");

          case 2:
            res1 = _context.sent;
            _context.next = 5;
            return res1.json();

          case 5:
            data1 = _context.sent;
            _context.next = 8;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/search/shows?q=batman");

          case 8:
            res2 = _context.sent;
            _context.next = 11;
            return res2.json();

          case 11:
            data2 = _context.sent;
            console.log("data fetched: ", data1, data2.length);
            return _context.abrupt("return", {
              joke: data1,
              shows: data2
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.6e7588fa34d7dd4accff.hot-update.js.map