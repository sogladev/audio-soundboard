<script lang="ts" setup>
defineProps({
  text: String,
  id: String,
})
</script>

<template>
    <div :id="id">
        {{ text }}
    </div>
</template>

<style scoped></style>
