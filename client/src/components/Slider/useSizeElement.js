import React ,{useState,useEffect, useRef} from 'react';

function useSizeElement() {
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      setWidth(elementRef.current.clientWidth);
    }, [elementRef.current]);
  
    return { width, elementRef };
}

export default useSizeElement;
