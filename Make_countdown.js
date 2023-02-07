function YeartoArrayFunction() {    // output is YearArray, a large matrix
    let all = Yearstring.trim();
    let lines = all.split("\n");
    yearcount = lines.length;   // number of days, # of rows
    let Daysbacktoschool = [];  // number of days before the next school day
    let Yearmonthday = []; 
    let Lastdayb4break = [];
    let Firstdayback = [];     // initialize comparison reference

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
                break;
            case "SUN":
                whichweekday = "Sunday";
                weekdaycount = 0;
            }
        switch(tokens[1]){
            case "1":
                longmonth = "January";
                break;
            case "2":
                longmonth = "February";
                break;
            case "3":
                longmonth = "March";
                break;
            case "4":
                longmonth = "April";
                break;
            case "5":
                longmonth = "May";
                break;
            case "6":
                longmonth = "June";
                break;
            case "7":
                longmonth = "July";
                break;
            case "8":
                longmonth = "August";
                break;
            case "9":
                longmonth = "September";
                break;
            case "10":
                longmonth = "October";
                break;
            case "11":
                longmonth = "November";
                break;
            case "12":
                longmonth = "December";
            }
        YearArray.push([parseInt(tokens[8]), Yearmonthday[i], whichweekday, tokens[4], parseInt(tokens[5]), tokens[6], tokens[7], Daysbacktoschool[i], Lastdayb4break[i], Firstdayback[i], tokens[0], tokens[1], tokens[2], weekdaycount, longmonth]);
   }   // an entire YearArray ~365 rows is now formed
    // YearArray column definition
    // 0: index, 1 to approx. 365 tokens[8] (number)
    // 1: Yearmonthday composite date value (number)
    // 2: day of week SUN MON ... SAT tokens[3] (string)
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
    // 13: weekdaycount (number)
    // 14: longmonth (string)
    
    // this section initialize column indexed 7, 8, and 9
    YearArray[0][7] = 1;    // the next day is a school day
    YearArray[yearcount-1][8] = 0;    // the next day is not a weekend/break
    YearArray[0][9] = 1;    // today is a first day back to school after a break
    for (let i=1; i < yearcount; ++i){      // this loop looks for first school days after a break
        if (YearArray[i-1][4] == 90 && YearArray[i][4] != 90){
            YearArray[i][9] = 1;
        }
        if (YearArray[i-1][4] != 90 && YearArray[i][4] == 90){
            YearArray[i-1][8] = 1; 
        }
    }   

    YearArray[yearcount-1][7] = 1;       // because there are four days first week of school August 2023
    for (let i=1; i < (yearcount - 1); ++i){    // the loop skips the first day
        if (YearArray[i-1][7] != 1){    // can use a count down scheme
            YearArray[i][7] = YearArray[i-1][7] - 1;    // the difference will not be zero
        } else {    // else will count how many Z's before a school day occurs again
            let j = 1;
            while (YearArray[i+j][4] === 90){
                j++;
            }
            YearArray[i][7] = j;    // j is now 1 plus the number of break days
        }                           // j means back to school in how many days including today
    }
    
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
        var titlestring = "Zzz...";  // clear the title
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
            var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + NextdaybellArray[0][1] + " !";
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
                // count and display below how many days till back to school  
                var PurposeString = "Back to School in " + YearArray[todayindex][7] + " days";
                var OutputElement = document.getElementById("whatsitfor");
                OutputElement.textContent = PurposeString;
                var titlestring = "-" + YearArray[todayindex][7] + " days";
                var  outputElement = document.getElementById("ctitle");
                outputElement.textContent = titlestring;
            //
            } else {
            // Need to find out when to come back to school tomorrow
            // build Nextdaybellarray
            Onedaystring = Nextdaystring;
            DaytoArray();
            NextdaybellArray = BellArray;
            Nextdaycount = Onedaycount;
            // event message after school and evenings
            var PurposeString = "See you tomorrow at " + NextdaybellArray[0][0] + ":" + NextdaybellArray[0][1] + " !";
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
                Generateblank();
                }
            } else {
                // else today is a school day
                // if(todayindex != tindex_lastsecond || nextbell_lastsec != nextbellindex){
                    GenerateTable();
                // }
            }
    } // else for dayfound != 0
}

function DaytoArray(){
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
        if ((BellArray[i+1][3] - BellArray[i][3]) > 7) { // delta > 7 minutes 
            BellArray[i+1][5] = 1;
        }
    }
}

