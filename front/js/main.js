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
    function showPopup(sections, wheel, showClass, currentDay, spinBg, closeBtn, popupContainer, popup){
        // document.querySelector(".fav-page").classList.add("popupBg")
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
        }, {once: true})
        sections.classList.add(`${animation}`)
        arrow.style.opacity = "0"

        wheel.classList.add("wheelSizeIncrease")
        document.querySelector(".fav-page").classList.add("bgScale")
        document.querySelector(".sector-prize").style.opacity = "1"
        spinBg.classList.add("showSpinBg")
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
                popup.classList.add("_nothing")
                sections.addEventListener("animationend", () => showPopup(sections, wheel,"_nothing", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
                spinWheel(1755, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
            if(prize === "bonuses"){
                sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup))
                spinWheel(1935, "bonusesPrize", sections, btn, wheel, arrow, prize, spinBg, salut)
            }
        })
    }
    firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, "merch", spinBg, salut)
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

    /// for test


//// for test

    const btnsWrap = document.querySelector('.btns-wrap');

    const buttons = btnsWrap.querySelectorAll('button');

    const dropIphoneButton = document.querySelector('.drop-iphone');
    const dropEcoflowButton = document.querySelector('.drop-ecoflow');
    const dropNothingButton = document.querySelector('.drop-nothing');
    const dropMerchButton = document.querySelector('.drop-merch');
    const dropBonusButton = document.querySelector('.drop-bonus');
    const dropDone = document.querySelector('.drop-done');
    const dropLock = document.querySelector('.drop-lock');
    const dropSign = document.querySelector('.drop-sign');
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