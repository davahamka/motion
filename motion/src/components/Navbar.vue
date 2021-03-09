<template>
  <div v-if="isOpen">
    <Modal />
  </div>
  <nav class="fixed w-screen bg-white">
    <div class="lg:px-48 px-14 h-16 flex flex-row items-center justify-between">
      <div @click="goToHome" class="cursor-pointer">Logo</div>
      <div class="flex flex-row">
        <MotionButton @click="isOpen = true">Menu</MotionButton>
      </div>
    </div>
  </nav>
</template>

<script>
import Modal from './ Modal.vue';
import MotionButton from './MotionButton.vue';
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    MotionButton,
    Modal,
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style></style>
