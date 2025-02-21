export class ShaderProgram {
    constructor(gl, vertexSource, fragmentSource) {
        this.gl = gl;
        this.program = this.createProgram(vertexSource, fragmentSource);
        this.uniforms = {};
        this.attributes = {};
    }

    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Erro de compilação:', this.gl.getShaderInfoLog(shader));
            console.error('Tipo de shader:', type === this.gl.VERTEX_SHADER ? 'VERTEX' : 'FRAGMENT');
            console.error('Código fonte:', source);
            this.gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    createProgram(vertexSource, fragmentSource) {
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);

        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);

        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Erro de link:', this.gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }

    use() {
        this.gl.useProgram(this.program);
    }

    getUniformLocation(name) {
        if (!this.uniforms[name]) {
            this.uniforms[name] = this.gl.getUniformLocation(this.program, name);
        }
        return this.uniforms[name];
    }

    getAttribLocation(name) {
        if (!this.attributes[name]) {
            this.attributes[name] = this.gl.getAttribLocation(this.program, name);
        }
        return this.attributes[name];
    }
}