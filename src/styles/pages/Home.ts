import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4.4rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 4rem;
    text-align: center;
  }

  img {
    border-radius: 50%;
    height: 30%;
  }

  p {
    margin-top: 2rem;
    font-size: 1.4rem;
    line-height: 3.2rem;
  }

  p.second-p {
    margin-top: 0;
  }

  a {
    font-size: 1.4rem;
    line-height: 3.2rem;
    color: ${props => props.theme.colors.text};
  }

  form.login-form {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    width: 60%;
    height: 4.2rem;

    align-self: center;

    border-radius: 0.6rem;
    margin-top: 1.2rem;
    border: none;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.primary};
    font-size: 2.4rem;

    transition: 0.2s;
  }

  button:hover {
    cursor: pointer;
    background: #6842c2;
  }
`;
