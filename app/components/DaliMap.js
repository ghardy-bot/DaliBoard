/**
 * Component to render a mpa
 * Props: members, onMarkerPress
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import NightViewMapStyle from './MapStyles/NightViewMapStyle.json';

export default class Members extends Component<Props> {

	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: 30.78825,
				longitude: -100.4324,
				latitudeDelta: 50,
				longitudeDelta: 55,
			}
		};
	}

	render() {
		const memberMarkers = this.props.members.map(member => 
			<MapView.Marker 
				coordinate={{latitude: member.coordinate[0], longitude: member.coordinate[1]}} 
				key={member.id}
				onPress={() => this.props.onMarkerPress(member)}
			/>
		);
		return(
			<MapView
				provider={"google"}
			    style={styles.map}
			    customMapStyle={NightViewMapStyle}
				initialRegion={this.state.region}
				onRegionChange={(region) => this.setState({region})}
				onRegionChangeComplete={(region) => this.setState({region})} >
				{memberMarkers}
			</MapView>
			);
	}
}

const styles = StyleSheet.create ({
	map: {
		height: '100%',
		width: '100%'
	},
});