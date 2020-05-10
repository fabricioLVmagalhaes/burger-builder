import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './ContactData.module.css';
import axios from '../../axios-orders'
import Input from '../../components/UI/Input/Input'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Fabricio Magalhaes',
        address: {
          street: 'Teststreet',
          zipCode: '454545',
          country: 'Germany',
        },
        email: 'slakfjlas@lkdfjl.com',
      },
      deliveryMethod: 'para ontem!',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
          <Input
            inputtype="input"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <Input
            inputtype="input"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <Input
            inputtype="input"
            type="text"
            name="street"
            placeholder="Your street"
          />
          <Input
            inputtype="input"
            type="text"
            name="postal"
            placeholder="Your postal code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
    );
    if(this.state.loading){
      form = <Spinner />
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
