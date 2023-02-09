function doStartClock() {
    
    YearArray = [];
    TodaybellArray = [];
    NextdaybellArray = [];
    Nowtime = [];
    Todaystring = [];
    Onedaystring = [];
    Nextdaystring = [];
    yearcount = 0;      //number of rows in YearArray, approx 365
    todayindex = 0;     // where in the YearArray is today
    tindex_lastsecond = 0;  // will be updated in doClockTick
    nextbellindex = 0;
    nextbell_lastsec = 0;   // check for class transitions
    Onedaycount = 0; // number of bells in BellArray
    Todaycount = 0;
    Nextdaycount = 0;
    Secondsumnow = 0;
    bellday = 0;
    bellhour = 0;
    bellmin = 0;
    bellsec = 0;
    timedelta = 0;
    deltacomposite = 0;
    offsetmillisec = 0;
    singlechar = "NO"; // define single character string
    DayZstring = 0;     // ascii code 90 = Z means no school
    schedulecount = 0;  // how many day schedules in this school
    unicodecount = 0;   // how many unicodes less than 90 in Year calendar
    currentDate = 0;    // make this global for analog clock to access
    
                    
    // MakeBellSchedule(); // Yearstring, DayXstring created
  
    InitializeAllInputs();

    canvas = document.getElementById('clock');
    canvas.width = 600;
    canvas.height = 600;
    ctx = canvas.getContext('2d');
    const radius0 = canvas.width / 2;  
    bellminute = 0;  // 0 to 59
    imagelink = Schoollogo_string.trim();
    ctx.translate(radius0, radius0);
    radius = radius0 * 0.90;    // radius is global

    
    Do_schoolnamelines('rightfield', Schoolname_string);

    Do_resourcelines('resourcefield', Resources_string);

    Do_displaylogo('leftfield', Schoollogo_string);

    if (adminmode ==1){Do_offsetform('offsetinputs');}

    YeartoArrayFunction();  // return YearArrayTemp and yearcount

    if (adminmode == 1){
        Checkscheduleunicodematch();    // The two counts must match
        
        printallschedules();

        printyearcalendar();
    }
    
    doClockTick();  // setInterval does Delay first then action
    
    setInterval(doClockTick, 1000);       
    
}


