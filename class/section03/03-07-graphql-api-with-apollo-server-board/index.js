import {ApolloServer} from "@apollo/server"
import{startStandaloneServer} from "@apollo/server/standalone"

const typeDefs = `#graphql
    input CreateBoardInput{
      writer: String
      title: String
      contents: String
      }

      type MyResult{
        number: Int
        writer: String
        title: String
        contents: String
      }

      type Query {
      # fetchBoards: MyResult #객체 1개를 의미!
        fetchBoards: [MyResult] # 배열 안에 객체 1개이상을 의미!
      }

      type Mutation{
        # createBoard(writer:String,title:String,contents:String): String
        createBoard(createBoardInput: CreateBoardInput!): String
      }
`

const resolvers = {
  Query:{
    fetchBoards: (parent,args,context,info)=>{
      // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
  const result = [
    {number :1, writer:"철수", title:"제목입니다~~",contents:"내용이에요!!!"},
    {number :2, writer:"영희", title:"영희입니다~~",contents:"영희이에요!!!"},
    {number :3, writer:"훈이", title:"훈이입니다~~",contents:"훈이이에요!!!"}
  ] 
  
  // 2. DB에서 꺼내온 결과를 브라우저에 응답으로(response) 주기
        return result
    }
  },
  Mutation:{
      createBoard: (_,args)=>{

    // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args.createBoardInput.writer)
      console.log(args.createBoardInput.title)
      console.log(args.createBoardInput.contents)


  // 2. DB에 접속 후, 데이터를 저장 => 데이터를 저장했다고 가정
  

  // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
        return "게시물 등록에 성공하였습니다."
      },
      // // 과제 ) 아래 API가 작동되도록 만들기  1.힌트 : phone.js, 2.힌트 : req,res 관련부분 수정 , 3.힌트 : 타입작성하기
      // createTokenOfPhone:()=>{
      //   const myphone = req.body.myphone;


      //   // 1.휴대폰번호 자릿수 맞는지 확인하기 (10~11자리)
      //   const isValid = checkPhone(myphone);
      //   if(isValid === false) return;
        
      //     // 2.핸드폰 토큰 6자리 만들기 
      //   const mytoken = getToken();
      
      //     // 3.핸드폰번호에 토큰 전송하기
      //   sendTokenToSMS(myphone,mytoken);
    
      //   res.send('인증완료!!!')
      // }

  }
}

const server = new ApolloServer({
    typeDefs, // 키와 벨류가 같으면 생략가능 
    resolvers, // 키와 벨류가 같으면 생략가능 
    cors : true,                                              // 모든사이트 허용하고 싶은 때
    // cors : {origin:["http://naver.com","http://daum.net"]} // 특정사이트만 지정하고 싶을 때 
})

startStandaloneServer(server)