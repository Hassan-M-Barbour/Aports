<!-- <script setup lang="ts">
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<template>
  <div class="w-1/2 absolute right-0 h-[500px]">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item, index }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden relative"
    >
      <img :src="item" class="w-full h-full object-cover" draggable="false">
    </UCarousel>
  </div>
  
</template>

<style scoped>
/* إضافة تنسيقات إضافية إذا لزم الأمر */
</style> -->

<script setup lang="ts">
import { Style } from "#build/components";
import { ref, onMounted } from "vue";

const items = [
  {
    title: "Item 1",
    description: "This is the description for item 1.",
    extraInfo: "Additional info for item 1.",
  },
  {
    title: "Item 2",
    description: "This is the description for item 2.",
    extraInfo: "Additional info for item 2.",
  },
  {
    title: "Item 3",
    description: "This is the description for item 2.",
    extraInfo: "Additional info for item 2.",
  },
  {
    title: "Item 4",
    description: "This is the description for item 2.",
    extraInfo: "Additional info for item 2.",
  },
];

const carouselRef = ref();
const activeIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % items.length;
  }, 3000);
});

const select = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="inline-flex w-full justify-right">
    <!-- Custom vertical indicators on the left with margin of 15px from the rectangle -->
    <div
      class="content-center justify-items-start mr-20 flex-col flex relative gap-1.5 h-full tt"
    >
      <div
        class="border-r-4 border-[#ceae92] absolute left-1/2 transform -translate-x-1/2 h-full z-0"
        Style=" height:160px; margin-top:-50%; right: 100px;"
      ></div>
      <div class="z-10 flex flex-col left-11 gap-1.5">
        <button
          v-for="(item, index) in items"
          :key="index"
          @click="select(index)"
          :class="[
            'w-7 h-7 border-2 border-[#ceae92] bg-white transition-colors duration-300',
            activeIndex === index ? 'border-[#ceae92]' : 'border-[#e2dad3]', // اللون الأفتح هنا
          ]"
        ></button>
      </div>
    </div>

    <!-- Display one item at a time on the right side -->
    <div class="absolute right-0 h-full overflow-hidden xx">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-full flex-shrink-0 h-full flex items-center justify-center p-4 bg-white border shadow-md rounded"
        >
          <div>
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="mt-2">{{ item.description }}</p>
            <p class="mt-1 text-sm text-gray-500">{{ item.extraInfo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Adjust styles if needed */
.items {
  border: 2px solid #ceae92;
}
@media only screen and (max-width: 600px) {
  .tt {
    display: none;
  }
  .xx {
    left: -5%;
  }
}
</style>

<!-- style="top: 20px;" -->
