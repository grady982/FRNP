import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [inputText, setInputText] = useState('');
  const [goals, setGoals] = useState([]);

  inputHandler = (text) => {
    setInputText(text);
  }

  onAddBtnClick = () => {
    console.log('show:', inputText);
    // setGoals([...goals, inputText]);

    // recommended way to update state when it depends on the previous state
    setGoals((currentGoals) => [...currentGoals, inputText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={inputHandler} />
        <Button title='ADD' onPress={onAddBtnClick} />
      </View>
      <View style={styles.goalsContainer}>
        { goals.map((goal, index) => <Text key={index}>{ goal }</Text>) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginBottom: 24
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  },
  goalsContainer: {
    flex: 4
  }
});
