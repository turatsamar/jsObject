const Ru =
{
    moskva:'Kremle',
    SainPeterburg(){//methods objec
        console.log('privet Moskwa')
    }
}
Ru.SainPeterburg()

//mutation of object
const d = 99
let f=d
f=98
console.log(d)
//console.log(f)
const kl={
    bala:'askar',
    jashy:23
}
kl.jashy=20
kl.ulutu='kyrgyz'
console.log(kl)
//mutation of copy object
const kyz={
    aty:'Chynara',
    jashy:33
}
const ayal=kyz
ayal.jumushu='mugalim'
ayal.jashy=45
console.log(ayal)
//how to avoid mutation
const Mal={
    koi:'arashan',
    jylky:'turkmenskiy',
    took:'brodwey',
    info:{
        arashan:40,
        jylky:21,
        took:11

    }
}
const karaMal=Object.assign({},Mal.info)
karaMal.jylky=7
console.log(Mal)
console.log(karaMal)