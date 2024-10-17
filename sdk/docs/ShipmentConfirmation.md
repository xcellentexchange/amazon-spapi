# SellingPartnerApiForRetailProcurementShipments.ShipmentConfirmation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentIdentifier** | **String** | Unique shipment ID (not used over the last 365 days). | 
**shipmentConfirmationType** | **String** | Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation. | 
**shipmentType** | **String** | The type of shipment. | [optional] 
**shipmentStructure** | **String** | Shipment hierarchical structure. | [optional] 
**transportationDetails** | [**TransportationDetailsForShipmentConfirmation**](TransportationDetailsForShipmentConfirmation.md) | Transportation details for this shipment. | [optional] 
**amazonReferenceNumber** | **String** | The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments. | [optional] 
**shipmentConfirmationDate** | **Date** | Date on which the shipment confirmation was submitted. | 
**shippedDate** | **Date** | The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future. | [optional] 
**estimatedDeliveryDate** | **Date** | The date and time on which the shipment is estimated to reach buyer's warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation. | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the selling party. | 
**shipFromParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address and tax details of the ship from party. | 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) | Name/Address of the destination warehouse where the shipment is being shipped to. | 
**shipmentMeasurements** | [**ShipmentMeasurements**](ShipmentMeasurements.md) |  | [optional] 
**importDetails** | [**ImportDetails**](ImportDetails.md) | Provide these fields only if this shipment is a direct import. | [optional] 
**shippedItems** | [**[Item]**](Item.md) | A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level. | 
**cartons** | [**[Carton]**](Carton.md) | A list of the cartons in this shipment. | [optional] 
**pallets** | [**[Pallet]**](Pallet.md) | A list of the pallets in this shipment. | [optional] 


<a name="ShipmentConfirmationTypeEnum"></a>
## Enum: ShipmentConfirmationTypeEnum


* `original` (value: `"Original"`)

* `replace` (value: `"Replace"`)




<a name="ShipmentTypeEnum"></a>
## Enum: ShipmentTypeEnum


* `truckLoad` (value: `"TruckLoad"`)

* `lessThanTruckLoad` (value: `"LessThanTruckLoad"`)

* `smallParcel` (value: `"SmallParcel"`)




<a name="ShipmentStructureEnum"></a>
## Enum: ShipmentStructureEnum


* `palletizedAssortmentCase` (value: `"PalletizedAssortmentCase"`)

* `looseAssortmentCase` (value: `"LooseAssortmentCase"`)

* `palletOfItems` (value: `"PalletOfItems"`)

* `palletizedStandardCase` (value: `"PalletizedStandardCase"`)

* `looseStandardCase` (value: `"LooseStandardCase"`)

* `masterPallet` (value: `"MasterPallet"`)

* `masterCase` (value: `"MasterCase"`)



