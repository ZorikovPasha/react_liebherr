import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { toggleModal } from "../../redux/slices/modalsSlice";

const ContactsForm: React.FC = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    document.documentElement.classList.remove("lock");
    dispatch(toggleModal({ name: "request", state: false }));
  };

  const onSuccess = () => {
    onClose();

    dispatch(toggleModal({ name: "message", state: true }));
    document.documentElement.classList.add("lock");
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup.string().email("").required("This field is required"),
    phone: yup.string().required("This field is required"),
    message: yup.string().required("This field is required"),
    isAgree: yup.boolean().oneOf([true], "This field is required"),
  });

  const userFormValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    isAgree: false,
  };

  const handleSubmit = (userData: typeof userFormValues) => {
    console.log(userData);
    onSuccess();
  };

  return (
    <Formik initialValues={userFormValues} validationSchema={formSchema} onSubmit={handleSubmit}>
      {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => (
        <form className="contacts__form form-contacts" onSubmit={handleSubmit}>
          <label htmlFor="contacts-name" className="form-label">
            <input
              id="contacts-name"
              name="name"
              className={`form-contacts__input ${errors.name && touched.name ? "form-input--error" : ""} `}
              type="text"
              placeholder="Ваше имя"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <div className="form-contacts__line">
            <label htmlFor="email" className="form-label form-label--fgrow">
              <input
                id="email"
                name="email"
                className={`form-contacts__input ${errors.email && touched.email ? "form-input--error" : ""} `}
                type="text"
                placeholder="Ваша почта"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="phone" className="form-label form-label--fgrow form-label--margin-left">
              <input
                id="phone"
                name="phone"
                className={`form-contacts__input ${errors.phone && touched.phone ? "form-input--error" : ""} `}
                type="tel"
                placeholder="Ваш телефон*"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <label htmlFor="questions-area" className="form-label" />
          <textarea
            id="questions-area"
            name="message"
            className={`form-contacts__area ${errors.message && touched.message ? "form-input--error" : ""} `}
            placeholder="Оставьте ваш вопрос"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label className="form-contacts__label form-label" htmlFor="agree">
            <input
              id="agree"
              name="isAgree"
              className="form-label__checkbox-real"
              type="checkbox"
              checked={values.isAgree}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className={`form-label__checkbox-fake ${errors.isAgree ? "form-input--error" : ""}`} />
            <span className="form-label__text">
              Я согласен с <a href="#">условиями обработки</a> и использования моих персональных данных
            </span>
          </label>
          <button className="popup__btn btn" type="submit">
            Оставить заявку
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactsForm;
