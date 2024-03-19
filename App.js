import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './src/Product';
import AddProduct from './src/AddProduct';
import Cart from './src/Cart';
import ProductDetails from './src/ProductDetails';
import { CartProvider } from './CartContext';
import { CartPage } from './src/CartPage';
import { CartContext } from './CartContext';

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <CartProvider >
      <NavigationContainer>
        <stack.Navigator initialRouteName="Products" >

          <stack.Screen name='Products' component={Product}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Cart navigation={navigation} />
            })} />

          <stack.Screen name='Add Products' component={AddProduct}
            options={({ navigation }) => ({
              title: 'Add Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Cart navigation={navigation} />
            })} />
          <stack.Screen name='productDetails' component={ProductDetails}
            options={({ navigation }) => ({
              title: 'Product Details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Cart navigation={navigation} />
            })} />
          <stack.Screen name='cartpage' component={CartPage}
            options={({ navigation }) => ({
              title: 'Cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Cart navigation={navigation} />
            })} />

        </stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20
  }
});
