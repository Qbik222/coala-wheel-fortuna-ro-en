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
    // const randomInterval = Math.random() * (6000 - 4000) + 4000;
    function addFireworks(containerSelector, numberOfFireworks) {
        const fireworksWrap = document.createElement('div');
        fireworksWrap.className = 'fireworks-wrap';
        for (let i = 0; i < numberOfFireworks; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            fireworksWrap.appendChild(firework);
        }
        const container = document.querySelector(containerSelector);
        if (container) {
            container.appendChild(fireworksWrap);
        } else {
            console.error(`Контейнер з селектором "${containerSelector}" не знайдено.`);
        }
    }
    function removeFireworks(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            const fireworksWrap = container.querySelector('.fireworks-wrap');
            if (fireworksWrap) {
                fireworksWrap.remove();
            } else {
                console.error(`Елемент з класом ".fireworks-wrap" не знайдено в контейнері ${containerSelector}.`);
            }
        } else {
            console.error(`Контейнер з селектором "${containerSelector}" не знайдено.`);
        }
    }
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

    bubleBtn.addEventListener("mouseover", (e) =>{
        wheelBuble.classList.remove("_hidden")
    })
    bubleBtn.addEventListener("mouseout", (e) =>{
        wheelBuble.classList.add("_hidden")
    })
    document.addEventListener("click", e => e.target === bubleBtn ? null : wheelBuble.classList.add("_hidden"))
    let prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"]
    function getRandomPrize(arr) {
        return arr[Math.floor(Math.random() * prizes.length)];
    }
    function showPopup(sections, wheel, showClass, currentDay, spinBg, closeBtn, popupContainer, popup, classPrize){
        // document.querySelector(".fav-page").classList.add("popupBg")
        if(classPrize){
            popup.classList.add(`${classPrize}`);
        }
        if(classPrize === "respin") return
        popup.classList.add(`${showClass}`)
        popup.classList.contains('_nothing') === true ? null : addFireworks(".popups", 7)
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
        document.querySelector(".fav-page").classList.remove("bgScale")
        function addAnim(arr, classAnim){
            arr.forEach(item => item.classList.add(`${classAnim}`) )
        }
        //popup animations
        setTimeout(() =>{
            popupBody.classList.add("popupMainAnim")
            addAnim(pers, "popupPersAnim")
            addAnim(buble, "popupBubleAnim")
        }, 100)

        setTimeout(() =>{
            addAnim(prize, "popupPrizeAnim")
            popupTitle.forEach(item => item.classList.add("popupTitleAnim"))

        }, 600)
        setTimeout( () => {
            popupLeftArrow.forEach(item => item.classList.add("popupLeftArrAnim"))
            popupRightArrow.forEach(item => item.classList.add("popupRightArrAnim"))
        }, 1200)
        //popup animations
        closeBtn.addEventListener("click", () =>{
            popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7)
            wheel.classList.add("_lock")
            document.querySelector(".progress").classList.add("_lock")
            wheel.classList.remove("wheelSizeIncrease")
            document.body.style.overflow = "auto"
            popupContainer.classList.remove("_opacity", "_zIndex")
            popup.classList.remove(`${showClass}`, '_done', '_incomplete')
            removeFireworks(".popups");
        })
    }
    function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut){
        sections.addEventListener("animationend", () =>{
            sections.style.transform = `translate(-50%, -50%) rotate(${position}deg)`
            sections.classList.remove(`${animation}`)
        }, {once: true})
        sections.classList.add(`${animation}`)
        arrow.style.opacity = "0"
        wheel.classList.add("wheelSizeIncrease")
        document.querySelector(".fav-page").classList.add("bgScale")
        document.querySelector(".sector-prize").style.opacity = "1"
        spinBg.classList.add("showSpinBg")
        if(animation !== "respinAnim"){
            btn.style.pointerEvents = "none"
        }
    }
    function firstSpin(sections, btn, wheel, arrow, prize, spinBg, salut){
        btn.addEventListener("click", () =>{
            if(prize === "nothing"){
                popup.classList.add("_nothing")
                sections.addEventListener("animationend", () => showPopup(sections, wheel,"_nothing", currentDay, spinBg, popupCloseBtn, popupContainer, popup), {once: true})
                spinWheel(1872, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs22"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "fs22"), {once: true})
                spinWheel(1800, "fs22anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs33"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "fs33"), {once: true})
                spinWheel(1762, "fs33anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs44"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "fs44"), {once: true})
                spinWheel(2088, "fs44anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs55"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "fs55"), {once: true})
                spinWheel(2052.5, "fs55anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "fs66"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "fs66"), {once: true})
                spinWheel(2016.5, "fs66anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "euro10"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "euro10"), {once: true})
                spinWheel(1980, "euro10anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "euro20"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "euro20"), {once: true})
                spinWheel(1942, "euro20anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "euro30"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "euro30"), {once: true})
                spinWheel(1908, "euro30anim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "respin"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup, "respin"), {once: true})
                spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
        })
    }
    firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, "respin", spinBg, salut)


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

    const dropBonusfs22 = document.querySelector('.drop-bonus.fs22');
    const dropBonusfs33 = document.querySelector('.drop-bonus.fs33');
    const dropBonusfs44 = document.querySelector('.drop-bonus.fs44');
    const dropBonusfs55 = document.querySelector('.drop-bonus.fs55');
    const dropBonusfs66 = document.querySelector('.drop-bonus.fs66');
    const dropBonusEuro10 = document.querySelector('.drop-bonus.euro10 ');
    const dropBonusEuro20 = document.querySelector('.drop-bonus.euro20 ');
    const dropBonusEuro30 = document.querySelector('.drop-bonus.euro30 ');
    const dropDone = document.querySelector('.drop-done');
    const dropLock = document.querySelector('.drop-lock');
    const dropSign = document.querySelector('.drop-sign');
// const dropIncomplete = document.querySelector('.drop-incomplete');
    const dropMenu = document.querySelector('.drop-menu');

    dropMenu.addEventListener("click", ()=> btnsWrap.classList.toggle("_hidden"))

    firstSpin(wheelSections, dropBonusfs22, wheelWrap, wheelArrow, "fs22", spinBg, salut)
    firstSpin(wheelSections, dropBonusfs33, wheelWrap, wheelArrow, "fs33", spinBg, salut)
    firstSpin(wheelSections, dropBonusfs44, wheelWrap, wheelArrow, "fs44", spinBg, salut)
    firstSpin(wheelSections, dropBonusfs55, wheelWrap, wheelArrow, "fs55", spinBg, salut)
    firstSpin(wheelSections, dropBonusfs66, wheelWrap, wheelArrow, "fs66", spinBg, salut)
    firstSpin(wheelSections, dropBonusEuro10, wheelWrap, wheelArrow, "euro10", spinBg, salut)
    firstSpin(wheelSections, dropBonusEuro20, wheelWrap, wheelArrow, "euro20", spinBg, salut)
    firstSpin(wheelSections, dropBonusEuro30, wheelWrap, wheelArrow, "euro30", spinBg, salut)
    // firstSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, "bonuses", spinBg, salut)

    buttons.forEach(item =>{
        item.addEventListener("click", () => {
            wheelSections.style.animationDuration = "0.1s"
            wheelSections.addEventListener("animationend", () =>{
                wheelSections.style.animationDuration = "8s"
            })
        })
    })


    dropLock.addEventListener("click", () =>{
        wheelWrap.classList.toggle("_lock")
        document.querySelector(".progress").classList.toggle("_lock")
        wheelWrap.classList.remove("_sign")
        document.querySelector(".progress").classList.remove("_sign")
    })
    dropSign.addEventListener("click", () =>{
        wheelWrap.classList.toggle("_sign")
        document.querySelector(".progress").classList.toggle("_sign")
        wheelWrap.classList.remove("_lock")
        document.querySelector(".progress").classList.remove("_lock")

    })

    dropDone.addEventListener("click", () => currentDay = 7)


})