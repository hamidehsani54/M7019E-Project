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
				},
				UserWithData: {
					type: 'object',
					properties: {
						_id: {
							type: 'string'
						},
						username: {
							type: 'string'
						},
						email: {
							type: 'string'
						},
						profilePicture_id: {
							type: 'string'
						},
						createdAt: {
							type: 'string'
						},
						profile_picture: {
							type: 'string'
						}
					}
				},
				UsersWithDataArray: {
					type: 'array',
					items: {
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
							},
							profile_picture: {
								type: 'string'
							}
						}
					}
				},
				UserUpdate: {
					type: 'object',
					properties: {
						_id: {
							type: 'string'
						},
						username: {
							type: 'string'
						},
						email: {
							type: 'string'
						},
						profilePicture_id: {
							type: 'string'
						}
					}
				},
				UserId: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						}
					}
				},
				Set: {
					type: 'object',
					properties: {
						set: {
							type: 'string',
							required: true
						}
					}
				},
				Admin: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}'
						},
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}'
						},
						access: {
							type: 'string',
							enum: ['admin', 'superAdmin']
						}
					}
				},
				AdminsArray: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							user_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							access: {
								type: 'string',
								enum: ['admin', 'superAdmin'],
								required: true
							}
						}
					}
				},
				UseridAndSet: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						set: {
							type: 'string',
							required: true
						}
					}
				},
				AdminCreate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						admin: {
							type: 'object',
							properties: {
								user_id: {
									type: 'string',
									pattern: '[0-9a-z]{24}',
									required: true
								},
								access: {
									type: 'string',
									enum: ['admin', 'superAdmin'],
									required: true
								}
							}
						}
					}
				},
				PostWithData: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						title: {
							type: 'string',
							required: true
						},
						created_at: {
							type: 'string',
							required: true
						},
						content: {
							type: 'string',
							required: true
						},
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						categories_id: {
							type: 'array',
							items: {
								type: 'string',
								pattern: '[0-9a-z]{24}'
							},
							required: false
						},
						tags_id: {
							type: 'array',
							items: {
								type: 'string',
								pattern: '[0-9a-z]{24}'
							},
							required: false
						},
						media_id: {
							type: 'array',
							items: {
								type: 'string',
								pattern: '[0-9a-z]{24}'
							},
							required: false
						},
						user: {
							type: 'object',
							properties: {
								_id: {
									type: 'string',
									pattern: '[0-9a-z]{24}',
									name: {
										type: 'string'
									}
								}
							}
						},
						categories: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									_id: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									name: {
										type: 'string'
									}
								}
							}
						},
						tags: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									_id: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									name: {
										type: 'string'
									}
								}
							}
						},
						media: {
							type: 'array',
							items: {
								type: 'object',
								properties: {
									_id: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									href: {
										type: 'string'
									}
								}
							}
						}
					}
				},
				PostsWithDataArray: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							title: {
								type: 'string',
								required: true
							},
							created_at: {
								type: 'string',
								required: true
							},
							content: {
								type: 'string',
								required: true
							},
							user_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							categories_id: {
								type: 'array',
								items: {
									type: 'string',
									pattern: '[0-9a-z]{24}'
								},
								required: false
							},
							tags_id: {
								type: 'array',
								items: {
									type: 'string',
									pattern: '[0-9a-z]{24}'
								},
								required: false
							},
							media_id: {
								type: 'array',
								items: {
									type: 'string',
									pattern: '[0-9a-z]{24}'
								},
								required: false
							},
							user: {
								type: 'object',
								properties: {
									_id: {
										type: 'string',
										pattern: '[0-9a-z]{24}',
										name: {
											type: 'string'
										}
									}
								}
							},
							categories: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										_id: {
											type: 'string',
											pattern: '[0-9a-z]{24}'
										},
										name: {
											type: 'string'
										}
									}
								}
							},
							tags: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										_id: {
											type: 'string',
											pattern: '[0-9a-z]{24}'
										},
										name: {
											type: 'string'
										}
									}
								}
							},
							media: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										_id: {
											type: 'string',
											pattern: '[0-9a-z]{24}'
										},
										href: {
											type: 'string'
										}
									}
								}
							}
						}
					}
				},
				PostCreate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						post: {
							type: 'object',
							required: true,
							properties: {
								title: {
									type: 'string',
									required: true
								},
								content: {
									type: 'string',
									required: true
								},
								categories_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								tags_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								media_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								}
							}
						}
					}
				},
				PostUpdate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						post: {
							type: 'object',
							required: true,
							properties: {
								title: {
									type: 'string',
									required: false
								},
								content: {
									type: 'string',
									required: false
								},
								categories_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								tags_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								media_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								}
							}
						}
					}
				},
				Category: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						name: {
							type: 'string',
							required: true
						},
						description: {
							type: 'string',
							required: true
						}
					}
				},
				CategoriesArray: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							name: {
								type: 'string',
								required: true
							},
							description: {
								type: 'string',
								required: true
							}
						}
					}
				},
				CategoryCreate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						category: {
							type: 'object',
							required: true,
							properties: {
								name: {
									type: 'string',
									required: true
								},
								description: {
									type: 'string',
									required: true
								}
							}
						}
					}
				},
				CategoryUpdate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						category: {
							type: 'object',
							required: true,
							properties: {
								name: {
									type: 'string',
									required: false
								},
								description: {
									type: 'string',
									required: false
								}
							}
						}
					}
				},
				Tag: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						name: {
							type: 'string',
							required: true
						}
					}
				},
				TagsArray: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							name: {
								type: 'string',
								required: true
							}
						}
					}
				},
				TagCreate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						category: {
							type: 'object',
							required: true,
							properties: {
								name: {
									type: 'string',
									required: true
								}
							}
						}
					}
				},
				TagUpdate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						category: {
							type: 'object',
							required: true,
							properties: {
								name: {
									type: 'string',
									required: false
								}
							}
						}
					}
				},
				Media: {
					type: 'object',
					properties: {
						_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						name: {
							type: 'string',
							required: true
						},
						type: {
							type: 'string',
							required: true
						},
						href: {
							type: 'string',
							required: true
						}
					}
				},
				MediaArray: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							user_id: {
								type: 'string',
								pattern: '[0-9a-z]{24}',
								required: true
							},
							name: {
								type: 'string',
								required: true
							},
							type: {
								type: 'string',
								required: true
							},
							href: {
								type: 'string',
								required: true
							}
						}
					}
				},
				MediaCreate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						Media: {
							type: 'object',
							properties: {
								user_id: {
									type: 'string',
									pattern: '[0-9a-z]{24}',
									required: true
								},
								name: {
									type: 'string',
									required: true
								},
								type: {
									type: 'string',
									required: true
								},
								href: {
									type: 'string',
									required: true
								}
							}
						}
					}
				},
				MediaUpdate: {
					type: 'object',
					properties: {
						user_id: {
							type: 'string',
							pattern: '[0-9a-z]{24}',
							required: true
						},
						Media: {
							type: 'object',
							properties: {
								user_id: {
									type: 'string',
									pattern: '[0-9a-z]{24}',
									required: false
								},
								name: {
									type: 'string',
									required: false
								},
								type: {
									type: 'string',
									required: false
								},
								href: {
									type: 'string',
									required: false
								}
							}
						}
					}
				},
				SearchPosts: {
					type: 'object',
					properties: {
						search: {
							type: 'object',
							required: true,
							properties: {
								title: {
									type: 'string',
									required: false
								},
								content: {
									type: 'string',
									required: false
								},
								categories_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								tags_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								},
								media_id: {
									type: 'array',
									items: {
										type: 'string',
										pattern: '[0-9a-z]{24}'
									},
									required: false
								}
							}
						}
					}
				},
				SearchUsers: {
					type: 'object',
					properties: {
						search: {
							type: 'object',
							required: true,
							properties: {
								type: 'object',
								properties: {
									username: {
										type: 'string',
										required: false
									},
									email: {
										type: 'string',
										required: false
									},
									picture: {
										type: 'string',
										required: false
									}
								}
							}
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
