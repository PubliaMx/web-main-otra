// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeRouter } from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen.js';
import ShopScreen from '../screens/ShopScreen';
import MarketplaceScreen from '../screens/MarketplaceScreen';
import FoodScreen from '../screens/FoodScreen';
import TaxisScreen from '../screens/TaxisScreen';
import WalletScreen from '../screens/WalletScreen';
import NotFoundScreen from '../screens/NotFoundScreen'; // Opcional: para manejar rutas no encontradas

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NativeRouter>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
          <Stack.Screen name="Food" component={FoodScreen} />
          <Stack.Screen name="Taxis" component={TaxisScreen} />
          <Stack.Screen name="Wallet" component={WalletScreen} />
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeRouter>
  );
};

export default AppNavigator;
