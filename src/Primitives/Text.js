import styled from 'styled-components';
import { space, width, color, fontFamily, fontSize, textAlign, fontWeight, lineHeight, textStyle} from 'styled-system';
import styledMap from 'styled-map';



const fa = styledMap`
  left: left;
  right: right;
  center: center;
  default: left;
`;
const disp = styledMap`
child: flex;
inline: inline-block;
default: block;

`;


const Text = styled.div`
 ${textStyle}
 ${space}
 ${width}
 ${color}
 ${fontFamily}
 ${fontSize}
 ${textAlign}
 ${fontWeight}
 ${lineHeight}
 
 
 display: ${disp}; 
 text-align: ${fa};




`;

Text.displayName = 'Text';


export default Text;
