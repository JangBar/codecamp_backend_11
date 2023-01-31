
export class ProductController {
  cashService;
  productService;

  constructor(cashSetvice, productService) {
    this.cashService = cashSetvice;
    this.productService = productService;
  }

  buyProduct = (req, res) => {
    // 1. 가진동 검증하는 코드 (대략 10줄 =>2줄 =>1줄 정도)

    const hasMoney = this.cashService.checkValue();

    // 2. 팜매여부 검증하는 코드 (대략 10줄 =>2줄 =>1줄 정도)
    // const productService = new ProductService();
    const isSoldout = this.productService.checkSoldout();

    //3. 상품 구매하는 코드
    if (hasMoney && !isSoldout) {
      res.send("상품 구매 완료");
    }
  };

  refundProduct = (req, res) => {
    // // 1. 판매여부 검증하는 코드 (대략 10줄 =>2줄 =>1줄 정도)
    // const roductService = new ProductService();
    const isSoldout = this.productService.checkSoldout();
    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("상품 환불 완료!!");
    }
  };
}
