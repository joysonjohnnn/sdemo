astraToggleSetupPro=function(e,a,t){var l,n,o,r=!1;if(0<(l="off-canvas"===e||"full-width"===e?(n=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(o=a.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length):a.classList.contains("ast-header-break-point")?(n=document.querySelectorAll("#ast-mobile-header"),(r=!(0<(l=(o=document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)))?1:l):(n=document.querySelectorAll("#ast-desktop-header"),(o=document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length))||r)for(var s=0;s<l;s++)if(r||(o[s].setAttribute("data-index",s),t[s]||(t[s]=o[s],o[s].addEventListener("click",astraNavMenuToggle,!1))),void 0!==n[s])for(var d,i=0;i<n.length;i++)if(0<(d=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?n[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):n[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var g=0;g<d.length;g++)d[g].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,a,t,l){e.preventDefault();var n=e.target.closest("#ast-desktop-header"),o=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),r=(n=null!=n&&""!==n?n.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)return null!==r&&""!==r&&void 0!==r&&(astraToggleClass(r,"toggle-on"),r.classList.contains("toggle-on")?r.style.display="block":r.style.display=""),astraToggleClass(n,"toggled"),void(n.classList.contains("toggled")?(a.classList.add("ast-main-header-nav-open"),"dropdown"===t&&(o.style.display="block")):(a.classList.remove("ast-main-header-nav-open"),o.style.display="none"));e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),r="0",n=!1;if(null!==l.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),r="0",n=!0),void 0===e[r])return!1;for(var s=e[r].querySelectorAll(".menu-item-has-children"),d=0;d<s.length;d++){s[d].classList.remove("ast-submenu-expanded");for(var i=s[d].querySelectorAll(".sub-menu"),g=0;g<i.length;g++)i[g].style.display="none"}-1!==(l.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[r],"toggle-on"),astraToggleClass(menu_toggle_all[r],"toggled"),n&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[r].classList.contains("toggle-on")?(e[r].style.display="block",a.classList.add("ast-main-header-nav-open")):(e[r].style.display="",a.classList.remove("ast-main-header-nav-open")))};function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var t=0;t<e.length;t++)e[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-content");null!==e&&e.classList.remove("ast-hidden")});var a=document.querySelectorAll(".menu-container-width-mega");if(0<a.length)for(t=0;t<a.length;t++)a[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-menu-container");null!==e&&e.classList.remove("ast-hidden")});var s=document.querySelectorAll(".full-width-mega");if(0<s.length)for(t=0;t<s.length;t++)s[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-stretched-width-mega");if(0<n.length)for(t=0;t<n.length;t++)n[t].addEventListener("mouseenter",function(e){var t=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full-stretched");null!==t&&t.classList.remove("ast-hidden"),null!==e&&e.classList.remove("ast-hidden")});var r=document.querySelectorAll(".custom-width-mega");if(0<r.length)for(t=0;t<r.length;t++)r[t].addEventListener("mouseenter",function(e){e=e.target.querySelector(".astra-mega-menu-width-custom");null!==e&&e.classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load),document.addEventListener("astPartialContentRendered",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");function apply_megamenu_width_styles(){[].slice.call(items).forEach(function(d){jQuery(d).hover(function(){var e,t,a,s,n,r,l=jQuery(d).parents(".ast-container"),i=l.children(),l=l.parent(),u=jQuery(this);(u.hasClass("full-width-mega")||u.hasClass("full-stretched-width-mega"))&&(i=jQuery(i).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==u.parent().attr("id")&&"ast-desktop-toggle-menu"!==u.parent().attr("id")?(e=i.width(),r=i.offset(),r=(t=u.offset()).left-(r.left+parseFloat(i.css("paddingLeft"))),i=l.width(),n=l.offset(),t=t.left-(n.left+parseFloat(l.css("paddingLeft"))),u.hasClass("custom-width-mega")&&(s=(s=window.getComputedStyle(u.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),a=(s=parseInt(s))<=e?(a=parseInt(e-s),parseInt(r-a)):(a=parseInt(s-e),parseInt(r+a))),u.hasClass("menu-container-width-mega")&&(n=jQuery(d).parents(".main-navigation"),l.hasClass("ast-above-header")?n=jQuery(".ast-above-header-navigation"):l.hasClass("ast-below-header")&&(n=jQuery(".ast-below-header-actual-nav")),e=($target_container=n.length?n:u.parent("ul")).width()+"px",l=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),n=u.offset(),l=jQuery(window).width()-l-n.left,r=parseInt($target_container.width()-l)),u.hasClass("full-width-mega")?(u.find(".astra-full-megamenu-wrapper").css({left:"-"+t+"px",width:i}),u.find(".astra-megamenu").css({width:e})):u.hasClass("full-stretched-width-mega")?u.find(".astra-full-megamenu-wrapper").css({left:"-"+t+"px",width:i}):u.hasClass("custom-width-mega")?u.find(".astra-mega-menu-width-custom").css({left:"-"+a+"px",width:s+"px"}):u.find(".astra-megamenu").css({left:"-"+r+"px",width:e})):(u.find(".astra-megamenu").css({left:"",width:"","background-image":""}),u.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))})})}apply_megamenu_width_styles(),document.addEventListener("astMenuHoverStyleChanged",function(){apply_megamenu_width_styles()}),[].slice.call(items).forEach(function(d){var e=jQuery(d).parents(".ast-container"),m=e.children(),o=e.parent(),f=jQuery(d);(f.hasClass("full-width-mega")||f.hasClass("full-stretched-width-mega"))&&(m=jQuery(m).closest(".ast-container"),f.find(".astra-full-megamenu-wrapper").removeClass("ast-hidden")),f.find(".menu-link").focusin(function(e){var t,a,s,n,r,l,i,u;f.find(".sub-menu").addClass("astra-megamenu-focus"),f.find(".sub-menu").removeClass("ast-hidden"),f.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)&&"ast-hf-mobile-menu"!==f.parent().attr("id")&&"ast-desktop-toggle-menu"!==f.parent().attr("id")?(t=m.width(),u=m.offset(),u=(s=f.offset()).left-(u.left+parseFloat(m.css("paddingLeft"))),a=o.width(),i=o.offset(),s=s.left-(i.left+parseFloat(o.css("paddingLeft"))),f.hasClass("custom-width-mega")&&(r=(r=window.getComputedStyle(f.find(".astra-mega-menu-width-custom")[0],"::before").getPropertyValue("content")||1200).replace(/[^0-9]/g,""),n=(r=parseInt(r))<=t?(n=parseInt(t-r),parseInt(u-n)):(n=parseInt(r-t),parseInt(u+n))),f.hasClass("menu-container-width-mega")&&(i=jQuery(d).parents(".main-navigation"),o.hasClass("ast-above-header")?i=jQuery(".ast-above-header-navigation"):o.hasClass("ast-below-header")&&(i=jQuery(".ast-below-header-actual-nav")),t=($target_container=i.length?i:f.parent("ul")).width()+"px",i=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=f.offset(),i=jQuery(window).width()-i-l.left,u=parseInt($target_container.width()-i)),f.hasClass("full-width-mega")?(f.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}),f.find(".astra-megamenu").css({width:t})):f.hasClass("full-stretched-width-mega")?f.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:a}):f.hasClass("custom-width-mega")?f.find(".astra-mega-menu-width-custom").css({left:"-"+n+"px",width:r+"px"}):f.find(".astra-megamenu").css({left:"-"+u+"px",width:t})):(f.find(".astra-megamenu").css({left:"",width:"","background-image":""}),f.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),f.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(f.find(".sub-menu").removeClass("astra-megamenu-focus"),f.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(d).find(".sub-menu .menu-item").last().focusout(function(){f.find(".sub-menu").removeClass("astra-megamenu-focus"),f.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){f.find(".sub-menu").removeClass("astra-megamenu-focus"),f.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),f.click(function(e){jQuery(e.target).hasClass("menu-item")&&e.stopImmediatePropagation()})});!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.querySelectorAll(".ast-search-box .close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();