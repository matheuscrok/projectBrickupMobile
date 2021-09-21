import { useNavigation } from '@react-navigation/native';
import  React, { useState } from 'react'
import {View, Text, Button} from 'react-native' 

export default function Contato({route}){
const navigation = useNavigation()

// console.warn(route)

 return(
 <View>
     <Text>Assignments</Text>
     <Text>{route.params?.email}</Text>
     <Text>{route.params?.twitter}</Text>

 <Button title="Return to home" onPress={ () => navigation.goBack() }></Button>

 </View>
 );
} 