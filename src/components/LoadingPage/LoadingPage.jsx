import React from 'react';
import styled from 'styled-components';

const Loader = ({center = true , className = ''}) => {
       return (
              <section className={`relative h-32 ${center ? ' flex justify-center' : ''} ${className}`}>
                     <StyledWrapper>
                            <div className="spinner" />
                     </StyledWrapper>
              </section>
       );
}

const StyledWrapper = styled.div
       `
  .spinner:before {
    transform: rotateX(60deg) rotateY(45deg) rotateZ(45deg);
    animation: 750ms rotateBefore infinite linear reverse;
  }

  .spinner:after {
    transform: rotateX(240deg) rotateY(45deg) rotateZ(45deg);
    animation: 750ms rotateAfter infinite linear;
  }

  .spinner:before,
  .spinner:after {
    box-sizing: border-box;
    content: '';
    display: block;
    position: absolute;
    width: 8em;
    height: 8em;
    transform-style: preserve-3d;
    transform-origin: 50%;
    transform: rotateY(50%);
    perspective-origin: 50% 50%;
    perspective: 340px;
    background-size: 8em 8em;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyIgd2lkdGg9IjI2NnB4IiBoZWlnaHQ9IjI5N3B4IiB2aWV3Qm94PSIwIDAgMjY2IDI5NyIgdmVyc2lvbj0iMS4xIj4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4NCiAgICAgICAgPHBhdGggZD0iTTE3MS41MDc4MTMsMy4yNTAwMDAzOCBDMjI2LjIwODE4MywxMi44NTc3MTExIDI5Ny4xMTI3MjIsNzEuNDkxMjgyMyAyNTAuODk1NTk5LDEwOC40MTAxNTUgQzIxNi41ODIwMjQsMTM1LjgyMDMxIDE4Ni41Mjg0MDUsOTcuMDYyNDk2NCAxNTYuODAwNzc0LDg1Ljc3MzQzNDYgQzEyNy4wNzMxNDMsNzQuNDg0MzcyMSA3Ni44ODg0NjMyLDg0LjIxNjE0NjIgNjAuMTI4OTA2NSwxMDguNDEwMTUzIEMtMTUuOTgwNDY4NSwyMTguMjgxMjQ3IDE0NS4yNzczNDQsMjk2LjY2Nzk2OCAxNDUuMjc3MzQ0LDI5Ni42Njc5NjggQzE0NS4yNzczNDQsMjk2LjY2Nzk2OCAtMjUuNDQ5MjE4NywyNTcuMjQyMTk4IDMuMzk4NDM3NSwxMDguNDEwMTU1IEMxNi4zMDcwNjYxLDQxLjgxMTQxNzQgODQuNzI3NTgyOSwtMTEuOTkyMjk4NSAxNzEuNTA3ODEzLDMuMjUwMDAwMzggWiIgZmlsbD0iI2ZlYjUwMCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCIvPg0KICAgIDwvZz4NCjwvc3ZnPg==);
  } 

  @keyframes rotateBefore {
    from {
      transform: rotateX(60deg) rotateY(45deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(60deg) rotateY(45deg) rotateZ(-360deg);
    }
  }

  @keyframes rotateAfter {
    from {
      transform: rotateX(240deg) rotateY(45deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(240deg) rotateY(45deg) rotateZ(360deg);
    }
  }`;

export default Loader;
