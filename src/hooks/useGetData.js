import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';




export const useGetData = () => {
    const [data, setData] = useState([])
    const [source, setSource] = useState('')
    const [localData, setLocalData] = useState([])
    const [ready, setReady] = useState(false)


    const storeInfo = async (id, value) => {
        try {
            await AsyncStorage.setItem(id, JSON.stringify(value));
        } catch (e) {

        }
    }

    const getLocalInfo = async () => {
        try {
            const value = await AsyncStorage.getItem('bankList');

            if (value !== null) {
                setData(JSON.parse(value))
                setSource('local')
                setReady(true)

            } else {
                console.log("null value")
                fetchData()
                setSource('API')
                setReady(true)
            }
        } catch (e) {

        }
    }

    const fetchData = async () => {
        const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await res.json();
        setData(json);
        storeInfo('bankList', json);
    }



    useEffect(() => {
        getLocalInfo()
    }, [0])
    return { data, source, ready }

}