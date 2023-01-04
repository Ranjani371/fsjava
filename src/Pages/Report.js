import React from 'react'
import {Formik,Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import FormikControl from '../Components/FormikControl'
function DailyRegister() {
 const navigate = useNavigate();

 const navigateToReport=() => {
  navigate('/reportTable')
 };

  const initialValues = {
    employeeId:''
    
  }
  const validationSchema = Yup.object({
    employeeId: Yup.number().required('Required'),
    
  })
  const onSubmit = values => {
    console.log('Form data', values)
    console.log('Saved data', JSON.parse(JSON.stringify(values)))
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
             control='input'
             type='text'
             label='Employee ID'
            name='employeeId'
           />
          <button className='submit' type='submit'
          disabled={!formik.isValid}
          onClick={navigateToReport}
          >Submit</button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default DailyRegister