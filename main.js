const div=document.querySelector("#x");
div.addEventListener('click', a);
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
    save(item.value,cost.value);
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
    dele(li1.length);
});

    




    li.innerHTML=text;
    li.style.backgroundColor='purple';
    li.appendChild(but);

    ul.insertBefore(li,LI);
}
function dele(d)
{
    let k=JSON.parse(localStorage.getItem("lc"));
    console.log(d+" position pe yhi delete "+k[d][0]+"krna hai na:"+k[d][1]);
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // localStorage.setItem('lc',JSON.stringify(k)); 
    // console.log("before deleting:"+JSON.stringify(k))
    delete k[d];
    clear_list();
    k=k.filter(Boolean);
    
    // console.log("after deleting:"+JSON.stringify(k))
    localStorage.setItem('lc',JSON.stringify(k)); 
    showlist();
}


function save(text_save,value_save){
    let l=JSON.parse(localStorage.getItem("lc"));
    if(l===null){
    tasklist=[];}
    else{
        tasklist=l;
    }
    tasklist.push([text_save,value_save]);
    localStorage.setItem('lc',JSON.stringify(tasklist));
    console.log(tasklist);



}
showlist();
function showlist(){
    let k=JSON.parse(localStorage.getItem("lc"));
    if(k!=null){
   
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