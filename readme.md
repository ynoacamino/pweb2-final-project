# Academia Learning

Academia Learning es una plataforma educativa diseñada para apoyar tanto a profesores como a alumnos, proporcionando una amplia gama de recursos educativos. Este proyecto utiliza tecnologías modernas como React y Django para ofrecer una experiencia de usuario óptima y una gestión eficiente de los datos.

## Descripción del Proyecto

La plataforma Academia Learning tiene como objetivo proporcionar formación continua, recursos didácticos y herramientas de evaluación para profesores, así como acceso a material de estudio, tutorías y una plataforma interactiva para los alumnos.

## Tecnologías Utilizadas

- **React**: Utilizado para el frontend, permite crear interfaces de usuario interactivas y reactivas.
- **Django**: Framework de backend basado en Python, utilizado para la gestión de datos y la lógica de negocio.
- **Django Rest Framework (DRF)**: Utilizado para la creación de APIs RESTful.
- **Next.js**: Framework de React que soporta el renderizado del lado del servidor.
- **Tailwind CSS**: Framework CSS utilizado para el diseño de la interfaz de usuario.
- **Cloudinary**: Plataforma en la nube para la gestión de archivos multimedia.

## Estructura del Proyecto

El proyecto está organizado en dos partes principales:

1. **client**: Contiene todo lo relacionado con el frontend desarrollado con React.
   - `components/`: Componentes reutilizables de la interfaz de usuario.
   - `pages/`: Componentes específicos de las páginas.
   - `providers/`: Proveedores de contexto para la autenticación y el tema.

2. **server**: Contiene el backend desarrollado con Django.
   - `media_manager/`: Gestión de archivos multimedia.
   - `academia/`: Lógica y datos específicos de la plataforma educativa.

## Funcionalidades Clave

- **Gestión de Usuarios**: Registro, inicio de sesión y gestión de permisos.
- **Gestión de Cursos**: Creación, edición y visualización de cursos.
- **Carga de Archivos**: Integración con Cloudinary para la gestión de archivos multimedia.
- **Comunicación Frontend-Backend**: Uso de APIs RESTful para la interacción de datos.

## Instalación y Configuración

1. Clonar el repositorio:

```
git clone https://github.com/ynoacamino/pweb2-final-project.git
```
2. Instalar dependencias para el frontend:
```
cd client
npm install
```
3. Instalar dependencias para el backend:
```
cd ../server
pip install -r requirements.txt
```
4. Configurar las variables de entorno y los archivos de configuración según sea necesario.

## Uso

1. Iniciar el servidor de desarrollo para el frontend:
```
npm run dev
```

2. Iniciar el servidor de desarrollo para el backend:
```
python manage.py runserver
```

3. Acceder a la aplicación desde `http://localhost:3000` para el frontend y `http://localhost:8000` para el backend.

## <samp>Modelo de las tablas</samp>

<img src="docs/models_learning.png" alt="Tablas Django">
