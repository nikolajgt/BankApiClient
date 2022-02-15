<template>
  <div class="contact-us-root">
      <div class="contact-us-left">
        <h1> Kontakt os </h1>
          <div class="contact-left-content">
                <p>Oplever du tekniske problemer eller kan du ikke finde ud af at bruge systemet?
                    Har du bare brug for en at snakke med, eller kunne det være fordi du har opdaget vi ikke er en bank?

                    
                </p>

              <p>
                  prik til en af vores medarbejder og de vil ankomme straks!
              </p>
          </div>
        </div>
        <div class="contact-us-right">
          <div class="form-group">
            <input type="input" class="input-field" placeholder="Fornavn" name="name" id='name' required />
            <input type="input" class="input-field" placeholder="Efternavn" name="name" id='Efternavn' required />
            <input type="input" class="input-field" placeholder="Email" name="name" id='Email' required />
            <input type="input" class="input-field" placeholder="Emne" name="name" id='name' required />
            <textarea placeholder="Jeg fandt ud af...."/>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;

.contact-us-root {
    height: 100%;
    width: 100%;
    background-color: white;

    display: flex;
    flex-direction: row;

    .contact-us-left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            padding-bottom: 40px;
            
        }

        .contact-left-content {
            position: relative;
            color: black;
            padding: 20px 100px;

            p:last-child {
                padding: 20px;
            }
        }
    }

    .contact-us-right {
        width: 50%;
        height: 100%;
        background-color: white;
        padding-top: 50px;
        margin: auto;
        // background-color: rgb(14, 14, 14);

        .form-group {
            position: relative;
            padding-right: 100px;
            top: 0;
            
            display: block;
            flex-direction: column;
            transition: 0.2s;
            font-size: 1rem;
            color: $gray;

            &::placeholder {
                color: transparent;
            }

            &:placeholder-shown ~ .input-field {
                font-size: 1.3rem;
                cursor: text;
                top: 20px;
            }

            .input-field {
                font-family: inherit;
                width: 100%;
                border: 0;
                border-bottom: 2px solid $gray;
                outline: 0;
                font-size: 1.3rem;
                color: black;
                padding: 7px 0;
                background: transparent;
                transition: border-color 0.2s;
                padding-top: 50px;

                .input-field:focus {
                    ~ .input-label {
                        position: absolute;
                        top: 0;
                        display: block;
                        transition: 0.2s;
                        font-size: 1rem;
                        color: $primary;
                        font-weight:700;    
                    }
                    padding-bottom: 6px;  
                    font-weight: 700;
                    border-width: 3px;
                    border-image: linear-gradient(to right, $primary,$secondary);
                    border-image-slice: 1;
                }
                .input-field{
                    &:required,&:invalid { box-shadow:none; }
                    }

            }
        }

        textarea {
            position: relative;
            top: 50px;
            width: 100%;
            height: auto;
            min-height: 350px;
            resize: none;
            font-size: 15px;
            color: black;
        }


    }
}


@media screen and (max-width: 720px) {
    .contact-us-root {
        display: flex;
        flex-direction: column;
        height: 100%;

        .contact-us-left {
            padding-top: 50px;
            width: 100%;
        }

        .contact-us-right {
            width: 100%;
            padding-top:0;
            padding-bottom: 50px;

            .form-group {
                padding:20px;
            }
        }
    }
}

</style>