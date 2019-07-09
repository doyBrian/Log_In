# Log_In
A simple log in page with password validation.

## Deployed Link
https://doybrian.github.io/Log_In/

### Design Plan
This project is part of a coding test for the Web Analyst position at Level Access.

* Use HTML to create a simple log in page with the following elements:
    Login (heading)
    Username (label) Username textbox
    Password(label) Password textbox
    Login Button

* Optional: Client-side Validation
    - Add constraint information for the password field (Ex: Password must include one capital letter, one lower case letter, and at least one number.)
    - Check for the username “level” and password of “Access123”.
    - If successful, display an alert informing the user that there was a success. Also feel free to redirect to a page with text that says “You have signed in!”
    - If unsuccessful, display an error notifying the user that the username/password combination was not recognized.

* Optional: Style the form
    - Use custom explicit labels.
    - Round the form field corners slightly.
    - Place the form in a styled area of the page.
    - Style the submit button

* Feel free to use any libraries or frameworks with which you have experience. Also feel free to add more complex form fields to highlight more     difficult implementations.

* Keep accessibility in mind with regard to all aspects of the sample form.


### Overview

* An index html file is created as landing page with the form for log in. The page and form are stylized according to optional tasks.

* A message appears at the bottom of the form as a reminder that password must have a number, a lowercase and an uppercase letter for validation purposes. If password entered passes validation, the message will be cleared.  

* If for some reason user retracts/deletes part of the password entry and the validation fails, the message will reappear.

* Only 3 attempts allowed if user fails to log in properly, otherwise the page will lock and data entry in the text boxes will be disabled.

* If log in is successful, an alert message will indicate this and user will be redirected to a new page with the appropriate message.
