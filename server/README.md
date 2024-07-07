# <samp>Framework Django Rest con React</samp>
## <samp>Stuff</samp>
Se necesita instalar el modulo [**django-cors-headers**](https://pypi.org/project/django-cors-headers/) que lo necesitaremos para poder comunicar nuestro backend con nuestro frontend. La razón de esto es porque en nuestro backend cuando se ejecuta en desarrollo, nos proporciona un servidor de desarrollo que se ejecuta en el puerto 8000. Del mismo modo, nuestro proyecto frontend proporciona un servidor de desarrollo que se ejecuta en el puerto 5153 y aqui surgen pequeños problemas de seguridad en los clientes.

### <samp>Seguridad de los navegadores</samp>
Los navegadores no permiten comunicar diferentes servidores por razones de seguridad. Por lo tanto, nosotros debemos de autorizar a un servidor especifico para que se conecte a nuestro servidor backend. 

### <samp>Documentar nuestra API</samp>
<samp>**Opcional:**</samp> Podemos instalar el paquete [drf-spectacular](https://github.com/tfranzel/drf-spectacular/) para poder documentar nuesta APi que hemos creado.

> Instalar los modulos. Añadirlos como apps en el proyecto
```sh
pip install django-cors-headers drf-spectacular drf-spectacular-sidecar
```


