import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:borde-box;
}


html, boy #root{
  min-height: 100%;
}
body{
  -webkit-font-smoothing:antialiased !important
}
body, input, button{
  color:#222;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;

}
button {
  cursor: pointer;
}



.form-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 500px;
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
}

.checkbox-group label {
  font-size: 0.825rem;
  margin-left: 10px;
}

.form-group label {
  color: #eee;
  font-weight: 600;
}

.form-group input {
  padding: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #fcf7f7;
  color: #0c0b0b;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  outline: 1px solid 444;
}

.form-group input::placeholder {
  color: #999;
}

.form-group .input-error {
  outline: 1px solid rgb(255, 72, 72);
}

.form-group .error-message {
  color: rgb(255, 72, 72);
  font-size: 0.75rem;
  margin-top: 8px;
}

.form-group select {
  padding: 14px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #fcf7f7;
  color: #0c0b0b;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}

.form-group button {
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: #eee;
  background-color: #49a1b8;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 500ms ease;
}

.form-group button:hover {
  cursor: pointer;
  background-color: #61dbfb;
}
`;
