import { useState, useEffect } from 'react';

const EVENT_KEYS = [
	'altKey',
	'charCode',
	'code',
	'ctrlKey',
	'detail',
	'key',
	'keyCode',
	'location',
	'metaKey',
	'returnValue',
	'shiftKey',
	'which',
]

export function useKeyHandler() {
	const [state, set] = useState({});
	
  const handleKey = e => {
    const desiredInfo = EVENT_KEYS.reduce(
			(output, key) => ({...output, [key]: e[key]}), {}
		);
		set(desiredInfo)
	}
	
  useEffect(function setupKeyHandler() {
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
	}, [])
	
  return state;
}

export interface IKeyEventProperties {
	altKey: boolean,
	charCode: number,
	code: string,
	ctrlKey: boolean,
	detail: number,
	key: string,
	keyCode: number,
	location: number,
	metaKey: boolean,
	returnValue: true,
	shiftKey: boolean,
	which: number,
}