export const initComment = ()=>{
    const comment = document.querySelector('.comment__container')
    const title = document.createElement('h1')
    title.textContent="發表一篇文章"

    

    
    const label = document.createElement('label')
    label.textContent="文字內容"
    const input = document.createElement('input')
    input.placeholder="選擇一張圖片後送出"
    input.className="text__input"
    input.id="text__input"
    label.appendChild(input)
    
    
    
    const imgLabel = document.createElement('label')
    imgLabel.className="img__label"
    imgLabel.textContent="圖片檔案"
    const imgInput = document.createElement('input')
    imgInput.accept="image/*"
    imgInput.type="file"
    imgInput.className="img__input"
    imgInput.id="inpFile"
    imgLabel.appendChild(imgInput)
    


    const submitBtn = document.createElement('button')
    submitBtn.className="btn"
    submitBtn.id="btnUpload"
    submitBtn.textContent="送出"
    submitBtn.type="button"
    const info = document.createElement('div')
    info.className="info__field"


    const posts = document.createElement('div')
    posts.className="posts__section"

    comment.appendChild(title)
    info.appendChild(label)
    info.appendChild(imgLabel)
    info.appendChild(submitBtn)
    comment.appendChild(info)
    comment.appendChild(posts)


 


}