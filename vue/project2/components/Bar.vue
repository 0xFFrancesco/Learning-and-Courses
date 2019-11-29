<template>
  <div class="container">
    Quotes Added {{number}}
    <div class="progress progress-bar-info" :style="{width: number * 10 + '%'}"></div>
  </div>
</template>

<script>
	export default {
		props : [ 'number' ]
	};
</script>

<style>
</style>
