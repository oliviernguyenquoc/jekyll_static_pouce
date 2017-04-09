$(".clock").TimeCircles({
	animation: "ticks",
	//circle_bg_color: "#000000",
	fg_width: 0.05,
	use_background: false,
	time: {
		Days: {
			color: "#ffab00",
			text: "Jour",
			show: false
		},
    	Hours: {
    		color: "#ffab00",
    		text: "Heures"
		},
    	Minutes: {
    		color: "#ffab00",
    		text: "Minutes"
		},
    	Seconds: {
    		color: "#ffab00",
    		text: "Secondes"
		}
	}
});

/*-----------------------------------------------------------------------------------*/
/*	Counter animation
/*-----------------------------------------------------------------------------------*/

var date1 = new Date();
var datadate = $("#clock_day").attr( 'data-date' );
var t = datadate.split(/[- :]/);
var date2 = new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5]);
var diff = date2 - date1;
var days = Math.floor(diff / 1000 / 60 / 60 / 24);

// var numAnim = new CountUp("clock_day", 0, endVal, duration/2);
// numAnim.start(function() {
//     numAnim.update(endVal);
// });
var numAnim = new CountUp("clock_day", 0, days);
numAnim.start();
