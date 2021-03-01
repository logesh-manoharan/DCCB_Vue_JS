<template>
    <div class="universe">
        <div class="container">
            <header class="jumbotron"></header>
            <div class="row row-header">
                <div class="col-12 col-lg-12">
                    <h2>About</h2>
                </div>
            </div>
            <div class="row row-content">
                <div class="col-12 col-lg-4" style="border: 1px solid #f6b319;">
                    <h4>Classy Chinese Restaurant</h4><br>
                    <p>This restaurant is a Kosher certified Chinese restaurant, with its 
                        traditional decorations, and Chinese style environment. For information on 
                        their menu, click here. Located in Baltimore, 17 miles from exit I-95 S Exit 64 .</p>
                    <h5>Inner beauty</h5>
                    <img style="width: 100%" src="../assets/images/jumbotron_1200.jpg">
                </div>
                <div class="col-12 col-lg-8" style="border: 1px solid #f6b319;">
                    <h4>For more details: </h4>
                    <iframe style="width:100%; height:80%;" src="https://kosherwithoutborders.com/listings/david-chus-china-bistro/#:~:text=Classy%20Chinese%20restaurant.&text=This%20restaurant%20is%20a%20Kosher,I%2D95%20S%20Exit%2064%20." frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutComponent"
}
</script>

<style scoped>
.universe {
    margin: 0;
    padding: 10px;
    width: 100%;
    background: #c61e24;
    color: #f6b319;
}

.row-header {
    border-bottom: 2px solid #f6b319;
}

.row-content {
    min-height: 500px;
    margin-top: 10px;
}
</style>