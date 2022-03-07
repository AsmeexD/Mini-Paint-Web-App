var mouseEvent = "empty";
var last_x_position, last_y_position, current_x_position, current_y_position;

var canvas = document.getElementById ('myCanvas');
ctx = canvas.getContext("2d");

var color = "black";
width_of_line = 4;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent= "mousedown";

    }
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e){
current_x_position = e.clientX - canvas.offsetLeft
current_y_position = e.clientY - canvas.offsetTop

if(mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_x_position, last_y_position);
    ctx.lineTo(current_x_position, current_y_position);
    ctx.stroke();


}
last_x_position = current_x_position;
last_y_position = current_y_position;



    }
    canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseup";

    }
    canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave";

    }


    