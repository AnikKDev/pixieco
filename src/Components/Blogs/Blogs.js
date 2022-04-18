import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className="container" style={{ minHeight: "80vh" }}>
            <h1 className='text-center blog-title'>Blogs</h1>
            <div>
                <div>
                    <h3>Differences between authentication and authorization.</h3>
                    <p>To simply put, authorization is a process that helps to check what actions can a user perform or limiting the actions that a user can perform. On the other hand, authentication is a process that checks if a user is allowed to perform any action by all means. Authentication helps to identify a true user and authorization controls the acess a user can get. For example we can call a user authentic if he/she provides correct information and log into a site. And to limits or controls that very user's access on that site is what we call authorization.</p>
                </div>
                <hr />
                <div>
                    <h3>Why do we use firebase? what other options do we have to implement authentication?</h3>
                    <p>Goggle firebase is a application development based software of google. It enables a developer to create and develop apps such as web application, unity, iOS, android application etc. It also ptovides authentication of a web app. Google firebase provides hosting as well. It can even analysis the behavior of an app which is being developed through it. Some alternative options of firebase are, Auth0, MongoDB, Passport, Okta, JSON Web Token etc.</p>
                </div>
                <hr />
                <div>
                    <h3>Apart from authentication, what other services does firebase provide?</h3>
                    <p>Apart from authentication firebase provides hosting,Realtime database, storage etc. It can analysis the behavior of an application that is being developed through it. As I mentioned earlier it also provides us hosting of a web application and so on. Which is a good alternative of netlify.And on top of that, it's convenient and free(!).</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;