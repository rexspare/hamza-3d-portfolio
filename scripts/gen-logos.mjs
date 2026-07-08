// Generates tech-stack ball textures matching the existing format:
// 1404x966 white canvas with the logo composited twice (left + right halves).
import sharp from "sharp";

const W = 1404;
const H = 966;
const LOGO_H = 440;
const OUT_DIR = "public/images";
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// slug -> devicon svg path OR full URL
const logos = {
  graphql: "graphql/graphql-plain.svg",
  redux: "redux/redux-original.svg",
  firebase: "firebase/firebase-plain.svg",
  nestjs: "nestjs/nestjs-original.svg",
  tailwind: "tailwindcss/tailwindcss-original.svg",
  postgresql: "postgresql/postgresql-original.svg",
  jest: "jest/jest-plain.svg",
  git: "git/git-original.svg",
  figma: "figma/figma-original.svg",
  supabase: "supabase/supabase-original.svg",
  reactnative: "react/react-original.svg",
  expo: "https://cdn.simpleicons.org/expo/000020",
  stripe: "https://cdn.simpleicons.org/stripe/635BFF",
  aws: "amazonwebservices/amazonwebservices-original.svg",
};

async function build(slug, path) {
  const url = path.startsWith("http") ? path : `${CDN}/${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${res.status}`);
  const svg = Buffer.from(await res.arrayBuffer());

  const logo = await sharp(svg, { density: 400 })
    .resize({ height: LOGO_H, fit: "inside" })
    .png()
    .toBuffer();
  const { width: lw, height: lh } = await sharp(logo).metadata();

  const top = Math.round(H / 2 - lh / 2);
  const x1 = Math.round(W * 0.25 - lw / 2);
  const x2 = Math.round(W * 0.75 - lw / 2);

  await sharp({
    create: { width: W, height: H, channels: 4, background: "#ffffff" },
  })
    .composite([
      { input: logo, left: x1, top },
      { input: logo, left: x2, top },
    ])
    .webp({ quality: 90 })
    .toFile(`${OUT_DIR}/${slug}.webp`);
}

const results = await Promise.allSettled(
  Object.entries(logos).map(([slug, path]) =>
    build(slug, path).then(
      () => console.log(`OK    ${slug}`),
      (e) => {
        console.log(`FAIL  ${slug} (${e.message})`);
        throw e;
      }
    )
  )
);

const ok = results.filter((r) => r.status === "fulfilled").length;
console.log(`---- ${ok}/${results.length} generated ----`);
