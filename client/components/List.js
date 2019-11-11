import React from 'react';
import {
    View,
    Text,
    Picker,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import ListItem from './ListItem';

function List({
    sortingType,
    sortingOrder,
}) {
    return (
        <View style={styles.list}>
            <ListItem></ListItem>
            <ListItem></ListItem>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        width: vw(90),
    },
});

const mapStateToProps = state => ({
    sortingType: state.sorting.sortingType,
    sortingOrder: state.sorting.sortingOrder,
});

List.propTypes = {
    sortingType: PropTypes.string,
    sortingOrder: PropTypes.number,
};

List.defaultProps = {
    sortingType: 'height',
    sortingOrder: -1,
};

export default connect(mapStateToProps)(List);