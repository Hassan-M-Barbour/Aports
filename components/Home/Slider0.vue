<script setup lang="ts">
const items = [
  "/Imags/main-slider-1-1.jpg",
  "/Imags/main-slider-1-2.jpg",
  "/Imags/main-slider-1-3.jpg",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<template>
  <div class="relative">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden vh-100"
      indicators
    >
      <img :src="item" class="w-full vh-100" draggable="false" />
    </UCarousel>

    <!-- Overlay layer -->
    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-5 pt-5"
    >
    <div class="text-white text-left p-8 mt-5 ml-5">
        <h2 class="  text-8xl  mb-4 text-white ml-10">Modern<br>
        Residential<br>
        Apartments</h2>
      </div>
  </div>
  </div>
</template>

<style scoped>
h2{
  font-family: sans-serif;
}

@media (max-width: 900px) {
  h2{ 
font-size: 30px;
margin-left: 0px;
  }
  }
  
</style>
