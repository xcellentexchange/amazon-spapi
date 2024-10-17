/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
import {RejectionReason} from './RejectionReason.js';
import {ValidVerificationDetail} from './ValidVerificationDetail.js';
import {VerificationStatus} from './VerificationStatus.js';

/**
 * The RegulatedOrderVerificationStatus model module.
 * @module ordersV0/js-client.ordersV0.model/RegulatedOrderVerificationStatus
 * @version v0
 */
export class RegulatedOrderVerificationStatus {
  /**
   * Constructs a new <code>RegulatedOrderVerificationStatus</code>.
   * The verification status of the order, along with associated approval or rejection metadata.
   * @alias module:ordersV0/js-client.ordersV0.model/RegulatedOrderVerificationStatus
   * @class
   * @param status {module:ordersV0/js-client.ordersV0.model/VerificationStatus} The verification status of the order.
   * @param requiresMerchantAction {Boolean} When true, the regulated information provided in the order requires a review by the merchant.
   * @param validRejectionReasons {Array.<module:ordersV0/js-client.ordersV0.model/RejectionReason>} A list of valid rejection reasons that may be used to reject the order's regulated information.
   */
  constructor(status, requiresMerchantAction, validRejectionReasons) {
    this.status = status;
    this.requiresMerchantAction = requiresMerchantAction;
    this.validRejectionReasons = validRejectionReasons;
  }

  /**
   * Constructs a <code>RegulatedOrderVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ordersV0/js-client.ordersV0.model/RegulatedOrderVerificationStatus} obj Optional instance to populate.
   * @return {module:ordersV0/js-client.ordersV0.model/RegulatedOrderVerificationStatus} The populated <code>RegulatedOrderVerificationStatus</code> instance.
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
      obj = obj || new RegulatedOrderVerificationStatus();
      if (data.hasOwnProperty('Status'))
        obj.status = VerificationStatus.constructFromObject(data['Status']);
      if (data.hasOwnProperty('RequiresMerchantAction'))
        obj.requiresMerchantAction = ApiClient.convertToType(data['RequiresMerchantAction'], 'Boolean');
      if (data.hasOwnProperty('ValidRejectionReasons'))
        obj.validRejectionReasons = ApiClient.convertToType(data['ValidRejectionReasons'], [RejectionReason]);
      if (data.hasOwnProperty('RejectionReason'))
        obj.rejectionReason = RejectionReason.constructFromObject(data['RejectionReason']);
      if (data.hasOwnProperty('ReviewDate'))
        obj.reviewDate = ApiClient.convertToType(data['ReviewDate'], 'String');
      if (data.hasOwnProperty('ExternalReviewerId'))
        obj.externalReviewerId = ApiClient.convertToType(data['ExternalReviewerId'], 'String');
      if (data.hasOwnProperty('ValidVerificationDetails'))
        obj.validVerificationDetails = ApiClient.convertToType(data['ValidVerificationDetails'], [ValidVerificationDetail]);
    }
    return obj;
  }
}

/**
 * The verification status of the order.
 * @member {module:ordersV0/js-client.ordersV0.model/VerificationStatus} status
 */
RegulatedOrderVerificationStatus.prototype.status = undefined;

/**
 * When true, the regulated information provided in the order requires a review by the merchant.
 * @member {Boolean} requiresMerchantAction
 */
RegulatedOrderVerificationStatus.prototype.requiresMerchantAction = undefined;

/**
 * A list of valid rejection reasons that may be used to reject the order's regulated information.
 * @member {Array.<module:ordersV0/js-client.ordersV0.model/RejectionReason>} validRejectionReasons
 */
RegulatedOrderVerificationStatus.prototype.validRejectionReasons = undefined;

/**
 * The reason for rejecting the order's regulated information. Not present if the order isn't rejected.
 * @member {module:ordersV0/js-client.ordersV0.model/RejectionReason} rejectionReason
 */
RegulatedOrderVerificationStatus.prototype.rejectionReason = undefined;

/**
 * The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
 * @member {String} reviewDate
 */
RegulatedOrderVerificationStatus.prototype.reviewDate = undefined;

/**
 * The identifier for the order's regulated information reviewer.
 * @member {String} externalReviewerId
 */
RegulatedOrderVerificationStatus.prototype.externalReviewerId = undefined;

/**
 * A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided.
 * @member {Array.<module:ordersV0/js-client.ordersV0.model/ValidVerificationDetail>} validVerificationDetails
 */
RegulatedOrderVerificationStatus.prototype.validVerificationDetails = undefined;


