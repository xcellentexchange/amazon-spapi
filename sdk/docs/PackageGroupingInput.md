# TheSellingPartnerApiForFbaInboundOperations.PackageGroupingInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxes** | [**[BoxInput]**](BoxInput.md) | Box level information being provided. | 
**packingGroupId** | **String** | The ID of the `packingGroup` that packages are grouped according to. The `PackingGroupId` can only be provided before placement confirmation, and it must belong to the confirmed `PackingOption`. One of `ShipmentId` or `PackingGroupId` must be provided with every request. | [optional] 
**shipmentId** | **String** | The ID of the shipment that packages are grouped according to. The `ShipmentId` can only be provided after placement confirmation, and the shipment must belong to the confirmed placement option. One of `ShipmentId` or `PackingGroupId` must be provided with every request. | [optional] 


