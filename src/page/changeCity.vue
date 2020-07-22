<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot title="热门城市:" :list="hotList"/>
        </el-row>
        <el-row>
            <hot title="最近访问:" :list="lastList"/>
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
    
</template>
<script>
import api from '@/components/api/index.js'
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Categroy from '@/components/changeCity/categroy.vue'
export default {
    data(){
        return {
            hotList:[],
            lastList:[]
        }
    },
    components:{
        Province,
        Hot,
        Categroy
    },
    mounted(){
        api.getHotCity().then(res=>{
            this.hotList = res.data.data.map(item => {
                return item.name
            })
        }),
        api.getRecentCity().then(res=>{
            this.lastList = res.data.data.map(item => {
                return item.name
            })
        })
    }
}
</script>