const display = document.getElementById("display");
const toast = document.getElementById("toast");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function toggleSign() {
  if (display.value) {
    display.value = display.value.startsWith("-")
      ? display.value.substring(1)
      : "-" + display.value;
  }
}

function calculate() {
  try {
    display.value = eval(display.value.replace("%", "/100"));
  } catch {
    showToast("Invalid Expression");
  }
}

function calculateSqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    showToast("Invalid Input");
  }
}

function calculateLog() {
  try {
    const value = parseFloat(display.value);
    display.value = Math.log10(value);
  } catch {
    showToast("Invalid Input");
  }
}

function calculateSin() {
  try {
    const value = parseFloat(display.value);
    display.value = Math.sin((value * Math.PI) / 180).toFixed(5);
  } catch {
    showToast("Invalid Input");
  }
}
function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateCos() {
  try {
    const value = parseFloat(display.value);
    display.value = Math.cos((value * Math.PI) / 180).toFixed(5);
  } catch {
    showToast("Invalid Input");
  }
}

function calculateTan() {
  try {
    const value = parseFloat(display.value);
    display.value = Math.tan((value * Math.PI) / 180).toFixed(5);
  } catch {
    showToast("Invalid Input");
  }
}

function calculateFactorial() {
  try {
    let n = parseInt(display.value);
    if (n < 0 || isNaN(n)) return showToast("Invalid Input");

    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    display.value = result;
  } catch {
    showToast("Invalid Input");
  }
}

function calculatePower() {
  try {
    let base = parseFloat(display.value);
    let exponent = prompt("Enter exponent:");
    if (exponent === null) return;
    display.value = Math.pow(base, parseFloat(exponent));
  } catch {
    showToast("Invalid Input");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if ("0123456789/*-+.()%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    clearDisplay();
  }
});
