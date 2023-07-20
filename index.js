let movies = [
    {
        name: "Falcon and the winter soldier",
        des: "ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des: "ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt",
        image: "images/slider 1.png"
    },
    {
        name: "wanda vision",
        des: "ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des: "ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des: "ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt augue. Donec euismod, augue eu tincidunt tincidunt, nunc leo tincidunt augue, eu tincidunt augue augue eu tincidunt",
        image: "images/slider 5.png"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let sliderIndex = 0;

const createSlide = () => {
    if (sliderIndex >= movies.length) {
        sliderIndex = 0;
    }

    //create dom elements
    let slide = document.createElement("div");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let imgElement = document.createElement("img");

    //attaching elements
    slide.appendChild(content);
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[sliderIndex].name));
    p.appendChild(document.createTextNode(movies[sliderIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images

    imgElement.src = movies[sliderIndex].image;
    sliderIndex++;

    //setting element classnames
    slide.className = 'slide';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des'
    imgElement.className='slider-img'

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
} 

for(let i=0;i<=movies.length;i++) {
    createSlide();
}
setInterval(()=>{
    createSlide();
},3000);

//video-cards

const videoCards=document.querySelectorAll('.video-card');
videoCards.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
        video.pause();
    })
})

//card-Sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item,i)=>{
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })


    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})

// Check if the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Show the alert if the user is on a mobile device
  if (isMobileDevice()) {
    const mobileMessage = document.getElementById('mobileMessage');
    mobileMessage.style.display = 'block';
  }