import styled from 'styled-components';
import { space, width, color, height, borderRadius} from 'styled-system';
import styledMap from 'styled-map';


const dp = styledMap`
  horizontal: flex;
  vertical: flex;
  default: block;
`;
const fd = styledMap`
  horizontal: row;
  vertical: column;
  default: row;
`;
const ai = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  strech: strech;
  default: flex-start;


`;

const aii = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  strech: strech;
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

function checkFlex(props){

  return props.horizontal || props.vertical
  
}


const br = styledMap`
  curved: 6px;
  default: ;


`;



const View = styled.div`

 ${space} ${width} ${color} ${height} ${borderRadius};

 display: ${dp};
 flex-direction: ${props=>(checkFlex(props) ? fd : '')};
 flex-wrap:${props=>(props.wrap && checkFlex(props) ? 'wrap' : 'nowrap')}
 justify-content: ${props=>juscon(props)};
 align-items:  ${props=>aliitm(props)};

 border-radius: ${props=> props.borderRadius == null ? br:'' };
 
 

`;

View.displayName = 'View';


export default View;

