<template>
  <button
    class="transform transition duration-500 w-full rounded-md px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 border-2 border-gray-600 text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MotionButton',
};
</script>

<style></style>
