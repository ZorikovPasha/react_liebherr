import { Formik } from "formik";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";

const SupplyForm: React.FC = () => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    phone: yup.string().required('This field is required'),
    isAgree: yup.boolean().oneOf([true],'This field is required')
  });

  const userFormValues = {
    name: "",
    phone: "",
    isAgree: false,
  };

  const onSuccess = () => {
    dispatch(toggleModal({ name: "message", state: true }));
    document.documentElement.classList.add('lock');
  };

  const handleSubmit = (userData: typeof userFormValues) => {
    console.log(userData);
    onSuccess();
  };

  return (
    <section className="main-form">
      <div className="main-form__container">
        <div className="container">
          <div className="main-form__inner">
            <h3 className="main-form__title">
              <span>Оперативно</span> поставим технику
            </h3>
            <Formik 
              initialValues={userFormValues} 
              validationSchema={formSchema}
              onSubmit={handleSubmit}
              >
            {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
            <form className="main-form__form" onSubmit={handleSubmit}
            >
            <div className="main-form__line">
              <div className="main-form__block main-form__block--pushed form__block form__block--floating">
                <input 
                  id="main-form-input-name"
                  name="name"
                  className={`floating__input ${errors.name && touched.name ? 'form-input--error' : ''} `}
                  type="text" 
                  placeholder="Ваше имя"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label 
                  htmlFor="main-form-input-name" 
                  className="floating__label" 
                  data-content="Ваше имя"
                  >
                </label>
              </div>
              <div className="main-form__block main-form__block--pushed form__block form__block--floating">
                <input 
                  id="main-form-input-phone"
                  name="phone"
                  className={`floating__input ${errors.phone && touched.phone ? 'form-input--error' : ''} `}
                  type="text" 
                  placeholder="Ваш телефон"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                <label 
                  htmlFor="main-form-input-phone" 
                  className="floating__label" 
                  data-content="Ваш телефон"
                  >
                </label>
              </div>
              <button 
                className="main-form__btn btn" 
                type="submit"
                >
                Заказать звонок
              </button>
            </div>
            <label className="main-form__label">
              <input
                id="main-form-agree"
                name="isAgree"
                className="main-form__checkbox-real" 
                type="checkbox" 
                checked={values.isAgree}
                onChange={handleChange}
                onBlur={handleBlur}
                />
              <span 
                className={`main-form__checkbox-fake ${errors.isAgree ? 'main-form__checkbox-fake--error': '' }`}
                />
              <span className="main-form__agree">
                Я согласен с 
                <span className="main-form__agree-link">
                  условиями обработки 
                </span>
                и использования моих персональных данных
              </span>
            </label>
          </form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupplyForm;
