<template>
  <div v-bem:app>
    <h1>{{ msg }}</h1>

    <div v-bem:network-status="showDetectNetwork ? 'show' : 'hide'">
      <div v-if="isOnline" v-bem:online>
        <span v-text="$t('g_network_reachable')"></span>
      </div>
      <div v-if="!isOnline" v-bem:offline>
        <span v-text="$t('g_network_unreachable')"></span>
      </div>
    </div>
    <section class="h-100">
      <b-col md="6" class="mb-3">
         <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <p>Reverse spinning animation:</p>
        <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
      </b-col>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      showDetectNetwork: false,
      isOnline: true,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('online', this.handleOnline, true)
      window.addEventListener('offline', this.handleOffline, true)
    })
  },
  methods: {
    handleOnline() {
      this.isOnline = true
      window.setTimeout(() => {
        this.showDetectNetwork = false
      }, 3000)
    },
    handleOffline() {
      this.isOnline = false
      this.showDetectNetwork = true
    },
    destroyed() {
      window.removeEventListener('online', this.handleOnline, true)
      window.removeEventListener('offline', this.handleOffline, true)
    }
  }
}
</script>

<style lang="scss">
@import 'src/theme/main.scss';
.ez-root {
  &__app {
    &__network-status {
      position: absolute;
      z-index: 10000;
      top: 0;
      left: 0;
      right: 0;
      min-height: 3rem;
      font-size: 1.25rem;
      font-weight: 500;
      color: white;
      &--show {
        display: block;
      }
      &--hide {
        display: none;
      }
      &__online {
        @include grid-flex;
        min-height: inherit;
        background-color: green;
      }
      &__offline {
        @include grid-flex;
        min-height: inherit;
        background-color: red;
      }
    }
  }
}
</style>
