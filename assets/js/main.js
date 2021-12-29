function Calculator() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.buttonClick();
    this.pressBackSpace();
    this.pressEnter();
  };

  this.pressBackSpace = () => {
    this.display.addEventListener("keydown", (event) => {
      if (event.keyCode === 8) {
        event.preventDefault();
        this.clearDisplay();
      }
    });
  };

  this.pressEnter = () => {
    this.display.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.calculate();
      }
    });
  };

  this.calculate = () => {
    let count = this.display.value;

    try {
      count = eval(count);

      if (!count) {
        alert("Conta inválida");
        return;
      }

      this.display.value = String(count);
    } catch (error) {
      alert("Conta inválida");
      return;
    }
  };

  this.insertNumber = (valor) => (this.display.value += valor);
  this.clearDisplay = () => (this.display.value = "");
  this.deleteLast = () =>
    (this.display.value = this.display.value.slice(0, -1));

  this.buttonClick = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (element.classList.contains("btn-num"))
        this.insertNumber(element.innerText);
      if (element.classList.contains("btn-clear")) this.clearDisplay();
      if (element.classList.contains("btn-del")) this.deleteLast();
      if (element.classList.contains("btn-eq")) this.calculate();
      this.display.focus();
    });
  };
}

const calculator = new Calculator();
calculator.start();
