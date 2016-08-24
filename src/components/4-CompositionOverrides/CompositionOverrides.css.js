export default {
  '.root': {
    composes: 'box from "shared/styles/layout.css"',
    borderStyle: 'dotted',
    borderColor: 'green'
  },

  '.text': {
    composes: 'heading from "shared/styles/typography.css"',
    fontWeight: 200,
    color: 'green'
  }
};
