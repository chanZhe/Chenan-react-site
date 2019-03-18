import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'
import '../css/login.css'
import {Row,Col,Input,Icon,Button} from 'antd'
import { bindActionCreators } from 'redux'
import {loginAction} from '../Redux/Action/loginAction'
import {connect} from 'react-redux'
import Dialog from '../myComponents/Tips'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            visible: false
        };
        this.changeUser = this.changeUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.cancelPannel = this.cancelPannel.bind(this);
    }

    changeUser(e){
       this.setState({
           username:e.target.value
       })
    }

    cancelPannel(){
        this.setState({
            visible:false
        })
    }

    showbox(boolen){
        this.setState({
            visible:boolen
        })
    }

    changePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    submitLogin(){
        if(this.state.username == 'admin' && this.state.password == '123456'){
            let token = this.state;
            this.props.setLoginState(token);
            this.props.history.push("/home");
        }else{
            this.setState({
                visible:true
            })
            return false;
        }
    }

    render(){
        const {setLoginState} = this.props;
        return(
            <div className="loginContainer">
                <div className='loginBanner'></div>
                <div className="loginFooter">
                        <Row>
                            <Col span={10}>
                                <div className="orgLogo"></div>
                            </Col>
                            <Col span={10}>
                                <Row>
                                    <Col span={18}>
                                        <div className="userInput">
                                            <div className="userInfo">
                                                <Input size='large' onPressEnter={this.submitLogin} onChange={this.changeUser} addonBefore={<Icon type="team"  style={{fontSize:'20px'}}/>}></Input>
                                            </div>
                                            <div className="password">
                                                <Input size='large'  onPressEnter={this.submitLogin} onChange={this.changePassword} type="password" addonBefore={<Icon type="key"  style={{fontSize:'20px'}}/>}></Input>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <Button type="primary" shape="circle" onClick={this.submitLogin}>
                                            <Icon type="login"/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={4}>
                                <div className="erweima"></div>
                            </Col>
                        </Row>
                </div>
                <Dialog visible={this.state.visible} text="账号或密码错误" cancelPannel = {this.cancelPannel}></Dialog>
            </div>
        )
    }
}

function mapToProps(state){
    return{
        isLogin:state.loginReducer.loginState
    }
}

function mapdispatchtoprops(dispatch){
    return{
        setLoginState:bindActionCreators(loginAction,dispatch)
    }
}

const login = connect(mapToProps,mapdispatchtoprops)(withRouter(Login));

export default login