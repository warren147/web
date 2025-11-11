const blur =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4+fLlPwAHggMNdKCbYQAAAABJRU5ErkJggg==";

export type OffTrackShot = {
  id: string;
  title: string;
  caption: string;
  image: {
    src: string;
    alt: string;
    blurDataURL: string;
  };
};

export const offTrackShots: OffTrackShot[] = [
  {
    id: "golf",
    title: "Fairway resets",
    caption: "Weekend rounds remind me to slow down and iterate with intent.",
    image: {
      src: "https://images.unsplash.com/photo-1508697014387-db70aad34f4e",
      alt: "Golf course at sunset",
      blurDataURL: blur,
    },
  },
  {
    id: "city-cycling",
    title: "City loops",
    caption: "Cycling clears the head and surfaces new product ideas.",
    image: {
      src: "https://images.unsplash.com/photo-1529429617124-aee711a70412",
      alt: "Cyclist with city skyline",
      blurDataURL: blur,
    },
  },
  {
    id: "arcade",
    title: "Arcade builds",
    caption: "Custom fight sticks + retro builds scratch the tinkering itch.",
    image: {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      alt: "Retro arcade lights",
      blurDataURL: blur,
    },
  },
];
