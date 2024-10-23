<template>
    <section class="gallery-three">
      <div class="container">
        <div class="section-title text-center">
          <span class="section-title__tagline">Photo gallery</span>
          <h2 class="section-title__title">Checkout the gallery</h2>
        </div>
        <div class="row masonary-layout">
          <!-- Column 1: Two square images -->
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-1.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-1.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-3.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-3.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Column 2: One tall image -->
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="gallery-three__single" style="height: 100%;">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-2.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-2.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Column 3: Two square images -->
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-4.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-4.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-5.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-5.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Column 4: Two square images -->
          <div class="col-xl-3 col-lg-3 col-md-6">
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-6.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-6.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
            <div class="gallery-three__single">
              <div class="gallery-three__img">
                <img src="/Imags/gallery-3-7.jpg" alt="" />
                <div class="gallery-three__icon">
                  <a class="img-popup" href="/Imags/gallery-3-7.jpg"
                    ><span class="fa fa-plus"></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .gallery-three__single {
    margin-bottom: 15px; /* يمكنك تعديل المسافة بين الصور حسب الحاجة */
  }
  .gallery-three__img img {
    width: 100%;
    height: auto; /* لضمان تناسب الصورة مع العرض */
  }
  </style>
  