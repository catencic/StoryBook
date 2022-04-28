import './mylabel.css'

export interface MyLabelProps {
    /**
   * Este es el texto a mostrar en la eqtiqueta
   */
    label: string;
     /**
   * Este es el tamaño de la eqtiqueta
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
      /**
   * Activar Mayusculas
   */
    allCaps?: boolean;
      /**
   * Este es el color de la etiqueta
   */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
   *  Color personalizado de la fuente
   */
    fontColor?: string;

}

export const MyLabel = ({
    label = 'No Label', 
    size = 'normal' , 
    allCaps = false , 
    color = 'primary',
    fontColor 
} : MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color} `}
    style={{color: fontColor}}
    >
        {allCaps? label.toUpperCase(): label.toLowerCase()}
    </span>
  )
}
