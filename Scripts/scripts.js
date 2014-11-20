//SRCIPTS
//utilizar jq ao invés de $ para evitar conflitos
var jq = jQuery.noConflict();


//SRCIPTS


	//BOOTSTRAP

		//MODAL
		jq('#reportModal').modal('show');

		// TOOLTIP 
		jq('body').tooltip({
			delay: { show: 400, hide: 10 },
		    selector: '[data-toggle="tooltip"], .hastooltip, .mec-menu .dropdown-toggle'
		});
		jq('.validation').click( function() {
			jq(this).fadeOut();
		});

		//POPOVER DE AJUDA
		jq('.help-button').popover();

		//CAROUSEL
		jq('.carousel').carousel({
			interval: false,
			wrap: false
		});

		// AFFIX ACTIONS BARRA DE CITAÇÕES 
		jq(function () {
		if (jq(".affix-bar")[0]){
		    jq('.affix-bar').affix({offset: { top: jq('.affix-bar').offset().top }});
		}


	//FORMS

		// DATEPICKER 
		if (jq(".input-daterange")[0]){
		    jq('.input-daterange').datepicker({
				language: "pt-BR",
				autoclose: true,
				todayHighlight: true
			});
		} 
		// MASKED INPUT 
		if (jq("input.hour")[0]){
			jq("input.hour").mask("99:99",{placeholder:"00:00"});
		}
		// SELECT MÚLTIPLO 
		if (jq(".selectpicker")[0]){
			jq('.selectpicker').selectpicker();
		}
		else {};
		});
		// CHECKBOX PALAVRAS-CHAVE
		jq('.word-group .word-box .toggle-word').click( function() {
			jq(this).parents('.word-box').toggleClass('selected');
			console.log('tuia');
			return false
		});
		/* INDERTAMINATE CHECKBOX 
		jq("checkbox").prop("indeterminate", true); // prop is jQuery 1.6+ */


	//COMPONENTES

		// ACCORDIONS
		jq('.accordion-box a.accordion-trigger, .accordion-box button.accordion-trigger').not('.disabled').click( function() {
			jq(this).toggleClass('open');
			jq(this).parents('.accordion-box').find('.accordion-hidden').slideToggle();
			if ( jq(this).hasClass('open') ) {
				jq(this).find('.fa').removeClass('fa-chevron-down');
				jq(this).find('.fa').addClass('fa-chevron-up');
			} else {
				jq(this).find('.fa').removeClass('fa-chevron-up');
				jq(this).find('.fa').addClass('fa-chevron-down');
			}
			return false
		});
		jq(".accordion-container input[type='radio']").change(function(){
		    jq(this).parents('.accordion-container').find('.accordion-hidden').slideUp();
		    jq(this).parents('.accordion-container').find('.radio label').addClass('lighter');
		    jq(this).parents('.accordion-box').find('.accordion-hidden').slideDown();
		    jq(this).parent().removeClass('lighter');
		});

		// TABS
		jq('.tab-container .nav-tabs li a').click( function(event) {
			var aba = jq(this).attr('href');

			jq(this).parents('.nav-tabs').find('li').removeClass('active');
			jq(this).parents('li').addClass('active');
			jq(this).parents('.tab-container').find('.tab-content').removeClass('active');
			jq(this).parents('.tab-container').find(aba).addClass('active');

			event.preventDefault()

			return false
		});

		//DRAGGABLE LIST
	    jQuery(function(jq) {
	        var panelList = jq('#draggable-list');

	        panelList.sortable({
	            update: function() {
	                jq('.draggable-item', panelList).each(function(index, elem) {
	                     var jqlistItem = jq(elem),
	                         newIndex = jqlistItem.index();

	                     // Persist the new indices.
	                });
	            }
	        });
	    });
	    	//with checkbox
	    	jq('.draggable-item input[type="checkbox"]').change( function() {
	    		if(jq(this).is(":checked")){
			        jq(this).parents('.draggable-item').addClass("active"); 
			    }else{
			        jq(this).parents('.draggable-item').removeClass("active");  
			    }
	    	});


