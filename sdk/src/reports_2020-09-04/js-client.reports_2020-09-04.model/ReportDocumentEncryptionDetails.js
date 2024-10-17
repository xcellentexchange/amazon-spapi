/*
 * Selling Partner API for Reports
 * Effective **June 27, 2024**, the Selling Partner API for Reports v2020-09-04 will no longer be available and all calls to it will fail. Integrations that rely on the Reports API must migrate to [Reports v2021-06-30](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) to avoid service disruption.
 *
 * OpenAPI spec version: 2020-09-04
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
 * The ReportDocumentEncryptionDetails model module.
 * @module reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails
 * @version 2020-09-04
 */
export class ReportDocumentEncryptionDetails {
  /**
   * Constructs a new <code>ReportDocumentEncryptionDetails</code>.
   * Encryption details required for decryption of a report document's contents.
   * @alias module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails
   * @class
   * @param standard {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails.StandardEnum} The encryption standard required to decrypt the document contents.
   * @param initializationVector {String} The vector to decrypt the document contents using Cipher Block Chaining (CBC).
   * @param key {String} The encryption key used to decrypt the document contents.
   */
  constructor(standard, initializationVector, key) {
    this.standard = standard;
    this.initializationVector = initializationVector;
    this.key = key;
  }

  /**
   * Constructs a <code>ReportDocumentEncryptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails} obj Optional instance to populate.
   * @return {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails} The populated <code>ReportDocumentEncryptionDetails</code> instance.
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
      obj = obj || new ReportDocumentEncryptionDetails();
      if (data.hasOwnProperty('standard'))
        obj.standard = ApiClient.convertToType(data['standard'], 'String');
      if (data.hasOwnProperty('initializationVector'))
        obj.initializationVector = ApiClient.convertToType(data['initializationVector'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>standard</code> property.
 * @enum {String}
 * @readonly
 */
ReportDocumentEncryptionDetails.StandardEnum = {
  /**
   * value: "AES"
   * @const
   */
  AES: "AES"
};

/**
 * The encryption standard required to decrypt the document contents.
 * @member {module:reports_2020-09-04/js-client.reports_2020-09-04.model/ReportDocumentEncryptionDetails.StandardEnum} standard
 */
ReportDocumentEncryptionDetails.prototype.standard = undefined;

/**
 * The vector to decrypt the document contents using Cipher Block Chaining (CBC).
 * @member {String} initializationVector
 */
ReportDocumentEncryptionDetails.prototype.initializationVector = undefined;

/**
 * The encryption key used to decrypt the document contents.
 * @member {String} key
 */
ReportDocumentEncryptionDetails.prototype.key = undefined;

