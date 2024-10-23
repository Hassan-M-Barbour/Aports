<template>
  <section class="counter-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="counter-one__inner">
            <ul class="list-unstyled counter-one__list">
              <li class="counter-one__single wow fadeInLeft" data-wow-delay="100ms">
                <div class="counter-one__icon">
                  <span class="fas fa-chart-area"></span>
                </div>
                <div class="counter-one__content-box count-box">
                  <h3 class="count-text" data-stop="8800" data-speed="1500">
                    <Counter :targetValue="1800" />
                  </h3>
                  <p class="counter-one__text">Sqaure Areas</p>
                </div>
              </li>
              <li class="counter-one__single wow fadeInLeft" data-wow-delay="200ms">
                <div class="counter-one__icon">
                  <span class="fas fa-car"></span>
                </div>
                <div class="counter-one__content-box count-box">
                  <h3 class="count-text" data-stop="680" data-speed="1500">
                    <Counter :targetValue="680" />
                  </h3>
                  <p class="counter-one__text">Car Parkings</p>
                </div>
              </li>
              <li class="counter-one__single wow fadeInLeft" data-wow-delay="300ms">
                <div class="counter-one__icon">
                  <span class="fas fa-building"></span>
                </div>
                <div class="counter-one__content-box count-box">
                  <h3 class="count-text" data-stop="380" data-speed="1500">
                    <Counter :targetValue="380" />
                  </h3>
                  <p class="counter-one__text">Apartments</p>
                </div>
              </li>
              <li class="counter-one__single wow fadeInLeft" data-wow-delay="400ms">
                <div class="counter-one__icon">
                  <span class="fas fa-bed"></span>
                </div>
                <div class="counter-one__content-box count-box">
                  <h3 class="count-text" data-stop="280" data-speed="1500">
                    <Counter :targetValue="280" />
                  </h3>
                  <p class="counter-one__text">Bedrooms</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Counter from '~/components/Home/Counter.vue'
</script>

<style scoped>
@media (max-width: 767px) {
  .counter-one__list {
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
  .counter-one{
    margin-top: 25px;
  }

  .counter-one__single {
    width: 100%;
    text-align: center; 
    margin-bottom: 20px; 
  }

  .counter-one__icon {
    margin-bottom: 10px; 
  }
}
</style>
