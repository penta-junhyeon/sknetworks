// 모바일 조건식
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/* 효성 TNC 가이드 스크립트 로더 ----------------------------------------------------- */
var commonGuide = commonGuide || {};
commonGuide.Html = (function() {
    var instance = null;
    function init() {
        instance = {
            reset:function(){
                resizeCommonActiveGuide();
                resizeCommonGuide();
                scrollCommonGuide();
                bodyGuide();
                gnbGuide();
                // depth3MoveTab();
            }
        }
        return instance;
    }
    if(instance) {
		return instance;
	} else {
		return init();
	}
})();
function resizeCommonGuide(){
    window.addEventListener('resize', () => {
        resizeCommonActiveGuide();
    });
}
function scrollCommonGuide(){
    window.addEventListener('scroll', () => {
        resizeCommonActiveGuide();
    });
}
function resizeCommonActiveGuide() {
    let windowWidth = window.innerWidth;
    let windowChangeSize = 1023;

    let header = document.querySelector('.header.guide');
    let footer = document.querySelector('.footer.guide');
    let container = document.querySelector('.container.guide');
    let index = localStorage.getItem('key');

    if(windowWidth > windowChangeSize) {
        header.classList.remove('mo');
        header.classList.add('pc');
        footer.classList.remove('mo');
        footer.classList.add('pc');
        container.classList.remove('mo');
        container.classList.add('pc');
    }
    else if(windowWidth <= windowChangeSize) {
        header.classList.remove('pc');
        header.classList.add('mo');
        footer.classList.remove('pc');
        footer.classList.add('mo');
        container.classList.remove('pc');
        container.classList.add('mo');
    }
}
function bodyGuide() {
    const _body = document.querySelector('body');
    _body.classList.add('guide');
}
function gnbGuide() {
    const buttonGuideGnb = document.querySelectorAll('.button-guide-gnb');
    buttonGuideGnb.forEach(el => {
        el.addEventListener('click', () => {
            if(!el.classList.contains('active')){
                el.classList.add('active');
                if(el.closest('.header')) el.closest('.header-logo').nextElementSibling.classList.add('open');

            } else {
                el.classList.remove('active');
                if(el.closest('.header')) el.closest('.header-logo').nextElementSibling.classList.remove('open');
            }
        });
    });
    const listGuideGnb = document.querySelectorAll('.accordian-button-view-list .accordian-depth1-add-view-button');
    listGuideGnb.forEach(el => {
        el.addEventListener('click', () => {
            if(!el.closest('.depth1-item').classList.contains('active')) {
                el.closest('.depth1-item').classList.add('active');
            } else {
                el.closest('.depth1-item').classList.remove('active');
            }
        });
    });
    const buttonAddView = document.querySelectorAll('.guide .button-add-view');
    buttonAddView.forEach(el => {
        el.addEventListener('click', () => {
            if(!el.closest('.guide .button-add-view').classList.contains('active')) {
                el.closest('.guide .button-add-view').classList.add('active');
                const listGuideGnb = document.querySelectorAll('.guide-gnb-wrap .accordian-button-view-list .accordian-depth1-add-view-button');
                const addH = 50
                if(el.closest('.accordian-depth1-item')) {
                    let subMenuLength = el.closest('.accordian-depth1-item-inner').nextElementSibling.children.length;
                    el.closest('.accordian-depth1-item-inner').nextElementSibling.style.maxHeight = subMenuLength * addH +'rem';
                }
            } else {
                el.closest('.guide .button-add-view').classList.remove('active');
                if(el.closest('.accordian-depth1-item')) el.closest('.accordian-depth1-item-inner').nextElementSibling.style.maxHeight = 0;
            }
        });
    });
    const dep1Link = $('.accordian-depth1-link');
    const subLink = $('.accordian-depth2-link');
    var headerH = $('.header').outerHeight();
    var addH = 30;
    var moveSpeed = 500;
    subLink.on('click',function(){
        var index = $(this).parents('.depth2-item').index(); // 클릭한 요소 인덱스
        //var url = document.location.href; // 현재 url 경로
        var url =  window.location.pathname; // 현재 url 경로
        var urlMove = $(this).parents('.depth1-item').find('.accordian-depth1-link').attr('href'); // 이동할 url 경로
        // var urlRemove = url.substring(0,url.indexOf("/html")); // url에서 상대경로를 제외한 나머지 문자열
        // var path = url.replace(urlMove, ""); // 상대경로만 뽑아내기
        var path = '../..' + url.replace(urlMove); // 상대경로만 뽑아내기
        localStorage.setItem('key',index);
        // localStorage를 통해 key값을 storage에 저장하여 페이지가 이동되어도 index값을 유지할 수 있음

        // path == urlMove ? $('html,body').animate({scrollTop: ($('.contents').eq(index).offset().top - headerH - addH)},moveSpeed) : document.location.href = urlMove;
        // 현재 상대경로와 이동할 상대경로가 같다면 그 페이지에서 scroll, 아니라면 urlMove로 페이지 이동
        // alert(
        //     'path = ' + path + '\n' +
        //     'urlMove = ' + urlMove
        // );
        if(path == urlMove) {
            $('html,body').animate({scrollTop: ($('.contents').eq(index).offset().top - headerH - addH)},moveSpeed);
            return false;
        } else if(path != urlMove) {
            document.location.href = urlMove;
        } else {
            console.log("error!!");
        }
    });
    if(localStorage.getItem('key')){
        headerH = $('.header').outerHeight();
        var index = localStorage.getItem('key');
        $('html,body').animate({scrollTop: ($('.contents').eq(index).offset().top - headerH - addH)},moveSpeed,
            function() {
                window.localStorage.removeItem('key');
            }
        );
        // console.log("key : true");
    } else {
        // console.log("key : false");
    }
}

