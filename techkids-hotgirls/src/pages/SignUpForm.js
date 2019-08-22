import React, {Component} from 'react';

class SignUpForm extends Component{
    render(){
        return(
            <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>

              <div className='FormField'>
                <label className="FormField__Label" htmlFor='name'>Full name</label>
                <input type='text' id='name' className='FormField__Input' placeholder='Enter your full name' name='name'/>
              </div>

              <div className='FormField'>
                <label className="FormField__Label" htmlFor='password'>password</label>
                <input type='password' id='password' className='FormField__Input' placeholder='Enter your password' name='password'/>
              </div>

              <div className='FormField'>
                <label className="FormField__Label" htmlFor='email'>email address</label>
                <input type='email' id='email' className='FormField__Input' placeholder='Enter your email' name='email'/>
              </div>

              <label className='FormField__CheckboxLabel'>
                 <input className='FormField__Checkbox' type='checkbox' name='hasAgreed'/>
                 I agree all statements in <a href='#' className='FormField__TermsLink'>terms of service!</a>
              </label>

              <div className='FormField'>
                <button className='FormField__Button mr-20'>Sign up</button> <a href='#' className='FormField__Link'> I'm already a menber</a>
              </div>

            </form>
          </div>

        );
    }

}

export default SignUpForm;