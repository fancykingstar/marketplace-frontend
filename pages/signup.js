import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Auth from '../service/auth';
import toast from '../util/toast';

const auth = new Auth();

const Signup = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "saler"
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await auth.createUserWithEmailAndPassword(userInfo);
            router.push("/login");
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
            <Breadcrumb title="Signup" />
            <section className="signup-area ptb-60">
                <div className="container">
                    <div className="signup-content">
                        <div className="section-title">
                            <h2><span className="dot"></span> Create an Account</h2>
                        </div>

                        <form className="signup-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" id="fname" name="firstName" value={userInfo && userInfo.firstName} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" id="lname" name="lastName" value={userInfo && userInfo.lastName} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter your name" id="email" name="email" value={userInfo && userInfo.email} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" value={userInfo && userInfo.password} onChange={onChange} />
                            </div>

                            <div className="form-group">
                                <label>Re-type Password</label>
                                <input type="password" className="form-control" placeholder="Re-type your password" id="confirmPassword" name="confirmPassword" value={userInfo && userInfo.confirmPassword} onChange={onChange} />
                            </div>

                            <button type="submit" className="btn btn-primary">Signup</button>
                            <Link href="/">
                                <a className="return-store">or Return to Store</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
            <Facility />
            <Footer />
        </React.Fragment>
    );
}

export default Signup;
