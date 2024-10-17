# SellingPartnerApiForReports.CreateReportScheduleSpecification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reportType** | **String** | The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. | 
**marketplaceIds** | **[String]** | A list of marketplace identifiers for the report schedule. | 
**reportOptions** | [**ReportOptions**](ReportOptions.md) |  | [optional] 
**period** | **String** | One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created. | 
**nextReportCreationTime** | **Date** | The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format. | [optional] 


<a name="PeriodEnum"></a>
## Enum: PeriodEnum


* `pT5M` (value: `"PT5M"`)

* `pT15M` (value: `"PT15M"`)

* `pT30M` (value: `"PT30M"`)

* `pT1H` (value: `"PT1H"`)

* `pT2H` (value: `"PT2H"`)

* `pT4H` (value: `"PT4H"`)

* `pT8H` (value: `"PT8H"`)

* `pT12H` (value: `"PT12H"`)

* `p1D` (value: `"P1D"`)

* `p2D` (value: `"P2D"`)

* `p3D` (value: `"P3D"`)

* `pT84H` (value: `"PT84H"`)

* `p7D` (value: `"P7D"`)

* `p14D` (value: `"P14D"`)

* `p15D` (value: `"P15D"`)

* `p18D` (value: `"P18D"`)

* `p30D` (value: `"P30D"`)

* `p1M` (value: `"P1M"`)




