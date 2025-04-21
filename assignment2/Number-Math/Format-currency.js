const formatCurrency = (amount, currencyCode) => {
  console.log(amount, currencyCode);
  const options = {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };

  return new Intl.NumberFormat("en-US", options).format(amount);
};
let ammount = document.getElementById("ammount");
let currencyCode = document.getElementById("currencyCode");
const convertButton = document.getElementById("format");
const result = document.getElementById("result");
convertButton.addEventListener("click", () => {
  const amountValue = parseFloat(ammount.value);
  const currencyCodeValue = currencyCode.value;
  const formattedCurrency = formatCurrency(amountValue, currencyCodeValue);
  result.innerHTML = `Result: ${formattedCurrency}`;
});
