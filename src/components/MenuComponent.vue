<template>
    <div class="universe">
        <div class="container">
            <header class="jumbotron"></header>
            <div class="row row-header text-center" style="color: #f6b319; border: 1px solid #f6b319; border-radius: 5px; padding: 10px;">
                <div class="col-12 col-lg-12">
                    <h4>Menu Categories</h4>
                    <p>Substituting white rice with brwon rice or fried rice after 3:00pm will be $1.50 for a print and $2.50 for a quart</p>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-6 col-lg-4">
                    <div class="card">
                        <img class="card-image-top" src="../assets/images/lunch-1.jpeg">
                        <a class="btn bg-transparent text-light" type="button">
                            <router-link class="router-link" to="/menu:breakfast">BREAKFAST</router-link>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="card">
                        <img class="card-image-top" src="../assets/images/lunch-2.jpeg">
                        <a class="btn bg-transparent text-light" type="button">
                            <router-link class="router-link" to="/menu:lunch">LUNCH</router-link>
                        </a>
                    </div>
                </div>
                <div class="col-6 col-lg-4">
                    <div class="card">
                        <img class="card-image-top" src="../assets/images/lunch-3.jpeg">
                        <a class="btn bg-transparent text-light" type="button">
                            <router-link class="router-link" to="/menu:dinner">DINNER</router-link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>


<style scoped>
    .universe {
        margin: 0;
        padding: 10px;
        width: 100%;
        background: #c61e24;
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