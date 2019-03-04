public with sharing class ProductController {
    
    @AuraEnabled(cacheable=true)
    public static List<Product2> getAllProducts(){
      return [Select id, Name, StockKeepingUnit, Family, ProductCode, Image_URL__c from product2];
    }

    @auraEnabled(cacheable=true)
    public static List<Product2> searchProducts(string searchTerm){
      return [Select id, Name, StockKeepingUnit, Family, ProductCode, Image_URL__c from product2 where Name like: '%'+searchTerm+'%'];
    } 
}