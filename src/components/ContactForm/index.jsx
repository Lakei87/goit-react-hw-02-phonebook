import { Component } from 'react';
import styles from './contactForm.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.resetForm();
    };
    
    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { name, number } = this.state;

        return (
            <form className={styles.contactForm} name="phoneBook" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        className={styles.contactForm__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Phone
                    <input
                        className={styles.contactForm__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleChange}
                    />
                </label>
                <button
                    className={styles.contactForm__btn}
                    type="submit">
                    Add contact
                </button>
            </form>
        );
    };
};

export default ContactForm;