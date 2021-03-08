webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css":
/*!********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   grid-column-gap: .8rem;\\n   column-gap: .8rem;\\n   grid-row-gap: .5rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 5vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: -moz-fit-content;\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.css\"],\"names\":[],\"mappings\":\"AAGA,IAAI,UAAU,EAAE,WAAW,EAAE,qBAAqB,EAAE;;AAEpD;EACE,oBAAoB;EACpB,uBAAuB;EACvB,yBAAyB;EACzB,gBAAgB;EAChB,oBAAoB;EACpB,cAAc;EACd,mBAAmB;EACnB,yCAAyC;AAC3C;;;AAGA;;;;;EAKE,sBAAsB;EACtB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;AACtB;;;;;AAKA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,uBAAkB;EAAlB,kBAAkB;EAClB,qBAAqB;AACvB;;;;AAIA;EACE,aAAa;EACb,uBAAuB;AACzB;;;AAGA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,UAAU;EACV,8BAA8B;;AAEhC;;;AAGA;EACE,kCAAkC;EAClC,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;AACnB;;;;AAIA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,uBAAkB;EAAlB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;;;;;;;;;EAUE;;;CAGD;GACE,aAAa;GACb,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;EACC,qCAAqC;EACrC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;CACjB;;;CAGA;;GAEE,aAAa;GACb,aAAa;GACb,8BAA8B;GAC9B,WAAW;GACX,YAAY;GACZ,iBAAiB;GACjB,gBAAgB;GAChB,sBAAiB;GAAjB,iBAAiB;GACjB,mBAAc;GAAd,cAAc;CAChB;;CAEA;GACE,aAAa;GACb,iBAAiB;GACjB,kCAAkC;GAClC,iBAAiB;GACjB,aAAa;GACb,sBAAsB;GACtB,mBAAmB;CACrB;;CAEA;GACE,iBAAiB;GACjB,kBAAkB;GAClB,mBAAmB;CACrB;;CAEA;GACE,UAAU;GACV,YAAY;GACZ,aAAa;GACb,sBAAsB;GACtB,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;GACE,kBAAkB;GAClB,UAAU;GACV,WAAW;GACX,mBAAmB;GACnB,aAAa;GACb,uBAAuB;GACvB,mBAAmB;CACrB;;CAEA;GACE,iCAAiC;GACjC,kBAAkB;CACpB;;CAEA;GACE,4BAA4B;GAC5B,iBAAiB;GACjB,WAAW;GACX,kBAAkB;GAClB,oBAAoB;CACtB;;CAEA;GACE,aAAa;GACb,8BAA8B;GAC9B,iBAAiB;CACnB;;CAEA;GACE,UAAU;CACZ;;CAEA;GACE,4BAA4B;GAC5B,iBAAiB;GACjB,kBAAkB;GAClB,mBAAmB;CACrB;;CAEA;GACE,iBAAiB;GACjB,uBAAuB;GACvB,mBAAmB;CACrB;;;;AAID;EACE,aAAa;EACb,YAAY;EACZ,eAAe;AACjB;;CAEC;GACE,yBAAyB;GACzB,uBAAkB;GAAlB,kBAAkB;GAClB,eAAe;GACf,aAAa;GACb,uBAAuB;GACvB,mBAAmB;GACnB,kBAAkB;GAClB,qCAAqC;CACvC;;CAEA;EACC,uBAAuB;EACvB,kBAAkB;CACnB\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap');\\n\\n\\n* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   column-gap: .8rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 5vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzLmNzcz9mZmZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0ZBQXdGLE1BQU0sbUNBQW1DLG9CQUFvQjtBQUM1TDtBQUNBLDhCQUE4QixRQUFTLE1BQU0sWUFBWSxhQUFhLHVCQUF1QixFQUFFLFdBQVcseUJBQXlCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLHlCQUF5QixtQkFBbUIsd0JBQXdCLDhDQUE4QyxHQUFHLDhCQUE4QiwyQkFBMkIsMENBQTBDLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0QixHQUFHLGtCQUFrQiwrQkFBK0IscUJBQXFCLHdCQUF3QixzQkFBc0Isc0JBQXNCLHFCQUFxQixrQkFBa0IsZUFBZSxtQ0FBbUMsS0FBSyxhQUFhLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsSUFBSSxrQkFBa0IsMENBQTBDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixxQkFBcUIsbUJBQW1CLG9DQUFvQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLElBQUksY0FBYyxtQkFB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aWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbGQrU3RhbmRhcmQrVFQ6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1SdWJpazppdGFsLHdnaHRAMCwzMDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7IG1hcmdpbjowIDA7IHBhZGRpbmc6MCAwOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cXG5cXG46cm9vdCB7XFxuICAtLW1haW5Db2xvcjogIzJDMzUzQztcXG4gIC0tbWFpbkNvbnRyYXN0OiAjM0Q0NDRBO1xcbiAgLS1zZWNvbmRhcnlDb2xvcjogIzZBN0U4NjtcXG4gIC0tYnJvd246ICNBMTdCNkM7XFxuICAtLWxpZ2h0Qmx1ZTogI0IxQzJDQztcXG4gIC0tdGFuOiAjRUFFNUQ1O1xcbiAgLS1vZmZXaGl0ZTogI0ZERkJGNTtcXG4gIC0tbGluZTogMXB4IHNvbGlkIHJnYmEoMjUzLCAyNTEsIDI0NSwgLjMpO1xcbn1cXG5cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNSxcXG5saSB7XFxuICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdPbGQgU3RhbmRhcmQgVFQnLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbn1cXG5cXG5cXG5cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzLjdyZW07XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcXG59XFxuXFxuXFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbi5uYXZiYXIgdWwge1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tbGluZSk7XFxuICBwYWRkaW5nLXRvcDogM3ZoO1xcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gIHBhZGRpbmctbGVmdDogNDAlO1xcbiAgcGFkZGluZy1yaWdodDogMyU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxufVxcblxcblxcbi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogODAwcHg7XFxufVxcblxcbi5tYWluUGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbn1cXG5cXG4ubWFpblRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDM1dmg7XFxuICBwYWRkaW5nLXRvcDogMzR2aDtcXG59XFxuXFxuXFxuXFxuLm1haW5UZXh0IGgzIHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIG1hcmdpbi1ib3R0b206IDR2aDtcXG59XFxuXFxuLmdldEluVG91Y2gge1xcbiAgYm9yZGVyOiB2YXIoLS1saW5lKTtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4vKiAuaWxsdXN0cmF0aW9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXRvcDogMzB2aDtcXG59XFxuXFxuLmlsbHVzdHJhdGlvbiBpbWcge1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxufVxcblxcbiAqL1xcblxcblxcbiAuc2tpbGxzIHtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gfVxcblxcbiAuc2tpbGxzTGVmdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29udHJhc3QpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDV2aCA1dnc7XFxuIH1cXG5cXG5cXG4gLnNraWxsSW1hZ2VzIHtcXG5cXG4gICBoZWlnaHQ6IDEwMHZoO1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgIHdpZHRoOiAzMHZ3O1xcbiAgIGhlaWdodDogMzB2dztcXG4gICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgIGdyaWQtY29sdW1uLWdhcDogLjhyZW07XFxuICAgY29sdW1uLWdhcDogLjhyZW07XFxuICAgZ3JpZC1yb3ctZ2FwOiAuNXJlbTtcXG4gICByb3ctZ2FwOiAuNXJlbTtcXG4gfVxcblxcbiAuZ29vZEF0IHtcXG4gICBoZWlnaHQ6IDEwMHZoO1xcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy10b3A6IDEydmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIH1cXG5cXG4gLmdvb2RBdEhlYWQge1xcbiAgIGZvbnQtc2l6ZTogMi45cmVtO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogNXZoO1xcbiB9XFxuXFxuIC5ib3hlcyB7XFxuICAgd2lkdGg6IDcwJTtcXG4gICBoZWlnaHQ6IDU0dmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBtaW4taGVpZ2h0OiA0MDBweDtcXG4gfVxcblxcbiAuc2tpbGxCb3gge1xcbiAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcXG4gICB3aWR0aDogODUlO1xcbiAgIGhlaWdodDogMjMlO1xcbiAgIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5wcm9qZWN0cyB7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgIHBhZGRpbmc6IDEwdmggMTB2dztcXG4gfVxcblxcbiAucHJvamVjdHMgaDEge1xcbiAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICAgZm9udC1zaXplOiAyLjhyZW07XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIHBhZGRpbmctYm90dG9tOiAxMHZoO1xcbiB9XFxuXFxuIC5wcm9qZWN0IHtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICBwYWRkaW5nLXRvcDogMTB2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24ge1xcbiAgIHdpZHRoOiA3MCU7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIGgzIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBwIHtcXG4gICBmb250LXNpemU6IDEuMnJlbTtcXG4gICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbiB9XFxuXFxuXFxuXFxuLnR5cGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxufVxcblxcbiAudHlwZSB7XFxuICAgLyogYm9yZGVyOiB2YXIoLS1saW5lKTsgKi9cXG4gICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgbWluLXdpZHRoOiA5cmVtO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2OCwgNzQsIC41KTtcXG4gfVxcblxcbiAudHlwZSBoNSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gfVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBLElBQUksVUFBVSxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTs7QUFFcEQ7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOzs7QUFHQTs7Ozs7RUFLRSxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7Ozs7O0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7OztBQUlBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7O0FBR0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDhCQUE4Qjs7QUFFaEM7OztBQUdBO0VBQ0Usa0NBQWtDO0VBQ2xDLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COzs7O0FBSUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7Ozs7RUFVRTs7O0NBR0Q7R0FDRSxhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLGlCQUFpQjtDQUNuQjs7Q0FFQTtFQUNDLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7OztDQUdBOztHQUVFLGFBQWE7R0FDYixhQUFhO0dBQ2IsOEJBQThCO0dBQzlCLFdBQVc7R0FDWCxZQUFZO0dBQ1osaUJBQWlCO0dBQ2pCLGdCQUFnQjtHQUNoQixzQkFBaUI7R0FBakIsaUJBQWlCO0dBQ2pCLG1CQUFjO0dBQWQsY0FBYztDQUNoQjs7Q0FFQTtHQUNFLGFBQWE7R0FDYixpQkFBaUI7R0FDakIsa0NBQWtDO0dBQ2xDLGlCQUFpQjtHQUNqQixhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsVUFBVTtHQUNWLFlBQVk7R0FDWixhQUFhO0dBQ2Isc0JBQXNCO0dBQ3RCLDhCQUE4QjtHQUM5QixpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsVUFBVTtHQUNWLFdBQVc7R0FDWCxtQkFBbUI7R0FDbkIsYUFBYTtHQUNiLHVCQUF1QjtHQUN2QixtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSxpQ0FBaUM7R0FDakMsa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsNEJBQTRCO0dBQzVCLGlCQUFpQjtHQUNqQixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLG9CQUFvQjtDQUN0Qjs7Q0FFQTtHQUNFLGFBQWE7R0FDYiw4QkFBOEI7R0FDOUIsaUJBQWlCO0NBQ25COztDQUVBO0dBQ0UsVUFBVTtDQUNaOztDQUVBO0dBQ0UsNEJBQTRCO0dBQzVCLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsaUJBQWlCO0dBQ2pCLHVCQUF1QjtHQUN2QixtQkFBbUI7Q0FDckI7Ozs7QUFJRDtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7Q0FFQztHQUNFLHlCQUF5QjtHQUN6Qix1QkFBa0I7R0FBbEIsa0JBQWtCO0dBQ2xCLGVBQWU7R0FDZixhQUFhO0dBQ2IsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQixrQkFBa0I7R0FDbEIscUNBQXFDO0NBQ3ZDOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbGQrU3RhbmRhcmQrVFQ6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1SdWJpazppdGFsLHdnaHRAMCwzMDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKiB7IG1hcmdpbjowIDA7IHBhZGRpbmc6MCAwOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cXG5cXG46cm9vdCB7XFxuICAtLW1haW5Db2xvcjogIzJDMzUzQztcXG4gIC0tbWFpbkNvbnRyYXN0OiAjM0Q0NDRBO1xcbiAgLS1zZWNvbmRhcnlDb2xvcjogIzZBN0U4NjtcXG4gIC0tYnJvd246ICNBMTdCNkM7XFxuICAtLWxpZ2h0Qmx1ZTogI0IxQzJDQztcXG4gIC0tdGFuOiAjRUFFNUQ1O1xcbiAgLS1vZmZXaGl0ZTogI0ZERkJGNTtcXG4gIC0tbGluZTogMXB4IHNvbGlkIHJnYmEoMjUzLCAyNTEsIDI0NSwgLjMpO1xcbn1cXG5cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNSxcXG5saSB7XFxuICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdPbGQgU3RhbmRhcmQgVFQnLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbn1cXG5cXG5cXG5cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzLjdyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xcbiAgcGFkZGluZy10b3A6IDN2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzNXZoO1xcbiAgcGFkZGluZy10b3A6IDM0dmg7XFxufVxcblxcblxcblxcbi5tYWluVGV4dCBoMyB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbi5nZXRJblRvdWNoIHtcXG4gIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi8qIC5pbGx1c3RyYXRpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctdG9wOiAzMHZoO1xcbn1cXG5cXG4uaWxsdXN0cmF0aW9uIGltZyB7XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuICovXFxuXFxuXFxuIC5za2lsbHMge1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiB9XFxuXFxuIC5za2lsbHNMZWZ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db250cmFzdCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gfVxcblxcblxcbiAuc2tpbGxJbWFnZXMge1xcblxcbiAgIGhlaWdodDogMTAwdmg7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgd2lkdGg6IDMwdnc7XFxuICAgaGVpZ2h0OiAzMHZ3O1xcbiAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgY29sdW1uLWdhcDogLjhyZW07XFxuICAgcm93LWdhcDogLjVyZW07XFxuIH1cXG5cXG4gLmdvb2RBdCB7XFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctdG9wOiAxMnZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5nb29kQXRIZWFkIHtcXG4gICBmb250LXNpemU6IDIuOXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gfVxcblxcbiAuYm94ZXMge1xcbiAgIHdpZHRoOiA3MCU7XFxuICAgaGVpZ2h0OiA1NHZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuIH1cXG5cXG4gLnNraWxsQm94IHtcXG4gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICAgd2lkdGg6IDg1JTtcXG4gICBoZWlnaHQ6IDIzJTtcXG4gICBib3JkZXI6IHZhcigtLWxpbmUpO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAucHJvamVjdHMge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuIH1cXG5cXG4gLnByb2plY3RzIGgxIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gfVxcblxcbiAucHJvamVjdCB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgcGFkZGluZy10b3A6IDEwdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHtcXG4gICB3aWR0aDogNzAlO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBoMyB7XFxuICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICBmb250LXNpemU6IDEuM3JlbTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gcCB7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcblxcblxcbi50eXBlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4gLnR5cGUge1xcbiAgIC8qIGJvcmRlcjogdmFyKC0tbGluZSk7ICovXFxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgIG1pbi13aWR0aDogOXJlbTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjgsIDc0LCAuNSk7XFxuIH1cXG5cXG4gLnR5cGUgaDUge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css\n");

/***/ })

})