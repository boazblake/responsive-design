const root = document.body

const app = {
  view: () =>
    m('.page', [
      m('.section menu', m('img', { src: 'images/header.svg' })),
      m('.section content', m('img', { src: 'images/content.svg' })),
      m('.section sign-up', m('img', { src: 'images/sign-up.svg' })),
      m('.section feature-1', m('img', { src: 'images/feature.svg' })),
      m('.section feature-2', m('img', { src: 'images/feature.svg' })),
      m('.section feature-3', m('img', { src: 'images/feature.svg' })),
    ]),
}

m.mount(document.body, app)
