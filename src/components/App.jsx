
import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addIfOdd} from '../Redux/Action/index'
import { bindActionCreators } from 'redux'
import {Link,withRouter} from 'react-router-dom'

// React component
class App extends Component {
    render() {
      const { value, onIncreaseClick } = this.props
      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
          <span><Link to='/'>back</Link></span>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    debugger;
    return {
      value: state.countReducer
    }
  }
  
  // Map Redux actions to component props
  function mapDispatchToProps(dispatch) {
    return {
      onIncreaseClick: bindActionCreators(addIfOdd,dispatch)
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))