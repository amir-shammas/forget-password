import React from "react";
import Navbar from "./../../../Components/User/Navbar/Navbar";
import Topbar from "./../../../Components/User/Topbar/Topbar";

import "./ResetPassword.css";

function ResetPassword() {

  // return <div>ResetPassword</div>;

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">بازیابی رمز عبور</span>
          <div className="login__new-member">
            <span className="login__new-member-text">لطفا رمز عبور جدید را وارد نمایید</span>
          </div>

          {/* <form onSubmit={form.handleSubmit} className="login-form"> */}
          <form className="login-form">

          <div className="login-form__password">
              <input
                // type="password"
                // type={passwordInputType}
                name="password"
                placeholder="رمز عبور جدید"
                // className={form.errors.password && form.touched.password ? "login-form__username-input red-border" : "login-form__username-input green-border"}
                className="login-form__username-input green-border"
                id="password"
                // value={form.values.password}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
              />
              {/* <span className="login-form__password-icon" onClick={passwordInputHandler} ><Icon icon={passwordIcon} size={25} /></span> */}
              <span className="login-form__password-icon" >passwordIcon</span>
            </div>
            <div className="error-message">
              {/* {form.errors.password && form.touched.password && form.errors.password} */}
            </div>

            <div className="login-form__password">
              <input
                // type="password"
                // type={confirmPasswordInputType}
                name="confirmPassword"
                placeholder="تکرار رمز عبور جدید"
                // className={form.errors.confirmPassword && form.touched.confirmPassword ? "login-form__username-input red-border" : "login-form__username-input green-border"}
                className="login-form__username-input green-border"
                id="confirmPassword"
                // value={form.values.confirmPassword}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
              />
              {/* <span className="login-form__password-icon" onClick={confirmPasswordInputHandler} ><Icon icon={confirmPasswordIcon} size={25} /></span> */}
              <span className="login-form__password-icon" >confirmPasswordIcon</span>
            </div>
            <div className="error-message">
              {/* {form.errors.confirmPassword && form.touched.confirmPassword && form.errors.confirmPassword} */}
            </div>

            <button
              type="submit"
            //   className={form.isSubmitting || !form.isValid ? "invalid-btn login-form__btn login-form__btn-error" : "login-form__btn login-form__btn-success"}
              className="login-form__btn login-form__btn-success"
            //   disabled={form.isSubmitting || !form.isValid}
            >
              <i className="login-form__btn-icon fa fa-lock-open"></i>
              {/* <span className="login-form__btn-text">{form.isSubmitting ? "در حال ارسال ..." : "ورود"}</span> */}
              <span className="login-form__btn-text">ثبت رمز عبور جدید</span>
            </button>

          </form>
          
        </div>
      </section>

    </>
  );

}

export default ResetPassword;
