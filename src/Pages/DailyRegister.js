import React from 'react'
import {Formik,Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Components/FormikControl'
function DailyRegister() {
  const checkboxOptions = [
    { key: 'Present', value: 'present' },
    { key: 'Absent', value: 'absent' },
  ]

  const radioOptions = [
    { key: 'Sick leave', value: 'Sick leave' },
    { key: 'Planned leave', value: 'Planned leave' },
    { key: 'Casual leave', value: 'Casual leave' },
    { key: 'Unplanned leave', value: 'Unplanned leave' }
  ]

  const initialValues = {
    employeeId:'',
    radioOption: '',
    checkboxOption:[],
    birthDate: null
  }
  const validationSchema = Yup.object({
    employeeId: Yup.number().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption:Yup.array().required('Required'),
    birthDate: Yup.date()
      .required('Required')
      .nullable()
  })
  const onSubmit = values => {
    console.log('Form data', values)
    //console.log('Saved data', JSON.parse(JSON.stringify(values)))
  }

return (
    <div className='home'>
      <h1>DailyRegister</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <FormikControl
            control='date'
            label='Date'
            name='birthDate'
          />
          <FormikControl
            control='checkbox'
            label='Attendee'
            name='checkboxOption'
            options={checkboxOptions}
          />
          <FormikControl
            control='radio'
            label='Leave Type'
            name='radioOption'
            options={radioOptions}
          />
          
          <FormikControl
             control='input'
             type='text'
             label='Employee ID'
            name='employeeId'
           />
          <button className='submit' type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default DailyRegister