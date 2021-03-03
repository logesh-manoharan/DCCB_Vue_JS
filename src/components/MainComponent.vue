<template>
    <div class="universal">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
                <ul class="navbar navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="#">
                        <router-link style="text-decoration: none" to="/">
                            <img id="logo-image" src="../assets/images/restaurant-logo_medium.png">
                        </router-link>
                    </a></li>
                    <li class="nav-item">
                        <router-link style="text-decoration: none" to="/">
                            <h4 class="buisness-title">David Chu's China Bristo</h4>
                            <p class="buisness-title">
                                <img src="../assets/images/star-k-logo.png" style="height: 20px; width: 20px;"> 
                                We deliver
                            </p>
                        </router-link>
                    </li>

                </ul>


                <div class="collapse navbar-collapse" id="navbartoggle">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about"><font-awesome-icon :icon="['fas', 'info']" /> About</router-link>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <a type="button" class="nav-link dropdown-toggler" href="#" data-toggle="dropdown" data-target="#dropDownNav">
                                    <font-awesome-icon :icon="['fas', 'list']" /> Menu</a>
                                <ul class="dropdown-menu" id="dropDownNav">
                                    <li class="dropdown-item">
                                        <router-link class="dropdown-links-own" to="/menu/">Menus</router-link>
                                    </li>
                                    <li class="dropdown-item">
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-item">
                                                <router-link class="dropdown-links-own" to="/menu/breakfast">Breakfast</router-link>
                                            </li>
                                            <li class="dropdown-item">
                                                <router-link class="dropdown-links-own" to="/menu/lunch">Lunch</router-link>
                                            </li>
                                            <li class="dropdown-item">
                                                <router-link class="dropdown-links-own" to="/menu/dinner">Dinner</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            
                            <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" variant="transparent" class="m-md-2" style="background: #ffffff00;">
                                
                                <b-dropdown-item>First Action</b-dropdown-item>
                                <b-dropdown-item>Second Action</b-dropdown-item>
                                <b-dropdown-item>Third Action
                                    <b-dropdown>
                                        <b-dropdown-item>1</b-dropdown-item>
                                    </b-dropdown>
                                </b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item active>Active action</b-dropdown-item>
                                
                            </b-dropdown> -->

                            <div class="dropdown-menu fixed-top" id="dropDownNav">
                                <a class="dropdown-item">BREAKFAST</a>
                                <a class="dropdown-item">LUNCH</a>
                                <a class="dropdown-item">DINNER</a>
                                <!-- <router-link class="dropdown-header" to="/menu">Menus</router-link>
                                <router-link class="dropdown-item" to="/menu/breakfast">BREAKFAST</router-link>
                                <router-link class="dropdown-item" to="/menu/lunch">LUNCH</router-link>
                                <router-link class="dropdown-item" to="/menu/dinner">DINNER</router-link> -->
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="tel: +919080311157">+91 908031157 <font-awesome-icon :icon="['fas', 'phone']" /></a></li>
                    </ul>

                </div>
                <button class="navbar-toggler fixed-top mr-auto" type="button" data-toggle="collapse" data-target="#navbartoggle">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

        <div class="content">
            <router-view></router-view>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        Hours:
                        <br>
                        Sun-Thurs: 11:15am - 10:00pm<br>
                        Fri: 11:15am - 2:30pm<br>
                        Saturday CLOSED!
                    </div>

                    <div class="col-12 col-lg-4">
                        <i>&quot;The best Chinese restaurant I've ever beem to! And that's
                            saying a lot, since I've been to marty!&quot;<br><br>

                            &quot;Amazing food, great service, couldn't ask for mpre! I'll be
                            back, again and again!&quot;
                        </i>
                    </div>

                    <div class="col-12 col-lg-4">
                        <h5>Address:</h5>
                        <address>
                            7105 Reister stown road <br>
                            Baltimore, MD 21215
                        </address>
                        <p style="color: #557c3e;">
                            &quot;Delivery area within 3-4 miles, with minimum order of 520 plus $3
                            charge for all deliveries&quot;
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
// import HomeComponent from './HomeComponent.vue';

export default {
    name: "MainComponent",
    components: {
    },
    data() {
        return {
            homeActive: false,
            aboutActive: false,
            menuActive: false
        }
    },
    beforeMount: function() {
        var urlArray = window.location.href.toString().split('/');
        var currentPath = urlArray[4];      // 4th element is PATH NAME(eg: menu)
        console.log('PATH NAME: '+ currentPath);

        if(currentPath === "") {
            this.homeActive = true;
            this.aboutActive = false;
            this.menuActive = false;
        }
        else if(currentPath === "about") {
            this.aboutActive = true;
            this.menuActive = false;
            this.homeActive = false;
        }
        else if(currentPath === "menu") {
            this.menuActive = true;
            this.aboutActive = false;
            this.homeActive = false;
        }
        else {
            this.homeActive = false;
            this.menuActive = false;
            this.aboutActive = false;
        }
    }
}
</script>

<style scoped>
.universal {
    margin: 0;
    padding: 0;
    font-family: "Oxygen";
    width: 100%;
    height: 100%;
}

.navbar {
    background: #f6b319;
    color: #c61e24;
}

.nav-item {
    float: left;
    display: inline;
    margin-left: 10px;
    padding: 5px;
}

.nav-link {
    text-decoration: none;
    color: #c61e24;
}

.content {
    background: #c61e24;
    color: white;
}

.footer {
    width: 100%;
    padding-top: 30px;
    background: #363636;
    color:white;
}

.buisness-title {
    font-family: "Lora";
    color: #557c3e;
}

.router-link-active{
  background:#c61e24;
  color: white;
}

.dropdown-menu {
    background: #c61e24;
    color: #f6b319;
}

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
 }

 .dropdown-links-own {
     text-decoration: none;
     color: #f6b319;
 }
</style>