//1.dynamic variable
function s(){
   // console.log('function is main!!')
}
 s() 
  const a='Function is not main!!'
 // console.log(a);
 //static variable
  const b = () =>{
    //console.log('constant function !!') 

  }
  b()
  const m = true
//  console.log(m)
const CityJapan = {
    kantou:'Tokyo',
    kansai:'Osaka'

}
//add property value
CityJapan['Hokkido'] = 'sapporo'
//how to add object property
CityJapan.okinava='Naha'
// how to delete object property
delete CityJapan.kantou
console.log(CityJapan)
 const JapanLetters={
    hiragana:'ひらがな',
    katakana:'カタカナ',
    //nested object
    info:{
        kanji:2000,
        hiragana:42,
        katakana:43
    }

 }
 //delete nested object
 delete JapanLetters.info.hiragana
JapanLetters['kanji']='漢字'
//output nested object
console.log(JapanLetters.info)

