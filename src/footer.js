import React from "react";
class Footer extends React.Component {
  constructor(props){
    super(props)
this.state={

  className:"red"
}
}
    render() {
  return (
    <div>   <div class="footer">
        
            <div class="mix">
        <div class="final"> 
        <h1 style={{color:this.state.className}}> test93 </h1>         
            <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp" style={{color:"green"}}></i></a>
            <a href="https://github.com/HasanChe93"><i class="fa-brands fa-github" style={{color:"white"}}></i>lin</a>
            <a href="https://www.linkedin.com/in/hasan-abu-hashem/"><i class="fab fa-linkedin" style={{color: "#0A66C2"}}></i></a>
          </div>
          <p class="copyright">&copy; 2022 <span>Hasan AbuHashem</span> All Right Reserved</p>
        </div></div>
        </div>
  )
}}

export default Footer