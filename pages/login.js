import React, { Component, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import SocialButtons from '../components/auth/Social';
import Auth from '../service/auth';
import toast from '../util/toast';

const auth = new Auth();

const Login = () => {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth.signInWithEmailAndPassword(userInfo);
            const username = response.user.firstName + " " + response.user.lastName;
            toast.success(`${username} has been successfully logged in.`);
        } catch(err) {
            toast.error(err.data.error)
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
            <Breadcrumb title="Login" />
            <section className="login-area ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> Login</h2>
                                </div>

                                <form className="login-form" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" id="email" name="email" value={userInfo.email} onChange={onChange} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" value={userInfo.password} onChange={onChange} />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Login</button>
                                    
                                    <Link href="/forgot-password">
                                        <a className="forgot-password">Forgot password?</a>
                                    </Link>

                                    <SocialButtons />
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="new-customer-content">
                                <div className="section-title">
                                    <h2><span className="dot"></span> New Customer</h2>
                                </div>

                                <span>Create an Account</span>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                <Link href="/signup">
                                    <a className="btn btn-light">Create an Account</a>
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

export default Login;
