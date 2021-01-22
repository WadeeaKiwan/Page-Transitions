import Highway from '@dogstudio/highway';
import Fade from './transition';

const highway = new Highway.Core({
  transitions: {
    default: Fade
  }
});

