import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import { Colors } from '../../constants/Colors';
import OutlineButton from '../ui/OutlineButton';

export default function ImagePicker({onPickImage}) {
  const [pickedImage, setPickedImage] = useState();

  const takeImageHandler = async () => {
    const image = await launchCamera({
      allowEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    onPickImage(image.assets[0].uri)
  };

  let imagePreview = <Text> No image taken yet </Text>

  if(pickedImage) {
     imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlineButton icon="camera" onPress={takeImageHandler}> Take Image </OutlineButton> 
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
