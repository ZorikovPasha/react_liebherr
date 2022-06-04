import { FormikErrors } from 'formik'
import React from 'react'

type AppTextFieldType = {
  blockClass: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  labelClass: string,
  inputClass: string,
  hasError: any,
  errorMessage: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined,
  handleChange: any,
  handleBlur: any,
  tag: string
}

export const AppTextField: React.FC<AppTextFieldType> = ({ 
  blockClass, 
  tag,
  name, 
  hasError,
  errorMessage, 
  type, 
  value, 
  placeholder, 
  labelClass,
  inputClass, 
  handleChange, 
  handleBlur
}) => {
  return (
    <div className={blockClass}>
      <label 
        htmlFor={name}
        className={labelClass}
        >
          {tag === "input"
            ? (
              <input 
                name={name}
                className={`${inputClass}  ${hasError ? "form-input--error": ""}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              <textarea 
                name={name}
                className={`${inputClass}  ${hasError ? "form-input--error": ""}`}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )
          }

      </label>
      { hasError && <p className="questions__form-message">{errorMessage}</p> }
    </div>
  )
}
