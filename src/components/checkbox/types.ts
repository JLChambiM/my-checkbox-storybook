export type Properties = {
  /**
   *
   */
  id?: string;
  
  /**
   *
   */
  label?: string;
  
  /**
   * 
   * @default false
   */
  checked?: boolean;
  
  /**
   * 
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   *
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Visual variant of the checkbox
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'error';
  
  /**
   *
   */
  onChange?: (checked: boolean) => void;
}