
/**
 * @layout checkDevice
 */
 function checkDevice() {
	if(navigator.userAgent.match(/Mobile/)) {
		document.querySelector('html').classList.remove('laptop');
		document.querySelector('html').classList.add('mobile');
	
	} else {
		document.querySelector('html').classList.remove('mobile');
		document.querySelector('html').classList.add('laptop');
	}
}
checkDevice();


const buiFormfileAdd = function(formElem) {
	formElem.parentElement.dataset.buiFormFileName = formElem.files[0].name;
	formElem.parentElement.dataset.buiFormFileType = formElem.files[0].type;
	formElem.parentElement.style.setProperty('--background-image', 'url(' + URL.createObjectURL(formElem.files[0]) + ')');
}

/**
 * @name	buiFormfileUploader
 * @update	2022-08-05
 */
 const buiFormfileUploader = function(selectors) {
	if (formElem.value.length > 0) {
		buiFormfileAdd(formElem);
	} else {
		buiFormfileAdd(formElem);
	}
}

/**
 * @name clickOut
 */
const clickOut = function(event, selector, activeClass) {
	if (!selector.contains(event.target)) {
		selector.classList.remove(activeClass);
	}
}

/**
 * @name focusOut
 */
const focusOut = function(event, selector, activeClass) {
	if(event.code === 'Tab') {
		selector.querySelector('*:focus') != null ? selector.classList.add(activeClass) : selector.classList.remove(activeClass);
	}
}

/**
 * @name focusWithin
 */
 const focusWithin = function(selector) {
	selector.classList.add('focus-within');

	document.addEventListener('keyup', function(event) {
		focusOut(event, selector, 'focus-within');
	}, false);
}

/**
 * @layout globalNavigation
 */
 const globalNavigation = function() {
	var lnbLists = document.querySelectorAll('#pageNavigation .lnb-list');
	if (!lnbLists) return;

	Array.prototype.forEach.call(lnbLists, function(lnbList) {
		const gnbItem = lnbList.parentElement;
		const gnbName = gnbItem.querySelector('.gnb-name');
		const expandButton = document.createElement('button');
		const expandButtonActiveText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>접기</title><path d="M12 7.3175L17.555 13.428C17.8336 13.7344 17.811 14.2088 17.5045 14.4874C17.198 14.766 16.7237 14.7435 16.4451 14.437L12 9.54742L7.55496 14.437C7.27633 14.7435 6.80199 14.766 6.4955 14.4874C6.18901 14.2088 6.16642 13.7344 6.44505 13.428L12 7.3175Z"/></svg>';
		const expandButtonInactiveText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>펼치기</title><path d="M12 16.6825L6.44504 10.572C6.16641 10.2656 6.189 9.79121 6.49549 9.51258C6.80198 9.23395 7.27632 9.25654 7.55495 9.56304L12 14.4526L16.445 9.56304C16.7237 9.25654 17.198 9.23396 17.5045 9.51259C17.811 9.79122 17.8336 10.2656 17.555 10.572L12 16.6825Z"/></svg>';
		
		expandButton.type = 'button';
		expandButton.className = 'btn expand';
		gnbItem.insertBefore(expandButton, gnbName);
		
		if (gnbItem.classList.contains('active')) {
			expandButton.innerHTML = expandButtonActiveText;
		} else {
			expandButton.innerHTML = expandButtonInactiveText;
		}

		expandButton.addEventListener('click', function() {
			const activeItem = this.parentElement;
			const siblings = getSiblings(activeItem);		

			if (activeItem.classList.contains('active')) {
				activeItem.classList.remove('active');
				activeItem.querySelector('.btn.expand').innerHTML = expandButtonInactiveText;
			} else {
				activeItem.classList.add('active');
				activeItem.querySelector('.btn.expand').innerHTML = expandButtonActiveText;
			}
			
			Array.prototype.forEach.call(siblings, function(siblingItem) {
				siblingItem.classList.remove('active');
				siblingItem.querySelector('.btn.expand').innerHTML = expandButtonInactiveText;
			});
		});
	});
}
globalNavigation();

