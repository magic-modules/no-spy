# ${state.title}

this is the
[@magic-modules](https://github.com/magic-modules)
NoSpy component.

${state.description}

<GitBadges>@magic-modules/no-spy</GitBadges>

## installation:

`npm install --save-exact @magic-modules/no-spy`

## usage

### activate

to activate NoSpy, add it to the list of hoisted modules

```
// src/config.mjs
export default {
  // ... other config variables

  HOIST: ['NoSpy'],
}
```

after doing this, the no-spy module will show up.'),

### change contents, add cookies

```
// /src/app.mjs
export const state = {
  nospy: {
    title: 'Title text for the nospy popup',
    content: 'String or Array of Magic modules',
    buttonText: 'Button text if no cookies are defined',
  },
})
```

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/no-spy/tree/master/example),
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
