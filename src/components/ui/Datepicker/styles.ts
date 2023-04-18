import styled from 'styled-components'
import { inputBorderColor, inputBorderRadius, noFocusColorFont, primaryFontColor } from '../../../globals'

export const WrapperDatePicker = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    text-align: left;
    font-size: 15px;
    color: ${primaryFontColor};
    font-weight: bold;
  }

  input[type='date'] {
    background: transparent;
    border: 2px solid ${inputBorderColor};
    outline: none;
    padding: 10px;
    margin-top: 5px;
    color: ${noFocusColorFont};
    height: 100%;
    font-size: 16px;
    border-radius: ${inputBorderRadius};

    ::-webkit-calendar-picker-indicator {
        width: 20px;
        height: 20px;
        color: ${primaryFontColor};
      }

    :focus {
      color: ${primaryFontColor};
      font-weight: bold;
      border-color: ${primaryFontColor};
      
      ::-webkit-calendar-picker-indicator {
        color: ${primaryFontColor};
      }
    }
  }
`