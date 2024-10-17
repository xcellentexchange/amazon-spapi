# TheSellingPartnerApiForFbaInboundOperations.ShipmentDestination

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The address the shipment should be sent to. Empty if the destination type is `AMAZON_OPTIMIZED`. | [optional] 
**destinationType** | **String** | The type of destination for this shipment. Possible values: `AMAZON_OPTIMIZED`, `AMAZON_WAREHOUSE`. | 
**warehouseId** | **String** | The warehouse that the shipment should be sent to. Empty if the destination type is `AMAZON_OPTIMIZED`. | [optional] 


