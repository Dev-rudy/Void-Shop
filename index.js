console.log("code everyday ");

'use strict'
/*------------------------------------------------------navigation menu top nav------------------*/
class navigation extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`
<nav>
		<div class='navigation'>
  <div class="logo"><img class="logo-img"src="logo2.png" alt="Void-Marketplace  Official logo" title="pls click  to refresh the window"></div>
  <div></div>
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
     <diV class="cta-aside" id="cta-aside"><h1 class="aside-head"id="aside-head">this Month's top3</h1></div>
  </aside>
  </div>
        </div>`
	}};
customElements.define("main-contents",mainContent);



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


let onHover=document.getElementById("b-one");
 onHover.addEventListener("mouseover",hoverFunc);
         function hoverFunc(){
	 document.getElementById("button-prompt").style.opacity="1.0";	 }
 
 onHover.addEventListener("mouseout",hoverFunc2);
   function hoverFunc2(){
	   document.getElementById("button-prompt").style.opacity="0.0";
   }
/*------------------- ---------------------------------------------------------------*/
let asideHover=document.getElementById("cta-aside");
    asideHover.addEventListener("mouseover",asideFunc);
	function asideFunc(){
	let head=document.getElementById("aside-head");
		head.style.color="gold";
		head.style.fontSize="x-large";
		head.style.textShadow="-2px -2px 1px red";
	};
   asideHover.addEventListener("mouseout",asideFunc2);
   function asideFunc2(){
	  let heads=document.getElementById("aside-head"); 
	      heads.style.color="black";
		  heads.style.fontSize="x-large";
		  heads.style.textAlign="center";
		  heads.style.textShadow="-2px -2px 1px transparent";
   };




