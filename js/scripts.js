! function(e) {
    "use strict";

    function a() {
        var a = e(".search-btn"),
            i = e(".btn-close");
        a.on("click", function() {
            0 != e(this).closest(".header").children(".searchbar").length && (e(this).closest(".header").toggleClass("active-search"), e(this).closest(".header").children(".searchbar").toggleClass("active"))
        }), i.on("click", function() {
            e(this).closest(".header").removeClass("active-search"), e(this).closest(".searchbar").removeClass("active")
        })
    }

    function i() {
        var a = e(".cart-btn"),
            i = e("#page-wrap");
        a.each(function() {
            e(this).on("click", function() {
                e(this).siblings(".menu-cart").toggleClass("open-cart")
            })
        }), 0 == i.find(".header").length && i.on("click", function() {
            e(".menu-cart").removeClass("open-cart")
        })
    }

    function n() {
        var a = e(".header"),
            i = window.innerWidth;
        a.each(function() {
            var a = e(this).find(".navigation").data("menu-type"),
                n = e(this).find(".menu-item-has-children"),
                t = e(this).find(".mobile-nav-menu").data("menu-number");
            if (a >= i) {
                e("body").prepend('<div class="menu-mobile-' + t + '" data-number="' + t + '"></div>');
                var s = e(this).find(".navigation");
                s.find("ul.sub-menu").prepend('<li class="nav-back"><a href="#"><i class="fa fa-angle-left"></i>Back</a></li>'), s.find(".menu-item-has-children").hasClass("activeHover") && s.find(".activeHover").addClass("anchorHover").removeClass("activeHover"), s.find(".menu-item-has-children").hasClass("megamenu") && s.find(".megamenu").removeClass("megamenu"), s.appendTo(".menu-mobile-" + t), 0 != e(this).children(".navBar5").length && e(".navBar5").remove(), e(this).find(".mobile-nav-menu").addClass("il-bl"), e(".nav-back").on("click", function(a) {
                    a.preventDefault(), e(this).closest(".menu-item-has-children").removeClass("active")
                }), n.children("a:first-child").on("click", function(a) {
                    a.preventDefault(), e(this).parent().closest(".menu-item-has-children").addClass("active")
                })
            }
        });
        var n = e('[class*="menu-mobile-"]');
        0 != n.length && n.each(function() {
            var n = e(this).find(".navigation").data("menu-type");
            if (i > n) {
                var t = e(this).data("number"),
                    s = e(this);
                s.find(".nav-back").remove(), a.each(function() {
                    var a = e(this).find(".mobile-nav-menu").data("menu-number");
                    if (t == a) {
                        var i = s.find(".navigation");
                        e(this).children(".main-header").hasClass("main-header-5") ? (e(this).append('<div class="navBar5"><div class="container"></div></div>'), i.appendTo(e(this).children(".navBar5").children(".container"))) : e(this).children(".main-header").hasClass("main-header-6") ? i.prependTo(e(this).children(".navBar6").children(".container")) : i.appendTo(e(this).children(".main-header").children(".container")), s.remove(), e(this).find(".mobile-nav-menu").removeClass("il-bl");
                        var n = e(this).find(".navigation");
                        n.find('[class*="mega-col-"]').addClass("megamenu"), n.find(".anchorHover").addClass("activeHover").removeClass("anchorHover")
                    }
                })
            }
        })
    }

    function t() {
        var a = (e(".header"), window.innerWidth, e("#page-wrap"));
        e(".mobile-nav-menu").on("click", function() {
            var i = e(this).data("menu-number"),
                n = e('[class*="menu-mobile-"]');
            e(this).hasClass("mobile-active") ? e(this).removeClass("mobile-active") : (e(".mobile-nav-menu").removeClass("mobile-active"), e(this).addClass("mobile-active")), n.each(function() {
                var n = e(this).data("number");
                i == n ? e(this).toggleClass("fixSfr") : e(this).removeClass("fixSfr"), 0 != e("body").find(".fixSfr").length ? (0 == e("#page-wrap").find(".header").length ? a.addClass("toggle-translate active") : a.addClass("toggle-translate"), setTimeout(function() {
                    e("html, body").addClass("overflow-hidden")
                }, 290)) : (a.removeClass("toggle-translate active"), setTimeout(function() {
                    e("html, body").removeClass("overflow-hidden")
                }, 290)), 0 == a.find(".header").length && (e(".header").toggleClass("header-active"), a.on("click", function() {
                    e(this).removeClass("toggle-translate active"), e(".header").removeClass("header-active"), e('[class*="menu-mobile-"]').removeClass("fixSfr"), e(".mobile-nav-menu").removeClass("mobile-active"), e("html, body").removeClass("overflow-hidden")
                }))
            })
        }), e(".navigation a").on("click", function(a) {
            "#" == e(this).attr("href") && a.preventDefault()
        })
    }

    function s() {
        var a = e(".header");
        if (1 == a.length) {
            var i = a.children(".main-header"),
                n = i.outerHeight(),
                t = window.innerWidth;
            if (0 != a.children(".top-header").length) var s = a.children(".top-header").outerHeight();
            else var s = 0;
            if (i.hasClass("main-header-5")) var r = a.children(".navBar5"),
                o = r.outerHeight(),
                l = s + n + o;
            else if (i.hasClass("main-header-6")) var d = a.children(".navBar6"),
                h = d.outerHeight(),
                l = s + n + h;
            else l = s + n;
            0 == a.children().hasClass("main-header-1") && 0 == a.children().hasClass("main-header-2") && 0 == a.children().hasClass("main-header-4") && e(".fix-header").css("height", l);
            var c = e('[class*="menu-mobile-"]');
            if (0 != c.length) {
                var f = c.find(".navigation").data("menu-type");
                f >= t && 1 == a.children().hasClass("main-header-2") && (a.css("top", "0"), a.children(".main-header-2").css("background-color", "rgba(255, 255, 255, 1)"), a.children(".searchbar").removeAttr("style")), (1 == a.children().hasClass("main-header-1") || 1 == a.children().hasClass("main-header-2") || 1 == a.children().hasClass("main-header-4")) && (767 >= t ? (0 == e(".fix-header").length ? a.after('<div class="fix-header" style="height:' + l + 'px"></div>') : e(".fix-header").css("height", l), a.children().hasClass("main-header-1") && a.children(".main-header-1").css("background-color", "rgba(0, 0, 0, 1)")) : (e(".fix-header").remove(), a.children().hasClass("main-header-1") && a.children(".main-header-1").attr("style", "")))
            } else {
                var m = a.find(".navigation").data("menu-type");
                t > m && 1 == a.children().hasClass("main-header-2") && (a.css("top", "40px"), a.children(".main-header-2").removeAttr("style"), a.children(".searchbar").css({
                    opacity: "0",
                    visibility: "hidden"
                }))
            }
        }
    }

    function r() {
        var a = e(".header"),
            i = e("#page-wrap");
        if (1 == a.length) {
            var n = a.children(".main-header"),
                t = n.outerHeight(),
                s = a.children(".searchbar"),
                r = window.innerWidth;
            if (0 != a.children(".top-header").length) var o = a.children(".top-header").outerHeight();
            else var o = 0;
            if (a.removeClass("header-fixed"), n.hasClass("main-header-5")) var l = a.children(".navBar5"),
                d = l.outerHeight(),
                h = o + t + d;
            else if (n.hasClass("main-header-6")) var c = a.children(".navBar6"),
                f = c.outerHeight(),
                h = o + t + f;
            else h = o + t;
            if (0 == a.children().hasClass("main-header-1") && 0 == a.children().hasClass("main-header-2") && 0 == a.children().hasClass("main-header-4")) 0 == e(".fix-header").length && a.after('<div class="fix-header" style="height:' + h + 'px"></div>');
            else {
                if (1 == a.children().hasClass("main-header-2")) {
                    a.css("top", "40px"), a.children(".main-header-2").removeAttr("style"), a.children(".searchbar").css({
                        opacity: "0",
                        visibility: "hidden"
                    });
                    var m = e('[class*="menu-mobile-"]'),
                        r = window.innerWidth;
                    if (0 != m.length) {
                        var u = m.find(".navigation").data("menu-type");
                        u >= r && (a.css("top", "0"), a.children(".main-header-2").css("background-color", "rgba(255, 255, 255, 1)"), a.children(".searchbar").removeAttr("style"))
                    }
                }
                767 >= r ? (0 == e(".fix-header").length ? a.after('<div class="fix-header" style="height:' + h + 'px"></div>') : e(".fix-header").css("height", h), a.children().hasClass("main-header-1") && a.children(".main-header-1").css("background-color", "rgba(0, 0, 0, 1)")) : (e(".fix-header").remove(), a.children().hasClass("main-header-1") && a.children(".main-header-1").attr("style", ""))
            }
            1 == i.find(".section").hasClass("page-not-found") && (a.children(".main-header").hasClass("main-header-6") && (a.children(".main-header").css({
                opacity: "0",
                visibility: "hidden"
            }), s.addClass("searchbar-fixed")), a.addClass("header-fixed header-fixed--unpin").removeClass("header-fixed--pin active-search"), i.css("padding-top", 0), a.children(".top-header").remove(), a.siblings(".fix-header").remove());
            var v = 0;
            e(window).scroll(function(r) {
                var l = e(this).scrollTop();
                o + t >= l && n.hasClass("main-header-6") ? 1 == i.find(".section").hasClass("page-not-found") ? 0 == l && (a.addClass("header-fixed header-fixed--unpin").removeClass("header-fixed--pin active-search"), a.children(".main-header").css({
                    opacity: "0",
                    visibility: "hidden"
                }), s.addClass("searchbar-fixed").removeClass("active")) : (a.removeClass("header-fixed header-fixed--pin header-fixed--unpin"), s.removeClass("searchbar-fixed")) : o >= l && !n.hasClass("main-header-6") ? 1 == i.find(".section").hasClass("page-not-found") ? 0 == l && (a.addClass("header-fixed header-fixed--unpin").removeClass("header-fixed--pin active-search"), i.css("padding-top", 0), a.children(".top-header").remove(), a.siblings(".fix-header").remove(), s.removeClass("active")) : (a.removeClass("header-fixed header-fixed--pin header-fixed--unpin"), s.removeClass("searchbar-fixed"), n.hasClass("main-header-1") && (n.removeClass("black"), n.hasClass("bd-anchor") && n.addClass("bd-b-alpha").removeClass("bd-anchor"))) : l > v && l > 300 ? (a.removeClass("header-fixed--pin").addClass("header-fixed--unpin"), n.hasClass("main-header-1") && (n.addClass("black"), n.hasClass("bd-b-alpha") && n.addClass("bd-anchor").removeClass("bd-b-alpha"))) : l > 300 && (a.removeClass("header-fixed--unpin").addClass("header-fixed header-fixed--pin"), s.addClass("searchbar-fixed")), v = l
            })
        }
    }

    function o() {
        var a = e("#home-media"),
            i = a.data("home-media");
        e(".tp-banner").length && jQuery(".tp-banner").show().revolution({
            dottedOverlay: "none",
            delay: 7000,
            startwidth: 1170,
            startheight: i,
            hideThumbs: 200,
            hideTimerBar: "on",
            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,
            navigationType: "none",
            navigationArrows: "solo",
            navigationStyle: "",
            touchenabled: "on",
            onHoverStop: "on",
            swipe_velocity: .7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: !1,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            keyboardNavigation: "on",
            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,
            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 0,
            soloArrowLeftVOffset: 0,
            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 0,
            soloArrowRightVOffset: 0,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",
            spinner: "spinner1",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            forceFullWidth: "off",
            hideThumbsOnMobile: "off",
            hideNavDelayOnMobile: 1500,
            hideThumbsUnderResolution: 0,
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "rs-plugin/videojs/",
            fullScreenOffsetContainer: ""
        })
    }

    function l() {
        if (e(".client-slider").length > 0 && e(".client-slider").owlCarousel({
                margin: 30,
                autoplay: !0,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !0,
                loop: !0,
                nav: !1,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    641: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1200: {
                        items: 6
                    }
                }
            }), e(".testimonial-slider").length > 0) {
            var a = e(".testimonial-slider").data("number-slide");
            e(".testimonial-slider").owlCarousel({
                margin: 30,
                autoplay: !0,
                autoplayTimeout: 5e3,
                autoplayHoverPause: !0,
                loop: !0,
                nav: !1,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                dots: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: a
                    },
                    1200: {
                        items: a
                    }
                }
            })
        }
        e(".portfolio-slider").length > 0 && e(".portfolio-slider").owlCarousel({
            margin: 30,
            autoplay: !0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            loop: !0,
			items:4,
			scrollPerPage : true,
            nav: !0,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            dots: !0,
            responsive: {
                0: {
                    items: 1
                },
                641: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1600: {
                    items: 4
                }
            }
        }), e(".product-thumb-list-slider").length > 0 && e(".product-thumb-list-slider").owlCarousel({
            margin: 8,
            autoplay: !0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            loop: !0,
            nav: !1,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            dots: !1,
            responsive: {
                0: {
                    items: 2
                },
                481: {
                    items: 4
                }
            }
        });
        var i = e(".work-slider"),
            n = e(".work-item-slider"),
            t = !1,
            s = 300;
        i.length > 0 && i.owlCarousel({
            autoplay: !1,
            loop: !1,
            nav: !0,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            dots: !1,
            responsive: {
                0: {
                    items: 1
                }
            }
        }).on("changed.owl.carousel", function(e) {
            t || (t = !0, n.trigger("to.owl.carousel", [e.item.index, s, !0]), n.find(".owl-item").removeClass("current"), n.find(".owl-item").eq(e.item.index).addClass("current"), t = !1)
        }), n.length > 0 && n.owlCarousel({
            margin: 30,
            autoplay: !0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            loop: !1,
            nav: !1,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            dots: !1,
            responsive: {
                0: {
                    items: 1
                },
                481: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        }).on("click", ".owl-item", function(a) {
            i.trigger("to.owl.carousel", [e(this).index(), s, !0]), e(this).siblings().removeClass("current"), e(this).addClass("current"), a.preventDefault()
        }).on("changed.owl.carousel", function(e) {
            t || (t = !0, i.trigger("to.owl.carousel", [e.item.index, s, !0]), t = !1)
        })
    }

    function d() {
        e(".isotope-grid-wrapper").each(function() {
            var a = e(this),
                i = a.find(".portfolio-item, .grid-sizer"),
                n = a.data("column-gap"),
                t = a.data("column-gap-horizotal"),
                s = a.data("column-gap-vertical");
            "undefined" !== a.attr("data-column-gap-horizotal") && (a.find(".isotope-grid-row").css({
                "margin-left": -t / 2,
                "margin-right": -t / 2
            }), a.find(".portfolio-item").css({
                "padding-left": t / 2,
                "padding-right": t / 2
            })), "undefined" !== a.attr("data-column-gap-vertical") && (a.find(".isotope-grid-row").css({
                "margin-top": -s / 2,
                "margin-bottom": -s / 2
            }), a.find(".portfolio-item").css({
                "padding-left": s / 2,
                "padding-right": s / 2
            })), "undefined" !== a.attr("data-column-gap") && (a.find(".isotope-grid-row").css({
                margin: -n / 2
            }), a.find(".portfolio-item").css({
                padding: n / 2
            })), 0 == a.attr("data-column-gap") && i.each(function() {
                if (0 != e(this).find("h5").length) {
                    var a = e(this).find("h5 > a").html();
                    e(this).find("a.overlay").append('<span class="h5 text-uppercase">' + a + "</span>"), e(this).find(".portfolio-media").css("margin-bottom", "-5px"), e(this).find("h5").remove()
                }
            });
            var r = a.find(".isotope-grid"),
                o = a.siblings(".filters");
            o.on("click", "a", function() {
                var a = e(this).attr("data-filter");
                return e(".current", o).removeClass("current"), e(this).addClass("current"), r.isotope({
                    layoutMode: "masonry",
                    itemSelector: ".portfolio-item",
                    filter: a
                }), !1
            })
        })
    }

    function h() {
        e(".isotope-grid-wrapper").each(function() {
            var a = e(this),
                i = window.innerWidth,
                n = 1200,
                t = 992,
                s = 768,
                r = 480,
                o = a.data("column-md"),
                l = a.data("column-sm"),
                d = a.data("column-xs"),
                h = a.data("column-tn"),
                c = a.data("isotope-column"),
                f = a.find(".portfolio-item, .grid-sizer");
            r > i ? f.css("width", 100 / h + "%") : s > i ? f.css("width", 100 / d + "%") : t > i ? f.css("width", 100 / l + "%") : n > i ? f.css("width", 100 / o + "%") : f.css("width", 100 / c + "%");
            var m = a.find(".isotope-grid"),
                u = 1,
                i = Math.max(e(window).width(), window.innerWidth),
                v = a.find(".grid-sizer").width();
            Math.floor(v * u);
            m.imagesLoaded(function() {
                m.isotope({
                    layoutMode: "masonry",
                    itemSelector: ".portfolio-item",
                    transitionDuration: "0.5s"
                })
            })
        })
    }

    function c() {
        e("select").length && e("select").select2({
            minimumResultsForSearch: 1 / 0
        })
    }

    function f() {
        e(".bg-parallax").each(function() {
            y.any() ? e(this).css("background-attachment", "scroll") : e(this).parallax("50%", .2)
        })
    }

    function m() {
        var a = e(".count-number");
        a.each(function() {
            if (void 0 == e(this).attr("data-to")) {
                var a = e(this).html().match(/\d+/);
                e(this).attr("data-to", a), e(this).text("0")
            }
            e(this).waypoint(function(a) {
                e(this).countTo({
                    speed: "1500",
                    refreshInterval: 50
                })
            }, {
                triggerOnce: !0,
                offset: function() {
                    return e.waypoints("viewportHeight") - e(this).outerHeight() - 150
                }
            })
        })
    }

    function u() {
        var a = e(".progress");
        a.each(function() {
            e(this).waypoint(function(a) {
                var i = e(this).children(".progress-bar"),
                    n = i.data("progress-percent");
                i.css("width", n + "%")
            }, {
                triggerOnce: !0,
                offset: function() {
                    return e.waypoints("viewportHeight") - e(this).outerHeight() - 150
                }
            })
        })
    }

    function v() {
        var a = e(".gallery");
        a.length && (1 == a.children().length ? a.magnificPopup({
            type: "image",
            delegate: "a",
            closeOnContentClick: !0,
            closeBtnInside: !1,
            fixedContentPos: !0,
            mainClass: "mfp-no-margins mfp-with-zoom",
            image: {
                verticalFit: !0
            },
            zoom: {
                enabled: !0,
                duration: 300
            }
        }) : a.magnificPopup({
            gallery: {
                enabled: !0,
                preload: [0, 1]
            },
            delegate: "a",
            type: "image",
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                },
                buildControls: function() {
                    this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
                }
            },
            image: {
                verticalFit: !0
            },
            closeOnContentClick: !1,
            showCloseBtn: !1,
            midClick: !1
        }))
    }

    function g() {
        var a = e("#sidebar").find(".widget"),
            i = e("#footer").find(".widget"),
            n = e("#sidebar"),
            t = e("#footer");
        a.hasClass("widget_about") && n.find(".widget_about").each(function() {
            e(this).children(".social-list").addClass("black")
        }), a.hasClass("widget_subscribe") && n.find(".widget_subscribe").each(function() {
            e(this).find("input").removeClass("black")
        }), (i.hasClass("widget_linklist") || i.hasClass("widget_download")) && (t.find(".widget_linklist").each(function() {
            e(this).find("a.btn").removeClass("btn-gray").addClass("btn-black")
        }), t.find(".widget_download").each(function() {
            e(this).find("a.btn").removeClass("btn-download").addClass("btn-black")
        }))
    }

    function p() {
        var a = e(".input_quantity");
        e("input").hasClass("input_quantity") && a.each(function() {
            e(this).TouchSpin({
                verticalbuttons: !0,
                verticalupclass: "fa fa-angle-up",
                verticaldownclass: "fa fa-angle-down",
                initval: 1
            })
        })
    }

    function b() {
        var a = e(".product-image").children(".product-thumb"),
            i = e(".product-image").children(".product-thumb-list-slider");
        i.find("a.overlay").on("click", function(n) {
            n.preventDefault();
            var t = e(this).attr("data-image");
            i.find(".product-thumb").removeClass("active"), e(this).parent().addClass("active"), a.children("img").attr("src", t), a.children("a.overlay").attr("data-image", t), n.preventDefault()
        }), a.find("a.overlay").on("click", function(e) {
            i.removeClass("active"), e.preventDefault()
        })
    }

    function C() {
        var a = e(".section-header");
        a.each(function() {
            var a = e(this).data("section-center"),
                i = window.innerWidth;
            e(this).attr("data-section-center") && (a >= i ? e(this).addClass("center") : e(this).removeClass("center"))
        })
    }

    function w() {
        var a = e("[data-background]");
        a.each(function() {
            if (e(this).attr("data-background")) {
                var a = e(this).attr("data-background");
                e(this).css("background-image", "url(" + a + ")")
            }
        })
    }
    var y = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return y.Android() || y.BlackBerry() || y.iOS() || y.Opera() || y.Windows()
        }
    };
    e.fn.switchTabs = function() {
        e(this).each(function() {
            var a = e(this).children(".switch-tabs-nav"),
                i = a.siblings(".switch-tabs-body");
            i.children(".switch-content:not(:first)").hide(), a.on("click", "a", function() {
                a.children().removeClass("active"), e(this).parent().addClass("active"), i.children(".switch-content").hide();
                var n = e(this).attr("href");
                return e(n).show(), !1
            });
            var n = 0;
            a.children().each(function() {
                var a = e(this).outerWidth();
                n += a
            }), e(window).resize(function() {
                var e = a.outerWidth();
                n >= e ? a.addClass("responsive") : a.removeClass("responsive")
            }).trigger("resize")
        })
    }, a(), i(), t(), r(), o(), m(), u(), c(), l(), v(), d(), g(), p(), b(), w(), e(window).on("load", function() {
        e("#preload").addClass("completed"), e(".switch-tabs").switchTabs()
    }), e(window).on("resize", function() {
        s()
    }), e(window).on("resize", function() {
        h(), n(), f(), C()
    }).trigger("resize")
}(jQuery);