export type Properties = {
  /**
   * Unique identifier for the checkbox
   */
  id?: string;
  
  /**
   * Label text to display next to the checkbox
   */
  label?: string;
  
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Whether the checkbox is in indeterminate state
   * @default false
   */
  indeterminate?: boolean;
  
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Visual theme for the checkbox
   * @default 'primary'
   */
  theme?: 'primary' | 'secondary' | 'error';
  
  /**
   * Callback when the checkbox state changes
   */
  onChange: (checked: boolean) => void;
}