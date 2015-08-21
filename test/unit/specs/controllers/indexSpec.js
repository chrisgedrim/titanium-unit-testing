describe("Index controller tests", function() {

    var proxyquire = require('proxyquire').noCallThru();

    beforeEach(function() {
        $ = require('../../lib/spies/dollarSpy');
        $.index = require('../../lib/spies/ti/ui/windowSpy');
        $.label = require('../../lib/spies/ti/ui/labelSpy');

        proxyquire('../../../../app/controllers/index', {});
    });

    afterEach(function() {
        delete $;
    });

    it("adds a click event listener to $::label and calls $::index::open", function() {
        spyOn($, 'toggleLabel');

        expect($.label.text).toEqual("Hello, World");

        expect($.label.addEventListener).toHaveBeenCalledWith("click", jasmine.any(Function));

        expect($.index.open).toHaveBeenCalled();
    });

    it("$::toggleLabel correctly toggles $::label::text", function() {
        expect($.label.text).toEqual("Hello, World");

        $.toggleLabel({
            source: $.label
        });

        expect($.label.text).toEqual("Goodbye, World");

        $.toggleLabel({
            source: $.label
        });

        expect($.label.text).toEqual("Hello, World");
    });
});
