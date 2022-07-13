# AngularEssentials

## Commands

| Command                      | Description                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| ng serve                     | Starting Development Server with Application                  |
| ng serve --open              | Starting Development Server with Application and open Browser |
| ng generate component header | Generating a Component called 'Header'                        |
| ng generate service token    | Generating a Service called 'Token'                           |
| ng add @angular/material     | Adding a Library called 'Angular/Material'                    |

## Angular Folder Structure

- Angular is using TypeScript and SCSS
- An Angular Folder contains:
  - Component Files
  - Test Files (automatically generated)
  - Module File (automatically generated)

## AngularForms

### FormControl

- Each Input Field in a Form (FormGroup) needs an Instance of the **FormControl Class**
- FormControls allow to check the current Value stored in an Input Field
- The Check of a Input Field allows to check if the Status is:
  - touched (If Focus is put on a Input Field it is true)
  - untouched (If the Focus is put on a Input Field it is false)
  - dirty (If Input Field is changed after it was initialized)
  - pristine (If Input Field is unchanged after it was initialized)
  - valid (If Vallation is not implemented it is always true otherwise it depends on the Validation)
  - invalid (If Vallation is not implemented it is always false otherwise it depends on the Validation)
  - error (If there are no Errors it will be null)

### FormGroup

- Each FormGroup needs an Instance of the **FormControl Class**
- A FormGroup represents a Group of Controls in a Form
- Each Form is a ControlGroup because it contains at least one FormControl
- A FormGroup is valid if all the FormControls are valid
- It is easier to check the Status of the FormGroup instead of iterating over all FormControls in that FormGroup and checking their Status

#### Template-driven Forms

- Template-driven Forms are created implicitly by Directives in Template
- Angular will generated though the Directives the FormControls

#### Reactive Forms (Model-driven Forms)

- Reactive Forms are created by explicitly writing the Code in Components
- FormControls will through the written Code

#### Template-driven vs. Reactive Forms

| Template-driven Forms              | Reactive Forms                               |
| ---------------------------------- | -------------------------------------------- |
| More Control over Validation Logic | -                                            |
| Good for complex Forms             | Good for simple Forms (easier and less Code) |
| Unit-testable                      | -                                            |
