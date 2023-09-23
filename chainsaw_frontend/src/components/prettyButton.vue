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
    border-radius: 0px;
    transition: background-color 0.3s ease;
  }
  
  .pretty-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pretty-button.primary {
    background-color: #eee525ff;
    color: black;
  }
  
  .pretty-button.primary:hover {
    background-color: rgb(255, 254, 231);
  }
  
  .pretty-button.secondary {
    background-color: #7b886aff;
    color: white;
  }
  
  .pretty-button.secondary:hover {
    background-color: #eee525ff;
  }
  </style>