import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Colors} from '../../constants/Colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../ui/Button';

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [SelectedLocation, setSelectedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();

  const changeTitleHandler = enteredText => {
    setEnteredTitle(enteredText);
  };

  
  const onPickImageHandler = (imageUri) => {
    setSelectedImage(imageUri)
  }
  
  const onPickLocationHandler = useCallback ( (location) => {
    setSelectedLocation(location)
  }, [])
  
  const savePlaceHandler = () => {
    console.log(enteredTitle)
    console.log(selectedImage)
    console.log(SelectedLocation)
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}> Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} />
      </View>
      <ImagePicker onPickImage={onPickImageHandler}/>
      <LocationPicker onPickLocation={onPickLocationHandler}/>
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 1,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 8,
  },
});
