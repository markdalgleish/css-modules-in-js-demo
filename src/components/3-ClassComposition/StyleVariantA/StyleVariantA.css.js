export default {
  '.root': {
    composes: 'box from "shared/styles/layout.css"',
    borderColor: 'red'
  },

  '.text': {
    composes: 'heading from "shared/styles/typography.css"',
    color: 'red'
  }
};
