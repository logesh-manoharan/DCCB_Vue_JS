<template>
    <div class="universe">

        <b-navbar toggleable>
            <b-navbar-brand>
                <router-link to="/">
                    <img src="../assets/images/restaurant-logo_medium.png" style="display: inline">
                </router-link>
            </b-navbar-brand>

            <b-navbar class="mr-auto">
                <b-nav-item>
                    <h2 class="buisness-title" style="display:inline;">   David Chu's China Bistro</h2>
                    <br>
                    <p style="display:inline;" class="buisness-title">
                        <img src="../assets/images/star-k-logo.png" style="height: 20px; width: 20px;"> 
                        We deliver
                    </p>
                </b-nav-item>
            </b-navbar>
            
           
            <b-navbar class="ml-auto">
                <b-nav-item>
                    <font-awesome-icon :icon="['fas', 'info']"></font-awesome-icon>
                    <router-link class="router_link" to="/about" > About</router-link>
                </b-nav-item>
                <b-nav-item-dropdown text="Menus">
                    <b-dropdown-item><router-link class="router_link" to="/menu" > Menu</router-link></b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item><router-link class="router_link" to="/menu/breakfast" > Breakfast</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link class="router_link" to="/menu/lunch" > Lunch</router-link></b-dropdown-item>
                    <b-dropdown-item><router-link class="router_link" to="/menu/dinner" > Dinner</router-link></b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar>
            <!-- <b-navbar-toggle target="navbar_toggle" class="ml-auto fixed-top">
                <template #default="{ expanded }">
                    <b-btn variant="outline">
                        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                        <b-icon v-else icon="chevron-bar-down"></b-icon>
                    </b-btn>
                </template>b-icon>
            </b-navbar-toggle>

            <b-collapse v-if="mobile" id="navbar_toggle" is-nav>
                <b-navbar-nav class="mr-auto">
                    <b-nav-item>Home</b-nav-item>
                    <b-nav-item>About</b-nav-item>
                    <b-nav-item>Menu</b-nav-item>
                </b-navbar-nav>
            </b-collapse> -->
        </b-navbar>
        
    </div>
</template>


<script>
export default {
    name: "NavigationComponent"
}
</script>

<style scoped>
.universe {
    background: #f6b319;
    color: #c61e24;
}

.nav-item {
    list-style: none;
    margin-left: 30px;
}

.nav-dropdown-item {
    list-style: none;
    margin-left: 30px;
}

.nav-link {
    color: #c61e24;
}

.navbar-toggler-icon {
    color: #c61e24
}

.router_link {
    text-decoration: none;
    color: #c61e24;
}

.router-link-active{
  background:#c61e24;
  color: white;
}

.buisness-title {
    font-family: "Lora";
    color: #557c3e;
}

.nav-item-dropdown {
    background: #f6b319;
}

</style>