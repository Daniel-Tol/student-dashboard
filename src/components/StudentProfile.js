// student profile function
function StudentProfile(props) {
  return (
    <div className="container-filter-student">
      <p className="student-profile">
        {props.firstName} {props.lastName}
      </p>
      <p className="student-profile-border">{props.phoneNumber}</p>
      <p className="student-profile">{props.emailAddress}</p>
    </div>
  );
}

export default StudentProfile;
