<template>
  <div>
    <loginModal v-if="showModalView === 'login'" @close="closeModalView" />
    <registerModal
      v-if="showModalView === 'register'"
      @close="closeModalView"
    />
  </div>
</template>

<script>
import loginModal from "@/components/UI/modals/ModalLogin.vue";
import registerModal from "@/components/UI/modals/ModalRegister.vue";
export default {
  components: {
    loginModal,
    registerModal
  },
  computed: {
    showModalView() {
      return this.$store.getters.getModalView;
    }
  },
  methods: {
    closeModalView() {
      this.$store.dispatch("setModalView", null);
    }
  }
};
</script>
