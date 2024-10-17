/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information that is relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range. 
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.29
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';
import {Currency} from './Currency.js';

/**
 * The ChargeComponent model module.
 * @module financesV0/js-client.financesV0.model/ChargeComponent
 * @version v0
 */
export class ChargeComponent {
  /**
   * Constructs a new <code>ChargeComponent</code>.
   * A charge on the seller's account.  Possible values:  * `Principal`: The selling price of the order item, which is equal to the selling price of the item multiplied by the quantity ordered.  * `Tax`: The tax on the principal that is collected by the seller.  * `MarketplaceFacilitatorTax-Principal`: The tax that is withheld on the principal.  * `MarketplaceFacilitatorTax-Shipping`: The tax that is withheld on the `ShippingCharge`.  * `MarketplaceFacilitatorTax-Giftwrap`: The tax that is withheld on the Giftwrap charge.  * `MarketplaceFacilitatorTax-Other`: The tax that is withheld on other miscellaneous charges.  * `Discount`: The promotional discount for an order item.  * `TaxDiscount`: The tax that is deducted for promotional rebates.  * `CODItemCharge`: The COD charge for an order item.  * `CODItemTaxCharge`: The tax that is collected by the seller on a `CODItemCharge`.  * `CODOrderCharge`: The COD charge for an order.  * `CODOrderTaxCharge`: The tax that is collected by the seller on a `CODOrderCharge`.  * `CODShippingCharge`: Shipping charges for a COD order.  * `CODShippingTaxCharge`: The tax that is collected by the seller on a `CODShippingCharge`.  * `ShippingCharge`: The shipping charge.  * `ShippingTax`: The tax that is collected by the seller on a `ShippingCharge`.  * `Goodwill`: The amount of money that is given to a buyer as a gesture of goodwill or to compensate for pain and suffering in the buying experience.  * `Giftwrap`: The gift wrap charge.  * `GiftwrapTax`: The tax that is collected by the seller on a gift wrap charge.  * `RestockingFee`: The charge that is applied to the buyer when returning a product in certain categories.  * `ReturnShipping`: The amount of money that is given to the buyer to compensate for shipping the item back if we are at fault.  * `PointsFee`: The value of Amazon Points deducted from the refund if the buyer does not have enough Amazon Points to cover the deduction.  * `GenericDeduction`: A generic bad debt deduction.  * `FreeReplacementReturnShipping`: The compensation for return shipping when a buyer receives the wrong item, requests a free replacement, and returns the incorrect item.  * `PaymentMethodFee`: The fee that is collected for certain payment methods in certain marketplaces.  * `ExportCharge`: The export duty that is charged when an item is shipped to an international destination as part of the Amazon Global program.  * `SAFE-TReimbursement`: The SAFE-T claim amount for the item.  * `TCS-CGST`: Tax Collected at Source (TCS) for Central Goods and Services Tax (CGST).  * `TCS-SGST`: Tax Collected at Source for State Goods and Services Tax (SGST).  * `TCS-IGST`: Tax Collected at Source for Integrated Goods and Services Tax (IGST).  * `TCS-UTGST`: Tax Collected at Source for Union Territories Goods and Services Tax (UTGST).
   * @alias module:financesV0/js-client.financesV0.model/ChargeComponent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChargeComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/ChargeComponent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/ChargeComponent} The populated <code>ChargeComponent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      switch(typeof data) {
        case 'string':
          obj = String(data);
          break;
        case 'number':
          obj = Number(data);
          break;
        case 'boolean':
          obj = Boolean(data);
          break;
      }
      obj = obj || new ChargeComponent();
      if (data.hasOwnProperty('ChargeType'))
        obj.chargeType = ApiClient.convertToType(data['ChargeType'], 'String');
      if (data.hasOwnProperty('ChargeAmount'))
        obj.chargeAmount = Currency.constructFromObject(data['ChargeAmount']);
    }
    return obj;
  }
}

/**
 * The type of charge.
 * @member {String} chargeType
 */
ChargeComponent.prototype.chargeType = undefined;

/**
 * The amount of the charge.
 * @member {module:financesV0/js-client.financesV0.model/Currency} chargeAmount
 */
ChargeComponent.prototype.chargeAmount = undefined;

