export const DEFAULT_CHECKED = ['code', 'key', 'which'];

export const EVENT_KEYS = [
  'altKey',
  'charCode',
  'code',
  'ctrlKey',
  'key',
  'keyCode',
  'location',
  'metaKey',
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
