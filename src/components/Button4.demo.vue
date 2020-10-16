<demo>图标按钮</demo>

<template>
<Button>
  <Icon type="icon-WIFI" />
</Button>
<Button>
  <Icon type="icon-home" />
</Button>
<Button>
  <Icon type="icon-monitoring" />
</Button>
<Button>
  <Icon type="icon-diagnose" />
</Button>
<Button>
  <Icon type="icon-loading" />
</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Icon from '../lib/Icon.vue';
export default {
  components: {
    Button,
    Icon
  }
}
</script>
