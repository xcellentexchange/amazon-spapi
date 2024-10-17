/*
 * Selling Partner API for Easy Ship
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * OpenAPI spec version: 2022-03-23
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
    define(['expect.js', '../../../src/easyShip_2022-03-23/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/easyShip_2022-03-23/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SellingPartnerApiForEasyShip);
  }
}(this, function(expect, SellingPartnerApiForEasyShip) {
  'use strict';

  var instance;

  describe('easyShip_2022-03-23', function() {
    describe('PackageDetails', function() {
      beforeEach(function() {
        instance = new SellingPartnerApiForEasyShip.PackageDetails();
      });

      it('should create an instance of PackageDetails', function() {
        // TODO: update the code to test PackageDetails
        expect(instance).to.be.a(SellingPartnerApiForEasyShip.PackageDetails);
      });

      it('should have the property packageItems (base name: "packageItems")', function() {
        // TODO: update the code to test the property packageItems
        expect(instance).to.have.property('packageItems');
        // expect(instance.packageItems).to.be(expectedValueLiteral);
      });

      it('should have the property packageTimeSlot (base name: "packageTimeSlot")', function() {
        // TODO: update the code to test the property packageTimeSlot
        expect(instance).to.have.property('packageTimeSlot');
        // expect(instance.packageTimeSlot).to.be(expectedValueLiteral);
      });

      it('should have the property packageIdentifier (base name: "packageIdentifier")', function() {
        // TODO: update the code to test the property packageIdentifier
        expect(instance).to.have.property('packageIdentifier');
        // expect(instance.packageIdentifier).to.be(expectedValueLiteral);
      });

    });
  });

}));