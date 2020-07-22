<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.image" alt="图片" />
    </dt>
    <dd>
      <h3>
        <router-link :to="{name:'productDetail'}">{{meta.title}}</router-link>
      </h3>
      <p>
        <el-rate v-model="meta.score" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
        <span v-if="meta.score > 4.5">很好</span>
        <span v-else-if="meta.score > 4">好</span>
        <span v-else-if="meta.score > 3.5">不错</span>
        <span v-else-if="meta.score > 3">一般</span>
        <span v-else>差</span>
        <span class="">{{meta.score}}分</span>
        <span class="s-item-comment-total">{{meta.commetNum}}人评论</span>
      </p>
      <p>
          <span>{{meta.address}}</span>
      </p>
      <p>
          <span>人均￥</span> 
          <span class="s-item-price">{{meta.price}}</span>
      </p>
    </dd>
  </dl>
</template>
<script>
export default {
    props:["meta"]
}
</script>