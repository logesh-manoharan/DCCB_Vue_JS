<template>
    <div class="universal">
        <ul class="list">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/menu">Menu</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavigationMobile"
}
</script>

<style scoped>
.list {
    background: #f6b319;
}

ul {
    list-style: none;
}

li {
    padding: 5px;
    margin-top: 5px;
    color: #c61e24;
}
</style>