console.log("code everyday ");

'use strict'
/*------------------------------------------------------navigation menu top nav------------------*/
class navigation extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`
<nav>
		<div class='navigation' id='navigation'>
  <div class="logo"><img class="logo-img"src="logo2.png" alt="Void-Marketplace  Official logo" title="pls click  to refresh the window"></div>
  <div><p class="site-name" id="site-name">Void Marketplace</p></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
   <div></div>
  <div></div>
  <div class="nav-menu"><i class="bi bi-list" id="b-menu"></i></div>
         </div>
</nav>`
}};

customElements.define("navigation-menu",navigation);

/*-----------------------------------------------------navigation menu top nav  end------------------*/
const burgerMenu=document.getElementById("b-menu");

      burgerMenu.addEventListener("click",justFunc);
	  
	  function justFunc(){
		  let element=document.getElementById("side-navs")
              element.style.visibility="visible";
			  burgerMenu.style.visibility="hidden";
				};
				
const exitSidenav=document.getElementById("exit-nav");

      exitSidenav.addEventListener("click",justAfunc);
	  
	  function justAfunc(){
		  let element=document.getElementById("side-navs")
              element.style.visibility="hidden";
			  burgerMenu.style.visibility="visible";
			  
				};
				
				
				
/*--------------------------------------------------------main content one and two----------*/

class mainContent extends  HTMLElement{
	connectedCallback(){
		this.innerHTML=`
		<div class="content-holder">
  <div class="content-one">
     <h1 class="headline" id="headline" >Let us <br> strike Your Fancy!</h1>
     <p class="description" id='description'>Found anything interesting yet?</p>
     <button id="b-one">Explore</button>
     <p id="button-prompt">click the Explore Button to see Offers</p>
	 
  </div>
  
  <div class="content-two">
  <aside>
     <diV class="cta-aside" id="cta-aside"><h1 class="aside-head"id="aside-head" >this Month's top3</h1>
	 <ul class="top-collection" id="top-collection"> 
	 
	 <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="#" alt="" title="" />
	                          <h1 class="cta-tittle" id="cta-tittle">Tthis is  the Title</h1>
                        	 <p class="top-ul-desc" id="one">Lorem ipsum dolor sit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed </p>
     </li>
	 
	  <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="#" alt="" title="" />
	                         <h1 class="cta-tittle" id="cta-tittle">Tthis is  the Title</h1>
                        	 <p class="top-ul-desc" id="two">Lorem ipsum dolor sit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed </p>
     </li>
	 
	  <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="#" alt="" title="" />
	                          <h1 class="cta-tittle" id="cta-tittle">Tthis is  the Title</h1>
                        	 <p class="top-ul-desc" id="three">Lorem ipstit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed </p>
     </li>
	
	 
	 </ul>
	 </div>
  </aside>
  </div>
        </div>
		

		`
	}};
customElements.define("main-contents",mainContent);
/*----------------------------------------------------------------footer componenet------------------------------------*/
class footer extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`		
<div class="footer">
<p id="footer-desc">site author:allen jester aka Rudy |
   site name :Void  Marketplace |
    all rights reserved 2023</p>
</div>		
		`
	}};
customElements.define('fotter-component',footer);
/*----------------------------------------------------------------footer componenet end------------------------------------*/

window.onload=function(){                             /*-------i dont know why but addEventlistener doesnt seem t work ---------*/
	let head=document.getElementById('headline');
	head.style.opacity="1.0";
	head.style.color="black";
	let desc=document.getElementById('description');
	    desc.style.opacity="1.0";
		desc.style.color="black";
	let bOne=document.getElementById("b-one");
	    bOne.style.opacity="1.0";
		console.log("onlad elemets works ");
};

