import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

const DetailHadist = () => {
    //1. Buat state / penyimpanan data
    const [dataHadith, setDataHadith] = useState([]);

    //2. Fungsi untuk mengambil data dari API
    const getData = async () => {
        try {
            const response = await fetch('https://api.hadith.gading.dev/books');
            const hasil = await response.json();

            // Pastikan hasil.data memiliki format array
            if (Array.isArray(hasil.data)) {
                setDataHadith(hasil.data);
            } else {
                // Jika hasil.data tidak sesuai dengan format array, tangani di sini sesuai kebutuhan.
                console.error('Format respons tidak sesuai dengan ekspektasi.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    //3. load data dari fungsi getData menggunakan useEffect
    useEffect(() => {
        getData();
    }, []); // Gunakan array kosong agar useEffect dijalankan hanya sekali setelah komponen dimount.

    // Fungsi untuk menangani klik pada item
    const handleItemPress = async (book) => {
        try {
            console.log('Item Pressed:', book);

            const rangeURL = `https://api.hadith.gading.dev/books/${book.name}?range=1-50`;
            console.log('Range URL:', rangeURL);

            const rangeResponse = await fetch(rangeURL);
            console.log('Range Response:', rangeResponse);

            if (rangeResponse.status === 404) {
                console.error('Buku tidak ditemukan');
                return;
            }

            const rangeData = await rangeResponse.json();
            console.log('Range Data:', rangeData);

            // Menampilkan data detail ke dalam alert
            Alert.alert(
                `Hadith Detail (${book.name} - ${book.author})`,
                JSON.stringify(rangeData.data),
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <ScrollView>
                {dataHadith.map((book, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleItemPress(book)}
                    >
                        <Text style={styles.book}>
                            {book.name} - {book.author}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default DetailHadist;

const styles = StyleSheet.create({
    book: {
        fontSize: 21,
        fontWeight: 'normal',
        marginBottom: 10,
    },
});
