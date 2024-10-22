const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const results = document.getElementById("result");

const checkPalindrome = (input) => {
  // Checking if input is a empty string
  if (input === "") {
    alert("Please input a value");
    return;
  }

  results.replaceChildren();

  // Filtering String and converting it
  const regex = /[^a-z0-9]/gi;
  const filteredStr = input.replace(regex, "").toLowerCase();

  // Printing the results
  const resultMsg = `<strong>${input}</strong> ${
    filteredStr === [...filteredStr].reverse().join("") ? "is" : "is not"
  } a palindrome`;

  //Creating a new <p> element for display the results
  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  results.appendChild(pTag);
};

checkBtn.addEventListener("click", () => {
  checkPalindrome(textInput.value);
  textInput.value = "";
});
