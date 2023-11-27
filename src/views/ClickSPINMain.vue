<script setup>
import anime from 'animejs';

import PopUp from '../components/pop-up.vue'
import {onMounted, ref} from "vue";

const animeElementClown = ref()
const animeElementBomb = ref()
const animeElementDiamond = ref()
const animeElementHeader = ref()
const modalState = ref(false)

const startAnimation = (target,duration, translateX, translateY) => {
  anime({
    targets: target,
    translateY: translateY,
    translateX: translateX,
    easing: 'linear',
    duration: duration,
    direction: 'alternate',
    loop: true
  })}
onMounted(()=>{
  startAnimation(animeElementClown.value,3000,0,20)
  startAnimation(animeElementBomb.value,4000,0,70)
  startAnimation(animeElementDiamond.value, 5000,0,30)
  startAnimation(animeElementHeader.value, 5500,0,50)
})
</script>

<template>
  <div class="flex relative container h-[1000px] md:max-w-3xl  max-md:h-auto  max-md:flex max-md:flex-col">
    <PopUp v-if="modalState"
           @closePopUp="modalState = !modalState">
    </PopUp>
      <img ref="animeElementDiamond" src="../components/images/Diamond.png" alt="Diamond"
           class="absolute left-0 top-[19.7rem] max-2xl:hidden  max-md:block max-md:w-[5.1rem] max-md:h-[5rem] max-md:rotate-[-12.307deg] max-md:left-[10%] max-md:top-[21.7rem]">
      <img src="../components/images/Brilliant_3D.svg" alt="Diamond"
           class="absolute bottom-[7.1rem] left-[35.5rem] max-2xl:hidden max-md:block max-md:w-[3.4rem] max-md:h-[3.4rem] max-md:rotate-[-2.307deg] max-md:left-[74%] max-md:top-[22.25rem]">
      <img src="../components/images/Light%20PNG(1).png" alt="Light"
           class="absolute top-[6rem] left-[40rem] max-2xl:hidden  max-md:block  max-md:w-[4.6rem]  max-md:h-[3.1rem] max-md:left-[77%] max-md:top-[21.1rem] border-[#FD4646] ">
      <img src="../components/images/Light%20PNG(2).png" alt="Light"
           class="absolute bottom-[9.1rem] left-[37.5rem] max-2xl:hidden max-md:block max-md:w-[5.2rem]  max-md:h-[4.1rem] max-md:left-[77%] max-md:top-[2.3rem] border-[#FD4646]">

      <div class="w-[60rem] bg-[#0B0B0A] flex justify-center items-around max-md:h-[28.31rem] max-lg:w-[50%] max-md:w-full">
          <div class="flex  flex-col mt-[9.25rem] w-[34rem] max-2xl:ml-10 max-md:h-[28rem] max-md:items-center max-md:mt-[3rem] max-md:mr-[3rem] md:max-lg:w-[50%]">
            <div class="flex items-start justify-start  h-[35px]">
                <img src="/src/components/icons/logo.png" class="mr-[16px] h-[35px] w-[55px] max-md:h-[1.3rem] max-md:w-[2.1rem]">
                <h1 class="text-[#FCFCFC] uppercase text-[1.75rem] leading-7 tracking-[0.56px] mt-[0.25rem] font-black text-center italic max-md:mt-0 max-md:leading-[1.25rem] max-md:text-[1.24rem]">
                  ClickSPIN
                </h1>
            </div>
            <div class="my-[54px] w-[30.3rem] max-md:w-[21.3rem] max-md:mt-[2.5rem] max-md:mb-[1.5rem]">
                <p class="uppercase  text-[3.75rem] leading-[4.5rem] text-white relative z-[8]  max-md:text-center max-md:leading-[1.71rem] max-md:text-[1.5rem] Gotham  md:max-lg:text-[1.75rem] md:max-lg:w-[13.75rem] md:max-lg:flex md:max-lg:flex-center">
                  Deposit 500, get 500 USDT <span class="text-[#EBBE7D] font-bold">as a gift</span>
                </p>
            </div>
            <p class="uppercase Gotham font-normal text-[#999] w-[28.1875rem] leading-[2rem] text-[1.5rem]  z-[8] max-md:w-full max-md:text-center max-md:pl-[1rem] max-md:leading-[1.25rem] max-md:text-[1rem] md:max-lg:w-[90%]">
                100% cashback for VIPs only
            </p>
            <button class="mt-[101px] Gotham font-bold w-[22.18rem] px-[3.5rem] pt-[17px] pb-[15px] text-center text-[1.2rem] leading-[1.5rem] text-[#0B0B0A] bg-[#EBBE7D] rounded-[56px] uppercase hover:bg-[#FCFCFC]
                           sm:max-lg:px-[3.5rem] max-md:mt-[3.5rem] max-md:w-[17.8rem] max-md:text-[0.875rem] max-md:leading-[1.5rem] max-md:font-bold md:max-lg:w-[13rem] md:max-lg:leading-[0.5rem]
                            md:max-lg:px-[0.5rem] md:max-lg:py-[1.5rem] md:max-lg:text-[0.8rem]"
                    @click="modalState=!modalState">
                  Become a vip-player
            </button>
          </div>
      </div>
      <div class="w-[60rem] h-full max-lg:w-[50%] max-md:w-full max-md:h-[28.31rem] bg-no-repeat bg-cover bg-clickImage relative">

          <div class="overflow-hidden  absolute bottom-0 left-[5.43rem] h-[39.68rem] max-xl:h-[28.68rem] max-lg:h-[28.34rem] max-md:left-[16%] max-sm:h-[18.5rem]">
              <img ref="animeElementClown" src="../components/images/clown.png" alt="clown"
                   class="w-auto h-auto h-[636px] w-[610px] md:max-xl:w-[420px] md:max-xl:h-[450px] max-md:hidden max-sm:block max-sm:w-[17rem] max-sm:h-[18.5rem]">
          </div>

          <div ref="animeElementHeader" class="flex justify-center items-center mt-[7.81rem] max-md:mt-[3rem]">
              <img src="../components/images/rainbow-header.png" alt="rainbow-header" class="ml-[0.5rem] max-md:w-[7rem] max-md:h-[3.5rem]">
          </div>

          <div class="absolute left-[-10.50rem] bottom-[20.0625rem] max-sm:bottom-[1%] max-sm:left-[1%]">
              <img src="../components/images/lollipop.png" alt="lollipop" class="max-2xl:hidden max-md:hidden max-sm:block max-sm:w-[4.6rem] max-sm:h-[4rem] max-sm:rotate-[-4.779deg]">
          </div>

          <img ref="animeElementBomb" src="../components/images/lollibomb.png" alt="lollibomb"
               class="w-[40%] absolute right-0 top-[0.25rem] max-lg:hidden max-md:w-[5.6rem] max-md:w-[5.6rem] max-md:block max-md:top-[3.5rem]">
          <img src="../components/images/Chip%203D.png" alt="Chip"
               class="w-[39%] absolute top-0 left-[-6.75rem] max-lg:hidden max-md:block max-md:w-[7.8rem] max-md:h-[5.2rem] max-md:left-[-2.25rem] max-md:top-[2.7rem] max-md:block max-md:rotate-[-80.899deg]">
      </div>
  </div>
</template>

<style>
body{
  font-family: cardo;
}
.container{
  max-width: 1920px;
  margin: 0 auto;
}
.containerMD{
  max-width: 768px;
}
.Gotham{
  font-family: "Gotham Pro";
}
</style>