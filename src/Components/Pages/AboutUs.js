import Logo from '../Images/logo.jpg';
import '../Styles/About.css';

const AboutUs = () => {
    return (
        <div className='About-container'>
            <h2 style={{color:"#33313B"}}>About Us</h2>
            <div className="mt-4">
                <p>
                Shawarma Factory is your one-stop shop for all things shawarma! We are located in the heart of Colombo, Sri Lanka, at No 11 Nelson Place Colombo 06, and we offer a wide variety of shawarma dishes, including chicken shawarma, lamb shawarma, and beef shawarma. We also offer a variety of vegetarian and vegan options, so there is something for everyone at Shawarma Factory.
                <br/>
                <br/>
                Our shawarma is made with the freshest, highest quality ingredients, and it is cooked to perfection. We use a traditional rotisserie to cook our shawarma, which gives it a unique flavor and texture. We also offer a variety of toppings and sauces to choose from, so you can customize your shawarma to your liking.
                <br/>
                <br/>
                Whether you are looking for a quick and easy meal or a delicious and satisfying meal, Shawarma Factory is the perfect place for you. We offer a variety of dining options, including dine-in, takeout, and delivery. We also have a catering menu, so we can help you feed your next event.
                <br/>
                <br/>
                Come and experience the taste of Shawarma Factory today!
                </p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.3173922557974!2d79.85920047399055!3d6.872450175389434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bb9844cac25%3A0xa7a8de7cc5b1ed89!2s11%20Nelson%20Pl%2C%20Colombo!5e0!3m2!1sen!2slk!4v1695380923412!5m2!1sen!2slk"
                width="800"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    )
}

export default AboutUs;