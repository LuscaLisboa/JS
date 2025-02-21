#version 300 es
precision highp float;

out vec4 fragColor;

vec4 magenta();

void main() {
    fragColor = magenta();
}

vec4 magenta() {
    return vec4(1.0f, 0.0f, 1.0f, 1.0f);
}