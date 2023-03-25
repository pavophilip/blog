#ifdef GL_ES
precision lowp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform vec4 u_color_bg;
uniform vec4 u_color_blob;


float circle(in vec2 st, in float r){
    float dist = distance(st, vec2(0.5));
    return 1.0 - smoothstep(1. * r, r, dist);
}

float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec2 random2( vec2 st ){
    st = vec2( dot( st, vec2( 127.1, 311.7 )),
    dot( st, vec2( 269.5, 183.3 )));

    return -1.0 + 2.0 * fract( sin( st ) * 43758.5453123 );
}

float noise( in vec2 st ) {
    vec2 i = floor( st );
    vec2 f = fract( st );

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix( mix( dot( random2( i + vec2( 0.0, 0.0 )), f - vec2( 0.0, 0.0 )),
    dot( random2( i + vec2( 1.0, 0.0 )), f - vec2( 1.0, 0.0 )), u.x),
    mix( dot( random2( i + vec2( 0.0, 1.0 )), f - vec2( 0.0, 1.0 )),
    dot( random2( i + vec2( 1.0, 1.0 )), f - vec2( 1.0, 1.0 )), u.x), u.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec2 mouse = u_mouse / u_resolution;

    float x = st.x;
    float y = st.y;
    float uRadius = 0.5;
    float spikes = 4.0;

    float imageBlobNoise = noise(vec2(st.x * spikes, st.y * spikes ));
    float radius = map(imageBlobNoise, 0.0, 1.0, uRadius * 0.7, uRadius);

    float alpha = circle(st, radius);

    vec4 color = mix(u_color_bg, u_color_blob, alpha);

    gl_FragColor = color;
}
