# gradielicious 🎨✨

The magical library that brings your web pages to life with mesmerizing, noise-generated visuals! Crafted with love and a sprinkle of pixie dust, gradielicious is here to transform your dull, static backgrounds into captivating landscapes of moving colors.

## Features 🚀

- **Easy Integration**: With just a few lines of code, gradielicious integrates seamlessly into your project, making your websites and applications more dynamic and engaging.
- **Customizable**: Tailor the visual experience to your liking. Adjust performance, speed, and zoom to create the perfect ambiance for your users.
- **Lightweight**: No heavy dependencies here! gradielicious is as light as a feather, ensuring your site's performance stays snappy.

## Getting Started 🌟

To embark on your journey with gradielicious, follow these simple steps:

1. **Install gradielicious**

```bash
npm install gradielicious
```

2. **Import and Use**

```typescript
import gradielicious from 'gradielicious'

const parent = document.body // The canvas will attach to this element
const options = {
  resolutionDivisor: 10, // Higher value = lower resolution = better performance
  speed: 5, // Speed of the animation
  zoom: 5, // Zoom level of the noise
}

gradielicious(parent, options)
```

And voilà! You've just added a touch of magic to your project.

## License 📄

gradielicious is released under the ISC license. Feel free to use it in your projects, explore its wonders, and spread the magic!

---

Embark on a journey with gradielicious today and turn your projects into a vibrant, living canvas. 🌈✨
