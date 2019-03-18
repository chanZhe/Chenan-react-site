import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Layout} from 'antd'
import '../css/SystemHead.css'

const {Header}  = Layout

class SystemHeader extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {userInfo} = this.props;
        return(
            <Header className="systemHeader" >
                <div className="systemLogo">
                   苏州市应急平台综合应用系统
                </div>
                <div className="headerUserInfo">
                    <i></i> {userInfo}
                </div>
            </Header>
        )
    }
}

function mapStateToProps(state){
    return {
        userInfo:state.loginReducer.token.username
    }
}

const SystemHead = connect(mapStateToProps)(SystemHeader);

export default SystemHead;