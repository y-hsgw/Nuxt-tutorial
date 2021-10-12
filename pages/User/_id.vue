<!-- テンプレート -->
<template>
  <div>{{ message }}</div>
</template>

<!-- スクリプト -->
<script>
export default {
  computed: {
    message() {
      const userId = this.$route.params.id
      return 'ユーザーID[' + userId + ']のページです。'
    },
  },
}
</script>

<!-- スタイル -->
<style></style>
