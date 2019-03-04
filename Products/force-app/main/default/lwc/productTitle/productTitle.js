import { LightningElement, api } from 'lwc';

export default class ProductTitle extends LightningElement {
    @api product;

    handleOpenRecordClick(){
        const selectEvent = new CustomEvent('productview', {
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }
}