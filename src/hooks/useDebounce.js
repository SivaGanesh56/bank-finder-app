import { useCallback, useRef } from 'react'


const useDebounce = (func, wait) => {
    // Use a ref to store the timeout between renders
    // and prevent changes to it from causing re-renders
    const timeout = useRef();

    return useCallback(
        (...args) => {
            const later = () => {
                clearTimeout(timeout.current);
                func(...args);
            };

            clearTimeout(timeout.current);
            timeout.current = setTimeout(later, wait);
        },
        [func, wait]
    );
};

export default useDebounce;