webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css":
/*!********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253,251,245,.3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   grid-column-gap: .8rem;\\n   column-gap: .8rem;\\n   grid-row-gap: .5rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   border: 2px solid red;\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n\\n\\n .type {\\n   color: var(--mainColor);\\n }\\n\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.css\"],\"names\":[],\"mappings\":\"AAGA,IAAI,UAAU,EAAE,WAAW,EAAE,qBAAqB,EAAE;;AAEpD;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;EAChB,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,sCAAsC;AACxC;;;AAGA;;;;;EAKE,sBAAsB;EACtB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;;;;AAKA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAkB;EAAlB,kBAAkB;EAClB,qBAAqB;AACvB;;;;AAIA;EACE,aAAa;EACb,uBAAuB;AACzB;;;AAGA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,8BAA8B;;AAEhC;;;AAGA;EACE,kCAAkC;EAClC,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;AACnB;;;;AAIA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,uBAAkB;EAAlB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;;;;;;;;;EAUE;;;CAGD;GACE,aAAa;GACb,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;EACC,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;;;CAGA;;GAEE,aAAa;GACb,aAAa;GACb,8BAA8B;GAC9B,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,gBAAgB;GAChB,sBAAiB;GAAjB,iBAAiB;GACjB,mBAAc;GAAd,cAAc;CAChB;;CAEA;GACE,aAAa;GACb,iBAAiB;GACjB,kCAAkC;GAClC,iBAAiB;GACjB,aAAa;GACb,sBAAsB;GACtB,mBAAmB;CACrB;;CAEA;GACE,iBAAiB;GACjB,kBAAkB;GAClB,mBAAmB;CACrB;;CAEA;GACE,UAAU;GACV,YAAY;GACZ,aAAa;GACb,sBAAsB;GACtB,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;GACE,kBAAkB;GAClB,UAAU;GACV,WAAW;GACX,mBAAmB;GACnB,aAAa;GACb,uBAAuB;GACvB,mBAAmB;CACrB;;CAEA;GACE,iCAAiC;GACjC,kBAAkB;CACpB;;CAEA;GACE,4BAA4B;GAC5B,iBAAiB;GACjB,WAAW;GACX,kBAAkB;GAClB,oBAAoB;CACtB;;CAEA;GACE,aAAa;GACb,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;GACE,qBAAqB;GACrB,UAAU;CACZ;;CAEA;GACE,4BAA4B;GAC5B,iBAAiB;GACjB,kBAAkB;GAClB,mBAAmB;CACrB;;CAEA;GACE,iBAAiB;GACjB,uBAAuB;GACvB,mBAAmB;CACrB;;;;;;CAMA;GACE,uBAAuB;CACzB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap');\\n\\n\\n* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253,251,245,.3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   column-gap: .8rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   border: 2px solid red;\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n\\n\\n .type {\\n   color: var(--mainColor);\\n }\\n\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzLmNzcz9mZmZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0ZBQXdGLE1BQU0sbUNBQW1DLG9CQUFvQjtBQUM1TDtBQUNBLDhCQUE4QixRQUFTLE1BQU0sWUFBWSxhQUFhLHVCQUF1QixFQUFFLFdBQVcseUJBQXlCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLHlCQUF5QixtQkFBbUIsd0JBQXdCLDJDQUEyQyxHQUFHLDhCQUE4QiwyQkFBMkIsMENBQTBDLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0QixHQUFHLGtCQUFrQiwrQkFBK0IscUJBQXFCLHdCQUF3QixzQkFBc0Isc0JBQXNCLHFCQUFxQixrQkFBa0IsZUFBZSxtQ0FBbUMsS0FBSyxhQUFhLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsSUFBSSxrQkFBa0IsMENBQTBDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixxQkFBcUIsbUJBQW1CLG9DQUFvQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLElBQUksY0FBYyxtQkFB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LGtCQUFrQiwwQ0FBMEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IscUJBQXFCLElBQUkscUJBQXFCLHFCQUFxQixtQkFBbUIsb0NBQW9DLGlCQUFpQixrQkFBa0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsb0JBQW9CLElBQUksY0FBYyxtQkFBbUIsdUJBQXVCLHdDQUF3Qyx1QkFBdUIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsSUFBSSxrQkFBa0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsSUFBSSxhQUFhLGdCQUFnQixrQkFBa0IsbUJBQW1CLDRCQUE0QixvQ0FBb0MsdUJBQXVCLElBQUksZ0JBQWdCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsNkJBQTZCLHlCQUF5QixJQUFJLGdCQUFnQix1Q0FBdUMsd0JBQXdCLElBQUksbUJBQW1CLGtDQUFrQyx1QkFBdUIsaUJBQWlCLHdCQUF3QiwwQkFBMEIsSUFBSSxlQUFlLG1CQUFtQixvQ0FBb0MsdUJBQXVCLElBQUksbUJBQW1CLDJCQUEyQixnQkFBZ0IsSUFBSSxzQkFBc0Isa0NBQWtDLHVCQUF1Qix3QkFBd0IseUJBQXlCLElBQUkscUJBQXFCLHVCQUF1Qiw2QkFBNkIseUJBQXlCLElBQUksb0JBQW9CLDZCQUE2QixJQUFJLDJCQUEyQjtBQUM5alI7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T2xkK1N0YW5kYXJkK1RUOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UnViaWs6aXRhbCx3Z2h0QDAsMzAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiogeyBtYXJnaW46MCAwOyBwYWRkaW5nOjAgMDsgYm94LXNpemluZzpib3JkZXItYm94OyB9XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluQ29sb3I6ICMyQzM1M0M7XFxuICAtLW1haW5Db250cmFzdDogIzNENDQ0QTtcXG4gIC0tc2Vjb25kYXJ5Q29sb3I6ICM2QTdFODY7XFxuICAtLWJyb3duOiAjQTE3QjZDO1xcbiAgLS1saWdodEJsdWU6ICNCMUMyQ0M7XFxuICAtLXRhbjogI0VBRTVENTtcXG4gIC0tb2ZmV2hpdGU6ICNGREZCRjU7XFxuICAtLWxpbmU6IDFweCBzb2xpZCByZ2JhKDI1MywyNTEsMjQ1LC4zKTtcXG59XFxuXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDUsXFxubGkge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnT2xkIFN0YW5kYXJkIFRUJywgc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG59XFxuXFxuXFxuXFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xcbiAgcGFkZGluZy10b3A6IDN2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzNXZoO1xcbiAgcGFkZGluZy10b3A6IDM0dmg7XFxufVxcblxcblxcblxcbi5tYWluVGV4dCBoMyB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbi5nZXRJblRvdWNoIHtcXG4gIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLyogLmlsbHVzdHJhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxufVxcblxcbi5pbGx1c3RyYXRpb24gaW1nIHtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4gKi9cXG5cXG5cXG4gLnNraWxscyB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgbWluLWhlaWdodDogODAwcHg7XFxuIH1cXG5cXG4gLnNraWxsc0xlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiB9XFxuXFxuXFxuIC5za2lsbEltYWdlcyB7XFxuXFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICB3aWR0aDogMzB2dztcXG4gICBoZWlnaHQ6IDMwdnc7XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICBncmlkLWNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGdyaWQtcm93LWdhcDogLjVyZW07XFxuICAgcm93LWdhcDogLjVyZW07XFxuIH1cXG5cXG4gLmdvb2RBdCB7XFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctdG9wOiAxMnZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5nb29kQXRIZWFkIHtcXG4gICBmb250LXNpemU6IDIuOXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gfVxcblxcbiAuYm94ZXMge1xcbiAgIHdpZHRoOiA3MCU7XFxuICAgaGVpZ2h0OiA1NHZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuIH1cXG5cXG4gLnNraWxsQm94IHtcXG4gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICAgd2lkdGg6IDg1JTtcXG4gICBoZWlnaHQ6IDIzJTtcXG4gICBib3JkZXI6IHZhcigtLWxpbmUpO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAucHJvamVjdHMge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuIH1cXG5cXG4gLnByb2plY3RzIGgxIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gfVxcblxcbiAucHJvamVjdCB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgcGFkZGluZy10b3A6IDEwdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHtcXG4gICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgd2lkdGg6IDcwJTtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gaDMge1xcbiAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHAge1xcbiAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuIH1cXG5cXG5cXG5cXG5cXG5cXG4gLnR5cGUge1xcbiAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiB9XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsSUFBSSxVQUFVLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFOztBQUVwRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7OztBQUdBOzs7OztFQUtFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7Ozs7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCOztBQUVoQzs7O0FBR0E7RUFDRSxrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7Ozs7QUFJQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7OztFQVVFOzs7Q0FHRDtHQUNFLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsaUJBQWlCO0NBQ25COztDQUVBO0VBQ0MscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjs7O0NBR0E7O0dBRUUsYUFBYTtHQUNiLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsV0FBVztHQUNYLFlBQVk7R0FDWixpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLHNCQUFpQjtHQUFqQixpQkFBaUI7R0FDakIsbUJBQWM7R0FBZCxjQUFjO0NBQ2hCOztDQUVBO0dBQ0UsYUFBYTtHQUNiLGlCQUFpQjtHQUNqQixrQ0FBa0M7R0FDbEMsaUJBQWlCO0dBQ2pCLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsaUJBQWlCO0dBQ2pCLGtCQUFrQjtHQUNsQixtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSxVQUFVO0dBQ1YsWUFBWTtHQUNaLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsOEJBQThCO0dBQzlCLGlCQUFpQjtDQUNuQjs7Q0FFQTtHQUNFLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsV0FBVztHQUNYLG1CQUFtQjtHQUNuQixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLGlDQUFpQztHQUNqQyxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSw0QkFBNEI7R0FDNUIsaUJBQWlCO0dBQ2pCLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsb0JBQW9CO0NBQ3RCOztDQUVBO0dBQ0UsYUFBYTtHQUNiLDhCQUE4QjtHQUM5QixpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxxQkFBcUI7R0FDckIsVUFBVTtDQUNaOztDQUVBO0dBQ0UsNEJBQTRCO0dBQzVCLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsaUJBQWlCO0dBQ2pCLHVCQUF1QjtHQUN2QixtQkFBbUI7Q0FDckI7Ozs7OztDQU1BO0dBQ0UsdUJBQXVCO0NBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9sZCtTdGFuZGFyZCtUVDppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDAmZmFtaWx5PVJ1YmlrOml0YWwsd2dodEAwLDMwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG4qIHsgbWFyZ2luOjAgMDsgcGFkZGluZzowIDA7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxcblxcbjpyb290IHtcXG4gIC0tbWFpbkNvbG9yOiAjMkMzNTNDO1xcbiAgLS1tYWluQ29udHJhc3Q6ICMzRDQ0NEE7XFxuICAtLXNlY29uZGFyeUNvbG9yOiAjNkE3RTg2O1xcbiAgLS1icm93bjogI0ExN0I2QztcXG4gIC0tbGlnaHRCbHVlOiAjQjFDMkNDO1xcbiAgLS10YW46ICNFQUU1RDU7XFxuICAtLW9mZldoaXRlOiAjRkRGQkY1O1xcbiAgLS1saW5lOiAxcHggc29saWQgcmdiYSgyNTMsMjUxLDI0NSwuMyk7XFxufVxcblxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg1LFxcbmxpIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICBmb250LWZhbWlseTogJ09sZCBTdGFuZGFyZCBUVCcsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxucCB7XFxuICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxufVxcblxcblxcblxcblxcbmgxIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDMuN3JlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG59XFxuXFxuXFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5uYXZiYXIgdWwge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tbGluZSk7XFxuICBwYWRkaW5nLXRvcDogM3ZoO1xcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbiAgcGFkZGluZy1yaWdodDogMyU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogODAwcHg7XFxufVxcblxcbi5tYWluUGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbn1cXG5cXG4ubWFpblRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM1dmg7XFxuICBwYWRkaW5nLXRvcDogMzR2aDtcXG59XFxuXFxuXFxuXFxuLm1haW5UZXh0IGgzIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIG1hcmdpbi1ib3R0b206IDR2aDtcXG59XFxuXFxuLmdldEluVG91Y2gge1xcbiAgYm9yZGVyOiB2YXIoLS1saW5lKTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLyogLmlsbHVzdHJhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxufVxcblxcbi5pbGx1c3RyYXRpb24gaW1nIHtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4gKi9cXG5cXG5cXG4gLnNraWxscyB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgbWluLWhlaWdodDogODAwcHg7XFxuIH1cXG5cXG4gLnNraWxsc0xlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiB9XFxuXFxuXFxuIC5za2lsbEltYWdlcyB7XFxuXFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICB3aWR0aDogMzB2dztcXG4gICBoZWlnaHQ6IDMwdnc7XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICBjb2x1bW4tZ2FwOiAuOHJlbTtcXG4gICByb3ctZ2FwOiAuNXJlbTtcXG4gfVxcblxcbiAuZ29vZEF0IHtcXG4gICBoZWlnaHQ6IDEwMHZoO1xcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy10b3A6IDEydmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmdvb2RBdEhlYWQge1xcbiAgIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbiB9XFxuXFxuIC5ib3hlcyB7XFxuICAgd2lkdGg6IDcwJTtcXG4gICBoZWlnaHQ6IDU0dmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gfVxcblxcbiAuc2tpbGxCb3gge1xcbiAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcXG4gICB3aWR0aDogODUlO1xcbiAgIGhlaWdodDogMjMlO1xcbiAgIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5wcm9qZWN0cyB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgIHBhZGRpbmc6IDEwdmggMTB2dztcXG4gfVxcblxcbiAucHJvamVjdHMgaDEge1xcbiAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xcbiB9XFxuXFxuIC5wcm9qZWN0IHtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICBwYWRkaW5nLXRvcDogMTB2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24ge1xcbiAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICB3aWR0aDogNzAlO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBoMyB7XFxuICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICBmb250LXNpemU6IDEuM3JlbTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gcCB7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcblxcblxcblxcblxcbiAudHlwZSB7XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuIH1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css\n");

/***/ })

})