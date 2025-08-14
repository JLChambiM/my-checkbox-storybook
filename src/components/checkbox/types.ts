import type { ReactNode } from "react";
type variant = 'primary' | 'secondary' | 'error';
export type Properties = {
  /**
   *
   */
  id?: string;
  
  /**
   *
   */
  children?: ReactNode;

  /**
   *
   * @default undefined (uncontrolled), true (checked), false (unchecked), null (indeterminate)
   */
  value?: boolean | null;
  
  /**
   *
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 
   * @default 'primary'
   */
  variant?: variant;
  
  /**
   *
   */
  onChange?: (event: React.SyntheticEvent, properties: Properties) => void;
}