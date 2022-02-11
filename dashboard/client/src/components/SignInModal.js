import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export default function SignInModal() {
    const { modalState, toggleModals, signIn } = useContext(UserContext)

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([])


    const googleProvider = new GoogleAuthProvider();
    const googleAuth = getAuth();

    const signInWithGoogle = async (googleE) => {
        googleE.preventDefault()

        try {
            signInWithPopup(googleAuth, googleProvider)
            .then((googleResult) => {
                const googleCredential = GoogleAuthProvider.credentialFromResult(googleResult);
                const googleToken = googleCredential.accessToken;
                const googleUser = googleResult.user;
                closeModal()
                navigate("private/private-home")
            }).catch((googleError) => {
                const googleErrorCode = googleError.code;
                const googleErrorMessage = googleError.message;
                const googleEmail = googleError.email;
                const googleCredential = GoogleAuthProvider.credentialFromError(googleError);
                setValidation("Error with Google Authentifaction please retry.")
            });
        } catch (googleErr) {
            setValidation("Error with Google Authentifaction please retry.")
        }
    }


    const gitHubProvider = new GithubAuthProvider();
    const gitHubAuth = getAuth();

    const signInWithGitHub = async (e) => {
        e.preventDefault()

        try {
            signInWithPopup(gitHubAuth, gitHubProvider)
            .then((gitHubResult) => {
                const gitHubCredential = GithubAuthProvider.credentialFromResult(gitHubResult);
                const gitHubToken = gitHubCredential.accessToken;
                const gitHubUser = gitHubResult.user;
                closeModal()
                navigate("private/private-home")
            }).catch((gitHubError) => {
                const gitHubErrorCode = gitHubError.code;
                const gitHubErrorMessage = gitHubError.message;
                const gitHubEmail = gitHubError.email;
                const gitHubCredential = GithubAuthProvider.credentialFromError(gitHubError);
                setValidation("Error with GitHub Authentifaction please retry.")
            });
        } catch (gitHubErr) {
            setValidation("Error with GitHub Authentifaction please retry.")
        }
    }


    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault()
        
        try {

            await signIn(
            inputs.current[0].value,
            inputs.current[1].value
            )
            closeModal()
            navigate("private/private-home")

        } catch (err) {
            setValidation("Email and/or Password incorrect")
        }
    }

    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }

    return (
        <>
            {modalState.signInModal && (
                <div className="position-fixed top-0 vw-100 vh-100">
                    <div onClick={closeModal} className="w-100 h-100 bg-dark bg-opacity-75"></div>
                        <div className="position-absolute top-50 start-50 translate-middle" style={{minWidth: "400px"}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Sign In</h5>
                                        <button onClick={closeModal} className="btn-close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form ref={formRef} onSubmit={handleForm} className="sign-in-form">
                                            <div className="mb-3">
                                                <label htmlFor="signInEmail" className="form-label">Email adress</label>
                                                <input ref={addInputs} name="email" required type="email" className="form-control" id="signInEmail" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="signInPwd" className="form-label">Password</label>
                                                <input ref={addInputs} name="pwd" required type="password" className="form-control" id="signInPwd" />
                                                <p className="text-danger mt-1">{validation}</p>
                                            </div>
                                            <button className="btn btn-primary">Submit</button>
                                        </form>
                                        <hr />
                                        <button onClick={signInWithGoogle} className="btn btn-primary">Sign In With Google</button>
                                        <br />
                                        <button onClick={signInWithGitHub} className="btn btn-primary mt-1">Sign In With Github</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )}
        </>
    )
}
