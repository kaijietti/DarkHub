<template>
  <div>
    <div id="nav">
        <div class="webicon">
            <label class="webicon-label">DarkHub</label>
            <svg t="1565075730526" class="webicon-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="200" height="200">
                <path d="M928 538.656h-128v-177.344l86.08-82.176a32 32 0 1 0-44.192-46.304L750.624 320H273.376L182.08 232.864a31.968 31.968 0 1 0-44.16 46.272L224 361.344v177.344H96a32 32 0 0 0 0 64h128V640c0 52.96 14.304 102.592 39.232 145.216L137.92 904.864a32 32 0 1 0 44.192 46.304l119.712-114.272a287.104 287.104 0 0 0 178.208 89.344V544a32 32 0 0 1 64 0v382.24a287.424 287.424 0 0 0 178.208-89.344l119.712 114.272a32.032 32.032 0 0 0 44.192-46.304l-125.344-119.648A287.04 287.04 0 0 0 800 640v-37.344h128a32 32 0 0 0 0-64z" p-id="4153" fill="#e6e6e6"></path>
                <path d="M672 240a160 160 0 0 0-320 0v21.344h320V240z" p-id="4154" fill="#e6e6e6"></path>
            </svg>
        </div>

        <ul class="nav_menu">
            <li>
                <a @click="goPath('/index')" class="three-d">
                    Home
                    <span class="box">
                        <span class="front">Home</span>
                        <span class="back">Home</span>
                    </span>
                </a>
            </li>

            <li>
                <a @click="goPath('#')" class="three-d">
                    Course
                    <span class="box">
                        <span class="front">Course</span>
                        <span class="back">Course</span>
                    </span>
                </a>
                <ul>
                    <li>
                        <a @click="goPath('#')" class="three-d">
                            已结束
                            <span class="box">
                                <span class="front">已结束</span>
                                <span class="back">已结束</span>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a @click="goPath('#')" class="three-d">
                            未结束
                            <span class="box">
                                <span class="front">未结束</span>
                                <span class="back">未结束</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <a @click="goPath('#')" class="three-d">
                    MOJ
                    <span class="box">
                        <span class="front">MOJ</span>
                        <span class="back">MOJ</span>
                    </span>
                </a>
            </li>

            <li>
                <a href="#" class="three-d">
                    <span class="box">
                        <span class="front">
                            <div class="user">
                                <img :src="getUserIcon" width="40px" height="40px" id='usericon'/>
                            </div>
                        </span>
                        <span class="back" id = 'username_text'>
                            {{this.$store.state.username}}
                        </span>
                    </span>
                </a>
                <ul>
                    <li>
                        <a @click="goPath('/information')" class="three-d">
                              Information
                            <span class="box">
                                <span class="front">Infomation</span>
                                <span class="back">Infomation</span>
                              </span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a @click="Logout()" class='three-d' onclick='logout()'>
                            Log out
                            <span class = 'box'>
                                <span class = 'front'>Log out</span>
                                <span class = 'back'>Log out</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

    </div>        
    <div class="contact-section">
        <h1>Contact Us</h1>
        <div class="border"></div>
        <form class="contact-form" v-on:submit.prevent>
            <input type="text" class="contact-form-text" placeholder="Your name" id='ContactName' v-model="ContactName"/>
            <input type="email" class="contact-form-text" placeholder="Your email" id='ContactEmail' v-model="ContactEmail"/>
            <input type="text" class="contact-form-text" placeholder="Your phone" id='ContactPhone' v-model="ContactPhone"/>
            <textarea class="contact-form-text" placeholder="Your message" id='ContactMsg' v-model="ContactMsg"></textarea>
            <div class="contact-form-btn" v-on:click='sendContactInfo()'>Send</div>
        </form>
    </div>
    <footer>
        <a @click="goPath('/index')">Back to Home</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'contactus',
  data: function() {
    return {
      ContactName: '',
      ContactEmail: '',
      ContactPhone: '',
      ContactMsg : ''
    }
  },
  computed: {
    getUserIcon: function() {
      let getUrl = this.$router.resolve({name:'get'})['resolved']['matched'][0].path;
      let username = this.$store.state.username;
      return `${getUrl}?type=1&username=${username}`;
    },
  },
  methods:{
    goPath: function(url) {
      if(url === '#'){
        return;
      }else{
        this.$router.push({path:url});
      }
    },
    Logout: function() {
        this.$store.commit('logout');
        this.$router.push({path:'/'});
    },
    sendContactInfo: function() {
      if(!this.ContactName || !this.ContactEmail || !this.ContactMsg || !this.ContactPhone){
          return;
      }
      let data = {
        Name : this.ContactName,
        Email : this.ContactEmail,
        Msg : this.ContactMsg,
        Phone : this.ContactPhone,
        type: 4
      }
      let postUrl = this.$router.resolve({name:'post'})['resolved']['matched'][0].path;
      this.$axios.post(postUrl,JSON.stringify(data))
      .then(()=>{
        this.ContactName = '';
        this.ContactEmail = '';
        this.ContactPhone = '';
        this.ContactMsg = '';
        alert('submit success!')
      })
      .catch((err)=>{
        alert('err!\n'+err);
      })
    }
  }
}
</script>

<style scoped>
@import '../styles/contact_us.css';
</style>