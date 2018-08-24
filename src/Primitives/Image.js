import styled from 'styled-components';

import styledMap from 'styled-map';
import View from './View';

const br = styledMap`
  curved: 6px;
  more-curved: 12px;
  round: 100%;
  default: ;
`;
const img = View.withComponent('img');

const Image = styled(img)`
  

  
  max-width: 100%;
  height: auto;
  border-radius: ${props => props.borderRadius == null ? br : ''};
`

Image.displayName = 'Image'



export default Image