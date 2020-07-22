<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle"/>
            </el-col>
            <el-col :span="24">
                <container :nav="recomment"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
    data(){
        return {
            iStyle:{
                class:'istyle',
                title:'推荐民宿',
                list:[
                    {
                        text:'全部',
                        tab:'all'
                    },
                    {
                        text:'美食',
                        tab:'food'
                    },
                    {
                        text:'电影',
                        tab:'movie'
                    },
                    {
                        text:'休闲',
                        tab:'spa'
                    },
                    {
                        text:'旅游',
                        tab:'travel'
                    }
                ],
            },
            recomment:{
                class:'youhui',
                title:'很优惠',
                list:[
                    {
                        text:'全部',
                        tab:'all'
                    },
                    {
                        text:'美食',
                        tab:'food'
                    },
                    {
                        text:'电影',
                        tab:'movie'
                    },
                    {
                        text:'休闲',
                        tab:'spa'
                    },
                    {
                        text:'旅游',
                        tab:'travel'
                    }
                ],
            }
        }
    },
    components:{
        MMenu,
        MLife,
        Container
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/index.scss'
</style>