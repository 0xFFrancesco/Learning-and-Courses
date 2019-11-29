<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default panel-body quote">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {};
</script>

<style scoped>
  .panel-body {
    font-family: 'Arizona';
    font-size: 24px;
  }
  
  .quote {
    cursor: pointer;
  }
  
  .quote:hover {
    background: lightcoral;
  }
</style>
