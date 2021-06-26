"use strict";

/* ======= Fixed page nav when scrolled ======= */    
const pageNavHolder = document.getElementById('page-nav-space-holder');
const pageNavWrapper = document.getElementById('page-nav-wrapper');

window.onload = function() 
{   
    navAnimation(); 
};

window.onresize = function() 
{   
    navAnimation(); 
};


window.onscroll = function() 
{   
    navAnimation(); 
};


function navAnimation () {
	
	pageNavWrapper.classList.remove('fixed');
	
	var topDistance;
	// Check fixednav contains any element before get the topDistance
	if (pageNavWrapper.childNodes) {
		
		//console.log('has child');	
		var topDistance = window.pageYOffset + pageNavWrapper.getBoundingClientRect().top;	
		//console.log(topDistance);
		
	}
	
	let scrollTop = window.pageYOffset;
	
	//console.log(scrollTop);
    
	
	if ( (topDistance) > scrollTop ) {
	    pageNavWrapper.classList.remove('fixed');
	    document.body.classList.remove('sticky-page-nav');
	    
	    //console.log('not sticky');
	    
	    
	}
	
	
	if ( (topDistance) < scrollTop ) {
	    pageNavWrapper.classList.add('fixed');
	    document.body.classList.add('sticky-page-nav');
	    
	    //console.log('sticky');
	}
};



/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');


scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = pageNavWrapper.getBoundingClientRect().height; //page nav bar div height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('#page-nav a', {
	offset: function () {
		return pageNavWrapper.getBoundingClientRect().height;
	}
});



/* ======= Pie Chart ========= */
/* Ref: https://github.com/rendro/easy-pie-chart */


var chartElements = document.querySelectorAll('.chart');

chartElements.forEach((chartElement) => {
	
    new EasyPieChart(chartElement, {
        barColor:'#00BCD4',//Pie chart colour
		trackColor: '#e8e8e8',
		scaleColor: false,
		lineWidth : 5,
		animate: 1000,
    });
    
});


/* ======= Isotope plugin ======= */
/* Ref: http://isotope.metafizzy.co/ */
// init Isotope 

const isotopeContainer = document.querySelector('.isotope');
const filterItems = document.querySelectorAll('#filters .type');

imagesLoaded(isotopeContainer, function () {
	
	var iso = new Isotope( isotopeContainer, {
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows'
	  
	});
	
	// filter items on click
	filterItems.forEach((filterItem) => {
	
		filterItem.addEventListener('click', (e) => {
			
			console.log('clicked');
			
			let filterValue = filterItem.getAttribute('data-filter');
			
			// arrange - https://isotope.metafizzy.co/methods.html
			iso.arrange({ filter: filterValue });
			
			
			//toggle active class
			for (let siblingFilterItem of filterItem.parentNode.children) {
		        siblingFilterItem.classList.remove('active');
		    }
			filterItem.classList.add('active');

		});

	});
});





