function YeartoArrayFunction() {    // output is YearArray, a large matrix
    let all = Yearstring.trim();
    let lines = all.split("\n");
    yearcount = lines.length;   // number of days, # of rows
    let Daysbacktoschool = [];  // number of days before the next school day
    let Yearmonthday = []; 
    let Lastdayb4break = [];
    let Firstdayback = [];     // initialize comparison reference
    let weeknumber = 1;     // first week is number 1; week is SUN to SAT
    let longmonth = "";
    let shortmonth = "";

    for (let i=0; i<yearcount; ++i){
        lines[i]=lines[i].trim();
        tokens = lines[i].split(",");
        Daysbacktoschool[i] = 0;    // will fix this in the next loop
        Lastdayb4break[i] = 0; 
        Firstdayback[i] = 0;        // initialize all to zeros
        Yearmonthday[i] = (parseInt(tokens[0])*100 + parseInt(tokens[1]))*100 + parseInt(tokens[2]);
        var whichweekday = "";
        var weekdaycount = 0;
        switch (tokens[3]){
            case "SUN":
                whichweekday = "Sunday";
                weekdaycount = 0;
                break;
            case "MON":
                whichweekday = "Monday";
                weekdaycount = 1;
                break;
            case "TUE": 
                whichweekday = "Tuesday";
                weekdaycount = 2;
                break;
            case "WED":
                whichweekday = "Wednesday";
                weekdaycount = 3;
                break;
            case "THU":
                whichweekday = "Thursday";
                weekdaycount = 4;
                break;
            case "FRI":
                whichweekday = "Friday";
                weekdaycount = 5;
                break;
            case "SAT":
                whichweekday = "Saturday";
                weekdaycount = 6;
                }
        switch(tokens[1]){
            case "1":
                longmonth = "January";
                shortmonth = "Jan";
                break;
            case "2":
                longmonth = "February";
                shortmonth = "Feb";
                break;
            case "3":
                longmonth = "March";
                shortmonth = "Mar";
                break;
            case "4":
                longmonth = "April";
                shortmonth = "Apr";
                break;
            case "5":
                longmonth = "May";
                shortmonth = "May";
                break;
            case "6":
                longmonth = "June";
                shortmonth = "Jun";
                break;
            case "7":
                longmonth = "July";
                shortmonth = "Jul";
                break;
            case "8":
                longmonth = "August";
                shortmonth = "Aug";
                break;
            case "9":
                longmonth = "September";
                shortmonth = "Sep";
                break;
            case "10":
                longmonth = "October";
                shortmonth = "Oct";
                break;
            case "11":
                longmonth = "November";
                shortmonth = "Nov";
                break;
            case "12":
                longmonth = "December";
                shortmonth = "Dec";
            }
        YearArray.push([parseInt(tokens[8]), Yearmonthday[i], whichweekday, tokens[4], parseInt(tokens[5]), tokens[6], tokens[7], Daysbacktoschool[i], Lastdayb4break[i], Firstdayback[i], tokens[0], tokens[1], tokens[2], weekdaycount, longmonth, weeknumber, shortmonth]);
        if (weekdaycount == 6){weeknumber = weeknumber + 1; }
    
    }   // an entire YearArray ~365 rows is now formed
    weekcount = YearArray[yearcount - 1][15];

    // YearArray column definition
    // 0: index, 1 to approx. 365 tokens[8] (number)
    // 1: Yearmonthday composite date value (number)
    // 2: day of week Sunday Monday ... Saturday tokens[3] (string)
    // 3: Bell type for a specific day as an alphabet letter tokens[4] (alphabet)
    // 4: UNICODE of Bell type letter tokens[5] (number)
    // 5: Special dates Q academic R break longer than or equal to 3 days tokens[6]
    // 6: message of the day tokens[7]
    // 7: Daysbacktoschool typical Tuesdays = 1 and typical Fridays = 3 (number)
    // 8: Lastdayb4break The last day before a break of one or more days = 1 (number)
    // 9: Firstdayback First day back to school after a break of one or more days = 1 (number)
    // 10: Year (string)
    // 11: Month (string)
    // 12: Day (string)
    // 13: weekdaycount (number 0 to 6)
    // 14: longmonth (string)
    // 15: weeknumber (number 1 to 5X)
    // 16: short month (string)
    
    // this section initialize column indexed 7, 8, and 9
    
    YearArray[yearcount-1][8] = 0;    // assume the next day after last day of timer is a school day
    // is a first day back to school if it is a school day, by design of the timer
    if (YearArray[0][4] == 90){YearArray[0][9] = 0;} else {YearArray[0][9] = 1;}
     
    for (let i=1; i < yearcount; ++i){      // this loop looks for first school days after a break
        if (YearArray[i-1][4] == 90 && YearArray[i][4] != 90){
            YearArray[i][9] = 1;
        }
        if (YearArray[i-1][4] != 90 && YearArray[i][4] == 90){
            YearArray[i-1][8] = 1; 
        }
    }   

    // 7: Daysbacktoschool typical Tuesdays = 1 and typical Fridays = 3 (number)
    // assume the day after the last day of timer, [yearcount], is a school day
    // YearArray[yearcount-1][7] = 1;       // don't care, expect all Z's waiting for timer update
    // to determine the first day, YearArray[0][7], separately
    let j = 1;
    while  (YearArray[j][4] === 90){
        if (j == yearcount){
            break;  // Exit the while loop if j equals yearcount (unlikely)
        }
        j++
    }
    YearArray[0][7] = j;

    for (let i=1; i < yearcount - 1; ++i){    // the loop skips the first day
        if (YearArray[i-1][7] != 1){    // today already non-school day, can use a count down scheme
            YearArray[i][7] = YearArray[i-1][7] - 1;    // the difference will not be zero
        } else {    // else will count how many Z's before a school day occurs again
            let j = 1;
            
            while (YearArray[i+j][4] === 90){
                j++;
                if (i+j == yearcount){
                    break;  // Exit the while loop if i + j equals yearcount
                }
            }
            YearArray[i][7] = j;    // j is now 1 plus the number of break days
        }                           // j means back to school in how many days including today
    }
    // assuming the next day after last day of timer is a school day. 
    // Then YearArray[yearcount - 1][7] must be a 1
    YearArray[yearcount - 1][7] = 1;
    }

