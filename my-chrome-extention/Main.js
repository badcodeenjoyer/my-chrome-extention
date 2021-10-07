const contenteditableElements = document.querySelectorAll("[contenteditable=true]")
const inputElements= document.querySelectorAll("input[type = text]");
const iFrames = document.querySelectorAll("iframe");
    
addEventListenersOnPage();


function addEventListenersOnPage(){
    if(inputElements.length != null)
    for(let i =0 ; i<inputElements.length;i++){
        inputElements[i].addEventListener('change', function(e){
         let flag = false;  
         const div = document.createElement('div'); 
          
          div.style.position='absolute';
          div.style.display='inline'
          div.style.zIndex='999'
          div.style.top ='5px';
          div.style.left ='5px';
          div.style.backgroundColor='red';
          div.style.fontSize='20px'
          if(e.currentTarget.value.includes('Cat')===true){
          div.innerHTML = "<div id = '0' >Dog</div><div id = '1' >Rat</div><div id = '2' >Bat</div>"
          document.body.appendChild(div)
            for(let i =0 ; i<div.childElementCount;i++){
            i = i.toString();
            let divElement =  document.getElementById(i)
                
            divElement.onclick = function(){
               
                switch(divElement.id) {
                    case '0':
                        e.target.value =  e.target.value.replaceAll('Cat' , 'Dog'); flag=true
                        break;  
                        case '1':
                            e.target.value =  e.target.value.replaceAll('Cat' , 'Rat'); flag=true
                            break;
                            case '2':
                                e.target.value =  e.target.value.replaceAll('Cat' , 'Bat');flag=true
                        break;
                    default:
                        console.log('default log')
                        break;
                }
            
            if(flag===true){
                document.body.removeChild(div)
            }
            }}}
                if(e.currentTarget.value.includes('Helo')===true){
                    div.innerHTML = "<div id = '0' >hello</div><div id = '1' >Help</div><div id = '2' >Hell</div>"
                   document.body.appendChild(div)
                   
                      for(let i =0 ; i<div.childElementCount;i++){
                      i = i.toString();
                      let divElement =  document.getElementById(i)
                      divElement.onclick = function(){
                          switch (divElement.id) {
                              case '0':
                                  e.target.value =  e.target.value.replaceAll('Helo' , 'hello'); flag=true
                                  break;  
                                  case '1':
                                      e.target.value =  e.target.value.replaceAll('Helo' , 'Help'); flag=true
                                      break;
                                      case '2':
                                          e.target.value =  e.target.value.replaceAll('Helo' , 'Hell');flag=true
                                  break;
                              default:
                                  console.log('default log')
                                  break;
                          }
                          if(flag===true){
                            document.body.removeChild(div)
                        }
                        }}}

                          if(e.currentTarget.value.includes('heldp')===true){
                            div.innerHTML = "<div id = '0' >help</div><div id = '1' >held</div><div id = '2' >hello</div>"
                           document.body.appendChild(div)
                          
                              for(let i =0 ; i<div.childElementCount;i++){
                              i = i.toString();
                              let divElement =  document.getElementById(i)
                              divElement.onclick = function(){
                                  switch (divElement.id) {
                                      case '0':
                                          e.target.value =  e.target.value.replaceAll('heldp' , 'help'); flag=true
                                          break;  
                                          case '1':
                                              e.target.value =  e.target.value.replaceAll('heldp' , 'held'); flag=true
                                              break;
                                              case '2':
                                                  e.target.value =  e.target.value.replaceAll('heldp' , 'hello');flag=true
                                          break;
                                      default:
                                          console.log('default log')
                                          break;
                                  }
                                  if(flag===true){
                                    document.body.removeChild(div)
                                }
                                }}}
            }
            );              
            
    if(contenteditableElements.length != null)
    for(let i =0 ; i<contenteditableElements.length;i++){
        contenteditableElements[i].addEventListener('change',function(e){
          
        });
    }
    if(iFrames.length != null)
    for(let i =0 ; i<iFrames.length;i++){
        iFrames[i].addEventListener('change',function(e){
            
            
        });
    }
     }
 }