/*CITAÇÃO*/

	/* BOTÕES DE SENTIMENTO */
	jq('.feeling-menu:not(".dropdown-menu") > .btn').click( function() {

		if ( jq(this).hasClass('active') ) {
			jq(this).removeClass('active');
		} else {
			jq(this).parent('.feeling-menu').find('.active.btn').removeClass('active');
			jq(this).toggleClass('active');	
		}
		return false
	});

	/* DROPUP DE SETIMENTOS DA BARRA DO MEC */
	jq('.mec-menu .dropdown-menu .btn').not('.remove').click( function() {
		var 		trigger = jq(this).parents('.dropup').find('.dropdown-toggle'),
			selectedfeeling = jq(this).attr('class'),
				removebtn = jq(this).parents('.dropdown-menu').find('.remove');

		if ( trigger.hasClass('good') || trigger.hasClass('neutral') || trigger.hasClass('bad') ) {
			trigger.removeClass('good').removeClass('neutral').removeClass('bad');
			trigger.addClass(selectedfeeling);
			jq(this).parents('.dropup.open').removeClass('open');
		} else {
			removebtn.css('display', 'block');
			trigger.addClass(selectedfeeling);
			jq(this).parents('.dropup.open').removeClass('open');
		}

		return false
	});
		// remover sentimento selecionado
		jq('.mec-menu .dropdown-menu .remove').click( function() {
			jq(this).parents('.dropup').find('.dropdown-toggle').removeClass('good').removeClass('neutral').removeClass('bad');
			jq(this).hide();
			jq(this).parents('.dropup.open').removeClass('open');
			return false;
		});


	/* MUDANÇA DE STATUS */

	jq('.status-bar .dropdown-menu .em-andamento, .status-bar .dropdown-menu .encaminhado, .status-bar .dropdown-menu .fechado ').click( function() {
		var value = jq(this).text(),
		btn = jq(this).parents('.status-bar').find('.status-btn');
		
		jq(this).parents('.dropdown-menu').find('.active').removeClass('active');
		jq(this).parent().addClass('active');

		btn.find('span').html(value + "<small>setor</small>");
		btn.removeClass('em-andamento').removeClass('encaminhado').removeClass('fechado');
		if ( jq(this).hasClass('em-andamento') ) { value = "em-andamento" }
		btn.addClass(value);

		jq(this).parents('.dropdown-menu').find('a').show();
		jq(this).parents('.dropdown-menu').find('.value').hide();

		jq(this).parents('.dropdown.open').removeClass('open');

		return false;
	});
	/*
	jq('.status-btn').click( function() {
		if ( !jq(this).hasClass('atendimento') ) {
			
		  jq(this).addClass('atendimento').addClass('em-andamento');
		  jq(this).find('span').text('em-andamento');
		  setTimeout( function() {
		    jq(this).parents('.dropdown.open').removeClass('open');
		  }, 1000); 
		  return false;
		}
	});*/

	/*CHECKBOX*/
	jq('.quote-checkbox input').change( function() {
		jq(this).parents('.quote').toggleClass('selected');
	});

	/*DROPDOWN MEC*/
	jq('#mec-dropdown .dropdown-menu li a').click( function() {
		var btn = jq(this),
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
	jq('.leitura-btn').click( function() {
			var v = 1;

		if ( jq(this).hasClass('lido') ) {
			jq(this).removeClass('lido').addClass('nao-lido');
			jq(this).html('<i class="fa fa-circle-o" data-toggle="tooltip" title="marcar como lido"></i>');
			v = v + 1;
		} if ( jq(this).hasClass('nao-lido') && v != 2 ) {
			jq(this).removeClass('nao-lido').addClass('lido');
			jq(this).html('<i class="fa fa-circle" data-toggle="tooltip" title="marcar como não lido"></i>');
			v = 1;
		}
		return false;
	});


	/*PAINEL FILTRAR */

	//animação
	jq('#filter-toggle').click( function() {
		var icon = jq(this).find('.fa');

		if ( jq(this).hasClass('active') ) {
			icon.removeClass('fa-remove').addClass('fa-filter');
		} if ( !jq(this).hasClass('active') ) {
			icon.removeClass('fa-filter').addClass('fa-remove');
		}
		jq(this).toggleClass('active');
		jq('#filter-panel').toggleClass('open');
		return false;
	});
	//Esconder ao clicar fora
	jq('#outside-filter').click( function() {
		var filtro = jq('#filter-panel')
			icon = jq('#filter-toggle').find('.fa');

		if ( filtro.hasClass('open') ) {
			filtro.removeClass('open');
			icon.removeClass('fa-remove').addClass('fa-filter');
		}
	});
	//resetar form
	jq('.reset-filter').click(function () {
	    jq('#filter-form').find('.active').removeClass('active');
		jq('#filter-form').find(':radio, :checkbox').removeAttr('checked').end();
		jq('#filter-form').find('textarea, :text, select').val('');
	    return false;
	});

	//Filter groups with buttons that contain text inputs
	jq('.filter-group .btn').click( function() {
		if ( !jq(this).hasClass('btn-set') ) {
			jq(this).parents('.filter-group').find('.btn-set').removeClass('active');
		} else {}
	});
	jq('.btn-set').click(function() {
		var group = jq(this).parents('.filter-group');
		if ( !jq(this).hasClass('active')) {
			group.find('.active').removeClass('active');
			jq(this).addClass('active');
		} else {	
		}
	});


jq('#foward-modal .togglecc').click( function() {
	jq(this).parents('form').find('.cc-container').slideToggle();
});

//SMOOTH SCROLLING
//Faz a tela "deslizar" quando clica em link âncora pra própria página
jq(function() {
  jq('a[href*=#]:not([href=#], .carousel-control, .tab-container .nav-tabs li a, [data-toggle="modal"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jq(this.hash);
      target = target.length ? target : jq('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jq('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


