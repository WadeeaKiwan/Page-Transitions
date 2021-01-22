import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const timeLine = new TimelineLite();
    timeLine
      .fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' })
      .fromTo(to, 0.5, { height: '2vh' }, {
        height: '90%', top: '10%', onComplete: function () {
          // Delete the previous container
          from.remove();
          // Run the done function after the transition is complete
          done();
        }
      })
      // `to` is section, `children[0]` is the content div
      .fromTo(to.children[0], 2, { opacity: 0 }, { opacity: 1 })
  }

  out({ from, done }) {
    done();
  }
};

export default Fade;