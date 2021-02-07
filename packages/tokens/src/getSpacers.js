// function getSpacers(stylesArtboard) {
//   // empty 'spacers obj' wheree we will store all colors
//   const spacers = {};
//   // get 'spacers' artboard
//   const spacersAtrboard = stylesArtboard.filter(item => {
//     return item.name === 'spacers';
//   })[0].children;
//
//   spacersAtrboard.map(item => {
//     const spacerObj = {
//       [item.name]: {
//         value: `${item.absoluteBoundingBox.height}px`,
//         type: 'spacers'
//       }
//     };
//
//     Object.assign(spacers, spacerObj);
//   });
//
//   return spacers;
// }
