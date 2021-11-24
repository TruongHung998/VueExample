<template>
    <div class="form-area form-style-2">
        <div class="container">
            <div class="form-wrap">
                <div class="row">
                    <div class="col-xl-7 col-lg-5">
                        <form id="contact-form" class="form"  
                                action="https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b" 
                                method="POST"
                            >
                            <div class="form-field">
                                <input type="text" name="con_name" placeholder="Name" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="text" name="con_email" placeholder="Email" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="text" name="con_subject" placeholder="Subject*" class="input-field">
                            </div>
                            <div class="form-field mb-0">
                                <textarea name="con_message" placeholder="Message" class="textarea-field"></textarea>
                            </div>
                            <div class="form-btn-wrap">
                                <button type="submit" value="submit" class="form-btn" name="submit">
                                    Submit Now
                                    <i class="icofont-long-arrow-right"></i>
                                </button>
                                <p class="form-messege"></p>
                            </div>
                        </form>
                    </div>
                    <div class="col-xl-5 col-lg-7">
                        <div class="contact-sidebar">
                            <div class="contact-sidebar-banner">
                                <div class="inner-img">
                                    <img src="/images/contact/banner/1-1-310x310.png" alt="Banner">
                                    <div class="sidebar-btn-wrap">
                                        <a class="sidebar-btn" href="contact.html">Head Quater</a>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-sidebar-info">
                                <ul class="contact-info">
                                    <li>
                                        <div class="contact-icon">
                                            <img src="/images/contact/icon/calling.png" alt="Contact Icon">
                                        </div>
                                        <a href="tel://00-359-467-9434">(00) 359 467 9434</a>
                                    </li>
                                    <li>
                                        <div class="contact-icon">
                                            <img src="/images/contact/icon/message.png" alt="Contact Icon">
                                        </div>
                                        <a href="mailto://info@example.com">info@example.com</a>
                                    </li>
                                    <li>
                                        <div class="contact-icon">
                                            <img src="/images/contact/icon/location.png" alt="Contact Icon">
                                        </div>
                                        <span>845 Central Ave <br>Hamilton, Ohio(OH), 45011</span>
                                    </li>
                                </ul>
                                <div class="social-link">
                                    <h2 class="social-title">Connect With Us:</h2>
                                    <ul class="social-list">
                                        <li v-for="(social, index) in socials" :key="index">
                                            <a :href="social.link"><i v-bind:class="social.iconName"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      socials: [
        {
          link: 'https://www.facebook.com',
          iconName: 'icofont-facebook'
        },
        {
          link: 'https://www.skype.com',
          iconName: 'icofont-skype'
        },
        {
          link: 'https://www.twitter.com',
          iconName: 'icofont-twitter'
        },
        {
          link: 'https://www.linkedin.com',
          iconName: 'icofont-linkedin'
        }
      ]
    }
  }
}
 </script> 