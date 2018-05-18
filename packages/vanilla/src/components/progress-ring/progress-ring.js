import Interface from 'interface.json';
import Core from '_core.js';
import ProgressRingIndeterminate from 'components/progress-ring/progress-ring-indeterminate';
import ProgressRingDeterminate from 'components/progress-ring/progress-ring-determinate';
import Template from './progress-ring.html';
import extraSmallSVG from './progress-ring-xs.svg';
import smallSVG from './progress-ring-s.svg';
import mediumsSVG from './progress-ring-m.svg';
import './progress-ring.scss';

const AvailableSizes = ['xs', 's', 'm', 'l', 'xl'];

const sizes = {
  xs: {
    svg: extraSmallSVG,
    size: 20,
    scale: 1
  },
  s: {
    svg: smallSVG,
    size: 28,
    scale: 1
  },
  m: {
    svg: mediumsSVG,
    size: 72,
    scale: 1
  },
  l: {
    svg: mediumsSVG,
    size: 144,
    scale: 2
  },
  xl: {
    svg: mediumsSVG,
    size: 242,
    scale: 3.35
  }
};

class ProgressRing extends Core {
  static _partials = {};
  static _defaults = {
    size: AvailableSizes[2]
  }
  static AvailableSizes = AvailableSizes;

  constructor(options = {}) {
    super(options);

    this._render(Template, options);
    this.initialOptions = options;
  }

  _componentDidMount() {
    this.animation = new ProgressRingIndeterminate(this.el);
    this.animation.start();

    this.setSize(this.initialOptions.size);
  }

  setSize(size) {
    if (!AvailableSizes.includes(size)) {
      console.error(
        `ProgressRing size "${size}" not found, only these sizes are allowed: `,
        AvailableSizes
      );
      return;
    }
    if (size === this.size) { return; }
    this.size = size;

    this.el.innerHTML = sizes[size].svg;
    this.el.style.width = sizes[size].size;
    this.el.style.height = sizes[size].size;
    this.el.children[0].style.transform = `scale(${sizes[size].scale})`;

    this.animation.forceReset();
  }

  setPercentComplete(percentComplete) {
    if (!(this.animation instanceof ProgressRingDeterminate)) {
      this.animation.stop();
      this.animation = new ProgressRingDeterminate(this.el);
      this.animation.start();
    }
    this.animation.setProgress(percentComplete);
    this.el.setAttribute('aria-valuenow', percentComplete);
  }
}

ProgressRing._interface = Interface.components.ProgressRing;

export default ProgressRing;
