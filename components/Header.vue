<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header__inner">
        <NuxtLink to="/" class="logo">
          <img src="~/assets/img/logo.svg" alt="Logo">
        </NuxtLink>

        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__item">
              <NuxtLink to="/news" class="navbar__link">News</NuxtLink>
            </li>
            <li class="navbar__item">
              <button class="navbar__link navbar__link--menu" @click="showDropdown">About
                us</button>
              <div class="navbar__dropdown">
                <NuxtLink to="/about" class="navbar__dropdown-link">About association</NuxtLink>
                <NuxtLink to="/goals" class="navbar__dropdown-link">Goal and objectives</NuxtLink>
                <NuxtLink to="/report" class="navbar__dropdown-link">Report</NuxtLink>
                <NuxtLink to="/management" class="navbar__dropdown-link">Management</NuxtLink>
              </div>
            </li>
            <li class="navbar__item">
              <NuxtLink to="#" class="navbar__link">Services</NuxtLink>
            </li>
            <li class="navbar__item">
              <NuxtLink to="/investors" class="navbar__link">Prospective investors</NuxtLink>
            </li>
            <li class="navbar__item">
              <NuxtLink to="/membership" class="navbar__link">Membership</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="header-end">
          <NuxtLink to="tel:+998903220888" class="btn-contacts">
            <svg class="btn-contacts--icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
              fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.4745 17.5251C12.9145 15.9651 11.7385 14.2185 10.9572 12.4465C10.7919 12.0718 10.8892 11.6331 11.1785 11.3438L12.2705 10.2531C13.1652 9.35845 13.1652 8.09312 12.3839 7.31179L10.8185 5.74645C9.7772 4.70512 8.0892 4.70512 7.04787 5.74645L6.17854 6.61579C5.19054 7.60379 4.77854 9.02912 5.0452 10.4425C5.70387 13.9265 7.72787 17.7411 10.9932 21.0065C14.2585 24.2718 18.0732 26.2958 21.5572 26.9545C22.9705 27.2211 24.3959 26.8091 25.3839 25.8211L26.2519 24.9531C27.2932 23.9118 27.2932 22.2238 26.2519 21.1825L24.6879 19.6185C23.9065 18.8371 22.6399 18.8371 21.8599 19.6185L20.6559 20.8238C20.3665 21.1131 19.9279 21.2105 19.5532 21.0451C17.7812 20.2625 16.0345 19.0851 14.4745 17.5251Z"
                stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Contacts
          </NuxtLink>
          <button class="btn-lang" @click="showDropdown2">
            English
            <svg class="btn-lang__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
              fill="none">
              <path d="M21.3332 13.3333L15.9998 18.6666L10.6665 13.3333" stroke="currentColor" stroke-width="2.4"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="navbar__dropdown">
              <NuxtLink to="#" class="navbar__dropdown-link">中国人</NuxtLink>
              <NuxtLink to="#" class="navbar__dropdown-link">English</NuxtLink>
              <NuxtLink to="#" class="navbar__dropdown-link">O'zbek</NuxtLink>
            </div>
          </button>
        </div>

        <button class="menu-btn" @click="(event) => event.currentTarget.nextElementSibling.classList.add('menu--open')"></button>

        <div class="menu">
  <div class="menu__inner">
    <div class="menu__top">
      <a href="/" class="logo">
        <img src="~/assets/img/logo-dark.svg" alt="Logo">
      </a>

      <button class="menu__back-btn"
        @click="(event) => event.currentTarget.closest('.menu').classList.remove('menu--open')"></button>
    </div>

    <div class="menu__middle">
      <ul class="menu__list">
        <li class="menu__item">
          <a href="/news" class="menu__link">News</a>
        </li>
        <li class="menu__item">
          <button class="menu__link menu__link--menu"
            @click="(event) => event.currentTarget.classList.toggle('menu__link--open')">About us</button>
          <div class="menu__dropdown">
            <a href="/about" class="menu__dropdown-link">About association</a>
              <a href="/goals" class="menu__dropdown-link">Goal and objectives</a>
                <a href="/report" class="menu__dropdown-link">Report</a>
                  <a href="/management" class="menu__dropdown-link">Management</a>
          </div>
        </li>
        <li class="menu__item">
          <a href="#" class="menu__link">Services</a>
        </li>
        <li class="menu__item">
          <a href="/investors" class="menu__link">Prospective investors</a>
        </li>
        <li class="menu__item">
          <a href="/membership" class="menu__link">Membership</a>
        </li>
      </ul>

      <button class="menu__btn-lang" @click="(event) => event.currentTarget.classList.toggle('menu__btn-lang--open')">
        <div class="menu__btn-lang__inner">
          <span>English</span>
          <svg class="menu__btn-lang__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 32 32" fill="none">
            <path d="M21.3332 13.3333L15.9998 18.6666L10.6665 13.3333" stroke="currentColor" stroke-width="2.4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div class="menu__dropdown">
          <a href="#" class="menu__dropdown-link">中国人</a>
            <a href="#" class="menu__dropdown-link">English</a>
              <a href="#" class="menu__dropdown-link">O'zbek</a>
        </div>
      </button>
    </div>

    <div class="menu__bottom">
      <ul class="socials">
        <li class="socials__item">
          <a href="#" class="socials__link">
            <img class="socials__icon" src="~/assets/img/icon-fb.svg">
          </a>
        </li>
        <li class="socials__item">
          <a href="#" class="socials__link">
            <img class="socials__icon" src="~/assets/img/icon-tg.svg">
          </a>
        </li>
        <li class="socials__item">
          <a href="#" class="socials__link">
            <img class="socials__icon" src="~/assets/img/icon-ig.svg">
          </a>
        </li>
        <li class="socials__item">
          <a href="#" class="socials__link">
            <img class="socials__icon" src="~/assets/img/icon-x.svg">
          </a>
        </li>
      </ul>
      <a class="site-footer__phone" href="tel:+998903220888">90 322 08 88</a>
      <p class="site-footer__working-time">Monday-Friday 09:00 — 18:00<br>Lunch: 13:00 - 14:00</p>
      <a class="site-footer__location" href="https://maps.google.com" target="_blank">Bobur Street, 45, Tashkent, Uzbekistan
      </a>
    </div>
  </div>

  <p class="copyright__title">When using and citing materials published on the <a href="/" target="_blank">ucfti.uz
    </a>
    website in
    full or in part, a link is required</p>
</div>
      </div>
    </div>
  </header>
</template>

<script setup>
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

</script>