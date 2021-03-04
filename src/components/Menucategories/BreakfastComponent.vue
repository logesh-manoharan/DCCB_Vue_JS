<template>
    <div class="universe">
        <ul class="breadcrumb bg-transparent">
            <li class="breadcrumb-item"><a href="#"><router-link to="/menu">Menu</router-link></a> /</li>
            <li class="breadcrum-item active">Breakfast</li>
        </ul>
        <div class="container">
            <div class="row row-header text-center" style="color: #f6b319; border: 1px solid #f6b319; border-radius: 5px; padding: 10px;">
                <div class="col-12 col-lg-12">
                    <h4>Breakfast menu Categories</h4>
                    <p>Breakfast should not be served till 7:00 AM</p>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">IDLI</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>with unlimited sambar, coconut chutney, tomato chuttney, one vada(for 4 idlies)</h6>
                        </div>
                    </div>
                </div>  

                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-2.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">DOSA</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>onion, egg, ghee roast, podi, rava, nan varities are available</h6>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">POORI</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>with potato kuruma and one vada(for 4 poories)</h6>
                        </div>
                    </div>
                </div>  

                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-2.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">PONGAL</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>With unlimited sambar, coconut chuttney with one vada</h6>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row row-content">
                <div class="col-12 col-lg-6 dishes">
                    <div class="row">
                        <div class="col-5 col-lg-5" style="text-align: center;">
                            <img src="../../assets/images/lunch-1.jpeg" style="width: 100%;">
                            <a class="btn bg-transparent text-light" type="button">Vada</a>
                        </div>
    
                        <div class="col-7 col-lg-7 mt-5" style="text-align: center;">
                            <h6>Dhal, Onion varities and bajji(banana)</h6>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BreakfastComponent"
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