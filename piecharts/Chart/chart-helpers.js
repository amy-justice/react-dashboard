import { findIndex } from "lodash/array";

export function prepareData(data) {
  return data.map(item => ({
    ...item,
    to: {
      startAngle: item.startAngle,
      endAngle: item.startAngle
    },
    from: {
      startAngle: item.startAngle,
      endAngle: item.endAngle
    }
  }));
}

export function animate(options) {
  const start = performance.now();

  return requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = options.timing
      ? options.timing(timeFraction)
      : timeFraction;

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      options.callback && options.callback();
    }
  });
}

export function unionProps(prev, next) {
  const nextCopy = [...next];

  const res = prev.map(item => {
    const idx = findIndex(next, d => d.label === item.label);
    const nextPropsItem = nextCopy[idx];
    let newItem;
    nextCopy[idx] = undefined;

    if (nextPropsItem) {
      newItem = {
        ...item,
        from: {
          startAngle: item.startAngle,
          endAngle: item.endAngle
        },
        to: {
          startAngle: nextPropsItem.startAngle,
          endAngle: nextPropsItem.endAngle
        }
      };
    } else {
      newItem = {
        ...item,
        deleted: true
      };
    }

    return newItem;
  });

  nextCopy
    .map((item, index) => ({ index, value: item }))
    .filter(item => item.value !== undefined)
    .forEach(item => res.splice(item.index, 0, { ...item.value, new: true }));

  return res;
}

function calcStep(item, progress) {
  const startPart = (item.to.startAngle - item.from.startAngle) * progress;
  const endPart = (item.to.endAngle - item.from.endAngle) * progress;

  return {
    startAngle: item.startAngle + startPart,
    endAngle: item.endAngle + endPart
  };
}

export function calcStateOnProgress(data, progress) {
  return data.map((item, index, array) => {
    if (item.deleted || item.new) {
      const startAngle = array[index - 1]
        ? calcStep(array[index - 1], progress).endAngle
        : 0;
      const endAngle = array[index + 1]
        ? calcStep(array[index + 1], progress).startAngle
        : 2 * Math.PI;

      return {
        ...item,
        startAngle,
        endAngle
      };
    } else {
      const { startAngle, endAngle } = calcStep(item, progress);
      return {
        ...item,
        startAngle,
        endAngle
      };
    }
  });
}

export function calcAbortState(data, progress) {}
