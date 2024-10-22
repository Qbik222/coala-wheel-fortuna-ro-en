"use strict";

(function () {
  // const apiURL = 'https://fav-prom.com/api_wheel_hr';
  //
  // const
  //     unauthMsgs = document.querySelectorAll('.unauth-msg'),
  //     participateBtns = document.querySelectorAll('.btn-join');
  //
  // const hrLeng = document.querySelector('#hrLeng');
  // const enLeng = document.querySelector('#enLeng');
  //
  // let locale = 'en';
  //
  // if (hrLeng) locale = 'hr';
  // if (enLeng) locale = 'en';
  //
  //
  // let i18nData = {};
  var debug = true;
  // let userId;
  //
  // function loadTranslations() {
  //     return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
  //         .then(json => {
  //             i18nData = json;
  //             translate();
  //
  //             var mutationObserver = new MutationObserver(function (mutations) {
  //                 translate();
  //             });
  //             mutationObserver.observe(document.getElementById('wheel'), {
  //                 childList: true,
  //                 subtree: true,
  //             });
  //
  //         });
  // }
  //
  // function translate() {
  //     const elems = document.querySelectorAll('[data-translate]')
  //     if (elems && elems.length) {
  //         elems.forEach(elem => {
  //             const key = elem.getAttribute('data-translate');
  //             elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  //             elem.removeAttribute('data-translate');
  //         })
  //     }
  //     refreshLocalizedClass();
  // }
  //
  // function refreshLocalizedClass(element, baseCssClass) {
  //     if (!element) {
  //         return;
  //     }
  //     for (const lang of ['hr', 'en']) {
  //         element.classList.remove(baseCssClass + lang);
  //     }
  //     element.classList.add(baseCssClass + locale);
  // }
  //
  // const request = function (link, extraOptions) {
  //     return fetch(apiURL + link, {
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         ...(extraOptions || {})
  //     }).then(res => res.json())
  // }
  //
  //
  // function init() {
  //     if (window.store) {
  //         var state = window.store.getState();
  //         userId = state.auth.isAuthorized && state.auth.id || '';
  //         setupPage();
  //     } else {
  //         setupPage();
  //         let c = 0;
  //         var i = setInterval(function () {
  //             if (c < 50) {
  //                 if (!!window.g_user_id) {
  //                     userId = window.g_user_id;
  //                     setupPage();
  //                     checkUserAuth();
  //                     clearInterval(i);
  //                 }
  //             } else {
  //                 clearInterval(i);
  //             }
  //         }, 200);
  //     }
  //
  //     checkUserAuth();
  //
  //     participateBtns.forEach((authBtn, i) => {
  //         authBtn.addEventListener('click', (e) => {
  //             e.preventDefault();
  //             participate();
  //         });
  //     });
  // }
  //
  // function setupPage() {}
  //
  // function participate() {
  //     if (!userId) {
  //         return;
  //     }
  //
  //     const params = {userid: userId};
  //     request('/user', {
  //         method: 'POST',
  //         body: JSON.stringify(params)
  //     }).then(res => {
  //         participateBtns.forEach(item => item.classList.add('hide'));
  //         wheelWrap.classList.remove('_sign');
  //         document.querySelector(".progress").classList.remove("_sign");
  //         setupPage();
  //     });
  // }
  //
  //
  //
  // function checkUserAuth() {
  //     if (userId) {
  //         for (const unauthMes of unauthMsgs) {
  //             unauthMes.classList.add('hide');
  //         }
  //         request(`/favuser/${userId}?nocache=1`)
  //             .then(res => {
  //                 if (res.userid) {
  //                     participateBtns.forEach(item => item.classList.add('hide'));
  //                     wheelWrap.classList.remove('_sign');
  //                     document.querySelector(".progress").classList.remove("_sign");
  //                     if (debug) {
  //                         res.pointsPerDay = 30;
  //                         res.spinAllowed = true;
  //                         res.spinsStreak = 3;
  //                     }
  //                     refreshUserInfo(res);
  //                     displayUserSpins(res.spins);
  //                 } else {
  //                     participateBtns.forEach(item => item.classList.remove('hide'));
  //                 }
  //             })
  //     } else {
  //         for (let participateBtn of participateBtns) {
  //             participateBtn.classList.add('hide');
  //         }
  //         for (const unauthMes of unauthMsgs) {
  //             unauthMes.classList.remove('hide');
  //         }
  //     }
  // }
  //
  // function displayUserSpins(spins) {
  //     const headDropItem = document.querySelector('.accordion__content-item.head-drop');
  //     const noSpinItem = document.querySelector('.accordion__content-item.no-spins');
  //
  //     if (!spins || spins.length === 0) {
  //         headDropItem.classList.add('hide');
  //         noSpinItem.classList.remove('hide');
  //         return;
  //     }
  //
  //     const spinsContainer = document.querySelector('.accordion__content-wrap');
  //     spinsContainer.innerHTML = '';
  //
  //     headDropItem.classList.remove('hide');
  //     noSpinItem.classList.add('hide');
  //
  //     spins.forEach(spin => {
  //         const spinDate = new Date(spin.date);
  //         const formattedDate = spinDate.toLocaleDateString('hr-HR');
  //         const spinName = translateKey(spin.name) || '';
  //
  //         const spinElement = document.createElement('div');
  //         spinElement.classList.add('accordion__content-item');
  //
  //         spinElement.innerHTML = `
  //         <span class="content-date">${formattedDate}</span>
  //         <span class="content-prize">${spinName}</span>
  //     `;
  //
  //         spinsContainer.appendChild(spinElement);
  //     });
  // }
  //
  // function translateKey(key) {
  //     if (!key) {
  //         return;
  //     }
  //     return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
  // }
  //
  // loadTranslations()
  //     .then(init);
  //
  // let mainPage = document.querySelector('.fav-page');
  // setTimeout(() => mainPage.classList.add('overflow'), 1000);
  //
  //
  // let i = 1;
  // function sendSpinRequest() {
  //     if (!userId) {
  //         return;
  //     }
  //
  //     if (debug) {
  //         return Promise.resolve({
  //             number: i++,
  //             type: 'test'
  //         });
  //     }
  //
  //     const params = {userid: userId};
  //     return request('/spin', {
  //         method: 'POST',
  //         body: JSON.stringify(params)
  //     });
  // }

  //Before Code
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
  // const randomInterval = Math.random() * (6000 - 4000) + 4000;
  function addFireworks(containerSelector, numberOfFireworks) {
    var fireworksWrap = document.createElement('div');
    fireworksWrap.className = 'fireworks-wrap';
    for (var i = 0; i < numberOfFireworks; i++) {
      var firework = document.createElement('div');
      firework.className = 'firework';
      fireworksWrap.appendChild(firework);
    }
    var container = document.querySelector(containerSelector);
    if (container) {
      container.appendChild(fireworksWrap);
    } else {
      console.error("\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0437 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u043C \"".concat(containerSelector, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
    }
  }
  function removeFireworks(containerSelector) {
    var container = document.querySelector(containerSelector);
    if (container) {
      var fireworksWrap = container.querySelector('.fireworks-wrap');
      if (fireworksWrap) {
        fireworksWrap.remove();
      } else {
        console.error("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0437 \u043A\u043B\u0430\u0441\u043E\u043C \".fireworks-wrap\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0432 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0456 ".concat(containerSelector, "."));
      }
    } else {
      console.error("\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0437 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u043C \"".concat(containerSelector, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
    }
  }
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
  bubleBtn.addEventListener("mouseover", function (e) {
    wheelBuble.classList.remove("_hidden");
  });
  bubleBtn.addEventListener("mouseout", function (e) {
    wheelBuble.classList.add("_hidden");
  });
  document.addEventListener("click", function (e) {
    return e.target === bubleBtn ? null : wheelBuble.classList.add("_hidden");
  });
  var prizes = ['iphone', 'ecoflow', 'merch', 'nothing', "bonuses"];
  function getRandomPrize(arr) {
    return arr[Math.floor(Math.random() * prizes.length)];
  }
  function showPopup(sections, wheel, showClass, streakBonus, spinBg, closeBtn, popupContainer, popup, classPrize) {
    // document.querySelector(".fav-page").classList.add("popupBg")
    if (classPrize) {
      popup.classList.add("".concat(classPrize));
    }
    if (classPrize === "respin") return;
    popup.classList.add("".concat(showClass));
    popup.classList.contains('_nothing') === true ? null : addFireworks(".popups", 7);
    streakBonus ? popup.classList.add("_done") : popup.classList.add("_incomplete");
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
    streakBonus ? popupBody.classList.add("_done") : popup.classList.add("_incomplete");
    document.querySelector(".fav-page").classList.remove("bgScale");
    function addAnim(arr, classAnim) {
      arr.forEach(function (item) {
        return item.classList.add("".concat(classAnim));
      });
    }
    //popup animations
    setTimeout(function () {
      popupBody.classList.add("popupMainAnim");
      addAnim(pers, "popupPersAnim");
      addAnim(buble, "popupBubleAnim");
    }, 100);
    setTimeout(function () {
      addAnim(prize, "popupPrizeAnim");
      popupTitle.forEach(function (item) {
        return item.classList.add("popupTitleAnim");
      });
    }, 600);
    setTimeout(function () {
      popupLeftArrow.forEach(function (item) {
        return item.classList.add("popupLeftArrAnim");
      });
      popupRightArrow.forEach(function (item) {
        return item.classList.add("popupRightArrAnim");
      });
    }, 1200);
    //popup animations
    closeBtn.addEventListener("click", function () {
      popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7);
      wheel.classList.add("_lock");
      document.querySelector(".progress").classList.add("_lock");
      wheel.classList.remove("wheelSizeIncrease");
      document.body.style.overflow = "auto";
      popupContainer.classList.remove("_opacity", "_zIndex");
      popup.classList.remove("".concat(showClass), '_done', '_incomplete');
      removeFireworks(".popups");
    }, {
      once: true
    });
    document.querySelectorAll('.popup__btn').forEach(function (btn) {
      return btn.addEventListener("click", function () {
        popup.classList.contains('_nothing') === true ? null : addFireworks(".wheel", 7);
        wheel.classList.add("_lock");
        document.querySelector(".progress").classList.add("_lock");
        wheel.classList.remove("wheelSizeIncrease");
        document.body.style.overflow = "auto";
        popupContainer.classList.remove("_opacity", "_zIndex");
        popup.classList.remove("".concat(showClass), '_done', '_incomplete');
        removeFireworks(".popups");
      }, {
        once: true
      });
    });
  }
  function spinWheel(position, animation, sections, btn, wheel, arrow, prize, spinBg, salut) {
    sections.addEventListener("animationend", function () {
      sections.style.transform = "translate(-50%, -50%) rotate(".concat(position, "deg)");
      sections.classList.remove("".concat(animation));
    }, {
      once: true
    });
    sections.classList.add("".concat(animation));
    arrow.style.opacity = "0";
    wheel.classList.add("wheelSizeIncrease");
    document.querySelector(".fav-page").classList.add("bgScale");
    document.querySelector(".sector-prize").style.opacity = "1";
    spinBg.classList.add("showSpinBg");
    if (animation !== "respinAnim") {
      btn.style.pointerEvents = "none";
    }
  }
  function initSpin(sections, btn, wheel, arrow, spinBg, salut, prize, streakBonus) {
    btn.addEventListener("click", function () {
      // sendSpinRequest().then(res => {
      //     console.log(res);
      //     if (!res || !!res.error) {
      //         btnWheel.classList.add('pulse-btn');
      //         btnWheel.classList.remove('_disabled')
      //         return;
      //     }
      // });

      // const prize = res.number;
      // const streakBonus = res.streakBonus || debug;
      // const streakBonus = true
      console.log(streakBonus);
      if (prize === "nothing") {
        popup.classList.add("_nothing");
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_nothing", streakBonus, spinBg, popupCloseBtn, popupContainer, popup);
        }, {
          once: true
        });
        spinWheel(1872, "nothingPrize", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs20") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs20");
        }, {
          once: true
        });
        spinWheel(1800, "fs20anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs25") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs25");
        }, {
          once: true
        });
        spinWheel(1762, "fs25anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs40") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs40");
        }, {
          once: true
        });
        spinWheel(2088, "fs40anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs50") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs50");
        }, {
          once: true
        });
        spinWheel(2052.5, "fs50anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "fs75") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "fs75");
        }, {
          once: true
        });
        spinWheel(2016.5, "fs75anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei15") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei15");
        }, {
          once: true
        });
        spinWheel(1980, "lei15anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei20") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei20");
        }, {
          once: true
        });
        spinWheel(1942, "lei20anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "lei30") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "lei20");
        }, {
          once: true
        });
        spinWheel(1908, "lei30anim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
      if (prize === "respin") {
        sections.addEventListener("animationend", function () {
          return showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "respin");
        }, {
          once: true
        });
        spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut);
      }
    });
  }
  initSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow, spinBg, salut, "lei30", streakBonus);
  //
  // function refreshUserInfo(userInfo) {
  //     refreshDailyPointsSection(userInfo);
  //     refreshWheel(userInfo);
  //     refreshStreak(userInfo);
  // }
  //
  // function refreshWheel(userInfo) {
  //     if (userInfo.spinAllowed) {
  //         return;
  //     }
  //     if (userInfo.pointsPerDay >= 50) {
  //         wheelWrap.classList.add('_lock');
  //     } else {
  //         wheelWrap.classList.add('_block');
  //     }
  // }
  //
  // function refreshDailyPointsSection(userInfo) {
  //     const points = Math.min(userInfo.pointsPerDay || 0, 50);
  //     const progressStatus = document.querySelector('.progress__bar-status');
  //     progressStatus.innerHTML = `${points} €`;
  //     const currentSpan = document.querySelector('.current');
  //     currentSpan.innerHTML = `${points}€`;
  //     const progressLine = document.querySelector('.progress__bar-line');
  //     const progress = points / 50.0 * 100;
  //     progressLine.style.width = `${progress}%`;
  // }
  //
  // function refreshStreak(userInfo) {
  //     const items = document.querySelectorAll('.wheel__days-item');
  //     let i = 0;
  //     let streak = userInfo.spinsStreak;
  //     for (let item of items) {
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (i < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         i++;
  //     }
  //
  //     const popupDays = document.querySelectorAll('.popup__days-item');
  //     let j = 0;
  //     for (let item of popupDays) {
  //         item.classList.remove('active');
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (j < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         j++;
  //     }
  //
  //     const mobileDays = document.querySelectorAll('.days__item');
  //     let k = 0;
  //     for (let item of mobileDays) {
  //         item.classList.remove('past');
  //         item.classList.remove('next');
  //         if (k < streak) {
  //             item.classList.add('past');
  //         } else {
  //             item.classList.add('next');
  //         }
  //         k++;
  //     }
  // }

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

  // for test

  var fs20 = document.querySelector('.fs20');
  var fs25 = document.querySelector('.fs25');
  var fs40 = document.querySelector('.fs40');
  var fs50 = document.querySelector('.fs50');
  var fs75 = document.querySelector('.fs75');
  var lei15 = document.querySelector('.lei15');
  var lei20 = document.querySelector('.lei20');
  var lei25 = document.querySelector('.lei25');
  var done = document.querySelector('.streak');
  var dropBonusButton = document.querySelector('.drop-bonus');
  var dropNothingButton = document.querySelector('.drop-nothing');
  var streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;
  if (streakBonus) {
    done.style.background = "green";
  }
  if (!streakBonus) {
    done.style.background = "red";
  }
  done.addEventListener("click", function () {
    streakBonus = !streakBonus;
    localStorage.setItem('streakBonus', JSON.stringify(streakBonus));
    streakBonus = JSON.parse(localStorage.getItem('streakBonus')) || false;
    console.log(streakBonus);
    window.location.reload();
  });
  document.querySelector(".drop-btn").addEventListener("click", function () {
    document.querySelector(".drop-menu").classList.toggle("_hidden");
  });
  initSpin(wheelSections, fs20, wheelWrap, wheelArrow, spinBg, salut, "fs20", streakBonus);
  initSpin(wheelSections, fs25, wheelWrap, wheelArrow, spinBg, salut, "fs25", streakBonus);
  initSpin(wheelSections, fs40, wheelWrap, wheelArrow, spinBg, salut, "fs40", streakBonus);
  initSpin(wheelSections, fs50, wheelWrap, wheelArrow, spinBg, salut, "fs50", streakBonus);
  initSpin(wheelSections, fs75, wheelWrap, wheelArrow, spinBg, salut, "fs75", streakBonus);
  initSpin(wheelSections, lei15, wheelWrap, wheelArrow, spinBg, salut, "lei15", streakBonus);
  initSpin(wheelSections, lei20, wheelWrap, wheelArrow, spinBg, salut, "lei20", streakBonus);
  initSpin(wheelSections, lei25, wheelWrap, wheelArrow, spinBg, salut, "lei25", streakBonus);
  // initSpin(wheelSections, dropBonusButton, wheelWrap, wheelArrow, spinBg, salut)
  initSpin(wheelSections, dropNothingButton, wheelWrap, wheelArrow, spinBg, salut, "nothing", streakBonus);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGVidWciLCJkYXlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicG9wdXBEYXlzIiwicG9wdXBEYXlzTW9iIiwiY3VycmVudERheSIsInNldERheXMiLCJmb3JFYWNoIiwiZGF5IiwiaSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRheXNSZW1pbmQiLCJjbGFzc0FuaW0iLCJkZWxheSIsInNldFRpbWVvdXQiLCJhZGQiLCJyZW1vdmUiLCJhZGRGaXJld29ya3MiLCJjb250YWluZXJTZWxlY3RvciIsIm51bWJlck9mRmlyZXdvcmtzIiwiZmlyZXdvcmtzV3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJmaXJld29yayIsImFwcGVuZENoaWxkIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsInJlbW92ZUZpcmV3b3JrcyIsInN0YXJ0UmFuZG9tSW50ZXJ2YWwiLCJyYW5kb21JbnRlcnZhbCIsIk1hdGgiLCJyYW5kb20iLCJ3aGVlbFNlY3Rpb25zIiwid2hlZWxXcmFwIiwid2hlZWxBcnJvdyIsIndoZWVsQnRuIiwic3BpbkJnIiwic2FsdXQiLCJidWJsZUJ0biIsIndoZWVsQnVibGUiLCJwb3B1cENvbnRhaW5lciIsInBvcHVwIiwicG9wdXBDbG9zZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwicHJpemVzIiwiZ2V0UmFuZG9tUHJpemUiLCJhcnIiLCJmbG9vciIsImxlbmd0aCIsInNob3dQb3B1cCIsInNlY3Rpb25zIiwid2hlZWwiLCJzaG93Q2xhc3MiLCJzdHJlYWtCb251cyIsImNsb3NlQnRuIiwiY2xhc3NQcml6ZSIsImNvbnRhaW5zIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJwZXJzIiwicHJpemUiLCJidWJsZSIsInBvcHVwQm9keSIsInBvcHVwVGl0bGUiLCJwb3B1cExlZnRBcnJvdyIsInBvcHVwUmlnaHRBcnJvdyIsImFkZEFuaW0iLCJpdGVtIiwib25jZSIsImJ0biIsInNwaW5XaGVlbCIsInBvc2l0aW9uIiwiYW5pbWF0aW9uIiwiYXJyb3ciLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImluaXRTcGluIiwibG9nIiwiYWNjb3JkaW9uSGVhZGVycyIsImhlYWRlciIsImNvbnRlbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJkaXNwbGF5IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImZzMjAiLCJmczI1IiwiZnM0MCIsImZzNTAiLCJmczc1IiwibGVpMTUiLCJsZWkyMCIsImxlaTI1IiwiZG9uZSIsImRyb3BCb251c0J1dHRvbiIsImRyb3BOb3RoaW5nQnV0dG9uIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJhY2tncm91bmQiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxZQUFZO0VBQ1Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFNQSxLQUFLLEdBQUcsSUFBSTtFQUNsQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0EsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0VBQzNELElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUNoRSxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0VBQzdELElBQUlHLFVBQVUsR0FBRyxDQUFDO0VBQ2xCLFNBQVNDLE9B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QUFVLEVBQUVFLE1BQU0sRUFBRUMsS0FBSyxFQUFFLE1BQU0sRUFBRWtCLFdBQVcsQ0FBQztFQUN4RnlCLFFBQVEsQ0FBQ2hELGFBQWEsRUFBRTZELEtBQUssRUFBRTVELFNBQVMsRUFBRUMsVUFBVSxFQUFFRSxNQUFNLEVBQUVDLEtBQUssRUFBRSxPQUFPLEVBQUVrQixXQUFXLENBQUM7RUFDMUZ5QixRQUFRLENBQUNoRCxhQUFhLEVBQUU4RCxLQUFLLEVBQUU3RCxTQUFTLEVBQUVDLFVBQVUsRUFBRUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsT0FBTyxFQUFFa0IsV0FBVyxDQUFDO0VBQzFGeUIsUUFBUSxDQUFDaEQsYUFBYSxFQUFFK0QsS0FBSyxFQUFFOUQsU0FBUyxFQUFFQyxVQUFVLEVBQUVFLE1BQU0sRUFBRUMsS0FBSyxFQUFFLE9BQU8sRUFBRWtCLFdBQVcsQ0FBQztFQUMxRjtFQUNBeUIsUUFBUSxDQUFDaEQsYUFBYSxFQUFFa0UsaUJBQWlCLEVBQUVqRSxTQUFTLEVBQUVDLFVBQVUsRUFBRUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsU0FBUyxFQUFFa0IsV0FBVyxDQUFDO0FBRzVHLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3doZWVsX2hyJztcbiAgICAvL1xuICAgIC8vIGNvbnN0XG4gICAgLy8gICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgIC8vICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICAvLyBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG4gICAgLy9cbiAgICAvLyBsZXQgbG9jYWxlID0gJ2VuJztcbiAgICAvL1xuICAgIC8vIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgLy8gaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgZGVidWcgPSB0cnVlO1xuICAgIC8vIGxldCB1c2VySWQ7XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgIC8vICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS90cmFuc2xhdGVzLyR7bG9jYWxlfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLy8gICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgLy8gICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVlbCcpLCB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgIC8vICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgIC8vICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgLy8gICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIC8vICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgLy8gICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcygpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAvLyAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgIC8vICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgLy8gICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7XG4gICAgLy8gICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAvLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAvLyAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAvLyAgICAgICAgIHZhciBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIC8vICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAvLyAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgLy8gICAgICAgICBsZXQgYyA9IDA7XG4gICAgLy8gICAgICAgICB2YXIgaSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICghIXdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0sIDIwMCk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgLy9cbiAgICAvLyAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goKGF1dGhCdG4sIGkpID0+IHtcbiAgICAvLyAgICAgICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICAgICAgICBwYXJ0aWNpcGF0ZSgpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHNldHVwUGFnZSgpIHt9XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAvLyAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IHBhcmFtcyA9IHt1c2VyaWQ6IHVzZXJJZH07XG4gICAgLy8gICAgIHJlcXVlc3QoJy91c2VyJywge1xuICAgIC8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgLy8gICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgICAgICAgIHBhcnRpY2lwYXRlQnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuICAgIC8vICAgICAgICAgd2hlZWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19zaWduJyk7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2lnblwiKTtcbiAgICAvLyAgICAgICAgIHNldHVwUGFnZSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvL1xuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAvLyAgICAgaWYgKHVzZXJJZCkge1xuICAgIC8vICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgIC8vICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYClcbiAgICAvLyAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX3NpZ24nKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NcIikuY2xhc3NMaXN0LnJlbW92ZShcIl9zaWduXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnBvaW50c1BlckRheSA9IDMwO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zcGluQWxsb3dlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNwaW5zU3RyZWFrID0gMztcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hVc2VySW5mbyhyZXMpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVVzZXJTcGlucyhyZXMuc3BpbnMpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgZm9yIChsZXQgcGFydGljaXBhdGVCdG4gb2YgcGFydGljaXBhdGVCdG5zKSB7XG4gICAgLy8gICAgICAgICAgICAgcGFydGljaXBhdGVCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZm9yIChjb25zdCB1bmF1dGhNZXMgb2YgdW5hdXRoTXNncykge1xuICAgIC8vICAgICAgICAgICAgIHVuYXV0aE1lcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBkaXNwbGF5VXNlclNwaW5zKHNwaW5zKSB7XG4gICAgLy8gICAgIGNvbnN0IGhlYWREcm9wSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2NvbnRlbnQtaXRlbS5oZWFkLWRyb3AnKTtcbiAgICAvLyAgICAgY29uc3Qgbm9TcGluSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2NvbnRlbnQtaXRlbS5uby1zcGlucycpO1xuICAgIC8vXG4gICAgLy8gICAgIGlmICghc3BpbnMgfHwgc3BpbnMubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gICAgICAgICBoZWFkRHJvcEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIC8vICAgICAgICAgbm9TcGluSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBzcGluc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fX2NvbnRlbnQtd3JhcCcpO1xuICAgIC8vICAgICBzcGluc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAvL1xuICAgIC8vICAgICBoZWFkRHJvcEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIC8vICAgICBub1NwaW5JdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAvL1xuICAgIC8vICAgICBzcGlucy5mb3JFYWNoKHNwaW4gPT4ge1xuICAgIC8vICAgICAgICAgY29uc3Qgc3BpbkRhdGUgPSBuZXcgRGF0ZShzcGluLmRhdGUpO1xuICAgIC8vICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHNwaW5EYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnaHItSFInKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IHNwaW5OYW1lID0gdHJhbnNsYXRlS2V5KHNwaW4ubmFtZSkgfHwgJyc7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnN0IHNwaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICAgICAgICBzcGluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2NvbnRlbnQtaXRlbScpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICBzcGluRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgLy8gICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtZGF0ZVwiPiR7Zm9ybWF0dGVkRGF0ZX08L3NwYW4+XG4gICAgLy8gICAgICAgICA8c3BhbiBjbGFzcz1cImNvbnRlbnQtcHJpemVcIj4ke3NwaW5OYW1lfTwvc3Bhbj5cbiAgICAvLyAgICAgYDtcbiAgICAvL1xuICAgIC8vICAgICAgICAgc3BpbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BpbkVsZW1lbnQpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgLy8gICAgIGlmICgha2V5KSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGxvYWRUcmFuc2xhdGlvbnMoKVxuICAgIC8vICAgICAudGhlbihpbml0KTtcbiAgICAvL1xuICAgIC8vIGxldCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3cnKSwgMTAwMCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIGxldCBpID0gMTtcbiAgICAvLyBmdW5jdGlvbiBzZW5kU3BpblJlcXVlc3QoKSB7XG4gICAgLy8gICAgIGlmICghdXNlcklkKSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBpZiAoZGVidWcpIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgIC8vICAgICAgICAgICAgIG51bWJlcjogaSsrLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6ICd0ZXN0J1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwYXJhbXMgPSB7dXNlcmlkOiB1c2VySWR9O1xuICAgIC8vICAgICByZXR1cm4gcmVxdWVzdCgnL3NwaW4nLCB7XG4gICAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAvLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy9CZWZvcmUgQ29kZVxuICAgIGNvbnN0IGRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndoZWVsX19kYXlzLWl0ZW1cIilcbiAgICBjb25zdCBwb3B1cERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19kYXlzLWl0ZW1cIik7XG4gICAgY29uc3QgcG9wdXBEYXlzTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXlzX19pdGVtXCIpO1xuICAgIGxldCBjdXJyZW50RGF5ID0gNVxuICAgIGZ1bmN0aW9uIHNldERheXMoZGF5cywgY3VycmVudERheSl7XG4gICAgICAgIGRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PntcbiAgICAgICAgICAgICsraVxuICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJuZXh0XCIsIGkgPiBjdXJyZW50RGF5KTtcbiAgICAgICAgICAgIGRheS5jbGFzc0xpc3QudG9nZ2xlKFwicGFzdFwiLCBpIDwgY3VycmVudERheSk7XG4gICAgICAgICAgICBkYXkuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiLCBpID09PSBjdXJyZW50RGF5KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZGF5c1JlbWluZChkYXlzLCBjbGFzc0FuaW0pIHtcbiAgICAgICAgbGV0IGRlbGF5ID0gOTAwO1xuICAgICAgICBkYXlzLmZvckVhY2goKGRheSwgaSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoY2xhc3NBbmltKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRheS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzQW5pbSksIDEyMDApXG4gICAgICAgICAgICB9LCBkZWxheSAqIGkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gY29uc3QgcmFuZG9tSW50ZXJ2YWwgPSBNYXRoLnJhbmRvbSgpICogKDYwMDAgLSA0MDAwKSArIDQwMDA7XG4gICAgZnVuY3Rpb24gYWRkRmlyZXdvcmtzKGNvbnRhaW5lclNlbGVjdG9yLCBudW1iZXJPZkZpcmV3b3Jrcykge1xuICAgICAgICBjb25zdCBmaXJld29ya3NXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpcmV3b3Jrc1dyYXAuY2xhc3NOYW1lID0gJ2ZpcmV3b3Jrcy13cmFwJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkZpcmV3b3JrczsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJld29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZmlyZXdvcmsuY2xhc3NOYW1lID0gJ2ZpcmV3b3JrJztcbiAgICAgICAgICAgIGZpcmV3b3Jrc1dyYXAuYXBwZW5kQ2hpbGQoZmlyZXdvcmspO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyZXdvcmtzV3JhcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGDQmtC+0L3RgtC10LnQvdC10YAg0Lcg0YHQtdC70LXQutGC0L7RgNC+0LwgXCIke2NvbnRhaW5lclNlbGVjdG9yfVwiINC90LUg0LfQvdCw0LnQtNC10L3Qvi5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVGaXJld29ya3MoY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcmV3b3Jrc1dyYXAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZpcmV3b3Jrcy13cmFwJyk7XG4gICAgICAgICAgICBpZiAoZmlyZXdvcmtzV3JhcCkge1xuICAgICAgICAgICAgICAgIGZpcmV3b3Jrc1dyYXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYNCV0LvQtdC80LXQvdGCINC3INC60LvQsNGB0L7QvCBcIi5maXJld29ya3Mtd3JhcFwiINC90LUg0LfQvdCw0LnQtNC10L3QviDQsiDQutC+0L3RgtC10LnQvdC10YDRliAke2NvbnRhaW5lclNlbGVjdG9yfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYNCa0L7QvdGC0LXQudC90LXRgCDQtyDRgdC10LvQtdC60YLQvtGA0L7QvCBcIiR7Y29udGFpbmVyU2VsZWN0b3J9XCIg0L3QtSDQt9C90LDQudC00LXQvdC+LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0YXJ0UmFuZG9tSW50ZXJ2YWwoKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUludGVydmFsID0gTWF0aC5yYW5kb20oKSAqICgyMDAwMCAtIDEwMDAwKSArIDEwMDAwOyAvLyDQktC40L/QsNC00LrQvtCy0LjQuSDRltC90YLQtdGA0LLQsNC7INC80ZbQtiAxMCDRliAyMCDRgdC10LrRg9C90LTQsNC80LhcbiAgICAgICAgZGF5c1JlbWluZChkYXlzLCBcInJlbWluZFwiKTtcbiAgICAgICAgZGF5c1JlbWluZChwb3B1cERheXMsIFwicmVtaW5kXCIpO1xuICAgICAgICBkYXlzUmVtaW5kKHBvcHVwRGF5c01vYiwgXCJyZW1pbmRcIik7XG4gICAgICAgIHNldFRpbWVvdXQoc3RhcnRSYW5kb21JbnRlcnZhbCwgcmFuZG9tSW50ZXJ2YWwpO1xuICAgIH1cbiAgICBzdGFydFJhbmRvbUludGVydmFsKCk7XG4gICAgZGF5c1JlbWluZChkYXlzLCBcInJlbWluZFwiKVxuICAgIHNldERheXMoZGF5cywgY3VycmVudERheSlcbiAgICBzZXREYXlzKHBvcHVwRGF5cywgY3VycmVudERheSlcbiAgICBzZXREYXlzKHBvcHVwRGF5c01vYiwgY3VycmVudERheSlcblxuLy8vIHdoZWVsIGxvZ2ljXG4gICAgY29uc3Qgd2hlZWxTZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX3NlY3Rpb25zXCIpXG4gICAgY29uc3Qgd2hlZWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fd3JhcFwiKVxuICAgIGNvbnN0IHdoZWVsQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19hcnJvd1wiKVxuICAgIGNvbnN0IHdoZWVsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fYnRuXCIpXG4gICAgY29uc3Qgc3BpbkJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGluLWJnXCIpXG4gICAgY29uc3Qgc2FsdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpcmV3b3Jrcy13cmFwXCIpXG4gICAgY29uc3QgYnVibGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19kYXlzLWljb25zXCIpXG4gICAgY29uc3Qgd2hlZWxCdWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX2J1YmxlXCIpXG4gICAgY29uc3QgcG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKVxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKVxuICAgIGNvbnN0IHBvcHVwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKVxuXG4gICAgYnVibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT57XG4gICAgICAgIHdoZWVsQnVibGUuY2xhc3NMaXN0LnJlbW92ZShcIl9oaWRkZW5cIilcbiAgICB9KVxuICAgIGJ1YmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT57XG4gICAgICAgIHdoZWVsQnVibGUuY2xhc3NMaXN0LmFkZChcIl9oaWRkZW5cIilcbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGUudGFyZ2V0ID09PSBidWJsZUJ0biA/IG51bGwgOiB3aGVlbEJ1YmxlLmNsYXNzTGlzdC5hZGQoXCJfaGlkZGVuXCIpKVxuICAgIGxldCBwcml6ZXMgPSBbJ2lwaG9uZScsICdlY29mbG93JywgJ21lcmNoJywgJ25vdGhpbmcnLCBcImJvbnVzZXNcIl1cbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Qcml6ZShhcnIpIHtcbiAgICAgICAgcmV0dXJuIGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcml6ZXMubGVuZ3RoKV07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIHNob3dDbGFzcywgc3RyZWFrQm9udXMsIHNwaW5CZywgY2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgY2xhc3NQcml6ZSl7XG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LmFkZChcInBvcHVwQmdcIilcbiAgICAgICAgaWYoY2xhc3NQcml6ZSl7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzUHJpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2xhc3NQcml6ZSA9PT0gXCJyZXNwaW5cIikgcmV0dXJuXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoYCR7c2hvd0NsYXNzfWApXG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnX25vdGhpbmcnKSA9PT0gdHJ1ZSA/IG51bGwgOiBhZGRGaXJld29ya3MoXCIucG9wdXBzXCIsIDcpXG4gICAgICAgIHN0cmVha0JvbnVzID8gcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9pbmNvbXBsZXRlXCIpXG4gICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCJcbiAgICAgICAgc3BpbkJnLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93U3BpbkJnXCIpXG4gICAgICAgIGNvbnN0IHBlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19wZXJzXCIpXG4gICAgICAgIGNvbnN0IHByaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fcHJpemVcIilcbiAgICAgICAgY29uc3QgYnVibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19idWJsZVwiKVxuICAgICAgICBjb25zdCBwb3B1cEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19tYWluXCIpXG4gICAgICAgIGNvbnN0IHBvcHVwVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX190aXRsZVwiKVxuICAgICAgICBjb25zdCBwb3B1cExlZnRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2RlY29yLWxlZnRcIilcbiAgICAgICAgY29uc3QgcG9wdXBSaWdodEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9fZGVjb3ItcmlnaHRcIilcbiAgICAgICAgc3RyZWFrQm9udXMgPyBwb3B1cEJvZHkuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpIDogcG9wdXAuY2xhc3NMaXN0LmFkZChcIl9pbmNvbXBsZXRlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImJnU2NhbGVcIilcbiAgICAgICAgZnVuY3Rpb24gYWRkQW5pbShhcnIsIGNsYXNzQW5pbSl7XG4gICAgICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtjbGFzc0FuaW19YCkgKVxuICAgICAgICB9XG4gICAgICAgIC8vcG9wdXAgYW5pbWF0aW9uc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgcG9wdXBCb2R5LmNsYXNzTGlzdC5hZGQoXCJwb3B1cE1haW5BbmltXCIpXG4gICAgICAgICAgICBhZGRBbmltKHBlcnMsIFwicG9wdXBQZXJzQW5pbVwiKVxuICAgICAgICAgICAgYWRkQW5pbShidWJsZSwgXCJwb3B1cEJ1YmxlQW5pbVwiKVxuICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgIGFkZEFuaW0ocHJpemUsIFwicG9wdXBQcml6ZUFuaW1cIilcbiAgICAgICAgICAgIHBvcHVwVGl0bGUuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwVGl0bGVBbmltXCIpKVxuXG4gICAgICAgIH0sIDYwMClcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBMZWZ0QXJyb3cuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwTGVmdEFyckFuaW1cIikpXG4gICAgICAgICAgICBwb3B1cFJpZ2h0QXJyb3cuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZChcInBvcHVwUmlnaHRBcnJBbmltXCIpKVxuICAgICAgICB9LCAxMjAwKVxuICAgICAgICAvL3BvcHVwIGFuaW1hdGlvbnNcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbm90aGluZycpID09PSB0cnVlID8gbnVsbCA6IGFkZEZpcmV3b3JrcyhcIi53aGVlbFwiLCA3KVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hvd0NsYXNzfWAsICdfZG9uZScsICdfaW5jb21wbGV0ZScpXG4gICAgICAgICAgICByZW1vdmVGaXJld29ya3MoXCIucG9wdXBzXCIpO1xuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2J0bicpLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbm90aGluZycpID09PSB0cnVlID8gbnVsbCA6IGFkZEZpcmV3b3JrcyhcIi53aGVlbFwiLCA3KVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzXCIpLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKVxuICAgICAgICAgICAgd2hlZWwuY2xhc3NMaXN0LnJlbW92ZShcIndoZWVsU2l6ZUluY3JlYXNlXCIpXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgICAgIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BhY2l0eVwiLCBcIl96SW5kZXhcIilcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2hvd0NsYXNzfWAsICdfZG9uZScsICdfaW5jb21wbGV0ZScpXG4gICAgICAgICAgICByZW1vdmVGaXJld29ya3MoXCIucG9wdXBzXCIpO1xuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcGluV2hlZWwocG9zaXRpb24sIGFuaW1hdGlvbiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dCl7XG4gICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT57XG4gICAgICAgICAgICBzZWN0aW9ucy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgke3Bvc2l0aW9ufWRlZylgXG4gICAgICAgICAgICBzZWN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKGAke2FuaW1hdGlvbn1gKVxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pXG4gICAgICAgIHNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoYCR7YW5pbWF0aW9ufWApXG4gICAgICAgIGFycm93LnN0eWxlLm9wYWNpdHkgPSBcIjBcIlxuICAgICAgICB3aGVlbC5jbGFzc0xpc3QuYWRkKFwid2hlZWxTaXplSW5jcmVhc2VcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKS5jbGFzc0xpc3QuYWRkKFwiYmdTY2FsZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlY3Rvci1wcml6ZVwiKS5zdHlsZS5vcGFjaXR5ID0gXCIxXCJcbiAgICAgICAgc3BpbkJnLmNsYXNzTGlzdC5hZGQoXCJzaG93U3BpbkJnXCIpXG4gICAgICAgIGlmKGFuaW1hdGlvbiAhPT0gXCJyZXNwaW5BbmltXCIpe1xuICAgICAgICAgICAgYnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbml0U3BpbihzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHNwaW5CZywgc2FsdXQsIHByaXplLCBzdHJlYWtCb251cykge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgLy8gc2VuZFNwaW5SZXF1ZXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAvLyAgICAgaWYgKCFyZXMgfHwgISFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgYnRuV2hlZWwuY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGJ0bldoZWVsLmNsYXNzTGlzdC5yZW1vdmUoJ19kaXNhYmxlZCcpXG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcblxuXG4gICAgICAgICAgICAvLyBjb25zdCBwcml6ZSA9IHJlcy5udW1iZXI7XG4gICAgICAgICAgICAvLyBjb25zdCBzdHJlYWtCb251cyA9IHJlcy5zdHJlYWtCb251cyB8fCBkZWJ1ZztcbiAgICAgICAgICAgIC8vIGNvbnN0IHN0cmVha0JvbnVzID0gdHJ1ZVxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyZWFrQm9udXMpXG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJub3RoaW5nXCIpe1xuICAgICAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJfbm90aGluZ1wiKVxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCxcIl9ub3RoaW5nXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTg3MiwgXCJub3RoaW5nUHJpemVcIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzMjBcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnMyMFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxODAwLCBcImZzMjBhbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJmczI1XCIpe1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcImZzMjVcIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTc2MiwgXCJmczI1YW5pbVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJpemUgPT09IFwiZnM0MFwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJmczQwXCIpLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgc3BpbldoZWVsKDIwODgsIFwiZnM0MGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzNTBcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnM1MFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgyMDUyLjUsIFwiZnM1MGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImZzNzVcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwiZnM3NVwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgyMDE2LjUsIFwiZnM3NWFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcImxlaTE1XCIpe1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgKCkgPT4gc2hvd1BvcHVwKHNlY3Rpb25zLCB3aGVlbCwgXCJfYm9udXNcIiwgc3RyZWFrQm9udXMsIHNwaW5CZywgcG9wdXBDbG9zZUJ0biwgcG9wdXBDb250YWluZXIsIHBvcHVwLCBcImxlaTE1XCIpLCB7b25jZTogdHJ1ZX0pXG4gICAgICAgICAgICAgICAgc3BpbldoZWVsKDE5ODAsIFwibGVpMTVhbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihwcml6ZSA9PT0gXCJsZWkyMFwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJsZWkyMFwiKSwge29uY2U6IHRydWV9KVxuICAgICAgICAgICAgICAgIHNwaW5XaGVlbCgxOTQyLCBcImxlaTIwYW5pbVwiLCBzZWN0aW9ucywgYnRuLCB3aGVlbCwgYXJyb3csIHByaXplLCBzcGluQmcsIHNhbHV0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYocHJpemUgPT09IFwibGVpMzBcIil7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiBzaG93UG9wdXAoc2VjdGlvbnMsIHdoZWVsLCBcIl9ib251c1wiLCBzdHJlYWtCb251cywgc3BpbkJnLCBwb3B1cENsb3NlQnRuLCBwb3B1cENvbnRhaW5lciwgcG9wdXAsIFwibGVpMjBcIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoMTkwOCwgXCJsZWkzMGFuaW1cIiwgc2VjdGlvbnMsIGJ0biwgd2hlZWwsIGFycm93LCBwcml6ZSwgc3BpbkJnLCBzYWx1dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByaXplID09PSBcInJlc3BpblwiKXtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsICgpID0+IHNob3dQb3B1cChzZWN0aW9ucywgd2hlZWwsIFwiX2JvbnVzXCIsIHN0cmVha0JvbnVzLCBzcGluQmcsIHBvcHVwQ2xvc2VCdG4sIHBvcHVwQ29udGFpbmVyLCBwb3B1cCwgXCJyZXNwaW5cIiksIHtvbmNlOiB0cnVlfSlcbiAgICAgICAgICAgICAgICBzcGluV2hlZWwoNzIuNSwgXCJyZXNwaW5BbmltXCIsIHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdywgcHJpemUsIHNwaW5CZywgc2FsdXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIHdoZWVsQnRuLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQsIFwibGVpMzBcIiwgc3RyZWFrQm9udXMpXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiByZWZyZXNoVXNlckluZm8odXNlckluZm8pIHtcbiAgICAvLyAgICAgcmVmcmVzaERhaWx5UG9pbnRzU2VjdGlvbih1c2VySW5mbyk7XG4gICAgLy8gICAgIHJlZnJlc2hXaGVlbCh1c2VySW5mbyk7XG4gICAgLy8gICAgIHJlZnJlc2hTdHJlYWsodXNlckluZm8pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hXaGVlbCh1c2VySW5mbykge1xuICAgIC8vICAgICBpZiAodXNlckluZm8uc3BpbkFsbG93ZWQpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodXNlckluZm8ucG9pbnRzUGVyRGF5ID49IDUwKSB7XG4gICAgLy8gICAgICAgICB3aGVlbFdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHdoZWVsV3JhcC5jbGFzc0xpc3QuYWRkKCdfYmxvY2snKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIHJlZnJlc2hEYWlseVBvaW50c1NlY3Rpb24odXNlckluZm8pIHtcbiAgICAvLyAgICAgY29uc3QgcG9pbnRzID0gTWF0aC5taW4odXNlckluZm8ucG9pbnRzUGVyRGF5IHx8IDAsIDUwKTtcbiAgICAvLyAgICAgY29uc3QgcHJvZ3Jlc3NTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2Jhci1zdGF0dXMnKTtcbiAgICAvLyAgICAgcHJvZ3Jlc3NTdGF0dXMuaW5uZXJIVE1MID0gYCR7cG9pbnRzfSDigqxgO1xuICAgIC8vICAgICBjb25zdCBjdXJyZW50U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50Jyk7XG4gICAgLy8gICAgIGN1cnJlbnRTcGFuLmlubmVySFRNTCA9IGAke3BvaW50c33igqxgO1xuICAgIC8vICAgICBjb25zdCBwcm9ncmVzc0xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NfX2Jhci1saW5lJyk7XG4gICAgLy8gICAgIGNvbnN0IHByb2dyZXNzID0gcG9pbnRzIC8gNTAuMCAqIDEwMDtcbiAgICAvLyAgICAgcHJvZ3Jlc3NMaW5lLnN0eWxlLndpZHRoID0gYCR7cHJvZ3Jlc3N9JWA7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gcmVmcmVzaFN0cmVhayh1c2VySW5mbykge1xuICAgIC8vICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aGVlbF9fZGF5cy1pdGVtJyk7XG4gICAgLy8gICAgIGxldCBpID0gMDtcbiAgICAvLyAgICAgbGV0IHN0cmVhayA9IHVzZXJJbmZvLnNwaW5zU3RyZWFrO1xuICAgIC8vICAgICBmb3IgKGxldCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgaWYgKGkgPCBzdHJlYWspIHtcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpKys7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwb3B1cERheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2RheXMtaXRlbScpO1xuICAgIC8vICAgICBsZXQgaiA9IDA7XG4gICAgLy8gICAgIGZvciAobGV0IGl0ZW0gb2YgcG9wdXBEYXlzKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwYXN0Jyk7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25leHQnKTtcbiAgICAvLyAgICAgICAgIGlmIChqIDwgc3RyZWFrKSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwYXN0Jyk7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaisrO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgY29uc3QgbW9iaWxlRGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXlzX19pdGVtJyk7XG4gICAgLy8gICAgIGxldCBrID0gMDtcbiAgICAvLyAgICAgZm9yIChsZXQgaXRlbSBvZiBtb2JpbGVEYXlzKSB7XG4gICAgLy8gICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbmV4dCcpO1xuICAgIC8vICAgICAgICAgaWYgKGsgPCBzdHJlYWspIHtcbiAgICAvLyAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Bhc3QnKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBrKys7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cblxuLy8vLyBhY2NvcmRpb25cbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9faGVhZGVyJyk7XG4gICAgYWNjb3JkaW9uSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBoZWFkZXIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fY29udGVudCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IGZzMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnMyMCcpXG4gICAgY29uc3QgZnMyNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mczI1JylcbiAgICBjb25zdCBmczQwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZzNDAnKVxuICAgIGNvbnN0IGZzNTAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnM1MCcpXG4gICAgY29uc3QgZnM3NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mczc1JylcbiAgICBjb25zdCBsZWkxNSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWkxNScpXG4gICAgY29uc3QgbGVpMjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVpMjAnKVxuICAgIGNvbnN0IGxlaTI1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlaTI1JylcbiAgICBjb25zdCBkb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0cmVhaycpXG4gICAgY29uc3QgZHJvcEJvbnVzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AtYm9udXMnKTtcbiAgICBjb25zdCBkcm9wTm90aGluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLW5vdGhpbmcnKTtcblxuICAgIHZhciBzdHJlYWtCb251cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0cmVha0JvbnVzJykpIHx8IGZhbHNlO1xuXG4gICAgaWYoc3RyZWFrQm9udXMpe1xuICAgICAgICBkb25lLnN0eWxlLmJhY2tncm91bmQgPSBcImdyZWVuXCJcbiAgICB9XG4gICAgaWYoIXN0cmVha0JvbnVzKXtcbiAgICAgICAgZG9uZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIlxuICAgIH1cblxuICAgIGRvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc3RyZWFrQm9udXMgPSAhc3RyZWFrQm9udXM7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdHJlYWtCb251cycsIEpTT04uc3RyaW5naWZ5KHN0cmVha0JvbnVzKSk7XG4gICAgICAgIHN0cmVha0JvbnVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RyZWFrQm9udXMnKSkgfHwgZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0cmVha0JvbnVzKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcblxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1tZW51XCIpLmNsYXNzTGlzdC50b2dnbGUoXCJfaGlkZGVuXCIpXG4gICAgfSlcblxuXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZnMyMCwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImZzMjBcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZnMyNSwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImZzMjVcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZnM0MCwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImZzNDBcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZnM1MCwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImZzNTBcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZnM3NSwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImZzNzVcIiwgc3RyZWFrQm9udXMpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgbGVpMTUsIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJsZWkxNVwiLCBzdHJlYWtCb251cylcbiAgICBpbml0U3Bpbih3aGVlbFNlY3Rpb25zLCBsZWkyMCwgd2hlZWxXcmFwLCB3aGVlbEFycm93LCBzcGluQmcsIHNhbHV0LCBcImxlaTIwXCIsIHN0cmVha0JvbnVzKVxuICAgIGluaXRTcGluKHdoZWVsU2VjdGlvbnMsIGxlaTI1LCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQsIFwibGVpMjVcIiwgc3RyZWFrQm9udXMpXG4gICAgLy8gaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcEJvbnVzQnV0dG9uLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3csIHNwaW5CZywgc2FsdXQpXG4gICAgaW5pdFNwaW4od2hlZWxTZWN0aW9ucywgZHJvcE5vdGhpbmdCdXR0b24sIHdoZWVsV3JhcCwgd2hlZWxBcnJvdywgc3BpbkJnLCBzYWx1dCwgXCJub3RoaW5nXCIsIHN0cmVha0JvbnVzKVxuXG5cbn0pKCk7XG4iXX0=
