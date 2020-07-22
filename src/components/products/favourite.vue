<template>
    <dl class="m-products-favourite">
        <dt>猜你喜欢</dt>
        <dd v-for="(item,index) in list" :key="index">
            <img :src="item.image" alt="图片">
            <p>{{item.title}}</p>
            <p class="light">{{item.address}}</p>
            <p class="bold">￥ 
                <span>
                    {{item.price}}
                </span> </p>
        </dd>
    </dl>
</template>
<script>
export default {
    data(){
        return {
            list:[
                {
                    image:"https://p1.meituan.net//bbia/f58fafc0be2bc3a69dfcac20260888c2201000.jpg@188w_106h_1e_1c",
                    title:"晓寿司（望京soho店）",
                    address:"望京",
                    price:"98"
                },
                {
                    image:"https://img.meituan.net//msmerchant/4a953fe54ad2c3cef9547fc41ba8df9193526.jpg@188w_106h_1e_1c",
                    title:"分米鸡DM Chicken（喜隆多店）",
                    address:"苹果园",
                    price:"178"
                },
                {
                    image:"https://p0.meituan.net//joymerchant/6dcda5278bfc58a5223419cff0a5270d-12565256.jpg@188w_106h_1e_1c",
                    title:"vfly蹦床公园（斯普瑞斯奥特莱斯店）",
                    address:"北京西站/军博",
                    price:"152"
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/favourite.scss'
</style>