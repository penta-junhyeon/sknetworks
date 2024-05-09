var frontCommon = frontCommon || {};
frontCommon.Html = (function () {
  var instance = null;
  function init() {
    instance = {
      reset: function () {
        frontCommonResize();
        frontCommonScroll();
        header();
        localAnimations();
      },
    };
    return instance;
  }
  if (instance) {
    return instance;
  } else {
    return init();
  }
})();

function frontCommonResize() {
  window.addEventListener("resize", () => {

  });
}

function frontCommonScroll() {
  window.addEventListener("scroll", () => {

  });
}

function localAnimations() {
    $header = $('header');
    $breadcrumb = $('.data-list.breadcrumb');

    $('[local-animation="case-1"]').each(function(){
        $this = $(this);
        $this.addClass('active');

        // $header.removeClass('light').addClass('transparent');
        $breadcrumb.removeClass('case1').addClass('case2');
    });
}

function header() {
  const _header = document.getElementById("header")
  const depth1Item = _header.querySelectorAll(".depth1-item")
  const depth1All = document.querySelectorAll('.depth1')
  const depth2WrapAll = document.querySelectorAll(".depth2-wrap")

  if (_header) {
    window.addEventListener("resize", () => {
        const _width = window.innerWidth
        if(_width >= 1024) {
            _header.classList.remove("open")
            _header.removeAttribute("style")

            for (const item of depth1All) {
                item.classList.remove("active")
            }
            for (const item of depth2WrapAll) {
                item.removeAttribute("style")
            }
        }
    })


    // depth2가 8개 이상일 때 고유 스타일 추가
    depth1Item.forEach(depth1Item => {
      const depth2List = depth1Item.querySelector(".depth2-list")
      const depth2Length = depth2List.querySelectorAll(".depth2-item").length
      if (depth2Length > 7) {
        depth2List.style.maxWidth = "73.6rem"
        depth2List.style.flexWrap = "wrap"
      }
    });

    // 언어 셀렉트버튼 기능
    const lang = document.getElementById("lang")
    const selected = lang.querySelector(".selected")
    const optionArea = lang.querySelector(".option-area")

    selected.addEventListener("click", function () {
      optionArea.classList.contains("active") ? optionArea.classList.remove("active") : optionArea.classList.add("active")
    })

    //

    _header.addEventListener("mouseenter", () => {
        if(_header.classList.contains("dark") || _header.classList.contains("transparent")) {
            _header.classList.add("hover")
        }
    })
    _header.addEventListener("mouseleave", () => {
        if(_header.classList.contains("dark") || _header.classList.contains("transparent")) {
            _header.classList.remove("hover")
        }
    })

    document.addEventListener("focusin", function(e) {
        const _target = e.target
        if(_target.closest(".dark") || _target.closest(".transparent")) {
            _header.classList.add("hover")
        } else {
            _header.classList.remove("hover")
        }
    })

    // MO > 메뉴 열기/닫기
    const navi = _header.querySelector(".site-navi")
    const util = _header.querySelector(".site-util")
    const menuHeader = _header.querySelector(".btn.menu-header")
    const menuHeadertxt = menuHeader.querySelector(".btn-text")

    let i = 1;
    for (const item of depth1Item) {
        item.style.animationDelay = (0.15 * i) + "s";
        i++;
    }

    menuHeader.addEventListener("click", function() {
        if(_header.classList.contains("open")) {
            menuHeadertxt.innerHTML = "메뉴 열기"
            _header.style.height = "5.8rem"
            setTimeout(() => {
                _header.classList.remove("open")
                for (const item of depth1All) {
                    item.classList.remove("active")
                }
                for (const item of depth2WrapAll) {
                    item.style.height = "0"
                }
            }, 300);
        } else {
            menuHeadertxt.innerHTML = "메뉴 닫기"
            navi.style.display = "block"
            util.style.display = "flex"
            _header.style.height = "100%"
            setTimeout(() => {
                _header.classList.add("open")
            }, 300);
        }
    })

    // MO > depth1 드롭다운 열림/닫힘 기능
    document.addEventListener("click", function (e) {
      const depth1 = e.target
      if (depth1.classList.contains("depth1")) {
        const depth1Item = depth1.closest(".depth1-item")
        const depth2Wrap = depth1Item.querySelector(".depth2-wrap")
        const depth2ListH = depth2Wrap.querySelector(".depth2-list").offsetHeight
        const _width = window.innerWidth
        if (_width < 1024) {
          if (depth1.classList.contains("active")) {
            depth1.classList.remove("active")
            depth2Wrap.style.height = "0"
          } else {
            depth1All.forEach(all => {
              all.classList.remove("active")
            });
            depth2WrapAll.forEach(all => {
              all.style.height = "0"
            })
            depth1.classList.add("active")
            depth2Wrap.style.height = depth2ListH + "px"
          }
        }
      }
    })
  }
}

