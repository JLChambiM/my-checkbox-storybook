export type Properties = {
    /**
     * Identificador único del checkbox. Si no se proporciona, se generará uno automáticamente.
     */
    id?: string;
    
    /**
     * Texto de la etiqueta que acompaña al checkbox.
     */
    label?: string;
    
    /**
     * Indica si el checkbox está marcado.
     * @default false
     */
    checked?: boolean;
    
    /**
     * Indica si el checkbox está deshabilitado.
     * @default false
     */
    disabled?: boolean;
    
    /**
     * Tema de color para el checkbox.
     * @default 'primary'
     */
    theme?: 'primary' | 'secondary' | 'error';
    
    /**
     * Función que se ejecuta cuando cambia el estado del checkbox.
     */
    onChange: (checked: boolean) => void;
  }