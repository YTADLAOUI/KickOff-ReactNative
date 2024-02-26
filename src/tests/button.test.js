import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../components/button';

describe('Button', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Button onPress={() => {}} title="Test" />);
    expect(getByText('Youssef')).toBeTruthy();
  });

  it('should handle onPress', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button onPress={onPressMock} title="Test" />);
    fireEvent.press(getByText('Youssef'));
    expect(onPressMock).toHaveBeenCalled();
  });
});