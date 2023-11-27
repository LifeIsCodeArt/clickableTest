<script setup>
import SocialLinks from '../components/social-links.vue'
import {ref, watch, reactive} from "vue";

import {useSocialStore} from '../stores/socialMediaStore.js'

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

defineEmits(['closePopUp'])

const isEmailValid = (value) => {
  return EMAIL_REGEXP.test(value);}

const emailCheck =() => {
    if (isEmailValid(inputEmail.value)) {
      totalValidation.emailValid = true
    } else {
      totalValidation.emailValid = false;
    }
}

const passwordCheck =() => {
    if (inputPassword.value.length>=6) {
      totalValidation.passwordValid = true
    } else {
      totalValidation.passwordValid = false;
    }
}

const inputEmail = ref();
const inputPassword = ref();
const totalValidation = reactive({
    emailValid:Boolean,
    passwordValid:Boolean,
    checkBoxValid:false
})

const createNewUser = () =>{

    const newUser = {
      email: inputEmail.value,
      password: inputPassword.value,
    }
      console.log(newUser)
}

watch(
    () => inputEmail.value,
    ()=>{emailCheck()}
)

watch(
    () => inputPassword.value,
    ()=>{passwordCheck()}
)

const store = useSocialStore().socialMedia

</script>


<template>
    <div class="absolute popUpBackground w-full h-full"></div>
    <div class="absolute top-[50%] left-[50%] h-[44rem] translate-x-[-50%] translate-y-[-50%] container flex rounded-2xl z-20 max-md:left-[48%] max-md:h-auto  max-md:top-[48%]  max-md:w-[20rem]  max-md:translate-x-[-47%] max-md:translate-y-[-50%] max-md:flex max-md:flex-col">
        <div class="w-[24.5em] rounded-l-2xl flex flex-col  items-center modalLSBackground relative z-10 max-md:h-[20rem] max-md:w-full max-md:rounded-none">
            <div class="mt-[3.8rem] flex justify-center items-center w-[8.875rem] max-md:mt-[3.38rem]">
                <img src="../assets/icons/logo.png" alt="" class="w-[2.10rem] h-[1.3125rem] mr-[0.63rem] max-md:w-[2rem] max-md:h-[1.25rem]">
                <img src="../assets/icons/ClickSPIN.svg" alt="" class="w-[6.1rem] h-[0.773rem] max-md:w-[5.8rem] max-md:h-[1rem]">
            </div>
            <div class="mt-[3.17rem] max-md:mt-[1.5rem]">
                <p class="w-80 text-center text-neutral-50 text-base font-normal font-['Stolzl'] uppercase leading-none tracking-tight mb-[0.5rem] max-md:text-[1rem] max-md:items-center:leading-[1rem]">
                  Deposit 500,<br/>get 500 USDT as a gift</p>
                <p class="w-[19.5rem] text-center text-[#E4C086] max-md:text-[1rem] max-md:items-center:leading-[1rem] text-base font-normal font-['Stolzl'] uppercase leading-none tracking-tight">
                  100% cashback for VIPs only
                </p>
            </div>
            <img src="/icons/Ellipse%201.svg" alt="#" class="absolute w-56 h-56 bg-rose-700 rounded-full blur-3xl bottom-[3.44em] left-[4.31em] rounded-full z-[1] max-md:hidden">
            <img src="/icons/Ellipse%202.svg" alt="#" class="absolute absolute top-[20.81rem] left-[0.44rem] w-28 h-28 bg-orange-300 rounded-full blur-3xl z-[1] max-md:hidden">
            <img src="/icons/Ellipse%203.svg" alt="#" class="absolute w-28 h-28 bg-orange-300 rounded-full blur-3xl right-0 bottom-[7.62rem] z-[1] max-md:hidden">
            <img src="/icons/Ellipse%204.svg" alt="#" class="absolute w-28 h-28 bg-orange-300 rounded-full blur-3xl left-[-1.25rem] bottom-[-3.31rem] z-[1] max-md:hidden">
            <img src="/icons/Ellipse%205.svg" alt="#" class="absolute w-28 h-28 bg-orange-300 rounded-full blur-3xl top-[20.81rem] right-[3.44rem] z-[1] max-md:hidden">
            <img src="/images/lollibomb.png" alt="#" class="absolute w-[6.24518rem] h-[8.24518rem] right-0 top-[14.2628rem] rotate-[-4.343deg] max-md:rotate-[-1.343deg] max-md:top-[11.2628rem]">
            <img src="/images/reverse-lolipop.png" alt="#" class="absolute bottom-0 left-[0.19rem] w-[7.60569rem] h-[5.74694rem] max-md:w-[5.8rem] max-md:h-[5rem] max-md:left-[0.1rem]  max-md:bottom-[-1.5rem]">
         <div class="">

         </div>
            <img src="../assets/images/lollipop.png" alt="" class="absolute lolipop top-[43%] left-[1.88rem] max-md:left-[-1.1rem] max-md:top-[52%] z-[1]">
            <img src="../assets/images/clown.png" alt="" class="absolute w-[385px] h-[400px] bottom-0 left-[1.2rem] z-10 max-md:w-[10.25rem] max-md:bottom-[-1.25rem]  max-md:left-[5.2rem] max-md:h-[10.31rem]">
        </div>
        <div class="bg-[#131313] w-[24.5rem] rounded-r-2xl px-[1rem] py-[1rem] z-10 max-md:w-full max-md:py-[0px] max-md:h-[32rem] max-md:rounded-none">
            <div class="flex justify-end items-end">
                <button class="h-[2.5rem] w-[2.5rem] mb-[2rem] bg-[#202020] flex justify-center items-center text-[#999999] roboto max-md:absolute max-md:text-[0.95rem] max-md:top-2 max-md:rounded-l max-md:w-[1.43rem] max-md:h-[1.43rem]"
                        @click="$emit('closePopUp')">X</button>
            </div>

            <form class="bg-[#131313] mb-[2rem]">

                <label for="" class="px-[0.5rem] py-[1rem] text-center text-[1.25rem] leading-[1.50rem] text-white flex justify-center items-center max-md:pt-[2rem]"
                >Registration</label>

                <div class="relative email mt-[2rem] mb-[1.5rem]">
                    <div v-show="inputEmail" class="absolute z-10 bg-[#131313] w-[2.4rem] h-[1rem] left-[0.75rem] text-center text-[0.625rem] leading-[1rem] text-[#999] top-[-0.70rem]">Email</div>
                    <input v-model="inputEmail" type="email" id="email" class="w-full text-[0.875rem] border h-[3rem] py-[1rem] pr-[1rem] pl-[40px]  rounded-[0.5rem] bg-inherit leading-[1rem] tracking-[0.0175rem] " placeholder="Email"
                           :class="{
                      'outline-[#FD4646] border border-[#FD4646] focus:outline-none focus:border focus:border-[#FD4646] focus:outline-none':!totalValidation.emailValid,
                      'outline-[#FCFCFC] border border-[#353535] focus:outline-none focus:border focus:border-[#FCFCFC] focus:outline-none':totalValidation.emailValid}">
                  <div v-show="!totalValidation.emailValid"
                       class="absolute z-10 bg-[#131313] w-[8rem] h-[1rem] right-[0.75rem] text-center text-[0.625rem] leading-[1rem] text-[#FD4646] bottom-[-0.5rem]">
                    Provide a valid e-mail address</div>
                </div>

                <div class="relative password  max-md:">
                    <div v-show="inputPassword" class="absolute z-10 bg-[#131313] w-[3.2rem] h-[1rem] left-[0.75rem] text-center text-[0.625rem] leading-[1rem] text-[#999] top-[-0.70rem]">Password</div>
                    <input type="password" v-model="inputPassword" id="password" class="w-full text-[0.875rem] border h-[48px] py-[16px] pr-[16px] pl-[40px]  rounded-[8px] bg-inherit leading-[1rem] tracking-[0.0175rem]  hover:border-[#FCFCFC]" placeholder="Password"
                         :class="{
                      'outline-[#FD4646] border border-[#FD4646] focus:outline-none focus:border focus:border-[#FD4646] focus:outline-none':!totalValidation.passwordValid,
                      'outline-[#FCFCFC] border border-[#353535] focus:outline-none focus:border focus:border-[#FCFCFC] focus:outline-none':totalValidation.passwordValid}">
                    <div v-show="!totalValidation.passwordValid"
                         class="absolute z-10 bg-[#131313]  w-[7rem] h-[1rem] right-[0.75rem] text-center text-[0.625rem] leading-[1rem] text-[#FD4646] bottom-[-0.5rem]">
                      Provide a valid password</div>
                </div>

                <div class="flex items-start my-[2rem]">
                    <input v-model="totalValidation.checkBoxValid" @click="totalValidation.checkBoxValid = !totalValidation.checkBoxValid" type="checkbox" class="w-[1.125rem] h-[1.125rem] border-2 border-[#999999] accent-[#E4C086] hover:border-[#FCFCFC]">
                    <div class="w-[100%] h-auto text-[#999] ml-[0.5rem] text-[0.625rem] leading-[0.875rem] tracking-[0.0125rem]">
                        By checking this box when registering on this site, the user confirms that he is over 18 years of age and has read, understood and accepted the
                        <span class="text-[#E4C086]">Terms and Conditions.</span>
                    </div>
                </div>

                <button type="submit" @click.prevent="createNewUser()" class="w-full py-[1rem] px-[1rem] text-center text-[#282828] rounded-xl text-[0.875rem] bg-[#1C1C1C] leading-[1rem] tracking-[0.0125rem] cursor-not-allowed pointer-events-none"
                        :class="{
                        'cursor-allowed pointer-events-auto cursor-pointer text-black bg-[#E4C086] hover:bg-[#ffffff]': (totalValidation.emailValid && totalValidation.checkBoxValid && totalValidation.passwordValid)
                        }">
                      Create an account
                </button>
            </form>

            <div class="">
                <h2 class="text-white text-center mb-[0.75rem]">
                    Or register with:
                </h2>

                <div class="flex items-center justify-center max-md:mb-[1rem]">
                    <SocialLinks v-for="item in store" :key="item.id" :social="item">
                    </SocialLinks>
                </div>
            </div>
            </div>
        </div>


</template>

<style scoped>
.container{
  max-width: 45em;
}
input{
  color: #999999;
}
.email:before{
  content: '';
  position: absolute;
  top: 0.95rem;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: url('@/assets/icons/Mail.png') no-repeat;
  background-size: cover;
}
.password:before{
  content: '';
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: url('@/assets/icons/Mail.png') no-repeat;
  background-size: cover;
}
.modalLSBackground{
  background: linear-gradient(180deg, #130625 0%, #1B0929 100%);
}
.lolipop{
  width: 4.74325rem;
  height: 4.12663rem;
  transform: rotate(-8.779deg);
}
.popUpBackground{
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(0.5rem);
  z-index: 10;
}
.margin{
  margin: 0 auto;
}
</style>