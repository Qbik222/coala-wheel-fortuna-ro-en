document.addEventListener("DOMContentLoaded", () =>{
    const days = document.querySelectorAll(".wheel__days-item")
    const popupDays = document.querySelectorAll(".popup__days-item");
    const popupDaysMob = document.querySelectorAll(".days__item");
    let currentDay = 5

    function setDays(days, currentDay){
        days.forEach((day, i) =>{
            ++i
            day.classList.toggle("next", i > currentDay);
            day.classList.toggle("past", i < currentDay);
            day.classList.toggle("active", i === currentDay);
        })
    }

    function daysRemind(days, classAnim) {
        let delay = 900;
        days.forEach((day, i) => {
            setTimeout(() => {
                day.classList.add(classAnim);
                setTimeout(() => day.classList.remove(classAnim), 1200)
            }, delay * i);
        });
    }

    const randomInterval = Math.random() * (20000 - 10000) + 10000;


    function startRandomInterval() {
        const randomInterval = Math.random() * (20000 - 10000) + 10000; // Випадковий інтервал між 10 і 20 секундами
        daysRemind(days, "remind");
        daysRemind(popupDays, "remind");
        daysRemind(popupDaysMob, "remind");
        setTimeout(startRandomInterval, randomInterval);
    }

    startRandomInterval();
    daysRemind(days, "remind")

    setDays(days, currentDay)
    setDays(popupDays, currentDay)
    setDays(popupDaysMob, currentDay)
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
        const popupTitle = document.querySelectorAll(".popup__title")
        const popupLeftArrow = document.querySelectorAll(".popup__decor-left")
        const popupRightArrow = document.querySelectorAll(".popup__decor-right")
        currentDay === 7 ? popupBody.classList.add("_done") : popup.classList.add("_incomplete")

        function addAnim(arr, classAnim){
            arr.forEach(item => item.classList.add(`${classAnim}`) )
        }

        //popup animations
        popupBody.classList.add("popupMainAnim")
        setTimeout(() =>{
            addAnim(pers, "popupPersAnim")
            addAnim(buble, "popupBubleAnim")
        }, 600)
        setTimeout( () => addAnim(prize, "popupPrizeAnim"), 1200)
        setTimeout( () => popupTitle.forEach(item => item.classList.add("popupTitleAnim")), 1800)
        setTimeout( () => popupLeftArrow.forEach(item => item.classList.add("popupLeftArrAnim")), 2400)
        setTimeout( () => popupRightArrow.forEach(item => item.classList.add("popupRightArrAnim")), 2700)

        //popup animations


        closeBtn.addEventListener("click", () =>{
            wheel.classList.add("_lock")
            wheel.classList.remove("wheelSizeIncrease")
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

    firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, getRandomPrize(prizes), spinBg, salut)






//// accordion

    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            document.querySelectorAll('.accordion__content').forEach(item => {
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


//// for test

    const btnsWrap = document.querySelector('.btns-wrap');

    const buttons = btnsWrap.querySelectorAll('button');

    const dropIphoneButton = document.querySelector('.drop-iphone');
    const dropEcoflowButton = document.querySelector('.drop-ecoflow');
    const dropNothingButton = document.querySelector('.drop-nothing');
    const dropMerchButton = document.querySelector('.drop-merch');
    const dropBonusButton = document.querySelector('.drop-bonus');
    const dropDone = document.querySelector('.drop-done');
// const dropIncomplete = document.querySelector('.drop-incomplete');
    const dropMenu = document.querySelector('.drop-menu');

    dropMenu.addEventListener("click", ()=> btnsWrap.classList.toggle("_hidden"))

    firstSpin(wheelSections, dropIphoneButton, wheelWrap, wheelArrow, "iphone", spinBg, salut)
    firstSpin(wheelSections, dropEcoflowButton, wheelWrap, wheelArrow, "ecoflow", spinBg, salut)
    firstSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, "nothing", spinBg, salut)
    firstSpin(wheelSections, dropMerchButton, wheelWrap, wheelArrow, "merch", spinBg, salut)
    firstSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, "bonuses", spinBg, salut)

    buttons.forEach(item =>{
        item.addEventListener("click", () => {
            wheelSections.style.animationDuration = "0.1s"
            wheelSections.addEventListener("animationend", () =>{
                wheelSections.style.animationDuration = "8s"
            })
        })
    })

    dropDone.addEventListener("click", () => currentDay = 7)
// localStorage.setItem(currentDay, currentDay)
// dropIncomplete.addEventListener("click", () => currentDay = 3)

})




