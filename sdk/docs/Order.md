# SellingPartnerApiForRetailProcurementOrders.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**purchaseOrderState** | **String** | This field will contain the current state of the purchase order. | 
**orderDetails** | [**OrderDetails**](OrderDetails.md) | Details of an order. | [optional] 


<a name="PurchaseOrderStateEnum"></a>
## Enum: PurchaseOrderStateEnum


* `_new` (value: `"New"`)

* `acknowledged` (value: `"Acknowledged"`)

* `closed` (value: `"Closed"`)




