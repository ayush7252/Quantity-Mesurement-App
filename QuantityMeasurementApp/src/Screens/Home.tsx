import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

export default function LandingPage(props:any) {
    return (
        <ImageBackground style={{flex:1}}source={require('../assets/Images/BG5.jpg')}>
            <SafeAreaView style={styles.container}>
                <View style={styles.hero}>
                    <Image
                        source={require('../assets/Images/Logo2.png')}
                        style={styles.heroImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.title}>
                            Convert Your Dimension's {'\n'}
                            With{' '}{'\n'}
                            <View style={styles.appName}>
                                <Text style={styles.appNameText}>Quantity Mesurement App</Text>
                            </View>
                        </Text>
                        <Text style={styles.text}>
                        Convert with confidence—accurate, quick unit conversions at your fingertips, simplifying tasks and transforming measurements for precision.
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() =>props.navigation.navigate("Login")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Let's go</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#D6BD98',
    },
    title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#281b52',
        textAlign: 'center',
        marginBottom: -12,
        lineHeight: 40,
    },
    text: {
        fontSize: 15,
        lineHeight: 24,
        fontWeight: '400',
        color: '#9992a7',
        textAlign: 'center',
        marginTop:30,
    },
    hero: {
        margin: 12,
        borderRadius: 16,
        padding: 16,
    },
    heroImage: {
        width: '100%',
        height: 350,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingHorizontal: 24,
        marginTop:-40,
    },
    contentHeader: {
        paddingHorizontal: 24,
    },
    appName: {
        backgroundColor: '#fff2dd',
        transform: [
            {
                rotate: '-5deg',
            },
        ],
        paddingHorizontal: 6,

    },
    appNameText: {
        fontSize: 27,
        fontWeight: '600',
        color: '#281b52',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#1A3636',
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height:50,
    },
    buttonText: {
        fontSize: 22,
        lineHeight: 20,
        fontWeight: '600',
        color: '#D6BD98',
    },
});