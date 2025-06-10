import "./CoursesPage.css";
const CoursesPage=()=>{
 return(
<div className="content">
     <div className="page-container"> 
        <h1>Our Academic programs</h1>
        <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
        <h2>discover campous Life</h2>
        <div className="video-container">
            <video src="" className="course-video"></video>
            <p className="video-caption">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
          
        </div>
          <h2>Undergraduate Programs (UG)</h2>
            <ul>
                <li><b>Bachelor of Science (B.Sc.)</b></li>
                
                <li>Information Technology (3 years)</li>
                <li>Biotechnology (3 years)</li>
                
            </ul>
        <ul>
            <li><b>Bachelor of Commerce (B.Com)</b></li>
            <li>Accounting & Finance (3 years)</li>
            <li>Banking & Insurance (3 years)</li>

        </ul>
        <ul>
            <li><b>Bachelor of Arts (B.A.)</b></li>
            <li>English Literature (3 years)</li>
            <li>Psychology (3 years)</li>

        </ul>
     </div>
     
     <h2> Postgradute Program (PG)</h2>
        <ul>
         <li><b>Master of Science (M.Sc.)</b></li>
         <ul>
              <li>Computer Science (2years)</li>
               <li>Information Technology (2 years)</li>
                
         </ul>
         <li><b>Master of Commerce(m.com)</b></li>
         <li><b>Master of Arts (M.A.)</b></li>


        </ul>







     <h2>Program Details & Fee Structure (Annual)</h2>
     <table className="admissions-table">
        <thead>
            <tr>
                <th>Program Type</th>
                <th>Cource Name</th>
                <th>Duration</th>
                <th>Annual Fee(INR)</th>
                <th>Eligibility</th>
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td>UG</td>
                <td>B.sc Computer Science</td>
                <td>3 years</td>
                <td>$ 85,000</td>
                <td>10+2 with PCM (50%)</td>
            </tr>
            <tr>
                <td>UG</td>
                <td>B.com Accounting & Finance</td>
                <td>3 Years</td>
                <td>$ 70,000</td>
                <td>10+2 Commerce (45)</td>
            </tr>
            <tr>
                <td>PG</td>
                <td>M.sc Information Technology</td>
                <td>2 Years</td>
                <td>$ 95,000 </td>
                <td>B.sc IT/CS(50%)</td>
            </tr>
        </tbody>
     </table>

         <h2>Specialized & Vocational Courses</h2>
         <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

         <div className="call-to-action">
             <p>Have questions about a specific course?</p>
             <a href="#" className="btn">Inquire about courses</a>

         </div>
     </div>
 )
}
export default CoursesPage;