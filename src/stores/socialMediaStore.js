import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useSocialStore = defineStore('socialStore', () => {
  const socialMedia = ref([
      { id:1,
        link:'#',
        imagePath:'../src/components/icons/Icon%20-%20Metamask.svg',
        socialAlt:'#'
      },
      { id:2,
          link:'#',
          imagePath:'../src/components/icons/Icon%20-%20Apple.svg',
          socialAlt:'#'
      },
      { id:3,
          link:'#',
          imagePath:'../src/components/icons/Icon%20-%20Facebook.svg',
          socialAlt:'#'
      },
      { id:4,
          link:'#',
          imagePath:'../src/components/icons/Icon%20-%20Google.svg',
          socialAlt:'#'
      },

  ])


  return { socialMedia }
})
