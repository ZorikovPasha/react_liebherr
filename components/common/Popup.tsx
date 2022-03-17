import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { ClientOnlyPortal } from "../";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";

const PopupRequest: React.FC = ({  }) => {
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

  const formSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup.string().email("").required('This field is required'),
    phone: yup.string().required('This field is required'),
    isAgree: yup.boolean().oneOf([true],'This field is required')
  });

  const userFormValues = {
    name: "",
    phone: "",
    email: "",
    isAgree: false,
  };

  const handleSubmit = (userData: typeof userFormValues) => {
    console.log(userData);
    onSuccess();
  };

  return (
    <ClientOnlyPortal selector="#modal">
      <div className="popup">
        <div className="popup__body">
          <button 
            className="popup__close" 
            onClick={onClose}
            >
            <img src="/static/images/close.svg" alt="close icon" />
          </button>
          <h3 className="popup__title">Арендовать спецтехнику</h3>
          <p className="popup__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
          <Formik 
            initialValues={userFormValues} 
            validationSchema={formSchema} 
            onSubmit={handleSubmit}
           >
            {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
              <form 
                className="popup__form" 
                onSubmit={handleSubmit}
                >
                <label 
                  htmlFor="name" 
                  className="popup__label form-label"
                  >
                  <input
                    id="name"
                    name="name"
                    className={`popup__input ${errors.name && touched.name ? 'form-input--error' : ''} `}
                    type="text" 
                    placeholder="Ваше имя"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  </label>
                <label 
                  htmlFor="phone" 
                  className="popup__label form-label"
                  >
                  <input 
                    id="phone"
                    name="phone"
                    className={`popup__input ${errors.phone && touched.phone ? 'form-input--error' : ''} `}
                    type="tel"
                    placeholder="Ваш телефон*"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  </label>
                <label 
                  htmlFor="email" 
                  className="popup__label form-label"
                  >
                  <input
                    id="email"
                    name="email"
                    className={`popup__input ${errors.email && touched.email ? 'form-input--error' : ''} `}
                    type="text"
                    placeholder="Ваша почта"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  </label>
                <label 
                  className="popup__label form-label" 
                  htmlFor="agree"
                  >
                  <input 
                    id="agree"
                    name="agree"
                    className="form-label__checkbox-real" 
                    type="checkbox"
                    checked={values.isAgree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   />
                  <span 
                    className={`main-form__checkbox-fake ${errors.isAgree ? 'main-form__checkbox-fake--error': '' }`}
                    />
                  <span className="form-label__text">
                    Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                  </span>
                </label>
                <button 
                  className="popup__btn btn" 
                  type="submit"
                  >
                  Оставить заявку
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export default PopupRequest;
