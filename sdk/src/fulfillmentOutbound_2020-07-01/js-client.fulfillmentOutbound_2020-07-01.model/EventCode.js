/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
 * Enum class EventCode.
 * @enum {String}
 * @readonly
 */
const EventCode = {
  /**
   * value: "EVENT_101"
   * @const
   */
  _101: "EVENT_101",

  /**
   * value: "EVENT_102"
   * @const
   */
  _102: "EVENT_102",

  /**
   * value: "EVENT_201"
   * @const
   */
  _201: "EVENT_201",

  /**
   * value: "EVENT_202"
   * @const
   */
  _202: "EVENT_202",

  /**
   * value: "EVENT_203"
   * @const
   */
  _203: "EVENT_203",

  /**
   * value: "EVENT_204"
   * @const
   */
  _204: "EVENT_204",

  /**
   * value: "EVENT_205"
   * @const
   */
  _205: "EVENT_205",

  /**
   * value: "EVENT_206"
   * @const
   */
  _206: "EVENT_206",

  /**
   * value: "EVENT_301"
   * @const
   */
  _301: "EVENT_301",

  /**
   * value: "EVENT_302"
   * @const
   */
  _302: "EVENT_302",

  /**
   * value: "EVENT_304"
   * @const
   */
  _304: "EVENT_304",

  /**
   * value: "EVENT_306"
   * @const
   */
  _306: "EVENT_306",

  /**
   * value: "EVENT_307"
   * @const
   */
  _307: "EVENT_307",

  /**
   * value: "EVENT_308"
   * @const
   */
  _308: "EVENT_308",

  /**
   * value: "EVENT_309"
   * @const
   */
  _309: "EVENT_309",

  /**
   * value: "EVENT_401"
   * @const
   */
  _401: "EVENT_401",

  /**
   * value: "EVENT_402"
   * @const
   */
  _402: "EVENT_402",

  /**
   * value: "EVENT_403"
   * @const
   */
  _403: "EVENT_403",

  /**
   * value: "EVENT_404"
   * @const
   */
  _404: "EVENT_404",

  /**
   * value: "EVENT_405"
   * @const
   */
  _405: "EVENT_405",

  /**
   * value: "EVENT_406"
   * @const
   */
  _406: "EVENT_406",

  /**
   * value: "EVENT_407"
   * @const
   */
  _407: "EVENT_407",

  /**
   * value: "EVENT_408"
   * @const
   */
  _408: "EVENT_408",

  /**
   * value: "EVENT_409"
   * @const
   */
  _409: "EVENT_409",

  /**
   * value: "EVENT_411"
   * @const
   */
  _411: "EVENT_411",

  /**
   * value: "EVENT_412"
   * @const
   */
  _412: "EVENT_412",

  /**
   * value: "EVENT_413"
   * @const
   */
  _413: "EVENT_413",

  /**
   * value: "EVENT_414"
   * @const
   */
  _414: "EVENT_414",

  /**
   * value: "EVENT_415"
   * @const
   */
  _415: "EVENT_415",

  /**
   * value: "EVENT_416"
   * @const
   */
  _416: "EVENT_416",

  /**
   * value: "EVENT_417"
   * @const
   */
  _417: "EVENT_417",

  /**
   * value: "EVENT_418"
   * @const
   */
  _418: "EVENT_418",

  /**
   * value: "EVENT_419"
   * @const
   */
  _419: "EVENT_419",

  /**
   * Returns a <code>EventCode</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:fulfillmentOutbound_2020-07-01/js-client.fulfillmentOutbound_2020-07-01.model/EventCode} The enum <code>EventCode</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {EventCode};
