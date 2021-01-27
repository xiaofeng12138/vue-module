<template>
    
    <div class="form-item">
        <label v-if='labelShow' style='color:#fff'>{{labelText}}</label>
        <div class="form-body " :class="{'active':active}">
             <van-field @focus="active = true" @blur="active = false" v-model="value" placeholder="请输入用户名"/>
        </div>
       
    </div>
</template>

<script>

export default {
   props:{
       labelShow:{
           type:Boolean,
           default:false
       },
       labelText:{
           type:String,
           default:'请输入用户名'
       }
   },
   data(){
       return {
           value:"",
           active:false
       }
   }
}
</script>
<style lang='scss' scoped>
   .form-item{
       margin-top:10px;
   }
</style>