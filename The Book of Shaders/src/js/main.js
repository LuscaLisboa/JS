import baseVertexShaderSource from '../shaders/base/base.vert?raw'
import baseFragmentShaderSource from '../shaders/base/base.frag?raw'
import unifFragmentShaderSource from '../shaders/uniforms/unif.frag?raw'
import gl_FragCoordShaderSource from '../shaders/gl_FragCoord/gl_FragCoord.frag?raw'
import basicsFragmentShaderSource from '../shaders/Algorithmic drawing/Shaping func/Basics/basics.frag?raw'
import basicsCurvedFragmentShaderSource from '../shaders/Algorithmic drawing/Shaping func/Basics/basicsCurved.frag?raw'

import { Canvas } from './webgl/GLCanvas';

import {createCodeEditor} from './CodeMirror/code-mirror';

createCodeEditor('codeCanvas01', '01', baseFragmentShaderSource);
createCodeEditor('codeCanvas02', '02', unifFragmentShaderSource);
createCodeEditor('codeCanvas03', '03', gl_FragCoordShaderSource);
createCodeEditor('codeCanvas04', '04', basicsFragmentShaderSource);
createCodeEditor('codeCanvas05', '05', basicsCurvedFragmentShaderSource);

window.addEventListener('DOMContentLoaded', () => {
    new Canvas('#canvas01', baseVertexShaderSource, baseFragmentShaderSource);
    new Canvas('#canvas02', baseVertexShaderSource, unifFragmentShaderSource);
    new Canvas('#canvas03', baseVertexShaderSource, gl_FragCoordShaderSource);
    new Canvas('#canvas04', baseVertexShaderSource, basicsFragmentShaderSource);
    new Canvas('#canvas05', baseVertexShaderSource, basicsCurvedFragmentShaderSource);
});