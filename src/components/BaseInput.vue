<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String
  },
  methods: {
    updateValue(event) {
      // <-- method triggered by input event
      this.$emit('input', event.target.value)
    }
  }
}
</script>
