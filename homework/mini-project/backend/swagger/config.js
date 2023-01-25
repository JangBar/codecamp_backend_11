// config.js

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '⭐️ 장빠의 미니프로젝트 ⭐️',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.swagger.js'], // files containing annotations as above
};