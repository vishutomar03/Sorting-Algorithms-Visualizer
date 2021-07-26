function Quick()
{
    c_delay = 0;
    quick_sort(0, array_size - 1);
    
    for(var i = 0; i < array_size; i++){
        div_update(divs[i], div_sizes[i], "rgb(128 178 240)"); // Color 
    }
    
    enable_buttons(); // Calling function for enabling buttons 
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = div_sizes[start]; // make the first element as pivot element.
    div_update(divs[start], div_sizes[start], "#ffd54d"); // Color update

        for(var j = start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (div_sizes[j] < piv)
            {
                div_update(divs[i], div_sizes[i], "rgb(32 204 61)"); // Color update
                div_update(divs[j], div_sizes[j], "rgb(32 204 61)"); // Color update

                div_update(divs[i], div_sizes[i], "rgba(169, 92, 232, 0.8)" ); // Color update
                div_update(divs[j], div_sizes[j], "rgba(169, 92, 232, 0.8)"); // Color update

                var temp = div_sizes[i];
                div_sizes[i] = div_sizes[j];
                div_sizes[j] = temp;

                div_update(divs[i], div_sizes[i], "rgba(169, 92, 232, 0.8)"); // Height update
                div_update(divs[j], div_sizes[j], "rgba(169, 92, 232, 0.8)"); // Height update

                div_update(divs[i], div_sizes[i], "#F08080"); // Height update
                div_update(divs[j], div_sizes[j], "#F08080"); // Height update

                i += 1;
            }
            else{
                div_update(divs[i], div_sizes[i], "rgb(32 204 61)"); // Color update
                div_update(divs[j], div_sizes[j], "rgb(32 204 61)"); // Color update
                
                div_update(divs[i],div_sizes[i],"#F08080"); // Height update
                div_update(divs[j],div_sizes[j],"#F08080"); // Height update
            }
    }
    div_update(divs[start], div_sizes[start], "rgba(169, 92, 232, 0.8)"); // Color update
    div_update(divs[i-1], div_sizes[i-1], "rgba(169, 92, 232, 0.8)"); // Color update
    
    var temp = div_sizes[start]; // put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i-1];
    div_sizes[i-1] = temp;

    div_update(divs[start], div_sizes[start], "rgba(169, 92, 232, 0.8)"); // Height update  
    div_update(divs[i-1], div_sizes[i-1], "rgba(169, 92, 232, 0.8)"); // Height update

    for(var t = start; t <= i; t++)
    {
        div_update(divs[t], div_sizes[t], "rgb(240, 128, 128)"); // Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end)
{
    if( start < end )
    {
        // Stores the position of pivot element
        var piv_pos = quick_partition (start, end) ;     
        quick_sort (start, piv_pos -1); // Sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ; // Sorts the right side of pivot.
    }
 }