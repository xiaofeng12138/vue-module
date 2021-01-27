<template>
    <div class="usernametype">
        <li class="color-c active" >
             <svg-icon iconName ='phone' className ='icon-size-18  mb--3 svg-white'/>
            手机
        </li>
        <li class="color-c">
             <svg-icon iconName ='email' className ='icon-size-18  mb--3 svg-white'/>
            邮箱
        </li>
    </div>
</template>

<script>

export default {

}
</script>
<style lang='scss' scoped>
    .usernametype{
        text-align: right;
        margin-bottom: 10px;
        li{
            height: 30px;
            padding: 0 10px;
            display: inline-block;
            margin-left: 15px;
            border-radius: 100px;
            line-height: 30px;
            font-size: 16px;
            color: #ccc;
            background-color: #fff;
            &.active{
               background-color: $color-main;
               color:#fff;
            }
        }
    }
</style>