import React from 'react';
import { View, TextInput } from 'react-native';

// Call like this
// <InputNoLabel
//   secureTextEntry
//   autoCorrect={false}
//   placeholder="password"
//   value={this.state.password}
//   onChangeText={password => this.setState({ password })}
// />

const InputNoLabel = ({ id, value, onChangeText, placeholder, secureTextEntry, autoCorrect }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        id={id}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
};

export { InputNoLabel };
