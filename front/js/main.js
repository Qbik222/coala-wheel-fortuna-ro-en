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

setDays(days, currentDay)

const wheelSections = document.querySelector(".wheel__sections")
const wheelWrap = document.querySelector(".wheel__wrap")
const wheelArrow = document.querySelector(".wheel__arrow")
const wheelBtn = document.querySelector(".wheel__btn")

function firstSpin(sections, btn, wheel, arrow){
    btn.addEventListener("click", () =>{
        sections.addEventListener("animationend", () =>{
            sections.style.transform = "translate(-50%, -50%) rotate(1605deg)"
            console.log("dsadsa")
        }, {once: true})
        sections.classList.add("wheelSpin")
        arrow.style.opacity = "0"
        wheel.style.transform = "scale(1.2)"
    })
}

firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow)