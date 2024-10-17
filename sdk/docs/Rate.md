# AmazonShippingApi.Rate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateId** | [**RateId**](RateId.md) |  | 
**carrierId** | [**CarrierId**](CarrierId.md) |  | 
**carrierName** | [**CarrierName**](CarrierName.md) |  | 
**serviceId** | [**ServiceId**](ServiceId.md) |  | 
**serviceName** | [**ServiceName**](ServiceName.md) |  | 
**billedWeight** | [**Weight**](Weight.md) |  | [optional] 
**totalCharge** | [**Currency**](Currency.md) |  | 
**promise** | [**Promise**](Promise.md) |  | 
**supportedDocumentSpecifications** | [**SupportedDocumentSpecificationList**](SupportedDocumentSpecificationList.md) |  | 
**availableValueAddedServiceGroups** | [**AvailableValueAddedServiceGroupList**](AvailableValueAddedServiceGroupList.md) |  | [optional] 
**requiresAdditionalInputs** | **Boolean** | When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. | 
**rateItemList** | [**RateItemList**](RateItemList.md) |  | [optional] 
**paymentType** | [**PaymentType**](PaymentType.md) |  | [optional] 
**benefits** | [**Benefits**](Benefits.md) |  | [optional] 


