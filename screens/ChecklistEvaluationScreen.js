import React from 'react';
import { RadioButton } from 'react-native-material-ui';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  Alert,
} from 'react-native';
import { Card, CardSection, Button } from '../components/my_components';

// http://www.psico-online.net/consultorio/teste_ava_depressao.htm

class ChecklistEvaluationScreen extends React.Component {
  state = { 
    questionAnswerIndex: 0,
    questions: [
      'Sinto-me desanimado(a) deprimido(a) e triste:', 
      'De manhã é o momento em que eu me sinto melhor', 
      'Tenho crises de choro ou me sinto como se estivesse a chorar',
      'Tenho problemas de sono durante a noite',
      'Continuo a comer tanto quanto comia anteriormente',
      'Ainda tenho prazer em ter relações sexuais',
      'Notei que estou perdendo peso',
      'Tenho problemas de prisão de ventre',
      'O meu coração bate mais depressa do que o costume',
      'Canso-me sem motivo',
      'A minha mente está tão lúcida quanto antigamente',
      'Tenho facilidade em fazer as coisas que fazia anteriormente',
      'Sou agitado(a) e não consigo ficar parado(a)',
      'Sou otimista quanto ao futuro',
      'Sou mais irritável do que o usual',
      'Tenho facilidade em tomar decisões',
      'Sinto-me útil e necessário(a)',
      'Tenho uma vida muito intensa',
      'Tenho uma vida muito intensa',
      'Ainda gosto de fazer as coisas que fazia anteriormente',
    ],
    choice: [
      'Nunca',
      'Às vezes',
      'Frequentemente',
      'Quase sempre',
    ],
    value: [
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
      { value1: 1, value2: 2, value3: 3, value4: 4 },
      { value1: 4, value2: 3, value3: 2, value4: 1 },
    ],
    answers: 0,
    valueChecked: 1,
    checked: [true, false, false, false]
  };

  onButtonPress() {
    const totalValue = this.state.answers + this.state.valueChecked;
    if ((this.state.value[this.state.questionAnswerIndex + 1])) {
      this.setState({ valueChecked: (this.state.value[this.state.questionAnswerIndex + 1]).value1 });
    }
    this.setState({ answers: totalValue });
    if (this.state.questionAnswerIndex === 20) {
      Alert.alert(
        `Você fez ${this.state.answers} pontos.`,
        'Verifique o resultado relativo à sua ansiedade:\n\nEntre 20 e 31 : baixa \nEntre 32 e 43 : média baixa\nEntre 44 e 55 : média\nEntre 56 e 67 : média alta\nEntre 68 e 80 : alta',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }

    this.setState(prevQuestionAnswerIndex => ({ questionAnswerIndex: prevQuestionAnswerIndex.questionAnswerIndex + 1 }));
    this.setState({ checked: [true, false, false, false] });
  }

  onCheckFirst() {
    this.setState({ checked: [true, false, false, false] });
    const value = (this.state.value[this.state.questionAnswerIndex]).value1;
    this.setState({ valueChecked: value });
  }

  onCheckSecond() {
    this.setState({ checked: [false, true, false, false] });
    const value = (this.state.value[this.state.questionAnswerIndex]).value2;
    this.setState({ valueChecked: value });
  }

  onCheckThird() {
    this.setState({ checked: [false, false, true, false] });
    const value = (this.state.value[this.state.questionAnswerIndex]).value3;
    this.setState({ valueChecked: value });
  }

  onCheckForth() {
    this.setState({ checked: [false, false, false, true] });
    const value = (this.state.value[this.state.questionAnswerIndex]).value4;
    this.setState({ valueChecked: value });
  }


  render() {
    return (
      <Card>
        <CardSection style={styles.center}>
          <Text style={styles.font}>{this.state.questions[this.state.questionAnswerIndex]}</Text>
        </CardSection>

        <CardSection>
          <RadioButton
              label={this.state.choice[0]}
              checked={this.state.checked[0]}
              value="Value"
              onCheck={this.onCheckFirst.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>
        <CardSection>
          <RadioButton
              label={this.state.choice[1]}
              checked={this.state.checked[1]}
              value="Value"
              onCheck={this.onCheckSecond.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>
        <CardSection>
          <RadioButton
              label={this.state.choice[2]}
              checked={this.state.checked[2]}
              value="Value"
              onCheck={this.onCheckThird.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>
        <CardSection>
          <RadioButton
              label={this.state.choice[3]}
              checked={this.state.checked[3]}
              value="Value"
              onCheck={this.onCheckForth.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Próxima
          </Button>
        </CardSection>
      </Card>
    );
  }

}

ChecklistEvaluationScreen.navigationOptions = {
  title: 'Auto Avaliação',
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ChecklistEvaluationScreen;
