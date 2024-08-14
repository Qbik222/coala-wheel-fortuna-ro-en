const days = document.querySelectorAll(".wheel__days-item")
const popupDays = document.querySelectorAll(".popup__days-item");
let currentDay = 4

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
setDays(popupDays, currentDay)
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
const popupContainer = document.querySelector(".popups")
const popup = document.querySelector(".popup")
const popupCloseBtn = document.querySelector(".popup__close")

bubleBtn.addEventListener("click", (e) =>{
    wheelBuble.classList.toggle("_hidden")
    document.addEventListener("click", (e) => {if(e.target !== bubleBtn) wheelBuble.classList.add("_hidden")})
})

let prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"]
function getRandomPrize(arr) {
    return arr[Math.floor(Math.random() * prizes.length)];
}
function showPopup(sections, wheel, showClass, currentDay, spinBg, closeBtn, popupContainer, popup){
    popup.classList.add(`${showClass}`)
    currentDay === 7 ? popup.classList.add("_done") : popup.classList.add("_incomplete")
    popupContainer.classList.add("_opacity", "_zIndex")
    document.body.style.overflow = "hidden"
    spinBg.classList.remove("showSpinBg")
    const pers = document.querySelectorAll(".popup__pers")
    const prize = document.querySelectorAll(".popup__prize")
    const buble = document.querySelectorAll(".popup__buble")
    const popupBody = document.querySelector(".popup__main")
    const popupTitle = document.querySelector(".popup__title")
    const popupLeftArrow = document.querySelector(".popup__decor-left")
    const popupRightArrow = document.querySelector(".popup__decor-right")
    function addAnim(arr, classAnim){
        arr.forEach(item => item.classList.add(`${classAnim}`) )
    }


    popupBody.classList.add("popupMainAnim")
    setTimeout(() =>{
        addAnim(pers, "popupPersAnim")
        addAnim(buble, "popupBubleAnim")
    }, 600)
    setTimeout( () => addAnim(prize, "popupPrizeAnim"), 1200)
    setTimeout( () => popupTitle.classList.add("popupTitleAnim"), 1800)
    setTimeout( () => popupLeftArrow.classList.add("popupLeftArrAnim"), 2400)
    setTimeout( () => popupRightArrow.classList.add("popupRightArrAnim"), 2700)

    closeBtn.addEventListener("click", () =>{
        wheel.classList.add("_lock")
        wheel.style.transform = "scale(1)"
        document.body.style.overflow = "auto"
        popupContainer.classList.remove("_opacity", "_zIndex")
        popup.classList.remove(`${showClass}`, '_done', '_incomplete')
    })
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
        if(prize === "iphone"){
            sections.addEventListener("animationend", () => showPopup(sections, wheel, "_iphone", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
            spinWheel(1800, "iphonePrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "ecoflow"){
            sections.addEventListener("animationend", () => showPopup(sections, wheel, "_ecoflow", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
            spinWheel(1665, "ecoflowPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "merch"){
            sections.addEventListener("animationend", () => showPopup(sections, wheel, "_merch", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
            spinWheel(1711, "merchPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "nothing"){
            sections.addEventListener("animationend", () => showPopup(sections, wheel,"_nothing", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
            spinWheel(1755, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
        if(prize === "bonuses"){
            sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
            spinWheel(1935, "bonusesPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
        }
    })
}

firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, "iphone", spinBg, salut)



// getRandomPrize(prizes)


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


