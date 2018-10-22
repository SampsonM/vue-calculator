import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

function evaluate(value) {
    console.log('evaluate', value);

    const res = value.reduce((acc, cur, i, src) => {
      console.log(cur)
      if (cur === /[0-9]/g) {
        if (acc.sym.hasSymbol) {
          acc.current.push(cur);
          return acc
        };

        acc.previous.push(cur)
      };

      if (cur === /[-x÷+]/g) {
        console.log('symbol')
        acc.sym.symbol = cur;
      }

      if (i === src.length - 1) {
        return acc.total;
      };

      return acc;

    }, {
        previous: [],
        sym: {
          hasSymbol: false,
          symbol: ''
        },
        current: [],
        total: 1089
    });

    return res;

}

export default evaluate;
