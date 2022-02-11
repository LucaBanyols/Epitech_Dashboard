import React, {useState} from "react";

const BBSearch = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input
                type="text"
                className="bg-dark form-control text-success border border-success"
                placeholder="Search for a character"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default BBSearch