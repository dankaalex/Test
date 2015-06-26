var calc = (function () {
    var ct = 0, newCalc;

    newCalc = function () {
        this.val = 0;
        this.id = ct++;
    }

    newCalc.prototype.getId = function () {
        return this.id;
    };

    newCalc.getCt = function () {
        return ct;
    }

    newCalc.prototype.getVal = function () {
        return this.val;
    };

    newCalc.prototype.inc = function (a) {
        this.val += a;
        return this;
    };

    newCalc.prototype.dec = function (a) {
        this.val -= a;
        return this;
    };

    newCalc.prototype.do = function (func) {
        this.val = func(this.val);
        return this;
    }


    newCalc.prototype.reset = function () {
        this.val = 0;
        return this;
    };
    return newCalc;
})();


var calc1 = new calc();
console.log(calc1.inc(5).inc(3).dec(5).getVal());

calc1.do(function (curVal) {
    return curVal + 3;
});
console.log(calc1.getVal());

//console.log(calc1.getId());
//var calc2 = new calc();
//console.log(calc2.getId());
//var calc3 = new calc();
//console.log(calc3.getId());

//console.log(calc.getCt());
