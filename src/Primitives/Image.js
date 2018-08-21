import styled from 'styled-components';
import { space, width, height, borderRadius } from 'styled-system';
import styledMap from 'styled-map';

const br = styledMap`
  curved: 6px;
  more-curved: 12px;
  round: 100%;
  default: ;
`;

const Image = styled.img`
${space}
  ${width}
  ${height}
  ${borderRadius};
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: ${props => props.borderRadius == null ? br : ''};
`

Image.displayName = 'Image'



export default Image