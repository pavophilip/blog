#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (float x) {
    return fract(sin(x) * 1.0);
}

float noise (float x) {
    float i = floor(x);
    float f = fract(x);
    float y = random(i);
    y = mix(random(i), random(i + 1.0), smoothstep(0.,1.,f));

    return y;
}

float mountain (float x, float index){
    x += u_time / (index * index ) / 1. + index * 10.;
    const int octaves = 4;
    float lacunarity = 2.;
    float gain = 0.5;

    float y = 0.;
    float amplitude = 2. / index;
    float frequency = 1. * index * 0.2;

    for (int i = 0; i < octaves; i++) {
        y += amplitude * noise(frequency * x);
        frequency *= lacunarity;
        amplitude *= gain;
    }

    return y + index;
}

float paint(vec2 st, float y){
    return 1. - smoothstep(y , y + 0.005,st.y );
}

uniform vec4 u_color_bg;
uniform vec4 u_color;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;

    st *= 5.;
    st.y += 2.;

    float x = st.x;
    const int mountains = 4;

    vec4 result = gl_FragColor;

    vec4 prev = u_color_bg;

    gl_FragColor = u_color_bg;

    for (int i = 1; i < mountains + 1; i++) {
        float y = mountain(x, float(i));
        vec4 m = mix(prev, u_color, paint(st, y));
        prev = m;
        result = prev;
        gl_FragColor *= result;
    }

}