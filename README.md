# Proyecto-particulares

## Desplegar en Azure

*Precondiciones*

* Instalar Azure Cli
* Instalar Docker

1. Generar imagen de Docker

    `docker build . -t particularesapi.azurecr.io/proyecto/estudiaencasaweb --build-arg config=production --build-arg imagen_tag=<tag>`

*Nota: reemplazar "\<tag\>" por la versión a instalar. Ej: 1.0.0

2. Loguearse en Azure

   `az login`

3. Loguearse en el Azure Container Registry del proyecto

   `az acr login -n particularesapi`

4. Pushear imagen

    `docker push particularesapi.azurecr.io/proyecto/estudiaencasaweb`

> Deprecado. Se superó la cuota gratuita

## Desplegar en Github Pages

1. El repositorio debe ser público
2. Habilitar las Github Pages

**Nota: Estos dos pasos se hacen solo una vez**

3. Build de la aplicación

   `ng build --prod --base-href "https://rocio367.github.io/Proyecto-particulares/"`

4. Despliegue en Hithub Pages

   `npx angular-cli-ghpages --dir=dist/EstudiaEnCasaWeb`
