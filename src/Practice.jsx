import Btnbutton from "./Component/Btnbutton"


function Practice() {


  function foo() {
   return alert("hellooo")
  }
    return(
        <>
      <Btnbutton
      onbtnclick={()=>foo()} 
      lable="Helloo"
      />
      <Btnbutton 
      lable="heyy"
      /><Btnbutton 
      lable="okay"
      /><Btnbutton 
      lable="byee"
      />
        </>
    )

}

export default Practice