/**
 * @layout localNavigation
 */
 const localNavigation = function() {
	var snbLists = document.querySelectorAll('#pageNavigation .snb-list');
	if (!snbLists) return;

	snbLists.forEach(function(snbList, lnbIndex) {
		const lnbItem = snbList.parentElement;
		const lnbName = lnbItem.querySelector('.lnb-name');
		const expandButton = document.createElement('button');
		const expandButtonActiveText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>접기</title><path d="M5 12C5 11.5858 5.33579 11.25 5.75 11.25H18.25C18.6642 11.25 19 11.5858 19 12C19 12.4142 18.6642 12.75 18.25 12.75H5.75C5.33579 12.75 5 12.4142 5 12Z"/></svg>';
		const expandButtonInactiveText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>펼치기</title><path d="M12.75 5.75C12.75 5.33579 12.4142 5 12 5C11.5858 5 11.25 5.33579 11.25 5.75V11.25H5.75C5.33579 11.25 5 11.5858 5 12C5 12.4142 5.33579 12.75 5.75 12.75H11.25V18.25C11.25 18.6642 11.5858 19 12 19C12.4142 19 12.75 18.6642 12.75 18.25V12.75H18.25C18.6642 12.75 19 12.4142 19 12C19 11.5858 18.6642 11.25 18.25 11.25H12.75V5.75Z"/></svg>';
		
		expandButton.type = 'button';
		expandButton.className = 'btn expand';
		lnbItem.insertBefore(expandButton, lnbName);
		
		if (lnbItem.classList.contains('active')) {
			expandButton.innerHTML = expandButtonActiveText;
		} else {
			expandButton.innerHTML = expandButtonInactiveText;
		}

		expandButton.addEventListener('click', function() {
			const activeItem = this.parentElement;
			const siblings = getSiblings(activeItem);		

			if (activeItem.classList.contains('active')) {

				activeItem.classList.remove('active');
				activeItem.querySelector('.btn.expand').innerHTML = expandButtonInactiveText;
			} else {
				activeItem.classList.add('active');
				activeItem.querySelector('.btn.expand').innerHTML = expandButtonActiveText;
			}
			
			Array.prototype.forEach.call(siblings, function(siblingItem) {
				siblingItem.classList.remove('active');
				siblingItem.querySelector('.btn.expand').innerHTML = expandButtonInactiveText;
			});
		});
	});
}
localNavigation();

/**
 * @layout pageNavigation
 */
 const pageNavigation = new buiToggle('[data-bui-toggle="pageNavigation"]', {
	reactTarget: 'html',
	reactTargetActiveClass: 'active-page-navi',
	focusin: false,
	activeAfterCallBack: function() {
		unifiedSearch.inactive('unifiedSearch');
	}
});

/**
 * @layout unifiedSearch
 */
 const unifiedSearch = new buiToggle('[data-bui-toggle="unifiedSearch"]', {
	reactTarget: 'html',
	reactTargetActiveClass: 'active-unified-search',
	clickout: true,
	focusin: true,
	focusout: true,
	activeAfterCallBack: function() {
		pageNavigation.inactive('pageNavigation');
	}
});

/**
 * @module 
 */
function findElement(selector, target, height) {
	var elem = document.querySelector(selector);
	if (!elem) return;

	document.querySelector(target).style.setProperty('padding-bottom', height);
}

function buiFormDncrementor(elem) {
	const formElem = elem.parentElement.querySelector('.form-elem');
	formElem.stepDown();
}

function buiFormIncrementor(elem) {
	const formElem = elem.parentElement.querySelector('.form-elem');
	formElem.stepUp();
}

/**
 * @module form buiFormCheckValue
 */
function buiFormCheckValue(formElem) {
	formElem.value.length > 0 ? formElem.classList.add('typed') : formElem.classList.remove('typed');
}

/**
 * @module form buiFormCancel
 */
function buiFormCancel(formElem) {
	if (formElem.readOnly) return;

	// check value
	buiFormCheckValue(formElem);
	formElem.addEventListener('input', function(e) {
		buiFormCheckValue(formElem);
	});

	// form util
	var formUtil = formElem.parentElement.querySelector('.form-func');
	if(!formUtil) {
		formUtil = document.createElement('span');
		formUtil.classList.add('form-func');
		formElem.parentElement.appendChild(formUtil);
	}

	// form cancel
	var formCancel = formElem.parentElement.querySelector('.form-cancel');
	if(!formCancel) {
		formCancel = document.createElement('span');
		formCancel.classList.add('form-cancel');
		formUtil.prepend(formCancel);
	}

	formElem.style.paddingRight = formUtil.offsetWidth + 'rem';

	var xStart = formUtil.offsetLeft + formCancel.offsetLeft;
	var yStart = formUtil.offsetTop + formCancel.offsetTop;
	var xEnd = xStart + formCancel.offsetWidth;
	var yEnd = yStart + formCancel.offsetHeight;

	formElem.addEventListener('mousemove', function(e) {
		if (formElem.classList.contains('typed')) {
			if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
				formElem.style.setProperty('cursor', 'default');
			} else {
				formElem.style.removeProperty('cursor');
			}
		}
	});

	formElem.addEventListener('click', function(e) {
		if (formElem.classList.contains('typed')) {
			if (e.offsetX >= xStart && e.offsetX <= xEnd && e.offsetY >= yStart && e.offsetY <= yEnd) {
				formElem.value = '';
				formElem.classList.remove('typed');
				formElem.style.removeProperty('cursor');
			}
		}
	});
}

