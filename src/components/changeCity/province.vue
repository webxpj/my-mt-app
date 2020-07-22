<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="provinceChangeActive"
      @change="changeProvince"
      className = 'province'
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="cityChangeActive"
      @change="changeCity"
      :disabled = "cityDisabled"
      className = 'city'
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import api from '@/components/api/index.js'
export default {
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList:["南京", "常州", "无锡", "苏州", "扬州"],
      searchWord:'',
      loading:false,
      cityDisabled: true
    };
  },
  components: {
    MSelect
  },
  methods: {
    provinceChangeActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    cityChangeActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(val){
        console.log(val)
    },
    changeProvince(item){
        this.cityDisabled = false;
        this.cityList = item.cityInfoList;
        this.province = item.name;
    },
    changeCity(item){
        this.city = item.name;
        this.$store.dispatch('setPosition',item)
        this.$router.push({name:'index'})
    }
  },
  mounted(){
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      })
    })
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>