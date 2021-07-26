function Insertion()
{
    c_delay = 0;

    for(var j = 1; j < array_size; j++)
    {
    
        div_update_color(divs[j], div_sizes[j], "rgb(230, 230, 230)"); // Color update
        
        var key = div_sizes[j]; 
        var i = j-1;
        while(i >= 0 && div_sizes[i] > key)
        {
            div_update(divs[i], div_sizes[i], "rgba(169, 92, 232, 0.8)"); // Color update
            
            div_sizes[i+1] = div_sizes[i];
            
            div_update(divs[i+1], div_sizes[i+1], "rgba(169, 92, 232, 0.8)"); // Height update
            if(array_size <= 30)
                div_height_update(divs[i+1], div_sizes[i+1]);
            
            div_update_color(divs[i],div_sizes[i], "rgb(230, 230, 230)"); // Height update
        
            i--;
        }
        
        div_sizes[i+1] = key;
        div_update(divs[i + 1], div_sizes[i + 1], "red"); // Color update
        if(array_size <= 30)
            div_height_update(divs[i+1], div_sizes[i+1]);
        

        for(var t = 0; t <= j; t++)
        {
            div_update(divs[t], div_sizes[t], "rgb(128 178 240)"); // Color update
        }
    }
    div_update(divs[j-1], div_sizes[j-1], "rgb(128 178 240)"); // Color update

    enable_buttons();  // Calling function for enabling buttons 
}
