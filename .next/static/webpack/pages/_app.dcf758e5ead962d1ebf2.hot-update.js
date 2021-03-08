webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css":
/*!********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   grid-column-gap: .8rem;\\n   column-gap: .8rem;\\n   grid-row-gap: .5rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 8vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: -moz-fit-content;\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n .changeImage {\\n   margin-top: 3vh;\\n   display: flex;\\n   width: 100%;\\n   justify-content: space-between;\\n }\\n\\n .changeImage ul {\\n  color: var(--mainColor);\\n  font-family: 'Rubik';\\n  cursor: pointer;\\n  border-bottom: 1px solid rgb(61, 68, 74, .5);\\n  width: 20%;\\n  text-align: right;\\n}\\n\\n.changeImage ul:hover {\\n  width: 10%;\\n  margin-left: 10%;\\n}\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap');\\n\\n\\n* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   column-gap: .8rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 8vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n .changeImage {\\n   margin-top: 3vh;\\n   display: flex;\\n   width: 100%;\\n   justify-content: space-between;\\n }\\n\\n .changeImage ul {\\n  color: var(--mainColor);\\n  font-family: 'Rubik';\\n  cursor: pointer;\\n  border-bottom: 1px solid rgb(61, 68, 74, .5);\\n  width: 20%;\\n  text-align: right;\\n}\\n\\n.changeImage ul:hover {\\n  width: 10%;\\n  margin-left: 10%;\\n}\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzLmNzcz9mZmZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0ZBQXdGLE1BQU0sbUNBQW1DLG9CQUFvQjtBQUM1TDtBQUNBLDhCQUE4QixRQUFTLE1BQU0sWUFBWSxhQUFhLHVCQUF1QixFQUFFLFdBQVcseUJBQXlCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLHlCQUF5QixtQkFBbUIsd0JBQXdCLDhDQUE4QyxHQUFHLDhCQUE4QiwyQkFBMkIsMENBQTBDLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0QixHQUFHLGtCQUFrQiwrQkFBK0IscUJBQXFCLHdCQUF3QixzQkFBc0Isc0JBQXNCLHFCQUFxQixrQkFBa0IsZUFBZSxtQ0FBbUMsS0FBSyxhQUFhLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsSUFBSSxrQkFBa0IsMENBQTBDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixxQkFBcUIsbUJBQW1CLG9DQUFvQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLElBQUksY0FBYyxtQkFB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Qix5QkFBeUIsSUFBSSxnQkFBZ0Isa0JBQWtCLGlCQUFpQixvQkFBb0IsR0FBRyxZQUFZLDRCQUE0QiwyQkFBMkIscUJBQXFCLG1CQUFtQiw2QkFBNkIseUJBQXlCLHdCQUF3QiwyQ0FBMkMsSUFBSSxlQUFlLDRCQUE0Qix1QkFBdUIsSUFBSSxxQkFBcUIscUJBQXFCLG1CQUFtQixpQkFBaUIsb0NBQW9DLElBQUksc0JBQXNCLDRCQUE0Qix5QkFBeUIsb0JBQW9CLGlEQUFpRCxlQUFlLHNCQUFzQixHQUFHLDJCQUEyQixlQUFlLHFCQUFxQixHQUFHLHlCQUF5QjtBQUMzdFU7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T2xkK1N0YW5kYXJkK1RUOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UnViaWs6aXRhbCx3Z2h0QDAsMzAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiogeyBtYXJnaW46MCAwOyBwYWRkaW5nOjAgMDsgYm94LXNpemluZzpib3JkZXItYm94OyB9XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluQ29sb3I6ICMyQzM1M0M7XFxuICAtLW1haW5Db250cmFzdDogIzNENDQ0QTtcXG4gIC0tc2Vjb25kYXJ5Q29sb3I6ICM2QTdFODY7XFxuICAtLWJyb3duOiAjQTE3QjZDO1xcbiAgLS1saWdodEJsdWU6ICNCMUMyQ0M7XFxuICAtLXRhbjogI0VBRTVENTtcXG4gIC0tb2ZmV2hpdGU6ICNGREZCRjU7XFxuICAtLWxpbmU6IDFweCBzb2xpZCByZ2JhKDI1MywgMjUxLCAyNDUsIC4zKTtcXG59XFxuXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDUsXFxubGkge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnT2xkIFN0YW5kYXJkIFRUJywgc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG59XFxuXFxuXFxuXFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xcbiAgcGFkZGluZy10b3A6IDN2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzNXZoO1xcbiAgcGFkZGluZy10b3A6IDM0dmg7XFxufVxcblxcblxcblxcbi5tYWluVGV4dCBoMyB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbi5nZXRJblRvdWNoIHtcXG4gIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLyogLmlsbHVzdHJhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxufVxcblxcbi5pbGx1c3RyYXRpb24gaW1nIHtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4gKi9cXG5cXG5cXG4gLnNraWxscyB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgbWluLWhlaWdodDogODAwcHg7XFxuIH1cXG5cXG4gLnNraWxsc0xlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiB9XFxuXFxuXFxuIC5za2lsbEltYWdlcyB7XFxuXFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICB3aWR0aDogMzB2dztcXG4gICBoZWlnaHQ6IDMwdnc7XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICBncmlkLWNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGdyaWQtcm93LWdhcDogLjVyZW07XFxuICAgcm93LWdhcDogLjVyZW07XFxuIH1cXG5cXG4gLmdvb2RBdCB7XFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctdG9wOiAxMnZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5nb29kQXRIZWFkIHtcXG4gICBmb250LXNpemU6IDIuOXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gfVxcblxcbiAuYm94ZXMge1xcbiAgIHdpZHRoOiA3MCU7XFxuICAgaGVpZ2h0OiA1NHZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuIH1cXG5cXG4gLnNraWxsQm94IHtcXG4gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICAgd2lkdGg6IDg1JTtcXG4gICBoZWlnaHQ6IDIzJTtcXG4gICBib3JkZXI6IHZhcigtLWxpbmUpO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAucHJvamVjdHMge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuIH1cXG5cXG4gLnByb2plY3RzIGgxIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gfVxcblxcbiAucHJvamVjdCB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgcGFkZGluZy10b3A6IDEwdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHtcXG4gICB3aWR0aDogNzAlO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBoMyB7XFxuICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICBmb250LXNpemU6IDEuM3JlbTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gcCB7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcblxcblxcbi50eXBlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogOHZoO1xcbn1cXG5cXG4gLnR5cGUge1xcbiAgIC8qIGJvcmRlcjogdmFyKC0tbGluZSk7ICovXFxuICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgIG1pbi13aWR0aDogOXJlbTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjgsIDc0LCAuNSk7XFxuIH1cXG5cXG4gLnR5cGUgaDUge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG4gLmNoYW5nZUltYWdlIHtcXG4gICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuIH1cXG5cXG4gLmNoYW5nZUltYWdlIHVsIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDYxLCA2OCwgNzQsIC41KTtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNoYW5nZUltYWdlIHVsOmhvdmVyIHtcXG4gIHdpZHRoOiAxMCU7XFxuICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQSxJQUFJLFVBQVUsRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUU7O0FBRXBEO0VBQ0Usb0JBQW9C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bkI7OztDQUdBO0dBQ0UsZUFBZTtHQUNmLGFBQWE7R0FDYixXQUFXO0dBQ1gsOEJBQThCO0NBQ2hDOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNENBQTRDO0VBQzVDLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9sZCtTdGFuZGFyZCtUVDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PVJ1YmlrOml0YWwsd2dodEAwLDMwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHsgbWFyZ2luOjAgMDsgcGFkZGluZzowIDA7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxcblxcbjpyb290IHtcXG4gIC0tbWFpbkNvbG9yOiAjMkMzNTNDO1xcbiAgLS1tYWluQ29udHJhc3Q6ICMzRDQ0NEE7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjNkE3RTg2O1xcbiAgLS1icm93bjogI0ExN0I2QztcXG4gIC0tbGlnaHRCbHVlOiAjQjFDMkNDO1xcbiAgLS10YW46ICNFQUU1RDU7XFxuICAtLW9mZldoaXRlOiAjRkRGQkY1O1xcbiAgLS1saW5lOiAxcHggc29saWQgcmdiYSgyNTMsIDI1MSwgMjQ1LCAuMyk7XFxufVxcblxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg1LFxcbmxpIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICBmb250LWZhbWlseTogJ09sZCBTdGFuZGFyZCBUVCcsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxucCB7XFxuICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxufVxcblxcblxcblxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMuN3JlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG59XFxuXFxuXFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5uYXZiYXIgdWwge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tbGluZSk7XFxuICBwYWRkaW5nLXRvcDogM3ZoO1xcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbiAgcGFkZGluZy1yaWdodDogMyU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogODAwcHg7XFxufVxcblxcbi5tYWluUGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbn1cXG5cXG4ubWFpblRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM1dmg7XFxuICBwYWRkaW5nLXRvcDogMzR2aDtcXG59XFxuXFxuXFxuXFxuLm1haW5UZXh0IGgzIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIG1hcmdpbi1ib3R0b206IDR2aDtcXG59XFxuXFxuLmdldEluVG91Y2gge1xcbiAgYm9yZGVyOiB2YXIoLS1saW5lKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLyogLmlsbHVzdHJhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxufVxcblxcbi5pbGx1c3RyYXRpb24gaW1nIHtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4gKi9cXG5cXG5cXG4gLnNraWxscyB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgbWluLWhlaWdodDogODAwcHg7XFxuIH1cXG5cXG4gLnNraWxsc0xlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiB9XFxuXFxuXFxuIC5za2lsbEltYWdlcyB7XFxuXFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICB3aWR0aDogMzB2dztcXG4gICBoZWlnaHQ6IDMwdnc7XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICBjb2x1bW4tZ2FwOiAuOHJlbTtcXG4gICByb3ctZ2FwOiAuNXJlbTtcXG4gfVxcblxcbiAuZ29vZEF0IHtcXG4gICBoZWlnaHQ6IDEwMHZoO1xcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy10b3A6IDEydmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmdvb2RBdEhlYWQge1xcbiAgIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbiB9XFxuXFxuIC5ib3hlcyB7XFxuICAgd2lkdGg6IDcwJTtcXG4gICBoZWlnaHQ6IDU0dmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gfVxcblxcbiAuc2tpbGxCb3gge1xcbiAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcXG4gICB3aWR0aDogODUlO1xcbiAgIGhlaWdodDogMjMlO1xcbiAgIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5wcm9qZWN0cyB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgIHBhZGRpbmc6IDEwdmggMTB2dztcXG4gfVxcblxcbiAucHJvamVjdHMgaDEge1xcbiAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xcbiB9XFxuXFxuIC5wcm9qZWN0IHtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICBwYWRkaW5nLXRvcDogMTB2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24ge1xcbiAgIHdpZHRoOiA3MCU7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIGgzIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBwIHtcXG4gICBmb250LXNpemU6IDEuMnJlbTtcXG4gICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbiB9XFxuXFxuXFxuXFxuLnR5cGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tdG9wOiA4dmg7XFxufVxcblxcbiAudHlwZSB7XFxuICAgLyogYm9yZGVyOiB2YXIoLS1saW5lKTsgKi9cXG4gICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgbWluLXdpZHRoOiA5cmVtO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2OCwgNzQsIC41KTtcXG4gfVxcblxcbiAudHlwZSBoNSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gfVxcblxcblxcbiAuY2hhbmdlSW1hZ2Uge1xcbiAgIG1hcmdpbi10b3A6IDN2aDtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gfVxcblxcbiAuY2hhbmdlSW1hZ2UgdWwge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNjEsIDY4LCA3NCwgLjUpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY2hhbmdlSW1hZ2UgdWw6aG92ZXIge1xcbiAgd2lkdGg6IDEwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css\n");

/***/ })

})