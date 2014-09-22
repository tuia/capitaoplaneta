//SRCIPTS

/* TOOLTIP */
$('body').tooltip({
	delay: { show: 400, hide: 10 },
    selector: '[data-toggle="tooltip"], .hastooltip, .mec-menu .dropdown-toggle'
});


/* ACCORDIONS */
$('.accordion-box a.accordion-trigger, .accordion-box button.accordion-trigger').not('.disabled').click( function() {
	$(this).toggleClass('open');
	$(this).parents('.accordion-box').find('.accordion-hidden').slideToggle();
	if ( $(this).hasClass('open') ) {
		$(this).html('<i class="fa fa-chevron-up"></i>');
	} else {
		$(this).html('<i class="fa fa-chevron-down"></i>');
	}
	return false
});
$(".accordion-container input[type='radio']").change(function(){
	console.log('estou na função');
    $(this).parents('.accordion-container').find('.accordion-hidden').slideUp();
    $(this).parents('.accordion-container').find('.radio label').addClass('lighter');
    $(this).parents('.accordion-box').find('.accordion-hidden').slideDown();
    $(this).parent().removeClass('lighter');
});

/* INDERTAMINATE CHECKBOX 
$("checkbox").prop("indeterminate", true); // prop is jQuery 1.6+ */



/*CITAÇÃO*/

	/* BOTÕES DE SENTIMENTO */
	$('.feeling-menu:not(".dropdown-menu") > .btn').click( function() {

		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).parent('.feeling-menu').find('.active.btn').removeClass('active');
			$(this).toggleClass('active');	
		}
		return false
	});


	/* DROPUP DE SETIMENTOS DA BARRA DO MEC */
	$('.mec-menu .dropdown-menu.feeling-menu .btn').not('.remove').click( function() {
		var 		trigger = $(this).parents('.dropup').find('.dropdown-toggle'),
			selectedfeeling = $(this).attr('class'),
				removebtn = $(this).parents('.feeling-menu').find('.remove');

		if ( trigger.hasClass('good') || trigger.hasClass('neutral') || trigger.hasClass('bad') ) {
			trigger.removeClass('good').removeClass('neutral').removeClass('bad');
			trigger.addClass(selectedfeeling);
			$(this).parents('.dropup.open').removeClass('open');
		} else {
			removebtn.css('display', 'block');
			trigger.addClass(selectedfeeling);
			$(this).parents('.dropup.open').removeClass('open');
		}

		return false
	});
		// remover sentimento selecionado
		$('.mec-menu .dropdown-menu.feeling-menu .remove').click( function() {
			$(this).parents('.dropup').find('.dropdown-toggle').removeClass('good').removeClass('neutral').removeClass('bad');
			$(this).hide();
			$(this).parents('.dropup.open').removeClass('open');
			return false;
		});


	/*MUDANÇA DE STATUS*/
	$('.status-bar .dropdown-menu .aberto, .status-bar .dropdown-menu .aguardando, .status-bar .dropdown-menu .fechado ').click( function() {
		var value = $(this).text(),
		btn = $(this).parents('.status-bar').find('.status-btn');
		
		$(this).parents('.dropdown-menu').find('.active').removeClass('active');
		$(this).parent().addClass('active');

		btn.find('span').text(value);
		btn.removeClass('aberto').removeClass('aguardando').removeClass('fechado');
		btn.addClass(value);

		$(this).parents('.dropdown-menu').find('a').show();
		$(this).parents('.dropdown-menu').find('a').hasClass('value').hide();

		$(this).parents('.dropdown.open').removeClass('open');

		return false;
	});
	$('.status-btn').click( function() {
		if ( !$(this).hasClass('atendimento') ) {
			
		  $(this).addClass('atendimento').addClass('aberto');
		  $(this).find('span').text('aberto');
		  setTimeout( function() {
		    $(this).parents('.dropdown.open').removeClass('open');
		  }, 1000); 
		  return false;
		}
	});


	/*CHECKBOX*/
	$('.quote-checkbox input').change( function() {
		$(this).parents('.quote').toggleClass('selected');
	});


	/*DROPDOWN MEC*/
	$('#mec-dropdown .dropdown-menu li a').click( function() {
		var btn = $(this),
			v = 1;

		if ( btn.hasClass('bad') ) {
			btn.removeClass('bad');
			v = v + 1;
		}	if ( btn.hasClass('neutral') ) {
			btn.removeClass('neutral').addClass('bad');
		}	if ( btn.hasClass('good') ) {
			btn.removeClass('good').addClass('neutral');
		} if( !btn.hasClass('good') && !btn.hasClass('neutral') && !btn.hasClass('bad') ) {
			if ( v === 1 ) {
				btn.addClass('good');
				v = 1;
			} else {}			
		}
		return false
	});


	/* LIDO/NÃO-LIDO */
	$('.leitura-btn').click( function() {
			var v = 1;

		if ( $(this).hasClass('lido') ) {
			$(this).removeClass('lido').addClass('nao-lido');
			$(this).html('<i class="fa fa-circle-o" data-toggle="tooltip" title="não lido"></i>');
			v = v + 1;
		} if ( $(this).hasClass('nao-lido') && v != 2 ) {
			$(this).removeClass('nao-lido').addClass('lido');
			$(this).html('<i class="fa fa-circle" data-toggle="tooltip" title="lido"></i>');
			v = 1;
		}
		return false;
	});


/* AFFIX ACTIONS BAR DE CITAÇÕES */
 $('#actions-bar').affix({
      offset: {
        top: $('#actions-bar').offset().top
      }
}); 



/* PAINEL FILTRAR */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-filter' ),
		closebtn = document.getElementById( 'close-filter' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();
