<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const items = [
  "/Imags/main-slider-1-1.jpg",
  "/Imags/main-slider-1-2.jpg",
  "/Imags/main-slider-1-3.jpg",
];

const texts = [
  ["Modernn", "Residential", "Apartments"],
  ["Luxury", "Living", "City"],
  ["Find", "Your", "Home"],
  ["Modern", "Residential", "Apartments"],
];

const carouselRef = ref();
const currentIndex = ref(0);
const animationClass = ref("zoom-in");

onMounted(() => {
  const intervalId = setInterval(() => {
    if (!carouselRef.value) return;

    // عند انتهاء الصفحة الحالية، قم بالانتقال مباشرة
    currentIndex.value = carouselRef.value.page;

    if (carouselRef.value.page === carouselRef.value.pages) {
      carouselRef.value.select(0);
    } else {
      carouselRef.value.next();
    }

    animationClass.value = "";

    // تفعيل تأثير الزوم بعد الانتقال مباشرةً
    setTimeout(() => {
      animationClass.value = "zoom-in";
    }, 10);
  }, 5000); // اجعل التوقيت ملائما مع مدة الزوم

  onBeforeUnmount(() => clearInterval(intervalId));
});
</script>

<template>
  <div class="relative overflow-hidden">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      class="rounded-lg overflow-hidden vh-100"
      indicators
      @change="
        (newIndex) => {
          currentIndex.value = newIndex;
          animationClass.value = 'zoom-in';
        }
      "
    >
      <img
        :src="item"
        :class="[animationClass]"
        class="w-full vh-100 object-cover object-center opacity-0"
        draggable="false"
      />
    </UCarousel>

    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-5 pt-5"
    >
      <div class="text-white text-left p-8 mt-5 ml-5">
        <h2 class="text-8xl mb-4 text-white ml-10">
          <div v-for="(word, index) in texts[currentIndex]" :key="index">
            {{ word }}
          </div>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: sans-serif;
}

@media (max-width: 900px) {
  h2 {
    font-size: 50px;
    margin-left: 0px;
  }
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s ease; /* تعديل الانتقال */
}

.zoom-in {
  animation: zoom-in 4s forwards; /* مدة الزوم */
  opacity: 1 !important; /* التأكد من تفعيل الزوم */
}

@keyframes zoom-in {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.09);
    opacity: 1;
  }
}
</style>
