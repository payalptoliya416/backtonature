import { c as createComponent } from './astro-component_CQzo86FK.mjs';
import 'piccolore';
import { r as renderTemplate, c as renderComponent, k as Fragment, u as unescapeHTML, e as renderSlot, a as addAttribute, d as renderHead } from './entrypoint_C17WtrUW.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const normalize = (p) => (p || "").replace(/\/+$/, "") || "/";
  const currentNorm = normalize(pathname);
  const isLemon = currentNorm === normalize("/accommodation/couples-family-cabin-swimming-pool/");
  const isMandarin = currentNorm === normalize("/accommodation/mountain-wood-cabin-kids-playground-cyprus/");
  const isOrange = currentNorm === normalize("/accommodation/wooden-cabin-bbq-pool-for6/");
  const isHome = currentNorm === "/";
  const isContact = currentNorm === normalize("/contact/");
  const menu1Html = `<ul id="menu-1-748d7de" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8694${isLemon ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/couples-family-cabin-swimming-pool/" class="elementor-item${isLemon ? " elementor-item-active" : ""}"${isLemon ? ' aria-current="page"' : ""}>Lemon House ( 4 Pax )</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8695${isMandarin ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/mountain-wood-cabin-kids-playground-cyprus/" class="elementor-item${isMandarin ? " elementor-item-active" : ""}"${isMandarin ? ' aria-current="page"' : ""}>Mandarin House ( 6 Pax )</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11675${isOrange ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/wooden-cabin-bbq-pool-for6/" class="elementor-item${isOrange ? " elementor-item-active" : ""}"${isOrange ? ' aria-current="page"' : ""}>Orange House ( 6 Pax )</a></li><li class="logocentral menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-8699${isHome ? " current-menu-item current_page_item" : ""}"><a href="/" ${isHome ? 'aria-current="page" ' : ""}class="elementor-item${isHome ? " elementor-item-active" : ""}"><img src="/images/cropped-Back-to-Nature-logo.png" data-src="/wp-content/uploads/2025/01/cropped-Back-to-Nature-logo.png" width="1547" height="1454" /></a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8701${isContact ? " current-menu-item current_page_item" : ""}"><a href="/contact/" class="elementor-item${isContact ? " elementor-item-active" : ""}"${isContact ? ' aria-current="page"' : ""}>Contact</a></li></ul>`;
  const menu2Html = `<ul id="menu-2-748d7de" class="elementor-nav-menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8694${isLemon ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/couples-family-cabin-swimming-pool/" class="elementor-item${isLemon ? " elementor-item-active" : ""}" tabindex="-1"${isLemon ? ' aria-current="page"' : ""}>Lemon House ( 4 Pax )</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8695${isMandarin ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/mountain-wood-cabin-kids-playground-cyprus/" class="elementor-item${isMandarin ? " elementor-item-active" : ""}" tabindex="-1"${isMandarin ? ' aria-current="page"' : ""}>Mandarin House ( 6 Pax )</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11675${isOrange ? " current-menu-item current_page_item" : ""}"><a href="/accommodation/wooden-cabin-bbq-pool-for6/" class="elementor-item${isOrange ? " elementor-item-active" : ""}" tabindex="-1"${isOrange ? ' aria-current="page"' : ""}>Orange House ( 6 Pax )</a></li><li class="logocentral menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-8699${isHome ? " current-menu-item current_page_item" : ""}"><a href="/" ${isHome ? 'aria-current="page" ' : ""}class="elementor-item${isHome ? " elementor-item-active" : ""}" tabindex="-1"><img src="/images/cropped-Back-to-Nature-logo.png" data-src="/wp-content/uploads/2025/01/cropped-Back-to-Nature-logo.png" width="1547" height="1454" /></a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8701${isContact ? " current-menu-item current_page_item" : ""}"><a href="/contact/" class="elementor-item${isContact ? " elementor-item-active" : ""}" tabindex="-1"${isContact ? ' aria-current="page"' : ""}>Contact</a></li></ul>`;
  const headerRaw = '<header id="masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader"><p class="main-title bhf-hidden" itemprop="headline"><a href="/" title="BackToNature" rel="home">BackToNature</a></p><style>.elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon i{transform:rotate(90deg) !important;-webkit-transform:rotate(90deg) !important;display:inline-block !important;}.elementor-8679 .elementor-element.elementor-element-d7362e3 > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-8679 .elementor-element.elementor-element-d7362e3 > .elementor-container{max-width:1170px;}.elementor-8679 .elementor-element.elementor-element-d7362e3{margin-top:20px;margin-bottom:0px;}.elementor-8679 .elementor-element.elementor-element-fae618c > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-widget-nav-menu .elementor-nav-menu--main .elementor-item{color:var( --e-global-color-text );fill:var( --e-global-color-text );}.elementor-widget-nav-menu .elementor-nav-menu--main .elementor-item:hover,\n					.elementor-widget-nav-menu .elementor-nav-menu--main .elementor-item.elementor-item-active,\n					.elementor-widget-nav-menu .elementor-nav-menu--main .elementor-item.highlighted,\n					.elementor-widget-nav-menu .elementor-nav-menu--main .elementor-item:focus{color:var( --e-global-color-accent );fill:var( --e-global-color-accent );}.elementor-widget-nav-menu .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:before,\n					.elementor-widget-nav-menu .elementor-nav-menu--main:not(.e--pointer-framed) .elementor-item:after{background-color:var( --e-global-color-accent );}.elementor-widget-nav-menu .e--pointer-framed .elementor-item:before,\n					.elementor-widget-nav-menu .e--pointer-framed .elementor-item:after{border-color:var( --e-global-color-accent );}.elementor-widget-nav-menu{--e-nav-menu-divider-color:var( --e-global-color-text );}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-menu-toggle{margin:0 auto;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu .elementor-item{font-family:"Poppins", Sans-serif;font-size:14px;font-weight:400;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu--main .elementor-item{color:#1A2C1D;fill:#1A2C1D;padding-left:11px;padding-right:11px;padding-top:0px;padding-bottom:0px;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu--main .elementor-item.elementor-item-active{color:#D57800;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-framed .elementor-item:before{border-width:0px;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-framed.e--animation-draw .elementor-item:before{border-width:0 0 0px 0px;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-framed.e--animation-draw .elementor-item:after{border-width:0px 0px 0 0;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-framed.e--animation-corners .elementor-item:before{border-width:0px 0 0 0px;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-framed.e--animation-corners .elementor-item:after{border-width:0 0px 0px 0;}.elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-underline .elementor-item:after,\n					 .elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-overline .elementor-item:before,\n					 .elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-double-line .elementor-item:before,\n					 .elementor-8679 .elementor-element.elementor-element-748d7de .e--pointer-double-line .elementor-item:after{height:0px;}.elementor-bc-flex-widget .elementor-8679 .elementor-element.elementor-element-a545637.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-8679 .elementor-element.elementor-element-a545637.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-8679 .elementor-element.elementor-element-a545637.elementor-column > .elementor-widget-wrap{justify-content:space-between;}.elementor-8679 .elementor-element.elementor-element-a545637 > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-8679 .elementor-element.elementor-element-61f0ef5 > .elementor-container > .elementor-column > .elementor-widget-wrap{align-content:center;align-items:center;}.elementor-8679 .elementor-element.elementor-element-ed847ba.elementor-column > .elementor-widget-wrap{justify-content:space-between;}.elementor-8679 .elementor-element.elementor-element-ed847ba > .elementor-element-populated{padding:0px 0px 0px 0px;}.elementor-widget-icon-box.elementor-view-stacked .elementor-icon{background-color:var( --e-global-color-primary );}.elementor-widget-icon-box.elementor-view-framed .elementor-icon, .elementor-widget-icon-box.elementor-view-default .elementor-icon{fill:var( --e-global-color-primary );color:var( --e-global-color-primary );border-color:var( --e-global-color-primary );}.elementor-widget-icon-box .elementor-icon-box-title{color:var( --e-global-color-primary );}.elementor-widget-icon-box .elementor-icon-box-description{color:var( --e-global-color-text );}.elementor-8679 .elementor-element.elementor-element-81f9748{width:auto;max-width:auto;--icon-box-icon-margin:15px;}.elementor-8679 .elementor-element.elementor-element-81f9748 > .elementor-widget-container{margin:0px 20px 0px 0px;}.elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon-box-title{margin-bottom:1px;color:#1A2C1D;}.elementor-8679 .elementor-element.elementor-element-81f9748.elementor-view-stacked .elementor-icon{background-color:#1A2C1D;}.elementor-8679 .elementor-element.elementor-element-81f9748.elementor-view-framed .elementor-icon, .elementor-8679 .elementor-element.elementor-element-81f9748.elementor-view-default .elementor-icon{fill:#1A2C1D;color:#1A2C1D;border-color:#1A2C1D;}.elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon{font-size:18px;}.elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon-box-title, .elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon-box-title a{font-family:"Poppins", Sans-serif;font-size:14px;font-weight:500;}.elementor-8679 .elementor-element.elementor-element-c18c056 .elementor-button{background-color:#1A2C1D;font-size:16px;font-weight:400;border-radius:6px 6px 6px 6px;padding:12px 36px 12px 36px;}.elementor-8679 .elementor-element.elementor-element-c18c056{width:auto;max-width:auto;}@media(max-width:1200px){.elementor-8679 .elementor-element.elementor-element-d7362e3{padding:0px 20px 0px 20px;}.elementor-8679 .elementor-element.elementor-element-fae618c.elementor-column > .elementor-widget-wrap{justify-content:flex-start;}}@media(max-width:1024px){.elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon-box-title, .elementor-8679 .elementor-element.elementor-element-81f9748 .elementor-icon-box-title a{font-size:13px;}.elementor-8679 .elementor-element.elementor-element-c18c056 .elementor-button{font-size:14px;}}@media(max-width:767px){.elementor-8679 .elementor-element.elementor-element-d7362e3{padding:0px 10px 0px 10px;}.elementor-8679 .elementor-element.elementor-element-fae618c{width:10%;}.elementor-bc-flex-widget .elementor-8679 .elementor-element.elementor-element-fae618c.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-8679 .elementor-element.elementor-element-fae618c.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-8679 .elementor-element.elementor-element-fae618c > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu--main .elementor-item{padding-left:10px;padding-right:10px;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu--dropdown a{padding-top:8px;padding-bottom:8px;}.elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu--main > .elementor-nav-menu > li > .elementor-nav-menu--dropdown, .elementor-8679 .elementor-element.elementor-element-748d7de .elementor-nav-menu__container.elementor-nav-menu--dropdown{margin-top:1px !important;}.elementor-8679 .elementor-element.elementor-element-a545637{width:90%;}.elementor-8679 .elementor-element.elementor-element-a545637.elementor-column > .elementor-widget-wrap{justify-content:flex-start;}.elementor-bc-flex-widget .elementor-8679 .elementor-element.elementor-element-ed847ba.elementor-column .elementor-widget-wrap{align-items:center;}.elementor-8679 .elementor-element.elementor-element-ed847ba.elementor-column.elementor-element[data-element_type="column"] > .elementor-widget-wrap.elementor-element-populated{align-content:center;align-items:center;}.elementor-8679 .elementor-element.elementor-element-ed847ba.elementor-column > .elementor-widget-wrap{justify-content:space-around;}.elementor-8679 .elementor-element.elementor-element-ed847ba > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:10px;}.elementor-8679 .elementor-element.elementor-element-81f9748 > .elementor-widget-container{margin:0px 5px 0px 0px;}.elementor-8679 .elementor-element.elementor-element-81f9748{align-self:center;}.elementor-8679 .elementor-element.elementor-element-c18c056 .elementor-button{padding:10px 20px 10px 20px;}}@media(min-width:768px){.elementor-8679 .elementor-element.elementor-element-fae618c{width:70%;}.elementor-8679 .elementor-element.elementor-element-a545637{width:29.9%;}}@media(max-width:1200px) and (min-width:768px){.elementor-8679 .elementor-element.elementor-element-fae618c{width:65%;}.elementor-8679 .elementor-element.elementor-element-a545637{width:35%;}}@media(max-width:1024px) and (min-width:768px){.elementor-8679 .elementor-element.elementor-element-fae618c{width:54%;}.elementor-8679 .elementor-element.elementor-element-a545637{width:45%;}}</style><div data-elementor-type="wp-post" data-elementor-id="8679" class="elementor elementor-8679" data-elementor-post-type="elementor-hf"><section class="elementor-section elementor-top-section elementor-element elementor-element-d7362e3 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d7362e3" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fae618c" data-id="fae618c" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-748d7de elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet_extra elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="748d7de" data-element_type="widget" data-settings="{&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i class=\\&quot;fas fa-angle-down\\&quot;&gt;&lt;\\/i&gt;&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default"><div class="elementor-widget-container"><nav aria-label="Menu" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade">' + menu1Html + '</nav><div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n<i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open eicon-menu-bar"></i><i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i></div><nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">' + menu2Html + '</nav></div></div></div></div><div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a545637" data-id="a545637" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><section class="elementor-section elementor-inner-section elementor-element elementor-element-61f0ef5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="61f0ef5" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-ed847ba" data-id="ed847ba" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-81f9748 elementor-position-left elementor-mobile-position-left elementor-widget__width-auto elementor-vertical-align-middle elementor-view-default elementor-vertical-align-top elementor-widget elementor-widget-icon-box" data-id="81f9748" data-element_type="widget" data-widget_type="icon-box.default"><div class="elementor-widget-container"><div class="elementor-icon-box-wrapper"><div class="elementor-icon-box-icon">\n<a href="tel:+357%2025%2028%2017%2053" class="elementor-icon" tabindex="-1" aria-label="+357 25 28 17 53">\n<i aria-hidden="true" class="fas fa-phone-alt"></i>				</a></div><div class="elementor-icon-box-content"><h3 class="elementor-icon-box-title">\n<a href="tel:+357%2025%2028%2017%2053" >\n+357 25 28 17 53						</a></h3></div></div></div></div><div class="elementor-element elementor-element-c18c056 elementor-align-center elementor-widget__width-auto elementor-widget elementor-widget-button" data-id="c18c056" data-element_type="widget" data-widget_type="button.default"><div class="elementor-widget-container"><div class="elementor-button-wrapper">\n<a class="elementor-button elementor-button-link elementor-size-sm" href="/glamping-resort-cyprus">\n<span class="elementor-button-content-wrapper">\n<span class="elementor-button-text">Book Now</span>\n</span>\n</a></div></div></div></div></div></div></section></div></div></div></section></div></header>';
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<script>\n  function updateActiveNav() {\n    const currentPath = (window.location.pathname || '').replace(/\\/+$/, '') || '/';\n    const menuLinks = document.querySelectorAll('#masthead .elementor-nav-menu a');\n    menuLinks.forEach((link) => {\n      const href = link.getAttribute('href');\n      if (!href) return;\n      const linkPath = href.replace(/\\/+$/, '') || '/';\n      const li = link.closest('li');\n      if (linkPath === currentPath) {\n        link.classList.add('elementor-item-active');\n        link.setAttribute('aria-current', 'page');\n        if (li) {\n          li.classList.add('current-menu-item', 'current_page_item');\n        }\n      } else {\n        link.classList.remove('elementor-item-active');\n        link.removeAttribute('aria-current');\n        if (li) {\n          li.classList.remove('current-menu-item', 'current_page_item');\n        }\n      }\n    });\n  }\n\n  function setupMobileMenu() {\n    const toggles = document.querySelectorAll('.elementor-menu-toggle');\n    toggles.forEach((toggle) => {\n      if (toggle.dataset.menuAttached) return;\n      toggle.dataset.menuAttached = 'true';\n\n      toggle.addEventListener('click', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        \n        const navContainer = toggle.closest('.elementor-widget-nav-menu') || document;\n        const dropdown = navContainer.querySelector('.elementor-nav-menu--dropdown');\n        const isClosed = !toggle.classList.contains('elementor-active');\n\n        if (isClosed) {\n          toggle.classList.add('elementor-active');\n          toggle.setAttribute('aria-expanded', 'true');\n          if (dropdown) {\n            const masthead = document.querySelector('#masthead');\n            const mastheadBottom = masthead ? masthead.getBoundingClientRect().bottom : 70;\n            dropdown.style.top = Math.max(0, mastheadBottom) + 'px';\n            dropdown.classList.add('elementor-active');\n            dropdown.style.display = 'block';\n            dropdown.setAttribute('aria-hidden', 'false');\n          }\n          // Lock scroll\n          document.documentElement.classList.add('menu-open');\n          document.body.classList.add('menu-open');\n        } else {\n          toggle.classList.remove('elementor-active');\n          toggle.setAttribute('aria-expanded', 'false');\n          if (dropdown) {\n            dropdown.classList.remove('elementor-active');\n            dropdown.style.display = 'none';\n            dropdown.setAttribute('aria-hidden', 'true');\n          }\n          // Unlock scroll\n          document.documentElement.classList.remove('menu-open');\n          document.body.classList.remove('menu-open');\n        }\n      });\n    });\n\n    // Close when clicking outside\n    document.addEventListener('click', (e) => {\n      if (!e.target.closest('#masthead') && !e.target.closest('.elementor-nav-menu--dropdown')) {\n        document.querySelectorAll('.elementor-menu-toggle.elementor-active').forEach(t => {\n          t.classList.remove('elementor-active');\n          t.setAttribute('aria-expanded', 'false');\n        });\n        document.querySelectorAll('.elementor-nav-menu--dropdown.elementor-active').forEach(d => {\n          d.classList.remove('elementor-active');\n          d.style.display = 'none';\n          d.setAttribute('aria-hidden', 'true');\n        });\n        // Unlock scroll\n        document.documentElement.classList.remove('menu-open');\n        document.body.classList.remove('menu-open');\n      }\n    });\n\n    // Close when clicking any dropdown menu link\n    const links = document.querySelectorAll('.elementor-nav-menu--dropdown a');\n    links.forEach(link => {\n      link.addEventListener('click', () => {\n        document.querySelectorAll('.elementor-menu-toggle').forEach(t => {\n          t.classList.remove('elementor-active');\n          t.setAttribute('aria-expanded', 'false');\n        });\n        document.querySelectorAll('.elementor-nav-menu--dropdown').forEach(d => {\n          d.classList.remove('elementor-active');\n          d.style.display = 'none';\n          d.setAttribute('aria-hidden', 'true');\n        });\n        // Unlock scroll\n        document.documentElement.classList.remove('menu-open');\n        document.body.classList.remove('menu-open');\n      });\n    });\n  }\n\n  function initHeader() {\n    updateActiveNav();\n    setupMobileMenu();\n  }\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initHeader);\n  } else {\n    initHeader();\n  }\n  window.addEventListener('load', initHeader);\n  window.addEventListener('resize', setupMobileMenu);\n<\/script>"], ["", "<script>\n  function updateActiveNav() {\n    const currentPath = (window.location.pathname || '').replace(/\\\\/+$/, '') || '/';\n    const menuLinks = document.querySelectorAll('#masthead .elementor-nav-menu a');\n    menuLinks.forEach((link) => {\n      const href = link.getAttribute('href');\n      if (!href) return;\n      const linkPath = href.replace(/\\\\/+$/, '') || '/';\n      const li = link.closest('li');\n      if (linkPath === currentPath) {\n        link.classList.add('elementor-item-active');\n        link.setAttribute('aria-current', 'page');\n        if (li) {\n          li.classList.add('current-menu-item', 'current_page_item');\n        }\n      } else {\n        link.classList.remove('elementor-item-active');\n        link.removeAttribute('aria-current');\n        if (li) {\n          li.classList.remove('current-menu-item', 'current_page_item');\n        }\n      }\n    });\n  }\n\n  function setupMobileMenu() {\n    const toggles = document.querySelectorAll('.elementor-menu-toggle');\n    toggles.forEach((toggle) => {\n      if (toggle.dataset.menuAttached) return;\n      toggle.dataset.menuAttached = 'true';\n\n      toggle.addEventListener('click', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        \n        const navContainer = toggle.closest('.elementor-widget-nav-menu') || document;\n        const dropdown = navContainer.querySelector('.elementor-nav-menu--dropdown');\n        const isClosed = !toggle.classList.contains('elementor-active');\n\n        if (isClosed) {\n          toggle.classList.add('elementor-active');\n          toggle.setAttribute('aria-expanded', 'true');\n          if (dropdown) {\n            const masthead = document.querySelector('#masthead');\n            const mastheadBottom = masthead ? masthead.getBoundingClientRect().bottom : 70;\n            dropdown.style.top = Math.max(0, mastheadBottom) + 'px';\n            dropdown.classList.add('elementor-active');\n            dropdown.style.display = 'block';\n            dropdown.setAttribute('aria-hidden', 'false');\n          }\n          // Lock scroll\n          document.documentElement.classList.add('menu-open');\n          document.body.classList.add('menu-open');\n        } else {\n          toggle.classList.remove('elementor-active');\n          toggle.setAttribute('aria-expanded', 'false');\n          if (dropdown) {\n            dropdown.classList.remove('elementor-active');\n            dropdown.style.display = 'none';\n            dropdown.setAttribute('aria-hidden', 'true');\n          }\n          // Unlock scroll\n          document.documentElement.classList.remove('menu-open');\n          document.body.classList.remove('menu-open');\n        }\n      });\n    });\n\n    // Close when clicking outside\n    document.addEventListener('click', (e) => {\n      if (!e.target.closest('#masthead') && !e.target.closest('.elementor-nav-menu--dropdown')) {\n        document.querySelectorAll('.elementor-menu-toggle.elementor-active').forEach(t => {\n          t.classList.remove('elementor-active');\n          t.setAttribute('aria-expanded', 'false');\n        });\n        document.querySelectorAll('.elementor-nav-menu--dropdown.elementor-active').forEach(d => {\n          d.classList.remove('elementor-active');\n          d.style.display = 'none';\n          d.setAttribute('aria-hidden', 'true');\n        });\n        // Unlock scroll\n        document.documentElement.classList.remove('menu-open');\n        document.body.classList.remove('menu-open');\n      }\n    });\n\n    // Close when clicking any dropdown menu link\n    const links = document.querySelectorAll('.elementor-nav-menu--dropdown a');\n    links.forEach(link => {\n      link.addEventListener('click', () => {\n        document.querySelectorAll('.elementor-menu-toggle').forEach(t => {\n          t.classList.remove('elementor-active');\n          t.setAttribute('aria-expanded', 'false');\n        });\n        document.querySelectorAll('.elementor-nav-menu--dropdown').forEach(d => {\n          d.classList.remove('elementor-active');\n          d.style.display = 'none';\n          d.setAttribute('aria-hidden', 'true');\n        });\n        // Unlock scroll\n        document.documentElement.classList.remove('menu-open');\n        document.body.classList.remove('menu-open');\n      });\n    });\n  }\n\n  function initHeader() {\n    updateActiveNav();\n    setupMobileMenu();\n  }\n\n  if (document.readyState === 'loading') {\n    document.addEventListener('DOMContentLoaded', initHeader);\n  } else {\n    initHeader();\n  }\n  window.addEventListener('load', initHeader);\n  window.addEventListener('resize', setupMobileMenu);\n<\/script>"])), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(headerRaw)}` }));
}, "P:/Astro/new-migration/output/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerRawOriginal = `<footer itemtype="https://schema.org/WPFooter" itemscope="itemscope" id="colophon" role="contentinfo"><div class='footer-width-fixer'><style>.elementor-9623 .elementor-element.elementor-element-118df7b > .elementor-container{max-width:1170px;}.elementor-9623 .elementor-element.elementor-element-118df7b{margin-top:40px;margin-bottom:0px;}.elementor-9623 .elementor-element.elementor-element-636afb7{z-index:2;}.elementor-9623 .elementor-element.elementor-element-48e72db:not(.elementor-motion-effects-element-type-background) > .elementor-widget-wrap, .elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-widget-wrap > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#1A2C1D;}.elementor-9623 .elementor-element.elementor-element-48e72db.elementor-column > .elementor-widget-wrap{justify-content:center;}.elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-element-populated, .elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-element-populated > .elementor-background-overlay, .elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-background-slideshow{border-radius:28px 28px 28px 28px;}.elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-element-populated{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;padding:60px 20px 40px 20px;}.elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-element-populated > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-widget-heading .elementor-heading-title{color:var( --e-global-color-primary );}.elementor-9623 .elementor-element.elementor-element-60c859c{width:100%;max-width:100%;text-align:center;}.elementor-9623 .elementor-element.elementor-element-60c859c > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-60c859c .elementor-heading-title{font-family:"Poppins", Sans-serif !important;font-size:38px;font-weight:700;text-transform:none;line-height:48px;color:#FFFFFF;}.elementor-widget-text-editor{color:var( --e-global-color-text );}.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:var( --e-global-color-primary );}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap, .elementor-widget-text-editor.elementor-drop-cap-view-default .elementor-drop-cap{color:var( --e-global-color-primary );border-color:var( --e-global-color-primary );}.elementor-9623 .elementor-element.elementor-element-eb5c133{width:100%;max-width:100%;text-align:center;color:#FFFFFF;font-family:"Poppins", Sans-serif !important;font-size:18px;}.elementor-9623 .elementor-element.elementor-element-eb5c133 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-widget-form .elementor-field-group > label, .elementor-widget-form .elementor-field-subgroup label{color:var( --e-global-color-text );}.elementor-widget-form .elementor-field-type-html{color:var( --e-global-color-text );}.elementor-widget-form .elementor-field-group .elementor-field{color:var( --e-global-color-text );}.elementor-widget-form .e-form__buttons__wrapper__button-next{background-color:var( --e-global-color-accent );}.elementor-widget-form .elementor-button[type="submit"]{background-color:var( --e-global-color-accent );}.elementor-widget-form .e-form__buttons__wrapper__button-previous{background-color:var( --e-global-color-accent );}.elementor-widget-form{--e-form-steps-indicator-inactive-primary-color:var( --e-global-color-text );--e-form-steps-indicator-active-primary-color:var( --e-global-color-accent );--e-form-steps-indicator-completed-primary-color:var( --e-global-color-accent );--e-form-steps-indicator-progress-color:var( --e-global-color-accent );--e-form-steps-indicator-progress-background-color:var( --e-global-color-text );--e-form-steps-indicator-progress-meter-color:var( --e-global-color-text );}.elementor-9623 .elementor-element.elementor-element-c74e582{width:var( --container-widget-width, 50% );max-width:50%;--container-widget-width:50%;--container-widget-flex-grow:0;--e-form-steps-indicators-spacing:20px;--e-form-steps-indicator-padding:30px;--e-form-steps-indicator-inactive-secondary-color:#ffffff;--e-form-steps-indicator-active-secondary-color:#ffffff;--e-form-steps-indicator-completed-secondary-color:#ffffff;--e-form-steps-divider-width:1px;--e-form-steps-divider-gap:10px;}.elementor-9623 .elementor-element.elementor-element-c74e582 > .elementor-widget-container{padding:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group{padding-right:calc( 10px/2 );padding-left:calc( 10px/2 );margin-bottom:10px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-form-fields-wrapper{margin-left:calc( -10px/2 );margin-right:calc( -10px/2 );margin-bottom:-10px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group.recaptcha_v3-bottomleft, .elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group.recaptcha_v3-bottomright{margin-bottom:0;}body.rtl .elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-labels-inline .elementor-field-group > label{padding-left:0px;}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-labels-inline .elementor-field-group > label{padding-right:0px;}body .elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-labels-above .elementor-field-group > label{padding-bottom:0px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-type-html{padding-bottom:0px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper){border-color:#39483C;border-radius:6px 0px 0px 7px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group .elementor-select-wrapper select{border-color:#39483C;border-radius:6px 0px 0px 7px;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-field-group .elementor-select-wrapper::before{color:#39483C;}.elementor-9623 .elementor-element.elementor-element-c74e582 .e-form__buttons__wrapper__button-next{background-color:#D57800;color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-button[type="submit"]{background-color:#D57800;color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-button[type="submit"] svg *{fill:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .e-form__buttons__wrapper__button-previous{color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .e-form__buttons__wrapper__button-next:hover{color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-button[type="submit"]:hover{color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-button[type="submit"]:hover svg *{fill:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .e-form__buttons__wrapper__button-previous:hover{color:#ffffff;}.elementor-9623 .elementor-element.elementor-element-c74e582 .elementor-button{border-radius:6px 6px 6px 6px;padding:20px 20px 20px 20px;}.elementor-widget-fluent-form-widget .ff-el-progress-status{color:var( --e-global-color-primary );}.elementor-widget-fluent-form-widget .ff-el-progress-bar span{color:var( --e-global-color-primary );}.elementor-9623 .elementor-element.elementor-element-4ce4610 .fluentform-widget-wrapper{width:523px;padding:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-4ce4610 .fluentform-widget-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), .elementor-9623 .elementor-element.elementor-element-4ce4610 .fluentform-widget-wrapper .ff-el-group select{height:41px;}.elementor-9623 .elementor-element.elementor-element-4ce4610 .fluentform-widget-wrapper .ff-el-group .ff-btn-submit{background-color:#D57800 !important;color:#ffffff !important;margin-top:0px;}.elementor-9623 .elementor-element.elementor-element-973bb09:not(.elementor-motion-effects-element-type-background), .elementor-9623 .elementor-element.elementor-element-973bb09 > .elementor-motion-effects-container > .elementor-motion-effects-layer{background-color:#131614;}.elementor-9623 .elementor-element.elementor-element-973bb09{transition:background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;margin-top:-180px;margin-bottom:0px;padding:200px 0px 30px 0px;}.elementor-9623 .elementor-element.elementor-element-973bb09 > .elementor-background-overlay{transition:background 0.3s, border-radius 0.3s, opacity 0.3s;}.elementor-9623 .elementor-element.elementor-element-1c6ca5b > .elementor-container{max-width:1170px;}.elementor-widget-image .widget-image-caption{color:var( --e-global-color-text );}.elementor-9623 .elementor-element.elementor-element-5f53271{text-align:left;}.elementor-9623 .elementor-element.elementor-element-1c9fd53{width:var( --container-widget-width, 85% );max-width:85%;--container-widget-width:85%;--container-widget-flex-grow:0;text-align:left;color:#FFFFFF;font-family:"Poppins", Sans-serif !important;font-size:14px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-1c9fd53 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-062f2c5{width:auto;max-width:auto;}.elementor-9623 .elementor-element.elementor-element-062f2c5 > .elementor-widget-container{margin:0px 20px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-062f2c5 img{border-style:none;}.elementor-9623 .elementor-element.elementor-element-db8bde7{width:auto;max-width:auto;}.elementor-9623 .elementor-element.elementor-element-db8bde7 img{border-style:none;}.elementor-9623 .elementor-element.elementor-element-ba337dd .elementor-heading-title{font-family:"Poppins", Sans-serif !important;font-size:16px;font-weight:500;text-transform:capitalize;line-height:16px;color:#D57800;}.elementor-widget-icon-list .elementor-icon-list-item:not(:last-child):after{border-color:var( --e-global-color-text );}.elementor-widget-icon-list .elementor-icon-list-icon i{color:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-icon svg{fill:var( --e-global-color-primary );}.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:var( --e-global-color-secondary );}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(10px/2);margin-left:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-10px/2);margin-left:calc(-10px/2);}body.rtl .elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-10px/2);}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-10px/2);}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-9623 .elementor-element.elementor-element-0f4ce3f{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-icon{transform:rotate(0deg);}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-item > .elementor-icon-list-text, .elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif  !important;font-size:14px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-0f4ce3f .elementor-icon-list-text{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-9a2aaeb > .elementor-element-populated{margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;}.elementor-9623 .elementor-element.elementor-element-e7f46e8 .elementor-heading-title{font-family:"Poppins", Sans-serif !important;font-size:16px;font-weight:500;text-transform:capitalize;line-height:16px;color:#D57800;}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(10px/2);margin-left:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-10px/2);margin-left:calc(-10px/2);}body.rtl .elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-10px/2);}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-10px/2);}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-9623 .elementor-element.elementor-element-eade68a{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-icon{transform:rotate(0deg);}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-item > .elementor-icon-list-text, .elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif  !important;font-size:14px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-eade68a .elementor-icon-list-text{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-15b4962 .elementor-heading-title{font-family:"Poppins", Sans-serif !important;font-size:16px;font-weight:500;text-transform:capitalize;line-height:16px;color:#D57800;}.elementor-9623 .elementor-element.elementor-element-7f8bae5{--grid-template-columns:repeat(0, auto);--icon-size:23px;--grid-column-gap:5px;--grid-row-gap:0px;}.elementor-9623 .elementor-element.elementor-element-7f8bae5 .elementor-widget-container{text-align:left;}.elementor-9623 .elementor-element.elementor-element-7f8bae5 .elementor-social-icon{background-color:#1F2220;border-style:solid;border-width:1px 1px 1px 1px;border-color:#353836;}.elementor-9623 .elementor-element.elementor-element-7f8bae5 .elementor-social-icon i{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-7f8bae5 .elementor-social-icon svg{fill:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-7f8bae5 .elementor-icon{border-radius:50px 50px 50px 50px;}.elementor-9623 .elementor-element.elementor-element-d4b6999 > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute){margin-bottom:0px;}.elementor-9623 .elementor-element.elementor-element-8bf8b22 > .elementor-widget-container{margin:0px 0px 20px 0px;}.elementor-9623 .elementor-element.elementor-element-8bf8b22 .elementor-heading-title{font-family:"Poppins", Sans-serif !important;font-size:16px;font-weight:500;text-transform:capitalize;line-height:16px;color:#D57800;}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(10px/2);margin-left:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-10px/2);margin-left:calc(-10px/2);}body.rtl .elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-10px/2);}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-10px/2);}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-9623 .elementor-element.elementor-element-97d34a0{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-icon{transform:rotate(0deg);}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif !important;font-size:16px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-97d34a0 .elementor-icon-list-text{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-da853d6{width:var( --container-widget-width, 85% );max-width:85%;--container-widget-width:85%;--container-widget-flex-grow:0;text-align:left;color:#FFFFFF;font-family:"Poppins", Sans-serif !important;font-size:14px;font-weight:300;line-height:24px;}.elementor-9623 .elementor-element.elementor-element-da853d6 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-da853d6 a:not(:hover){color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(10px/2);margin-left:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-10px/2);margin-left:calc(-10px/2);}body.rtl .elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-10px/2);}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-10px/2);}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-9623 .elementor-element.elementor-element-dc6db98{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-icon{transform:rotate(0deg);}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-item > .elementor-icon-list-text, .elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif !important;font-size:17px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-dc6db98 .elementor-icon-list-text{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-27c6c9d{width:var( --container-widget-width, 85% );max-width:85%;--container-widget-width:85%;--container-widget-flex-grow:0;text-align:left;color:#FFFFFF;font-family:"Poppins", Sans-serif !important;font-size:14px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-27c6c9d > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb > .elementor-widget-container{margin:20px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child){padding-bottom:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child){margin-top:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:calc(10px/2);margin-left:calc(10px/2);}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items.elementor-inline-items{margin-right:calc(-10px/2);margin-left:calc(-10px/2);}body.rtl .elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{left:calc(-10px/2);}body:not(.rtl) .elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{right:calc(-10px/2);}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-icon i{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-icon svg{transition:fill 0.3s;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb{--e-icon-list-icon-size:14px;--icon-vertical-offset:0px;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-icon{transform:rotate(0deg);}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-item > .elementor-icon-list-text, .elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-item > a{font-family:"Poppins", Sans-serif !important;font-size:17px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-items .elementor-icon-list-item .elementor-icon-list-text{color:#FFFFFF;}.elementor-9623 .elementor-element.elementor-element-9c6bcbb .elementor-icon-list-text{transition:color 0.3s;}.elementor-9623 .elementor-element.elementor-element-fff07b0{width:var( --container-widget-width, 85% );max-width:85%;--container-widget-width:85%;--container-widget-flex-grow:0;text-align:left;color:#FFFFFF;font-family:"Poppins", Sans-serif !important;font-size:14px;font-weight:300;}.elementor-9623 .elementor-element.elementor-element-fff07b0 > .elementor-widget-container{margin:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-19bea5a > .elementor-container{max-width:1170px;}.elementor-9623 .elementor-element.elementor-element-19bea5a{margin-top:20px;margin-bottom:0px;padding:0px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-4b3b1c0 > .elementor-element-populated{border-style:solid;border-width:1px 0px 0px 0px;border-color:#2B2D2B;margin:0px 0px 0px 0px;--e-column-margin-right:0px;--e-column-margin-left:0px;padding:20px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-050b9d3{text-align:center;color:#FFFFFF;}@media(max-width:1200px){.elementor-9623 .elementor-element.elementor-element-062f2c5 > .elementor-widget-container{margin:0px 0px 10px 0px;}}@media(min-width:768px){.elementor-9623 .elementor-element.elementor-element-f54ebae{width:34.247%;}.elementor-9623 .elementor-element.elementor-element-f347764{width:13.954%;}.elementor-9623 .elementor-element.elementor-element-9a2aaeb{width:18.283%;}.elementor-9623 .elementor-element.elementor-element-d4b6999{width:33.441%;}}@media(max-width:1024px) and (min-width:768px){.elementor-9623 .elementor-element.elementor-element-f54ebae{width:50%;}.elementor-9623 .elementor-element.elementor-element-f347764{width:50%;}.elementor-9623 .elementor-element.elementor-element-9a2aaeb{width:50%;}.elementor-9623 .elementor-element.elementor-element-d4b6999{width:50%;}}@media(max-width:1024px){.elementor-9623 .elementor-element.elementor-element-60c859c .elementor-heading-title{font-size:38px;line-height:48px;}.elementor-9623 .elementor-element.elementor-element-eb5c133{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-eb5c133 > .elementor-widget-container{margin:12px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-1c9fd53{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-1c9fd53 > .elementor-widget-container{margin:12px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-da853d6{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-da853d6 > .elementor-widget-container{margin:12px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-27c6c9d{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-27c6c9d > .elementor-widget-container{margin:12px 0px 0px 0px;}.elementor-9623 .elementor-element.elementor-element-fff07b0{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-fff07b0 > .elementor-widget-container{margin:12px 0px 0px 0px;}}@media(max-width:767px){.elementor-9623 .elementor-element.elementor-element-48e72db > .elementor-element-populated{padding:29px 29px 29px 29px;}.elementor-9623 .elementor-element.elementor-element-60c859c{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-60c859c .elementor-heading-title{font-size:28px;line-height:38px;}.elementor-9623 .elementor-element.elementor-element-eb5c133{font-size:16px;line-height:26px;}.elementor-9623 .elementor-element.elementor-element-c74e582{width:100%;max-width:100%;}.elementor-9623 .elementor-element.elementor-element-4ce4610 .fluentform-widget-wrapper{width:253px;}.elementor-9623 .elementor-element.elementor-element-1c9fd53{font-size:16px;line-height:26px;}.elementor-9623 .elementor-element.elementor-element-062f2c5 > .elementor-widget-container{margin:0px 0px 10px 0px;}.elementor-9623 .elementor-element.elementor-element-da853d6{font-size:16px;line-height:26px;}.elementor-9623 .elementor-element.elementor-element-27c6c9d{font-size:16px;line-height:26px;}.elementor-9623 .elementor-element.elementor-element-fff07b0{font-size:16px;line-height:26px;}}/* Start custom CSS for heading, class: .elementor-element-60c859c */.discover-title-after{
   position:relative;
}
.discover-title-after:after{
position: absolute;
    content: url('/images/Mask-group-2025-03-17T093718.937.png');
    bottom: -15px;
    right: 0px;
    margin: auto;
    width: 100%;
    height: 100%;
}/* End custom CSS */</style><div data-elementor-type="wp-post" data-elementor-id="9623" class="elementor elementor-9623" data-elementor-post-type="elementor-hf"><section class="elementor-section elementor-top-section elementor-element elementor-element-118df7b footer-section elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="118df7b" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-636afb7" data-id="636afb7" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><section class="elementor-section elementor-inner-section elementor-element elementor-element-9c4e3dc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9c4e3dc" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-48e72db" data-id="48e72db" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-60c859c elementor-widget__width-inherit elementor-widget-mobile__width-inherit  elementor-widget elementor-widget-heading" data-id="60c859c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="heading.default"><div class="elementor-widget-container"><h1 class="elementor-heading-title elementor-size-default" data-aos="fade-up">Be the <span class="title-color -after discover-title-after">First to Know!</span></h1></div></div><div class="elementor-element elementor-element-eb5c133 elementor-widget__width-inherit elementor-widget-tablet__width-inherit  elementor-widget elementor-widget-text-editor" data-id="eb5c133" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default"><div class="elementor-widget-container" data-aos="fade-up"><p>Subscribe for exclusive offers and last-minute deals.</p></div></div><div class="elementor-element elementor-element-c74e582 elementor-widget__width-initial elementor-mobile-button-align-center elementor-widget-mobile__width-inherit elementor-hidden-desktop elementor-hidden-laptop elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="c74e582" data-element_type="widget" data-settings="{&quot;button_width&quot;:&quot;30&quot;,&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width_mobile&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default"><div class="elementor-widget-container"><form onsubmit="return false;" class="elementor-form" method="post" name="New Form">
<input type="hidden" name="post_id" value="9623"/>
<input type="hidden" name="form_id" value="c74e582"/>
<input type="hidden" name="referer_title" value="Back to Nature: Your Glamping Retreat in Cyprus" /><input type="hidden" name="queried_id" value="10200"/><div class="elementor-form-fields-wrapper elementor-labels-above"><div class="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-70 elementor-field-required">
<input size="1" type="email" name="form_fields[email]" id="form-field-email" class="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required="required"></div><div class="elementor-field-group elementor-column elementor-field-type-submit elementor-col-30 e-form__buttons elementor-sm-100">
<button class="elementor-button elementor-size-md" type="submit">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-text">Subscribe</span>
</span>
</button></div></div></form></div></div><div class="elementor-element elementor-element-4ce4610 fluent-form-widget-step-header-yes fluent-form-widget-step-progressbar-yes fluentform-widget-submit-button-custom elementor-widget elementor-widget-fluent-form-widget" data-id="4ce4610" data-element_type="widget" data-widget_type="fluent-form-widget.default"><div class="elementor-widget-container"><div class="fluentform-widget-wrapper fluentform-widget-align-center"><div class='fluentform ff-default fluentform_wrapper_2 ffs_default_wrap'><form onsubmit="return false;" data-form_id="2" id="fluentform_2" class="frm-fluent-form fluent_form_2 ff-el-form-top ff_form_instance_2_1 ff-form-loading ffs_default" data-form_instance="ff_form_instance_2_1" method="POST" ><fieldset  style="border: none!important;margin: 0!important;padding: 0!important;background-color: transparent!important;box-shadow: none!important;outline: none!important; min-inline-size: 100%;"><legend class="ff_screen_reader_title" style="display: block; margin: 0!important;padding: 0!important;height: 0!important;text-indent: -999999px;width: 0!important;overflow:hidden;">Subscription Form</legend>        <span style="display: none !important;"><input type="checkbox"
name="item__2__fluent_checkme_"
value="1" style="display:none !important;" tabindex="-1" aria-hidden="true"></span>
<input type='hidden' name='__fluent_form_embded_post_id' value='10200' /><input type="hidden" id="_fluentform_2_fluentformnonce" name="_fluentform_2_fluentformnonce" value="18686a09a1" /><input type="hidden" name="_wp_http_referer" value="/" /><div data-name="ff_cn_id_1"  class='ff-t-container ff-column-container ff_columns_total_2  '><div class='ff-t-cell ff-t-column-1' style='flex-basis: 73.95%;'><div class='ff-el-group'><div class='ff-el-input--content'><input type="email" name="email" id="ff_2_email" class="ff-el-form-control" placeholder="Your Email Address" data-name="email"  aria-invalid="false" aria-required=true></div></div></div><div class='ff-t-cell ff-t-column-2' style='flex-basis: 26.05%;'><div class='ff-el-group ff-text-left ff_submit_btn_wrapper ff_submit_btn_wrapper_custom'><button class="ff-btn ff-btn-submit ff-btn-md ff_btn_style wpf_has_custom_css" type="submit" name="custom_submit_button-2_1" data-name="custom_submit_button-2_1" >Subscribe</button><style>form.fluent_form_2 .wpf_has_custom_css.ff-btn-submit { background-color:rgba(213, 120, 0, 1);color:#ffffff;min-width:100%; }form.fluent_form_2 .wpf_has_custom_css.ff-btn-submit:hover { background-color:#ffffff;border-color:#1a7efb;color:#1a7efb;min-width:100%; }</style></div></div></div></fieldset></form><div id='fluentform_2_errors' class='ff-errors-in-stack ff_form_instance_2_1 ff-form-loading_errors ff_form_instance_2_1_errors'></div></div> <script type="litespeed/javascript">window.fluent_form_ff_form_instance_2_1={"id":"2","settings":{"layout":{"labelPlacement":"top","helpMessagePlacement":"with_label","errorMessagePlacement":"inline","asteriskPlacement":"asterisk-right"},"restrictions":{"denyEmptySubmission":{"enabled":!1}}},"form_instance":"ff_form_instance_2_1","form_id_selector":"fluentform_2","rules":{"email":{"required":{"value":!0,"message":"This field is required","global":!1,"global_message":"This field is required"},"email":{"value":!0,"message":"This field must contain a valid email","global":!1,"global_message":"This field must contain a valid email"}}},"debounce_time":300}<\/script> </div></div></div></div></div></div></section></div></div></div></section><section class="elementor-section elementor-top-section elementor-element elementor-element-973bb09 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="973bb09" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8566f6b" data-id="8566f6b" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><section class="elementor-section elementor-inner-section elementor-element elementor-element-1c6ca5b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1c6ca5b" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f54ebae" data-id="f54ebae" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-5f53271 elementor-widget elementor-widget-image" data-id="5f53271" data-element_type="widget" data-widget_type="image.default"><div class="elementor-widget-container">
<a href="/" aria-label="Back to Nature Home"><img src="/images/Back-to-Nature-Final-Logo-1-1.png" width="110" height="110" data-src="/wp-content/uploads/2025/01/Back-to-Nature-Final-Logo-1-1.png" class="attachment-large size-large wp-image-9560" alt="Back to Nature" /></a></div></div><div class="elementor-element elementor-element-1c9fd53 elementor-widget__width-initial elementor-widget-tablet__width-inherit  elementor-widget elementor-widget-text-editor" data-id="1c9fd53" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default"><div class="elementor-widget-container" data-aos="fade-up"><p>Discover your perfect getaway with our cozy cabins, nestled in the heart of nature. Enjoy premium amenities, family-friendly spaces, and a serene escape like no other.</p></div></div><div class="elementor-element elementor-element-062f2c5 elementor-widget__width-auto  elementor-widget elementor-widget-image" data-aos="fade-up" data-id="062f2c5" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="image.default"><div class="elementor-widget-container">
<img src="/images/Group-1000007502.png" width="157" height="66" data-src="/wp-content/uploads/2025/01/Group-1000007502.png" class="attachment-large size-large wp-image-9676" alt="" /></div></div><div class="elementor-element elementor-element-db8bde7 elementor-widget__width-auto  elementor-widget elementor-widget-image" data-aos="fade-up" data-id="db8bde7" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="image.default"><div class="elementor-widget-container">
<img src="/images/Group-1000007503-3.png" width="158" height="66" data-src="/wp-content/uploads/2025/01/Group-1000007503-3.png" class="attachment-large size-large wp-image-10867" alt="" /></div></div></div></div><div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f347764" data-id="f347764" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-ba337dd elementor-widget elementor-widget-heading" data-id="ba337dd" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default">Quick Links</h2></div></div><div class="elementor-element elementor-element-0f4ce3f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0f4ce3f" data-element_type="widget" data-widget_type="icon-list.default"><div class="elementor-widget-container"><ul class="elementor-icon-list-items"><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Home</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Activities</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Events</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Accommodations</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">About us</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Blog</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Our Location</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Contact</span></li></ul></div></div></div></div><div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-9a2aaeb" data-id="9a2aaeb" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-e7f46e8 elementor-widget elementor-widget-heading" data-id="e7f46e8" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default">Help</h2></div></div><div class="elementor-element elementor-element-eade68a elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="eade68a" data-element_type="widget" data-widget_type="icon-list.default"><div class="elementor-widget-container"><ul class="elementor-icon-list-items"><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Privacy Policy</span></li><li class="elementor-icon-list-item">
<span class="elementor-icon-list-text">Terms & Conditions</span></li><li class="elementor-icon-list-item">
<span  contact" class="elementor-icon-list-text">Help Center</span></li></ul></div></div><div class="elementor-element elementor-element-15b4962 elementor-widget elementor-widget-heading" data-id="15b4962" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default">Follow Us</h2></div></div><div class="elementor-element elementor-element-7f8bae5 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="7f8bae5" data-element_type="widget" data-widget_type="social-icons.default"><div class="elementor-widget-container"><div class="elementor-social-icons-wrapper elementor-grid">
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-f433cb9" href="https://www.facebook.com/backtonature.cy" target="_blank">
<span class="elementor-screen-only">Facebook</span>
<i class="fab fa-facebook"></i>					</a>
</span>
<span class="elementor-grid-item">
<a class="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-14a51f4" href="https://www.instagram.com/back_to_nature_cy/" target="_blank">
<span class="elementor-screen-only">Instagram</span>
<i class="fab fa-instagram"></i>					</a>
</span></div></div></div></div></div><div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d4b6999" data-id="d4b6999" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-8bf8b22 elementor-widget elementor-widget-heading" data-id="8bf8b22" data-element_type="widget" data-widget_type="heading.default"><div class="elementor-widget-container"><h2 class="elementor-heading-title elementor-size-default">Contact Information</h2></div></div><div class="elementor-element elementor-element-97d34a0 elementor-icon-list--layout-traditional elementor-list-item-link-full_width  elementor-widget elementor-widget-icon-list" data-id="97d34a0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="icon-list.default"><div class="elementor-widget-container"><ul class="elementor-icon-list-items"><li class="elementor-icon-list-item" data-aos="fade-up">
<span class="elementor-icon-list-text">📍 Address:</span></li></ul></div></div><div class="elementor-element elementor-element-da853d6 elementor-widget__width-initial elementor-widget-tablet__width-inherit  elementor-widget elementor-widget-text-editor" data-aos="fade-up" data-id="da853d6" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default"><div class="elementor-widget-container"><p><a href="https://maps.app.goo.gl/mHq2nsPrsqVpAjXg6">F129, Arakapas, 4563, Cyprus</a></p></div></div><div class="elementor-element elementor-element-dc6db98 elementor-icon-list--layout-traditional elementor-list-item-link-full_width  elementor-widget elementor-widget-icon-list" data-id="dc6db98" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="icon-list.default"><div class="elementor-widget-container"><ul class="elementor-icon-list-items"><li class="elementor-icon-list-item" data-aos="fade-up">
<span class="elementor-icon-list-text">📞 Phone:</span></li></ul></div></div><div class="elementor-element elementor-element-27c6c9d elementor-widget__width-initial elementor-widget-tablet__width-inherit  elementor-widget elementor-widget-text-editor" data-aos="fade-up" data-id="27c6c9d" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default"><div class="elementor-widget-container"><p><a style="color: #fff;" href="tel:+357 25 28 17 53">+357 25 28 17 53</a></p></div></div><div class="elementor-element elementor-element-9c6bcbb elementor-icon-list--layout-traditional elementor-list-item-link-full_width  elementor-widget elementor-widget-icon-list" data-id="9c6bcbb" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;}" data-widget_type="icon-list.default"><div class="elementor-widget-container"><ul class="elementor-icon-list-items"><li class="elementor-icon-list-item" data-aos="fade-up">
<span class="elementor-icon-list-text">✉️ Email:</span></li></ul></div></div><div class="elementor-element elementor-element-fff07b0 elementor-widget__width-initial elementor-widget-tablet__width-inherit  elementor-widget elementor-widget-text-editor" data-aos="fade-up" data-id="fff07b0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;slideInUp&quot;,&quot;_animation_delay&quot;:300}" data-widget_type="text-editor.default"><div class="elementor-widget-container">
<a style="color: #fff;" href="mailto:hello@backtonature.cy">hello@backtonature.cy</a></div></div></div></div></div></section><section class="elementor-section elementor-inner-section elementor-element elementor-element-19bea5a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="19bea5a" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4b3b1c0" data-id="4b3b1c0" data-element_type="column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-element elementor-element-050b9d3 elementor-widget elementor-widget-text-editor" data-id="050b9d3" data-element_type="widget" data-widget_type="text-editor.default"><div class="elementor-widget-container"><p>Copyright © \${currentYear} Back to Nature All Rights Reserved.</p></div></div></div></div></div></section></div></div></div></section><section class="elementor-section elementor-top-section elementor-element elementor-element-4c97ffd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4c97ffd" data-element_type="section"><div class="elementor-container elementor-column-gap-default"><div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3ebaa3b" data-id="3ebaa3b" data-element_type="column"><div class="elementor-widget-wrap"></div></div></div></section></div></div></footer>`;
  const footerRaw = footerRawOriginal.replace(
    "${currentYear}",
    String(currentYear)
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footerRaw)}` })}`;
}, "P:/Astro/new-migration/output/src/components/Footer.astro", void 0);

function getImg(input, fallback = "/images/cropped-Back-to-Nature-logo.png") {
  if (!input) return fallback;
  if (input.startsWith("http://") || input.startsWith("https://")) {
    if (!input.includes("backtonature.cy")) return input;
  }
  const cleanPath = input.split("?")[0].split("#")[0];
  const parts = cleanPath.split(/[/\\]/);
  const filename = parts[parts.length - 1];
  return filename ? `/images/${filename}` : fallback;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Back to Nature: Your Glamping Retreat in Cyprus",
    description = "Reconnect with serenity at BackToNature. Enjoy glamping in nature with cozy cabins and stunning riverside views. Book your escape now!",
    image = getImg("House-6-Mandarin-thumbnail.webp"),
    canonicalUrl = Astro2.url.href,
    bodyClass
  } = Astro2.props;
  const faviconImg = getImg("cropped-Back-to-Nature-logo-1-32x32.png", "/images/cropped-Back-to-Nature-logo.png");
  const isHome = Astro2.url.pathname === "/" || Astro2.url.pathname === "";
  const isAccommodation = Astro2.url.pathname.includes("/accommodation/");
  const defaultBodyClass = isHome ? "home is-home wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-activland wp-child-theme-activland-child ehf-header ehf-footer ehf-template-activland ehf-stylesheet-activland-child no-wc-breadcrumb elementor-default elementor-template-full-width elementor-kit-8 elementor-page" : isAccommodation ? "wp-singular accommodation-template-default single single-accommodation wp-custom-logo wp-embed-responsive wp-theme-activland wp-child-theme-activland-child ehf-header ehf-footer ehf-template-activland ehf-stylesheet-activland-child no-wc-breadcrumb activland-full-width-content has-post-thumbnail elementor-default elementor-kit-8 elementor-page" : "wp-singular page-template page-template-elementor_header_footer page wp-custom-logo wp-embed-responsive wp-theme-activland wp-child-theme-activland-child ehf-header ehf-footer ehf-template-activland ehf-stylesheet-activland-child no-wc-breadcrumb elementor-default elementor-template-full-width elementor-kit-8 elementor-page";
  const finalBodyClass = bodyClass ? `${defaultBodyClass} ${bodyClass}` : defaultBodyClass;
  return renderTemplate(_a || (_a = __template(['<html lang="en-GB" prefix="og: https://ogp.me/ns#"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><link rel="icon" type="image/png"', '><!-- Open Graph --><meta property="og:locale" content="en_GB"><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="Back To Nature - Events & Glamping Resort"><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Google Fonts: Domine (Headings/Titles) & Poppins (Body/UI) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/elementor-icons/5.23.0/elementor-icons.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css?ver=7.1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css?ver=7.1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css?ver=7.1"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><!-- Complete Live Site CSS Bundle --><link rel="stylesheet" href="/css/bundle.css"><style>
      :root {
        --e-global-typography-primary-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-secondary-font-family: 'Domine', serif !important;
        --e-global-typography-text-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-accent-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-heading_title-font-family: 'Domine', serif !important;
        --e-global-typography-heading_text-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-heading_sub-font-family: 'Poppins', sans-serif !important;
      }
      body {
        --primary: #ff4d00;
        --primary_hover: #e54500;
        --secondary: #5b320d;
        --secondary_hover: #512d0b;
        --text: #666666;
        --accent: #000000;
        --lighter: #999999;
        --border: #E5E5E5;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        color: #494949;
        background-color: #ffffff;
      }
      
      /* Headings, Hero Titles & Highlighted Title Spans (e.g. 'Lost in the Noise?', 'Find Peace in Nature.') */
      h1, h2, h3, h4, h5, h6,
      .elementor-heading-title,
      .elementor-heading-title span,
      .hero-title-after, .book-after, .cabin-after, .discover-title-after, 
      .private-title-after, .review-after, .fun-after, .faq-after, .footer-title-after,
      .activland-title {
        font-family: 'Domine', Georgia, 'Times New Roman', serif !important;
      }
/* .elementor-widget-heading .elementor-heading-title {
  font-family: Poppins, sans-serif !important;
} */
      /* .font-rubik , .font-rubik span{
  font-family:Rubik,
    HelveticaNeue-Light,
    Helvetica Neue Light,
    Helvetica Neue,
    Helvetica,
    Arial,
    Lucida Grande,
    sans-serif !important;
} */
      .font-rubik , .font-rubik span{
  font-family:'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
}
      
      /* Body Text, Paragraphs, Links, Navigation, Forms & Buttons */
      body, p, a, 
      li, input, select, textarea, button, .elementor-button, .premium-bullet-text,
      .elementor-widget-text-editor, .elementor-widget-text-editor p,
      .elementor-icon-box-title, .elementor-icon-box-title a, .elementor-icon-box-description,
      .elementor-image-box-title, .elementor-image-box-description,
      .elementor-tab-title, .elementor-tab-title a, .elementor-tab-content, .elementor-tab-content p,
      .elementor-nav-menu, .elementor-nav-menu a, .elementor-item,
      .elementor-icon-list-item, .elementor-icon-list-text,
      .flatpickr-calendar, .flatpickr-calendar * {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      }

      /* Preserve Icon Fonts */
      .fa, .fas, .far, .fab, .fal, .fad, 
      [class*="fa-"], [class*=" fa-"],
      [class*="eicon-"], [class*=" eicon-"], 
      .elementor-icons, .eicons, [class*="activland-icon"] {
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
      }
      .fab, [class*="fa-facebook"], [class*="fa-instagram"], [class*="fa-twitter"], [class*="fa-youtube"] {
        font-family: "Font Awesome 6 Brands", "Font Awesome 5 Brands", "FontAwesome", sans-serif !important;
      }
      [class*="eicon-"], .eicons {
        font-family: eicons !important;
      }
      .eicon-star:before {
        content: "\\f005" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        color: #FFA800 !important;
        display: inline-block;
      }
      .eicon-menu-bar:before {
        content: "\\f0c9" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        display: inline-block;
      }
      .eicon-close:before {
        content: "\\f00d" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        display: inline-block;
      }
      body.is-home .breadcrumb-wrap {
        display: none !important;
      }
      .breadcrumb-wrap {
        display: block;
      }
      .logocentral img {
        height: 90px;
        width: auto;
      }
      .menu-item a {
        height: max-content;
      }
      .elementor-nav-menu--layout-horizontal .elementor-nav-menu {
        align-items: center;
      }
      .title-color {
        color: #D57800;
      }
      .about-icoin-list .elementor-icon-list-item {
        background: linear-gradient(73deg, #f0f1f0, #fefefe) !important;
        padding: 10px 15px !important;
        border-radius: 4px !important;
      }
      .discover-section .elementor-icon-list-item {
        background: linear-gradient(85deg, #2F3F31, #0d1a1200);
        padding: 10px 15px !important;
        border-radius: 4px !important;
      }
      .elementor-accordion-item {
        background-color: #f6f7f6;
        border: none !important;
        border-radius: 6px;
        padding: 10px 25px;
        margin-bottom: 25px !important;
      }
      .elementor-tab-title.elementor-active {
        border-bottom: 1px solid #e0e3e0;
      }
      .elementor-tab-content p {
        margin-bottom: 0 !important;
      }
      @media (max-width: 1024px) {
        .video-after:after {
          display: none;
        }
        .hero-title-after:after, .book-after:after, .cabin-after:after, .discover-title-after:after, .private-title-after:after, .review-after:after, .fun-after:after, .faq-after:after, .footer-title-after:after {
          display: none;
        }
      }
      .elementor-invisible {
        visibility: visible !important;
        opacity: 1 !important;
      }
      
      /* Header Call Icon Right Rotation */
      .elementor-element-81f9748 .elementor-icon i,
      .elementor-element-81f9748 .elementor-icon-box-icon i,
      .elementor-icon-box-icon i.fa-phone-alt,
      .elementor-icon-box-icon i.fa-phone {
        transform: rotate(90deg) !important;
        -webkit-transform: rotate(90deg) !important;
        display: inline-block !important;
      }
      
      /* --- Vertical Auto-Scrolling Carousel (What our Client Say) --- */
      .premium-adv-carousel__vertical {
        height: 520px !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__container {
        height: 520px !important;
        overflow: hidden !important;
        position: relative !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__inner-container {
        height: 100% !important;
        overflow: hidden !important;
        visibility: visible !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__items {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
        width: 100% !important;
        will-change: transform;
        padding: 10px 0 !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__item-outer-wrapper {
        width: 100% !important;
        flex: 0 0 auto !important;
        max-width: 100% !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__template-wrapper {
        border-radius: 14px !important;
      }

      /* --- Horizontal Auto-Scrolling 3D Photo Wheel Carousel --- */
      .premium-adv-carousel__horizontal {
        width: 100% !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__container {
        width: 100% !important;
        overflow: hidden !important;
        position: relative !important;
        padding: 0 0 20px 0 !important;
        /* mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent); */
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__inner-container {
        width: 100% !important;
        overflow: hidden !important;
        visibility: visible !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__items {
        display: flex !important;
        flex-direction: row !important;
        gap: 10px !important;
        width: max-content !important;
        align-items: center !important;
        will-change: transform;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
        flex: 0 0 520px !important;
        width: 520px !important;
        max-width: 520px !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .premium-adv-carousel__horizontal.main-cstum .premium-adv-carousel__item-outer-wrapper {
        flex: 0 0 300px !important;
        width: 300px !important;
        max-width: 300px !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .premium-adv-carousel__horizontal .premium-adv-carousel__item {
        width: 520px !important;
        max-width: 520px !important;
        margin: 0 !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal.main-cstum .premium-adv-carousel__item {
        width: 300px !important;
        max-width: 300px !important;
        margin: 0 !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__media-wrap {
        width: 100% !important;
        height: 300px !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-image img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-img img,
      .premium-adv-carousel__horizontal img {
        width: 100% !important;
        height: 300px !important;
        object-fit: cover !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
        transition: 0.5s all !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper:hover img {
        transform: translateY(-4px) scale(1.05) !important;
        box-shadow: 0 12px 30px rgba(0,0,0,0.2) !important;
      }

      /* --- Standard Carousel Slider (Homepage & Accommodation Cards) --- */
      .premium-carousel-hidden {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .premium-carousel-wrapper {
        position: relative !important;
        width: 100% !important;
        overflow: hidden !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .premium-carousel-inner {
        display: flex !important;
        width: 100% !important;
        transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important;
        opacity: 1 !important;
      }
      .premium-carousel-template {
        flex: 0 0 100% !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        background: #ffffff !important;
        border-radius: 16px !important;
        padding: 20px !important;
        border: 1px solid #f0f1f0 !important;
      }
      .premium-carousel-nav-arrow-prev, .premium-carousel-nav-arrow-next {
        display: flex !important;
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10 !important;
        cursor: pointer !important;
      }
      .premium-carousel-nav-arrow-prev { left: 10px !important; }
      .premium-carousel-nav-arrow-next { right: 10px !important; }
      .premium-carousel-nav-arrow-prev a, .premium-carousel-nav-arrow-next a {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: #1A2C1D !important;
        font-size: 16px !important;
        transition: all 0.5s ease !important;
        text-decoration: none !important;
      }
      .premium-carousel-nav-arrow-prev a:hover, .premium-carousel-nav-arrow-next a:hover {
        background: #D57800 !important;
        color: #ffffff !important;
        transform: scale(1.3) !important;
      }
      @media (max-width: 480px) {
        .elementor-accordion-item {
          padding: 10px 10px;
        }
        #page .site-content {
          margin-top: 0px !important;
          margin-bottom: 0px !important;
        }
        .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
          flex: 0 0 280px !important;
          /* width: 280px !important;
          max-width: 280px !important; */
        }
      }

      /* --- Premium Progress Bar Styles & Animation --- */
      .premium-progressbar-container {
        position: relative !important;
        margin-bottom: 8px !important;
      }
      .premium-progressbar-left-label {
        float: left !important;
        color: #3D3D3D !important;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 500 !important;
        font-size: 15px !important;
        line-height: 1.4 !important;
        margin: 0 0 6px 0 !important;
      }
      .premium-progressbar-right-label {
        float: right !important;
        color: #3D3D3D !important;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 500 !important;
        font-size: 15px !important;
        line-height: 1.4 !important;
        margin: 0 0 6px 0 !important;
      }
      .premium-progressbar-bar-wrap {
        position: relative !important;
        text-align: start !important;
        overflow: hidden !important;
        height: 10px !important;
        background-color: #EBEBEB !important;
        border-radius: 50px !important;
        clear: both !important;
        margin: 0 0 2px 0 !important;
        box-shadow: none !important;
      }
      .premium-progressbar-bar {
        float: left !important;
        width: 0%;
        height: 10px !important;
        background: #FFD900 !important;
        background-color: #FFD900 !important;
        border-radius: 50px !important;
        position: relative !important;
        overflow: hidden !important;
        transition: width 1.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / .15) !important;
        display: block !important;
      }

      /* --- Sticky Booking Calendar Styles (Scoped to Accommodation Calendar only) --- */
      .single-accommodation .sticky-div {
        position: relative;
      }
      #booking,
      .single-accommodation .sticky-column {
        transition: none;
        max-width: 100%;
      }
      #booking.is-pinned,
      .single-accommodation .sticky-column.is-pinned {
        position: fixed !important;
        top: 30px !important;
        z-index: 999 !important;
        box-shadow: none !important;
        border-radius: 12px;
        background: transparent !important;
      }
      #booking.is-stopped,
      .single-accommodation .sticky-column.is-stopped {
        position: absolute !important;
        z-index: 999 !important;
        box-shadow: none !important;
        border-radius: 12px;
        background: transparent !important;
      }
      #booking-iframe {
        width: 100% !important;
        max-width: 384px !important;
        min-height: 686px !important;
        border-radius: 12px;
        background: #ffffff;
        display: block;
        margin: 0 auto;
        border: none !important;
      }
      #bookingForm {
        width: 100% !important;
        max-width: 384px !important;
        box-sizing: border-box !important;
        overflow-x: hidden !important;
        margin: 0 auto !important;
      }
      #bookingForm * {
        box-sizing: border-box !important;
      }
      #calendar-container {
        width: 100% !important;
        overflow: visible !important;
      }
      .flatpickr-calendar {
        max-width: 100% !important;
        margin: 0 auto !important;
      }
      .sticky-placeholder {
        max-width: 100%;
      }
      @media (max-width: 1024px) {
        .sticky-column,
        .sticky-column.is-pinned,
        .sticky-column.is-stopped,
        .FixedWidget__fixed_widget__pinned,
        .sticky-div div:first-child {
          position: static !important;
          width: 100% !important;
          max-width: 384px !important;
          margin: 0 auto !important;
          height: auto !important;
          box-shadow: none !important;
        }
        .sticky-div {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          margin: 20px auto !important;
        }
        #booking-iframe {
          width: 100% !important;
          max-width: 384px !important;
          min-height: 686px !important;
          margin: 0 auto !important;
          display: block !important;
        }
      }
      @media (max-width: 480px) {
        #booking-iframe {
          width: 100% !important;
          max-width: 100% !important;
          min-height: 686px !important;
          margin: 0 auto !important;
        }
        #bookingForm {
          max-width: 100% !important;
          padding: 0.8rem !important;
        }
      /* Fluent Form Enhanced Styles & Validation Errors */
      .fluentform .ff-el-is-error .text-danger,
      .frm-fluent-form .ff-el-is-error .text-danger,
      .frm-fluent-form .error.text-danger {
        font-size: 13px !important;
        margin-top: 5px !important;
        color: #f56c6c !important;
        display: block !important;
        font-weight: 400 !important;
      }
      .fluentform .ff-el-is-error .ff-el-form-control,
      .frm-fluent-form .ff-el-is-error .ff-el-form-control,
      .frm-fluent-form .ff-el-is-error input,
      .frm-fluent-form .ff-el-is-error textarea {
        border-color: #f56c6c !important;
      }
      .ff-message-success {
        border: 1px solid #c3e6cb !important;
        background-color: #d4edda !important;
        color: #155724 !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
        margin-top: 15px !important;
        padding: 16px 20px !important;
        position: relative !important;
        border-radius: 8px !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        line-height: 1.5 !important;
        text-align: center !important;
      }
      .ff_btn_style.ff-working,
      .ff-btn-submit.ff-working {
        opacity: 0.75 !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
      }
    </style>`, "</head> <body", '> <div id="page" class="hfeed site"> ', ' <main id="content" class="site-content"> ', " </main> ", ` </div> <!-- Complete Interactive Elements & Auto-Slider Engine Script --> <script>
      const initAccordions = () => {
        // 1. Elementor Accordion (Single-Open / Exclusive Accordion Engine like live site)
       // 1. Elementor Accordion - FAQ ONLY
const accordions = document.querySelectorAll('.elementor-accordion');

accordions.forEach((accordion) => {
  const items = accordion.querySelectorAll('.elementor-accordion-item');

  items.forEach((item, index) => {
    const title = item.querySelector('.elementor-tab-title');
    const content = item.querySelector('.elementor-tab-content');

    if (!title || !content) return;

    // Initial state
    if (index === 0) {
      title.classList.add('elementor-active');
      title.setAttribute('aria-expanded', 'true');
      content.classList.add('elementor-active');
      content.style.display = 'block';
    } else {
      title.classList.remove('elementor-active');
      title.setAttribute('aria-expanded', 'false');
      content.classList.remove('elementor-active');
      content.style.display = 'none';
    }

    title.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = title.classList.contains('elementor-active');

      // Close all FAQs
      items.forEach((otherItem) => {
        const otherTitle = otherItem.querySelector('.elementor-tab-title');
        const otherContent = otherItem.querySelector('.elementor-tab-content');

        if (!otherTitle || !otherContent) return;

        otherTitle.classList.remove('elementor-active');
        otherTitle.setAttribute('aria-expanded', 'false');

        otherContent.classList.remove('elementor-active');
        otherContent.style.display = 'none';
      });

      // Open only if it was closed
      if (!isOpen) {
        title.classList.add('elementor-active');
        title.setAttribute('aria-expanded', 'true');

        content.classList.add('elementor-active');
        content.style.display = 'block';
      }
    });
  });
});

        // 2. Hamburger Mobile Menu (handled in Header.astro)

        // 3. Horizontal Infinite Auto-Scroll Carousel Engine (Optimized with IntersectionObserver)
        const hContainers = document.querySelectorAll('.premium-adv-carousel__horizontal');
        hContainers.forEach(container => {
          const list = container.querySelector('.premium-adv-carousel__items');
          if (!list || list.getAttribute('data-marquee-init')) return;
          list.setAttribute('data-marquee-init', 'true');

          const originalItems = Array.from(list.children);
          if (originalItems.length === 0) return;

          // Duplicate items enough times so there are never empty gaps
          const cloneCount = originalItems.length < 6 ? 4 : 2;
          for (let c = 0; c < cloneCount; c++) {
            originalItems.forEach(item => list.appendChild(item.cloneNode(true)));
          }

          let offset = 0;
          let isHovered = false;
          let isVisible = false;
          let rafId = null;
          const isReverse = container.getAttribute('data-settings')?.includes('"reverse":"reverse"') || container.getAttribute('data-settings')?.includes('reverse');
          const speed = 0.8; // px per frame (~50px/sec)

          container.addEventListener('mouseenter', () => isHovered = true);
          container.addEventListener('mouseleave', () => isHovered = false);

          function getSingleSetWidth() {
            let w = 0;
            const gap = parseFloat(window.getComputedStyle(list).gap) || 10;
            for (let i = 0; i < originalItems.length; i++) {
              const el = list.children[i];
              if (el) {
                w += (el.offsetWidth || 520) + gap;
              }
            }
            return w > 0 ? w : (originalItems.length * (520 + gap));
          }

          let singleSetWidth = getSingleSetWidth();
          let resizeTimeout;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              singleSetWidth = getSingleSetWidth();
            }, 150);
          }, { passive: true });

          if (isReverse) {
            offset = singleSetWidth;
          }

          function stepH() {
            if (isVisible && !isHovered) {
              if (isReverse) {
                offset -= speed;
                if (offset <= 0) {
                  offset += singleSetWidth;
                }
              } else {
                offset += speed;
                if (offset >= singleSetWidth) {
                  offset -= singleSetWidth;
                }
              }
              list.style.transform = \`translateX(-\${offset}px)\`;
            }
            if (isVisible) {
              rafId = requestAnimationFrame(stepH);
            }
          }

          const hObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              isVisible = entry.isIntersecting;
              if (isVisible) {
                if (!rafId) rafId = requestAnimationFrame(stepH);
              } else {
                if (rafId) {
                  cancelAnimationFrame(rafId);
                  rafId = null;
                }
              }
            });
          }, { rootMargin: '100px 0px 100px 0px' });
          hObserver.observe(container);
        });

        // 4. Vertical Infinite Auto-Scroll Testimonials Carousel Engine (Optimized with IntersectionObserver)
        const vContainers = document.querySelectorAll('.premium-adv-carousel__vertical');
        vContainers.forEach((container, idx) => {
          const list = container.querySelector('.premium-adv-carousel__items');
          if (!list || list.getAttribute('data-vmarquee-init')) return;
          list.setAttribute('data-vmarquee-init', 'true');

          const originalItems = Array.from(list.children);
          if (originalItems.length === 0) return;

          // Duplicate items once for seamless continuous loop
          originalItems.forEach(item => list.appendChild(item.cloneNode(true)));

          let offset = 0;
          let isHovered = false;
          let isVisible = false;
          let rafId = null;
          const isReverse = container.getAttribute('data-settings')?.includes('reverse') || (idx % 2 === 1);
          const speed = 0.6; // px per frame (~36px/sec)

          container.addEventListener('mouseenter', () => isHovered = true);
          container.addEventListener('mouseleave', () => isHovered = false);

          function getSingleSetHeight() {
            let h = 0;
            for (let i = 0; i < originalItems.length; i++) {
              const el = list.children[i];
              if (el) {
                const rect = el.getBoundingClientRect();
                const mb = parseFloat(window.getComputedStyle(el).marginBottom) || 28;
                h += (rect.height || 180) + mb;
              }
            }
            return h > 0 ? h : 600;
          }

          let singleSetHeight = getSingleSetHeight();
          let resizeTimeout;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              singleSetHeight = getSingleSetHeight();
            }, 150);
          }, { passive: true });

          if (isReverse) {
            offset = singleSetHeight;
          }

          function stepV() {
            if (isVisible && !isHovered) {
              if (isReverse) {
                offset -= speed;
                if (offset <= 0) {
                  offset += singleSetHeight;
                }
              } else {
                offset += speed;
                if (offset >= singleSetHeight) {
                  offset -= singleSetHeight;
                }
              }
              list.style.transform = \`translateY(-\${offset}px)\`;
            }
            if (isVisible) {
              rafId = requestAnimationFrame(stepV);
            }
          }

          const vObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              isVisible = entry.isIntersecting;
              if (isVisible) {
                if (!rafId) rafId = requestAnimationFrame(stepV);
              } else {
                if (rafId) {
                  cancelAnimationFrame(rafId);
                  rafId = null;
                }
              }
            });
          }, { rootMargin: '100px 0px 100px 0px' });
          vObserver.observe(container);
        });

        // 5. Standard Card Carousel Slider (Homepage & Happy Guests Reviews)
        const cWrappers = document.querySelectorAll('.premium-carousel-wrapper');
        cWrappers.forEach(wrapper => {
          if (wrapper.getAttribute('data-carousel-init')) return;
          wrapper.setAttribute('data-carousel-init', 'true');

          const inner = wrapper.querySelector('.premium-carousel-inner');
          if (!inner) return;
          const slides = Array.from(inner.querySelectorAll('.premium-carousel-template, .slick-slide'));
          if (slides.length <= 1) return;

          let currentIdx = 0;
          let autoPlayTimer = null;

          function updateSlide() {
            inner.style.transform = \`translateX(-\${currentIdx * 100}%)\`;
          }

          function nextSlide() {
            currentIdx = (currentIdx + 1) % slides.length;
            updateSlide();
          }

          function prevSlide() {
            currentIdx = (currentIdx - 1 + slides.length) % slides.length;
            updateSlide();
          }

          function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, 4500);
          }

          function stopAutoPlay() {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
          }

          const nextBtn = wrapper.querySelector('.premium-carousel-nav-arrow-next, .carousel-next');
          const prevBtn = wrapper.querySelector('.premium-carousel-nav-arrow-prev, .carousel-prev');

          if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
              e.preventDefault();
              nextSlide();
              startAutoPlay();
            });
          }
          if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
              e.preventDefault();
              prevSlide();
              startAutoPlay();
            });
          }

          wrapper.addEventListener('mouseenter', stopAutoPlay);
          wrapper.addEventListener('mouseleave', startAutoPlay);

          let startX = 0;
          wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            stopAutoPlay();
          }, { passive: true });

          wrapper.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextSlide();
            else if (endX - startX > 50) prevSlide();
            startAutoPlay();
          }, { passive: true });

          startAutoPlay();
        });

        // 6. Scroll-Triggered Progress Bar Animation
        const pbContainers = document.querySelectorAll('.premium-progressbar-container');
        if (pbContainers.length > 0) {
          function animatePB(container) {
            const bar = container.querySelector('.premium-progressbar-bar');
            if (bar && !bar.classList.contains('is-animated')) {
              let targetLength = 100;
              try {
                const rawSettings = container.getAttribute('data-settings');
                if (rawSettings) {
                  const settings = JSON.parse(rawSettings);
                  if (settings.progress_length) {
                    targetLength = parseFloat(settings.progress_length);
                  }
                }
              } catch (e) {}

              const rightLabel = container.querySelector('.premium-progressbar-right-label');
              if (rightLabel) {
                const val = parseFloat(rightLabel.textContent.trim());
                if (!isNaN(val)) {
                  if (val <= 5) {
                    targetLength = (val / 5) * 100;
                  } else if (val <= 10) {
                    targetLength = (val / 10) * 100;
                  }
                }
              }

              bar.classList.add('is-animated');
              bar.style.setProperty('width', targetLength + '%', 'important');
            }
          }

          const pbObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animatePB(entry.target);
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.01,
            rootMargin: '100px 0px 100px 0px'
          });

          pbContainers.forEach((c) => pbObserver.observe(c));

          setTimeout(() => {
            pbContainers.forEach((c) => {
              const rect = c.getBoundingClientRect();
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                animatePB(c);
              }
            });
          }, 150);
        }

        // 7. Sticky Booking Calendar Engine (ONLY for Booking Calendar #booking on accommodation & glamping-resort-cyprus pages)
        const isEligiblePage = document.body.classList.contains('single-accommodation') || 
                               window.location.pathname.includes('/accommodation') || 
                               window.location.pathname.includes('/glamping-resort-cyprus');
        const bookingEl = isEligiblePage ? document.querySelector('#booking') : null;
        const stickyWidgets = bookingEl ? [bookingEl] : [];

        if (stickyWidgets.length > 0) {
          stickyWidgets.forEach(widget => {
            const parent = widget.parentElement;
            if (!parent) return;

            let placeholder = parent.querySelector(':scope > .sticky-placeholder');
            if (!placeholder) {
              placeholder = document.createElement('div');
              placeholder.className = 'sticky-placeholder';
              placeholder.style.display = 'none';
              widget.parentNode.insertBefore(placeholder, widget);
            }

            let ticking = false;

            function updateSticky() {
              if (window.innerWidth <= 1024) {
                widget.classList.remove('is-pinned', 'is-stopped');
                widget.style.position = '';
                widget.style.top = '';
                widget.style.left = '';
                widget.style.width = '';
                placeholder.style.display = 'none';
                ticking = false;
                return;
              }

              const stopElement = document.querySelector('#stop-section, .accordion-section, [data-id="8032d87"], .faq-section, #faq, #colophon, footer');
              const scrollTop = window.scrollY || window.pageYOffset;
              
              const isCurrentlyPinned = widget.classList.contains('is-pinned');
              const isCurrentlyStopped = widget.classList.contains('is-stopped');

              if (!isCurrentlyPinned && !isCurrentlyStopped) {
                const rect = widget.getBoundingClientRect();
                if (rect.width > 0) {
                  placeholder.style.width = rect.width + 'px';
                }
                if (rect.height > 0) {
                  placeholder.style.height = rect.height + 'px';
                }
              }

              const placeholderRect = placeholder.getBoundingClientRect();
              const widgetWidth = placeholderRect.width || widget.getBoundingClientRect().width || 384;
              const widgetHeight = widget.offsetHeight || placeholderRect.height || 686;
              const placeholderTop = (placeholder.style.display !== 'none')
                ? (placeholderRect.top + scrollTop)
                : (widget.getBoundingClientRect().top + scrollTop);
              
              const marginTop = 30;
              const marginBottom = 30;

              let stopY = document.documentElement.scrollHeight - 600;
              if (stopElement) {
                stopY = stopElement.getBoundingClientRect().top + scrollTop;
              }

              const triggerY = placeholderTop - marginTop;
              const stopTriggerY = stopY - widgetHeight - marginTop - marginBottom;

              if (scrollTop >= stopTriggerY) {
                placeholder.style.display = 'block';
                placeholder.style.width = widgetWidth + 'px';
                placeholder.style.height = widgetHeight + 'px';

                widget.classList.remove('is-pinned');
                widget.classList.add('is-stopped');
                widget.style.position = 'absolute';

                const offsetParent = widget.offsetParent || parent || document.body;
                const offsetParentRect = offsetParent.getBoundingClientRect();
                const curPlaceholderRect = placeholder.getBoundingClientRect();

                const relativeLeft = curPlaceholderRect.left - offsetParentRect.left;
                const relativeTop = stopY - (offsetParentRect.top + scrollTop) - widgetHeight - marginBottom;

                widget.style.top = relativeTop + 'px';
                widget.style.left = relativeLeft + 'px';
                widget.style.width = widgetWidth + 'px';
              } else if (scrollTop >= triggerY) {
                placeholder.style.display = 'block';
                placeholder.style.width = widgetWidth + 'px';
                placeholder.style.height = widgetHeight + 'px';

                const curPlaceholderRect = placeholder.getBoundingClientRect();

                widget.classList.remove('is-stopped');
                widget.classList.add('is-pinned');
                widget.style.position = 'fixed';
                widget.style.top = marginTop + 'px';
                widget.style.left = curPlaceholderRect.left + 'px';
                widget.style.width = widgetWidth + 'px';
              } else {
                widget.classList.remove('is-pinned', 'is-stopped');
                widget.style.position = '';
                widget.style.top = '';
                widget.style.left = '';
                widget.style.width = '';
                placeholder.style.display = 'none';
              }
              ticking = false;
            }

            function requestTick() {
              if (!ticking) {
                requestAnimationFrame(updateSticky);
                ticking = true;
              }
            }

            window.addEventListener('scroll', requestTick, { passive: true });
            window.addEventListener('resize', requestTick, { passive: true });
            setTimeout(updateSticky, 300);
          });
        }
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccordions, { once: true });
      } else {
        initAccordions();
      }
    <\/script> <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script>
      function initAOS() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
            disableMutationObserver: false,
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAOS);
      } else {
        initAOS();
      }

      window.addEventListener('load', function() {
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      });
      document.addEventListener('astro:page-load', function() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
          });
          AOS.refresh();
        }
      });
    <\/script> <script src="/js/fluent-form.js"><\/script> </body> </html>`], ['<html lang="en-GB" prefix="og: https://ogp.me/ns#"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><link rel="icon" type="image/png"', '><!-- Open Graph --><meta property="og:locale" content="en_GB"><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:site_name" content="Back To Nature - Events & Glamping Resort"><meta property="og:image"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Google Fonts: Domine (Headings/Titles) & Poppins (Body/UI) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/elementor-icons/5.23.0/elementor-icons.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css?ver=7.1"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css?ver=7.1"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css?ver=7.1"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><!-- Complete Live Site CSS Bundle --><link rel="stylesheet" href="/css/bundle.css"><style>
      :root {
        --e-global-typography-primary-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-secondary-font-family: 'Domine', serif !important;
        --e-global-typography-text-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-accent-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-heading_title-font-family: 'Domine', serif !important;
        --e-global-typography-heading_text-font-family: 'Poppins', sans-serif !important;
        --e-global-typography-heading_sub-font-family: 'Poppins', sans-serif !important;
      }
      body {
        --primary: #ff4d00;
        --primary_hover: #e54500;
        --secondary: #5b320d;
        --secondary_hover: #512d0b;
        --text: #666666;
        --accent: #000000;
        --lighter: #999999;
        --border: #E5E5E5;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        color: #494949;
        background-color: #ffffff;
      }
      
      /* Headings, Hero Titles & Highlighted Title Spans (e.g. 'Lost in the Noise?', 'Find Peace in Nature.') */
      h1, h2, h3, h4, h5, h6,
      .elementor-heading-title,
      .elementor-heading-title span,
      .hero-title-after, .book-after, .cabin-after, .discover-title-after, 
      .private-title-after, .review-after, .fun-after, .faq-after, .footer-title-after,
      .activland-title {
        font-family: 'Domine', Georgia, 'Times New Roman', serif !important;
      }
/* .elementor-widget-heading .elementor-heading-title {
  font-family: Poppins, sans-serif !important;
} */
      /* .font-rubik , .font-rubik span{
  font-family:Rubik,
    HelveticaNeue-Light,
    Helvetica Neue Light,
    Helvetica Neue,
    Helvetica,
    Arial,
    Lucida Grande,
    sans-serif !important;
} */
      .font-rubik , .font-rubik span{
  font-family:'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
}
      
      /* Body Text, Paragraphs, Links, Navigation, Forms & Buttons */
      body, p, a, 
      li, input, select, textarea, button, .elementor-button, .premium-bullet-text,
      .elementor-widget-text-editor, .elementor-widget-text-editor p,
      .elementor-icon-box-title, .elementor-icon-box-title a, .elementor-icon-box-description,
      .elementor-image-box-title, .elementor-image-box-description,
      .elementor-tab-title, .elementor-tab-title a, .elementor-tab-content, .elementor-tab-content p,
      .elementor-nav-menu, .elementor-nav-menu a, .elementor-item,
      .elementor-icon-list-item, .elementor-icon-list-text,
      .flatpickr-calendar, .flatpickr-calendar * {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      }

      /* Preserve Icon Fonts */
      .fa, .fas, .far, .fab, .fal, .fad, 
      [class*="fa-"], [class*=" fa-"],
      [class*="eicon-"], [class*=" eicon-"], 
      .elementor-icons, .eicons, [class*="activland-icon"] {
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
      }
      .fab, [class*="fa-facebook"], [class*="fa-instagram"], [class*="fa-twitter"], [class*="fa-youtube"] {
        font-family: "Font Awesome 6 Brands", "Font Awesome 5 Brands", "FontAwesome", sans-serif !important;
      }
      [class*="eicon-"], .eicons {
        font-family: eicons !important;
      }
      .eicon-star:before {
        content: "\\\\f005" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        color: #FFA800 !important;
        display: inline-block;
      }
      .eicon-menu-bar:before {
        content: "\\\\f0c9" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        display: inline-block;
      }
      .eicon-close:before {
        content: "\\\\f00d" !important;
        font-family: "Font Awesome 6 Free", "Font Awesome 5 Free", "FontAwesome", sans-serif !important;
        font-weight: 900 !important;
        display: inline-block;
      }
      body.is-home .breadcrumb-wrap {
        display: none !important;
      }
      .breadcrumb-wrap {
        display: block;
      }
      .logocentral img {
        height: 90px;
        width: auto;
      }
      .menu-item a {
        height: max-content;
      }
      .elementor-nav-menu--layout-horizontal .elementor-nav-menu {
        align-items: center;
      }
      .title-color {
        color: #D57800;
      }
      .about-icoin-list .elementor-icon-list-item {
        background: linear-gradient(73deg, #f0f1f0, #fefefe) !important;
        padding: 10px 15px !important;
        border-radius: 4px !important;
      }
      .discover-section .elementor-icon-list-item {
        background: linear-gradient(85deg, #2F3F31, #0d1a1200);
        padding: 10px 15px !important;
        border-radius: 4px !important;
      }
      .elementor-accordion-item {
        background-color: #f6f7f6;
        border: none !important;
        border-radius: 6px;
        padding: 10px 25px;
        margin-bottom: 25px !important;
      }
      .elementor-tab-title.elementor-active {
        border-bottom: 1px solid #e0e3e0;
      }
      .elementor-tab-content p {
        margin-bottom: 0 !important;
      }
      @media (max-width: 1024px) {
        .video-after:after {
          display: none;
        }
        .hero-title-after:after, .book-after:after, .cabin-after:after, .discover-title-after:after, .private-title-after:after, .review-after:after, .fun-after:after, .faq-after:after, .footer-title-after:after {
          display: none;
        }
      }
      .elementor-invisible {
        visibility: visible !important;
        opacity: 1 !important;
      }
      
      /* Header Call Icon Right Rotation */
      .elementor-element-81f9748 .elementor-icon i,
      .elementor-element-81f9748 .elementor-icon-box-icon i,
      .elementor-icon-box-icon i.fa-phone-alt,
      .elementor-icon-box-icon i.fa-phone {
        transform: rotate(90deg) !important;
        -webkit-transform: rotate(90deg) !important;
        display: inline-block !important;
      }
      
      /* --- Vertical Auto-Scrolling Carousel (What our Client Say) --- */
      .premium-adv-carousel__vertical {
        height: 520px !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__container {
        height: 520px !important;
        overflow: hidden !important;
        position: relative !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__inner-container {
        height: 100% !important;
        overflow: hidden !important;
        visibility: visible !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__items {
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
        width: 100% !important;
        will-change: transform;
        padding: 10px 0 !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__item-outer-wrapper {
        width: 100% !important;
        flex: 0 0 auto !important;
        max-width: 100% !important;
      }
      .premium-adv-carousel__vertical .premium-adv-carousel__template-wrapper {
        border-radius: 14px !important;
      }

      /* --- Horizontal Auto-Scrolling 3D Photo Wheel Carousel --- */
      .premium-adv-carousel__horizontal {
        width: 100% !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__container {
        width: 100% !important;
        overflow: hidden !important;
        position: relative !important;
        padding: 0 0 20px 0 !important;
        /* mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent);
        -webkit-mask-image: linear-gradient(to right, transparent, black 4%, black 96%, transparent); */
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__inner-container {
        width: 100% !important;
        overflow: hidden !important;
        visibility: visible !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__items {
        display: flex !important;
        flex-direction: row !important;
        gap: 10px !important;
        width: max-content !important;
        align-items: center !important;
        will-change: transform;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
        flex: 0 0 520px !important;
        width: 520px !important;
        max-width: 520px !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .premium-adv-carousel__horizontal.main-cstum .premium-adv-carousel__item-outer-wrapper {
        flex: 0 0 300px !important;
        width: 300px !important;
        max-width: 300px !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      
      .premium-adv-carousel__horizontal .premium-adv-carousel__item {
        width: 520px !important;
        max-width: 520px !important;
        margin: 0 !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal.main-cstum .premium-adv-carousel__item {
        width: 300px !important;
        max-width: 300px !important;
        margin: 0 !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__media-wrap {
        width: 100% !important;
        height: 300px !important;
        overflow: hidden !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-image img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-img img,
      .premium-adv-carousel__horizontal img {
        width: 100% !important;
        height: 300px !important;
        object-fit: cover !important;
        box-shadow: 0 6px 20px rgba(0,0,0,0.1) !important;
        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        display: block !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper img,
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
        transition: 0.5s all !important;
      }
      .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper:hover img {
        transform: translateY(-4px) scale(1.05) !important;
        box-shadow: 0 12px 30px rgba(0,0,0,0.2) !important;
      }

      /* --- Standard Carousel Slider (Homepage & Accommodation Cards) --- */
      .premium-carousel-hidden {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .premium-carousel-wrapper {
        position: relative !important;
        width: 100% !important;
        overflow: hidden !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .premium-carousel-inner {
        display: flex !important;
        width: 100% !important;
        transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1) !important;
        opacity: 1 !important;
      }
      .premium-carousel-template {
        flex: 0 0 100% !important;
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box !important;
        background: #ffffff !important;
        border-radius: 16px !important;
        padding: 20px !important;
        border: 1px solid #f0f1f0 !important;
      }
      .premium-carousel-nav-arrow-prev, .premium-carousel-nav-arrow-next {
        display: flex !important;
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10 !important;
        cursor: pointer !important;
      }
      .premium-carousel-nav-arrow-prev { left: 10px !important; }
      .premium-carousel-nav-arrow-next { right: 10px !important; }
      .premium-carousel-nav-arrow-prev a, .premium-carousel-nav-arrow-next a {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: #1A2C1D !important;
        font-size: 16px !important;
        transition: all 0.5s ease !important;
        text-decoration: none !important;
      }
      .premium-carousel-nav-arrow-prev a:hover, .premium-carousel-nav-arrow-next a:hover {
        background: #D57800 !important;
        color: #ffffff !important;
        transform: scale(1.3) !important;
      }
      @media (max-width: 480px) {
        .elementor-accordion-item {
          padding: 10px 10px;
        }
        #page .site-content {
          margin-top: 0px !important;
          margin-bottom: 0px !important;
        }
        .premium-adv-carousel__horizontal .premium-adv-carousel__item-outer-wrapper {
          flex: 0 0 280px !important;
          /* width: 280px !important;
          max-width: 280px !important; */
        }
      }

      /* --- Premium Progress Bar Styles & Animation --- */
      .premium-progressbar-container {
        position: relative !important;
        margin-bottom: 8px !important;
      }
      .premium-progressbar-left-label {
        float: left !important;
        color: #3D3D3D !important;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 500 !important;
        font-size: 15px !important;
        line-height: 1.4 !important;
        margin: 0 0 6px 0 !important;
      }
      .premium-progressbar-right-label {
        float: right !important;
        color: #3D3D3D !important;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 500 !important;
        font-size: 15px !important;
        line-height: 1.4 !important;
        margin: 0 0 6px 0 !important;
      }
      .premium-progressbar-bar-wrap {
        position: relative !important;
        text-align: start !important;
        overflow: hidden !important;
        height: 10px !important;
        background-color: #EBEBEB !important;
        border-radius: 50px !important;
        clear: both !important;
        margin: 0 0 2px 0 !important;
        box-shadow: none !important;
      }
      .premium-progressbar-bar {
        float: left !important;
        width: 0%;
        height: 10px !important;
        background: #FFD900 !important;
        background-color: #FFD900 !important;
        border-radius: 50px !important;
        position: relative !important;
        overflow: hidden !important;
        transition: width 1.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
        box-shadow: inset 0 -1px 0 rgb(0 0 0 / .15) !important;
        display: block !important;
      }

      /* --- Sticky Booking Calendar Styles (Scoped to Accommodation Calendar only) --- */
      .single-accommodation .sticky-div {
        position: relative;
      }
      #booking,
      .single-accommodation .sticky-column {
        transition: none;
        max-width: 100%;
      }
      #booking.is-pinned,
      .single-accommodation .sticky-column.is-pinned {
        position: fixed !important;
        top: 30px !important;
        z-index: 999 !important;
        box-shadow: none !important;
        border-radius: 12px;
        background: transparent !important;
      }
      #booking.is-stopped,
      .single-accommodation .sticky-column.is-stopped {
        position: absolute !important;
        z-index: 999 !important;
        box-shadow: none !important;
        border-radius: 12px;
        background: transparent !important;
      }
      #booking-iframe {
        width: 100% !important;
        max-width: 384px !important;
        min-height: 686px !important;
        border-radius: 12px;
        background: #ffffff;
        display: block;
        margin: 0 auto;
        border: none !important;
      }
      #bookingForm {
        width: 100% !important;
        max-width: 384px !important;
        box-sizing: border-box !important;
        overflow-x: hidden !important;
        margin: 0 auto !important;
      }
      #bookingForm * {
        box-sizing: border-box !important;
      }
      #calendar-container {
        width: 100% !important;
        overflow: visible !important;
      }
      .flatpickr-calendar {
        max-width: 100% !important;
        margin: 0 auto !important;
      }
      .sticky-placeholder {
        max-width: 100%;
      }
      @media (max-width: 1024px) {
        .sticky-column,
        .sticky-column.is-pinned,
        .sticky-column.is-stopped,
        .FixedWidget__fixed_widget__pinned,
        .sticky-div div:first-child {
          position: static !important;
          width: 100% !important;
          max-width: 384px !important;
          margin: 0 auto !important;
          height: auto !important;
          box-shadow: none !important;
        }
        .sticky-div {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
          margin: 20px auto !important;
        }
        #booking-iframe {
          width: 100% !important;
          max-width: 384px !important;
          min-height: 686px !important;
          margin: 0 auto !important;
          display: block !important;
        }
      }
      @media (max-width: 480px) {
        #booking-iframe {
          width: 100% !important;
          max-width: 100% !important;
          min-height: 686px !important;
          margin: 0 auto !important;
        }
        #bookingForm {
          max-width: 100% !important;
          padding: 0.8rem !important;
        }
      /* Fluent Form Enhanced Styles & Validation Errors */
      .fluentform .ff-el-is-error .text-danger,
      .frm-fluent-form .ff-el-is-error .text-danger,
      .frm-fluent-form .error.text-danger {
        font-size: 13px !important;
        margin-top: 5px !important;
        color: #f56c6c !important;
        display: block !important;
        font-weight: 400 !important;
      }
      .fluentform .ff-el-is-error .ff-el-form-control,
      .frm-fluent-form .ff-el-is-error .ff-el-form-control,
      .frm-fluent-form .ff-el-is-error input,
      .frm-fluent-form .ff-el-is-error textarea {
        border-color: #f56c6c !important;
      }
      .ff-message-success {
        border: 1px solid #c3e6cb !important;
        background-color: #d4edda !important;
        color: #155724 !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
        margin-top: 15px !important;
        padding: 16px 20px !important;
        position: relative !important;
        border-radius: 8px !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        line-height: 1.5 !important;
        text-align: center !important;
      }
      .ff_btn_style.ff-working,
      .ff-btn-submit.ff-working {
        opacity: 0.75 !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
      }
    </style>`, "</head> <body", '> <div id="page" class="hfeed site"> ', ' <main id="content" class="site-content"> ', " </main> ", ` </div> <!-- Complete Interactive Elements & Auto-Slider Engine Script --> <script>
      const initAccordions = () => {
        // 1. Elementor Accordion (Single-Open / Exclusive Accordion Engine like live site)
       // 1. Elementor Accordion - FAQ ONLY
const accordions = document.querySelectorAll('.elementor-accordion');

accordions.forEach((accordion) => {
  const items = accordion.querySelectorAll('.elementor-accordion-item');

  items.forEach((item, index) => {
    const title = item.querySelector('.elementor-tab-title');
    const content = item.querySelector('.elementor-tab-content');

    if (!title || !content) return;

    // Initial state
    if (index === 0) {
      title.classList.add('elementor-active');
      title.setAttribute('aria-expanded', 'true');
      content.classList.add('elementor-active');
      content.style.display = 'block';
    } else {
      title.classList.remove('elementor-active');
      title.setAttribute('aria-expanded', 'false');
      content.classList.remove('elementor-active');
      content.style.display = 'none';
    }

    title.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = title.classList.contains('elementor-active');

      // Close all FAQs
      items.forEach((otherItem) => {
        const otherTitle = otherItem.querySelector('.elementor-tab-title');
        const otherContent = otherItem.querySelector('.elementor-tab-content');

        if (!otherTitle || !otherContent) return;

        otherTitle.classList.remove('elementor-active');
        otherTitle.setAttribute('aria-expanded', 'false');

        otherContent.classList.remove('elementor-active');
        otherContent.style.display = 'none';
      });

      // Open only if it was closed
      if (!isOpen) {
        title.classList.add('elementor-active');
        title.setAttribute('aria-expanded', 'true');

        content.classList.add('elementor-active');
        content.style.display = 'block';
      }
    });
  });
});

        // 2. Hamburger Mobile Menu (handled in Header.astro)

        // 3. Horizontal Infinite Auto-Scroll Carousel Engine (Optimized with IntersectionObserver)
        const hContainers = document.querySelectorAll('.premium-adv-carousel__horizontal');
        hContainers.forEach(container => {
          const list = container.querySelector('.premium-adv-carousel__items');
          if (!list || list.getAttribute('data-marquee-init')) return;
          list.setAttribute('data-marquee-init', 'true');

          const originalItems = Array.from(list.children);
          if (originalItems.length === 0) return;

          // Duplicate items enough times so there are never empty gaps
          const cloneCount = originalItems.length < 6 ? 4 : 2;
          for (let c = 0; c < cloneCount; c++) {
            originalItems.forEach(item => list.appendChild(item.cloneNode(true)));
          }

          let offset = 0;
          let isHovered = false;
          let isVisible = false;
          let rafId = null;
          const isReverse = container.getAttribute('data-settings')?.includes('"reverse":"reverse"') || container.getAttribute('data-settings')?.includes('reverse');
          const speed = 0.8; // px per frame (~50px/sec)

          container.addEventListener('mouseenter', () => isHovered = true);
          container.addEventListener('mouseleave', () => isHovered = false);

          function getSingleSetWidth() {
            let w = 0;
            const gap = parseFloat(window.getComputedStyle(list).gap) || 10;
            for (let i = 0; i < originalItems.length; i++) {
              const el = list.children[i];
              if (el) {
                w += (el.offsetWidth || 520) + gap;
              }
            }
            return w > 0 ? w : (originalItems.length * (520 + gap));
          }

          let singleSetWidth = getSingleSetWidth();
          let resizeTimeout;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              singleSetWidth = getSingleSetWidth();
            }, 150);
          }, { passive: true });

          if (isReverse) {
            offset = singleSetWidth;
          }

          function stepH() {
            if (isVisible && !isHovered) {
              if (isReverse) {
                offset -= speed;
                if (offset <= 0) {
                  offset += singleSetWidth;
                }
              } else {
                offset += speed;
                if (offset >= singleSetWidth) {
                  offset -= singleSetWidth;
                }
              }
              list.style.transform = \\\`translateX(-\\\${offset}px)\\\`;
            }
            if (isVisible) {
              rafId = requestAnimationFrame(stepH);
            }
          }

          const hObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              isVisible = entry.isIntersecting;
              if (isVisible) {
                if (!rafId) rafId = requestAnimationFrame(stepH);
              } else {
                if (rafId) {
                  cancelAnimationFrame(rafId);
                  rafId = null;
                }
              }
            });
          }, { rootMargin: '100px 0px 100px 0px' });
          hObserver.observe(container);
        });

        // 4. Vertical Infinite Auto-Scroll Testimonials Carousel Engine (Optimized with IntersectionObserver)
        const vContainers = document.querySelectorAll('.premium-adv-carousel__vertical');
        vContainers.forEach((container, idx) => {
          const list = container.querySelector('.premium-adv-carousel__items');
          if (!list || list.getAttribute('data-vmarquee-init')) return;
          list.setAttribute('data-vmarquee-init', 'true');

          const originalItems = Array.from(list.children);
          if (originalItems.length === 0) return;

          // Duplicate items once for seamless continuous loop
          originalItems.forEach(item => list.appendChild(item.cloneNode(true)));

          let offset = 0;
          let isHovered = false;
          let isVisible = false;
          let rafId = null;
          const isReverse = container.getAttribute('data-settings')?.includes('reverse') || (idx % 2 === 1);
          const speed = 0.6; // px per frame (~36px/sec)

          container.addEventListener('mouseenter', () => isHovered = true);
          container.addEventListener('mouseleave', () => isHovered = false);

          function getSingleSetHeight() {
            let h = 0;
            for (let i = 0; i < originalItems.length; i++) {
              const el = list.children[i];
              if (el) {
                const rect = el.getBoundingClientRect();
                const mb = parseFloat(window.getComputedStyle(el).marginBottom) || 28;
                h += (rect.height || 180) + mb;
              }
            }
            return h > 0 ? h : 600;
          }

          let singleSetHeight = getSingleSetHeight();
          let resizeTimeout;
          window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
              singleSetHeight = getSingleSetHeight();
            }, 150);
          }, { passive: true });

          if (isReverse) {
            offset = singleSetHeight;
          }

          function stepV() {
            if (isVisible && !isHovered) {
              if (isReverse) {
                offset -= speed;
                if (offset <= 0) {
                  offset += singleSetHeight;
                }
              } else {
                offset += speed;
                if (offset >= singleSetHeight) {
                  offset -= singleSetHeight;
                }
              }
              list.style.transform = \\\`translateY(-\\\${offset}px)\\\`;
            }
            if (isVisible) {
              rafId = requestAnimationFrame(stepV);
            }
          }

          const vObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              isVisible = entry.isIntersecting;
              if (isVisible) {
                if (!rafId) rafId = requestAnimationFrame(stepV);
              } else {
                if (rafId) {
                  cancelAnimationFrame(rafId);
                  rafId = null;
                }
              }
            });
          }, { rootMargin: '100px 0px 100px 0px' });
          vObserver.observe(container);
        });

        // 5. Standard Card Carousel Slider (Homepage & Happy Guests Reviews)
        const cWrappers = document.querySelectorAll('.premium-carousel-wrapper');
        cWrappers.forEach(wrapper => {
          if (wrapper.getAttribute('data-carousel-init')) return;
          wrapper.setAttribute('data-carousel-init', 'true');

          const inner = wrapper.querySelector('.premium-carousel-inner');
          if (!inner) return;
          const slides = Array.from(inner.querySelectorAll('.premium-carousel-template, .slick-slide'));
          if (slides.length <= 1) return;

          let currentIdx = 0;
          let autoPlayTimer = null;

          function updateSlide() {
            inner.style.transform = \\\`translateX(-\\\${currentIdx * 100}%)\\\`;
          }

          function nextSlide() {
            currentIdx = (currentIdx + 1) % slides.length;
            updateSlide();
          }

          function prevSlide() {
            currentIdx = (currentIdx - 1 + slides.length) % slides.length;
            updateSlide();
          }

          function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, 4500);
          }

          function stopAutoPlay() {
            if (autoPlayTimer) clearInterval(autoPlayTimer);
          }

          const nextBtn = wrapper.querySelector('.premium-carousel-nav-arrow-next, .carousel-next');
          const prevBtn = wrapper.querySelector('.premium-carousel-nav-arrow-prev, .carousel-prev');

          if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
              e.preventDefault();
              nextSlide();
              startAutoPlay();
            });
          }
          if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
              e.preventDefault();
              prevSlide();
              startAutoPlay();
            });
          }

          wrapper.addEventListener('mouseenter', stopAutoPlay);
          wrapper.addEventListener('mouseleave', startAutoPlay);

          let startX = 0;
          wrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            stopAutoPlay();
          }, { passive: true });

          wrapper.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextSlide();
            else if (endX - startX > 50) prevSlide();
            startAutoPlay();
          }, { passive: true });

          startAutoPlay();
        });

        // 6. Scroll-Triggered Progress Bar Animation
        const pbContainers = document.querySelectorAll('.premium-progressbar-container');
        if (pbContainers.length > 0) {
          function animatePB(container) {
            const bar = container.querySelector('.premium-progressbar-bar');
            if (bar && !bar.classList.contains('is-animated')) {
              let targetLength = 100;
              try {
                const rawSettings = container.getAttribute('data-settings');
                if (rawSettings) {
                  const settings = JSON.parse(rawSettings);
                  if (settings.progress_length) {
                    targetLength = parseFloat(settings.progress_length);
                  }
                }
              } catch (e) {}

              const rightLabel = container.querySelector('.premium-progressbar-right-label');
              if (rightLabel) {
                const val = parseFloat(rightLabel.textContent.trim());
                if (!isNaN(val)) {
                  if (val <= 5) {
                    targetLength = (val / 5) * 100;
                  } else if (val <= 10) {
                    targetLength = (val / 10) * 100;
                  }
                }
              }

              bar.classList.add('is-animated');
              bar.style.setProperty('width', targetLength + '%', 'important');
            }
          }

          const pbObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animatePB(entry.target);
                observer.unobserve(entry.target);
              }
            });
          }, {
            threshold: 0.01,
            rootMargin: '100px 0px 100px 0px'
          });

          pbContainers.forEach((c) => pbObserver.observe(c));

          setTimeout(() => {
            pbContainers.forEach((c) => {
              const rect = c.getBoundingClientRect();
              if (rect.top < window.innerHeight && rect.bottom > 0) {
                animatePB(c);
              }
            });
          }, 150);
        }

        // 7. Sticky Booking Calendar Engine (ONLY for Booking Calendar #booking on accommodation & glamping-resort-cyprus pages)
        const isEligiblePage = document.body.classList.contains('single-accommodation') || 
                               window.location.pathname.includes('/accommodation') || 
                               window.location.pathname.includes('/glamping-resort-cyprus');
        const bookingEl = isEligiblePage ? document.querySelector('#booking') : null;
        const stickyWidgets = bookingEl ? [bookingEl] : [];

        if (stickyWidgets.length > 0) {
          stickyWidgets.forEach(widget => {
            const parent = widget.parentElement;
            if (!parent) return;

            let placeholder = parent.querySelector(':scope > .sticky-placeholder');
            if (!placeholder) {
              placeholder = document.createElement('div');
              placeholder.className = 'sticky-placeholder';
              placeholder.style.display = 'none';
              widget.parentNode.insertBefore(placeholder, widget);
            }

            let ticking = false;

            function updateSticky() {
              if (window.innerWidth <= 1024) {
                widget.classList.remove('is-pinned', 'is-stopped');
                widget.style.position = '';
                widget.style.top = '';
                widget.style.left = '';
                widget.style.width = '';
                placeholder.style.display = 'none';
                ticking = false;
                return;
              }

              const stopElement = document.querySelector('#stop-section, .accordion-section, [data-id="8032d87"], .faq-section, #faq, #colophon, footer');
              const scrollTop = window.scrollY || window.pageYOffset;
              
              const isCurrentlyPinned = widget.classList.contains('is-pinned');
              const isCurrentlyStopped = widget.classList.contains('is-stopped');

              if (!isCurrentlyPinned && !isCurrentlyStopped) {
                const rect = widget.getBoundingClientRect();
                if (rect.width > 0) {
                  placeholder.style.width = rect.width + 'px';
                }
                if (rect.height > 0) {
                  placeholder.style.height = rect.height + 'px';
                }
              }

              const placeholderRect = placeholder.getBoundingClientRect();
              const widgetWidth = placeholderRect.width || widget.getBoundingClientRect().width || 384;
              const widgetHeight = widget.offsetHeight || placeholderRect.height || 686;
              const placeholderTop = (placeholder.style.display !== 'none')
                ? (placeholderRect.top + scrollTop)
                : (widget.getBoundingClientRect().top + scrollTop);
              
              const marginTop = 30;
              const marginBottom = 30;

              let stopY = document.documentElement.scrollHeight - 600;
              if (stopElement) {
                stopY = stopElement.getBoundingClientRect().top + scrollTop;
              }

              const triggerY = placeholderTop - marginTop;
              const stopTriggerY = stopY - widgetHeight - marginTop - marginBottom;

              if (scrollTop >= stopTriggerY) {
                placeholder.style.display = 'block';
                placeholder.style.width = widgetWidth + 'px';
                placeholder.style.height = widgetHeight + 'px';

                widget.classList.remove('is-pinned');
                widget.classList.add('is-stopped');
                widget.style.position = 'absolute';

                const offsetParent = widget.offsetParent || parent || document.body;
                const offsetParentRect = offsetParent.getBoundingClientRect();
                const curPlaceholderRect = placeholder.getBoundingClientRect();

                const relativeLeft = curPlaceholderRect.left - offsetParentRect.left;
                const relativeTop = stopY - (offsetParentRect.top + scrollTop) - widgetHeight - marginBottom;

                widget.style.top = relativeTop + 'px';
                widget.style.left = relativeLeft + 'px';
                widget.style.width = widgetWidth + 'px';
              } else if (scrollTop >= triggerY) {
                placeholder.style.display = 'block';
                placeholder.style.width = widgetWidth + 'px';
                placeholder.style.height = widgetHeight + 'px';

                const curPlaceholderRect = placeholder.getBoundingClientRect();

                widget.classList.remove('is-stopped');
                widget.classList.add('is-pinned');
                widget.style.position = 'fixed';
                widget.style.top = marginTop + 'px';
                widget.style.left = curPlaceholderRect.left + 'px';
                widget.style.width = widgetWidth + 'px';
              } else {
                widget.classList.remove('is-pinned', 'is-stopped');
                widget.style.position = '';
                widget.style.top = '';
                widget.style.left = '';
                widget.style.width = '';
                placeholder.style.display = 'none';
              }
              ticking = false;
            }

            function requestTick() {
              if (!ticking) {
                requestAnimationFrame(updateSticky);
                ticking = true;
              }
            }

            window.addEventListener('scroll', requestTick, { passive: true });
            window.addEventListener('resize', requestTick, { passive: true });
            setTimeout(updateSticky, 300);
          });
        }
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAccordions, { once: true });
      } else {
        initAccordions();
      }
    <\/script> <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script>
      function initAOS() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
            disableMutationObserver: false,
          });
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAOS);
      } else {
        initAOS();
      }

      window.addEventListener('load', function() {
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      });
      document.addEventListener('astro:page-load', function() {
        if (typeof AOS !== 'undefined') {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 50,
          });
          AOS.refresh();
        }
      });
    <\/script> <script src="/js/fluent-form.js"><\/script> </body> </html>`])), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(faviconImg, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), addAttribute(finalBodyClass, "class"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "P:/Astro/new-migration/output/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, getImg as g };
