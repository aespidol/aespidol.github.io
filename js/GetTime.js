/* Get time */
	var dt = new Date(), //Date
    time = dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear() + " " + (dt.getHours()+24) + ":" + dt.getMinutes() + ":" + dt.getSeconds(),
    year = dt.getFullYear(),
    month = dt.getMonth(),
    day = (dt.getDate()+1),
    hour = dt.getHours(),
    min = dt.getMinutes(),
    sec = dt.getSeconds();
    console.log(time);

/* Flopclock оотсчёт до конца дня*/
  var clocks = [];
  timenow = hour*60*60+min*60+sec;
  target = 86400;
  targettime = target;
  var date = new Date();
  date.setTime(date.getTime() + (target * 1000));
  
  if (!$.cookie('offerTimer')){ 
    $.cookie("offerTimer", targettime,{expires: date});
  }

/* Flopclock отсчёт указанного времени
  var clocks = [];
  timenow = hour*60*60+min*60+sec;
  target = 22000;
  targettime = timenow + target;
  var date = new Date();
  date.setTime(date.getTime() + (target * 1000));
  
  if (!$.cookie('offerTimer')){ 
    $.cookie("offerTimer", targettime,{expires: date});
  }
*/
  $('.clock').each(function() {
    var clock = $(this);

    clock = clock.FlipClock({
      //clockFace: 'TwentyFourHourClock',
      autoStart: true,
    });
          
    clock.setTime($.cookie("offerTimer")-timenow);
    clock.setCountdown(true);
    clock.start();

    clocks.push(clock);
  });