/*--------------------------------------b-one hover   navigation site explore button----------*/
/*----------------------------------------------------------------------------------------------the whole hover changing bg-emage stuff goes by in this block-------------------*/ 
let onHover=document.getElementById("b-one");
 onHover.addEventListener("mouseover",hoverFunc);                           /*----------------mouse over --------------------------------*/
         function hoverFunc(){
	 document.getElementById("button-prompt").style.opacity="1.0";	
	 
  let siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site-img-purple.png')";
	   siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";
	let siteName=document.getElementById("site-name").style.color="lightblue";
	    

	document.getElementById("headline").style.color="lightblue";
	
	if(window.matchMedia("(orientation: portrait)").matches){                   /*-------if portrait---------------------------------*/
	let	siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site-image-purpleportrait.png')";   
	  siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";
		
	}
	  
  }
 
 onHover.addEventListener("mouseout",hoverFunc2);                            /*----------------mouseout --------------------------------*/
   function hoverFunc2(){
	   document.getElementById("button-prompt").style.opacity="0.0";
	   let siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site.png')";
	   siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";
		 siteBackground.style.transitionDuration="5s";
		 
	document.getElementById("headline").style.color="black";
		 let siteName=document.getElementById("site-name").style.color="black";
		 
		 if(window.matchMedia("(orientation: portrait)").matches){                 /*-------if landscape---------------------------------*/
	let	siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site-image-portrait.png')";
	  siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";
		 
   }
   }
   
   if(window.matchMedia("(orientation: landscape)").matches){                 /*-------if landscape---------------------------------*/
	function landScape(){let	siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site.png')";
	  siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";	 }};
   
   console.log("landscape image  succesfuly re rendered in LANSCAPE Damn it i love my self");
   
     if(window.matchMedia("(orientation: landscape)").matches){                 /*-------if PORTRAIT---------------------------------*/
	function porTrait(){let	siteBackground=document.getElementById("body");
      siteBackground.style.background="url('site-image-portrait.png')";
	  siteBackground.style.backgroundSize="cover";
	    siteBackground.style.backgroundRepeat="no-repeat";
		 siteBackground.style.backgroundPosition="center";	 }};
  
   console.log("portrait image  succesfuly re rendered in PORTRAIT Damn it i love my self");
   
   
/*----------------------------------------------------------------------------------------------the whole hover changing bg-emage stuff goes by in this block-------------------*/   
   
/*------------------- cta aside or  right side elemet---------------------------------------------------------------*/
let asideHover=document.getElementById("cta-aside");
    asideHover.addEventListener("mouseover",asideFunc);
	function asideFunc(){
	let head=document.getElementById("aside-head");
		head.style.color="gold";
		head.style.fontSize="x-large";
		head.style.textShadow="-2px -2px 1px red";
		
	const theTitle=document.getElementsByClassName("cta-tittle");
	for(i=0;i<theTitle.length;i++){
	theTitle[i].style.background="yellow";
	}
		
	};
   asideHover.addEventListener("mouseout",asideFunc2);
   function asideFunc2(){
	  let heads=document.getElementById("aside-head"); 
	      heads.style.color="black";
		  heads.style.fontSize="x-large";
		  heads.style.textAlign="center";
		  heads.style.textShadow="-2px -2px 1px transparent";
		const theTitle=document.getElementsByClassName("cta-tittle");
	for(i=0;i<theTitle.length;i++){
	theTitle[i].style.background="transparent";
   };
   };

/*------------------hover on top navigation bar ---------------------------------*/
 
 let navMenu=document.getElementById("navigation");
     navMenu.addEventListener("mouseover",navsMenu);
	 function navsMenu(){
		 let siteName=document.getElementById("site-name");
		     siteName.style.color="fuchsia";
		let bMenu=document.getElementById("b-menu");
            bMenu.style.background="rgba(0, 0, 0, 0.5)";
            bMenu.style.color="red";			
			
			 
	navMenu.addEventListener("mouseout",navssMenu);
function navssMenu(){
	let siteName=document.getElementById("site-name");
		     siteName.style.color="black";
			let bMenu=document.getElementById("b-menu");
            bMenu.style.background="transparent";
            bMenu.style.color="black";	
}	 
	 };


	 