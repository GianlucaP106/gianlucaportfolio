varying vec3 vNormal;

void main() {
    vec3 normal = normalize(vNormal);
    float intensity = dot(normal, vec3(0, 0, 1));
    vec3 glowColor = vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(glowColor * intensity, 1.0);
}