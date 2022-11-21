import React from 'react'

function Content(props) {
  return (
    <div>
    <div className="main">
    <div className="AboutandImage">
        <div className="about">
            <h1>Salam Alaykom {props.test}</h1>
            <h2 style = {{color:props.color}}>This is Hasan Abu Hashem</h2>
            <h3>Am Full Stack developer, With Chemical Engineering Background</h3>
            <p>located in Amman, Jordan, who had been graduated from the University of Jordan,have a serious passion about new technologies and learning web languages and thier developments.
                Well-Orginised with high level of details caring, a movies big fan, then the rest of the intrest will be divided evenly between coins collecting, soccer and Health.</p>
        </div>
      
    </div>
  </div>
  <div className="cont-A">
  <div className="main2">
    <div className="Qualif">
        <div className="intro"><h2>Qualifications</h2></div>
        <div className="content">
            <div className="qu1"><div className="img-logo"><a href="https://saltacademy-schools.com/"><img className="pic-1" src="data:image/jpeg;base64,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" alt="sas-logo" /></a>
            </div><div className="text-con">    <h3>Scientific Stream</h3>
                        
                <a href="https://saltacademy-schools.com/"><h4>Salt Academy School</h4></a>
                
                <p>2010-2011</p>
                <a href="https://goo.gl/maps/o7zUKQWNFPT2q7Qg6">
                    <p><i className="fa-solid fa-location-dot"></i> Salt-Jordan</p>
                </a></div></div>
                <div className="qu1"><div className="img-logo"> 
                </div><div className="text-con">          <h3>Chemical Engineering</h3>
                    <a href="http://ju.edu.jo/Home.aspx"><h4>The University of Jordan</h4></a>
                    
                    <p>2012-2018</p>
                    <a href="https://goo.gl/maps/LTJD4C7E7UeoJHxy8">
                        <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                    </a>
                </div>
                </div>
            </div>
        </div>
    <div className="exps">
        <div className="intro">
            <h2>Experiences</h2>
        </div>
        <div className="cont">
            <div className="exp1">
                <div className="qc">
                    <div className="wr-txt-1">
                        <a href="http://centers.ju.edu.jo/ar/weec/Home.aspx"><img src="imgs/33.png"
                                alt="wr-logo" /></a>
                    </div>
                    <div className="wr-txt-2">
                       
                            <h3>Practical Trainer</h3>
                            <a href="http://centers.ju.edu.jo/ar/weec/Home.aspx">
                        <h4>The Water, Energy and Environment Center</h4> </a>
                        <p>06/2018 - 09/2018</p>
                        <p>Solving real problems in water management, treatments and reuse groundwater management,
                            irrigation and hydro- logical monitoring</p>
                        <a href="https://goo.gl/maps/LTJD4C7E7UeoJHxy8">
                            <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                        </a>
                    </div>
                </div>
                </div>
                <div className="exp2">
                <div className="jvs-text-1">
                    <a href="https://ar-ar.facebook.com/jordanvalleymarket/"><img
                            src="imgs/Jordan Valley Supermarket.jpg" alt="jvs" /></a>
                </div>
                
                <div className="jvs-text-2">
                    
                        <h3>Procurement Officer</h3>
                        <a href="https://ar-ar.facebook.com/jordanvalleymarket/">
                    <h4>Jordan Valley Supermarket</h4></a>
                    <p>09/2018 - 12/2019</p>
                    <ul>
                        <li>Responsible of purchasing orders</li>

                        <li>Oversee inventory process and reporting</li>
                    </ul>
                    <a href="https://goo.gl/maps/KB4CTZZFFndSZPwV8">
                        <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                    </a>
                </div>
            </div>
        <div className="exp3">
            <div className="Armex-txt-1">
                <a href="https://www.aramex.com/jo/en"><img
                        src="data:image/png;base64,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"
                        alt="armex-logo" /></a>
            </div>
            <div className="Aramex-txt-2">
                
                    <div className="first-Postion">
                        <h3>CRM Team Leader * Domestic E-commerce </h3>
                        <a href="https://www.aramex.com/jo/en">
                <h4>Aramex-Delivery Unlimited</h4> </a>
                <p>09/2019 - 05/2020</p>
                <ul>
                    <li>Supervising & Monitoring the process</li>
                    <li>Following up with the shippers</li>
                </ul>
                
                <a href="https://goo.gl/maps/TpaTLu3F1FkCmrEk6">
                    <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                </a>
            </div>
            </div>
            </div>
            
             <div className="exp4">
                <div className="Armex-txt-1">
                    <a href="https://www.aramex.com/jo/en"><img
                            src="data:image/png;base64,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"
                            alt="armex-logo" /></a>
                </div>
                <div className="Aramex-txt-2">
                    
                        <div className="first-Postion">
                            <h3>Team Member I * Ground Operation </h3>
                            <a href="https://www.aramex.com/jo/en">
                    <h4>Aramex-Delivery Unlimited</h4> </a>
                    <p>05/2020 - 08/2020</p>
                    <ul>
                        <li>Senior Team leader for Domestic E-commerce</li>
                        <li>Coordinating the communications between the shippers and end user</li>
                    </ul>
                    
                    <a href="https://goo.gl/maps/TpaTLu3F1FkCmrEk6">
                        <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                    </a>
                </div>
                </div>
                </div>
                <div className="exp5">
                    <div className="Armex-txt-1">
                        <a href="https://www.aramex.com/jo/en"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACACAMAAACGCqRmAAAA1VBMVEXuLiT////9MSb1iYLuKiHuKRntJh3tIRf6v7HuLyXtHRLuKx3uMiPvQC36wrb7z8370sX2ko396N/+9vD94+LxTzvyYVn5sqLxV0/wRzb0e2r7zL/4ppb3n5TvNi3++PTyX033npr4qZfxWEbzalr94dj+7+jzb2H1hnf//vb81tT5tbP4rKHxTUT+7+v828/2kH/3mYj5uaz2loP0eGX0d3D1iXr96tvyXkzzalXsEQb1g3n3oYzzcV75sanwRzzzbGT7ybj6xcT3mpf3nYnyWlT8iIHeNOn4AAAPQElEQVR4nO2cCXfauBbH0Yusi2WbUlwPY5utMWtL2EIp0NJMt/f9P9KTvEk2JrGGZF7mHP/PaYptrT9J11cL1GqVSuo/N//vEvyLVMFSUAVLQRUsBVWwFFTBUlAFS0EVLAVVsBRUwVJQBUtBFSwFVbAUVMFSUAVLQRUsBVWwFFTBUlAFS0EVLAVVsBRUwVJQBUtBFSwFVbAUVMFSUAVLQRUsBVWwFFTBUlAFS0EvCwtj/JLJX8z2hdJVh0WAAhOFuEg4VuYq/Ahg1LBGSVp2XCZqckWisCRT8+K7udJphsb+ZoJgnE39qfvFUoSFQXOHN53ObefmYAHwW0aizIVeA3PSrTf99iowiM6fAViHGxazczN8NCoO69zbf+ne3na/BAakFSFgxncHOpDC0lkHFqDe7rz9FPQgjamL1A0pvE7Su6b+7LDAGG4WKFZrvgdCnHqse1Z63E0uDDpsxuH6/pA9Au3QHidRx+2BRrDbjkN/NXHNuG/EV3uCwemOZknsbQRbx+Cul/3o7mx5b8EZKnPSHs+SPPqj+dCIwmDza5J4wxPRdBgkhW/cmiX6lgosDEEDyerPLRokFz7r9+RDfFGn91K4E9TAqWeioo1LH5KKLVlJtTTpLTVXthy07oLOe8FuLN8dnUCun060tHlS+UMtBA0TUeY9JJ2IWKP0tpdHfx0s1rI7O1+a0d5N7jU4rDdJ/TpSoCnF1BvnYqLxqZfca3JYKcxDL1/pJaMFVo42Qju5gmC188+52mbIhq5FYmY8gLEmYnTKsFKAhbVOQWHs22RYZmD1pSBzINo9Ole/0yqEdb88C7q0wDrrNqwVRBXBOY8VRXU4LWz66Z3bOBb1RCCzwAJeAQtDEStJGVhyaU0Cq8ejZmH1C0LMNb/gru3EddQhaBU8D9UKaYEjuvYWIrzpHTuAMva9PCzYPV7hS7D6AcD2iahZWEWyvxfebmsRK+KOCp+HGrncbkn9aMxtIDEE/lWpQVgalg77ogaXdQHWmsqNWqynYV2Q7YZdCxuZfjez7Yxx9bk3gkFYqAa7IVmxhlbSiy0JCxsZkzFq3Lb9HIIzWKP15I/dbY9om7OouTFTAGvstzcFvWXZ2PgyiE/RiJJMor3x9o4TTDpSHmHPIT2R3orCIb1ouaUMVnlYIDoxe+sPTE3TDMvLAMzDapvc2dYwDKVA9aFJNI1Yk0xXOIPVX7tEAzP/CvUHJiGGI8H/GmJwBL+2wzIlhDAPeJ2OhTHHocMhvdEPTEHuVHIQloUldyx7G3vGhJqiK5/Bamhxe0kU+lMtioqpsZOGdR6WfaAkzGCQGU6dyJkHaUBteDjx6ulPaVpzQg8p65CpPPKaAngHSk8ly8GCgajIgIrpB5WsfhYW8/3iMHeiPU8iKqaS1c/BYuHiUFRujU0ywyFWSuENz9RNL1dUrjgdJFm3LFI7M22RSnoNCrBoN03co9J9TCWrmYEVGtWQs+C5ohfSzMFqp+EkDvwdltyGeXLzXQ3XYJoWIWepaeqyhN6CXvCqsfelB2FJWFKT5MpD3HSqmIW1TipMUghLIxtVmI2cnyWVX0yCUEegpp+Smy2LwUpi2s5RA1lUSzzVb1GSVDa9BQ34HLAkJMNcQwj7kYU1icNhgSQ//RJjLAtrKc1pQYzDg+Su78X4wthK3nvjr51Uq1DTZjZN2X+ICl3Wa1CAtU8SH+VHuHhNZqc7g8S+pG+qhZWPmhrCLKxvElQxxPrSC14kymCR4GzGei77IYotz515dFdhEJaEBack9U0+cZI2cgZWOhERRHwj14jkIallFpbsTwvnf9QT0XFq4Rks+ONpVggNokR1GMjO9VZlEJaFlbbv+gyWU7jqIGCliyPx1ERIjJ8sLHm4ChK+NDix/k6CdWaHirRNEqXSPLWjxqokrDSD6RmstJGLYQlb/Otssc5MzG8W1qkQVsMohkWenLRmCq7LLssLw9qp9qxHYJELPetFYHnJMMx4D95LDMO0p3fPahw8YbP+SqKeDUPyULz497sQlhw9Cyu1EY8p7lk5v3TsvKSBb+QTFzM/ZQOvpSvSWVh/KsHCojm+3by9qCAqT2ZKUFSoZ4AlXIdeLnFhL4thSa5DfnIv+ut1sNL3sXekFxXteWTfhVz3L+CUpgN9kltTlHz7QliiXmiaKxekk9mrYAnT18gP9LN6WGerPv1BuUXSUKrTnVy/hdRkXYBVE6tZuSmr1AJXwRLt1X9inifvUKRa5n3lR1RyIi2G+i4zkQYx/b0AS7K/a3lNANPb9MF1sMS7Ojd50YmW2YqVZoZNYefbz71EI955qD+U11kkD+8CLOKK2YgnR5V8yetgESctXKY5+O7YrkeTgjCvIZ3h9gOxyqPgP5Rd/BOzf9vT0sU/scpyEZa0noL6q2TxD4z7i4t/qrCkkY5+ic1+oHvm9I6mVoxL9hpWVPJNx05Zs1V2WVms/jEsQ5MvGFteZqvuIqw7CYvPjzmwqJPMivSVsCTDyTIwouUZzelEd1srK79OyhxcLLVhaf+h7FZYftdhPs/vOlyCVctuOPKoPx7dsFCGlc2h2ZlO/vDW0r5Ga82JCq8hXGsgpmjqdcmBWBaWeEFf0kVYcrGKdS0sYhZsV0vqGBmvId5kFfRmh+feZD08sXF4ERYbJk+sOF0Li9nux5qyzked8BrmsVmT3k6jcv5D+bMO50uyZWGxOdHjoK+FxdvjMq2GSfSicw3yW6uc/6Bw5Ai8gir324UHQ7KwanRYtCndLp5I/x1YjNalsb5hrKS1hv5AbJa5iv6DyvksOJzNFsbDJ5ZokqjndbE96xlhXTpyZK80ome9Bil14T8syvgPSif/wOpkO1fdOYrDbIZ0mA05+Vmzuc4aLj/IHWb7njwpXqKRF7SxnnRnO4XFD7OdbQvamwCwXiPCH8y6CZL/sMwvEVwLq0Yg6KS9y64PDUKcTXIyEkvHJDduLmsdg/M1jdpvnJj3aGWOSa6SI4sPEmdyl9zdSYdBsT6P77YtKR8wDnOp79vNdaCF2/tWUsb65oHIHYj0kiLUvx+etvGqp5UJ9AbT9+3N/O3JDd1xrMWKTtEmV8VR99OfPOr2IfLk5ah6GhVL1dFF8plRYsiZpsIAvWD79v28/f7n7uSYycxQpJ1JXE5e08ynK/93jnYD1TRKi44LPyEcHrymuWPXzyqeBaU8jxfIpPqGhYIqWAqqYCmogqWgCpaCVGExf0m8fdlF+E4Epd23ojQvJ/NY2jq5LmNVqcLCDyvhb2J3tTphXPOm+jWvaezer041bHrTM18H96aemW0hSWR4XcaqUoUFEyRcXRJ8Rk0D62PUU3e6hHgyvkHMMbLyVScuGpsYO7dBUQb0x+wsxkvqb8AaSOU2mwxWbXtlA5txMt5ZMlj3tiaf8A6KBhz9aL9aWJifPIxgEQjNDAaf1ZJQNpOP/WWCo3DhdAZj9jH54iNO9qhxfKWzBzwonzIlyej8MY+th0/YJU+bZRpE38eM840Lc3y1sHRi/DmdukMOC9y/Vl8CDdeI39R0x3FruhPO2rHr1oj5+8tqaLIZq2uZk6nrhhXClhOaHT28xD1Hx5ZFLW/HksEGg8WT0Vk6Jux3QwP07WrARniYtjVFW5d9iPK9YxM8Hczh6pP57bXCIr06su3ZaDYgmjdGLXvWwZjBAuezPdJ7n/mCE7Faber6aNxCS4fAxm8gdNos+egyGuG5Tmx95gfiYPrZob+a07E9Rh2Dw4KHsb20iDv61eb3DqMZ+0sfPtvfDetzn+Vs34M2jfJlvTBYIha31XqlsLQ52vWsyRIN6B41HdPqIg94z+odGqhH68gl/KzHhPrIs8xhv2nAD9Qc/mlM+aldchcdV8KWzf+HFXJoF9kr15yzxwZP5tSwLXDHqDkwu2i2uTM3KKidmiNTP3xF96ftAwyQz/Kdoy2YI/vQc3eL8euERdx+nRJyZMPwOEfuEajW+sFraeDjWwZryI9AaX7LCFD3yMzJmtF4886kwCJugO/aBTKs3YzBspklAnfWpVEyXQ7LbmgADppTgD36ROlmZGKWacASgm/IpUCNReM4Qd4Rk1drs+B3eHqOvw2pv3Bdx7E+tIzQwNOfzHUwW6wrOQzUJ9ax2EPWn45vPnA+sOlb4WOejAyrw7wCNnLtjxEsiGDNaY046CflnXFFgcOKXsHYWPJ8XevDkqHnS7Gv9m3IXt9/xLDgOzchto1GpoDFu85xxf59iR7O0CSBxTrd8RCfvcvCsopgAYf1PoR1DzIsc9mP8l1qHT7oXzGsSfhFgBCWP/a4tgeTpLCIM1vTUdOgX9CvLX+4faARLGyOm3Qen2O/DtZiG+X72mFpd2hNdd5NBrSxMPjX45gLxA18BIvZqyXvPizA9sgfHglEsGrQRYdFvOHAYbFk6DQHy+ewxoWwDA5rT7g3tuC/okGPFL4gfhbr1cJi7Tq2mHndMQN/w8wrULOzJcRfaoS+Rybo7E3YXLgEu31fY+G8To8msAK0TL6fgs1Fk1IafOhnYDWXzNR3bZOew2pphM+xjqCxkc7agVq3E2YcNywV+PFKYbE+NRtNvcaMDcPeEnW83ZJZfLhF3wI28hq/gZ+I590H7pE/9b4h36Qf3kV2yvCZeUt2Q+/RxpvbLdaz5rMQFvpIoY02D6wdGoHFv40SwYI79AtYr9zcMdoftp22aY1Q19uNmOsAa9Twpk30WmHVYOAvFs1TJyDEnY8XC39oMIdi0zqBedv6xPyGVZ3PhLAxXS4WrbWJybobnxH2xJlwjNfLZXPitF3w+EYWtto75l5sRnvo3ba2ZnvKBpxbZ29e8lA/EdLbtA5Apq3FuG2B0w7z1dhsyWOZbE63rxVWDYxezwAj3NDU+cdwDsRXUKKdL8OIbDjgXk9n0zs9+eEXuoqcLC426avpBhCDfTLiaDpLphYnY4SLMcnfJBDLT2eznDTfKBMNslthLy2lVQfp14CknyNK/9TOH3IRaowy3zXM/aaQFBdnU5KfJNNx+UeRFIr+LHr5ZWV8mm7Ov/Pzr9SLw8LG99m4U+Y3hF6//oENC9exlL4v+nr1D8DCL7dZ/w+r2gpTUAVLQRUsBVWwFFTBUlAFS0EVLAVVsBRUwVJQBUtBFSwFVbAUVMFSUAVLQRUsBVWwFFTBUlAFS0EVLAVVsBRUwVJQBUtBFSwFVbAUVMFSUAVLQQzWfyqV1ZfaTaWS+u/H/wGtvmkd8e74cAAAAABJRU5ErkJggg=="
                                alt="armex-logo" /></a>
                    </div>
                    <div className="Aramex-txt-2">
                        
                            <div className="first-Postion">
                                <h3>Operation Executive- Express operation</h3>
                                <a href="https://www.aramex.com/jo/en">
                        <h4>Aramex-Delivery Unlimited</h4> </a>
                        <p>08/2020 - 07/2021</p>
                        <ul>
                            <li>Generate daily & weekly reports from multiple systems to analyze processes and identify
                                potential areas of improvemen</li>
                            <li>Training new employees</li>
                            <li>Monitoring auditing process</li>
                        </ul>
                        
                        <a href="https://goo.gl/maps/TpaTLu3F1FkCmrEk6">
                            <p><i className="fa-solid fa-location-dot"></i> Amman-Jordan</p>
                        </a>
                    </div>
                    </div>
            

            </div>
            

        </div>
       

            </div>
            
            <div className="skills">
              <div className="sk-txt">
                <h2>Skills</h2>
              </div>
              <div className="con-3">

            
              <div className="js">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/595px-Javascript-shield.svg.png?20180912181046" alt=""/>
          
            </div>
                
          

            </div>
            <div className="soft-skl">
                <div className="soft-skl-txt"> <h2>Soft Skills</h2></div>
                <div className="con-5">
                    <div className="wup">
                        <img src="Imgs\wup.jpg" alt=""/>
                        <h3>Work Under Pressure</h3>
                    </div>
                    <div className="Tnt">
                        <img src="https://www.bucksandberks.co.uk/File.ashx?path=Root/Images/Blog%20Images/Team_vs_Leader.jpg" alt=""/>
                    <h3>Team and Leadership</h3>

                    </div>
                    <div className="da">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5pzrpXLZNvYhD3SIazAu2StY8RkvGD-Y9g&usqp=CAU" alt=""/>
                        <h3>Data Analysis</h3>

                    </div>
                </div>
            </div>
            </div>
        </div>
        
</div>


  </div>
  )
}

export default Content