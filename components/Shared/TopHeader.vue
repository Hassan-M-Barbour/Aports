<template>
  <header
    class="main-header fixed-header"
    data-v-inspector="pages/index.vue:74:9"
  >
    <div class="main-header__top" data-v-inspector="pages/index.vue:75:13">
      <div
        class="main-header__top-inner"
        data-v-inspector="pages/index.vue:76:17"
      >
        <div
          class="main-header__top-left"
          data-v-inspector="pages/index.vue:77:21"
        >
          <ul
            class="list-unstyled main-header__contact-list"
            data-v-inspector="pages/index.vue:78:25"
          >
            <li data-v-inspector="pages/index.vue:79:29">
              <div class="icon" data-v-inspector="pages/index.vue:80:33">
                <i
                  class="fas fa-map-marker-alt"
                  data-v-inspector="pages/index.vue:81:37"
                ></i>
              </div>
              <div class="text" data-v-inspector="pages/index.vue:83:33">
                <p data-v-inspector="pages/index.vue:84:37">
                  30 Commercial Road Fratton, Australia
                </p>
              </div>
            </li>
            <li data-v-inspector="pages/index.vue:87:29">
              <div class="icon" data-v-inspector="pages/index.vue:88:33">
                <i
                  class="fas fa-envelope"
                  data-v-inspector="pages/index.vue:89:37"
                ></i>
              </div>
              <div class="text" data-v-inspector="pages/index.vue:91:33">
                <p data-v-inspector="pages/index.vue:92:37">
                  <a
                    href="mailto:needhelp@company.com"
                    data-v-inspector="pages/index.vue:92:40"
                    >needhelp@company.com</a
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="main-header__top-right"
          data-v-inspector="pages/index.vue:97:21"
        >
          <div
            class="main-header__top-time"
            data-v-inspector="pages/index.vue:98:25"
          >
            <p data-v-inspector="pages/index.vue:99:29">
              Mon - Sat: 8.00 am - 7.00 pm
            </p>
          </div>
          <div
            class="main-header__social"
            data-v-inspector="pages/index.vue:101:25"
          >
            <a href="#" data-v-inspector="pages/index.vue:102:29"
              ><i
                class="fab fa-twitter"
                data-v-inspector="pages/index.vue:102:41"
              ></i></a
            ><a href="#" data-v-inspector="pages/index.vue:103:29"
              ><i
                class="fab fa-facebook"
                data-v-inspector="pages/index.vue:103:41"
              ></i></a
            ><a href="#" data-v-inspector="pages/index.vue:104:29"
              ><i
                class="fab fa-pinterest-p"
                data-v-inspector="pages/index.vue:104:41"
              ></i></a
            ><a href="#" data-v-inspector="pages/index.vue:105:29"
              ><i
                class="fab fa-instagram"
                data-v-inspector="pages/index.vue:105:41"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-menu" data-v-inspector="pages/index.vue:110:13">
      <div class="main-menu__wrapper" data-v-inspector="pages/index.vue:111:17">
        <div
          class="main-menu__wrapper-inner"
          data-v-inspector="pages/index.vue:112:21"
        >
          <div
            class="main-menu__left"
            data-v-inspector="pages/index.vue:113:25"
          >
            <div
              class="main-menu__logo"
              data-v-inspector="pages/index.vue:114:29"
            >
              <NuxtLink to="/" data-v-inspector="pages/index.vue:115:33">
                <img
                  src="/Imags/logo-1.png"
                  alt=""
                  data-v-inspector="pages/index.vue:115:54"
              /></NuxtLink>
            </div>
          </div>
          <div
            class="main-menu__main-menu-box"
            data-v-inspector="pages/index.vue:118:25"
          >
            <a href="#" class="mobile-nav__toggler" @click.prevent="toggleMenu"
              ><i
                class="fa fa-bars"
                data-v-inspector="pages/index.vue:119:69"
              ></i
            ></a>
            <ul
              class="main-menu__list"
              data-v-inspector="pages/index.vue:120:29"
            >
              <li
                class="dropdown current"
                data-v-inspector="pages/index.vue:121:33"
              >
                <NuxtLink to="/">Home</NuxtLink>
                <ul
                  class="shadow-box"
                  data-v-inspector="pages/index.vue:123:37"
                >
                  <li data-v-inspector="pages/index.vue:124:41">
                    <NuxtLink to="/" data-v-inspector="pages/index.vue:124:45"
                      >Home One</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:125:41">
                    <NuxtLink to="/" data-v-inspector="pages/index.vue:125:45"
                      >Home Tow</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:126:41">
                    <NuxtLink to="/" data-v-inspector="pages/index.vue:126:45"
                      >Home Three</NuxtLink
                    >
                  </li>
                  <li
                    class="dropdown"
                    data-v-inspector="pages/index.vue:127:41"
                  >
                    <a href="#" data-v-inspector="pages/index.vue:128:45"
                      >Header Styles</a
                    >
                    <ul data-v-inspector="pages/index.vue:129:45">
                      <li data-v-inspector="pages/index.vue:130:49">
                        <NuxtLink
                          to="/"
                          data-v-inspector="pages/index.vue:130:53"
                          >Header One</NuxtLink
                        >
                      </li>
                      <li data-v-inspector="pages/index.vue:131:49">
                        <NuxtLink
                          to="/"
                          data-v-inspector="pages/index.vue:131:53"
                          >Header Two</NuxtLink
                        >
                      </li>
                      <li data-v-inspector="pages/index.vue:132:49">
                        <NuxtLink
                          to="/"
                          data-v-inspector="pages/index.vue:132:53"
                          >Header Three</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li data-v-inspector="pages/index.vue:137:33">
                <NuxtLink to="/about" data-v-inspector="pages/index.vue:138:37"
                  >About</NuxtLink
                >
              </li>
              <li class="dropdown" data-v-inspector="pages/index.vue:140:33">
                <a href="#" data-v-inspector="pages/index.vue:141:37">Pages</a>
                <ul
                  class="shadow-box"
                  data-v-inspector="pages/index.vue:142:37"
                >
                  <li data-v-inspector="pages/index.vue:143:41">
                    <NuxtLink
                      to="/services"
                      data-v-inspector="pages/index.vue:143:45"
                      >Services</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:145:41">
                    <NuxtLink
                      to="/the-building"
                      data-v-inspector="pages/index.vue:145:45"
                      >The Building</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:147:41">
                    <NuxtLink
                      to="/agent"
                      data-v-inspector="pages/index.vue:147:45"
                      >Agents</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:148:41">
                    <NuxtLink
                      to="/faq"
                      data-v-inspector="pages/index.vue:148:45"
                      >FAQs</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown" data-v-inspector="pages/index.vue:151:33">
                <a href="#" data-v-inspector="pages/index.vue:152:37"
                  >Appartments</a
                >
                <ul
                  class="shadow-box"
                  data-v-inspector="pages/index.vue:153:37"
                >
                  <li data-v-inspector="pages/index.vue:154:41">
                    <NuxtLink
                      to="/apartments"
                      data-v-inspector="pages/index.vue:154:45"
                      >Apartments</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:155:41">
                    <NuxtLink
                      to="/apartment-details"
                      data-v-inspector="pages/index.vue:155:45"
                      >Apartment Details</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="dropdown" data-v-inspector="pages/index.vue:158:33">
                <a href="#" data-v-inspector="pages/index.vue:159:37">News</a>
                <ul
                  class="shadow-box"
                  data-v-inspector="pages/index.vue:160:37"
                >
                  <li data-v-inspector="pages/index.vue:161:41">
                    <NuxtLink
                      to="/news"
                      data-v-inspector="pages/index.vue:161:45"
                      >News</NuxtLink
                    >
                  </li>
                  <li data-v-inspector="pages/index.vue:162:41">
                    <NuxtLink
                      to="/news-details"
                      data-v-inspector="pages/index.vue:162:45"
                      >News Details</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li data-v-inspector="pages/index.vue:165:33">
                <NuxtLink
                  to="/contact"
                  data-v-inspector="pages/index.vue:166:37"
                  >Contact</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div
            class="main-menu__right"
            data-v-inspector="pages/index.vue:170:25"
          >
            <div
              class="main-menu__search-btn-box"
              data-v-inspector="pages/index.vue:171:29"
            >
              <div
                class="main-menu__search-box"
                data-v-inspector="pages/index.vue:172:33"
              >
                <a
                  href="#"
                  class="main-menu__search search-toggler fa fa-search"
                  data-v-inspector="pages/index.vue:173:37"
                ></a>
              </div>
              <div
                class="main-menu__btn-box"
                data-v-inspector="pages/index.vue:175:33"
              >
                <NuxtLink
                  to="/contact"
                  class="thm-btn main-menu__btn"
                  data-v-inspector="pages/index.vue:176:37"
                  >Schedule a Visit</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <SharedMobileMenu v-if="isMenuOpen" @close="toggleMenu" />
  </header>
</template>

<style scoped>
.main-menu__btn {
  color: white;
}

@media (max-width: 767px) {
  .main-header__top-inner,
  .main-menu__search-box,
  .main-menu__btn-box {
    display: none;
  }
  .main-menu__logo {
    margin: 0px;
  }
  .main-menu__wrapper {
    padding-right: 0px;
  }
}

.fixed-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.main-menu.scrolled {
  background-color: black;
}
.main-menu.scrolled .main-menu__logo {
  margin-top: 0px;
  height: 120px;
}
.main-menu.scrolled .main-menu__logo img {
  width: 80%;
}

.main-header__top.scrolled {
  display: none;
}
</style>

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
    handleScroll() {
      const menu = document.querySelector(".main-menu");
      const topHeader = document.querySelector(".main-header__top");

      if (window.scrollY > 400) {
        menu.classList.add("scrolled");
        topHeader.classList.add("scrolled");
      } else {
        menu.classList.remove("scrolled");
        topHeader.classList.remove("scrolled");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
