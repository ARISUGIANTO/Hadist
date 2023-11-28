// HomeScreen.js

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Kotak from '../component/kotak';

const HomeScreen = ({ navigation }) => {
    const handleKotakPress = () => {
        // Pindah ke layar berikutnya, misalnya 'DetailScreen'
        navigation.navigate('Detail');
    };

    return (
        <View style={styles.bg}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Kumpulan Hadist Shahih</Text>
            </View>
            <ScrollView horizontal>
                <Kotak
                    imageSource={require('../src/image/hadist1.png')}
                    text="Hadist"
                    onPress={handleKotakPress}
                />
                <Kotak
                    imageSource={require('../src/image/alquran.jpg')}
                    text="Alqur'an"
                    onPress={handleKotakPress}
                />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#E48F45',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        margin: 20,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
});
