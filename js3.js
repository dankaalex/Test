/**
 * Created by akhripko on 6/25/2015.
 */


var Gadget = (function () {
    // this is like private static members
    var count = 0,
        newGadget;

    newGadget = function () {
        this.id = ++count;
    };

    // this is instance method
    newGadget.prototype.getId = function () {
        return this.id;
    };

    // this is static method
    newGadget.getCount = function () {
        return count;
    };

    return newGadget;
})(); // run it immediately

var gadget1 = new Gadget();
console.log("gadget1.getId(): " + gadget1.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());
var gadget2 = new Gadget();
console.log("gadget2.getId(): " + gadget2.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());
var gadget3 = new Gadget();
console.log("gadget3.getId(): " + gadget3.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());

console.log("gadget1.getId(): " + gadget1.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());
console.log("gadget2.getId(): " + gadget2.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());
console.log("gadget3.getId(): " + gadget3.getId());
console.log("Gadget.getCount(): " + Gadget.getCount());
