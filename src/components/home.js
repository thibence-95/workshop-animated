import React from 'react';
import {useSpring, animated} from 'react-spring';



const Home = ({name, paragraph, authorImage}) => {

    const [, setY] = useSpring(() => ({ y: 0 }))

    return(
    <div>
        <div className="home_container">
            <div className="home_head_wrapper">
            < h1 > Hello I'm <br></br> <span>{name}</span></h1>
            <p>{paragraph}</p>
            </div>
            <div className="image_container">
                <img src={authorImage} alt="Author"></img>
                <div className="bg"></div>
            </div>
        </div>
    <div style={{
        backgroundColor: "black",
        color:"white",
    }}>
        <button
            className={"backToTop"}
            onClick={() => {
                setY({
                    y: 0,
                    reset: true,
                    from: { y: window.scrollY },
                    onFrame: props => window.scroll(0, props.y)
                })
            }}
        style={{zIndex:1, position: "fixed", bottom: 1, right: 2, marginBottom: 10, marginRight:10}}>
            back to top
        </button>
        </div>
    </div>
    )
}

export default Home;