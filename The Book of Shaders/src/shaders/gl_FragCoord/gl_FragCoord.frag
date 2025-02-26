#version 300 es 
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

out vec4 fragColor;

float red(vec2 st);
float green(vec2 st);
float blue(vec2 st);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    fragColor = vec4(
        red(st),
        green(st),
        blue(st), 
        1.0
    );
}

float red(vec2 st) {
    return abs(3.0*sin(1.0*u_time))*(1.0-st.x)*(1.0-st.y);
}

float green(vec2 st) {
    return abs(3.0*sin(1.0*u_time))*(1.0-st.x)*(st.y);
}

float blue(vec2 st) {
    return abs(3.0*sin(1.0*u_time))*(st.x)*(st.y);
}