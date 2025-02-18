import { WebGLContext } from './webgl/WebGLContext';
import { ShaderProgram } from './webgl/ShaderProgram';
import vertexShaderSource from '../shaders/vertex/base.vert?raw'
import fragmentShaderSource from '../shaders/fragment/base.frag?raw'

class App {
    constructor() {
        this.canvas = document.querySelector('#glCanvas');
        this.context = new WebGLContext(this.canvas);
        this.gl = this.context.gl;
        
        this.shaderProgram = new ShaderProgram(
            this.gl,
            vertexShaderSource,
            fragmentShaderSource
        );
        
        this.init();
        this.animate();
    }

    init() {
        const positions = new Float32Array([
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
             1.0,  1.0,
        ]);

        const positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

        const positionAttributeLocation = this.shaderProgram.getAttribLocation('a_position');
        this.gl.enableVertexAttribArray(positionAttributeLocation);
        this.gl.vertexAttribPointer(
            positionAttributeLocation,
            2,              // 2 componentes per iteration
            this.gl.FLOAT,  // datatype = 32bit float
            false,          // !normalize data
            0,              // 0 = move to next par per iteration
            0               // starts on buffer
        );
    }

    animate() {
        const render = (time) => {
            time *= 0.001;  // convert to seconds

            this.shaderProgram.use();
            const timeLocation = this.shaderProgram.getUniformLocation('u_time');
            this.gl.uniform1f(timeLocation, time);

            this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        };
        
        requestAnimationFrame(render);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new App();
});