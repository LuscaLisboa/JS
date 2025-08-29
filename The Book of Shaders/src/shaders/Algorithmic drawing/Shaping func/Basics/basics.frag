#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

out vec4 fragColor;

float plot(vec2 st);

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    vec3 color = vec3(st.x - 0.9 * sin(0.5*u_time));

    // Plot the line
    float pct = plot(st);
    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);

	fragColor = vec4(color,1.0);
}

// Func to Plot a line
float plot(vec2 st) {
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}