<template>
<div class="root" id="root-login">
    <div class="color-barrier">
        <!-- <button>Back?</button> -->
    </div>
    <div class="login-root">
        <div class="login-wrapper">
            <div class="login-left-side">
                <h1>De forenede banker</h1>
            </div>
            <div class="login-right-side">
                <div class="login-box">
                    <div class="upper-box">
                        <h3>Login</h3>
                    </div>
                    <div class="lower-box">
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" v-model="uname" name="uname" required>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" v-model="pword" name="psw" required>
                        <a href="#" class="forgot-password">Forgot password?</a>

                        <button type="submit" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    el: '#root-login',
    data(){
        return {
            uname: '',
            pword: '',
        }
    },
    computed: {
        ...mapGetters("auth",{
            getterLoginStatus: "getLoginStatus",
        })
    },
     methods: {
        ...mapActions("auth", {
            actionLogin: "login"
        }),
        async login() {
            await this.actionLogin({Username:this.uname, Password:this.pword});
            if(this.getterLoginStatus === "success") {
                this.$router.push("/Dashboard")
            }
            else {
                console.log("failed to login")
            
            }
        }
     }
}

</script>

<style lang="scss" scoped>
$purple: #4B0082;

    .color-barrier {
        position: absolute;
        top: 0;
        left: 0;
        width: 40%;
        height: 100%;
        background-color: $purple;

        button {
            position: absolute;
            top: 0;
            left: 0;
            margin: 100px;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #9500ff;
        }

    }

    .login-root {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;


        .login-wrapper {
            top: 200px;
            width: 60%;
            height: 65%;
            margin:auto;
            display: flex;
            flex-direction: row;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

            .login-left-side {
                position: relative;
                width: 30%;
                height: 100%;
                top: 25%;
                padding-left: 2%;

                h1 {
                    color: blanchedalmond;
                }
            }

            .login-right-side {
                width: 70%;
                height: 100%;
                display: flex;

                .login-box {
                    width: 90%;
                    height: 90%;
                    margin: auto;

                    .upper-box {
                        height: 50px;
                    }

                    .lower-box {
                        display:flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 10% 15% 10% 15%;

                        b {
                            float: left;
                            margin-bottom: 5px;
                           
                        }
                        
                        b:first-child {
                            margin-top: 20px;
                        }
                        input {
                            margin-bottom: 10px;
                            height: 40px;
                            color:$purple;
                            border-radius: 4px;
                            border: solid 1px grey;
                            font-family: 'JetBrains Mono';
                        }
                        input:focus {
                            color:$purple
                        }

                        button {
                            width: 100%;
                            height: 50px;
                            margin: auto;
                            margin-top: 30px;
                            background-color: $purple;
                            color: white;
                            font-size: 18px;
                            border-radius: 10px;
                            font-family: 'JetBrains Mono';
                            border: 0;
                        }
                        button:hover {
                            background-color: #330057;
                        }
             
                    

                        .forgot-password {
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
</style>