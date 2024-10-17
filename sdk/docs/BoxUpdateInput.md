# TheSellingPartnerApiForFbaInboundOperations.BoxUpdateInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentInformationSource** | [**BoxContentInformationSource**](BoxContentInformationSource.md) |  | 
**dimensions** | [**Dimensions**](Dimensions.md) |  | 
**items** | [**[ItemInput]**](ItemInput.md) | The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`. | [optional] 
**packageId** | **String** | Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed | [optional] 
**quantity** | **Number** | The number of containers where all other properties like weight or dimensions are identical. | 
**weight** | [**Weight**](Weight.md) |  | 


