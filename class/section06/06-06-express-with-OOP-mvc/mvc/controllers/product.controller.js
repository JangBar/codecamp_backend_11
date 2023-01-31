import {CashService} from "./services/cash.services.js"
import {ProductService} from "./services/product.services.js"

export class productController{
    buyProduct =(req, res)=>{
      // 1. 가진동 검증하는 코드 (대략 10중 정도)
      const cashService = new CashService()
      const hasMoney = cashService.checkValue()
  
      // 2. 팜매여부 검증하는 코드 (대략 10중 정도)
      const productService = new ProductService()
      const isSoldout = productService.checkSoldout()
  
      //3. 상품 구매하는 코드
      if(hasMoney && !isSoldout){
        res.send("상품 구매 완료")
      }
    }
    refundProduct = (req,res)=>{
      // 1. 판매여부 검증하는 코드 (대략10줄 정도)
      const roductService =new ProductService()
      const isSoldout =productService.checkSoldout()
      // 2. 상품 환불하는 코드
      if(판매완료){
        res.send("상품 환불 완료!!")
      }
}
}
