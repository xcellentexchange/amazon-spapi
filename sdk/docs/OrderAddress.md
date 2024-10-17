# SellingPartnerApiForOrders.OrderAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined order identifier, in 3-7-7 format. | 
**buyerCompanyName** | **String** | The company name of the contact buyer. For IBA orders, the buyer company must be Amazon entities. | [optional] 
**shippingAddress** | [**Address**](Address.md) | The shipping address for the order.  **Note**: `ShippingAddress` is only available for orders with the following status values: `Unshipped`, `PartiallyShipped`, `Shipped`, and `InvoiceUnconfirmed`. | [optional] 
**deliveryPreferences** | [**DeliveryPreferences**](DeliveryPreferences.md) |  | [optional] 


