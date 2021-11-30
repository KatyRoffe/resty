import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Results from '../src/components/results/index';

describe('Testing Results component', () => {
  it('Should render data', () => {
    const dataTest = {text: 'Quark'};

    render(<Results data={dataTest}/>);
    const displayText= screen.getByTestId('data');
    
    expect(displayText).toHaveTextContent(dataTest.text);
  });
});