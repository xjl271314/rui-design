/**
 * @param {function} callback 回调函数
 * @param {null | number} delay 执行间隔
 */
import { useRef, useEffect } from 'react'

export default function useInterval(callback, delay = 1000) {
    const intervalFn = useRef({});

    useEffect(() => {
        intervalFn.current.callback = callback;
    }, [callback]);

    useEffect(() => {
        if (delay !== null) {
            intervalFn.current.timer = setInterval(() => {
                intervalFn.current.callback();
            }, delay)
            return () => {
              clearInterval(intervalFn.current.timer);
              intervalFn.current = null;
            }
        }
    }, [delay])

    return intervalFn.current.timer 
}