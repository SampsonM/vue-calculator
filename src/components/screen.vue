<template>

  <div class="screen">
    <p>{{ formattedData }}</p>
  </div>
  
</template>
<script>

export default {
  name: 'Screen',
  props: ['data'],
  computed: {
    formattedData: function() {
      if (typeof this.data === 'string' || typeof this.data === 'number') {
        return this.data
      };

      return this.data.join('');
    }
  }
}
</script>

<style scoped>
.screen {
  width: 75%;
  height: 100px;
  background-color: #fbfbfbaa;
  padding: 10px;
  overflow: scroll;
}

p {
  font-size: 4rem;
  text-align: right;
  margin: 0;
  line-height: 100px;
}

</style>
