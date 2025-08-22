/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', function () {\n\n    /* ---------- Slider ---------- */\n\n    const crerativeSlider = new Swiper('.creative-slider', {\n        loop: true,\n        pagination: {\n            el: '.creative-slider-pagination',\n            clickable: true,\n        },\n        navigation: {\n            nextEl: '.creative-slider-button-next',\n            prevEl: '.creative-slider-button-prev',\n        },\n        slidesPerView: 4,\n        spaceBetween: 24,\n        breakpoints: {\n            320: {\n                slidesPerView: 1,\n                spaceBetween: 24\n            },\n            480: {\n                slidesPerView: 2,\n                spaceBetween: 24\n            },\n            768: {\n                slidesPerView: 3,\n                spaceBetween: 24\n            },\n            992: {\n                slidesPerView: 4,\n                spaceBetween: 24,\n            }\n        }\n    });\n\n\n    /* ---------- Form ---------- */\n\n    document.querySelector('.contacts-form__button').addEventListener('click', function (event) {\n        event.preventDefault();\n\n        let resultMessage = document.querySelector('.contacts-form__result'),\n            checkbox = document.querySelector('.contacts-form-checkbox__input'),\n            fieldsOK = false,\n            checkboxOK = false;\n\n        document.querySelectorAll('.contacts-form__field').forEach(function (element) {\n            if (element.value.trim() === '') {\n                element.classList.add('empty-field');\n                resultMessage.classList.add('error-message');\n                resultMessage.textContent = 'Пожалуйста, заполните обязательные поля';\n            } else {\n                fieldsOK = true;\n            }\n        });\n\n        if (!checkbox.checked) {\n            resultMessage.classList.add('error-message');\n            resultMessage.textContent = 'Пожалуйста, отметьте согласие с обработкой данных';\n        } else {\n            checkboxOK = true;\n        }\n\n        if (fieldsOK && checkboxOK) {\n            resultMessage.classList.add('success-message');\n            resultMessage.textContent = 'Спасибо! Ваше сообщение успешно отправлено';\n\n            document.querySelectorAll('.contacts-form__field').forEach(function (element) {\n                element.value = '';\n            });\n        }\n    });\n\n    document.querySelectorAll('.contacts-form__field').forEach(function (field) {\n        field.addEventListener('click', function () {\n            if (this.classList.contains('empty-field')) {\n                this.classList.remove('empty-field');\n            }\n        });\n    });\n\n\n});\n\n//# sourceURL=webpack://gulp-2025/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;