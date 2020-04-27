<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '@/mixins/formFieldMixin' // import mixin

export default {
  mixins: [formFieldMixin],
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
