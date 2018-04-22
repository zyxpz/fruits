import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = (props) => {
	const { actions, itemArr, itemObj, tabs, type } = props;
	return (
		<div>
			{
				itemArr.map((item, index) => {
					return (
						<Item 
							key={`${item}`} 
							itemData={itemObj[item]}
							actions={actions}
							type={type}
							tabs={tabs}
						/>
					);
				})
			}
		</div>
	);
};
export default List;
