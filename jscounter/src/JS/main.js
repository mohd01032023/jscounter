let val = document.getElementById("input").value;
function dec(){
    if(val != 0){
        document.getElementById("input").value = --val;
    }
}
let inc = () => document.getElementById("input").value = ++val;
