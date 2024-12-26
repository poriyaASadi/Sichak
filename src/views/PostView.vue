<template>
    <div class="w-full relative font-IRANYekanMedium flex bg-background">
        <HeaderDefult :show="elm" class="absolute -top-[100vh] right-0 laptop:top-0 laptop:relative"></HeaderDefult>
        <div class="w-full">
            <HeaderTop/>
        </div>
    </div>
</template>
<script setup>
import HeaderDefult from '../components/HeaderDefult.vue'
import HeaderTop from '../components/HeaderTop.vue'
</script>