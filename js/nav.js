var search=document.querySelector("#search");
var searchInput=document.querySelector("#searchInput");
var flag=true;
search.onclick=function(e){
	if(flag){
		searchInput.style.width="260%";
		searchInput.style.paddingLeft="5px";
		flag=false;
	}else{
		searchInput.style.width=0;
		searchInput.style.paddingLeft="0px";
		flag=true;
	}
}
searchInput.onfocus=function(){
	flag=true;
}
