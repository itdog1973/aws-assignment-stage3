


let responseData;


export const initSubmit =  ()=>{

 

    const btnUpload = document.getElementById('btnUpload')

    const endpoint = '/api/comment'

    btnUpload.addEventListener('click', function(){
        let h = new Headers();
        h.append('Accept','application/json')

        const formData = new FormData();

        formData.append('imgFile', document.getElementById('inpFile').files[0])
        formData.append('comment', document.getElementById('text__input').value)
        
        // let json = convert2Json(formData);

        let req = new Request(endpoint,{
            method:"POST",
            headers: h,
            mode: 'no-cors',
            body: formData
        });

        fetch(req)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            responseData=data;
            renderPage(responseData)
        })
        .catch(err=>{
            console.log(err)
        })
         
    })

}



export function renderPage(result){

    let postContainer = document.querySelector('.posts__section')
    postContainer.innerHTML=""

    

    result.reverse().forEach(data=>{


        let text = document.createElement('div')
        text.textContent=data['details']
        text.className="item__txt"
        let img = document.createElement('img')
        img.className="item__img"
        img.src=data["images"]
        


        let item = document.createElement('div')
        item.className="item"
        item.append(text,img)

        postContainer.appendChild(item)


    })
}
    
export function fetchFunction(){


   let endpoint ='/api/comment'

   
    fetch(endpoint)
        .then((res)=>res.json())
        .then((data)=>{
            responseData=data
            renderPage(responseData)
        }).catch(err=>{
            console.log(err)
        })




}
