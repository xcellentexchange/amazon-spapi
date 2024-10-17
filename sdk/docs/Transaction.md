# SellingPartnerApiForRetailProcurementTransactionStatus.Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The unique identifier returned in the 'transactionId' field in response to the post request of a specific transaction. | 
**status** | **String** | Current processing status of the transaction. | 
**errors** | [**ErrorList**](ErrorList.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `failure` (value: `"Failure"`)

* `processing` (value: `"Processing"`)

* `success` (value: `"Success"`)




