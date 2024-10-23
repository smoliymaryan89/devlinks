import { AxiosError } from "axios";
import { useFormik } from "formik";
import { RegisterFormData } from "../../types/auth";
import { useAppDispatch } from "../../hooks/useRedux";
import { register } from "../../store/auth/authOperations";

import Input from "../Input/Input";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import BtnLoader from "../Loader/BtnLoader";
import styles from "./RegisterForm.module.scss";
import CustomToast from "../CustomToast/CustomToast";
import authValidations from "../../utils/validations/authValidation";

const RegisterForm = () => {
  const { isLoading } = useAuth();
  const dispatch = useAppDispatch();

  const {
    errors,
    values,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik<RegisterFormData>({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: authValidations.register,
    onSubmit: async ({ email, password, confirmPassword }) => {
      if (!email.trim() || !password.trim() || !confirmPassword.trim()) return;

      try {
        await dispatch(register({ email, password })).unwrap();

        toast.custom((t) => (
          <CustomToast
            t={t}
            text="Registration is successful!"
            icon={"check"}
          />
        ));

        resetForm();
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          toast.custom((t) => (
            <CustomToast
              t={t}
              text={`${error?.response?.data?.message}!`}
              icon={"warning"}
            />
          ));
        } else {
          toast.custom((t) => (
            <CustomToast
              t={t}
              text={"An unknown error occurred!"}
              icon={"warning"}
            />
          ));
        }
      }
    },
  });
  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div>
        <Input
          id="registerEmail"
          label="Email address"
          placeholder="e.g. alex@email.com"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          iconName="icon-email"
          isError={!!(touched.email && errors.email)}
          className={styles.wrapper}
          errors={errors}
        />

        {touched.email && errors.email ? (
          <div className={styles.error}>
            <p>{errors.email}</p>
          </div>
        ) : null}
      </div>

      <div>
        <Input
          id="registerPassword"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          iconName="icon-password"
          isError={!!(touched.password && errors.password)}
          errors={errors}
          className={styles.wrapper}
        />
        {touched.password && errors.password ? (
          <div className={styles.error}>
            <p>{errors.password}</p>
          </div>
        ) : null}
      </div>

      <div>
        <Input
          id="registerConfirmPassword"
          label="Confirm password"
          placeholder="At least .8 characters"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          iconName="icon-password"
          isError={!!(touched.confirmPassword && errors.confirmPassword)}
          className={styles.wrapper}
          errors={errors}
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <div className={styles.error}>
            <p>{errors.confirmPassword}</p>
          </div>
        ) : null}
      </div>

      <p className={styles.text}>Password must contain at least 8 characters</p>

      <Button
        title={isLoading ? <BtnLoader /> : "Create new account"}
        disabled={isLoading}
        variant={"primary"}
        type="submit"
      />
    </form>
  );
};

export default RegisterForm;
