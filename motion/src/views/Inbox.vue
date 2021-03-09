<template>
  <Navbar />
  <section class="grid grid-cols-12 pt-24 px-14 lg:px-48">
    <div class="col-span-7">
      <h1>Inbox</h1>
    </div>
    <div class="col-span-5">
      <p>Chat All</p>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
