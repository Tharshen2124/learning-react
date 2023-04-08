import React from 'react'
import {useState, useEffect } from 'react';

export function useToggle(initialVal= false) {

  const [state, setState] = useState(initialVal);
  
  const toggle = () => {
    setState((prev) => !prev )
  }
  
  return [state, toggle];
}
