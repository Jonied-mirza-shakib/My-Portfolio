import React from 'react';
import SingleHome from '../SingleHome/SingleHome';
import MyMission from '../MyMission/MyMission'
import MyHobbies from '../MyHobbies/MyHobbies'
import MyProjects from '../MyProjects/MyProjects'
import ContactMe from '../ContactMe/ContactMe'
import MySkill from '../MySkill/MySkill'

const Home = () => {
    return (
        <div>
            <SingleHome></SingleHome>
            <MyMission></MyMission>
            <MySkill></MySkill>
            <MyHobbies></MyHobbies>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;