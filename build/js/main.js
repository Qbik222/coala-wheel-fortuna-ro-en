"use strict";

var days = document.querySelectorAll(".wheel__days-item");
var currentDay = 5;
days.forEach(function (day, i) {
  ++i;
  day.classList.toggle("next", i > currentDay);
  day.classList.toggle("past", i < currentDay);
  day.classList.toggle("active", i === currentDay);
});
var wheelSections = document.querySelector(".wheel__sections");
var wheelWrap = document.querySelector(".wheel__wrap");
var wheelArrow = document.querySelector(".wheel__arrow");
var wheelBtn = document.querySelector(".wheel__btn");
function firstSpin(sections, btn, wheel, arrow) {
  btn.addEventListener("click", function () {
    sections.addEventListener("animationend", function () {
      sections.style.transform = "translate(-50%, -50%) rotate(1605deg)";
      console.log("dsadsa");
    }, {
      once: true
    });
    sections.classList.add("wheelSpin");
    arrow.style.opacity = "0";
    wheel.style.transform = "scale(1.2)";
  });
}
firstSpin(wheelSections, wheelBtn, wheelWrap, wheelArrow);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGF5cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnREYXkiLCJmb3JFYWNoIiwiZGF5IiwiaSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIndoZWVsU2VjdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwid2hlZWxXcmFwIiwid2hlZWxBcnJvdyIsIndoZWVsQnRuIiwiZmlyc3RTcGluIiwic2VjdGlvbnMiLCJidG4iLCJ3aGVlbCIsImFycm93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwidHJhbnNmb3JtIiwiY29uc29sZSIsImxvZyIsIm9uY2UiLCJhZGQiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztBQUMzRCxJQUFJQyxVQUFVLEdBQUcsQ0FBQztBQUVsQkgsSUFBSSxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxDQUFDLEVBQUk7RUFDcEIsRUFBRUEsQ0FBQztFQUNIRCxHQUFHLENBQUNFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sRUFBRUYsQ0FBQyxHQUFHSCxVQUFVLENBQUM7RUFDNUNFLEdBQUcsQ0FBQ0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxFQUFFRixDQUFDLEdBQUdILFVBQVUsQ0FBQztFQUM1Q0UsR0FBRyxDQUFDRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVGLENBQUMsS0FBS0gsVUFBVSxDQUFDO0FBQ3BELENBQUMsQ0FBQztBQUVGLElBQU1NLGFBQWEsR0FBR1IsUUFBUSxDQUFDUyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDaEUsSUFBTUMsU0FBUyxHQUFHVixRQUFRLENBQUNTLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDeEQsSUFBTUUsVUFBVSxHQUFHWCxRQUFRLENBQUNTLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDMUQsSUFBTUcsUUFBUSxHQUFHWixRQUFRLENBQUNTLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFFdEQsU0FBU0ksU0FBUyxDQUFDQyxRQUFRLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUM7RUFDM0NGLEdBQUcsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDL0JKLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFlBQUs7TUFDM0NKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxTQUFTLEdBQUcsdUNBQXVDO01BQ2xFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQyxFQUFFO01BQUNDLElBQUksRUFBRTtJQUFJLENBQUMsQ0FBQztJQUNoQlQsUUFBUSxDQUFDUixTQUFTLENBQUNrQixHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ25DUCxLQUFLLENBQUNFLEtBQUssQ0FBQ00sT0FBTyxHQUFHLEdBQUc7SUFDekJULEtBQUssQ0FBQ0csS0FBSyxDQUFDQyxTQUFTLEdBQUcsWUFBWTtFQUN4QyxDQUFDLENBQUM7QUFDTjtBQUVBUCxTQUFTLENBQUNMLGFBQWEsRUFBRUksUUFBUSxFQUFFRixTQUFTLEVBQUVDLFVBQVUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2hlZWxfX2RheXMtaXRlbVwiKVxubGV0IGN1cnJlbnREYXkgPSA1XG5cbmRheXMuZm9yRWFjaCgoZGF5LCBpKSA9PntcbiAgICArK2lcbiAgICBkYXkuY2xhc3NMaXN0LnRvZ2dsZShcIm5leHRcIiwgaSA+IGN1cnJlbnREYXkpO1xuICAgIGRheS5jbGFzc0xpc3QudG9nZ2xlKFwicGFzdFwiLCBpIDwgY3VycmVudERheSk7XG4gICAgZGF5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgaSA9PT0gY3VycmVudERheSk7XG59KVxuXG5jb25zdCB3aGVlbFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aGVlbF9fc2VjdGlvbnNcIilcbmNvbnN0IHdoZWVsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2hlZWxfX3dyYXBcIilcbmNvbnN0IHdoZWVsQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19hcnJvd1wiKVxuY29uc3Qgd2hlZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndoZWVsX19idG5cIilcblxuZnVuY3Rpb24gZmlyc3RTcGluKHNlY3Rpb25zLCBidG4sIHdoZWVsLCBhcnJvdyl7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgc2VjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PntcbiAgICAgICAgICAgIHNlY3Rpb25zLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgxNjA1ZGVnKVwiXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRzYWRzYVwiKVxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pXG4gICAgICAgIHNlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ3aGVlbFNwaW5cIilcbiAgICAgICAgYXJyb3cuc3R5bGUub3BhY2l0eSA9IFwiMFwiXG4gICAgICAgIHdoZWVsLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4yKVwiXG4gICAgfSlcbn1cblxuZmlyc3RTcGluKHdoZWVsU2VjdGlvbnMsIHdoZWVsQnRuLCB3aGVlbFdyYXAsIHdoZWVsQXJyb3cpIl19
