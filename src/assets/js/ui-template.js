// Header Start
function hyosungTNCgnb(){
    hyosungTNCgnbMenuSitemapLink();
    hyosungTNCgnbLanguage();
    hyosungTNscrollFix();
    hyosungTNCDepthPC();
    hyosungTNCDepthMobile();
}

function hyosungTNCgnbMenuSitemapLink() {
    const _body = $('body');
    const _header =  $('.header.tnc.site');
    const menuSitemapLink = _header.find('.menu-sitemap-wrap .menu-sitemap-inner .button-sitemap-link');
    menuSitemapLink.on('click', function(){
        const _this = $(this);
        if(!_this.hasClass('active')){
            _body.addClass('scroll-hidden');
            _header.addClass('active');
            menuSitemapLink.addClass('active');
        } else {
            _body.removeClass('scroll-hidden');
            _header.removeClass('active');
            menuSitemapLink.removeClass('active');
        }
    });
}

function hyosungTNCgnbLanguage() {
    const _html = $('html');
    const _header =  $('.header.tnc.site');
    const languageWrap = _header.find('.language-wrap');
    if(_html.attr('lang') == 'ko') {
        languageWrap.find('.language-select').find('.language-select-link').find('.text').text('KR');
        languageWrap.find('.language-list').find('.language-kr').addClass('active');
    } else if(_html.attr('lang') == 'en') {
        languageWrap.find('.language-select').find('.language-select-link').find('.text').text('EN');
        languageWrap.find('.language-list').find('.language-en').addClass('active');
    } else if(_html.attr('lang') == 'zh-CN') {
        languageWrap.find('.language-select').find('.language-select-link').find('.text').text('CN');
        languageWrap.find('.language-list').find('.language-cn').addClass('active');
    }
    languageWrap.find('.language-select-link').on('mouseover focusin', function(){
        const _this = $(this);
        if(_header.hasClass('pc')){
            _this.closest('.language-wrap').addClass('active');
        }
    });
    languageWrap.on('mouseleave focusout', function(){
        const _this = $(this);
        if(_header.hasClass('pc')){
            _this.removeClass('active');
        }
    });
}

function hyosungTNCDepthPC() {
    const _header = $('.header.tnc.site');
    const gnbArea =_header.find('.gnb-area');
    const gnbSpace = gnbArea.find('.gnb-space');
    const gnbDepth1Link = _header.find('.gnb-depth1-link');
    gnbDepth1Link.on('mouseover focusin', function(){
        const _this = $(this);
        // console.log(_this.closest('.gnb-depth1-item').index());
        if(_header.hasClass('pc')){
            if(!gnbArea.find('.gnb-depth1-list').hasClass('active')){
                _this.closest('.gnb-depth1-item').addClass('active', function(){
                    var oneTimeItem = setTimeout(function(){
                        _this.closest('.gnb-depth1-list').addClass('active');
                    },300);
                });
            } else {
                _this.closest('.gnb-depth1-item').addClass('active');
            }
            /*
            if(!gnbArea.find('.gnb-depth1-item').eq(_this.closest('.gnb-depth1-item').index()).hasClass('active')){
                if(_this.closest('.gnb-depth1-item').hasClass('active')){
                    _this.closest('.gnb-depth1-list').addClass('active');
                    _this.closest('.gnb-depth1-item').addClass('active');
                }
            } else {
                _this.closest('.gnb-depth1-item').addClass('active');
            }
            */
        }
    });
    gnbDepth1Link.closest('.gnb-depth1-item').on('mouseleave focusout', function(){
        const _this = $(this);
        if(_header.hasClass('pc')){
            _this.removeClass('active');
        }
    });
    gnbArea.find('.gnb-wrap').on('mouseleave focusout', function(){
        const _this = $(this);
        if(_header.hasClass('pc')){
            _this.find('.gnb-depth1-item').removeClass('active');
            _this.find('.gnb-depth1-list').removeClass('active');
        }
    });
    gnbSpace.on('mouseleave focusout', function(){
        const _this = $(this);
        if(_header.hasClass('pc')){
            _this.closest('.gnb-area').find('.gnb-depth1-item').removeClass('active');
            _this.closest('.gnb-area').find('.gnb-depth1-list').removeClass('active');
        }
    });
}

