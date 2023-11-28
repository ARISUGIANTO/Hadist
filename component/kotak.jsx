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
        width: 250,
        height: 180,
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
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5
    },
});

export default Kotak;
