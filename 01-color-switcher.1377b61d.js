!function(){var t,o={changeColorBtn:document.querySelector("[data-start]"),stopChangeColorBtn:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};o.changeColorBtn.addEventListener("click",(function(){o.changeColorBtn.setAttribute("disabled",!0),t=setInterval((function(){o.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.stopChangeColorBtn.addEventListener("click",(function(){o.changeColorBtn.removeAttribute("disabled"),clearTimeout(t)}))}();
//# sourceMappingURL=01-color-switcher.1377b61d.js.map