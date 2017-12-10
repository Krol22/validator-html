"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function isInputElement(e){return"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName||"SELECT"===e.nodeName}var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),errValidityMap={valueMissing:"_err_required",patternMismatch:"_err_pattern",typeMismatch:"_err_type",rangeOverflow:"_err_max_value",rangeUnderflow:"_err_min_value",stepMismatch:"_err_step",tooLong:"_err_max_length",tooShort:"_err_min_length"},Validator=function(){function e(r){var t=this;_classCallCheck(this,e),this._form=r,this._formInputs=Array.from(this._form.elements).filter(isInputElement),this._formInputs.forEach(function(e){t.hideFieldErrors(e),e.addEventListener("input",function(r){t.validateField(e)})})}return _createClass(e,[{key:"validateForm",value:function(){var e=this,r=!0;return this._formInputs.forEach(function(e){e.checkValidity()||(r=!1)}),r||this._formInputs.forEach(function(r){e.validateField(r)}),r}},{key:"validateField",value:function(e){this.hideFieldErrors(e),e.classList.remove("error-input");return!Object.keys(errValidityMap).find(function(r){var t=form.getElementsByClassName(""+e.name+errValidityMap[r])[0];return!(!e.validity[r]||!t)&&(t.style.display="inline-block",!0)})||(e.classList.add("error-input"),!1)}},{key:"hideFieldErrors",value:function(e){Object.values(errValidityMap).forEach(function(r){var t=form.getElementsByClassName(""+e.name+r)[0];t&&(t.style.display="none")})}},{key:"hideAllErrors",value:function(){this._formInputs.forEach(hideFieldErrors)}}]),e}();