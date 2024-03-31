var rNCount=234,interactable=52;
var timeleft=8000;
rN=new Array(
	"This is the first Newsticker!",
	"Palescreen is a song written by WyvernP and sang by Madol!",
	"Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan Nyan",
	"cbrt(74088)",
	"This game was created on Feb 11 2024!",
	"Congratulations! You got 0.00000 free Paperclips!",
	"NEWS:HELP!",
	"Warning! Right Angle Arc",
	"Code by l319836",
	"Anti-qwubbles... Interesting.",
	"qwqbbles",
	"A Newsticker. How Original.",
	"Layer Omega",
	"No you have time for this",
	"Special thanks to Fallen_Cat for inspiring me to make such a game!",
	"Special thanks to gityx.com for introducing me to idle games!",
	"First, a machine to compute with",
	"Second, a realm to rely on",
	"Third, a ladder to go beyond",
	"Fourth, a chaos to communicate to",
	"Last, a bar to stay behind",
	"Why are cyclotomic polynomials all integer polynomials?", 
	"Oo0.o0.oO",
	"lazercutter",
	"Doesn't it annoy you when people don't finish their",
	"Matter matter doesn't matter",
	"Massive Ranks is currently on sale! Cost is 6x expensive per level.",
	"Where is the 6th stage?",
	"are you happy when everything is synergized",
	"| - | - | - | - | - | - | - | - |",
	"NEWS:HELP!",
	"Dev Haste x2. Next version will come out much sooner.",
	"noisserped",
	"I swear on the darkest night I'll end it all, and... Sorry, I forgot what's next.",
	"How do you know you are a human?",
	"aeito vs. eiota vs. ieoat vs. oaite vs. toeai",
	"This is a Mews Nessage!",
	"Antimatter Dimensions + Matter Dimensions = Dimensions",
	"Now playing: Pentiment - Nothing But Requiem with Museo",
	"Now playing: Pigstep - C418",
	"Now playing: Opia - rN",
	"Now playing: +ERABY+E CONNEC+10N - Camellia",
	"Now playing: Aegleseeker - Silentroom/Frums",
	"This is definitely the worst game ever.",
	"Not just a newsticker game.",
	"There was once a paperclip here, but now there's not.",
	"You may want to spend your paperclips on something.",
	"Seriously, isn't this another reference of Antimatter Dimensions?",
	"Paperclips is VERY VERY useful in this game.",
	"DM me in Discord if you see this message.",
	"You see, more paperclips = more unlocks.",
	"#news-tickers-suggestions is out of news!",
	"I'm burning my mind to insanity to come up with all those news.",
	"Paperclip is the main resource of the game!",
	"WHAT DO I NEED ALL THOSE USELESS PAPERCLIPS FOR???",
	"The idea of this game comes from a conversation in galaxy.click.",
	"\"This is definitely boring.\" --- new players who had just played Antimatter Dimensions",
	"Does this game really have such a controversy?",
	"Help! I've just opened an idle game, and now it displayes nothing else but newstickers!",
	"Now playing: DESTRUCTION 3,2,1 - Normal1zer vs. Broken Nerdz",
	"Clicking this gives 3x more clicks! Take your chance!",
	"Reading this news gives a CRIT 10x more reads!",
	"0''''1''''2''''3''''3.5''''4''''4.4''''4.7''''5 This is a ruler but SOFTCAPPED",
	"Playing click games for a long time can pose a risk of tenosynovitis. Pay attention to rest.",
	"DABCABCD ABCADBAA BABCABCD BAAADBAB",
	"Click here to make nothing happen.",
	"Click here to click here.",
	"You feel like making paperclips. But no one wants to buy your paperclips.",
	"The 69th news. Interesting number.",
	"Clicks and Reads are important resources. Spend them wisely.",
	"Pass = No Pass",
	"Sorry, we are using A* to find the nearest news ticker. Please wait for 8000 ms...",
	"Game under construction, all mechanics must wear hardcaps.",
	"Do you know that this newsticker is much faster than that in other games?",
	"Delay: 8000ms. Connection: Bad.",
	"2250 newstickers until the update",
	"Just now a newsticker passed by, but you advanced 8 seconds in time, so you didn't see it.",
	"Click this news | According to a survey, most people only read news starting with \"Click\".",
	"If you click on this news, your clicked news has a 50% chance of doubling and 50% to reset to 0.",
	"Click on this news to skip it immediately.",
	"In recent days, an idle game with only newstickers was rejected by galaxy.",
	"Now playing: Ether Strike - Akira Complex",
	"Update log: V20240211 - Added 60 newstickers and basic functions.",
	"2 - 2 - 2... ok... 6 - 6 - 24' - 32' - HOLD ON!... - 4 5 2 4 4 fff 3 ... NICE!!!",
	"You have got past the great Wall, but don't let that wall in your heart stop you. Get over it.",
	"Click this to get a +0.018% bonus to global speed. (Capped at 18%)",
	"Newsticker Idle has added another prestige layer: Storage! Reset your LocalStorage to acquire Storage space.",
	"Clicking on this news gives +1 extra read news! Works with privileges.",
	"Reading this news gives a wapping +50 clicks! Works with privileges.",
	"There might be upgrades you can buy somewhere.",
	"There might be/might have been a privilege here.",
	"Reading is harder to acquire than counting. Wise decision.",
	"Knowledge is power.",
	"Click Click",
	"Mouse is overpowered.",
	"dClick.onclick *= 2",
	"Now this game should finally be a normal idle game.",
	"Update log: V20240212a - Added 40 more newstickers, 6 Upgrades and a lot more content!",
	"Coming soon in 8 seconds...",
	"Do you know that the loading news is there just to prevent you from cheating?",
	"Update log: V20240212b - Added the first News Dimension.",
	"ND1 should finally work properly.",
	"Do you know that there is a length limit on newstickers?",
	"Click on this news to click on this news!",
	"Now playing: Dance with Silence - Camellia",
	"Now playing: Cryout - Ju_E",
	"Now playing: Destr0yer - Sakuzyo",
	"Now playing: Cyaegha - USAO",
	"Now playing: 777 - Rough$ketch",
	"Now playing: Aleph-0 - LeaF",
	"I have a crazy idea: 1st 1st News Dimensions Dimensions! It produces 1st News Dimensions!",
	"You might have to grind for hours just to see this one news.",
	"Click on this news to remove $1 from a random person's credit card.",
	"The 114th news. Interesting number.",
	"Click this to disassemble the newsticker for a paperclip.",
	"Don't click on everything you see.",
	"Think twice before clicking. There might be some debuffs here.",
	"Thanks for Matter Dimensions' cooperation! We have put 5 of its newstickers in the game.",
	"Thanks for Fallen_Cat's cooperation! We have put 3 of its newstickers in the game.",
	"There shouldn't be a single typo in the game. I never make tpyos.",
	"8 seconds left. And Counting...",
	"8 seconds from hell",
	"Our discord is at https://discord.gg/P2m29fv8bC. Join it!",
	"Do you know how much a newsticker can improve a game?",
	"My suggestion is that all idle games should have a newsticker.",
	"An idle game is not an idle game without newstickers.",
	"A newsticker. How original.",
	"Breaking News! A memory crystal collapsed and 616 miners lost their lives.",
	"Now playing: Upshift - Iriss Frantzz",
	"Retribution",
	"You don't need this, because you passively generate reads without even needing ND1.",
	"WHAT THE HELL THIS IS TOO FAST",
	"Passive generation is good. I designed it to be good. -l319836",
	"Passive generation is even better. How do I know? -l319836",
	"Gotta go fast. -ND1",
	"Update log: V20240214a - Added 40 more newstickers and 4 new upgrades.",
	"This news message is removed because of malfunction in the newsticker.",
	"Did you notice that message which is removed? Actually that's because it's too long to fit in the newsticker.",
	"Update log: V20240224 - Added notations.",
	"Nice stories. -ACrazySteve",
	"The correct order of the stories is not what you think.",
	"This is meaningless. -xdy",
	"Glitter. Vomitus. Neon. -G.V.N.",
	"This is the story for two characters of misery",
	"If sin(x)=2, then what is sin(2x)?",
	"Tome 1 of 4: How to generate extra paperclips.",
	"Tome 2 of 4: How to read and click faster.",
	"Tome 3 of 4: How to buff the 1st News Dimensions.",
	"Tome 4 of 4: How to unlock the next story.",
	"Well, this news message is used to increase the total news number by 1.",
	"Oh yeah! You have finally got past the big wall.",
	"Who will play a game with badly written stories?",
	"This is a Wens Message!",
	"It is the year 2085. l319836 is working on the 616th side story.",
	"Empty advertisement slot",
	"Ad closed by Adblocker",
	"The author sucks. -xdy",
	"Too many paperclips brrrrrrrr",
	"This is a Wens Message!",
	"GOTORN.JSADDNSTKTO200INTOT, THNWRITENXTPPRCLPSTG",
	"This game is supported by Sparkle_7.",
	"Consider buying Newsticker Idle Pro to disable ads forever!",
	"Buy Newsticker Idle Pro NOW!!! Click this to skip the next 5 news.",
	"Adinplay has ads that close after 5 secs. In this game, you have to wait for 8. Lame.",
	"This is it. An agile sprint. 5 news in a minute. Speedrun.",
	"This is a Meows Nessage!",
	"This is a News Massage!",
	"Now playing: Infinite Strife, - BlackY/Yooh/siromaru",
	"Do you want to play Mews Dash?",
	"Kick me with the HARDCORE!!!",
	"Click this to make the next 5 news messages randomize twice before picking it!",
	"The story might end somewhere, but that's definitely not the end of the game.",
	"Click this to obtain a free 1st \"1st Mews Dimension\" Dimension!",
	"Click this to get a +0.099% bonus to global speed. Does not softcap.",
	"Are you comfortable under hardcaps?",
	"Warning: High voltage. Do not get close to this newsticker without hardcaps easily.",
	"=>#<= This is the 30000th character in the code of the game! Hooray!",
	"Breaking news! Scientists have just declared Idle Game Developer a new species!",
	"Optic Coin - Casio",
	"Make a wish if you see this. A celestial may see it.",
	"BOF:XV was held in 2019.",
	"Tell me what scares you",
	"A plane crashed due to newstickers floating in the air.",
	"I hate myself. This is not a reference. I hate myself.",
	"The feeling of free falling is great. - some cat",
	"Now playing: Avantgarde - Raimukun",
	"Do you know? I am writing this news message in IT class!",
	"... You are right ...",
	"Hello. -Sparkle_7",
	"This is a newsticker.",
	"This news message is blocked due to impolite language.",
	"Update log: V20240304 - Added 60 more newstickers.",
	"You are cute. This game is cute.",
	"Bee ti tsai nar! Bee ti!",
	"zywxvutsrqponmlkjihgfedcba",
	"2NO2 + H2O === HNO2 + HNO3",
	"--^v--^v--^v-----------------^v^v^v^v^v-",
	"This is the 198th news! Go on!!!",
	"Now playing: World Ender - sasakure.UK/TJ.Hangneil",
	"Wow! I want to be enlightened by a News Dimensions Autobuyer.",
	"Update log: V20240320 - Added 50 more newstickers. And Endgame.",
	"This is a news message belonging to the endgame!",
	"Generators. Ha. THey are really a good mechanism.",
	"The year is 2024, l319836 is still agile sprinting to make more news.",
	"Because of unlocking too much news, you have been placed under constant overseeing.",
	"FAR FAR FAR FAR -Pentiment",
	"The content here is a little strange.",
	"Click this to lock the story.",
	"Tome 5 of 4: How to make stack overflow legit.",
	"Tome 6 of 4: How to master the art of clicking.",
	"Tome 7 of 4: How to get a free autoclicker.",
	"Tome 8 of 4: How to write more tomes without Synergism.",
	"Tome 9 of 4: How to make ND1 produce even more.",
	"Tome 10 of 4: Okay this is definitely the last tome",
	"The author has finally finished his game. -l319836 at 11:05pm",
	"just an ordinary news passing by",
	"Stop! the previous news message is sussy. We don't think it belongs here.",
	"bilibilibilibilibilinilibilinilibilinili <-- the author practising axis interaction",
	"Do you know? The local storage variable names are written randomly.",
	"There is nothing left except the news.",
	"If you see this news, you are very close to the endgame. Come on.",
	"This is a Neeeeeeeews Meeeeeeeessageeeeeeee.",
	"Do you rmmbr th typr in cooki clickr?",
	"I sleep later than an average person, but not most of the people I see. Interesting.",
	"mustache --> must ache",
	"I think I am finishing 50 news in a night! What progress!",
	"It it the year 2024. l319836 is still agile sprinting to make it to the end of the game.",
	"If you reach the endgame, you can send your own news to me.",
	"What HOW am I able to come up with so many news messages in a hour",
	"A newsticker passes in 8 seconds of gametime. You must produce one per 8 seconds to avoid running out of stock.",
	"The BPM of Tempestissimo - t+pazolite will guide you forever.",
	"A newsticker. How original. Wait, isn't that taken?",
	"Imagine a newsticker which is empty!",
	"THe BPM of Aegleseeker - Silentroom/Frums will guide you eternally."
);
var dejavu=0,pendingWipe=0,cheat=0;
var totalNewsRead=0,totalNewsClicked=0;
var paperclip=0,currentCapTier=0;
var ND1=0,PG=0,awa=0,Gened=0;
var storyUnlocked=0,storyShown=0;
var anomaly=0;
var nt85clicked=0,i50clicked=0;
var currentStage=0;
var interacted=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
function icrr(num){
	var incr=num;
	if(interacted[10])incr*=2;
	if(interacted[11])incr*=2;
	if(interacted[12])incr*=2;
	if(interacted[17])incr*=1.5;
	if(interacted[18])incr*=2;
	if(interacted[32])incr*=Math.pow(2.5+0.5*interacted[39],paperclip-15);
	incr*=((dejavu*10)+1);
	totalNewsRead+=incr;
	totalNewsRead=Math.floor(totalNewsRead+0.1);
}
function icrc(num){
	var incr=num;
	if(interacted[13])incr*=2;
	if(interacted[14])incr*=2;
	if(interacted[15])incr*=2;
	if(interacted[19])incr*=1.5;
	if(interacted[20])incr*=2;
	if(interacted[32])incr*=Math.pow(2.5+0.5*interacted[39],paperclip-15);
	incr*=((dejavu*10)+1);
	totalNewsClicked+=incr;
	totalNewsClicked=Math.floor(totalNewsClicked+0.1);
}
function calcr(){
	var tmp1=Math.pow(2+0.1*(interacted[34]+interacted[35]+interacted[36]+interacted[37]+interacted[38]+interacted[44]+interacted[45]+interacted[46]),ND1-1);
	if(interacted[17])tmp1*=1.5;
	if(interacted[18])tmp1*=2;
	if(interacted[32])tmp1*=Math.pow(2.5+0.5*interacted[39],paperclip-15);
	tmp1*=((dejavu*10)+1);
	return Math.floor(tmp1);
}
function calcc(){
	var tmp2=3*Math.pow(2+0.1*(interacted[34]+interacted[35]+interacted[36]+interacted[37]+interacted[38]+interacted[44]+interacted[45]+interacted[46]),ND1-1);
	if(interacted[19])tmp2*=1.5;
	if(interacted[20])tmp2*=2;
	if(interacted[32])tmp2*=Math.pow(2.5+0.5*interacted[39],paperclip-15);
	tmp2*=((dejavu*10)+1);
	return Math.floor(tmp2);
}
function passed(){
	return Math.floor(awa);
}
function tot(){
	var tmp2=10000*Math.pow(100,Gened-1);
	return Math.floor(tmp2);
}
function pgcost(){
	var tmp2=200000*Math.pow(1.5e+20,Math.pow(1.075-interacted[33]*0.009,PG)-1);
	return Math.floor(tmp2);
}
function BuyND1(){
	if((totalNewsClicked>=2400*Math.floor(Math.pow(3,ND1)))&&(totalNewsRead>=800*Math.floor(Math.pow(3,ND1)))){
		totalNewsClicked-=2400*Math.floor(Math.pow(3,ND1));
		totalNewsRead-=800*Math.floor(Math.pow(3,ND1));
		ND1++;
	}
	if(interacted[42]==0)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyND1()\"\>"+"Click here to buy 1st News Dimensions. Amount: "+nt(ND1)+" Prod.: +"+nt(calcr())+"R/s +"+nt(calcc())+"C/s. Cost: "+nt(800*Math.floor(Math.pow(3,ND1)))+"R "+nt(2400*Math.floor(Math.pow(3,ND1)))+"C."+"</div>";
}
function BuyGEN(){
	if((totalNewsClicked>=3*pgcost())&&(totalNewsRead>=pgcost())){
		totalNewsClicked-=3*pgcost();
		totalNewsRead-=pgcost();
		PG++;
	}
	if(interacted[43]==0)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyGEN()\"\>"+"Click here to upgrade your Generator. Level: "+nt(PG)+" Progress: +"+nt(passed())+" of "+nt(tot())+"seconds. Cost: "+nt(pgcost())+"R "+nt(3*pgcost())+"C."+"</div>";
}
setInterval(function(){
	totalNewsClicked+=calcc();
	totalNewsRead+=calcr();
	document.getElementById("s1").innerHTML="You have read a total of "+nt(totalNewsRead)+" news.";
	document.getElementById("s2").innerHTML="You have clicked on a total of "+nt(totalNewsClicked)+" news.";
	document.getElementById("s3").innerHTML="You have "+paperclip+" paperclips. You need another "+(5+5*currentCapTier-paperclip)+" to unlock more news. Current News size: "+Math.min(rNCount,Math.floor((50+50*currentCapTier)+0.1));
	ShowTab();
},1000/((dejavu*10)+1));
function Dim(){
	if(anomaly==8)anomaly=9;
	else if(anomaly==7)anomaly=8;
	else if(anomaly==15){
		anomaly=16;
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\"\>"+"Anomaly"+"</div>";
	}
	else anomaly=0;
	timeleft=1e+14;
	document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyND1()\"\>"+"Click here to buy 1st News Dimensions. Amount: "+nt(ND1)+" Prod.: +"+nt(calcr())+"R/s +"+nt(calcc())+"C/s. Cost: "+nt(800*Math.floor(Math.pow(3,ND1)))+"R "+nt(2400*Math.floor(Math.pow(3,ND1)))+"C."+"</div>";
}
function Gen(){
	if(anomaly==4)anomaly=5;
	else if(anomaly==3)anomaly=4;
	else if(anomaly==11){
		anomaly=12;
		currentPage=15;
		ShowStory(15);
	}
	else anomaly=0;
	timeleft=1e+14;
	document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"BuyGEN()\"\>"+"Click here to upgrade your Generator. Level: "+nt(PG)+" Progress: +"+nt(passed())+" of "+nt(tot())+". Cost: "+nt(pgcost())+"R "+nt(3*pgcost())+"C."+"</div>";
}
function Ex(){
	if(anomaly==5){
		anomaly=6;
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(-1)\"\>"+"No solution."+"</div>";
	}
	else if(anomaly==25)anomaly=26;
	else if(anomaly==24)anomaly=25;
	else if(anomaly==17)anomaly=18;
	else anomaly=0;
	timeleft=8000;
	if(anomaly!=6)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\"\>"+"Newsticker Idle is loading... (This will take 8 seconds.)"+"</div>";
}
setInterval(function(){
	if(pendingWipe==1){
		pendingWipe=0;
		Wipe();
		Load();
	}
	if(cheat==1){
		cheat=0;
		totalNewsRead=1000000;
		totalNewsClicked=3000000;
		paperclip=20;
		ND1=10;
		storyUnlocked=13;
		currentCapTier=5;
		interacted=Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
		Save();
		Load();
	}
	awa+=Math.floor(Math.pow(100,PG-1)*(1+9*dejavu));
	if(awa>=tot()){
		Gened++;
		paperclip++;
	}
	if(PG==0&&totalNewsClicked==0&&totalNewsRead==0&&indicator==0)intro(0);
	if(PG==0&&totalNewsClicked==15&&indicator==0)intro(6);
	if(PG==1&&indicator==1){
		indicator=2;
		intro(10);
	}
	if(storyUnlocked>0&&indicator==3){
		indicator=4;
		intro(12);
	}
	if(interacted[42])BuyND1();
	if(interacted[43])BuyGEN();
	var cs=0;
	if(paperclip<5)cs=1;
	else if(paperclip<10)cs=2;
	else if(paperclip<15)cs=3;
	else if(paperclip<20)cs=4;
	else if((interacted[34]+interacted[35]+interacted[36]+interacted[37]+interacted[38]+interacted[44]+interacted[45]+interacted[46])<8)cs=5;
	else if(totalNewsClicked<1e+303)cs=6;
	else cs=7;
	if(cs>currentStage)currentStage=cs;
	currentCapTier=Math.floor(paperclip/5+0.1);
	var currentCap=Math.floor((50+50*currentCapTier)+0.1);
	if(timeleft<=0&&currentStage<7){
		rnd=Math.floor(Math.random() * Math.min(rNCount,currentCap));
		if(rnd>=46&&rnd<=52&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to get 1 free paperclip!"+"</div>";
		if(rnd==45&&(!interacted[rnd-45])&&(interacted[21]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to get 1 free paperclip!"+"</div>";
		else if(rnd==53&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to buy 1 paperclip for 10000 read news!"+"</div>";
		else if(rnd==54&&(!interacted[rnd-45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to buy 1 paperclip for 30000 clicks!"+"</div>";
		else if(rnd==90&&(!interacted[rnd-80]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 100 reads only!"+"</div>";
		else if(rnd==91&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 200 reads only!"+"</div>";
		else if(rnd==92&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x reads by reading for 400 reads only!"+"</div>";
		else if(rnd==93&&(!interacted[rnd-80]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 300 clicks only!"+"</div>";
		else if(rnd==94&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 600 clicks only!"+"</div>";
		else if(rnd==95&&(!interacted[rnd-80])&&(interacted[rnd-81]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to acquire the privilege of getting 2x clicks by clicking for 1200 clicks only!"+"</div>";
		else if(rnd==99&&(!interacted[16])&&(interacted[12])&&(interacted[15]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to Unlock the first News Dimension!"+"</div>";
		else if(rnd==130&&(!interacted[17]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to get a 1.5x boost on reads from all sources for FREE!"+"</div>";
		else if(rnd==131&&(!interacted[18])&&(interacted[17]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to get a 2x boost on reads from all sources for FREE!"+"</div>";
		else if(rnd==132&&(!interacted[19]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to get a 1.5x boost on clicks from all sources for FREE!"+"</div>";
		else if(rnd==133&&(!interacted[20])&&(interacted[19]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to get a 2x boost on clicks from all sources for FREE!"+"</div>";
		else if(rnd==3&&(!interacted[21]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock the story."+"</div>";
		else if(rnd==57&&(!interacted[22]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock 2 more stories."+"</div>";
		else if(rnd==103&&(!interacted[23]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock 3 more stories."+"</div>";
		else if(rnd==153&&(!interacted[24]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock 3 more stories."+"</div>";
		else if(rnd==232&&(!interacted[52]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock the ending of the story."+"</div>";
		else if(rnd==147&&(!interacted[25]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to gain 3 reads and 10 clicks per click!!!"+"</div>";
		else if(rnd==157&&(!interacted[31])&&(interacted[16]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock paperclip generators."+"</div>";
		else if(rnd>=142&&rnd<=146&&(!interacted[rnd-116])&&(interacted[rnd-117]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click here to get 1 free paperclip!"+"</div>";
		else if(rnd==158&&(!interacted[32])&&PG>=1)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to receive a 2.5x boost per paperclip past 15!"+"</div>";
		else if(rnd==159&&(!interacted[33])&&PG>=2)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Generator too expensive? Click this to reduce the cost scaling by 12%!"+"</div>";
		else if(rnd==160&&(!interacted[39])&&PG>=5)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to increase that 2.5x boost stuff to 3x!"+"</div>";
		else if(rnd==161&&(!interacted[40])&&PG>=1)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Increase global speed by 18%. You definitely want this."+"</div>";
		else if(rnd==162&&(!interacted[41])&&PG>=5)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Increase global speed by 18%. Again?"+"</div>";
		else if(rnd==164&&(!interacted[50]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"+0.00045% global speed per click. You need an autoclicker."+"</div>";
		else if(rnd==163&&(!interacted[34])&&PG>=1)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.0 -> 2.1"+"</div>";
		else if(rnd==168&&(!interacted[35])&&PG>=2&&(interacted[34]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.1 -> 2.2"+"</div>";
		else if(rnd==165&&(!interacted[36])&&PG>=3&&(interacted[35]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.2 -> 2.3"+"</div>";
		else if(rnd==166&&(!interacted[37])&&PG>=4&&(interacted[36]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.3 -> 2.4"+"</div>";
		else if(rnd==167&&(!interacted[38])&&PG>=5&&(interacted[37]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.4 -> 2.5"+"</div>";
		else if(rnd==211&&(!interacted[44])&&PG>=6&&(interacted[38]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.5 -> 2.6"+"</div>";
		else if(rnd==212&&(!interacted[45])&&PG>=7&&(interacted[44]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.6 -> 2.7"+"</div>";
		else if(rnd==213&&(!interacted[46])&&PG>=8&&(interacted[45]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to make ND1 Effect +0.1! Current effect: 2.7 -> 2.8"+"</div>";
		else if(rnd==199&&(!interacted[42]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock the ND1 Autobuyer!"+"</div>";
		else if(rnd==202&&(!interacted[43]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Click this to unlock the Paperclip Generator Autobuyer!"+"</div>";
		else if(rnd==208&&(!interacted[47])&&PG>=1)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Clicking gives +0.5 (game) seconds of PG Production!"+"</div>";
		else if(rnd==209&&(!interacted[48])&&PG>=3&&(interacted[47]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Clicking gives +0.5 (game) seconds of PG Production!"+"</div>";
		else if(rnd==210&&(!interacted[49])&&PG>=5&&(interacted[48]))document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+"Clicking gives +0.5 (game) seconds of PG Production!"+"</div>";
		else document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">"+rN[rnd]+"</div>";
		timeleft+=8000/((dejavu*10)+1);
		if(currentStage==6)timeleft/=Math.log10(totalNewsClicked);
		var increment=1;
		if(rnd==61)increment*=10;
		icrr(increment);
		increment=1;
		if(rnd==88)icrc(50);
		document.getElementById("s1").innerHTML="You have read a total of "+nt(totalNewsRead)+" news.";
		Save();
	}
	else{
		rnd=Math.floor(Math.random() * 20);
		if(rnd<=1)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\"></div>";
		else document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews("+rnd+")\">END</div>";
		document.getElementById("s1").innerHTML="";
		document.getElementById("s2").innerHTML="";
		document.getElementById("s3").innerHTML="";
	}
	if(currentStage==1)document.getElementById("test").innerHTML="Current Stage: Beginning";
	if(currentStage==2)document.getElementById("test").innerHTML="Current Stage: Exploration";
	if(currentStage==3)document.getElementById("test").innerHTML="Current Stage: Production";
	if(currentStage==4)document.getElementById("test").innerHTML="Current Stage: Expansion";
	if(currentStage==5)document.getElementById("test").innerHTML="Current Stage: Inflation";
	if(currentStage==6)document.getElementById("test").innerHTML="Current Stage: DESTRUCTION";
	if(currentStage==7)document.getElementById("test").innerHTML="Current Stage: END";
	timeleft-=50;
},50);
function executeNews(num){
	var increment=1;
	if(num==60)increment*=3;
	if(interacted[25])increment*=10;
	icrc(increment);
	increment=1;
	if(interacted[25])icrr(3*increment);
	if(interacted[50]){
		i50clicked++;
		if(i50clicked<=60000)dejavu+=5e-7;
	}
	if(interacted[47])awa+=Math.floor(20*Math.pow(100,PG-1));
	if(interacted[48])awa+=Math.floor(20*Math.pow(100,PG-1));
	if(interacted[49])awa+=Math.floor(20*Math.pow(100,PG-1));
	if(num==-1){
		anomaly=7;
		HideStory();
	}
	else if(num==178&&anomaly==0)anomaly=1;
	else anomaly=0;
	if(num==87)icrr(increment);
	if(num==85){
		nt85clicked++;
		if(nt85clicked<=1000)dejavu+=2e-5;
	}
	if(num==173)dejavu+=0.00001;
	if(num==3){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		if(!interacted[21])storyUnlocked=2;
		interacted[21]=1;
		Save();
		Load();
	}
	if(num==57){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		if(!interacted[22])storyUnlocked+=2;
		interacted[22]=1;
	}
	if(num==157&&(interacted[16])){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[31]=1;
		intro(16);
		Save();
		Load();
	}
	if(num==103){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		if(!interacted[23])storyUnlocked+=3;
		interacted[23]=1;
	}
	if(num==153){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		if(!interacted[24])storyUnlocked+=3;
		interacted[24]=1;
	}
	if(num==232){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		if(!interacted[52])storyUnlocked+=3;
		interacted[52]=1;
	}
	if(num==147){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[25]=1;
	}
	if(num==207){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\" onclick=\"executeNews(207)\">"+"Joke! Of course you cannot lock it."+"</div>";
	}
	if(num==199){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[42]=1;
	}
	if(num==202){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[43]=1;
	}
	if(num==158&&(!interacted[32])&&PG>=1){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[32]=1;
	}
	if(num==159&&(!interacted[33])&&PG>=2){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[33]=1;
	}
	if(num==160&&(!interacted[39])&&PG>=5){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[39]=1;
	}
	if(num==161&&(!interacted[40])&&PG>=1){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[40]=1;
		dejavu+=0.02;
	}
	if(num==162&&(!interacted[41])&&PG>=5){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[41]=1;
		dejavu+=0.02;
	}
	if(num==163&&(!interacted[34])&&PG>=1){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[34]=1;
	}
	if(num==168&&(!interacted[35])&&PG>=2&&(interacted[34])){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[35]=1;
	}
	if(num==165&&(!interacted[36])&&PG>=3&&(interacted[35])){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[36]=1;
	}
	if(num==166&&(!interacted[37])&&PG>=4&&(interacted[36])){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[37]=1;
	}
	if(num==167&&(!interacted[38])&&PG>=5&&(interacted[37])){
		document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		interacted[38]=1;
	}
	if(num==45){
		if((!interacted[num-45])&&(interacted[21])){
			paperclip++;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		}
		interacted[num-45]=1;
	}
	if(46<=num&&num<=52){
		if(!interacted[num-45]){
			paperclip++;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		}
		interacted[num-45]=1;
	}
	if(rnd>=142&&rnd<=146&&(!interacted[rnd-116])&&(interacted[rnd-117])){
		if(!interacted[num-116]){
			paperclip++;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+rN[num]+"</div>";
		}
		interacted[num-45]=1;
	}
	if(num==53&&(!interacted[num-45])){
		if(totalNewsRead>=10000){
			totalNewsRead-=10000;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			paperclip++;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==54&&(!interacted[num-45])){
		if(totalNewsClicked>=30000){
			totalNewsClicked-=30000;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			paperclip++;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==90&&(!interacted[num-80])){
		if(totalNewsRead>=100){
			totalNewsRead-=100;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==91&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsRead>=200){
			totalNewsRead-=200;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==92&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsRead>=400){
			totalNewsRead-=400;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==93&&(!interacted[num-80])){
		if(totalNewsClicked>=300){
			totalNewsClicked-=300;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==94&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsClicked>=600){
			totalNewsClicked-=600;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==95&&(!interacted[num-80])&&(interacted[num-81])){
		if(totalNewsClicked>=1200){
			totalNewsClicked-=1200;
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"Thank you for the purchase!"+"</div>";
			interacted[num-80]=1;
		}
		else{
			document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"You cannot afford it!"+"</div>";
		}
	}
	if(num==114)document.getElementById("main1").innerHTML="<div id=\"rn\" class=\"center\">"+"We won't let you do that, otherwise you will be stuck."+"</div>";
	if(rnd==99&&(!interacted[16])&&(interacted[12])&&(interacted[15])){
		interacted[16]=1;
		intro(15);
	}
	if(num==78)totalNewsClicked*=Math.floor(Math.random()*2)*2;
	if(num==79)timeleft=0;
	currentCapTier=Math.floor(paperclip/5+0.1);
	ShowTab();
	document.getElementById("s1").innerHTML="You have read a total of "+nt(totalNewsRead)+" news.";
	document.getElementById("s2").innerHTML="You have clicked on a total of "+nt(totalNewsClicked)+" news.";
	document.getElementById("s3").innerHTML="You have "+paperclip+" paperclips. You need another "+(5+5*currentCapTier-paperclip)+" to unlock more news. Current News size: "+Math.min(rNCount,Math.floor((50+50*currentCapTier)+0.1));
	Save();
}