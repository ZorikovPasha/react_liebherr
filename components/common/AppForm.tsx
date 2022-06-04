import React from 'react'
import { Formik, FormikHelpers } from "formik";
import { publicApi } from '../../api';
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";
import { AppTextField } from './AppTextField';

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
}

export type handleSubmitType<T> = ((values: T, formikHelpers: FormikHelpers<T>) => void | Promise<unknown>)

export const AppForm: React.FC<AppFormPropsType> = ({ 
  fields,
  formSchema, 
  initValues,
  buttonClass="",
  buttonText,
  formClass="",
  agreeLabelClass="popup__label form-label"
}) => {
  const dispatch = useDispatch();

  const onClose = () => {
    document.documentElement.classList.remove('lock');
    dispatch(toggleModal({ name: "request", state: false }));
  };

  const onSuccess = () => {
    onClose();

    dispatch(toggleModal({ name: "message", state: true }));
    document.documentElement.classList.add('lock');
  };

  const handleSubmit: handleSubmitType<typeof initValues> = async (userData, { resetForm }) => {
    const res = await publicApi.sendRequest(userData)

    if (res?.success) {
      onSuccess();
      resetForm();
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
