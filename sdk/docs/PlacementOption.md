# TheSellingPartnerApiForFbaInboundOperations.PlacementOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**[Incentive]**](Incentive.md) | Discount for the offered option. | 
**expiration** | **Date** | The expiration date of the placement option. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`. | [optional] 
**fees** | [**[Incentive]**](Incentive.md) | The fee for the offered option. | 
**placementOptionId** | **String** | The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs. | 
**shipmentIds** | **[String]** | Shipment ids. | 
**status** | **String** | The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`. | 