function doClockTick() {
    var dayfound = 0;
    currentDate = createcurrentDate();  // includes offset, if any
    var hours = currentDate.getHours();
    var mins = currentDate.getMinutes();
    var secs = currentDate.getSeconds();
    var dayofmonth = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // getMonth results range 0 to 11
    var year = currentDate.getFullYear();
    // create a composite yearmonthday value for today
    var Year_today = (year * 100 + month) * 100 + dayofmonth;
    // store up todayindex of last second, to be compared to the new todayindex
    // to identify the crossing of midnight to the next day
    var tindex_lastsecond = todayindex;
    for (let i=0; i < (yearcount - 1); ++i){  // dayfound = 0 on the last day of this annual list
        if (YearArray[i][1] === Year_today){
            todayindex = i;         // todayindex can reach a max of one day before the last day of list
            dayfound = 1;
        }
    }
    if (dayfound == 0){
        PurposeString = "Please contact your school to update the bell schedule";
        var OutputElement = document.getElementById("whatsitfor");
        OutputElement.textContent = PurposeString;
        var titlestring = "Zzzz...";  // clear the title
        var  outputElement = document.getElementById("ctitle");
        outputElement.textContent = titlestring;
        clearInterval();
    } else { 
        // show clock tick on bottom of page
        const formattedDate = currentDate.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
            });
        if (secs % 2 == 0){
            var tickstring = "-|-| " + formattedDate;
        } else {
            var tickstring = "|-|- " + formattedDate;
        }
        var  outputElement = document.getElementById("clocktickindicator");
        outputElement.textContent = tickstring;
        
        // define other constants derived from todayindex
        todaywhatdayisit = YearArray[todayindex][13];
        todayweeknum = YearArray[todayindex][15];

        Secondsumnow = (hours * 60 + mins) * 60 + secs;
    
    // load the bell schedule for day pointed to by todayindex
    singlechar = String.fromCharCode(YearArray[todayindex][4]);
    let firstpart = "Day";
    let secondpart = "string";
    let targetvar = "Todaystring"
    eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" );   // DayZstring preset to 0
    
    // now load the next day so as to display what time to come back in the morning
    singlechar = String.fromCharCode(YearArray[todayindex+1][4]);
    targetvar = "Nextdaystring"
    eval(targetvar + " = " + firstpart + singlechar + secondpart + ";" );   // DayZstring preset to 0
    
    // if today is Z and next day is Z
    // then display NO SCHOOL and Back to school in xx days
    // if today is Z and next day is school day
    // then display NO SCHOOL and message from DayXstring
    //
    // if today is school day and next day is also school day
    // then display the timer and event message during school hours
    // and when before school, display countdown and CU hour:minute
    // and when after school, display 00:00 and CU tomorrow hour:minute
    // if today is school day and next day is Z
    // then during school hours, display timer and event messages
    // and when before school, display countdown and CU hour:minute
    // and when after school, display 00:00 and CU Month/day
    //
    if (YearArray[todayindex][4] == 90) {  // similar to Todaystring = 0
            // display in large font NO SCHOOL
            // no school today
            // drawClock without dot
            drawClock();
            var timeString ="BREAK";
            document.getElementById("timePar").style.color = 'black';
            document.getElementById("ctitle").style.color = 'black';
            // document.getElementById("timePar").style.fontSize = "0.5em";
            var outputElement = document.getElementById("timePar");
            outputElement.textContent = timeString;
            // document.getElementById("timePar").style.fontSize = "1em";
            
            var titlestring = "-" + YearArray[todayindex][7] + " days";
            var  outputElement = document.getElementById("ctitle");
            outputElement.textContent = titlestring;

        if (YearArray[todayindex+1][4] == 90) {  // similar to Nextdaystring = 0
            // if tomorrow is also no school
            // count and display below how many days till back to school  
            var PurposeString = "Back to School in " + YearArray[todayindex][7] + " days";
            var OutputElement = document.getElementById("whatsitfor");
            OutputElement.textContent = PurposeString;
        } else {
            // but if tomorrow school resumes, need to know when to wake up
            // build Nextdaybellarray
            Onedaystring = Nextdaystring;
            DaytoArray();
            NextdaybellArray = BellArray;
            Nextdaycount = Onedaycount;
            // display message from DayXstring
            // Check if the minutes value is less than 10. If so, prefix it with a "0".
            var MinuteString = NextdaybellArray[0][1] < 10 ? "0" + NextdaybellArray[0][1] : NextdaybellArray[0][1];

            var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + MinuteString + " !";

            // var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + NextdaybellArray[0][1] + " !";
            var OutputElement = document.getElementById("whatsitfor");
            OutputElement.textContent = PurposeString;
        }
    } else {  // else if today is school day
        // to build Todaybellarray
        Onedaystring = Todaystring;
        DaytoArray();
        TodaybellArray = BellArray;
        Todaycount = Onedaycount;
        // TodayBellArray
        // [0][5] Keyperiod is always 0  (Schedule name)
        // [Todaycount-1][0] Keyperiod is always 1 (eg. 6th period)
        //
        nextbell_lastsec = nextbellindex;
        // assumes the nextbellindex a second ago so as to compare for a change in class period
        nextbellindex = Findnextbell(Secondsumnow);
        // nextbellindex
        // = 0 means before the first bell, eg. very early morning
        // = 1 to Todaycount-1  during school hour
        // = 99 after school ends
        //
        if (nextbellindex != 99){   // midnight thru school hours before school ends
            // display timer and event messages
            doOneDelta();
            // draw Clock with red dot
            bellminute = BellArray[nextbellindex][3];   // minute value of next bell
            drawClockreddot(bellminute);
        } else {
            // after school ends, into the evening and to midnight
            // now there are two possibilities: tomorrow is school day, or tomorrow is day off
            // display school ends and CU messages
            // draw Clock without dot
            drawClock();
            var timeString ="PM";
            document.getElementById("timePar").style.color = 'black';
            document.getElementById("ctitle").style.color = 'black';
            // document.getElementById("timePar").style.fontSize = "0.5em";
            var outputElement = document.getElementById("timePar");
            outputElement.textContent = timeString;
            // document.getElementById("timePar").style.fontSize = "1em";
            //
            if (YearArray[todayindex+1][4] == 90) {  // similar to Nextdaystring = 0
                // Tomorrow is no school
                // count and display below how many days till back to school  
                var PurposeString = "Back to School in " + YearArray[todayindex][7] + " days";
                var OutputElement = document.getElementById("whatsitfor");
                OutputElement.textContent = PurposeString;
                var titlestring = "-" + YearArray[todayindex][7] + " days";
                var  outputElement = document.getElementById("ctitle");
                outputElement.textContent = titlestring;
            //
            } else {
            // Tomorrow is a school day
            // Need to find out when to come back to school tomorrow
            // build Nextdaybellarray
            Onedaystring = Nextdaystring;
            DaytoArray();
            NextdaybellArray = BellArray;
            Nextdaycount = Onedaycount;
            // event message after school and evenings
            // Check if the minutes value is less than 10. If so, prefix it with a "0".
            var MinuteString = NextdaybellArray[0][1] < 10 ? "0" + NextdaybellArray[0][1] : NextdaybellArray[0][1];

            var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + MinuteString + " !";

            // var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + NextdaybellArray[0][1] + " !";
            var OutputElement = document.getElementById("whatsitfor");
            OutputElement.textContent = PurposeString;
            var titlestring = "Zzz...";  // clear the title
            var  outputElement = document.getElementById("ctitle");
            outputElement.textContent = titlestring;
            }
        }
    }
    
    // First search backward from end of list to find the last R
    let i = yearcount - 1;  // this is the index to last day
    while(YearArray[i][5] != "R"){
        i = i - 1;
    }
    lastRindex = i;     // The last break day of the year is found
    if (todayindex < lastRindex){
        // count school days until next R but not past summer break
        let i = todayindex;
        if (YearArray[i][3] == "Z"){    // In case today is a first break day (R day)
            bdaycount = 0;
        } else {bdaycount = 1;}
        i++;        // start counting on the next day
        if (YearArray[i][5] == "R"){
            var breakString = YearArray[i][6] + " begins tomorrow!";  
        } else {
            while (YearArray[i][5] != "R"){ // looking for the real next R day
            if (YearArray[i][3] != "Z"){
                bdaycount++;}   // count school days up by one
                i++;    // move to the next calendar day before the break
            var breakString = bdaycount + " school days left to " + YearArray[i][6] + " (inc. today)";
            
        }
        }
        var outputElement = document.getElementById("tobreak");
        outputElement.textContent = breakString;
    } else {
        var timeString = "Summer break has begun"
        var outputElement = document.getElementById("tobreak");
        outputElement.textContent = timeString;
    }


    // First search backward from end of list to find the last Q
    i = yearcount - 1;  // this is the index to last day
    while(YearArray[i][5] != "Q"){
        i = i - 1;
    }
    lastQindex = i;
    if (todayindex <= lastQindex){
        if (YearArray[todayindex][5] == "Q"){   // right at end of a quarter
            var timeString = "Today is " + YearArray[todayindex][6];
        } else {
            // count school days until next Q
            let i = todayindex;
            sdaycount = 0;
            while (YearArray[i][5] != "Q"){
                if (YearArray[i][3] != "Z"){
                    sdaycount++;}
                i++;
            }
            var timeString = sdaycount + " school days left to " + YearArray[i][6];
            if (sdaycount == 1){
                var timeString = YearArray[i][6] + " is tomorrow!";
            }
        }
        var outputElement = document.getElementById("toendofQ");
        outputElement.textContent = timeString;
    } else {
        var timeString = "Please update this timer"
        var outputElement = document.getElementById("toendofQ");
        outputElement.textContent = timeString;
    }
    // Below decides if a table of schedule will be created or modified
    if (YearArray[todayindex][4] == 90) {
        if (todayindex != tindex_lastsecond){   // if no school then only draw once whole day
            // either during startup (tindex_lastsecond = -1) or tindex is one less than todayindex      
            Generateblank();
            Do_makescrollbutton("scrollbuttonsection"); // check again there and remove alarm button
        }
    } else {    // else today is a school day
        if (todayindex != tindex_lastsecond){    
            // school day create table once everyday 
            // either during startup (tindex_lastsecond = -1) or tindex is one less than todayindex      
            GenerateTableAlarm();
            Do_makescrollbutton("scrollbuttonsection"); // check again there and remove alarm button
        } else {
            UpdateTableAlarm();
            // Update the third column every second to reposition the arrow
        }
    }
    } // else dayfound != 0, means that today is found inside YearArray
    
    // If admin is not set then this if loop won't run
    if (timeoffsetjustchanged == 1){
        document.getElementById("weeknumoffset").value = 0;
        Specifyweekoffsetrange();

        weekdayselected = 99;   // so that when PrintWeeklyTable, no column is green
        weeknumselected = todayweeknum;
        PrintWeeklyTable(todayweeknum);
        var div = document.getElementById("Xdayschedule");
        if (div) {
        div.innerHTML = "";
        }

        timeoffsetjustchanged = 0;  // reset flag
    }
    
    if (todayindex < yearcount){    // last day of calendar won't apply
        var tomorrowwhatday
        var daytodayindex 
        tomorrowwhatday = YearArray[todayindex + 1][13]; // 0 1 2 3 4 5 6 SUN thru SAT
        if (tomorrowwhatday > 0 && tomorrowwhatday < 6){
            // basically referring to all five weekdays
            daytodayindex = tomorrowwhatday - 1;
        } else {daytodayindex = 0;}
        // If tomorrow turns out to be a SUN or SAT, then all we need is to have the next if statement 
        // getting a whatever value from repeatModedaybyday. The second comparison will render the combined
        // statement to be False.

        // inspecting which day of the week is tomorrow
        // the daytodayindex is one less than the weekdaycount
        if (YearArray[todayindex + 1][4] != repeatModedaybyday[daytodayindex] && YearArray[todayindex + 1][4] != 90){
            var alertString = "*Alert* tomorrow's schedule is unusual";
            var outputElement = document.getElementById("alertmessage");
            outputElement.textContent = alertString;
        } else {
            var div = document.getElementById("alertmessage");
            if (div) {
            div.innerHTML = "";
            }
        }
    }   
    
    
}

