import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TouchableOpacity, TextInput,ImageBackground, View, Alert } from 'react-native';
import { useState } from 'react';
import Result from '../components/Result';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Weight = (props:any) => {
  const [selectedUnit, setSelectedUnit] = useState('');
  const [convertUnit, setConvertUnit] = useState('');
  const [weight, setWeight] = useState(0);
  const [convertedWeight, setConvertedWeight] = useState<number | null>(null);
  const convertWeight = (weight: number) => {
    if (!selectedUnit || !convertUnit) {
      Alert.alert('Please select both units');
      return;
    }
    let convertedWeight = weight;
    if (selectedUnit === 'kg' && convertUnit === 'kg') {
      convertedWeight = weight;
    } else if (selectedUnit === 'kg' && convertUnit === 'g') {
      convertedWeight = weight * 1000;
    } else if (selectedUnit === 'g' && convertUnit === 'kg') {
      convertedWeight = weight / 1000;
    } else if (selectedUnit === 'g' && convertUnit === 'mg') {
      convertedWeight = weight * 1000;
    } else if (selectedUnit === 'kg' && convertUnit === 'mg') {
      convertedWeight = weight * 1000000;
    }else if (selectedUnit === 'mg' && convertUnit === 'kg') {
      convertedWeight = weight / 1000000;
    } else if (selectedUnit === 'mg' && convertUnit === 'g') {
      convertedWeight = weight / 1000;
    }
    setConvertedWeight(parseFloat(convertedWeight.toFixed(3)));
  };

  return (
    <ImageBackground source={require('../assets/Images/BG7.jpg')} style={{flex:1}} blurRadius={7}>
    <View style={styles.rootContainer}>
      <View style={styles.BackBtn}>
              <TouchableOpacity onPress={() =>props.navigation.navigate("Main")}>
              <Icon name='arrow-back-ios-new' size={30} color={'#1A3636'}/> 
              </TouchableOpacity>
            </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Weight</Text>
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
          <Picker.Item label="Kilogram (kg)" value="kg" />
          <Picker.Item label="Gram (g)" value="g" />
          <Picker.Item label="Milligram (mg)" value="mg" />
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
          <Picker.Item label="Kilogram (kg)" value="kg" />
          <Picker.Item label="Gram (g)" value="g" />
          <Picker.Item label="Milligram (mg)" value="mg" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => {
            const parsedValue = parseFloat(text);
            if (!isNaN(parsedValue)) {
              setWeight(parsedValue);
            }
          }}
          placeholder="Enter Value..."
          value={weight ? weight.toString() : ''}
        />
      </View>

      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.ConvertBtn} onPress={() => convertWeight(weight)}>
          <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Convert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ConvertBtn}
          onPress={() => {
            setWeight(0);
            setSelectedUnit('');
            setConvertUnit('');
            setConvertedWeight(null);
          }}
        >
          <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>Reset</Text>
        </TouchableOpacity>
      </View>

      {convertedWeight !== null && (
        <Result Value={convertedWeight} Unit={selectedUnit} convertUnit={convertUnit} />
      )}
    </View>
    </ImageBackground>
  );
};

export default Weight;


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
  },
  picker: {
    height: 52,
    width: '100%',
    color: '#1A3636',
    borderRadius: 50,
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
