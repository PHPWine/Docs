(()=>{"use strict";const e=document.getElementById("gUp"),t=document.getElementById("author"),n=document.getElementById("author_support"),o=document.getElementById("wineSupport"),c=document.querySelector(".icon");document.querySelector(".show"),document.querySelector(".hide");gsap.to(e,{y:10,duration:1,yoyo:!0,repeat:-1}),t.addEventListener("click",(function(){alert("Author will be available sooner or later!")})),o.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("show"),n.classList.remove("hide")})),c.addEventListener("click",(function(){n.classList.remove("show"),n.classList.add("hide")})),tailwind.config={theme:{extend:{screens:{sm:"480",md:"540px",lg:"768px",xl:"820px","2xl":"1024px","3xl":"1280px"}}}}})();