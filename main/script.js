function filt(me){
	document.getElementById("input").value = "";
	var columns = document.getElementsByClassName("column");
	for(var i=1;i<columns.length;i++){
		columns[i].innerHTML = "";}
	var tags = document.getElementsByClassName("tag");
	var cards = document.getElementsByClassName("card");
	if(me.className == "tag"){
		for(var i=0;i<tags.length;i++){
			tags[i].className = "tag";
			if(tags[i].innerHTML == me.innerHTML){tags[i].className += " chosen";}}
		for(var i=2;i<cards.length;i++){
			cards[i].style.display = "block";
			if(cards[i].innerHTML.match(me.innerHTML)==null){cards[i].style.display = "none";}}}
	else{
		for(var i=0;i<tags.length;i++){
			tags[i].className = "tag";}
		for(var i=2;i<cards.length;i++){
			cards[i].style.display = "block";}}
	arrenge();
}
function reset(){
	document.getElementById("input").value = "";
	var tags = document.getElementsByClassName("tag");
	for(var i=0;i<tags.length;i++){
		tags[i].setAttribute("onclick","filt(this);");
		tags[i].className = "tag";}
	var cards = document.getElementsByClassName("card");
	for(var i=2;i<cards.length;i++){
		cards[i].style.display = "block";}
	var columns = document.getElementsByClassName("column");
	for(var i=1;i<columns.length;i++){
		columns[i].innerHTML = "";}
	arrenge();
}
function search(){
	var columns = document.getElementsByClassName("column");
	for(var i=1;i<columns.length;i++){
		columns[i].innerHTML = "";}
	var tags = document.getElementsByClassName("tag");
	for(var i=0;i<tags.length;i++){
		tags[i].className = "tag";}
	var keyword = document.getElementById("input").value;
	var cards = document.getElementsByClassName("card");
	for(var i=2;i<cards.length;i++){
		cards[i].style.display = "none";
		var childs = cards[i].childNodes;
		for(var j=0;j<childs.length;j++){
			if(childs[j].innerHTML){
				if(childs[j].innerHTML.includes("br")){
					continue;}
				else{
					if(childs[j].innerHTML.toLowerCase().includes(keyword.toLowerCase())){
						cards[i].style.display = "block";break;}}
	}}}
	arrenge();
}
function arrenge(){
	var cards = document.getElementsByClassName("card");
	var j = 3;
	var k = [[],[]];
	for(var i=2;i<cards.length;i++){
		if(cards[i].style.display != "none"){
			j += 1;
			switch(j%2){
				case 1:k[1]+="<div class='card'>"+cards[i].innerHTML+"</div>";break;
				case 0:k[0]+="<div class='card'>"+cards[i].innerHTML+"</div>";}}
	}
	document.getElementsByClassName("column")[1].innerHTML = k[0];
	document.getElementsByClassName("column")[2].innerHTML = k[1];
	window.scrollTo(0,0);
}
function cme(me){
	me.childNodes[1].className = "card-h1 h1ho";
}
function cml(me){
	me.childNodes[1].className = "card-h1";
}

function aprev(){
	document.getElementById("asel").selectedIndex -= 1;seljump();}
function anext(){
	document.getElementById("asel").selectedIndex += 1;seljump();}
function seljump(){
	document.getElementById("abtn1").removeAttribute("hidden");
	document.getElementById("abtn2").removeAttribute("hidden");
	var asel = document.getElementById("asel");
	var atext = document.getElementsByClassName("atext");
	for(var i=0;i<atext.length;i++){
		if(i==asel.selectedIndex){
			atext[i].style.display = "block";}
		else{
			atext[i].style.display = "none";}
	}
	switch(asel.selectedIndex){
		case 0:document.getElementById("abtn1").setAttribute("hidden",true);break;
		case atext.length-1:document.getElementById("abtn2").setAttribute("hidden",true);
	}
	window.scrollTo(0,0);
}

function showpic(me){
	var pic = me.nextElementSibling;
	if(pic.style.display == "none"){pic.style.display = "block";me.innerHTML = "隐藏图片";}
	else{pic.style.display = "none";me.innerHTML = "显示图片";}
}
