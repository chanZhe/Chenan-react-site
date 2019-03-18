import React,{Component} from 'react';
import {Switch,Route,BrowserRouter,Redirect} from 'react-router-dom'
import Routers from './Route.config'
import {connect} from 'react-redux'

class Routes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {loginState} = this.props;
        return(
            <BrowserRouter >
                    <Switch>
                        {
                            Routers.map((item,index)=>{
                                return (<Route key={index} exact path={item.path} render={props =>{
                                    return (!item.auth?(<item.component {...props}/>):(loginState?<item.component {...props}/>:<Redirect to='/login' />))
                                }} />)
                            })
                        }
                    </Switch>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state,ownProps){
    return{
        loginState:state.loginReducer.loginStatus
    }
}

const routes = connect(mapStateToProps,null,null,{pure:false})(Routes);

export default routes