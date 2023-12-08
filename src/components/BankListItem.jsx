import { View, Text, StyleSheet, Image } from "react-native"

export const BankListItem = ({ item }) => {
    return (
        <View style={style.container}>
            <Image source={{ uri: item?.url }} style={style.logoImage} />
            <View style={style.textView}>
                <Text style={style.textTitle}>{item?.bankName}</Text>
                <Text style={style.textDescription}>{item?.description}</Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: { width: "100%", height: 60, backgroundColor: '#ffffff', flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    textTitle: { fontWeight: 'bold', fontSize: 14, color: "#000000" },
    textDescription: { fontWeight: '300', fontSize: 14, color: "#000000" },
    textView: { marginLeft: 12, width: '80%' },
    logoImage: { resizeMode: 'contain', height: 60, width: 60, marginLeft: 5 }
})