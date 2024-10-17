# SellingPartnerApiForFulfillmentInbound.PartneredLtlDataInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) | Contact information for the person in the seller's organization who is responsible for the shipment. Used by the carrier if they have questions about the shipment. | [optional] 
**boxCount** | [**UnsignedIntType**](UnsignedIntType.md) | The number of boxes in the shipment. | [optional] 
**sellerFreightClass** | [**SellerFreightClass**](SellerFreightClass.md) |  | [optional] 
**freightReadyDate** | [**DateStringType**](DateStringType.md) | The date on which the shipment is ready for carrier pickup. Must be in YYYY-MM-DD format. | [optional] 
**palletList** | [**PalletList**](PalletList.md) |  | [optional] 
**totalWeight** | [**Weight**](Weight.md) | The total weight of the shipment. | [optional] 
**sellerDeclaredValue** | [**Amount**](Amount.md) | The declaration of the total value of the inventory in the shipment. | [optional] 