// footer familysite 클릭이벤트
function familySite() {
    const familySiteBtn = document.querySelectorAll('.familysite-button');
    familySiteBtn.forEach(el => {
        el.addEventListener('click', () => {
            (!el.classList.contains('active')) ? el.classList.add('active') : el.classList.remove('active');
        });
    });
}



/* 효성 TNC 스크립트 로더 ----------------------------------------------------- */

var commonTNC = commonTNC || {};
commonTNC.Html = (function() {
    var instance = null;
    function init() {
        instance = {
            reset:function(){
                resizeCommonActiveTNC();
                resizeCommonTNC();
                scrollCommonTNC();
                hyosungTNCgnb();
                footerFamilySite();
                naviDepth3_Select();
                tabFunction();
                closePopupDim();
            }
        }
        return instance;
    }
    if(instance) {
		return instance;
	} else {
		return init();
	}
})();
function resizeCommonTNC(){
    window.addEventListener('resize', () => {
        resizeCommonActiveTNC();
    });
}
function scrollCommonTNC(){
    window.addEventListener('scroll', () => {
        resizeCommonActiveTNC();
    });
}
function resizeCommonActiveTNC() {
    const _window = window;
    const windowWidth = _window.innerWidth;
    const tabletChangeSize = 1259;
    const mobileChangeSize = 1023;

    const header = document.querySelector('.header.tnc');
    const footer = document.querySelector('.footer.tnc');
    const container = document.querySelector('.container.tnc');

    if(windowWidth > tabletChangeSize) {
        header.classList.remove('ta');
        header.classList.remove('mo');
        header.classList.add('pc');
        footer.classList.remove('ta');
        footer.classList.remove('mo');
        footer.classList.add('pc');
        container.classList.remove('ta');
        container.classList.remove('mo');
        container.classList.add('pc');
    }
    else if(windowWidth <= tabletChangeSize && windowWidth > mobileChangeSize) {
        header.classList.remove('pc');
        header.classList.remove('mo');
        header.classList.add('ta');
        footer.classList.remove('pc');
        footer.classList.remove('mo');
        footer.classList.add('ta');
        container.classList.remove('pc');
        container.classList.remove('mo');
        container.classList.add('ta');
    }
    else if(windowWidth <= mobileChangeSize) {
        header.classList.remove('pc');
        header.classList.remove('ta');
        header.classList.add('mo');
        footer.classList.remove('pc');
        footer.classList.remove('ta');
        footer.classList.add('mo');
        container.classList.remove('pc');
        container.classList.remove('ta');
        container.classList.add('mo');
    }
}

// footer family-site
function footerFamilySite() {
    const accordionFooterFamilySite = $('.accordion-footer-family-site');
    const buttonFamilySite = accordionFooterFamilySite.find('.button-family-site');
    buttonFamilySite.on('click', function(){
        const _bfsThis = $(this);
        (!_bfsThis.hasClass('active')) ?
        _bfsThis.addClass('active') :
        _bfsThis.removeClass('active');
    });
}

