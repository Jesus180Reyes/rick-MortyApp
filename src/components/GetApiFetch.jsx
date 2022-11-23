
export const GetApiFetch = ({ rickMory = [] }) => {
    return (
        <>
            {
                rickMory.length
            }
            {

                rickMory.map((rick, i) => {
                    return <div key={i} className="grid-container">

                        <h1>{rick.results.map(({ name, image }, i) => {
                            return <div key={i} className={`card-container animate__animated animate__fadeIn animate__delay-${i}s`}>
                                <h1>{name}</h1>
                                <img src={image} alt="" />
                            </div>
                        })}

                        </h1>
                    </div>

                })
            }
        </>
    )
}
