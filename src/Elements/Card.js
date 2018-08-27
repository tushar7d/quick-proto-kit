import styled from 'styled-components';
import theme from '../theme';
import Stack from '../Primitives/Stack';

const Card = styled(Stack)`

background-color: ${theme.colors.white};
box-shadow:${theme.shadows[0]};
padding:${theme.space[3]};

`;

export default Card;