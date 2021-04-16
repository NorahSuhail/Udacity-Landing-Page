/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
window.onload = function init() {
  this.createNavBarElements();
  this.styleNavBarElements();
  this.mouseOver();
  this.scroll();
  this.isElementOnScreen();
}

// build the nav
function createNavBarElements() {
    var ul = document.getElementById("navbar__list");
    var section_1 = document.createElement("li");
    var section_2 = document.createElement("li");
    var section_3 = document.createElement("li");
    var section_4 = document.createElement("li");

    section_1.appendChild(document.createTextNode("section 1"));
    section_2.appendChild(document.createTextNode("section 2"));
    section_3.appendChild(document.createTextNode("section 3"));
    section_4.appendChild(document.createTextNode("section 4"));

    ul.appendChild(section_1);
    ul.appendChild(section_2);
    ul.appendChild(section_3);
    ul.appendChild(section_4);
  }

// Style the nav
function styleNavBarElements() {
    document.querySelectorAll('#navbar__list > li').forEach((li) => {
        li.style.margin = "6px";
        li.style.padding = "6px";
        li.style.color = "blue";
        li.style.fontSize = "20px";
    });
}

/**
 * Define Global Variables
 * 
*/

var sections;
var items;

/**
 * End Global Variables
 * 
*/

// Add class 'active' to section when near top of viewport
function toggle(section, item) {
  var newNavItems = item;
  var oldNavItems = document.getElementsByClassName("link__active");
  var newSectionElement = document.getElementById(section);
  var oldSectionElement = document.getElementsByClassName("your-active-class");

  for (i = 0; i < oldSectionElement.length; i++) {
    oldSectionElement[i].classList.remove("your-active-class");
  }
  
  newSectionElement.classList.add("your-active-class");
  for (i = 0; i < oldNavItems.length; i++) {
     oldNavItems[i].classList.remove("link__active");
  }
  newNavItems.classList.add("link__active");
}

// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
// Set sections as active
function scroll() {
  window.sections =  document.querySelectorAll('main > section');
  var i;
  for (i = 0; i < items.length; i++) {
    let item = items[i];
    let sectionId = sections[i].id;
    let section = sections[i];
    item.addEventListener("click", function(){
        toggle(sectionId, item);
        document.getElementById(sectionId).scrollIntoView({
           behavior: 'smooth'
        })
      }
    )
  }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
var button = document.getElementById("button");
button.addEventListener("click", function(event){
  window.scrollTo(0, 0)
});

function mouseOver() {
  window.items =  document.querySelectorAll('#navbar__list > li');
  var i;
  for (i = 0; i < items.length; i++) {
    let item = items[i];
    item.addEventListener("mouseover", function(){
        item.classList.add("mouseover");
      }
    )
    item.addEventListener("mouseout", function(){
      item.classList.remove("mouseover");
      }
    )
  }
}

function isElementOnScreen() {
  var i;
  for (i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionId = sections[i].id;
      let item = items[i];
      
      document.addEventListener('scroll', function () {
        var bounding = section.getBoundingClientRect();
        var myElementHeight  = section.offsetHeight;
        var myElementWidth  = section.offsetWidth;
        //if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        if (bounding.top >= -myElementHeight 
            && bounding.left >= -myElementWidth
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
            toggle(sectionId, item);
        }
    } );
  }
}

//END
