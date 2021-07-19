<template>
  <button class="dobby-button" :class="classes" :disabled="disabled">
    <span :class="{[`dobby-loading`]:loading}"></span>
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
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
  &+&{margin-left: $dimension;}
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
  .dobby-loading{
    width: 14px;
    height: 14px;
    display: inline-block;
    border-radius: 8px;
    border: 2px solid $blue;
    margin-right: 4px;
    border-color: $blue $blue $blue transparent;
    animation: dobby-spin 1s infinite linear;
  }
  @keyframes dobby-spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
}
</style>