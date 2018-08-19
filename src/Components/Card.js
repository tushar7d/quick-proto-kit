import theme from '../theme';


import View from './View';

const Card = View.extend`

background-color: ${theme.colors.white};
width: 100%;
min-height: 10px;
padding: ${theme.space[3]}px;



`;

export default Card;