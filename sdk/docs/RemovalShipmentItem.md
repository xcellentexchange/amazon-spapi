# SellingPartnerApiForFinances.RemovalShipmentItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**removalShipmentItemId** | **String** | An identifier for an item in a removal shipment. | [optional] 
**taxCollectionModel** | **String** | The tax collection model that is applied to the item.  Possible values:  * `MarketplaceFacilitator`: Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller. * `Standard`: Tax is paid to the seller and not remitted to the taxing authority by Amazon. | [optional] 
**fulfillmentNetworkSKU** | **String** | The Amazon fulfillment network SKU for the item. | [optional] 
**quantity** | **Number** | The quantity of the item. | [optional] 
**revenue** | [**Currency**](Currency.md) | The total amount paid to the seller for the removed item. | [optional] 
**feeAmount** | [**Currency**](Currency.md) | The fee that Amazon charged to the seller for the removal of the item. The amount is a negative number. | [optional] 
**taxAmount** | [**Currency**](Currency.md) | Tax collected on the revenue. | [optional] 
**taxWithheld** | [**Currency**](Currency.md) | The tax withheld and remitted to the taxing authority by Amazon on behalf of the seller. If `TaxCollectionModel` = `MarketplaceFacilitator`, then `TaxWithheld` = `TaxAmount` (except when the `TaxWithheld` amount is a negative number). Otherwise, `TaxWithheld` = `0`. | [optional] 


