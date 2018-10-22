<template>

  <div class="buttons">
      <div class="button" 
        :key="num" v-for="num in numbers"
        @click="pushNumber(num)">
        <p>{{ num }}</p>
      </div>
  </div>
  
</template>
<script>
export default {
  name: 'Buttons',
  data: function () {
    return {
      numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    }
  },
  methods: {
    pushNumber: function (number) {
      this.$emit('clicked', number)
    }
  }
}
</script>
<style scoped>
.buttons {
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px 10px;
}

.button {
  max-height: 100px;
  min-width: 30%;
  background: #fafafa;
  color: rgb(197, 56, 0);
  text-align: right;
}

p {
  padding: 6px 10px;
  margin: 0;
  font-size: 22px;
}
</style>
