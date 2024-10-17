# SellingPartnerApiForRetailProcurementOrders.OrderItemStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemSequenceNumber** | **String** | Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. | 
**buyerProductIdentifier** | **String** | Buyer's Standard Identification Number (ASIN) of an item. | [optional] 
**vendorProductIdentifier** | **String** | The vendor selected product identification of the item. | [optional] 
**netCost** | [**Money**](Money.md) | The net cost of an item per each or weight unit. | [optional] 
**listPrice** | [**Money**](Money.md) | The list price of an item per each or weight unit. | [optional] 
**orderedQuantity** | [**OrderItemStatusOrderedQuantity**](OrderItemStatusOrderedQuantity.md) |  | [optional] 
**acknowledgementStatus** | [**OrderItemStatusAcknowledgementStatus**](OrderItemStatusAcknowledgementStatus.md) |  | [optional] 
**receivingStatus** | [**OrderItemStatusReceivingStatus**](OrderItemStatusReceivingStatus.md) |  | [optional] 


