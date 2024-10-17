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
import {ModelDate} from './ModelDate.js';

/**
 * The FailedAdhocDisbursementEvent model module.
 * @module financesV0/js-client.financesV0.model/FailedAdhocDisbursementEvent
 * @version v0
 */
export class FailedAdhocDisbursementEvent {
  /**
   * Constructs a new <code>FailedAdhocDisbursementEvent</code>.
   * Failed ad hoc disbursement event list.
   * @alias module:financesV0/js-client.financesV0.model/FailedAdhocDisbursementEvent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FailedAdhocDisbursementEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:financesV0/js-client.financesV0.model/FailedAdhocDisbursementEvent} obj Optional instance to populate.
   * @return {module:financesV0/js-client.financesV0.model/FailedAdhocDisbursementEvent} The populated <code>FailedAdhocDisbursementEvent</code> instance.
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
      obj = obj || new FailedAdhocDisbursementEvent();
      if (data.hasOwnProperty('FundsTransfersType'))
        obj.fundsTransfersType = ApiClient.convertToType(data['FundsTransfersType'], 'String');
      if (data.hasOwnProperty('TransferId'))
        obj.transferId = ApiClient.convertToType(data['TransferId'], 'String');
      if (data.hasOwnProperty('DisbursementId'))
        obj.disbursementId = ApiClient.convertToType(data['DisbursementId'], 'String');
      if (data.hasOwnProperty('PaymentDisbursementType'))
        obj.paymentDisbursementType = ApiClient.convertToType(data['PaymentDisbursementType'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('TransferAmount'))
        obj.transferAmount = Currency.constructFromObject(data['TransferAmount']);
      if (data.hasOwnProperty('PostedDate'))
        obj.postedDate = ModelDate.constructFromObject(data['PostedDate']);
    }
    return obj;
  }
}

/**
 * The type of fund transfer. For example, `Refund`.
 * @member {String} fundsTransfersType
 */
FailedAdhocDisbursementEvent.prototype.fundsTransfersType = undefined;

/**
 * The transfer identifier.
 * @member {String} transferId
 */
FailedAdhocDisbursementEvent.prototype.transferId = undefined;

/**
 * The disbursement identifier.
 * @member {String} disbursementId
 */
FailedAdhocDisbursementEvent.prototype.disbursementId = undefined;

/**
 * The type of payment for disbursement. For example, `CREDIT_CARD`.
 * @member {String} paymentDisbursementType
 */
FailedAdhocDisbursementEvent.prototype.paymentDisbursementType = undefined;

/**
 * The status of the failed `AdhocDisbursement`. For example, `HARD_DECLINED`.
 * @member {String} status
 */
FailedAdhocDisbursementEvent.prototype.status = undefined;

/**
 * The amount of the Adhoc Disbursement.
 * @member {module:financesV0/js-client.financesV0.model/Currency} transferAmount
 */
FailedAdhocDisbursementEvent.prototype.transferAmount = undefined;

/**
 * The date and time when the financial event was posted.
 * @member {module:financesV0/js-client.financesV0.model/ModelDate} postedDate
 */
FailedAdhocDisbursementEvent.prototype.postedDate = undefined;


