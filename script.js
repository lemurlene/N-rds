const feedbackLink=document.querySelector(".contacts-button"),fedbackPopup=document.querySelector(".pop-up"),fedbackClose=document.querySelector(".modal-close"),fedbackForm=document.querySelector(".feedback"),fedbackName=document.querySelector("#feedback-name"),fedbackEmail=document.querySelector("#feedback-email"),fedbackMessage=document.querySelector("#feedback-message");let isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("Name"),storageEmail=localStorage.getItem("Email")}catch(e){isStorageSupport=!1}feedbackLink.addEventListener("click",function(e){e.preventDefault(),fedbackPopup.classList.add("pop-up_show"),storage&&(fedbackName.value=storageName,fedbackEmail.value=storageEmail,fedbackMessage.focus()),fedbackName.focus()}),fedbackClose.addEventListener("click",function(e){e.preventDefault(),fedbackPopup.classList.remove("pop-up_show"),fedbackPopup.classList.remove("pop-up_error")}),fedbackForm.addEventListener("submit",function(e){fedbackName.value&&fedbackEmail.value&&fedbackMessage.value?isStorageSupport&&(localStorage.setItem("Name",fedbackName.value),localStorage.setItem("Email",fedbackEmail.value)):(e.preventDefault(),fedbackPopup.classList.remove("pop-up_error"),fedbackPopup.offsetWidth=fedbackPopup.offsetWidth,fedbackPopup.classList.add("pop-up_error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&fedbackPopup.classList.contains("pop-up_show")&&(e.preventDefault(),fedbackPopup.classList.remove("pop-up_show"),fedbackPopup.classList.remove("pop-up_error"))});
