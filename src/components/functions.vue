<template>

  <div class="buttons">
    <div class="button"
      v-for="symbol in buttons"
      :key="symbol"
      @click="pushedButton(symbol)">
      <p>{{ symbol }}</p>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'Functions',
  data: function () {
    return {
      buttons: ['+', '-', 'x',  '÷', '=']
    }
  },
  methods: {
    pushedButton: function (value) {
      this.$emit('clicked', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.buttons {
  width: 25%;
}

.button {
  min-width: 100%;
  height: 100px;
  background: #faba0088;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 5px;

  &:last-child {
    background-color: #f004;
  }
}


</style>
