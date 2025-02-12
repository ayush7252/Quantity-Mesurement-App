import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Result = ({ Value, Unit, convertUnit }: { Value: number, Unit: string, convertUnit: string }) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={[styles.subHeadingTwo, { fontSize: 20 }]}>
        Converted Value: {Value} {convertUnit}
      </Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#D6BD98',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#9d8189',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1A3636',
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeadingTwo: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    color: '#1A3636',
  },
});
