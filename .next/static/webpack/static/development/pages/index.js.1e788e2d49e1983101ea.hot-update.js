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
    className: "jsx-2974221378"
  }, "Next.js Home Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-2974221378"
  }, mapper), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-2974221378"
  }, props.joke), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2974221378"
  }, "ul.jsx-2974221378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;}h3.jsx-2974221378{text-align:right;position:relative;bottom:14vh;right:10vw;font-size:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcUHJha2Fyc2ggR3VwdGFcXERlc2t0b3BcXGRldm10blxcd2VlazlcXHBhaXItcHJvZ3JhbW1pbmctbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHdUIsQUFLSSxpQkFDQyxrQkFDTixZQUNELFdBQ0ksZUFDbEIsQ0FUa0IseURBQ0MsZ0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcUHJha2Fyc2ggR3VwdGFcXERlc2t0b3BcXGRldm10blxcd2VlazlcXHBhaXItcHJvZ3JhbW1pbmctbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBpbmRleCA9IHByb3BzID0+IHtcclxuICBjb25zdCBtYXBwZXIgPSBwcm9wcy5zaG93cy5tYXAoKHsgc2hvdyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxyXG4gICAgICAgIDxsaT48aW1nIHNyYz17YCR7c2hvdy5pbWFnZS5tZWRpdW19YH0vPjwvbGk+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDxoMT5OZXh0LmpzIEhvbWUgUGFnZTwvaDE+XHJcbiAgICAgIDx1bD57bWFwcGVyfTwvdWw+XHJcbiAgICAgIDxoMz57cHJvcHMuam9rZX08L2gzPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIHVse1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOm5vbmU7ICBcclxuICAgICAgfVxyXG4gICAgICBoM3tcclxuICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgIGJvdHRvbToxNHZoO1xyXG4gICAgICAgICAgcmlnaHQ6MTB2dztcclxuICAgICAgICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5pbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9nZWVrLWpva2VzLnNhbWVlcmt1bWFyLndlYnNpdGUvYXBpXCIpO1xyXG4gIGNvbnN0IGRhdGExID0gYXdhaXQgcmVzMS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuXCIpO1xyXG4gIGNvbnN0IGRhdGEyID0gYXdhaXQgcmVzMi5qc29uKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiZGF0YSBmZXRjaGVkOiBcIiwgZGF0YTEsIGRhdGEyLmxlbmd0aCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBqb2tlOiBkYXRhMSxcclxuICAgIHNob3dzOiBkYXRhMlxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Prakarsh Gupta\\Desktop\\devmtn\\week9\\pair-programming-next\\pages\\index.js */"));
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
//# sourceMappingURL=index.js.1e788e2d49e1983101ea.hot-update.js.map