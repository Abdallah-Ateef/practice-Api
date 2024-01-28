
function getallposts(userid){
    let request=new XMLHttpRequest();
    request.open('Get',`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
    request.send();
    request.responseType='json';
    request.onload=()=>{
        if(request.status>=200 && request.status<300){
            let posts=request.response;
            document.querySelector('.posts').innerHTML='';
            posts.forEach(ele=>{
                document.querySelector('.posts').innerHTML+=`
                <div class="post">
                    <h3>${ele.title}</h3>
                    <hr>
                    <p>${ele.body}.</p>
                </div> 
                `
            })
        }
    }
}

getallposts();

function getallusers(){
    let request=new XMLHttpRequest();
    request.open('Get','https://jsonplaceholder.typicode.com/users');
    request.send();
    request.responseType='json';
    request.onload=()=>{
        if(request.status>=200 && request.status<300){
            let users=request.response;
            document.querySelector('.users').innerHTML='';
           users.forEach(Element => {
            document.querySelector('.users').innerHTML+=`
             <div class="user" onclick="getuserId(${Element.id}, this)">
                <h3>${Element.name}</h3>
                <p>${Element.email}</p>
            </div>
            
            `
              
           });
        }
    }

}
getallusers();

function getuserId(id,el){
    getallposts(id);
    let elementselect=document.getElementsByClassName('selected');
    for(ele of elementselect){
        ele.classList.remove("selected")
    }
    el.classList.add("selected");

}


