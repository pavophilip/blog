#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (float x) {
    return fract(sin(x) * 1.0);
}

float paint(vec2 st, float y){
    return 1. - smoothstep(y, y + 0.005, st.y);
}

float mountain(float x, float index){
    float xt = x + u_time / (10. / index) + index;

    float i = floor(xt);
    float f = fract(xt);

    return mix(random(i), random(i + 1.0), smoothstep(0.1, 1., f)) - index;
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(1., 1., 1.);

    st *= 4.;

    float x = st.x;

    float i = floor(x);
    float f = fract(x);

    float y1 = mountain(x, 1.);
    float y2 = mountain(x, 2.);
    float y3 = mountain(x, 3.);

    st.y -= 3.;
    st.y *= 1.2;

    vec4 bg = vec4(vec3(0.945,0.961,0.973), 1.);
    vec4 mountainColor = vec4(vec3(0.573,0.698,0.8), 1.);

    gl_FragColor = mix(bg, mountainColor, paint(st, y1)) * mix(bg, mountainColor, paint(st, y2)) * mix(bg, mountainColor, paint(st, y3));
}