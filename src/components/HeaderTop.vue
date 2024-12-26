<template>
    <nav class="h-24 bg-white border-b-2 border-slate-100">
        <div class="w-full h-full px-[24px] flex items-center justify-between">
            <div class="mobile:hidden">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div  class="flex items-center gap-x-5">
                <div @click="modal" class="bg-background h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7H21C21.2652 7 21.5196 6.89464 21.7071 6.70711C21.8946 6.51957 22 6.26522 22 6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6C2 6.26522 2.10536 6.51957 2.29289 6.70711C2.48043 6.89464 2.73478 7 3 7ZM21 17H3C2.73478 17 2.48043 17.1054 2.29289 17.2929C2.10536 17.4804 2 17.7348 2 18C2 18.2652 2.10536 18.5196 2.29289 18.7071C2.48043 18.8946 2.73478 19 3 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17ZM21 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14C2 14.2652 2.10536 14.5196 2.29289 14.7071C2.48043 14.8946 2.73478 15 3 15H21C21.2652 15 21.5196 14.8946 21.7071 14.7071C21.8946 14.5196 22 14.2652 22 14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM21 9H3C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10C22 9.73478 21.8946 9.48043 21.7071 9.29289C21.5196 9.10536 21.2652 9 21 9Z" fill="#2F61D5"/>
                        </svg>                                
                </div>
                <div>
                    <div class=" hidden tablet:flex bg-background px-2  items-center flex-row-reverse gap-x-2 rounded-sm">
                        <input type="text" placeholder="جستجو" class="bg-transparent w-[21rem] border-none outline-none h-[40px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#2F61D5"/>
                            <path d="M21.9995 22.7504C21.8095 22.7504 21.6195 22.6804 21.4695 22.5304L19.4695 20.5304C19.1795 20.2404 19.1795 19.7604 19.4695 19.4704C19.7595 19.1804 20.2395 19.1804 20.5295 19.4704L22.5295 21.4704C22.8195 21.7604 22.8195 22.2404 22.5295 22.5304C22.3795 22.6804 22.1895 22.7504 21.9995 22.7504Z" fill="#2F61D5"/>
                            </svg>                                    
                    </div>
                </div>
            </div>
            <div  class="hidden mobile:inline">
                <ul class="flex items-center gap-x-5 minidesktop:gap-x-7 child:cursor-pointer">
                    <li>
                        <router-link to="/post" class="text-text_small">پست ها</router-link>
                    </li>
                    <li>
                        <div class="text-slate-500">
                            سیگنال ها
                        </div>
                    </li>
                    <li>
                        <div class="text-slate-500">
                            تحلیل ها
                        </div>
                    </li>
                    <li>
                        <div class="text-slate-500">
                            نماد ها
                        </div>
                    </li>
                    <li>
                        <div class="text-slate-500">
                            امکانات
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>

</script>