// We only have to change background-color and height of the sorting element.

var speed = 125;
var delay_time;
inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed = inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed = 5;
                break;
        case 2: speed = 25;
                break;
        case 3: speed = 125;
                break;
        case 4: speed = 625;
                break;
        case 5: speed = 15625;
                break;
    }
    delay_time = 10000/(Math.ceil(array_size/10)*speed); // Decrease numerator to increase sorting speed
}

delay_time = 10000/(Math.ceil(array_size/10)*speed); // Decrease numerator to increase sorting speed
var c_delay = 0; // This is updated on every div change so that visualization is visible


// Update div element's color, height and content
function div_update(cont,height,color)
{
    window.setTimeout(function(){
        if(cont.innerHTML != ""){
            cont.innerHTML = height;
        }
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay += delay_time);
}

// Update div element's color, height
function div_update_color(cont, height, color)
{
    window.setTimeout(function(){
        if(cont.innerHTML != ""){
            cont.innerHTML = height;
        }
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
        cont.innerHTML = "";
    },c_delay += delay_time);
}

// Update div element's content 
function div_height_update(cont, height)
{
    window.setTimeout(function(){
        cont.innerHTML = height;
    },c_delay += delay_time);
}

// Enabling buttons after execution of an Algorithm
function enable_buttons()
{
    window.setTimeout(function(){
        inp_as.disabled = false;
        inp_aspeed.disabled = false;
        inp_gen.addEventListener("click",generate_array);
        inp_gen.classList.remove("butt_locked");
        inp_gen.id = "generateArray";
        sort_button.addEventListener("click",runalgo);
        sort_button.classList.remove("butt_locked");
        sort_button.classList.remove("sortButton");
        sort_button.id = "sort";
        dropContent.classList.add("dropdownContent");
        dropContent.classList.remove("hide");
        drop_button.style.cursor = "pointer";
        
    },c_delay += delay_time);
}