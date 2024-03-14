/**
 * ten, mssv, ngay, tuoi, so thich
 * 
 */
function Profile(props) {
  console.log(props.ten);
  console.log(props);
    return (
      <div className="Profile">
       <div className="Profile">
        <img alt='' src="https://www.ceepeespices.in/wp-content/uploads/2021/02/hing.png" className="image"/>
        <div className="information">
            <h2>Ten: {props.ten}</h2>
            <h2>MSSV:{props.mssv}</h2>
            <h2>Tuoi:{props.tuoi}</h2>
            <h2>Ngay: {props.ngay}</h2>
        </div>
       </div>
       

      </div>
    );
  }
  
  export default Profile;