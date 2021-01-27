<template>
    <div>
        <Navbar />
        <PageTitle />
        <UsernameType />
        <Username />
        <Password />
        <Button />
    </div>
</template>

<script>
import Navbar from '@c/comm/Navbar.vue'
import PageTitle from './components/PageTitle'
import UsernameType from './components/UsernameType'
import Username from './components/Username'
import Code from './components/Code'
import Password from './components/Password'
import Passwords from './components/Passwords'
import Button from './components/Button'
export default {
    components:{Navbar,PageTitle,UsernameType,Username,Code,Password,Passwords,Button},
}
</script>

<style lang='scss'>

</style>

