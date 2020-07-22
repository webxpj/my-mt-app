<template>
  <div class="m-product-categroy">
      <dl class="classic">
          <dt>分类</dt>
          <dt>全部</dt>
          <dd v-for="item in classicList" :key="item.type">
              <m-select :name="item.title" :list="item.subList" />
          </dd>
      </dl>
      <dl class="classic">
          <dt>区域</dt>
          <dt>全部</dt>
          <dd v-for="(item,index) in areaList" :key="index">
              <m-select :name="item.title" :list="item.subList" />
          </dd>
      </dl>
  </div>
</template>
<script>
import MSelect from './select.vue'
import api from '@/components/api/index.js'
export default {
    data(){
        return {
            classicList: [],
            areaList: []
        };
        
    },
    components:{
        MSelect
    },
    mounted(){
        api.getClassifyList().then(res=>{
            this.classicList = res.data.data
        }),
        api.getAreaList().then(res=>{
            console.log(res.data,typeof res.data)
            //此处给的数据是非JSON格式的字符串，不好处理
        })
    }
}
</script>