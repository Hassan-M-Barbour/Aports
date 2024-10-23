<template>
  <section class="gallery-one">
    <div class="gallery-one__container">
      <div 
        class="gallery-carousel" 
        ref="carouselRef"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @touchstart="startDrag"
        @touchmove="onDrag"
        @touchend="endDrag"
      >
        <div class="gallery-carousel-wrapper" :style="{ transform: `translateX(-${translateX}px)` }">
          <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
            <div class="gallery-one__single">
              <div class="gallery-one__img">
                <img :src="item" alt="Gallery Image" />
                <div class="gallery-one__icon">
                  <a class="img-popup" :href="item">
                    <span class="fa fa-plus"></span>
                  </a>
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

// Array to hold the gallery images
const galleryItems = [
  "/Imags/gallery-1-1.jpg",
  "/Imags/gallery-1-2.jpg",
  "/Imags/gallery-1-3.jpg",
  "/Imags/gallery-1-4.jpg",
  "/Imags/gallery-1-5.jpg",
  "/Imags/gallery-1-3.jpg",
];

// Number of visible slides (5 in this case)
const visibleSlides = ref(5); // Make this reactive
const currentIndex = ref(0);

// Variables for drag functionality
const isDragging = ref(false);
const startX = ref(0);
const translateX = ref(0);
const initialTranslateX = ref(0);
let autoSlideInterval: ReturnType<typeof setInterval>;

// Function to start drag
const startDrag = (event: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  startX.value = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
  initialTranslateX.value = translateX.value;
  stopAutoSlide(); // Stop auto-slide when user starts dragging
};

// Function to handle drag
const onDrag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  const currentX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX.value;
  translateX.value = initialTranslateX.value - deltaX;
};

// Function to end drag
const endDrag = () => {
  isDragging.value = false;
  const maxTranslate = (galleryItems.length - visibleSlides.value) * (window.innerWidth / visibleSlides.value);
  if (translateX.value < 0) translateX.value = 0;
  if (translateX.value > maxTranslate) translateX.value = maxTranslate;
  startAutoSlide(); // Resume auto-slide after dragging ends
};

// Function to auto-slide the carousel
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    const maxTranslate = (galleryItems.length - visibleSlides.value) * (window.innerWidth / visibleSlides.value);
    if (translateX.value < maxTranslate) {
      translateX.value += window.innerWidth / visibleSlides.value;
    } else {
      translateX.value = 0; // Loop back to the start
    }
  }, 3000); // Slide every 3 seconds
};

// Function to stop auto-slide
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Start auto-slide on component mount and clean up on unmount
onMounted(() => {
  startAutoSlide();
  updateVisibleSlides();
  window.addEventListener('resize', updateVisibleSlides);
});

onUnmounted(() => {
  stopAutoSlide();
  window.removeEventListener('resize', updateVisibleSlides);
});

// Function to update visible slides based on screen width
const updateVisibleSlides = () => {
  visibleSlides.value = window.innerWidth < 768 ? 1 : 5; // 1 for mobile, 5 for larger screens
};
</script>

<style scoped>
.gallery-carousel {
  overflow: hidden;
  position: relative;
  cursor: grab;
}

.gallery-carousel:active {
  cursor: grabbing;
}

.gallery-carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease; /* Smooth transition for sliding */
  user-select: none; /* Prevent text selection while dragging */
}

.gallery-item {
  flex: 0 0 calc(100% / 5); /* Default to 5 slides at once */
}

.gallery-one__img img {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive styles */
@media (max-width: 767px) {
  .gallery-item {
    flex: 0 0 100%; /* Show 1 slide at a time on mobile */
  }
}
</style>
