export default {
  '.root': {
    composes: 'box from "shared/styles/layout.css"',
    borderColor: 'blue'
  },

  '.text': {
    composes: 'heading from "shared/styles/typography.css"',
    color: 'blue'
  }
};
