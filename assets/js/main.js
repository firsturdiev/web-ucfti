  // Dropdowns

function showDropdown(event, selector = '.navbar__dropdown') {
  const elBtn = event.currentTarget;
  const elDropdown = document.querySelector(selector);
  elDropdown.classList.toggle('navbar__dropdown--show');
  elBtn.classList.toggle('navbar__link--open');
}

function showDropdown2(event) {
  event.currentTarget.classList.toggle('navbar__link--open');
  const elDropdown = event.currentTarget.querySelector('.navbar__dropdown');
  elDropdown.classList.toggle('navbar__dropdown--show');
}

window.onclick = function (event) {
  if (!event.target.matches('.navbar__link')) {
    const elDropdown = document.querySelector('.navbar__dropdown');
    elDropdown.classList.remove('navbar__dropdown--show');
    const elBtn = elDropdown.closest('.navbar__item').querySelector('.navbar__link');
    elBtn.classList.remove('navbar__link--open');
  }

  if (!event.target.matches('.btn-lang') && !event.target.matches('.btn-lang__icon')) {
    const elDropdown = document.querySelector('.btn-lang').querySelector('.navbar__dropdown');
    elDropdown.classList.remove('navbar__dropdown--show');
    document.querySelector('.btn-lang').classList.remove('navbar__link--open');
  }
}