// 서브 공통 active evevnt
function contentsSubScrollEventCustom() {
    let _window = $(window);
    let conH = {
        h0000: 0,
        winH60per : parseInt(_window.innerHeight() * 0.6),
        winHAd : parseInt(_window.innerHeight() * 0.7) // 커스텀 조절 마이너스 범위
    };
    let windowScrollTop = _window.scrollTop();
    let contentsSection = $('.container-inner .contents-section');

    if(contentsSection.hasClass('contents-section')) {
        const contentsArticle = contentsSection.find('.contents-article');
        //const tabContentsItem = contentsArticle.find('.tab-sustainability-content-item')
        for(let i=0; i<contentsSection.length; i++) {
            if(parseInt(windowScrollTop) >= (contentsSection.eq(i).offset().top - conH.winH60per)) {
                contentsSection.eq(i).addClass('active');
            } else if(parseInt(windowScrollTop) < (contentsSection.eq(i).offset().top - conH.winH60per)) {
                contentsSection.eq(i).removeClass('active');
            } else {
                // console.log('옵셋 값 : ' + (contentsSection.eq(i).offset().top - conH.h0000) + ' => 에러!!');
            }
        }
        for(let j=0; j<contentsArticle.length; j++) {
            if(parseInt(windowScrollTop) >= (contentsArticle.eq(j).offset().top - conH.winH60per)) {
                contentsArticle.eq(j).addClass('active');
            } else if(parseInt(windowScrollTop) < (contentsArticle.eq(j).offset().top - conH.winH60per)) {
                contentsArticle.eq(j).removeClass('active');
            } else {
                // console.log('옵셋 값 : ' + (contentsArticle.eq(j).offset().top - conH.winH60per) + ' => 에러!!');
            }
        }
    }
}
function contentsSubScrollEventCustom01() {
    let _window = $(window);
    let conH = {
        h0000: 0,
        winH60per : parseInt(_window.innerHeight() * 0.6),
        winHAd : parseInt(_window.innerHeight() * 0.7) // 커스텀 조절 마이너스 범위
    };
    let windowScrollTop = _window.scrollTop();
    let contentsSection = $('.container-inner .contents-section');

    if(contentsSection.hasClass('contents-section')) {
        const contentsArticle = contentsSection.find('.contents-article');
        //const tabContentsItem = contentsArticle.find('.tab-sustainability-content-item')
        for(let i=0; i<contentsSection.length; i++) {
            if(parseInt(windowScrollTop) >= (contentsSection.eq(i).offset().top - conH.h0000)) {
                contentsSection.eq(i).addClass('active');
            } else if(parseInt(windowScrollTop) < (contentsSection.eq(i).offset().top - conH.h0000)) {
                contentsSection.eq(i).removeClass('active');
            } else {
                // console.log('옵셋 값 : ' + (contentsSection.eq(i).offset().top - conH.h0000) + ' => 에러!!');
            }
        }
        for(let j=0; j<contentsArticle.length; j++) {
            if(parseInt(windowScrollTop) >= (contentsArticle.eq(j).offset().top - conH.h0000)) {
                contentsArticle.eq(j).addClass('active');
            } else if(parseInt(windowScrollTop) < (contentsArticle.eq(j).offset().top - conH.h0000)) {
                contentsArticle.eq(j).removeClass('active');
            } else {
                // console.log('옵셋 값 : ' + (contentsArticle.eq(j).offset().top - conH.winH60per) + ' => 에러!!');
            }
        }
    }
}

/******************************* Sub Navi & Key Visual*******************************/

// 서브 공통 MouseWheel naviDepth3
function subPageIntroWheel_01() {

    var controller1 = null;
    var controller2 = null;
    var width = $(window).innerWidth();

    function initScrollMagic(){
        controller1 = new ScrollMagic.Controller();

        var scrollTrigger1 = new ScrollMagic.Scene({
            triggerElement: '.contents-section2',
            triggerHook: 'onEnter',
            offset: 0,
            reverse: true,
        })
        .on('enter', function() {
            var contentsSection2_T = $('.contents-section.contents-section2').offset().top;

            $('html, body').stop().animate({ scrollTop: contentsSection2_T }, 1000, 'easeOutCubic');
        })
        //.addIndicators()
        .addTo(controller1);


        controller2 = new ScrollMagic.Controller();

        var scrollTrigger2 = new ScrollMagic.Scene({
            triggerElement: '.contents-section2',
            triggerHook: 'onLeave',
            offset: -10,
            reverse: true,
        })
        .on('leave', function() {
            let win_H = $(window).innerHeight();
            let win_H_half = parseInt(win_H / 2);
            $('html, body').stop().animate({ scrollTop: win_H_half}, 1000,'easeOutCubic');
        })
        //.addIndicators()
        .addTo(controller2);
    }

    if( width > 1024) {
        initScrollMagic()
    }

    $(window).resize(function(){
        var width = $(window).innerWidth();
        if( width < 1024 ) {
            if (controller1) {
                controller1 = controller1.destroy(true)
            }
        } else if ( width >= 1024 ) {
            if ( !controller1 ) {
                initScrollMagic()
            }
        }

        if( width < 1024 ) {
            if (controller2) {
                controller2 = controller2.destroy(true)
            }
        } else if ( width >= 1024 ) {
            if ( !controller2 ) {
                initScrollMagic()
            }
        }
    })
}

