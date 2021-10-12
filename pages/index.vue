<template>
  <div>
    <div>
      {{ message }}
    </div>
    <div>カウント: {{ $store.state.count }}</div>
    <button @click="onClick">カウントアップ</button>
    <RouterLink to="/next">次ページへ</RouterLink>
  </div>
</template>

<!-- スクリプト -->
<script>
export default {
  data() {
    return {
      message: 'Hello Nuxt!',
    }
  },
  methods: {
    onClick() {
      this.$store.commit('countUp')
    },
  },
}
</script>
