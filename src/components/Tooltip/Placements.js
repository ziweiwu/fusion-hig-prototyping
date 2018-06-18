import positions from 'positions';

//set autoAdjustOverflow options
const autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1,
};

const autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0,
};

export function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return {
    ...autoAdjustOverflowDisabled,
    ...autoAdjustOverflow,
  };
}

// fix the issue when set overflow, the arrow position is inaccurate
// https://github.com/react-component/tooltip/issues/54

// const placementsMap = {
//   tc: 'top center',
//   bc: 'bottom center',
//   cl: 'center right',
//   cr: 'center left',
// };
//
// export function placeArrow(tooltipEl, align) {
//   const arrowEl = tooltipEl.querySelector('.hig-tooltip-arrow');
//   const targetEl = this.getRootDomNode();
//   const position = positions(arrowEl, placementsMap[align.points[0]], targetEl, placementsMap[align.points[1]]);
//
//   if (align.points[0] === 'tc' || align.points[0] === 'bc') {
//     arrowEl.style.top = '';
//     arrowEl.style.left = `${position.left}px`;
//   } else {
//     arrowEl.style.top = `${position.top}px`;
//     arrowEl.style.left = '';
//   }
// }

