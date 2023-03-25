
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform vec4 u_color_bg;
uniform vec4 u_color_blob;

const vec2 center = vec2( 0.5, 0.5 );

float rand(float x) {
    return fract(sin(x)*43758.5453123);
}

float plot(vec2 st, float y){
    return smoothstep( y-0.02, y, st.y) - smoothstep( y, y+0.02, st.y);
}

float shape(vec2 st, float radius, float spikes){
    st = vec2(0.5)-st;

    float f = radius;

    float n = snoise(vec3(st.x, st.y, u_time / 4.))*.5;

    float m = 1. * 0.001 + n;

    float r = length(st);

    float a = atan(st.x, st.y);

    f += pow(m, 2.);

    return 1.-smoothstep(f, f+0.007, r);
}

void main() {
    // Unit coordinate, [0, 1]
    vec2 pixel = gl_FragCoord.xy / u_resolution;
    vec2 mouse = u_mouse / u_resolution;

    float scale = 1.;

    vec2 points[4];
    points[0] = vec2(0.5, 0.5 + 0.3);
    points[1] = vec2(0.5 + 0.3, 0.5);
    points[2] = vec2(0.5, 0.5 - 0.3);
    points[3] = vec2(0.5 - 0.3, 0.5);

    float pct = shape(pixel, 0.5, 5.);

    float m_dist = 1.;
    float nearestPoint = 1.;

//    for (int i = 0; i < 4; i++) {
//        float dist = distance(points[i], pixel);
//
//        if(dist < m_dist){
//            m_dist = dist;
//        }
//    }

//    pixel.y -= mouse.x;
    pixel *= scale;


    // Ring offset

    vec4 color = u_color_blob;
    vec4 bgColor = u_color_bg;

    gl_FragColor =  mix(color, bgColor, pct);
}