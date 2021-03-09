<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full p-3 bg-purple-50 rounded-md"
  />
</template>

<script>
export default {
  name: 'MotionInput',
  props: ['modelValue'],
};
</script>

<style></style>
