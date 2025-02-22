#version 300 es
precision highp float;

uniform vec2 u_resolution;  // Canvas size (width,height)
uniform vec2 u_mouse;       // mouse position in screen pixels
uniform float u_time;       // Time in seconds since load

out vec4 fragColor;

float abs_sin_time();
float abs_cos_time();
float tan_time();

void main() {
    fragColor =  vec4(abs_sin_time(), 0.0, 0.0, 1.0);
}


// sin(u_time):         1 - 0   exponential smooth
// abs(sin(u_time)):    1 - 0   linear
float abs_sin_time() {
    return abs(sin(u_time));
}

// cos(u_time):         0 - 1   exponential smooth
// abs(cos(u_time)):    0 - 1   linear
float abs_cos_time() {
    return abs(cos(u_time));
}

float tan_time(){
    return tan(u_time);
}