# TheSellingPartnerApiForInvoices.ModelExport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorMessage** | **String** | When the export generation fails, this attribute contains a description of the error. | [optional] 
**exportId** | **String** | The export identifier. | [optional] 
**generateExportFinishedAt** | **Date** | The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**generateExportStartedAt** | **Date** | The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**invoicesDocumentIds** | **[String]** | The identifier for the export documents. To get the information required to retrieve the export document's contents, pass each ID in the `getInvoicesDocument` operation.  This list is empty until the status is `DONE`. | [optional] 
**status** | [**ExportStatus**](ExportStatus.md) |  | [optional] 


