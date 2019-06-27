import React from 'react';
import { RadioButton } from 'react-native-material-ui';
import {
  StyleSheet,
  Text,
  ToastAndroid,
} from 'react-native';
import { Card, CardSection, Button } from '../components/my_components';


class ChecklistEvaluationScreen extends React.Component {
  state = { 
    questionAnswerIndex: 0,
    questions: ['Primeira pergunta:', 'Segunda pergunta:', 'Terceira pergunta:'],
    choice: [
      { choice1: 'Primeira alternativa', choice2: 'Segunda alternativa', choice3: 'Terceira Alternativa' },
      { choice1: 'Primeira alternativa1', choice2: 'Segunda alternativa1', choice3: 'Terceira Alternativa1' },
      { choice1: 'Primeira alternativa2', choice2: 'Segunda alternativa2', choice3: 'Terceira Alternativa2' },
    ],
    answers: [0, 0, 0],
    checked: [true, false, false]
  };

  onButtonPress() {
    if (this.state.questionAnswerIndex === 2) {
      // TODO RENDER THE RESULTS
    }

    // ToastAndroid.show('questionAnswerIndex: ' + this.state.questionAnswerIndex, ToastAndroid.SHORT);
    this.setState(prevQuestionAnswerIndex => ({ questionAnswerIndex: prevQuestionAnswerIndex.questionAnswerIndex + 1 }));
    this.setState({ checked: [true, false, false] });
    // this.setState({ answers[this.state.questionAnswerIndex]:  });
  }

  onCheckFirst() {
    // this.setState({ answers[this.state.questionAnswerIndex]: 0 });
    this.setState({ checked: [true, false, false] });

    this.setState(state => {
      const answers = state.answers.map((item, j) => {
        if (j === this.state.questionAnswerIndex) {
          return 0;
        } else {
          return item;
        }
      });

      return {
        answers,
      };
    });
  }

  onCheckSecond() {
    // this.setState({ answers[this.state.questionAnswerIndex]: 1 });
    this.setState({ checked: [false, true, false] });

    this.setState(state => {
      const answers = state.answers.map((item, j) => {
        if (j === this.state.questionAnswerIndex) {
          return 1;
        } else {
          return item;
        }
      });

      return {
        answers,
      };
    });
  }

  onCheckThird() {
    // this.setState({ answers[this.state.questionAnswerIndex]: 2 });
    this.setState({ checked: [false, false, true] });

    this.setState(state => {
      const answers = state.answers.map((item, j) => {
        if (j === this.state.questionAnswerIndex) {
          return 2;
        } else {
          return item;
        }
      });

      return {
        answers,
      };
    });
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Text>{this.state.questions[this.state.questionAnswerIndex]}</Text>
        </CardSection>

        <CardSection>
          <RadioButton
              label={this.state.choice[this.state.questionAnswerIndex].choice1}
              checked={this.state.checked[0]}
              value="Value"
              onCheck={this.onCheckFirst.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>
        <CardSection>
          <RadioButton
              label={this.state.choice[this.state.questionAnswerIndex].choice2}
              checked={this.state.checked[1]}
              value="Value"
              onCheck={this.onCheckSecond.bind(this)}
              onSelect={onSelect = () => {}}
          />
        </CardSection>
        <CardSection>
          <RadioButton
              label={this.state.choice[this.state.questionAnswerIndex].choice3}
              checked={this.state.checked[2]}
              value="Value"
              onCheck={this.onCheckThird.bind(this)}
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
  row: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChecklistEvaluationScreen;
