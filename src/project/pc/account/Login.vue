<template>
    <div class='wrap-layout'>
        <div class='layout-left'></div>
        <div class='layout-right'>
           <Username :labelShow= true />
           <Password :labelShow= true />
           <Button />
        </div>

    </div>
    
</template>

<script>
import PageTitle from '@c/account/components/PageTitle'
import UsernameType from '@c/account/components/UsernameType'
import Username from '@c/account/components/Username'
import Code from '@c/account/components/Code'
import Password from '@c/account/components/Password'
import Button from '@c/account/components/Button'
export default {
    components:{PageTitle,UsernameType,Username,Code,Password,Button},

}
</script>

<style lang="scss" scoped>
    
</style>