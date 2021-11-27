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




