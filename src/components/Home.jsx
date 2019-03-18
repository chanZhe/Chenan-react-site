import React,{Component} from 'react'
import SystemHead from '../myComponents/SystemHead'
import DutyMenu from '../myComponents/DutyMenu'

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <SystemHead> </ SystemHead>
                <DutyMenu> </DutyMenu>
            </div>    
        )
    }
}


export default Home;