// 서브 공통 MouseWheel naviDepth3, naviDepth4
function subPageIntroWheel_02() {

    var controller1 = null;
    var controller2 = null;
    var width = $(window).innerWidth();

    function initScrollMagic(){
        controller1 = new ScrollMagic.Controller();

        var scrollTrigger1 = new ScrollMagic.Scene({
            triggerElement: '.contents-section2',
            triggerHook: 'onEnter',
            offset: -100,
            reverse: true,
        })
        .on('enter', function() {
            let localNavi3 = $('.navi.depth3');
            let localNavi3_H = parseInt(localNavi3.innerHeight());
            let localNavi4 = $('.navi.depth4');
            let naviDepth4_H = parseInt($('.navi.depth4').innerHeight());

            let contentsSection1_H = parseInt($('.contents-section.contents-section1').innerHeight());
            let contentsSection2_T = $('.contents-section.contents-section2').offset().top;

            $('html, body').stop().animate({ scrollTop: contentsSection1_H + localNavi3_H }, 1000, 'easeOutCubic');
        })
        //.addIndicators()
        .addTo(controller1);


        controller2 = new ScrollMagic.Controller();

        var scrollTrigger2 = new ScrollMagic.Scene({
            triggerElement: '.contents-section2',
            triggerHook: 'onLeave',
            offset: -100,
            reverse: true,
        })
        .on('leave', function() {
            let win_H = $(window).innerHeight();
            let win_H_half = parseInt(win_H / 2);
            $('html, body').stop().animate({ scrollTop: win_H_half}, 1000,'easeOutCubic');
        })
        //.addIndicators()
        .addTo(controller2);
    }

    if( width > 1024) {
        initScrollMagic()
    }

    $(window).resize(function(){
        var width = $(window).innerWidth();
        if( width < 1024 ) {
            if (controller1) {
                controller1 = controller1.destroy(true)
            }
        } else if ( width >= 1024 ) {
            if ( !controller1 ) {
                initScrollMagic()
            }
        }

        if( width < 1024 ) {
            if (controller2) {
                controller2 = controller2.destroy(true)
            }
        } else if ( width >= 1024 ) {
            if ( !controller2 ) {
                initScrollMagic()
            }
        }
    })
}

// 서브 공통 Info Interaction
function localInteraction_04_01() {
    var localInfo = $('.local-head');

    let sustainability_LocalTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "local-head1",
            trigger: '[local-interaction="sustainability-01"]',
            start: "3% top",
            end: "center center",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none reverse none",
            onEnter: () => {
                localInfo.addClass('action-01');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localInfo.removeClass('action-01');
            }
        }
    });

    /*
    sustainability_LocalTrigger_01.addLabel('motion-01')
    .fromTo(
        localInfo.find('.local-subject:nth-child(1)'),
        { y: '-50%'},
        { y: '-100%'},
        'motion-01'
    )
    .fromTo(
        localInfo.find('.local-subject:nth-child(2)'),
        { y: '50%'},
        { y: '100%'},
        'motion-01'
    )

    ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function() {
            sustainability_LocalTrigger_01.addLabel('motion-01')
            .fromTo(
                localInfo.find('.local-info-wrap'),
                { height: 0 + 'rem'},
                { height: 47.222 + 'vh'},
                'motion-01'
            )
            .fromTo(
                localInfo.find('.local-subject:nth-child(1)'),
                { paddingBottom: 0 + 'rem'},
                { paddingBottom: 1 + 'rem'},
                'motion-01'
            )
            .fromTo(
                localInfo.find('.local-subject:nth-child(2)'),
                { paddingTop: 0 + 'rem'},
                { paddingTop: 1 + 'rem'},
                'motion-01'
            )

            // sustainability_LocalTrigger_01.addLabel('motion-02')
            // .to(
            //     localInfo.find('.local-info-wrap'),
            //     { height: 67.87 + 'vh'},
            //     'motion-02+=0.2'
            // )
            // .fromTo(
            //     localInfo,
            //     { maxWidth: 133.6 + 'rem'},
            //     { maxWidth: 100 + '%'},
            //     'motion-02+=0.2'
            // )
        },
        '(max-width: 1023.9px)': function() {
            sustainability_LocalTrigger_01.addLabel('motion-01')
            .fromTo(
                localInfo.find('.local-info-wrap'),
                { height: 0 + 'rem'},
                { height: 20.935 + 'vh'},
                'motion-01'
            )
            .fromTo(
                localInfo.find('.local-subject:nth-child(1)'),
                { paddingBottom: 0 + 'rem'},
                { paddingBottom: 2 + 'rem'},
                'motion-01'
            )
            .fromTo(
                localInfo.find('.local-subject:nth-child(2)'),
                { paddingTop: 0 + 'rem'},
                { paddingTop: 2 + 'rem'},
                'motion-01'
            )

            // sustainability_LocalTrigger_01.addLabel('motion-02')
            // .to(
            //     localInfo.find('.local-info-wrap'),
            //     { height: 67.87 + 'vh'},
            //     'motion-02+=5'
            // )
            // .fromTo(
            //     localInfo,
            //     { maxWidth: 100 + '%'},
            //     { maxWidth: 100 + '%'},
            //     'motion-02+=5'
            // )
        }
    })*/

    const sustainability_LocalTrigger_02 = gsap.timeline({
        scrollTrigger: {
            id: "local-head2",
            trigger: '[local-interaction="sustainability-01"]',
            start: "bottom+=30% bottom",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localInfo.addClass('action-02');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localInfo.removeClass('action-02');
            }
        }
    });

    /*
    ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function() {
            sustainability_LocalTrigger_02.addLabel('motion-02')
            .fromTo(
                localInfo.find('.local-info-wrap'),
                { height: 20.935 + 'vh'},
                { height: 67.87 + 'vh'},
                'motion-02'
            )
            .fromTo(
                localInfo,
                { maxWidth: 133.6 + 'rem'},
                { maxWidth: 100 + '%'},
                'motion-02'
            )
        },
        '(max-width: 1023.9px)': function() {
            sustainability_LocalTrigger_02.addLabel('motion-02')
            .fromTo(
                localInfo.find('.local-info-wrap'),
                { height: 20.935 + 'vh'},
                { height: 67.87 + 'vh'},
                'motion-02'
            )
            .fromTo(
                localInfo,
                { maxWidth: 100 + '%'},
                { maxWidth: 100 + '%'},
                'motion-02'
            )
        }
    })*/
}

