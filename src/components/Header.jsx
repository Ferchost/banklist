import { View, Text, StyleSheet } from "react-native"

export const Header = () => {
    return (
        <View style={style.container}>
            <Text style={style.textStyile}>Lista de bancos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: { width: "100%", height: 60, backgroundColor: '#029edb', alignItems: 'center', justifyContent: 'center' },
    textStyile: { fontWeight: 'bold', fontSize: 18, color: "#f0f0f0" }
})