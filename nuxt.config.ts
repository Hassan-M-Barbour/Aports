import { resolveAlias } from "nuxt/kit";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 compatibilityDate: '2024-04-03',
 devtools: { enabled: true },

 // app:{
 //   head:{
 //     script:[
 //     {src:'/assets/js/aports.js', defer:true},
 //     {src:'/assets/js/bootstrap-select.min.js', defer:true},
 //     {src:'/assets/js/bootstrap.bundle.min.js', defer:true},
 //     {src:'/assets/js/countdown.min.js', defer:true},
 //     {src:'/assets/js/isotope.js', defer:true},
 //     {src:'/assets/js/jarallax.min.js', defer:true},
 //     {src:'/assets/js/jquery-3.6.0.min.js', defer:true},
 //     {src:'/assets/js/jquery-ui.js', defer:true},
 //     {src:'/assets/js/jquery.ajaxchimp.min.js', defer:true},
 //     {src:'/assets/js/jquery.appear.min.js', defer:true},
 //     {src:'/assets/js/jquery.bxslider.min.js', defer:true},
 //     {src:'/assets/js/jquery.circle-progress.min.js', defer:true},
 //     {src:'/assets/js/jquery.circleType.js', defer:true},
 //     {src:'/assets/js/jquery.lettering.min.js', defer:true},
 //     {src:'/assets/js/jquery.magnific-popup.min.js', defer:true},
 //     {src:'/assets/js/jquery.validate.min.js', defer:true},
 //     {src:'/assets/js/nouislider.min.js', defer:true},
 //     {src:'/assets/js/odometer.min.js', defer:true},
 //     {src:'/assets/js/owl.carousel.min.js', defer:true},
 //     {src:'/assets/js/swiper.min.js', defer:true},
 //     {src:'/assets/js/timePicker.js', defer:true},
 //     {src:'/assets/js/tiny-slider.min.js', defer:true},
 //     {src:'/assets/js/vegas.min.js', defer:true},
 //     {src:'/assets/js/wNumb.min.js', defer:true},
 //     {src:'/assets/js/wow.js', defer:true},
 //     ]}},
 css: [
'@/assets/css/all.min.css',
'@/assets/css/animate.min.css',
'@/assets/css/aports-responsive.css',
'@/assets/css/aports.css',
'@/assets/css/bootstrap-select.min.css',
'@/assets/css/bootstrap.min.css',
'@/assets/css/custom-animate.css',
'@/assets/css/jarallax.css',
'@/assets/css/jquery-ui.css',
'@/assets/css/jquery.bxslider.css',
'@/assets/css/jquery.magnific-popup.css',
'@/assets/css/nouislider.min.css',
'@/assets/css/nouislider.pips.css',
'@/assets/css/odometer.min.css',
'@/assets/css/owl.carousel.min.css',
'@/assets/css/owl.theme.default.min.css',
'@/assets/css/style.css',
'@/assets/css/stylesheet.css',
'@/assets/css/swiper.min.css',
'@/assets/css/timePicker.css',
'@/assets/css/tiny-slider.min.css',
'@/assets/css/vegas.min.css',
'@/assets/css/custom-cursor.css',
 ],
 plugins: [
    '~/plugins/custom-cursor.js'
  ],

 modules: ['@nuxt/ui'],
})