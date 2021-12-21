canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
// radius = document.getElementById("text1").value;
radius = document.getElementById("text1").value;

// color = document.getElementById("text2").value;
color = document.getElementById("text2").value;
// width_line = document.getElementById("text3").value;
width_line = document.getElementById("text3").value;

var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("text2").value;
    width_line = document.getElementById("text3").value;
    radius=document.getElementById("text1").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
   
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    // mouseEvent = "mousemove";
  
    position_x = e.clientX - canvas.offsetLeft;
    position_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        console.log(" last position of x an y");
        console.log("x =" + last_position_of_x + " Y =" + last_position_of_y);
       
        console.log("current position of x and y");
        console.log("x = "+ position_x + " Y = " + position_y);
       
        ctx.arc(position_x,position_y,radius,0,2*Math.PI);
        ctx.stroke();
       
    }

    last_position_of_x = position_x;
    last_position_of_y = position_y;
}

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }