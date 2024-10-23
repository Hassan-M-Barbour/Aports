<template>
   

<div>

 

    <div class="page-wrapper">
        <SharedTopHeader />
        <div class="custom-cursor" id="custom-cursor"></div>
        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div><!-- /.sticky-header__content -->
        </div><!-- /.stricky-header -->

        <!--Page Header Start-->
        <ApartmentdetailsHeaderstart/>
        <!--Page Header End-->

        <!--Apartment Details Start-->
        <ApartmentdetailsDetailsstart/>
        <!--Apartment Details End-->

        <!--Floor Plan Two Start-->
        <ApartmentdetailsFloorplan/>
        <!--Floor Plan Two End-->

        <!--CTA One Start-->
        <ApartmentdetailsCtaone/>
        <!--CTA One End-->

        <!--Site Footer Start-->
        <SharedFooter/>
        <!--Site Footer End-->


    </div><!-- /.page-wrapper -->


    <SharedMobileFooter/>
    <!-- /.mobile-nav__wrapper -->

    <SharedSearchPopUp/>
    <!-- /.search-popup -->

    <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="icon-right-arrow"></i></a>


</div>

</template>

<script setup lang="ts">
useHead({
  title: 'Aports | Apartment Details',
  meta: [
    { name: 'description', content: '' }
  ],
  bodyAttrs: {
    class: 'test'
  },
 
})
</script>