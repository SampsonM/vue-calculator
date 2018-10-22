<template>
    <div class="calculator">
      <Screen :data="screenData"></Screen>
      <button @click="clear" class="clear">C</button>
      <Buttons @clicked="buttonPressed"></Buttons>
      <Functions @clicked="buttonPressed"></Functions>
    </div>
</template>

<script>
import Screen from './screen';
import Buttons from './buttons';
import Functions from './functions';
import evaluate from '../main.js';

export default {
  name: 'Calc',
  components: {
    Screen,
    Buttons,
    Functions
  },
  data: function() {
    return {
      screenData: []
    }
  },
  methods: {
    buttonPressed: function (value) {
      if (value === '=') {
        const res = evaluate(this.screenData);
        return this.screenData = res;
      };

      this.screenData.push(value);
    },
    clear: function () {
      this.screenData = [];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.calculator {
  height: 700px;
  width: 550px;
  background-color: #abe3;
  margin: 0 auto;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.clear {
  height: 90px;
  width: 16%;
  background: #f00;
  margin: auto 5px auto 18px;
}
</style>
