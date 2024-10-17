# SellingPartnerApiForOrders.UpdateVerificationStatusRequestBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VerificationStatus**](VerificationStatus.md) | The new verification status of the order. | [optional] 
**externalReviewerId** | **String** | The identifier of the order's regulated information reviewer. | 
**rejectionReasonId** | **String** | The unique identifier of the rejection reason used for rejecting the order's regulated information. Only required if the new status is rejected. | [optional] 
**verificationDetails** | [**VerificationDetails**](VerificationDetails.md) | Additional information regarding the verification of the order. | [optional] 


