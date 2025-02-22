import baseVertexShaderSource from '../shaders/base/base.vert?raw'
import baseFragmentShaderSource from '../shaders/base/base.frag?raw'
import unifFragmentShaderSource from '../shaders/uniforms/unif.frag?raw'
import { Canvas } from './webgl/GLCanvas';

window.addEventListener('DOMContentLoaded', () => {
    new Canvas('#canvas01', baseVertexShaderSource, baseFragmentShaderSource);
    new Canvas('#canvas02', baseVertexShaderSource, unifFragmentShaderSource);
});