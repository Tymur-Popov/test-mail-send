//Загрузка прелоадера, его исчезновение, и появление контента

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
      setTimeout(function () {
        preloader.classList.add("hide");
      }, 1000);
    }
  }, 2000);

  setTimeout(function () {
    var mainWrapper = document.getElementById("main-wrapper");
    mainWrapper.classList.toggle("onLoadStart");
    console.log("good job");
  }, 3000);
};

//Анимация кнопки выпадающего меню

document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".menu__list").classList.toggle("menu__list--animate");
});

//ПопАп 1

const popupOneOpen = document.getElementById("service");
const popupOne = document.getElementById("popup1");
const popupCloseBtn1 = document.getElementById("modal-close-1");

popupOneOpen.addEventListener("click", onServiceClick);

function onServiceClick(click) {
  if (!popupOne.classList.contains("open")) {
    popupOne.classList.add("open");
  }
}

popupCloseBtn1.addEventListener("click", onCloseOneClick);

function onCloseOneClick(click) {
	if (popupOne.classList.contains("open")) {
	  popupOne.classList.remove("open");
	}
  }

  //ПопАп 2

const popupTwoOpen = document.getElementById("how-it-works");
const popupTwo = document.getElementById("popup2");
const popupCloseBtn2 = document.getElementById("modal-close-2");

popupTwoOpen.addEventListener("click", onHowClick);

function onHowClick(click) {
  if (!popupTwo.classList.contains("open")) {
    popupTwo.classList.add("open");
  }
}

popupCloseBtn2.addEventListener("click", onCloseTwoClick);

function onCloseTwoClick(click) {
	if (popupTwo.classList.contains("open")) {
		popupTwo.classList.remove("open");
	}
  }

  //ПопАп 3

  const popupThreeOpen = document.getElementById("contacts");
  const popupThree = document.getElementById("popup3");
  const popupCloseBtn3 = document.getElementById("modal-close-3");
  
  popupThreeOpen.addEventListener("click", onContactsClick);
  
  function onContactsClick(click) {
	if (!popupThree.classList.contains("open")) {
		popupThree.classList.add("open");
	}
  }
  
  popupCloseBtn3.addEventListener("click", onCloseThreeClick);
  
  function onCloseThreeClick(click) {
	  if (popupThree.classList.contains("open")) {
		popupThree.classList.remove("open");
	  }
	}
