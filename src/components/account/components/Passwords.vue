<template>
    
    <div class="form-item" :style="innerStyle">
        <div class="form-body " :class="{'active':active}">
            <div class="pr">
                <van-field :type='form_type' @focus="active = true" @blur="active = false" v-model="value" placeholder="请输入验证码"/>
                <div class="filed-right-inner">
                    <i class="icon-size-27"  @click="toggleView">
                        <svg-icon :iconName="form_type === 'password'? 'eyeOff':'eye'" className ='icon-size-27 svg-password'/>
                    </i>
                </div>
             </div>
        </div>
       
    </div>
</template>

<script>

export default {
    props:{
        innerStyle:{
            type:Object,
            default:()=>{}
        }
    },
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