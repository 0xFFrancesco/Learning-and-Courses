new Vue({
			el      : '#exercise',
			data    : {
				value : ''
			},
			methods : {
				alert : function(){
					alert('x');
				},
				store : function( e ){
					this.value = e.target.value;
				}
			}
		});