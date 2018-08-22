
import styled from 'styled-components';
import styledMap from 'styled-map';
import View from './View';

const fd = styledMap`
  horizontal: row;
  vertical: column;
  default: row;
`;
const ai = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  stretch: stretch;
  default: flex-start;


`;

const aii = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  stretch: stretch;
  default: flex-start;


`;


const jc = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  split: space-between;
  around: space-around;
  equally: equally;
  default: flex-start;


`;
const jci = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  split: space-between;
  around: space-around;
  equally: equally;
  default: flex-start;


`;





function juscon(props){

  
  if (props.horizontal == true && props.vertical == null ){
    return jc;
  };
  
  if (props.horizontal == null && props.vertical == true ){
    return jci;
  }
  
  
  
}

function aliitm(props){
  
  
  if ((props.horizontal == true) && (props.vertical == null) ){
    return ai;
  }
  else if (props.horizontal == null && props.vertical == true ){
    return aii;
  }
  
  
}





const Stack = styled(View)`

display: flex;
flex-direction: ${fd};
flex-wrap:${props=>(props.wraped ? 'wrap' : 'nowrap')};
justify-content: ${props=>juscon(props)};
align-items:  ${props=>aliitm(props)};

`;
Stack.displayName = 'Stack';

export default Stack;