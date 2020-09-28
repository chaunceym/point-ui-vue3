<template>
<router-view />
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  name: 'App',
  components: {
    MyButton: MyButton,
  },
}
</script>
