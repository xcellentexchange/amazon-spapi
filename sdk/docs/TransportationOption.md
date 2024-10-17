# TheSellingPartnerApiForFbaInboundOperations.TransportationOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | [**Carrier**](Carrier.md) |  | 
**carrierAppointment** | [**CarrierAppointment**](CarrierAppointment.md) |  | [optional] 
**preconditions** | **[String]** | Identifies a list of preconditions for confirming the transportation option. | 
**quote** | [**Quote**](Quote.md) |  | [optional] 
**shipmentId** | **String** | Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
**shippingMode** | **String** | Mode of shipment transportation that this option will provide.  Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`, `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`, `AIR_SMALL_PARCEL_EXPRESS`. | 
**shippingSolution** | **String** | Shipping program for the option. Possible values: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`. | 
**transportationOptionId** | **String** | Identifier of a transportation option. A transportation option represent one option for how to send a shipment. | 


