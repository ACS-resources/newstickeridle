function ShowTab(){
    var s="";
    if(interacted[21]>0&&storyShown==0)s+="<text onclick=ShowStory(0)>Show Story</text>";
    if(interacted[21]>0&&storyShown>0)s+="<text onclick=HideStory()>Hide Story</text>";
    if(interacted[16]>0)s+=" | <text onclick=Dim()>Dimensions</text>";
    if(interacted[26]>0)s+=" | <text onclick=Gen()>Generator</text>";
    if(interacted[21]>0)s+=" | <text onclick=Ex()>Exit</text>";
    document.getElementById("s").innerHTML="<div id=\"rn\" class=\"txt\"\>"+s+"</div>";
}