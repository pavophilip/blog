#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 yellow = vec3(1., 0.843, 0.);
    vec3 blue = vec3(0., 0.341, 0.718);

    vec3 color = mix(yellow, blue, step(0.5, st.y));

    gl_FragColor = vec4(color, 1.);
}