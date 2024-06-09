# My Web Portfolio!

This Web portfolio was constructed utilizing React, Typescript and Vite with Hot Module Reload.

Currently, two official plugins are available for setting up a simple React/Vite template.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Additional Setup:

I referred to the following guide to get Tailwind CSS setup with Vite
- https://tailwindcss.com/docs/guides/vite

I also utilized a pretty cool library that played a big role in displaying the animations you can see on this web portfolio!
- **Framer Motion** https://framer.com/motion/introduction/

## Deployment

This webpage was deployed simply through the usage of `gh-pages`.
When you set the configuration right it is as simple as running the gh pages deploy script.

The location of the build or dist folder is important so make sure after building, the script is pointing to the correct directory.

```bash
# Refer to package.json

gh-pages -d <location_of_build_dir>
```

