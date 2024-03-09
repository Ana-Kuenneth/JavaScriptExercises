/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de
4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10-*/

for(let i=1; i<=500; i++){
    let mod = i % 4
    if(mod==0){
        console.log(i+' (Múltiplo de 4)\n')
    }
    else{
        let mod = i%9
        if(mod==0){
            console.log(i+' (Múltiplo de 9)\n')
        }
        else{
            console.log(i+'\n')
        }
    }

    let mod2= i%5
    if(mod2==0){
        console.log(' -\n')
    }
}