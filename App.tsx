import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
const [randomcolor, setRandomColorOne] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
  setRandomColorOne(color);
   
  };

  return (
    <>
      <StatusBar />
      <View style={[styles.mainContainer]}>
        <ScrollView horizontal={true} style={styles.container}>
          <TouchableOpacity style={styles.container} onPress={generateColor}>
            <View style={[styles.circleOne, {backgroundColor: randomcolor}]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={generateColor}>
            <View style={[styles.circleTwo, {backgroundColor: randomcolor}]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={generateColor}>
            <View style={[styles.circleThree, {backgroundColor: randomcolor}]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={generateColor}>
            <View style={[styles.circleFour, {backgroundColor: randomcolor}]}>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={generateColor}>
            <View style={[styles.circleFive, {backgroundColor: randomcolor}]}>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
  },
  circleOne: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111111',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleTwo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111111',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }, circleThree: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111111',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }, circleFour: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111111',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }, circleFive: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: '#111111',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
  },
});





// function App(): JSX.Element {
//   const [randomBackground, setRandomBackground] = useState("#ffffff");

//   const generateColor = () => {
//     const hexRange = "0123456789ABCDEF"
//     let color = "#"

//     for (let i = 0; i < 6; i++) {
//       color += hexRange[Math.floor(Math.random() * 16)]
      
//     }
//     setRandomBackground(color)
//   }

//   return (
//     <>
//     <StatusBar backgroundColor={randomBackground}/>
//     <View style={[styles.container, {backgroundColor: randomBackground}] }>
//       <TouchableOpacity onPress={generateColor}>
//         <View style={styles.actionBtn}>
//           <Text style={styles.actionBtnTxt}>Press me</Text>
//         </View>
//       </TouchableOpacity>
      
//     </View>
//     </>
//     );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   actionBtn: {
//     borderRadius: 12,
//     backgroundColor: "#6A1B4D",
//     paddingVertical: 10,
//     paddingHorizontal: 40
//   },
//   actionBtnTxt: {
//     fontSize: 24,
//     color: "#FFFFFF",
//     textTransform: "uppercase"
//   }
// });

export default App;
