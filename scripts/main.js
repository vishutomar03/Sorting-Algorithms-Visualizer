// Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
var inp_as = document.getElementById("slider");
var array_size = inp_as.value;
var inp_gen = document.getElementById("generateArray");
var inp_aspeed = document.getElementById("slider1");
var drop_button = document.getElementById("dropbtn");
var butts_algos = document.querySelectorAll(".algos");
var sort_button = document.getElementById("sort");
var dropContent = document.getElementById("dropContent");
var div_sizes = [];
var divs = [];
var margin_size;
var algorithm;
var cont = document.getElementById("arrayContainer");

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

window.onload = update_array_size(); 

// Array generation and updation
function generate_array()
{
    cont.innerHTML = "";  
    for(var i = 0; i < array_size; i++)
    {
        div_sizes[i] = Math.floor((Math.random() * 60) + 10);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        if(array_size > 30){
            divs[i].innerHTML = "";
            margin_size = 0.15;  
        }
        else{
            divs[i].innerHTML = div_sizes[i];
            divs[i].classList.add("blocks");    
            if(array_size < 10){
                margin_size = 0.4;  
            }
            else{
                margin_size = 0.25;  
            }
        }
        
        divs[i].style = " margin:0% " + margin_size + "%; background-color: #F08080; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

// Update Array Size
function update_array_size()
{
    array_size = inp_as.value;
    generate_array();
}

// Adding Event Listeners to all algorithms
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",update);
}

sort_button.addEventListener("click",runalgo);

function update(){
    algorithm = this.innerHTML;
    drop_button.innerHTML = algorithm;
}
    
// Disabling buttons before execution
function disable_functions(){
    inp_as.disabled = true;
    inp_aspeed.disabled = true;
    inp_gen.removeEventListener("click", generate_array);
    inp_gen.classList.add("butt_locked");
    inp_gen.removeAttribute("id");
    sort_button.removeEventListener("click",runalgo);
    sort_button.classList.add("butt_locked");
    sort_button.classList.add("sortButton");
    sort_button.removeAttribute("id");
    dropContent.classList.add("hide");
    dropContent.classList.remove("dropdownContent");
    drop_button.style.cursor = "default";
}

// Running the appropriate algorithm
function runalgo()
{
    if(algorithm == undefined){
        return;
    }
    disable_functions();
    switch(algorithm)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
        case "Heap Sort":Heap();
                        break;
    };        
}
