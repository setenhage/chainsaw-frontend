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
    font-weight: 500;
    font-family: 'Arial';
    color: rgb(30, 30, 30);
    border: none;
    cursor: pointer;
    outline: 2px solid transparent;
    border-radius: 2px;
    transition: background-color 0.3s ease;
  }
  
  .pretty-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pretty-button.primary {
    background-color: rgb(255, 255, 213);
    color: rgb(30, 30, 30);
    font-family: 'Arial';
  }
  
  .pretty-button.primary:hover {
    background-color: rgb(255, 255, 255);
  }
  
  .pretty-button.secondary {
    background-color: #7b886aff;
    color: white;
  }
  
  .pretty-button.secondary:hover {
    background-color: #eee525ff;
  }
  </style>