let myArray = [1, 2, 3, 4, 9, 8];
let sum =10;

for(let i =0; i< myArray.length -1; i++)
{
    for(let j =i+1; j< myArray.length; j++)
    {
        if(myArray[i]+ myArray[j] == sum)
        {
            console.log(myArray[i] + "," + myArray[j])
        }
    }
}