import styled from '@emotion/styled';

export const FormContainer = styled.form`
  // max-width:  '400px';
  display: 'flex',
  flex-direction: 'column',
  align-items: 'center',
  width:  '400px';
  border: '1px solid black';
  padding: '12px';
`;

export const InputsContainer = styled.div`
  margin-bottom: '12px';
  max-width:  '400px';
`;

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: '12px';
`;

export const ErrorText = styled.p`
  color: 'red';
`;