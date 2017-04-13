/*-----------------------------------------------------------------------------------*/
/*	Initialize Modals, Select fields, Parallax effect, Side navs
/*-----------------------------------------------------------------------------------*/

$(document).ready(function(){
	$('#modal1').modal();
	$('#modal_connexion').modal();
	$('select').material_select();
	$('.parallax').parallax();
	$('.button-collapse').sideNav();

	// Use this for a smoother scroll
	// var easing = 'easeInQuad'; // https://jqueryui.com/easing
	// $('html, body').animate( { scrollTop: $(page).offset().top }, speed, easing );

	// Scroll to target jQuery function
	$('.scrollTo').on('click', function() {
		var target = $(this).attr('href'); // Go to target
		var speed = 500; // Animaton duration (en ms)
		$('html, body').animate( { scrollTop: $(target).offset().top-20 }, speed ); // Go
		return false;
	});
});

/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/

function majMenu(){
	var hauteurImage = $(document.getElementsByClassName('parallax-container').item(0)).height()-(4*$( window ).width()/100)-1;
	var menu = $('#navbar');
	if ($(window).scrollTop() > hauteurImage && menu.hasClass('default')) {
        menu.removeClass('default').addClass('sticky').fadeIn('fast');
    } else if ($(window).scrollTop() <=  hauteurImage && menu.hasClass('sticky'))  {
        menu.removeClass('sticky').addClass('default').fadeIn(0);

    }
}


$(document).ready(majMenu);

$(window).bind('scroll', majMenu);

/*-----------------------------------------------------------------------------------*/
/*	COPY FRONT FORM DATA TO REAL FORM
/*-----------------------------------------------------------------------------------*/

// Function to load serialized data
function loadSerializedData(formId, data)
{
	var tmp = data.split('&'), dataObj = {};

	// Bust apart the serialized data string into an obj
	for (var i = 0; i < tmp.length; i++)
	{
		var keyValPair = tmp[i].split('=');
		dataObj[keyValPair[0]] = keyValPair[1];
	}

	// Loop thru form and assign each HTML tag the appropriate value
	$('#' + formId + ' :input').each(function(index, element) {
		if (dataObj[$(this).attr('name')])
			$(this).val(dataObj[$(this).attr('name')]);
	});

	Materialize.updateTextFields();
}


$("#signup a#pre_signup_btn").on('click', function() {
    var data = $('#pre_registration_form').serialize();
    loadSerializedData('registration_form', data);
});

$("a#pre_signup_inscription_btn").on('click', function() {
    var data = $('#pre_signup_inscription_form').serialize();
    loadSerializedData('registration_form', data);
});

/*-----------------------------------------------------------------------------------*/
/*	Serialize and send registration
/*-----------------------------------------------------------------------------------*/

// Function to serialize registration form to the JSON needed for the Pouce d'Or API
function serializeRegistrationForm()
{
	var json_mock = new Object();

	json_mock.fos_user_registration_form = new Object();
	json_mock.fos_user_registration_form.email = $('form#registration_form input#email').val();
	json_mock.fos_user_registration_form.plainPassword = new Object();
	json_mock.fos_user_registration_form.plainPassword.first = $('form#registration_form input#plainPasswordFirst').val();
	json_mock.fos_user_registration_form.plainPassword.second = $('form#registration_form input#plainPasswordSecond').val();
	json_mock.fos_user_registration_form.first_name = $('form#registration_form input#first_name').val();
	json_mock.fos_user_registration_form.last_name = $('form#registration_form input#last_name').val();
	json_mock.fos_user_registration_form.sex = $('form#registration_form select#sex').val();
	json_mock.fos_user_registration_form.school = $('form#registration_form select#university').val();
	json_mock.fos_user_registration_form.telephone = $('form#registration_form input#telephone').val();

	json_data = JSON.stringify(json_mock);

	return json_data;
}


//Submit registration form in modal
$(function() {
	$("button#submit").click(function(){
		form_data_JSON = serializeRegistrationForm();
 		console.log(form_data_JSON);

// 		$.ajax({
// 			type: "POST",
// 			url: "/api/v1/users",
// 			data: form_data_JSON,
// 			dataType: 'json',
// 			success: function(msg){
// 				$("#thanks").html(msg)
// 				$("#form-content").modal('hide');
// 			},
// 			error: function(){
// 				alert("Impossible de vous enregistrer. Merci de revenir plus tard.");
// 			}
// 		});

	});
});

/*-----------------------------------------------------------------------------------*/
/*	Validate regitration form
/*-----------------------------------------------------------------------------------*/

