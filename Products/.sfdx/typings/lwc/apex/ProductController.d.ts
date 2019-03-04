declare module "@salesforce/apex/ProductController.getAllProducts" {
  export default function getAllProducts(): Promise<any>;
}
declare module "@salesforce/apex/ProductController.searchProducts" {
  export default function searchProducts(param: {searchTerm: any}): Promise<any>;
}
