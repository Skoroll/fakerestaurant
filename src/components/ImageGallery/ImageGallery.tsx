// src/components/ImageGallery/ImageGallery.tsx
const ImageGallery = (): string[] => {
    const importAll = (r: __WebpackModuleApi.RequireContext): string[] => {
      const images = r.keys().map((file) => r(file) as string); // Utilisation de l'assertion de type pour dire que c'est une chaîne de caractères

      return images;
    };
  
    // Retourne les images chargées via require.context
    return importAll(require.context('../../assets/img', false, /\.(png|jpe?g|svg)$/));
  };
  
  export default ImageGallery;
  