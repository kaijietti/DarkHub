<template>
  <div>
      <div id="sign-box" class="login-sign-box">
        <form class="login-sign-form" v-on:submit.prevent>
            <h1>Sign Up</h1>
            <input class="txtb" type="text" placeholder="Username" id='username' autocomplete='off' v-model="signupUsername"/>
            <input class="txtb" type="password" placeholder="Password" id='password' v-model="signupPassword"/>
            <input class="txtb" type="password" placeholder="Confirm Password" id='confirm' v-model="signupConfirm"/>
            <button class='login-sign-btn' @click='SignUp()'>SignUp</button>
            <div id="login-back-btn" class="login-sign-hint" v-on:click="gotoLogin()"> Login &nbsp;
                <svg t="1564994792295" class="login-sign-hint-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="820" width="200" height="200">
                    <path d="M672.97 956.46l70.25-65.41L410.6 533.57l333.06-367.34-71.13-64.47-392.31 432.65 392.75 422.05z" p-id="821">
                    </path>
                </svg>
            </div>
        </form>
    </div>

    <div id="login-box" class="login-sign-box">
        <form class="login-sign-form" v-on:submit.prevent>
            <h1>Welcome</h1>
            <input class="txtb" type="text" placeholder="Username" id='username_login' autocomplete="off" v-model="loginUsername"/>
            <input class="txtb" type="password" placeholder="Password" id='password_login' v-model="loginPassword"/>
            <button class='login-sign-btn' @click='Login()'>Login</button>
            <div id="sign-back-btn" class="login-sign-hint" v-on:click="gotoSignup()"> SignUp &nbsp;
                <svg t="1564990286800" class="login-sign-hint-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="820" width="200" height="200">
                    <path d="M364.91 932.46l-70.25-65.41 332.62-357.48-333.06-367.34 71.13-64.47 392.31 432.65-392.75 422.05z" p-id="821">
                    </path>
                </svg>
            </div>
        </form>
    </div>``
  </div>
</template>

<script>
export default {
  name: 'sign',
  data: function() {
    return {
      loginUsername: '',
      loginPassword: '',
      signupUsername: '',
      signupPassword: '',
      signupConfirm: ''
    }
  },
  methods: {
    gotoLogin: function() {
      document.getElementById('login-box').style.left = '0';
    },
    gotoSignup: function() {
      document.getElementById('login-box').style.left = '-100%';
    },
    SignUp: function() {
      if(this.signupConfirm != this.signupPassword){
        alert('Passwords not the same');
        return;
      }
      let postUrl = 'http://localhost::8080';
      let data = {
        username: this.signupUsername,
        password: this.signupPassword,
        type: 0
      }
      this.$axios.post(postUrl,JSON.stringify(data))
      .then(()=>{
        alert('Signup success!');
        this.gotoLogin();
      })
      .catch((err)=>{
        alert('err!\n' + err);
      })
    },
    Login: function() {
      if(!this.loginUsername || !this.loginPassword){
        return;
      }
      let postUrl = 'http://localhost:8080';
      let data = {
        username: this.loginUsername,
        password: this.loginPassword,
        type: 1,
      }
      this.$axios.post(postUrl,JSON.stringify(data))
      .then((/*result*/)=>{
        alert('login success!')
        this.$store.commit('login',this.loginUsername);
        this.$router.push({path:'index'});
      })
      .catch((err)=>{
        alert('connect wrong!\n' + err);
      })
    }
  }
}
</script>

<style scoped>
@import '../styles/sign.css';
</style>