<template>
  <div class="mobile-nav__wrapper expanded">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler">
        <button @click="$emit('close')"><i class="fa fa-times"></i></button
      ></span>

      <div class="logo-box">
        <a href="index.html" aria-label="logo image"
          ><img src="/Imags/logo-3.png" width="122" alt=""
        /></a>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container">
        <ul class="main-menu__list">
          <li class="dropdown current">
            <a href="index.html"
              >Home
              <button aria-label="dropdown toggler">
                <i class="fa fa-angle-down"></i></button
            ></a>
            <ul class="shadow-box">
              <li class="current"><a href="index.html">Home One</a></li>
              <li><a href="index2.html">Home Two</a></li>
              <li><a href="index3.html">Home Three</a></li>
              <li class="dropdown">
                <a href="#"
                  >Header Styles<button aria-label="dropdown toggler">
                    <i class="fa fa-angle-down"></i></button
                ></a>
                <ul>
                  <li class="current"><a href="index.html">Header One</a></li>
                  <li><a href="index2.html">Header Two</a></li>
                  <li><a href="index3.html">Header Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li class="dropdown">
            <a href="#"
              >Pages<button aria-label="dropdown toggler">
                <i class="fa fa-angle-down"></i></button
            ></a>
            <ul class="shadow-box">
              <li><a href="services.html">Services</a></li>
              <li><a href="the-building.html">The Building</a></li>
              <li><a href="agents.html">Agents</a></li>
              <li><a href="faq.html">FAQs</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#"
              >Appartments<button aria-label="dropdown toggler">
                <i class="fa fa-angle-down"></i></button
            ></a>
            <ul class="shadow-box">
              <li><a href="apartments.html">Apartments</a></li>
              <li><a href="apartment-details.html">Apartment Details</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="#"
              >News<button aria-label="dropdown toggler">
                <i class="fa fa-angle-down"></i></button
            ></a>
            <ul class="shadow-box">
              <li><a href="news.html">News</a></li>
              <li><a href="news-details.html">News Details</a></li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
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
          <i class="fa fa-phone-alt"></i>
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      <!-- /.mobile-nav__contact -->
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-facebook-square"></a>
          <a href="#" class="fab fa-pinterest-p"></a>
          <a href="#" class="fab fa-instagram"></a>
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
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
