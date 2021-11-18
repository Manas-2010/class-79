name_array=[]

function submit(){
var name_1=document.getElementById("name_1").value;
var name_2=document.getElementById("name_2").value;
var name_3=document.getElementById("name_3").value;
var name_4=document.getElementById("name_4").value;

name_array.push(name_1 , name_2 , name_3 , name_4);
console.log(name_array);
document.getElementById("show_name").innerHTML=name_array;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}

function sort(){
    name_array.sort();
    console.log(name_array);
document.getElementById("show_name").innerHTML=name_array;
}