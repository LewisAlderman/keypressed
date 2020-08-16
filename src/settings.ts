export const DEFAULT_CHECKED = ['code', 'key', 'which'];

export const EVENT_KEYS = [
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
];

export interface IKeyEventProperties {
  altKey?: boolean;
  charCode?: number;
  code?: string;
  ctrlKey?: boolean;
  detail?: number;
  key?: string;
  keyCode?: number;
  location?: number;
  metaKey?: boolean;
  returnValue?: true;
  shiftKey?: boolean;
  which?: number;
}
