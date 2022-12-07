var page1;
var page2;
var page3;
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + '=' + cvalue + ';path="/";' + expires;
}
function setCookieRough(){
    var history = getCookie("history");
    if (history != "") {
        console.log("history exists");
        console.log
        console.log(document.URL);
        var insert = true;
        var sp = history.toString().split(",");
        if (insert) {
            sp.push(document.URL);
        }
        setCookie("history", sp.toString(), 30);
    }else {
        console.log("emtpy history");
        var stack = new Array();
        stack.push(document.URL);
        setCookie("history", stack.toString(), 30);
    }

}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for ( var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
function checkHistory(targetId) {
    var history = getCookie("history");
    var htmlContent = '';

    if (history != "") {
        var insert = true;
        var sp = history.toString().split(",");
        for ( var i = sp.length - 1; i >= 0; i--) {
            htmlContent += '<a style="color: black;" class="demo-pricing demo-pricing-1"  href="'
                    + sp[i]
                    + '">'
                    + sp[i].substring(sp[i].lastIndexOf('/') + 1) + '</a><br>';
            // if (sp[i] == document.URL) {
            //     insert = false;
            // }
            document.getElementById(targetId).innerHTML = htmlContent;
        }
        if (insert) {
            sp.push(document.URL);
        }
        setCookie("history", sp.toString(), 30);
    } else {
        var stack = new Array();
        stack.push(document.URL);
        setCookie("history", stack.toString(), 30);
    }
}
function displaySeenPages(){
    console.log(sp[i].substring(sp[i].lastIndexOf('/') + 1) + '</a><br>');
    console.log()
}
function clearHistory(targetId) {
    //var history = getCookie("history");
    //history = "";
    localStorage.history = "";
    document.getElementById(targetId).innerHTML = "";
    alert("Visited page links were cleared");
}
//console.log(document.querySelector("#recentPageViews"));
//checkHistory("recentPageViews");
//clearHistory("recentPageViews");
console.log("what");
