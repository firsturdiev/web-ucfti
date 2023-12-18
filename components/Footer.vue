<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__inner">
        <div class="site-footer__start">
          <NuxtLink to="/" class="site-footer__logo">
            <img src="~/assets/img/logo-dark.svg" alt="Logo">
          </NuxtLink>
          <p class="site-footer__copyright">© 2023 CCI Uzbekistan</p>
          <ul class="socials">
            <li class="socials__item">
              <NuxtLink to="#" class="socials__link">
                <img class="socials__icon" src="~/assets/img/icon-fb.svg">
              </NuxtLink>
            </li>
            <li class="socials__item">
              <NuxtLink to="#" class="socials__link">
                <img class="socials__icon" src="~/assets/img/icon-tg.svg">
              </NuxtLink>
            </li>
            <li class="socials__item">
              <NuxtLink to="#" class="socials__link">
                <img class="socials__icon" src="~/assets/img/icon-ig.svg">
              </NuxtLink>
            </li>
            <li class="socials__item">
              <NuxtLink to="#" class="socials__link">
                <img class="socials__icon" src="~/assets/img/icon-x.svg">
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="site-footer__navbar">
          <NuxtLink to="/news" class="site-footer__navbar-link">News</NuxtLink>
          <NuxtLink to="/about" class="site-footer__navbar-link">About us</NuxtLink>
          <NuxtLink to="#" class="site-footer__navbar-link">Services</NuxtLink>
          <NuxtLink to="/investors" class="site-footer__navbar-link">Prospective investors</NuxtLink>
          <NuxtLink to="/membership" class="site-footer__navbar-link">Membership</NuxtLink>
        </div>

        <div class="site-footer__end">
          <NuxtLink class="site-footer__phone" to="tel:+998903220888">90 322 08 88</NuxtLink>
          <p class="site-footer__working-time">Monday-Friday 09:00 — 18:00<br>Lunch: 13:00 - 14:00</p>
          <NuxtLink class="site-footer__location" to="https://maps.google.com">Bobur Street, 45, Tashkent, Uzbekistan</NuxtLink>
        </div>
      </div>
    </div>
  </footer>

  <!-- COPYRIGHT -->

  <div class="copyright">
    <p class="copyright__title">When using and citing materials published on the <NuxtLink to="/" target="_blank">ucfti.uz</NuxtLink>
      website in
      full or in part, a link is required</p>
  </div>
</template>