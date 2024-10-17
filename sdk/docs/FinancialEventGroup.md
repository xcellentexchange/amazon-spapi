# SellingPartnerApiForFinances.FinancialEventGroup

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**financialEventGroupId** | **String** | A unique identifier for the financial event group. | [optional] 
**processingStatus** | **String** | The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * `Open` * `Closed` | [optional] 
**fundTransferStatus** | **String** | The status of the fund transfer. | [optional] 
**originalTotal** | [**Currency**](Currency.md) | The total amount in the currency of the marketplace in which the transactions occurred. For a closed financial group, this is the total amount of a disbursement or a charge amount. For an open financial event group, this is the current balance. | [optional] 
**convertedTotal** | [**Currency**](Currency.md) | The total amount in the currency of the marketplace in which the funds were disbursed. | [optional] 
**fundTransferDate** | [**ModelDate**](ModelDate.md) | The date and time when the disbursement or charge was initiated. Only present for closed settlements. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**traceId** | **String** | The trace identifier used by sellers to look up transactions externally. | [optional] 
**accountTail** | **String** | The account tail of the payment instrument. | [optional] 
**beginningBalance** | [**Currency**](Currency.md) | The balance at the start of the settlement period. | [optional] 
**financialEventGroupStart** | [**ModelDate**](ModelDate.md) | The date and time at which the financial event group is opened. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 
**financialEventGroupEnd** | [**ModelDate**](ModelDate.md) | The date and time at which the financial event group is closed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. | [optional] 


