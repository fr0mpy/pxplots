import * as React from 'react';
import Flickity from 'react-flickity-component'

interface IProps {
	children: React.ReactNode;
	className: string;
}

export default class FlickityComponent extends React.PureComponent<IProps> {

	render() {
		const { children, className } = this.props;
		const flickityOptions = {
			contain: true,
			initialIndex: 0,
			draggable: false,
			freeScroll: true,
			wrapAround: true,
			groupCells: true,
			pageDots: false,
			fullScreen: false
		}

		// disableImagesLoaded={false}
		// 		reloadOnUpdate
		// 		static

		return (
			<Flickity
				className={className}
				elementType={'div'}
				options={flickityOptions}
				disableImagesLoaded={false}
			>
				{children}
			</Flickity>
		)
	}
}