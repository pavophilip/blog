#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

uniform vec4 u_color_bg;
uniform vec4 u_color_blob;

const vec2 center = vec2( 0.5, 0.5 );

// Random and noise
//
// Gradient noise implementation as featured in:
//
//    https://thebookofshaders.com/edit.php#11/2d-gnoise.frag
//
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
    // Unit coordinate, [0, 1]
    vec2 u = gl_FragCoord.xy / u_resolution;

    // Vector from center
    vec2 v =  center - u;

    // Radius from center
    float r = length( v );

    // Unit vector
    vec2 uv = v / r;

    // Ring offset
    float o = noise(u + u_time) ;

    // Noisey radius
    float nr = smoothstep(0.4 - o, 0.4 - o, r);

    vec4 color = u_color_blob;
    vec4 bgColor = u_color_bg;

//    color.a = 1. - nr;

    gl_FragColor = mix(color, bgColor, step(0.3, r + abs(smoothstep(0.2, 0.3, o))));
}