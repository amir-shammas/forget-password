import React from "react";
import Navbar from "./../../../Components/User/Navbar/Navbar";
import Topbar from "./../../../Components/User/Topbar/Topbar";

import "./ForgetPassword.css";

function ForgetPassword() {

//   return <div>ForgetPassword</div>;

  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">فراموشی رمز عبور</span>
          <div className="login__new-member">
            <span className="login__new-member-text">لطفا ایمیلی که با آن ثبت نام نموده اید را وارد نمایید</span>
          </div>

          {/* <form onSubmit={form.handleSubmit} className="login-form"> */}
          <form className="login-form">

            <div className="login-form__password">
              <input
                type="text"
                name="email"
                placeholder="ایمیل"
                // className={form.errors.email && form.touched.email ? "login-form__username-input red-border" : "login-form__username-input green-border"}
                className="login-form__username-input green-border"
                id="email"
                // value={form.values.email}
                // onChange={form.handleChange}
                // onBlur={form.handleBlur}
              />
              <i className="login-form__username-icon fa fa-envelope"></i>
            </div>
            <div className="error-message">
              {/* {form.errors.email && form.touched.email && form.errors.email} */}
            </div>

            <button
              type="submit"
            //   className={form.isSubmitting || !form.isValid ? "invalid-btn login-form__btn login-form__btn-error" : "login-form__btn login-form__btn-success"}
              className="login-form__btn login-form__btn-success"
            //   disabled={form.isSubmitting || !form.isValid}
            >
              <i className="login-form__btn-icon fa fa-lock"></i>
              {/* <span className="login-form__btn-text">{form.isSubmitting ? "در حال ارسال ..." : "ورود"}</span> */}
              <span className="login-form__btn-text">ارسال لینک بازیابی رمز عبور</span>
            </button>

          </form>
          
        </div>
      </section>

    </>
  );

}

export default ForgetPassword;
