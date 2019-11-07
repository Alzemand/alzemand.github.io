"use strict";function loadScript(t){return new Promise(function(e,n){var o=document.createElement("script");o.async=!0,o.rel="preload",o.src="".concat("https://widgets.yeeply.com","/").concat("1570527639").concat(t),o.onload=e,o.onerror=n,document.head.appendChild(o)})}function loadVue(){return new Promise(function(e,n){return"undefined"!=typeof Vue?e("Skipped Vue"):loadScript("/loader/vue.min.js").then(function(){return e("Loaded Vue")}).catch(function(){return n(Error("Error loading Vue"))})})}function loadCustomElementsPolyfill(){return new Promise(function(e,n){return"customElements"in window?e("Skipped CustomElements Polyfill"):loadScript("/loader/webcomponents-bundle.js").then(function(){return e("Loaded CustomElements Polyfill")}).catch(function(){return n(Error("Error loading CustomElements Polyfill"))})})}function loadShadowDomPolyfill(){return new Promise(function(e,n){return HTMLElement.prototype.attachShadow?e("Skipped ShadowDom Polyfill"):loadScript("/loader/shadydom.min.js").then(function(){return e("Loaded ShadowDom Polyfill")}).catch(function(){return n(Error("Error loading ShadowDom Polyfill"))})})}function loadYeeplyWebComponents(){return new Promise(function(e,n){return loadScript("/yp.min.js").then(function(){return e("Loaded Yeeply Web Components")}).catch(function(){return n(Error("Error loading Yeeply Web Components"))})})}function clickMatches(e,n){return!!e.matches&&e.matches(n)}loadVue().then(function(e){return console.log(e),loadCustomElementsPolyfill()}).then(function(e){return console.log(e),loadShadowDomPolyfill()}).then(function(e){return console.log(e),loadYeeplyWebComponents()}).then(function(e){console.log(e);var n=new CustomEvent("ypWebComponentLoaded");return window.dispatchEvent(n)}),document.addEventListener("click",function(e){var n=e.target,o=n.parentNode;if(clickMatches(n,".ypOpenPublishProjectModal")||clickMatches(o,".ypOpenPublishProjectModal")){var t=new CustomEvent("ypOpenPublishProjectModalEvent");return window.dispatchEvent(t)}if(clickMatches(n,".ypOpenRegisterDeveloperModal")||clickMatches(o,".ypOpenRegisterDeveloperModal")){var r=new CustomEvent("ypOpenRegisterDeveloperModalEvent");return window.dispatchEvent(r)}return!1});