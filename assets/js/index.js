$(document).ready(function(){
	$('#modal1').modal();
	$('select').material_select();
	$('.parallax').parallax();
	$('.button-collapse').sideNav();
});

/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/

var menu = $('#navbar');

$(window).bind('scroll', function () {
	if ($(window).scrollTop() > 300 && menu.hasClass('default')) {
        menu.removeClass('default').addClass('sticky').fadeIn('fast');
    } else if ($(window).scrollTop() <=  300 && menu.hasClass('sticky'))  {
        menu.removeClass('sticky').addClass('default').fadeIn(0);
    }
});

//X BUTTON RESIZE
// $(document).ready(function() {
//     var e = $("#switcher").outerHeight();
//     $("#iframe").attr("height", $(window).height() + "px");
//     $('#hide-demo-bar').click(function() {
// 		$("#iframe").attr("height", $(window).height() - e + "px");

// 		$('body').toggleClass('switcher-hidden');
//         $('#switcher').toggleClass('fbar-hidden-switcher');
//         $('#hide-demo-bar').toggleClass('fbar-hidden-btn');
//         $('#iframe').toggleClass('fbar-top-iframe');

// 		if ($('body').hasClass('switcher-hidden')) {
// 			$("#iframe").attr("height", $(window).height() + "px");
// 		} else {
// 			$("#iframe").attr("height", $(window).height() - e + "px");
// 		}
// 	});
// 	$(window).resize(function () {
// 		if ($('body').hasClass('switcher-hidden')) {
// 			$("#iframe").attr("height", $(window).height() + "px");
// 		} else {
// 			$("#iframe").attr("height", $(window).height() - e + "px");
// 		}
// 	}).resize();
// 		$("#header-bar").hide();
// 		clicked = "desktop";
// 		var t = {
// 			desktop: "100%",
// 			tabletlandscape: 1040,
// 			tabletportrait: 788,
// 			mobilelandscape: 500,
// 			mobileportrait: 340,
// 			placebo: 0
// 		};
// 		$(".responsive a").on("click", function() {
// 			var e = $(this);
// 			for (device in t) {
// 				console.log(device);
// 				console.log(t[device]);
// 				if (e.hasClass(device)) {
// 					clicked = device;
// 					$("#iframe").width(t[device]);
// 					if (clicked == device) {
// 						$(".responsive a").removeClass("active");
// 						e.addClass("active")
// 					}
// 				}
// 			}
// 			return false
// 		});

// });


//Submit registration form in modal
// $(function() {
// 	$("button#submit").click(function(){
// 		$.ajax({
// 			type: "POST",
// 			url: "",
// 			data: $('form.registration_form').serialize(),
// 			dataType: 'json',
// 			success: function(msg){
// 				$("#thanks").html(msg)
// 				$("#form-content").modal('hide'); 
// 			},
// 			error: function(){
// 				alert("failure");
// 			}
// 		});
// 	});
// });

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