function DaytoArray(){
    // DaytoArray creates and modifys BellArray, a global variable
    // creaate composite hourminutesecond for each event
    // create Keyperiod = 1 for any event not passing
    BellArray = [];
    let all = Onedaystring.trim();
    let lines = all.split("\n");
    Onedaycount = lines.length;   // number of bells, # of rows
    let recognizePM = 0;
    let previoushour = 0;
    let Keyperiod = [];
    for (let i=0; i<Onedaycount; ++i){  // this for loop creates BellArray but last column = 0
        lines[i]=lines[i].trim();
        tokens = lines[i].split(",");
        tokens[0] = parseInt(tokens[0]);  // hour is now a number

        if (i==0 && tokens[0]<6 ) {   // no bell should be before 6 AM
            recognizePM = 1;    // that means the first bell is like 1PM
        }
        // for example previoushour is 12 and tokens[0] is 1 then 1 is in the PM
        if (previoushour > tokens[0]) {
            recognizePM = 1;
        }
        if (recognizePM === 1) {
            tokens[0] += 12;    // all PM hour is added by 12 to get true 24 hr day
        }
        previoushour = tokens[0];  // this hour value is kept as the previous hour
        tokens[1] = parseInt(tokens[1]);    // minutes now a number
        let Secondsum = tokens[0] * 60 + tokens[1];
        Keyperiod[i] = 0;
        BellArray.push([tokens[0], tokens[1], 0, Secondsum, tokens[2], Keyperiod[i]]);
        // BellArray column definition
        // 0: tokens[0] hour
        // 1: tokens[1] minute
        // 2: 0 second -- schedules specified down to minutes only 
        // 3: composite hourminutesecond on the schedule
        // 4: event messages
        // 5: Keyperiod -- all events excluding transitions
    }
    // the next for loop fills in the last column whether event is worth listing
    for (let i=0; i<(Onedaycount-1); ++i){  // will skip the last event which is not transition
        // if ((BellArray[i+1][3] - BellArray[i][3]) >= 7) { // delta >= 7 minutes 
        //    BellArray[i+1][5] = 1;
        // }
        if (BellArray[i+1][4].indexOf("passing") === -1) { // "passing" not found
           BellArray[i+1][5] = 1;
        }
        
    }
}

