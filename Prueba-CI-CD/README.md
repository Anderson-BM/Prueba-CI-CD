# Prueba-CI-CD
Implementar un pipeline CI/CD básico utilizando GitHub Actions para una aplicación web simple, demostrando la automatización de pruebas y despliegue.


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
