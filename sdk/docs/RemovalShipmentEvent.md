# SellingPartnerApiForFinances.RemovalShipmentEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | [**ModelDate**](ModelDate.md) | The date and time when the financial event was posted. | [optional] 
**merchantOrderId** | **String** | The merchant removal `orderId`. | [optional] 
**orderId** | **String** | The identifier for the removal shipment order. | [optional] 
**transactionType** | **String** | The type of removal order.  Possible values:  * `WHOLESALE_LIQUIDATION` | [optional] 
**storeName** | **String** | The name of the store where the event occurred. | [optional] 
**removalShipmentItemList** | [**RemovalShipmentItemList**](RemovalShipmentItemList.md) | A list of removal shipment items. | [optional] 


