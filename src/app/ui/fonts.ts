import { Rajdhani } from "next/font/google";
import localFont from "next/font/local";

export const rajdhani = Rajdhani({
  weight: ["700"],
  subsets: ["latin"],
});

export const font1 = localFont({
  //   src: "./coinshare.otf",
  src: "./zellic2.ttf",
  //   src: "./ga.ttf",
});
