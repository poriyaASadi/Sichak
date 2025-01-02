<template>
    <div class="w-full relative font-IRANYekanMedium flex bg-background">
        <HeaderDefult :value="sidebarValue"></HeaderDefult>
        <div class="w-full laptop:pr-[300px]">
            <HeaderTop @update-value="handleValueUpadate"/>
            <main>
                 <MainPageUser v-if="!showTrade" @changeTrader="changePageTrader"></MainPageUser> 
                 <MainPageTrader v-else @changeUser="changePageTrader"></MainPageTrader>
                <Footer/>
            </main>
        </div>
    </div>
</template>
<script setup>
import {ref } from 'vue'
import  {useRoute} from 'vue-router'
import HeaderDefult from '../components/HeaderDefult.vue'
import HeaderTop from '../components/HeaderTop.vue'
import MainPageUser from '../components/MainPageUser.vue'
import MainPageTrader from '../components/MainPageTrader.vue'
import Footer from '../components/Footer.vue'
const sidebarValue = ref(false);
const handleValueUpadate = (value) => {
    sidebarValue.value = value     
};
const showTrade = ref(false)
const changePageTrader = (value) => {
    showTrade.value = value
}
</script>
<style>
#liner_bg {
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(234,239,251,1) 100%);
}
</style>

