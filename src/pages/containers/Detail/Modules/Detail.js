import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/detail';
import { connect } from 'react-redux'; 
//业务组件
import Imgs from "../../../components/Detail/Imgs";


class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {detail, actions, dispatch } = this.props;
        return (
            <div>
                {/*<Imgs />*/}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
       detail: state.detail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(creators, dispatch),
        dispatch   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);