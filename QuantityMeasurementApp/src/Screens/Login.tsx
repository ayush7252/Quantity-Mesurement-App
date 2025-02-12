import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Login(props: any) {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (form.email === 'abc' && form.password === '123') {
            Alert.alert(
                "Login Successful",
                "Welcome back!",
                [{text: "OK",onPress: () => props.navigation.navigate('Main')}],
                {cancelable: false}
            );
        } else{
            Alert.alert(
                "Login Failed",
                "Invalid email or password",
                
            );
        }
    };
    return (
        <ImageBackground source={require('../assets/Images/BG5.jpg')} style={{ flex: 1 }} blurRadius={5}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAwareScrollView style={styles.container}>
                    <View style={styles.BackBtn}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                            <Icon name='arrow-back-ios-new' size={30} color={'#1A3636'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={require('../assets/Images/Logo2.png')} />

                        <Text style={styles.title}>
                            Sign in to MyApp
                        </Text>

                        <Text style={styles.subtitle}>
                            Get access to your portfolio and more
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email address</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="abc@example.com"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.email} />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Password</Text>

                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={password => setForm({ ...form, password })}
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.password} />
                        </View>

                        <View style={styles.formAction}>
                            <TouchableOpacity
                                 onPress={handleLogin}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Sign in</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <Text style={styles.formLink}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Signup")}>
                    <Text style={styles.formFooter}>
                        Don't have an account?{' '}
                        <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    BackBtn: {
        position: 'absolute',
        top: 5,
        left: 20,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#1A3636',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },

    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A3636',
        textAlign: 'center',
    },
    formFooter: {
        paddingVertical: 24,
        fontSize: 15,
        fontWeight: '600',
        color: '#1A3636',
        textAlign: 'center',
        letterSpacing: 0.15,
    },

    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1A3636',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#D6BD98',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        backgroundColor: '#1A3636',
        borderColor: '#D6BD98',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#D6BD98',
    },
});