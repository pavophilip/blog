#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(1., 1., 1.);

    gl_FragColor = vec4(color, 1.);
}