function roundToNearest(num, numberToRound){
   return Math.floor(num/parseFloat(numberToRound)) * numberToRound;
}

var canvas = document.querySelector("canvas");
canvas.width = 720;
canvas.height = 540;
var context = canvas.getContext("2d");
var gridSize = 30;

function createGrid(){
   context.lineWidth = 1;
   context.strokeStyle = "#888";
   for(var i = gridSize; i < canvas.width;i += gridSize){
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, canvas.height);
      context.stroke();
   }
   for(var n = gridSize; n < canvas.height;n += gridSize){
      context.beginPath();
      context.moveTo(0, n);
      context.lineTo(canvas.width, n);
      context.stroke();
   }
}

var mouseDown = false;
document.onmousedown = function(){
   mouseDown = true;
}
document.onmouseup = function(){
   mouseDown = false;
}
document.onmousemove = function(e){
   if(mouseDown){
      document.querySelector("canvas").onclick(e);
   }
}

document.querySelector("canvas").onclick = function(e){
   var coords = [e.clientX - (canvas.getBoundingClientRect().left), e.clientY - (canvas.getBoundingClientRect().top)];
   var coords = [roundToNearest(coords[0], gridSize), roundToNearest(coords[1], gridSize)];

   context.fillStyle = '#222';
   context.rect(coords[0] + 1, coords[1] + 1, gridSize - 1, gridSize - 1);
   context.fill();
}
createGrid();