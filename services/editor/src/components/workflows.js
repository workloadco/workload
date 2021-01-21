import React from 'react';
import {
    List,
   TextInput,
   SimpleForm,
   Edit,
   Create,
   ReferenceInput,
   SelectInput,
   Datagrid,
   ReferenceField,
   TextField,
   EmailField,
   EditButton,
   DeleteButton,
   EditGuesser,
   BooleanInput
   } from 'react-admin';
   import Switch from '@material-ui/core/Switch';
   
export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    </div>
  );
}   

export const PostList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <ReferenceField source="userId" reference="workflows"><TextField source="name"/></ReferenceField>
           <TextField source="id"/>
           <TextField source="title"/>
           <TextField source="body"/>
           <Switch/>
           <EditButton/>
           <DeleteButton/>
       </Datagrid>
   </List>
);

export const PostEdit = props => (
   <Edit {...props}>
       <SimpleForm>
           <ReferenceInput source="userId" reference="users"><SelectInput optionText="id"/></ReferenceInput>
           <TextInput source="id"/>
           <TextInput source="title"/>
           <TextInput source="body"/>
       </SimpleForm>
   </Edit>
);

export const PostCreate = props => (
   <Create {...props}>
       <SimpleForm>
           <ReferenceInput source="userId" reference="workflows"><SelectInput optionText="id"/></ReferenceInput>
           <TextInput source="id"/>
           <TextInput source="title"/>
           <TextInput source="body"/>
       </SimpleForm>
   </Create>
);
