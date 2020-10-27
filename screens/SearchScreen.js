import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import db from "../config";

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTransanctions: [],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.bar}
                        placeholder="Enter Book Id or Student Id"
                        onChangeText={(text) => { this.setState({ search: text }) }} />
                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={() => { this.searchTransactions(this.state.search) }}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={this.state.allTransanctions}
                    renderItem={({ item }) => (
                        <View style={{ borderBottomWidth: 2 }}>
                            <Text>{"Book ID:" + item.bookID}</Text>
                            <Text>{"Student ID:" + item.studentID}</Text>
                            <Text>{"TransactionType:" + item.transactionType}</Text>
                            <Text>{"Date:" + item.date.toDate()}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={this.fetchMoreTransactions}
                    onEndReachedThreshold={0.7} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    searchBar: {
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        borderWidth: 0.5,
        alignItems: 'center',
        backgroundColor: 'grey',

    },
    bar: {
        borderWidth: 2,
        height: 30,
        width: 300,
        paddingLeft: 10,
    },
    searchButton: {
        borderWidth: 1,
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
})

