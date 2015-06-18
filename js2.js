
// module
var myModule = (function (moduleName) {

    function printModuleName() {
        console.log(moduleName);
    }

    function foo(){
        console.log("foo of " + moduleName + " was called");
    }

    console.log(moduleName + "was created");

    return {
        printModuleName : printModuleName,
        foo : foo
    }

})("myModule");


myModule.printModuleName();
myModule.foo();


// two solutions of it:
function makeArmy() {
    var shooters = [], i;
    for (i = 0; i < 10; i++) {
        var z = i;
        (function (k) {
            var shooter = function () {
                console.log(z);
                console.log(k);
                console.log(shooter.savedValue);
            };
            shooter.savedValue = i;
            shooters.push(shooter);
        })(i);
    }
    return shooters;
}

var army = makeArmy();

army[0]();
army[5]();