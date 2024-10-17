/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
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
import {AmazonPayContext} from './AmazonPayContext.js';
import {DeferredContext} from './DeferredContext.js';
import {ModelDate} from './ModelDate.js';
import {PaymentsContext} from './PaymentsContext.js';
import {ProductContext} from './ProductContext.js';

/**
 * The Context model module.
 * @module finances_2024-06-19/js-client.finances_2024-06-19.model/Context
 * @version 2024-06-19
 */
export class Context {
  /**
   * Constructs a new <code>Context</code>.
   * Additional Information about the item.
   * @alias module:finances_2024-06-19/js-client.finances_2024-06-19.model/Context
   * @class
   * @implements module:finances_2024-06-19/js-client.finances_2024-06-19.model/AmazonPayContext
   * @implements module:finances_2024-06-19/js-client.finances_2024-06-19.model/ProductContext
   * @implements module:finances_2024-06-19/js-client.finances_2024-06-19.model/PaymentsContext
   * @implements module:finances_2024-06-19/js-client.finances_2024-06-19.model/DeferredContext
   */
  constructor() {
    AmazonPayContext.call(this);
    ProductContext.call(this);
    PaymentsContext.call(this);
    DeferredContext.call(this);
  }

  /**
   * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Context} obj Optional instance to populate.
   * @return {module:finances_2024-06-19/js-client.finances_2024-06-19.model/Context} The populated <code>Context</code> instance.
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
      obj = obj || new Context();
      AmazonPayContext.constructFromObject(data, obj);
      ProductContext.constructFromObject(data, obj);
      PaymentsContext.constructFromObject(data, obj);
      DeferredContext.constructFromObject(data, obj);
      if (data.hasOwnProperty('startTime'))
        obj.startTime = ModelDate.constructFromObject(data['startTime']);
      if (data.hasOwnProperty('endTime'))
        obj.endTime = ModelDate.constructFromObject(data['endTime']);
    }
    return obj;
  }
}

/**
 * The start time of the transaction.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/ModelDate} startTime
 */
Context.prototype.startTime = undefined;

/**
 * The end time of the transaction.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/ModelDate} endTime
 */
Context.prototype.endTime = undefined;

// Implement AmazonPayContext interface:
/**
 * The name of the store that is related to the transaction.
 * @member {String} storeName
 */
AmazonPayContext.prototype.storeName = undefined;

/**
 * The transaction's order type.
 * @member {String} orderType
 */
AmazonPayContext.prototype.orderType = undefined;

/**
 * Channel details of related transaction.
 * @member {String} channel
 */
AmazonPayContext.prototype.channel = undefined;

// Implement ProductContext interface:
/**
 * The Amazon Standard Identification Number (ASIN) of the item.
 * @member {String} asin
 */
ProductContext.prototype.asin = undefined;

/**
 * The Stock Keeping Unit (SKU) of the item.
 * @member {String} sku
 */
ProductContext.prototype.sku = undefined;

/**
 * The quantity of the item shipped.
 * @member {Number} quantityShipped
 */
ProductContext.prototype.quantityShipped = undefined;

/**
 * The fulfillment network of the item.
 * @member {String} fulfillmentNetwork
 */
ProductContext.prototype.fulfillmentNetwork = undefined;

// Implement PaymentsContext interface:
/**
 * The type of payment.
 * @member {String} paymentType
 */
PaymentsContext.prototype.paymentType = undefined;

/**
 * The method of payment.
 * @member {String} paymentMethod
 */
PaymentsContext.prototype.paymentMethod = undefined;

/**
 * The reference number of the payment.
 * @member {String} paymentReference
 */
PaymentsContext.prototype.paymentReference = undefined;

/**
 * The date of the payment.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/ModelDate} paymentDate
 */
PaymentsContext.prototype.paymentDate = undefined;

// Implement DeferredContext interface:
/**
 * Deferral policy applied on the transaction.  **Examples:** `B2B`,`DD7`
 * @member {String} deferralReason
 */
DeferredContext.prototype.deferralReason = undefined;

/**
 * The release date of the transaction.
 * @member {module:finances_2024-06-19/js-client.finances_2024-06-19.model/ModelDate} maturityDate
 */
DeferredContext.prototype.maturityDate = undefined;

/**
 * The status of the transaction. For example, `HOLD`,`RELEASE`.
 * @member {String} deferralStatus
 */
DeferredContext.prototype.deferralStatus = undefined;

