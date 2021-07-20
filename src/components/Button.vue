<template>
  <div
    class="button"
    :class="type"
    :style="{
      width: width || '100%',
      height: height || '60px',
      border: border || 'none',
      margin: margin || '0'
    }"
    @click="btnClickHandler"
  >
    <span
      :style="{
        fontSize,
        marginRight: withoutIcon ? '0' : '1.5vh'
      }"
    >
      {{ text }}
    </span>
    <slot />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: [
    "text",
    "background",
    "width",
    "height",
    "fontSize",
    "fontColor",
    "border",
    "margin",
    "type",
    "clickHandler",
    "withoutIcon"
  ],
  mounted() {
    this.btnClass = this.$props.type;
  },
  data: () => ({
    btnClass: ""
  }),
  methods: {
    btnClickHandler() {
      const handler = this.$props.clickHandler;
      if (handler) handler();
    }
  }
};
</script>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.button span {
  font-weight: 500;
  transition: 0.3s;
}

.pink-btn,
.dark-btn,
.light-btn {
  transition: 0.3s;
}

.pink-btn span,
.dark-btn span {
  color: #fff;
}

.light-btn span {
  color: #242135;
}

.light-btn svg path {
  fill: #242135;
  transition: 0.3s;
}

.pink-btn {
  background: #ea8e79;
}

.dark-btn {
  background: #242135;
}

.light-btn {
  background: #fff;
}

@media (hover: hover) {
  .pink-btn:hover {
    background: #eba393;
  }
  .dark-btn:hover {
    background: #615e71;
  }
  .light-btn:hover {
    background: #615e71;
  }
  .light-btn:hover span {
    color: #fff;
  }
  .light-btn:hover svg path {
    fill: #fff;
  }
}
/* #eba393 */
/* #615e71 */
</style>
