#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
    vec2(12.9898,78.233)))
    * 43758.5453123);
}

// 2D Noise based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec2 st = gl_FragCoord.xy / u_resolution;
    st.x *= u_resolution.x/u_resolution.y;

    vec2 mouse = u_mouse / u_resolution;

    mouse.x = u_mouse.x / u_resolution.y;

    vec4 bgColor = vec4(0., 0., 0., 0.);
    vec4 dotColor = vec4(0.9, 0.9, 0.9, 1.);
    vec4 redColor = vec4(0., 0., 0., 1.);

    vec2 center = vec2(0.5, 0.5);

    float mouse_dist = distance(center, st);

    float mouseAlpha = 1. - smoothstep(0., 0.5, mouse_dist);

    float radius = 0.1;

    float frequency = 100.0;

    vec2 nearest = 0.5 * fract(frequency * st ) - 0.25;

    float dist = length(nearest);

    float alpha = smoothstep(0., radius, dist);

    gl_FragColor = mix(mix(dotColor, redColor, mouseAlpha), bgColor, alpha);
}