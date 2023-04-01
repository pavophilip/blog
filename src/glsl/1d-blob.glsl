
#ifdef GL_ES
precision mediump float;
#endif

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

void main() {
    // Unit coordinate, [0, 1]
    vec2 pixel = gl_FragCoord.xy / u_resolution;
    vec2 mouse = u_mouse / u_resolution;

    float scale = 10.;

    //    pixel.y -= mouse.x;
    pixel *= scale;
    // Ring offset

    vec4 color = u_color_blob;
    vec4 bgColor = u_color_bg;

    float i = floor(pixel.x + u_time);  // integer
    float f = fract(pixel.x + u_time);  // fraction

    float y = mix(rand(i), rand(i + 1.0), smoothstep(0.,1.,f));

    float pct = plot(pixel, y);

    // Vector from center
    vec2 v =  center * scale - pixel;

    // Radius from center
    float r = length( v );

    gl_FragColor =  mix(color, bgColor, pct)  + mix(color, bgColor, step(0.3 * scale, r + 0.5 * y));
}