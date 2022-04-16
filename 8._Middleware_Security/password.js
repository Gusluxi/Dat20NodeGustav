import bcrypt from "bcrypt";
const saltRounds = 12;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$12$XRR8wJWNcb5dbKRdBMRn/egIWjQWcjVoDGQkDW0.7fBMNPSzWCPj."

async function loginRouter() {
    const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
    console.log(isSame);
}

async function signupRouter() {
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds)
    console.log(hashedPassword);
}

signupRouter();
loginRouter();