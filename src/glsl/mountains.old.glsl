#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (float x) {
    return fract(sin(x) * 1.0);
}


float paint(vec2 st, float y, float index){
    return 1. - smoothstep(y , y + 0.005,st.y );
}

float mountain(float x, float index){
    float xt = x + u_time / ( index * 6.) + index * 4.;

    float i = floor(xt);
    float f = fract(xt);


    return mix(random(i), random(i + 1.0), smoothstep(0.1, 1., (6. * f * f * f * f * f - 15. * f * f * f * f + 10. * f * f * f)));
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;


    st *= 4.;

    float x = st.x;

    float i = floor(x);
    float f = fract(x);

    float y1 = mountain(x, 1.);
    float y2 = mountain(x, 2.);
    float y3 = mountain(x, 3.);

    vec4 bg = vec4(vec3(0.945,0.961,0.973), 1.);
    vec4 color = vec4(vec3(0.706,0.788,0.859), 1.);

    vec4 m1 = mix(bg, color, paint(st, y1, 1.));
    vec4 m2 = mix(m1, color, paint(st, y2, 2.));
    vec4 m3 = mix(m2, color, paint(st, y3, 3.));

    gl_FragColor = m1 * m2 * m3;
}