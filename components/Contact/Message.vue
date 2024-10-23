<template>
    <section class="contact-three">
            <div class="container">
                <div class="contact-three__inner">
                    <div class="section-title text-center">
                        <span class="section-title__tagline">write a message</span>
                        <h2 class="section-title__title">Feel free to write</h2>
                    </div>
                    <div class="contact-three__form-box">
                        <form action="/inc/sendemail.php" class="contact-three__form contact-form-validated"
                            novalidate>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="contact-form__input-box">
                                        <input type="text" placeholder="Your name" name="name">
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="contact-form__input-box">
                                        <input type="email" placeholder="Email address" name="email">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="contact-form__input-box text-message-box">
                                        <textarea name="message" placeholder="Write message"></textarea>
                                    </div>
                                    <div class="contact-form__btn-box">
                                        <button type="submit" class="thm-btn contact-form__btn">Send a Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</template>