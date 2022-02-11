import React from "react";

const CharacterGird = ({isLoading, items}) => {
    return isLoading ? (
    <h1 className="text-light">Loading...</h1>) : (
    <section className="cards text-success">
        {items.map(items => (
    <div className='card bg-dark'>
      <div className='card-inner bg-dark'>
        <div className='card d-flex justify-content-center bg-dark border border-success'>
          <div className="row">
            <div className="col-2">
              <img className="rounded mx-auto w-75" src={items.img} alt="Breaking Bad Character Image" />
            </div>
            <div className="col-4">
              <div className='bg-dark'>
                <h1 className="d-flex justify-content-center"> {items.name}</h1>
                <ul>
                  <li>
                    <strong>Actor Name:</strong> {items.portrayed}
                  </li>
                  <li>
                    <strong>Nickname:</strong> {items.nickname}
                  </li>
                  <li>
                    <strong>Birthday:</strong> {items.birthday}
                  </li>
                  <li>
                    <strong>Status:</strong> {items.status}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div> 
        ))}
    </section>
    )
}

export default CharacterGird