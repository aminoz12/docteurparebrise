# Documan Font Setup

To use the Documan font, please add the following font files to this directory (`public/fonts/`):

## Required Font Files:

- `Documan-Regular.woff2` (weight: 400) - Regular weight
- `Documan-Bold.woff2` (weight: 700) - Bold weight
- `Documan-Light.woff2` (weight: 300) - Light weight
- `Documan-Medium.woff2` (weight: 500) - Medium weight

## Font File Names

The font files should be named exactly as listed above. If your font files have different names, you'll need to update the paths in `styles/globals.css` (the @font-face declarations).

## After Adding Font Files

1. Place your font files in this directory (`public/fonts/`)
2. Restart your development server: `npm run dev`
3. The font will automatically be applied to your entire website!

## Note:

The site will work fine without the font files - it will just use Inter font as a fallback. Once you add the Documan font files, they'll automatically be used.

