


    var canvas1 = document.getElementById("c1");
    var final_c = canvas1.getContext("2d");
    var mouseEvent = "";
    
    var colour = "";
    var lw = "";
    canvas1.addEventListener("mousedown", md);
    
    function md(x)
    {
        lw = document.getElementById("lw_i").value;
        colour = document.getElementById("color_i").value;
        mouseEvent = "mdown";
    }

    canvas1.addEventListener("mousemove", mm);
    function mm(x)
    {
        current_x = x.clientX - canvas1.offsetLeft;
        current_y = x.clientY - canvas1.offsetTop;

        if (mouseEvent == "mdown") {
        final_c.beginPath();
        final_c.strokeStyle = colour;
        final_c.lineWidth = lw;
        final_c.arc(current_x, current_y, 18 ,0 ,Math.PI * 2);
        final_c.stroke();
        }

    }

    canvas1.addEventListener("mouseup", mu);
    
    function mu(x)
    {
        mouseEvent = "up";
    }

    canvas1.addEventListener("mouseleave",ml);
    function ml(x)
    {
        mouseEvent = "leave";
    }

    function clear_canvas(){
    
        final_c.clearRect(0,0,canvas1.width,canvas1.height);
    }

