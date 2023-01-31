// class Date{
//   qqq = 3
//   getFullYear(){
//   }

//   getMonth(){

//   }
// }

const data=new Date()
console.log(data.getFullYear())
console.log(data.getMonth()+1)


class MonsterP{ //몬스터를 만드는 설명서
  power = 10

  constructor(qqq){
    this.power=qqq
  }
  attack = () => {
      console.log("공격하자!!")
      console.log("내 공격력은" + this.power +"야!!!")
  }

  run = () => {
    console.log("도망가자!!")

  }
}

const mymonster1 = new MonsterP(20)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new MonsterP(50)
mymonster2.attack()
mymonster2.run()