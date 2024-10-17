# TheSellingPartnerApiForFbaInboundOperations.PackingOption

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**[Incentive]**](Incentive.md) | Discount for the offered option. | 
**expiration** | **Date** | The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`. | [optional] 
**fees** | [**[Incentive]**](Incentive.md) | Fee for the offered option. | 
**packingGroups** | **[String]** | Packing group IDs. | 
**packingOptionId** | **String** | Identifier of a packing option. | 
**status** | **String** | The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`. | 
**supportedShippingConfigurations** | [**[ShippingConfiguration]**](ShippingConfiguration.md) | List of supported shipping modes. | 


