import styled from 'styled-components';

export const InputField = styled.div`
  margin-top: 1.8rem;

  .input-block input {
    width: 100%;
    height: 4.6rem;
    border-radius: 0.6rem;
    border: 1px solid var(--color-border);
    outline: 0;
    padding: 0rem 1.2rem;
    font: 300 1.6rem Ubuntu;
  }

  div.input-block input.error {
    border: #cf6679 2px solid;
  }

  div.input-block input.error::placeholder {
    color: #cf6679;
  }

  .input-block + .input-block {
    margin-top: 1rem;
  }
`;
