<template>
  <section class="floor-plan">
    <div class="container">
      <div class="section-title text-center">
        <span class="section-title__tagline">Villa plans</span>
        <h2 class="section-title__title">Apartment plans</h2>
        <p class="floor-plan__text">
          Retro four loko ethical, distillery lomo meh mixtape vice plaid palo
          santo live-edge ugh banjo marfa lyft. <br />
          Pour-over distillery keytar activated charcoal. Snackwave blue bottle
          bespoke af farm-to-table <br />
          3 wolf moon, beard helvetica godard hell of. Schli hot chicken
          kombucha.
        </p>
      </div>
      <div class="floor-plan__main-tab-box tabs-box">
        <ul class="tab-buttons clearfix list-unstyled">
          <li
            data-tab="#penthouse"
            class="tab-btn"
            :class="{ 'active-btn': activeTab === 'penthouse' }"
            @click="changeTab('penthouse')"
          >
            <span>Penthouse</span>
          </li>
          <li
            data-tab="#studio"
            class="tab-btn"
            :class="{ 'active-btn': activeTab === 'studio' }"
            @click="changeTab('studio')"
          >
            <span>Studio</span>
          </li>
          <li
            data-tab="#duplex"
            class="tab-btn"
            :class="{ 'active-btn': activeTab === 'duplex' }"
            @click="changeTab('duplex')"
          >
            <span>Duplex</span>
          </li>
        </ul>
        <div class="tabs-content">
          <div class="tab" :class="{ 'active-tab': activeTab === 'penthouse' }">
            <div class="floor-plan__tab-content-inner">
              <div class="floor-plan__tab-content-left">
                <ul class="list-unstyled floor-plan__tab-content-details">
                  <li>
                    <p>Total area</p>
                    <span>{{ plans.penthouse.area }}</span>
                  </li>
                  <li>
                    <p>Floor no.</p>
                    <span>{{ plans.penthouse.floor }}</span>
                  </li>
                  <li>
                    <p>Current status</p>
                    <span>{{ plans.penthouse.status }}</span>
                  </li>
                  <li>
                    <p>No. of rooms</p>
                    <span>{{ plans.penthouse.rooms }}</span>
                  </li>
                  <li>
                    <p>Parking available</p>
                    <span>{{ plans.penthouse.parking }}</span>
                  </li>
                  <li>
                    <p>Price from</p>
                    <span>{{ plans.penthouse.price }}</span>
                  </li>
                </ul>
              </div>
              <div class="floor-plan__tab-content-right">
                <img :src="plans.penthouse.image" alt="" />
              </div>
            </div>
          </div>

          <div class="tab" :class="{ 'active-tab': activeTab === 'studio' }">
            <div class="floor-plan__tab-content-inner">
              <div class="floor-plan__tab-content-left">
                <ul class="list-unstyled floor-plan__tab-content-details">
                  <li>
                    <p>Total area</p>
                    <span>{{ plans.studio.area }}</span>
                  </li>
                  <li>
                    <p>Floor no.</p>
                    <span>{{ plans.studio.floor }}</span>
                  </li>
                  <li>
                    <p>Current status</p>
                    <span>{{ plans.studio.status }}</span>
                  </li>
                  <li>
                    <p>No. of rooms</p>
                    <span>{{ plans.studio.rooms }}</span>
                  </li>
                  <li>
                    <p>Parking available</p>
                    <span>{{ plans.studio.parking }}</span>
                  </li>
                  <li>
                    <p>Price from</p>
                    <span>{{ plans.studio.price }}</span>
                  </li>
                </ul>
              </div>
              <div class="floor-plan__tab-content-right">
                <img :src="plans.studio.image" alt="" />
              </div>
            </div>
          </div>

          <div class="tab" :class="{ 'active-tab': activeTab === 'duplex' }">
            <div class="floor-plan__tab-content-inner">
              <div class="floor-plan__tab-content-left">
                <ul class="list-unstyled floor-plan__tab-content-details">
                  <li>
                    <p>Total area</p>
                    <span>{{ plans.duplex.area }}</span>
                  </li>
                  <li>
                    <p>Floor no.</p>
                    <span>{{ plans.duplex.floor }}</span>
                  </li>
                  <li>
                    <p>Current status</p>
                    <span>{{ plans.duplex.status }}</span>
                  </li>
                  <li>
                    <p>No. of rooms</p>
                    <span>{{ plans.duplex.rooms }}</span>
                  </li>
                  <li>
                    <p>Parking available</p>
                    <span>{{ plans.duplex.parking }}</span>
                  </li>
                  <li>
                    <p>Price from</p>
                    <span>{{ plans.duplex.price }}</span>
                  </li>
                </ul>
              </div>
              <div class="floor-plan__tab-content-right">
                <img :src="plans.duplex.image" alt="" />
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

// Track the currently active tab
const activeTab = ref('penthouse'); // القيمة الافتراضية

// Data for the different plans
const plans = ref({
  penthouse: {
    area: '2800 Sq. Ft',
    floor: '2nd',
    status: 'Available',
    rooms: '04',
    parking: 'Yes',
    price: '$4500',
    image: '/Imags/floor-plan-tab-content-img-1.png'
  },
  studio: {
    area: '3000 Sq. Ft',
    floor: '3rd',
    status: 'Available',
    rooms: '02',
    parking: 'Yes',
    price: '$4000',
    image: '/Imags/floor-plan-tab-content-img-1.png'
  },
  duplex: {
    area: '3200 Sq. Ft',
    floor: '1st',
    status: 'Available',
    rooms: '05',
    parking: 'No',
    price: '$5000',
    image: '/Imags/floor-plan-tab-content-img-1.png'
  }
});

// Function to change the active tab
const changeTab = (tab: string) => {
  activeTab.value = tab; // تغيير الحالة إلى التبويب النشط الجديد
};
</script>

<style scoped>
.active-btn {
  font-weight: bold; /* مثال على تغيير التصميم للنقر */
  color: gold; /* اللون الذهبي للنقر */
}
</style>
