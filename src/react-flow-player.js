import React from 'react';
import {equals} from 'ramda';
import initFlowPlayerSetup from './lib/init-flow-player-setup';
import initFlowPlayerScript from './lib/init-flow-player-script';
import defaultPropsInit from './default-props-init';
import propTypesConfig from './prop-types-config';

class ReactFlowPlayer extends React.Component {
	constructor() {
		super();
		this._initPlayer = this._initPlayer.bind(this);
	}
	_initPlayer() {
		initFlowPlayerSetup(this.props);
	}
	componentDidMount() {
		/* eslint-disable no-undef */
		if (window.flowplayer) {
			this._initPlayer();
		} else {
			initFlowPlayerScript({
				context: document,
				onLoad: this._initPlayer,
				src: this.props.playerInitScript,
				hlsPlugin: this.props.hlsPlugin
			});
		}
		/* eslint-disable no-undef */
	}
	shouldComponentUpdate(nextprops) {
		return equals(this.props.sources, nextprops.sources) || equals(this.props.title, nextprops.title) || equals(this.props.live, nextprops.live) || equals(this.props.rtmp, nextprops.rtmp);
	}
	componentWillUpdate() {
		if (window.flowplayer) {
			this._initPlayer();
		}
	}
	render() {
		return (
			<div
				className={this.props.className}
				dangerouslySetInnerHTML={{
					__html: `<div id="${this.props.playerId}"></div>`
				}}
			/>
		);
	}
}

ReactFlowPlayer.defaultProps = defaultPropsInit;
ReactFlowPlayer.propTypes = propTypesConfig;
export default ReactFlowPlayer;
