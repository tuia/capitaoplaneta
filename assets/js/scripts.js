//SRCIPTS

/* TOOLTIP */
$('[data-toggle="tooltip"], .hastooltip, .mec-menu .dropdown-toggle').tooltip({
	delay: { show: 400, hide: 10 }
});


/* ACCORDIONS */
$('.accordion-box .accordion-trigger').not('.disabled').click( function() {
	$(this).toggleClass('open');
	$(this).parents('.accordion-box').find('.accordion-hidden').slideToggle();
	if ( $(this).hasClass('open') ) {
		$(this).html('<i class="fa fa-chevron-up"></i>');
	} else {
		$(this).html('<i class="fa fa-chevron-down"></i>');
	}
	return false
});

/* INDERTAMINATE CHECKBOX */
$("checkbox").prop("indeterminate", true); // prop is jQuery 1.6+


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
	$('.status-bar .dropdown-menu > li > a').click( function() {
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
				console.log('tenho a classe atendimento')
			
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





