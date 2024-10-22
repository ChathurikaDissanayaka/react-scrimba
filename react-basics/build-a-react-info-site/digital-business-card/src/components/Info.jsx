import avatar from '../assets/image.png'
function Info(){
    return (
        <main>
            <img src={avatar} alt="avatar" className='img' />
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <p>laurasmith.website</p>
            <div>
                <button className="email"><i className="fa-solid fa-envelope"></i> Email</button>
                <button className="linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </main>
    )
}

export default Info