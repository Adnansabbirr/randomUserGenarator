const comment=()=>{
    
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>displayComment(data));
}



const displayComment=(allData)=>{
   
    allData.forEach(element => {
        console.log(element);
        const commnetSection=document.getElementById('commentSection');
        const p=document.createElement('p');
        p.innerText=element.email;
        commnetSection.appendChild(p);
    }); 
       
  
}
document.getElementById('comment-load').addEventListener('click',function(){
    comment();
})