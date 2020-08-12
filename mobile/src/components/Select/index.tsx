import React, { useState } from 'react';
import { Picker, View } from 'react-native'

import api from '../../services/api';


const choice = await api.get('classes', {
  params: {
    subject: '',
    week_day: '',
    time: '',
  }
});

export const SubjectChoice = () => {
  return (
    <Picker>
      <View>
        selectedValue={this.state.choice}
       onValueChange={
          (itemValor, itemIndex) =>
            this.setState({
              subject: itemValor
            })
        }
        <Picker.Item value='Arts' label='Arts' />,
        <Picker.Item value='Biology' label='Biology' />,
        <Picker.Item value='Sciences' label='Sciences' />,
        <Picker.Item value='Physical Education' label='Physical Education' />,
        <Picker.Item value='Geography' label='Geography' />,
        <Picker.Item value='History' label='History' />,
        <Picker.Item value='Math' label='Math' />,
        <Picker.Item value='Portuguese' label='Portuguese' />,
        <Picker.Item value='Chemistry' label='Chemistry' />,
        <Picker.Item value='Physics' label='Physics' />,
        </View>
    </Picker>
  )
}

export const DayChoice = () => {

}