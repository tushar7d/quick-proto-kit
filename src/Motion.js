import {keyframes} from 'styled-components';
import { bounce as bouncy} from 'react-animations';

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const bounce = keyframes`${bouncy}`;



