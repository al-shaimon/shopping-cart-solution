function getTextElementValueById(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotal = parseInt(phoneTotalElement.innerText);
  return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById("phone-total");
  const currentCaseTotal = getTextElementValueById("case-total");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  const subTotalElement = document.getElementById("sub-total");
  subTotalElement.innerText = currentSubTotal;

  // calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
