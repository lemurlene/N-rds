const feedbackLink = document.querySelector(".contacts-button");
const fedbackPopup = document.querySelector(".pop-up");
const fedbackClose = document.querySelector(".modal-close");
const fedbackForm = document.querySelector(".feedback");
const fedbackName = document.querySelector("#feedback-name");
const fedbackEmail = document.querySelector("#feedback-email");
const fedbackMessage = document.querySelector("#feedback-message");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("Name");
  storageEmail = localStorage.getItem("Email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  fedbackPopup.classList.add("pop-up_show");

  if(storage) {
    fedbackName.value = storageName;
    fedbackEmail.value = storageEmail;
    fedbackMessage.focus();
  }
  fedbackName.focus();
});

fedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  fedbackPopup.classList.remove("pop-up_show");
  fedbackPopup.classList.remove("pop-up_error");
});

fedbackForm.addEventListener("submit", function (evt) {
  if(!fedbackName.value || !fedbackEmail.value || !fedbackMessage.value) {
    evt.preventDefault();
    fedbackPopup.classList.remove("pop-up_error");
    fedbackPopup.offsetWidth = fedbackPopup.offsetWidth;
    fedbackPopup.classList.add("pop-up_error");
  } else {
    if(isStorageSupport) {
     localStorage.setItem("Name", fedbackName.value);
     localStorage.setItem("Email", fedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (fedbackPopup.classList.contains("pop-up_show")) {
        evt.preventDefault();
        fedbackPopup.classList.remove("pop-up_show");
        fedbackPopup.classList.remove("pop-up_error");
      }
    }

});
