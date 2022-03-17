import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { toggleModal } from "../../redux/slices/modalsSlice";

const HelpRequestForm: React.FC = () => {
  const dispatch = useDispatch();
  const formSchema = yup.object().shape({
    name: yup.string().required("This field is required"),
    phone: yup.string().required("This field is required"),
    isAgree: yup.boolean().oneOf([true], "This field is required"),
  });

  const userFormValues = {
    name: "",
    phone: "",
    isAgree: false,
  };

  const onSuccess = () => {
    dispatch(toggleModal({ name: "message", state: true }));
    document.documentElement.classList.add("lock");
  };

  const handleSubmit = (userData: typeof userFormValues) => {
    console.log(userData);
    onSuccess();
  };

  return (
    <div className="help">
      <div className="help__container">
        <div className="container">
          <h2 className="help__title">Нужна помощь в подборе?</h2>
          <Formik initialValues={userFormValues} validationSchema={formSchema} onSubmit={handleSubmit}>
            {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
              <form className="help__form" onSubmit={handleSubmit}>
                <div className="help__form-line">
                  <label htmlFor="help-form-name" className="help__form-label" />
                  <input
                    id="help-form-name"
                    name="name"
                    className={`help__form-input ${errors.name && touched.name ? "form-input--error" : ""} `}
                    type="text"
                    placeholder="Имя"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="help-form-phone" className="help__form-label" />
                  <input
                    id="help-form-phone"
                    name="phone"
                    type="tel"
                    className={`help__form-input ${errors.phone && touched.phone ? "form-input--error" : ""} `}
                    placeholder="Телефон"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <button className="help__form-btn btn" type="submit">
                    Получить консультацию
                  </button>
                </div>
                <label className="help__form-label">
                  <input
                    id="help-form-isAgree"
                    name="isAgree"
                    className="help__form-real"
                    type="checkbox"
                    checked={values.isAgree}
                    onChange={handleChange}
                  />
                  <span className={`help__form-fake ${errors.isAgree && touched.isAgree ? "form-input--error" : ""}`} />
                  <span className="help__form-agree">
                    Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
                  </span>
                </label>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default HelpRequestForm;
