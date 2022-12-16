class MyForm {
  constructor(...args) {
    this.arguments = args;
    // Bind the onSubmit method as an event handler for the form's submit event
    document
      .querySelector("form")
      .addEventListener("submit", this.onSubmit.bind(this));

    // Bind the onToolbarClick method as an event handler for the button's click event
    [...document.querySelectorAll(".button")].map((e) =>
      e.addEventListener("click", this.onToolbarClick.bind(this))
    );
  }
  // Method to get all the values fiels
  getFields() {
    return this.arguments.reduce(
      (a, v) => ({ ...a, [v]: document.querySelector(`#${v}`).value }),
      {}
    );
  }
  onSubmit(event) {
    // Prevent the form from submitting
    event.preventDefault();
    // Pop an alert message that identifies the form and includes the value of the formProperty
    alert(
      `Form was clicked and the values received are: ${JSON.stringify(this.getFields())}`
    );
  }
  onToolbarClick(e) {
    // Pop an alert message that identifies the button and includes the value of the formProperty
    alert(
      `${e.target.innerText} in Toolbar was clicked. ${JSON.stringify(
        this.getFields()
      )}`
    );
  }
}
// Create an instance of the MyForm class, passing in the form's id, the button's id, and a form property value
// const myForm = new MyForm("email", "phone");
const myForm = new MyForm("email", "phone", "name");
// const myForm = new MyForm("email");
