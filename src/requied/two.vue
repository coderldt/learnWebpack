<template>
  <div>
      hi
  </div>
</template>

<script>
import minix from '../module/es6Module/minix'
export default {
  mixins: [minix],
  created() {
    console.log(this.getMinObj);
  }
}
</script>

<style>

</style>