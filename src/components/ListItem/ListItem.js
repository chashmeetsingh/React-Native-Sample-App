import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const listItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed} >
            <View style={styles.listItem}>
                <Image source={props.catImage} style={styles.catImage} />
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        margin: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    catImage: {
        marginRight: 9,
        height: 30,
        width: 30
    }
});

export default listItem