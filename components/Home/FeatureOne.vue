<template>
  <section class="feature-one">
    <div class="feature-one__bg-box">
      <div
        class="feature-one__bg"
        style="background-image: url(/Imags/feature-one-bg.jpg)"
      ></div>
    </div>
    <div class="feature-one__shape-1 float-bob-x">
      <img src="/Imags/feature-one-shape-1.png" alt="" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <div class="feature-one__left">
            <div class="section-title text-left">
              <span class="section-title__tagline">Main features</span>
              <h2 class="section-title__title">Our main property features</h2>
            </div>
            <p class="feature-one__text">
              Man braid hell of edison bulb four brunch subway <br />
              tile authentic, chillwave put a bird on it church-key <br />
              try-hard ramps heirloom.
            </p>
            <div class="feature-one__video-link">
              <a
                href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                class="video-popup"
              >
                <div class="feature-one__video-icon">
                  <span class="fa fa-play"></span>
                  <i class="ripple"></i>
                </div>
              </a>
            </div>
            <div class="feature-one__counter-box">
              <ul class="feature-one__counter-list list-unstyled">
                <li>
                  <div class="feature-one__counter-content-box">
                    <div class="feature-one__counter-count-box count-box">
                      <h3 class="count-text" data-stop="360" data-speed="1500">
                        <Counter :targetValue="360" />
                      </h3>
                      <span class="feature-one__counter-plus">+</span>
                    </div>
                    <p class="feature-one__counter-text">Total apartments</p>
                  </div>
                </li>
                <li>
                  <div class="feature-one__counter-content-box">
                    <div class="feature-one__counter-count-box count-box">
                      <h3 class="count-text" data-stop="680" data-speed="1500">
                        <Counter :targetValue="680" />
                      </h3>
                      <span class="feature-one__counter-plus">+</span>
                    </div>
                    <p class="feature-one__counter-text">Quality features</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-7">
          <div class="feature-one__right">
            <div class="row">
              <!--Feature One Single Start-->
              <div
                class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div class="feature-one__single">
                  <div class="feature-one__single-inner">
                    <div class="feature-one__icon">
                      <span class="fas fa-building"></span>
                    </div>
                    <h3 class="feature-one__title">
                      <a href="services.html">Smart living</a>
                    </h3>
                    <p class="feature-one__text">
                      When nothing prevents our being able to we like best,
                      every pleasure to be welcomed & every.
                    </p>
                    <div class="feature-one__btn">
                      <a href="services.html">
                        <i class="fa fa-arrow-right"></i>Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--Feature One Single End-->
              <!--Feature One Single Start-->
              <div
                class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div class="feature-one__single">
                  <div class="feature-one__single-inner">
                    <div class="feature-one__icon">
                      <span class="fas fa-tools"></span>
                    </div>
                    <h3 class="feature-one__title">
                      <a href="services.html">Eco construction</a>
                    </h3>
                    <p class="feature-one__text">
                      When nothing prevents our being able to we like best,
                      every pleasure to be welcomed & every.
                    </p>
                    <div class="feature-one__btn">
                      <a href="services.html">
                        <i class="fa fa-arrow-right"></i>Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--Feature One Single End-->
              <!--Feature One Single Start-->
              <div
                class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="feature-one__single">
                  <div class="feature-one__single-inner">
                    <div class="feature-one__icon">
                      <span class="fas fa-map-marker-alt"></span>
                    </div>
                    <h3 class="feature-one__title">
                      <a href="services.html">Attractive location</a>
                    </h3>
                    <p class="feature-one__text">
                      When nothing prevents our being able to we like best,
                      every pleasure to be welcomed & every.
                    </p>
                    <div class="feature-one__btn">
                      <a href="services.html">
                        <i class="fa fa-arrow-right"></i>Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--Feature One Single End-->
              <!--Feature One Single Start-->
              <div
                class="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div class="feature-one__single">
                  <div class="feature-one__single-inner">
                    <div class="feature-one__icon">
                      <span class="fas fa-landmark"></span>
                    </div>
                    <h3 class="feature-one__title">
                      <a href="services.html">Modern technology</a>
                    </h3>
                    <p class="feature-one__text">
                      When nothing prevents our being able to we like best,
                      every pleasure to be welcomed & every.
                    </p>
                    <div class="feature-one__btn">
                      <a href="services.html">
                        <i class="fa fa-arrow-right"></i>Read More</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!--Feature One Single End-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Counter from '~/components/Home/Counter.vue'
</script>