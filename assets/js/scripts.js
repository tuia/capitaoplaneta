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
 $('#actions-bar').affix({offset: { top: $('#actions-bar').offset().top }}); 


/*PAINEL FILTRAR */
$('.filter-toggle').click( function() {
	var icon = $(this).find('.fa');

	if ( $(this).hasClass('active') ) {
		icon.removeClass('fa-remove').addClass('fa-filter');
	} if ( !$(this).hasClass('active') ) {
		icon.removeClass('fa-filter').addClass('fa-remove');
	}
	$(this).toggleClass('active');
	$('#filter-panel').toggleClass('open');
	return false;
});