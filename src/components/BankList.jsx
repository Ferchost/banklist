import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native"
import { useGetData } from "../hooks/useGetData";
import { BankListItem } from "./BankListItem";

export const BankList = () => {
    const data = useGetData()
    return (

        <>
            {
                data?.ready ?
                    <FlatList
                        data={data?.data}
                        renderItem={({ item }) => <BankListItem item={item} />}
                        keyExtractor={item => item.bankName}
                    />
                    :
                    <ActivityIndicator size="large" color="#029edb" />


            }
            <Text style={{ position: 'absolute', bottom: 25, left: 25 }}>data source: {data?.source}</Text>


        </>


    )
}

