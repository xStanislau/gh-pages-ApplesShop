$(document).ready(function(){$(".sidebar__link").on("click",function(o){o.preventDefault();var t=$(this),s=t.closest(".sidebar__item").find(".sidebar__sub-list");if(!t.hasClass("active"))return t.addClass("active"),void s.stop(!0,!0).slideDown(200);s.stop(!0,!0).slideUp(200),t.removeClass("active")});var o=$(".scroll-top-btn");$(window).on("scroll",function(){120<$("html, body").scrollTop()?o.fadeIn(200):o.fadeOut(200)}),$(".scroll-top-btn").on("click",function(){$("html, body").animate({scrollTop:0},200)})});