import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './app/components/screens/Home';
import NewsDetail from './app/components/screens/NewsDetail';
import NewsList from './app/components/lists/NewsList';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerBackTitleStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10
        }
        
      }}>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="NewsList" component={NewsList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
