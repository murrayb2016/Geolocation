import {NavigationMixin} from 'lightning/navigation';
import { LightningElement, wire , track} from 'lwc';
import searchProducts from '@salesforce/apex/ProductController.searchProducts';

import productResources from '@salesforce/resourceUrl/ProductResources'; //TODO: Styling 
import {loadStyle} from 'lightning/platformResourceLoader';

export default class ProductList extends NavigationMixin(LightningElement) {
    @track searchProductTerm = '';
    @wire(searchProducts, {searchTerm: '$searchProductTerm'})
     products;

     searchProductList(event){
        this.searchProductTerm = event.target.value; 
     } 

     get hasProductSearchResults(){
        return (this.products.data.length>0);
     }

     handleProductView(event){
         // Navigate to product record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: event.target.product.Id,
				objectApiName: 'Product2',
				actionName: 'view',
			},
		});
     }

     connectedCallback(){ //TODO: Styling 
        loadStyle(this, productResources + '/style.css');
     }
}