function Findnextbell(Secsumnow) {
    var nextfound = 0;
    var bellindex = 0;
    for (let i = 0; i < Onedaycount; ++i){
        delta = Secsumnow - BellArray[i][3] * 60;   // convert minutes to seconds
        // delta greater than 0 means the scheduled time has passed
        // for example now 11:00:00 then should still display event message found on same line
        // now is 11:00:01 then should display the next event message
        if (delta <= 0 && nextfound == 0) {     // registers the first that happens
            nextfound = 1;
            bellindex = i;
            deltacomposite = -1 * delta;    // Timer will display a positive delta seconds
        }
    }
    if (nextfound == 0){
            bellindex = 99;          // now is after the last scheduled time entry
    }
    return bellindex;
}

function doOneDelta(){
    timeString = "  ";
    titlestring = "  ";
    arrowstring = "  ";
    var minutecomposite = Math.floor(deltacomposite/60);
    delsec = deltacomposite % 60;
    delhr = Math.floor(minutecomposite/60);
    delmin = minutecomposite % 60;
    if (delhr == 0 && delmin < 3){
        document.getElementById("timePar").style.color = 'red';
        document.getElementById("ctitle").style.color = 'red';
    } else {
        document.getElementById("timePar").style.color = 'black';
        document.getElementById("ctitle").style.color = 'black';
    }
    if (delsec < 10){
        delsec = '0' + delsec;  // delsec converted to a string
    }
    if (delhr == 0){

        timeString = delmin + ":" + delsec;
    } else {
        delhr = '' + delhr;
        if (delmin < 10){
            delmin = '0' + delmin;  // delmin converted to a string and padded
        }
        timeString = delhr + ":" + delmin + ":" + delsec;
    }
    // see below titlestring = timeString;
    arrowstring = timeString;   // print inside the table
    var outputElement = document.getElementById("timePar");
    outputElement.textContent = timeString;

    var PurposeString = BellArray[nextbellindex][4];
    var OutputElement = document.getElementById("whatsitfor");
    OutputElement.textContent = PurposeString;
    
    // Extract the content to be placed inside the parentheses based on PurposeString
    var contentInsideParentheses;
    
    if (PurposeString.includes("passing")) {
        contentInsideParentheses = "...";
    } else {
        // Check for any number in the PurposeString
        var numberMatch = PurposeString.match(/\d+/);
        if (numberMatch) {
            // If a number is found, use it
            contentInsideParentheses = numberMatch[0];
        } else {
            // If no number is found, use the first character, converted to uppercase
            contentInsideParentheses = PurposeString.charAt(0).toUpperCase();
        }
    }
    
    // Concatenate timeString with the determined content inside parentheses
    var titlestring = timeString + " (" + contentInsideParentheses + ")";
    var outputElement = document.getElementById("ctitle");
    outputElement.textContent = titlestring;
    
    // document.getElementById("timePar").style.color = 'black';
    // document.getElementById("ctitle").style.color = 'black';
}

