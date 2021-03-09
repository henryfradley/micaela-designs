webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css":
/*!********************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles.css ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   grid-column-gap: .8rem;\\n   column-gap: .8rem;\\n   grid-row-gap: .5rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 8vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: -moz-fit-content;\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n .changeImage {\\n   margin-top: 3vh;\\n   display: flex;\\n   width: 100%;\\n   justify-content: space-between;\\n }\\n\\n @keyframes fadeIn {\\n   0% {opacity: 0}\\n   100% {opacity: 1}\\n }\\n\\n\\n\\n .projectImage img {\\n   animation-name: fadeIn;\\n   animation-duration: .5s;\\n   animation-fill-mode: forwards;\\n   opacity: 0;\\n }\\n\\n .changeImage ul {\\n  color: var(--mainColor);\\n  font-family: 'Rubik';\\n  cursor: pointer;\\n  border-bottom: 1px solid rgb(61, 68, 74, .5);\\n  width: 20%;\\n  text-align: right;\\n  transition: .3s ease-in-out;\\n}\\n\\n.changeImage ul:hover {\\n  width: 10%;\\n  margin-left: 10%;\\n  transition: .3s ease-in-out;\\n}\\n\\n.about {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n  background-color: var(--mainColor);\\n}\\n\\n.favorites {\\n  border: 1px solid var(--secondaryColor);\\n  padding: 5% 10%;\\n}\\n\\n.favorites p {\\n  width: 80%;\\n}\\n\\n.aboutText {\\n  padding: 15vh 5vw;\\n}\\n\\n.aboutText h1 {\\n  font-size: 3.2rem;\\n  padding-bottom: 3vh;\\n}\\n\\n.aboutText p {\\n  width: 75%;\\n  padding-bottom: 3vh;\\n}\\n\\n.favorites {\\n  min-width: 400px;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Rubik:ital,wght@0,300;1,300&display=swap');\\n\\n\\n* { margin:0 0; padding:0 0; box-sizing:border-box; }\\n\\n:root {\\n  --mainColor: #2C353C;\\n  --mainContrast: #3D444A;\\n  --secondaryColor: #6A7E86;\\n  --brown: #A17B6C;\\n  --lightBlue: #B1C2CC;\\n  --tan: #EAE5D5;\\n  --offWhite: #FDFBF5;\\n  --line: 1px solid rgba(253, 251, 245, .3);\\n}\\n\\n\\nh1,\\nh2,\\nh3,\\nh5,\\nli {\\n  color: var(--offWhite);\\n  font-family: 'Old Standard TT', serif;\\n  font-weight: 300;\\n}\\n\\np {\\n  color: var(--offWhite);\\n  font-family: 'Rubik';\\n}\\n\\n\\n\\n\\nh1 {\\n  font-weight: 400;\\n  font-style: italic;\\n  font-size: 3.7rem;\\n  width: fit-content;\\n  letter-spacing: .1rem;\\n}\\n\\n\\n\\n.navbar {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n\\n.navbar ul {\\n  border-bottom: var(--line);\\n  padding-top: 3vh;\\n  padding-bottom: 3vh;\\n  padding-left: 40%;\\n  padding-right: 3%;\\n  list-style: none;\\n  display: flex;\\n  width: 90%;\\n  justify-content: space-between;\\n\\n}\\n\\n\\n.main {\\n  background-color: var(--mainColor);\\n  /* overflow: hidden; */\\n  position: relative;\\n  min-height: 800px;\\n}\\n\\n.mainPage {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n}\\n\\n.mainText {\\n  padding-left: 10vw;\\n  padding-bottom: 35vh;\\n  padding-top: 34vh;\\n}\\n\\n\\n\\n.mainText h3 {\\n  margin-top: 2vh;\\n  margin-bottom: 4vh;\\n}\\n\\n.getInTouch {\\n  border: var(--line);\\n  width: fit-content;\\n  display: flex;\\n  justify-content: center;\\n  padding: 10px 20px;\\n}\\n\\n/* .illustration {\\n  border: 2px solid blue;\\n  position: relative;\\n  padding-top: 30vh;\\n}\\n\\n.illustration img {\\n  line-height: 0;\\n}\\n\\n */\\n\\n\\n .skills {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   min-height: 800px;\\n }\\n\\n .skillsLeft {\\n  background-color: var(--mainContrast);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5vh 5vw;\\n }\\n\\n\\n .skillImages {\\n\\n   height: 100vh;\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   width: 30vw;\\n   height: 30vw;\\n   min-height: 400px;\\n   min-width: 400px;\\n   column-gap: .8rem;\\n   row-gap: .5rem;\\n }\\n\\n .goodAt {\\n   height: 100vh;\\n   min-height: 800px;\\n   background-color: var(--mainColor);\\n   padding-top: 12vh;\\n   display: flex;\\n   flex-direction: column;\\n   align-items: center;\\n }\\n\\n .goodAtHead {\\n   font-size: 2.9rem;\\n   text-align: center;\\n   padding-bottom: 5vh;\\n }\\n\\n .boxes {\\n   width: 70%;\\n   height: 54vh;\\n   display: flex;\\n   flex-direction: column;\\n   justify-content: space-between;\\n   min-height: 400px;\\n }\\n\\n .skillBox {\\n   padding-right: 20%;\\n   width: 85%;\\n   height: 23%;\\n   border: var(--line);\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n }\\n\\n .projects {\\n   background-color: var(--offWhite);\\n   padding: 10vh 10vw;\\n }\\n\\n .projects h1 {\\n   color: var(--secondaryColor);\\n   font-size: 2.8rem;\\n   width: 100%;\\n   text-align: center;\\n   padding-bottom: 10vh;\\n }\\n\\n .project {\\n   display: grid;\\n   grid-template-columns: 50% 50%;\\n   padding-top: 10vh;\\n }\\n\\n .description {\\n   width: 70%;\\n }\\n\\n .description h3 {\\n   color: var(--secondaryColor);\\n   font-size: 1.3rem;\\n   font-style: italic;\\n   padding-bottom: 3vh;\\n }\\n\\n .description p {\\n   font-size: 1.2rem;\\n   color: var(--mainColor);\\n   padding-bottom: 3vh;\\n }\\n\\n\\n\\n.types {\\n  display: flex;\\n  height: 3rem;\\n  margin-top: 8vh;\\n}\\n\\n .type {\\n   /* border: var(--line); */\\n   width: fit-content;\\n   min-width: 9rem;\\n   display: flex;\\n   justify-content: center;\\n   align-items: center;\\n   margin-right: 1rem;\\n   border: 1px solid rgb(61, 68, 74, .5);\\n }\\n\\n .type h5 {\\n  color: var(--mainColor);\\n  text-align: center;\\n }\\n\\n\\n .changeImage {\\n   margin-top: 3vh;\\n   display: flex;\\n   width: 100%;\\n   justify-content: space-between;\\n }\\n\\n @keyframes fadeIn {\\n   0% {opacity: 0}\\n   100% {opacity: 1}\\n }\\n\\n\\n\\n .projectImage img {\\n   animation-name: fadeIn;\\n   animation-duration: .5s;\\n   animation-fill-mode: forwards;\\n   opacity: 0;\\n }\\n\\n .changeImage ul {\\n  color: var(--mainColor);\\n  font-family: 'Rubik';\\n  cursor: pointer;\\n  border-bottom: 1px solid rgb(61, 68, 74, .5);\\n  width: 20%;\\n  text-align: right;\\n  transition: .3s ease-in-out;\\n}\\n\\n.changeImage ul:hover {\\n  width: 10%;\\n  margin-left: 10%;\\n  transition: .3s ease-in-out;\\n}\\n\\n.about {\\n  display: grid;\\n  grid-template-columns: 50% 50%;\\n  background-color: var(--mainColor);\\n}\\n\\n.favorites {\\n  border: 1px solid var(--secondaryColor);\\n  padding: 5% 10%;\\n}\\n\\n.favorites p {\\n  width: 80%;\\n}\\n\\n.aboutText {\\n  padding: 15vh 5vw;\\n}\\n\\n.aboutText h1 {\\n  font-size: 3.2rem;\\n  padding-bottom: 3vh;\\n}\\n\\n.aboutText p {\\n  width: 75%;\\n  padding-bottom: 3vh;\\n}\\n\\n.favorites {\\n  min-width: 400px;\\n  width: fit-content;\\n}\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzLmNzcz9mZmZjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzhGO0FBQzlGLDhCQUE4Qix5RkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0ZBQXdGLE1BQU0sbUNBQW1DLG9CQUFvQjtBQUM1TDtBQUNBLDhCQUE4QixRQUFTLE1BQU0sWUFBWSxhQUFhLHVCQUF1QixFQUFFLFdBQVcseUJBQXlCLDRCQUE0Qiw4QkFBOEIscUJBQXFCLHlCQUF5QixtQkFBbUIsd0JBQXdCLDhDQUE4QyxHQUFHLDhCQUE4QiwyQkFBMkIsMENBQTBDLHFCQUFxQixHQUFHLE9BQU8sMkJBQTJCLHlCQUF5QixHQUFHLGNBQWMscUJBQXFCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0QixHQUFHLGtCQUFrQiwrQkFBK0IscUJBQXFCLHdCQUF3QixzQkFBc0Isc0JBQXNCLHFCQUFxQixrQkFBa0IsZUFBZSxtQ0FBbUMsS0FBSyxhQUFhLHVDQUF1Qyx3QkFBd0IsMEJBQTBCLHNCQUFzQixHQUFHLGVBQWUsa0JBQWtCLG1DQUFtQyxHQUFHLGVBQWUsdUJBQXVCLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQiwyQkFBMkIsdUJBQXVCLHNCQUFzQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLG9DQUFvQyx1QkFBdUIsSUFBSSxrQkFBa0IsMENBQTBDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHFCQUFxQixJQUFJLHFCQUFxQixxQkFBcUIsbUJBQW1CLG9DQUFvQyxpQkFBaUIsa0JBQWtCLHVCQUF1QixzQkFBc0IsNEJBQTRCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLElBQUksY0FBYyxtQkFBbUIsdUJBQXVCLHdDQUF3Qyx1QkFBdUIsbUJBQW1CLDRCQUE0Qix5QkFBeUIsSUFBSSxrQkFBa0IsdUJBQXVCLHdCQUF3Qix5QkFBeUIsSUFBSSxhQUFhLGdCQUFnQixrQkFBa0IsbUJBQW1CLDRCQUE0QixvQ0FBb0MsdUJBQXVCLElBQUksZ0JBQWdCLHdCQUF3QixnQkFBZ0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsNkJBQTZCLHlCQUF5QixJQUFJLGdCQUFnQix1Q0FBdUMsd0JBQXdCLElBQUksbUJBQW1CLGtDQUFrQyx1QkFBdUIsaUJBQWlCLHdCQUF3QiwwQkFBMEIsSUFBSSxlQUFlLG1CQUFtQixvQ0FBb0MsdUJBQXVCLElBQUksbUJBQW1CLGdCQUFnQixJQUFJLHNCQUFzQixrQ0FBa0MsdUJBQXVCLHdCQUF3Qix5QkFBeUIsSUFBSSxxQkFBcUIsdUJBQXVCLDZCQUE2Qix5QkFBeUIsSUFBSSxnQkFBZ0Isa0JBQWtCLGlCQUFpQixvQkFBb0IsR0FBRyxZQUFZLDRCQUE0QixnQ0FBZ0Msd0JBQXdCLHFCQUFxQixtQkFBbUIsNkJBQTZCLHlCQUF5Qix3QkFBd0IsMkNBQTJDLElBQUksZUFBZSw0QkFBNEIsdUJBQXVCLElBQUkscUJBQXFCLHFCQUFxQixtQkFBbUIsaUJBQWlCLG9DQUFvQyxJQUFJLHdCQUF3QixTQUFTLFdBQVcsV0FBVyxXQUFXLElBQUksNEJBQTRCLDRCQUE0Qiw2QkFBNkIsbUNBQW1DLGdCQUFnQixJQUFJLHNCQUFzQiw0QkFBNEIseUJBQXlCLG9CQUFvQixpREFBaUQsZUFBZSxzQkFBc0IsZ0NBQWdDLEdBQUcsMkJBQTJCLGVBQWUscUJBQXFCLGdDQUFnQyxHQUFHLFlBQVksa0JBQWtCLG1DQUFtQyx1Q0FBdUMsR0FBRyxnQkFBZ0IsNENBQTRDLG9CQUFvQixHQUFHLGtCQUFrQixlQUFlLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLG1CQUFtQixzQkFBc0Isd0JBQXdCLEdBQUcsa0JBQWtCLGVBQWUsd0JBQXdCLEdBQUcsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsdUJBQXVCLEdBQUcsYUFBYSxpSEFBaUgsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxTQUFTLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FB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LHNCQUFzQix3QkFBd0IsR0FBRyxrQkFBa0IsZUFBZSx3QkFBd0IsR0FBRyxnQkFBZ0IscUJBQXFCLHVCQUF1QixHQUFHLHlCQUF5QjtBQUN6aVk7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T2xkK1N0YW5kYXJkK1RUOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMCZmYW1pbHk9UnViaWs6aXRhbCx3Z2h0QDAsMzAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiogeyBtYXJnaW46MCAwOyBwYWRkaW5nOjAgMDsgYm94LXNpemluZzpib3JkZXItYm94OyB9XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluQ29sb3I6ICMyQzM1M0M7XFxuICAtLW1haW5Db250cmFzdDogIzNENDQ0QTtcXG4gIC0tc2Vjb25kYXJ5Q29sb3I6ICM2QTdFODY7XFxuICAtLWJyb3duOiAjQTE3QjZDO1xcbiAgLS1saWdodEJsdWU6ICNCMUMyQ0M7XFxuICAtLXRhbjogI0VBRTVENTtcXG4gIC0tb2ZmV2hpdGU6ICNGREZCRjU7XFxuICAtLWxpbmU6IDFweCBzb2xpZCByZ2JhKDI1MywgMjUxLCAyNDUsIC4zKTtcXG59XFxuXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDUsXFxubGkge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnT2xkIFN0YW5kYXJkIFRUJywgc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5wIHtcXG4gIGNvbG9yOiB2YXIoLS1vZmZXaGl0ZSk7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG59XFxuXFxuXFxuXFxuXFxuaDEge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xcbiAgcGFkZGluZy10b3A6IDN2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzNXZoO1xcbiAgcGFkZGluZy10b3A6IDM0dmg7XFxufVxcblxcblxcblxcbi5tYWluVGV4dCBoMyB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbi5nZXRJblRvdWNoIHtcXG4gIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLyogLmlsbHVzdHJhdGlvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxufVxcblxcbi5pbGx1c3RyYXRpb24gaW1nIHtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbn1cXG5cXG4gKi9cXG5cXG5cXG4gLnNraWxscyB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgbWluLWhlaWdodDogODAwcHg7XFxuIH1cXG5cXG4gLnNraWxsc0xlZnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbnRyYXN0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1dmggNXZ3O1xcbiB9XFxuXFxuXFxuIC5za2lsbEltYWdlcyB7XFxuXFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBkaXNwbGF5OiBncmlkO1xcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICB3aWR0aDogMzB2dztcXG4gICBoZWlnaHQ6IDMwdnc7XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICBncmlkLWNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGNvbHVtbi1nYXA6IC44cmVtO1xcbiAgIGdyaWQtcm93LWdhcDogLjVyZW07XFxuICAgcm93LWdhcDogLjVyZW07XFxuIH1cXG5cXG4gLmdvb2RBdCB7XFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctdG9wOiAxMnZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5nb29kQXRIZWFkIHtcXG4gICBmb250LXNpemU6IDIuOXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gfVxcblxcbiAuYm94ZXMge1xcbiAgIHdpZHRoOiA3MCU7XFxuICAgaGVpZ2h0OiA1NHZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuIH1cXG5cXG4gLnNraWxsQm94IHtcXG4gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICAgd2lkdGg6IDg1JTtcXG4gICBoZWlnaHQ6IDIzJTtcXG4gICBib3JkZXI6IHZhcigtLWxpbmUpO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAucHJvamVjdHMge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuIH1cXG5cXG4gLnByb2plY3RzIGgxIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gfVxcblxcbiAucHJvamVjdCB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgcGFkZGluZy10b3A6IDEwdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHtcXG4gICB3aWR0aDogNzAlO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBoMyB7XFxuICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICBmb250LXNpemU6IDEuM3JlbTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gcCB7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcblxcblxcbi50eXBlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogOHZoO1xcbn1cXG5cXG4gLnR5cGUge1xcbiAgIC8qIGJvcmRlcjogdmFyKC0tbGluZSk7ICovXFxuICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgIG1pbi13aWR0aDogOXJlbTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjgsIDc0LCAuNSk7XFxuIH1cXG5cXG4gLnR5cGUgaDUge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG4gLmNoYW5nZUltYWdlIHtcXG4gICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuIH1cXG5cXG4gQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgIDAlIHtvcGFjaXR5OiAwfVxcbiAgIDEwMCUge29wYWNpdHk6IDF9XFxuIH1cXG5cXG5cXG5cXG4gLnByb2plY3RJbWFnZSBpbWcge1xcbiAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgb3BhY2l0eTogMDtcXG4gfVxcblxcbiAuY2hhbmdlSW1hZ2UgdWwge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNjEsIDY4LCA3NCwgLjUpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2hhbmdlSW1hZ2UgdWw6aG92ZXIge1xcbiAgd2lkdGg6IDEwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXFxuLmZhdm9yaXRlcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICBwYWRkaW5nOiA1JSAxMCU7XFxufVxcblxcbi5mYXZvcml0ZXMgcCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uYWJvdXRUZXh0IHtcXG4gIHBhZGRpbmc6IDE1dmggNXZ3O1xcbn1cXG5cXG4uYWJvdXRUZXh0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcXG59XFxuXFxuLmFib3V0VGV4dCBwIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbn1cXG5cXG4uZmF2b3JpdGVzIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0EsSUFBSSxVQUFVLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFOztBQUVwRDtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7OztBQUdBOzs7OztFQUtFLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7Ozs7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIscUJBQXFC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VTtFQUNWLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PbGQrU3RhbmRhcmQrVFQ6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwJmZhbWlseT1SdWJpazppdGFsLHdnaHRAMCwzMDA7MSwzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuXFxuKiB7IG1hcmdpbjowIDA7IHBhZGRpbmc6MCAwOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cXG5cXG46cm9vdCB7XFxuICAtLW1haW5Db2xvcjogIzJDMzUzQztcXG4gIC0tbWFpbkNvbnRyYXN0OiAjM0Q0NDRBO1xcbiAgLS1zZWNvbmRhcnlDb2xvcjogIzZBN0U4NjtcXG4gIC0tYnJvd246ICNBMTdCNkM7XFxuICAtLWxpZ2h0Qmx1ZTogI0IxQzJDQztcXG4gIC0tdGFuOiAjRUFFNUQ1O1xcbiAgLS1vZmZXaGl0ZTogI0ZERkJGNTtcXG4gIC0tbGluZTogMXB4IHNvbGlkIHJnYmEoMjUzLCAyNTEsIDI0NSwgLjMpO1xcbn1cXG5cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNSxcXG5saSB7XFxuICBjb2xvcjogdmFyKC0tb2ZmV2hpdGUpO1xcbiAgZm9udC1mYW1pbHk6ICdPbGQgU3RhbmRhcmQgVFQnLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbnAge1xcbiAgY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcbn1cXG5cXG5cXG5cXG5cXG5oMSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzLjdyZW07XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogLjFyZW07XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG4ubmF2YmFyIHVsIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWxpbmUpO1xcbiAgcGFkZGluZy10b3A6IDN2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAzdmg7XFxuICBwYWRkaW5nLWxlZnQ6IDQwJTtcXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogOTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbn1cXG5cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG59XFxuXFxuLm1haW5UZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTB2dztcXG4gIHBhZGRpbmctYm90dG9tOiAzNXZoO1xcbiAgcGFkZGluZy10b3A6IDM0dmg7XFxufVxcblxcblxcblxcbi5tYWluVGV4dCBoMyB7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBtYXJnaW4tYm90dG9tOiA0dmg7XFxufVxcblxcbi5nZXRJblRvdWNoIHtcXG4gIGJvcmRlcjogdmFyKC0tbGluZSk7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi8qIC5pbGx1c3RyYXRpb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctdG9wOiAzMHZoO1xcbn1cXG5cXG4uaWxsdXN0cmF0aW9uIGltZyB7XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuICovXFxuXFxuXFxuIC5za2lsbHMge1xcbiAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xcbiB9XFxuXFxuIC5za2lsbHNMZWZ0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db250cmFzdCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNXZoIDV2dztcXG4gfVxcblxcblxcbiAuc2tpbGxJbWFnZXMge1xcblxcbiAgIGhlaWdodDogMTAwdmg7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgd2lkdGg6IDMwdnc7XFxuICAgaGVpZ2h0OiAzMHZ3O1xcbiAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xcbiAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgY29sdW1uLWdhcDogLjhyZW07XFxuICAgcm93LWdhcDogLjVyZW07XFxuIH1cXG5cXG4gLmdvb2RBdCB7XFxuICAgaGVpZ2h0OiAxMDB2aDtcXG4gICBtaW4taGVpZ2h0OiA4MDBweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xcbiAgIHBhZGRpbmctdG9wOiAxMnZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiB9XFxuXFxuIC5nb29kQXRIZWFkIHtcXG4gICBmb250LXNpemU6IDIuOXJlbTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgcGFkZGluZy1ib3R0b206IDV2aDtcXG4gfVxcblxcbiAuYm94ZXMge1xcbiAgIHdpZHRoOiA3MCU7XFxuICAgaGVpZ2h0OiA1NHZoO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgbWluLWhlaWdodDogNDAwcHg7XFxuIH1cXG5cXG4gLnNraWxsQm94IHtcXG4gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XFxuICAgd2lkdGg6IDg1JTtcXG4gICBoZWlnaHQ6IDIzJTtcXG4gICBib3JkZXI6IHZhcigtLWxpbmUpO1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gfVxcblxcbiAucHJvamVjdHMge1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9mZldoaXRlKTtcXG4gICBwYWRkaW5nOiAxMHZoIDEwdnc7XFxuIH1cXG5cXG4gLnByb2plY3RzIGgxIHtcXG4gICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xcbiAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gfVxcblxcbiAucHJvamVjdCB7XFxuICAgZGlzcGxheTogZ3JpZDtcXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgcGFkZGluZy10b3A6IDEwdmg7XFxuIH1cXG5cXG4gLmRlc2NyaXB0aW9uIHtcXG4gICB3aWR0aDogNzAlO1xcbiB9XFxuXFxuIC5kZXNjcmlwdGlvbiBoMyB7XFxuICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcXG4gICBmb250LXNpemU6IDEuM3JlbTtcXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcbiAuZGVzY3JpcHRpb24gcCB7XFxuICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICAgcGFkZGluZy1ib3R0b206IDN2aDtcXG4gfVxcblxcblxcblxcbi50eXBlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWFyZ2luLXRvcDogOHZoO1xcbn1cXG5cXG4gLnR5cGUge1xcbiAgIC8qIGJvcmRlcjogdmFyKC0tbGluZSk7ICovXFxuICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgIG1pbi13aWR0aDogOXJlbTtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjgsIDc0LCAuNSk7XFxuIH1cXG5cXG4gLnR5cGUgaDUge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuIH1cXG5cXG5cXG4gLmNoYW5nZUltYWdlIHtcXG4gICBtYXJnaW4tdG9wOiAzdmg7XFxuICAgZGlzcGxheTogZmxleDtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuIH1cXG5cXG4gQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgIDAlIHtvcGFjaXR5OiAwfVxcbiAgIDEwMCUge29wYWNpdHk6IDF9XFxuIH1cXG5cXG5cXG5cXG4gLnByb2plY3RJbWFnZSBpbWcge1xcbiAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxuICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgb3BhY2l0eTogMDtcXG4gfVxcblxcbiAuY2hhbmdlSW1hZ2UgdWwge1xcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XFxuICBmb250LWZhbWlseTogJ1J1YmlrJztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNjEsIDY4LCA3NCwgLjUpO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2hhbmdlSW1hZ2UgdWw6aG92ZXIge1xcbiAgd2lkdGg6IDEwJTtcXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcXG59XFxuXFxuLmZhdm9yaXRlcyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnlDb2xvcik7XFxuICBwYWRkaW5nOiA1JSAxMCU7XFxufVxcblxcbi5mYXZvcml0ZXMgcCB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uYWJvdXRUZXh0IHtcXG4gIHBhZGRpbmc6IDE1dmggNXZ3O1xcbn1cXG5cXG4uYWJvdXRUZXh0IGgxIHtcXG4gIGZvbnQtc2l6ZTogMy4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDN2aDtcXG59XFxuXFxuLmFib3V0VGV4dCBwIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nLWJvdHRvbTogM3ZoO1xcbn1cXG5cXG4uZmF2b3JpdGVzIHtcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles.css\n");

/***/ })

})