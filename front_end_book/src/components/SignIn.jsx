import { useEffect, useState } from "react";
export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form
        id="signin-modal"
        >
            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Sign In" />
            <p>Create an Account</p>
            <s>&times;</s>
        </form>
    )
}