import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import StockScreen from "./screens/StockScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      >
        <Tab.Screen
          name="Stocks"
          component={StockNavigator}
        />
        <Tab.Screen
          name="Portfolios"
          component={TabOneNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createStackNavigator();

function StockNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={StockScreen}
        options={{ headerTitle: 'Stocks' }}
      />
    </HomeStack.Navigator>
  );
}

const PortfolioStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <PortfolioStack.Navigator>
      <PortfolioStack.Screen
        name="PortfolioScreen"
        component={StockScreen}
        options={{ headerTitle: 'Portfolios' }}
      />
    </PortfolioStack.Navigator>
  );
}

export default Navigation;
