<template>
hi | <router-link to="/input">input</router-link> |
<router-link to="/">button</router-link>
<hr />
<div>
  <router-view />
</div>
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
