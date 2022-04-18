import React from 'react';

const About = () => {
    return (
        <div style={{ minHeight: "80vh" }}>
            <h1 className="text-center">About me</h1>
            <div style={{ border: "2px solid gray", width: "80%", padding: "10px" }} className="mx-auto mt-5">

                <div className="p-5">
                    <h4><i>Anik Dev</i></h4>
                    <p>Hi..! This is Anik. I am a newcomer in this field. Not that new..it's been 3 long months. But not long enough if we focus on this. My goal is to see myself as a professional web developer in some years. Though the technology is evolving simultaneously day by day. So basically my current goal is to adapt myself with this amazing technolgies that's beeing evolved day by day. Let's hope for the best. I, myself believe in myself. I mean why shoudn't I? Nothings come easy without hardwork. I just need to be patient enough and give my all to this.</p>
                </div>
            </div>
        </div>
    );
};

export default About;