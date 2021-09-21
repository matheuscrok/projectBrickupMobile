import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, Keyboard, FlatList } from 'react-native'

import api from '../services/api';

export default function Contato({ route }) {

    const navigation = useNavigation()

    const [assignments, setAssignments] = useState([]);

    //console.warn(route)

    useEffect(() => {
        async function load() {
            try {
                const responseapi = await api.get('/assignment')
                setAssignments(responseapi.data)
                console.log(responseapi.data)
                Keyboard.dismiss()
            } catch (error) {
                console.log('Erro ' + error)
            }
        }
        load();
    }, []);

    async function remove(props) {
        await api.delete(`assignment/${props.id}`);
        setStatus('Delete successful');

    }

    return (
        <View>
            <View>
                <FlatList
                data={assignments}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><Task data={item}/>}
                />
            </View>

            <Button title="Voltar para o início" onPress={() => navigation.goBack()}></Button>

        </View>
    );
    function Task({ data }) {
        return (
            <View >
                <Text>Name: {data.name}</Text>
                {/* <Text>Status: {data.status.toString()}</Text> */}
                <Text>Image: {data.pathimage}</Text>
                <Button title={"X"} onPress={()=>remove(data)} ></Button>
            </View>
        )
    }
}
