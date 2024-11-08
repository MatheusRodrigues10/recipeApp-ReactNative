import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { recipeData } from '../data/recipeData';

const Recipe = ({ navigation }) => {

    const redirect = (item) => {
      navigation.navigate('Description', { data: item })
    }

    const renderRecipeItem = ({ item }) => (
        <TouchableHighlight onPress={() => redirect(item)} underlayColor={'#f9f9f9'}>
            <View style={styles.itemContainer}>
              <Image resizeMode='contain' source={{uri: item.img}} style={styles.img}/>
              <View style={styles.itemDescription}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>Feito: {item.madeBy}</Text>
                <Text>Serve: {item.servings}</Text>
              </View>
            </View>
        </TouchableHighlight>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={recipeData}
                keyExtractor={(item) => item.id}
                renderItem={renderRecipeItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    itemContainer: {
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row'
    },
    img: {
    width: 100,
    height: 70,
    borderRadius: 10
    },
    itemDescription: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 10,
      marginRight: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Recipe;
