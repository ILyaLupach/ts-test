import React from 'react';
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <div className='container'>
            <h1>Страница Информации</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sed officiis dolorem unde natus rem vel. Vitae harum corrupti, commodi eum blanditiis, assumenda similique sapiente facere ducimus incidunt laborum delectus minima ipsa eveniet. Eaque facilis, totam corporis recusandae debitis nostrum nulla fuga mollitia at rerum cumque amet? Ipsam, nulla. Necessitatibus libero nostrum, saepe laboriosam delectus quis dolor. Porro maxime repudiandae ea hic natus consequatur nihil, sint repellat nesciunt dolore excepturi ab consectetur ipsa sapiente necessitatibus doloribus laudantium quaerat eligendi fugit soluta optio incidunt eos. Corporis placeat, itaque unde repellendus, modi in suscipit fuga ipsa voluptates, at dignissimos asperiores dolor cumque.</p>
            <button className='btn' onClick={() => history.push('/')}>
                обратно к списку дел
            </button>
        </div>
    );
}

export default AboutPage;
