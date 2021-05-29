import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../command/FormsControls/FormsControls";
import {maxLenghtCreator, requiredFild} from "../../Utils/Validators/Validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {MessageOutlined, PicRightOutlined, UsergroupAddOutlined} from "@ant-design/icons"
import "./Login.scss"





const maxLenght10 = maxLenghtCreator(10);

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return ( <div className="login">
        <div className="login__block">
            <div className="login__block-left">
                <h3>
                    Join to social network
                </h3>
                <p>
                    Please enter you login and password
                </p>
                <div className="login__block-about">
                    <div className="login__block-ico">
                        <i>
                            <UsergroupAddOutlined  style={{fontSize :"30px",color:"#fff"}}/>
                        </i>
                    </div>
                    <div className="login__block-description">
                        <p>Add user</p>
                    </div>
                </div>
                <div className="login__block-about">
                    <div className="login__block-ico">
                        <i>
                            <PicRightOutlined style={{fontSize :"30px",color:"#fff"}} />
                        </i>
                    </div>
                    <div className="login__block-description">
                        <p>Create your Posts</p>
                    </div>
                </div>
                <div className="login__block-about">
                    <div className="login__block-ico">
                        <i>
                            <MessageOutlined style={{fontSize :"30px",color:"#fff"}} />
                        </i>
                    </div>
                    <div className="login__block-description">
                        <p>Send message</p>
                    </div>
                </div>
            </div>
            <div className="login__block-right">
                <div className="login__form">
                    <form onSubmit={handleSubmit}>
                        <div className="login__form-input">
                            <Field placeholder={'Email'} name={'email'}
                                //validate={[requiredFild,maxLenght10]}
                                   component={Input}/>
                        </div>
                        <div className="login__form-input">
                            <Field placeholder={'Password'} name={'password'} component={Input}/>
                        </div>
                        <div className="login__form-checkbox">
                            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>
                            <p>Remember</p>
                        </div>
                        { error && <div className="login__form-error">
                            {error}
                        </div>}
                        {captchaUrl && <img src={captchaUrl}/>}
                        {captchaUrl && <Field placeholder={'Symbols'} name={'captcha'} component={Input}/> }
                        <div className="login__form-btn">
                            <button> Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

const ReduxLoginForm = reduxForm(
    {
        form: 'login'
    }
) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);