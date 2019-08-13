<template>
  <div>

    <div id="nav">
      <div class="webicon">
          <label class="webicon-label">DarkHub</label>
          <svg t="1565075730526" class="webicon-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4152" width="200" height="200">
              <path d="M928 538.656h-128v-177.344l86.08-82.176a32 32 0 1 0-44.192-46.304L750.624 320H273.376L182.08 232.864a31.968 31.968 0 1 0-44.16 46.272L224 361.344v177.344H96a32 32 0 0 0 0 64h128V640c0 52.96 14.304 102.592 39.232 145.216L137.92 904.864a32 32 0 1 0 44.192 46.304l119.712-114.272a287.104 287.104 0 0 0 178.208 89.344V544a32 32 0 0 1 64 0v382.24a287.424 287.424 0 0 0 178.208-89.344l119.712 114.272a32.032 32.032 0 0 0 44.192-46.304l-125.344-119.648A287.04 287.04 0 0 0 800 640v-37.344h128a32 32 0 0 0 0-64z" p-id="4153" fill="#e6e6e6">
              </path>
              <path d="M672 240a160 160 0 0 0-320 0v21.344h320V240z" p-id="4154" fill="#e6e6e6">
              </path>
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
              <a @click="goPath('#')" class="three-d">
                  <span class="box">
                      <span class="front">
                          <div class="user">
                              <img src="imags/usericon.png" width="40px" height="40px" id='usericon'/>
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

        <!--搜索栏-->

        <div class="search-box">
            <input class="search-txt" type="text" name="" placeholder="Type to search">
            <a class="search-btn" @click="goPath('#')">
                <svg t="1565095137450" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2417" width="200" height="200"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z" fill="#FF5722" p-id="2418"></path></svg>
            </a>
        </div>


        <footer>
            <a @click="goPath('/contactus')">Contact Us</a>
        </footer>

  </div>
</template>

<script>
export default {
  name: 'index',
  data: function() {
    return {

    }
  },
  methods: {
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
    }
  },

}
</script>

<style scoped>
@import '../styles/index.css'
</style>