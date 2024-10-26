let fairwell = [
    {
        id: 1,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/registra.png",
        name:"Engr. Adebayo Ajala",
        title:"Registrar"
    },
    {
        id: 2,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dean.png",
        name:"Dr. Oluyori Abimbola",
        title:"Dean"
    },
    {
        id: 3,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/Subdean.png",
        name:"Mr Noah Adebayo",
        title:"Sub Dean"
    },
    {
        id: 4,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dummyface.png",
        name:"Mr. Nweke-Love Henry",
        title:"Alumni President",
    },
    {
        id: 5,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dummyface.png",
        name:"Dr. Olayinka Alabi",
        title:"Dean of Agricultural sciences"
    },
    {
        id: 6,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dummyface.png",
        name:"Prof. Emmanuel Ajisegiri",
        title:"Dean of Engineering"
    },
    {
        id: 7,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dummyface.png",
        name:"Prof. Ariyo Adebiyi",
        title:"Dean of pure and Applied Sciences"
    },
    {
        id: 8,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/dummyface.png",
        name:"Dr. Ben-Caleb Egbide",
        title:"Dean of Business and social sciences "
    },
    // To add more cards, please leave this last 2 below, anything that want to be added, shoud be added before them, that is because the way the code runs, the last 2 isnt meant to show.
    {
        id: 9,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/vc.png",
        name:"Prof. Kolawole Ajanaku",
        title:"Vice chancellor"
    },
    {
        id: 10,
        message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
        image:"images/vc.png",
        name:"Prof. Kolawole Ajanaku",
        title:"Vice chancellor"
    },
    // {
    //     id: 11,
    //     message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat, tempora nam vero velit distinctio repudiandae praesentium at eaque aliquid optio assumenda doloremque suscipit aut!",
    //     image:"images/vc.png",
    //     name:"Prof. Kolawole Ajanaku",
    //     title:"Vice chancellor"
    // },
]
function generateCards(){
    const container = document.getElementById("farewell");

    fairwell.forEach(function(note){
        const noteHtml = `
        <div class="card" id="cards" data-id="${note.id}">
                                <div class="green-balll">
                                    <img src="./images/green-ball.png" alt="" class="green-ball">
                                    <img src="./images/quotatation.png" alt="" class="quotation-mark">
                                </div>
                                <div class="writeup">
                                    ${note.message}
                                </div>
                               
                                <hr>
                                <div class="brief-profile">
                                    <img src="${note.image}" alt="">
                                    <div class="title">
                                        <span class="name">${note.name}</span>
                                        <span class="post">${note.title}</span>
                                    </div>
                                </div>
                            </div>`;
          container.innerHTML += noteHtml
    })
}
window.onload = generateCards()


const scrollContainer = document.querySelector('.cards');
const cardWidth = 370 + 20; // card width + gap
let currentScrollPosition = 0;

function smoothScrollTo(targetPosition, duration) {
    const startPosition = scrollContainer.scrollLeft;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // progress goes from 0 to 1
        scrollContainer.scrollLeft = startPosition + distance * progress;

        if (progress < 1) {
            requestAnimationFrame(animation); // Continue the animation until we reach the target
        }
    }

    requestAnimationFrame(animation);
}

function scrollCards() {
    // Scroll by the width of 2 cards
    currentScrollPosition += 2 * cardWidth;

    // If we reach the end, reset to the beginning
    if (currentScrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        currentScrollPosition = 0;
    }

    // Smooth scroll to the new position over 2 seconds (2000ms)
    smoothScrollTo(currentScrollPosition, 3000);
}

// Scroll every 3 seconds
setInterval(scrollCards, 5000); // Adjust this to control the delay between each scroll



// Arrays of images for each img tag
let img1Sources = ['./images/Seuns-facw.png', './images/bisoye.png', './images/jennifer.png'];
let img2Sources = ['./images/Deles-face.png', './images/fineboy.png', './images/fred.png'];
let img3Sources = ['./images/Degis-face.png', './images/nancy.png', './images/wura.png'];
let img4Sources = ['./images/jones-face.png', './images/nextguy.png', './images/divine.png'];

// Counters for cycling through the images
let img1Index = 0;
let img2Index = 0;
let img3Index = 0;
let img4Index = 0;

function changeImages() {
    // Get the image elements
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let img4 = document.getElementById('img4');

    // Update src for each image
    img1.src = img1Sources[img1Index];
    img2.src = img2Sources[img2Index];
    img3.src = img3Sources[img3Index];
    img4.src = img4Sources[img4Index];

    // Increment indexes
    img1Index = (img1Index + 1) % img1Sources.length;
    img2Index = (img2Index + 1) % img2Sources.length;
    img3Index = (img3Index + 1) % img3Sources.length;
    img4Index = (img4Index + 1) % img4Sources.length;
}

// Change images every 5 seconds
setInterval(changeImages, 3000);