//Company intro
function localInteraction_04_02() {
    const companyHead = $('.local.company-common .local-head-wrap .local-desc');
    const header = $('.header.tnc.site');
    var width = $(window).innerWidth();

    if( width > 1024 ) {
        header.css('background-color', 'transparent');
    }
    
    const company_LocalTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "company-head1",
            trigger: '[local-interaction="company-01"]',
            start: "top top",
            end: "90% top",
            // markers: true,
            scrub: 2,
            pinSpacing: false,
            toggleActions: "play none none reverse",
        }
    });

    company_LocalTrigger_01
    .fromTo(
        companyHead,
        { left: '40%'},
        { left: '-15%' },
    )
}

//brand intro
function localInteraction_04_03() {
    const brandHeadSubject = $('.local.brand-common .local-head-wrap .local-subject');
    const brandHeadFigure = $('.local.brand-common .local-head-wrap .local-figure');
    var width = $(window).innerWidth();
    
    const brand_LocalTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "brand-head1",
            trigger: '[local-interaction="brand-01"]',
            start: "top top",
            end: "90% top",
            // markers: true,
            // scrub: 2,
            pinSpacing: false,
            toggleActions: "play none none reverse",
        }
    });

    brand_LocalTrigger_01
    .addLabel("tl1")
    .to(brandHeadSubject.find('.local-name .subject'), {
        fontSize: "40px",
        color: "#FFF",
        paddingBottom: "20px"
    }, 'tl1')
    .to(brandHeadSubject.find('.local-name .summary'), {
        fontSize: "72px",
        color: "#FFF",
    }, 'tl1')
}

// 서브 공통 naviDepth3가 따라 내려오는 공통
function naviDepth3_Interaction_01(){
    let localNavi = $('.navi.depth3');

    $(localNavi).addClass('case-1');

    const naviDepth3_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "navi-1",
            trigger: '.contents-section1',
            start: "bottom+=20% bottom",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi.removeClass('action');
            }
        }
    });
}

// 서브 공통 naviDepth3 fixed,  naviDepth4 따라 내려옴
function naviDepth3_Interaction_02(){
    let localNavi3 = $('.navi.depth3');
    let localNavi4 = $('.navi.depth4');

    $(localNavi3).addClass('case-2');
    $(localNavi4).addClass('case-1');

    const naviDepth3_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            trigger: '.contents-section1',
            start: "bottom+=20% bottom",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi3.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi3.removeClass('action');
            }
        }
    });

    const naviDepth4_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            trigger: localNavi4,
            start: "50px top",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi4.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi4.removeClass('action');
            }
        }
    });
}

//Company navi - 01 (naviDepth4 있는 경우)
function naviDepth3_Interaction_03(){
    let localNavi = $('.navi.depth3');
    let localNavi4 = $('.navi.depth4');

    $(localNavi).addClass('case-3');
    $(localNavi4).addClass('case-1');

    const naviDepth3_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "navi-1",
            trigger: '.contents-section1',
            start: "bottom+=20% bottom",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi.removeClass('action');
            }
        }
    });

    const naviDepth4_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            trigger: localNavi4,
            start: "50px top",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi4.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi4.removeClass('action');
            }
        }
    });
}

