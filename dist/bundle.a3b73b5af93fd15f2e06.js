(()=>{"use strict";jQuery((()=>{const e=function(e={}){this.target=e};e.prototype.getContainer=function(e,t){let i=jQuery(e);jQuery(i).children().map((function(e,n){e!==t?jQuery(this).fadeOut("fast"):jQuery(i.children()[t]).fadeIn()}))},e.prototype.getSelected=function(t,i){let n=jQuery(t);var r=this.target.mobileMenu[0],o=this.target.mobileMenu[1],s=this.target.mobileMenu[2],u=this.target.mobileMenu[3],a=this.target.root;n.map((function(t,n){jQuery(n).click((function(n){n.preventDefault(),jQuery(a).hide(),jQuery(r).show(),jQuery(s).show(),jQuery(u).show(),jQuery(o).removeClass("menu-slide").addClass("hidden"),e.prototype.getContainer(i,t)}))}))},e.prototype.moveToContent=function(e){jQuery(e).map((function(e,t){jQuery(t).click((function(e){e.preventDefault(),jQuery("html, body").animate({scrollTop:jQuery(this).offset().top-50},600)}))}))},e.prototype.mobileMenu=function(e,t,i,n){let r=jQuery(e);var o=this.target.mobileMenu[4],s=this.target.root;r.click((function(){jQuery(this).hide(),jQuery(i).hide(),jQuery(s).hide(),jQuery(n).hide(),jQuery(t).addClass("menu-slide"),jQuery(t).removeClass("hidden"),jQuery(o).removeClass("hidden"),jQuery(o).insertBefore("#wsrch")}))},e.prototype.contetMinHeight=function(e,t){const i=jQuery(e).height()+200;jQuery(t).get(0).style.setProperty("--global-min-height",i+"px")},e.prototype.docxContainerHeight=function(e){const t=jQuery(window).height()-135;jQuery(e).map((function(e,i){jQuery(i).get(0).style.setProperty("--global-container-height",t+"px")}))},e.prototype.setContainerWidth=function(e,t){let i=jQuery(e).width()-5;jQuery(t).get(0).style.setProperty("--global-setContainer--width",i+"px")},e.prototype.tagMenuResponse=function(e){var t=this.target.taglink[1],i=this.target.taglink[2],n=this.target.taglink[3];jQuery(e).children().map((function(e,n){jQuery(n).bind("click",(function(e){var n=jQuery(this).parent(),r=jQuery(this)[0].hash,o=jQuery(r).next(),s=jQuery(r).first().children()[1];switch(r){case t:case i:n.insertAfter(o);break;default:n.insertAfter(s)}}))})),jQuery(window).scroll((function(){0===jQuery(this).scrollTop()&&jQuery(e).insertAfter(n)}))},e.prototype.init=function(){var e=this.target.selected,t=this.target.getContent,i=this.target.mobileMenu[0],n=this.target.mobileMenu[1],r=this.target.mobileMenu[2],o=this.target.mobileMenu[3],s=this.target.contentMinHeight[0],u=this.target.contentMinHeight[1],a=this.target.docx,h=this.target.rightContent[0],l=this.target.rightContent[1],y=this.target.taglink[0];jQuery(t).children().hide(),this.getSelected(e,t),this.moveToContent(e),this.mobileMenu(i,n,r,o),this.contetMinHeight(s,u),this.docxContainerHeight(a),this.setContainerWidth(h,l),this.tagMenuResponse(y)};new e({selected:".w-self",getContent:".w-self-container",root:".root",mobileMenu:[".btn-plus","#sidebar",".w-self-container",".branding a",".menu-list"],contentMinHeight:["#side_content","#main_content"],docx:".w-wine-method",rightContent:["#main_content","#w_self"],taglink:[".hot-topic","#w_installation","#w_usage","#w_slider"]}).init()})),jQuery(document).ready((function(){jQuery("#wineInput").on("keyup",(function(){var e=jQuery(this).val().toLowerCase();jQuery("#wineMethods tr").filter((function(){var t=jQuery(this).toggle(jQuery(this).text().toLowerCase().indexOf(e)>-1)[0].className;jQuery(this).toggle(t.toLowerCase().indexOf(e)>-1)}))}))})),jQuery(document).ready((function(){jQuery(".owl-carousel").owlCarousel({loop:!0,autoplay:!0,slideTransition:"linear",autoplaySpeed:6e3,smartSpeed:6e3,margin:1,responsiveClass:!0,responsive:{0:{items:2},600:{items:3},768:{items:4},1e3:{items:5}}})}))})();