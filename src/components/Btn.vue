<template>
  <button @click="clicked" :class="className" class="btn">
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "Btn",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "click me",
    },
    cancel: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clicked() {
      this.$emit("click");
    },
  },
  computed: {
    className() {
      return {
        btn__disabled: this.disabled,
        btn__cancel: this.cancel,
        btn__success: this.success,
      };
    },
  },
};
</script>
<style>
button {
    padding: 10px 15px;
    outline: none;
    border: none;
    width: 80px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 2px;
}
.btn__disabled {
     pointer-events: none;
}
.btn__cancel {
    background: red;
}
.btn__success {
     background: green;
}
</style>

