function doStartClock() {
            
    // MakeBellSchedule(); // Yearstring, DayXstring created
  
    InitializeAllInputs();

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

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius, currentDate); // currentDate is global
}

function drawClockreddot(bellminute) {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawRedDot(ctx, radius, bellminute);
    drawTime(ctx, radius, currentDate);
}
  
