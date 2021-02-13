module.exports = (spacersArtboard) => {
  const spacers = spacersArtboard?.children?.reduce(
    (accumulatingSpacers, spacersGroup) => {
      if (spacersGroup) {
        const layer = spacersGroup?.children?.find((l) =>
          l.name.match(/space/i),
        );

        if (layer) {
          const height = layer.absoluteBoundingBox.height;
          const heightInPx = `${layer.absoluteBoundingBox.height}px`;
          let heightInRem = '';

          if (height === 0) heightInRem = '0rem';
          if (height === 2) heightInRem = '0.1rem';
          if (height === 4) heightInRem = '0.2rem';
          if (height === 8) heightInRem = '0.4rem';
          if (height === 12) heightInRem = '0.6rem';
          if (height === 16) heightInRem = '0.8rem';
          if (height === 24) heightInRem = '1.3rem';
          if (height === 32) heightInRem = '1.7rem';
          if (height === 40) heightInRem = '2.2rem';

          return {
            ...accumulatingSpacers,
            [`${spacersGroup.name}`]: {
              value: heightInPx,
              type: 'spacer',
            },
            [`${spacersGroup.name}.rem`]: {
              value: heightInRem,
              type: 'spacer',
            },
          };
        }
        return accumulatingSpacers;
      }
    },
    {},
  );

  return spacers;
};
