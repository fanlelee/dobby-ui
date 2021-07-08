<template>
  <button class="dobby-button" :class="classes" @click="" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    level: {
      type: String,
      default: 'main',
      validator(value) {
        return value === 'main' || value === 'normal'
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return value === 'small' || value === 'normal' || value === 'big'
      }
    },
    theme: {
      type: String,
      default: 'button',
      validator(value) {
        return value === 'button' || value === 'link' || value === 'text'
      }
    }
  },
  setup(props) {
    const {level, size, theme} = props
    const classes = {
      [`dobby-level-${level}`]: level,
      [`dobby-size-${size}`]: size,
      [`dobby-theme-${theme}`]: theme,
    }
    return {classes}
  }
}
</script>

<style lang="scss">
.dobby-button {
  $dimension: 12px;
  $light-blue: #5ca8f8;
  $blue: #408df1;
  $deep-blue: #2d6dd2;
  display: inline-block;
  cursor: pointer;
  border: none;

  &.dobby-level-normal {
    color: #fff;
    background-color: $blue;
    &:hover {
      background-color: $light-blue;
    }
    &:active {
      background-color: $deep-blue;
    }
  }

  &.dobby-level-main {
    color: $blue;
    background-color: #ffffff;
    border: 1px solid $blue;
    &:hover {
      color: $light-blue;
      border: 1px solid $light-blue;
    }
    &:active {
      color: $deep-blue;
      border: 1px solid $deep-blue;
    }
  }

  &.dobby-size-small {
    font-size: 10px;
    padding: $dimension/4 $dimension/2;
    border-radius: $dimension/4;
  }
  &.dobby-size-normal {
    font-size: 16px;
    padding: $dimension/2 $dimension;
    border-radius: $dimension/2;
  }

  &.dobby-size-big {
    font-size: 20px;
    padding: $dimension/1.5 $dimension;
    border-radius: $dimension/1.5;
  }

  &.dobby-theme-link{
    border: none;
    background-color: transparent;
    &:hover {
      border: none;
    }
    &:active {
      color: $deep-blue;
    }
  }
  &.dobby-theme-text{
    color: #111;
    border: none;
    background-color: transparent;
    &:hover {
      color: #000;
      border: none;
      background-color: #eee;
    }
    &:active {
      color: #111;
    }
  }
  &[disabled]{
    cursor: not-allowed;
  }

}
</style>