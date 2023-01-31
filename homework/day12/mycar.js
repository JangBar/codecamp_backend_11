class 출발{
  run = () =>{
        console.log("출발하세요🏎️")
  }
}
class 정지{
  run = () =>{
        console.log("정지하세요🖐️")
  }
}

class myCar{ 
  
  선택;

  constructor(qqq){
    this.선택=qqq
  }

car(select,hp,color){
  console.log("기종 :"+select)
  console.log("마력 :"+hp)
  console.log("색상 :"+color)
}

run = () => {
  this.선택.run()
}

}
  console.log("-----------")
  const Car1= new myCar(new 출발)
  Car1.car("람보르기니 우르스","650ph","노랑색")
  Car1.run()

  console.log("-----------")
  const Car2= new myCar(new 정지)
  Car2.car("마티즈","99ph","쥐색")
  Car2.run()
  console.log("-----------")

