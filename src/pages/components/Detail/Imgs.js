import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
const Imgs = (props) => {
	const {
		img = []
	} = props;
	return (
		<div className="g-reset" style={{ height: _global.innerWidth }}>
			{img.length > 0 &&
				<Carousel
					autoplay={true}
					infinite={true}
					mode="banner"
					autoplayInterval={2000}
				>
					{img && img.map(item => (
						<img
							key={item}
							src={`${item.img_url}!1-1`}
							style={{ width: _global.innerWidth, height: _global.innerWidth }}
						/>
					))}
				</Carousel>
			}
		</div>

	);
};

export default Imgs;
