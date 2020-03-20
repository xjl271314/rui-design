/**
 * @param {function} callback 回调函数
 * @param {null | number} delay 执行间隔
 */
import { useRef, useEffect } from 'react'

function useInterval(callback, delay = 300) {
    const intervalFn = useRef();

    // remember the latest callback
    useEffect(() => {
        intervalFn.current = callback;
    }, [callback]);

    // set the interval
    useEffect(() => {
        if (delay) {
            const timer = setInterval(() => {
                intervalFn.current()
            }, delay)
            return () => { timer && clearInterval(timer) }
        }
    }, [delay])
}

export default useInterval;