function Generateblank() {  // generate a blank schedule if not a school day
    var todayrows = new Array();
    var formattedDate = YearArray[todayindex][2] + " <span style='white-space: nowrap;'>" + YearArray[todayindex][11] + "-" + YearArray[todayindex][12] + "-" + YearArray[todayindex][10] + "</span>";

    todayrows.push([formattedDate, "No School"]);
    
    var table = document.createElement("TABLE");
    table.id = "dvTable";
    table.style.width = "550px";
    
    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        headerCell.style.paddingLeft = '20px';
        headerCell.style.paddingRight = '20px';
        headerCell.style.textAlign = 'center';
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
        }
    }

    var dvTableContainer = document.getElementById("dvTableContainer");
    dvTableContainer.innerHTML = "";
    dvTableContainer.appendChild(table);

}

function createcurrentDate(){
    var currentDate = new Date();
    var rawmillisecond = currentDate.getTime();
    rawmillisecond = rawmillisecond +  offsetmillisec;
    currentDate = new Date(rawmillisecond);
    return currentDate;
}

function Do_modeXschedule(){
    // inputs are YearArray, weekcount output is to change repeatscheduleends
    // A new approach is to update the array repeatModedaybyday, by identifying and using
    // the Mode for each weekday to determine which schedule(s) are marked in Red.

    var firstdaysecondweek = 0;
    while (YearArray[firstdaysecondweek][15] < 2){firstdaysecondweek++};
    var weekdayarray = [];
    for (let i=0; i<5; i++){weekdayarray[i] = []};  // initialize 2D array
    for (i=0; i<5; i++){
        for (let jweek=2; jweek < weekcount; jweek++){
            let whichday = firstdaysecondweek + i + 1 + (jweek - 2) * 7;
            weekdayarray[i][jweek - 2] = YearArray[whichday][4];
        }
    }
    // weekdayarray.forEach(e => console.log(e));
    let mode = [];
    let maxCount = [];
    for (i=0; i<5; i++){maxCount[i] = 0}    // initialize maxCounts of all five weekdays to be zero
    for (i=0; i<5; i++){
        const counts = {};
        
        for (const num of weekdayarray[i]) {

            // Skip if num is 90
            if (num === 90) continue;

            if (num in counts) {
                counts[num]++;
            } else {
                counts[num] = 1;
            }

            if (counts[num] > maxCount[i]) {
                maxCount[i] = counts[num];
                mode[i] = num;
            }
        }
    }
    // maxCount.forEach(e => console.log(e));
    // mode.forEach(e => console.log(e));
    for (i=0; i<5; i++){
        // if (mode[i] > repeatscheduleends){repeatscheduleends = mode[i]}
        repeatModedaybyday[i] = mode[i];
        // each weekday will have its own mode. Advantage is 1) any schedule other than the mode is considered special
        // 2) an often-repeated schedule can be alphabetically behind a special schedule. eg. A is Finals, D is regular
    }
    // console.log(repeatscheduleends);
}