const datepickerLanguage = {
	days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
	monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	today: 'Today',
	clear: 'Clear',
	dateFormat: 'yyyy-MM-dd',
	timeFormat: 'hh:ii aa',
	firstDay: 0
};

const datepicker = function(selector) {
	const datepickers = document.querySelectorAll(selector);
	if (!datepickers) return;

	datepickers.forEach(function(datepickers) {
		new AirDatepicker(datepickers, {
			locale: datepickerLanguage,
		});
	});
}
datepicker('.form.datepicker .form-elem:not(:read-only)');

/**
 * @layout checkScrollStart
 */

window.scrollY > 0 ? document.querySelector('html').classList.add('active-scroll-start') : document.querySelector('html').classList.remove('active-scroll-start');
window.addEventListener('scroll', function() {
	window.scrollY > 0 ? document.querySelector('html').classList.add('active-scroll-start') : document.querySelector('html').classList.remove('active-scroll-start');
});


/**
 * @layout widgetToolbar
 */
const widgetToolbar = function() {
	const toolbar = document.querySelector('.widget-toolbar');
	if (!toolbar) return;

	toolbar.querySelector('.goto-top .navi-text').addEventListener('click', function(event) {
		event.preventDefault();
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});

	let timer;

	const toolbarSnap = ScrollTrigger.matchMedia({
		// mobile
		"(max-width: 1023px)": function() {
			gsap.to(".page-foot", {
				scrollTrigger: {
					// markers: true,
					trigger: '.page-foot',
					start: '+=84rem 100%' + '-=40rem',
					end: 'bottom bottom',
	
					onEnter: function(self) {
						document.querySelector('html').classList.add('active-toolbar-unfixed');
					},
					onLeaveBack: function(self) {
						document.querySelector('html').classList.remove('active-toolbar-unfixed');
					},
				}
			});
		},
		
		// desktop
		"(min-width: 1024px)": function() {
			gsap.to(".page-foot", {
				scrollTrigger: {
					// markers: true,
					trigger: '.page-foot',
					start: '-=40rem 100%' + '-=40rem',
					end: 'bottom bottom',
	
					onEnter: function(self) {
						document.querySelector('html').classList.add('active-toolbar-unfixed');
					},
					onLeaveBack: function(self) {
						document.querySelector('html').classList.remove('active-toolbar-unfixed');
					},
				}
			});
		},
	});

	window.addEventListener('resize', function() {
		clearTimeout(timer);
		timer = setTimeout(function() {
			toolbarSnap;
		}, 600);
	});
}
widgetToolbar();


/**
 * @layout infoPopup
 * @module buiToggle
 */
 const infoPopup = new buiToggle('[data-bui-toggle="infoPopup"]', {
	inactiveButton: true,
	inactiveButtonClass: 'btn popup-close',
	inactiveButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>닫기</title><path d="M12.99,12l6.16,6.16-.99,.99-6.16-6.16-6.16,6.16-.99-.99,6.16-6.16L4.85,5.84l.99-.99,6.16,6.16,6.16-6.16,.99,.99-6.16,6.16Z"/></svg>',
	inactiveButtonArea: '.popup-local-func .button-area',
	reactTarget: 'html',
	reactTargetActiveClass: 'active-info-popup',	
	focusin: true,
	focusout: true,

	onloadCallBack: function(myToggle) {
		const popupFuncContainer = myToggle.toggleTarget.querySelector('.popup-local');
		const popupFunc = document.createElement('div');
		popupFunc.className = 'popup-local-func'
		popupFunc.innerHTML = '<span class="button-area"></span>';
		popupFuncContainer.appendChild(popupFunc);
	}
})


