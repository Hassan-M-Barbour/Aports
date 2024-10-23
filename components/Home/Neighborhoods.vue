<template>
  <section class="neighborhoods">
    <div
      class="neighborhoods-bg"
      style="background-image: url('/Imags/neighborhoods-bg.jpg')"
    ></div>
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Nearby areas</span>
        <h2 class="section-title__title">Neighborhoods</h2>
      </div>
      <div class="row">
        <!-- العمود الأول: الأكورديون -->
        <div class="col-xl-4 col-lg-5">
          <div class="neighborhoods__left">
            <div class="neighborhoods__faq">
              <div class="accrodion-grp">
                <!-- Loop through accordion items -->
                <div
                  v-for="(item, index) in accordionItems"
                  :key="index"
                  class="accrodion"
                  :class="{ active: activeIndex === index }"
                >
                  <div class="accrodion-title" @click="toggleAccordion(index)" :class="{ 'active-title': activeIndex === index }">
                    <h4>{{ item.title }}</h4>
                    <span
                      class="accrodion-icon"
                      :class="{ 'rotate-icon': activeIndex === index }"
                    >
                      <i class="fa fa-chevron-down"></i>
                    </span>
                  </div>
                  <div
                    class="accrodion-content"
                    v-show="activeIndex === index"
                    :style="{ maxHeight: activeIndex === index ? '200px' : '0px' }"
                  >
                    <div class="inner">
                      <p>{{ item.content }}</p>
                    </div>
                    <!-- /.inner -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- العمود الثاني: الصورة الثابتة -->
        <div class="col-xl-8 col-lg-7">
          <div class="neighborhoods__right">
            <!-- الصورة الثابتة -->
            <div class="neighborhoods__img-box">
              <div class="neighborhoods__img">
                <img
                  src="/Imags/neighborhoods-img-1.jpg"
                  alt="Neighborhood"
                  style="width: 100%; height: auto; object-fit: cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Data for accordion items
const accordionItems = ref([
  {
    title: "Restaurants",
    content: "Lorem ipsum dolor sit amet ",
  },
  {
    title: "Central park",
    content: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor inci simply free.",
  },
  {
    title: "Shopping center",
    content: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor inci simply free.",
  },
  {
    title: "Hospitals",
    content: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor inci simply free.",
  },
  {
    title: "Play grounds",
    content: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor inci simply free.",
  },
]);

// Track the currently open accordion index
const activeIndex = ref(0);

// Toggle the accordion state on click
const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? -1 : index; // إذا كان مفتوحًا، قم بإغلاقه، وإلا قم بفتحه
};
</script>

<style scoped>
.neighborhoods__faq {
  margin-top: 20px;
}

.accrodion {
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd; /* إضافة البوردر السفلي فقط */
}

.accrodion-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  background-color: #f9f9f9; /* إبقاء لون الخلفية كما هو */
  /* إزالة الحدود الجانبية */
  border-left: none;
  border-right: none;
  border-top: none;
}

.active-title h4 {
  color: #ceae92; 
}

.accrodion-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.inner {
  padding: 15px;
  background-color: #fff; 
}

.neighborhoods__img-box {
  position: relative;
  overflow: hidden;
}

.neighborhoods__img {
  position: relative;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
