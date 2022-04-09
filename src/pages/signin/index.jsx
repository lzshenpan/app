import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import authAction from '../../redux/login/actions'
import { connect } from "react-redux";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './sigin.css'


const {login, resetMsg} = authAction;
let loginBox= {
    position:'absolute',
    letf:'30%',
    top:"20%",
    width: '30%',
    height: 'auto',
    margin: '0 auto',
    textAlign: 'center',
    background: '#00000080',
    padding: '50px 20px 30px 80px',
    marginLeft:'30%',
    marginTop:'5%',
}

class Signin extends Component {

    constructor(props){
        super(props)
        this.state={
            loginmsg:""
        }
    }

    componentDidUpdate(){
        if (this.props.isLogin){
            // alert("登录成功")
        }
    }

    componentDidUpdate(){
        if (this.props.loginMsg){
            setTimeout(()=>{this.props.resetMsg()},1000)
        }
    }
    
    render() {
        const {loginMsg} = this.props
        let onFinish = (values) => {
            this.props.login(values.username,values.password,false)
          }
        return (
            <div>
                <div style={{"background":`#5150F2 url(${require("../../source/images/2K模糊背景.png")}) no-repeat center `,"minheight":"100vh","height":`100vh`,"alignItems":"center","position":"relative","backgroundSize":"cover"}}>
                </div>
                <div  style={loginBox}>
                    <Form 
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                    {loginMsg && <div style={{"color":"red"}}>{loginMsg}</div>}
                </div>

            </div>
        );
    }
}

export default (
    connect(
        state=>({
            isLogin:state.auth.get('isLogin'),
            loginMsg:state.auth.get('loginMsg')
        }),
        {login,resetMsg}
    )(Signin)
)