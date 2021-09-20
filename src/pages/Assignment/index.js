import { useNavigation } from '@react-navigation/native';
import  React, { useState } from 'react'
import {View, Text, Button} from 'react-native' 

import api from '../services/api';

export default function Contato({route}){
const navigation = useNavigation()

const [assignment,setAssiegment] = useState('');

//console.warn(route)
api.get("/assignment").then((api)=>{
console.log(api.data);
});

 return(
 <View>
     <Text>Assignmentss</Text>
     <Text>{route.params?.email}</Text>
     <Text>{route.params?.twitter}</Text>

 <Button title="Voltar para o início" onPress={ () => navigation.goBack() }></Button>

 </View>
 );
} 