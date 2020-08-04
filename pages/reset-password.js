import React, { Component, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Auth from '../service/auth';
import toast from '../util/toast';

const auth = new Auth();

const ForgotPassword = () => {
    const [userInfo, setUserInfo] = useState({ passwordCurrent: "", password: "", passwordConfirmation: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = window.location.href.split("?")[1];
            const response = await auth.resetPassword({...userInfo, confirmToken: token});
            toast.success(response.success);
        } catch(err) {
            toast.error(err.data.error);
        }
    }

    const onChange = (event) => {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value
        });
    }

    return (
        <React.Fragment>
            <Navbar />
            <Breadcrumb title="Forgot Password" />
            <section className="login-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Reset Password </h2>
                                </div>

                                <form className="login-form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" value={userInfo.password} onChange={onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Re-type Password</label>
                                        <input type="password" className="form-control" placeholder="Re-type your password" id="password" name="passwordConfirmation" value={userInfo.passwordConfirmation} onChange={onChange} />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Facility />
            <Footer />
        </React.Fragment>
    );
}

export default ForgotPassword;
