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
                    <a @click="Logout()" class='three-d'>
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
    <div class="info-section">
        <h1>Your information</h1>
        <div class="border"></div>
        <form class="info-form" action="personalinfo.html" method="post">

            <div class="info-form-user">
                <img class="info-form-usericon" :src="getUserIcon" id='infoUserIcon'>
                <div class="info-form-white"></div>
                <div class="change-box">
                    <svg t="1565101619122" class="change-box-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2713" width="200" height="200"><path d="M261.12 165.76l136.32 136.32-95.36 95.36-136.32-136.32a239.36 239.36 0 0 0 295.68 339.84l256 256a98.56 98.56 0 1 0 139.52-139.52l-256-256a239.36 239.36 0 0 0-339.84-295.68z" fill="#212121" p-id="2714"></path></svg>
                  </div>
            </div>  
            
            <input type="text" class="info-form-text" placeholder="Your name" v-bind:disabled='!changable' id='name' autocomplete="off" v-model="name"/>
            <input type="email" class="info-form-text" placeholder="Your email" v-bind:disabled='!changable' id='email' v-model="email"/>
            <input type="text" class="info-form-text" placeholder="Your phone" v-bind:disabled='!changable' id='phone' v-model="phone"/>
            <textarea class="info-form-text" placeholder="Your address" v-bind:disabled='!changable' id='address' v-model="address"></textarea>
            <div class="info-form-btn" @click='buttonClick()'>{{ status }}</div>
        </form>
    </div>
    <footer>
        <a @click="goPath('/index')">Back to Home</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'information',
  data: function() {
    return {
      changable: false,

      name: '',
      email: '',
      phone: '',
      address: '',
      userIcon: '',
    }
  },
  created: function() {
    let data = {
      username: this.$store.state.username,
      type: 3,
    };
    let postUrl = this.$router.resolve({name:'post'})['resolved']['matched'][0].path;
    this.$axios.post(postUrl,JSON.stringify(data))
      .then((result) => {
        var reg1 = new RegExp('&','g');
        var reg2 = new RegExp('=','g');

        result = '{"' + result.data + '"}';
        
        result = result.replace(reg1,'","').replace(reg2,'":"');
        var parse_result = JSON.parse(result);

        this.name = parse_result.name;
        this.email = parse_result.email;
        this.phone = parse_result.phone;
        this.address = parse_result.address;
      })
  },
  computed: {
    status: function() {
      return this.changable ? 'Save' : 'Change';
    },
    getUserIcon: function() {
      let getUrl = this.$router.resolve({name:'get'})['resolved']['matched'][0].path;
      let username = this.$store.state.username;
      return `${getUrl}?type=1&username=${username}`;
    },
  },
  methods: {
    goPath: function(url) {
      if(url === '#'){
        return;
      }
      this.$router.push({path:url});
    },
    Logout: function() {
      this.$store.commit('logout');
      this.$router.push({path:'/'});
    },
    buttonClick: function() {
      this.changable = !this.changable;
      if (this.changable == false) {
        let data = {
          username: this.$store.state.username,
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          type: 2,
        }
        let postUrl = this.$router.resolve({name:'post'})['resolved']['matched'][0].path;
        this.$axios.post(postUrl,JSON.stringify(data))
          .then(() => {
            alert('Submit success!');
          })
          .catch((err) => {
            alert(`Submit failed with err\n${err}`);
          });
      }
    }
  }
}
</script>

<style scoped>
@import '../styles/personalinfo.css';
</style>