import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Components/FormikControl'

function EntryForm() {

  const initialValues = {
    name:'',
    designation:'',
    department:'',
    managerId:'',
    employeeId:'',
    joininigDate:null
  }
   
  const validationSchema = Yup.object({
    name:Yup.string().required('*Required'),
    designation:Yup.string().required('Required'),
    department: Yup.string().required('Required'),
    managerId: Yup.number().required('Required'),
    employeeId:Yup.number().required('Required'),
    joiningDate:Yup.date()
              .required('Required')
              .nullable()
  })

  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }
  return (
    <div className='home'>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='text'
                label='Name'
                name='name'
              />
              <FormikControl
                 control='input'
                 type='text'
                 label='Designation'
                 name='designation'
               />
               <FormikControl
                 control='input'
                 type='text'
                 label='Department'
                 name='department'
               />

              <FormikControl
                 control='input'
                 type='text'
                 label='ManagerId'
                 name='managerId'
               />
               <FormikControl
                 control='input'
                 type='text'
                 label='Employee ID'
                 name='employeeId'
               />
               <FormikControl
                  control='date'
                  label='Joining Date'
                  name='JoiningDate'
            />
                <button type='submit' /*disabled={!formik.isValid}*/>
                  Submit
                </button>

            </Form>
          )
        }}


      </Formik>
    </div>

  )

}

export default EntryForm