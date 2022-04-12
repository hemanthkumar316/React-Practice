 const GM='GM'
 const GN='GN'
let gmaction=()=>{
 console.log('gmaction -step 1')
 return { type:GM}
}
let gnaction=()=>{
 return { type:GN}
}
//action is function.return one object {}
export {gmaction,gnaction,GM,GN}
//exporting has named export
