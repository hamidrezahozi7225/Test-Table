const FA=require("react-fontawesome")
const Footer=()=>{
    return(
        <div className="footer ">
            <div className="container">
               <div className="footer-content row">
                   <div className="col-6 social_media">
                       <a href="https://www.instagram.com/hamid.hozi/" className="socialmedialink" title="Instagram"><FA name="instagram"/></a>
                       <a href="https://t.me/Hamidhozi" className="socialmedialink" title="Telegram"><FA name="telegram"/></a>
                       <a href="mailto:hozihamidreza@gmail.com" className="socialmedialink" title="Gmail"><FA name="envelope"/></a>
                   </div>
                   <div className="col-6">
                       <h4>طراح : <span>حمیدرضاحوضی</span></h4>
                   </div>
               </div>
            </div>
        </div>
    )
}
export default Footer