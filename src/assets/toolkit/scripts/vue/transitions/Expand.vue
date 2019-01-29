<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
  /**
   * https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/
   */

  export default {
    name: 'Expand',
    methods: {
      enter(element) {
        const width = getComputedStyle(element).width;

        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const height = getComputedStyle(element).height;

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;

        // Trigger the animation.
        // We use `setTimeout` because we need
        // to make sure the browser has finished
        // painting after setting the `height`
        // to `0` in the line above.
        setTimeout(() => {
          element.style.height = height;
        });
      },

      afterEnter(element) {
        element.style.height = 'auto';
      },

      leave(element) {
        element.style.height = getComputedStyle(element).height;

        setTimeout(() => {
          element.style.height = 0;
        });
      }
    }
  };
</script>
