import React from "react";
import Proton from "proton-engine";
import RAFManager from "raf-manager";
import Canvas from "./Canvas";

export default class Particles extends React.Component {
  constructor(props) {
    super(props);
    this.renderProton = this.renderProton.bind(this);
  }

  handleCanvasInited(canvas) {
    this.createProton(canvas);
    RAFManager.add(this.renderProton);
  }

  componentWillUnmount() {
    try {
      RAFManager.remove(this.renderProton);
      this.proton.destroy();
    } catch (e) {}
  }

  createProton(canvas) {
    const num = Math.min(parseInt(window.innerWidth / (1000 / 145)), 400);
    const proton = new Proton();

    const emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(
      new Proton.Span(num),
      new Proton.Span(0.05, 0.2)
    );
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(1, 4));
    emitter.addInitialize(new Proton.Life(Infinity));

    const pointZone = new Proton.Position(
      new Proton.RectZone(0, 0, canvas.width, canvas.height)
    );
    emitter.addInitialize(pointZone);
    emitter.addInitialize(
      new Proton.Velocity(
        new Proton.Span(0.3, 0.6),
        new Proton.Span(0, 360),
        "polar"
      )
    );

    emitter.addBehaviour(new Proton.Alpha(Proton.getSpan(0.2, 0.9)));
    emitter.addBehaviour(new Proton.Color("#ffffff"));
    emitter.addBehaviour(
      new Proton.CrossZone(
        new Proton.RectZone(0, 0, canvas.width, canvas.height),
        "cross"
      )
    );

    emitter.emit("once");
    emitter.damping = 0;
    proton.addEmitter(emitter);

    const renderer = this.createRenderer(canvas);
    proton.addRenderer(renderer);

    setTimeout(() => {
      emitter.rate = new Proton.Rate(new Proton.Span(3), 0.5);
      emitter.removeInitialize(pointZone);
    }, 0);

    this.proton = proton;
    this.emitter = emitter;
    this.renderer = renderer;
  }

  createRenderer(canvas) {
    const R = 140;
    const context = canvas.getContext("2d");
    const renderer = new Proton.CanvasRenderer(canvas);

    renderer.onProtonUpdateAfter = () => {
      const particles = this.emitter.particles;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pA = particles[i];
          const pB = particles[j];
          const dis = pA.p.distanceTo(pB.p);

          if (dis < R) {
            const alpha = (1 - dis / R) * 0.5;
            context.strokeStyle = "rgba(255,255,255," + alpha + ")";
            context.beginPath();
            context.moveTo(pA.p.x, pA.p.y);
            context.lineTo(pB.p.x, pB.p.y);
            context.closePath();
            context.stroke();
          }
        }
      }
    };

    return renderer;
  }

  handleResize(width, height) {
    this.renderer.resize(width, height);
  }

  handleMouseDown(e) {
    for (var i = 0; i < 3; i++) this.emitter.particles[i].dead = true;

    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setTimeout(() => {
      this.emitter.p.x = x;
      this.emitter.p.y = y;
      this.emitter.emit("once");
    }, 60);
  }

  handleMouseMove(e) {
    const ease = 0.3;
    const p0 = this.emitter.particles[0];
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    p0.p.x += (x - p0.p.x) * ease;
    p0.p.y += (y - p0.p.y) * ease;
    p0.radius = 0;
  }

  handleMouseUp(e) {
    this.emitter.stop();
  }

  renderProton() {
    this.proton.update();
    //this.proton.stats.update(2);
  }

  render() {
    return (
      <div>
      {/* <h1>zsetbvarnasb gr</h1> */}
       <Canvas
      
      onMouseDown={this.handleMouseDown.bind(this)}
      onMouseMove={this.handleMouseMove.bind(this)}
      onMouseUp={this.handleMouseUp.bind(this)}
      onCanvasInited={this.handleCanvasInited.bind(this)}
      onResize={this.handleResize.bind(this)}
    />
      </div>
      
      
    );
  }
}


// import React from 'react'

// const particles = Particles.init ({
//   selector: ".background",
//   color: ["#03dac6", "#ff0266", "#000000"],
//   connectParticles: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       options: {
//         color: ["#faebd7", "#03dac6", "#ff0266"],
//         maxParticles: 43,
//         connectParticles: false
//       }
//     }
//   ]
// });
//   window.onload = function () {
//     Particles.init({
//       selector: ".background"
//     });
//   };
//     return (
//     <div>
      
// <sectio class="nav">
//   <h1>FRONTEND TRENDS</h1>
//   <h3 class="span loader"><span class="m">B</span><span class="m">E</span><span class="m">N</span><span class="m">E</span><span class="m">F</span><span class="m">I</span><span class="m">T</span><span class="m">S</span><span class="m">&nbsp;</span><span class="m">o</span><span class="m">f</span><span class="m">&nbsp;</span><span class="m">T</span><span class="m">E</span><span class="m">C</span><span class="m">H</span><span class="m">N</span><span class="m">O</span><span class="m">L</span><span class="m">O</span><span class="m">G</span><span class="m">I</span><span class="m">E</span><span class="m">S</span></h3>
//   <div class="nav-container"><a class="nav-tab" href="#tab-svelte">SVELTE</a><a class="nav-tab" href="#tab-esbuild">ESBUILD</a><a class="nav-tab" href="#tab-next">NEXT.JS</a><a class="nav-tab" href="#tab-typescript">TYPESCRIPT</a><a class="nav-tab" href="#tab-vite">VITE</a><span class="nav-tab-slider"></span></div>
// </sectio>
// <main class="main">
//   <section class="slider" id="tab-svelte">
//     <h1>SVELTE</h1>
//     <h2>another frontend JS framework</h2>
//   </section>
//   <section class="slider" id="tab-esbuild">
//     <h1>ESBUILD</h1>
//     <h2>an extremely fast JavaScript bundler</h2>
//   </section>
//   <section class="slider" id="tab-next">
//     <h1>NEXT.JS</h1>
//     <h2>framework for Production</h2>
//   </section>
//   <section class="slider" id="tab-typescript">
//     <h1>TYPESCRIPT</h1>
//     <h2>giving you better tooling at any scale</h2>
//   </section>
//   <section class="slider" id="tab-vite">
//     <h1>VITE</h1>
//     <h2>a frontend build tool</h2>
//   </section>
// </main>
// <canvas class="background"></canvas>
//     </div>
//   )
 
// export default Particles;




