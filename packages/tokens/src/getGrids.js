// function getGrids(stylesArtboard) {
//   // empty 'grids obj' wheree we will store all colors
//   const grids = {};
//   // get 'grids' artboard
//   const gridsArtboard = stylesArtboard.filter((item) => {
//     return item.name === 'grids';
//   })[0].children;
//
//   gridsArtboard.map((item) => {
//     gridObj = {
//       [item.name]: {
//         count: {
//           value: item.layoutGrids[0].count,
//           type: 'grids',
//         },
//         gutter: {
//           value: `${item.layoutGrids[0].gutterSize}px`,
//           type: 'grids',
//         },
//         offset: {
//           value: `${item.layoutGrids[0].offset}px`,
//           type: 'grids',
//         },
//       },
//     };
//
//     Object.assign(grids, gridObj);
//   });
//
//   return grids;
// }
