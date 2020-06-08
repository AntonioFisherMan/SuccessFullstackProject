import React from 'react'
import {Field} from 'redux-form'
import {File} from '../../common/FormsControls/File'
import {required} from '../../../utils/Validators/validators'

const UploadFile=(props)=>{
  return(
    <div >
    <Field  type="file" validate={[required]} component={File} name={props.name} className="form-control" />
    </div>
  )
}

export default UploadFile