import {memo} from 'react';
import styled from 'styled-components';

const Loader = memo(({className = ''}) => {
       return (
              <StyledWrapper>
                     <div className={`loader triangle ${className}`}>
                            <svg viewBox="0 0 86 80">
                                   <polygon points="43 8 79 72 7 72" />
                            </svg>
                     </div>
              </StyledWrapper>
       );
})

const StyledWrapper = styled.div
`
  .loader {
    --path: #feb500;
    --dot: #fff;
    --duration: 2s;
    width: 25px;
    height: 25px;
    position: relative;
  }

  .loader:before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    display: block;
    background: var(--dot);
    top: 22px;
    left: 18px;
    transform: translate(-18px, -18px);
    animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader svg {
    display: block;
    width: 100%;
    height: 100%;
  }


  .loader svg polygon{
    fill: none;
    stroke: var(--path);
    stroke-width: 10px;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  .loader svg polygon {
    stroke-dasharray: 145 76 145 76;
    stroke-dashoffset: 0;
    animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  .loader.triangle {
    width: 48px;
  }

  .loader.triangle:before {
    left: 21px;
    transform: translate(-10px, -14px);
    animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
      infinite;
  }

  @keyframes pathTriangle {
    33% {
      stroke-dashoffset: 74;
    }

    66% {
      stroke-dashoffset: 147;
    }

    100% {
      stroke-dashoffset: 221;
    }
  }

  @keyframes dotTriangle {
    33% {
      transform: translate(0, 0);
    }

    66% {
      transform: translate(10px, -14px);
    }

    100% {
      transform: translate(-10px, -14px);
    }
  }

  .loader {
    display: inline-block;
  }
`;

export default Loader;
