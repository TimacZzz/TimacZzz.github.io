document.getElementById("wifisetup").style.display = "none"
document.getElementById("devicesetup").style.display = "none"
document.getElementById("interhouse").style.display = "none"
document.getElementById("effortreport").style.display = "none"
document.getElementById("cumulativereport").style.display = "none"
document.getElementById("wednesday").style.display = "none"
document.getElementById("advisor").style.display = "none"
document.getElementById("troll").style.display = "none"
$(document).ready(function(){

    pages = ["#home", "#wifisetup", "#devicesetup", "#interhouse", "#effortreport", "#cumulativereport", 
            "#wednesday", "#advisor"];

    $(".advance , .continue").on("click", buttonRender);
    $(".advance1 , .continue").on("click", buttonRender1);
    $(".advance2 , .continue").on("click", buttonRender2);
    $(".advance3 , .continue").on("click", buttonRender3);
    $(".advance4 , .continue").on("click", buttonRender4);
    $(".advance5 , .continue").on("click", buttonRender5);
    $(".advance6 , .continue").on("click", buttonRender6);
    $(".advance7 , .continue").on("click", buttonRender7);
    $(".navbarbutton").hover(changeMouseType)

    function hideAll(){
        for (var i = 0; i < pages.length; i++){
            $(pages[i]).hide();
        }
    };

    function buttonRender(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[1]).show();
                break;

            case "wifisetup":
                $(pages[1]).hide();
                $(pages[1]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[1]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[1]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[1]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[1]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[1]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[1]).show();
                break;
        }

    };

    function buttonRender1(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "wifisetup":
                $(pages[1]).hide();
                $(pages[2]).show();
                break;

            case "home":
                $(pages[0]).hide();
                $(pages[2]).show();
                break;

            case "devicesetup":
                $(pages[2]).hide();
                $(pages[2]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[2]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[2]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[2]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[2]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[2]).show();
                break;
        }

    };


    function buttonRender2(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[0]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[0]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[0]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[0]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[0]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[0]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[0]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[0]).show();
                break;
        }

    };

    function buttonRender3(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[3]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[3]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[3]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[3]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[3]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[3]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[3]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[3]).show();
                break;
        }

    };

    function buttonRender4(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[4]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[4]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[4]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[4]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[4]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[4]).show();
                break;  
            case "wednesday":
                $(pages[6]).hide();
                $(pages[4]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[4]).show();
                break;
        }

    };

    function buttonRender5(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[5]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[5]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[5]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[5]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[5]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[5]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[5]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[5]).show();
                break;
        }

    };

    function buttonRender6(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[6]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[6]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[6]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[6]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[6]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[6]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[6]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[6]).show();
                break;
        }

    };

    function buttonRender7(){
        var currentPage = $(this).closest("section").attr("id");

        switch(currentPage) {
            case "home":
                $(pages[0]).hide();
                $(pages[7]).show();
                break;
            case "wifisetup" :
                $(pages[1]).hide();
                $(pages[7]).show();
                break;
            case "devicesetup":
                $(pages[2]).hide();
                $(pages[7]).show();
                break;
            case "interhouse":
                $(pages[3]).hide();
                $(pages[7]).show();
                break;
            case "effortreport":
                $(pages[4]).hide();
                $(pages[7]).show();
                break;
            case "cumulativereport":
                $(pages[5]).hide();
                $(pages[7]).show();
                break;
            case "wednesday":
                $(pages[6]).hide();
                $(pages[7]).show();
                break;
            case "advisor":
                $(pages[7]).hide();
                $(pages[7]).show();
                break;
        }

    };

});


let menu = null;
        document.addEventListener('DOMContentLoaded', function(){
            //make sure the right click menu is hidden
            menu = document.querySelector('.menu');
            menu.classList.add('off');
            
            //add the right click listener to the box
            let home = document.getElementById('home');
            home.addEventListener('contextmenu', showmenu);
            let wifisetup = document.getElementById('wifisetup');
            wifisetup.addEventListener('contextmenu', showmenu);
            let devicesetup = document.getElementById('devicesetup');
            devicesetup.addEventListener('contextmenu', showmenu);
            let interhouse = document.getElementById('interhouse');
            interhouse.addEventListener('contextmenu', showmenu);
            let effortreport = document.getElementById('effortreport');
            effortreport.addEventListener('contextmenu', showmenu);
            let cumulativereport = document.getElementById('cumulativereport');
            cumulativereport.addEventListener('contextmenu', showmenu);
            let wednesday = document.getElementById('wednesday');
            wednesday.addEventListener('contextmenu', showmenu);
            let advisor = document.getElementById('advisor');
            advisor.addEventListener('contextmenu', showmenu);
            //add a listener for leaving the menu and hiding it
            menu.addEventListener('mouseleave', hidemenu);
            
            //add the listeners for the menu items
            addMenuListeners();
        });
        
        //function addMenuListeners(){
        //    document.getElementById('red').addEventListener('click', setColour);
        //}
        
        function setColour(ev){
            hidemenu();
            let clr = ev.target.id;
            pages = ["#home", "#wifisetup", "#devicesetup", "#interhouse", "#effortreport", "#cumulativereport", 
            "#wednesday", "#advisor", "#troll"];
            document.getElementById("home").style.display = "none"
            document.getElementById("wifisetup").style.display = "none"
            document.getElementById("devicesetup").style.display = "none"
            document.getElementById("interhouse").style.display = "none"
            document.getElementById("effortreport").style.display = "none"
            document.getElementById("cumulativereport").style.display = "none"
            document.getElementById("wednesday").style.display = "none"
            document.getElementById("advisor").style.display = "none"
            $(pages[8]).show();
        }
        
        function showmenu(ev){
            //stop the real right click menu
            ev.preventDefault(); 
            //show the custom menu
            console.log( ev.clientX, ev.clientY );
            menu.style.top = `${ev.clientY - 20}px`;
            menu.style.left = `${ev.clientX - 20}px`;
            menu.classList.remove('off');
        }
        
        function hidemenu(ev){
            menu.classList.add('off');
            menu.style.top = '-200%';
            menu.style.left = '-200%';
        }

