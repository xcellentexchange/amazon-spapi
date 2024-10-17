/*
 * Selling Partner API for Shipping
 * Provides programmatic access to Amazon Shipping APIs.   **Note:** If you are new to the Amazon Shipping API, refer to the latest version of <a href=\"https://developer-docs.amazon.com/amazon-shipping/docs/shipping-api-v2-reference\">Amazon Shipping API (v2)</a> on the <a href=\"https://developer-docs.amazon.com/amazon-shipping/\">Amazon Shipping Developer Documentation</a> site.
 *
 * OpenAPI spec version: v1
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
import {ContainerItem} from './ContainerItem.js';
import {ContainerReferenceId} from './ContainerReferenceId.js';
import {Currency} from './Currency.js';
import {Dimensions} from './Dimensions.js';
import {Weight} from './Weight.js';

/**
 * The Container model module.
 * @module shipping/js-client.shipping.model/Container
 * @version v1
 */
export class Container {
  /**
   * Constructs a new <code>Container</code>.
   * Container in the shipment.
   * @alias module:shipping/js-client.shipping.model/Container
   * @class
   * @param containerReferenceId {module:shipping/js-client.shipping.model/ContainerReferenceId} 
   * @param value {module:shipping/js-client.shipping.model/Currency} The total value of all items in the container.
   * @param dimensions {module:shipping/js-client.shipping.model/Dimensions} The length, width, height, and weight of the container.
   * @param items {Array.<module:shipping/js-client.shipping.model/ContainerItem>} A list of the items in the container.
   * @param weight {module:shipping/js-client.shipping.model/Weight} The weight of the container.
   */
  constructor(containerReferenceId, value, dimensions, items, weight) {
    this.containerReferenceId = containerReferenceId;
    this.value = value;
    this.dimensions = dimensions;
    this.items = items;
    this.weight = weight;
  }

  /**
   * Constructs a <code>Container</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shipping/js-client.shipping.model/Container} obj Optional instance to populate.
   * @return {module:shipping/js-client.shipping.model/Container} The populated <code>Container</code> instance.
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
      obj = obj || new Container();
      if (data.hasOwnProperty('containerType'))
        obj.containerType = ApiClient.convertToType(data['containerType'], 'String');
      if (data.hasOwnProperty('containerReferenceId'))
        obj.containerReferenceId = ContainerReferenceId.constructFromObject(data['containerReferenceId']);
      if (data.hasOwnProperty('value'))
        obj.value = Currency.constructFromObject(data['value']);
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [ContainerItem]);
      if (data.hasOwnProperty('weight'))
        obj.weight = Weight.constructFromObject(data['weight']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>containerType</code> property.
 * @enum {String}
 * @readonly
 */
Container.ContainerTypeEnum = {
  /**
   * value: "PACKAGE"
   * @const
   */
  PACKAGE: "PACKAGE"
};

/**
 * The type of physical container being used. (always 'PACKAGE')
 * @member {module:shipping/js-client.shipping.model/Container.ContainerTypeEnum} containerType
 */
Container.prototype.containerType = undefined;

/**
 * @member {module:shipping/js-client.shipping.model/ContainerReferenceId} containerReferenceId
 */
Container.prototype.containerReferenceId = undefined;

/**
 * The total value of all items in the container.
 * @member {module:shipping/js-client.shipping.model/Currency} value
 */
Container.prototype.value = undefined;

/**
 * The length, width, height, and weight of the container.
 * @member {module:shipping/js-client.shipping.model/Dimensions} dimensions
 */
Container.prototype.dimensions = undefined;

/**
 * A list of the items in the container.
 * @member {Array.<module:shipping/js-client.shipping.model/ContainerItem>} items
 */
Container.prototype.items = undefined;

/**
 * The weight of the container.
 * @member {module:shipping/js-client.shipping.model/Weight} weight
 */
Container.prototype.weight = undefined;

