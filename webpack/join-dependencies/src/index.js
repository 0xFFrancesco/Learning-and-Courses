const button     = document.createElement('button');
button.innerText = 'Click me';
button.onclick   = () =>{
	//System = ES6 spec API to load modules Async
	System.import('./image_viewer').then(( m ) =>{
		m.default();
	});
};

document.body.appendChild(button);