import { Picker } from '@react-native-picker/picker';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View,Alert, TextInput } from 'react-native';
import { useState } from 'react';
import Result from '../components/Result';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Temperature = (props:any) => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [convertUnit, setConvertUnit] = useState('');
  const [temperature, setTemperature] = useState('');
  const [convertedTemperature, setConvertedTemperature] = useState(null);

  const convertTemperature = () => {
    if (!selectedUnit || !convertUnit) {
      Alert.alert('Please select both units');
      return;
    }

    let tempValue = parseFloat(temperature);
    if (isNaN(tempValue)) {
      Alert.alert('Please enter a valid number for the temperature');
      return;
    }

    let convertedTemp = tempValue;

    if (selectedUnit === '°C' && convertUnit === '°F') {
      convertedTemp = (tempValue * 9/5) + 32; 
    } else if (selectedUnit === '°C' && convertUnit === 'K') {
      convertedTemp = tempValue + 273.15; 
    } else if (selectedUnit === '°F' && convertUnit === '°C') {
      convertedTemp = (tempValue - 32) * 5/9; 
    } else if (selectedUnit === '°F' && convertUnit === 'K') {
      convertedTemp = ((tempValue - 32) * 5/9) + 273.15; 
    } else if (selectedUnit === 'K' && convertUnit === '°C') {
      convertedTemp = tempValue - 273.15; 
    } else if (selectedUnit === 'K' && convertUnit === '°F') {
      convertedTemp = ((tempValue - 273.15) * 9/5) + 32; 
    }
    setConvertedTemperature(parseFloat(convertedTemp.toFixed(3)));
  };
  const resetFields = () => {
    setTemperature('');
    setSelectedUnit('');
    setConvertUnit('');
    setConvertedTemperature(null);
  };

  return (
    <ImageBackground source={require('../assets/Images/BG5.jpg')} style={{flex:1}} blurRadius={2}>
    <View style={styles.rootContainer}>
      <View style={styles.BackBtn}>
        <TouchableOpacity onPress={() =>props.navigation.navigate("Main")}>
        <Icon name='arrow-back-ios-new' size={30} color={'#1A3636'}/> 
        </TouchableOpacity>
      </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Temperature</Text>
        </View>

        <View style={styles.subHeadingContainer}>
          <Text style={[styles.subHeadingTwo ,{color:'#40534C'}]}>From</Text>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedUnit}
            onValueChange={(value) => setSelectedUnit(value)}
            style={styles.picker}
          >
            <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
        </View>

        <View style={styles.subHeadingContainer}>
          <Text style={[styles.subHeadingTwo ,{color:'#40534C'}]}>To</Text>
        </View>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={convertUnit}
            onValueChange={(value) => setConvertUnit(value)}
            style={styles.picker}
          >
            <Picker.Item label="Celsius (°C)" value="°C" />
            <Picker.Item label="Fahrenheit (°F)" value="°F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => setTemperature(text)}
            placeholder="Enter Temperature..."
            value={temperature}
          />
        </View>

        <View style={styles.BtnContainer}>
          <TouchableOpacity style={styles.ConvertBtn} onPress={convertTemperature}>
            <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Convert</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ConvertBtn} onPress={resetFields}>
            <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Reset</Text>
          </TouchableOpacity>
        </View>
        {convertedTemperature !== null && (
        <Result Value={convertedTemperature} Unit={selectedUnit} convertUnit={convertUnit} />
      )}
    </View>
    </ImageBackground>
  );
};

export default Temperature;

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
    elevation:20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#1A3636',
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
  resultContainer: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    backgroundColor: '#D6BD98',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#9d8189',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#1A3636',
    fontWeight: '600',
    textAlign: 'center',
  },
});
