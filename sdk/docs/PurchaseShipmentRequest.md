# AmazonShippingApi.PurchaseShipmentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestToken** | [**RequestToken**](RequestToken.md) |  | 
**rateId** | [**RateId**](RateId.md) |  | 
**requestedDocumentSpecification** | [**RequestedDocumentSpecification**](RequestedDocumentSpecification.md) |  | 
**requestedValueAddedServices** | [**RequestedValueAddedServiceList**](RequestedValueAddedServiceList.md) |  | [optional] 
**additionalInputs** | **{String: Object}** | The additional inputs required to purchase a shipping offering, in JSON format. The JSON provided here must adhere to the JSON schema that is returned in the response to the getAdditionalInputs operation.  Additional inputs are only required when indicated by the requiresAdditionalInputs property in the response to the getRates operation. | [optional] 


