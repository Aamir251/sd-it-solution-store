"use client";

import { useEffect, useRef, useState } from "react"

export const useSessionStorage = <T>(key : string, fallbackValue : T) => {

  const [ data, setData ] = useState(fallbackValue)
  let isFirstRun = useRef<boolean>(true)

  useEffect(() => {
    const storedData = sessionStorage.getItem(key)
    setData(storedData ? JSON.parse(storedData) : fallbackValue)

  },[])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    sessionStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);


  return {
    data,
    setData
  }
  
}
