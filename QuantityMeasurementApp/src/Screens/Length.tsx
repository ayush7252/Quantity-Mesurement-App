import { Picker } from '@react-native-picker/picker';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Result from '../components/Result';

const Length = (props: any) => {
  const [selectedUnit, setSelectedUnit] = useState('cm');
  const [convertUnit, setConvertUnit] = useState('cm');
  const [length, setLength] = useState('');
  const [convertedLength, setConvertedLength] = useState<number | null>(null);

  // Conversion function
  const convertLength = () => {
    if (!selectedUnit || !convertUnit) {
      Alert.alert('Please select both units');
      return;
    }

    let lengthValue = parseFloat(length);
    if (isNaN(lengthValue)) {
      Alert.alert('Please enter a valid number for the length');
      return;
    }

    let convertedValue = lengthValue;

    // Length conversion logic
    if (selectedUnit === 'cm' && convertUnit === 'm') {
      convertedValue = lengthValue / 100;
    } else if (selectedUnit === 'cm' && convertUnit === 'km') {
      convertedValue = lengthValue / 100000;
    } else if (selectedUnit === 'm' && convertUnit === 'cm') {
      convertedValue = lengthValue * 100;
    } else if (selectedUnit === 'm' && convertUnit === 'km') {
      convertedValue = lengthValue / 1000;
    } else if (selectedUnit === 'km' && convertUnit === 'cm') {
      convertedValue = lengthValue * 100000;
    } else if (selectedUnit === 'km' && convertUnit === 'm') {
      convertedValue = lengthValue * 1000;
    }

    setConvertedLength(parseFloat(convertedValue.toFixed(3)));
  };

  // Reset function
  const resetFields = () => {
    setLength('');
    setSelectedUnit('cm');
    setConvertUnit('cm');
    setConvertedLength(null);
  };

  return (
    <ImageBackground source={require('../assets/Images/BG2.jpg')} style={{flex:1}} blurRadius={6}>
    <View style={styles.rootContainer}>
      {/* Back Button */}
      <View style={styles.BackBtn}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
          <Icon name="arrow-back-ios-new" size={30} color="#1A3636" />
        </TouchableOpacity>
      </View>

      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Length</Text>
      </View>

      {/* From Unit Picker */}
      <View style={styles.subHeadingContainer}>
        <Text style={[styles.subHeadingTwo ,{color:'#40534C'}]}>From</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedUnit}
          onValueChange={(value) => setSelectedUnit(value)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
        </Picker>
      </View>

      {/* To Unit Picker */}
      <View style={styles.subHeadingContainer}>
        <Text style={[styles.subHeadingTwo ,{color:'#40534C'}]}>To</Text>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={convertUnit}
          onValueChange={(value) => setConvertUnit(value)}
          style={styles.picker}
        >
          <Picker.Item label="Centimeters (cm)" value="cm" />
          <Picker.Item label="Meters (m)" value="m" />
          <Picker.Item label="Kilometers (km)" value="km" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={(text) => setLength(text)}
                  placeholder="Enter Temperature..."
                  value={length}
                />
              </View>

      {/* Conversion and Reset Buttons */}
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.ConvertBtn} onPress={convertLength}>
          <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Convert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ConvertBtn} onPress={resetFields}>
          <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Reset</Text>
        </TouchableOpacity>
      </View>

      {convertedLength !== null && (
        <Result Value={convertedLength} Unit={selectedUnit} convertUnit={convertUnit} />
      )}
    </View>
    </ImageBackground>
  );
};

export default Length;

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: '#677D6A',
    flex: 1,
    padding: 10,
  },
  BackBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  headingContainer: {
    marginTop: 70,
  },
  heading: {
    fontSize: 35,
    color: '#1A3636',
    textAlign: 'center',
    fontWeight: '700',
  },
  subHeadingContainer: {
    marginTop: 30,
  },
  subHeadingTwo: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    color: '#D6BD98',
  },
  pickerContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#9d8189',
    borderRadius: 20,
    backgroundColor: '#D6BD98',
    elevation:20
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#1A3636',
  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
  },
  input: {
    height: 52,
    width: '100%',
    color: '#1A3636',
    borderRadius: 50,
    backgroundColor: '#D6BD98',
    paddingHorizontal: 20,
    fontSize:20,
  },
  ConvertBtn: {
    width: '70%',
    height: 50,
    backgroundColor: '#1A3636',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 30,
  },
  BtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    color: '#1A3636',
    fontWeight: '600',
  },
});
