export default function Login() {
    return (
        <div className="login-box">
            <div className="login-text-box">
                <h1>Thrive in Chaos Fitness</h1>
                <h2>Fitness Tracker</h2> 
            </div>
            <div className="login-form-box">
                <form className="login-form">
                    <label className="email label">E-mail</label>
                    <input className="email input" type="text"></input>
                    <label className="password label">Password</label>
                    <input className="password input" type="password"></input>
                </form>
            </div>
        </div>
    )
}