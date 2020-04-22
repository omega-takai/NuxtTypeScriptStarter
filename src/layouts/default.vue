<template>
  <div>
    <nuxt/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { mapActions } from 'vuex'

@Component
export default class LayoutsDefault extends Vue {
  localIsMobile = true;
  localIsDesktop = false;
  mounted() {
    console.log('mounted', { 'localIsMobile': this.localIsMobile, 'localIsDesktop': this.localIsDesktop });
  }
}
</script>
