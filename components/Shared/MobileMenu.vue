<template>
  <div class="mobile-nav__wrapper expanded">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler">
        <button @click="$emit('close')"><i class="fa fa-times"></i></button
      ></span>

      <div class="logo-box">
        <NuxtLink href="index.html" aria-label="logo image"
          ><img src="/Imags/logo-3.png" width="122" alt=""
        /></NuxtLink>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li class="dropdown current">
            <NuxtLink to="/"
              >Home
              <button aria-label="dropdown toggler" @click="toggleElementHome">
                <i
                  :class="isVisible2 ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                ></i></button
            ></NuxtLink>
            <ul
              class="shadow-box"
              v-if="isVisible2"
              ref="elementToHide"
              style="display: block"
            >
              <li class="current"><NuxtLink to="/">Home One</NuxtLink></li>
              <li><NuxtLink to="/">Home Two</NuxtLink></li>
              <li><NuxtLink to="/">Home Three</NuxtLink></li>
              <li class="dropdown">
                <NuxtLink href="#"
                  >Header Styles<button aria-label="dropdown toggler">
                    <i class="fa fa-angle-down"></i></button
                ></NuxtLink>
                <ul>
                  <li class="current">
                    <NuxtLink to="/">Header One</NuxtLink>
                  </li>
                  <li><NuxtLink to="/">Header Two</NuxtLink></li>
                  <li><NuxtLink to="/">Header Three</NuxtLink></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="dropdown">
            <NuxtLink href="#"
              >Pages<button
                aria-label="dropdown toggler"
                @click="toggleElementPages"
              >
                <i
                  :class="isVisible ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                ></i></button
            ></NuxtLink>
            <ul
              class="shadow-box"
              v-if="isVisible"
              ref="elementToHide"
              style="display: block"
            >
              <li><NuxtLink to="/services">Services</NuxtLink></li>
              <li><NuxtLink to="/the-building">The Building</NuxtLink></li>
              <li><NuxtLink to="/agent">Agents</NuxtLink></li>
              <li><NuxtLink to="/faq">FAQs</NuxtLink></li>
            </ul>
          </li>
          <li class="dropdown">
            <NuxtLink href="#"
              >Appartments<button
                aria-label="dropdown toggler"
                @click="toggleElementApartments"
              >
                <i
                  :class="isVisible3 ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                ></i></button
            ></NuxtLink>
            <ul
              class="shadow-box"
              v-if="isVisible3"
              ref="elementToHide"
              style="display: block"
            >
              <li><NuxtLink to="/apartments">Apartments</NuxtLink></li>
              <li>
                <NuxtLink to="/apartment-details">Apartment Details</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <NuxtLink href="#"
              >News<button
                aria-label="dropdown toggler"
                @click="toggleElementNews"
              >
                <i
                  :class="isVisible1 ? 'fa fa-angle-up' : 'fa fa-angle-down'"
                ></i></button
            ></NuxtLink>
            <ul
              class="shadow-box"
              v-if="isVisible1"
              ref="elementToHide"
              style="display: block"
            >
              <li><NuxtLink to="/news">News</NuxtLink></li>
              <li><NuxtLink to="/news-details">News Details</NuxtLink></li>
            </ul>
          </li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:needhelp@packageName__.com">needhelp@agrion.com</a>
        </li>
        <li>
          <i class="fa fa-phone"></i>
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <NuxtLink href="#" class="fab fa-twitter"></NuxtLink>
          <NuxtLink href="#" class="fab fa-facebook-square"></NuxtLink>
          <NuxtLink href="#" class="fab fa-pinterest-p"></NuxtLink>
          <NuxtLink href="#" class="fab fa-instagram"></NuxtLink>
        </div>
        <!-- /.mobile-nav__social -->
      </div>
      <!-- /.mobile-nav__top -->
    </div>
    <!-- /.mobile-nav__content -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isVisible: false,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleElementPages() {
      this.isVisible = !this.isVisible;
    },
    toggleElementNews() {
      this.isVisible1 = !this.isVisible1;
    },
    toggleElementHome() {
      this.isVisible2 = !this.isVisible2;
    },
    toggleElementApartments() {
      this.isVisible3 = !this.isVisible3;
    },
  },
};
</script>
