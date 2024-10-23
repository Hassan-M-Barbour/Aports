<template>
  <section class="brand-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="brand-one__inner">
            <div
              class="carousel"
              @mousedown="startDrag"
              @mouseup="endDrag"
              @mouseleave="endDrag"
              @mousemove="onDrag"
              @touchstart="startDrag"
              @touchend="endDrag"
              @touchmove="onDrag"
              ref="carouselRef"
            >
              <div class="carousel-wrapper" :style="{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }">
                <div class="carousel-slide" v-for="(item, index) in brandItems" :key="index">
                  <img :src="item" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Array to hold the brand images
const brandItems = [
  "/Imags/brand-1-1.png",
  "/Imags/brand-1-2.png",
  "/Imags/brand-1-3.png",
  "/Imags/brand-1-4.png",
  "/Imags/brand-1-5.png",
  "/Imags/brand-1-6.png",
];

const currentIndex = ref(0);
const startX = ref(0);
const isDragging = ref(false);
const carouselRef = ref(null);
const visibleSlides = ref(5); // Number of visible slides

// Function to update visible slides based on window width
const updateVisibleSlides = () => {
  if (window.innerWidth < 768) { // For mobile devices
    visibleSlides.value = 1; // Show only one slide
  } else {
    visibleSlides.value = 5; // Show five slides for larger screens
  }
};

const startDrag = (event) => {
  isDragging.value = true;
  startX.value = event.clientX || event.touches[0].clientX; // Capture the starting position
};

const endDrag = () => {
  isDragging.value = false;
};

const onDrag = (event) => {
  if (!isDragging.value) return;

  const currentX = event.clientX || event.touches[0].clientX; // Capture current position
  const diffX = startX.value - currentX;

  // Determine how far to move the carousel
  if (diffX > 100 && currentIndex.value < brandItems.length - visibleSlides.value) {
    currentIndex.value++;
    startX.value = currentX; // Reset the starting position
  } else if (diffX < -100 && currentIndex.value > 0) {
    currentIndex.value--;
    startX.value = currentX; // Reset the starting position
  }
};

// Set up event listener for window resize
onMounted(() => {
  updateVisibleSlides();
  window.addEventListener('resize', updateVisibleSlides);
});

// Clean up event listener on unmount
onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleSlides);
});
</script>

<style scoped>
.brand-one {
  padding: 20px;
}

.carousel {
  overflow: hidden;
  position: relative;
  cursor: grab; /* Change cursor style when hovering */
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease; /* Smooth transition for sliding */
}

.carousel-slide {
  min-width: calc(100% / 6); /* Adjust this value based on visibleSlides */
  padding: 30px 20px; /* Adjust padding between slides */
}

.carousel-slide img {
  width: 100%; /* Change width to 100% for better responsiveness */
  height: auto; /* Maintain aspect ratio */
}

.carousel:active {
  cursor: grabbing; /* Change cursor style when dragging */
}

/* Responsive styles */
@media (max-width: 768px) {
  .carousel-slide {
    min-width: 50%; /* Show one slide in mobile view */
  }
}
</style>
