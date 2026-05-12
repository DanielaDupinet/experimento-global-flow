# experimento Global Flow

Prototipo en Expo para explorar el flujo Global. Pensado para abrirse en **Expo Go**.

## Cómo correr el proyecto

```bash
npm install
npm start
```

Luego escanea el QR con la app **Expo Go** en tu teléfono.

Si el puerto 8081 está ocupado, puedes usar:

```bash
npm run start:8082
# o
npm run start:8083
```

Para limpiar el cache de Metro:

```bash
npm run start:clear
```

## Stack

- [Expo SDK 54](https://docs.expo.dev/) con `expo-router`
- React Native 0.81 (New Architecture activada)
- NuDS (Nu Design System) — librería local en `vendor/nuds-library/`
- TypeScript

## Estructura

```
app/             # rutas (expo-router)
assets/          # imágenes, íconos, splash
components/     # componentes reutilizables
constants/       # tema y constantes
utils/           # helpers
vendor/          # librería NuDS local
```
