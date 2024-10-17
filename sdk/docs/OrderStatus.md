# SellingPartnerApiForRetailProcurementOrders.OrderStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The buyer's purchase order number for this order. Formatting Notes: 8-character alpha-numeric code. | 
**purchaseOrderStatus** | **String** | The status of the buyer's purchase order for this order. | 
**purchaseOrderDate** | **Date** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**lastUpdatedDate** | **Date** | The date when the purchase order was last updated. Must be in ISO-8601 date/time format. | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the selling party. | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the ship to party. Find a list of fulfillment center addresses for a region on the [Resources page of Amazon Vendor Central](https://vendorcentral.amazon.com/hz/vendor/members/support/help/node/GPZ88XH8HQM97ZV6). | 
**itemStatus** | [**ItemStatus**](ItemStatus.md) | Detailed order status. | 


<a name="PurchaseOrderStatusEnum"></a>
## Enum: PurchaseOrderStatusEnum


* `OPEN` (value: `"OPEN"`)

* `CLOSED` (value: `"CLOSED"`)




