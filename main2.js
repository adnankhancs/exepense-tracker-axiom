const div=document.querySelector("#x");
div.addEventListener('click', a);

// axios({method:'delete',
// url:'https://crudcrud.com/api/435d01e1aa634fb8b2dd712bfbcf1a42/khan/63b9782532f90d03e8f10b92'
// })
// .then(res=>console.log(res) )
// .catch(err=>console.log(err))
// ;

// const r=document.querySelector("#butt");
// r.addEventListener('click', reset);
function a(e){
    e.preventDefault();
    const item=document.querySelector("#income-title-input");
    const cost=document.querySelector("#income-amount-input");

    if(item.value.length==0 || cost.value.length==0 )
    console.log("fill both");
    else{
        // console.log((item.value).html('<span>-$'+cost.value+'</span>'));    
    creatli(item.value+"- Rs. <span>"+cost.value +"</span>");
    // head(-parseFloat(cost.value));
    // headb(parseFloat(cost.value),'out');
    console.log(item.value+cost.value);
    getToSave(item.value,cost.value);
    // xyz();
    }

}
function creatli(text){
    const ul=document.querySelector('ul');
    const LI=document.querySelector('li');
    const li=document.createElement('li');
    const but=document.createElement('button');
    var t=document.createTextNode("DELETE");
    but.appendChild(t);
    but.class='abcde';
    const li_chi=document.querySelector('ul');
    const li1=document.querySelectorAll('li');

    but.addEventListener('click',()=>{console.log("dabao");
    console.log(but.parentElement.textContent);
    console.log(li1.length+"----"+Array.prototype.indexOf.call(li_chi.children,but.parentElement));
    getToDele(li1.length);
});

    




    li.innerHTML=text;
    li.style.backgroundColor='grey';
    li.appendChild(but);

    ul.insertBefore(li,LI);
}

function getToDele(d) {
    //   axios({method:'get',
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   params:{
    //     _limit:5}
    // })
    // .then(res=>showOutput(res) )
    // .catch(err=>console.log(err))
    // ;
    axios.get("https://crudcrud.com/api/4ac2aadd77a3474590282f98a6f09da8/data")
    .then((res)=>{
        console.log(res);
        dele(res,d);} )
    .catch(err=>console.log(err))
    ;
    
    
    } 


function dele(l,d)
{
    
    // let k=JSON.parse(localStorage.getItem("lc"));
    let k=JSON.parse(JSON.stringify(l.data[0]['ls'],null,2));

    console.log(d+" position pe yhi delete "+k[d][0]+"krna hai na:"+k[d][1]);
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // console.log("before deleting:"+JSON.stringify(k))
    delete k[d];
    clear_list();
    k=k.filter(Boolean);
    // // console.log("after deleting:"+JSON.stringify(k))
    console.log('PUT/PATCH Request');
    axios({method:'put',
    url:"https://crudcrud.com/api/4ac2aadd77a3474590282f98a6f09da8/data/63b92b6d32f90d03e8f10af3",
    data:{
    ls:k
      }
  })
  .then(res=>console.log(res) )
  .catch(err=>console.log(err))
  ;


    // localStorage.setItem('lc',JSON.stringify(k)); 
    showlist();
}
function getToSave(text_save,value_save) {
    //   axios({method:'get',
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   params:{
    //     _limit:5}
    // })
    // .then(res=>showOutput(res) )
    // .catch(err=>console.log(err))
    // ;
    axios.get("https://crudcrud.com/api/435d01e1aa634fb8b2dd712bfbcf1a42/khan/63b9782532f90d03e8f10b92")
    .then((res)=>{
        console.log(res);
        save(res,text_save,value_save);} )
    .catch(err=>console.log(err))
    ;
    
    
    } 


function save(k,text_save,value_save){
    let l=JSON.parse(JSON.stringify(k.data[0]['ls'],null,2));
    console.log(value_save+"kya hoga yha"+l.length+"---"+text_save);

    // let l=JSON.parse(localStorage.getItem("lc"));
   
    tasklist=l;
    
    tasklist.push([text_save,value_save]);
    console.log('PUT/PATCH Request');
    axios({method:'put',
    url:"https://crudcrud.com/api/435d01e1aa634fb8b2dd712bfbcf1a42/khan/63b9782532f90d03e8f10b92",
    data:{
    ls:tasklist
      }
  })
  .then(res=>console.log(res) )
  .catch(err=>console.log(err))
  ;
    // localStorage.setItem('lc',JSON.stringify(tasklist));
    // console.log(tasklist);


}
showlist();
function showlist(){
    axios.get("https://crudcrud.com/api/435d01e1aa634fb8b2dd712bfbcf1a42/khan/63b9782532f90d03e8f10b92")
    .then((res)=>{
        console.log(res);
        show(res);} )
    .catch(err=>console.log("kuch to error"+err))
    ;


}

function show(l){  
    // let k=JSON.parse(localStorage.getItem("lc"));
    let k=JSON.parse(JSON.stringify(l.data[0]['ls'],null,2));

    if(k.length1!=0){
   
    // else{
    //     tasklist=l;
    // }
    for(var i=0;i<k.length; i++){
        console.log(k[i][1]);
        creatli(k[i][0]+" - Rs. <span>"+k[i][1]+"</span>")

    }
}


}
function reset(){
    localStorage.clear();
    clear_list();
    }
    function clear_list(){
        const li2=document.querySelectorAll('li');
    for(var i=0;i<li2.length; i++){
        console.log(li2[i].innerHTML);
        li2[i].remove();
    
      
    }
}