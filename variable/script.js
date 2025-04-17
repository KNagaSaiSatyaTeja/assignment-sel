let gobalScope = 10;

(function () {
  console.log(
    "this is accessing global scope from GlobalScopeExplaination function:",
    gobalScope
  );
})();

(function () {
  let localScope = 20;
  console.log(
    "this is accessing local scope from Local Scope Explaination function:",
    localScope
  );
})();

if (true) {
  let blockScope = 30;
  console.log(
    "this is accessing block scope from Block Scope Explaination function:",
    blockScope
  );
}

(function () {
  let gobalScope = "variable shadowing";
  console.log("this is Variable shadowing from Local Scope:", gobalScope);
})();
