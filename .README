# form-validation

Validate HTML form input before submission.

## Usage

Embed the JavaScript in the HTML page

    <script type="text/javascript" src="dist/form-validation.min.js"></script>

Use the FormValidation function init validation on a form.


__FormValidation(form, options)__


**form**: Either a DOM selector or actual HTMLFormElement of forms to validate. Can be a single form or many

**options**: { **validators**: object of functions that validate form inputs by returning true if valid else an error message }

Validator error messages are added to an element with class `"error"` which is a child of the form. The class `"hasError"` is toggled on each invalid input.

## Example

Validate a simple register form:

**Form:**

    <form action="?">
      <div class="error" style="display: none;"></div>
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>

**Initialisation:**

    <script type="text/javascript">
      FormValidation('form', {
        validators: {
          username: function (username) {
            if (!username || username.length == 0) {
              return 'A username is required';
            }
            return true;
          },
          email: function (email) {
            if (!email || !validateEmail(email)) {
              return 'Email must be a valid email address';
            }
            return true;
          },
          password: function (password) {
            if (!password || password.length < 8) {
              return 'Password must be at least 8 characters long';
            }
            if (password === 'password') {
              return 'A password of "password"? Really?';
            }
            return true;
          }
        }
      });

      function validateEmail(email) {
        var regex  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
      }
    </script>
