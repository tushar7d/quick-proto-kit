import styled from 'styled-components';
import { space, width, color, height, minHeight, borderRadius, boxShadow, size } from 'styled-system';
import styledMap from 'styled-map';



const br = styledMap`
  rounded: 6px;
  circle: 100%;
  default: ;
`;

const fg = styledMap`
  shrinkable: 0 0 auto;
  expandable: 1;
  default: ;


`;
const disp = styledMap`

child: flex;
inline: inline-block;
default: block;
`;





const View = styled.div`
  ${space}
  ${width}
  ${color}
  ${height}
  ${minHeight}
  ${borderRadius};
  ${boxShadow};
  ${size};

  display: ${disp};
  flex: ${props=> props.child ? fg : null};
  border-radius: ${props => props.borderRadius == null ? br : ''};
  align-self: ${props => props.alignSelf};
  justify-self: ${props => props.justifySelf}
  
  
  
`;



View.displayName = 'View';


export default View;

