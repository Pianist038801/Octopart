const getData = function(sku_num) {
	console.log('sss=', sku_num);
	return fetch('https://scalr.api.appbase.io/shopelect-v8/shopelect-v8/_search', {
		method: 'POST',
		headers: {
			Authorization: 'Basic dkpTM3VsQmRKOmNmNjA3MmJhLTM3MWQtNDFkOC04Njg0LTU1NGY1ZmJjZTU3ZQ==',
			'Content-Type': 'application/json'
		},
		body: {
			query: {
				term: {
					'company_sku.raw': sku_num
				}
			}
		}
	})
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			console.log('____');
			return response.hits.hits[0];
		})
		.catch((error) => {
			console.error('api error: ', error);
		});
};
export default getData;