function Tab() {

    const tabDisplay = document.querySelectorAll(".tab-display")
    tabDisplay.forEach(tab => {
        const firstTab = tab.querySelector(".tab-item:first-child")
        firstTab.classList.add("active")
    });

    const panelDisplay = document.querySelectorAll(".panel-display")
    panelDisplay.forEach(panel => {
        const panelItems = panel.querySelectorAll(".panel-item")
        panelItems.forEach((item, i) => {
            i != 0 ? item.classList.add("hidden") : ""
        });
    });
    tabDisplay.forEach((tab, tabDisplayIndex) => {
        const tabItems = tab.querySelectorAll(".tab-item")
        tabItems.forEach((item, tabIndex) => {
            const button = item.querySelector(".tab-text")
            button.addEventListener("click", () => {
                const curTab = button.closest(".tab-item")
                tabItems.forEach(item => {
                    item.classList.remove("active")
                });
                curTab.classList.add("active")

                panelDisplay.forEach((panelDisplay, panelDisplayIndex) => {
                    if(tabDisplayIndex == panelDisplayIndex) {
                        const panelItems = panelDisplay.querySelectorAll(".panel-item")
                        panelItems.forEach((item, panelIndex) => {
                            item.classList.add("hidden")
                            tabIndex == panelIndex ? item.classList.remove("hidden") : ""
                        });
                    }
                });
            })
        });
    });
    new Swiper(".tab-wrap", {
        slidesPerView: "auto",
        freeMode: true,
    });
}

function select() {
    const selects = document.querySelectorAll(".form.select.design1")

    for(const select of selects) {
        if(select) {
            const selectElement = select.querySelector("select");
            const arrowElement = select.querySelector(".arrow .blind")

            selectElement.addEventListener("keydown", function(e) {
                if(e.keyCode === 13 || (e.keyCode == 32 && !select.classList.contains("open"))) {
                    if(document.activeElement === selectElement) {
                        select.classList.toggle("open")
                    }
                }
                if(select.classList.contains("open")) {
                    arrowElement.innerHTML = "열림"
                } else {
                    arrowElement.innerHTML = "닫힘"
                }
            })
            select.addEventListener("click", () => {
                select.classList.toggle("open")
                if(select.classList.contains("open")) {
                    arrowElement.innerHTML = "열림"
                } else {
                    arrowElement.innerHTML = "닫힘"
                }
            })
            document.addEventListener("click", (e) => {
                const _target = e.target
                if(!_target.closest(".form.select")) {
                for(const select of selects) {
                    select.classList.remove("open")
                    }
                } else if(_target.closest(".form.select.open")) {
                    for(const select of selects) {
                        select.classList.remove("open")
                    }
                    _target.closest(".form.select").classList.add("open")
                }
                if(select.classList.contains("open")) {
                    arrowElement.innerHTML = "열림"
                } else {
                    arrowElement.innerHTML = "닫힘"
                }
            })
        }
    }
}

function swiperDesign1() {
    var sync1 = new Swiper(".sync1", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        effect: "fade",
        loop: true,
        controller: {
            control: sync2
        }
    });
    var sync2 = new Swiper(".sync2", {
        slidesPerView: 1,
        loopAdditionalSlides: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        controller: {
            control: sync1
        }
    });

    sync1.controller.control = sync2;
    sync2.controller.control = sync1;
}

/* 열림->닫힘 아코디언 */
function AccordionOpen() {
    var acc = document.getElementsByClassName("accordion-head");
    var i;

    for (i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

/* 닫힘->열림 아코디언 */
function AccordionClose() {
    var acc = document.getElementsByClassName("accordion-head");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }
}

/* Interaction */
function localAnimations_Case01() {
    $('[local-animation="case-1"]').each(function(){
        $this = $(this);
        $breadcrumb = $this.prev('.local-info').find('.data-list.breadcrumb');

        $breadcrumb.removeClass('case1').addClass('case2');

        setTimeout(function() {
            $breadcrumb.addClass('active1');
            $this.addClass('active1');
        }, 500);
    });

    gsap.utils.toArray('[local-animation="case-1"]').forEach((localInfo, index) => {
        var header = $(localInfo).closest('.main').prev('header');
        var breadcrumb = $(localInfo).closest('.main').find('.local-info .data-list.breadcrumb');

		gsap.to(localInfo, {
			scrollTrigger: {
				//markers: true,
				trigger: localInfo,
				start: '105% bottom',
				end: 'top bottom',

				onEnter: function(self) {
                    header.removeClass('light').addClass('transparent');
                    breadcrumb.removeClass('dark').addClass('light');
					localInfo.classList.add('active2');
				},
			}
		});
	});
}

function localAnimations_Case02() {
    $('[local-animation="case-2"]').each(function(){
        $header = $('header');
        $this = $(this);
        $breadcrumb = $this.prev('.local-info').find('.data-list.breadcrumb');
        $main = $this.parents('.main');
        $breadcrumb.removeClass('case1').addClass('case2');

        setTimeout(function() {
            $breadcrumb.addClass('active1');
            $this.addClass('active1');
        }, 500);

        setTimeout(function() {
            $breadcrumb.addClass('active2');
            $this.addClass('active2');
            $header.removeClass('light').addClass('transparent');
            $breadcrumb.removeClass('dark').addClass('light');
            setTimeout(function() {
                main.classList.add('active1');
            }, 1000);

        }, 1500);
    });
}

const sectionAnimations_Case01 = () => {
	gsap.utils.toArray('[data-bui-animation="type-1"]').forEach((section, index) => {
		gsap.to(section, {
			scrollTrigger: {
			    //markers: true,
				trigger: section,
				start: 'top 98%',
				end: 'top bottom',

				onEnter: function(self) {
					section.classList.add('active');
				},
				onLeaveBack: function(self) {
					section.classList.remove('active');
				},
			}
		});
	});
}
