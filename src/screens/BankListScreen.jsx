import React, { Fragment } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { useGetData } from '../hooks/useGetData';
import { Header } from "../components/Header";
import { BankList } from "../components/BankList";

export const BankListScreen = () => {
    console.log("ya en home", useGetData())

    return (

        <Fragment>
            <SafeAreaView style={style.mainContainer} />
            <SafeAreaView style={style.container}>
                <Header />
                <BankList/>
            </SafeAreaView>
        </Fragment >
    )

}
const style = StyleSheet.create({
    mainContainer: { flex: 0, backgroundColor: '#029edb' },
    container: { backgroundColor: "#f0f0f0", flex: 1 }
})