import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import TwitterLogin from 'react-twitter-login';
import InstagramLogin from 'react-instagram-login';
import google from '../../images/icons/google.png';
import facebook from '../../images/icons/facebook.png';
import Auth from '../../service/auth';
import toast from '../../util/toast';

const auth = new Auth();

const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const SocialButtons = () => {
    const responseGoogle = async (response) => {
        try {
            const res = await auth.signInWithGoogle(response.profileObj);
            const username = res.user.firstName + " " + res.user.lastName;
            toast.success(`${username} has been successfully logged in.`);
        } catch (err) {
            toast.error("Sign in Failed");
        }
    }

    const responseFacebook = async (response) => {
        try {
            const res = await auth.signInWithFacebook(response);
            const username = res.user.firstName + " " + res.user.lastName;
            toast.success(`${username} has been successfully logged in.`);
        } catch (err) {
            toast.error(err.data.error);
        }    
    }

    const responseTwitter = (response) => {
        
    }

    const responseInstagram = (response) => {

    }

    const componentClicked = () => {

    }

    const btnStyle = {
        marginTop: "20px"
    }

    return (
        <React.Fragment>
            <div className="row" style={btnStyle}>
                <div className="col-md-6 form-group">
                    <GoogleLogin
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Continue with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} type="button" className="btn btn-light d-flex align-items-center">
                                <img src={google} alt="facebook" width="30" height="30" className='mr-2' />
                                Continue with Google
                            </button>
                        )}
                    />
                </div>
                <div className="col-md-6 form-group">
                    <FacebookLogin
                        appId={FACEBOOK_CLIENT_ID}
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        icon="fa-facebook"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} type="button" className="btn btn-light d-flex align-items-center">
                                <img src={facebook} alt="facebook" width="30" height="30" className='mr-2' />
                                Continue with Facebook
                            </button>
                        )}
                    />
                </div>
                {/*<div className="col-md-6 form-group">
                                    <TwitterLogin
                                        authCallback={responseTwitter}
                                        consumerKey={"CONSUMER_KEY"}
                                        consumerSecret={"CONSUMER_SECRET"}
                                        callbackUrl={"CALLBACK_URL"}
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <InstagramLogin
                                        clientId="5fd2f11482844c5eba963747a5f34556"
                                        buttonText="Login"
                                        onSuccess={responseInstagram}
                                        onFailure={responseInstagram}
                                    >
                                    </InstagramLogin>
                                </div>*/}
            </div>
        </React.Fragment>
    );
}

export default SocialButtons;