//Company navi - 02 (naviDepth3만 있는 경우)
function naviDepth3_Interaction_04(){
    let localNavi = $('.navi.depth3');
    $(localNavi).addClass('case-4');

    const naviDepth3_CaseTrigger_01 = gsap.timeline({
        scrollTrigger: {
            id: "navi-1",
            trigger: '.contents-section1',
            start: "bottom+=20% bottom",
            end: "bottom bottom",
            //markers: true,
            //scrub: 1,
            pinSpacing: false,
            //toggleActions: "play none none reverse",
            onEnter: () => {
                localNavi.addClass('action');
            },
            onLeave: () => {
            },
            onEnterBack: () => {
            },
            onLeaveBack: () => {
                localNavi.removeClass('action');
            }
        }
    });
}

// naviDepth3 select
function naviDepth3_Select(){
    var container = $('.container');
    var naviDepth3 = $('.navi.depth3');
    var naviName = $('.navi.depth3').find('.navi-name');

    naviName.on('click', function(e){
        e.preventDefault();

        if(container.hasClass('mo')){
            naviDepth3.toggleClass('active');
        }
    })
}


/******************************* Sub Navi & Key Visual*******************************/

// Tab
function tabFunction() {
    const _container = $('.container')
    const tabDisplay = $(".tab-display");
    const tab = tabDisplay.find(".tab.form-1");

    tab.click(function () {
        let tabIndex = $(this).index();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        const boardDisplay = $(this).parents('.tab-display').find('.board-display');
        boardDisplay.addClass('blind')
        boardDisplay.eq(tabIndex).removeClass('blind')
    });

    const tabD2 = $('.tab-display.design-2');
    const tabD2C1 = tabD2.find('.tab.case-1');

    tabD2C1.click(function () {
        $(this).closest('.tab-item').siblings().removeClass('active');
        $(this).closest('.tab-item').addClass('active');
    });
    if(_container.hasClass('mo')) {
        tabD2.find('.tab-item').removeClass('active');
    } else {
        tabD2.find('.tab-item').eq(0).addClass('active');
    }
}

