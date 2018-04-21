import React, { Component } from 'react';
import { Radio, Toast } from 'antd-mobile';
import * as types from '../../../constants/actions/cart';


class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: 0,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.list !== nextProps.list) {
			const {
				list
			} = nextProps;

			list && list.map((t, i) => {
				if (t.status === '1') {
					this.setState({
						checked: 1,
						id: t.id
					});
				}
			});
		}

	}

  handleOnChange = e => {
  	const {
  		id,
  	} = e.target;
  	this.setState({
  		checked: 1,
  		id,
  	});
  }

  handleCommitBtn = () => {
  	const {
  		id
  	} = this.state;
  	const {
  		list
  	} = this.props;
  	let url = types.CART_ADDRESS_MAIN_GET;

  	let param = {

  	};
  	list.map(t => {
  		if (t.id === id) {
  			param = {
  				id: t.id
  			};
  		}
  	});

  	let params = {
  		param: param,
  		ajaxType: 'POST',
  		onSuccess: (res) => {
  			Toast.info(res.msg, 1);
  		},
  		onError: (res) => {
  			Toast.info(res.msg, 1);
  		}
  	};

  	this.props.actions.request(url, params, {});
  }

  handleRemove = e => {
  	const id = e.target.getAttribute('id');

  	let url = types.CART_ADDRESS_DEL_MAIN_GET;

  	let param = {
  		id
  	};
  	let params = {
  		param: param,
  		ajaxType: 'POST',
  		onSuccess: (res) => {
  			Toast.info(res.msg, 1);
  		},
  		onError: (res) => {
  			Toast.info(res.msg, 1);
  		}
  	};

  	this.props.actions.request(url, params, {});
  }

  render() {

  	const {
  		checked,
  		id
  	} = this.state;
  	const {
  		list
  	} = this.props;
  	return (
  		<div>
  			<ul>
  				{
  					list && list.map((t, i) => (
  						<li
  							key={i}
  						>
  							<Radio
  								className="my-radio"
  								checked={(checked !== 0) && (t.id === id)}
  								onChange={this.handleOnChange}
  								id={t.id}
  							>
  								<span>{t.name}</span>
  								<span>{t.phone}</span>
  								<span>{t.place}</span>
  								<span>{t.city}</span>
  								<button id={t.id} onClick={this.handleRemove}>删除</button>
  							</Radio>
  						</li>
  					))
  				}
  			</ul>
  			<button
  				onClick={this.handleCommitBtn}
  			>确定</button>
  		</div>
  	);
  }
}

export default List;