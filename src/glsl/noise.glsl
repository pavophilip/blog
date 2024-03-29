float noise( in vec2 st ) {
    vec2 i = floor( st );
    vec2 f = fract( st );

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix( mix( dot( random2( i + vec2( 0.0, 0.0 )), f - vec2( 0.0, 0.0 )),
    dot( random2( i + vec2( 1.0, 0.0 )), f - vec2( 1.0, 0.0 )), u.x),
    mix( dot( random2( i + vec2( 0.0, 1.0 )), f - vec2( 0.0, 1.0 )),
    dot( random2( i + vec2( 1.0, 1.0 )), f - vec2( 1.0, 1.0 )), u.x), u.y);
}