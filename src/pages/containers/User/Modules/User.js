import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//redux
import { bindActionCreators } from 'redux';
import * as creators from '../../../actions/home';
import { connect } from 'react-redux';

// 业务组件
import Header from '../../../components/User/Header';
import Links from '../../../components/User/Links';
import Info from '../../../components/User/Info';

// 业务组件
import Footer from "../../../components/_commom/Footer/Footer";
class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Links />
                <Info />
                <Footer />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        home: state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(creators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);