import { FormikContext } from './ui/form/form-wrapper';
import { Projects } from './components/projects';
import { Dump } from './components/dump';
import { Container } from './ui/layout/container';
import { Column } from './ui/layout/columns';
import { FormSave } from './components/form-save';
import { ProjectTags } from './components/project-tags';
import { UserName } from './components/user-name';
import { initialFakeValues } from './meta/fake-values';
import { FormControlls } from './components/form-controlls';
import { useCallback } from 'react';

function App() {
  const onProcess = useCallback((formValues) => {
    return {
        userName: formValues.userName,
        notes: formValues.notes
      }
    });

    const onFormSubmit = useCallback((formValues) => {
        alert('check console.log');
        console.log(formValues);
    });

  return <div>
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

  </div>
}

export default App;
