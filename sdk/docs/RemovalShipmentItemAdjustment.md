# SellingPartnerApiForFinances.RemovalShipmentItemAdjustment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**removalShipmentItemId** | **String** | An identifier for an item in a removal shipment. | [optional] 
**taxCollectionModel** | **String** | The tax collection model that is applied to the item.  Possible values:  * `MarketplaceFacilitator`: Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller. * `Standard`: Tax is paid to the seller and not remitted to the taxing authority by Amazon. | [optional] 
**fulfillmentNetworkSKU** | **String** | The Amazon fulfillment network SKU for the item. | [optional] 
**adjustedQuantity** | **Number** | Adjusted quantity of `RemovalShipmentItemAdjustment` items. | [optional] 
**revenueAdjustment** | [**Currency**](Currency.md) | The total amount adjusted for disputed items. | [optional] 
**taxAmountAdjustment** | [**Currency**](Currency.md) | Adjustment on the tax collected amount on the adjusted revenue. | [optional] 
**taxWithheldAdjustment** | [**Currency**](Currency.md) | Adjustment of the tax that is withheld and remitted to the taxing authority by Amazon on behalf of the seller. If `TaxCollectionModel` = `MarketplaceFacilitator`, then `TaxWithheld` = `TaxAmount` (except when the `TaxWithheld` amount is a negative number). Otherwise, `TaxWithheld` = `0`. | [optional] 


