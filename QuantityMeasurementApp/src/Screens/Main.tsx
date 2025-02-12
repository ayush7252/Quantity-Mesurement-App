import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Main = (props:any) => {
    return (
        <ImageBackground source={require('../assets/Images/BG1.jpg')} style={{flex:1}} blurRadius={6}>
        <View style={styles.Container}>
            
            <View style={styles.Header}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#c6bac9' }}>Quantity Mesurement</Text>
            </View>
            <View style={styles.Main}>
                <View style={styles.MainCard}>
                    <Text style={styles.HeadingTxt}>Choose Unit ...</Text>
                    <TouchableOpacity style={styles.Button} onPress={() =>props.navigation.navigate("Length")}>
                        <Text style={{ color: '#48484a', fontSize: 20, fontWeight: 'bold' }}>Length</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() =>props.navigation.navigate("Weight")}>
                        <Text style={{ color: '#48484a', fontSize: 20, fontWeight: 'bold' }}>Weight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button} onPress={() =>props.navigation.navigate("Temperature")}>
                        <Text style={{ color: '#48484a', fontSize: 20, fontWeight: 'bold' }}>Temperature</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            </ImageBackground>
    )
}

export default Main

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: '#D6BD98',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    Header: {
        height: 80,
        width: '100%',
        backgroundColor: '#1A3636',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    Main: {
        flex: 1,
        // backgroundColor: '#D6BD98',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '95%',
        width: '90%',
    },
    MainCard: {
        height: '70%',
        width: '90%',
        // backgroundColor: '#1A3636',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius:30,
    },
    Button: {
        height: '15%',
        width: '70%',
        backgroundColor: '#D6BD98',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'grey',
        elevation: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    HeadingTxtContainer: {
        justifyContent: 'flex-start',
        marginTop: -60,
        backgroundColor:'#bebec5',
        width:'90%'
    },
    HeadingTxt: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#40534C'
    }


})