const d = document;
function myFunc(){
    var input, filter, ul, li, a, i, textValue;
    input = d.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = d.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }
        else{
            li[i].style.display = "none";
        }
    }
}