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
		<div class="content-holder" id="content-holder">
  <div class="content-one">
     <h1 class="headline" id="headline" >Let us <br> strike Your Fancy!</h1>
     <p class="description" id='description'>Found anything interesting yet?</p>
     <button id="b-one" onclick="exploreButton()">Explore</button>
     <p id="button-prompt">click the Explore Button to see Offers</p>
	 
  </div>
  
  <div class="content-two" id="content-two">
  <aside>
     <diV class="cta-aside" id="cta-aside"><h1 class="aside-head"id="aside-head" >Topics</h1>
	 <ul class="top-collection" id="top-collection"> 
	 
	 <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-new-shopping-web-terms-in-blue-and-violet-a-3d-rendering-image_3801919.jpg" alt="an image with blue background and a shopping cart" title="" />
	                          <h1 class="cta-tittle" id="cta-tittle">Buy From Us</h1>
                        	 <p class="top-ul-desc" id="one">Lorem ipsum dolor sit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed </p>
     </li>
	 
	  <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="https://e1.pxfuel.com/desktop-wallpaper/469/181/desktop-wallpaper-best-5-reading-books-on-hip-the-reader.jpg" alt="an image  of a nature background and a book to read" title="" />
	                         <h1 class="cta-tittle" id="cta-tittle">Read Articles</h1>
                        	 <p class="top-ul-desc" id="two">Lorem ipsum dolor sit amet. Cum illum nesciunt et eveniet dolores vel unde galisum aut possimus neque At ratione debitis sed </p>
     </li>
	 
	  <li id="top-ul-items"><img class="top-ul-img" id="top-ul-img" src="https://img.freepik.com/vector-premium/banner-etiqueta-sello-recomendado-pulgar-arriba-o-icono-similar-boton-etiqueta-recomendada_248162-1380.jpg" alt="thumbs up imogi that says  recomended " title="" />
	                          <h1 class="cta-tittle" id="cta-tittle">See Recomendations</h1>
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
  let contHolderTwo=document.getElementById("content-holder-two").style.display="none";
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
	let navi=document.getElementById("navigation").style.background="linear-gradient(to right,fuchsia,lightblue)" ;  

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
		 let navi=document.getElementById("navigation").style.background="rgba(0, 0, 0, 0.5)" ;
		 
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
		head.style.color="black";
		head.style.fontSize="large";
		head.style.textShadow="-2px -2px 1px lightblue";
		head.style.background="linear-gradient(to right,lightblue,fuchsia)";
		
	const theTitle=document.getElementsByClassName("cta-tittle");
	for(i=0;i<theTitle.length;i++){
	theTitle[i].style.background="linear-gradient(to right,lightblue,fuchsia)";
	}
	const desc=document.getElementsByClassName("top-ul-desc");
	for(i=0;i<desc.length;i++){
	desc[i].style.color="white";
	                              }

		
	};
   asideHover.addEventListener("mouseout",asideFunc2);
   function asideFunc2(){
	  let heads=document.getElementById("aside-head"); 
	      heads.style.color="black";
		  heads.style.fontSize="large";
		  heads.style.textAlign="center";
		  heads.style.textShadow="-2px -2px 1px transparent";
		  heads.style.background="lightblue";
		const theTitle=document.getElementsByClassName("cta-tittle");
	for(i=0;i<theTitle.length;i++){
	theTitle[i].style.background="transparent";
   }
   	 const desc=document.getElementsByClassName("top-ul-desc");
	for(i=0;i<desc.length;i++){
	desc[i].style.color="black";
	                              }
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

/*----------------------------------------------------------------------------------------------------------------from top to here is the main page
------------------------------------------------------------------------------------------------------------------or landing page-  i have decided to make this website function as an spa  
 ------------------------------------------------------------------less file  resources  but the website itself can stand alone ------------------------------------------*/



/*----------------------------------------------------------explore button and  backto home button  onclick function----------------------------*/
console.log("new subpage here");
function exploreButton(){
let explrBtn=document.getElementById("content-holder");
explrBtn.style.transitionDuration="1s";
    explrBtn.style.display="none";
let subPageHidden=document.getElementById("content-holder-two");
    subPageHidden.style.display="grid";

	  
		 console.log('explore button clicked');
	};
function backHome(){
	let explrBtn=document.getElementById("content-holder");
explrBtn.style.transitionDuration="1s";
    explrBtn.style.display="grid";
	explrBtn.style.height="130vh";


	
let subPageHidden=document.getElementById("content-holder-two");
    subPageHidden.style.display="none";}
	
	
/*----------------------------------------------------------explore button and  backto home button  onclick function    END----------------------------*/

/*--------------------------------------------------------onclick articles on subpage 2 and  3 to be rendered  in content-four-subpage -------------------------
                                                           how are you able to do that??----------------------------------------------------------------------------*/
const article1=document.getElementById("item1");
article1.addEventListener("click",itemOne);
function itemOne(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="block";
	 let articleTwo=document.querySelector(".article-two").style.display="none";
	 let articleThree=document.querySelector(".article-three").style.display="none";
	 let articleFour=document.querySelector(".article-four").style.display="none";
	 let articleFive=document.querySelector(".article-five").style.display="none";
	  let articleTop=document.querySelector(".article-top").style.display="none";
	};
const article2=document.getElementById("item2");
article2.addEventListener("click",itemTwo);
function itemTwo(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="none";
	 let articleTwo=document.querySelector(".article-two").style.display="block";
	 let articleThree=document.querySelector(".article-three").style.display="none";
	 let articleFour=document.querySelector(".article-four").style.display="none";
	 let articleFive=document.querySelector(".article-five").style.display="none";
	  let articleTop=document.querySelector(".article-top").style.display="none";
	};
	    	    
const article3=document.getElementById("item3");
article3.addEventListener("click",itemThree);
function itemThree(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="none";
	 let articleTwo=document.querySelector(".article-two").style.display="none";
	 let articleThree=document.querySelector(".article-three").style.display="block";
	 let articleFour=document.querySelector(".article-four").style.display="none";
	 let articleFive=document.querySelector(".article-five").style.display="none";
	  let articleTop=document.querySelector(".article-top").style.display="none";
	};

const article4=document.getElementById("item4");
article4.addEventListener("click",itemFour);
function itemFour(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="none";
	 let articleTwo=document.querySelector(".article-two").style.display="none";
	 let articleThree=document.querySelector(".article-three").style.display="none";
	 let articleFour=document.querySelector(".article-four").style.display="block";
	 let articleFive=document.querySelector(".article-five").style.display="none";
	  let articleTop=document.querySelector(".article-top").style.display="none";
	};
	    	
const article5=document.getElementById("item5");
article5.addEventListener("click",itemFive);
function itemFive(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="none";
	 let articleTwo=document.querySelector(".article-two").style.display="none";
	 let articleThree=document.querySelector(".article-three").style.display="none";
	 let articleFour=document.querySelector(".article-four").style.display="none";
	 let articleFive=document.querySelector(".article-five").style.display="block";
	  let articleTop=document.querySelector(".article-top").style.display="none";
	};
	    const articleTop=document.getElementById("top-article-red");
articleTop.addEventListener("click",artTop);
function artTop(){
	let contentHolderTwo=document.getElementById("content-holder-two").style.height="200vh";
	let renderPage=document.getElementById("content-four-subpage").style.height="110vh";
	 let articleOne=document.querySelector(".article-one").style.display="none";
	 let articleTwo=document.querySelector(".article-two").style.display="none";
	 let articleThree=document.querySelector(".article-three").style.display="none";
	 let articleFour=document.querySelector(".article-four").style.display="none";
	 let articleFive=document.querySelector(".article-five").style.display="none";
	 let articleTop=document.querySelector(".article-top").style.display="block";
	};

 const itemGenreIn=document.getElementById("item-genre");
       itemGenreIn.addEventListener("mouseover",dropDown);
	function dropDown(){
		         document.getElementById("item-genre").style.height="15.9vh";
				 document.getElementById("i1").style.background="gold";
				  document.getElementById("i1").style.fontWeight="bold";
				 document.getElementById("i2").style.display="block";
				 document.getElementById("i3").style.display="block";
				 document.getElementById("i4").style.display="block";
				 document.getElementById("i5").style.display="block";
	};
	
 const itemGenreout=document.getElementById("item-genre");
       itemGenreout.addEventListener("mouseout",dropDownout);
	function dropDownout(){
		         document.getElementById("item-genre").style.height="3.5vh";
				 document.getElementById("i1").style.background="linear-gradient(to right,white,lightblue,fuchsia)";
				 document.getElementById("i2").style.display="none";
				 document.getElementById("i3").style.display="none";
				 document.getElementById("i4").style.display="none"
				 document.getElementById("i5").style.display="none";
	};
/*------------------------------------------------------------------------------------*/
function  topSeller(){
    let holderOne=document.getElementById("holder1").style.display="grid"
	    holderTwo=document.getElementById("holder2").style.display="none"
		 holderThree=document.getElementById("holder3").style.display="none"
		  holderfour=document.getElementById("holder4").style.display="none"
                       };
function  Bags(){
    let holderOne=document.getElementById("holder1").style.display="none"
	    holderTwo=document.getElementById("holder2").style.display="grid"
		 holderThree=document.getElementById("holder3").style.display="none"
		  holderfour=document.getElementById("holder4").style.display="none"
                       };

function  phones(){
    let holderOne=document.getElementById("holder1").style.display="none"
	    holderTwo=document.getElementById("holder2").style.display="none"
		 holderThree=document.getElementById("holder3").style.display="grid"
		  holderfour=document.getElementById("holder4").style.display="none"
                       };
function  accessories(){
    let holderOne=document.getElementById("holder1").style.display="none"
	    holderTwo=document.getElementById("holder2").style.display="none"
		 holderThree=document.getElementById("holder3").style.display="none"
		  holderfour=document.getElementById("holder4").style.display="grid"
                       };

function copyText(){

	window.confirm(" pls copy this referal code and paste it in your lazada referal input field, Thank you ➡️ AAttskPd  ");
	console.log("lazada affiliate Banner clicked ");
	
};