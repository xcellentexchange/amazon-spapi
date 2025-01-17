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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/InvoicesApiModel_2024-06-19/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/InvoicesApiModel_2024-06-19/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheSellingPartnerApiForInvoices);
  }
}(this, function(expect, TheSellingPartnerApiForInvoices) {
  'use strict';

  var instance;

  describe('InvoicesApiModel_2024-06-19', function() {
    describe('ExportStatus', function() {
      beforeEach(function() {
        instance = TheSellingPartnerApiForInvoices.ExportStatus;
      });

      it('should create an instance of ExportStatus', function() {
        // TODO: update the code to test ExportStatus
        expect(instance).to.be.a('object');
      });

      it('should have the property REQUESTED', function() {
        expect(instance).to.have.property('REQUESTED');
        expect(instance.REQUESTED).to.be("REQUESTED");
      });

      it('should have the property PROCESSING', function() {
        expect(instance).to.have.property('PROCESSING');
        expect(instance.PROCESSING).to.be("PROCESSING");
      });

      it('should have the property DONE', function() {
        expect(instance).to.have.property('DONE');
        expect(instance.DONE).to.be("DONE");
      });

      it('should have the property ERROR', function() {
        expect(instance).to.have.property('ERROR');
        expect(instance.ERROR).to.be("ERROR");
      });

    });
  });

}));
