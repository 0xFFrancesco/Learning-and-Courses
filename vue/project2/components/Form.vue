<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2">
      <textarea class="form-control" v-model="quote" name="quote" id="quote" cols="30" rows="10"></textarea>
      <button class="btn btn-primary" @click="add">Add quote</button>
    </div>
  </div>
</template>

<script>
	export default {
		data    : function(){
			return {
				quote : ''
			};
		},
		methods : {
			add(){
				if ( this.quote ) {
					this.$emit('onQuoteAdded', this.quote);
					this.quote = '';
				}
			}
		}
	};
</script>

<style>
</style>
