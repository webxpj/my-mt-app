<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<style lang="scss">
    @import '@/assets/css/products/index.scss'
</style>