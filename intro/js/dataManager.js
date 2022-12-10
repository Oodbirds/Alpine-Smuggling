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

toc = document.getElementById("ToC");

tocHeader = document.createElement("h2");
tocHeader.innerText="Chapters of Our Story";
//toc.appendChild(tocHeader);

tocList = document.createElement("ul");    
mainDiv = document.getElementById("menu");
headers = mainDiv.getElementsByClassName("listItem");

// For each h3
for (i = 0; i < headers.length; i++){
    var link = headers[i].getElementsByTagName("a")
    console.log(headers[i].innerText);
    if(headers[i].innerText == "Beginning"){
        if(index){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#8f9691";
        }
    }
    else if(headers[i].innerText == "Chapter 1: The Smugglers"){
        if(character){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#8f9691";
        }
    }
    else if(headers[i].innerText == "Chapter 2: Searching in the Dark"){
        if(searching){
            console.log("found");
            link[0].style.color = "black";
        }else{
            link[0].style.color = "#8f9691";
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
    console.log("item " + i);

    // Create an id
    var name = "ch"+i;
    headers[i].id= name;
  
    // a list item for the entry
    tocListItem = document.createElement("li");

    // a link for the h3
    tocEntry = document.createElement("a");
    tocEntry.title = "yoo";
    tocEntry.href = "../index.html";
    //tocEntry.innerText=headers[i].innerText;

    //tocListItem.appendChild(tocEntry);
    //tocList.appendChild(tocListItem);
}
//toc.appendChild(tocList);