var header = document.querySelector("#header");
var top = document.getElementById("#topheader");
var searchPage = document.querySelector(".searchPage");
var searchIcon = document.querySelector(".searchButton") ;
var markIcon = document.querySelector(".mark")

searchIcon.onclick = function(){
    document.getElementById("myDIV").style.display = "none";
    searchPage.style.display = "block"  
}

markIcon.onclick = function(){
    document.getElementById("myDIV").style.display = "block";
    searchPage.style.display = "none" 
}   