function GenerateTableAlarm() {
    /* Inputs are 
    YearArray
    todayindex
    TodaybellArray
    nextbellindex
    Todaycount
    arrowstring

    */
    var todayrows = new Array();    // builds table with header row
    var starthr = 0;
    var startmin = 0;
    var endhr = 0;
    var endmin = 0;
    var timespanstring = "";
    var eventstring = "";
    var eventstringrows = new Array();
    
    var formattedDate = YearArray[todayindex][2] + " <span style='white-space: nowrap;'>" + YearArray[todayindex][11] + "-" + YearArray[todayindex][12] + "-" + YearArray[todayindex][10] + "</span>";

    // var formattedDate =YearArray[todayindex][2]  + " " + YearArray[todayindex][11] + "-" + YearArray[todayindex][12] + "-" + YearArray[todayindex][10];  
    
    todayrows.push([formattedDate, "Minutes", TodaybellArray[0][4] + " Schedule"]);
    
    for (i=0; i < Todaycount; ++i){
        
        if (TodaybellArray[i][5] == 1){
            starthr = TodaybellArray[i-1][0];
            startmin = TodaybellArray[i-1][1];
            endhr = TodaybellArray[i][0];
            endmin = TodaybellArray[i][1];
            var deltaminute = endhr * 60 + endmin - starthr * 60 - startmin;
            // deltaminute duration of a period or a break/lunch
            if (starthr > 12){starthr = starthr - 12;}
            if (startmin < 10){startmin = "0" + startmin;}
            if (endhr > 12){endhr = endhr - 12;}
            if (endmin < 10){endmin = "0" + endmin;}

            timespanstring = starthr + ":" + startmin + " - " + endhr + ":" + endmin;
            eventstring = TodaybellArray[i][4];
            eventstringrows.push([eventstring]);    // stores event string without arrow
            // eventstringrows index is shifted by 1 from todayrows because of omission of header
            todayrows.push([timespanstring, deltaminute, eventstring]);
        }
    }
    var table = document.createElement("TABLE");
    table.id = "dvTable";

    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) { // three columns at this stage
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][j];
        headerCell.style.textAlign ='center';
        headerCell.style.paddingLeft = '10px';
        headerCell.style.paddingRight = '10px';
        if (j == 0) {
            headerCell.style.textAlign = 'right';
            headerCell.style.paddingRight = '25px';
        };
        row.appendChild(headerCell);
    }  
    // now add one more header cell on the right  
    var headerCell = document.createElement("TH");
        headerCell.innerHTML = "Alarm <span style='font-size: 50%'>repeat armed</span>";
        headerCell.style.paddingLeft = '5px';
        headerCell.style.paddingRight = '5px';
        row.appendChild(headerCell);

    for (var i = 1; i < todayrows.length; i++) {    // starting i = 1 not i = 0 because header is done
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
            if (j == 0) {
                cell.style.textAlign = 'right';
                cell.style.paddingRight = '20px';
            };
        }
        // For each row in the for loop,
        // Create the input and checkboxes group in the last cell of the row
        var inputCell = document.createElement("td");
        var inputContainer = document.createElement("div");
        inputContainer.className = "input-checkbox-container";

        var inputElement = document.createElement("input");
        inputElement.type = "number";
        inputElement.value = 0;
        inputElement.min = 0;
        inputElement.max = Math.min(todayrows[i][1] - 4, 10); 
        inputElement.style.textAlign = "center"; // add this line to align the number to the right
        inputElement.id = schoolid + "Minutestobell-" + eventstringrows[i-1]; // assign a unique ID to the input box
        inputContainer.appendChild(inputElement);
        // console.log(schoolid + "Minutestobell-" + eventstringrows[i-1]);

        var checkbox1 = document.createElement("input");
        checkbox1.type = "checkbox";
        checkbox1.id = schoolid + "Checkbox1-" + eventstringrows[i-1]; // assign a unique ID to the first checkbox
        inputContainer.appendChild(checkbox1);

        var checkbox2 = document.createElement("input");
        checkbox2.type = "checkbox";
        checkbox2.id = schoolid + "Checkbox2-" + eventstringrows[i-1]; // assign a unique ID to the second checkbox
        inputContainer.appendChild(checkbox2);

        inputCell.appendChild(inputContainer);
        // inputCell.style.paddingRight = '5px';
        row.appendChild(inputCell);
    }

    var dvTableContainer = document.getElementById("dvTableContainer");
    dvTableContainer.innerHTML = "";
    dvTableContainer.appendChild(table);

    // initialize all alarm inputs and checkboxes
    // Loop through each input and checkbox
    // eventstringrows.forEach(e => console.log(e));

    for (var i = 0; i < eventstringrows.length; i++) {
        var inputElement = document.getElementById(schoolid + "Minutestobell-" + eventstringrows[i]); // Get the input element by ID
        var checkbox1 = document.getElementById(schoolid + "Checkbox1-" + eventstringrows[i]); // Get the first checkbox by ID
        var checkbox2 = document.getElementById(schoolid + "Checkbox2-" + eventstringrows[i]); // Get the second checkbox by ID
    
        // Check if localStorage contains saved data for this input and checkbox
        if (localStorage.getItem(schoolid + "Minutestobell-" + eventstringrows[i]) !== null) {
        // If there is something other than null in localStorage
        // then Set the input value to the previously saved value using getItem
        inputElement.value = localStorage.getItem(schoolid + "Minutestobell-" + eventstringrows[i]);
            
        /* If the value retrieved from localStorage is "true", 
        then the checked property of checkbox1 is set to true, 
        effectively checking the checkbox in the UI. If the value 
        retrieved from localStorage is anything else, the 
        checkbox will remain unchecked in the UI. */

        // Set the first checkbox state to the saved state from localStorage
        checkbox1.checked = (localStorage.getItem(schoolid + "Checkbox1-" + eventstringrows[i]) === "true");
    
        // Set the second checkbox state to the saved state from localStorage
        checkbox2.checked = (localStorage.getItem(schoolid + "Checkbox2-" + eventstringrows[i]) === "true");
        }

        // Now the state of the same variables will be saved into localStorage by setItem
        // this way, all the variables and checkboxes will be saved even if null to start with
        localStorage.setItem(schoolid + "Minutestobell-" + eventstringrows[i], inputElement.value);
        localStorage.setItem(schoolid + "Checkbox1-" + eventstringrows[i], checkbox1.checked);
        localStorage.setItem(schoolid + "Checkbox2-" + eventstringrows[i], checkbox2.checked);
    }
  
   
    dvTableContainer.addEventListener("click", function(event) {
        // any new changes are immediately saved into localStorage
    if (event.target && event.target.type === "checkbox") {
        // Handle checkbox click
        // Get the checkbox ID
        var checkboxId = event.target.id;
        // Save the checkbox state to localStorage
        localStorage.setItem(checkboxId, event.target.checked);
    } else if (event.target && event.target.type === "number") {
        // Handle number input change
        // Get the input ID and value
        var inputId = event.target.id;
        var inputValue = event.target.value;
        // Save the input value to localStorage
        localStorage.setItem(inputId, inputValue);
    }
    });

    dvTableContainer.addEventListener("input", function(event) {
        // any new changes are immediately saved into localStorage
        if (event.target && event.target.type === "number") {
            // Handle number input change
            // Get the input ID and value
            var inputId = event.target.id;
            var inputValue = event.target.value;
            var inputElement = event.target;
            var minValue = parseFloat(inputElement.min);
            var maxValue = parseFloat(inputElement.max);
            
            // Ensure that the input value is within the desired range
            if (isNaN(inputValue) || inputValue < minValue) {
                inputValue = minValue;
            } else if (inputValue > maxValue) {
                inputValue = maxValue;
            }
            
            // Update the input value and save to localStorage
            inputElement.value = inputValue;
            localStorage.setItem(inputId, inputValue);
        }
    });      
}

