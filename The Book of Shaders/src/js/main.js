import baseVertexShaderSource from '../shaders/base/base.vert?raw'
import baseFragmentShaderSource from '../shaders/base/base.frag?raw'
import unifFragmentShaderSource from '../shaders/uniforms/unif.frag?raw'
import gl_FragCoordShaderSource from '../shaders/gl_FragCoord/gl_FragCoord.frag?raw'

import { Canvas } from './webgl/GLCanvas';

import {createCodeEditor} from './CodeMirror/code-mirror';

createCodeEditor('codeCanvas01', '01', baseFragmentShaderSource);
createCodeEditor('codeCanvas02', '02', unifFragmentShaderSource);
createCodeEditor('codeCanvas03', '03', gl_FragCoordShaderSource);

window.addEventListener('DOMContentLoaded', () => {
    new Canvas('#canvas01', baseVertexShaderSource, baseFragmentShaderSource);
    new Canvas('#canvas02', baseVertexShaderSource, unifFragmentShaderSource);
    new Canvas('#canvas03', baseVertexShaderSource, gl_FragCoordShaderSource);
});