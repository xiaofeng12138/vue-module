<template>
    
    <div class="form-item">
        <div class="form-body " :class="{'active':active}">
            <div class="pr">
                <van-field :type='form_type' @focus="active = true" @blur="active = false" v-model="value" placeholder="请输入验证码"/>
                <div class="filed-right-inner">
                    <i class="icon icon-size-27" :class="form_type === 'password'? 'icon-eye-off':'icon-eye-on'" @click="toggleView"></i>
                </div>
             </div>
        </div>
       
    </div>
</template>

<script>

export default {
   data(){
       return {
           value:"11111",
           active:false,
           form_type:'password'
       }
   },
   methods:{
       toggleView(){
          this.form_type = this.form_type == 'password'?'text':'password'
       }
   }
}
</script>
<style lang='scss' scoped>
   .filed-right-inner{
       position: absolute;
       right: 0;
       top: 0;
       
   }
</style>