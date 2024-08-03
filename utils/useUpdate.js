import { useEffect, useRef } from 'react';

function useUpdate(effect, deps) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      effect();
    } else {
      isMounted.current = true;
    }
  }, deps);
}

export default useUpdate;