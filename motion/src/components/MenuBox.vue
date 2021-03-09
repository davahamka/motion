<template>
  <div
    class="transform transition duration-500 hover:translate-y-3 rounded-lg cursor-pointer py-8"
  >
    <div class="text-center">
      <div>Gambar</div>
      <h2
        class="text-gray-800 hover:text-purple-600"
        style="font-size: 6rem; font-weight: 800"
      >
        {{ total }}
      </h2>
      <p class="my-2 px-4" v-html="title"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'total'],
};
</script>

<style></style>
