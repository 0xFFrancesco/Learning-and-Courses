<template>
  <div class="row">
    <Quote v-for="(q, i) in quotes" @click.native="del(i)">{{q}}</Quote>
  </div>
</template>

<script>
	import Quote from './Quote.vue';
	
	export default {
		components : {
			Quote
		},
		props      : [ 'quotes' ],
		methods    : {
			del( i ){
				this.$emit('del', i);
			}
		}
	};
</script>

<style></style>
