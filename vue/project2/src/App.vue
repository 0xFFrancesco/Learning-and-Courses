<template>
  <div class="container">
    <Bar :number="quotes.length"></Bar>
    <Form @onQuoteAdded="addQuote"></Form>
    <QuoteList :quotes="quotes" @del="del"></QuoteList>
  </div>
</template>

<script>
	import Bar from '../components/Bar.vue';
	import Form from '../components/Form.vue';
	import QuoteList from '../components/QuoteList.vue';
	
	export default {
		components : {
			Bar,
			Form,
			QuoteList,
		},
		data       : function(){
			return {
				max    : 10,
				quotes : []
			};
		},
		methods    : {
			addQuote( $event ){
				if ( this.quotes.length == this.max ) {
					alert('Error: max quotes');
					return;
				}
				this.quotes.push($event);
			},
			del( i ){
				this.quotes.splice(i, 1);
			}
		}
	};
</script>

<style>
</style>
