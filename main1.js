const div=document.querySelector("#x");
div.addEventListener('click', a);
// var id='63bc575a32f90d03e8f11283';
var addr='https://crudcrud.com/api/05a0bfbb54e942e890fdde96d6bc732e/fifi/63bc575a32f90d03e8f11283';
// const r=document.querySelector("#butt");
// r.addEventListener('click', reset);
// 
//   getTodos(); 
  
//     console.log('post Request');
//     axios({method:'post',
//     url:adr,
//     data:{ls:[]
//       }
//   })
//   .then(res=>console.log(res) )
//   .catch(err=>console.log(err))
//   ;
    
getTodos();
//   removeTodo();
  function getTodos() {
    //   axios({method:'get',
    //   url:'https://jsonplaceholder.typicode.com/todos',
    //   params:{
    //     _limit:5}
    // })
    // .then(res=>showOutput(res) )
    // .catch(err=>console.log(err))
    // ;
    axios.get(addr)
    .then((res)=>{
        console.log(res.data['ls'].length);
        showlist(res.data['ls']);} )
    .catch(err=>console.log(err))
    ;
    
    
  }

function a(e){
    e.preventDefault();
    const item=document.querySelector("#income-title-input");
    const cost=document.querySelector("#income-amount-input");

    if(item.value.length==0 || cost.value.length==0 )
    console.log("fill both");
    else{
        // console.log((item.value).html('<span>-$'+cost.value+'</span>'));    
    creatli(item.value,cost.value);
    // head(-parseFloat(cost.value));
    // headb(parseFloat(cost.value),'out');
    save(item.value,cost.value);
    // xyz();
    }

}
function creatli(text,val){
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
    // addTodo(); 
    console.log(li1.length+"----"+Array.prototype.indexOf.call(li_chi.children,but.parentElement));
    dele(li1.length);
});

    



    li.innerHTML=text+"- Rs. <span>"+val+"</span>";
    li.style.backgroundColor='orange';
    li.appendChild(but);

    ul.insertBefore(li,LI);
}
function dele(d)
{   axios.get(addr)
.then((res)=>{
    console.log(res.data['ls'].length);
    // showlist(res.data['ls']);
   
            tasklist=res.data['ls'];
        
        delete tasklist[d];
        clear_list();
        tasklist=tasklist.filter(Boolean);
        // localStorage.setItem('lc',JSON.stringify(tasklist));
        console.log(tasklist);
        axios.put(
            addr,
            {ls:tasklist
              }
          )
          .then(res=>console.log(res) )
          .catch(err=>console.log(err))
          ;







})
.catch(err=>console.log(err))
;
    
  
    // let k=JSON.parse(localStorage.getItem("lc"));
    // console.log(d+" position pe yhi delete "+k[d][0]+"krna hai na:"+k[d][1]);
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // console.log("before deleting:"+JSON.stringify(k))
    // delete k[d];
    
    // k=k.filter(Boolean);
    // console.log("after deleting:"+JSON.stringify(k))
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // getTodos(); 
    getTodos();

}


function save(text_save,value_save){
    console.log('POST Request');
//     axios({method:'post',
//     url:'https://crudcrud.com/api/ac82d7255a6941569d09c4cbab92021d/fifi/63bc493732f90d03e8f11249',
//     data:{0:text_save,
//     1:value_save}
//   })
//   .then(res=>console.log("success"+res) )
//   .catch(err=>console.log(err))
//   ;
axios.get(addr)
.then((res)=>{
    console.log(res.data['ls'].length);
    if(res.data['ls'].length==0){
    tasklist=[];}
    else{
        tasklist=res.data['ls'];
    }
    tasklist.push([text_save,value_save]);
    // localStorage.setItem('lc',JSON.stringify(tasklist));
    console.log(tasklist);
    axios.put(
        addr,
        {ls:tasklist
          }
      )
      .then(res=>console.log(res) )
      .catch(err=>console.log(err))
      ;





    } )
.catch(err=>console.log(err))
;





}
// showlist();
function showlist(l){
    // let k=JSON.parse(localStorage.getItem("lc"));
    // console.log("showlist"+JSON.stringify(k.data[1][0],null,2));
    
   k=l;
    // else{
    //     tasklist=l;
    // }
    for(var i=0;i<k.length; i++){
        // console.log(k[i][1]);
        creatli(k[i][0],k[i][1]);

    }



}
function reset(){
    localStorage.clear();
    clear_list();
    }
    function clear_list(){
        const li2=document.querySelectorAll('li');
    for(var i=0;i<li2.length; i++){
        // console.log(li2[i].innerHTML);
        li2[i].remove();
    
      
    }
}