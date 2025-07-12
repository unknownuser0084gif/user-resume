import { useEffect, useRef } from 'react';

function RawHtmlRenderer({ html }) {
       const containerRef = useRef(null);

       useEffect(() => {
              if (containerRef.current) {
                     containerRef.current.innerHTML = ''; 
                     containerRef.current.innerHTML = html
              }
       }, [html]);

       return <div ref={containerRef} />;
}
export default RawHtmlRenderer;