import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  background-size: 60%;
  background-repeat: repeat-x;

  .filter {
    width: 100%;
    height: 100%;
    background-color: rgba(77, 179, 125, 0.61);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 0;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border: 3px solid rgb(171, 216, 247,1);
    width: 40%;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    
    h1 {
      color: white;
      letter-spacing: 2px;
      font-family: 'Petit Formal Script', cursive;
      transform: rotate(10deg);
      position: relative;

      span { color: red }
    }

    p {
      color: white;
      width: 90%;
      letter-spacing: 1px;
      text-align: center;
      font-size: 18px;
    }

    .input-group {
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;


      input, select { width: 45%; };
    }

    input, select {
      width: 90%;
      height: 50px;
      padding: 0 10px;
      margin: 25px 0 0;
      background-color: transparent;
      border: 0;
      border-bottom: 2px solid #abd8f7;
      color: white;
      font-size: 16px;
      font-weight: normal;
      letter-spacing: 1px;

      option {
        color: black;
      }
  

      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    
    .wrap-actions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;
      width: 80%;

      button {
        margin-bottom: 20px;
        padding: 0px 30px;
        height: 50px;
        font-size: 18px;
        color: white;
        background-color: #3498db;
        border-radius: 25px;
        border: 0;
        letter-spacing: 1px;
      }

      a {
        color: #fff;
        letter-spacing: 1px;
        text-decoration: none;

      }
    }
    button {
        margin-bottom: 20px;
        padding: 0px 30px;
        height: 50px;
        font-size: 18px;
        color: white;
        background-color: #3498db;
        border-radius: 25px;
        border: 0;
        letter-spacing: 1px;
        margin-top: 25px;
      }
  }
`;