// Mobile에서 슬라이드로 바뀌는 thumbnail
// 선택자, 슬라이드 간격 입력하여 호출
function thumbSwiper(selector, spaceBetween) {
    const breakpoint = window.matchMedia('(min-width:1024px)');
    let onlyMoSwiper;
  
    const breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (onlyMoSwiper !== undefined) onlyMoSwiper.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };
  
    const enableSwiper = function () {
      onlyMoSwiper = new Swiper(selector, {
        slidesPerView: 'auto',
        spaceBetween: spaceBetween,
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}

// Mobile에서 슬라이드로 바뀌는 thumbnail type-2
function thumbSwiper2(selector, spaceBetween) {
    const breakpoint = window.matchMedia('(min-width:1024px)');
    let onlyMoSwiper;
  
    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (onlyMoSwiper !== undefined) onlyMoSwiper.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };
  
    const enableSwiper = function () {
        onlyMoSwiper = new Swiper(selector, {
            slidesPerView: 'auto',
            spaceBetween: spaceBetween,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
        });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}

// Mobile에서 슬라이드로 바뀌는 tab
function tabSwiper(selector, spaceBetween) {
    const tabD2 = $('.tab-display.design-2');
    const breakpoint = window.matchMedia('(min-width:1024px)');
    let onlyMoSwiper;
  
    const breakpointChecker = function () {
        let tabIndex1 = tabD2.find('.tab-item.active').index();
        let tabIndex2 = tabD2.find('.tab-item.swiper-slide-active').index();
      if (breakpoint.matches === true) {
        if (onlyMoSwiper !== undefined) {
            onlyMoSwiper.destroy(true, true);
            tabD2.find('.tab-item').removeClass('active');
            tabD2.find('.tab-item').eq(tabIndex2).addClass('active');
        }
        return;
      } else if (breakpoint.matches === false) {
        enableSwiper();
        onlyMoSwiper.slideTo(tabIndex1, 1000, false)
        tabD2.find('.tab-item').removeClass('active');
      }
    };
  
    const enableSwiper = function () {
      onlyMoSwiper = new Swiper(selector, {
        slidesPerView: '1.2',
        spaceBetween: spaceBetween,
      });
    };
  
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
}

// Sustainability 나눔경영 슬라이드
function safetySwiper() {
    var swiperTopNum = $('.slide-display.design-1 .slide-item.case-1').find('.swiper-slide');
	var swiperSubNum = $('.slide-display.design-1 .slide-item.case-2').find('.swiper-slide');

	var galleryTop = new Swiper('.slide-item.case-1', {
        lidesPerView: 1,
        effect: 'fade',
        fadeEffect: { crossFade: true },
		loopedSlides: swiperTopNum.length
    });

    var galleryThumbs = new Swiper('.slide-item.case-2', {
    	spaceBetween: 16,
    	slidesPerView: 1,
        breakpoints: {
            1024: {
              spaceBetween: 20
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    	loopedSlides: swiperSubNum.length
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
}

// 아코디언
function tncAccordion(){
  $(".accordion-display .accordion-button").click(function () {
    let _this = $(this);
    let accItem = $('.accordion-item');

    if(_this.closest(accItem).hasClass('active')) {
        _this.closest(accItem).removeClass('active');
    } else {
        $(".accordion-display .accordion-item").removeClass('active');
        _this.closest(accItem).addClass("active");
    }
  });
}

// Popup
function openPopup(id){
	//$(".mask").fadeIn();
	$("#"+id).addClass('active');
	$('body').addClass('popup-open');
}

function closePopup(id){
	//$(".mask").fadeOut();
	$("#"+id).removeClass('active');
    $('body').removeClass('popup-open');
}

function closePopupDim() {
    let popup = $(".popup");

    $(popup).click(function (e) {
        let _this = $(this);
        let _thisId = _this.attr('id');
        if (popup.has(e.target).length === 0) {
            $("#"+_thisId).removeClass('active');
            $('body').removeClass('popup-open');
        }
    });
}


































/*
// 서브 공통 MouseWheel
function subPageIntroWheel() {

    let move = false;

    $(window).on("wheel DOMMouseScroll", function(e) {
        if (!move) {
            move = true;
            //let curScroll;
            let win_H = $(window).innerHeight();
            let win_H_half = parseInt(win_H / 2);
            let local = $('.contents-section .local');
            let local_T = local.offset().top;
            let local_H = local.innerHeight();

            let contentsSection2_T = $('.contents-section.contents-section2').offset().top;

            if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0) {
                setTimeout(() => {
                    curScroll = $(window).scrollTop();
                    console.log(curScroll)

                    if (curScroll > win_H_half && curScroll < contentsSection2_T ) {
                        $('body').on('scroll touchmove', function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }, { passive: false });
                        $('html, body').stop().animate({ scrollTop: contentsSection2_T }, 1000,'easeOutCubic',function() {
                            $('body').off('scroll touchmove');
                            move = false;
                        });
                    } else {
                        move = false;
                    }
                }, 100);
            } else {
                setTimeout(() => {
                    curScroll = $(window).scrollTop();
                    console.log(curScroll)
                    if (curScroll < contentsSection2_T && curScroll > win_H_half) {
                        $('body').on('scroll touchmove', function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }, { passive: false });
                        $('html, body').stop().animate({ scrollTop: win_H_half }, 700,'easeOutCubic', function() {
                            $('body').off('scroll touchmove');
                            move = false;
                        });
                    } else {
                        move = false;
                    }
                }, 100);
            }
        }
    });
}
// 서브 공통 depth3
function tabDepth3_Move() {
    let _window = $(window);
    let _container = $('.container');
    let tabModule = $('.local-navi.depth3');

    tabModule.each(function(){
        let _this = $(this);
        let tabMarginLeft = 0;
        let leftPosition = 0;
        let defaultWidth = 0;
        let tabDisplayWrap = _this.find('.tab-list');
        let tabLink = _this.find('.tab-item .tab-text');

        var resizeTime1 = setTimeout(function(){
            for(let i=0; i<tabDisplayWrap.find('.tab-item').length; i++) {
                if(tabDisplayWrap.find('.tab-item').eq(i).hasClass('current')){
                    defaultWidth = tabDisplayWrap.find('.tab-item').eq(i).find('.tab-text').innerWidth();
                    for(let j=0; j<=i; j++) {
                        if(j > 0){
                            leftPosition = leftPosition + (tabDisplayWrap.find('.tab-item').eq(j-1).find('.tab-text').innerWidth() + tabMarginLeft);
                        } else {
                            leftPosition = 0;
                        }
                    }
                    tabModule.find('.background').addClass('active');
                }
            }
            tabModule.find('.background').css({
                'width': (defaultWidth * 0.1) + 'rem',
                'left': (leftPosition * 0.1) + 'rem'
            });
        }, 300, function() {
            clearTimeout(resizeTime1);
        });

        tabBtn.on('click', function() {
            e.preventDefault();

            const _bThis = $(this);
            let tabLayer = _bThis.closest('.tab-display').siblings('.tab-layer').find('.tab-layer-item');
            _bThis.closest('.tab-display').removeClass('defaultLoad');
            _bThis.parent().siblings('.tab-item').removeClass('active');
            _bThis.parent().addClass('active');
            _bThis.parent().siblings('.tab-bg').addClass('active');

            for(let i=0; i<=_bThis.parent().index(); i++) {
                if(i > 0){
                    leftPosition = leftPosition + (_bThis.parent().siblings('.tab-item').eq(i-1).find('.tab-btn').innerWidth() + tabMarginLeft);
                } else {
                    leftPosition = 0;
                }
            }

            _bThis.parent().siblings('.tab-bg').css({
                'width': (_bThis.innerWidth() * 0.1) + 'rem',
                'left': (leftPosition * 0.1) + 'rem'
            });

            leftPosition = 0;
            tabLayer.removeClass('active');
            tabLayer.eq(_bThis.parent().index()).addClass('active');
        });
    });
}
//3뎁스탭
function depth3MoveTab() {
    const tabModuleArea = $('.tab-data');
    tabModuleArea.each(function(){
        const _window = $(window);
        const _this = $(this);
        const _container = $('.container');
        let tabMarginLeft = 0;
        let leftPosition = 0;
        let tabDisplayWrap = _this.find('.tab-display');
        let tabBtn = tabDisplayWrap.find('.tab-btn');
        let tabLayerWrap = _this.find('.tab-layer');
        let defaultWidth = 0;

        var resizeTime1 = setTimeout(function(){
            for(let i=0; i<tabDisplayWrap.find('.tab-item').length; i++) {
                if(tabDisplayWrap.find('.tab-item').eq(i).hasClass('active')){
                    tabLayerWrap.find('.tab-layer-item').eq(i).addClass('active');
                    defaultWidth = tabDisplayWrap.find('.tab-item').eq(i).find('.tab-btn').innerWidth();
                    for(let j=0; j<=i; j++) {
                        if(j > 0){
                            leftPosition = leftPosition + (tabDisplayWrap.find('.tab-item').eq(j-1).find('.tab-btn').innerWidth() + tabMarginLeft);
                        } else {
                            leftPosition = 0;
                        }
                    }
                    tabDisplayWrap.find('.tab-bg').addClass('active');
                }
            }
            tabDisplayWrap.find('.tab-bg').css({
                'width': (defaultWidth * 0.1) + 'rem',
                'left': (leftPosition * 0.1) + 'rem'
            });
        },300, function() {
            clearTimeout(resizeTime1);
        });

        _window.on('resize', () => {
            var resizeTime = setTimeout(function(){
                leftPosition = 0;
                for(let i=0; i<tabDisplayWrap.find('.tab-item').length; i++) {
                    if(tabDisplayWrap.find('.tab-item').eq(i).hasClass('active')){
                        defaultWidth = tabDisplayWrap.find('.tab-item').eq(i).find('.tab-btn').innerWidth();
                        for(let j=0; j<=i; j++) {
                            if(j > 0){
                                leftPosition = leftPosition + (tabDisplayWrap.find('.tab-item').eq(j-1).find('.tab-btn').innerWidth() + tabMarginLeft);
                            } else {
                                leftPosition = 0;
                            }
                        }
                        tabDisplayWrap.find('.tab-bg').addClass('active');
                    }
                }
                tabDisplayWrap.find('.tab-bg').css({
                    'width': (defaultWidth * 0.1) + 'rem',
                    'left': (leftPosition * 0.1) + 'rem'
                });
            },300, function(){
                clearTimeout(resizeTime);
            });
        });

        linkDepth4WrapResponsive();
        _window.resize(() => {
            linkDepth4WrapResponsive();
        });

        tabBtn.on('click', function() {
            const _bThis = $(this);
            let tabLayer = _bThis.closest('.tab-display').siblings('.tab-layer').find('.tab-layer-item');
            _bThis.closest('.tab-display').removeClass('defaultLoad');
            _bThis.parent().siblings('.tab-item').removeClass('active');
            _bThis.parent().addClass('active');
            _bThis.parent().siblings('.tab-bg').addClass('active');

            for(let i=0; i<=_bThis.parent().index(); i++) {
                if(i > 0){
                    leftPosition = leftPosition + (_bThis.parent().siblings('.tab-item').eq(i-1).find('.tab-btn').innerWidth() + tabMarginLeft);
                } else {
                    leftPosition = 0;
                }
            }

            _bThis.parent().siblings('.tab-bg').css({
                'width': (_bThis.innerWidth() * 0.1) + 'rem',
                'left': (leftPosition * 0.1) + 'rem'
            });

            leftPosition = 0;
            tabLayer.removeClass('active');
            tabLayer.eq(_bThis.parent().index()).addClass('active');
        });
    });
}
function linkDepth4WrapResponsive() {
    const _window = $(window);
    const _windowWidth = _window.innerWidth();
    const mobileSize = 1023;
    const tabModuleArea = $('.tab-data');
    if(_windowWidth > mobileSize) {
        tabModuleArea.addClass('pc');
        tabModuleArea.removeClass('mo');
        tabModuleArea.find('.link-depth4-choice-link-box').removeClass('active');
    } else {
        tabModuleArea.addClass('mo');
        tabModuleArea.removeClass('pc');
    }
}*/