import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecipeResume from './RecipeResume';
import RecipeIngredients from './RecipeIngredients';
import RecipePreparation from './RecipePreparation';

const Tab = createMaterialTopTabNavigator();

const Description = ({ route, navigation }) => {

    const { data } = route.params;

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{data.name}</Text>
                </View>
            ),
            headerBackground: () => (
                <Image
                    source={{ uri: data.img }}
                    style={styles.headerBackground}
                />
            ),
            headerStyle: {
                height: 140, 
            },
        })
    }, [navigation, data])

    return (
        <Tab.Navigator    screenOptions={{
            tabBarShowIcon: false,
            tabBarIndicatorStyle: {
            backgroundColor: 'black', // Cor do indicador ativo
            height: 3,               // Espessura da linha (opcional)
            }
        }}>
            <Tab.Screen name="Resumo" component={RecipeResume} />
            <Tab.Screen name="Ingredientes" component={RecipeIngredients} />
            <Tab.Screen name="Preparo" component={RecipePreparation} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
    },
    titleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    },
    titleText: {
    color: '#000', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
})

export default Description;
