# Reto Técnico RIMAC

### Ejecutar el proyecto

Solo debe escribir en la dirección del proyecto:

### `npm start`

### Build del proyecto

Para que se pueda subir a un servidor el proyecto, solo debe ejecutar: 

### `npm run build`

### Líbrerias
| Nombre|Descripción |Funcionamiento |
| ------------ | ------------ | ------------ |
| Material UI | Es una librería para mejorar el diseño de la aplicación. | Para mejorar el diseño de los inputs, button, icons, checkbox, radiobutton, tabs. |
| Ant Design | Es una librería para mejorar el diseño de la aplicación. | Para mejorar el diseño de los Layouts, tener un manejo responsive con row y col, InputNumber, Card, Divider. |
|Axios|Es una librería para el manejo de consumos de API.| Para consumir el API de la primera vista (usuario).|
|React Hook Form|Es una librería para las validaciones de los inputs.| Para validar los inputs de la primera y segunda vista.|
|React Router|Es una librería para las rutas de la aplicación.|Para añadir rutas a la aplicación.|
|React Perfect Scrollbar|Es una librería de para tener un scroll en la vista.|Para añadir un scrollbar en la tercera vista.|
|Redux| Es una librería para el manejo de estado de la aplicación. ( Es parecido al useReducer y useContext).|Para el manejo de las variables como user, auto, autenticación. También manejar el consumo de la api.|
|Sass|Es un preprocesador de CSS.| Para el manejo de las variables globales en CSS.|

### Componentes

1. Login: Es la primera vista, el usuario debe ingresar sus datos para poder seguir en la siguiente vista.
2. Datos Auto: Es la segunda vista, el usuario debe ingresar los datos de su auto.
3. Arma Plan: Es la tercera vista, el usuario debe ingresar los reportes para que se calcule la cobertura del plan.
4. Bienvenida: Es la ultima vista, el usuario podra visualizar que el plan se hizo correctamente.
