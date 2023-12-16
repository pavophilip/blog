#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform vec2    u_mouse;
uniform float   u_time;

#include "lygia/generative/snoise.glsl"
#include "lygia/distort/grain.glsl"
#include "lygia/generative/worley.glsl"

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = 1.0/u_resolution.xy;
    vec2 st = gl_FragCoord.xy * pixel;

    vec4 red = vec4(0.8, 0.0, 1.0, 1.0);
    vec4 blue = vec4(0.1, 0.0, 8.0, 1.0);

    st *= 2.;

    gl_FragColor =  mix(red, blue, fract(snoise(vec3(st, u_time / 10.))) / grain(st, u_resolution, fract(u_time)));
}
