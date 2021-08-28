const data=()=>{
    fetch('https://randomuser.me/api/?results=500')
.then(res=>res.json())
.then(data=>console.log(data))

}
const displayData=allData=>{
    allData.forEach(element => {
        console.log(element.results.gender);
    });
}
data();