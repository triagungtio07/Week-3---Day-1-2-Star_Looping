let obj = {nama:"agung", ttl: "7 Des 2020", jk:"pria"}
//menambahkan objek
obj["alamat"] = "Jakarta"
console.log(obj)

//colection 
let map = new Map ([["nama", "agung"]]) 

map.set('alamat','jaksel')
map.set('kawarganegaran','indonesia')

console.log(map.values())