<template>
  <div :class="loadingObject">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    rounded: {
      type: Boolean,
      default: true
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    loadingObject () {
      return {
        loading: true,
        'loading-rounded': this.rounded,
        'loading-animated': this.animated
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes loadingAnimation {
	 0% {
		 transform: translate3d(-30%, 0, 0);
	}
	 100% {
		 transform: translate3d(100%, 0, 0);
	}
}
 .loading-item {
	 position: relative;
	 overflow: hidden;
	 height: 25px;
	//  background-color: v-bind(bgColor);
	 width: 100%;
	 height: 25px;
	 margin-bottom: 10px;
	 overflow: hidden;
}
 .loading-rounded .loading-item {
	 border-radius: 6px;
}
 .loading-animated .loading-item::before {
	 content: '';
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100vw;
	 max-width: 1000px;
	 height: 100%;
	 background: linear-gradient(to right, transparent 0%, #e1e1e1 15%, transparent 30%);
	 animation-duration: 1.5s;
	 animation-fill-mode: forwards;
	 animation-iteration-count: infinite;
	 animation-name: loadingAnimation;
	 animation-timing-function: linear;
}
 [class^='loading-'] + .loading-item {
	 margin-top: 20px;
}

</style>
