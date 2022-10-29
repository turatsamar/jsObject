const house ={
    size : {
        hihght:20 ,
        width: 40
    },
    color: 'white',

}

const newHouse = {
    ...house,windows: 'frence Style'
}

//console.table(newHouse)
 const sheepGisar= {
    name:'Gisar',
    weight: 150,
    color: 'blace'
 }

 const sheepArashan = {
       name: 'Arashan',
       weight: 200,
       color: 'red'
 }
  const sheeps = {
    ...sheepGisar,
    ...sheepArashan
  }

  //console.table(sheeps)
  const myFun = (a,b) => {
    let c
    a = a + 1
    b = a + c
    return c
  }
   myFun(10, 10)
