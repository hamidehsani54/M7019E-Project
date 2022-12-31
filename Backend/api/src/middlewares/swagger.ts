import swaggerJsDoc from 'swagger-jsdoc';

export default () => {
	const swaggerDefinition = {
		openapi: '3.0.1',
		info: {
			title: 'M7011E API',
			version: '1.0.0',
			description: 'This is a REST API application made with Express.',
			license: {
				name: 'Licensed Under MIT',
				url: 'https://spdx.org/licenses/MIT.html'
			}
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'Auth0'
				}
			},
			schemas: {
				BearerToken: {
					type: 'string'
				},
				Tokens: {
					type: 'object',
					properties: {
						access_token: {
							type: 'string'
						},
						refresh_token: {
							type: 'string'
						}
					}
				},
				TOTP: {
					type: 'object',
					properties: {
						totp: {
							required: true,
							pattern: '^[0-9]{6}$',
							description: '6 digit TOTP code'
						}
					}
				},
				TOTPSecret: {
					type: 'object',
					properties: {
						secret: {
							type: 'string'
						},
						otpath_url: {
							type: 'string'
						}
					}
				},
				Test: {
					type: 'object',
					properties: {
						test: {
							type: 'string'
						}
					}
				},
				UserCreate: {
					type: 'object',
					properties: {
						username: {
							type: 'string',
							required: true
						}
					}
				},
				User: {
					type: 'object',
					properties: {
						_id: {
							type: 'string'
						},
						auth0_id: {
							type: 'string'
						},
						username: {
							type: 'string'
						},
						email: {
							type: 'string'
						},
						picture: {
							type: 'string'
						},
						createdAt: {
							type: 'string'
						}
					}
				}
			}
		},
		servers: [
			{
				url: 'http://localhost:5001',
				description: 'Docker server'
			},
			{
				url: 'http://localhost:8080',
				description: 'Local server'
			}
		]
	};
	const options = {
		swaggerDefinition,
		apis: ['src/routes/*.ts']
	};

	const swaggerSpec = swaggerJsDoc(options);
	return swaggerSpec;
};
