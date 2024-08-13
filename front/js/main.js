const days = document.querySelectorAll(".wheel__days-item")
let currentDay = 5

function setDays(days, currentDay){
    days.forEach((day, i) =>{
        ++i
        day.classList.toggle("next", i > currentDay);
        day.classList.toggle("past", i < currentDay);
        day.classList.toggle("active", i === currentDay);
    })
}

// function addAnimationClass() {
//     const pastAndActive = document.querySelectorAll(".wheel__days-item.past, .wheel__days-item.active");
//     console.log(pastAndActive)
//
//     pastAndActive.forEach((item, i) => {
//         let day = item.querySelector(".wheel__days-item-text")
//         const randomDelay = Math.random() * 20000;
//
//         setTimeout(() => {
//             // console.log(day)
//             day.style.animationDelay = `${i/ 2}s`;
//             day.classList.add('daysAnim');
//             day.addEventListener("click", () =>{
//                 console.log(day)
//                 day.classList.remove('daysAnim');
//             }, {once: true})
//         }, randomDelay);
//     });
// }



setDays(days, currentDay)
// addAnimationClass()

/// wheel logic
const wheelSections = document.querySelector(".wheel__sections")
const wheelWrap = document.querySelector(".wheel__wrap")
const wheelArrow = document.querySelector(".wheel__arrow")
const wheelBtn = document.querySelector(".wheel__btn")
const spinBg = document.querySelector(".spin-bg")
const salut = document.querySelector(".fireworks-wrap")
const bubleBtn = document.querySelector(".wheel__days-icons")
const wheelBuble = document.querySelector(".wheel__buble")

bubleBtn.addEventListener("click", () =>{
    wheelBuble.classList.toggle("_hidden")
})

let prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"]
function getRandomPrize(arr) {
    return arr[Math.floor(Math.random() * prizes.length)];
}
function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut){
    sections.addEventListener("animationend", () =>{
        sections.style.transform = `translate(-50%, -50%) rotate(${position}deg)`
        console.log(prize)
    }, {once: true})
    sections.classList.add(`${animation}`)
    arrow.style.opacity = "0"
    wheel.classList.add("wheelSizeIncrease")
    spinBg.classList.add("showSpinBg")
    salut.classList.add("_opacity")
    btn.style.pointerEvents = "none"
}

function firstSpin(sections, btn, wheel, arrow, prize, spinBg, salut){
    btn.addEventListener("click", () =>{
        wheelBuble.classList.add("_hidden")
        if(prize === "iphone"){
            spinWheel(1800, "iphonePrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "ecoflow"){
            spinWheel(1665, "ecoflowPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "merch"){
            spinWheel(1711, "merchPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "nothing"){
            spinWheel(1755, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "bonuses"){
            spinWheel(1935, "bonusesPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
    })
}

firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, getRandomPrize(prizes), spinBg, salut)






//// accordion

const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
                item.previousElementSibling.classList.remove('open');
            }
        });
        if (content.style.display === 'block') {
            content.style.display = 'none';
            header.classList.remove('open');
        } else {
            content.style.display = 'block';
            header.classList.add('open');
        }
    });
});


