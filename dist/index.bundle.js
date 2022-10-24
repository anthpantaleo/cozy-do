/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const listsContainer = document.querySelector(\"[data-lists\");\nconst newListForm = document.querySelector(\"[data-new-list-form]\");\nconst newListInput = document.querySelector(\"[data-new-list-input]\");\nconst deleteListbutton = document.querySelector(\"[data-delete-list-button\");\n\nconst LOCAL_STORAGE_LIST_KEY = \"task.lists\";\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = \"task.selectedListId\";\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\nlet selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\n\nlistsContainer.addEventListener(\"click\", (e) => {\n  if (e.target.tagName.toLowerCase() === \"li\") {\n    selectedListID = e.target.dataset.listId;\n    saveAndRender();\n  }\n});\n\ndeleteListbutton.addEventListener(\"click\", (e) => {\n  lists = lists.filter((list) => list.id !== selectedListID);\n  selectedListID = null;\n  saveAndRender();\n});\n\nnewListForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName == \"\") return;\n  const list = createList(listName);\n  newListInput.value = null;\n  lists.push(list);\n  saveAndRender();\n});\n\nfunction createList(name) {\n  return { id: Date.now().toString(), name: name, task: [] };\n}\n\nfunction saveAndRender() {\n  save();\n  render();\n}\n\nfunction save() {\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID);\n}\n\nfunction render() {\n  //   <li class=\"list-name\">Work</li>;\n  clearElement(listsContainer);\n  lists.forEach((list) => {\n    const listElement = document.createElement(\"li\");\n    listElement.dataset.listId = list.id;\n    listElement.classList.add(\"list-name\");\n    listElement.innerText = list.name;\n    if (list.id === selectedListID) {\n      listElement.classList.add(\"active-list\");\n    }\n    listsContainer.appendChild(listElement);\n  });\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nrender();\n\n\n//# sourceURL=webpack://cozy-do/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;