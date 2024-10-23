<template>
    
    <div class="">


<div class="page-wrapper">
    <SharedTopHeader />
    <div class="custom-cursor" id="custom-cursor"></div>
    <div class="stricky-header stricked-menu main-menu">
        <div class="sticky-header__content"></div><!-- /.sticky-header__content -->
    </div><!-- /.stricky-header -->

        <!--Page Header Start-->
        <ContactHeader />
       
        <ContactGetintouch />
                    
        
       <ContactMap />
        
        <ContactMessage />
        

    
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
  title: 'Aports | Contact',
  meta: [
    { name: 'description', content: '' }
  ],
  bodyAttrs: {
    class: 'test'
  },
 
})
</script>