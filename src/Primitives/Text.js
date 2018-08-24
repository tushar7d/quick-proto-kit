import styled from 'styled-components';
import { space, width, color, fontFamily, fontSize, textAlign, fontWeight, lineHeight} from 'styled-system';
import styledMap from 'styled-map';

const fs = styledMap`
  huge: 45px;
  xxxl: 34px;
  xxl: 27px;
  xl: 23px;
  l: 20px;
  m: 17px;
  s: 15px;
  xs: 13px;
  tiny: 11px;
  default: 13px ;
`;

const lh = styledMap`
  huge: 51px;
  xxxl: 39px;
  xxl: 33px;
  xl: 30px;
  l: 27px;
  m: 24px;
  s: 21px;
  xs: 18px;
  tiny: 15px;
  default: 18px ;
`;

const fw = styledMap`
  bold: bold;
  medium:700;
  regular: normal;
  light: 200;
  default: normal;
`;

const fa = styledMap`
  left: left;
  right: right;
  center: center;
  default: left;
`;



const Text = styled.div`

 ${space}
 ${width}
 ${color}
 ${fontFamily}
 ${fontSize}
 ${textAlign}
 ${fontWeight}
 ${lineHeight}

 font-size: ${fs};
 line-height: ${lh};
 font-weight: ${fw};
 text-align: ${fa};




`;

Text.displayName = 'Text';


export default Text;
