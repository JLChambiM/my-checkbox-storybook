# Documentación Completa - Componentes Chip en Flutter

## ¿Qué son los Chips?

Los chips son elementos compactos que representan un atributo, texto, entidad o acción. Los chips ayudan a las personas a ingresar información, hacer selecciones, filtrar contenido o activar acciones. 

## Tipos de Chips

Flutter incluye cuatro tipos de chips: assist, filter, input y suggestion:

### 1. **ActionChip** (usado para Assist y Suggestion chips)
Representa una acción relacionada con el contenido principal.

### 2. **FilterChip** 
Utiliza etiquetas o palabras descriptivas como una forma de filtrar contenido.

### 3. **ChoiceChip** (usado para single selection filter chips)
Permite una sola selección de un conjunto de opciones. Los chips de elección contienen texto descriptivo relacionado o categorías.

### 4. **InputChip**
Un chip que representa una pieza compleja de información, como una entidad (persona, lugar o cosa) o texto conversacional, en una forma compacta.

## Chip Base - Propiedades Completas

### Constructor
```dart
Chip({
  Key? key,
  Widget? avatar,
  required Widget label,
  TextStyle? labelStyle,
  EdgeInsetsGeometry? labelPadding,
  Widget? deleteIcon,
  VoidCallback? onDeleted,
  Color? deleteIconColor,
  String? deleteButtonTooltipMessage,
  BorderSide? side,
  OutlinedBorder? shape,
  Clip clipBehavior = Clip.none,
  FocusNode? focusNode,
  bool autofocus = false,
  WidgetStateProperty<Color?>? color,
  Color? backgroundColor,
  EdgeInsetsGeometry? padding,
  VisualDensity? visualDensity,
  MaterialTapTargetSize? materialTapTargetSize,
  double? elevation,
  Color? shadowColor,
  Color? surfaceTintColor,
  IconThemeData? iconTheme,
  BoxConstraints? avatarBoxConstraints,
  BoxConstraints? deleteIconBoxConstraints,
  ChipAnimationStyle? chipAnimationStyle,
  MouseCursor? mouseCursor,
})
```

### Propiedades Principales

#### **autofocus** → `bool`
- Verdadero si este widget será seleccionado como el foco inicial cuando ningún otro nodo en su ámbito esté enfocado actualmente.

#### **avatar** → `Widget?`
- Un widget para mostrar antes de la etiqueta del chip.

#### **avatarBoxConstraints** → `BoxConstraints?`
- Restricciones opcionales de tamaño para el avatar.

#### **backgroundColor** → `Color?`
- Color que se usará para el fondo del chip no seleccionado y habilitado.

#### **chipAnimationStyle** → `ChipAnimationStyle?`
- Usado para anular las duraciones predeterminadas de las animaciones del chip.

#### **clipBehavior** → `Clip`
- El contenido será recortado (o no) según esta opción.

#### **color** → `WidgetStateProperty<Color?>?`
- El color que llena el chip, en todos los estados de widget.

#### **deleteButtonTooltipMessage** → `String?`
- El mensaje que se usará para el tooltip del botón de eliminación del chip.

#### **deleteIcon** → `Widget?`
- El icono que se muestra cuando se establece `onDeleted`.

#### **deleteIconBoxConstraints** → `BoxConstraints?`
- Restricciones opcionales de tamaño para el icono de eliminación.

#### **deleteIconColor** → `Color?`
- Usado para definir el color del icono de eliminación con un `IconTheme` que contiene el icono.

#### **elevation** → `double?`
- Elevación que se aplicará al chip en relación con su padre.

#### **focusNode** → `FocusNode?`
- Un nodo de enfoque opcional para usar como nodo de enfoque para este widget.

#### **iconTheme** → `IconThemeData?`
- Tema usado para todos los iconos en el chip.

#### **label** → `Widget`
- El contenido principal del chip. **REQUERIDO**

#### **labelPadding** → `EdgeInsetsGeometry?`
- El relleno alrededor del widget de etiqueta.

#### **labelStyle** → `TextStyle?`
- El estilo que se aplicará a la etiqueta del chip.

#### **materialTapTargetSize** → `MaterialTapTargetSize?`
- Configura el tamaño mínimo del objetivo de toque.

#### **mouseCursor** → `MouseCursor?`
- El cursor para un puntero del mouse cuando entra o está sobre el widget.

#### **onDeleted** → `VoidCallback?`
- Llamado cuando el usuario toca el `deleteIcon` para eliminar el chip.

#### **padding** → `EdgeInsetsGeometry?`
- El relleno entre el contenido del chip y la forma exterior.

#### **shadowColor** → `Color?`
- Color de la sombra del chip cuando la elevación es mayor que 0.

#### **shape** → `OutlinedBorder?`
- El `OutlinedBorder` para dibujar alrededor del chip.

#### **side** → `BorderSide?`
- El color y peso del contorno del chip.

#### **surfaceTintColor** → `Color?`
- Color del tinte de superficie del chip cuando su elevación es mayor que 0.

#### **visualDensity** → `VisualDensity?`
- Define qué tan compacto será el diseño del chip.

### Requisitos de Ancestros
Los ancestros del chip deben incluir:
- `Material`
- `MediaQuery`
- `Directionality`
- `MaterialLocalizations`

Típicamente todos estos widgets son proporcionados por `MaterialApp` y `Scaffold`.

### Métodos Importantes

#### **build(BuildContext context)** → `Widget`
- Describe la parte de la interfaz de usuario representada por este widget.

## ActionChip - Propiedades Específicas

El ActionChip extiende las propiedades base del Chip con:
- Representa acciones relacionadas con el contenido principal
- Típicamente usado para chips de asistencia y sugerencias
- Incluye capacidades de interacción a través de callbacks

## FilterChip - Propiedades Específicas

El FilterChip es usado para filtrar contenido y incluye:
- Propiedades de selección múltiple
- Estado de filtro activado/desactivado
- Capacidades de filtrado de contenido

## ChoiceChip - Propiedades Específicas

El ChoiceChip permite selección única y incluye:
- Propiedades de selección única
- Estado seleccionado/no seleccionado
- Usado para opciones mutuamente excluyentes

## InputChip - Propiedades Específicas

El InputChip representa información compleja y incluye:
- Capacidades de entrada de datos
- Representación de entidades complejas
- Funcionalidad de eliminación integrada

## Consideraciones de Implementación

### Requisitos Obligatorios
- Los argumentos `label` y `clipBehavior` no deben ser null
- El widget debe tener ancestros apropiados (Material, MediaQuery, etc.)

### Funcionalidad de Eliminación
- Proporcionar un callback `onDeleted` no null hará que el chip incluya un botón para eliminar el chip
- El icono de eliminación puede ser personalizado con `deleteIcon`
- El color del icono de eliminación se puede establecer con `deleteIconColor`

### Personalización Visual
- El chip puede incluir un avatar antes de la etiqueta
- La forma puede ser personalizada con `shape`
- Los colores pueden ser configurados para diferentes estados
- La elevación y sombras pueden ser ajustadas

### Accesibilidad
- Soporte para enfoque automático con `autofocus`
- Nodo de enfoque personalizable con `focusNode`
- Tamaño de objetivo de toque configurable con `materialTapTargetSize`

## Widgets Relacionados

- **CircleAvatar**: Muestra imágenes o iniciales de entidades
- **Wrap**: Un widget que muestra sus hijos en múltiples filas horizontales o verticales
- **Material**: Proporciona el diseño visual Material Design
- **IconTheme**: Para tematizar los iconos dentro del chip