<template>
    <div class="universe">
        <header class="jumbotron"></header>

        <ul class="breadcrumb bg-transparent">
            <li class="breadcrumb-item"><a href="#"><router-link to="/menu">Menu</router-link></a> /</li>
            <li class="breadcrum-item active">Lunch</li>
        </ul>
        <div class="container">
            <div class="row row-header text-center" style="color: #f6b319; border: 1px solid #f6b319; border-radius: 5px; padding: 10px;">
                <div class="col-12 col-lg-12">
                    <h4>Lunch menu Categories</h4>
                    <p>Lunch should not be served till 1:00 PM</p>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">BIRIYANI</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>Chicken, Vegetable, Mutton Biriyanies are available with salna and raita</h6>
                        </div>
                    </div>
                </div>  

                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-2.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">PAROTTA</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6> Oil, Ordinary, Veechu, Kothu parottas are availbale with salna and raita </h6>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">MEALS</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>includes 3 varieties of veg, 1 cup sambar, 1 cup rasam, 1 cup curd</h6>
                        </div>
                    </div>
                </div>  

                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-2.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">FRIED RICE</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>Chicken, Veg, Egg rices are available with tomato chaas </h6>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">NOODLES</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>Chicken, Veg, Egg rices are available with tomato chaas </h6>
                        </div>
                    </div>
                </div>  

                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-2.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">SIDE DISH</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>All chicken varities, Fish Finger, Egg varities are available </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">Drinks</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>All varities of cool drinks and Ice creams, milk shakes and fallodas are available</h6>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LunchComponent"
}
</script>

<style scoped>
.universe {
    margin: 0;
    padding: 0;
    font-family: "Oxygen";
    width: 100%;
    height: 100%;
}

.card {
    margin: 10px;
    padding: 5px;
    background: #c61e24;
}

.card:hover {
    background: #f6b319;
    transition: 1s;
}

.buisness-title {
    font-family: "Lora";
    color: #557c3e;
}

.row {
    margin-top: 10px;
}

.dishes {
    border: 1px solid #f6b319;
    border-radius: 5px;
}
.dishes:hover {
    background: #f6b319;
    transition: 1s;
}
</style>