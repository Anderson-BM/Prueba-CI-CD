
# Mi Proyecto - CI/CD con GitHub Actions

## Descripción
Este es un proyecto simple con HTML, CSS y JavaScript puro que implementa un pipeline CI/CD utilizando GitHub Actions.

## Estructura del Proyecto
```
/mi-proyecto  
│── /src  
│   ├── index.html  
│   ├── styles.css  
│   ├── script.js  
│── /tests  
│   ├── script.test.js  
│── /dist (generado al compilar)  
│── package.json  
│── .gitignore  
│── README.md  
│── .github/workflows/ci-cd.yml  
```

## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/mi-proyecto.git
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## Uso
Para ejecutar el proyecto en un entorno local:
```sh
npm start
```

Para ejecutar las pruebas:
```sh
npm test
```

## Pipeline CI/CD
Este proyecto utiliza GitHub Actions para:
- Ejecutar pruebas automáticas en cada `push` o `pull_request`.
- Construir y desplegar el proyecto en GitHub Pages si las pruebas son exitosas.

## Configuración del Pipeline
El archivo de workflow `.github/workflows/ci-cd.yml` realiza los siguientes pasos:
1. **Build**
   - Configura Node.js
   - Instala dependencias
   - Ejecuta pruebas
2. **Deploy**
   - Compila el proyecto
   - Publica en GitHub Pages

## Archivos del Proyecto
### 📄 index.html
```html

```

### 🎨 styles.css
```css

```

### 📝 script.js
```js

```

### 🧪 script.test.js (Pruebas con Jest)
```js

```

### 📦 package.json
```json


```

## Despliegue
El sitio web será desplegado automáticamente en GitHub Pages y estará disponible en:
```
https://tu-usuario.github.io/mi-proyecto/
```

## Contribución
Si deseas contribuir, por favor sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios a GitHub (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT.
