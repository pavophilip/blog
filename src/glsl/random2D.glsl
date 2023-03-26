#ifdef GL_ES
precision mediump float;
#endif

vec2 random2D( vec2 st ){
    st = vec2( dot( st, vec2( 127.1, 311.7 )),
    dot( st, vec2( 269.5, 183.3 )));

    return -1.0 + 2.0 * fract( sin( st ) * 43758.5453123 );
}