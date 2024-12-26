<template>
    <div ref="modal" class='w-[300px] fixed  transition-all delay-200  px-1 font-IRANYekanMedium overflow-y-auto  h-[100vh] bg-white border-2 border-r-0 border-t-0 border-slate-100 flex flex-col justify-between pb-2'>
        <div>
            <div class="h-24 flex items-center justify-center border-b-2 border-slate-100">
                <img src="../assets/images/logo_header.png" alt="logo_sichak">
            </div>

            <div class="p-2">
                <div class="border-2 border-primry w-[82px] h-[82px] rounded-full flex items-center justify-center mx-auto">
                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0722 14.2796C19.1489 13.4325 19.9348 12.2709 20.3205 10.9564C20.7063 9.64183 20.6727 8.23974 20.2245 6.94517C19.7763 5.6506 18.9357 4.52792 17.8197 3.73332C16.7037 2.93872 15.3678 2.51172 13.9978 2.51172C12.6279 2.51172 11.292 2.93872 10.176 3.73332C9.05998 4.52792 8.2194 5.6506 7.77119 6.94517C7.32297 8.23974 7.2894 9.64183 7.67515 10.9564C8.06089 12.2709 8.84677 13.4325 9.92345 14.2796C8.07854 15.0188 6.46879 16.2447 5.26581 17.8268C4.06283 19.4088 3.31172 21.2877 3.09256 23.263C3.0767 23.4072 3.0894 23.5532 3.12993 23.6925C3.17046 23.8318 3.23804 23.9618 3.3288 24.075C3.5121 24.3036 3.77871 24.45 4.06997 24.482C4.36124 24.5141 4.6533 24.4291 4.88191 24.2458C5.11052 24.0625 5.25695 23.7959 5.28899 23.5046C5.53014 21.3578 6.55379 19.3751 8.16436 17.9354C9.77492 16.4956 11.8595 15.6997 14.0198 15.6997C16.1801 15.6997 18.2647 16.4956 19.8752 17.9354C21.4858 19.3751 22.5094 21.3578 22.7506 23.5046C22.7805 23.7745 22.9092 24.0237 23.112 24.2042C23.3148 24.3847 23.5773 24.4837 23.8488 24.482H23.9696C24.2575 24.4489 24.5206 24.3034 24.7016 24.0771C24.8827 23.8508 24.9669 23.5621 24.936 23.274C24.7158 21.293 23.9607 19.4094 22.7515 17.8249C21.5424 16.2404 19.9248 15.0149 18.0722 14.2796ZM13.9978 13.4999C13.129 13.4999 12.2797 13.2423 11.5573 12.7596C10.8349 12.2769 10.2718 11.5908 9.93936 10.7881C9.60687 9.98542 9.51988 9.10217 9.68938 8.25004C9.85888 7.3979 10.2773 6.61517 10.8916 6.00082C11.506 5.38647 12.2887 4.96809 13.1408 4.79859C13.993 4.62909 14.8762 4.71608 15.6789 5.04857C16.4816 5.38105 17.1677 5.9441 17.6504 6.6665C18.133 7.3889 18.3907 8.23821 18.3907 9.10704C18.3907 10.2721 17.9279 11.3894 17.104 12.2133C16.2802 13.0371 15.1629 13.4999 13.9978 13.4999Z" fill="#2F61D5"/>
                        </svg>                    
                </div>
                <div>
                    <div class="flex items-center flex-row-reverse justify-center gap-x-2 mt-3">
                        <router-link to="/login" class="text-primry flex items-center flex-row-reverse w-[112px] justify-center py-[.2rem] border-2 border-primry rounded-md text-center">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
                                <path d="M20 12.5C20 12.2348 19.8946 11.9804 19.7071 11.7929C19.5196 11.6054 19.2652 11.5 19 11.5H11.41L13.71 9.21C13.8032 9.11676 13.8772 9.00607 13.9277 8.88425C13.9781 8.76243 14.0041 8.63186 14.0041 8.5C14.0041 8.36814 13.9781 8.23757 13.9277 8.11575C13.8772 7.99393 13.8032 7.88324 13.71 7.79C13.6168 7.69676 13.5061 7.6228 13.3842 7.57234C13.2624 7.52188 13.1319 7.49591 13 7.49591C12.8681 7.49591 12.7376 7.52188 12.6158 7.57234C12.4939 7.6228 12.3832 7.69676 12.29 7.79L8.29 11.79C8.19896 11.8851 8.12759 11.9972 8.08 12.12C7.97998 12.3635 7.97998 12.6365 8.08 12.88C8.12759 13.0028 8.19896 13.1149 8.29 13.21L12.29 17.21C12.383 17.3037 12.4936 17.3781 12.6154 17.4289C12.7373 17.4797 12.868 17.5058 13 17.5058C13.132 17.5058 13.2627 17.4797 13.3846 17.4289C13.5064 17.3781 13.617 17.3037 13.71 17.21C13.8037 17.117 13.8781 17.0064 13.9289 16.8846C13.9797 16.7627 14.0058 16.632 14.0058 16.5C14.0058 16.368 13.9797 16.2373 13.9289 16.1154C13.8781 15.9936 13.8037 15.883 13.71 15.79L11.41 13.5H19C19.2652 13.5 19.5196 13.3946 19.7071 13.2071C19.8946 13.0196 20 12.7652 20 12.5ZM17 2.5H7C6.20435 2.5 5.44129 2.81607 4.87868 3.37868C4.31607 3.94129 4 4.70435 4 5.5V19.5C4 20.2956 4.31607 21.0587 4.87868 21.6213C5.44129 22.1839 6.20435 22.5 7 22.5H17C17.7956 22.5 18.5587 22.1839 19.1213 21.6213C19.6839 21.0587 20 20.2956 20 19.5V16.5C20 16.2348 19.8946 15.9804 19.7071 15.7929C19.5196 15.6054 19.2652 15.5 19 15.5C18.7348 15.5 18.4804 15.6054 18.2929 15.7929C18.1054 15.9804 18 16.2348 18 16.5V19.5C18 19.7652 17.8946 20.0196 17.7071 20.2071C17.5196 20.3946 17.2652 20.5 17 20.5H7C6.73478 20.5 6.48043 20.3946 6.29289 20.2071C6.10536 20.0196 6 19.7652 6 19.5V5.5C6 5.23478 6.10536 4.98043 6.29289 4.79289C6.48043 4.60536 6.73478 4.5 7 4.5H17C17.2652 4.5 17.5196 4.60536 17.7071 4.79289C17.8946 4.98043 18 5.23478 18 5.5V8.5C18 8.76522 18.1054 9.01957 18.2929 9.20711C18.4804 9.39464 18.7348 9.5 19 9.5C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5V5.5C20 4.70435 19.6839 3.94129 19.1213 3.37868C18.5587 2.81607 17.7956 2.5 17 2.5Z" fill="#2F61D5"/>
                                </svg>                                
                            ورود
                        </router-link>
                        <router-link to="/login" class="text-white flex items-center flex-row-reverse w-[112px] justify-center py-[.3rem]  bg-primry  rounded-md text-center">                     
                            ثبت نام
                        </router-link>
                    </div>
                    <div></div>
                </div>
            </div>
            
            <!-- <div class="flex items-center justify-center flex-col h-44 border-b-2 border-slate-100">
                <img src="../assets/images/Rectangle 119.png" alt="User-Profile" class="rounded-full w-20 h-20 object-cover">
                <h6 class="text-primary_font font-[500] text-xl mb-1">محمد سعیدی</h6>
                <span class="text-slate-500 font-bold tracking-tight">تحلیل گر</span>
            </div> -->


            <div class="flex items-center justify-center py-3">
                <!-- input search  -->
                 <div class="flex items-center flex-row-reverse  gap-x-2 px-2 bg-[#EAEFFB] w-[230px] rounded-sm">
                    <input type="text" name="search" id="" placeholder="انتخاب تحلیل گر" class="tracking-tight border-none outline-none placeholder:text-primary_font font-[500]  bg-transparent h-[56px] w-full text-right  placeholder:text-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  class="w-7 h-7">
                        <path d="M16.927 17.0396L20.4001 20.3996M19.2801 11.4396C19.2801 15.7695 15.77 19.2796 11.4401 19.2796C7.11019 19.2796 3.6001 15.7695 3.6001 11.4396C3.6001 7.1097 7.11019 3.59961 11.4401 3.59961C15.77 3.59961 19.2801 7.1097 19.2801 11.4396Z" stroke="#2F61D5" stroke-width="2" stroke-linecap="round"/>
                        </svg>                    
                 </div>
            </div>
            <div  class=" mt-5 px-3 overflow-hidden overflow-y-auto">
                <!-- show top analysts -->
                 <h6 class="text-slate-500 tracking-tight">تحلیل گران برتر</h6>
                 <ul class="mt-5">
                    <li class="py-2">
                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <div class="w-10 h-10">
                                <img src="../assets/images/Rectangle 119.png" class="w-full h-full object-cover rounded-full" alt="Analysts-Profile">
                            </div>
                            <div>
                                <h5 class="text-primary_font ">پوریا اسعدی نژاد</h5>
                            </div>
                        </div>
                    </li>
                    <li class="py-2">
                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <div class="w-10 h-10">
                                <img src="../assets/images/Rectangle 119.png" class="w-full h-full object-cover rounded-full" alt="Analysts-Profile">
                            </div>
                            <div class="flex items-center justify-between gap-x-5">
                                <h5 class="text-primary_font ">پوریا اسعدی نژاد</h5>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5086 3.83008L8.45815 9.1427L11.9999 20.1699M11.9999 20.1699L15.6349 9.0495L13.6776 3.83008M11.9999 20.1699L2.3999 9.2359M11.9999 20.1699L21.5999 9.2359M2.3999 9.2359L6.50087 3.83008H17.5921L21.5999 9.2359M2.3999 9.2359H21.5999" stroke="#2F61D5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                    
                            </div>
                        </div>
                    </li>
                 </ul>
            </div>
            <!-- mentoring -->
             <div class="px-3 mt-3 overflow-hidden overflow-y-auto">
                <h6 class="text-slate-500 my-3 tracking-tight">منتورینگ</h6>
                <!-- <span class="inline-block text-primary_font mx-auto  bg-slate-100 tracking-tight p-2 rounded-md border-2 border-slate-300">برای دریافت منتور ثبت نام کنید</span> -->
                <ul class="mt-5">
                    <li class="py-2">
                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <div class="w-10 h-10">
                                <img src="../assets/images/Rectangle 119.png" class="w-full h-full object-cover rounded-full" alt="Analysts-Profile">
                            </div>
                            <div>
                                <h5 class="text-primary_font ">پوریا اسعدی نژاد</h5>
                            </div>
                        </div>
                    </li>
                    <li class="py-2">
                        <div class="flex items-center gap-x-2 cursor-pointer">
                            <div class="w-10 h-10">
                                <img src="../assets/images/Rectangle 119.png" class="w-full h-full object-cover rounded-full" alt="Analysts-Profile">
                            </div>
                            <div class="flex items-center justify-between gap-x-5">
                                <h5 class="text-primary_font ">محمد امین سعیدی راد</h5>                                 
                            </div>
                        </div>
                    </li>
                 </ul>
             </div>
        </div>
        <div class="flex items-center justify-center bottom-0">
            <div class="flex items-center gap-x-1 w-[230px] py-2 justify-center rounded-sm flex-row-reverse cursor-pointer bg-primry text-white">
                کپی ترید
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1359_21899)">
                    <path d="M15 20H5V7C5 6.45 4.55 6 4 6C3.45 6 3 6.45 3 7V20C3 21.1 3.9 22 5 22H15C15.55 22 16 21.55 16 21C16 20.45 15.55 20 15 20ZM20 16V4C20 2.9 19.1 2 18 2H9C7.9 2 7 2.9 7 4V16C7 17.1 7.9 18 9 18H18C19.1 18 20 17.1 20 16ZM18 16H9V4H18V16Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1359_21899">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>                    
            </div>
        </div>
    </div>
</template>
<script>
import { defineProps, watch , useTemplateRef ,ref  , onMounted} from 'vue'
// const props = defineProps({
//   show: Boolean,
//   required : true 
// });
// const isShow = ref(false)
// const myInput = useTemplateRef('modal') 
// onMounted(() => {
//   myInput.value.focus()  
//  let m = myInput
// })
// watch(() => props.show , (newValue) => {
//      isShow.value = newValue     
//      console.log('ff');
     
// })

export default {
  name : 'HeaderDefult',
  props : {
    show : {
        type : Boolean , 
        required : true 
    }
  },
  watch : {
    show(newdata) {
        if (newdata) {
            this.$refs.modal.style.cssText = 'top : 0;'
        }else {
           this.$refs.modal.style.cssText = '-top : 100vh;'
        }
    }
  },
  mounted() {
  },
}

</script>
