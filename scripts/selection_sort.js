function Selection_sort()
{
    c_delay = 0;

    for(var i = 0; i < array_size - 1; i++)
    {
        div_update(divs[i], div_sizes[i], "rgb(32 204 61)"); // Color update

        index_min = i;

        for(var j = i + 1; j < array_size; j++)
        {
            div_update(divs[j], div_sizes[j], "rgb(32 204 61)"); // Color update

            if(div_sizes[j] < div_sizes[index_min])
            {
                div_update(divs[index_min], div_sizes[index_min], "#F08080"); // Color update
                
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "rgba(169, 92, 232, 0.8)"); // Color update
                
                div_update(divs[index_min], div_sizes[index_min], "rgb(32 204 61)"); // Color update
            }
            else
            {
                div_update(divs[j], div_sizes[j], "#F08080"); // Color update
            }
        }
        
        if(index_min != i)
        {
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "rgba(169, 92, 232, 0.8)"); // Height update
            div_update(divs[i], div_sizes[i], "rgba(169, 92, 232, 0.8)"); // Height update
            div_update(divs[index_min], div_sizes[index_min], "#F08080"); // Color update
        }
        div_update(divs[i], div_sizes[i], "rgb(128 178 240)"); // Color update
    }
    div_update(divs[i], div_sizes[i], "rgb(128 178 240)"); // Color update
    
    enable_buttons(); // Calling function for enabling buttons 
}