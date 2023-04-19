import styled from '@emotion/styled';


export const FormContainer = styled.div`
  // max-width:  '400px';
  width:  '400px';
  border: '1px solid black';
  padding: '12px';
`;

export const InputsContainer = styled.div`
  margin-bottom: '12px';
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: '12px';
`;

export const ErrorText = styled.p`
  color: 'red';
`;

  // colors: {
  //   white: '#ffffff',
  //   black: '#010101',
  //   green: '#4caf50',
  //   red: '#f44336',
  //   blue: '#2196f3',
  //   primaryText: '#212121',
  //   secondaryText: '#757575'
  // },
  // spacing: value => `${4 * value}px`