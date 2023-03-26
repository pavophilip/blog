#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float y){
    return smoothstep( y-0.02, y, st.y) - smoothstep( y, y+0.02, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(1., 1., 1.);

    st *= 10.;
    float x = st.x;

    float i = floor(x);
    float f = fract(x);

    float y = mix(random(i), random(i + 1.0), smoothstep(0., 1., f));

    gl_FragColor = vec4(vec3(0., 0., 0.), plot(st, y));
}