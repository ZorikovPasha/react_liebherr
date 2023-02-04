import React from 'react'

type AppTextFieldType = {
  blockClass: string,
  name: string,
  type: string,
  value: string,
  placeholder: string,
  labelClass: string,
  inputClass: string,
  hasError: boolean,
  errorMessage: string,
  tag: string
  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
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
}) => {
  return (
    <div className={blockClass}>
      <label 
        htmlFor={name}
        className={labelClass}
      >
        {tag === "input"
          ? 
            <input 
              value={value}
              name={name}
              className={`${inputClass}  ${hasError ? "form-input--error": ""}`}
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
            />
          : 
            <textarea 
              value={value}
              name={name}
              className={`${inputClass} ${hasError ? "form-input--error": ""}`}
              placeholder={placeholder}
              onChange={handleChange}
            />
        }
      </label>
      { hasError && <p className="questions__form-message">{errorMessage?.toString()}</p> }
    </div>
  )
}
