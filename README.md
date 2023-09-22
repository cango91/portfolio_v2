# Personal Portfolio

This is the source code for my personal portfolio. Although this is not a template, you can adapt it to your needs with some effort, if you're familiar with React and NodeJS.

After cloning, use `npm install` to install dependencies. Then `npm start` will start development server and you can view your changes reflected live. Use `npm run build` to build the React project.

## An Overview of Components

Components are simple and straightforward for the most part and their naming should make their purpose clear. Below are some specialized components that you may need to modify.

### Scrollspy 
`src/components/Scrollspy/Scrollspy.jsx`

This is the sticky scrollspy component. Its CSS is hard-coded and its functionality is **very** tightly-coupled to your overall web-page. If you modify this code for your own needs, either dispose of this component, or make sure to update it to your own requirements.

`const sections = ["About", "Tech Stack", "Projects", "Contact"];` 

should match your section ids exactly. Also, if you will be adding more than 4 sections to your page, make sure to update the logic here:
```jsx
 <div className={`scrollspy__line scrollspy__line--bg-${sections.findIndex(el => el === currentSection) * 25 + 10}`}></div>
```
and here
```jsx
 <div className={`scrollspy__stop__text ${atSection ? 'active' : ''}`}>
```
and the css so the line gradients and stops match your section count.

### Projects, ProjectCarousel and ProjectCard
`src/components/`

These 3 components work together with `TechStack` component to enable a filtered view into the projects. Of note here is the accessibility hacks. These 3 make use of the `swiper` library for aesthetics. However by default, I couldn't get Swiper Components' navigation controllers to play nice with keyboard navigation. So I implemented keydown listeners listening for `Tab` and `Shift+Tab` on these 3 components. That is so the user doesn't have to traverse all the projects and can use swiper's navigation controls instead.

If you know of a better way (there has got to be one!) to achieve this, please reach me!

### ThemeContext
`src/contexts/ThemeContext.js`

Uses ContextAPI to provide theme state to the whole app. If the user has not made an explicit theme choice by at least clicking the theme selector once (which is persisted in `localStorage` thereafter), will add a listener to listen to mediaQuery, which might report a system-wide preference of light or dark theme, and may change during the day depending on time-of-day. Never really tested the change detection, but in theory it should work, as it correctly works on initial setup.