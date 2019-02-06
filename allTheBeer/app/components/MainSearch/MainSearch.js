import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ccc'
    }
});

class MainSearch extends PureComponent {
    constructor() {
        super();

        this.state = {
            query: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputChange(query) {
        this.setState({ query });
    }

    handleInputSubmit() {
        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        blurOnSubmit={true}
                        placeholder="Search for a beer"
                        onChangeText={(text) => this.handleInputChange(text)}
                        onSubmitEditing={this.handleInputSubmit}
                        value={this.state.query}
                    />
                </View>
            </View>
        );
    }
}

MainSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default MainSearch;
