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
 * Define Global Variables
 * 
 * 
*/

const ulItem = document.querySelector('#navbar__list');
const fragment =document.createDocumentFragment();
const sections = document.querySelectorAll('section');
const arrow = document.getElementById('arrowUp');
const itemNum = sections.length;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
  //create list item      
const creatListItem = (itemNum) =>{
    
        const newlistItem = document.createElement('li');
        const newAnchor = document.createElement('a');
        newAnchor.textContent = sections[itemNum].getAttribute('data-nav');
        newAnchor.setAttribute('href',`#section${itemNum+1}`);
        newlistItem.appendChild(newAnchor);
        newAnchor.classList.add('menu__link');
       
        return newlistItem;
}
//check if item in the viewport
const isInViewport = (section) =>{
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= -200 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
       
    );
}
/** 
 * end Helper Functions
*/

// build the nav
for(let i=0; i<itemNum; i++){
    let newList = creatListItem(i);
    fragment.appendChild(newList); 
}

// Build menu 
ulItem.appendChild(fragment);



//Add class 'active' to section and nav_bar when in viewport


const links=document.querySelectorAll('.menu__link');
window.addEventListener('scroll',() =>{
   for(let i=0 ;i<itemNum ;i++){
    if(isInViewport(sections[i])){
         sections[i].classList.add('your-active-class');
         links[i].classList.add('active_menu');
        
    }
    else{
        sections[i].classList.remove('your-active-class');
        links[i].classList.remove('active_menu');
   }
   }
} ) ;

//end
//////////
//hide nav while not scrolling using setTimeout ///
//////////
var timer = null;
window.addEventListener('scroll', () => {
    if(timer !== null) {
        clearTimeout(timer);
        document.querySelector('.page__header').classList.remove('hide_nav');       
    }
    timer = setTimeout(() => {
        document.querySelector('.page__header').classList.add('hide_nav');
    }, 2000);
});
//end



//arrow up show on scroll
window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        arrow.classList.remove('hide_arrow');
      } else {
        arrow.classList.add('hide_arrow');
      }
};

//arrow up scroll to top
arrow.addEventListener('click', () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
);