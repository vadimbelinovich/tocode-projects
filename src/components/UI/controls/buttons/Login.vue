<template>
  <button class="btn btnPrimary" @click="setModalView(type)">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    setModalView(view) {
      this.$store.dispatch("setModalView", view);
    }
  }
};
</script>
