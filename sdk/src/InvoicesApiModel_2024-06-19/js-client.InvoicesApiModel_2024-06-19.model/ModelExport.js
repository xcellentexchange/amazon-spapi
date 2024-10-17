/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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
import {ExportStatus} from './ExportStatus.js';

/**
 * The ModelExport model module.
 * @module InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ModelExport
 * @version 2024-06-19
 */
export class ModelExport {
  /**
   * Constructs a new <code>ModelExport</code>.
   * Detailed information about the export.
   * @alias module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ModelExport
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelExport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ModelExport} obj Optional instance to populate.
   * @return {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ModelExport} The populated <code>ModelExport</code> instance.
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
      obj = obj || new ModelExport();
      if (data.hasOwnProperty('errorMessage'))
        obj.errorMessage = ApiClient.convertToType(data['errorMessage'], 'String');
      if (data.hasOwnProperty('exportId'))
        obj.exportId = ApiClient.convertToType(data['exportId'], 'String');
      if (data.hasOwnProperty('generateExportFinishedAt'))
        obj.generateExportFinishedAt = ApiClient.convertToType(data['generateExportFinishedAt'], 'Date');
      if (data.hasOwnProperty('generateExportStartedAt'))
        obj.generateExportStartedAt = ApiClient.convertToType(data['generateExportStartedAt'], 'Date');
      if (data.hasOwnProperty('invoicesDocumentIds'))
        obj.invoicesDocumentIds = ApiClient.convertToType(data['invoicesDocumentIds'], ['String']);
      if (data.hasOwnProperty('status'))
        obj.status = ExportStatus.constructFromObject(data['status']);
    }
    return obj;
  }
}

/**
 * When the export generation fails, this attribute contains a description of the error.
 * @member {String} errorMessage
 */
ModelExport.prototype.errorMessage = undefined;

/**
 * The export identifier.
 * @member {String} exportId
 */
ModelExport.prototype.exportId = undefined;

/**
 * The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
 * @member {Date} generateExportFinishedAt
 */
ModelExport.prototype.generateExportFinishedAt = undefined;

/**
 * The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
 * @member {Date} generateExportStartedAt
 */
ModelExport.prototype.generateExportStartedAt = undefined;

/**
 * The identifier for the export documents. To get the information required to retrieve the export document's contents, pass each ID in the `getInvoicesDocument` operation.  This list is empty until the status is `DONE`.
 * @member {Array.<String>} invoicesDocumentIds
 */
ModelExport.prototype.invoicesDocumentIds = undefined;

/**
 * @member {module:InvoicesApiModel_2024-06-19/js-client.InvoicesApiModel_2024-06-19.model/ExportStatus} status
 */
ModelExport.prototype.status = undefined;

