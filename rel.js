function regs() {
 document.getElementById('start').style.display = "none";
 let maps = document.getElementById('input');
 let parDiv = maps.parrentNode;
 let canvik = document.createElement('img');
 canvik.src = "gifbox.gif";
 canvik.id = "ridik";
 canvik.className = "canvas";
 canvik.style.zIndex = "3";
 document.getElementsByTagName('body')[0].insertBefore(canvik, maps);
 setTimeout(starting, 2500);
}
function starting() {
 document.getElementById('ridik').style.display = "none";
 let div = document.getElementById('input').value;
 let canvas = document.getElementById('canvas');
 canvas.style.zIndex = "66";
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
	let ctx1 = canvas.getContext('2d');
    let ctx2 = canvas.getContext('2d');
	let ctx3 = canvas.getContext('2d');
    let ctx4= canvas.getContext('2d');
	let ctx5 = canvas.getContext('2d');
    let ctx6 = canvas.getContext('2d');
	let ctx7 = canvas.getContext('2d');
	ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(292, 37);
    ctx.lineTo(213, 55);
	ctx.lineTo(87, 19);
	ctx.closePath();
	ctx.fillStyle = div;
	ctx.fill();
	
	ctx1.beginPath();
    ctx1.moveTo(150, 0);
    ctx1.lineTo(293, 37);
    ctx1.lineTo(213, 57);
	ctx1.lineTo(85, 19);
	ctx1.closePath();
	ctx1.strokeStyle = "black";
	ctx1.stroke();
	
	ctx2.beginPath();
    ctx2.moveTo(2, 37);
    ctx2.lineTo(83, 21);
    ctx2.lineTo(211, 55);
	ctx2.lineTo(149,73);
	ctx2.closePath();
	ctx2.fillStyle = div;
	ctx2.fill();
	
	ctx3.beginPath();
    ctx3.moveTo(1, 37);
    ctx3.lineTo(83, 19);
    ctx3.lineTo(213, 55);
	ctx3.lineTo(149, 75);
	ctx3.closePath();
	ctx3.strokeStyle = "black";
	ctx3.stroke();
	
	ctx4.beginPath();
    ctx4.moveTo(3, 39);
    ctx4.lineTo(149, 77);
    ctx4.lineTo(147, 147);
	ctx4.lineTo(3,120);
	ctx4.closePath();
	ctx4.fillStyle = div;
	ctx4.fill();
	
	ctx5.beginPath();
    ctx5.moveTo(0, 38);
    ctx5.lineTo(150, 76);
    ctx5.lineTo(147, 150);
	ctx5.lineTo(0, 121);
	ctx5.closePath();
	ctx5.strokeStyle = "black";
	ctx5.stroke();
	
	ctx6.beginPath();
    ctx6.moveTo(151, 77);
    ctx6.lineTo(292, 39);
    ctx6.lineTo(292, 117);
	ctx6.lineTo(151,147);
	ctx6.closePath();
	ctx6.fillStyle = div;
	ctx6.fill();
	
	ctx7.beginPath();
    ctx7.moveTo(150,76);
    ctx7.lineTo(294,38);
    ctx7.lineTo(294, 119);
	ctx7.lineTo(150, 150);
	ctx7.closePath();
	ctx7.strokeStyle = "black";
	ctx7.stroke();
	setTimeout(starting2, 500);
  }
}
function starting2() {
 let start = Date.now();
 let timer = setInterval(function() {
 let timePassed = Date.now() - start;
  if (timePassed <= 1000) {draw(timePassed);}
  else if (timePassed <= 2000) {draw1(timePassed);}
  else if (timePassed <= 3000) {draw2(timePassed);}
  else if (timePassed <= 4000) {draw3(timePassed);}
  else if (timePassed <= 7000) {draw4(timePassed);}
  else if (timePassed <= 10000) {draw5(timePassed);}
  else if (timePassed <= 11000) {draw6(timePassed);}
  else {
   clearInterval(timePassed);
   canvas.style.display = "none";
   let canvas2 = document.getElementById('canvas2');
   let div1 = document.getElementById('input').value;
    if (div1 == "") {canvas2.style.backgroundColor = "black";} 
    else {canvas2.style.backgroundColor = div1;}  
   return;
  }
 }, 1);
 }
 function draw(timePassed) {
 canvas.style.top = timePassed/33.3 + 'vh';
}
function draw1(timePassed) {
 let x = 30;
 canvas.style.left = "17vw";
 canvas.style.top = x+timePassed/70 + 'vh';
}
function draw2(timePassed) {
 let y = 75;
 canvas.style.left = "25vw";
 canvas.style.top = y-timePassed/100 + 'vh';
}
function draw3(timePassed) {
 let y = 27;
 canvas.style.top = "35vh";
 canvas.style.left = y+timePassed/320 + 'vw';
}
function draw4(timePassed) {
 let y = 20;
 canvas.style.left = "40vw";
 canvas.style.top = y+timePassed/140 + 'vh';
}
function draw5(timePassed) {
 let y = 15;
 canvas.style.top = "70vh";
 canvas.style.left = y+timePassed/240 + 'vw';
}
function draw6(timePassed) {
 let y = 90;
 canvas.style.top = y-timePassed/280 + 'vh';
 canvas.style.left = "73vw";
}