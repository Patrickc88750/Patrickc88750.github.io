function InitializeAllInputs(){

Schoolname_string = `Canyon Middle School
6th-grade bell timer`

Schoollogo_string = `./images/Condor100.png`

Resources_string = `https://canyon.cv.k12.ca.us/apps/pages/index.jsp?uREC_ID=1381543&type=d&pREC_ID=2386364, Canyon daily bell schedule
https://canyon.cv.k12.ca.us/apps/pages/index.jsp?uREC_ID=1381543&type=d&pREC_ID=1575508, Canyon monthly calendar
./images/Canyon Minimum Day Block schedule 2022-23.jpg, Canyon Minimum Day Block schedule
https://drive.google.com/file/d/17VnyIha6iousmZ3NYTrThTWxJuLV7lGc/view, CVUSD 2023-24 annual calendar
https://canyon.cv.k12.ca.us/, Canyon Middle School official website
`
    
DayAstring = `
8,45,Regular M/F day
9,50,Adv. 1st period
9,55,moving to 2nd
10,45,2nd period
10,55,nutrition
11,0,settling to 3rd
11,50,3rd period
12,25,lunch
12,30,settling to 4th
1,20,4th period
1,25,moving to 5th
2,15,5th period
2,20,moving to 6th
3,10,6th period
`
DayBstring = `
8,45,Condor Time day
9,35,1st period
9,40,moving to 2nd
10,25,2nd period
10,35,nutrition
10,40,settling to 3rd
11,25,3rd period
11,30,moving to Condor Time
12,5,Condor Time
12,40,Lunch
12,45,settling to 4th
1,30,4th period
1,35,moving to 5th
2,20,5th period
2,25,moving to 6th
3,10,6th period
`
DayCstring = `
8,45,(Wed) Early Release day
9,40,Adv. 1st period
9,45,moving to 2nd
10,25,2nd period
10,35,nutrition
10,40,settling to 3rd
11,20,3rd period
11,55,Lunch
12,0,settling to 4th
12,40,4th period
12,45,moving to 5th
1,25,5th period
1,30,moving to 6th
2,10,6th period
`
DayDstring = `
8,45,Minimum day
10,5,Adv. + Period 1/2
10,25,nutrition
10,30,passing to P3/4
11,35,Period 3/4
11,40,passing to P5/6
12,45,Period 5/6
`
Yearstring = `
2023,8,7,MON,Z,90,,,1
2023,8,8,TUE,Z,90,,,2
2023,8,9,WED,D,68,,,3
2023,8,10,THU,B,66,,,4
2023,8,11,FRI,A,65,,,5
2023,8,12,SAT,Z,90,,,6
2023,8,13,SUN,Z,90,,,7
2023,8,14,MON,A,65,,,8
2023,8,15,TUE,B,66,,,9
2023,8,16,WED,C,67,,,10
2023,8,17,THU,B,66,,,11
2023,8,18,FRI,A,65,,,12
2023,8,19,SAT,Z,90,,,13
2023,8,20,SUN,Z,90,,,14
2023,8,21,MON,A,65,,,15
2023,8,22,TUE,B,66,,,16
2023,8,23,WED,C,67,,,17
2023,8,24,THU,B,66,,,18
2023,8,25,FRI,A,65,,,19
2023,8,26,SAT,Z,90,,,20
2023,8,27,SUN,Z,90,,,21
2023,8,28,MON,A,65,,,22
2023,8,29,TUE,B,66,,,23
2023,8,30,WED,C,67,,,24
2023,8,31,THU,B,66,,,25
2023,9,1,FRI,A,65,,,26
2023,9,2,SAT,Z,90,R,Labor Day weekend,27
2023,9,3,SUN,Z,90,,,28
2023,9,4,MON,Z,90,,,29
2023,9,5,TUE,B,66,,,30
2023,9,6,WED,C,67,,,31
2023,9,7,THU,B,66,,,32
2023,9,8,FRI,A,65,,,33
2023,9,9,SAT,Z,90,,,34
2023,9,10,SUN,Z,90,,,35
2023,9,11,MON,A,65,,,36
2023,9,12,TUE,B,66,,,37
2023,9,13,WED,C,67,,,38
2023,9,14,THU,B,66,,,39
2023,9,15,FRI,A,65,,,40
2023,9,16,SAT,Z,90,,,41
2023,9,17,SUN,Z,90,,,42
2023,9,18,MON,A,65,,,43
2023,9,19,TUE,B,66,,,44
2023,9,20,WED,C,67,,,45
2023,9,21,THU,B,66,,,46
2023,9,22,FRI,A,65,,,47
2023,9,23,SAT,Z,90,,,48
2023,9,24,SUN,Z,90,,,49
2023,9,25,MON,A,65,,,50
2023,9,26,TUE,B,66,,,51
2023,9,27,WED,C,67,,,52
2023,9,28,THU,B,66,,,53
2023,9,29,FRI,A,65,,,54
2023,9,30,SAT,Z,90,,,55
2023,10,1,SUN,Z,90,,,56
2023,10,2,MON,A,65,,,57
2023,10,3,TUE,B,66,,,58
2023,10,4,WED,C,67,,,59
2023,10,5,THU,B,66,,,60
2023,10,6,FRI,A,65,,,61
2023,10,7,SAT,Z,90,,,62
2023,10,8,SUN,Z,90,,,63
2023,10,9,MON,A,65,,,64
2023,10,10,TUE,B,66,,,65
2023,10,11,WED,C,67,,,66
2023,10,12,THU,C,67,Q,End of Q1,67
2023,10,13,FRI,Z,90,R,Fall Non-school Days,68
2023,10,14,SAT,Z,90,,,69
2023,10,15,SUN,Z,90,,,70
2023,10,16,MON,Z,90,,,71
2023,10,17,TUE,B,66,,,72
2023,10,18,WED,C,67,,,73
2023,10,19,THU,B,66,,,74
2023,10,20,FRI,A,65,,,75
2023,10,21,SAT,Z,90,,,76
2023,10,22,SUN,Z,90,,,77
2023,10,23,MON,A,65,,,78
2023,10,24,TUE,C,67,,,79
2023,10,25,WED,C,67,,,80
2023,10,26,THU,B,66,,,81
2023,10,27,FRI,A,65,,,82
2023,10,28,SAT,Z,90,,,83
2023,10,29,SUN,Z,90,,,84
2023,10,30,MON,A,65,,,85
2023,10,31,TUE,B,66,,,86
2023,11,1,WED,Z,90,,,87
2023,11,2,THU,B,66,,,88
2023,11,3,FRI,A,65,,,89
2023,11,4,SAT,Z,90,,,90
2023,11,5,SUN,Z,90,,,91
2023,11,6,MON,A,65,,,92
2023,11,7,TUE,B,66,,,93
2023,11,8,WED,C,67,,,94
2023,11,9,THU,B,66,,,95
2023,11,10,FRI,Z,90,R,Veterans Day weekend,96
2023,11,11,SAT,Z,90,,,97
2023,11,12,SUN,Z,90,,,98
2023,11,13,MON,A,65,,,99
2023,11,14,TUE,B,66,,,100
2023,11,15,WED,C,67,,,101
2023,11,16,THU,B,66,,,102
2023,11,17,FRI,D,68,,,103
2023,11,18,SAT,Z,90,R,Thanksgiving Break,104
2023,11,19,SUN,Z,90,,,105
2023,11,20,MON,Z,90,,,106
2023,11,21,TUE,Z,90,,,107
2023,11,22,WED,Z,90,,,108
2023,11,23,THU,Z,90,,,109
2023,11,24,FRI,Z,90,,,110
2023,11,25,SAT,Z,90,,,111
2023,11,26,SUN,Z,90,,,112
2023,11,27,MON,A,65,,,113
2023,11,28,TUE,B,66,,,114
2023,11,29,WED,C,67,,,115
2023,11,30,THU,B,66,,,116
2023,12,1,FRI,A,65,,,117
2023,12,2,SAT,Z,90,,,118
2023,12,3,SUN,Z,90,,,119
2023,12,4,MON,A,65,,,120
2023,12,5,TUE,B,66,,,121
2023,12,6,WED,C,67,,,122
2023,12,7,THU,B,66,,,123
2023,12,8,FRI,A,65,,,124
2023,12,9,SAT,Z,90,,,125
2023,12,10,SUN,Z,90,,,126
2023,12,11,MON,A,65,,,127
2023,12,12,TUE,B,66,,,128
2023,12,13,WED,C,67,,,129
2023,12,14,THU,B,66,,,130
2023,12,15,FRI,A,65,,,131
2023,12,16,SAT,Z,90,,,132
2023,12,17,SUN,Z,90,,,133
2023,12,18,MON,A,65,,,134
2023,12,19,TUE,B,66,,,135
2023,12,20,WED,D,68,,,136
2023,12,21,THU,D,68,,,137
2023,12,22,FRI,D,68,Q,End of Q2,138
2023,12,23,SAT,Z,90,R,Winter Break,139
2023,12,24,SUN,Z,90,,,140
2023,12,25,MON,Z,90,,,141
2023,12,26,TUE,Z,90,,,142
2023,12,27,WED,Z,90,,,143
2023,12,28,THU,Z,90,,,144
2023,12,29,FRI,Z,90,,,145
2023,12,30,SAT,Z,90,,,146
2023,12,31,SUN,Z,90,,,147
2024,1,1,MON,Z,90,,,148
2024,1,2,TUE,Z,90,,,149
2024,1,3,WED,Z,90,,,150
2024,1,4,THU,Z,90,,,151
2024,1,5,FRI,Z,90,,,152
2024,1,6,SAT,Z,90,,,153
2024,1,7,SUN,Z,90,,,154
2024,1,8,MON,Z,90,,,155
2024,1,9,TUE,B,66,,,156
2024,1,10,WED,C,67,,,157
2024,1,11,THU,B,66,,,158
2024,1,12,FRI,A,65,,,159
2024,1,13,SAT,Z,90,R,MLK Jr. Birthday,160
2024,1,14,SUN,Z,90,,,161
2024,1,15,MON,Z,90,,,162
2024,1,16,TUE,B,66,,,163
2024,1,17,WED,C,67,,,164
2024,1,18,THU,B,66,,,165
2024,1,19,FRI,A,65,,,166
2024,1,20,SAT,Z,90,,,167
2024,1,21,SUN,Z,90,,,168
2024,1,22,MON,A,65,,,169
2024,1,23,TUE,B,66,,,170
2024,1,24,WED,C,67,,,171
2024,1,25,THU,B,66,,,172
2024,1,26,FRI,A,65,,,173
2024,1,27,SAT,Z,90,,,174
2024,1,28,SUN,Z,90,,,175
2024,1,29,MON,A,65,,,176
2024,1,30,TUE,B,66,,,177
2024,1,31,WED,C,67,,,178
2024,2,1,THU,B,66,,,179
2024,2,2,FRI,A,65,,,180
2024,2,3,SAT,Z,90,,,181
2024,2,4,SUN,Z,90,,,182
2024,2,5,MON,A,65,,,183
2024,2,6,TUE,B,66,,,184
2024,2,7,WED,C,67,,,185
2024,2,8,THU,B,66,,,186
2024,2,9,FRI,A,65,,,187
2024,2,10,SAT,Z,90,,,188
2024,2,11,SUN,Z,90,,,189
2024,2,12,MON,A,65,,,190
2024,2,13,TUE,B,66,,,191
2024,2,14,WED,C,67,,,192
2024,2,15,THU,B,66,,,193
2024,2,16,FRI,A,65,,,194
2024,2,17,SAT,Z,90,R,President's Day Break,195
2024,2,18,SUN,Z,90,,,196
2024,2,19,MON,Z,90,,,197
2024,2,20,TUE,Z,90,,,198
2024,2,21,WED,Z,90,,,199
2024,2,22,THU,Z,90,,,200
2024,2,23,FRI,Z,90,,,201
2024,2,24,SAT,Z,90,,,202
2024,2,25,SUN,Z,90,,,203
2024,2,26,MON,A,65,,,204
2024,2,27,TUE,B,66,,,205
2024,2,28,WED,C,67,,,206
2024,2,29,THU,B,66,,,207
2024,3,1,FRI,A,65,,,208
2024,3,2,SAT,Z,90,,,209
2024,3,3,SUN,Z,90,,,210
2024,3,4,MON,A,65,,,211
2024,3,5,TUE,B,66,,,212
2024,3,6,WED,C,67,,,213
2024,3,7,THU,B,66,,,214
2024,3,8,FRI,A,65,,,215
2024,3,9,SAT,Z,90,,,216
2024,3,10,SUN,Z,90,,,217
2024,3,11,MON,A,65,,,218
2024,3,12,TUE,B,66,,,219
2024,3,13,WED,C,67,,,220
2024,3,14,THU,B,66,,,221
2024,3,15,FRI,A,65,Q,End of Q3,222
2024,3,16,SAT,Z,90,,,223
2024,3,17,SUN,Z,90,,,224
2024,3,18,MON,A,65,,,225
2024,3,19,TUE,B,66,,,226
2024,3,20,WED,C,67,,,227
2024,3,21,THU,B,66,,,228
2024,3,22,FRI,A,65,,,229
2024,3,23,SAT,Z,90,,,230
2024,3,24,SUN,Z,90,,,231
2024,3,25,MON,A,65,,,232
2024,3,26,TUE,C,67,,,233
2024,3,27,WED,C,67,,,234
2024,3,28,THU,B,66,,,235
2024,3,29,FRI,D,68,,,236
2024,3,30,SAT,Z,90,R,Spring Break,237
2024,3,31,SUN,Z,90,,,238
2024,4,1,MON,Z,90,,,239
2024,4,2,TUE,Z,90,,,240
2024,4,3,WED,Z,90,,,241
2024,4,4,THU,Z,90,,,242
2024,4,5,FRI,Z,90,,,243
2024,4,6,SAT,Z,90,,,244
2024,4,7,SUN,Z,90,,,245
2024,4,8,MON,A,65,,,246
2024,4,9,TUE,B,66,,,247
2024,4,10,WED,C,67,,,248
2024,4,11,THU,B,66,,,249
2024,4,12,FRI,A,65,,,250
2024,4,13,SAT,Z,90,,,251
2024,4,14,SUN,Z,90,,,252
2024,4,15,MON,A,65,,,253
2024,4,16,TUE,B,66,,,254
2024,4,17,WED,C,67,,,255
2024,4,18,THU,B,66,,,256
2024,4,19,FRI,A,65,,,257
2024,4,20,SAT,Z,90,,,258
2024,4,21,SUN,Z,90,,,259
2024,4,22,MON,A,65,,,260
2024,4,23,TUE,B,66,,,261
2024,4,24,WED,C,67,,,262
2024,4,25,THU,B,66,,,263
2024,4,26,FRI,A,65,,,264
2024,4,27,SAT,Z,90,,,265
2024,4,28,SUN,Z,90,,,266
2024,4,29,MON,A,65,,,267
2024,4,30,TUE,B,66,,,268
2024,5,1,WED,C,67,,,269
2024,5,2,THU,B,66,,,270
2024,5,3,FRI,A,65,,,271
2024,5,4,SAT,Z,90,,,272
2024,5,5,SUN,Z,90,,,273
2024,5,6,MON,A,65,,,274
2024,5,7,TUE,B,66,,,275
2024,5,8,WED,C,67,,,276
2024,5,9,THU,B,66,,,277
2024,5,10,FRI,A,65,,,278
2024,5,11,SAT,Z,90,,,279
2024,5,12,SUN,Z,90,,,280
2024,5,13,MON,A,65,,,281
2024,5,14,TUE,B,66,,,282
2024,5,15,WED,C,67,,,283
2024,5,16,THU,B,66,,,284
2024,5,17,FRI,A,65,,,285
2024,5,18,SAT,Z,90,,,286
2024,5,19,SUN,Z,90,,,287
2024,5,20,MON,A,65,,,288
2024,5,21,TUE,B,66,,,289
2024,5,22,WED,C,67,,,290
2024,5,23,THU,B,66,,,291
2024,5,24,FRI,A,65,,,292
2024,5,25,SAT,Z,90,R,Memorial Day,293
2024,5,26,SUN,Z,90,,,294
2024,5,27,MON,Z,90,,,295
2024,5,28,TUE,B,66,,,296
2024,5,29,WED,D,68,,,297
2024,5,30,THU,D,68,,,298
2024,5,31,FRI,D,68,Q,End of Q4,299
2024,6,1,SAT,Z,90,R,Summer Break,300
2024,6,2,SUN,Z,90,,,301
2024,6,3,MON,Z,90,,,302
2024,6,4,TUE,Z,90,,,303
2024,6,5,WED,Z,90,,,304
2024,6,6,THU,Z,90,,,305
2024,6,7,FRI,Z,90,,,306
2024,6,8,SAT,Z,90,,,307
2024,6,9,SUN,Z,90,,,308
2024,6,10,MON,Z,90,,,309
2024,6,11,TUE,Z,90,,,310
2024,6,12,WED,Z,90,,,311
2024,6,13,THU,Z,90,,,312
2024,6,14,FRI,Z,90,,,313
2024,6,15,SAT,Z,90,,,314
2024,6,16,SUN,Z,90,,,315
2024,6,17,MON,Z,90,,,316
2024,6,18,TUE,Z,90,,,317
2024,6,19,WED,Z,90,,,318
2024,6,20,THU,Z,90,,,319
2024,6,21,FRI,Z,90,,,320
2024,6,22,SAT,Z,90,,,321
2024,6,23,SUN,Z,90,,,322
2024,6,24,MON,Z,90,,,323
2024,6,25,TUE,Z,90,,,324
2024,6,26,WED,Z,90,,,325
2024,6,27,THU,Z,90,,,326
2024,6,28,FRI,Z,90,,,327
2024,6,29,SAT,Z,90,,,328
2024,6,30,SUN,Z,90,,,329
2024,7,1,MON,Z,90,,,330
2024,7,2,TUE,Z,90,,,331
2024,7,3,WED,Z,90,,,332
2024,7,4,THU,Z,90,,,333
2024,7,5,FRI,Z,90,,,334
2024,7,6,SAT,Z,90,,,335
2024,7,7,SUN,Z,90,,,336
2024,7,8,MON,Z,90,,,337
2024,7,9,TUE,Z,90,,,338
2024,7,10,WED,Z,90,,,339
2024,7,11,THU,Z,90,,,340
2024,7,12,FRI,Z,90,,,341
2024,7,13,SAT,Z,90,,,342
2024,7,14,SUN,Z,90,,,343
2024,7,15,MON,Z,90,,,344
2024,7,16,TUE,Z,90,,,345
2024,7,17,WED,Z,90,,,346
2024,7,18,THU,Z,90,,,347
2024,7,19,FRI,Z,90,,,348
2024,7,20,SAT,Z,90,,,349
2024,7,21,SUN,Z,90,,,350
2024,7,22,MON,Z,90,,,351
2024,7,23,TUE,Z,90,,,352
2024,7,24,WED,Z,90,,,353
2024,7,25,THU,Z,90,,,354
2024,7,26,FRI,Z,90,,,355
2024,7,27,SAT,Z,90,,,356
2024,7,28,SUN,Z,90,,,357
2024,7,29,MON,Z,90,,,358
2024,7,30,TUE,Z,90,,,359
2024,7,31,WED,Z,90,,,360
2024,8,1,THU,Z,90,,,361
2024,8,2,FRI,Z,90,,,362
2024,8,3,SAT,Z,90,,,363
2024,8,4,SUN,Z,90,,,364
2024,8,5,MON,Z,90,,,365
2024,8,6,TUE,Z,90,,,366
2024,8,7,WED,D,68,,,367
` 

}