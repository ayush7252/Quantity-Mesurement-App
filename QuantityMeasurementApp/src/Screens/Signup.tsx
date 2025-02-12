import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Example(props: any) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
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

                        <Text style={styles.title}>Let's Get Started!</Text>

                        <Text style={styles.subtitle}>
                            Fill in the fields below to get started with your new account.
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Full Name</Text>

                            <TextInput
                                clearButtonMode="while-editing"
                                onChangeText={name => setForm({ ...form, name })}
                                placeholder="John Doe"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.name} />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email Address</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                keyboardType="email-address"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="john@example.com"
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

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Confirm Password</Text>

                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={confirmPassword =>
                                    setForm({ ...form, confirmPassword })
                                }
                                placeholder="********"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.confirmPassword} />
                        </View>

                        <View style={styles.formAction}>
                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Get Started</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.formFooter}>
                        Already have an account?{' '}
                        <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
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
        left: 15,
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
    /** Header */
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 24,
        paddingHorizontal: 24,
        marginTop:50
    },
    headerBack: {
        padding: 8,
        paddingTop: 0,
        position: 'relative',
        marginLeft: -16,
        marginBottom: 6,
    },
    /** Form */
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
    formFooter: {
        paddingVertical: 24,
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
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
        borderColor: '#D6BD98',
        borderStyle: 'solid',
        elevation: 20,
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2.5,
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