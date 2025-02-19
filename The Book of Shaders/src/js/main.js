import baseVertexShaderSource from '../shaders/vertex/base.vert?raw'
import baseFragmentShaderSource from '../shaders/fragment/base.frag?raw'
import { Canvas } from './webgl/GLCanvas';

window.addEventListener('DOMContentLoaded', () => {
    new Canvas('#canvas01', baseVertexShaderSource, baseFragmentShaderSource);
});