// Validation registration form
$(document).ready(function(){
	$("#registration_form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			plainPasswordFirst: {
				required: true,
				minlength: 5
			},
			plainPasswordSecond: {
				required: true,
				equalTo: "#plainPasswordFirst"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			sex: "required",
			telephone: "required",
			university: "required",
			CGU: "required"
		},
		//For custom messages
		messages: {
			email:{
				required: "Veuillez indiquer une adresse mail",
				email: "Email non valide"
			},
			plainPasswordFirst:{
				minlength: "5 characters minimum"
			},
			plainPasswordSecond: {
				required: "Veuiller confirmer le mot de passe",
				equalTo: "Mot de passe différent"
			},
			first_name: {
				required: "Veuiller indiquer votre prénom"
			},
			last_name: {
				required: "Veuiller indiquer votre nom"
			},
			sex: "Veuiller indiquer votre sexe",
			telephone: "Veuiller indiquer votre numéro de téléphone",
			university: "Veuiller indiquer votre école ou université",
			CGU: "Veuiller approuver le règlement du concours"
		},
		onkeyup: function(element) {$(element).valid()},
		errorElement : 'div',
		errorPlacement: function(error, element) {
			var placement = $(element).data('error');
			if (placement) {
				$(placement).append(error)
			} else {
				error.insertAfter(element);
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*	whatis accordion
/*-----------------------------------------------------------------------------------*/

$("#whatis-accordion").click(function(){
	for(var i=1;i<=3;i++){
		if(document.getElementById("accordion"+i).getAttribute("class")=="active"){
			document.getElementById("whatis-right"+i).style.display="block";
		}
		else{
			document.getElementById("whatis-right"+i).style.display="none";
		}
	}
});

/*-----------------------------------------------------------------------------------*/
/*	whatis calendar
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();

	var monthNames = [
    "Janvier", "Fevrier", "Mars",
    "Avril", "Mai", "Juin", "Juillet",
    "Aout", "Septembre", "Octobre",
    "Novembre", "Decembre"
  ];
	var dayNames = [
		"Dimanche", "Lundi", "Mardi", "Mercredi",
		"Jeudi", "Vendredi", "Samedi"
	];

	var data = [{
	    date: '2017-09-20',
	    value: 'Ouverture des inscriptions des participants.'
	},{
	    date: '2017-09-29',
	    value: '<b>23h59min59s</b> : Fermeture des inscriptions des participants. C’est le moment où il vaut mieux éviter de faire une soirée pré-départ.'
	},{
	    date: '2017-09-30',
	    value: '<b>7h20</b> : Rendez-vous au point de rencontre pour la distribution des gilets jaunes, la remise des décharges et les derniers points de sécurité. Grosse grosse grosse ambiance !<br /><br/><b>8h00</b> : C’est parti pour la première vague de Pouceux !<br /><br/><b>18h27</b> : Tu vois sur facebook que certains admirent l\'architecture d\'Amsterdam. Puis tu lèves les yeux et admires ton binôme sous la pluie de ton aire d\'autoroute pourrie...'
	},{
	    date: '2017-10-01',
	    value: '<b>16h09</b> : Vous croisez un binôme de Marseille. Sauf qu’eux ils sont à 764 km de chez eux. Vous leur demandez quel cours ils ratent le lendemain.'
	},{
	    date: '2017-10-02',
	    value: '<b>8h00</b> : La plupart des Pouceux sont rentrés et vont mécaniquement en amphi. Y’en a deux qui sont encore bloqués à Strasbourg, ce sont des héros.'
	},{
	    date: '2017-10-07',
	    value: '<b>8h00</b> : La deuxième vague de Pouceux est en route !! Il ont beau temps, tu rages.'
	},{
			date: '2017-10-09',
			value: '<b>8h00</b> : Fin du Pouce d’Or 2016, tout le monde raconte ses anecdotes !! Vous avez jusqu’au 14 septembre pour valider vos parcours sur le site internet, y déclarer vos retards et y raconter votre aventure !'
	},{
	    date: '2018-02-08',
	    value: 'Ouaaaaais y’a le classement en ligne !!!'
	},{
	    date: year + '-' + month + '-' + date,
	    value: 'aujourd\'hui'
	}];

	// calcul prochain évènement
	var nextEvent = now;
	var i = 0;
	while(nextEvent > new Date(data[i]['date']) && i < 7){
		i++;
	}
	nextEvent = new Date(data[i]['date']);

	var $ca = $('.calendar-container').calendar({
	    width: 320,
	    height: 340,
			startWeek: 1,
    	weekArray: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    	monthArray: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'],
	    //selectedRang: [new Date(), null],
	    data: data,
			label: false,
			date : nextEvent,
	    onSelected: function (view, date, data) {
	        // console.log('view:' + view)
	        // console.log('date:' + date)
	        // console.log('data:' + data);
					if(data){
						var div = document.getElementById('accordion2').children[1];
						div.innerHTML='<b>'+dayNames[date.getDay()]+' '+date.getDate()+' '+monthNames[date.getMonth()]+' '+date.getFullYear()+'</b><br/><br/>'+data;
						// div.animate({height:'toggle'});
					}
	    },
	    viewChange: function (view, y, m) {
	        // console.log(view, y, m)
	    }
	});
});

/*-----------------------------------------------------------------------------------*/
/*	whatis slider
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
    // Plugin initialization
    $('#whatis-right3 .slider').slider({interval:4000, height:350});
})

/*-----------------------------------------------------------------------------------*/
/*	school-mobile slider
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
    // Plugin initialization
    $('#school-mobile .slider').slider({indicators:false, height:280, interval:1000});
})


/*-----------------------------------------------------------------------------------*/
/*	numbers-mobile scrollFire
/*-----------------------------------------------------------------------------------*/

 	var options = [ {selector: '#numbers-list1', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } },
									{selector: '#numbers-list2', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } },
									{selector: '#numbers-list3', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } },
									{selector: '#numbers-list1-mobile', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } },
									{selector: '#numbers-list2-mobile', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } },
									{selector: '#numbers-list3-mobile', offset: 200, callback: function(el) { Materialize.showStaggeredList($(el)); } }];
 	Materialize.scrollFire(options);

/*-----------------------------------------------------------------------------------*/
/*	classement dropdown version mobile
/*-----------------------------------------------------------------------------------*/
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Desactivate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: true // Stops event propagation
    }
  );
