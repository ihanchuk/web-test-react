# Installation

- run npm install
- run npm run start

## Basic concepts

Application is not using any libraries at all. Evrything is done completly from a scratch;
Form validation is done with custom hooks and React context.

> FormikContext  component- has nothing in common with library Formik. 

##### Components structure:

```
 <Container>
        <Column cssClass="main">
          <UserName />
          <ProjectTags />
          <Projects />
          <FormControlls />
        </Column>
        <Column cssClass="sidebar">
          <Dump />
          <FormSave />
        </Column>
      </Container>
    </FormikContext>
```
Inside a FormikContext you can get form state by Hooks:
1. `const error = useControllError('.user.name' )`
1. `const {push, getArrayValues, removeAt, setField, revertForm} = useApi( )`
1. `const allFormErrors = useFormErrors();`
1.  `const handler = useControlHandler();`
1. `const allValues = useFormValues()`

#### Form Element structure

There is 2 types of  Form Elements:
-  Statefull - those components interract with form state by hooks. Those components store its state in form context.
- Stateless - this type of components store temporaary state by useRef and only sync with rest form. Please check Tag.js for example.

#### Providing callback for Submit

```xml
<FormikContext 
      initialValues={initialFakeValues} 
      onFormSubmit={onFormSubmit} 
      onProcess={onProcess} 
    >
      <Container>
        <Column cssClass="main">
          <UserName />
          <ProjectTags />
          <Projects />
          <FormControlls />
        </Column>
        <Column cssClass="sidebar">
          <Dump />
          <FormSave />
        </Column>
      </Container>
    </FormikContext>
```

##### initialValues:
Initial values is an object defining shape of form.
Example:
```xml
const initialValues = {
	name: 'John Doe',
	email: 'email@me.com'
}
```

##### onFormSubmit:
Callback function. Takes values as param.

##### onProcess
Processor function. This function is executed right before Form data is submitted,
Takes values as param. This is final step before form is submitted and last chance to execute some data manipulation.

test

