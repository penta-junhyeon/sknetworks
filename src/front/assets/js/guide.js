
// 가이드(pc,mo) 헤더 - menu 열었을 때 스크롤에 의한 백그라운드 변경
function headerBackChange() {
    const head = document.getElementById("head");
    const aside = document.getElementById("guide-list")

    aside.addEventListener("scroll",() => {
        aside.scrollTop > 0 ?
        head.classList.add('back-white'):
        head.classList.remove('back-white')
    });
}

// 가이드(pc,mo) - 헤더 메뉴 활성화/비활성화 기능
function asideToggleActive() {
    const layoutGuideList = document.getElementById("guide-list");
    layoutGuideList.classList.toggle("open-aside");
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
    new Swiper(".tab-area", {
        slidesPerView: "auto",
        freeMode: true,
    });
}

function input() {
    const form = document.querySelectorAll(".form")

    form.forEach(input => {
        if(input.classList.contains("input") || input.classList.contains("search")) {
            const inputRemove = input.querySelector(".remove")
            if(inputRemove) {
                input.addEventListener("keyup", () => {
                    const inputValue = input.querySelector(".input-elem").value;
                    inputValue ? inputRemove.style.display = "block" : inputRemove.style.display = "none";
                })
                inputRemove.addEventListener("click", () => {
                    let inputElem = input.querySelector(".input-elem");
                    inputElem.value = null;
                    inputRemove.style.display = "none";
                })
            }
            input.classList.contains("disabled") ? input.querySelector(".input-elem").setAttribute("disabled", "") : ""
        }
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
