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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/ordersV0/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ordersV0/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForOrders);
  }
}(this, function(expect, SellingPartnerApiForOrders) {
  'use strict';

  var instance;

  describe('ordersV0', function() {
    describe('SubstitutionOption', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForOrders.SubstitutionOption();
      });

      it('should create an instance of SubstitutionOption', function() {
        // TODO: update the code to test SubstitutionOption
        expect(instance).to.be.a(SellingPartnerApiForOrders.SubstitutionOption);
      });

      it('should have the property ASIN (base name: "ASIN")', function() {
        // TODO: update the code to test the property ASIN
        expect(instance).to.have.property('ASIN');
        // expect(instance.ASIN).to.be(expectedValueLiteral);
      });

      it('should have the property quantityOrdered (base name: "QuantityOrdered")', function() {
        // TODO: update the code to test the property quantityOrdered
        expect(instance).to.have.property('quantityOrdered');
        // expect(instance.quantityOrdered).to.be(expectedValueLiteral);
      });

      it('should have the property sellerSKU (base name: "SellerSKU")', function() {
        // TODO: update the code to test the property sellerSKU
        expect(instance).to.have.property('sellerSKU');
        // expect(instance.sellerSKU).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "Title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property measurement (base name: "Measurement")', function() {
        // TODO: update the code to test the property measurement
        expect(instance).to.have.property('measurement');
        // expect(instance.measurement).to.be(expectedValueLiteral);
      });

    });
  });

}));
