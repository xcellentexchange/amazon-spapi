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
import {ChargeComponentList} from './ChargeComponentList.js';
import {Currency} from './Currency.js';
import {FeeComponentList} from './FeeComponentList.js';
import {ModelDate} from './ModelDate.js';
import {TaxWithheldComponentList} from './TaxWithheldComponentList.js';

/**
 * The RentalTransactionEvent model module.
 * @module financesV0/js-client.financesV0.model/RentalTransactionEvent
 * @version v0
 */
export class RentalTransactionEvent {
  /**
   * Constructs a new <code>RentalTransactionEvent</code>.
   * An event related to a rental transaction.
   * @alias module:financesV0/js-client.financesV0.model/RentalTransactionEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RentalTransactionEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/RentalTransactionEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/RentalTransactionEvent} The populated <code>RentalTransactionEvent</code> instance.
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
      obj = obj || new RentalTransactionEvent();
      if (data.hasOwnProperty('AmazonOrderId'))
        obj.amazonOrderId = ApiClient.convertToType(data['AmazonOrderId'], 'String');
      if (data.hasOwnProperty('RentalEventType'))
        obj.rentalEventType = ApiClient.convertToType(data['RentalEventType'], 'String');
      if (data.hasOwnProperty('ExtensionLength'))
        obj.extensionLength = ApiClient.convertToType(data['ExtensionLength'], 'Number');
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
      if (data.hasOwnProperty('RentalChargeList'))
        obj.rentalChargeList = ChargeComponentList.constructFromObject(data['RentalChargeList']);
      if (data.hasOwnProperty('RentalFeeList'))
        obj.rentalFeeList = FeeComponentList.constructFromObject(data['RentalFeeList']);
      if (data.hasOwnProperty('MarketplaceName'))
        obj.marketplaceName = ApiClient.convertToType(data['MarketplaceName'], 'String');
      if (data.hasOwnProperty('RentalInitialValue'))
        obj.rentalInitialValue = Currency.constructFromObject(data['RentalInitialValue']);
      if (data.hasOwnProperty('RentalReimbursement'))
        obj.rentalReimbursement = Currency.constructFromObject(data['RentalReimbursement']);
      if (data.hasOwnProperty('RentalTaxWithheldList'))
        obj.rentalTaxWithheldList = TaxWithheldComponentList.constructFromObject(data['RentalTaxWithheldList']);
    }
    return obj;
  }
}

/**
 * An Amazon-defined identifier for an order.
 * @member {String} amazonOrderId
 */
RentalTransactionEvent.prototype.amazonOrderId = undefined;

/**
 * The type of rental event.  Possible values:  * `RentalCustomerPayment-Buyout`: A transaction type that represents when the customer wants to buy out a rented item.  * `RentalCustomerPayment-Extension`: A transaction type that represents when the customer wants to extend the rental period.  * `RentalCustomerRefund-Buyout`: A transaction type that represents when the customer requests a refund for the buyout of the rented item.  * `RentalCustomerRefund-Extension`: A transaction type that represents when the customer requests a refund over the extension on the rented item.  * `RentalHandlingFee`: A transaction type that represents the fee that Amazon charges sellers who rent through Amazon.  * `RentalChargeFailureReimbursement`: A transaction type that represents when Amazon sends money to the seller to compensate for a failed charge.  * `RentalLostItemReimbursement`: A transaction type that represents when Amazon sends money to the seller to compensate for a lost item.
 * @member {String} rentalEventType
 */
RentalTransactionEvent.prototype.rentalEventType = undefined;

/**
 * The number of days that the buyer extended an already rented item. This value is only returned for `RentalCustomerPayment-Extension` and `RentalCustomerRefund-Extension` events.
 * @member {Number} extensionLength
 */
RentalTransactionEvent.prototype.extensionLength = undefined;

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
RentalTransactionEvent.prototype.postedDate = undefined;

/**
 * A list of charges associated with the rental event.
 * @member {module:financesV0/js-client.financesV0.model/ChargeComponentList} rentalChargeList
 */
RentalTransactionEvent.prototype.rentalChargeList = undefined;

/**
 * A list of fees associated with the rental event.
 * @member {module:financesV0/js-client.financesV0.model/FeeComponentList} rentalFeeList
 */
RentalTransactionEvent.prototype.rentalFeeList = undefined;

/**
 * The name of the marketplace.
 * @member {String} marketplaceName
 */
RentalTransactionEvent.prototype.marketplaceName = undefined;

/**
 * The amount of money that the customer originally paid to rent the item. This value is only returned for `RentalChargeFailureReimbursement` and `RentalLostItemReimbursement` events.
 * @member {module:financesV0/js-client.financesV0.model/Currency} rentalInitialValue
 */
RentalTransactionEvent.prototype.rentalInitialValue = undefined;

/**
 * The amount of money that Amazon sends the seller to compensate for a lost item or a failed charge. This value is only returned for `RentalChargeFailureReimbursement` and `RentalLostItemReimbursement` events.
 * @member {module:financesV0/js-client.financesV0.model/Currency} rentalReimbursement
 */
RentalTransactionEvent.prototype.rentalReimbursement = undefined;

/**
 * A list of taxes withheld information for a rental item.
 * @member {module:financesV0/js-client.financesV0.model/TaxWithheldComponentList} rentalTaxWithheldList
 */
RentalTransactionEvent.prototype.rentalTaxWithheldList = undefined;


