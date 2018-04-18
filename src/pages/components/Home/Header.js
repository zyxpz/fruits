import React, { Component } from 'react';
import API_ROOT from '../../constants/apiRoot';
import * as types from '../../constants/actions/home'
class Header extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleReduce = this.handleReduce.bind(this);
    }
    handleAdd() {
        let url = types.HOME_COUNT_ADD
        this.props.actions.request(url);
    }
    handleReduce() {
        this.props.actions.countReduce();
    }
    render() {
        return (
            <div>
               首页
            </div>
        )
    }

}
export default Header;