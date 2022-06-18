import { Formik } from "formik";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalsSlice";
import { handleSubmitType } from "./AppForm";
import { publicApi } from "../../api";


const QuestionsForm: React.FC = () => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required('Поле обязательно'),
    email: yup.string().email("Некорректный адрес электронной почты").required('Поле обязательно'),
    phone: yup.string().required('Поле обязательно').matches(/^((\+7|7|8)+([0-9]){10})$|\b\d{3}[-.]?\d{3}[-.]?\d{4}/, "Некорректный номер телефона"),
    message: yup.string().required('Поле обязательно'),
    isAgree: yup.boolean().oneOf([true],'Поле обязательно')
  });

  const userFormValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    isAgree: false,
  };

  const onSuccess = () => {
    dispatch(toggleModal({ name: "message", state: true }));
    document.documentElement.classList.add('lock');
  };

  const handleSubmit: handleSubmitType<typeof userFormValues> = async (userData, { resetForm }) => {
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
    <section className="questions">
      <div className="questions__container">
        <div className=" container">
          <div className="questions__inner">
            <h2 className="questions__title">Остались вопросы?</h2>
            <p className="questions__text">Оставьте заявку на звонок и мы ответим на все ваши вопросы в самое ближайшее время</p>
            <Formik 
              initialValues={userFormValues} 
              validationSchema={formSchema} 
              onSubmit={handleSubmit}
            >
            {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
              <form className="questions__form" onSubmit={handleSubmit}>
                <div className="questions__form-block">
                  <label 
                    htmlFor="name" 
                    className="popup__label form-label"
                    />
                  <input 
                    id="name"
                    name="name"
                    className={`questions__form-input ${errors.name && touched.name ? 'form-input--error' : ''} `}
                    type="text" 
                    placeholder="Ваше имя"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.name && touched.name && <p className="questions__form-message">{errors.name}</p> }
                </div>

                <div className="questions__form-block">
                  <label 
                    htmlFor="phone" 
                    className="popup__label form-label"
                    />
                  <input 
                    id="phone"
                    name="phone"
                    className={`questions__form-input ${errors.phone && touched.phone ? 'form-input--error' : ''} `}
                    type="tel" 
                    placeholder="Ваш телефон"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  { errors.phone && touched.phone && <p className="questions__form-message">{errors.phone}</p> }
                </div>
                <div className="questions__form-block">
                  <label 
                    htmlFor="email" 
                    className="popup__label form-label"
                    />
                  <input 
                    id="email"
                    name="email"
                    className={`questions__form-input ${errors.email && touched.email ? 'form-input--error' : ''} `}
                    type="text" 
                    placeholder="Ваша почта"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  { errors.email && touched.email && <p className="questions__form-message">{errors.email}</p> }
                </div>

                <div className="questions__form-block">
                  <label 
                    htmlFor="questions-area" 
                    className="popup__label form-label"
                    />
                  <textarea 
                    id="questions-area"
                    name="message"
                    className={`questions__form-textarea ${errors.message && touched.message ? 'form-input--error' : ''} `}
                    placeholder="Оставьте ваш вопрос"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  { errors.message && touched.message && <p className="questions__form-message">{errors.message}</p> }
                </div>

                <label 
                  className="questions__form-label"
                  htmlFor="questions-form-agree"
                  >
                  <input
                    id="questions-form-agree"
                    name="isAgree"
                    className="questions__form-real" 
                    type="checkbox"
                    checked={values.isAgree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  <span 
                    className={`questions__form-fake ${touched.isAgree && errors.isAgree ? 'form-input--error': '' }`}
                    />
                  <span className="questions__form-agree">
                    Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                  </span>
                </label>
                <button 
                  className="questions__form-btn btn" 
                  type="submit"
                  >
                  Заказать звонок
                </button>
            </form>
            )}
          </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsForm;
