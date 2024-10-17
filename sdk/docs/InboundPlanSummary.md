# TheSellingPartnerApiForFbaInboundOperations.InboundPlanSummary

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | The time at which the inbound plan was created. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`. | 
**inboundPlanId** | **String** | Identifier of an inbound plan. | 
**lastUpdatedAt** | **Date** | The time at which the inbound plan was last updated. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ssZ`. | 
**marketplaceIds** | **[String]** | A list of marketplace IDs. | 
**name** | **String** | Human-readable name of the inbound plan. | 
**sourceAddress** | [**Address**](Address.md) |  | 
**status** | **String** | The current status of the inbound plan. Possible values: `ACTIVE`, `VOIDED`, `SHIPPED`, `ERRORED`. | 


