# SellingPartnerApiForReports.ReportSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportScheduleId** | **String** | The identifier for the report schedule. This identifier is unique only in combination with a seller ID. | 
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**marketplaceIds** | **[String]** | A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. | [optional] 
**reportOptions** | [**ReportOptions**](ReportOptions.md) |  | [optional] 
**period** | **String** | An <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> period value that indicates how often a report should be created. | 
**nextReportCreationTime** | **Date** | The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. | [optional] 


