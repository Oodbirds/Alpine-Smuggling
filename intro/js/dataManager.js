//declaring variables and getting info
var pages = JSON.stringify(localStorage.getItem("pages"));
var index;
var character;
var searching;
var ending = false;

if (pages.includes("page1")){
    console.log("page 1 found");
    index = true;
}if (pages.includes("page2")){
    console.log("page2 found");
    character = true;
}if (pages.includes("page3")){
    console.log("page 3 found");
    searching = true;
}if (pages.includes("page4")){
    console.log("page 4 found");
    ending = true;
}
   
mainDiv = document.getElementById("menu");
headers = mainDiv.getElementsByClassName("listItem");

//adjust color of text based on weather it was seen or not
for (i = 0; i < headers.length; i++){
    var link = headers[i].getElementsByTagName("a")
    console.log(headers[i].innerText);
    if(headers[i].innerText == "Beginning"){
        if(index){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#828282";
        }
    }
    else if(headers[i].innerText == "Chapter 1: The Smugglers"){
        if(character){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#828282";
        }
    }
    else if(headers[i].innerText == "Chapter 2: Searching in the Dark"){
        if(searching){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#828282";
        }
    }
    else if(headers[i].innerText == "Chapter 3: The Sun Rise"){
        if(ending){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#8f9691";
        }
    }
    
}
