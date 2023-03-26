#ifdef GL_ES
precision mediump float;
#endif

float random (float x) {
    return fract(sin(x) * 1.0);
}