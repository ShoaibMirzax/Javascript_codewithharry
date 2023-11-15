alert("heye! ")
let a = prompt("enter a number ", '04')
a = Number.parseInt(a)
// document.write('Your Number: ' + a)
let write = confirm("Do you want to write it to page ")
if(write){
    document.write('Your Number: ' + a)
}else{
    document.write('Allow Me to write ')

}

// use these in Admin panel 
// otherwise avoid this and use Models
