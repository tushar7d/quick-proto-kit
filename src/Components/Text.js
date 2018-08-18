import styled from 'styled-components';
import { space, width, color, fontFamily, fontSize, textAlign, fontWeight, lineHeight} from 'styled-system';
import styledMap from 'styled-map';


const Text = styled.div`

 ${space}
 ${width}
 ${color}
 ${fontFamily}
 ${fontSize}
 ${textAlign}
 ${fontWeight}
 ${lineHeight};

`;

Text.displayName = 'Text';


export default Text;
