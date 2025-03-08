export function mergeSort(arr){
    if(arr.length === 0){return 1}
    if(arr.length === 1){return arr}

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid, arr.length)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(l,r){
    let arrx = []
    let il = 0
    let ir = 0

    while(il < l.length && ir < r.length){
        if(l[il].key < r[ir].key){
            arrx.push(l[il])
            il++
        }
        else{
            arrx.push(r[ir])
            ir++
        }
    }
    while(il < l.length){
            arrx.push(l[il])
            il++
        }
        while(ir < r.length){
    
            arrx.push(r[ir])
            ir++
        }
    return arrx
}