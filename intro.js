var indicator=0;
function intro(stage){
    if(stage==0){
        timeleft=1e+14;
        indicator=100;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(1)\">"+"Welcome to Newsticker Idle! (Click on this news to go on.)"+"</div>";
    }
    if(stage==1){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(2)\">"+"This is the newsticker, the main element of this game."+"</div>";
    }
    if(stage==2){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(3)\">"+"If you click on the newsticker, you get 1 click."+"</div>";
    }
    if(stage==3){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(4)\">"+"If you read a news, you get 1 read."+"</div>";
    }
    if(stage==4){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(5)\">"+"The same news can be clicked multiple times, but only read once."+"</div>";
    }
    if(stage==5){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        indicator=0;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"Click a total of 15 news to continue."+"</div>";
    }
    if(stage==6){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        indicator=100;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(7)\">"+"Some upgrades may appear on the newsticker."+"</div>";
    }
    if(stage==7){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(8)\">"+"There might also be paperclips, which is the main propellant of the game."+"</div>";
    }
    if(stage==8){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(9)\">"+"You must click on them manually to buy them."+"</div>";
    }
    if(stage==9){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=8000;
        indicator=1;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"Acquire a paperclip to continue."+"</div>";
    }
    if(stage==10){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(11)\">"+"The story is a unnecessary part of the game."+"</div>";
    }
    if(stage==11&&storyUnlocked==0){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=8000;
        indicator=3;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"Unlock the story to continue."+"</div>";
    }
    if(stage==11&&storyUnlocked>0){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        indicator=4;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(12)\">"+"It seems that you have already unlocked the story, so continue..."+"</div>";
    }
    if(stage==12){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(13)\">"+"Above the newsticker is the tab."+"</div>";
    }
    if(stage==13){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=1e+14;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"intro(14)\">"+"Although it does not seem like buttons, you can still click on it."+"</div>";
    }
    if(stage==14){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=8000;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"You have learned all the basics of the game, good luck!"+"</div>";
    }
    if(stage==15){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=8000;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"Hint: ND1 can generate reads and clicks automatically."+"</div>";
    }
    if(stage==16){
        totalNewsClicked++;
        totalNewsRead++;
        timeleft=8000;
        document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(0)\">"+"Hint: Generators can generate paperclips automatically."+"</div>";
    }
}