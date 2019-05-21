import React from 'react';
import Button from '@material-ui/core/Button';
import { jsx, css } from "emotion";
import styled from 'styled-components';

export default function Test(props) {
  const StyledButton = styled(Button)`
    && { /* some hack to avoid !important for few properties */
      background: ${props.style.bg};
      position: ${props.style.pos};
      top: ${props.style.top};
      left: ${props.style.left};
      width: ${props.style.width};
      height: ${props.style.height};
      z-index: ${props.style.zIndex};
    }
  `;
  return (
    <StyledButton onClick={props.onClickHandler} variant="contained" color="primary" >
      {props.children}
    </StyledButton>
  )
}

// export default (props) => (
//   <Button
//     onClick={props.onClickHandler} variant="contained" color="primary"
//     className={css`
//       background: ${props.bg + '!important'};
//       position: ${props.pos + '!important'};
//       top: ${props.top + '!important'};
//       left: ${props.left + '!important'};
//       width: ${props.width + '!important'};
//       height: ${props.height + '!important'};
//     `}
//   > {console.log('debug emotion : ', props)}
//     {props.children}
//   </Button>
// )
