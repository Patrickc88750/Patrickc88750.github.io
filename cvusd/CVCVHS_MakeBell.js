function InitializeAllInputs(){

Schoolname_string = `Castro Valley High School
9/10/11/12th-grade bell timer`

Schoollogo_string = `./images/Trojans100.png`

Resources_string = `https://cvhs.cv.k12.ca.us/apps/bell_schedules/, CVHS all bell schedules
https://cvhs.cv.k12.ca.us/apps/pages/index.jsp?uREC_ID=1381367&type=d&pREC_ID=1563519, CVHS monthly calendar
https://drive.google.com/file/d/1u-HJrEZFCEn55S9txb-kb9CS4jPYgHtD/view, Castro Valley CVUSD annual calendar
https://cvhs.cv.k12.ca.us/, Castro Valley High School official website
`
    
DayAstring = `
8,30,Regular M/Th/F
9,27,1st period
9,33,moving to 2nd
10,30,2nd period
10,45,break
10,51,settling to 3rd
11,48,3rd period
11,54,passing to 4th
12,54,4th period
1,29,Lunch
1,35,settling to 5th
2,32,5th period
2,38,moving to 6th
3,35,6th period
`
DayBstring = `
8,30,Trojan Time - Tue Block
10,10,1st period
10,16,moving to Trojan Time
10,58,P8/9 Trojan Time
11,13,Break
11,19,settling to 3rd
12,59,3rd period
1,34,Lunch
1,40,settling to 5th
3,20,5th period
`
DayCstring = `
8,30,Trojan Time Wed Block
10,10,2nd period
10,16,moving to Trojan Time
10,58,P8/9 Trojan Time
11,13,Break
11,19,settling to 4th
12,59,4th period
1,34,Lunch
1,40,settling to 6th
3,20,6th period
`
DayDstring = `
9,34,Pre-PSAT
10,27,1st period
10,42,Break
10,48,passing to 2nd
11,41,2nd period
11,47,passing to Pre-PSAT
12,17,Pre-PSAT
12,52,Lunch
12,58,settling to 3rd
1,51,3rd period
1,57,moving to 4th
2,50,4th period
`
DayEstring = `
8,40,PSAT/NMSQT 9/10/11
9,34,12th activities at 9:34
12,2,9/10/11 Testing 12th Activities
12,37,Lunch
12,43,settling to 5th
1,36,5th period
1,51,Break
1,57,moving to 6th
2,50,6th period
`
DayFstring = `
8,30,Great Shake Out
9,20,1st period
9,26,moving to 2nd
10,16,2nd period
10,31,Break
10,37,settling to P3 Drill
11,19,P3 Drill
12,9,3rd period
12,15,moving to 4th
1,5,4th period
1,40,Lunch
1,46,settling to 5th
2,36,5th period
2,42,moving to 6th
3,32,6th period
`
DayGstring = `
8,30,Finals Day 1
10,30,P1 Final
11,5,Brunch
11,11,settling to P2
1,11,P2 Final
1,26,Break
1,32,settling to P0
3,32,P0 Final
`
DayHstring = `
8,30,Finals Day 2
10,30,P3 Final
11,5,Brunch
11,11,settling to P4
1,11,P4 Final
1,26,Break
1,32,settling to Make/up
3,32,Make Up Final
`
DayIstring = `
8,30,Finals Day 3
10,30,P5 Final
11,5,Brunch
11,11,setting to P6
1,11,P6 Final
1,26,Break
1,32,settling to Make/Up
3,32,Make Up Final
`
DayJstring = `
8,30,230 Release
9,16,1st period
9,22,moving to 2nd
10,8,2nd period
10,23,break
10,29,settling to 3rd
11,15,3rd period
11,21,passing to 4th
12,11,4th period
12,46,Lunch
12,52,settling to 5th
1,38,5th period
1,44,moving to 6th
2,30,6th period
`
DayKstring = `
8,30,SBAC Odd
10,28,1st period
10,43,Break
10,49,settling to P3
12,47,3rd period
1,22,Lunch
1,28,settling to P5
3,26,5th period
`
DayLstring = `
8,30,SBAC Even
10,28,2nd period
10,43,Break
10,49,settling to P4
12,47,4th period
1,22,Lunch
1,28,settling to P6
3,26,6th period
`
DayMstring = `
8,30,Farewell Pep Rally
9,16,1st period
9,22,moving to 2nd
10,8,2nd period
10,23,break
10,29,settling to 3rd
11,15,3rd period
11,21,passing to 4th
12,21,P4 Assembly
1,7,4th period
1,42,Lunch
1,48,settling to 5th
2,34,5th period
2,40,moving to 6th
3,26,6th period
`

DayNstring = `
8,30,Clean Locker Out
10,10,2nd period
10,16,passing to Trojan Time
10,38,Trojan Time
10,58,Locker Clean Out
11,13,Break
11,19,passing to 4th
12,59,4th period
1,34,Lunch
1,40,passing to 6th
3,20,6th period
`

DayOstring = `
8,30,Finals Day 1
10,30,P1 Final
11,5,Brunch
11,11,settling to P2
1,11,P2 Final
1,26,Break
1,32,settling to P0
3,32,P0 Final
`
DayPstring = `
8,30,Finals Day 2
10,30,P3 Final
11,5,Brunch
11,11,settling to P4
1,11,P4 Final
1,26,Break
1,32,settling to Make/up
3,32,Make Up Final
`
DayQstring = `
8,30,Finals Day 3
10,30,P5 Final
11,5,Brunch
11,11,setting to P6
1,11,P6 Final
1,26,Break
1,32,settling to Make/Up
3,32,Make Up Final
`
DayRstring = `
8,30,Last Day/Graduation
9,1,1st period
9,7,passing to 2nd
9,38,2nd period
9,44,passing to 3rd
10,15,3rd period
10,30,Lunch break
10,36,passing to 4th
11,7,4th period
11,13,passing to 5th
11,44,5th period
11,50,passing to 6th
12,21,6th period
`
DaySstring = `
8,30,Welcome Back Assembly
9,16,1st period
9,22,passing to 2nd
10,8,2nd period
10,23,Break
10,29,passing to 3rd
11,15,3rd period
11,21,passing to Assembly
12,21,P4 Assembly
1,7,P4 Class time
1,42,Lunch
1,48,passing to 5th
2,34,5th period
2,40,passing to 6th
3,26,6th period
`
DayTstring = `
8,30,Homecoming
9,1,1st period
9,7,passing to 2nd
9,38,2nd period
9,44,passing to 3rd
10,15,3rd period
10,30,Lunch break
10,36,passing to 4th
11,7,4th period
11,13,passing to 5th
11,44,5th period
11,50,passing to 6th
12,21,6th period
`

Yearstring = `
2022,8,9,TUE,S,83,,,1
2022,8,10,WED,C,67,,,2
2022,8,11,THU,A,65,,,3
2022,8,12,FRI,A,65,,,4
2022,8,13,SAT,Z,90,,,5
2022,8,14,SUN,Z,90,,,6
2022,8,15,MON,A,65,,,7
2022,8,16,TUE,B,66,,,8
2022,8,17,WED,C,67,,,9
2022,8,18,THU,A,65,,,10
2022,8,19,FRI,A,65,,,11
2022,8,20,SAT,Z,90,,,12
2022,8,21,SUN,Z,90,,,13
2022,8,22,MON,A,65,,,14
2022,8,23,TUE,B,66,,,15
2022,8,24,WED,C,67,,,16
2022,8,25,THU,A,65,,,17
2022,8,26,FRI,A,65,,,18
2022,8,27,SAT,Z,90,,,19
2022,8,28,SUN,Z,90,,,20
2022,8,29,MON,A,65,,,21
2022,8,30,TUE,B,66,,,22
2022,8,31,WED,C,67,,,23
2022,9,1,THU,A,65,,,24
2022,9,2,FRI,A,65,,,25
2022,9,3,SAT,Z,90,R,Labor Day weekend,26
2022,9,4,SUN,Z,90,,,27
2022,9,5,MON,Z,90,,,28
2022,9,6,TUE,B,66,,,29
2022,9,7,WED,C,67,,,30
2022,9,8,THU,A,65,,,31
2022,9,9,FRI,A,65,,,32
2022,9,10,SAT,Z,90,,,33
2022,9,11,SUN,Z,90,,,34
2022,9,12,MON,A,65,,,35
2022,9,13,TUE,B,66,,,36
2022,9,14,WED,C,67,,,37
2022,9,15,THU,A,65,,,38
2022,9,16,FRI,A,65,,,39
2022,9,17,SAT,Z,90,,,40
2022,9,18,SUN,Z,90,,,41
2022,9,19,MON,A,65,,,42
2022,9,20,TUE,B,66,,,43
2022,9,21,WED,C,67,,,44
2022,9,22,THU,A,65,,,45
2022,9,23,FRI,A,65,,,46
2022,9,24,SAT,Z,90,,,47
2022,9,25,SUN,Z,90,,,48
2022,9,26,MON,A,65,,,49
2022,9,27,TUE,B,66,,,50
2022,9,28,WED,C,67,,,51
2022,9,29,THU,A,65,,,52
2022,9,30,FRI,A,65,,,53
2022,10,1,SAT,Z,90,,,54
2022,10,2,SUN,Z,90,,,55
2022,10,3,MON,A,65,,,56
2022,10,4,TUE,B,66,,,57
2022,10,5,WED,C,67,,,58
2022,10,6,THU,J,74,,,59
2022,10,7,FRI,T,84,Q,end of Q1,60
2022,10,8,SAT,Z,90,,,61
2022,10,9,SUN,Z,90,,,62
2022,10,10,MON,J,74,,,63
2022,10,11,TUE,D,68,,,64
2022,10,12,WED,E,69,,,65
2022,10,13,THU,A,65,,,66
2022,10,14,FRI,A,65,,,67
2022,10,15,SAT,Z,90,R,October SD weekend,68
2022,10,16,SUN,Z,90,,,69
2022,10,17,MON,Z,90,,,70
2022,10,18,TUE,B,66,,,71
2022,10,19,WED,C,67,,,72
2022,10,20,THU,F,70,,,73
2022,10,21,FRI,A,65,,,74
2022,10,22,SAT,Z,90,,,75
2022,10,23,SUN,Z,90,,,76
2022,10,24,MON,A,65,,,77
2022,10,25,TUE,B,66,,,78
2022,10,26,WED,C,67,,,79
2022,10,27,THU,A,65,,,80
2022,10,28,FRI,A,65,,,81
2022,10,29,SAT,Z,90,,,82
2022,10,30,SUN,Z,90,,,83
2022,10,31,MON,A,65,,,84
2022,11,1,TUE,B,66,,,85
2022,11,2,WED,C,67,,,86
2022,11,3,THU,A,65,,,87
2022,11,4,FRI,A,65,,,88
2022,11,5,SAT,Z,90,,,89
2022,11,6,SUN,Z,90,,,90
2022,11,7,MON,A,65,,,91
2022,11,8,TUE,B,66,,,92
2022,11,9,WED,C,67,,,93
2022,11,10,THU,A,65,,,94
2022,11,11,FRI,Z,90,R,Veterans Day weekend,95
2022,11,12,SAT,Z,90,,,96
2022,11,13,SUN,Z,90,,,97
2022,11,14,MON,A,65,,,98
2022,11,15,TUE,B,66,,,99
2022,11,16,WED,C,67,,,100
2022,11,17,THU,A,65,,,101
2022,11,18,FRI,A,65,,,102
2022,11,19,SAT,Z,90,R,Thanksgiving Break,103
2022,11,20,SUN,Z,90,,,104
2022,11,21,MON,Z,90,,,105
2022,11,22,TUE,Z,90,,,106
2022,11,23,WED,Z,90,,,107
2022,11,24,THU,Z,90,,,108
2022,11,25,FRI,Z,90,,,109
2022,11,26,SAT,Z,90,,,110
2022,11,27,SUN,Z,90,,,111
2022,11,28,MON,A,65,,,112
2022,11,29,TUE,B,66,,,113
2022,11,30,WED,C,67,,,114
2022,12,1,THU,A,65,,,115
2022,12,2,FRI,A,65,,,116
2022,12,3,SAT,Z,90,,,117
2022,12,4,SUN,Z,90,,,118
2022,12,5,MON,A,65,,,119
2022,12,6,TUE,B,66,,,120
2022,12,7,WED,C,67,,,121
2022,12,8,THU,A,65,,,122
2022,12,9,FRI,A,65,,,123
2022,12,10,SAT,Z,90,,,124
2022,12,11,SUN,Z,90,,,125
2022,12,12,MON,A,65,,,126
2022,12,13,TUE,B,66,,,127
2022,12,14,WED,C,67,,,128
2022,12,15,THU,A,65,,,129
2022,12,16,FRI,A,65,,,130
2022,12,17,SAT,Z,90,,,131
2022,12,18,SUN,Z,90,,,132
2022,12,19,MON,A,65,,,133
2022,12,20,TUE,G,71,,,134
2022,12,21,WED,H,72,,,135
2022,12,22,THU,I,73,Q,end of Q2,136
2022,12,23,FRI,Z,90,R,Winter Break,137
2022,12,24,SAT,Z,90,,,138
2022,12,25,SUN,Z,90,,,139
2022,12,26,MON,Z,90,,,140
2022,12,27,TUE,Z,90,,,141
2022,12,28,WED,Z,90,,,142
2022,12,29,THU,Z,90,,,143
2022,12,30,FRI,Z,90,,,144
2022,12,31,SAT,Z,90,,,145
2023,1,1,SUN,Z,90,,,146
2023,1,2,MON,Z,90,,,147
2023,1,3,TUE,Z,90,,,148
2023,1,4,WED,Z,90,,,149
2023,1,5,THU,Z,90,,,150
2023,1,6,FRI,Z,90,,,151
2023,1,7,SAT,Z,90,,,152
2023,1,8,SUN,Z,90,,,153
2023,1,9,MON,Z,90,,,154
2023,1,10,TUE,B,66,,,155
2023,1,11,WED,C,67,,,156
2023,1,12,THU,A,65,,,157
2023,1,13,FRI,A,65,,,158
2023,1,14,SAT,Z,90,R,MLK Jr weekend,159
2023,1,15,SUN,Z,90,,,160
2023,1,16,MON,Z,90,,,161
2023,1,17,TUE,B,66,,,162
2023,1,18,WED,C,67,,,163
2023,1,19,THU,A,65,,,164
2023,1,20,FRI,A,65,,,165
2023,1,21,SAT,Z,90,,,166
2023,1,22,SUN,Z,90,,,167
2023,1,23,MON,A,65,,,168
2023,1,24,TUE,B,66,,,169
2023,1,25,WED,C,67,,,170
2023,1,26,THU,A,65,,,171
2023,1,27,FRI,A,65,,,172
2023,1,28,SAT,Z,90,,,173
2023,1,29,SUN,Z,90,,,174
2023,1,30,MON,A,65,,,175
2023,1,31,TUE,B,66,,,176
2023,2,1,WED,C,67,,,177
2023,2,2,THU,A,65,,,178
2023,2,3,FRI,A,65,,,179
2023,2,4,SAT,Z,90,,,180
2023,2,5,SUN,Z,90,,,181
2023,2,6,MON,A,65,,,182
2023,2,7,TUE,B,66,,,183
2023,2,8,WED,C,67,,,184
2023,2,9,THU,A,65,,,185
2023,2,10,FRI,A,65,,,186
2023,2,11,SAT,Z,90,,,187
2023,2,12,SUN,Z,90,,,188
2023,2,13,MON,A,65,,,189
2023,2,14,TUE,B,66,,,190
2023,2,15,WED,C,67,,,191
2023,2,16,THU,A,65,,,192
2023,2,17,FRI,A,65,,,193
2023,2,18,SAT,Z,90,R,Presidents Day Break,194
2023,2,19,SUN,Z,90,,,195
2023,2,20,MON,Z,90,,,196
2023,2,21,TUE,Z,90,,,197
2023,2,22,WED,Z,90,,,198
2023,2,23,THU,Z,90,,,199
2023,2,24,FRI,Z,90,,,200
2023,2,25,SAT,Z,90,,,201
2023,2,26,SUN,Z,90,,,202
2023,2,27,MON,A,65,,,203
2023,2,28,TUE,B,66,,,204
2023,3,1,WED,C,67,,,205
2023,3,2,THU,A,65,,,206
2023,3,3,FRI,A,65,,,207
2023,3,4,SAT,Z,90,,,208
2023,3,5,SUN,Z,90,,,209
2023,3,6,MON,A,65,,,210
2023,3,7,TUE,B,66,,,211
2023,3,8,WED,C,67,,,212
2023,3,9,THU,A,65,,,213
2023,3,10,FRI,Z,90,R,March SD weekend,214
2023,3,11,SAT,Z,90,,,215
2023,3,12,SUN,Z,90,,,216
2023,3,13,MON,A,65,,,217
2023,3,14,TUE,B,66,,,218
2023,3,15,WED,C,67,,,219
2023,3,16,THU,J,74,,,220
2023,3,17,FRI,J,74,Q,end of Q3,221
2023,3,18,SAT,Z,90,,,222
2023,3,19,SUN,Z,90,,,223
2023,3,20,MON,A,65,,,224
2023,3,21,TUE,B,66,,,225
2023,3,22,WED,C,67,,,226
2023,3,23,THU,A,65,,,227
2023,3,24,FRI,A,65,,,228
2023,3,25,SAT,Z,90,,,229
2023,3,26,SUN,Z,90,,,230
2023,3,27,MON,A,65,,,231
2023,3,28,TUE,B,66,,,232
2023,3,29,WED,C,67,,,233
2023,3,30,THU,A,65,,,234
2023,3,31,FRI,Z,90,R,Spring Break,235
2023,4,1,SAT,Z,90,,,236
2023,4,2,SUN,Z,90,,,237
2023,4,3,MON,Z,90,,,238
2023,4,4,TUE,Z,90,,,239
2023,4,5,WED,Z,90,,,240
2023,4,6,THU,Z,90,,,241
2023,4,7,FRI,Z,90,,,242
2023,4,8,SAT,Z,90,,,243
2023,4,9,SUN,Z,90,,,244
2023,4,10,MON,A,65,,,245
2023,4,11,TUE,B,66,,,246
2023,4,12,WED,C,67,,,247
2023,4,13,THU,A,65,,,248
2023,4,14,FRI,A,65,,,249
2023,4,15,SAT,Z,90,,,250
2023,4,16,SUN,Z,90,,,251
2023,4,17,MON,K,75,,,252
2023,4,18,TUE,L,76,,,253
2023,4,19,WED,K,75,,,254
2023,4,20,THU,L,76,,,255
2023,4,21,FRI,K,75,,,256
2023,4,22,SAT,Z,90,,,257
2023,4,23,SUN,Z,90,,,258
2023,4,24,MON,L,76,,,259
2023,4,25,TUE,K,75,,,260
2023,4,26,WED,L,76,,,261
2023,4,27,THU,A,65,,,262
2023,4,28,FRI,A,65,,,263
2023,4,29,SAT,Z,90,,,264
2023,4,30,SUN,Z,90,,,265
2023,5,1,MON,A,65,,,266
2023,5,2,TUE,B,66,,,267
2023,5,3,WED,C,67,,,268
2023,5,4,THU,A,65,,,269
2023,5,5,FRI,A,65,,,270
2023,5,6,SAT,Z,90,,,271
2023,5,7,SUN,Z,90,,,272
2023,5,8,MON,A,65,,,273
2023,5,9,TUE,B,66,,,274
2023,5,10,WED,C,67,,,275
2023,5,11,THU,A,65,,,276
2023,5,12,FRI,A,65,,,277
2023,5,13,SAT,Z,90,,,278
2023,5,14,SUN,Z,90,,,279
2023,5,15,MON,A,65,,,280
2023,5,16,TUE,B,66,,,281
2023,5,17,WED,N,78,,,282
2023,5,18,THU,A,65,,,283
2023,5,19,FRI,A,65,,,284
2023,5,20,SAT,Z,90,,,285
2023,5,21,SUN,Z,90,,,286
2023,5,22,MON,M,77,,,287
2023,5,23,TUE,B,66,,,288
2023,5,24,WED,C,67,,,289
2023,5,25,THU,A,65,,,290
2023,5,26,FRI,A,65,,,291
2023,5,27,SAT,Z,90,R,Memorial Day,292
2023,5,28,SUN,Z,90,,,293
2023,5,29,MON,Z,90,,,294
2023,5,30,TUE,O,79,,,295
2023,5,31,WED,P,80,,,296
2023,6,1,THU,Q,81,,,297
2023,6,2,FRI,R,82,Q,end of Q4,298
2023,6,3,SAT,Z,90,R,Summer Break,299
2023,6,4,SUN,Z,90,,,300
2023,6,5,MON,Z,90,,,301
2023,6,6,TUE,Z,90,,,302
2023,6,7,WED,Z,90,,,303
2023,6,8,THU,Z,90,,,304
2023,6,9,FRI,Z,90,,,305
2023,6,10,SAT,Z,90,,,306
2023,6,11,SUN,Z,90,,,307
2023,6,12,MON,Z,90,,,308
2023,6,13,TUE,Z,90,,,309
2023,6,14,WED,Z,90,,,310
2023,6,15,THU,Z,90,,,311
2023,6,16,FRI,Z,90,,,312
2023,6,17,SAT,Z,90,,,313
2023,6,18,SUN,Z,90,,,314
2023,6,19,MON,Z,90,,,315
2023,6,20,TUE,Z,90,,,316
2023,6,21,WED,Z,90,,,317
2023,6,22,THU,Z,90,,,318
2023,6,23,FRI,Z,90,,,319
2023,6,24,SAT,Z,90,,,320
2023,6,25,SUN,Z,90,,,321
2023,6,26,MON,Z,90,,,322
2023,6,27,TUE,Z,90,,,323
2023,6,28,WED,Z,90,,,324
2023,6,29,THU,Z,90,,,325
2023,6,30,FRI,Z,90,,,326
2023,7,1,SAT,Z,90,,,327
2023,7,2,SUN,Z,90,,,328
2023,7,3,MON,Z,90,,,329
2023,7,4,TUE,Z,90,,,330
2023,7,5,WED,Z,90,,,331
2023,7,6,THU,Z,90,,,332
2023,7,7,FRI,Z,90,,,333
2023,7,8,SAT,Z,90,,,334
2023,7,9,SUN,Z,90,,,335
2023,7,10,MON,Z,90,,,336
2023,7,11,TUE,Z,90,,,337
2023,7,12,WED,Z,90,,,338
2023,7,13,THU,Z,90,,,339
2023,7,14,FRI,Z,90,,,340
2023,7,15,SAT,Z,90,,,341
2023,7,16,SUN,Z,90,,,342
2023,7,17,MON,Z,90,,,343
2023,7,18,TUE,Z,90,,,344
2023,7,19,WED,Z,90,,,345
2023,7,20,THU,Z,90,,,346
2023,7,21,FRI,Z,90,,,347
2023,7,22,SAT,Z,90,,,348
2023,7,23,SUN,Z,90,,,349
2023,7,24,MON,Z,90,,,350
2023,7,25,TUE,Z,90,,,351
2023,7,26,WED,Z,90,,,352
2023,7,27,THU,Z,90,,,353
2023,7,28,FRI,Z,90,,,354
2023,7,29,SAT,Z,90,,,355
2023,7,30,SUN,Z,90,,,356
2023,7,31,MON,Z,90,,,357
2023,8,1,TUE,Z,90,,,358
2023,8,2,WED,Z,90,,,359
2023,8,3,THU,Z,90,,,360
2023,8,4,FRI,Z,90,,,361
2023,8,5,SAT,Z,90,,,362
2023,8,6,SUN,Z,90,,,363
2023,8,7,MON,Z,90,,,364
2023,8,8,TUE,B,66,,,365
`

}