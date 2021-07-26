function Bubble()
{
    c_delay = 0;
    
    for(var i = 0; i < array_size - 1; i++)
    {
        for(var j = 0; j < array_size - i - 1; j++)
        {
            div_update(divs[j], div_sizes[j], "rgb(32 204 61)"); // Color update
            div_update(divs[j + 1], div_sizes[j + 1], "rgb(32 204 61)"); // Color update

            if(div_sizes[j] > div_sizes[j + 1])
            {
                div_update(divs[j], div_sizes[j], "rgba(169, 92, 232, 0.8)"); // Color update
                div_update(divs[j + 1], div_sizes[j + 1], "rgba(169, 92, 232, 0.8)"); // Color update

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "rgba(169, 92, 232, 0.8)"); // Height update
                div_update(divs[j + 1], div_sizes[j + 1], "rgba(169, 92, 232, 0.8)"); // Height update
            }
            div_update(divs[j], div_sizes[j], "#F08080"); // Color update
        }
        div_update(divs[j], div_sizes[j], "rgb(128 178 240)"); // Color update
    }
    div_update(divs[0], div_sizes[0], "rgb(128 178 240)"); // Color update
    
    enable_buttons(); // Calling function for enabling buttons 
}