<template>
    
    <div class="form-item">
        <div class="form-body " :class="{'active':active}">
            <div class="pr">
                <van-field @focus="active = true" @blur="active = false" v-model="value" placeholder="请输入验证码"/>
                <div class="code-button color-main">
                    获取验证码
                </div>
             </div>
        </div>
       
    </div>
</template>

<script>

export default {
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
   .code-button{
       position: absolute;
       right: 0;
       top: 0;
       .code-button{
           padding: 0;
           border:none;
           background:none;
           line-height: 24px;
       }
   }
</style>