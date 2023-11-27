// Kotak.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Kotak = ({ imageSource, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.kotak}>
            <Image source={imageSource} style={styles.image} />
            {text && <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    kotak: {
        width: 100,
        height: 100,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default Kotak;
