<script setup>
import {defineProps} from "vue";
const props = defineProps({
  social: {
    type: Object,
    default: () => {}
  }
})
</script>


<template>
  <a class="w-[3rem] h-[3rem] py-[0.5rem] px-[0.5rem] bg-[#353535] mx-[0.25rem] rounded-xl" :href="social.link">
    <img :src="social.imagePath" :alt="social.alt" class="">
  </a>

</template>

<style scoped>

</style>