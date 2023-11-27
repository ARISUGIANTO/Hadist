// HomeScreen.js

import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Kotak from '../component/kotak';

const HomeScreen = ({ navigation }) => {
    const handleKotakPress = () => {
        // Pindah ke layar berikutnya, misalnya 'DetailScreen'
        navigation.navigate('Setting');
    };

    return (
        <View style={styles.bg}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>HADIST SHAHIH</Text>
            </View>
            <ScrollView horizontal>
                <Kotak
                    imageSource={require('../src/image/images.jpg')}
                    text="Muslim"
                    onPress={handleKotakPress}
                />
                <Kotak
                    imageSource={require('../src/image/BG.jpg')}
                    text="Bukhari"
                    onPress={handleKotakPress}
                />
                <Kotak
                    imageSource={require('../src/image/images.jpg')}
                    text="Tirmidzi"
                    onPress={handleKotakPress}
                />
                <Kotak
                    imageSource={require('../src/image/BG.jpg')}
                    text="Nasai" onPress={handleKotakPress} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'blue',
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
