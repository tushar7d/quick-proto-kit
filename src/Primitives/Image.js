import styled from 'styled-components';
import { space, width, height, borderRadius } from 'styled-system';


const Image = styled.img`
${space}
  ${width}
  
  ${height}
  
  ${borderRadius};
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'



export default Image