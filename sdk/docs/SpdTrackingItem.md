# TheSellingPartnerApiForFbaInboundOperations.SpdTrackingItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxId** | **String** | The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box. | [optional] 
**trackingId** | **String** | The tracking ID associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. | [optional] 
**trackingNumberValidationStatus** | **String** | Whether or not Amazon has validated the tracking number. If more than 24 hours have passed and the status is not yet 'VALIDATED', please verify the number and update if necessary. Possible values: `VALIDATED`, `NOT_VALIDATED`. | [optional] 


