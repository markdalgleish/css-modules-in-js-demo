export default {
  '.root': {
    padding: '20px 10px'
  },

  '.ball': {
    composes: 'bounce from "shared/styles/animations.css"',
    width: 40,
    height: 40,
    borderRadius: 20,
    background: 'rebeccapurple'
  }
};
