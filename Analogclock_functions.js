function drawTime(ctx, radius, timetoshow) {
  var hour = timetoshow.getHours();
  var minute = timetoshow.getMinutes();
  var second = timetoshow.getSeconds();

  // Hour hand
  hour = hour%12;
  hour = (hour*Math.PI/6) +
  (minute*Math.PI/(6*60)) +
  (second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07, 'black');

  // Minute hand
  minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07, 'black');
  drawHand(ctx, minute, radius*0.78, radius*0.03, 'red')

  // Second hand
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02, 'black');

  ctx.beginPath();
  ctx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();
}

function drawFace(ctx, radius) {
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawRedDot(ctx, radius, minute) {
  var reddotradiusfactor = 0.95;
  var angleminblack = (minute-0.9) * Math.PI/30 - Math.PI/2;
  var anglemaxblack = (minute+0.9) * Math.PI/30 - Math.PI/2;
  var anglemin = (minute-0.75) * Math.PI/30 - Math.PI/2;
  var anglemax = (minute+0.75) * Math.PI/30 - Math.PI/2;
  var angle = minute * Math.PI/30;
  var reverseangle = angle - Math.PI;
  var xoffset = radius * reddotradiusfactor * Math.cos((minute/60)*(-2)*Math.PI+Math.PI/2);
  var yoffset = (-1) * radius * reddotradiusfactor * Math.sin((minute/60)*(-2)*Math.PI+Math.PI/2);
  var xoffsetshort = xoffset * 0.98;
  var yoffsetshort = yoffset * 0.98;
  ctx.strokeStyle = 'black';  // draw the top section of capital T letter
  ctx.lineWidth = radius*0.07;
  ctx.beginPath(); 
  ctx.arc(0, 0, radius*0.92, angleminblack, anglemaxblack, false);
  ctx.stroke();
  drawTail(ctx, reverseangle, xoffset, yoffset, -0.78*radius, radius*0.07, 'black');
  ctx.strokeStyle = 'red';  // draw the inner red part of top section of capital T letter
  ctx.lineWidth = radius * 0.03;
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.92, anglemin, anglemax, false);
  ctx.stroke();
  drawTail(ctx, reverseangle, xoffsetshort, yoffsetshort, -0.80*radius, radius*0.03, 'red');
  
}

function drawHand(ctx, pos, length, width, strokecolor) {
  ctx.strokeStyle = strokecolor;
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function drawTail(ctx, pos, xoffset, yoffset, length, width, strokecolor) {
  ctx.strokeStyle = strokecolor;
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0, 0);
  ctx.moveTo(xoffset, yoffset);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
