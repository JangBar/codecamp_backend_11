/**
 * @swagger
 * /tokens/phone:
 *  post:
 *      summary: 1. 인증문자 전송 🚀    실행순서 ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
 *      description: ❗️토큰을 생성하고, 입력받은 핸드폰 번호로 토큰을 전송합니다. 핸드폰 번호, 토큰, isAuth는 false 값으로 DB에 저장합니다. 해당 핸드폰 번호가 있으면 최신 토큰으로 덮어씁니다❗️
 *      tags: [tokens_phone]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: "01012345678"   
 *      responses:
 *          '200':
 *                  description: 전송완료 문구
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: "핸드폰으로 인증 문자가 전송되었습니다~📨"
 */

/**
 * @swagger
 * /tokens/phone:
 *  patch:
 *      summary: 2. 인증번호 검사 🔐
 *      description: ❗️핸드폰 번호가 없거나, 해당 핸드폰 번호에 함께 저장된 토큰이 입력받은 토큰과 일치하지 않는다면 false를 응답합니다. 토큰이 일치하고, isAuth가 false라면 true로 변경하여 저장합니다.❗️
 *      tags: [tokens_phone]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example: "01012345678" 
 *                              token:
 *                                  type: string
 *                                  required: true
 *                                  example: "123456"   
 *      responses:
 *          '200':
 *                  description: 전송완료 문구
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: "true😎 or fales😡"   
 */

/**
 * @swagger
 * /personal:
 *  post:
 *      summary: 3. 주민등록번호 검사 ⭐️
 *      description: ❗️가입이 가능하면 true, 가입이 불가능하면 false 문구가 나옵니다❗️
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              personal:
 *                                  type: string
 *                                  required: true
 *                                  example: "8906063214567"  
 *      responses:
 *          '200':
 *                  description: 전송완료 문구
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: "true or fales"   
 */

/**
 * @swagger
 * /users:
 *  post:
 *      summary: 4. 회원가입 📋
 *      description: ❗️입력한 정보가 저장됩니다. isAuth가 true인지 확인하고 isAuth가 false이거나 핸드폰 번호가 없으면 442상태코드와 함께 에러 문구를 반환합니다.❗️
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  required: true
 *                                  example: "강백호"
 *                              email:
 *                                  type: string
 *                                  required: true
 *                                  example : "atta@naver.com"
 *                              personal1:
 *                                  type: string
 *                                  required: true
 *                                  example : "123456"
 *                              personal2:
 *                                  type: string
 *                                  required: true
 *                                  example : "7891000"
 *                              prefer:
 *                                  type: string
 *                                  required: true
 *                                  example : "https://www.naver.com"
 *                              pwd:
 *                                  type: string
 *                                  required: true
 *                                  example : "Cd2918"
 *                              number01:
 *                                  type: string
 *                                  required: true
 *                                  example : "010"
 *                              number02:
 *                                  type: string
 *                                  required: true
 *                                  example : "1234"
 *                              number03:
 *                                  type: string
 *                                  required: true
 *                                  example : "5678"
 *      responses:
 *          '200':
 *                  description: user의 _id 리턴
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: "61ee1b7272a81036fc429a05"
 *          '422':
 *                  description: 에러문구
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: "에러!! 핸드폰 번호가 인증되지 않았습니다😱"
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: 5. 회원 목록 조회📕
 *      description: ❗️모든 회원의 name(이름), email(이메일), personal(주민등록번호), prefer(내가좋아하는사이트), phone(핸드폰번호), og(오픈그래프 정보 title, description, image)를 불러옵니다❗️
 *      tags: [User]
 *      responses:
 *          '200':
 *                  description: 유저 목록
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string                           
 *                            example: {
 *                                      "name": "강백호",
 *                                      "email": "ata@naver.com",
 *                                      "personal": "123456-*******",
 *                                      "prefer": "https://www.naver.com",
 *                                      "phone": "01012345678",
 *                                       "og": {
 *                                       "title": "네이버",
 *                                        "image": "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
 *                                        "description": "네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"
 *                                         },
 *                                        }
 */