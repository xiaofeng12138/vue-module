<template>
    
    <div>
        <div class="button-ui button-ui-main button-ui-block button-ui-radius button-ui-large">
             <span>重置密码</span>
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