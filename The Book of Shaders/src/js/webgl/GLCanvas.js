import { WebGLContext } from './WebGLContext';
import { ShaderProgram } from './ShaderProgram';

export class Canvas {
    constructor(canvasId, vertexShaderSource, fragmentShaderSource) {
            this.canvas = document.querySelector(canvasId);
            this.context = new WebGLContext(this.canvas);
            this.gl = this.context.gl;
            
            this.shaderProgram = new ShaderProgram(
                this.gl,
                vertexShaderSource,
                fragmentShaderSource
            );

            this.shaderProgram.use();

             this.resizeCanvas();
             window.addEventListener('resize', () => this.resizeCanvas());

            this.init();
            this.animate();
        }

        resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

        const uResolutionLocation = this.gl.getUniformLocation(this.shaderProgram.program, 'u_resolution');
        this.gl.uniform2f(uResolutionLocation, this.canvas.width, this.canvas.height);
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
    
                this.shaderProgram.use();
                const timeLocation = this.shaderProgram.getUniformLocation('u_time');
                this.gl.uniform1f(timeLocation, time);
    
                this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            };
            
            requestAnimationFrame(render);
        }
}