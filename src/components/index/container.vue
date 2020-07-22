<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active:kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <p class="title" :title="item.title">{{ item.title }}</p>
            <p class="sub-title">
              <span v-for="(v,i) in item.sub_title" :key="i + '_' + index">{{v}}</span>
            </p>
            <p class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/components/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultsData:{}
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  },
  mounted(){
    api.getResultProducts().then(res=>{
      console.log(res.data.data)
      this.resultsData = res.data.data
    })
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>