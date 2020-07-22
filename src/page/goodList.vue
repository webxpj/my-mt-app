<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <m-list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <m-favourite />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import MList from '@/components/products/list.vue'
import MFavourite from '@/components/products/favourite.vue'
export default {
    components:{
        crumbs,
        Categroy,
        MList,
        MFavourite
    }
}
</script>
