# SellingPartnerApiForRetailProcurementShipments.PackageItemDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The purchase order number for the shipment being confirmed. If the items in this shipment belong to multiple purchase order numbers that are in particular carton or pallet within the shipment, then provide the purchaseOrderNumber at the appropriate carton or pallet level. Formatting Notes: 8-character alpha-numeric code. | [optional] 
**lotNumber** | **String** | The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the Element String is applied. The data may refer to the trade item itself or to items contained. This field is mandatory for all perishable items. | [optional] 
**expiry** | [**Expiry**](Expiry.md) | Either expiryDate or mfgDate and expiryAfterDuration are mandatory for perishable items. | [optional] 


