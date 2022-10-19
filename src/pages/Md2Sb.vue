<script setup lang="ts">
import { ref, watch } from 'vue'
import md2sb from 'md2sb'

const mdText = ref('')
const sbText = ref('')
const convertText = async () => {
  sbText.value = await md2sb(mdText.value)
}

const enableAuto = ref(true)
watch(mdText, () => {
  if (enableAuto.value) {
    convertText()
  }
})
</script>

<template>
  <div>
    <div>
      <label>
        Auto convert
        <input type="checkbox" v-model="enableAuto" />
      </label>
    </div>

    <div class="grid grid-flow-col">
      <div class="mx-4">
        <div>Markdown</div>
        <textarea name="md" v-model="mdText" class="border border-light-900 h-96 w-96"></textarea>
      </div>
  
      <button @click="convertText" class="h-fit my-auto disabled:bg-gray-100" :disabled="enableAuto">→</button>
  
      <div class="mx-4">
        <div>Scrapbox</div>
        <textarea name="sb" v-model="sbText" class="border border-light-900 h-96 w-96" readonly></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
