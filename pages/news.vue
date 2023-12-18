<template>
  <section class="news-2">
    <div class="container">
      <h1 class="news__title">News</h1>

      <div class="news__list">
        <div class="news__slide">
          <img src="~/assets/img/img-news-1.png">
          <div class="news__slide-inner">
            <p class="news__slide-date">21.11.2023 14:50</p>
            <h3 class="news__slide-title">
              <NuxtLink to="/new">The Chamber of Commerce and Industry of Uzbekistan (CCI) opened the CCI
                Representative
                Office in Hungary</NuxtLink>
            </h3>
          </div>
        </div>
        <div class="news__slide">
          <img src="~/assets/img/img-news-1.png">
          <div class="news__slide-inner">
            <p class="news__slide-date">21.11.2023 14:50</p>
            <h3 class="news__slide-title">
              <NuxtLink to="/new">The Chamber of Commerce and Industry of Uzbekistan (CCI) opened the CCI
                Representative
                Office in Hungary</NuxtLink>
            </h3>
          </div>
        </div>
        <div class="news__slide">
          <img src="~/assets/img/img-news-1.png">
          <div class="news__slide-inner">
            <p class="news__slide-date">21.11.2023 14:50</p>
            <h3 class="news__slide-title">
              <NuxtLink to="/new">The Chamber of Commerce and Industry of Uzbekistan (CCI) opened the CCI
                Representative
                Office in Hungary</NuxtLink>
            </h3>
          </div>
        </div>
        <div class="news__slide">
          <img src="~/assets/img/img-news-1.png">
          <div class="news__slide-inner">
            <p class="news__slide-date">21.11.2023 14:50</p>
            <h3 class="news__slide-title">
              <NuxtLink to="/new">The Chamber of Commerce and Industry of Uzbekistan (CCI) opened the CCI
                Representative
                Office in Hungary</NuxtLink>
            </h3>
          </div>
        </div>
      </div>

      <button class="news__btn-show">Show more</button>
    </div>
  </section>
</template>

<style scoped>
.news-2 {
  padding-top: 16px;
  padding-bottom: 48px;
}

.news__title {
  font-size: 48px;
  line-height: 64px;
  margin-bottom: 48px;
  color: #000;
}

.news__list {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 48px 24px;
}

.news__slide {
  flex-grow: 1;
  width: 45%;
}

.news__btn-show {
  margin: 0 auto;
  padding: 16px 75px;
  border-radius: 8px;
  background: #DAF4FF;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  transition: .3s;
}

.news__btn-show:hover {
  background: #BCE9FF;
}

@media screen and (max-width: 1200px) {
  .news-2 {
    padding-top: 8px;
    padding-bottom: 40px;
  }
  .news__title {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
  }

  .news__list {
    margin-bottom: 24px;
    gap: 24px 16px;
  }

  .news__btn-show {
    padding: 8px 56.5px;
    font-size: 16px;
    line-height: 24px;
  }
}

@media screen and (max-width: 650px) {

  .news-2 {
    padding-top: 0;
    padding-bottom: 16px;
  }

  .news__list {
    margin-bottom: 24px;
    flex-direction: column;
    gap: 24px;
  }

  .news__slide {
    width: 100%;
  }

  .news__btn-show {
    padding: 8px 42px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>