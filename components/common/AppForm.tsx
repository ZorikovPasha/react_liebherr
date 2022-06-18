import React from 'react'
import { Formik, FormikHelpers } from "formik";
import { publicApi } from '../../api';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { toggleModal } from "../../redux/slices/modalsSlice";
import { AppTextField } from './AppTextField';
import { toggleLoader } from '../../redux/slices/loaderSilce';
import { selectProduct } from '../../redux/selectors';
import { MachineryType } from '../../types/dataTypes';


type fieldsType = {
  fields: {
    name: {
      inputClass: string,
      type: string,
      placeholder: string,
      labelClass: string,
      blockClass: string,
      tag: string
    },
    phone?: {
      inputClass: string,
      type: string,
      placeholder: string,
      labelClass: string,
      blockClass: string,
      tag: string
    },
    email?: {
      inputClass: string,
      type: string,
      placeholder: string,
      labelClass: string,
      blockClass: string,
      tag: string
    },
  }
}

type AppFormPropsType = {
  fields: fieldsType,
  formSchema: any,
  initValues: any,
  buttonClass: string,
  buttonText: string,
  formClass: string,
  agreeLabelClass?: string
  isOrder?: boolean
}

export type handleSubmitType<T> = ((values: T, formikHelpers: FormikHelpers<T>) => void | Promise<unknown>)

export const AppForm: React.FC<AppFormPropsType> = ({ 
  fields,
  formSchema, 
  initValues,
  buttonClass="",
  buttonText,
  formClass="",
  agreeLabelClass="popup__label form-label",
  isOrder=false
}) => {
  const dispatch = useDispatch();
  const { query } = useRouter()

  let desiredProduct: MachineryType | undefined
  if (query.id && !Array.isArray(query.id)) {
    desiredProduct = useSelector(selectProduct(Number(query.id)))
  }

  const handleSubmit: handleSubmitType<typeof initValues> = async (userData) => {
    dispatch(toggleLoader(true))

    let res;
    
    if (isOrder) {
      const data = { ...userData, id: desiredProduct?._id }
      
      res = await publicApi.makeOrder(data)
    } else {
      res = await publicApi.sendRequest(userData)
    }

    dispatch(toggleLoader(false))

    if (res?.success) {
      isOrder 
        ? dispatch(toggleModal({ name: "order", state: false }))
        : dispatch(toggleModal({ name: "request", state: false }));
      dispatch(toggleModal({ name: "message", state: true }));
    } else {
      dispatch(toggleModal({ name: "error", state: true }));
      document.documentElement.classList.add('lock');
    }
  };

  return (
    <Formik 
      initialValues={initValues} 
      validationSchema={formSchema} 
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
        <form 
          className={formClass}
          onSubmit={handleSubmit}
          >
            {Object.entries(fields.fields).map(([name, field]) => {
              const { 
                blockClass,
                inputClass,
                type,
                placeholder,
                labelClass,
                tag
              } = field;

              return (
                <AppTextField 
                  key={name}
                  tag={tag}
                  blockClass={blockClass}
                  name={name}
                  hasError={errors[name] && touched[name]}
                  type={type}
                  value={values[name]}
                  placeholder={placeholder}
                  labelClass={labelClass}
                  inputClass={inputClass}
                  errorMessage={errors[name]}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              )
            })}

          <label className={agreeLabelClass} >
            <input 
              name="isAgree"
              className="form-label__checkbox-real" 
              type="checkbox"
              checked={values.isAgree}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className={`form-label__checkbox-fake ${touched.isAgree && errors.isAgree ? 'form-label__checkbox-fake--error': '' }`}/>
            <span className="form-label__text">
              Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
            </span>
          </label>

          <button 
            className={buttonClass}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      )}
    </Formik>
  )
}
