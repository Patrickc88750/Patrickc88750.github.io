function doStartClock() {
    // Define Global variables
    YearArray = [];
    TodaybellArray = [];
    NextdaybellArray = [];
    Nowtime = [];
    Todaystring = [];
    Onedaystring = [];
    Nextdaystring = [];
    AllShortArray = []; // hold all shortened schedules AM/lunch/PM
    yearcount = 0;      //number of rows in YearArray, approx 365
    todayindex = 0;     // where in the YearArray is today. 0 to (num of days -1)
    tindex_lastsecond = -1;  // will be updated in doClockTick()
    nextbellindex = 0;
    nextbell_lastsec = 0;   // check for class transitions
    Onedaycount = 0; // number of bells in BellArray
    Todaycount = 0;
    Nextdaycount = 0;
    Secondsumnow = 0;   // seconds from midnight
    bellday = 0;
    bellhour = 0;
    bellmin = 0;
    bellsec = 0;
    deltacomposite = 0; // unit is seconds, to the next bell
    offsetmillisec = 0;
    singlechar = "NO"; // define single character string
    DayZstring = 0;     // ascii code 90 = Z means no school
    schedulecount = 0;  // how many day schedules in this school
    unicodecount = 0;   // how many unicodes less than 90 in Year calendar
    currentDate = 0;    // make this global for analog clock to access
    repeatscheduleends = 65;   // the next in alphabet will be a special schedule
    weekcount = 0;      // how many weeks are in the year schedule
    todaywhatdayisit = 0;   // based on todayindex, number 0 to 6
    todayweeknum = 0;       // week number based on todayindex, 1 to 53
    timeoffsetjustchanged = 0;  // Print weekly schedule after time offset has changed
    weekdayselected = 99;    // the weekday selected to be printed in Xdayschedule section
    weeknumselected = 0;    // the weeknum 1 to 53 selected to be printed
    /* additional global variables
    in function doOneDelta():
    timeString  displays in format hh:mm:ss
    titlestring displays timestring in browser tab
    arrowstring displays timestring in today's schedule table
    minutecomposite
    delsec
    delhr
    delmin
    */

                    
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

    if (adminmode ==1){Do_offsetform('offsetinputs')}

    YeartoArrayFunction();  // return YearArrayTemp and yearcount

    Checkscheduleunicodematch();    // The two counts must match
    
    Do_modeXschedule();     // determine which schedules are repeating
    
    Allshortschedules();    // populate AllShortArray

    if (adminmode == 1){
        
        printallschedules();

        printyearcalendar();
    }
    
    Do_apptform('offsetweek');

    doClockTick();  // setInterval does Delay first then action

    Do_apptdetails();   // also set weekoffset range

    Do_makescrollbutton("scrollbuttonsection");
    // Do_apptscroll and Do_alarmscroll absorbed into Do_makescrollbutton
    
    setInterval(doClockTick, 1000);       
    
}