/**
 * @layout contentsPopup
 * @module buiToggle
 */
 const contentPopup = new buiToggle('[data-bui-toggle="contentPopup"]', {
	inactiveButton: true,
	inactiveButtonClass: 'btn popup-close',
	inactiveButtonText: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><title>닫기</title><path d="M12.99,12l6.16,6.16-.99,.99-6.16-6.16-6.16,6.16-.99-.99,6.16-6.16L4.85,5.84l.99-.99,6.16,6.16,6.16-6.16,.99,.99-6.16,6.16Z"/></svg>',
	inactiveButtonArea: '.popup-local-func .button-area',
	reactTarget: 'html',
	reactTargetActiveClass: 'active-content-popup',	
	focusin: true,
	focusout: true,

	onloadCallBack: function(myToggle) {
		const popupFuncContainer = myToggle.toggleTarget.querySelector('.popup-local');
		const popupFunc = document.createElement('div');
		popupFunc.className = 'popup-local-func'
		popupFunc.innerHTML = '<span class="button-area"></span>';
		popupFuncContainer.appendChild(popupFunc);
	}
})

/**
 * @layout defaultTab
 * @module buiTab
 */
const defaultTab = new buiTab('[data-bui-tab="defaultTab"]');


/**
 * @layout goodsDisplay
 * @module buiExpand
 */
const goodsDisplay = new buiExpand('[data-bui-expand="goodsDisplay"]', {
	accordion: false,
	buttonClass: 'btn expand',
	buttonText: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg"><title>펼치기</title><path d="M15.5303 10.7197C15.8232 11.0126 15.8232 11.4874 15.5303 11.7803L12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L8.46967 11.7803C8.17678 11.4874 8.17678 11.0126 8.46967 10.7197C8.76256 10.4268 9.23744 10.4268 9.53033 10.7197L12 13.1893L14.4697 10.7197C14.7626 10.4268 15.2374 10.4268 15.5303 10.7197Z"></path></svg>',
	buttonActiveText: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg"><title>접기</title><path d="M8.46967 13.2803C8.17678 12.9874 8.17678 12.5126 8.46967 12.2197L11.4697 9.21967C11.7626 8.92678 12.2374 8.92678 12.5303 9.21967L15.5303 12.2197C15.8232 12.5126 15.8232 12.9874 15.5303 13.2803C15.2374 13.5732 14.7626 13.5732 14.4697 13.2803L12 10.8107L9.53033 13.2803C9.23744 13.5732 8.76256 13.5732 8.46967 13.2803Z"></path></svg>',
	buttonAppendTo: '.goods-func .button-area',

	onloadCallBack: function(elem) {
		const goodsFunc = document.createElement('span');
		goodsFunc.className = 'goods-func';
		goodsFunc.innerHTML= '<span class="button-area"></span>';
		elem.querySelector('.goods-subject').prepend(goodsFunc);
	}
});

/**
 * @layout orderDisplay
 * @module buiExpand
 */
const orderDisplay = new buiExpand('[data-bui-expand="orderDisplay"]', {
	accordion: false,
	buttonClass: 'btn expand',
	buttonText: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg"><title>펼치기</title><path d="M12 16.6825L6.44504 10.572C6.16641 10.2656 6.189 9.79121 6.49549 9.51258C6.80198 9.23395 7.27632 9.25654 7.55495 9.56304L12 14.4526L16.445 9.56304C16.7237 9.25654 17.198 9.23396 17.5045 9.51259C17.811 9.79122 17.8336 10.2656 17.555 10.572L12 16.6825Z"></path></svg>',
	buttonActiveText: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" xmlns="http://www.w3.org/2000/svg"><title>접기</title><path d="M12 7.3175L17.555 13.428C17.8336 13.7344 17.811 14.2088 17.5045 14.4874C17.198 14.766 16.7237 14.7435 16.4451 14.437L12 9.54742L7.55496 14.437C7.27633 14.7435 6.80199 14.766 6.4955 14.4874C6.18901 14.2088 6.16642 13.7344 6.44505 13.428L12 7.3175Z"></path></svg>',
	buttonAppendTo: '.order-func .button-area',

	onloadCallBack: function(elem) {
		const orderFunc = document.createElement('div');
		orderFunc.className = 'order-func';
		orderFunc.innerHTML= '<span class="button-area"></span>';
		elem.querySelector('.order-wrap').insertBefore(orderFunc, elem.querySelector('.order-head'));
	}
});