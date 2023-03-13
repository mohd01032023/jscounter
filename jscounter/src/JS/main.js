function dec(){
    var val = document.getElementById("input").value;
    if(val != 0){
        var val = document.getElementById("input").value;
        val--;
        document.getElementById("input").value = val;
    } 
    else{
        document.getElementById("input").value = 0;
    }
}

function inc(){
    var val = document.getElementById("input").value;
    val++;
    document.getElementById("input").value = val;
}