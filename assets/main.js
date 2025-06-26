const arrowDownButton = document.getElementById('button-arrow-down');

arrowDownButton.addEventListener("click", function (e) {
  const details = document.querySelector('div[name="details"]');

  details.scrollIntoView({behavior: 'smooth'});
});

const modal = document.querySelector('aside[name="modal"]');

const modalDialog = document.getElementById('modal-dialog');

const rsvpButton = document.getElementById('button-rsvp');

rsvpButton.addEventListener("click", function (e) {
  modal.ariaHidden = false;
  document.body.style.overflow = "hidden";
});

document.addEventListener("click", function (e) {
  if (modal.ariaHidden === "false" && !modalDialog.contains(e.target) && e.target !== modalDialog && e.target !== rsvpButton) {
    modal.ariaHidden = true;
    document.body.style.overflow = "";
  }
});

const modalCloseButton = document.getElementById('button-close-modal');

modalCloseButton.addEventListener("click", function (e) {
  modal.ariaHidden = true;
  document.body.style.overflow = "";
});