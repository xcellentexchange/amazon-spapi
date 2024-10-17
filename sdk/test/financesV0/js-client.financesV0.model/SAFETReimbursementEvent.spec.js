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
    describe('SAFETReimbursementEvent', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForFinances.SAFETReimbursementEvent();
      });

      it('should create an instance of SAFETReimbursementEvent', function() {
        // TODO: update the code to test SAFETReimbursementEvent
        expect(instance).to.be.a(SellingPartnerApiForFinances.SAFETReimbursementEvent);
      });

      it('should have the property postedDate (base name: "PostedDate")', function() {
        // TODO: update the code to test the property postedDate
        expect(instance).to.have.property('postedDate');
        // expect(instance.postedDate).to.be(expectedValueLiteral);
      });

      it('should have the property sAFETClaimId (base name: "SAFETClaimId")', function() {
        // TODO: update the code to test the property sAFETClaimId
        expect(instance).to.have.property('sAFETClaimId');
        // expect(instance.sAFETClaimId).to.be(expectedValueLiteral);
      });

      it('should have the property reimbursedAmount (base name: "ReimbursedAmount")', function() {
        // TODO: update the code to test the property reimbursedAmount
        expect(instance).to.have.property('reimbursedAmount');
        // expect(instance.reimbursedAmount).to.be(expectedValueLiteral);
      });

      it('should have the property reasonCode (base name: "ReasonCode")', function() {
        // TODO: update the code to test the property reasonCode
        expect(instance).to.have.property('reasonCode');
        // expect(instance.reasonCode).to.be(expectedValueLiteral);
      });

      it('should have the property sAFETReimbursementItemList (base name: "SAFETReimbursementItemList")', function() {
        // TODO: update the code to test the property sAFETReimbursementItemList
        expect(instance).to.have.property('sAFETReimbursementItemList');
        // expect(instance.sAFETReimbursementItemList).to.be(expectedValueLiteral);
      });

    });
  });

}));