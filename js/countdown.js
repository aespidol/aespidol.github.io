$(document).ready(function(){
    //
  (function(e){
        e.fn.countdown = function (t, n){
            function i(){
                eventDate = Date.parse(r.date) / 1e3;
                currentDate = Math.floor(e.now() / 1e3);
                //
                if(eventDate <= currentDate){
                    n.call(this);
                    clearInterval(interval)
                }
                //
                seconds = eventDate - currentDate;
                days = Math.floor(seconds / 86400);
                seconds -= days * 60 * 60 * 24;
                hours = Math.floor(seconds / 3600);
                seconds -= hours * 60 * 60;
                minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60;
                //
                days == 1 ? thisEl.find(".timeRefDays").text("Days") : thisEl.find(".timeRefDays").text("Days");
                hours == 1 ? thisEl.find(".timeRefHours").text("Hours") : thisEl.find(".timeRefHours").text("Hours");
                minutes == 1 ? thisEl.find(".timeRefMinutes").text("Minutes") : thisEl.find(".timeRefMinutes").text("Minutes");
                seconds == 1 ? thisEl.find(".timeRefSeconds").text("Seconds") : thisEl.find(".timeRefSeconds").text("Seconds");
                //
                if(r["format"] == "on"){
                    days = String(days).length >= 2 ? days : "0" + days;
                    hours = String(hours).length >= 2 ? hours : "0" + hours;
                    minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
                    seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
                }
                //
                if(!isNaN(eventDate)){
                    thisEl.find(".days").text(days);
                    thisEl.find(".hours").text(hours);
                    thisEl.find(".minutes").text(minutes);
                    thisEl.find(".seconds").text(seconds)
                }
        else{
          errorMessage = "Invalid date. Example: 27 March 2015 17:00:00";
                    alert(errorMessage);
                    console.log(errorMessage);
                    clearInterval(interval)
                }
            }
            //
            var thisEl = e(this);
            var r = {
                date: null,
                format: null
            };
            //
            t && e.extend(r, t);
            i();
            interval = setInterval(i, 1e3)
        }
    })(jQuery);
    //
    $(document).ready(function(){
        function e(){
            var e = new Date;
            e.setDate(e.getDate() + 60);
            dd = e.getDate();
            mm = e.getMonth() + 1;
            y = e.getFullYear();
            futureFormattedDate = mm + "/" + dd + "/" + y;
            return futureFormattedDate
        }
        //
        $("#countdown").countdown({
            date: "31 January 2017 00:00:59", // change date/time here - do not change the format!
            format: "on"
        });
    });
});


// // Create Countdown
// var Countdown = {
  
//   // Backbone-like structure
//   $el: $('.countdown'),
  
//   // Params
//   countdown_interval: null,
//   total_seconds     : 0,
  
//   // Initialize the countdown  
//   init: function() {
    
//     // DOM
// 		this.$ = {
//     	hours  : this.$el.find('.bloc-time.hours .figure'),
//     	minutes: this.$el.find('.bloc-time.min .figure'),
//     	seconds: this.$el.find('.bloc-time.sec .figure')
//    	};

//     // Init countdown values
//     this.values = {
// 	      hours  : this.$.hours.parent().attr('data-init-value'),
//         minutes: this.$.minutes.parent().attr('data-init-value'),
//         seconds: this.$.seconds.parent().attr('data-init-value'),
//     };
    
//     // Initialize total seconds
//     this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;

//     // Animate countdown to the end 
//     this.count();    
//   },
  
//   count: function() {
    
//     var that    = this,
//         $hour_1 = this.$.hours.eq(0),
//         $hour_2 = this.$.hours.eq(1),
//         $min_1  = this.$.minutes.eq(0),
//         $min_2  = this.$.minutes.eq(1),
//         $sec_1  = this.$.seconds.eq(0),
//         $sec_2  = this.$.seconds.eq(1);
    
//         this.countdown_interval = setInterval(function() {

//         if(that.total_seconds > 0) {

//             --that.values.seconds;              

//             if(that.values.minutes >= 0 && that.values.seconds < 0) {

//                 that.values.seconds = 59;
//                 --that.values.minutes;
//             }

//             if(that.values.hours >= 0 && that.values.minutes < 0) {

//                 that.values.minutes = 59;
//                 --that.values.hours;
//             }

//             // Update DOM values
//             // Hours
//             that.checkHour(that.values.hours, $hour_1, $hour_2);

//             // Minutes
//             that.checkHour(that.values.minutes, $min_1, $min_2);

//             // Seconds
//             that.checkHour(that.values.seconds, $sec_1, $sec_2);

//             --that.total_seconds;
//         }
//         else {
//             clearInterval(that.countdown_interval);
//         }
//     }, 1000);    
//   },
  
//   animateFigure: function($el, value) {
    
//      var that         = this,
// 		     $top         = $el.find('.top'),
//          $bottom      = $el.find('.bottom'),
//          $back_top    = $el.find('.top-back'),
//          $back_bottom = $el.find('.bottom-back');

//     // Before we begin, change the back value
//     $back_top.find('span').html(value);

//     // Also change the back bottom value
//     $back_bottom.find('span').html(value);

//     // Then animate
//     TweenMax.to($top, 0.8, {
//         rotationX           : '-180deg',
//         transformPerspective: 300,
// 	      ease                : Quart.easeOut,
//         onComplete          : function() {

//             $top.html(value);

//             $bottom.html(value);

//             TweenMax.set($top, { rotationX: 0 });
//         }
//     });

//     TweenMax.to($back_top, 0.8, { 
//         rotationX           : 0,
//         transformPerspective: 300,
// 	      ease                : Quart.easeOut, 
//         clearProps          : 'all' 
//     });    
//   },
  
//   checkHour: function(value, $el_1, $el_2) {
    
//     var val_1       = value.toString().charAt(0),
//         val_2       = value.toString().charAt(1),
//         fig_1_value = $el_1.find('.top').html(),
//         fig_2_value = $el_2.find('.top').html();

//     if(value >= 10) {

//         // Animate only if the figure has changed
//         if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
//         if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
//     }
//     else {

//         // If we are under 10, replace first figure with 0
//         if(fig_1_value !== '0') this.animateFigure($el_1, 0);
//         if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
//     }    
//   }
// };

// // Let's go !
// Countdown.init();