function hyosungTNCDepthMobile() {
    const _header = $('.header.tnc.site');
    const _menuSitemapWrap = _header.find('.menu-sitemap-wrap');
    const _menuSitemapDepth1 = _menuSitemapWrap.find('.title-menu-sitemap-list-depth1');
    _menuSitemapDepth1.on('click',function(){
        const _this = $(this);
        if(_header.hasClass('ta') || _header.hasClass('mo')){
            (!_this.closest('.menu-sitemap-item-depth1').hasClass('active')) ?
            _this.closest('.menu-sitemap-item-depth1').addClass('active') :
            _this.closest('.menu-sitemap-item-depth1').removeClass('active');
            // setTimeout(funciton(){
            //     _header.removeClass('hide');
            // },500);

        }
    });
}

function hyosungTNscrollFix() {
    const _window = $(window);
    const _body = $('body.tnc-site');
    const _header = $('.header.tnc.site');
    const gnbList = _header.find('.gnb-depth1-list');
    const gnbDepth1Item = gnbList.find('.gnb-depth1-item');
    const conSec1Inner = $('.contents-section1 .contents-section-inner > div');
    const headerHeight = _header.find('.header-inner').innerHeight();
    const basicScrollHeight = 100;
    const localHeight = $('.container .contents-section2').offset().top - basicScrollHeight;
    const localNavi3 = $('.navi.depth3.case-1');
    let lastScroll = 0;
    let minScrollActive = 100;
    let maxScrollActive = $('.contents-section .local').innerHeight();

    if($(window).scrollTop() > 0) {
        $('.header.tnc.site').addClass('hide');
    }

    _window.on('scroll', function(){
        const currScroll = _window.scrollTop();
        
        if(currScroll <= 0) { // 아이폰 상단 hide 방지 조건식
            lastScroll = 1;
        }

        if(currScroll <= lastScroll) {
            if(conSec1Inner.hasClass('local') && _header.hasClass('pc') || conSec1Inner.hasClass('local') && _header.hasClass('ta')) {
                if(currScroll < minScrollActive || currScroll > maxScrollActive) {
                    //if(currScroll < localHeight) {
                    _header.removeClass('hide');
                    // console.log('라스트 스크롤이 윈도우 스크롤보다 크면 헤더보임!!');
                    // 조건식
                    if(true) {
                        _body.addClass('navi-depth3-action');
                        _body.addClass('navi-depth4-action');
                    }
                    //}
                }
            } else {
                _header.removeClass('hide');
                // console.log('라스트 스크롤이 윈도우 스크롤보다 크면 헤더보임!!');
                // 조건식
                if(true) {
                    _body.addClass('navi-depth3-action');
                    _body.addClass('navi-depth4-action');
                }
            }
            
        } else {
            if(conSec1Inner.hasClass('local') && _header.hasClass('pc') || conSec1Inner.hasClass('local') && _header.hasClass('ta')) {
                if(currScroll < minScrollActive || currScroll > maxScrollActive) {
                    _header.addClass('hide');
                    gnbList.removeClass('active');
                    gnbDepth1Item.removeClass('active');
                    // console.log('라스트 스크롤이 윈도우 스크롤보다 작으면 헤더숨김!!');
                    // 조건식
                    if(true) {
                        _body.removeClass('navi-depth3-action');
                        _body.removeClass('navi-depth4-action');
                    }
                }
            } else {
                _header.addClass('hide');
                gnbList.removeClass('active');
                gnbDepth1Item.removeClass('active');
                // console.log('라스트 스크롤이 윈도우 스크롤보다 작으면 헤더숨김!!');
                // 조건식
                if(true) {
                    _body.removeClass('navi-depth3-action');
                    _body.removeClass('navi-depth4-action');
                }
            }
        }

        // console.log(
        //     '윈도우 스크롤 : ' + currScroll + '\n' +
        //     '라스트 스크롤 : ' + lastScroll + '\n' +
        //     '헤더높이 : ' + headerHeight + '\n' +
        //     '서브타이틀 옵셋탑: ' + localHeight
        // );

        lastScroll = currScroll;

        // navi-depth3 숨김처리 & 펼침메뉴 숨기기
        if(currScroll === 0) {
            _body.removeClass('navi-depth3-action');
            _body.removeClass('navi-depth4-action');
            $('.navi.depth3.case-1').removeClass('active');
            $('.navi.depth3.case-2').removeClass('active');
        }
    });
}
// Header End