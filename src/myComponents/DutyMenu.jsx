import React,{Component} from 'react'
import {Menu,Icon} from 'antd'

class DutyMenu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Menu mode="horizontal">
                <Menu.Item>
                    <Icon type="snippets"/>信息接报
                </Menu.Item>
                <Menu.Item>
                    <Icon  type="edit"/>事件管理
                </Menu.Item>
                <Menu.Item>
                    <Icon type="copy"/>信息简报
                </Menu.Item>
                <Menu.Item>
                    <Icon type="pie-chart"/>接报统计
                </Menu.Item>
            </Menu>
        )
    }
}

export default DutyMenu;