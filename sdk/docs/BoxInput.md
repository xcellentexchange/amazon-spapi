# TheSellingPartnerApiForFbaInboundOperations.BoxInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentInformationSource** | [**BoxContentInformationSource**](BoxContentInformationSource.md) |  | 
**dimensions** | [**Dimensions**](Dimensions.md) |  | 
**items** | [**[ItemInput]**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`. | [optional] 
**quantity** | **Number** | The number of containers where all other properties like weight or dimensions are identical. | 
**weight** | [**Weight**](Weight.md) |  | 