function Findnextbell(Secsumnow) {
    nextfound = 0;
    bellindex = 0;
    for (let i = 0; i < Onedaycount; ++i){
        delta = Secsumnow - BellArray[i][3] * 60;   // convert minutes to seconds
        // delta greater than 0 means the scheduled time has passed
        // for example now 11:00:00 then should still display event message found on same line
        // now is 11:00:01 then should display the next event message
        if (delta <= 0 && nextfound == 0) {     // registers the first that happens
            nextfound = 1;
            bellindex = i;
            deltacomposite = -1 * delta;    // Timer will display a positive delta
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
    minutecomposite = Math.floor(deltacomposite/60);
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
        titlestring = timeString;
    } else {
        delhr = '' + delhr;
        if (delmin < 10){
            delmin = '0' + delmin;  // delmin converted to a string and padded
        }
        timeString = delhr + ":" + delmin + ":" + delsec;
        titlestring = timeString;
    }
    arrowstring = timeString;   // print inside the table
    var outputElement = document.getElementById("timePar");
    outputElement.textContent = timeString;

    var PurposeString = BellArray[nextbellindex][4];
    var OutputElement = document.getElementById("whatsitfor");
    OutputElement.textContent = PurposeString;

    var  outputElement = document.getElementById("ctitle");
    outputElement.textContent = titlestring;

    // document.getElementById("timePar").style.color = 'black';
    // document.getElementById("ctitle").style.color = 'black';
}

function GenerateTable() {
    var todayrows = new Array();
    var starthr = 0;
    var startmin = 0;
    var endhr = 0;
    var endmin = 0;
    var timespanstring = 0;

    var formattedDate =YearArray[todayindex][2]  + " " + YearArray[todayindex][11] + "-" + YearArray[todayindex][12] + "-" + YearArray[todayindex][10];  
    
    todayrows.push([formattedDate, "minutes", TodaybellArray[0][4] + " Schedule"]);
    
    var arrowindex = 99;
    var parenth = 0;
    if (nextbellindex != 0 && nextbellindex != 99){
    //  the for loop below skips i=0 because no need for an arrows anyway
    var i = nextbellindex;  // i is at least = 1 
    while(TodaybellArray[i][5] != 1){
        parenth = 1;    // the arrow timer will be in parenthesis
        i++;        // i can at most be = Todaycount-1
    }
    arrowindex = i; // Todaybellarray[arrowindex][5] is definitely = 1
    }
    
    
    for (i=0; i < Todaycount; ++i){
        
        if (TodaybellArray[i][5] == 1){
            starthr = TodaybellArray[i-1][0];
            startmin = TodaybellArray[i-1][1];
            endhr = TodaybellArray[i][0];
            endmin = TodaybellArray[i][1];
            var deltaminute = endhr * 60 + endmin - starthr * 60 - startmin;
            if (starthr > 12){starthr = starthr - 12;}
            if (startmin < 10){startmin = "0" + startmin;}
            if (endhr > 12){endhr = endhr - 12;}
            if (endmin < 10){endmin = "0" + endmin;}

            timespanstring = starthr + ":" + startmin + " - " + endhr + ":" + endmin;
            eventstring = TodaybellArray[i][4];
            if (i == arrowindex) {
                if (parenth == 0){
                    eventstring = eventstring + " " + " " + " <== " + arrowstring;  // only occurs once
                } else {
                    // timer will be within parenthesis to indicate this is a transition
                    eventstring = eventstring + " " + " " + " <== " + "(" + arrowstring + ")";  // only occurs once
                }
                
            }
            todayrows.push([timespanstring, deltaminute, eventstring]);
        }
    }
    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function Generateblank() {  // generate a blank schedule if not a school day
    var todayrows = new Array();
    
    var formattedDate =YearArray[todayindex][2]  + " " + YearArray[todayindex][11] + "-" + YearArray[todayindex][12] + "-" + YearArray[todayindex][10];  
    todayrows.push([formattedDate, "No School"]);
    
    var table = document.createElement("TABLE");
    table.border = "1";

    var columnCount = todayrows[0].length;

    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = todayrows[0][i];
        row.appendChild(headerCell);
    }    

    for (var i = 1; i < todayrows.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = todayrows[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}

function createcurrentDate(){
    var currentDate = new Date();
    var rawmillisecond = currentDate.getTime();
    rawmillisecond = rawmillisecond +  offsetmillisec;
    currentDate = new Date(rawmillisecond);
    return currentDate;
}