function UpdateTableAlarm() {
    /* Inputs are 
    YearArray
    todayindex
    TodaybellArray
    nextbellindex
    Todaycount
    arrowstring
    Outputs are:
    eventstringrows to use as part of alarm checkbox id
    */
    var eventwitharrow = new Array();
    var eventstring = "";
    var eventstringrows = new Array();
    
    var arrowindex = 99;
    var parenth = 0;
    if (nextbellindex != 0 && nextbellindex != 99){
    // nextbellindex = 0 means early morning; nextbellindex = 99 after school
    //  the for loop below skips i=0 because no need for an arrows anyway
    var i = nextbellindex;  // i is at least = 1 
    while(TodaybellArray[i][5] != 1){
        parenth = 1;    // the arrow timer will be in parenthesis
        i++;        // i can at most be = Todaycount-1
    }
    arrowindex = i; // Todaybellarray[arrowindex][5] is definitely = 1
    }
    // arrowindex can be 99 here in early morning or late afternoon or evening
    
    for (i=0; i < Todaycount; ++i){
    // this for loop creates the eventstring with or without arrow, if arrowindex 99 nothing happens    
        if (TodaybellArray[i][5] == 1){
            eventstring = TodaybellArray[i][4];
            eventstringrows.push([eventstring]);    // stores original event string for alarm checkboxes
            if (i == arrowindex) {
                if (parenth == 0){
                    eventstring = eventstring + " " + " " + " <== " + arrowstring;  // only occurs once
                } else {
                    // timer will be within parenthesis to indicate this is a transition
                    eventstring = eventstring + " " + " " + " <== " + "(" + arrowstring + ")";  // only occurs once
                }
                
            }
            eventwitharrow.push([eventstring]);
        }
    }
    // Get all the cells in the third column of the table
    // this table already omitted the passing durations
    var cells = document.querySelectorAll("#dvTable td:nth-child(3)");

    // Loop through each cell and update its content from the eventwitharrow array
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var content = eventwitharrow[i][0]; // Get the content from the eventwitharrow array
        cell.textContent = content; // Update the cell content
    }
    
    // This section will check if the armed alarm will go off. 
    const alarmSound = new Audio('audiovideo/beep-beep-6151.mp3');
    const alarmSound2 = new Audio('audiovideo/beep-beep-Mod18.mp3');
    // Thus arrowindex has to be within school hours, namely 1 to less than 10
    if (arrowindex != 99){
        // Sound Effect from Pixabay
        // console.log("arrowindex = " + arrowindex);
        var alarmstringid = schoolid + "Minutestobell-" + TodaybellArray[arrowindex][4];
        var alarmminutes = localStorage.getItem(alarmstringid);
        var alarmcomposite = 60 * alarmminutes;   // converted into seconds 
        // reusing the checkbox 1 and 2 variables
        // console.log("alarmcomposite = " + alarmcomposite + " and " + "deltacomposite = " + deltacomposite);
        checkbox1 = document.getElementById(schoolid + "Checkbox1-" + TodaybellArray[arrowindex][4]); // temp name for that repeat box
        checkbox2 = document.getElementById(schoolid + "Checkbox2-" + TodaybellArray[arrowindex][4]); // temp name for that armed box
        var debugString = "status: alarm = " + alarmcomposite + " and " + "delta = " + deltacomposite + " armed = " + checkbox2.checked + " CrOS agent = " + navigator.userAgent.indexOf("CrOS");
        var debugElement = document.getElementById("debugonly");
        
        if (adminmode == 1) {
            debugElement.textContent = debugString;
        }
        
        //
        if (deltacomposite == alarmcomposite && checkbox2.checked) {
            // Attach event listener to a visible element on the page (such as a button or a link)
            // document.addEventListener('click', function() {
                // Check if the device is a Chromebook
            if (navigator.userAgent.indexOf("CrOS") !== -1) {
                // Reduce the volume of the alarm sound in sound file
                // alarmSound2.volume = 0.9; // Set volume to 50%
                alarmSound2.play();
            } else {
                // Except for CHromeOS all other Play the alarm sound at full volume
                alarmSound.play();
            }
            // trigger the buzz vibration (if supported by the device)
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]); // vibration pattern (ms on/off)
            }
            // });
            if (checkbox1.checked) {
                checkbox2.checked = true;   // the armed checkbox remains checked
            } else {
                checkbox2.checked = false;  // disarm this alarm after a single activation
            }
            // the state of checkbox2 shall be saved by setItem
            localStorage.setItem(schoolid + "Checkbox2-" + TodaybellArray[arrowindex][4], checkbox2.checked);
        }
    }
    
    /*
    // The following section uses Web Audio API
    const audioContext = new AudioContext();
    const alarmBufferPromises = {
        default: fetch('audiovideo/beep-beep-6151.mp3')
            .then(response => response.arrayBuffer())
            .then(buffer => audioContext.decodeAudioData(buffer))
            .catch(error => console.error('Error loading default audio file:', error)),
        chromebook: fetch('audiovideo/beep-beep-Mod18.mp3')
            .then(response => response.arrayBuffer())
            .then(buffer => audioContext.decodeAudioData(buffer))
            .catch(error => console.error('Error loading Chromebook audio file:', error)),
    };

    const playAlarmSound = async (type = 'default') => {
        const alarmBufferPromise = alarmBufferPromises[type];
        const alarmBuffer = await alarmBufferPromise;
        const source = audioContext.createBufferSource();
        source.buffer = alarmBuffer;
        source.connect(audioContext.destination);
        source.start(0);
    };

    // Thus arrowindex has to be within school hours, namely 1 to less than 10
    // arrowindex may not be contiguous because of passing periods
    // arrowindex = 1 means time now is before the end of the 1st period
    if (arrowindex != 99){
        // Sound Effect from Pixabay
        // console.log("arrowindex = " + arrowindex);
        var alarmstringid = schoolid + "Minutestobell-" + TodaybellArray[arrowindex][4];
        var alarmminutes = localStorage.getItem(alarmstringid);
        var alarmcomposite = 60 * alarmminutes;   // converted into seconds 
        // reusing the checkbox 1 and 2 variables
        // console.log("alarmcomposite = " + alarmcomposite + " and " + "deltacomposite = " + deltacomposite);
        checkbox1 = document.getElementById(schoolid + "Checkbox1-" + TodaybellArray[arrowindex][4]); // temp name for that repeat box
        checkbox2 = document.getElementById(schoolid + "Checkbox2-" + TodaybellArray[arrowindex][4]); // temp name for that armed box
        var debugString = "debug: alarm = " + alarmcomposite + " and " + "delta = " + deltacomposite + " armed = " + checkbox2.checked + " CrOS agent = " + navigator.userAgent.indexOf("CrOS");
        var debugElement = document.getElementById("debugonly");
        debugElement.textContent = debugString;

        if (deltacomposite == alarmcomposite && checkbox2.checked) {
            if (navigator.userAgent.indexOf("CrOS") !== -1) {
                playAlarmSound('chromebook');
            } else {
                playAlarmSound('default');
            }
            // trigger the buzz vibration (if supported by the device)
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]); // vibration pattern (ms on/off)
            }
            if (checkbox1.checked) {
                checkbox2.checked = true;   // the armed checkbox remains checked
            } else {
                checkbox2.checked = false;  // disarm this alarm after a single activation
            }
            // the state of checkbox2 shall be saved by setItem
            localStorage.setItem(schoolid + "Checkbox2-" + TodaybellArray[arrowindex][4], checkbox2.checked);
        }
    }
    */
}
