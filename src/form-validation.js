'use strict';

/**
 * Form validation plugin
 * @author Alex O'Callaghan <awocallaghan@gmail.com>
 */

global.FormValidation = FormValidation;

const FormValidation = (formElements, options = {}) => {
  if (typeof formElements === 'string') {
    formElements = document.querySelectorAll(formElements);
  }

  if (formElements.constructor !== NodeList) {
    return console.error('Expected a list of DOM elements');
  }

  formElements.forEach(form => initFormValidation(form, options));
}

const initFormValidation = (form, options) => {
  // Ensure form is a HTMLFormElement
  if (form.constructor !== HTMLFormElement) {
    return console.error('Expected HTMLFormElement', form);
  }

  // Give the form a random id if it doesn't have one
  // - We use this to query the form's children
  // - eg. #f10 .error to get child .error div
  if (!form.id) {
    form.id = 'f' + Math.round(Math.random() * 20 + 1);
  }

  form.addEventListener('submit', (event) => {
    let errors = [];
    for (let i = 0; i < event.target.elements.length; i++) {
      let inputElement = event.target.elements[i];
      // Check each child element with a "name" attribute
      if (!inputElement.hasAttribute('name')) {
        continue;
      }

      // Check value is valid for this input
      let inputName = inputElement.getAttribute('name');
      if (options.validators && options.validators[inputName]) {
        let inputVal = inputElement.value;
        let valid = options.validators[inputName](inputVal);
        // Should return true, if not the return is an error message
        if (!typeof valid === 'boolean' || valid !== true) {
          // Add red error outline
          inputElement.classList.add('hasError');
          // Push this error message to array of errors
          errors.push(valid);
        } else {
          console.log(inputElement);
          // Remove outline if valid
          inputElement.classList.remove('hasError');
        }
      }
    }

    let errorElement = document.querySelector(`#${form.id} .error`);
    if (errors.length > 0) {
      event.preventDefault();
      if (errorElement) {
        // Create list of error messages
        let errorList = errors.map(error => `<li>${error}</li>`);
        errorElement.innerHTML = `<ul>${errorList}</ul>`;
        // Show error div
        errorElement.style.display = 'block';
      }
    } else {
      // Hide error div if no errors
      errorElement.style.display = 'none';
    }
  });
}
