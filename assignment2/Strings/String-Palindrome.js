const findLongestPalindrome = (str) => {
  let longestPalindrome = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      if (
        isPalindrome(substring) &&
        substring.length > longestPalindrome.length
      ) {
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
};

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const str = document.getElementById("string");
const result = document.getElementById("result");
const convertButton = document.getElementById("check");
convertButton.addEventListener("click", () => {
  const strValue = str.value;
  const longestPalindrome = findLongestPalindrome(strValue);
  result.innerHTML = `Logest substring  is: ${longestPalindrome}`;
});
