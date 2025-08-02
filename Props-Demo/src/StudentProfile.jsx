import PropTypes from 'prop-types';

export default function StudentProfile({name, age, IsDue, GithubLink}) {

    // Default to an empty array if hobbies is not provided
    //Validation of props using PropTypes
    StudentProfile.propTypes = {
        name: PropTypes.string.isRequired,      
        age: PropTypes.number.isRequired,
        FeesPaid: PropTypes.bool.isRequired,
        GithubLink: PropTypes.bool.isRequired
    };

    return (
        <div className="student-profile">
            <h3>Student Name - {name}</h3>
            <h3>Student Age - {age}</h3>
            <h3>FeeIsDue - {IsDue ? "Yes" : "No"}</h3>
            <h4>GithubLink - {GithubLink ? "Rahul" : "Shalini"}</h4>
        </div>
    );
}