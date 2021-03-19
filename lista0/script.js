var canvas = document.getElementById('desenho');
var context = canvas.getContext('2d');

var cor = '#000';

canvas.width = 400;
canvas.height = 300;

context.fillStyle = cor;
context.strokeStyle = cor;
context.lineWidth = 6;
context.beginPath();
context.arc(200, 50, 40, 0, Math.PI*2);
context.fill();

context.beginPath();
context.moveTo(200, 90);
context.lineTo(200,180);
context.stroke();

context.beginPath();
context.moveTo(200, 90);
context.lineTo(150, 130);
context.stroke();

context.beginPath();
context.moveTo(200, 90);
context.lineTo(250, 130);
context.stroke();

context.beginPath();
context.moveTo(200, 180);
context.lineTo(160, 240);
context.moveTo(200, 180);
context.lineTo(220, 240);
context.stroke();