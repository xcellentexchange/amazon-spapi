/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
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

/**
 * The DangerousGoodsDetails model module.
 * @module shippingV2/js-client.shippingV2.model/DangerousGoodsDetails
 * @version v2
 */
export class DangerousGoodsDetails {
  /**
   * Constructs a new <code>DangerousGoodsDetails</code>.
   * Details related to any dangerous goods/items that are being shipped.
   * @alias module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DangerousGoodsDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails} obj Optional instance to populate.
   * @return {module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails} The populated <code>DangerousGoodsDetails</code> instance.
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
      obj = obj || new DangerousGoodsDetails();
      if (data.hasOwnProperty('unitedNationsRegulatoryId'))
        obj.unitedNationsRegulatoryId = ApiClient.convertToType(data['unitedNationsRegulatoryId'], 'String');
      if (data.hasOwnProperty('transportationRegulatoryClass'))
        obj.transportationRegulatoryClass = ApiClient.convertToType(data['transportationRegulatoryClass'], 'String');
      if (data.hasOwnProperty('packingGroup'))
        obj.packingGroup = ApiClient.convertToType(data['packingGroup'], 'String');
      if (data.hasOwnProperty('packingInstruction'))
        obj.packingInstruction = ApiClient.convertToType(data['packingInstruction'], 'String');
    }
    return obj;
  }
}

/**
 * The specific UNID of the item being shipped.
 * @member {String} unitedNationsRegulatoryId
 */
DangerousGoodsDetails.prototype.unitedNationsRegulatoryId = undefined;

/**
 * The specific regulatory class  of the item being shipped.
 * @member {String} transportationRegulatoryClass
 */
DangerousGoodsDetails.prototype.transportationRegulatoryClass = undefined;

/**
 * Allowed values for the <code>packingGroup</code> property.
 * @enum {String}
 * @readonly
 */
DangerousGoodsDetails.PackingGroupEnum = {
  /**
   * value: "I"
   * @const
   */
  I: "I",

  /**
   * value: "II"
   * @const
   */
  II: "II",

  /**
   * value: "III"
   * @const
   */
  III: "III"
};

/**
 * The specific packaging group of the item being shipped.
 * @member {module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails.PackingGroupEnum} packingGroup
 */
DangerousGoodsDetails.prototype.packingGroup = undefined;

/**
 * Allowed values for the <code>packingInstruction</code> property.
 * @enum {String}
 * @readonly
 */
DangerousGoodsDetails.PackingInstructionEnum = {
  /**
   * value: "PI965_SECTION_IA"
   * @const
   */
  pI965SECTIONIA: "PI965_SECTION_IA",

  /**
   * value: "PI965_SECTION_IB"
   * @const
   */
  pI965SECTIONIB: "PI965_SECTION_IB",

  /**
   * value: "PI965_SECTION_II"
   * @const
   */
  pI965SECTIONII: "PI965_SECTION_II",

  /**
   * value: "PI966_SECTION_I"
   * @const
   */
  pI966SECTIONI: "PI966_SECTION_I",

  /**
   * value: "PI966_SECTION_II"
   * @const
   */
  pI966SECTIONII: "PI966_SECTION_II",

  /**
   * value: "PI967_SECTION_I"
   * @const
   */
  pI967SECTIONI: "PI967_SECTION_I",

  /**
   * value: "PI967_SECTION_II"
   * @const
   */
  pI967SECTIONII: "PI967_SECTION_II",

  /**
   * value: "PI968_SECTION_IA"
   * @const
   */
  pI968SECTIONIA: "PI968_SECTION_IA",

  /**
   * value: "PI968_SECTION_IB"
   * @const
   */
  pI968SECTIONIB: "PI968_SECTION_IB",

  /**
   * value: "PI969_SECTION_I"
   * @const
   */
  pI969SECTIONI: "PI969_SECTION_I",

  /**
   * value: "PI969_SECTION_II"
   * @const
   */
  pI969SECTIONII: "PI969_SECTION_II",

  /**
   * value: "PI970_SECTION_I"
   * @const
   */
  pI970SECTIONI: "PI970_SECTION_I",

  /**
   * value: "PI970_SECTION_II"
   * @const
   */
  pI970SECTIONII: "PI970_SECTION_II"
};

/**
 * The specific packing instruction of the item being shipped.
 * @member {module:shippingV2/js-client.shippingV2.model/DangerousGoodsDetails.PackingInstructionEnum} packingInstruction
 */
DangerousGoodsDetails.prototype.packingInstruction = undefined;


