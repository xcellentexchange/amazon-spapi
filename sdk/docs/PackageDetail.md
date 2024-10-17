# SellingPartnerApiForOrders.PackageDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageReferenceId** | [**PackageReferenceId**](PackageReferenceId.md) |  | 
**carrierCode** | **String** | Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [`CarrierCode` announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces). | 
**carrierName** | **String** | Carrier Name that will deliver the package. Required when `carrierCode` is \"Others\"  | [optional] 
**shippingMethod** | **String** | Ship method to be used for shipping the order. | [optional] 
**trackingNumber** | **String** | The tracking number used to obtain tracking and delivery information. | 
**shipDate** | **Date** | The shipping date for the package. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format. | 
**shipFromSupplySourceId** | **String** | The unique identifier for the supply source. | [optional] 
**orderItems** | [**ConfirmShipmentOrderItemsList**](ConfirmShipmentOrderItemsList.md) | The list of order items and quantities to be updated. | 


