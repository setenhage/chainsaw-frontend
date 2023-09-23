<template>
    <button @click="onClick" :class="['pretty-button', buttonType]" :disabled="disabled">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'prettyButton',
    props: {
      buttonType: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit('click');
      }
    }
  }
  </script>
  
  <style scoped>
  .pretty-button {
    padding: 10px 20px;
    font-size: 30px;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .pretty-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pretty-button.primary {
    background-color: #4CAF50;
    color: white;
  }
  
  .pretty-button.primary:hover {
    background-color: #45a049;
  }
  
  .pretty-button.secondary {
    background-color: #008CBA;
    color: white;
  }
  
  .pretty-button.secondary:hover {
    background-color: #007bb5;
  }
  </style>