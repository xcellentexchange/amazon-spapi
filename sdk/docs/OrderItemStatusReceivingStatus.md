# SellingPartnerApiForRetailProcurementOrders.OrderItemStatusReceivingStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receiveStatus** | **String** | Receive status of the line item. | [optional] 
**receivedQuantity** | [**ItemQuantity**](ItemQuantity.md) | The total item quantity received by the buyer so far. | [optional] 
**lastReceiveDate** | **Date** | The date when the most recent item was received at the buyer's warehouse. Must be in ISO-8601 date/time format. | [optional] 


<a name="ReceiveStatusEnum"></a>
## Enum: ReceiveStatusEnum


* `NOT_RECEIVED` (value: `"NOT_RECEIVED"`)

* `PARTIALLY_RECEIVED` (value: `"PARTIALLY_RECEIVED"`)

* `RECEIVED` (value: `"RECEIVED"`)




