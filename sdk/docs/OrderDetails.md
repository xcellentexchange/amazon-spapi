# SellingPartnerApiForRetailProcurementOrders.OrderDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderDate** | **Date** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**purchaseOrderChangedDate** | **Date** | The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than 'purchaseOrderDate'. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format. | [optional] 
**purchaseOrderStateChangedDate** | **Date** | The date when current purchase order state was changed. Current purchase order state is available in the field 'purchaseOrderState'. Must be in ISO-8601 date/time format. | 
**purchaseOrderType** | **String** | Type of purchase order. | [optional] 
**importDetails** | [**ImportDetails**](ImportDetails.md) | If the purchase order is an import order, the details for the import order. | [optional] 
**dealCode** | **String** | If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order. | [optional] 
**paymentMethod** | **String** | Payment method used. | [optional] 
**buyingParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the buying party. | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the selling party. | [optional] 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the ship to party. Find a list of fulfillment center addresses for a region on the [Resources page of Amazon Vendor Central](https://vendorcentral.amazon.com/hz/vendor/members/support/help/node/GPZ88XH8HQM97ZV6). | [optional] 
**billToParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the bill to party. | [optional] 
**shipWindow** | [**DateTimeInterval**](DateTimeInterval.md) | This indicates the ship window. Format is start and end date separated by double hyphen (--). For example, 2007-03-01T13:00:00Z--2007-03-11T15:30:00Z. | [optional] 
**deliveryWindow** | [**DateTimeInterval**](DateTimeInterval.md) | This indicates the delivery window. Format is start and end date separated by double hyphen (--). For example, 2007-03-01T13:00:00Z--2007-03-11T15:30:00Z. | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | A list of items in this purchase order. | 


<a name="PurchaseOrderTypeEnum"></a>
## Enum: PurchaseOrderTypeEnum


* `regularOrder` (value: `"RegularOrder"`)

* `consignedOrder` (value: `"ConsignedOrder"`)

* `newProductIntroduction` (value: `"NewProductIntroduction"`)

* `rushOrder` (value: `"RushOrder"`)




<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum


* `invoice` (value: `"Invoice"`)

* `consignment` (value: `"Consignment"`)

* `creditCard` (value: `"CreditCard"`)

* `prepaid` (value: `"Prepaid"`)




