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
    const [email, setEmail] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth.forgotPassword({ email: email });
            toast.success(response.success);
        } catch(err) {
            toast.error(err.data.error);
        }
    }

    const onChange = (event) => {
        setEmail(event.target.value);
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
                                    <h2><span className="dot"></span> Forgot Password</h2>
                                </div>

                                <p>Please enter your email address and we will send you an email about how to reset your password.</p>

                                <form className="login-form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter your email" id="email" name="email" value={email} onChange={onChange} />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    
                                    <Link href="/login">
                                        <a className="forgot-password">Back to Login</a>
                                    </Link>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> New Customer</h2>
                                </div>

                                <span>Create a Account</span>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                <Link href="/signup">
                                    <a className="btn btn-light">Create A Account</a>
                                </Link>
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
