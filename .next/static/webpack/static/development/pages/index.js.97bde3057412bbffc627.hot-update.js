webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./src/components/Menu.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_EmailInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EmailInput */ "./src/components/EmailInput.js");
var _jsxFileName = "/Users/reydon227/Mauna/landing-page/mauna-landing/src/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Home.js for the homepage of mauna landing website
// Dependencies: React, Styles placed under styles/main.css for this webpage

 // Menu Component

 // Main landing page css

 //Logo file

 //EmailInput Component for email capturing

class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this); //Binder for handleEmail input method

    this.submitEmail = this.submitEmail.bind(this); // Binder for submit email method
  } // Method to handle changing email event


  handleEmailChange(event) {
    this.setState({
      emailAddress: event.target.value
    });
  } // Method for handling click aftwer email input
  // ToDo : Integrate the email submission with a backend: Backend has to be decided (FireBase or Google Sheets or own custom end)


  submitEmail() {
    console.log("email in state: ", this.state.emailAddress);
  }

  render() {
    return __jsx("div", {
      className: "container-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "col homeImagePlaceholder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("img", {
      src: __webpack_require__(/*! ../assets/main.jpg */ "./src/assets/main.jpg"),
      className: "home-img img-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), __jsx("div", {
      className: "homeContentArea col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("img", {
      src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: "logo img-fluid",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("p", {
      className: "home-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Build State of the Art", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), "Conversational Interfaces", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), "with Voice or Text"), __jsx("p", {
      className: "info-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Notify me when Mauna launches"), __jsx(_components_EmailInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.submitEmail,
      onChange: this.handleEmailChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.97bde3057412bbffc627.hot-update.js.map