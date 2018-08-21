import styled from 'styled-components';
import { space, width, color, height, minHeight, borderRadius } from 'styled-system';
import styledMap from 'styled-map';

const br = styledMap`
  curved: 6px;
  more-curved: 12px;
  round: 100%;
  default: ;
`;

const fg = styledMap`
  shrinkable: 0 0 auto;
  expandable: 1;
  default: ;


`;
const disp = styledMap`

child: flex;
default: block;
`;



const View = styled.div`
  ${space}
  ${width}
  ${color}
  ${height}
  ${minHeight}
  ${borderRadius};

  display: ${disp};
  flex: ${props=> props.child ? fg : null};
  border-radius: ${props => props.borderRadius == null ? br : ''};
`;

View.displayName = 'View';


export default View;

