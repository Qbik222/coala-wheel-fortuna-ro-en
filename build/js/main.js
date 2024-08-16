"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var days = document.querySelectorAll(".wheel__days-item");
  var popupDays = document.querySelectorAll(".popup__days-item");
  var popupDaysMob = document.querySelectorAll(".days__item");
  var currentDay = 5;
  function setDays(days, currentDay) {
    days.forEach(function (day, i) {
      ++i;
      day.classList.toggle("next", i > currentDay);
      day.classList.toggle("past", i < currentDay);
      day.classList.toggle("active", i === currentDay);
    });
  }
  function daysRemind(days, classAnim) {
    var delay = 900;
    days.forEach(function (day, i) {
      setTimeout(function () {
        day.classList.add(classAnim);
        setTimeout(function () {
          return day.classList.remove(classAnim);
        }, 1200);
      }, delay * i);
    });
  }
  var randomInterval = Math.random() * (20000 - 10000) + 10000;
  function startRandomInterval() {
    var randomInterval = Math.random() * (20000 - 10000) + 10000; // Випадковий інтервал між 10 і 20 секундами
    daysRemind(days, "remind");
    daysRemind(popupDays, "remind");
    daysRemind(popupDaysMob, "remind");
    setTimeout(startRandomInterval, randomInterval);
  }
  startRandomInterval();
  daysRemind(days, "remind");
  setDays(days, currentDay);
  setDays(popupDays, currentDay);
  setDays(popupDaysMob, currentDay);
  // addAnimationClass()

  /// wheel logic
  var wheelSections = document.querySelector(".wheel__sections");
  var wheelWrap = document.querySelector(".wheel__wrap");
  var wheelArrow = document.querySelector(".wheel__arrow");
  var wheelBtn = document.querySelector(".wheel__btn");
  var spinBg = document.querySelector(".spin-bg");
  var salut = document.querySelector(".fireworks-wrap");
  var bubleBtn = document.querySelector(".wheel__days-icons");
  var wheelBuble = document.querySelector(".wheel__buble");
  var popupContainer = document.querySelector(".popups");
  var popup = document.querySelector(".popup");
  var popupCloseBtn = document.querySelector(".popup__close");
  bubleBtn.addEventListener("click", function (e) {
    wheelBuble.classList.toggle("_hidden");
    document.addEventListener("click", function (e) {
      if (e.target !== bubleBtn) wheelBuble.classList.add("_hidden");
    });
  });
  var prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"];
  function getRandomPrize(arr) {
    return arr[Math.floor(Math.random() * prizes.length)];
  }
  function showPopup(sections, wheel, showClass, currentDay, spinBg, closeBtn, popupContainer, popup) {
    popup.classList.add("".concat(showClass));
    currentDay === 7 ? popup.classList.add("_done") : popup.classList.add("_incomplete");
    popupContainer.classList.add("_opacity", "_zIndex");
    document.body.style.overflow = "hidden";
    spinBg.classList.remove("showSpinBg");
    var pers = document.querySelectorAll(".popup__pers");
    var prize = document.querySelectorAll(".popup__prize");
    var buble = document.querySelectorAll(".popup__buble");
    var popupBody = document.querySelector(".popup__main");
    var popupTitle = document.querySelectorAll(".popup__title");
    var popupLeftArrow = document.querySelectorAll(".popup__decor-left");
    var popupRightArrow = document.querySelectorAll(".popup__decor-right");
    currentDay === 7 ? popupBody.classList.add("_done") : popup.classList.add("_incomplete");
    function addAnim(arr, classAnim) {
      arr.forEach(function (item) {
        return item.classList.add("".concat(classAnim));
      });
    }

    //popup animations
    popupBody.classList.add("popupMainAnim");
    setTimeout(function () {
      addAnim(pers, "popupPersAnim");
      addAnim(buble, "popupBubleAnim");
    }, 600);
    setTimeout(function () {
      return addAnim(prize, "popupPrizeAnim");
    }, 1200);
    setTimeout(function () {
      return popupTitle.forEach(function (item) {
        return item.classList.add("popupTitleAnim");
      });
    }, 1800);
    setTimeout(function () {
      return popupLeftArrow.forEach(function (item) {
        return item.classList.add("popupLeftArrAnim");
      });
    }, 2400);
    setTimeout(function () {
      return popupRightArrow.forEach(function (item) {
        return item.classList.add("popupRightArrAnim");
      });
    }, 2700);

    //popup animations

    closeBtn.addEventListener("click", function () {
      wheel.classList.add("_lock");
      wheel.classList.remove("wheelSizeIncrease");
      document.body.style.overflow = "auto";
      popupContainer.classList.remove("_opacity", "_zIndex");
      popup.classList.remove("".concat(showClass), '_done', '_incomplete');
    });
  }
  function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut) {
    sections.addEventListener("animationend", function () {
      sections.style.transform = "translate(-50%, -50%) rotate(".concat(position, "deg)");
      console.log(prize);
    }, {
      once: true
    });
    sections.classList.add("".concat(animation));
    arrow.style.opacity = "0";
    wheel.classList.add("wheelSizeIncrease");
    spinBg.classList.add("showSpinBg");
    salut.classList.add("_opacity");
    btn.style.pointerEvents = "none";
  }
  function firstSpin(sections, btn, wheel, arrow, prize, spinBg, salut) {
    btn.addEventListener("click", function () {
      if (prize === "iphone") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_iphone", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
        });
        spinWheel(1800, "iphonePrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "ecoflow") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_ecoflow", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
        });
        spinWheel(1665, "ecoflowPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "merch") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_merch", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
        });
        spinWheel(1711, "merchPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "nothing") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_nothing", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
        });
        spinWheel(1755, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "bonuses") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", currentDay, spinBg, popupCloseBtn, popupContainer, popup);
        });
        spinWheel(1935, "bonusesPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
    });
  }
  firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, getRandomPrize(prizes), spinBg, salut);

  //// accordion

  var accordionHeaders = document.querySelectorAll('.accordion__header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var content = header.nextElementSibling;
      document.querySelectorAll('.accordion__content').forEach(function (item) {
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
  //
  //     const btnsWrap = document.querySelector('.btns-wrap');
  //
  //     const buttons = btnsWrap.querySelectorAll('button');
  //
  //     const dropIphoneButton = document.querySelector('.drop-iphone');
  //     const dropEcoflowButton = document.querySelector('.drop-ecoflow');
  //     const dropNothingButton = document.querySelector('.drop-nothing');
  //     const dropMerchButton = document.querySelector('.drop-merch');
  //     const dropBonusButton = document.querySelector('.drop-bonus');
  //     const dropDone = document.querySelector('.drop-done');
  // // const dropIncomplete = document.querySelector('.drop-incomplete');
  //     const dropMenu = document.querySelector('.drop-menu');
  //
  //     dropMenu.addEventListener("click", ()=> btnsWrap.classList.toggle("_hidden"))
  //
  //     firstSpin(wheelSections, dropIphoneButton, wheelWrap, wheelArrow, "iphone", spinBg, salut)
  //     firstSpin(wheelSections, dropEcoflowButton, wheelWrap, wheelArrow, "ecoflow", spinBg, salut)
  //     firstSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, "nothing", spinBg, salut)
  //     firstSpin(wheelSections, dropMerchButton, wheelWrap, wheelArrow, "merch", spinBg, salut)
  //     firstSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, "bonuses", spinBg, salut)
  //
  //     buttons.forEach(item =>{
  //         item.addEventListener("click", () => {
  //             wheelSections.style.animationDuration = "0.1s"
  //             wheelSections.addEventListener("animationend", () =>{
  //                 wheelSections.style.animationDuration = "8s"
  //             })
  //         })
  //     })
  //
  //     dropDone.addEventListener("click", () => currentDay = 7)
  // localStorage.setItem(currentDay, currentDay)
  // dropIncomplete.addEventListener("click", () => currentDay = 3)
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF5cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwb3B1cERheXMiLCJwb3B1cERheXNNb2IiLCJjdXJyZW50RGF5Iiwic2V0RGF5cyIsImZvckVhY2giLCJkYXkiLCJpIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZGF5c1JlbWluZCIsImNsYXNzQW5pbSIsImRlbGF5Iiwic2V0VGltZW91dCIsImFkZCIsInJlbW92ZSIsInJhbmRvbUludGVydmFsIiwiTWF0aCIsInJhbmRvbSIsInN0YXJ0UmFuZG9tSW50ZXJ2YWwiLCJ3aGVlbFNlY3Rpb25zIiwicXVlcnlTZWxlY3RvciIsIndoZWVsV3JhcCIsIndoZWVsQXJyb3ciLCJ3aGVlbEJ0biIsInNwaW5CZyIsInNhbHV0IiwiYnVibGVCdG4iLCJ3aGVlbEJ1YmxlIiwicG9wdXBDb250YWluZXIiLCJwb3B1cCIsInBvcHVwQ2xvc2VCdG4iLCJlIiwidGFyZ2V0IiwicHJpemVzIiwiZ2V0UmFuZG9tUHJpemUiLCJhcnIiLCJmbG9vciIsImxlbmd0aCIsInNob3dQb3B1cCIsInNlY3Rpb25zIiwid2hlZWwiLCJzaG93Q2xhc3MiLCJjbG9zZUJ0biIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwicGVycyIsInByaXplIiwiYnVibGUiLCJwb3B1cEJvZHkiLCJwb3B1cFRpdGxlIiwicG9wdXBMZWZ0QXJyb3ciLCJwb3B1cFJpZ2h0QXJyb3ciLCJhZGRBbmltIiwiaXRlbSIsInNwaW5XaGVlbCIsInBvc2l0aW9uIiwiYW5pbWF0aW9uIiwiYnRuIiwiYXJyb3ciLCJ0cmFuc2Zvcm0iLCJjb25zb2xlIiwibG9nIiwib25jZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiZmlyc3RTcGluIiwiYWNjb3JkaW9uSGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJkaXNwbGF5IiwicHJldmlvdXNF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RUFHTjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUEsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PntcbiAgICBjb25zdCBkYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53aGVlbF9fZGF5cy1pdGVtXCIpXG4gICAgY29uc3QgcG9wdXBEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZGF5cy1pdGVtXCIpO1xuICAgIGNvbnN0IHBvcHVwRGF5c01vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF5c19faXRlbVwiKTtcbiAgICBsZXQgY3VycmVudERheSA9IDVcblxuICAgIGZ1bmN0aW9uIHNldERheXMoZGF5cywgY3VycmVudERheSl7XG4gICAgICAgIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PntcbiAgICAgICAgICAgICsraVxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJuZXh0XCIsIGkgPiBjdXJyZW50RGF5KTtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QudG9nZ2xlKFwicGFzdFwiLCBpIDwgY3VycmVudERheSk7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCBpID09PSBjdXJyZW50RGF5KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzUmVtaW5kKGRheXMsIGNsYXNzQW5pbSkge1xuICAgICAgICBsZXQgZGVsYXkgPSA5MDA7XG4gICAgICAgIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZChjbGFzc0FuaW0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF5LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NBbmltKSwgMTIwMClcbiAgICAgICAgICAgIH0sIGRlbGF5ICogaSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUludGVydmFsID0gTWF0aC5yYW5kb20oKSAqICgyMDAwMCAtIDEwMDAwKSArIDEwMDAwO1xuXG5cbiAgICBmdW5jdGlvbiBzdGFydFJhbmRvbUludGVydmFsKCkge1xuICAgICAgICBjb25zdCByYW5kb21JbnRlcnZhbCA9IE1hdGgucmFuZG9tKCkgKiAoMjAwMDAgLSAxMDAwMCkgKyAxMDAwMDsgLy8g0JLQuNC/0LDQtNC60L7QstC40Lkg0ZbQvdGC0LXRgNCy0LDQuyDQvNGW0LYgMTAg0ZYgMjAg0YHQtdC60YPQvdC00LDQvNC4XG4gICAgICAgIGRheXNSZW1pbmQoZGF5cywgXCJyZW1pbmRcIik7XG4gICAgICAgIGRheXNSZW1pbmQocG9wdXBEYXlzLCBcInJlbWluZFwiKTtcbiAgICAgICAgZGF5c1JlbWluZChwb3B1cERheXNNb2IsIFwicmVtaW5kXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KHN0YXJ0UmFuZG9tSW50ZXJ2YWwsIHJhbmRvbUludGVydmFsKTtcbiAgICB9XG5cbiAgICBzdGFydFJhbmRvbUludGVydmFsKCk7XG4gICAgZGF5c1JlbWluZChkYXlzLCBcInJlbWluZFwiKVxuXG4gICAgc2V0RGF5cyhkYXlzLCBjdXJyZW50RGF5KVxuICAgIHNldERheXMocG9wdXBEYXlzLCBjdXJyZW50RGF5KVxuICAgIHNldERheXMocG9wdXBEYXlzTW9iLCBjdXJyZW50RGF5KVxuLy8gYWRkQW5pbWF0aW9uQ2xhc3MoKVxuXG4vLy8gd2hlZWwgbG9naWNcbiAgICBjb25zdCB3aGVlbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fc2VjdGlvbnNcIilcbiAgICBjb25zdCB3aGVlbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX193cmFwXCIpXG4gICAgY29uc3Qgd2hlZWxBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2Fycm93XCIpXG4gICAgY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19idG5cIilcbiAgICBjb25zdCBzcGluQmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW4tYmdcIilcbiAgICBjb25zdCBzYWx1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlyZXdvcmtzLXdyYXBcIilcbiAgICBjb25zdCBidWJsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2RheXMtaWNvbnNcIilcbiAgICBjb25zdCB3aGVlbEJ1YmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fYnVibGVcIilcbiAgICBjb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzXCIpXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpXG4gICAgY29uc3QgcG9wdXBDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXG5cbiAgICBidWJsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICB3aGVlbEJ1YmxlLmNsYXNzTGlzdC50b2dnbGUoXCJfaGlkZGVuXCIpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge2lmKGUudGFyZ2V0ICE9PSBidWJsZUJ0bikgd2hlZWxCdWJsZS5jbGFzc0xpc3QuYWRkKFwiX2hpZGRlblwiKX0pXG4gICAgfSlcblxuICAgIGxldCBwcml6ZXMgPSBbJ2lwaG9uZScsICdlY29mbG93JywgJ21lcmNoJywgJ25vdGhpbmcnLCBcImJvbnVzZXNcIl1cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Qcml6ZShhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcml6ZXMubGVuZ3RoKV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIHNob3dDbGFzcywgY3VycmVudERheSwgc3BpbkJnLCBjbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwKXtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChgJHtzaG93Q2xhc3N9YClcbiAgICAgICAgY3VycmVudERheSA9PT0gNyA/IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKSA6IHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfaW5jb21wbGV0ZVwiKVxuICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiXG4gICAgICAgIHNwaW5CZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1NwaW5CZ1wiKVxuICAgICAgICBjb25zdCBwZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fcGVyc1wiKVxuICAgICAgICBjb25zdCBwcml6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX3ByaXplXCIpXG4gICAgICAgIGNvbnN0IGJ1YmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fYnVibGVcIilcbiAgICAgICAgY29uc3QgcG9wdXBCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fbWFpblwiKVxuICAgICAgICBjb25zdCBwb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fdGl0bGVcIilcbiAgICAgICAgY29uc3QgcG9wdXBMZWZ0QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19kZWNvci1sZWZ0XCIpXG4gICAgICAgIGNvbnN0IHBvcHVwUmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2RlY29yLXJpZ2h0XCIpXG4gICAgICAgIGN1cnJlbnREYXkgPT09IDcgPyBwb3B1cEJvZHkuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9pbmNvbXBsZXRlXCIpXG5cbiAgICAgICAgZnVuY3Rpb24gYWRkQW5pbShhcnIsIGNsYXNzQW5pbSl7XG4gICAgICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzc0FuaW19YCkgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wb3B1cCBhbmltYXRpb25zXG4gICAgICAgIHBvcHVwQm9keS5jbGFzc0xpc3QuYWRkKFwicG9wdXBNYWluQW5pbVwiKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgYWRkQW5pbShwZXJzLCBcInBvcHVwUGVyc0FuaW1cIilcbiAgICAgICAgICAgIGFkZEFuaW0oYnVibGUsIFwicG9wdXBCdWJsZUFuaW1cIilcbiAgICAgICAgfSwgNjAwKVxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiBhZGRBbmltKHByaXplLCBcInBvcHVwUHJpemVBbmltXCIpLCAxMjAwKVxuICAgICAgICBzZXRUaW1lb3V0KCAoKSA9PiBwb3B1cFRpdGxlLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFRpdGxlQW5pbVwiKSksIDE4MDApXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHBvcHVwTGVmdEFycm93LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cExlZnRBcnJBbmltXCIpKSwgMjQwMClcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4gcG9wdXBSaWdodEFycm93LmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFJpZ2h0QXJyQW5pbVwiKSksIDI3MDApXG5cbiAgICAgICAgLy9wb3B1cCBhbmltYXRpb25zXG5cblxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIilcbiAgICAgICAgICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGVlbFNpemVJbmNyZWFzZVwiKVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgICAgICBwb3B1cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiX29wYWNpdHlcIiwgXCJfekluZGV4XCIpXG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKGAke3Nob3dDbGFzc31gLCAnX2RvbmUnLCAnX2luY29tcGxldGUnKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBzcGluV2hlZWwocG9zaXRpb24sIGFuaW1hdGlvbiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dCl7XG4gICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG4gICAgICAgICAgICBzZWN0aW9ucy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcml6ZSlcbiAgICAgICAgfSwge29uY2U6IHRydWV9KVxuICAgICAgICBzZWN0aW9ucy5jbGFzc0xpc3QuYWRkKGAke2FuaW1hdGlvbn1gKVxuICAgICAgICBhcnJvdy5zdHlsZS5vcGFjaXR5ID0gXCIwXCJcbiAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgIHNwaW5CZy5jbGFzc0xpc3QuYWRkKFwic2hvd1NwaW5CZ1wiKVxuICAgICAgICBzYWx1dC5jbGFzc0xpc3QuYWRkKFwiX29wYWNpdHlcIilcbiAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0U3BpbihzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KXtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImlwaG9uZVwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2lwaG9uZVwiLCBjdXJyZW50RGF5LCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCkpXG4gICAgICAgICAgICAgICAgc3BpbldoZWVsKDE4MDAsIFwiaXBob25lUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImVjb2Zsb3dcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9lY29mbG93XCIsIGN1cnJlbnREYXksIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwKSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTY2NSwgXCJlY29mbG93UHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcIm1lcmNoXCIpe1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfbWVyY2hcIiwgY3VycmVudERheSwgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXApKVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxNzExLCBcIm1lcmNoUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcIm5vdGhpbmdcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLFwiX25vdGhpbmdcIiwgY3VycmVudERheSwgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXApKVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxNzU1LCBcIm5vdGhpbmdQcml6ZVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJpemUgPT09IFwiYm9udXNlc1wiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIGN1cnJlbnREYXksIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwKSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTkzNSwgXCJib251c2VzUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmaXJzdFNwaW4od2hlZWxTZWN0aW9ucywgd2hlZWxCdG4sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgZ2V0UmFuZG9tUHJpemUocHJpemVzKSwgc3BpbkJnLCBzYWx1dClcblxuXG5cbi8vLy8gYWNjb3JkaW9uXG5cbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faGVhZGVyJyk7XG4gICAgYWNjb3JkaW9uSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19jb250ZW50JykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuLy8vLyBmb3IgdGVzdFxuLy9cbi8vICAgICBjb25zdCBidG5zV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5zLXdyYXAnKTtcbi8vXG4vLyAgICAgY29uc3QgYnV0dG9ucyA9IGJ0bnNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuLy9cbi8vICAgICBjb25zdCBkcm9wSXBob25lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtaXBob25lJyk7XG4vLyAgICAgY29uc3QgZHJvcEVjb2Zsb3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1lY29mbG93Jyk7XG4vLyAgICAgY29uc3QgZHJvcE5vdGhpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1ub3RoaW5nJyk7XG4vLyAgICAgY29uc3QgZHJvcE1lcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtbWVyY2gnKTtcbi8vICAgICBjb25zdCBkcm9wQm9udXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1ib251cycpO1xuLy8gICAgIGNvbnN0IGRyb3BEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtZG9uZScpO1xuLy8gLy8gY29uc3QgZHJvcEluY29tcGxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1pbmNvbXBsZXRlJyk7XG4vLyAgICAgY29uc3QgZHJvcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC1tZW51Jyk7XG4vL1xuLy8gICAgIGRyb3BNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IGJ0bnNXcmFwLmNsYXNzTGlzdC50b2dnbGUoXCJfaGlkZGVuXCIpKVxuLy9cbi8vICAgICBmaXJzdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcElwaG9uZUJ1dHRvbiwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBcImlwaG9uZVwiLCBzcGluQmcsIHNhbHV0KVxuLy8gICAgIGZpcnN0U3Bpbih3aGVlbFNlY3Rpb25zLCBkcm9wRWNvZmxvd0J1dHRvbiwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBcImVjb2Zsb3dcIiwgc3BpbkJnLCBzYWx1dClcbi8vICAgICBmaXJzdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcE5vdGhpbmdCdXR0b24sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgXCJub3RoaW5nXCIsIHNwaW5CZywgc2FsdXQpXG4vLyAgICAgZmlyc3RTcGluKHdoZWVsU2VjdGlvbnMsIGRyb3BNZXJjaEJ1dHRvbiwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBcIm1lcmNoXCIsIHNwaW5CZywgc2FsdXQpXG4vLyAgICAgZmlyc3RTcGluKHdoZWVsU2VjdGlvbnMsIGRyb3BCb251c0J1dHRvbiwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBcImJvbnVzZXNcIiwgc3BpbkJnLCBzYWx1dClcbi8vXG4vLyAgICAgYnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT57XG4vLyAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAgICAgICAgIHdoZWVsU2VjdGlvbnMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjAuMXNcIlxuLy8gICAgICAgICAgICAgd2hlZWxTZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+e1xuLy8gICAgICAgICAgICAgICAgIHdoZWVsU2VjdGlvbnMuc3R5bGUuYW5pbWF0aW9uRHVyYXRpb24gPSBcIjhzXCJcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pXG4vLyAgICAgfSlcbi8vXG4vLyAgICAgZHJvcERvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGN1cnJlbnREYXkgPSA3KVxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudERheSwgY3VycmVudERheSlcbi8vIGRyb3BJbmNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50RGF5ID0gMylcblxufSlcblxuXG5cblxuIl19
