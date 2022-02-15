<template>
  <div class="page" id="page">


    <main>
        <div class="welcome-content">
           <h1> Welcome to the Danish United Banks </h1>
           <h3>{ D.U.B }</h3>
        </div>

        <article class="about-us-content">
            <AboutUs />
        </article>

       
        <div  class="contact-us-content" >
           <ContactUs />
        </div>
        <Footer />
    </main>
    
</div>

</template>

<script>
import AboutUs from '../components/About-us.vue'
import ContactUs from '../components/Contact-us.vue'
import Footer from '../components/footer'

export default {
    el: '#page',
    data() {
        return {

        };
    },
    methods: {

    },


    mounted() {
    
    },
    components: {
        AboutUs,
        ContactUs,
        Footer
    }
};


</script>

<style lang="scss" scoped>
.page {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 300vh;
    width: 100%;
    background-image: url(../assets/background.jpg);

        background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}

img {
    position: absolute;
    top: -100px;
    z-index: 10;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: calc(100vh - 100px);
    width: 100%;

}

main {
    position: absolute;
    top: 100px;
    width: 100%;
    height: calc(300vh - 100px)

}

.welcome-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 100px);
    top: - 100px;
    color: wheat;
    text-align: center;
}

.sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
}

.about-us-content {
    height: 100vh;
    width: 100%;
    background-color: rgb(14, 14, 14);
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}

.divider {
    width: 100%;
    height: 20px;
    background-color: black;
}

.contact-us-content {
    height: 91vh;
    width: 100%;
    background-color: rgb(255, 249, 249);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

@media screen and (max-width: 720px)
{
    main {
        height: calc(300vh + 200px);
    }

    h1 {
        position: relative;
        top: 0px;
        font-size: 20px;
    }

    h3 {
        position: relative;
        top: 0px;
        font-size: 15px;

    }
}

@media screen and (max-width:600px) {
    main, page {
        height: calc(300vh + 450px);
    }

}
</style>