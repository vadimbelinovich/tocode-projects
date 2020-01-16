<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters.getWarning;
    }
  }
};
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838;
}
</style>
