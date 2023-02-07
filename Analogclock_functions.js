function drawTime(ctx, radius, timetoshow) {
  var hour = timetoshow.getHours();
  var minute = timetoshow.getMinutes();
  var second = timetoshow.getSeconds();

  // Hour hand
  hour = hour%12;
  hour = (hour*Math.PI/6) +
  (minute*Math.PI/(6*60)) +
  (second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);

  // Minute hand
  minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);

  // Second hand
  second = (second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
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
  var reddotradiusfactor = 0.8
  var xoffset = radius * reddotradiusfactor * Math.cos((minute/60)*(-2)*Math.PI+Math.PI/2);
  var yoffset = (-1) * radius * reddotradiusfactor * Math.sin((minute/60)*(-2)*Math.PI+Math.PI/2);
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(xoffset, yoffset, radius/15, 0, 2 * Math.PI, true);
  ctx.fill();
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
