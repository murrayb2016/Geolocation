import { LightningElement, api, wire, track} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import IMAGEURL_FIELD from '@salesforce/schema/Product2.Image_URL__c';
import SKU_FIELD from '@salesforce/schema/Product2.StockKeepingUnit';
import FAMILY_FIELD from '@salesforce/schema/Product2.Family';
import CODE_FIELD from '@salesforce/schema/Product2.ProductCode';

const productFields = [NAME_FIELD, IMAGEURL_FIELD, SKU_FIELD, FAMILY_FIELD, CODE_FIELD];

export default class ProductCardRecord extends LightningElement {

    @api recordId;  //Product record id 

    @track productName;
    @track productImage;
    @track productSKU;
    @track productFamily; 
    @track productCode;

    @wire(getRecord, {recordId: '$recordId', fields: productFields})
    loadProduct({error, data}){
        if(error){
            //TODO: handle error
        }
        else if(data){  
            this.productName = data.fields.Name.value;
            this.productImage = data.fields.Image_URL__c.value;
            this.productSKU = data.fields.StockKeepingUnit.value;
            this.productFamily = data.fields.Family.value;
            this.productCode = data.fields.ProductCode.value;
        }
    }

}