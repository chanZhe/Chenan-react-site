import React,{ Component } from 'react'
import {Modal} from 'antd'


class Dialog extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            visible:nextProps.visible
        })
    }

    render(){
        return(
            <Modal visible={this.state.visible} closable={false} footer={null} centered={true} onCancel={this.props.cancelPannel}>
                <p>{this.props.text}</p>
            </Modal>
        )
    }
}

export default Dialog