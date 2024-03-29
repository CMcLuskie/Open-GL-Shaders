#version 330

uniform samplerCube u_cubemap;

in vec3 v_refraction;
in vec3 v_reflection;
in float v_fresnel;

layout(location = 0, index = 0) out vec4 fragColor;

void main(void)
{
	vec4 refractionColor = texture(u_cubemap, normalize(v_refraction));
	vec4 reflectionColor = texture(u_cubemap, normalize(v_reflection));
		
	fragColor = mix(refractionColor, reflectionColor, v_fresnel);
}
