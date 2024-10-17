# SellingPartnerApiForOrders.ValidVerificationDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verificationDetailType** | **String** | A supported type of verification detail. The type indicates which verification detail could be shared while updating the regulated order. Valid value: `prescriptionDetail`. | 
**validVerificationStatuses** | [**[VerificationStatus]**](VerificationStatus.md) | A list of valid verification statuses where the associated verification detail type may be provided. For example, if the value of this field is [\"Approved\"], calls to provide the associated verification detail will fail for orders with a `VerificationStatus` of `Pending`, `Rejected`, `Expired`, or `Cancelled`. | 


