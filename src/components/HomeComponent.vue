<template>
    <div class="universe">
        <div class="container">
            <div class="row row-header">
                <div class="jumbotron">
                    <img  style="width: 100%" src="../assets/images/jumbotron_1200.jpg">
                </div>
            </div>

            <div class="row row-content">
                <div class="col-12 col-lg-4">
                    <div class="card">
                        <img class="card-img-top" src="../assets//images/menu-tile.jpg">
        
                        <a type="button" class="btn bg-transparent" >
                            <router-link class="router-link" to="/menu">MENU</router-link>
                        </a>
                    </div>
                </div>

                <div class="col-12 col-lg-4">
                    <div class="card">
                        <img class="card-img-top" src="../assets/images/specials-tile.jpg">
                        <a type="button" class="btn bg-transparent" style="color: white;">
                            SPECIAL
                        </a>
                    </div>
                </div>
                <!--Map-->
                <div class="col-12 col-lg-4">
                    <div class="card">
                        <img class="card-img-top" src="../assets/images/map-tile.jpeg">
                        <a type="button" class="btn bg-transparent" style="color: white;">
                            MAP
                        </a>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeComponent"
}
</script>

<style scoped>
.universe {
    width: 100%;
    margin: 0;
    padding: 10px;
}

.jumbotron {
    background: #c61e24;
    width: 100%;
    margin-top: 5px;
    position: inherit;
}

.jumbotron:hover {
    background: #f6b319;
    transition: 500ms;
}

.card {
    margin: 10px;
    padding: 5px;
    background: #c61e24;
}

.card:hover {
    background: #f6b319;
    transition: 500ms;
}

.router-link {
    text-decoration: none;
    color: white;
}
</style>