import { useEffect, useState } from "react";
export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <input type="submit" value="signUp" />
            <s></s>
        </form>
    )
}