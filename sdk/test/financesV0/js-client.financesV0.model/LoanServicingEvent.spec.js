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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/financesV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/financesV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForFinances);
  }
}(this, function(expect, SellingPartnerApiForFinances) {
  'use strict';

  var instance;

  describe('financesV0', function() {
    describe('LoanServicingEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.LoanServicingEvent();
      });

      it('should create an instance of LoanServicingEvent', function() {
        // TODO: update the code to test LoanServicingEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.LoanServicingEvent);
      });

      it('should have the property loanAmount (base name: "LoanAmount")', function() {
        // TODO: update the code to test the property loanAmount
        expect(instance).to.have.property('loanAmount');
        // expect(instance.loanAmount).to.be(expectedValueLiteral);
      });

      it('should have the property sourceBusinessEventType (base name: "SourceBusinessEventType")', function() {
        // TODO: update the code to test the property sourceBusinessEventType
        expect(instance).to.have.property('sourceBusinessEventType');
        // expect(instance.sourceBusinessEventType).to.be(expectedValueLiteral);
      });

    });
  });

}));
