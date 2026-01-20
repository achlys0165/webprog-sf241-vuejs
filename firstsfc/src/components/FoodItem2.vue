<template>
  <div class="jabe">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Chicken, Spaghetti, and fries',
      message: 'I want Chicken, Spaghetti, and fries'
    }
  }
};
</script>
 
<style>
 .jabe {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: red;
  }
</style>